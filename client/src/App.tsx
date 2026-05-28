import { lazy, Suspense } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ScrollToTop from "@/components/layout/scroll-to-top";
import ErrorBoundary from "@/components/layout/error-boundary";
import { Banner } from "./components/sections/Banner";
import { KairaWidget } from "@/components/kaira/KairaWidget";

// Lazy-loaded pages for code splitting
const Home = lazy(() => import("@/pages/home"));
const ServicesPage = lazy(() => import("@/pages/services/index"));
const EcommerceService = lazy(() => import("@/pages/services/ecommerce"));
const EdutechService = lazy(() => import("@/pages/services/edutech"));
const FintechService = lazy(() => import("@/pages/services/fintech"));
const RuralDigitalizationPage = lazy(() => import("@/pages/services/rural-digitalization"));
const GameDevelopmentPage = lazy(() => import("@/pages/services/game-development"));
const CyberSecurity = lazy(() => import("@/pages/services/cyber-security"));
const BusinessAppCatalog = lazy(() => import("@/pages/services/business-app-catalog"));
const RegionalService = lazy(() => import("@/pages/services/regional-service"));
const CityServicePage = lazy(() => import("@/pages/location/city-service"));
const ProfessionalPartner = lazy(() => import("@/pages/services/professional-partner"));

// Cyber Crime Investigation
const InvestigationLanding = lazy(() => import("@/pages/services/investigation/landing"));
const InvestigationProcess = lazy(() => import("@/pages/services/investigation/process"));
const InvestigationMethodology = lazy(() => import("@/pages/services/investigation/methodology"));
const InvestigationClients = lazy(() => import("@/pages/services/investigation/clients"));
const InvestigationPricing = lazy(() => import("@/pages/services/investigation/pricing"));
const InvestigationRequest = lazy(() => import("@/pages/services/investigation/request"));
const InvestigationLegal = lazy(() => import("@/pages/services/investigation/legal"));

// Other pages
const AISolutions = lazy(() => import("@/pages/ai-solutions"));
const AIInRealLife = lazy(() => import("@/pages/ai-in-real-life"));
const Training = lazy(() => import("@/pages/training"));
const Privacy = lazy(() => import("@/pages/privacy"));
const SecurityScheme = lazy(() => import("@/pages/security-scheme"));
const Terms = lazy(() => import("@/pages/terms"));
const DemoDelivery = lazy(() => import("@/pages/demo-delivery"));
const Quotation = lazy(() => import("@/pages/quotation"));
const CostEstimatorPage = lazy(() => import("@/pages/cost-estimator"));
const Incubation = lazy(() => import("@/pages/incubation"));
const Careers = lazy(() => import("@/pages/careers"));
const Interns = lazy(() => import("@/pages/interns"));
const InvestorConnect = lazy(() => import("@/pages/investor-connect"));
const LeadershipSearch = lazy(() => import("@/pages/leadership-search"));
const CompanyProfile = lazy(() => import("@/pages/company-profile"));
const About = lazy(() => import("@/pages/about"));
const ContactPage = lazy(() => import("@/pages/contact"));
const TendersPage = lazy(() => import("@/pages/tenders"));
const PartnerNetwork = lazy(() => import("@/pages/partner-network"));
const NotFound = lazy(() => import("@/pages/not-found"));

