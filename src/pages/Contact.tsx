import { motion } from "framer-motion";
import { useState } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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

      {/* Contact Grid */}
      <AnimatedSection className="border-t border-border">
        <div className="container-editorial section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
            {/* Contact Form */}
            <div>
              <span className="subheadline block mb-6">Send a Message</span>
              <h2 className="headline-card mb-10">Write to us</h2>
              <div className="divider-refined mb-12" />

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-16"
                >
                  <h3 className="headline-card text-primary mb-6">
                    Message sent.
                  </h3>
                  <p className="body-regular text-muted-foreground">
                    We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div>
                    <label
                      htmlFor="name"
                      className="subheadline block mb-4"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-border py-5 body-regular focus:outline-none focus:border-primary transition-colors duration-500"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="subheadline block mb-4"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-border py-5 body-regular focus:outline-none focus:border-primary transition-colors duration-500"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="subheadline block mb-4"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-transparent border-b border-border py-5 body-regular focus:outline-none focus:border-primary transition-colors duration-500 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>

            {/* Calendly Section */}
            <div>
              <span className="subheadline block mb-6">Schedule a Call</span>
              <h2 className="headline-card mb-10">Book a call</h2>
              <div className="divider-refined mb-12" />
              <p className="body-regular text-muted-foreground mb-12">
                Prefer to talk? Schedule a free 15 minute call and let's discuss your project in person.
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
                  <p className="subheadline mt-3">
                    Via Calendly
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
              </a>

              {/* Contact Details */}
              <div className="mt-20 space-y-12">
                <div>
                  <span className="subheadline block mb-4">
                    Email
                  </span>
                  <a
                    href="mailto:hello@socialcurrency.agency"
                    className="body-large link-underline"
                  >
                    hello@socialcurrency.agency
                  </a>
                </div>

                <div>
                  <span className="subheadline block mb-4">
                    Follow
                  </span>
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
