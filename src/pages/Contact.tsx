import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import ContactForm from "@/components/ContactForm";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { useLocale } from "@/context/LocaleContext";
import { SITE } from "@/config/site";

const Contact = () => {
  const { t } = useLocale();

  return (
    <Layout>
      <Seo title={t.meta.contact.title} description={t.meta.contact.description} path="/contact" />

      <section className="section-padding-sm">
        <div className="container-editorial">
          <span className="subheadline mb-6 block">{t.contact.eyebrow}</span>
          <h1 className="headline-section mb-10 max-w-3xl">{t.contact.headline}</h1>
          <p className="body-large mb-12 max-w-xl text-muted-foreground">{t.contact.body}</p>

          <WhatsAppCTA
            label={t.contact.whatsapp}
            message={t.common.whatsappMessage}
            location="contact_page"
          />
        </div>
      </section>

      <section className="section-padding border-t border-border">
        <div className="container-editorial">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <h2 className="headline-card mb-6">{t.contact.orForm}</h2>
              <p className="body-small mb-6 text-muted-foreground">{t.contact.response}</p>
              <a href={`mailto:${SITE.email}`} className="nav-link link-underline">
                {SITE.email}
              </a>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
