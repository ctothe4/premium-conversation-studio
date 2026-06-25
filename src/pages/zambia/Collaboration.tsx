import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const ZambiaCollaboration = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="min-h-[70vh] flex items-center">
        <div className="container-editorial">
          <div className="max-w-5xl">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="subheadline block mb-8"
            >
              Long-Term Partnership
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="headline-hero mb-10 md:mb-14"
            >
              Let's Build Something That Lasts.
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="divider-refined mb-10"
            />
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="body-large text-muted-foreground max-w-2xl"
            >
              Some work is a project. Some work is a partnership.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Body */}
      <AnimatedSection className="section-padding-sm border-t border-border">
        <div className="container-editorial">
          <div className="max-w-3xl mx-auto">
            <p className="body-regular text-muted-foreground mb-8">
              We work best when we're embedded. Inside your brand, your voice, your growth. Not parachuting in for a one-off, but showing up consistently, month after month, as the strategic creative force behind everything you put out.
            </p>
            <p className="body-regular text-muted-foreground">
              If you're thinking beyond a single deliverable. If you want someone in your corner who knows your business as well as you do. This is where that conversation starts.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* What ongoing work looks like */}
      <AnimatedSection className="section-padding border-t border-border bg-secondary/20">
        <div className="container-editorial">
          <span className="subheadline block mb-6">What Ongoing Work With Us Looks Like</span>
          <h2 className="headline-section mb-16 md:mb-20 max-w-4xl">
            Embedded. Consistent. Strategic.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 max-w-4xl">
            {[
              "Monthly brand strategy and content direction",
              "Consistent social and communications support",
              "Priority access and faster turnaround",
              "A team that grows with you, not a vendor you have to re-brief every time",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-4 py-4 border-b border-border"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                <span className="body-regular text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Closing CTA */}
      <AnimatedSection className="section-padding border-t border-border">
        <div className="container-editorial">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="headline-card mb-6">This isn't a package. It's a relationship.</h3>
            <p className="body-regular text-muted-foreground mb-16">
              Scope, cadence, and investment are all discussed on a call. Because no two partnerships look the same.
            </p>
            <Link to="/zambia#contact" className="btn-primary inline-block">
              Start the Conversation →
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default ZambiaCollaboration;
