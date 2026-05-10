import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MessageCircle, Database, Cloud, Bot, Shield, CreditCard, Lock, Code, FileText, Users, Zap, ChevronRight } from "lucide-react";

type Currency = "INR" | "USD" | "EUR" | "GBP";

const CURRENCY_SYMBOLS = { INR: "₹", USD: "$", EUR: "€", GBP: "£" };

const PROJECT_TYPES = [
  {
    id: "mvp",
    name: "MVP / Landing Page",
    description: "Single page, no complex backend",
    basePrice: { INR: 15000, USD: 200, EUR: 180, GBP: 160 },
    deliveryDays: "3-7 days",
    icon: Zap,
  },
  {
    id: "standard",
    name: "Standard Application",
    description: "Full app with database, auth, standard features",
    basePrice: { INR: 40000, USD: 500, EUR: 450, GBP: 400 },
    deliveryDays: "2-4 weeks",
    icon: Code,
  },
  {
    id: "ai",
    name: "AI / Algorithmic",
    description: "LLM integration, ML models, custom AI features",
    basePrice: { INR: 80000, USD: 1000, EUR: 900, GBP: 800 },
    deliveryDays: "3-6 weeks",
    icon: Bot,
  },
  {
    id: "enterprise",
    name: "Enterprise / Cloud",
    description: "Multi-tenant, cloud infrastructure, high scale",
    basePrice: { INR: 150000, USD: 2000, EUR: 1800, GBP: 1600 },
    deliveryDays: "4-8 weeks",
    icon: Cloud,
  },
  {
    id: "security-critical",
    name: "Security / Compliance",
    description: "Fintech, healthcare, government, audit-ready",
    basePrice: { INR: 200000, USD: 3000, EUR: 2700, GBP: 2400 },
    deliveryDays: "4-12 weeks",
    icon: Shield,
  },
];

const ADD_ONS = [
  { id: "database", name: "Advanced Database", description: "Complex SQL/NoSQL, real-time sync", multiplier: 1.15, icon: Database },
  { id: "payment", name: "Payment Integration", description: "Razorpay, Stripe, payment gateway", multiplier: 1.12, icon: CreditCard },
  { id: "ai-feature", name: "Additional AI Feature", description: "Extra AI module (chatbot, analyzer, etc.)", multiplier: 1.20, icon: Bot },
  { id: "security-audit", name: "Security Audit & Hardening", description: "VAPT, OWASP compliance, pen testing", multiplier: 1.18, icon: Lock },
  { id: "documentation", name: "Complete Documentation", description: "Tech docs, API docs, user manuals", multiplier: 1.08, icon: FileText },
  { id: "maintenance", name: "6-Month Support & Maintenance", description: "Bug fixes, updates, hosting support", multiplier: 1.25, icon: Users },
];

const HOSTING_TYPES = [
  { id: "free", name: "Free / Shared Hosting", description: "Firebase, Supabase, Vercel, Netlify", discount: 0.90, icon: Cloud },
  { id: "managed", name: "Managed Cloud (We Setup)", description: "AWS/Azure/GCP with our config", discount: 1.0, icon: Cloud },
  { id: "enterprise-cloud", name: "Enterprise Cloud Architecture", description: "Multi-region, auto-scaling, load balancing", discount: 1.30, icon: Cloud },
];

const SOURCE_CODE_OPTIONS = [
  { id: "retain", name: "We Retain Source Code", description: "We maintain, you get binary/executable", discount: 1.0, icon: Lock },
  { id: "full-delivery", name: "Full Source Code Delivery", description: "Complete codebase, you own it all", discount: 1.20, icon: Code },
];

