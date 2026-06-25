import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const ALLOWED_ORIGINS = [
  "https://socialcurrency.agency",
  "https://premium-conversation-studio.lovable.app",
];

function buildCorsHeaders(origin: string | null): Record<string, string> {
  const allowOrigin =
    origin &&
    (ALLOWED_ORIGINS.includes(origin) ||
      /^https:\/\/([a-z0-9-]+\.)*lovable\.app$/i.test(origin) ||
      /^https:\/\/([a-z0-9-]+\.)*lovableproject\.com$/i.test(origin) ||
      /^http:\/\/localhost(:\d+)?$/i.test(origin))
      ? origin
      : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Headers":
      "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Vary": "Origin",
  };
}

const systemPrompt = `You are the AI assistant for Social Currency, a creative agency. You help visitors get in touch with the team.

Your personality:
- Professional and concise (2-3 sentences max per response)
- Friendly but efficient - get to the point quickly
- Never use marketing buzzwords or jargon
- Be direct and genuine

Your role:
1. Greet visitors warmly and ask what brings them here
2. Based on their answer, ask 2-3 relevant follow-up questions to understand their needs
3. Guide them to the appropriate next step:
   - For demos or audits: Suggest booking a 15-minute discovery call
   - For project ideas or general inquiries: Collect key details and offer to have the team follow up via email

When suggesting a call, mention: "You can book a 15-minute discovery call directly - I'll share the booking link."

Keep the conversation flowing naturally. Don't ask all questions at once - have a genuine dialogue.`;

const MAX_MESSAGES = 20;
const MAX_CONTENT_LENGTH = 2000;

type SanitizedMessage = { role: "user" | "assistant"; content: string };

function validateMessages(input: unknown): SanitizedMessage[] | null {
  if (!Array.isArray(input)) return null;
  if (input.length === 0 || input.length > MAX_MESSAGES) return null;
  const out: SanitizedMessage[] = [];
  for (const m of input) {
    if (!m || typeof m !== "object") return null;
    const role = (m as { role?: unknown }).role;
    const content = (m as { content?: unknown }).content;
    if (role !== "user" && role !== "assistant") return null;
    if (typeof content !== "string") return null;
    if (content.length === 0 || content.length > MAX_CONTENT_LENGTH) return null;
    out.push({ role, content });
  }
  return out;
}

serve(async (req) => {
  const corsHeaders = buildCorsHeaders(req.headers.get("origin"));

  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    // Auth check: require a valid Supabase JWT (anon or user)
    const authHeader = req.headers.get("Authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const token = authHeader.replace("Bearer ", "").trim();

    const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
    const SUPABASE_ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY");
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");

    if (!SUPABASE_URL || !SUPABASE_ANON_KEY || !LOVABLE_API_KEY) {
      console.error("Missing required environment configuration");
      return new Response(
        JSON.stringify({ error: "Service temporarily unavailable." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    // Accept either a valid user JWT or the project's anon key (used by the public chat widget)
    let authorized = token === SUPABASE_ANON_KEY;
    if (!authorized) {
      try {
        const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        const { data, error } = await supabase.auth.getClaims(token);
        authorized = !error && !!data?.claims;
      } catch (_) {
        authorized = false;
      }
    }
    if (!authorized) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return new Response(JSON.stringify({ error: "Invalid request body" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const messages = validateMessages((body as { messages?: unknown })?.messages);
    if (!messages) {
      return new Response(
        JSON.stringify({
          error:
            "Invalid messages. Provide 1-20 items with role 'user'|'assistant' and content up to 2000 chars.",
        }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [{ role: "system", content: systemPrompt }, ...messages],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "We're experiencing high demand. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } },
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable. Please try the contact form instead." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } },
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "Something went wrong. Please try again." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Contact chat error:", error);
    return new Response(
      JSON.stringify({ error: "An internal error occurred. Please try again later." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
