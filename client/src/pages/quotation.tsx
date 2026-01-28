import { Link } from "wouter";
import ProposalPopup from "@/components/quotation/proposal-popup";
import { Building2, Laptop } from "lucide-react";

export default function Quotation() {
  return (
    <div className="pt-36 min-h-screen" data-testid="quotation-page">
      <ProposalPopup />
      <section className="py-24 bg-secondary/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="font-display font-bold text-4xl md:text-7xl mb-8 tracking-tight" data-testid="quotation-title">
              Get Your
              <span className="text-gradient"> Project Proposal</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light" data-testid="quotation-subtitle">
              Choose your path to success: Enterprise outsourcing for established companies or our IT Portal for new entrepreneurs.
            </p>
          </div>

          <div className="glass-intense rounded-3xl p-8 md:p-12">
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="font-display font-bold text-3xl md:text-4xl mb-4" data-testid="options-title">
                  Choose Your <span className="text-gradient">Development Path</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Select the option that best fits your business needs and development requirements.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Enterprise Option */}
                <div
                  className="glass rounded-2xl p-8 hover-lift cursor-pointer transition-all duration-300 hover:bg-primary/5 group"
                  onClick={() => window.open('https://proposals.cehpoint.co.in/', '_blank')}
                  data-testid="enterprise-option"
                >
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Building2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-2">Enterprise Outsourcing</h3>
                  <p className="text-sm text-primary font-medium">For Big Clients & Corporate Brands</p>
                </div>

                <div className="space-y-4 mb-6">
                  <p className="text-muted-foreground text-center">
                    High-budget, industry-grade reliability for established companies needing enterprise security and scale.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-sm">Dedicated Enterprise Teams</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-sm">Industry-Grade SLAs</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-sm">Banking & Healthcare Compliance</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-sm">Full-Scale Digital Transformation</span>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    className="btn-primary px-6 py-3 rounded-xl font-semibold w-full group-hover:shadow-lg transition-all"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open('https://proposals.cehpoint.co.in/', '_blank');
                    }}
                  >
                    Get Enterprise Proposal
                  </button>
                </div>
              </div>

              {/* IT Portal Option */}
              <div
                className="glass rounded-2xl p-8 hover-lift cursor-pointer transition-all duration-300 hover:bg-accent/5 group"
                onClick={() => window.open('https://projects.cehpoint.co.in/', '_blank')}
                data-testid="portal-option"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Laptop className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-2">IT Portal</h3>
                  <p className="text-sm text-accent font-medium">For Startups & New Entrepreneurs</p>
                </div>

                <div className="space-y-4 mb-6">
                  <p className="text-muted-foreground text-center">
                    Rapid, cost-effective solutions designed for startups to launch MVPs and generate revenue quickly.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                      <span className="text-sm">Cost-Effective Pricing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                      <span className="text-sm">Pre-built Solution Templates</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                      <span className="text-sm">Rapid Launch (Days, not Months)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                      <span className="text-sm">Startup-Friendly Guidance</span>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-xl font-semibold w-full group-hover:shadow-lg transition-all"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open('https://projects.cehpoint.co.in/', '_blank');
                    }}
                  >
                    Visit IT Portal →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

