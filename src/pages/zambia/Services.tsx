import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import BookCallButton from "@/components/BookCallButton";

const services = [
  {
    num: "01",
    title: "Brand Positioning & Strategy",
    description:
      "We identify and clearly define your unique voice and market edge. We amplify your voice and reach to make your brand unavoidable.",
  },
  {
    num: "02",
    title: "Funnel & Landing Design",
    description:
      "High conversion entry points. We build the pages that turn visitors into committed clients, with minimal friction.",
  },
  {
    num: "03",
    title: "AI Operating Systems & Intelligent Automation",
    description:
      "Operational intelligence. We design AI-powered systems that redesign how your business thinks, decides, and operates. From internal workflows and decision support to knowledge systems and human + machine collaboration.",
  },
  {
    num: "04",
    title: "Brand Identity",
    description:
      "Visual authority. We create the logos and design systems that signal premium quality.",
  },
  {
    num: "05",
    title: "UGC & Video Content",
    description:
      "Social proof that converts. We design video assets that feel human and drive engagement across multiple platforms.",
  },
  {
    num: "06",
    title: "Content Design & Strategy",
    description:
      "Precision messaging. We build the content loops that keep your brand relevant and top of mind for your target market.",
  },
  {
    num: "07",
    title: "Personal Brand Architecting",
    description:
      "Authority by design. We architect and build personal brands for founders, executives, and public figures. Then we maintain them with ongoing positioning, content direction, and presence management so the brand stays sharp as your profile grows.",
  },
  {
    num: "08",
    title: "PR & Image/Reputation Management",
    description:
      "Narrative control. We handle public relations, image management, and reputation strategy. From earned media and press positioning to monitoring and protecting how the market perceives you over time.",
  },
];

const ZambiaServices = () => {
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
            <span className="subheadline block mb-8">What We Do</span>
            <h1 className="headline-hero mb-10">Services</h1>
            <div className="divider-refined mb-10" />
            <p className="body-large text-muted-foreground max-w-2xl">
              Everything you need to build, launch, and scale a brand that people remember.
            </p>
          </motion.div>
        </div>
      </section>

      <AnimatedSection className="border-t border-border">
        <div className="container-editorial py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="border-b border-border lg:odd:border-r lg:odd:pr-16 lg:even:pl-16 py-16 md:py-20 group"
              >
                <span className="subheadline text-primary block mb-6">{service.num}</span>
                <h3 className="headline-card mb-6 group-hover:text-primary transition-colors duration-500">{service.title}</h3>
                <p className="body-regular text-muted-foreground max-w-md">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding border-t border-border">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
            <div>
              <span className="subheadline block mb-6">Approach</span>
              <h2 className="headline-section mb-10">How we work</h2>
              <div className="divider-refined mb-10" />
              <p className="body-large text-muted-foreground mb-8">
                We approach every engagement as a systems design problem. Understanding how your organization currently functions before redesigning how it should operate.
              </p>
              <p className="body-regular text-muted-foreground mb-8">
                We don't do cookie cutter solutions. Every project starts with understanding your specific situation, your goals, and your constraints.
              </p>
              <p className="body-regular text-muted-foreground">
                From there, we build custom systems that fit your business. Not the other way around. We work in focused sprints, keeping you informed and involved at every stage.
              </p>
            </div>
            <div>
              <span className="subheadline block mb-6">Deliverables</span>
              <h2 className="headline-section mb-10">What you get</h2>
              <div className="divider-refined mb-10" />
              <ul className="space-y-8">
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
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-3 flex-shrink-0" />
                    <span className="body-regular">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding border-t border-border bg-secondary/20">
        <div className="container-editorial text-center">
          <span className="subheadline block mb-8">Get Started</span>
          <h2 className="headline-section mb-8">Let's build something.</h2>
          <p className="body-large text-muted-foreground max-w-xl mx-auto mb-14">
            Tell us about your project and we'll show you how we can help.
          </p>
          <BookCallButton />
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default ZambiaServices;
