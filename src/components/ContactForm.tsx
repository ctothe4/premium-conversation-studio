import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const { error: insertError } = await supabase
      .from("contact_submissions")
      .insert({
        name: formData.name.trim(),
        email: formData.email.trim(),
        company: formData.company.trim() || null,
        message: formData.message.trim(),
      });

    setIsSubmitting(false);

    if (insertError) {
      setError("Something went wrong. Please try again.");
      return;
    }

    setIsSubmitted(true);
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
        <h3 className="headline-card text-primary mb-6">
          Consider this the beginning.
        </h3>
        <p className="body-large text-muted-foreground">
          We respond within 2 business days.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <div>
        <label htmlFor="name" className="subheadline block mb-4">Name</label>
        <input
          type="text" id="name" name="name" value={formData.name}
          onChange={handleChange} required maxLength={200}
          className="w-full bg-transparent border-b border-border py-5 body-regular focus:outline-none focus:border-primary transition-colors duration-500"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="subheadline block mb-4">Email</label>
        <input
          type="email" id="email" name="email" value={formData.email}
          onChange={handleChange} required maxLength={320}
          className="w-full bg-transparent border-b border-border py-5 body-regular focus:outline-none focus:border-primary transition-colors duration-500"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="company" className="subheadline block mb-4">Company</label>
        <input
          type="text" id="company" name="company" value={formData.company}
          onChange={handleChange} maxLength={200}
          className="w-full bg-transparent border-b border-border py-5 body-regular focus:outline-none focus:border-primary transition-colors duration-500"
          placeholder="Your company (optional)"
        />
      </div>

      <div>
        <label htmlFor="message" className="subheadline block mb-4">Message</label>
        <textarea
          id="message" name="message" value={formData.message}
          onChange={handleChange} required maxLength={5000} rows={5}
          className="w-full bg-transparent border-b border-border py-5 body-regular focus:outline-none focus:border-primary transition-colors duration-500 resize-none"
          placeholder="Tell us what you're building..."
        />
      </div>

      {error && (
        <p className="body-small text-destructive" role="alert">{error}</p>
      )}

      <div className="flex flex-col gap-6">
        <button
          type="submit" disabled={isSubmitting}
          className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed self-start"
        >
          {isSubmitting ? "Sending..." : "Send"}
        </button>
        <p className="body-small text-muted-foreground">
          We respond within 2 business days.
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
