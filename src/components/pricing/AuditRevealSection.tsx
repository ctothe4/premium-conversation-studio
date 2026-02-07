import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const auditSteps = [
  {
    title: "1. Frame (0:00–1:00)",
    content:
      '"Thanks for taking the time. I\'ll show you what I saw, what it means, and the best starting point. My goal isn\'t to sell you something you don\'t need."',
  },
  {
    title: "2. Diagnosis (1:00–3:00)",
    content: `"If I look at this through a customer's eyes, here's what happens…"

• Clarity: what is the business, who is it for, why choose you
• Trust: reviews, proof, credentials, legitimacy cues
• Flow: how someone becomes a lead (or why they don't)`,
  },
  {
    title: "3. Reframe (3:00–4:00)",
    content:
      '"The issue usually isn\'t traffic. It\'s foundation and flow. When those are right, marketing starts working."',
  },
  {
    title: "4. Decision (4:00–5:00)",
    content: `"Everything we do builds in this order: Foundation → Growth → Leverage."

"Based on what I saw, this is where I'd start if this were my business."`,
  },
];

const AuditRevealSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="border-t border-border pt-20"
    >
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <p className="subheadline text-muted-foreground mb-4">Internal Reference</p>
          <h2 className="headline-card mb-4">5-Minute Audit Reveal Script</h2>
          <p className="body-small text-muted-foreground">
            A framework for presenting audit findings and recommendations.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {auditSteps.map((step, index) => (
            <AccordionItem key={index} value={`step-${index}`}>
              <AccordionTrigger className="text-left font-medium">
                {step.title}
              </AccordionTrigger>
              <AccordionContent>
                <p className="body-regular text-muted-foreground whitespace-pre-line">
                  {step.content}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </motion.div>
  );
};

export default AuditRevealSection;