export default function ProjectCostEstimator() {
  const [currency, setCurrency] = useState<Currency>("INR");
  const [projectType, setProjectType] = useState("standard");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [hostingType, setHostingType] = useState("managed");
  const [sourceCodeOption, setSourceCodeOption] = useState("retain");
  const [scale, setScale] = useState<"startup" | "growing" | "massive">("startup");
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const project = PROJECT_TYPES.find(p => p.id === projectType);
    if (!project) return;

    let cost = project.basePrice[currency];

    // Scale multiplier
    if (scale === "growing") cost *= 1.20;
    if (scale === "massive") cost *= 1.50;

    // Add-ons
    selectedAddOns.forEach(addonId => {
      const addon = ADD_ONS.find(a => a.id === addonId);
      if (addon) cost *= addon.multiplier;
    });

    // Hosting discount
    const hosting = HOSTING_TYPES.find(h => h.id === hostingType);
    if (hosting) cost *= hosting.discount;

    // Source code option
    const sourceCode = SOURCE_CODE_OPTIONS.find(s => s.id === sourceCodeOption);
    if (sourceCode) cost *= sourceCode.discount;

    setTotalCost(Math.round(cost));
  }, [currency, projectType, selectedAddOns, hostingType, sourceCodeOption, scale]);

  const formatCurrency = (amount: number) => {
    return `${CURRENCY_SYMBOLS[currency]}${amount.toLocaleString()}`;
  };

  const selectedProject = PROJECT_TYPES.find(p => p.id === projectType);
  const ProjectIcon = selectedProject?.icon || Code;

  const toggleAddOn = (id: string) => {
    setSelectedAddOns(prev =>
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  const handleWhatsApp = () => {
    const addOnsList = selectedAddOns.map(id => {
      const addon = ADD_ONS.find(a => a.id === id);
      return addon?.name || id;
    });

    const message = `Hi, I used Cehpoint's Project Cost Estimator.

Project Type: ${selectedProject?.name}
Scale: ${scale.charAt(0).toUpperCase() + scale.slice(1)} (usage expectation)
Hosting: ${HOSTING_TYPES.find(h => h.id === hostingType)?.name}
Source Code: ${SOURCE_CODE_OPTIONS.find(s => s.id === sourceCodeOption)?.name}
${addOnsList.length > 0 ? `Add-ons: ${addOnsList.join(", ")}` : ""}

Estimated Investment: ${formatCurrency(totalCost)}
Timeline: ${selectedProject?.deliveryDays}

Please contact me to discuss further.`;

    window.open(`https://wa.me/919091156095?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-24 relative overflow-hidden" data-testid="cost-estimator">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-4">
            <Code className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">AI-Powered Project Estimation</span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
            Calculate Your <span className="text-primary">Investment</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No more guessing. Answer a few questions about your project and get an instant estimate.
            <span className="text-primary font-semibold"> Max timeline: 1 month.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Configuration */}
          <div className="lg:col-span-2 space-y-6">

            {/* Step 1: Project Type */}
            <Card className="glass-intense border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  What Are You Building?
                </CardTitle>
                <CardDescription>Select the project type that best matches your needs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {PROJECT_TYPES.map(project => {
                    const Icon = project.icon;
                    const isSelected = projectType === project.id;
                    return (
                      <button
                        key={project.id}
                        onClick={() => setProjectType(project.id)}
                        className={`p-4 rounded-xl border text-left transition-all ${
                          isSelected
                            ? "border-primary bg-primary/10 shadow-[0_0_20px_rgba(112,66,248,0.2)]"
                            : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Icon className={`w-5 h-5 ${isSelected ? "text-primary" : "text-muted-foreground"}`} />
                          <span className="font-bold text-sm">{project.name}</span>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">{project.description}</p>
                        <div className="text-xs text-primary font-semibold">
                          {formatCurrency(project.basePrice[currency])}
                          <span className="text-muted-foreground ml-2">{project.deliveryDays}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Step 2: Scale */}
            <Card className="glass-intense border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  Expected User Scale
                </CardTitle>
                <CardDescription>How many users will use your app in the first month?</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { id: "startup", name: "Startup", description: "0 - 1,000 users", multiplier: "Base price" },
                    { id: "growing", name: "Growing", description: "1,000 - 50,000 users", multiplier: "+20%" },
                    { id: "massive", name: "Massive", description: "50,000+ users", multiplier: "+50%" },
                  ].map(option => (
                    <button
                      key={option.id}
                      onClick={() => setScale(option.id as "startup" | "growing" | "massive")}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        scale === option.id
                          ? "border-primary bg-primary/10"
                          : "border-white/10 bg-white/5 hover:border-white/20"
                      }`}
                    >
                      <div className="font-bold mb-1">{option.name}</div>
                      <div className="text-xs text-muted-foreground mb-2">{option.description}</div>
                      <div className="text-xs text-primary font-semibold">{option.multiplier}</div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Step 3: Add-ons */}
            <Card className="glass-intense border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <ChevronRight className="w-4 h-4 text-primary" />
                  </div>
                  Additional Requirements
                </CardTitle>
                <CardDescription>Select any additional features you need (optional)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {ADD_ONS.map(addon => {
                    const Icon = addon.icon;
                    const isSelected = selectedAddOns.includes(addon.id);
                    return (
                      <button
                        key={addon.id}
                        onClick={() => toggleAddOn(addon.id)}
                        className={`p-4 rounded-xl border text-left transition-all ${
                          isSelected
                            ? "border-primary bg-primary/10"
                            : "border-white/10 bg-white/5 hover:border-white/20"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Icon className={`w-5 h-5 ${isSelected ? "text-primary" : "text-muted-foreground"}`} />
                            <div>
                              <div className="font-bold text-sm">{addon.name}</div>
                              <div className="text-xs text-muted-foreground">{addon.description}</div>
                            </div>
                          </div>
                          <div className={`w-5 h-5 rounded border flex items-center justify-center ${
                            isSelected ? "border-primary bg-primary text-white" : "border-white/20"
                          }`}>
                            {isSelected && <ChevronRight className="w-3 h-3" />}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Step 4: Hosting & Source Code */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="glass-intense border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Cloud className="w-4 h-4 text-primary" />
                    </div>
                    Hosting Preference
                  </CardTitle>
                  <CardDescription>Where will your app be deployed?</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {HOSTING_TYPES.map(host => {
                    const Icon = host.icon;
                    return (
                      <button
                        key={host.id}
                        onClick={() => setHostingType(host.id)}
                        className={`w-full p-3 rounded-xl border text-left transition-all flex items-center gap-3 ${
                          hostingType === host.id
                            ? "border-primary bg-primary/10"
                            : "border-white/10 bg-white/5 hover:border-white/20"
                        }`}
                      >
                        <Icon className={`w-4 h-4 ${hostingType === host.id ? "text-primary" : "text-muted-foreground"}`} />
                        <div>
                          <div className="font-medium text-sm">{host.name}</div>
                          <div className="text-xs text-muted-foreground">{host.description}</div>
                        </div>
                      </button>
                    );
                  })}
                </CardContent>
              </Card>

              <Card className="glass-intense border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Code className="w-4 h-4 text-primary" />
                    </div>
                    Source Code
                  </CardTitle>
                  <CardDescription>Do you need the complete source code?</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {SOURCE_CODE_OPTIONS.map(option => {
                    const Icon = option.icon;
                    return (
                      <button
                        key={option.id}
                        onClick={() => setSourceCodeOption(option.id)}
                        className={`w-full p-3 rounded-xl border text-left transition-all flex items-center gap-3 ${
                          sourceCodeOption === option.id
                            ? "border-primary bg-primary/10"
                            : "border-white/10 bg-white/5 hover:border-white/20"
                        }`}
                      >
                        <Icon className={`w-4 h-4 ${sourceCodeOption === option.id ? "text-primary" : "text-muted-foreground"}`} />
                        <div>
                          <div className="font-medium text-sm">{option.name}</div>
                          <div className="text-xs text-muted-foreground">{option.description}</div>
                        </div>
                      </button>
                    );
                  })}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column - Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <Card className="glass-intense border-primary/20 shadow-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ProjectIcon className="w-5 h-5 text-primary" />
                    Project Estimate
                  </CardTitle>
                  <CardDescription>Indicative investment (excl. GST)</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Currency</Label>
                    <div className="grid grid-cols-4 gap-2">
                      {(["INR", "USD", "EUR", "GBP"] as Currency[]).map(curr => (
                        <button
                          key={curr}
                          onClick={() => setCurrency(curr)}
                          className={`py-2 rounded-lg border text-sm font-medium transition-all ${
                            currency === curr
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-white/10 bg-white/5 hover:border-white/20"
                          }`}
                        >
                          {curr}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="text-xs text-muted-foreground mb-2">Selected Type</div>
                    <div className="font-semibold text-sm mb-4">{selectedProject?.name}</div>

                    <div className="text-xs text-muted-foreground mb-2">Timeline</div>
                    <div className="font-semibold text-sm mb-4">{selectedProject?.deliveryDays}</div>

                    {selectedAddOns.length > 0 && (
                      <>
                        <div className="text-xs text-muted-foreground mb-2">Add-ons</div>
                        <div className="text-sm mb-4">
                          {selectedAddOns.map(id => {
                            const addon = ADD_ONS.find(a => a.id === id);
                            return (
                              <div key={id} className="flex items-center gap-1 text-muted-foreground">
                                <ChevronRight className="w-3 h-3" />
                                {addon?.name}
                              </div>
                            );
                          })}
                        </div>
                      </>
                    )}

                    <div className="text-xs text-muted-foreground mb-2">Scale</div>
                    <div className="font-semibold text-sm mb-4 capitalize">{scale}</div>

                    <div className="text-xs text-muted-foreground mb-2">Hosting</div>
                    <div className="font-semibold text-sm mb-4">
                      {HOSTING_TYPES.find(h => h.id === hostingType)?.name}
                    </div>

                    <div className="text-xs text-muted-foreground mb-2">Source Code</div>
                    <div className="font-semibold text-sm mb-4">
                      {SOURCE_CODE_OPTIONS.find(s => s.id === sourceCodeOption)?.name}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-primary/20 text-center">
                    <div className="text-sm text-muted-foreground mb-1">Estimated Investment</div>
                    <div className="text-4xl font-bold text-primary mb-1">
                      {formatCurrency(totalCost)}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Max delivery: 1 month
                    </div>
                  </div>

                  <Button
                    onClick={handleWhatsApp}
                    className="w-full btn-primary font-bold py-6 text-lg rounded-xl flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Get Detailed Quote
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    Final quote may vary based on detailed requirements.
                    <span className="text-primary"> Pay after demo.</span>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}