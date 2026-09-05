import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GradientBackground from "./GradientBackground";
import BrandBadge from "./BrandBadge";
import LocaleSuggestion from "./LocaleSuggestion";
import { useLocale } from "@/context/LocaleContext";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { t } = useLocale();
  return (
    <div className="min-h-screen flex flex-col relative">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        {t.nav.skip}
      </a>
      <GradientBackground />
      <Navbar />
      <main id="main" className="flex-1 pt-20 md:pt-24">
        {children}
      </main>
      <Footer />
      <BrandBadge />
      <LocaleSuggestion />
    </div>
  );
};

export default Layout;
