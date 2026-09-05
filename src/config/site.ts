/**
 * Single place to update commercial contact details.
 * NOTE: WHATSAPP_NUMBER is a placeholder until the real business number is supplied.
 */
export const SITE = {
  name: "Social Currency",
  domain: "https://socialcurrency.agency",
  email: "hello@socialcurrency.agency",
  instagram: "https://instagram.com/socuagency",
  /** International format, digits only. Replace with the live Social Currency WhatsApp line. */
  whatsappNumber: "260970000000",
  whatsappIsPlaceholder: true,
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
