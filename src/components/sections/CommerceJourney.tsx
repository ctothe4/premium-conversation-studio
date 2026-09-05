import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";

const CommerceJourney = () => {
  const { t } = useLocale();
  const reduce = useReducedMotion();

  return (
    <section className="section-padding border-t border-border bg-secondary/20">
      <div className="container-editorial">
        <span className="subheadline mb-6 block">{t.thesis.eyebrow}</span>
        <h2 className="headline-section mb-16 max-w-4xl md:mb-24">
          {t.thesis.headlineA}
          <br />
          <span className="text-primary">{t.thesis.headlineB}</span>
        </h2>

        <ol className="grid grid-cols-1 gap-px bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
          {t.thesis.stages.map((stage, i) => (
            <motion.li
              key={stage.title}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.09 }}
              className="group relative bg-background p-8 md:p-12"
            >
              <span className="subheadline mb-6 block text-primary">
                0{i + 1}
              </span>
              <h3 className="headline-card mb-3">{stage.title}</h3>
              <p className="body-small text-muted-foreground">{stage.detail}</p>
              <motion.span
                aria-hidden="true"
                className="mt-8 block h-px bg-primary/50"
                initial={{ width: 0 }}
                whileInView={{ width: "3rem" }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.09 }}
              />
            </motion.li>
          ))}
        </ol>

        <div className="mt-16 md:mt-24">
          <p className="subheadline mb-6 text-primary">{t.thesis.chain}</p>
          <p className="headline-section max-w-3xl">{t.thesis.closing}</p>
        </div>
      </div>
    </section>
  );
};

export default CommerceJourney;
