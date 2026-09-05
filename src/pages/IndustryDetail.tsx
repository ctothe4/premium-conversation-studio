import { Navigate, useParams, Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import Price from "@/components/Price";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import FinalCta from "@/components/sections/FinalCta";
import { getIndustry, getSolution } from "@/config/products";
import { useLocale } from "@/context/LocaleContext";

const IndustryDetail = () => {
  const { slug = "" } = useParams();
  const { t } = useLocale();
  const reduce = useReducedMotion();
  const industry = getIndustry(slug);

  if (!industry) return <Navigate to="/industries" replace />;
  const copy = t.industries.items[industry.slug];
  const solution = getSolution(industry.recommended)!;
  const solutionCopy = t.solutions.items[industry.recommended];

  return (
    <Layout>
      <Seo
        title={`${copy.name} — Social Currency`}
        description={copy.copy}
        path={`/industries/${industry.slug}`}
      />

      <section className="section-padding-sm">
        <div className="container-editorial">
          <Link to="/industries" className="nav-link link-underline mb-10 inline-block">
            {t.industries.eyebrow}
          </Link>
          <span className="subheadline mb-6 block text-primary">{industry.number}</span>
          <h1 className="headline-section mb-10 max-w-3xl">{copy.name}</h1>
          <p className="body-large max-w-2xl text-muted-foreground">{copy.copy}</p>
        </div>
      </section>

      <section className="section-padding border-t border-border bg-secondary/20">
        <div className="container-editorial">
          <ol className="grid gap-px bg-border/60 sm:grid-cols-2 lg:grid-cols-5">
            {copy.steps.map((step, i) => (
              <motion.li
                key={step}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                className="bg-background p-8"
              >
                <span className="subheadline mb-5 block text-primary">0{i + 1}</span>
                <h2 className="headline-card">{step}</h2>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-padding border-t border-border">
        <div className="container-editorial">
          <span className="subheadline mb-6 block">{t.industries.recommended}</span>
          <h2 className="headline-section mb-8 max-w-3xl">{solutionCopy.name}</h2>
          <p className="body-large mb-10 max-w-2xl text-muted-foreground">{solutionCopy.copy}</p>
          <p className="mb-3 font-display text-3xl uppercase tracking-tight md:text-4xl">
            <Price solution={solution} />
          </p>
          <p className="subheadline mb-10 text-foreground">
            {t.solutions.delivery[solution.deliveryKey]}
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <WhatsAppCTA
              label={solutionCopy.cta}
              message={t.common.solutionMessage(`${solutionCopy.name} (${copy.name})`)}
              location="industry_detail"
              product={solution.slug}
            />
            <Link
              to={`/solutions/${solution.slug}`}
              className="nav-link link-underline"
            >
              {t.solutions.whatYouGet}
            </Link>
          </div>
        </div>
      </section>

      <FinalCta />
    </Layout>
  );
};

export default IndustryDetail;
