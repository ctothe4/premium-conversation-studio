import { motion, useReducedMotion } from "framer-motion";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import HeroCommerce from "@/components/sections/HeroCommerce";
import ProblemSection from "@/components/sections/ProblemSection";
import CommerceJourney from "@/components/sections/CommerceJourney";
import SolutionsSection from "@/components/sections/SolutionsSection";
import LiveDemo from "@/components/sections/LiveDemo";
import IndustriesSection from "@/components/sections/IndustriesSection";
import WebsitesSection from "@/components/sections/WebsitesSection";
import PricingSection from "@/components/sections/PricingSection";
import TrustSection from "@/components/sections/TrustSection";
import Qualifier from "@/components/sections/Qualifier";
import FinalCta from "@/components/sections/FinalCta";
import { useLocale } from "@/context/LocaleContext";

const Index = () => {
  const { t } = useLocale();
  const reduce = useReducedMotion();

  return (
    <Layout>
      <Seo title={t.meta.home.title} description={t.meta.home.description} path="/" />

      <section className="flex min-h-[88vh] items-center py-16 md:py-24">
        <div className="container-editorial w-full">
          <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="subheadline mb-8 block"
              >
                {t.hero.eyebrow}
              </motion.span>

              <motion.h1
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="headline-hero mb-10 text-[clamp(2.75rem,10vw,9rem)] leading-[0.9]"
              >
                {t.hero.headlineA}
                <br />
                <span className="text-primary">{t.hero.headlineB}</span>
              </motion.h1>

              <div className="divider-refined mb-10" />

              <motion.p
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="body-large mb-12 max-w-xl text-muted-foreground"
              >
                {t.hero.body}
              </motion.p>

              <motion.div
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col gap-4 sm:flex-row sm:items-center"
              >
                <WhatsAppCTA
                  label={t.hero.primary}
                  message={t.common.whatsappMessage}
                  location="hero"
                  product="whatsapp-store"
                />
                <a
                  href="#how-it-works"
                  className="nav-link link-underline inline-flex min-h-[3rem] items-center gap-2"
                >
                  {t.hero.secondary} ↓
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <HeroCommerce />
            </motion.div>
          </div>
        </div>
      </section>

      <ProblemSection />
      <div id="how-it-works">
        <CommerceJourney />
      </div>
      <SolutionsSection />
      <LiveDemo />
      <IndustriesSection />
      <WebsitesSection />
      <PricingSection />
      <TrustSection />
      <Qualifier />
      <FinalCta />
    </Layout>
  );
};

export default Index;
