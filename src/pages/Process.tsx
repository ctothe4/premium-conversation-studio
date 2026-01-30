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

const Process = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="headline-hero mb-8">Our Process</h1>
            <p className="body-large text-muted-foreground">
              A systematic approach to building brands that matter. Three phases. Clear deliverables. Measurable outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      {processSteps.map((step, index) => (
        <AnimatedSection
          key={step.num}
          delay={index * 0.1}
          className="border-t border-border"
        >
          <div className="container-editorial section-padding">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              {/* Step Number */}
              <div className="lg:col-span-3">
                <span className="step-number">{step.num}</span>
              </div>

              {/* Content */}
              <div className="lg:col-span-9">
                <h2 className="headline-section mb-8">{step.title}</h2>
                <p className="body-large text-muted-foreground mb-12 max-w-2xl">
                  {step.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {step.details.map((detail, detailIndex) => (
                    <motion.div
                      key={detail}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: detailIndex * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0" />
                      <span className="body-regular">{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      ))}

      {/* CTA Section */}
      <AnimatedSection className="section-padding border-t border-border bg-secondary/30">
        <div className="container-editorial text-center">
          <h2 className="headline-section mb-6">Ready to start?</h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto mb-10">
            Every successful project starts with a conversation. Let's talk about where you are and where you want to be.
          </p>
          <BookCallButton />
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default Process;
