import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const OrientationSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center mb-20"
    >
      <p className="subheadline mb-6">Pricing</p>
      <h1 className="headline-section mb-8">
        Choose the right system for
        <br />
        <span className="text-primary">where your business is today</span>
      </h1>
      <p className="body-large text-muted-foreground max-w-2xl mx-auto mb-6">
        Everything we build follows the same order: Foundation → Growth → Leverage.
        <br />
        Start in the right place and everything compounds.
      </p>
      <p className="body-small text-muted-foreground">
        If you're not sure,{" "}
        <a
          href="https://calendly.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
        >
          book a free call
        </a>{" "}
        and we'll point you to the right starting point.
      </p>

      {/* Progression Visual */}
      <div className="mt-16 flex items-center justify-center gap-4 md:gap-8">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 md:w-16 md:h-16 border-2 border-border flex items-center justify-center">
            <span className="font-display text-lg md:text-xl">1</span>
          </div>
          <span className="mt-3 text-xs md:text-sm uppercase tracking-widest text-muted-foreground">Foundation</span>
        </div>
        <div className="w-8 md:w-16 h-px bg-border" />
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 md:w-16 md:h-16 border-2 border-primary bg-primary/10 flex items-center justify-center">
            <span className="font-display text-lg md:text-xl text-primary">2</span>
          </div>
          <span className="mt-3 text-xs md:text-sm uppercase tracking-widest text-primary font-semibold">Growth</span>
        </div>
        <div className="w-8 md:w-16 h-px bg-border" />
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 md:w-16 md:h-16 border-2 border-border flex items-center justify-center">
            <span className="font-display text-lg md:text-xl">3</span>
          </div>
          <span className="mt-3 text-xs md:text-sm uppercase tracking-widest text-muted-foreground">Leverage</span>
        </div>
      </div>
    </motion.div>
  );
};

export default OrientationSection;
