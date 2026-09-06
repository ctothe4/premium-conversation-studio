import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";
import { resolvePrice } from "@/lib/pricing";
import type { Solution } from "@/config/products";

interface PriceProps {
  solution: Solution;
  className?: string;
  showFrom?: boolean;
}

/**
 * Displays a solution price in the visitor's selected currency.
 * A currency change swaps the figure in place rather than snapping.
 */
const Price = ({ solution, className = "", showFrom = true }: PriceProps) => {
  const { currency, country, localeTag, t } = useLocale();
  const reduce = useReducedMotion();
  const price = resolvePrice(solution, currency, country, localeTag);

  return (
    <span className={className}>
      {showFrom && (
        <span className="subheadline mr-3 align-middle">{t.solutions.from}</span>
      )}
      <span className="inline-block align-middle">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={`${currency}-${price.display}`}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: reduce ? 0 : 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="inline-block"
          >
            {price.display}
          </motion.span>
        </AnimatePresence>
        {solution.recurring && (
          <span className="body-small ml-2 text-muted-foreground">
            {t.solutions.perMonth}
          </span>
        )}
      </span>
    </span>
  );
};

export const usePriceText = (solution: Solution) => {
  const { currency, country, localeTag } = useLocale();
  return resolvePrice(solution, currency, country, localeTag).display;
};

export default Price;
