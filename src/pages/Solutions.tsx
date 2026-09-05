import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import SolutionsSection from "@/components/sections/SolutionsSection";
import Qualifier from "@/components/sections/Qualifier";
import FinalCta from "@/components/sections/FinalCta";
import { useLocale } from "@/context/LocaleContext";

const Solutions = () => {
  const { t } = useLocale();

  return (
    <Layout>
      <Seo
        title={t.meta.solutions.title}
        description={t.meta.solutions.description}
        path="/solutions"
      />

      <section className="section-padding-sm">
        <div className="container-editorial">
          <span className="subheadline mb-6 block">{t.solutions.eyebrow}</span>
          <h1 className="headline-section max-w-3xl">{t.solutions.headline}</h1>
        </div>
      </section>

      <SolutionsSection showEyebrow={false} />
      <Qualifier />
      <FinalCta />
    </Layout>
  );
};

export default Solutions;
