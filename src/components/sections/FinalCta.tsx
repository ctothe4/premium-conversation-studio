import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";
import { SOLUTIONS } from "@/config/products";
import { usePriceText } from "@/components/Price";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { trackHeroCta } from "@/lib/analytics";

/**
 * Final CTA.
 * The page becomes quiet, then makes one statement and one offer.
 */
const FinalCta = () => {
  const { t } = useLocale();
  const reduce = useReducedMotion();
  const entryPrice = usePriceText(SOLUTIONS[0]);

  return (
    <section className="section-padding border-t border-border">
      <div className="container-editorial">
        <span className="subheadline mb-10 block">{t.finalCta.eyebrow}</span>

        <motion.h2
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="headline-hero mb-16 max-w-5xl"
        >
          {t.finalCta.headlineA}
          <br />
          {t.finalCta.headlineB}
        </motion.h2>

        {/* A moment, then the turquoise line. */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="headline-section mb-20 max-w-4xl text-primary"
        >
          {t.finalCta.secondA}
          <br />
          {t.finalCta.secondB}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 1.4 }}
          onClick={trackHeroCta}
        >
          <WhatsAppCTA
            label={t.finalCta.cta}
            message={t.common.whatsappMessage}
            location="final_cta"
            product="whatsapp-store"
          />
          <p className="body-small mt-8 text-muted-foreground">
            {t.finalCta.supporting(entryPrice)}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCta;
