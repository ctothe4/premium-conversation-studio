import { useEffect, useState } from "react";

const STORAGE_KEY = "geo_country_code";

/**
 * Returns the visitor's ISO country code (e.g. "ZM", "CA") or null while loading.
 * Uses ipapi.co and caches the result in sessionStorage.
 */
export function useGeoCountry(): string | null {
  const [country, setCountry] = useState<string | null>(() => {
    if (typeof window === "undefined") return null;
    return sessionStorage.getItem(STORAGE_KEY);
  });

  useEffect(() => {
    if (country) return;
    const controller = new AbortController();
    fetch("https://ipapi.co/json/", { signal: controller.signal })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data && typeof data.country_code === "string") {
          sessionStorage.setItem(STORAGE_KEY, data.country_code);
          setCountry(data.country_code);
        }
      })
      .catch(() => {
        /* silent */
      });
    return () => controller.abort();
  }, [country]);

  return country;
}

export function useIsZambia(): boolean {
  const country = useGeoCountry();
  return country === "ZM";
}
