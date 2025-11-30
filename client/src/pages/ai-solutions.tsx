import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, TrendingUp, Bot, Sparkles, Code, Database, Server } from "lucide-react";
import AIROICalculator from "@/components/calculators/ai-roi-calculator";
import IndustryUseCaseExplorer from "@/components/sections/industry-use-cases";
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
              <Link href="/quotation">
                <Button
                  className="btn-primary hover-glow px-8 py-6 rounded-2xl text-lg font-bold text-primary-foreground shadow-xl shadow-primary/20"
                  data-testid="hero-cta-primary"
                >
                  Start Your 7-Day Sprint
                </Button>
              </Link>
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

      {/* Core Pillars */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              Unignorable <span className="text-gradient">Value</span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              We focus on the three areas that deliver the highest ROI for modern businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Automation */}
            <div className="glass-intense rounded-3xl p-8 hover-lift group border-t-4 border-blue-500">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-4">Intelligent Automation</h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Eliminate repetitive tasks. From data entry to customer support, we build agents that work 24/7 without complaints.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="outline" className="bg-blue-500/5 border-blue-500/20 text-blue-600">Python</Badge>
                <Badge variant="outline" className="bg-blue-500/5 border-blue-500/20 text-blue-600">Selenium</Badge>
                <Badge variant="outline" className="bg-blue-500/5 border-blue-500/20 text-blue-600">UiPath</Badge>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm font-medium"><CheckCircle className="w-4 h-4 text-blue-500 mr-2" /> 70% Cost Reduction</li>
                <li className="flex items-center text-sm font-medium"><CheckCircle className="w-4 h-4 text-blue-500 mr-2" /> Zero Human Error</li>
                <li className="flex items-center text-sm font-medium"><CheckCircle className="w-4 h-4 text-blue-500 mr-2" /> Instant Scalability</li>
              </ul>
            </div>

            {/* Analytics */}
            <div className="glass-intense rounded-3xl p-8 hover-lift group border-t-4 border-purple-500 transform md:-translate-y-4 shadow-2xl">
              <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-4">Predictive Analytics</h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Stop reacting, start predicting. Use your data to forecast sales, demand, and market trends with scary accuracy.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="outline" className="bg-purple-500/5 border-purple-500/20 text-purple-600">TensorFlow</Badge>
                <Badge variant="outline" className="bg-purple-500/5 border-purple-500/20 text-purple-600">PyTorch</Badge>
                <Badge variant="outline" className="bg-purple-500/5 border-purple-500/20 text-purple-600">Scikit-learn</Badge>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm font-medium"><CheckCircle className="w-4 h-4 text-purple-500 mr-2" /> 90% Forecast Accuracy</li>
                <li className="flex items-center text-sm font-medium"><CheckCircle className="w-4 h-4 text-purple-500 mr-2" /> Inventory Optimization</li>
                <li className="flex items-center text-sm font-medium"><CheckCircle className="w-4 h-4 text-purple-500 mr-2" /> Dynamic Pricing</li>
              </ul>
            </div>

            {/* GenAI */}
            <div className="glass-intense rounded-3xl p-8 hover-lift group border-t-4 border-pink-500">
              <div className="w-16 h-16 bg-pink-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Bot className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-4">Generative AI</h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Create content, code, and designs at scale. Custom LLMs trained on your brand voice and proprietary data.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="outline" className="bg-pink-500/5 border-pink-500/20 text-pink-600">OpenAI GPT-4</Badge>
                <Badge variant="outline" className="bg-pink-500/5 border-pink-500/20 text-pink-600">Llama 3</Badge>
                <Badge variant="outline" className="bg-pink-500/5 border-pink-500/20 text-pink-600">LangChain</Badge>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm font-medium"><CheckCircle className="w-4 h-4 text-pink-500 mr-2" /> 10x Content Output</li>
                <li className="flex items-center text-sm font-medium"><CheckCircle className="w-4 h-4 text-pink-500 mr-2" /> Personalized Marketing</li>
                <li className="flex items-center text-sm font-medium"><CheckCircle className="w-4 h-4 text-pink-500 mr-2" /> Custom Knowledge Bases</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

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

          <Link href="/quotation">
            <Button className="bg-white text-primary hover:bg-white/90 px-10 py-6 rounded-2xl text-xl font-bold shadow-2xl">
              Challenge Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}