import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      {/* Final CTA Section */}
      <div className="container-editorial section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="headline-section mb-6">Ready to grow?</h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto mb-10">
            Let's talk about your project and see if we're a fit.
          </p>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Book a Free Call
          </a>
        </motion.div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-border">
        <div className="container-editorial py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12"
          >
            {/* Tagline */}
            <div>
              <h3 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
                Be the Conversation.
              </h3>
              <p className="body-small text-muted-foreground">
                © {new Date().getFullYear()} Social Currency. All rights reserved.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              <a
                href="mailto:hello@socialcurrency.agency"
                className="nav-link link-underline"
              >
                Email
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link link-underline"
              >
                LinkedIn
              </a>
              <Link to="/contact" className="nav-link link-underline">
                Contact
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
