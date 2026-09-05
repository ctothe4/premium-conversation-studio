import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SOLUTIONS } from "@/config/products";
import { useLocale } from "@/context/LocaleContext";
import Price from "@/components/Price";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { trackSolutionViewed } from "@/lib/analytics";

interface Props {
  showEyebrow?: boolean;
}

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
            return (
              <motion.article
                key={solution.slug}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                onViewportEnter={() => trackSolutionViewed(solution.slug)}
                className="flex flex-col bg-background p-8 md:p-14"
              >
                <span className="subheadline mb-8 text-primary">
                  {solution.number} — {copy.name}
                </span>
                <h3 className="headline-card mb-6 text-2xl md:text-3xl lg:text-[2.25rem]">
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
                    <WhatsAppCTA
                      label={copy.cta}
                      message={t.common.solutionMessage(copy.name)}
                      location="solutions_section"
                      product={solution.slug}
                    />
                    <Link
                      to={`/solutions/${solution.slug}`}
                      className="nav-link link-underline inline-flex items-center gap-2"
                    >
                      {t.solutions.whatYouGet}
                      <ArrowRight size={13} aria-hidden="true" />
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
