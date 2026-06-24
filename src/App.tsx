import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Process from "./pages/Process";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Foundation from "./pages/Foundation";
import AuditReveal from "./pages/AuditReveal";
import Collaboration from "./pages/Collaboration";
import ZambiaIndex from "./pages/zambia/Index";
import ZambiaProcess from "./pages/zambia/Process";
import ZambiaServices from "./pages/zambia/Services";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/process" element={<Process />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/foundation" element={<Foundation />} />
          <Route path="/audit-reveal" element={<AuditReveal />} />
          <Route path="/collaboration" element={<Collaboration />} />
          <Route path="/zambia" element={<ZambiaIndex />} />
          <Route path="/zambia/process" element={<ZambiaProcess />} />
          <Route path="/zambia/services" element={<ZambiaServices />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
