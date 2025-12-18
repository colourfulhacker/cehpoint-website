import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import AIROICalculator from "@/components/calculators/ai-roi-calculator";
import IndustryUseCaseExplorer from "@/components/sections/industry-use-cases";
import AISolutionsSection from "@/components/sections/ai-solutions";
import { Badge } from "@/components/ui/badge";

export default function AISolutions() {
  return (
    <div className="pt-24 min-h-screen" data-testid="ai-solutions-page">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6 border-primary/20">
              <span className="text-sm font-medium text-primary flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> AI That Actually Works
              </span>
            </div>

            <h1 className="font-display font-bold text-5xl md:text-7xl mb-6 tracking-tight" data-testid="page-title">
              Stop Guessing. <br />
              Start <span className="text-gradient">Automating.</span>
            </h1>

            <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed" data-testid="page-subtitle">
              We don't sell "AI hype". We build practical, revenue-generating automation systems that are delivered in 7 days.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button
                onClick={() => window.open("https://wa.me/919091156095?text=Hi%2C%20I%20want%20to%20start%20a%207-Day%20AI%20Sprint.%20I'm%20interested%20in%20automating%20my%20business%20processes.", "_blank")}
                className="btn-primary hover-glow px-8 py-6 rounded-2xl text-lg font-bold text-primary-foreground shadow-xl shadow-primary/20"
                data-testid="hero-cta-primary"
              >
                Start Your 7-Day Sprint
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reality Check - ROI Calculator */}
      <section className="py-24 bg-secondary/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              The <span className="text-gradient">Reality Check</span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Don't just take our word for it. Calculate exactly what manual processes are costing your business right now.
            </p>
          </div>

          <AIROICalculator />
        </div>
      </section>

      {/* Industry Use Cases - NEW SECTION */}
      <section className="py-12 relative">
        <IndustryUseCaseExplorer />
      </section>

      {/* Comprehensive Solutions Grid */}
      <AISolutionsSection />

      {/* The Promise */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-display font-bold text-4xl md:text-6xl mb-8">
            The 7-Day Promise
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-12 leading-relaxed">
            We don't do month-long "discovery phases". We deliver a working MVP of your AI solution in 7 days. If you don't like the demo, you don't pay.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl font-bold mb-2">Day 1-2</div>
              <div className="text-sm opacity-80">Analysis & Strategy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <div className="text-4xl font-bold mb-2">Day 3-6</div>
              <div className="text-sm opacity-80">Development & Training</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
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
    </div>
  );
}