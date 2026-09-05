import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { QrCode } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { SITE } from "@/config/site";
import { trackDemoStarted, trackDemoCompleted } from "@/lib/analytics";

/**
 * Live demo.
 * The demo journey is data-driven so other journeys (salon, real estate,
 * school, retail) can be added later without touching this component.
 * The QR destination is an explicit placeholder until the real demo line exists.
 */
const LiveDemo = () => {
  const { t } = useLocale();
  const reduce = useReducedMotion();
  const journey = t.demo.journey;
  const [step, setStep] = useState(0);
  const [running, setRunning] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    if (!running) return;
    if (step >= journey.length - 1) {
      trackDemoCompleted("restaurant");
      return;
    }
    const timer = setTimeout(() => setStep((s) => s + 1), reduce ? 0 : 1400);
    return () => clearTimeout(timer);
  }, [running, step, journey.length, reduce]);

  const begin = () => {
    if (!started.current) {
      trackDemoStarted("restaurant");
      started.current = true;
    }
    setStep(0);
    setRunning(true);
  };

  return (
    <section className="section-padding border-t border-border bg-secondary/20" id="demo">
      <div className="container-editorial">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
          <div>
            <h2 className="headline-section mb-8">
              {t.demo.headlineA}
              <br />
              <span className="text-primary">{t.demo.headlineB}</span>
            </h2>
            <p className="body-large mb-12 max-w-md text-muted-foreground">{t.demo.copy}</p>

            <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-center">
              <div
                className="flex h-32 w-32 flex-col items-center justify-center gap-2 border border-dashed border-border text-muted-foreground"
                role="img"
                aria-label={t.demo.qrPending}
              >
                <QrCode size={32} aria-hidden="true" />
                <span className="px-2 text-center text-[0.6rem] uppercase tracking-[0.15em]">
                  {t.demo.qrPending}
                </span>
              </div>
              <p className="body-small max-w-[16rem] text-muted-foreground">
                {t.demo.qrNote}
                {SITE.whatsappIsPlaceholder ? "" : ""}
              </p>
            </div>

            <p className="body-regular mb-8 max-w-md">{t.demo.closing}</p>
            <WhatsAppCTA
              label={t.demo.cta}
              message={t.common.whatsappMessage}
              location="live_demo"
            />
          </div>

          <div className="mx-auto w-full max-w-sm">
            <div className="border border-border bg-background p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between border-b border-border pb-4">
                <span className="subheadline text-foreground">Chola Kitchen</span>
                <button
                  type="button"
                  onClick={begin}
                  className="nav-link link-underline"
                >
                  {running ? t.qualifier.restart : t.hero.secondary}
                </button>
              </div>

              <div className="min-h-[20rem]" aria-live="polite">
                <AnimatePresence initial={false}>
                  {journey.slice(0, running ? step + 1 : 1).map((item) => (
                    <motion.div
                      key={item.label}
                      layout
                      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: reduce ? 0 : 0.35 }}
                      className="mb-3 border-l-2 border-primary/60 bg-secondary/40 px-4 py-3"
                    >
                      <p className="text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="body-small mt-1 text-foreground">{item.line}</p>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;
