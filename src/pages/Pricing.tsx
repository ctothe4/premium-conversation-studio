import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import PricingSection from "@/components/sections/PricingSection";
import Qualifier from "@/components/sections/Qualifier";
import FinalCta from "@/components/sections/FinalCta";
import { useLocale } from "@/context/LocaleContext";

const Pricing = () => {
  const { t } = useLocale();

  return (
    <Layout>
      <Seo
        title={t.meta.pricing.title}
        description={t.meta.pricing.description}
        path="/pricing"
      />

      <section className="section-padding-sm">
        <div className="container-editorial">
          <span className="subheadline mb-6 block">{t.pricing.eyebrow}</span>
          <h1 className="headline-section mb-8 max-w-3xl">{t.pricing.headline}</h1>
          <p className="body-large max-w-xl text-muted-foreground">{t.pricing.copy}</p>
        </div>
      </section>

      <PricingSection />
      <Qualifier />
      <FinalCta />
    </Layout>
  );
};

export default Pricing;
