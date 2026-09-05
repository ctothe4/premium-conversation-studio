import { useState } from "react";
import { Link } from "react-router-dom";
import { Globe } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { SITE } from "@/config/site";
import LocalisationDrawer from "./LocalisationDrawer";

const Footer = () => {
  const { t, language, country, currency } = useLocale();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const links = [
    { label: t.nav.solutions, to: "/solutions" },
    { label: t.nav.industries, to: "/industries" },
    { label: t.nav.pricing, to: "/pricing" },
    { label: t.nav.howItWorks, to: "/how-it-works" },
    { label: t.nav.contact, to: "/contact" },
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="container-editorial py-20 md:py-28">
        <div className="grid gap-14 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <h2 className="headline-card mb-4">Social Currency</h2>
            <p className="body-regular max-w-sm text-muted-foreground">{t.footer.tagline}</p>
          </div>

          <nav aria-label={t.footer.linksTitle}>
            <h3 className="subheadline mb-6 text-foreground">{t.footer.linksTitle}</h3>
            <ul className="flex flex-col gap-4">
              {links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="nav-link link-underline">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/about" className="nav-link link-underline">
                  {language === "fr" ? "À propos" : "About"}
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h3 className="subheadline mb-6 text-foreground">{t.footer.localeTitle}</h3>
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="nav-link mb-6 flex min-h-[2.75rem] items-center gap-2 border border-border px-3 hover:border-primary"
              aria-label={t.localisation.utilityLabel}
            >
              <Globe size={13} aria-hidden="true" />
              {language.toUpperCase()} · {country} · {currency}
            </button>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link link-underline"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="nav-link link-underline">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-10 md:flex-row md:items-center md:justify-between">
          <p className="headline-card text-primary">{t.footer.closing}</p>
          <div className="flex flex-col gap-2 md:items-end">
            <p className="body-small text-muted-foreground">
              {t.footer.rights(new Date().getFullYear())}
            </p>
            <p className="body-small text-muted-foreground/70">{t.footer.parent}</p>
          </div>
        </div>
      </div>

      <LocalisationDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </footer>
  );
};

export default Footer;
