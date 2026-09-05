import { useLocale } from "@/context/LocaleContext";
import { SOLUTIONS } from "@/config/products";
import { usePriceText } from "@/components/Price";
import WhatsAppCTA from "@/components/WhatsAppCTA";

const FinalCta = () => {
  const { t } = useLocale();
  const entryPrice = usePriceText(SOLUTIONS[0]);

  return (
    <section className="section-padding border-t border-border">
      <div className="container-editorial">
        <span className="subheadline mb-10 block">{t.finalCta.eyebrow}</span>
        <h2 className="headline-hero mb-16 max-w-5xl">
          {t.finalCta.headlineA}
          <br />
          {t.finalCta.headlineB}
        </h2>
        <p className="headline-section mb-20 max-w-4xl text-primary">
          {t.finalCta.secondA}
          <br />
          {t.finalCta.secondB}
        </p>
        <WhatsAppCTA
          label={t.finalCta.cta}
          message={t.common.whatsappMessage}
          location="final_cta"
          product="whatsapp-store"
        />
        <p className="body-small mt-8 text-muted-foreground">
          {t.finalCta.supporting(entryPrice)}
        </p>
      </div>
    </section>
  );
};

export default FinalCta;
