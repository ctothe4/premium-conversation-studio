import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";

/**
 * Hero commerce animation.
 * Motion here has one job: show commerce moving from a social post,
 * through a conversation, to a payment, a delivery and a reorder.
 */
const HeroCommerce = () => {
  const { t } = useLocale();
  const reduce = useReducedMotion();
  const s = t.hero.steps;

  const steps = [
    { title: s.post, meta: s.postMeta, side: "left" as const },
    { title: s.open, meta: s.openMeta, side: "left" as const },
    { title: s.ask, meta: s.askMeta, side: "right" as const },
    { title: s.select, meta: s.selectMeta, side: "left" as const },
    { title: s.order, meta: s.orderMeta, side: "right" as const },
    { title: s.pay, meta: s.payMeta, side: "left" as const },
    { title: s.deliver, meta: s.deliverMeta, side: "right" as const },
    { title: s.follow, meta: s.followMeta, side: "left" as const },
  ];

  const [visible, setVisible] = useState(reduce ? steps.length : 0);

  useEffect(() => {
    if (reduce) {
      setVisible(steps.length);
      return;
    }
    if (visible >= steps.length) {
      const reset = setTimeout(() => setVisible(0), 4200);
      return () => clearTimeout(reset);
    }
    const timer = setTimeout(() => setVisible((v) => v + 1), visible === 0 ? 600 : 1150);
    return () => clearTimeout(timer);
  }, [visible, reduce, steps.length]);

  const shown = steps.slice(Math.max(0, visible - 4), visible);

  return (
    <div className="relative w-full">
      <div className="mb-4 flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
        <span className="subheadline text-foreground">WhatsApp</span>
      </div>

      <div
        className="min-h-[19rem] border-t border-border pt-6 sm:min-h-[21rem]"
        aria-live="polite"
      >
        <AnimatePresence initial={false}>
          {shown.map((step) => (
            <motion.div
              key={step.title}
              layout
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: reduce ? 0 : 0.45, ease: [0.25, 0.1, 0.25, 1] }}
              className={`mb-3 max-w-[85%] border px-5 py-4 ${
                step.side === "right"
                  ? "ml-auto border-primary/40 bg-primary/[0.07]"
                  : "border-border bg-background"
              }`}
            >
              <p className="body-small font-medium text-foreground">{step.title}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {step.meta}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {visible >= steps.length && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
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
