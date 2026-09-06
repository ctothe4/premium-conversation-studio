import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { QrCode } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { getDemo, type DemoType } from "@/config/demos";
import { convert, formatAmount } from "@/lib/pricing";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  trackDemoStarted,
  trackDemoStep,
  trackDemoCompleted,
} from "@/lib/analytics";

type Turn = { id: string; from: "business" | "customer" | "status"; text: string };

type Stage =
  | "welcome"
  | "category"
  | "product"
  | "quantity"
  | "fulfilment"
  | "location"
  | "payment"
  | "done";

interface Props {
  demoType?: DemoType;
}

/**
 * Live demo.
 * A front-end simulation of a conversational-commerce journey. Nothing here
 * is connected to a real payment provider or WhatsApp line, and the UI says so.
 * The journey is driven by src/config/demos.ts so other verticals can be added.
 */
const LiveDemo = ({ demoType = "restaurant" }: Props) => {
  const { t, currency, country, localeTag } = useLocale();
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();
  const demo = getDemo(demoType);
  const sim = t.demo.sim;

  const [stage, setStage] = useState<Stage>("welcome");
  const [turns, setTurns] = useState<Turn[]>([]);
  const [categoryId, setCategoryId] = useState<string | null>(null);
  const [itemId, setItemId] = useState<string | null>(null);
  const [qty, setQty] = useState(1);
  const [fulfilment, setFulfilment] = useState<"delivery" | "pickup" | null>(null);
  const started = useRef(false);
  const scroller = useRef<HTMLDivElement>(null);

  const price = (base: number) =>
    formatAmount(convert(base, currency), currency, localeTag);

  const category = demo.categories.find((c) => c.id === categoryId) ?? null;
  const item = category?.items.find((i) => i.id === itemId) ?? null;

  const initial: Turn[] = useMemo(
    () => [{ id: "welcome", from: "business", text: sim.welcome }],
    [sim.welcome]
  );

  useEffect(() => {
    setTurns(initial);
  }, [initial]);

  useEffect(() => {
    scroller.current?.scrollTo({
      top: scroller.current.scrollHeight,
      behavior: reduce ? "auto" : "smooth",
    });
  }, [turns, reduce]);

  const push = (...next: Turn[]) => setTurns((prev) => [...prev, ...next]);

  const begin = () => {
    if (!started.current) {
      trackDemoStarted(demoType);
      started.current = true;
    }
  };

  const reset = () => {
    setStage("welcome");
    setCategoryId(null);
    setItemId(null);
    setQty(1);
    setFulfilment(null);
    setTurns(initial);
  };

  const chooseCategory = (id: string) => {
    begin();
    trackDemoStep(demoType, "category");
    setCategoryId(id);
    const name = sim.categories[id as keyof typeof sim.categories] ?? id;
    push(
      { id: `c-${id}`, from: "customer", text: name },
      { id: `cp-${id}`, from: "business", text: sim.categoryPrompt(name) }
    );
    setStage("product");
  };

  const chooseItem = (id: string) => {
    trackDemoStep(demoType, "product");
    setItemId(id);
    const name = sim.items[id as keyof typeof sim.items] ?? id;
    push(
      { id: `i-${id}`, from: "customer", text: name },
      { id: `q-${id}`, from: "business", text: sim.qtyPrompt }
    );
    setStage("quantity");
  };

  const chooseQty = (n: number) => {
    trackDemoStep(demoType, "quantity");
    setQty(n);
    const name = item ? sim.items[item.id as keyof typeof sim.items] : "";
    const total = item ? price(item.price * n) : "";
    push(
      { id: `qty-${n}`, from: "customer", text: `${n}` },
      {
        id: `sum-${n}`,
        from: "business",
        text: `${sim.summaryTitle}: ${n} × ${name} · ${total}`,
      },
      { id: "fulfil", from: "business", text: sim.fulfilPrompt }
    );
    setStage("fulfilment");
  };

  const chooseFulfilment = (mode: "delivery" | "pickup") => {
    trackDemoStep(demoType, "fulfilment");
    setFulfilment(mode);
    push({
      id: `f-${mode}`,
      from: "customer",
      text: mode === "delivery" ? sim.delivery : sim.pickup,
    });
    if (mode === "delivery" && demo.location) {
      push({ id: "loc", from: "business", text: sim.locationPrompt });
      setStage("location");
    } else {
      push({ id: "pay-q", from: "business", text: sim.paymentPrompt });
      setStage("payment");
    }
  };

  const chooseLocation = (area: string) => {
    trackDemoStep(demoType, "location");
    push(
      { id: `l-${area}`, from: "customer", text: area },
      { id: "pay-q", from: "business", text: sim.paymentPrompt }
    );
    setStage("payment");
  };

  const choosePayment = (label: string) => {
    trackDemoStep(demoType, "payment");
    push(
      { id: `p-${label}`, from: "customer", text: label },
      { id: "paid", from: "status", text: sim.paid },
      { id: "confirmed", from: "status", text: sim.confirmed },
      {
        id: "eta",
        from: "business",
        text: fulfilment === "pickup" ? sim.etaPickup : sim.eta,
      }
    );
    setStage("done");
    trackDemoCompleted(demoType);
  };

  const options: { label: string; onSelect: () => void }[] = (() => {
    switch (stage) {
      case "welcome":
        return demo.categories.map((c) => ({
          label: sim.categories[c.id as keyof typeof sim.categories] ?? c.id,
          onSelect: () => chooseCategory(c.id),
        }));
      case "product":
        return (category?.items ?? []).map((i) => ({
          label: `${sim.items[i.id as keyof typeof sim.items] ?? i.id} · ${price(i.price)}`,
          onSelect: () => chooseItem(i.id),
        }));
      case "quantity":
        return [1, 2, 3].map((n) => ({ label: `${n}`, onSelect: () => chooseQty(n) }));
      case "fulfilment":
        return [
          { label: sim.delivery, onSelect: () => chooseFulfilment("delivery") },
          { label: sim.pickup, onSelect: () => chooseFulfilment("pickup") },
        ];
      case "location":
        return sim.locations.map((area) => ({
          label: area,
          onSelect: () => chooseLocation(area),
        }));
      case "payment":
        return [sim.payments.momo, sim.payments.card, sim.payments.cod].map((label) => ({
          label,
          onSelect: () => choosePayment(label),
        }));
      default:
        return [];
    }
  })();

  return (
    <section className="section-padding border-t border-border bg-secondary/20" id="demo">
      <div className="container-editorial">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
          <div>
            <h2 className="headline-section mb-8">
              {t.demo.headlineA}
              <br />
              <span className="text-primary">{t.demo.headlineB}</span>
            </h2>
            <p className="body-large mb-12 max-w-md text-muted-foreground">{t.demo.copy}</p>

            {/* Desktop: a QR pathway placeholder. Mobile: never ask someone to
                scan a code with the phone they are already holding. */}
            {isMobile ? (
              <a
                href="#demo-panel"
                className="btn-outline mb-12 inline-flex min-h-[3rem] items-center"
              >
                {t.demo.tryDemo} →
              </a>
            ) : (
              <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-center">
                <div
                  className="flex h-32 w-32 flex-col items-center justify-center gap-2 border border-dashed border-border text-muted-foreground"
                  role="img"
                  aria-label={t.demo.qrPending}
                >
                  <QrCode size={32} aria-hidden="true" />
                  <span className="px-2 text-center text-[0.6rem] uppercase tracking-[0.15em]">
                    {t.demo.qrPending}
                  </span>
                </div>
                <p className="body-small max-w-[16rem] text-muted-foreground">{t.demo.qrNote}</p>
              </div>
            )}

            <p className="body-regular mb-4 max-w-md">{t.demo.adapt}</p>
            <p className="body-small mb-8 max-w-md text-muted-foreground">{t.demo.demoNote}</p>
            <WhatsAppCTA
              label={t.demo.cta}
              message={t.common.whatsappMessage}
              location="live_demo"
            />
          </div>

          <div className="mx-auto w-full max-w-sm" id="demo-panel">
            <div className="border border-border bg-background p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between border-b border-border pb-4">
                <span className="subheadline text-foreground">{t.demo.business}</span>
                <button
                  type="button"
                  onClick={reset}
                  className="nav-link link-underline min-h-[2.75rem]"
                >
                  {t.demo.restart}
                </button>
              </div>

              <div
                ref={scroller}
                className="max-h-[22rem] min-h-[18rem] overflow-y-auto pr-1"
                aria-live="polite"
              >
                <AnimatePresence initial={false}>
                  {turns.map((turn, index) => (
                    <motion.div
                      key={`${turn.id}-${index}`}
                      layout
                      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: reduce ? 0 : 0.3 }}
                      className={`mb-3 max-w-[88%] border px-4 py-3 ${
                        turn.from === "customer"
                          ? "ml-auto border-primary/40 bg-primary/[0.07]"
                          : turn.from === "status"
                          ? "border-primary/50 bg-background"
                          : "border-border bg-secondary/40"
                      }`}
                    >
                      <p className="text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
                        {turn.from === "customer" ? t.demo.you : t.demo.business}
                      </p>
                      <p
                        className={`body-small mt-1 ${
                          turn.from === "status" ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {turn.text}
                      </p>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className="mt-4 border-t border-border pt-4">
                {stage === "done" ? (
                  <div>
                    <p className="font-display text-lg uppercase tracking-tight text-primary">
                      {sim.closing}
                    </p>
                    <button
                      type="button"
                      onClick={reset}
                      className="nav-link link-underline mt-4 min-h-[2.75rem]"
                    >
                      {t.demo.restart}
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {options.map((opt) => (
                      <button
                        key={opt.label}
                        type="button"
                        onClick={opt.onSelect}
                        className="min-h-[2.75rem] border border-border px-4 py-2 text-xs uppercase tracking-[0.15em] transition-colors duration-200 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;
