import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import IndustriesSection from "@/components/sections/IndustriesSection";
import FinalCta from "@/components/sections/FinalCta";
import { useLocale } from "@/context/LocaleContext";

const Industries = () => {
  const { t } = useLocale();

  return (
    <Layout>
      <Seo
        title={t.meta.industries.title}
        description={t.meta.industries.description}
        path="/industries"
      />

      <section className="section-padding-sm">
        <div className="container-editorial">
          <span className="subheadline mb-6 block">{t.industries.eyebrow}</span>
          <h1 className="headline-section max-w-3xl">
            {t.industries.headlineA}
            <br />
            <span className="text-primary">{t.industries.headlineB}</span>
          </h1>
        </div>
      </section>

      <IndustriesSection />
      <FinalCta />
    </Layout>
  );
};

export default Industries;
