import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SOLUTIONS } from "@/config/products";
import { useLocale } from "@/context/LocaleContext";
import Price from "@/components/Price";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { trackSolutionViewed, trackSolutionSelected } from "@/lib/analytics";

interface Props {
  showEyebrow?: boolean;
}

/**
 * Solutions.
 * Editorial product presentation, not SaaS cards. The commercial facts
 * (price, delivery, CTA) sit together at the foot of every product.
 */
const SolutionsSection = ({ showEyebrow = true }: Props) => {
  const { t } = useLocale();
  const reduce = useReducedMotion();

  return (
    <section className="section-padding border-t border-border" id="solutions">
      <div className="container-editorial">
        {showEyebrow && <span className="subheadline mb-6 block">{t.solutions.eyebrow}</span>}
        <h2 className="headline-section mb-16 max-w-3xl md:mb-24">{t.solutions.headline}</h2>

        <div className="grid grid-cols-1 gap-px bg-border/60 lg:grid-cols-2">
          {SOLUTIONS.map((solution, i) => {
            const copy = t.solutions.items[solution.slug];
            const isEntry = i === 0;
            return (
              <motion.article
                key={solution.slug}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                onViewportEnter={() => trackSolutionViewed(solution.slug)}
                tabIndex={0}
                className="group relative flex flex-col bg-background p-8 transition-colors duration-500 focus-within:bg-secondary/30 hover:bg-secondary/30 focus-visible:outline-none md:p-14"
              >
                {/* Directional accent: turquoise travels along the product edge. */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-px w-0 bg-primary transition-all duration-500 ease-out group-hover:w-full group-focus-within:w-full"
                />

                <div className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2">
                  <span className="subheadline text-primary">
                    {solution.number} — {copy.name}
                  </span>
                  {isEntry && (
                    <span className="border border-border px-2 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
                      {t.solutions.bestStart}
                    </span>
                  )}
                </div>

                <h3 className="headline-card mb-6 text-2xl transition-colors duration-300 group-hover:text-primary group-focus-within:text-primary md:text-3xl lg:text-[2.25rem]">
                  {copy.headlineA}
                  <br />
                  {copy.headlineB}
                </h3>
                <p className="body-regular mb-8 max-w-md text-muted-foreground">{copy.copy}</p>

                <ul className="mb-10 flex flex-wrap gap-x-6 gap-y-2">
                  {copy.features.map((f) => (
                    <li key={f} className="body-small text-muted-foreground">
                      · {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto border-t border-border pt-8">
                  <p className="mb-2 font-display text-3xl uppercase tracking-tight md:text-4xl">
                    <Price solution={solution} />
                  </p>
                  <p className="subheadline mb-8 text-foreground">
                    {t.solutions.delivery[solution.deliveryKey]}
                  </p>
                  <div className="flex flex-wrap items-center gap-6">
                    <span onClick={() => trackSolutionSelected(solution.slug)}>
                      <WhatsAppCTA
                        label={copy.cta}
                        message={t.common.solutionMessage(copy.name)}
                        location="solutions_section"
                        product={solution.slug}
                      />
                    </span>
                    <Link
                      to={`/solutions/${solution.slug}`}
                      className="nav-link link-underline inline-flex min-h-[2.75rem] items-center gap-2"
                    >
                      {t.solutions.whatYouGet}
                      <ArrowRight
                        size={13}
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <p className="body-small mt-10 max-w-2xl text-muted-foreground">
          {t.solutions.deliveryNote}
        </p>
      </div>
    </section>
  );
};

export default SolutionsSection;
