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

  if (path === "/ai-fluency") {
    trackEvent("ai_fluency_page_view", { page_path: path });
  }
};

export const trackNavClick = (name: string, path: string, source: "desktop" | "mobile") => {
  trackEvent("nav_click", { link_name: name, link_path: path, menu: source });

  if (path.endsWith("/ai-fluency")) {
    trackEvent("ai_fluency_nav_click", { menu: source, link_path: path });
  }
};
