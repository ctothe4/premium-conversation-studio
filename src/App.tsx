import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import AnalyticsTracker from "./components/AnalyticsTracker";
import { LocaleProvider } from "./context/LocaleContext";
import Index from "./pages/Index";
import HowItWorks from "./pages/HowItWorks";
import Solutions from "./pages/Solutions";
import SolutionDetail from "./pages/SolutionDetail";
import Industries from "./pages/Industries";
import IndustryDetail from "./pages/IndustryDetail";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Foundation from "./pages/Foundation";
import AuditReveal from "./pages/AuditReveal";
import Collaboration from "./pages/Collaboration";
import AIFluency from "./pages/AIFluency";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

/**
 * Public routes. `/en/*` and `/fr/*` are accepted as aliases so language-prefixed
 * URLs (and hreflang alternates) resolve to the same experience; the active
 * language itself is held in LocaleProvider.
 */
const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/how-it-works" element={<HowItWorks />} />
    <Route path="/solutions" element={<Solutions />} />
    <Route path="/solutions/:slug" element={<SolutionDetail />} />
    <Route path="/industries" element={<Industries />} />
    <Route path="/industries/:slug" element={<IndustryDetail />} />
    <Route path="/pricing" element={<Pricing />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />

    {/* Language-prefixed aliases */}
    <Route path="/en/*" element={<Navigate to="/" replace />} />
    <Route path="/fr/*" element={<Navigate to="/" replace />} />

    {/* Legacy routes from V1 */}
    <Route path="/process" element={<Navigate to="/how-it-works" replace />} />
    <Route path="/services" element={<Navigate to="/solutions" replace />} />
    <Route path="/zambia/*" element={<Navigate to="/" replace />} />
    <Route path="/zambia" element={<Navigate to="/" replace />} />

    {/* Unlisted pages */}
    <Route path="/foundation" element={<Foundation />} />
    <Route path="/audit-reveal" element={<AuditReveal />} />
    <Route path="/collaboration" element={<Collaboration />} />
    <Route path="/ai-fluency" element={<AIFluency />} />

    <Route path="*" element={<NotFound />} />
  </Routes>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LocaleProvider>
          <ScrollToTop />
          <AnalyticsTracker />
          <AppRoutes />
        </LocaleProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
