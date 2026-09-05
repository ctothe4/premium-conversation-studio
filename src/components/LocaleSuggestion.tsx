import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { getCountry } from "@/config/markets";

/**
 * Small, dismissible localisation suggestion.
 * Detection only suggests: it never redirects and never blocks the page.
 */
const LocaleSuggestion = () => {
  const { suggestion, dismissSuggestion, setLocale, currency, t, language } = useLocale();
  const reduce = useReducedMotion();

  if (!suggestion) return null;
  const detected = getCountry(suggestion.detectedCountry);
  const countryName = language === "fr" ? detected.nameFr : detected.name;
  const wantsLanguage = !!suggestion.suggestLanguage;

  return (
    <AnimatePresence>
      <motion.div
        role="status"
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 24 }}
        transition={{ duration: reduce ? 0 : 0.4, ease: "easeOut" }}
        className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-md border border-border bg-background p-5 shadow-xl md:left-auto md:right-6 md:mx-0"
      >
        <button
          type="button"
          onClick={dismissSuggestion}
          aria-label={t.localisation.dismiss}
          className="absolute right-3 top-3 p-1 text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <X size={16} />
        </button>

        <p className="body-small mb-5 pr-6">
          {wantsLanguage
            ? t.localisation.suggestLanguage
            : t.localisation.suggestCurrency(
                countryName,
                suggestion.suggestCurrency ?? currency
              )}
        </p>

        <div className="flex flex-wrap gap-3">
          {wantsLanguage ? (
            <>
              <button
                type="button"
                className="btn-primary px-6 py-3"
                onClick={() =>
                  setLocale(
                    {
                      language: suggestion.suggestLanguage,
                      country: suggestion.detectedCountry,
                    },
                    "suggestion"
                  )
                }
              >
                {t.localisation.useFrench}
              </button>
              <button type="button" className="btn-outline px-6 py-3" onClick={dismissSuggestion}>
                {t.localisation.keepEnglish}
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                className="btn-primary px-6 py-3"
                onClick={() =>
                  setLocale(
                    {
                      currency: suggestion.suggestCurrency,
                      country: suggestion.detectedCountry,
                    },
                    "suggestion"
                  )
                }
              >
                {t.localisation.useCurrency(suggestion.suggestCurrency ?? currency)}
              </button>
              <button type="button" className="btn-outline px-6 py-3" onClick={dismissSuggestion}>
                {t.localisation.keepCurrency(currency)}
              </button>
            </>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LocaleSuggestion;
