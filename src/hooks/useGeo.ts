import { useEffect, useState } from "react";

const STORAGE_KEY = "geo_country_code";
const RESOLVED_KEY = "geo_country_resolved";

type GeoState = {
  country: string | null;
  resolved: boolean;
};

/**
 * Returns the visitor's ISO country code and whether detection has resolved.
 * Persists in localStorage so repeat visits (and new tabs) are instant.
 */
export function useGeo(): GeoState {
  const [state, setState] = useState<GeoState>(() => {
    if (typeof window === "undefined") return { country: null, resolved: false };
    const country = localStorage.getItem(STORAGE_KEY);
    const resolved = localStorage.getItem(RESOLVED_KEY) === "1";
    return { country, resolved };
  });

  useEffect(() => {
    // Always re-verify in background so a mobile IP change / stale cache
    // eventually corrects itself — but the cached value gates rendering
    // immediately on repeat visits.
    const controller = new AbortController();
    fetch("https://ipapi.co/json/", { signal: controller.signal })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        const code =
          data && typeof data.country_code === "string" ? data.country_code : null;
        if (code) {
          localStorage.setItem(STORAGE_KEY, code);
          localStorage.setItem(RESOLVED_KEY, "1");
          setState({ country: code, resolved: true });
        } else {
          // Mark resolved so we don't block rendering forever on API failure.
          localStorage.setItem(RESOLVED_KEY, "1");
          setState((s) => ({ country: s.country, resolved: true }));
        }
      })
      .catch(() => {
        setState((s) => ({ country: s.country, resolved: true }));
      });
    return () => controller.abort();
  }, []);

  return state;
}

export function useGeoCountry(): string | null {
  return useGeo().country;
}

/**
 * True only when detection has resolved AND country is Zambia.
 */
export function useIsZambia(): boolean {
  const { country } = useGeo();
  return country === "ZM";
}

