import { useState } from "react";
import { Clock, Code, Rocket, CheckCircle, ArrowRight, Smartphone, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

type ProjectType = "web" | "mobile";

export default function DemoDelivery() {
  const [projectType, setProjectType] = useState<ProjectType>("web");

  const demoConfig = {
    web: {
      title: "24-Hour",
      subtitle: "From concept to working prototype in just 24 hours.",
      timelineTitle: "24-Hour",
      avgTime: "22h",
      scopeRules: [
        "Single core feature implementation",
        "Basic UI/UX with essential functionality",
        "Database integration with sample data",
        "API endpoints for core operations",
        "Authentication system (if required)",
        "Responsive design for mobile/desktop"
      ],
      process: [
        {
          hour: "0-6h",
          title: "Analysis & Planning",
          description: "Requirements analysis, technical planning, and architecture design",
          tasks: ["Requirement breakdown", "Technology selection", "Database design", "API planning"]
        },
        {
          hour: "6-18h",
          title: "Development Sprint",
          description: "Core feature implementation with rapid development methodologies",
          tasks: ["Backend development", "Frontend implementation", "Database integration", "API creation"]
        },
        {
          hour: "18-24h",
          title: "Testing & Documentation",
          description: "Quality assurance, documentation, and final demo preparation",
          tasks: ["Functionality testing", "Code documentation", "Deployment setup", "Demo preparation"]
        }
      ]
    },
    mobile: {
      title: "7-Day",
      subtitle: "Full-featured mobile app prototype in just one week.",
      timelineTitle: "7-Day",
      avgTime: "6d",
      scopeRules: [
        "Core mobile app flows (3-5 screens)",
        "Native/Cross-platform UI implementation",
        "Local storage & API integration",
        "Push notification setup",
        "Basic authentication flow",
        "iOS & Android compatible build"
      ],
      process: [
        {
          hour: "Day 1-2",
          title: "Design & Architecture",
          description: "UI/UX flow design, system architecture, and tech stack setup",
          tasks: ["Wireframing", "Component architecture", "Environment setup", "API contract definition"]
        },
        {
          hour: "Day 3-5",
          title: "Core Development",
          description: "Implementation of screens, navigation, and logic",
          tasks: ["UI implementation", "State management", "API integration", "Local storage setup"]
        },
        {
          hour: "Day 6-7",
          title: "Polish & Build",
          description: "Testing, bug fixing, and generating build artifacts",
          tasks: ["Device testing", "Performance optimization", "Build generation", "Documentation"]
        }
      ]
    }
  };

  const currentConfig = demoConfig[projectType];

  const included = [
    "Functional prototype with working features",
    "Clean, documented source code",
    "Database schema and setup scripts",
    "API documentation and testing endpoints",
    "Deployment instructions and guidelines",
    "Technical architecture documentation"
  ];

  return (
    <div className="pt-36 min-h-screen" data-testid="demo-delivery-page">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-secondary to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up space-y-8">

            {/* Project Type Toggle */}
            <div className="inline-flex p-1 bg-secondary/50 rounded-2xl border border-primary/20 backdrop-blur-sm">
              <button
                onClick={() => setProjectType("web")}
                className={cn(
                  "flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 font-semibold text-sm",
                  projectType === "web"
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                )}
              >
                <Laptop className="w-4 h-4" />
                <span>Web Application</span>
              </button>
              <button
                onClick={() => setProjectType("mobile")}
                className={cn(
                  "flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 font-semibold text-sm",
                  projectType === "mobile"
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                )}
              >
                <Smartphone className="w-4 h-4" />
                <span>Mobile Application</span>
              </button>
            </div>

            <div>
              <h1 className="font-display font-bold text-5xl md:text-7xl mb-6 tracking-tight" data-testid="page-title">
                {currentConfig.title} <span className="text-gradient">Demo Delivery</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed" data-testid="page-subtitle">
                {currentConfig.subtitle} See your ideas come to life with our rapid development process.
              </p>
            </div>

            <Link href="/quotation">
              <Button className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold text-primary-foreground" data-testid="cta-get-demo">
                Request Your Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-6xl mb-6" data-testid="included-title">
              What's <span className="text-gradient">Included</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to evaluate our technical capabilities and project approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {included.map((item, index) => (
              <div key={index} className="glass rounded-2xl p-6 hover-lift" data-testid={`included-${index}`}>
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-6xl mb-6" data-testid="timeline-title">
              {currentConfig.timelineTitle} <span className="text-gradient">Development Timeline</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven process for rapid prototype development and delivery
            </p>
          </div>

          <div className="space-y-8">
            {currentConfig.process.map((phase, index) => (
              <div key={index} className="glass rounded-3xl p-8" data-testid={`timeline-phase-${index}`}>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
                  <div className="text-center lg:text-left">
                    <div className="text-4xl font-bold text-primary mb-2" data-testid={`phase-hour-${index}`}>
                      {phase.hour}
                    </div>
                    <h3 className="font-display font-bold text-2xl mb-2" data-testid={`phase-title-${index}`}>
                      {phase.title}
                    </h3>
                    <p className="text-muted-foreground" data-testid={`phase-description-${index}`}>
                      {phase.description}
                    </p>
                  </div>

                  <div className="lg:col-span-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {phase.tasks.map((task, taskIndex) => (
                        <div key={taskIndex} className="flex items-center space-x-3" data-testid={`task-${index}-${taskIndex}`}>
                          <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope Rules */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-6" data-testid="scope-title">
                Demo <span className="text-gradient">Scope Rules</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Clear boundaries ensure we deliver a functional prototype within the {projectType === 'web' ? '24-hour' : '7-day'} timeframe.
              </p>

              <div className="space-y-4">
                {currentConfig.scopeRules.map((rule, index) => (
                  <div key={index} className="flex items-start space-x-3" data-testid={`scope-rule-${index}`}>
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>{rule}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-3xl p-8">
              <h3 className="font-bold text-2xl mb-6 text-center" data-testid="demo-stats-title">
                {projectType === 'web' ? 'Web' : 'App'} Demo Statistics
              </h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2" data-testid="stat-success-rate">98%</div>
                  <div className="text-muted-foreground">On-time Delivery Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2" data-testid="stat-avg-time">{currentConfig.avgTime}</div>
                  <div className="text-muted-foreground">Average Delivery Time</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2" data-testid="stat-features">3-5</div>
                  <div className="text-muted-foreground">Core Features per Demo</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2" data-testid="stat-conversion">85%</div>
                  <div className="text-muted-foreground">Demo to Project Conversion</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Handoff Process */}
      <section className="py-24 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-6xl mb-6" data-testid="handoff-title">
              Demo <span className="text-gradient">Handoff Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional delivery with comprehensive documentation and next steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group" data-testid="handoff-step-1">
              <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Code className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-4">Live Demo Session</h3>
              <p className="text-muted-foreground">
                Interactive walkthrough of the prototype with feature explanations and Q&A session.
              </p>
            </div>

            <div className="text-center group" data-testid="handoff-step-2">
              <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-4">Technical Handover</h3>
              <p className="text-muted-foreground">
                Complete source code delivery with documentation, deployment guides, and architecture overview.
              </p>
            </div>

            <div className="text-center group" data-testid="handoff-step-3">
              <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-100 transition-transform">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-4">MVP Roadmap</h3>
              <p className="text-muted-foreground">
                Detailed development plan for scaling the prototype into a full production application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-3xl p-12">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6" data-testid="cta-title">
              Ready to See Your Idea <span className="text-gradient">Come to Life?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8" data-testid="cta-description">
              Get your {currentConfig.timelineTitle} demo started with our intelligent quotation system.
            </p>
            <Link href="/quotation">
              <Button className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold text-primary-foreground" data-testid="cta-final">
                Request Your Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
