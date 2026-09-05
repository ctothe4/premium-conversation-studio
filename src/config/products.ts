import type { CountryCode, CurrencyCode } from "./markets";

export type SolutionSlug =
  | "whatsapp-store"
  | "social-to-sale"
  | "automation"
  | "growth";

export interface Solution {
  slug: SolutionSlug;
  number: string;
  /** Canonical base price, expressed in the base currency (ZMW). */
  basePrice: number;
  recurring: boolean;
  /**
   * Optional country-specific overrides. Takes precedence over FX conversion.
   * e.g. { KE: { KES: 19000 } }
   */
  priceOverrides?: Partial<Record<CountryCode, Partial<Record<CurrencyCode, number>>>>;
  deliveryKey: "delivery72" | "delivery57" | "delivery710" | "deliveryOngoing";
  featureCount: number;
}

export const SOLUTIONS: Solution[] = [
  { slug: "whatsapp-store", number: "01", basePrice: 3500, recurring: false, deliveryKey: "delivery72", featureCount: 7 },
  { slug: "social-to-sale", number: "02", basePrice: 6500, recurring: false, deliveryKey: "delivery57", featureCount: 6 },
  { slug: "automation", number: "03", basePrice: 8500, recurring: false, deliveryKey: "delivery710", featureCount: 6 },
  { slug: "growth", number: "04", basePrice: 5000, recurring: true, deliveryKey: "deliveryOngoing", featureCount: 6 },
];

export const getSolution = (slug: string) =>
  SOLUTIONS.find((s) => s.slug === slug);

export type IndustrySlug =
  | "restaurants"
  | "real-estate"
  | "beauty"
  | "education"
  | "retail"
  | "professional-services";

export interface Industry {
  slug: IndustrySlug;
  number: string;
  stepCount: number;
  recommended: SolutionSlug;
}

export const INDUSTRIES: Industry[] = [
  { slug: "restaurants", number: "01", stepCount: 5, recommended: "whatsapp-store" },
  { slug: "real-estate", number: "02", stepCount: 5, recommended: "social-to-sale" },
  { slug: "beauty", number: "03", stepCount: 5, recommended: "automation" },
  { slug: "education", number: "04", stepCount: 5, recommended: "automation" },
  { slug: "retail", number: "05", stepCount: 5, recommended: "whatsapp-store" },
  { slug: "professional-services", number: "06", stepCount: 5, recommended: "social-to-sale" },
];

export const getIndustry = (slug: string) =>
  INDUSTRIES.find((i) => i.slug === slug);
