import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Check, ArrowRight } from "lucide-react";
const advisoryFeatures = ["AI Business Audit", "Systems and workflow mapping", "Operational diagnosis", "AI opportunity matrix", "Strategic roadmap and recommendations"];
const pricingTiers = [{
  name: "Digital Fix",
  price: "$499",
  frequency: "one-time",
  tagline: "Best for getting online fast, or upgrading your online presence",
  features: ["1-page modern website", "Mobile-first design", "Click-to-call", "WhatsApp button", "Google Maps embed", "Basic SEO", "Hosting setup", "Domain connection"],
  popular: false
}, {
  name: "Growth System",
  price: "$699",
  frequency: "one-time",
  tagline: "Turn visitors into leads",
  features: ["Everything in Digital Fix", "Contact form", "Booking calendar", "Lead capture", "Email notifications", "Google Analytics", "CRM setup (Airtable/Notion)"],
  popular: true
}, {
  name: "Revenue Engine",
  price: "$999–$1,499",
  frequency: "one-time",
  tagline: "For businesses ready to scale",
  features: ["Everything in Growth System", "Payments", "Invoicing", "Review automation", "WhatsApp flows", "AI chatbot", "Basic marketing automation"],
  popular: false
}];
const Pricing = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="section-padding pb-16">
        <div className="container-editorial">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }} className="text-center mb-16">
            <p className="subheadline mb-6">Pricing</p>
            <h1 className="headline-section mb-8">
              Simple, Transparent
              <br />
              <span className="text-primary">Pricing</span>
            </h1>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              No contracts. No long-term commitments. Just results.
            </p>
          </motion.div>

          {/* Filtering Section */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2,
          ease: "easeOut"
        }} className="text-center mb-20 border-t border-b border-border py-16">
            <p className="subheadline text-primary mb-6">For Teams Ready to Think Bigger</p>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto mb-4">
              Not every business needs AI.
              <br />
              But every modern organization eventually needs better systems.
            </p>
            <p className="body-regular text-muted-foreground max-w-2xl mx-auto">
              Our AI Systems Advisory is designed for founder-led companies and teams who feel operational friction, complexity, or inefficiency. And want to redesign how their organization actually works.
            </p>
          </motion.div>

          {/* AI Systems Advisory - Premium Tier */}
          <motion.div initial={{
          opacity: 0,
          y: 40
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.3,
          ease: "easeOut"
        }} className="mb-24">
            <div className="relative border-2 border-primary bg-gradient-to-b from-primary/10 to-transparent p-10 lg:p-14">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-6 py-2 text-xs uppercase tracking-[0.2em] font-semibold">
                  Premium Advisory
                </span>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                <div>
                  <h2 className="headline-section mb-4">AI Systems Advisory</h2>
                  <p className="body-large text-muted-foreground mb-8">
                    For founder-led businesses and teams ready to redesign how they operate.
                  </p>
                  <div className="border-t border-border pt-6 mb-8">
                    <span className="font-display text-5xl lg:text-6xl">Starting at $4,99</span>
                  </div>
                  <p className="body-regular text-muted-foreground mb-10">
                    Strategic AI advisory focused on redesigning your organization's operating model. We diagnose how your business currently functions, identify where intelligence can be automated or augmented, and design custom human + AI systems.
                  </p>
                  <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-3">
                    Apply for AI Advisory
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <p className="body-small text-muted-foreground mt-6">
                    Strategic diagnostic. No tools, no templates. Systems-level thinking.
                  </p>
                </div>
                
                <div>
                  <p className="subheadline mb-6">What's Included</p>
                  <ul className="space-y-5">
                    {advisoryFeatures.map(feature => <li key={feature} className="flex items-start gap-4">
                        <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="body-regular">{feature}</span>
                      </li>)}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Digital Services Section Header */}
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="text-center mb-12">
            <p className="subheadline text-muted-foreground mb-4">Digital Services</p>
            <p className="body-regular text-muted-foreground max-w-xl mx-auto">
              For businesses building their digital presence and growth infrastructure.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {pricingTiers.map((tier, index) => <motion.div key={tier.name} initial={{
            opacity: 0,
            y: 40
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.15,
            ease: "easeOut"
          }} className={`relative border ${tier.popular ? "border-primary bg-primary/5" : "border-border bg-card"} p-8 lg:p-10`}>
                {tier.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1.5 text-xs uppercase tracking-[0.15em] font-semibold">
                      Most Popular
                    </span>
                  </div>}

                <div className="mb-8">
                  <h3 className="headline-card mb-2">{tier.name}</h3>
                  <p className="body-small text-muted-foreground mb-6">
                    {tier.tagline}
                  </p>
                  <div className="border-t border-border pt-6">
                    <span className="font-display text-4xl lg:text-5xl">{tier.price}</span>
                    <span className="text-muted-foreground ml-2">{tier.frequency}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-10">
                  {tier.features.map(feature => <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="body-small">{feature}</span>
                    </li>)}
                </ul>

                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className={`block text-center ${tier.popular ? "btn-primary" : "btn-outline"} w-full`}>
                  Get Started
                </a>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <AnimatedSection className="section-padding-sm border-t border-border">
        <div className="container-editorial text-center">
          <h2 className="headline-card mb-6">Not sure which plan is right for you?</h2>
          <p className="body-large text-muted-foreground mb-10 max-w-xl mx-auto">
            Book a free consultation and we'll help you choose the perfect solution for your business.
          </p>
          <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
            Start with a Free Audit
          </a>
        </div>
      </AnimatedSection>
    </Layout>;
};
export default Pricing;