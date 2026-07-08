import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

interface BookCallButtonProps {
  variant?: "fixed" | "inline";
  className?: string;
}

const BookCallButton = ({ variant = "inline", className = "" }: BookCallButtonProps) => {
  const location = useLocation();
  const isZambia =
    location.pathname === "/zambia" || location.pathname.startsWith("/zambia/");
  const contactPath = isZambia ? "/zambia/contact" : "/contact";

  if (variant === "fixed") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="fixed bottom-8 right-8 z-40 hidden md:block"
      >
        <Link to={contactPath} className="btn-primary shadow-lg hover:shadow-xl transition-shadow">
          Get in Touch
        </Link>
      </motion.div>
    );
  }

  return (
    <Link to={contactPath} className={`btn-primary ${className}`}>
      Get in Touch
    </Link>
  );
};

export default BookCallButton;
