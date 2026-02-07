import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const advisoryFeatures = [
  "AI Business Audit",
  "Systems and workflow mapping",
  "Operational diagnosis",
  "AI opportunity matrix",
  "Strategic roadmap and recommendations",
];

const AdvisoryCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
      className="border border-border/50 bg-muted/20 p-8 lg:p-12 max-w-2xl mx-auto"
    >
      <div className="mb-6">
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
          Premium Advisory
        </span>
      </div>

      <h3 className="text-2xl lg:text-3xl font-display mb-2">AI Systems Advisory</h3>
      <p className="body-small text-muted-foreground mb-6">
        For founder-led businesses redesigning how they operate
      </p>

      <div className="border-t border-border pt-6 mb-6">
        <span className="font-display text-2xl lg:text-3xl text-muted-foreground">Starting at $4,999</span>
      </div>

      <p className="body-regular text-muted-foreground mb-8">
        Strategic AI advisory focused on diagnosing how your business currently functions,
        identifying where intelligence can be automated or augmented, and designing custom
        human + AI systems.
      </p>

      <ul className="space-y-3 mb-8">
        {advisoryFeatures.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
            <span className="body-small text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <p className="body-small text-muted-foreground/60 mb-8 italic">
        This is operational redesign, not a marketing package.
      </p>

      <a
        href="https://calendly.com"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-outline inline-flex items-center gap-2"
      >
        Apply for Advisory
        <ArrowRight className="w-4 h-4" />
      </a>
    </motion.div>
  );
};

export default AdvisoryCard;
