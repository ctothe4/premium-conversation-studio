import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";

/**
 * Problem section.
 * Tempo: statement -> conversational cadence -> silence -> punch.
 * The lines deliberately do not all animate identically.
 */
const ProblemSection = () => {
  const { t } = useLocale();
  const reduce = useReducedMotion();

  // An uneven cadence reads like a conversation rather than a list.
  const cadence = [0, 0.12, 0.2, 0.36, 0.44, 0.56, 0.74, 0.86];

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

        <ul className="mb-32 max-w-2xl md:mb-52">
          {t.problem.lines.map((line, i) => (
            <motion.li
              key={line}
              initial={reduce ? { opacity: 0 } : { opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.45,
                delay: cadence[i] ?? i * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group body-large flex items-baseline gap-4 border-b border-border/60 py-4 text-muted-foreground"
            >
              <motion.span
                aria-hidden="true"
                className="h-px w-4 shrink-0 bg-primary/60"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (cadence[i] ?? 0) + 0.12 }}
                style={{ originX: 0 }}
              />
              {line}
            </motion.li>
          ))}
        </ul>

        {/* Silence, then the statement lands. */}
        <motion.p
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-140px" }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="headline-hero max-w-5xl text-primary"
        >
          {t.problem.punch}
        </motion.p>
      </div>
    </section>
  );
};

export default ProblemSection;
