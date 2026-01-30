import { motion } from "framer-motion";

const GradientBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Large ambient gradient orb - top right */}
      <motion.div
        className="absolute -top-1/4 -right-1/4 w-[900px] h-[900px] rounded-full opacity-[0.12]"
        style={{
          background: "radial-gradient(circle, hsl(var(--cyan)) 0%, hsl(var(--cyan) / 0.3) 40%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.25, 1],
          x: [0, 80, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Medium gradient orb - bottom left */}
      <motion.div
        className="absolute -bottom-1/4 -left-1/4 w-[700px] h-[700px] rounded-full opacity-[0.1]"
        style={{
          background: "radial-gradient(circle, hsl(var(--cyan)) 0%, hsl(var(--cyan) / 0.2) 50%, transparent 70%)",
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -50, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating orb - center right */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.08]"
        style={{
          background: "radial-gradient(circle, hsl(var(--cyan)) 0%, transparent 60%)",
        }}
        animate={{
          scale: [1, 1.4, 1],
          x: [-100, 150, -100],
          y: [-50, 100, -50],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Small floating orb - left center */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-[350px] h-[350px] rounded-full opacity-[0.06]"
        style={{
          background: "radial-gradient(circle, hsl(var(--cyan)) 0%, transparent 60%)",
        }}
        animate={{
          scale: [1.1, 0.9, 1.1],
          x: [0, 100, 0],
          y: [-80, 80, -80],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Tiny accent orb - top left */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-[200px] h-[200px] rounded-full opacity-[0.05]"
        style={{
          background: "radial-gradient(circle, hsl(var(--cyan)) 0%, transparent 50%)",
        }}
        animate={{
          scale: [1, 1.5, 1],
          x: [0, -60, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Bottom right accent orb */}
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-[250px] h-[250px] rounded-full opacity-[0.07]"
        style={{
          background: "radial-gradient(circle, hsl(var(--cyan)) 0%, transparent 55%)",
        }}
        animate={{
          scale: [0.9, 1.3, 0.9],
          x: [30, -50, 30],
          y: [-30, 60, -30],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Subtle grid lines */}
      <div 
        className="absolute inset-0 opacity-[0.012]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--cyan)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--cyan)) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />
    </div>
  );
};

export default GradientBackground;
