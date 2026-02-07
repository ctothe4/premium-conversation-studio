import { motion } from "framer-motion";

const FinalCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="border-t border-border pt-20 text-center"
    >
      <h2 className="headline-card mb-6">Not sure what you need?</h2>
      <p className="body-large text-muted-foreground mb-10 max-w-xl mx-auto">
        Book a free call and we'll recommend the right starting point in 15 minutes.
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
  );
};

export default FinalCTA;
