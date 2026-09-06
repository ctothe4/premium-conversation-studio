import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";
import WhatsAppCTA from "@/components/WhatsAppCTA";

/**
 * Websites.
 * Scroll choreography controls arrival: statement, pause, qualifier,
 * progressive list, silence, closing line. The restraint is intentional.
 */
const WebsitesSection = () => {
  const { t } = useLocale();
  const reduce = useReducedMotion();

  return (
    <section className="section-padding border-t border-border">
      <div className="container-editorial">
        <span className="subheadline mb-6 block">{t.websites.eyebrow}</span>

        <motion.h2
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="headline-section mb-6 max-w-4xl"
        >
          {t.websites.headlineA}
          <br />
          {t.websites.headlineB}
        </motion.h2>

        {/* Pause, then the qualifier. */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="headline-card mb-20 text-muted-foreground md:mb-28"
        >
          {t.websites.secondary}
        </motion.p>

        <div className="grid gap-14 md:grid-cols-2">
          <div>
            <p className="body-large mb-6 text-muted-foreground">{t.websites.body1}</p>
            <p className="body-large text-muted-foreground">{t.websites.body2}</p>
          </div>
          <ul className="border-t border-border">
            {t.websites.list.map((line, i) => (
              <motion.li
                key={line}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.13 }}
                className="body-regular border-b border-border py-4"
              >
                {line}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Silence before the closing line. */}
        <div className="mt-32 md:mt-52">
          <motion.h3
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-140px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="headline-section mb-16 max-w-4xl"
          >
            {t.websites.closingA}
            <br />
            <span className="text-primary">{t.websites.closingB}</span>
          </motion.h3>
          <WhatsAppCTA
            label={t.websites.cta}
            message={t.common.whatsappMessage}
            location="websites_section"
            variant="outline"
          />
        </div>
      </div>
    </section>
  );
};

export default WebsitesSection;
