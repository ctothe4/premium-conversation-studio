import Layout from "@/components/Layout";
import OrientationSection from "@/components/pricing/OrientationSection";
import PricingCard from "@/components/pricing/PricingCard";
import FoundationTeaser from "@/components/pricing/FoundationTeaser";
import AdvisoryCard from "@/components/pricing/AdvisoryCard";
import DecisionSlide from "@/components/pricing/DecisionSlide";
import AuditRevealSection from "@/components/pricing/AuditRevealSection";
import FinalCTA from "@/components/pricing/FinalCTA";

const pricingTiers = [
  {
    name: "Growth System",
    subtitle: "Turn visitors into leads",
    price: "$699",
    frequency: "one-time",
    intro: "For businesses with a solid website foundation that want it to produce real inquiries.",
    features: [
      "Conversion-ready contact form",
      "Booking calendar integration",
      "Lead capture + email notifications",
      "Google Analytics setup",
      "Lightweight CRM setup (Airtable or Notion)",
    ],
    microcopy: "Assumes you already have a credible website. If you don't, start with a foundation first.",
    buttonText: "Add a Growth Layer",
    popular: true,
    subdued: false,
  },
  {
    name: "Revenue Engine",
    subtitle: "For businesses ready to scale",
    price: "$999–$1,499",
    frequency: "one-time",
    intro: "Turns your website into an operational revenue assistant that captures, qualifies, and follows up.",
    features: [
      "Everything in Growth System",
      "Payments + invoicing",
      "Review automation",
      "WhatsApp communication flows",
      "AI chatbot for inquiries",
      "Basic marketing automation",
    ],
    microcopy: "Best when your foundation and lead capture are already in place.",
    buttonText: "Build a Revenue Engine",
    popular: false,
    subdued: false,
  },
  {
    name: "Digital Fix",
    subtitle: "Get online fast or clean things up",
    price: "$499",
    frequency: "one-time",
    intro: "For early-stage businesses that need a quick, functional presence.",
    features: [
      "1-page modern website",
      "Mobile-first design",
      "Click-to-call + WhatsApp button",
      "Google Maps embed",
      "Basic SEO",
      "Hosting setup + domain connection",
    ],
    microcopy: "This is a quick fix, not a long-term foundation. If you want something built to scale, start with a foundation.",
    buttonText: "Quick Fix",
    popular: false,
    subdued: true,
  },
];

const Pricing = () => {
  return (
    <Layout>
      <section className="section-padding pb-16">
        <div className="container-editorial">
          <OrientationSection />

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-6 mb-16">
            {pricingTiers.map((tier, index) => (
              <PricingCard
                key={tier.name}
                name={tier.name}
                subtitle={tier.subtitle}
                price={tier.price}
                frequency={tier.frequency}
                intro={tier.intro}
                features={tier.features}
                microcopy={tier.microcopy}
                buttonText={tier.buttonText}
                buttonHref="https://calendly.com"
                popular={tier.popular}
                subdued={tier.subdued}
                index={index}
              />
            ))}
          </div>

          {/* Foundation Teaser */}
          <div className="mb-20">
            <FoundationTeaser />
          </div>

          {/* AI Systems Advisory - Quiet */}
          <div className="mb-20">
            <AdvisoryCard />
          </div>

          {/* Decision Slide */}
          <div className="mb-20">
            <DecisionSlide />
          </div>

          {/* Audit Reveal Section */}
          <div className="mb-20">
            <AuditRevealSection />
          </div>

          {/* Final CTA */}
          <FinalCTA />
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
