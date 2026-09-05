import { useLocale } from "@/context/LocaleContext";
import { resolvePrice } from "@/lib/pricing";
import type { Solution } from "@/config/products";

interface PriceProps {
  solution: Solution;
  className?: string;
  showFrom?: boolean;
}

/** Displays a solution price in the visitor's selected currency. */
const Price = ({ solution, className = "", showFrom = true }: PriceProps) => {
  const { currency, country, localeTag, t } = useLocale();
  const price = resolvePrice(solution, currency, country, localeTag);

  return (
    <span className={className}>
      {showFrom && (
        <span className="subheadline mr-3 align-middle">{t.solutions.from}</span>
      )}
      <span className="align-middle">
        {price.display}
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
