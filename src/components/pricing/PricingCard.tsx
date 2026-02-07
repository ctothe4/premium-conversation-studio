import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface PricingCardProps {
  name: string;
  subtitle: string;
  price: string;
  frequency: string;
  intro: string;
  features: string[];
  microcopy: string;
  buttonText: string;
  buttonHref: string;
  popular?: boolean;
  subdued?: boolean;
  index: number;
}

const PricingCard = ({
  name,
  subtitle,
  price,
  frequency,
  intro,
  features,
  microcopy,
  buttonText,
  buttonHref,
  popular = false,
  subdued = false,
  index,
}: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className={`relative border p-8 lg:p-10 ${
        popular
          ? "border-primary bg-primary/5 lg:scale-105 lg:-mx-2 z-10"
          : subdued
          ? "border-border/50 bg-muted/30"
          : "border-border bg-card"
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-primary text-primary-foreground px-4 py-1.5 text-xs uppercase tracking-[0.15em] font-semibold">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-8">
        <h3 className={`headline-card mb-2 ${subdued ? "text-muted-foreground" : ""}`}>{name}</h3>
        <p className={`body-small mb-6 ${subdued ? "text-muted-foreground/70" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
        <div className="border-t border-border pt-6">
          <span className={`font-display ${popular ? "text-4xl lg:text-5xl" : subdued ? "text-3xl lg:text-4xl text-muted-foreground" : "text-4xl lg:text-5xl"}`}>
            {price}
          </span>
          <span className="text-muted-foreground ml-2">{frequency}</span>
        </div>
      </div>

      <p className={`body-regular mb-6 ${subdued ? "text-muted-foreground/80" : ""}`}>{intro}</p>

      <ul className="space-y-4 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${subdued ? "text-muted-foreground" : "text-primary"}`} />
            <span className={`body-small ${subdued ? "text-muted-foreground" : ""}`}>{feature}</span>
          </li>
        ))}
      </ul>

      <p className="body-small text-muted-foreground/60 mb-8 italic">{microcopy}</p>

      <a
        href={buttonHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`block text-center w-full ${popular ? "btn-primary" : "btn-outline"}`}
      >
        {buttonText}
      </a>
    </motion.div>
  );
};

export default PricingCard;
