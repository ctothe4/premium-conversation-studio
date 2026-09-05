import { motion, useReducedMotion } from "framer-motion";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import CommerceJourney from "@/components/sections/CommerceJourney";
import Qualifier from "@/components/sections/Qualifier";
import FinalCta from "@/components/sections/FinalCta";
import { useLocale } from "@/context/LocaleContext";

const HowItWorks = () => {
  const { t } = useLocale();
  const reduce = useReducedMotion();

  return (
    <Layout>
      <Seo
        title={t.meta.howItWorks.title}
        description={t.meta.howItWorks.description}
        path="/how-it-works"
      />

      <section className="section-padding-sm">
        <div className="container-editorial">
          <span className="subheadline mb-6 block">{t.howItWorks.eyebrow}</span>
          <h1 className="headline-section mb-10 max-w-4xl">{t.howItWorks.headline}</h1>
          <p className="body-large max-w-2xl text-muted-foreground">{t.howItWorks.intro}</p>
        </div>
      </section>

      <CommerceJourney />

      <section className="section-padding border-t border-border">
        <div className="container-editorial">
          <h2 className="headline-section mb-16 max-w-3xl">{t.howItWorks.stepsTitle}</h2>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {t.howItWorks.steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <span className="subheadline mb-6 block text-primary">0{i + 1}</span>
                <div className="divider-refined mb-6" />
                <h3 className="headline-card mb-4">{step.title}</h3>
                <p className="body-regular text-muted-foreground">{step.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Qualifier />
      <FinalCta />
    </Layout>
  );
};

export default HowItWorks;
