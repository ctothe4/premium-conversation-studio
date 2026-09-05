import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";

const ProblemSection = () => {
  const { t } = useLocale();
  const reduce = useReducedMotion();

  return (
    <section className="section-padding border-t border-border">
      <div className="container-editorial">
        <motion.h2
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="headline-section mb-16 max-w-4xl md:mb-24"
        >
          {t.problem.headline}
        </motion.h2>

        <ul className="mb-20 max-w-2xl md:mb-32">
          {t.problem.lines.map((line, i) => (
            <motion.li
              key={line}
              initial={reduce ? { opacity: 0 } : { opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="body-large border-b border-border/60 py-4 text-muted-foreground"
            >
              {line}
            </motion.li>
          ))}
        </ul>

        <motion.p
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="headline-hero max-w-5xl text-primary"
        >
          {t.problem.punch}
        </motion.p>
      </div>
    </section>
  );
};

export default ProblemSection;
