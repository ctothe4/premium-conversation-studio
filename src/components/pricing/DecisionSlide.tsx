import { motion } from "framer-motion";

const paths = [
  {
    title: "Digital Foundation",
    price: "$1,250 one-time",
    description: "For businesses without a website.",
    benefit: "Establishes legitimacy and ownership.",
    note: "Required before growth.",
  },
  {
    title: "Growth System",
    price: "$699 one-time",
    description: "For businesses with a foundation.",
    benefit: "Turns visitors into leads.",
    note: null,
  },
  {
    title: "Revenue Engine",
    price: "$999–$1,499 one-time",
    description: "For businesses ready to scale.",
    benefit: "Automates revenue and follow-up.",
    note: null,
  },
];

const DecisionSlide = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="border-t border-border pt-20"
    >
      <div className="text-center mb-12">
        <p className="subheadline mb-4">Decision Framework</p>
        <h2 className="headline-card">The 3 Paths</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-10">
        {paths.map((path, index) => (
          <motion.div
            key={path.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            className="border border-border p-6 lg:p-8 text-center"
          >
            <h3 className="font-display text-xl lg:text-2xl mb-3">{path.title}</h3>
            <p className="text-primary font-semibold mb-4">{path.price}</p>
            <p className="body-small text-muted-foreground mb-2">{path.description}</p>
            <p className="body-small mb-2">{path.benefit}</p>
            {path.note && (
              <p className="body-small text-muted-foreground/60 italic">{path.note}</p>
            )}
          </motion.div>
        ))}
      </div>

      <p className="text-center body-regular text-muted-foreground">
        Everything builds in this order.
      </p>
    </motion.div>
  );
};

export default DecisionSlide;
