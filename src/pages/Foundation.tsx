import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Check } from "lucide-react";

const whoIsFor = [
  "Referral and word-of-mouth businesses",
  "Businesses using only social platforms",
  "Teams that want legitimacy and ownership",
  "Owners who want a base they won't have to redo",
];

const whatYouGet = [
  "A professional website designed for clarity and trust",
  "Mobile-first, fast loading, and easy to navigate",
  "Clear service structure and contact paths",
  "Built to expand, not replace",
];

const Foundation = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding pb-20">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="headline-section mb-8">
              Before growth, you need a{" "}
              <span className="text-primary">foundation</span>.
            </h1>
            <p className="body-large text-muted-foreground mb-12">
              If your business doesn't have a website, we help you put a simple,
              credible digital foundation in place so everything else works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Request a Digital Presence Review
              </a>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Book a Free Call
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who This Is For */}
      <AnimatedSection className="section-padding-sm border-t border-border">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="subheadline mb-4">Who This Is For</p>
              <h2 className="headline-card mb-8">
                Built for businesses that already work offline
              </h2>
            </div>
            <div>
              <ul className="space-y-4">
                {whoIsFor.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="body-regular">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* The Real Risk */}
      <AnimatedSection className="section-padding-sm border-t border-border">
        <div className="container-editorial">
          <div className="max-w-2xl">
            <p className="subheadline mb-4">The Real Risk</p>
            <h2 className="headline-card mb-8">
              The risk is invisible until it isn't
            </h2>
            <p className="body-large text-muted-foreground">
              Operating without a website can work. Until customers search you.
              When you don't control what they see, you don't control first
              impressions or credibility. A foundation isn't about traffic. It's
              about ownership.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Our Approach */}
      <AnimatedSection className="section-padding-sm border-t border-border">
        <div className="container-editorial">
          <div className="max-w-2xl ml-auto text-right lg:text-left">
            <p className="subheadline mb-4">Our Approach</p>
            <h2 className="headline-card mb-8">
              We start with a review, not a build
            </h2>
            <p className="body-large text-muted-foreground">
              We begin with a Digital Presence Review to see what customers see
              today, where trust breaks down, and what the minimum credible setup
              should be. Then we recommend the next step.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* What You Get */}
      <AnimatedSection className="section-padding-sm border-t border-border">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="subheadline mb-4">What You Get</p>
              <h2 className="headline-card mb-8">
                A simple foundation you can build on
              </h2>
            </div>
            <div>
              <ul className="space-y-4">
                {whatYouGet.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="body-regular">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Final CTA */}
      <AnimatedSection className="section-padding border-t border-border">
        <div className="container-editorial text-center">
          <h2 className="headline-card mb-8">Ready to establish a foundation?</h2>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block mb-4"
          >
            Request a Digital Presence Review
          </a>
          <p className="body-small text-muted-foreground">
            Limited weekly availability.
          </p>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default Foundation;
