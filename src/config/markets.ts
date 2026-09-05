/**
 * Central market configuration.
 * Language, country and currency are three INDEPENDENT variables.
 * Country may suggest the others, it never forces them.
 */

export type LanguageCode = "en" | "fr";

export interface Language {
  code: LanguageCode;
  label: string;
  shortLabel: string;
}

export const LANGUAGES: Language[] = [
  { code: "en", label: "English", shortLabel: "EN" },
  { code: "fr", label: "Français", shortLabel: "FR" },
];

export type CurrencyCode =
  | "USD"
  | "ZMW"
  | "ZAR"
  | "BWP"
  | "MWK"
  | "KES"
  | "TZS"
  | "RWF"
  | "CDF"
  | "GHS"
  | "NGN";

export interface Currency {
  code: CurrencyCode;
  name: string;
  nameFr: string;
  symbol: string;
  /**
   * PLACEHOLDER, CONFIGURABLE conversion factor: units of this currency per 1 ZMW.
   * These are NOT live rates. Replace by wiring `fetchRates()` in src/lib/pricing.ts
   * to a real FX provider, or by setting country-level price overrides.
   */
  perZmw: number;
  /** Rounding step used when displaying a converted price. */
  round: number;
}

export const CURRENCIES: Currency[] = [
  { code: "USD", name: "US Dollar", nameFr: "Dollar américain", symbol: "$", perZmw: 0.036, round: 5 },
  { code: "ZMW", name: "Zambian Kwacha", nameFr: "Kwacha zambien", symbol: "K", perZmw: 1, round: 50 },
  { code: "ZAR", name: "South African Rand", nameFr: "Rand sud-africain", symbol: "R", perZmw: 0.65, round: 50 },
  { code: "BWP", name: "Botswana Pula", nameFr: "Pula botswanais", symbol: "P", perZmw: 0.5, round: 50 },
  { code: "MWK", name: "Malawian Kwacha", nameFr: "Kwacha malawien", symbol: "MK", perZmw: 63, round: 1000 },
  { code: "KES", name: "Kenyan Shilling", nameFr: "Shilling kényan", symbol: "KSh", perZmw: 4.7, round: 100 },
  { code: "TZS", name: "Tanzanian Shilling", nameFr: "Shilling tanzanien", symbol: "TSh", perZmw: 95, round: 1000 },
  { code: "RWF", name: "Rwandan Franc", nameFr: "Franc rwandais", symbol: "FRw", perZmw: 52, round: 1000 },
  { code: "CDF", name: "Congolese Franc", nameFr: "Franc congolais", symbol: "FC", perZmw: 105, round: 1000 },
  { code: "GHS", name: "Ghanaian Cedi", nameFr: "Cedi ghanéen", symbol: "GH₵", perZmw: 0.45, round: 10 },
  { code: "NGN", name: "Nigerian Naira", nameFr: "Naira nigérian", symbol: "₦", perZmw: 55, round: 1000 },
];

export const BASE_CURRENCY: CurrencyCode = "ZMW";

export type CountryCode =
  | "ZM"
  | "ZA"
  | "BW"
  | "MW"
  | "ZW"
  | "KE"
  | "TZ"
  | "RW"
  | "CD"
  | "GH"
  | "NG"
  | "XX";

export interface Country {
  code: CountryCode;
  name: string;
  nameFr: string;
  /** Suggested only. Never forced. */
  suggestedCurrency: CurrencyCode;
  suggestedLanguage: LanguageCode;
  dialCode: string;
  /** Local payment behaviour, used for copy and future integrations. */
  paymentMethods: string[];
}

export const COUNTRIES: Country[] = [
  { code: "ZM", name: "Zambia", nameFr: "Zambie", suggestedCurrency: "ZMW", suggestedLanguage: "en", dialCode: "+260", paymentMethods: ["Airtel Money", "MTN MoMo", "Zamtel Kwacha", "Card", "Bank transfer"] },
  { code: "ZA", name: "South Africa", nameFr: "Afrique du Sud", suggestedCurrency: "ZAR", suggestedLanguage: "en", dialCode: "+27", paymentMethods: ["Card", "EFT", "SnapScan"] },
  { code: "BW", name: "Botswana", nameFr: "Botswana", suggestedCurrency: "BWP", suggestedLanguage: "en", dialCode: "+267", paymentMethods: ["Orange Money", "MyZaka", "Card"] },
  { code: "MW", name: "Malawi", nameFr: "Malawi", suggestedCurrency: "MWK", suggestedLanguage: "en", dialCode: "+265", paymentMethods: ["Airtel Money", "Mpamba", "Bank transfer"] },
  { code: "ZW", name: "Zimbabwe", nameFr: "Zimbabwe", suggestedCurrency: "USD", suggestedLanguage: "en", dialCode: "+263", paymentMethods: ["EcoCash", "USD cash", "Card"] },
  { code: "KE", name: "Kenya", nameFr: "Kenya", suggestedCurrency: "KES", suggestedLanguage: "en", dialCode: "+254", paymentMethods: ["M-Pesa", "Card", "Bank transfer"] },
  { code: "TZ", name: "Tanzania", nameFr: "Tanzanie", suggestedCurrency: "TZS", suggestedLanguage: "en", dialCode: "+255", paymentMethods: ["M-Pesa", "Tigo Pesa", "Airtel Money"] },
  { code: "RW", name: "Rwanda", nameFr: "Rwanda", suggestedCurrency: "RWF", suggestedLanguage: "en", dialCode: "+250", paymentMethods: ["MTN MoMo", "Airtel Money", "Card"] },
  { code: "CD", name: "DR Congo", nameFr: "RD Congo", suggestedCurrency: "CDF", suggestedLanguage: "fr", dialCode: "+243", paymentMethods: ["M-Pesa", "Orange Money", "Airtel Money", "USD cash"] },
  { code: "GH", name: "Ghana", nameFr: "Ghana", suggestedCurrency: "GHS", suggestedLanguage: "en", dialCode: "+233", paymentMethods: ["MTN MoMo", "Telecel Cash", "Card"] },
  { code: "NG", name: "Nigeria", nameFr: "Nigéria", suggestedCurrency: "NGN", suggestedLanguage: "en", dialCode: "+234", paymentMethods: ["Bank transfer", "Card", "USSD"] },
  { code: "XX", name: "Other African Market", nameFr: "Autre marché africain", suggestedCurrency: "USD", suggestedLanguage: "en", dialCode: "+", paymentMethods: ["Mobile Money", "Card", "Bank transfer"] },
];

export const DEFAULT_COUNTRY: CountryCode = "ZM";
export const DEFAULT_LANGUAGE: LanguageCode = "en";
export const DEFAULT_CURRENCY: CurrencyCode = "ZMW";

export const getCountry = (code: CountryCode) =>
  COUNTRIES.find((c) => c.code === code) ?? COUNTRIES[0];

export const getCurrency = (code: CurrencyCode) =>
  CURRENCIES.find((c) => c.code === code) ?? CURRENCIES[1];

export const isSupportedCountry = (code: string): code is CountryCode =>
  COUNTRIES.some((c) => c.code === code);
