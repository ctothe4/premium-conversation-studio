import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";
import { SOLUTIONS, type SolutionSlug } from "@/config/products";
import Price from "@/components/Price";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { trackLeadStarted, trackLeadQualified } from "@/lib/analytics";

/**
 * Front-end version of the WhatsApp qualification conversation.
 * Answers map to a recommended solution; a human handoff is always available.
 */
const recommend = (answers: number[]): SolutionSlug => {
  const problem = answers[3];
  const contact = answers[1];
  const volume = answers[2];
  if (problem === 0 || problem === 4) return "automation";
  if (problem === 3) return "growth";
  if (problem === 1 || problem === 2) return volume >= 2 ? "automation" : "whatsapp-store";
  if (contact === 1 || contact === 2) return "social-to-sale";
  return "whatsapp-store";
};

const Qualifier = () => {
  const { t } = useLocale();
  const reduce = useReducedMotion();
  const [step, setStep] = useState(-1);
  const [answers, setAnswers] = useState<number[]>([]);

  const questions = t.qualifier.questions;
  const done = step >= questions.length;
  const slug = done ? recommend(answers) : null;
  const solution = slug ? SOLUTIONS.find((s) => s.slug === slug)! : null;
  const copy = slug ? t.solutions.items[slug] : null;

  const choose = (index: number) => {
    const next = [...answers];
    next[step] = index;
    setAnswers(next);
    const following = step + 1;
    setStep(following);
    if (following >= questions.length) {
      trackLeadQualified(recommend(next));
    }
  };

  return (
    <section className="section-padding border-t border-border" id="fit-check">
      <div className="container-editorial">
        <div className="mx-auto max-w-2xl border border-border bg-background p-7 md:p-12">
          <span className="subheadline mb-6 block text-primary">{t.qualifier.title}</span>

          <AnimatePresence mode="wait">
            {step === -1 && (
              <motion.div
                key="intro"
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <p className="body-regular mb-10 text-muted-foreground">{t.qualifier.intro}</p>
                <div className="flex flex-wrap gap-4">
                  <button
                    type="button"
                    className="btn-primary"
                    onClick={() => {
                      trackLeadStarted("qualifier");
                      setStep(0);
                    }}
                  >
                    {t.qualifier.start}
                  </button>
                  <WhatsAppCTA
                    label={t.qualifier.talk}
                    message={t.common.whatsappMessage}
                    location="qualifier_intro"
                    variant="outline"
                  />
                </div>
              </motion.div>
            )}

            {step >= 0 && !done && (
              <motion.div
                key={`q-${step}`}
                initial={reduce ? { opacity: 0 } : { opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <p className="subheadline mb-4">
                  {step + 1} / {questions.length}
                </p>
                <h3 className="headline-card mb-8">{questions[step].q}</h3>
                <div className="grid gap-2">
                  {questions[step].options.map((option, i) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => choose(i)}
                      className="min-h-[3rem] border border-border px-5 py-3 text-left text-sm transition-colors duration-200 hover:border-primary hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-6">
                  <button
                    type="button"
                    className="nav-link link-underline"
                    onClick={() => setStep(step - 1)}
                  >
                    {t.qualifier.back}
                  </button>
                  <WhatsAppCTA
                    label={t.qualifier.talk}
                    message={t.common.whatsappMessage}
                    location="qualifier_question"
                    variant="quiet"
                  />
                </div>
              </motion.div>
            )}

            {done && solution && copy && (
              <motion.div
                key="result"
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p className="subheadline mb-4">{t.qualifier.result}</p>
                <h3 className="headline-card mb-4">{copy.name}</h3>
                <p className="body-regular mb-6 text-muted-foreground">{copy.copy}</p>
                <p className="mb-2 font-display text-3xl uppercase tracking-tight">
                  <Price solution={solution} />
                </p>
                <p className="subheadline mb-10 text-foreground">
                  {t.solutions.delivery[solution.deliveryKey]}
                </p>
                <div className="flex flex-wrap gap-4">
                  <WhatsAppCTA
                    label={t.qualifier.resultCta}
                    message={t.common.solutionMessage(copy.name)}
                    location="qualifier_result"
                    product={solution.slug}
                  />
                  <button
                    type="button"
                    className="btn-outline"
                    onClick={() => {
                      setStep(-1);
                      setAnswers([]);
                    }}
                  >
                    {t.qualifier.restart}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Qualifier;
