import { useState } from "react";
import { motion } from "framer-motion";

const WEB3FORMS_ACCESS_KEY = "000272ff-ef79-4917-ad5f-4fa9428eeba2";

type Props = {
  subject?: string;
};

const ContactForm = ({ subject = "New inquiry from socialcurrency.agency" }: Props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject,
        from_name: "Social Currency Website",
        to: "hello@socialcurrency.agency",
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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
          We'll be in touch soon.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <div>
        <label htmlFor="name" className="subheadline block mb-4">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          maxLength={100}
          className="w-full bg-transparent border-b border-border py-5 body-regular focus:outline-none focus:border-primary transition-colors duration-500"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="subheadline block mb-4">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          maxLength={255}
          className="w-full bg-transparent border-b border-border py-5 body-regular focus:outline-none focus:border-primary transition-colors duration-500"
          placeholder="your@email.com"
        />
      </div>


      <div>
        <label htmlFor="message" className="subheadline block mb-4">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          maxLength={2000}
          rows={5}
          className="w-full bg-transparent border-b border-border py-5 body-regular focus:outline-none focus:border-primary transition-colors duration-500 resize-none"
          placeholder="Tell us about your project..."
        />
      </div>

      {error && (
        <p className="body-small text-destructive" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
