import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface BookCallButtonProps {
  variant?: "fixed" | "inline";
  className?: string;
  label?: string;
}

const BookCallButton = ({
  variant = "inline",
  className = "",
  label = "Get in Touch",
}: BookCallButtonProps) => {
  if (variant === "fixed") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="fixed bottom-8 right-8 z-40 hidden md:block"
      >
        <Link to="/contact" className="btn-primary shadow-lg hover:shadow-xl transition-shadow">
          {label}
        </Link>
      </motion.div>
    );
  }

  return (
    <Link to="/contact" className={`btn-primary ${className}`}>
      {label}
    </Link>
  );
};

export default BookCallButton;
