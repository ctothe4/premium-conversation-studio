import { motion } from "framer-motion";

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-5">
      {/* Floating geometric shapes */}
      
      {/* Animated circle outline - top right */}
      <motion.div
        className="absolute top-[15%] right-[10%] w-16 h-16 md:w-24 md:h-24 border border-primary/20 rounded-full"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Small filled circle - left */}
      <motion.div
        className="absolute top-[40%] left-[5%] w-3 h-3 md:w-4 md:h-4 bg-primary/30 rounded-full"
        animate={{
          y: [0, 40, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Triangle shape - right side */}
      <motion.div
        className="absolute top-[60%] right-[15%]"
        animate={{
          y: [0, -50, 0],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" className="md:w-[60px] md:h-[60px]">
          <polygon
            points="20,0 40,40 0,40"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="1"
            opacity="0.25"
          />
        </svg>
      </motion.div>

      {/* Dotted circle - bottom left */}
      <motion.div
        className="absolute bottom-[20%] left-[10%] w-20 h-20 md:w-32 md:h-32"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="1"
            strokeDasharray="4 8"
            opacity="0.2"
          />
        </svg>
      </motion.div>

      {/* Plus sign - center right */}
      <motion.div
        className="absolute top-[30%] right-[25%]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" className="md:w-[32px] md:h-[32px]">
          <line x1="12" y1="4" x2="12" y2="20" stroke="hsl(var(--primary))" strokeWidth="1" />
          <line x1="4" y1="12" x2="20" y2="12" stroke="hsl(var(--primary))" strokeWidth="1" />
        </svg>
      </motion.div>

      {/* Small square - bottom right */}
      <motion.div
        className="absolute bottom-[35%] right-[8%] w-6 h-6 md:w-8 md:h-8 border border-primary/20"
        animate={{
          rotate: [0, 90, 180, 270, 360],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Arrow shape - left side */}
      <motion.div
        className="absolute top-[70%] left-[20%]"
        animate={{
          x: [0, 30, 0],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg width="30" height="20" viewBox="0 0 30 20" className="md:w-[45px] md:h-[30px]">
          <polyline
            points="0,10 15,0 15,7 30,7 30,13 15,13 15,20"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="1"
            opacity="0.3"
          />
        </svg>
      </motion.div>

      {/* Diamond - top left */}
      <motion.div
        className="absolute top-[25%] left-[15%]"
        animate={{
          rotate: [45, 135, 45],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-5 h-5 md:w-7 md:h-7 border border-primary/25 rotate-45" />
      </motion.div>

      {/* Dots cluster - bottom center */}
      <motion.div
        className="absolute bottom-[10%] left-[45%] flex gap-2"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-1.5 h-1.5 bg-primary/30 rounded-full" />
        <div className="w-1.5 h-1.5 bg-primary/20 rounded-full" />
        <div className="w-1.5 h-1.5 bg-primary/25 rounded-full" />
      </motion.div>

      {/* Arc line - right side */}
      <motion.div
        className="absolute top-[50%] right-[5%]"
        animate={{
          rotate: [0, 20, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg width="60" height="30" viewBox="0 0 60 30" className="md:w-[80px] md:h-[40px]">
          <path
            d="M 0 30 Q 30 -10 60 30"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="1"
            opacity="0.2"
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default FloatingElements;
