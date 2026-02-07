import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Check, ArrowRight } from "lucide-react";

const Pricing = () => {
  return (
    <Layout>
      {/* Orientation Section */}
      <section className="section-padding pb-16">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h1 className="headline-section mb-8">
              Choose the right system for
              <br />
              <span className="text-primary">where your business is today</span>
            </h1>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto mb-4">
              Everything we build follows the same order:
            </p>
            <p className="font-display text-2xl md:text-3xl mb-8">
              Foundation → Growth → Leverage
            </p>
            <p className="body-regular text-muted-foreground max-w-xl mx-auto">
              If you're not sure where to start, book a free call and we'll point you in the right direction.
            </p>
          </motion.div>

          {/* Growth System - Most Popular */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mb-12"
          >
            <div className="relative border-2 border-primary bg-primary/5 p-10 lg:p-14">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-6 py-2 text-xs uppercase tracking-[0.2em] font-semibold">
                  Most Popular
                </span>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                <div>
                  <h2 className="headline-section mb-2">Growth System</h2>
                  <p className="body-large text-muted-foreground mb-6">
                    Turn visitors into leads
                  </p>
                  <div className="border-t border-border pt-6 mb-6">
                    <span className="font-display text-5xl lg:text-6xl">$699</span>
                    <span className="text-muted-foreground ml-2">one-time</span>
                  </div>
                  <p className="body-regular text-muted-foreground mb-8">
                    For businesses with a solid website foundation that want it to produce real inquiries.
                  </p>
                  <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-3"
                  >
                    Add a Growth Layer
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <p className="body-small text-muted-foreground mt-6">
                    Assumes you already have a credible website. If you don't, start with a foundation first.
                  </p>
                </div>

                <div>
                  <p className="subheadline mb-6">What's Included</p>
                  <ul className="space-y-4">
                    {[
                      "Conversion-ready contact form",
                      "Booking calendar integration",
                      "Lead capture + email notifications",
                      "Google Analytics setup",
                      "Lightweight CRM setup (Airtable or Notion)",
                    ].map((feature) => (
                      <li key={feature} className="flex items-start gap-4">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="body-regular">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Revenue Engine */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mb-12"
          >
            <div className="border border-border bg-card p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
                <div>
                  <h2 className="headline-card mb-2">Revenue Engine</h2>
                  <p className="body-large text-muted-foreground mb-6">
                    For businesses ready to scale
                  </p>
                  <div className="border-t border-border pt-6 mb-6">
                    <span className="font-display text-4xl lg:text-5xl">$999–$1,499</span>
                    <span className="text-muted-foreground ml-2">one-time</span>
                  </div>
                  <p className="body-regular text-muted-foreground mb-8">
                    Turns your website into an operational revenue assistant that captures, qualifies, and follows up.
                  </p>
                  <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-3"
                  >
                    Build a Revenue Engine
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <p className="body-small text-muted-foreground mt-6">
                    Best when your foundation and lead capture are already in place.
                  </p>
                </div>

                <div>
                  <p className="subheadline mb-6">What's Included</p>
                  <ul className="space-y-4">
                    {[
                      "Everything in Growth System",
                      "Payments + invoicing",
                      "Review automation",
                      "WhatsApp communication flows",
                      "AI chatbot for inquiries",
                      "Basic marketing automation",
                    ].map((feature) => (
                      <li key={feature} className="flex items-start gap-4">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="body-regular">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Digital Fix - De-emphasized */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mb-16"
          >
            <div className="border border-border/60 bg-muted/30 p-6 lg:p-8">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                <div>
                  <h3 className="text-xl font-display mb-2">Digital Fix</h3>
                  <p className="body-regular text-muted-foreground mb-4">
                    Get online fast or clean things up
                  </p>
                  <div className="border-t border-border pt-4 mb-4">
                    <span className="font-display text-3xl">$499</span>
                    <span className="text-muted-foreground ml-2 text-sm">one-time</span>
                  </div>
                  <p className="body-small text-muted-foreground mb-6">
                    For early-stage businesses that need a quick, functional presence.
                  </p>
                  <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline inline-flex items-center gap-2 text-sm"
                  >
                    Quick Fix
                    <ArrowRight className="w-3 h-3" />
                  </a>
                  <p className="body-small text-muted-foreground mt-4 italic">
                    This is a quick fix, not a long-term foundation. If you're serious about growth, start with a foundation.
                  </p>
                </div>

                <div>
                  <ul className="space-y-3">
                    {[
                      "1-page modern website",
                      "Mobile-first design",
                      "Click-to-call + WhatsApp button",
                      "Google Maps embed",
                      "Basic SEO",
                      "Hosting setup + domain connection",
                    ].map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <span className="body-small text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Foundation Teaser */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="text-center border-t border-b border-border py-16 mb-16"
          >
            <h3 className="headline-card mb-4">Don't have a website yet?</h3>
            <p className="body-regular text-muted-foreground max-w-2xl mx-auto mb-8">
              Some businesses need a foundation before growth makes sense. We offer a Digital Foundation designed to establish credibility, ownership, and a base you can build on.
            </p>
            <Link
              to="/foundation"
              className="btn-outline inline-flex items-center gap-2"
            >
              Learn about Digital Foundation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* AI Systems Advisory - Last, Quiet */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="mb-20"
          >
            <div className="border border-border/50 p-8 lg:p-10">
              <div className="text-center mb-8">
                <span className="bg-muted text-muted-foreground px-4 py-1.5 text-xs uppercase tracking-[0.15em] font-medium">
                  Premium Advisory
                </span>
              </div>

              <div className="max-w-3xl mx-auto text-center">
                <h3 className="headline-card mb-2">AI Systems Advisory</h3>
                <p className="body-regular text-muted-foreground mb-6">
                  For founder-led businesses redesigning how they operate
                </p>
                <div className="mb-6">
                  <span className="font-display text-3xl">Starting at $4,999</span>
                </div>
                <p className="body-regular text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Strategic AI advisory focused on diagnosing how your business currently functions, identifying where intelligence can be automated or augmented, and designing custom human + AI systems.
                </p>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center gap-2"
                >
                  Apply for Advisory
                  <ArrowRight className="w-4 h-4" />
                </a>
                <p className="body-small text-muted-foreground mt-6 italic">
                  This is operational redesign, not a marketing package.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding-sm border-t border-border">
        <div className="container-editorial text-center">
          <h2 className="headline-card mb-4">Not sure what you need?</h2>
          <p className="body-large text-muted-foreground mb-10 max-w-xl mx-auto">
            Book a free call and we'll recommend the right starting point in 15 minutes.
          </p>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Book a Free Call
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
