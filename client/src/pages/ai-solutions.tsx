import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";
import AIROICalculator from "@/components/calculators/ai-roi-calculator";
import AutomationRecommender from "@/components/calculators/automation-recommender";
import IndustryUseCaseExplorer from "@/components/sections/industry-use-cases";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import SEO from "@/components/seo";
import BreadcrumbSchema from "@/components/seo/breadcrumb-schema";
import RelatedPrograms from "@/components/shared/related-programs";
import { useTranslation } from "react-i18next";

export default function AISolutions() {
  const { t } = useTranslation();
  const serviceSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI Solutions & Consulting",
    "provider": {
      "@type": "Organization",
      "name": "Cehpoint",
      "sameAs": "https://www.cehpoint.co.in"
    },
    "areaServed": "IN",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Generative AI Integration",
            "description": "Custom GPT models and content generation solutions."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Intelligent Automation",
            "description": "End-to-end process automation with AI decision-making."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Predictive Analytics",
            "description": "Machine learning models for business forecasting."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Computer Vision",
            "description": "Image recognition and video analysis systems."
          }
        }
      ]
    }
  });

  return (
    <div className="pt-36 min-h-screen" data-testid="ai-solutions-page">
      <SEO
        title="Enterprise AI Solutions & Consulting in India"
        description="Transform your business with Cehpoint's AI solutions. We specialize in Generative AI, Computer Vision, Predictive Analytics, and Intelligent Process Automation for Indian enterprises."
        keywords={["AI Solutions India", "Generative AI Consulting", "Computer Vision Services", "Predictive Analytics Company", "AI Automation India", "Machine Learning Services"]}
        schema={serviceSchema}
        image="/images/ai/ai-hero.png"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.cehpoint.co.in/" },
          { name: "AI Solutions", url: "https://www.cehpoint.co.in/ai-solutions" }
        ]}
      />
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1)_0,transparent_100%)]"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6 border-primary/20">
              <span className="text-sm font-medium text-primary flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 mr-2" /> AI That Actually Works
              </span>
            </div>

            <h1 className="font-display font-bold text-5xl md:text-7xl mb-6 tracking-tight" data-testid="page-title">
              {t("pages.aiSolutions.title")} <br />
              <span className="text-primary">{t("pages.aiSolutions.titleAccent")}</span>
            </h1>

            <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed" data-testid="page-subtitle">
              {t("pages.aiSolutions.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button
                onClick={() => document.getElementById('automation-planner')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary hover-glow px-8 py-6 rounded-2xl text-lg font-bold text-primary-foreground shadow-xl shadow-primary/20"
                data-testid="hero-cta-planner"
              >
                {t("pages.aiSolutions.calculateROI")}
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open("https://wa.me/919091156095?text=Hi%2C%20I%20want%20to%20start%20a%207-Day%20AI%20Sprint.%20I'm%20interested%20in%20automating%20my%20business%20processes.", "_blank")}
                className="px-8 py-6 rounded-2xl text-lg font-bold text-foreground hover:bg-foreground/10"
                data-testid="hero-cta-primary"
              >
                {t("pages.aiSolutions.talkToExpert")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reality Check - ROI Calculator Banner */}
      <section className="py-24 bg-secondary/30 relative border-y border-foreground/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.05),transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">
            The <span className="text-primary">Reality Check</span>
          </h2>
          <p className="text-xl text-foreground/80 mb-10">
            Don't just take our word for it. Calculate exactly what manual processes are costing your business right now.
          </p>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="btn-outline px-10 py-6 text-lg font-bold rounded-full">
                Calculate Your ROI
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-5xl glass-intense border-foreground/10 p-0 overflow-hidden bg-transparent shadow-none">
              <AIROICalculator />
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Custom Automation Blueprint Generator */}
      <section className="py-24 bg-background relative overflow-hidden" id="automation-planner">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.15),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <AutomationRecommender />
        </div>
      </section>

      {/* Industry Use Cases - NEW SECTION */}
      <section className="py-12 relative">
        <IndustryUseCaseExplorer />
      </section>

      {/* The Promise */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:50px_50px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-display font-bold text-4xl md:text-6xl mb-8">
            The 7-Day Promise
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-12 leading-relaxed">
            We don't do month-long "discovery phases". We deliver a working MVP of your AI solution in 7 days. If you don't like the demo, you don't pay.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-foreground/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl font-bold mb-2">Day 1-2</div>
              <div className="text-sm opacity-80">Analysis & Strategy</div>
            </div>
            <div className="bg-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-foreground/30">
              <div className="text-4xl font-bold mb-2">Day 3-6</div>
              <div className="text-sm opacity-80">Development & Training</div>
            </div>
            <div className="bg-foreground/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl font-bold mb-2">Day 7</div>
              <div className="text-sm opacity-80">Demo & Handover</div>
            </div>
          </div>

          <Button
            onClick={() => window.open("https://wa.me/919091156095?text=Hi%2C%20I%20want%20to%20challenge%20Cehpoint.%20I%20have%20a%20complex%20problem%20that%20needs%20an%20AI%20solution.", "_blank")}
            className="bg-white text-primary hover:bg-white/90 px-10 py-6 rounded-2xl text-xl font-bold shadow-2xl"
          >
            Challenge Us
          </Button>
        </div>
      </section>

      <RelatedPrograms
        heading="Take AI further with the right partner"
        description="Where teams usually go after exploring AI Solutions."
        programs={[
          { href: "/ai-in-real-life", label: "AI in Real Life", description: "Six-week applied AI program for working professionals — practical, hands-on, outcomes-led." },
          { href: "/services/cyber-crime-investigation", label: "Cyber Crime Investigation", description: "AI-assisted digital forensics with court-admissible reports for HR, legal, and law-enforcement teams." },
          { href: "/insights", label: "Insights & Case Studies", description: "Read how teams shipped AI to production — wins, failures, and the engineering choices behind them." },
        ]}
      />
    </div>
  );
}