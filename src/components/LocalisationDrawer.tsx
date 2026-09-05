import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, Globe } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import type { CountryCode, CurrencyCode, LanguageCode } from "@/config/markets";
import { LANGUAGES } from "@/config/markets";

interface Props {
  open: boolean;
  onClose: () => void;
}

const OptionButton = ({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    aria-pressed={active}
    className={`min-h-[3rem] w-full border px-4 py-3 text-left text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
      active
        ? "border-primary bg-primary/10 text-foreground font-semibold"
        : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
    }`}
  >
    <span className="flex items-center justify-between gap-2">
      {children}
      {active && <span aria-hidden="true">✓</span>}
    </span>
  </button>
);

const LocalisationDrawer = ({ open, onClose }: Props) => {
  const { language, country, currency, countries, currencies, setLocale, t } = useLocale();
  const [draftLanguage, setDraftLanguage] = useState<LanguageCode>(language);
  const [draftCountry, setDraftCountry] = useState<CountryCode>(country);
  const [draftCurrency, setDraftCurrency] = useState<CurrencyCode>(currency);
  const panelRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    setDraftLanguage(language);
    setDraftCountry(country);
    setDraftCurrency(currency);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    panelRef.current?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [open, language, country, currency, onClose]);

  const apply = () => {
    setLocale(
      { language: draftLanguage, country: draftCountry, currency: draftCurrency },
      "drawer"
    );
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.25 }}
            className="fixed inset-0 z-[60] bg-foreground/30 backdrop-blur-[2px]"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            ref={panelRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label={t.localisation.title}
            initial={reduce ? { opacity: 0 } : { x: "100%" }}
            animate={reduce ? { opacity: 1 } : { x: 0 }}
            exit={reduce ? { opacity: 0 } : { x: "100%" }}
            transition={{ duration: reduce ? 0 : 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed right-0 top-0 z-[61] flex h-full w-full max-w-md flex-col bg-background shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-border px-6 py-5">
              <span className="subheadline flex items-center gap-3 text-foreground">
                <Globe size={16} aria-hidden="true" />
                {t.localisation.title}
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label={t.nav.close}
                className="p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-8">
              <p className="body-small mb-8 text-muted-foreground">{t.localisation.note}</p>

              <fieldset className="mb-10">
                <legend className="subheadline mb-4 text-foreground">
                  {t.localisation.language}
                </legend>
                <div className="grid grid-cols-2 gap-2">
                  {LANGUAGES.map((l) => (
                    <OptionButton
                      key={l.code}
                      active={draftLanguage === l.code}
                      onClick={() => setDraftLanguage(l.code)}
                    >
                      {l.label}
                    </OptionButton>
                  ))}
                </div>
              </fieldset>

              <fieldset className="mb-10">
                <legend className="subheadline mb-4 text-foreground">
                  {t.localisation.country}
                </legend>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {countries.map((c) => (
                    <OptionButton
                      key={c.code}
                      active={draftCountry === c.code}
                      onClick={() => {
                        setDraftCountry(c.code);
                        // Country SUGGESTS currency. The visitor can still override below.
                        setDraftCurrency(c.suggestedCurrency);
                      }}
                    >
                      {draftLanguage === "fr" ? c.nameFr : c.name}
                    </OptionButton>
                  ))}
                </div>
              </fieldset>

              <fieldset className="mb-4">
                <legend className="subheadline mb-4 text-foreground">
                  {t.localisation.currency}
                </legend>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {currencies.map((c) => (
                    <OptionButton
                      key={c.code}
                      active={draftCurrency === c.code}
                      onClick={() => setDraftCurrency(c.code)}
                    >
                      <span>
                        <strong className="font-semibold">{c.code}</strong>{" "}
                        <span className="text-muted-foreground">
                          {draftLanguage === "fr" ? c.nameFr : c.name}
                        </span>
                      </span>
                    </OptionButton>
                  ))}
                </div>
              </fieldset>

              <p className="body-small text-muted-foreground">{t.localisation.approximate}</p>
            </div>

            <div className="flex gap-3 border-t border-border px-6 py-5">
              <button type="button" onClick={onClose} className="btn-outline flex-1">
                {t.localisation.cancel}
              </button>
              <button type="button" onClick={apply} className="btn-primary flex-1">
                {t.localisation.apply}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LocalisationDrawer;