// Insights
const Insights = lazy(() => import("@/pages/insights/index"));
const EthicalStandardsArticle = lazy(() => import("@/pages/insights/ethical-standards"));
const AIvsRealityArticle = lazy(() => import("@/pages/insights/ai-vs-reality"));
const HiddenCostsArticle = lazy(() => import("@/pages/insights/hidden-costs"));
const RuralGoldmineArticle = lazy(() => import("@/pages/insights/rural-goldmine"));
const Escape95Article = lazy(() => import("@/pages/insights/escape-9-5"));
const StartupRevolutionArticle = lazy(() => import("@/pages/insights/15k-revolution"));
const RansomwareParadox = lazy(() => import("@/pages/insights/ransomware-paradox"));
const HyperlocalFutureArticle = lazy(() => import("@/pages/insights/hyperlocal-future"));
const CTOTrapArticle = lazy(() => import("@/pages/insights/cto-trap"));
const HRForensicsArticle = lazy(() => import("@/pages/insights/hr-forensics"));
const DigitalForensicsROI = lazy(() => import("@/pages/insights/digital-forensics-roi"));
const CyberSecurityMyths = lazy(() => import("@/pages/insights/cyber-security-myths"));
const GigEconomyUpgradeArticle = lazy(() => import("@/pages/insights/gig-economy-upgrade"));
const EdtechEvolutionArticle = lazy(() => import("@/pages/insights/edtech-evolution"));
const FashionTechRevolutionArticle = lazy(() => import("@/pages/insights/fashion-tech-revolution"));
const HealthcareAITriage = lazy(() => import("@/pages/insights/healthcare-ai-triage"));
const LogisticsRouteAutomation = lazy(() => import("@/pages/insights/logistics-route-automation"));
const RetailInventoryAI = lazy(() => import("@/pages/insights/retail-inventory-ai"));
const LegalContractAutomation = lazy(() => import("@/pages/insights/legal-contract-automation"));
const FinanceFraudML = lazy(() => import("@/pages/insights/finance-fraud-ml"));
const ManufacturingRPA = lazy(() => import("@/pages/insights/manufacturing-rpa"));
const RealEstateAIValuation = lazy(() => import("@/pages/insights/real-estate-ai-valuation"));
const EdtechAutomatedEnrollment = lazy(() => import("@/pages/insights/edtech-automated-enrollment"));
const AgricultureIoTAutomation = lazy(() => import("@/pages/insights/agriculture-iot-automation"));
const ConstructionComplianceAI = lazy(() => import("@/pages/insights/construction-compliance-ai"));
const HospitalityAIConcierge = lazy(() => import("@/pages/insights/hospitality-ai-concierge"));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-muted-foreground text-sm">Loading...</p>
      </div>
    </div>
  );
}

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

      <main id="main-content" className="relative z-10">
        <ErrorBoundary>
          <Suspense fallback={<PageLoader />}>
            <Switch>
            <Route path="/" component={Home} />
            <Route path="/services" component={ServicesPage} />
            <Route path="/services/ecommerce" component={EcommerceService} />
            <Route path="/services/edutech" component={EdutechService} />
            <Route path="/services/fintech" component={FintechService} />
            <Route path="/services/rural-digitalization" component={RuralDigitalizationPage} />
            <Route path="/services/game-development" component={GameDevelopmentPage} />
            <Route path="/services/cyber-security" component={CyberSecurity} />
            <Route path="/services/business-app-catalog" component={BusinessAppCatalog} />

            {/* Regional Service Dynamic Route */}
            <Route path="/services/global/:region" component={RegionalService} />

            {/* Hyper-Localized SEO City Route */}
            <Route path="/location/:city" component={CityServicePage} />

            {/* Cyber Crime Investigation Platform Routes */}
            <Route path="/services/cyber-crime-investigation" component={InvestigationLanding} />
            <Route path="/services/cyber-crime-investigation/process" component={InvestigationProcess} />
            <Route path="/services/cyber-crime-investigation/methodology" component={InvestigationMethodology} />
            <Route path="/services/cyber-crime-investigation/clients" component={InvestigationClients} />
            <Route path="/services/cyber-crime-investigation/pricing" component={InvestigationPricing} />
            <Route path="/services/cyber-crime-investigation/request" component={InvestigationRequest} />
            <Route path="/services/cyber-crime-investigation/legal" component={InvestigationLegal} />

            <Route path="/ai-solutions" component={AISolutions} />
            <Route path="/ai-in-real-life" component={AIInRealLife} />
            <Route path="/services/professional-partner" component={ProfessionalPartner} />
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
            <Route path="/about" component={About} />
            <Route path="/insights" component={Insights} />
            <Route path="/insights/ethical-standards" component={EthicalStandardsArticle} />
            <Route path="/insights/ai-vs-reality" component={AIvsRealityArticle} />
            <Route path="/insights/hidden-costs" component={HiddenCostsArticle} />
            <Route path="/insights/rural-goldmine" component={RuralGoldmineArticle} />
            <Route path="/insights/escape-9-5" component={Escape95Article} />
            <Route path="/insights/15k-revolution" component={StartupRevolutionArticle} />
            <Route path="/insights/ransomware-paradox" component={RansomwareParadox} />
            <Route path="/insights/hyperlocal-future" component={HyperlocalFutureArticle} />
            <Route path="/insights/cto-trap" component={CTOTrapArticle} />
            <Route path="/insights/hr-forensics" component={HRForensicsArticle} />
            <Route path="/insights/digital-forensics-roi" component={DigitalForensicsROI} />
            <Route path="/insights/cyber-security-myths" component={CyberSecurityMyths} />
            <Route path="/insights/gig-economy-upgrade" component={GigEconomyUpgradeArticle} />
            <Route path="/insights/edtech-evolution" component={EdtechEvolutionArticle} />
            <Route path="/insights/fashion-tech-revolution" component={FashionTechRevolutionArticle} />
            <Route path="/insights/healthcare-ai-triage" component={HealthcareAITriage} />
            <Route path="/insights/logistics-route-automation" component={LogisticsRouteAutomation} />
            <Route path="/insights/retail-inventory-ai" component={RetailInventoryAI} />
            <Route path="/insights/legal-contract-automation" component={LegalContractAutomation} />
            <Route path="/insights/finance-fraud-ml" component={FinanceFraudML} />
            <Route path="/insights/manufacturing-rpa" component={ManufacturingRPA} />
            <Route path="/insights/real-estate-ai-valuation" component={RealEstateAIValuation} />
            <Route path="/insights/edtech-automated-enrollment" component={EdtechAutomatedEnrollment} />
            <Route path="/insights/agriculture-iot-automation" component={AgricultureIoTAutomation} />
            <Route path="/insights/construction-compliance-ai" component={ConstructionComplianceAI} />
            <Route path="/insights/hospitality-ai-concierge" component={HospitalityAIConcierge} />

            <Route path="/tenders" component={TendersPage} />
            <Route path="/partner-network" component={PartnerNetwork} />
            <Route path="/contact" component={ContactPage} />
            <Route component={NotFound} />
          </Switch>
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
      <KairaWidget />
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
