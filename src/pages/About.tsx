import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import TrustSection from "@/components/sections/TrustSection";
import { useLocale } from "@/context/LocaleContext";

const About = () => {
  const { t } = useLocale();

  return (
    <Layout>
      <Seo title={t.meta.about.title} description={t.meta.about.description} path="/about" />

      <section className="section-padding-sm">
        <div className="container-editorial">
          <span className="subheadline mb-6 block">{t.about.eyebrow}</span>
          <h1 className="headline-section mb-14 max-w-4xl">{t.about.headline}</h1>
          <div className="max-w-2xl space-y-8">
            <p className="body-large text-muted-foreground">{t.about.body1}</p>
            <p className="body-large text-muted-foreground">{t.about.body2}</p>
            <p className="body-large">{t.about.body3}</p>
          </div>
          <div className="mt-14">
            <WhatsAppCTA
              label={t.about.cta}
              message={t.common.whatsappMessage}
              location="about"
            />
          </div>
        </div>
      </section>

      <TrustSection />
    </Layout>
  );
};

export default About;
