import { ArrowRight } from "lucide-react";
import { SITE, whatsappLink } from "@/config/site";
import { trackWhatsAppClick, trackCheckoutStarted } from "@/lib/analytics";

interface WhatsAppCTAProps {
  label: string;
  message: string;
  /** Where on the site the click happened, for analytics. */
  location: string;
  product?: string;
  variant?: "primary" | "outline" | "quiet";
  className?: string;
}

const WhatsAppCTA = ({
  label,
  message,
  location,
  product,
  variant = "primary",
  className = "",
}: WhatsAppCTAProps) => {
  const base =
    variant === "primary"
      ? "btn-primary"
      : variant === "outline"
      ? "btn-outline"
      : "nav-link link-underline";

  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        trackWhatsAppClick(location, product);
        if (product) trackCheckoutStarted(product);
      }}
      className={`${base} inline-flex items-center justify-center gap-3 min-h-[3rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${className}`}
      data-placeholder-number={SITE.whatsappIsPlaceholder ? "true" : undefined}
    >
      <span>{label}</span>
      <ArrowRight size={14} aria-hidden="true" />
    </a>
  );
};

export default WhatsAppCTA;
