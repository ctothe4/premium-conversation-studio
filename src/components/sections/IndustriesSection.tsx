import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { INDUSTRIES } from "@/config/products";
import { useLocale } from "@/context/LocaleContext";

const IndustriesSection = () => {
  const { t } = useLocale();
  const reduce = useReducedMotion();

  return (
    <section className="section-padding border-t border-border" id="industries">
      <div className="container-editorial">
        <span className="subheadline mb-6 block">{t.industries.eyebrow}</span>
        <h2 className="headline-section mb-16 max-w-3xl md:mb-24">
          {t.industries.headlineA}
          <br />
          <span className="text-primary">{t.industries.headlineB}</span>
        </h2>

        <div className="border-t border-border">
          {INDUSTRIES.map((industry, i) => {
            const copy = t.industries.items[industry.slug];
            return (
              <motion.div
                key={industry.slug}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="border-b border-border"
              >
                <Link
                  to={`/industries/${industry.slug}`}
                  className="group block py-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:py-14"
                >
                  <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-baseline gap-6">
                      <span className="subheadline text-primary">{industry.number}</span>
                      <h3 className="headline-card transition-colors duration-300 group-hover:text-primary">
                        {copy.name}
                      </h3>
                    </div>
                    <ol className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      {copy.steps.map((step, index) => (
                        <li
                          key={step}
                          className="body-small flex items-center gap-3 text-muted-foreground"
                        >
                          {step}
                          {index < copy.steps.length - 1 && (
                            <span className="text-primary" aria-hidden="true">
                              →
                            </span>
                          )}
                        </li>
                      ))}
                    </ol>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <Link
          to="/industries"
          className="nav-link link-underline mt-12 inline-flex items-center gap-3"
        >
          {t.industries.cta}
          <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
};

export default IndustriesSection;
