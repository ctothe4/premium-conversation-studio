import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      {/* Final CTA Section */}
      <div className="container-editorial section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="subheadline block mb-8">Next Step</span>
          <h2 className="headline-section mb-8">Ready to grow?</h2>
          <div className="divider-refined mx-auto mb-10" />
          <p className="body-large text-muted-foreground max-w-xl mx-auto mb-14">
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
        <div className="container-editorial py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16"
          >
            {/* Tagline */}
            <div>
              <h3 className="headline-section mb-6">
                Be the Conversation.
              </h3>
              <p className="body-small text-muted-foreground">
                © {new Date().getFullYear()} Social Currency. All rights reserved.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-14">
              <Link
                to="/contact"
                className="nav-link link-underline"
              >
                hello@socialcurrency.agency
              </Link>
              <a
                href="https://instagram.com/socuagency"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link link-underline"
              >
                Instagram
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
