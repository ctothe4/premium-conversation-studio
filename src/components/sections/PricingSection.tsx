import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Globe } from "lucide-react";
import { SOLUTIONS } from "@/config/products";
import { useLocale } from "@/context/LocaleContext";
import Price from "@/components/Price";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import LocalisationDrawer from "@/components/LocalisationDrawer";
import { trackPricingCta } from "@/lib/analytics";

const PricingSection = () => {
  const { t, currency } = useLocale();
  const reduce = useReducedMotion();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <section className="section-padding border-t border-border" id="pricing">
      <div className="container-editorial">
        <span className="subheadline mb-6 block">{t.pricing.eyebrow}</span>
        <h2 className="headline-section mb-8 max-w-3xl">{t.pricing.headline}</h2>
        <p className="body-large mb-14 max-w-xl text-muted-foreground">{t.pricing.copy}</p>

        <button
          type="button"
          onClick={() => setDrawerOpen(true)}
          className="nav-link link-underline mb-12 inline-flex min-h-[2.75rem] items-center gap-2"
        >
          <Globe size={13} aria-hidden="true" />
          {t.pricing.changeCurrency} ({currency})
        </button>

        <div className="grid grid-cols-1 gap-px bg-border/60 md:grid-cols-2 xl:grid-cols-4">
          {SOLUTIONS.map((solution, i) => {
            const copy = t.solutions.items[solution.slug];
            return (
              <motion.div
                key={solution.slug}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                className="group flex flex-col bg-background p-8 transition-colors duration-500 hover:bg-secondary/30 md:p-10"
              >
                <span className="subheadline mb-6 text-primary">{solution.number}</span>
                <h3 className="headline-card mb-8">{copy.name}</h3>
                <p className="mb-3 font-display text-3xl uppercase tracking-tight md:text-4xl">
                  <Price solution={solution} />
                </p>
                <p className="subheadline mb-10 text-foreground">
                  {t.solutions.delivery[solution.deliveryKey]}
                </p>
                <div className="mt-auto" onClick={() => trackPricingCta(solution.slug)}>
                  <WhatsAppCTA
                    label={t.pricing.cta}
                    message={t.common.solutionMessage(copy.name)}
                    location="pricing_section"
                    product={solution.slug}
                    variant="outline"
                    className="w-full px-6 py-4"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="body-small mt-10 max-w-2xl text-muted-foreground">{t.pricing.approximate}</p>
      </div>

      <LocalisationDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </section>
  );
};

export default PricingSection;
