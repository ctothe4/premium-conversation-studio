import {
  CURRENCIES,
  BASE_CURRENCY,
  getCurrency,
  type CountryCode,
  type CurrencyCode,
} from "@/config/markets";
import type { Solution } from "@/config/products";

/**
 * Pricing model
 * -------------
 * INITIAL:  base price (ZMW) -> FX conversion -> local display price
 * FUTURE:   base price (ZMW) -> country-specific override -> local display price
 *
 * Rates below are placeholder/configurable values held in src/config/markets.ts.
 * They are NOT live exchange rates, which is why converted prices are labelled
 * as approximate everywhere they are shown.
 */

export interface RateTable {
  /** units of currency per 1 unit of BASE_CURRENCY */
  [code: string]: number;
}

export const staticRates = (): RateTable =>
  Object.fromEntries(CURRENCIES.map((c) => [c.code, c.perZmw]));

/**
 * Placeholder hook for a real FX provider. Wire this up to a rates API/edge
 * function later; the rest of the app already reads through `convert()`.
 */
export const fetchRates = async (): Promise<RateTable> => staticRates();

const roundTo = (value: number, step: number) =>
  Math.max(step, Math.round(value / step) * step);

export const convert = (
  amountInBase: number,
  currency: CurrencyCode,
  rates: RateTable = staticRates()
) => {
  if (currency === BASE_CURRENCY) return amountInBase;
  const rate = rates[currency] ?? getCurrency(currency).perZmw;
  return roundTo(amountInBase * rate, getCurrency(currency).round);
};

export const formatAmount = (
  amount: number,
  currency: CurrencyCode,
  locale = "en-GB"
) => {
  const c = getCurrency(currency);
  const formatted = new Intl.NumberFormat(locale, {
    maximumFractionDigits: 0,
  }).format(amount);
  return `${c.symbol}${formatted}`;
};

export interface ResolvedPrice {
  amount: number;
  currency: CurrencyCode;
  display: string;
  /** true when the figure came from FX conversion rather than a set local price */
  approximate: boolean;
}

export const resolvePrice = (
  solution: Solution,
  currency: CurrencyCode,
  country: CountryCode,
  locale = "en-GB",
  rates: RateTable = staticRates()
): ResolvedPrice => {
  const override = solution.priceOverrides?.[country]?.[currency];
  if (typeof override === "number") {
    return {
      amount: override,
      currency,
      display: formatAmount(override, currency, locale),
      approximate: false,
    };
  }
  const amount = convert(solution.basePrice, currency, rates);
  return {
    amount,
    currency,
    display: formatAmount(amount, currency, locale),
    approximate: currency !== BASE_CURRENCY,
  };
};
