import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";

/**
 * Commerce thesis.
 * Scroll-linked progression: as the visitor scrolls through the section,
 * each stage becomes active in turn. No scroll-jacking, no pinning.
 */
const CommerceJourney = () => {
  const { t } = useLocale();
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const stages = t.thesis.stages;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.4"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="section-padding border-t border-border bg-secondary/20">
      <div className="container-editorial">
        <span className="subheadline mb-6 block">{t.thesis.eyebrow}</span>
        <h2 className="headline-section mb-16 max-w-4xl md:mb-24">
          {t.thesis.headlineA}
          <br />
          <span className="text-primary">{t.thesis.headlineB}</span>
        </h2>

        <div ref={ref} className="relative">
          {/* The journey rule: commerce moving through the stages. */}
          <div
            className="absolute left-0 top-0 hidden h-px w-full bg-border lg:block"
            aria-hidden="true"
          >
            <motion.div
              className="h-px origin-left bg-primary"
              style={reduce ? { scaleX: 1 } : { scaleX: lineScale }}
            />
          </div>

          <ol className="grid grid-cols-1 gap-px bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
            {stages.map((stage, i) => (
              <motion.li
                key={stage.title}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.09 }}
                className="group relative bg-background p-8 md:p-12"
              >
                {/* Active state: the stage that the visitor is currently reading. */}
                <motion.span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-primary/[0.05]"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ margin: "-45% 0px -45% 0px" }}
                  transition={{ duration: 0.4 }}
                />
                <span className="subheadline relative mb-6 block text-primary">
                  0{i + 1}
                </span>
                <h3 className="headline-card relative mb-3">{stage.title}</h3>
                <p className="body-small relative text-muted-foreground">{stage.detail}</p>
                <motion.span
                  aria-hidden="true"
                  className="relative mt-8 block h-px bg-primary/50"
                  initial={{ width: 0 }}
                  whileInView={{ width: "3rem" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.09 }}
                />
              </motion.li>
            ))}
          </ol>
        </div>

        <div className="mt-16 md:mt-24">
          <motion.p
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="headline-section max-w-3xl"
          >
            {t.thesis.closing}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="subheadline mt-8 text-primary"
          >
            {t.thesis.chain}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default CommerceJourney;
