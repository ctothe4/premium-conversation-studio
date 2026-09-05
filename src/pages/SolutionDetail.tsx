import { useEffect } from "react";
import { Navigate, useParams, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import Price from "@/components/Price";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import FinalCta from "@/components/sections/FinalCta";
import { getSolution, SOLUTIONS } from "@/config/products";
import { useLocale } from "@/context/LocaleContext";
import { trackSolutionViewed } from "@/lib/analytics";

const SolutionDetail = () => {
  const { slug = "" } = useParams();
  const { t } = useLocale();
  const solution = getSolution(slug);

  useEffect(() => {
    if (solution) trackSolutionViewed(solution.slug);
  }, [solution]);

  if (!solution) return <Navigate to="/solutions" replace />;
  const copy = t.solutions.items[solution.slug];
  const others = SOLUTIONS.filter((s) => s.slug !== solution.slug);

  return (
    <Layout>
      <Seo
        title={`${copy.name} — Social Currency`}
        description={copy.copy}
        path={`/solutions/${solution.slug}`}
      />

      <section className="section-padding-sm">
        <div className="container-editorial">
          <Link to="/solutions" className="nav-link link-underline mb-10 inline-block">
            {t.solutions.eyebrow}
          </Link>
          <span className="subheadline mb-6 block text-primary">
            {solution.number} — {copy.name}
          </span>
          <h1 className="headline-section mb-10 max-w-4xl">
            {copy.headlineA}
            <br />
            {copy.headlineB}
          </h1>
          <p className="body-large mb-14 max-w-2xl text-muted-foreground">{copy.copy}</p>

          <div className="mb-14 flex flex-wrap items-end gap-x-16 gap-y-8 border-t border-border pt-10">
            <p className="font-display text-4xl uppercase tracking-tight md:text-5xl">
              <Price solution={solution} />
            </p>
            <p className="subheadline text-foreground">
              {t.solutions.delivery[solution.deliveryKey]}
            </p>
          </div>

          <WhatsAppCTA
            label={copy.cta}
            message={t.common.solutionMessage(copy.name)}
            location="solution_detail"
            product={solution.slug}
          />
          <p className="body-small mt-8 max-w-xl text-muted-foreground">
            {solution.deliveryKey === "delivery72" ? t.solutions.deliveryNote : t.pricing.approximate}
          </p>
        </div>
      </section>

      <section className="section-padding border-t border-border bg-secondary/20">
        <div className="container-editorial">
          <h2 className="headline-section mb-14">{t.solutions.whatYouGet}</h2>
          <ul className="grid gap-px bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
            {copy.features.map((f, i) => (
              <li key={f} className="bg-background p-8">
                <span className="subheadline mb-4 block text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="body-regular">{f}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding border-t border-border">
        <div className="container-editorial">
          <h2 className="headline-section mb-12">{t.solutions.viewAll}</h2>
          <ul className="border-t border-border">
            {others.map((other) => (
              <li key={other.slug} className="border-b border-border">
                <Link
                  to={`/solutions/${other.slug}`}
                  className="group flex items-center justify-between gap-6 py-8"
                >
                  <span className="headline-card transition-colors group-hover:text-primary">
                    {t.solutions.items[other.slug].name}
                  </span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCta />
    </Layout>
  );
};

export default SolutionDetail;
