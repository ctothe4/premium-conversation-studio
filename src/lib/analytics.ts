declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const measurementId = import.meta.env.VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY as
  | string
  | undefined;

let initialized = false;

export const initAnalytics = () => {
  if (initialized || typeof window === "undefined" || !measurementId) return;
  initialized = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: unknown[]) => {
    window.dataLayer!.push(args);
  };
  window.gtag("js", new Date());
  // Route changes are tracked manually below.
  window.gtag("config", measurementId, { send_page_view: false });
};

export const trackEvent = (name: string, params: Record<string, unknown> = {}) => {
  if (typeof window === "undefined") return;
  if (window.gtag) {
    window.gtag("event", name, params);
  } else if (import.meta.env.DEV) {
    console.info("[analytics]", name, params);
  }
};

export const trackPageView = (path: string, title?: string) => {
  trackEvent("page_view", {
    page_path: path,
    page_location: typeof window !== "undefined" ? window.location.href : undefined,
    page_title: title ?? (typeof document !== "undefined" ? document.title : undefined),
  });

  if (path.endsWith("/pricing")) trackEvent("pricing_viewed", { page_path: path });
};

export const trackNavClick = (name: string, path: string, source: "desktop" | "mobile") => {
  trackEvent("nav_click", { link_name: name, link_path: path, menu: source });
};

/** Commerce-specific events used across the V2 experience. */
export const trackWhatsAppClick = (location: string, product?: string) =>
  trackEvent("whatsapp_cta_clicked", { cta_location: location, product });

export const trackSolutionViewed = (slug: string) =>
  trackEvent("solution_viewed", { solution: slug });

export const trackProductSelected = (slug: string) =>
  trackEvent("product_selected", { solution: slug });

export const trackDemoStarted = (journey: string) =>
  trackEvent("demo_started", { journey });

export const trackDemoCompleted = (journey: string) =>
  trackEvent("demo_completed", { journey });

export const trackLeadStarted = (source: string) =>
  trackEvent("lead_started", { source });

export const trackLeadQualified = (recommendation: string) =>
  trackEvent("lead_qualified", { recommendation });

export const trackCheckoutStarted = (product: string) =>
  trackEvent("checkout_started", { product });
