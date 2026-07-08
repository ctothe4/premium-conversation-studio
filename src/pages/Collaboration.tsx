import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import BookCallButton from "@/components/BookCallButton";

const Collaboration = () => {
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
              Partnership Model
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="headline-hero mb-10 md:mb-14"
            >
              Collaboration
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
              We don't take on clients. We build long-term strategic partnerships.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <AnimatedSection className="section-padding-sm border-t border-border">
        <div className="container-editorial">
          <div className="max-w-3xl mx-auto text-center">
            <p className="body-large text-muted-foreground mb-8">
              Some challenges cannot be solved in a sprint.
            </p>
            <p className="body-regular text-muted-foreground mb-8">
              When institutions, corporations, governments, and ambitious founders are navigating growth, transformation, or public positioning, they need more than a vendor. They need a strategic partner embedded in the journey.
            </p>
            <p className="body-regular text-muted-foreground">
              Social Currency operates through retained collaborations designed to align with leadership, mandate, and long-term objectives.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Retained Strategic Partnerships */}
      <AnimatedSection className="section-padding border-t border-border">
        <div className="container-editorial">
          <div className="max-w-4xl">
            <span className="subheadline block mb-6">Engagement Structure</span>
            <h2 className="headline-section mb-16 md:mb-20">
              Retained Strategic Partnerships
            </h2>
            <p className="body-regular text-muted-foreground mb-12">
              Our retainer relationships are structured for:
            </p>
            <div className="space-y-5 mb-16">
              {[
                "Governments and public institutions",
                "Corporations and enterprise brands",
                "Growth-stage companies",
                "Personal brands and public figures",
                "Cultural, national, and cross-border initiatives",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  <span className="body-regular text-muted-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
            <p className="body-regular text-muted-foreground mb-6">
              We work directly alongside leadership teams to design and execute layered strategies across brand architecture, digital infrastructure, communications, partnerships, and institutional positioning.
            </p>
            <div className="divider-refined my-12" />
            <p className="body-large text-foreground">
              This is not outsourced marketing.
            </p>
            <p className="body-large text-foreground">
              This is integrated strategic support.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* What Collaboration Includes */}
      <AnimatedSection className="section-padding border-t border-border bg-secondary/20">
        <div className="container-editorial">
          <span className="subheadline block mb-6">Scope</span>
          <h2 className="headline-section mb-16 md:mb-24">
            What Collaboration Includes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 max-w-4xl">
            {[
              "Executive-level strategic advisory",
              "Brand and narrative architecture",
              "Institutional digital infrastructure design",
              "Communications and public positioning",
              "Campaign strategy and execution",
              "Partnership structuring and ecosystem alignment",
              "Ongoing refinement and performance optimization",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="flex items-start gap-4 py-4 border-b border-border"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                <span className="body-regular text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Why Long-Term Partnership Matters */}
      <AnimatedSection className="section-padding border-t border-border">
        <div className="container-editorial">
          <div className="max-w-4xl">
            <span className="subheadline block mb-6">Perspective</span>
            <h2 className="headline-section mb-16 md:mb-20">
              Why Long-Term Partnership Matters
            </h2>
            <p className="body-large text-muted-foreground mb-8">
              Institutions evolve. Markets shift. Public perception changes.
            </p>
            <p className="body-regular text-muted-foreground mb-8">
              Long-term collaboration ensures strategic consistency, rapid decision support, cohesive execution across initiatives, and measurable progress over time.
            </p>
            <p className="body-regular text-muted-foreground">
              We operate as an extension of your team while maintaining the independence necessary to challenge assumptions and elevate standards.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Closing Statement */}
      <AnimatedSection className="section-padding border-t border-border bg-secondary/20">
        <div className="container-editorial">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="headline-card mb-4">We design durable systems.</h3>
            <h3 className="headline-card mb-4">We align strategy with execution.</h3>
            <h3 className="headline-card mb-16">We build long-term trust capital.</h3>
            <a
              href="mailto:hello@socialcurrency.agency?subject=Strategic%20Conversation%20Inquiry"
              className="btn-outline inline-block"
            >
              Start a Strategic Conversation
            </a>
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default Collaboration;
