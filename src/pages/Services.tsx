import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import BookCallButton from "@/components/BookCallButton";

const services = [
  {
    title: "Brand Positioning & Strategy",
    description:
      "We identify and clearly define your unique voice and market edge. We amplify your voice and reach to make your brand unavoidable.",
  },
  {
    title: "Funnel & Landing Design",
    description:
      "High conversion entry points. We build the pages that turn visitors into committed clients, with minimal friction.",
  },
  {
    title: "Systems & Automations",
    description:
      "Operational velocity. We engineer the backend tools that handle your growth while you focus on building your business and brand.",
  },
  {
    title: "Brand Identity",
    description:
      "Visual authority. We create the logos and design systems that signal premium quality.",
  },
  {
    title: "UGC & Video Content Design",
    description:
      "Social proof that converts. We design video assets that feel human and drive engagement across multiple platforms.",
  },
  {
    title: "Content Design & Strategy",
    description:
      "Precision messaging. We build the content loops that keep your brand relevant and top of mind for your target market.",
  },
];

const Services = () => {
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
            <h1 className="headline-hero mb-8">Services</h1>
            <p className="body-large text-muted-foreground">
              Everything you need to build, launch, and scale a brand that people remember.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <AnimatedSection className="border-t border-border">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="service-card px-0 md:px-8 first:md:pl-0 border-b md:border-b-0 md:border-r last:border-r-0 border-border"
              >
                <div className="py-12 md:py-16">
                  <h3 className="headline-card mb-6">{service.title}</h3>
                  <p className="body-regular text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Additional Details */}
      <AnimatedSection className="section-padding border-t border-border">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2 className="headline-section mb-8">How we work</h2>
              <p className="body-large text-muted-foreground mb-8">
                We don't do cookie cutter solutions. Every project starts with understanding your specific situation, your goals, and your constraints.
              </p>
              <p className="body-regular text-muted-foreground">
                From there, we build custom systems that fit your business. Not the other way around. We work in focused sprints, keeping you informed and involved at every stage.
              </p>
            </div>
            <div>
              <h2 className="headline-section mb-8">What you get</h2>
              <ul className="space-y-6">
                {[
                  "Direct access to senior strategists and builders",
                  "Weekly progress updates and milestone reviews",
                  "Complete ownership of all assets and systems",
                  "Documentation and training for your team",
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0" />
                    <span className="body-regular">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="section-padding border-t border-border bg-secondary/30">
        <div className="container-editorial text-center">
          <h2 className="headline-section mb-6">Let's build something.</h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto mb-10">
            Tell us about your project and we'll show you how we can help.
          </p>
          <BookCallButton />
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default Services;
