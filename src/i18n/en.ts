/**
 * English copy. Polished British English (organisation, optimisation, catalogue,
 * personalised, fulfilment).
 */
export const en = {
  meta: {
    localeTag: "en-GB",
    home: {
      title: "Social Currency — Turn Conversations Into Customers",
      description:
        "Conversational commerce for African businesses. We build WhatsApp-powered sales systems that connect social media, conversations, payments and follow-up.",
    },
    howItWorks: {
      title: "How It Works — Social Currency",
      description:
        "Attention becomes conversation. Conversation becomes transaction. See how Social Currency connects the journey.",
    },
    solutions: {
      title: "Solutions — Social Currency",
      description:
        "WhatsApp Store, Social-to-Sale, WhatsApp Automation and Growth. Pick the problem you need solved.",
    },
    industries: {
      title: "Industries — Social Currency",
      description:
        "Restaurants, real estate, beauty, schools, retail and professional services. Different businesses, same principle.",
    },
    pricing: {
      title: "Pricing — Social Currency",
      description:
        "No mystery pricing. Start small, add more when your business needs it. Prices shown in your currency.",
    },
    about: {
      title: "About — Social Currency",
      description:
        "A conversational commerce company built for African businesses.",
    },
    contact: {
      title: "Contact — Social Currency",
      description: "Start the conversation on WhatsApp, or send us a message.",
    },
  },

  nav: {
    howItWorks: "How It Works",
    solutions: "Solutions",
    industries: "Industries",
    pricing: "Pricing",
    contact: "Contact",
    cta: "Start selling",
    menu: "Menu",
    close: "Close",
    skip: "Skip to content",
  },

  localisation: {
    utilityLabel: "Change language, country and currency",
    title: "Localisation",
    language: "Language",
    country: "Country / Region",
    currency: "Currency",
    apply: "Apply",
    cancel: "Cancel",
    note: "Language, country and currency are set separately. Change any one of them.",
    approximate:
      "Prices shown in your selected currency may be approximate. Your confirmed price appears before payment.",
    suggestCurrency: (country: string, currency: string) =>
      `Looks like you’re in ${country}. View prices in ${currency}?`,
    suggestLanguage: "It looks like you may prefer French. Continue in French?",
    useCurrency: (code: string) => `Use ${code}`,
    keepCurrency: (code: string) => `Keep ${code}`,
    useFrench: "Français",
    keepEnglish: "English",
    dismiss: "Dismiss",
  },

  hero: {
    eyebrow: "Conversational commerce for Africa",
    headlineA: "Turn conversations",
    headlineB: "into customers.",
    body: "We build WhatsApp-powered sales systems that connect social media, customer conversations, payments and follow-up. So more attention becomes business.",
    primary: "Turn my WhatsApp into a store",
    secondary: "See how it works",
    closing: "That’s conversational commerce.",
    steps: {
      post: "New post is live",
      postMeta: "Instagram · Reach 4,120",
      open: "Customer opens WhatsApp",
      openMeta: "One tap from the post",
      ask: "“Hi, is this available?”",
      askMeta: "The sale begins as a question",
      select: "Product selected",
      selectMeta: "From your catalogue",
      order: "Order confirmed",
      orderMeta: "Details captured automatically",
      pay: "Payment received",
      payMeta: "Mobile Money",
      deliver: "Delivery confirmed",
      deliverMeta: "Customer notified",
      follow: "Follow-up sent",
      followMeta: "Two weeks later, they reorder",
    },
  },

  problem: {
    headline: "Your business is already on WhatsApp.",
    lines: [
      "Your customers ask about prices there.",
      "They request photos there.",
      "They check availability there.",
      "They make bookings there.",
      "They place orders there.",
      "They send locations there.",
      "They follow up there.",
      "They recommend you there.",
    ],
    punch: "So why isn’t it built to sell?",
  },

  thesis: {
    eyebrow: "How African commerce moves",
    headlineA: "Discovery starts on social.",
    headlineB: "Business happens in conversation.",
    closing: "Social Currency connects the journey.",
    chain: "Attention → Conversation → Transaction → Relationship",
    stages: [
      { title: "Discover", detail: "Facebook · Instagram · TikTok" },
      { title: "Converse", detail: "WhatsApp" },
      { title: "Sell", detail: "Products · Orders · Bookings · Quotes" },
      { title: "Pay", detail: "Mobile Money · Card · Transfer" },
      { title: "Fulfil", detail: "Delivery · Pickup · Appointment" },
      { title: "Return", detail: "Follow-up · Offers · Reorders" },
    ],
  },

  solutions: {
    eyebrow: "Solutions",
    headline: "Pick the problem you need solved.",
    from: "From",
    perMonth: "/ month",
    viewAll: "View all solutions",
    whatYouGet: "What you get",
    delivery: {
      delivery72: "Live in 72 hours",
      delivery57: "5–7 days",
      delivery710: "7–10 days",
      deliveryOngoing: "Ongoing, monthly",
    },
    deliveryNote:
      "The 72-hour clock starts once payment and all required materials have been received.",
    items: {
      "whatsapp-store": {
        name: "WhatsApp Store",
        headlineA: "Your WhatsApp.",
        headlineB: "Built to sell.",
        copy: "Turn the WhatsApp number your customers already use into a cleaner, more organised sales experience.",
        cta: "Build mine",
        features: [
          "Business profile",
          "Catalogue structure",
          "Quick replies",
          "Customer organisation",
          "Sales messaging",
          "Click-to-WhatsApp setup",
          "Conversion pathways",
        ],
      },
      "social-to-sale": {
        name: "Social-to-Sale",
        headlineA: "Turn attention",
        headlineB: "into conversations.",
        copy: "Connect your Facebook and Instagram activity to a structured WhatsApp sales journey.",
        cta: "Connect my socials",
        features: [
          "Click-to-WhatsApp links across platforms",
          "Content built to start conversations",
          "Enquiry capture and routing",
          "Response templates",
          "Campaign tracking",
          "Monthly review",
        ],
      },
      automation: {
        name: "WhatsApp Automation",
        headlineA: "Automate the",
        headlineB: "repetitive stuff.",
        copy: "Handle FAQs, qualification, bookings, orders and routing automatically. While keeping a human available when needed.",
        cta: "Automate my WhatsApp",
        features: [
          "Automated FAQs",
          "Lead qualification",
          "Bookings and orders",
          "Conversation routing",
          "Human handover",
          "Reporting",
        ],
      },
      growth: {
        name: "Growth",
        headlineA: "Keep the machine",
        headlineB: "moving.",
        copy: "Acquisition, campaigns, optimisation, follow-up and continuous improvement.",
        cta: "Help me grow",
        features: [
          "Acquisition campaigns",
          "Content and offers",
          "Conversion optimisation",
          "Follow-up sequences",
          "Monthly reporting",
          "Continuous improvement",
        ],
      },
    },
  },

  demo: {
    headlineA: "Don’t read about it.",
    headlineB: "Try it.",
    copy: "Scan the code. Pretend you’re ordering dinner.",
    qrPending: "Demo code coming soon",
    qrNote: "The live demo number is being connected.",
    open: "Open the demo on WhatsApp",
    closing: "That entire journey can be adapted to your business.",
    cta: "Build this for my business",
    journey: [
      { label: "Restaurant", line: "Welcome to Chola Kitchen 👋" },
      { label: "Menu", line: "1. Mains  2. Grills  3. Drinks" },
      { label: "Category", line: "You picked Grills" },
      { label: "Product", line: "Half chicken + nshima · K95" },
      { label: "Order", line: "Quantity 2 · Total K190" },
      { label: "Location", line: "Pin received. Kabulonga." },
      { label: "Payment", line: "Mobile Money confirmed ✅" },
      { label: "Confirmation", line: "Rider on the way, 25 min." },
    ],
  },

  industries: {
    eyebrow: "Industries",
    headlineA: "Different businesses.",
    headlineB: "Same principle.",
    cta: "See your industry",
    recommended: "Recommended starting point",
    items: {
      restaurants: {
        name: "Restaurants",
        steps: ["Hungry", "Menu", "Order", "Pay", "Deliver"],
        copy: "Orders arrive as messages. Make the menu, the order and the payment take one conversation instead of ten.",
      },
      "real-estate": {
        name: "Real Estate",
        steps: ["Discover", "Enquire", "Qualify", "View", "Follow up"],
        copy: "Most enquiries are not ready to buy. Qualify them properly before anyone drives to a viewing.",
      },
      beauty: {
        name: "Beauty",
        steps: ["Discover", "Book", "Remind", "Visit", "Rebook"],
        copy: "A full diary is a system, not luck. Bookings, reminders and rebooking handled in the chat.",
      },
      education: {
        name: "Schools",
        steps: ["Discover", "Ask", "Apply", "Follow up", "Enrol"],
        copy: "Parents ask the same questions every intake. Answer them instantly and track every application.",
      },
      retail: {
        name: "Retail",
        steps: ["See", "Ask", "Choose", "Pay", "Deliver"],
        copy: "Stop retyping prices. A structured catalogue turns browsing into buying.",
      },
      "professional-services": {
        name: "Professional Services",
        steps: ["Discover", "Qualify", "Quote", "Book", "Follow up"],
        copy: "Qualify enquiries, send quotes and book consultations without losing the thread.",
      },
    },
  },

  websites: {
    eyebrow: "About websites",
    headlineA: "And yes,",
    headlineB: "we build websites.",
    secondary: "When you actually need one.",
    body1: "A website can give your business credibility, discoverability and a permanent digital address.",
    body2: "But it isn’t automatically the first thing your business should buy.",
    list: [
      "Some businesses need a landing page.",
      "Some need a catalogue.",
      "Some need ecommerce.",
      "Some need a full website.",
      "Some simply need their WhatsApp to work better.",
    ],
    closingA: "We’ll help you build",
    closingB: "the right amount of internet.",
    cta: "What does my business need?",
  },

  pricing: {
    eyebrow: "Pricing",
    headline: "No mystery pricing.",
    copy: "Start small. Add more when your business needs it.",
    from: "From",
    perMonth: "/ month",
    approximate:
      "Prices shown in your selected currency may be approximate. Your confirmed price appears before payment.",
    changeCurrency: "Change currency",
    cta: "Start on WhatsApp",
  },

  trust: {
    headlineA: "Built around the tools",
    headlineB: "your customers already use.",
    copy: "No invented statistics and no borrowed logos. Just the channels African commerce actually runs on.",
    items: [
      { title: "WhatsApp", detail: "Where the conversation happens" },
      { title: "Social platforms", detail: "Where discovery happens" },
      { title: "Mobile payments", detail: "Where money moves" },
      { title: "Local commerce", detail: "Delivery, pickup, appointments" },
    ],
    note: "Case studies and client outcomes will appear here as they are published.",
  },

  finalCta: {
    eyebrow: "Ready?",
    headlineA: "Your customers",
    headlineB: "are already talking.",
    secondA: "Make the conversation",
    secondB: "worth something.",
    cta: "Turn my WhatsApp into a store",
    supporting: (price: string) => `From ${price} · Live in 72 hours.`,
  },

  qualifier: {
    open: "Get a recommendation",
    title: "Two-minute fit check",
    intro:
      "Hey 👋 Welcome to Social Currency. We help African businesses turn WhatsApp into a cleaner, faster sales channel. I’ll ask you a few quick questions so we can recommend the right setup. It takes about 2 minutes.",
    start: "Start",
    back: "Back",
    talk: "Talk to someone",
    result: "Recommended for you",
    resultCta: "Continue on WhatsApp",
    restart: "Start again",
    questions: [
      {
        q: "What kind of business do you run?",
        options: [
          "Restaurant / Food",
          "Retail / Products",
          "Real Estate",
          "Beauty / Salon",
          "School / Education",
          "Professional Services",
          "Other",
        ],
      },
      {
        q: "How do customers usually contact you?",
        options: [
          "Mostly WhatsApp",
          "Facebook + WhatsApp",
          "Instagram + WhatsApp",
          "Calls",
          "Walk-ins",
          "A mix",
        ],
      },
      {
        q: "Roughly how many customer enquiries do you receive in a typical week?",
        options: ["Under 10", "10–30", "30–100", "100+"],
      },
      {
        q: "What’s the biggest problem right now?",
        options: [
          "I answer the same questions repeatedly",
          "People ask but don’t buy",
          "I lose track of enquiries",
          "I need more enquiries",
          "I need bookings/orders organised",
          "I’m not sure — help me diagnose it",
        ],
      },
    ],
  },

  howItWorks: {
    eyebrow: "How it works",
    headline: "From attention to repeat business.",
    intro:
      "Every step below already happens in your business. We connect them so nothing leaks between them.",
    stepsTitle: "The build",
    steps: [
      { title: "Fit check", copy: "A short conversation about how your customers actually buy from you today." },
      { title: "Setup", copy: "Profile, catalogue, messaging and the pathways that bring people into the chat." },
      { title: "Launch", copy: "Your WhatsApp goes live as a sales channel, with the links and content to feed it." },
      { title: "Improve", copy: "We watch what customers ask, and tighten the journey month by month." },
    ],
  },

  about: {
    eyebrow: "About",
    headline: "One Social Currency. Many African markets.",
    body1: "Social Currency is a conversational commerce company built for African businesses.",
    body2: "We are not a marketing agency with a chatbot attached. We build the commercial system that sits between the attention your business earns and the money it collects.",
    body3: "Local language. Local currency. Local commerce behaviour. One coherent operating system.",
    cta: "Start the conversation",
  },

  contact: {
    eyebrow: "Contact",
    headline: "Start the conversation.",
    body: "The fastest route is WhatsApp. If you would rather write, the form reaches the same inbox.",
    whatsapp: "Message us on WhatsApp",
    orForm: "Or send a message",
    response: "We respond within 2 business days.",
  },

  footer: {
    tagline: "Turn conversations into customers.",
    linksTitle: "Explore",
    localeTitle: "Region",
    closing: "Built for African commerce.",
    parent: "Part of SoCu Systems.",
    rights: (year: number) => `© ${year} Social Currency. All rights reserved.`,
  },

  common: {
    whatsappMessage:
      "Hi Social Currency, I’d like to turn my WhatsApp into a better sales system.",
    solutionMessage: (name: string) =>
      `Hi Social Currency, I’m interested in ${name}. Could you tell me more?`,
    backHome: "Back to home",
    notFound: "That page doesn’t exist.",
  },
};

export type Dictionary = typeof en;
