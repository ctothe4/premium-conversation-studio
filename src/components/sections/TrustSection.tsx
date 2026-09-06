import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";

/**
 * Trust / proof.
 * Deliberately contains no invented metrics, testimonials or client logos, and
 * claims no platform partnerships. It shows the ecosystem that Social Currency
 * connects: social, WhatsApp, payment, fulfilment.
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

        {/* The ecosystem, shown as a connected flow rather than a logo wall. */}
        <ol className="mb-16 flex flex-wrap items-center gap-x-4 gap-y-3">
          {t.trust.flow.map((label, i) => (
            <motion.li
              key={label}
              initial={reduce ? { opacity: 0 } : { opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.18 }}
              className="flex items-center gap-4"
            >
              <span className="subheadline text-foreground">{label}</span>
              {i < t.trust.flow.length - 1 && (
                <motion.span
                  aria-hidden="true"
                  className="text-primary"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.18 + 0.14 }}
                >
                  →
                </motion.span>
              )}
            </motion.li>
          ))}
        </ol>

        <div className="grid grid-cols-1 gap-px bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
          {t.trust.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-background p-8 transition-colors duration-500 hover:bg-secondary/40 md:p-10"
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
