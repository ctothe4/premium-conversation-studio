import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import BookCallButton from "@/components/BookCallButton";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center">
        <div className="container-editorial">
          <div className="max-w-6xl">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="headline-hero mb-8 md:mb-12"
            >
              We Build Systems That Produce Successful Outcomes.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="body-large text-muted-foreground max-w-3xl mb-12"
            >
              Social Currency is a creative agency "in the cloud", with a global, remote team. We help businesses and brands grow by building better digital tools and creating stories that actually produce real results. We design the tools and systems that turn <em className="italic">attention</em> into a <strong className="font-semibold text-foreground">business asset</strong>.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <BookCallButton />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Abstract System SVG Section */}
      <AnimatedSection className="py-20 md:py-32 border-t border-border">
        <div className="container-editorial">
          <div className="flex justify-center">
            <svg
              viewBox="0 0 400 200"
              className="w-full max-w-2xl h-auto text-foreground"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              {/* Abstract geometric system representation */}
              <motion.circle
                cx="100"
                cy="100"
                r="40"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.2 }}
              />
              <motion.circle
                cx="200"
                cy="100"
                r="40"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.4 }}
              />
              <motion.circle
                cx="300"
                cy="100"
                r="40"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.6 }}
              />
              <motion.line
                x1="140"
                y1="100"
                x2="160"
                y2="100"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 }}
              />
              <motion.line
                x1="240"
                y1="100"
                x2="260"
                y2="100"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.2 }}
              />
              {/* Connection dots */}
              <motion.circle
                cx="100"
                cy="100"
                r="6"
                fill="hsl(var(--primary))"
                stroke="none"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 1.5 }}
              />
              <motion.circle
                cx="200"
                cy="100"
                r="6"
                fill="hsl(var(--primary))"
                stroke="none"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 1.7 }}
              />
              <motion.circle
                cx="300"
                cy="100"
                r="6"
                fill="hsl(var(--primary))"
                stroke="none"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 1.9 }}
              />
            </svg>
          </div>
        </div>
      </AnimatedSection>

      {/* Process Preview */}
      <AnimatedSection className="section-padding border-t border-border">
        <div className="container-editorial">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
            <h2 className="headline-section max-w-2xl">
              A clear path from idea to impact.
            </h2>
            <Link
              to="/process"
              className="nav-link link-underline flex items-center gap-2"
            >
              View our process <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {[
              {
                num: "01",
                title: "Audit",
                desc: "We identify the bottlenecks in your digital and physical presence and create strategies to remove them.",
              },
              {
                num: "02",
                title: "Build",
                desc: "We engineer custom tools, systems and content to capture market interest.",
              },
              {
                num: "03",
                title: "Scale",
                desc: "We launch the campaigns that make your brand the conversation.",
              },
            ].map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <span className="step-number absolute -top-8 -left-4 opacity-30">
                  {step.num}
                </span>
                <div className="relative z-10 pt-20">
                  <h3 className="headline-card mb-4">{step.title}</h3>
                  <p className="body-regular text-muted-foreground">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Services Preview */}
      <AnimatedSection className="section-padding border-t border-border bg-secondary/30">
        <div className="container-editorial">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
            <h2 className="headline-section max-w-2xl">
              What we do.
            </h2>
            <Link
              to="/services"
              className="nav-link link-underline flex items-center gap-2"
            >
              View all services <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {[
              "Brand Positioning",
              "Funnel Design",
              "Systems & Automations",
              "Brand Identity",
              "Video Content",
              "Content Strategy",
            ].map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background p-8 md:p-12"
              >
                <h3 className="headline-card">{service}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default Index;
