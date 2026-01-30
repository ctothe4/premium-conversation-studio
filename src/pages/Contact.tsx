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
    // Simulate form submission
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
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="headline-hero mb-8">
              It All Starts With a Hello.
            </h1>
            <p className="body-large text-muted-foreground">
              Ready to talk about your next project? We're here to listen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <AnimatedSection className="border-t border-border">
        <div className="container-editorial section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Form */}
            <div>
              <h2 className="headline-card mb-8">Send us a message</h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-12 border-t border-border"
                >
                  <h3 className="headline-card text-primary mb-4">
                    Message sent.
                  </h3>
                  <p className="body-regular text-muted-foreground">
                    We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label
                      htmlFor="name"
                      className="body-small font-medium block mb-3"
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
                      className="w-full bg-transparent border-b-2 border-border py-4 body-regular focus:outline-none focus:border-primary transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="body-small font-medium block mb-3"
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
                      className="w-full bg-transparent border-b-2 border-border py-4 body-regular focus:outline-none focus:border-primary transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="body-small font-medium block mb-3"
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
                      className="w-full bg-transparent border-b-2 border-border py-4 body-regular focus:outline-none focus:border-primary transition-colors resize-none"
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
              <h2 className="headline-card mb-8">Book a call</h2>
              <p className="body-regular text-muted-foreground mb-8">
                Prefer to talk? Schedule a free 15 minute call and let's discuss your project in person.
              </p>

              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 py-8 border-t border-b border-border hover:border-primary transition-colors"
              >
                <div className="flex-1">
                  <h3 className="headline-card group-hover:text-primary transition-colors">
                    15 Minute Discovery Call
                  </h3>
                  <p className="body-small text-muted-foreground mt-2">
                    Via Calendly
                  </p>
                </div>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </a>

              {/* Contact Details */}
              <div className="mt-16 space-y-8">
                <div>
                  <h4 className="body-small font-medium uppercase tracking-widest text-muted-foreground mb-3">
                    Email
                  </h4>
                  <a
                    href="mailto:hello@socialcurrency.com"
                    className="body-large link-underline"
                  >
                    hello@socialcurrency.com
                  </a>
                </div>

                <div>
                  <h4 className="body-small font-medium uppercase tracking-widest text-muted-foreground mb-3">
                    Follow
                  </h4>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="body-large link-underline"
                  >
                    LinkedIn
                  </a>
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
