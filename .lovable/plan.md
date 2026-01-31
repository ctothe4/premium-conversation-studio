

# AI Chatbot Contact Page Implementation

## Overview
Transform the contact page to feature an AI-powered chatbot as the primary contact method, with a fallback to the traditional form. The chatbot will qualify leads, handle various inquiry types (demos, audits, project ideas), and either book calls via Calendly or send structured summaries.

## Architecture

```text
+------------------+     +--------------------+     +------------------+
|   Contact Page   | --> |   Chat Component   | --> |  Edge Function   |
|  (chatbot + form |     |  (message UI,      |     |  (Lovable AI     |
|   toggle)        |     |   streaming)       |     |   gateway)       |
+------------------+     +--------------------+     +------------------+
                                   |
                                   v
                         +--------------------+
                         |   Actions:         |
                         |   - Calendly link  |
                         |   - Email summary  |
                         +--------------------+
```

## User Experience Flow

1. User lands on /contact and sees the chatbot interface
2. Bot greets with a professional, concise opening message
3. Bot asks qualifying questions to understand their needs
4. Based on inquiry type:
   - **Demo/Call requests**: Bot offers Calendly booking link
   - **General inquiries/project ideas**: Bot collects details and offers to send summary
5. Small "Prefer a form?" link below chat opens the traditional form

## Components to Create/Modify

### 1. New: ChatBot Component
**File**: `src/components/ChatBot.tsx`

- Message display with user/assistant styling
- Input field with send button
- Streaming response support (tokens appear as they arrive)
- Loading states and error handling
- Action buttons for Calendly booking
- "Send summary to email" option at conversation end

### 2. New: Chat Edge Function
**File**: `supabase/functions/contact-chat/index.ts`

- Uses Lovable AI gateway (google/gemini-3-flash-preview)
- System prompt defining:
  - Professional, concise personality
  - Inquiry qualification flow
  - When to offer booking vs email summary
- Streaming responses enabled
- Rate limit handling (429/402 errors)

### 3. Modified: Contact Page
**File**: `src/pages/Contact.tsx`

- Chatbot as primary UI element
- "Prefer a form?" toggle/link
- Collapsible traditional form section
- Maintains current styling and layout principles

## System Prompt Design

The AI will be instructed to:
- Introduce itself as Social Currency's assistant
- Ask what brings them here (demo, audit, project idea, partnership, other)
- Ask 2-3 relevant follow-up questions based on their answer
- For demos/audits: Offer to book a 15-minute call via Calendly
- For project ideas: Collect key details and offer to email a summary
- Keep responses short (2-3 sentences max)
- Never use buzzwords or marketing speak (per brand guidelines)

## Technical Details

### Chat Message Format
```typescript
type Message = {
  role: 'user' | 'assistant';
  content: string;
};
```

### Edge Function Structure
- CORS headers for browser access
- Streaming response via SSE
- Error handling for rate limits
- System prompt prepended to conversation history

### Streaming Implementation
- Parse SSE line-by-line
- Update assistant message as tokens arrive
- Handle [DONE] signal and cleanup

## File Changes Summary

| File | Action | Description |
|------|--------|-------------|
| `src/components/ChatBot.tsx` | Create | Main chatbot UI component |
| `src/components/ChatMessage.tsx` | Create | Individual message bubble component |
| `src/pages/Contact.tsx` | Modify | Integrate chatbot, add form toggle |
| `supabase/functions/contact-chat/index.ts` | Create | AI edge function |
| `supabase/config.toml` | Modify | Add function configuration |

## Design Alignment

- Chatbot container: Clean white/black background matching current aesthetic
- Message bubbles: Minimal styling, user messages aligned right, bot left
- Cyan accent for send button and bot name
- Generous padding and spacing (museum-grade minimalism)
- Typography matches existing body-regular class

## Dependencies

- Lovable Cloud (for edge functions and Lovable AI)
- No new npm packages needed (uses native fetch for streaming)

