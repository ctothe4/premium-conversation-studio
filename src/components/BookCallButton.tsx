import { motion } from "framer-motion";

interface BookCallButtonProps {
  variant?: "fixed" | "inline";
  className?: string;
}

const BookCallButton = ({ variant = "inline", className = "" }: BookCallButtonProps) => {
  if (variant === "fixed") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="fixed bottom-8 right-8 z-40 hidden md:block"
      >
        <a
          href="https://calendly.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary shadow-lg hover:shadow-xl transition-shadow"
        >
          Book a Free Call
        </a>
      </motion.div>
    );
  }

  return (
    <a
      href="https://calendly.com"
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-primary ${className}`}
    >
      Book a Free Call
    </a>
  );
};

export default BookCallButton;
