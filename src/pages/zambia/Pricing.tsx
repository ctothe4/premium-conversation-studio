import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";

type Package = {
  name: string;
  tagline: string;
  price: string;
  badge?: string;
  description?: string[];
  cta: string;
};

const packages: Package[] = [
  {
    name: "Brand Clarity Session",
    tagline: "Walk in with questions. Leave with direction.",
    price: "K3,000",
    cta: "Book a Session",
  },
  {
    name: "Digital Audit",
    tagline: "Find out what your website is really saying about you.",
    price: "K1,500",
    cta: "Request an Audit",
  },
  {
    name: "Signature Site",
    tagline: "Your name. Your story. Your corner of the internet.",
    price: "K7,500",
    badge: "Free 1-year hosting included",
    cta: "Build my Signature Site",
  },
  {
    name: "Command Site",
    tagline: "A corporate presence that means business.",
    price: "K12,500",
    badge: "Free 1-year hosting included",
    cta: "Build my Command Site",
  },
  {
    name: "Profile Refresh",
    tagline: "Same company. Sharper first impression.",
    price: "K2,000",
    cta: "Refresh my Profile",
  },
  {
    name: "Profile From Scratch",
    tagline: "We build the document that opens the door.",
    price: "K3,950",
    cta: "Build my Profile",
  },
];

const ZambiaPricing = () => {
  return (
    <Layout>
      <section className="section-padding pb-16">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <h1 className="headline-section mb-8">
              Pricing built for
              <br />
              <span className="text-primary">Zambian businesses</span>
            </h1>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Clear packages. Honest prices in Kwacha. Choose the right starting point for where your business is today.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {packages.map((pkg, idx) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 + idx * 0.08, ease: "easeOut" }}
                className="border border-border bg-card p-8 lg:p-10 flex flex-col"
              >
                {pkg.badge && (
                  <div className="mb-6">
                    <span className="inline-block bg-primary/10 text-primary border border-primary/30 px-3 py-1.5 text-[0.7rem] uppercase tracking-[0.18em] font-semibold">
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <h2 className="headline-card mb-3">{pkg.name}</h2>
                <p className="body-regular text-muted-foreground italic mb-8">
                  {pkg.tagline}
                </p>

                <div className="border-t border-border pt-6 mb-8">
                  <span className="font-display text-4xl lg:text-5xl">{pkg.price}</span>
                  <span className="text-muted-foreground ml-2 text-sm">ZMW</span>
                </div>

                <div className="mt-auto">
                  <a
                    href={`mailto:hello@socialcurrency.agency?subject=${encodeURIComponent(pkg.name + " Inquiry")}`}
                    className="btn-outline inline-flex items-center gap-2"
                  >
                    {pkg.cta}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding-sm border-t border-border">
        <div className="container-editorial text-center">
          <h2 className="headline-card mb-4">Not sure what you need?</h2>
          <p className="body-large text-muted-foreground mb-10 max-w-xl mx-auto">
            Get in touch and we'll recommend the right starting point.
          </p>
          <Link to="/zambia/contact" className="btn-primary inline-block">
            Get in Touch
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ZambiaPricing;
