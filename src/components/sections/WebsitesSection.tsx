import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";
import WhatsAppCTA from "@/components/WhatsAppCTA";

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
          transition={{ duration: 0.8 }}
          className="headline-section mb-4 max-w-4xl"
        >
          {t.websites.headlineA}
          <br />
          {t.websites.headlineB}
        </motion.h2>
        <p className="headline-card mb-16 text-muted-foreground">{t.websites.secondary}</p>

        <div className="grid gap-14 md:grid-cols-2">
          <div>
            <p className="body-large mb-6 text-muted-foreground">{t.websites.body1}</p>
            <p className="body-large text-muted-foreground">{t.websites.body2}</p>
          </div>
          <ul className="border-t border-border">
            {t.websites.list.map((line) => (
              <li key={line} className="body-regular border-b border-border py-4">
                {line}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20 md:mt-28">
          <h3 className="headline-section mb-10 max-w-4xl">
            {t.websites.closingA}
            <br />
            <span className="text-primary">{t.websites.closingB}</span>
          </h3>
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
