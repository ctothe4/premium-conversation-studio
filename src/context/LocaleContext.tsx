import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  COUNTRIES,
  CURRENCIES,
  DEFAULT_COUNTRY,
  DEFAULT_CURRENCY,
  DEFAULT_LANGUAGE,
  getCountry,
  getCurrency,
  isSupportedCountry,
  type CountryCode,
  type CurrencyCode,
  type LanguageCode,
} from "@/config/markets";
import { dictionaries, type Dictionary } from "@/i18n";
import { trackEvent } from "@/lib/analytics";

const KEYS = {
  language: "sc_language",
  country: "sc_country",
  currency: "sc_currency",
  dismissed: "sc_locale_suggestion_dismissed",
};

export interface Suggestion {
  detectedCountry: CountryCode;
  suggestCurrency?: CurrencyCode;
  suggestLanguage?: LanguageCode;
}

interface LocaleValue {
  language: LanguageCode;
  country: CountryCode;
  currency: CurrencyCode;
  t: Dictionary;
  localeTag: string;
  setLocale: (
    next: Partial<{ language: LanguageCode; country: CountryCode; currency: CurrencyCode }>,
    source?: string
  ) => void;
  suggestion: Suggestion | null;
  dismissSuggestion: () => void;
  countries: typeof COUNTRIES;
  currencies: typeof CURRENCIES;
}

const LocaleContext = createContext<LocaleValue | null>(null);

const read = <T extends string>(key: string, allowed: readonly T[], fallback: T): T => {
  if (typeof window === "undefined") return fallback;
  const value = localStorage.getItem(key) as T | null;
  return value && allowed.includes(value) ? value : fallback;
};

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const languageCodes = ["en", "fr"] as const;
  const countryCodes = COUNTRIES.map((c) => c.code);
  const currencyCodes = CURRENCIES.map((c) => c.code);

  const [language, setLanguage] = useState<LanguageCode>(() =>
    read(KEYS.language, languageCodes, DEFAULT_LANGUAGE)
  );
  const [country, setCountry] = useState<CountryCode>(() =>
    read(KEYS.country, countryCodes, DEFAULT_COUNTRY)
  );
  const [currency, setCurrency] = useState<CurrencyCode>(() =>
    read(KEYS.currency, currencyCodes, DEFAULT_CURRENCY)
  );
  const [suggestion, setSuggestion] = useState<Suggestion | null>(null);

  const hasExplicitChoice =
    typeof window !== "undefined" && !!localStorage.getItem(KEYS.country);

  // Detection SUGGESTS localisation. It never redirects and never forces a choice.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (hasExplicitChoice) return;
    if (localStorage.getItem(KEYS.dismissed) === "1") return;

    const controller = new AbortController();
    fetch("https://ipapi.co/json/", { signal: controller.signal })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        const code: string | undefined = data?.country_code;
        if (!code || !isSupportedCountry(code)) return;
        const detected = getCountry(code);
        const next: Suggestion = { detectedCountry: detected.code };
        if (detected.suggestedCurrency !== currency) next.suggestCurrency = detected.suggestedCurrency;
        if (detected.suggestedLanguage !== language) next.suggestLanguage = detected.suggestedLanguage;
        if (next.suggestCurrency || next.suggestLanguage) setSuggestion(next);
      })
      .catch(() => undefined);
    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setLocale: LocaleValue["setLocale"] = useCallback(
    (next, source = "drawer") => {
      const changed: string[] = [];
      if (next.language && next.language !== language) {
        setLanguage(next.language);
        localStorage.setItem(KEYS.language, next.language);
        trackEvent("language_changed", { language: next.language, source });
        changed.push("language");
      }
      if (next.country && next.country !== country) {
        setCountry(next.country);
        localStorage.setItem(KEYS.country, next.country);
        trackEvent("country_changed", { country: next.country, source });
        changed.push("country");
      }
      if (next.currency && next.currency !== currency) {
        setCurrency(next.currency);
        localStorage.setItem(KEYS.currency, next.currency);
        trackEvent("currency_changed", { currency: next.currency, source });
        changed.push("currency");
      }
      if (changed.length) {
        trackEvent("localisation_changed", { changed: changed.join(","), source });
      }
      setSuggestion(null);
      localStorage.setItem(KEYS.dismissed, "1");
    },
    [language, country, currency]
  );

  const dismissSuggestion = useCallback(() => {
    setSuggestion(null);
    localStorage.setItem(KEYS.dismissed, "1");
  }, []);

  const t = dictionaries[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo<LocaleValue>(
    () => ({
      language,
      country,
      currency,
      t,
      localeTag: t.meta.localeTag,
      setLocale,
      suggestion,
      dismissSuggestion,
      countries: COUNTRIES,
      currencies: CURRENCIES,
    }),
    [language, country, currency, t, setLocale, suggestion, dismissSuggestion]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};

export const useLocale = () => {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside LocaleProvider");
  return ctx;
};

export const useT = () => useLocale().t;

export const useLocaleLabel = () => {
  const { language, country, currency } = useLocale();
  return `${language.toUpperCase()} · ${country} · ${getCurrency(currency).code}`;
};
