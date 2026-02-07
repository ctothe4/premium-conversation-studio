import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FoundationTeaser = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      className="border border-dashed border-border bg-muted/20 p-8 lg:p-10 text-center"
    >
      <h3 className="headline-card mb-4">Don't have a website yet?</h3>
      <p className="body-regular text-muted-foreground max-w-xl mx-auto mb-8">
        Some businesses need a foundation before growth makes sense. We offer a Digital Foundation
        designed to establish credibility, ownership, and a base you can build on.
      </p>
      <Link
        to="/foundation"
        className="btn-outline inline-flex items-center gap-2"
      >
        Learn about Digital Foundation
        <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );
};

export default FoundationTeaser;
