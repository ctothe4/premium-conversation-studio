import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import BookCallButton from "@/components/BookCallButton";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ZambiaIndex = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[95vh] flex items-center">
        <div className="container-editorial">
          <div className="max-w-6xl">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="subheadline block mb-8"
            >
              Creative Agency
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="headline-hero mb-10 md:mb-14"
            >
              We Build Systems That Produce <span className="text-primary">Successful Outcomes.</span>
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
              className="body-large text-muted-foreground max-w-2xl mb-14"
            >
              We help businesses and brands grow by building better digital tools and creating stories that actually produce real results. We design the tools and systems that turn <em className="italic">attention</em> into a <strong className="font-semibold text-foreground">business asset</strong>.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <BookCallButton />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Abstract System SVG Section */}
      <AnimatedSection className="py-24 md:py-40 border-t border-border">
        <div className="container-editorial">
          <div className="flex justify-center">
            <svg
              viewBox="0 0 500 120"
              className="w-full max-w-3xl h-auto text-foreground"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            >
              <motion.circle cx="100" cy="60" r="45" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 2, delay: 0.2, ease: "easeOut" }} />
              <motion.circle cx="250" cy="60" r="45" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 2, delay: 0.5, ease: "easeOut" }} />
              <motion.circle cx="400" cy="60" r="45" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 2, delay: 0.8, ease: "easeOut" }} />
              <motion.line x1="145" y1="60" x2="205" y2="60" strokeWidth="0.5" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 0.5 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 1.5 }} />
              <motion.line x1="295" y1="60" x2="355" y2="60" strokeWidth="0.5" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 0.5 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 1.8 }} />
              <motion.circle cx="100" cy="60" r="4" fill="hsl(var(--primary))" stroke="none" initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 2.2 }} />
              <motion.circle cx="250" cy="60" r="4" fill="hsl(var(--primary))" stroke="none" initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 2.4 }} />
              <motion.circle cx="400" cy="60" r="4" fill="hsl(var(--primary))" stroke="none" initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 2.6 }} />
            </svg>
          </div>
        </div>
      </AnimatedSection>

      {/* Process Preview */}
      <AnimatedSection className="section-padding border-t border-border">
        <div className="container-editorial">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20 md:mb-28">
            <div>
              <span className="subheadline block mb-6">Our Process</span>
              <h2 className="headline-section max-w-3xl">
                A clear path from idea to impact.
              </h2>
            </div>
            <Link to="/zambia/process" className="nav-link link-underline flex items-center gap-3 group">
              View our process <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            {[
              { num: "01", title: "Audit", desc: "We identify the bottlenecks in your digital and physical presence and create strategies to remove them." },
              { num: "02", title: "Build", desc: "We engineer custom tools, systems and content to capture market interest." },
              { num: "03", title: "Scale", desc: "We launch the campaigns that make your brand the conversation." },
            ].map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative group"
              >
                <span className="subheadline text-primary block mb-6">{step.num}</span>
                <div className="divider-refined mb-8 group-hover:w-24 transition-all duration-500" />
                <h3 className="headline-card mb-5">{step.title}</h3>
                <p className="body-regular text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Services Preview */}
      <AnimatedSection className="section-padding border-t border-border bg-secondary/20">
        <div className="container-editorial">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20 md:mb-28">
            <div>
              <span className="subheadline block mb-6">Capabilities</span>
              <h2 className="headline-section max-w-2xl">What we do.</h2>
            </div>
            <Link to="/zambia/services" className="nav-link link-underline flex items-center gap-3 group">
              View all services <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/50">
            {[
              "Brand Positioning",
              "Funnel Design",
              "Systems & Automations",
              "Brand Identity",
              "Video Content",
              "Content Strategy",
              "Personal Brand Architecting",
              "PR & Reputation Management",
            ].map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="bg-background p-10 md:p-14 lg:p-16 group cursor-default"
              >
                <span className="subheadline text-primary block mb-4">0{index + 1}</span>
                <h3 className="headline-card group-hover:text-primary transition-colors duration-500">{service}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default ZambiaIndex;
