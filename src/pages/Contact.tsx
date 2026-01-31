import { motion } from "framer-motion";
import { useState } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import ChatBot from "@/components/ChatBot";
import ContactForm from "@/components/ContactForm";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const Contact = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center max-w-5xl mx-auto"
          >
            <span className="subheadline block mb-8">Get in Touch</span>
            <h1 className="headline-hero mb-10">
              It All Starts With a <span className="text-primary">Hello.</span>
            </h1>
            <div className="divider-refined mx-auto mb-10" />
            <p className="body-large text-muted-foreground max-w-xl mx-auto">
              Ready to talk about your next project? We're here to listen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Chat Section */}
      <AnimatedSection className="border-t border-border">
        <div className="container-editorial section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
            {/* Chatbot */}
            <div>
              <span className="subheadline block mb-6">Start a Conversation</span>
              <h2 className="headline-card mb-10">Chat with us</h2>
              <div className="divider-refined mb-12" />

              <ChatBot />

              {/* Form toggle */}
              <Collapsible open={isFormOpen} onOpenChange={setIsFormOpen}>
                <CollapsibleTrigger className="flex items-center gap-2 mt-8 text-muted-foreground hover:text-foreground transition-colors duration-300">
                  <span className="body-small">Prefer a form?</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isFormOpen ? "rotate-180" : ""
                    }`}
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-8">
                  <ContactForm />
                </CollapsibleContent>
              </Collapsible>
            </div>

            {/* Right Column - Calendly & Contact Details */}
            <div>
              <span className="subheadline block mb-6">Schedule a Call</span>
              <h2 className="headline-card mb-10">Book a call</h2>
              <div className="divider-refined mb-12" />
              <p className="body-regular text-muted-foreground mb-12">
                Prefer to talk? Schedule a free 15 minute call and let's discuss
                your project in person.
              </p>

              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-6 py-10 border-t border-b border-border hover:border-primary transition-colors duration-500"
              >
                <div className="flex-1">
                  <h3 className="headline-card group-hover:text-primary transition-colors duration-500">
                    15 Minute Discovery Call
                  </h3>
                  <p className="subheadline mt-3">Via Calendly</p>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
              </a>

              {/* Contact Details */}
              <div className="mt-20 space-y-12">
                <div>
                  <span className="subheadline block mb-4">Email</span>
                  <a
                    href="mailto:hello@socialcurrency.agency"
                    className="body-large link-underline"
                  >
                    hello@socialcurrency.agency
                  </a>
                </div>

                <div>
                  <span className="subheadline block mb-4">Follow</span>
                  <div className="flex gap-8">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="body-large link-underline"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://instagram.com/socuagency"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="body-large link-underline"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default Contact;
