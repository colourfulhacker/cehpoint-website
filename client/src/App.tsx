import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import Training from "@/pages/training";
import Privacy from "@/pages/privacy";
import SecurityScheme from "@/pages/security-scheme";
import Terms from "@/pages/terms";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import EcommerceService from "@/pages/services/ecommerce";
import EdutechService from "@/pages/services/edutech";
import FintechService from "@/pages/services/fintech";
import ServicesPage from "@/pages/services/index";
import BusinessAppCatalog from "@/pages/services/business-app-catalog";
import CyberSecurity from "@/pages/services/cyber-security";
import CyberCrimeInvestigation from "@/pages/services/cyber-crime-investigation";
import CostEstimatorPage from "@/pages/cost-estimator";
import DemoDelivery from "@/pages/demo-delivery";
import Quotation from "@/pages/quotation";
import Interns from "@/pages/interns";
import AISolutions from "@/pages/ai-solutions";
import Incubation from "@/pages/incubation";
import Careers from "@/pages/careers";
import InvestorConnect from "@/pages/investor-connect";
import LeadershipSearch from "@/pages/leadership-search";
import CompanyProfile from "@/pages/company-profile";

// Cyber Crime Investigation Platform
import InvestigationLanding from "@/pages/services/investigation/landing";
import InvestigationProcess from "@/pages/services/investigation/process";
import InvestigationMethodology from "@/pages/services/investigation/methodology";
import InvestigationClients from "@/pages/services/investigation/clients";
import InvestigationPricing from "@/pages/services/investigation/pricing";
import InvestigationRequest from "@/pages/services/investigation/request";
import InvestigationLegal from "@/pages/services/investigation/legal";
import Insights from "@/pages/insights/index";
import EthicalStandardsArticle from "@/pages/insights/ethical-standards";
import PartnerNetwork from "@/pages/partner-network";
import AIvsRealityArticle from "@/pages/insights/ai-vs-reality";
import HiddenCostsArticle from "@/pages/insights/hidden-costs";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ScrollToTop from "@/components/layout/scroll-to-top";
import { Banner } from "./components/sections/Banner";

function Router() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollToTop />
      {/* Banner with highest z-index */}
      <div className="relative z-50">
        <Banner />
      </div>

      {/* Navbar with lower z-index and top offset */}
      <Navbar />

      <main className="relative z-10">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/services/ecommerce" component={EcommerceService} />
          <Route path="/services/edutech" component={EdutechService} />
          <Route path="/services/fintech" component={FintechService} />
          <Route path="/services/cyber-security" component={CyberSecurity} />
          <Route path="/services/cyber-security" component={CyberSecurity} />
          <Route path="/services/business-app-catalog" component={BusinessAppCatalog} />

          {/* Cyber Crime Investigation Platform Routes */}
          <Route path="/services/cyber-crime-investigation" component={InvestigationLanding} />
          <Route path="/services/cyber-crime-investigation/process" component={InvestigationProcess} />
          <Route path="/services/cyber-crime-investigation/methodology" component={InvestigationMethodology} />
          <Route path="/services/cyber-crime-investigation/clients" component={InvestigationClients} />
          <Route path="/services/cyber-crime-investigation/pricing" component={InvestigationPricing} />
          <Route path="/services/cyber-crime-investigation/request" component={InvestigationRequest} />
          <Route path="/services/cyber-crime-investigation/legal" component={InvestigationLegal} />

          <Route path="/ai-solutions" component={AISolutions} />
          <Route path="/training" component={Training} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/terms" component={Terms} />
          <Route path="/security-scheme" component={SecurityScheme} />
          <Route path="/demo-delivery" component={DemoDelivery} />
          <Route path="/quotation" component={Quotation} />
          <Route path="/cost-estimator" component={CostEstimatorPage} />
          <Route path="/incubation" component={Incubation} />
          <Route path="/careers" component={Careers} />
          <Route path="/interns" component={Interns} />
          <Route path="/investor-connect" component={InvestorConnect} />
          <Route path="/leadership-search" component={LeadershipSearch} />
          <Route path="/company-profile" component={CompanyProfile} />
          <Route path="/insights" component={Insights} />
          <Route path="/insights/ethical-standards" component={EthicalStandardsArticle} />
          <Route path="/insights/ai-vs-reality" component={AIvsRealityArticle} />
          <Route path="/insights/hidden-costs" component={HiddenCostsArticle} />
          <Route path="/partner-network" component={PartnerNetwork} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;