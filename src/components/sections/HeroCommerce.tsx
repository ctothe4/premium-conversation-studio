import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";

/**
 * Hero commerce animation.
 * Motion here has one job: show commerce moving from a social post,
 * through a conversation, to a payment, a delivery and a reorder.
 *
 * Desktop: pointer hover pauses the sequence so it can be read.
 * Mobile / keyboard: the sequence can be advanced deliberately.
 */
const HeroCommerce = () => {
  const { t } = useLocale();
  const reduce = useReducedMotion();
  const s = t.hero.steps;

  type Tone = "post" | "customer" | "business" | "status";

  const steps: { title: string; meta: string; tone: Tone }[] = [
    { title: s.post, meta: s.postMeta, tone: "post" },
    { title: s.open, meta: s.openMeta, tone: "post" },
    { title: s.ask, meta: s.askMeta, tone: "customer" },
    { title: s.select, meta: s.selectMeta, tone: "business" },
    { title: s.order, meta: s.orderMeta, tone: "status" },
    { title: s.pay, meta: s.payMeta, tone: "status" },
    { title: s.deliver, meta: s.deliverMeta, tone: "status" },
    { title: s.follow, meta: s.followMeta, tone: "customer" },
  ];

  const total = steps.length;
  const [visible, setVisible] = useState(reduce ? total : 0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduce) {
      setVisible(total);
      return;
    }
    if (paused) return;
    if (visible >= total) {
      const reset = setTimeout(() => setVisible(0), 5200);
      return () => clearTimeout(reset);
    }
    // A slightly longer beat on the payment/confirmation moments.
    const isConfirmation = steps[visible]?.tone === "status";
    const delay = visible === 0 ? 550 : isConfirmation ? 1250 : 1000;
    const timer = setTimeout(() => setVisible((v) => v + 1), delay);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, reduce, total, paused]);

  const advance = useCallback(() => {
    setVisible((v) => (v >= total ? 0 : v + 1));
  }, [total]);

  const shown = steps.slice(Math.max(0, visible - 4), visible);
  const done = visible >= total;

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span
            className={`h-2 w-2 rounded-full bg-primary ${
              reduce ? "" : "animate-pulse"
            }`}
            aria-hidden="true"
          />
          <span className="subheadline text-foreground">WhatsApp</span>
        </div>
        <button
          type="button"
          onClick={advance}
          className="nav-link link-underline min-h-[2.75rem] px-1 text-muted-foreground"
        >
          {done ? t.hero.replay : t.hero.tapHint}
        </button>
      </div>

      {/* Progress rule: commerce moving, expressed as one controlled line. */}
      <div className="h-px w-full bg-border" aria-hidden="true">
        <motion.div
          className="h-px bg-primary"
          animate={{ width: `${(visible / total) * 100}%` }}
          transition={{ duration: reduce ? 0 : 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </div>

      <div className="min-h-[19rem] pt-6 sm:min-h-[21rem]" aria-live="polite">
        <AnimatePresence initial={false}>
          {shown.map((step) => {
            const isStatus = step.tone === "status";
            const alignRight = step.tone === "business" || isStatus;
            return (
              <motion.div
                key={step.title}
                layout
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: reduce ? 0 : 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                className={`mb-3 max-w-[85%] border px-5 py-4 ${
                  alignRight
                    ? "ml-auto border-primary/40 bg-primary/[0.07]"
                    : "border-border bg-background"
                }`}
              >
                <p
                  className={`body-small font-medium ${
                    isStatus ? "text-primary" : "text-foreground"
                  }`}
                >
                  {step.title}
                  {isStatus && " ✓"}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {step.meta}
                </p>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {done && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.6 }}
            className="mt-6 border-t border-border pt-6 font-display uppercase tracking-tight text-lg text-primary md:text-xl"
          >
            {t.hero.closing}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroCommerce;
