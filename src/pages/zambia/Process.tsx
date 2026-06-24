import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import BookCallButton from "@/components/BookCallButton";

const processSteps = [
  {
    num: "01",
    title: "Audit",
    description:
      "We identify the bottlenecks in your digital and physical presence and create strategies to remove them.",
    details: [
      "Complete digital presence analysis",
      "Competitive landscape review",
      "Customer journey mapping",
      "Gap identification and prioritization",
    ],
  },
  {
    num: "02",
    title: "Build",
    description:
      "We engineer custom tools, systems and content to capture market interest.",
    details: [
      "Custom tool development",
      "Systems architecture design",
      "Content creation and optimization",
      "Brand asset development",
    ],
  },
  {
    num: "03",
    title: "Scale",
    description:
      "We launch the campaigns that make your brand the conversation.",
    details: [
      "Campaign strategy and execution",
      "Performance optimization",
      "Audience expansion tactics",
      "Continuous iteration and improvement",
    ],
  },
];

const ZambiaProcess = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-5xl"
          >
            <span className="subheadline block mb-8">How We Work</span>
            <h1 className="headline-hero mb-10">Our Process</h1>
            <div className="divider-refined mb-10" />
            <p className="body-large text-muted-foreground max-w-2xl">
              A systematic approach to building brands that matter. Three phases. Clear deliverables. Measurable outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {processSteps.map((step, index) => (
        <AnimatedSection key={step.num} delay={index * 0.1} className="border-t border-border">
          <div className="container-editorial section-padding">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
              <div className="lg:col-span-4">
                <span className="step-number block">{step.num}</span>
              </div>
              <div className="lg:col-span-8">
                <span className="subheadline text-primary block mb-6">Phase {step.num}</span>
                <h2 className="headline-section mb-10">{step.title}</h2>
                <div className="divider-refined mb-10" />
                <p className="body-large text-muted-foreground mb-16 max-w-xl">{step.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {step.details.map((detail, detailIndex) => (
                    <motion.div
                      key={detail}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: detailIndex * 0.1 }}
                      className="flex items-start gap-5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-3 flex-shrink-0" />
                      <span className="body-regular">{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      ))}

      <AnimatedSection className="section-padding border-t border-border bg-secondary/20">
        <div className="container-editorial text-center">
          <span className="subheadline block mb-8">Get Started</span>
          <h2 className="headline-section mb-8">Ready to start?</h2>
          <p className="body-large text-muted-foreground max-w-xl mx-auto mb-14">
            Every successful project starts with a conversation. Let's talk about where you are and where you want to be.
          </p>
          <BookCallButton />
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default ZambiaProcess;
