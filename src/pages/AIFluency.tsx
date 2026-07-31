import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import AIFluencyForm from "@/components/AIFluencyForm";

const principles = [
  {
    num: "01",
    title: "Principles first",
    description:
      "How these systems actually work, what they can be trusted with, and where judgment still belongs to you.",
  },
  {
    num: "02",
    title: "Applied thinking",
    description:
      "Learning to see your own operations as a set of decisions, workflows, and knowledge that can be redesigned.",
  },
  {
    num: "03",
    title: "One working use case",
    description:
      "You leave with something real and running inside your business. Not a slide deck.",
  },
];

const AIFluency = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-5xl"
          >
            <span className="subheadline block mb-8">AI Fluency</span>
            <h1 className="headline-hero mb-10">
              A standing room for business leaders serious about AI.
            </h1>
            <div className="divider-refined mb-10" />
            <p className="body-large text-muted-foreground max-w-2xl">
              We help business leaders build real AI fluency. From principles to a working
              use case in your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What it is */}
      <AnimatedSection className="section-padding border-t border-border">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
            <div>
              <span className="subheadline block mb-6">The Room</span>
              <h2 className="headline-section mb-10">Not a course. A room.</h2>
              <div className="divider-refined mb-10" />
              <p className="body-large text-muted-foreground mb-8">
                This is not a class you sit through. It is a small, continuing room of
                operators who are done with the noise and want a clear, working
                understanding of what AI changes in their business.
              </p>
              <p className="body-regular text-muted-foreground">
                Conversation, pressure testing, and applied work. Peers who are building,
                not spectating.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-12">
              {principles.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                >
                  <span className="subheadline text-primary block mb-4">{item.num}</span>
                  <h3 className="headline-card mb-4">{item.title}</h3>
                  <p className="body-regular text-muted-foreground max-w-md">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Social proof placeholder */}
      <AnimatedSection className="section-padding border-t border-border">
        <div className="container-editorial">
          <span className="subheadline block mb-6">Trusted By</span>
          <h2 className="headline-section mb-10">The room in good company.</h2>
          <div className="divider-refined mb-12" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-background h-28 flex items-center justify-center"
                aria-hidden="true"
              >
                <span className="subheadline text-muted-foreground/40">Coming soon</span>
              </div>
            ))}
          </div>
          <p className="body-small text-muted-foreground mt-8">
            Participating organizations and voices will be listed here.
          </p>
        </div>
      </AnimatedSection>

      {/* Inquiry */}
      <AnimatedSection className="section-padding border-t border-border bg-secondary/20">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-5">
              <span className="subheadline block mb-8">Next Cohort</span>
              <h2 className="headline-section mb-10">The next cohort is forming.</h2>
              <div className="divider-refined mb-10" />
              <p className="body-large text-muted-foreground max-w-md">
                Seats are limited and admission is by conversation. Tell us who you are and
                what you run, and we'll take it from there.
              </p>
            </div>
            <div className="lg:col-span-7">
              <AIFluencyForm />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default AIFluency;
