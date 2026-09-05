import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";

/**
 * Trust / proof.
 * Deliberately contains no invented metrics, testimonials or client logos.
 * Real case studies and outcomes can be slotted into this same grid later.
 */
const TrustSection = () => {
  const { t } = useLocale();
  const reduce = useReducedMotion();

  return (
    <section className="section-padding border-t border-border bg-secondary/20">
      <div className="container-editorial">
        <h2 className="headline-section mb-8 max-w-4xl">
          {t.trust.headlineA}
          <br />
          <span className="text-primary">{t.trust.headlineB}</span>
        </h2>
        <p className="body-large mb-16 max-w-2xl text-muted-foreground">{t.trust.copy}</p>

        <div className="grid grid-cols-1 gap-px bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
          {t.trust.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-background p-8 md:p-10"
            >
              <h3 className="headline-card mb-3">{item.title}</h3>
              <p className="body-small text-muted-foreground">{item.detail}</p>
            </motion.div>
          ))}
        </div>

        <p className="body-small mt-10 text-muted-foreground">{t.trust.note}</p>
      </div>
    </section>
  );
};

export default TrustSection;
