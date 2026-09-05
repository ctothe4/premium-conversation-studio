import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import logo from "@/assets/logo.png";
import { trackNavClick } from "@/lib/analytics";
import { useLocale } from "@/context/LocaleContext";
import LocalisationDrawer from "./LocalisationDrawer";
import WhatsAppCTA from "./WhatsAppCTA";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const { t, language, country, currency } = useLocale();
  const reduce = useReducedMotion();

  const navItems = [
    { name: t.nav.howItWorks, path: "/how-it-works" },
    { name: t.nav.solutions, path: "/solutions" },
    { name: t.nav.industries, path: "/industries" },
    { name: t.nav.pricing, path: "/pricing" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const localeLabel = `${language.toUpperCase()} · ${country} · ${currency}`;

  return (
    <>
      <motion.nav
        initial={reduce ? false : { y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container-editorial">
          <div className="flex items-center justify-between h-20 md:h-24">
            <Link to="/" className="flex-shrink-0" aria-label={`${t.nav.skip} — Social Currency`}>
              <img
                src={logo}
                alt="Social Currency"
                width={240}
                height={80}
                className="h-14 md:h-20 w-auto"
              />
            </Link>

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center gap-8 xl:gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => trackNavClick(item.name, item.path, "desktop")}
                  className={`nav-link link-underline ${
                    location.pathname.startsWith(item.path) ? "text-primary" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              <button
                type="button"
                onClick={() => setDrawerOpen(true)}
                aria-label={t.localisation.utilityLabel}
                className="nav-link flex items-center gap-2 border border-border px-3 py-2 hover:border-primary"
              >
                <Globe size={13} aria-hidden="true" />
                {localeLabel}
              </button>

              <WhatsAppCTA
                label={t.nav.cta}
                message={t.common.whatsappMessage}
                location="navbar"
                className="px-6 py-3"
              />
            </div>

            {/* Mobile controls: localisation stays one tap away */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => setDrawerOpen(true)}
                aria-label={t.localisation.utilityLabel}
                className="nav-link flex min-h-[2.75rem] items-center gap-2 border border-border px-3"
              >
                <Globe size={13} aria-hidden="true" />
                {localeLabel}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex h-11 w-11 items-center justify-center"
                aria-label={isMobileMenuOpen ? t.nav.close : t.nav.menu}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 overflow-y-auto bg-background pt-24"
          >
            <div className="container-editorial">
              <div className="flex flex-col gap-7 py-10">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={reduce ? false : { opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => trackNavClick(item.name, item.path, "mobile")}
                      className={`headline-card ${
                        location.pathname.startsWith(item.path) ? "text-primary" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <Link to="/contact" className="headline-card">
                  {t.nav.contact}
                </Link>
                <div className="mt-4">
                  <WhatsAppCTA
                    label={t.nav.cta}
                    message={t.common.whatsappMessage}
                    location="mobile_menu"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <LocalisationDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
};

export default Navbar;
