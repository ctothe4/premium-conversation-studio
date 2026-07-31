import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";

const INBOX = "hello@socialcurrency.agency";

const AIFluencyForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", company: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const name = formData.name.trim();
    const email = formData.email.trim();
    const company = formData.company.trim();

    const { error: insertError } = await supabase
      .from("contact_submissions")
      .insert({
        name,
        email,
        company: company || null,
        message: "AI Fluency Inquiry",
      });

    setIsSubmitting(false);

    if (insertError) {
      setError("Something went wrong. Please try again.");
      return;
    }

    // Route the inquiry to the inbox with an identifiable subject line.
    const body = `Name: ${name}\nEmail: ${email}\nBusiness: ${company || "n/a"}`;
    window.location.href = `mailto:${INBOX}?subject=${encodeURIComponent(
      "AI Fluency Inquiry"
    )}&body=${encodeURIComponent(body)}`;

    setIsSubmitted(true);
    setFormData({ name: "", email: "", company: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-16"
      >
        <h3 className="headline-card text-primary mb-6">Thanks.</h3>
        <p className="body-large text-muted-foreground">
          We'll be in touch about the next cohort.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <div>
        <label htmlFor="af-name" className="subheadline block mb-4">Name</label>
        <input
          type="text" id="af-name" name="name" value={formData.name}
          onChange={handleChange} required maxLength={200}
          className="w-full bg-transparent border-b border-border py-5 body-regular focus:outline-none focus:border-primary transition-colors duration-500"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="af-email" className="subheadline block mb-4">Email</label>
        <input
          type="email" id="af-email" name="email" value={formData.email}
          onChange={handleChange} required maxLength={320}
          className="w-full bg-transparent border-b border-border py-5 body-regular focus:outline-none focus:border-primary transition-colors duration-500"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="af-company" className="subheadline block mb-4">Business</label>
        <input
          type="text" id="af-company" name="company" value={formData.company}
          onChange={handleChange} required maxLength={200}
          className="w-full bg-transparent border-b border-border py-5 body-regular focus:outline-none focus:border-primary transition-colors duration-500"
          placeholder="Your business or company name"
        />
      </div>

      {error && <p className="body-small text-destructive" role="alert">{error}</p>}

      <button
        type="submit" disabled={isSubmitting}
        className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed self-start"
      >
        {isSubmitting ? "Sending..." : "Request an Invitation"}
      </button>
    </form>
  );
};

export default AIFluencyForm;
