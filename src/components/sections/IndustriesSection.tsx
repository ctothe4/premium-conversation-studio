import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { INDUSTRIES } from "@/config/products";
import { useLocale } from "@/context/LocaleContext";
import { trackIndustrySelected } from "@/lib/analytics";

/**
 * Industries.
 * Each row is a journey. Hover, focus or tap activates one journey at a time;
 * the inactive journeys stay visually restrained.
 */
const IndustriesSection = () => {
  const { t } = useLocale();
  const reduce = useReducedMotion();
  const [active, setActive] = useState<string>(INDUSTRIES[0].slug);

  const activate = (slug: string) => {
    if (slug === active) return;
    setActive(slug);
    trackIndustrySelected(slug);
  };

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
            const isActive = active === industry.slug;
            return (
              <motion.div
                key={industry.slug}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                onMouseEnter={() => activate(industry.slug)}
                onFocusCapture={() => activate(industry.slug)}
                className={`border-b border-border transition-colors duration-500 ${
                  isActive ? "bg-secondary/40" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => activate(industry.slug)}
                  aria-expanded={isActive}
                  className="block w-full py-8 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:py-12"
                >
                  <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-baseline gap-6">
                      <span
                        className={`subheadline transition-colors duration-300 ${
                          isActive ? "text-primary" : "text-muted-foreground"
                        }`}
                      >
                        {industry.number}
                      </span>
                      <h3
                        className={`headline-card transition-colors duration-300 ${
                          isActive ? "text-primary" : ""
                        }`}
                      >
                        {copy.name}
                      </h3>
                    </div>

                    <ol className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      {copy.steps.map((step, index) => (
                        <motion.li
                          key={step}
                          animate={{ opacity: isActive ? 1 : 0.4 }}
                          transition={{
                            duration: reduce ? 0 : 0.35,
                            delay: isActive && !reduce ? index * 0.07 : 0,
                          }}
                          className={`body-small flex items-center gap-3 ${
                            isActive ? "text-foreground" : "text-muted-foreground"
                          }`}
                        >
                          {step}
                          {index < copy.steps.length - 1 && (
                            <span
                              className={isActive ? "text-primary" : "text-border"}
                              aria-hidden="true"
                            >
                              →
                            </span>
                          )}
                        </motion.li>
                      ))}
                    </ol>
                  </div>
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                  transition={{ duration: reduce ? 0 : 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="overflow-hidden"
                >
                  <div className="max-w-2xl pb-10">
                    <p className="body-regular mb-5 text-muted-foreground">{copy.copy}</p>
                    <Link
                      to={`/industries/${industry.slug}`}
                      className="nav-link link-underline inline-flex min-h-[2.75rem] items-center gap-2 text-primary"
                    >
                      {t.industries.cta}
                      <ArrowRight size={13} aria-hidden="true" />
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <Link
          to="/industries"
          className="nav-link link-underline mt-12 inline-flex min-h-[2.75rem] items-center gap-3"
        >
          {t.industries.cta}
          <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
};

export default IndustriesSection;
