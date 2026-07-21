import { useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { useShowPricing } from "@/hooks/useGeo";

const AuditReveal = () => {
  const isZambia = useIsZambia();
  // Set noindex for internal page
  useEffect(() => {
    const metaRobots = document.createElement("meta");
    metaRobots.name = "robots";
    metaRobots.content = "noindex, nofollow";
    document.head.appendChild(metaRobots);

    return () => {
      document.head.removeChild(metaRobots);
    };
  }, []);

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-16"
          >
            <span className="bg-muted text-muted-foreground px-4 py-1.5 text-xs uppercase tracking-[0.15em] font-medium inline-block mb-6">
              Internal Use Only
            </span>
            <h1 className="headline-section mb-4">
              5-Minute Audit Reveal Script
            </h1>
            <p className="body-large text-muted-foreground">
              This page is for Social Currency operators only. It standardizes how sales calls are run. This is NOT marketing copy.
            </p>
          </motion.div>

          {/* Script Sections */}
          <div className="space-y-12 mb-20">
            {/* Frame */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border border-border p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-primary text-primary-foreground w-10 h-10 flex items-center justify-center font-display text-lg">
                  1
                </span>
                <div>
                  <h2 className="headline-card">Frame</h2>
                  <p className="body-small text-muted-foreground">0:00 – 1:00</p>
                </div>
              </div>
              <blockquote className="border-l-2 border-primary pl-6 body-large italic text-muted-foreground">
                "Thanks for taking the time. I'll walk you through what I saw, what it means, and where I'd start if this were my business. My goal isn't to sell you something you don't need."
              </blockquote>
            </motion.div>

            {/* Diagnosis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="border border-border p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-primary text-primary-foreground w-10 h-10 flex items-center justify-center font-display text-lg">
                  2
                </span>
                <div>
                  <h2 className="headline-card">Diagnosis</h2>
                  <p className="body-small text-muted-foreground">1:00 – 3:00</p>
                </div>
              </div>
              <blockquote className="border-l-2 border-primary pl-6 body-large italic text-muted-foreground mb-6">
                "If I look at this through a customer's eyes, here's what happens…"
              </blockquote>
              <ul className="space-y-3 pl-6">
                <li className="body-regular">
                  <strong>Clarity:</strong> do they immediately understand the business?
                </li>
                <li className="body-regular">
                  <strong>Trust:</strong> reviews, proof, legitimacy cues
                </li>
                <li className="body-regular">
                  <strong>Flow:</strong> how someone becomes a lead (or why they don't)
                </li>
              </ul>
            </motion.div>

            {/* Reframe */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="border border-border p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-primary text-primary-foreground w-10 h-10 flex items-center justify-center font-display text-lg">
                  3
                </span>
                <div>
                  <h2 className="headline-card">Reframe</h2>
                  <p className="body-small text-muted-foreground">3:00 – 4:00</p>
                </div>
              </div>
              <blockquote className="border-l-2 border-primary pl-6 body-large italic text-muted-foreground">
                "The issue usually isn't traffic. It's foundation and flow. When those are right, marketing starts working."
              </blockquote>
            </motion.div>

            {/* Decision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="border border-border p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-primary text-primary-foreground w-10 h-10 flex items-center justify-center font-display text-lg">
                  4
                </span>
                <div>
                  <h2 className="headline-card">Decision</h2>
                  <p className="body-small text-muted-foreground">4:00 – 5:00</p>
                </div>
              </div>
              <blockquote className="border-l-2 border-primary pl-6 body-large italic text-muted-foreground mb-4">
                "Everything we do follows the same order: Foundation → Growth → Leverage."
              </blockquote>
              <blockquote className="border-l-2 border-primary pl-6 body-large italic text-muted-foreground">
                "Based on what I saw, this is where I'd start if this were my business."
              </blockquote>
            </motion.div>
          </div>

          {/* Decision Slide */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="border-2 border-border p-8 lg:p-12"
          >
            <h2 className="headline-card text-center mb-12">
              How we work with businesses like yours
            </h2>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-10">
              {/* Foundation */}
              <div className="text-center p-6 border border-border">
                <h3 className="font-display text-xl mb-2">Digital Foundation</h3>
                {isZambia ? (
                  <p className="font-display text-xl mb-4 text-primary">Enquire</p>
                ) : (
                  <>
                    <p className="font-display text-3xl mb-4">$1,250</p>
                    <p className="body-small text-muted-foreground">one-time</p>
                  </>
                )}
                <div className="divider-refined my-6" />
                <p className="body-small text-muted-foreground">
                  For businesses without a website.
                </p>
                <p className="body-small text-muted-foreground mt-2">
                  Establishes legitimacy and ownership.
                </p>
                <p className="body-small text-primary mt-2 font-medium">
                  Required before growth.
                </p>
              </div>

              {/* Growth */}
              <div className="text-center p-6 border-2 border-primary bg-primary/5">
                <h3 className="font-display text-xl mb-2">Growth System</h3>
                {isZambia ? (
                  <p className="font-display text-xl mb-4 text-primary">Enquire</p>
                ) : (
                  <>
                    <p className="font-display text-3xl mb-4">$699</p>
                    <p className="body-small text-muted-foreground">one-time</p>
                  </>
                )}
                <div className="divider-refined my-6" />
                <p className="body-small text-muted-foreground">
                  For businesses with a foundation.
                </p>
                <p className="body-small text-muted-foreground mt-2">
                  Turns visitors into leads.
                </p>
              </div>

              {/* Revenue */}
              <div className="text-center p-6 border border-border">
                <h3 className="font-display text-xl mb-2">Revenue Engine</h3>
                {isZambia ? (
                  <p className="font-display text-xl mb-4 text-primary">Enquire</p>
                ) : (
                  <>
                    <p className="font-display text-3xl mb-4">$999–$1,499</p>
                    <p className="body-small text-muted-foreground">one-time</p>
                  </>
                )}
                <div className="divider-refined my-6" />
                <p className="body-small text-muted-foreground">
                  For businesses ready to scale.
                </p>
                <p className="body-small text-muted-foreground mt-2">
                  Automates revenue and follow-up.
                </p>
              </div>
            </div>

            <p className="text-center body-regular text-muted-foreground">
              Everything builds in this order.
            </p>
          </motion.div>

          <p className="text-center body-small text-muted-foreground mt-8 italic">
            This slide is for sales calls and internal use.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default AuditReveal;
