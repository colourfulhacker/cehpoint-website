import { DollarSign, Shield, BarChart3, Smartphone, Globe, Lock, Star, TrendingUp, Users, Award, CheckCircle2, Clock, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import SEO from "@/components/seo";
import ServiceSchema from "@/components/seo/service-schema";
import BreadcrumbSchema from "@/components/seo/breadcrumb-schema";
import FAQSchema from "@/components/seo/faq-schema";
import FintechCalculator from "@/components/calculators/fintech-calculator";

export default function FintechService() {
  const problemPatterns = [
    "Complex regulatory compliance across multiple jurisdictions",
    "Security vulnerabilities in payment processing systems",
    "Slow transaction processing and settlement times",
    "Limited integration with banking and financial institutions",
    "Poor user experience in mobile financial applications",
    "Lack of real-time fraud detection and risk management"
  ];

  const architectureComponents = [
    {
      icon: DollarSign,
      title: "Payment Processing",
      description: "High-performance payment engines with multi-currency support and instant settlements."
    },
    {
      icon: Shield,
      title: "Security & Fraud Detection",
      description: "Advanced AI-powered fraud detection with real-time risk assessment and prevention."
    },
    {
      icon: BarChart3,
      title: "Financial Analytics",
      description: "Comprehensive financial reporting, analytics, and business intelligence platforms."
    },
    {
      icon: Smartphone,
      title: "Mobile Banking",
      description: "Native mobile applications with biometric authentication and seamless UX."
    },
    {
      icon: Globe,
      title: "Blockchain Integration",
      description: "Cryptocurrency support, smart contracts, and distributed ledger technologies."
    },
    {
      icon: Lock,
      title: "Regulatory Compliance",
      description: "Built-in compliance frameworks for KYC, AML, PCI-DSS, and regional regulations."
    }
  ];

  const kpis = [
    { metric: "Transaction Speed", target: "<100ms", description: "Ultra-fast payment processing" },
    { metric: "Uptime", target: "99.99%", description: "Mission-critical system reliability" },
    { metric: "Fraud Detection", target: "99.9%", description: "AI-powered fraud prevention accuracy" },
    { metric: "Compliance Score", target: "100%", description: "Full regulatory compliance adherence" },
    { metric: "Mobile Adoption", target: "80%+", description: "Mobile-first user engagement" },
    { metric: "API Response", target: "<50ms", description: "Lightning-fast API performance" }
  ];

  return (
    <div className="pt-36 min-h-screen" data-testid="fintech-service-page">
      <SEO
        title="Fintech Solutions"
        description="Build secure, compliant, and scalable financial technology platforms with PCI-DSS compliance, real-time fraud detection, and enterprise-grade security. Trusted by leading financial institutions."
        keywords={["Fintech Solutions", "Payment Processing", "Financial Software", "Banking Technology", "PCI-DSS Compliance", "Fraud Detection", "Blockchain Integration", "Mobile Banking"]}
        url="https://www.cehpoint.co.in/services/fintech"
        canonical="https://www.cehpoint.co.in/services/fintech"
      />

      {/* Structured Data Schemas */}
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.cehpoint.co.in/" },
          { name: "Services", url: "https://www.cehpoint.co.in/services" },
          { name: "Fintech Solutions", url: "https://www.cehpoint.co.in/services/fintech" }
        ]}
      />
      <ServiceSchema
        name="Fintech Application Development"
        description="Build secure, compliant, and scalable financial technology platforms with PCI-DSS compliance, real-time fraud detection, and enterprise-grade security."
        serviceType="Financial Technology Services"
        category="Financial Software Development"
        url="https://www.cehpoint.co.in/services/fintech"
        hasOfferCatalog={true}
      />
      <FAQSchema
        pageId="fintech"
        faqs={[
          { question: "How long does it take to build a fintech platform?", answer: "Timeline varies based on complexity, but typically ranges from 4-9 months for a full-featured platform. We follow an agile approach with regular releases, so you can start seeing value within the first 6-8 weeks." },
          { question: "Do you handle regulatory compliance?", answer: "Yes, compliance is built into our development process. We have extensive experience with PCI-DSS, KYC/AML, GDPR, SOX, and regional banking regulations. Our team includes compliance specialists who ensure your platform meets all requirements." },
          { question: "What security measures do you implement?", answer: "We implement end-to-end encryption, multi-factor authentication, real-time fraud detection, secure API gateways, regular security audits, and comprehensive audit logging. All our solutions are built with security-first architecture." },
          { question: "Can you integrate with existing banking systems?", answer: "Absolutely. We have extensive experience integrating with core banking systems, payment gateways, credit bureaus, and third-party financial services through secure APIs and industry-standard protocols." },
          { question: "What ongoing support do you provide?", answer: "We offer 24/7 monitoring, regular security updates, performance optimization, compliance updates, and dedicated support teams. Our SLA guarantees 99.9% uptime with rapid incident response." }
        ]}
      />

      {/* Hero Section */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-background via-secondary to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up">
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-7xl mb-6 tracking-tight" data-testid="page-title">
              Fintech <span className="text-gradient">Solutions</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed" data-testid="page-subtitle">
              Build secure, compliant, and scalable financial technology platforms that power the future of finance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/quotation">
                <Button className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold text-primary-foreground w-full sm:w-auto" data-testid="cta-get-quote">
                  Get Fintech Quote <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>Free consultation • No commitment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-3xl font-bold mb-1">4.9/5</p>
              <p className="text-sm text-muted-foreground">From 127+ client reviews</p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-3xl font-bold mb-1">$2.4B+</p>
              <p className="text-sm text-muted-foreground">Transactions processed annually</p>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-3xl font-bold mb-1">50M+</p>
              <p className="text-sm text-muted-foreground">End users served globally</p>
            </div>
          </div>

          <div className="text-center mb-8">
            <p className="text-sm text-muted-foreground mb-4">Trusted by leading financial institutions</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <span className="text-lg font-semibold">HDFC Bank</span>
              <span className="text-lg font-semibold">PayPal</span>
              <span className="text-lg font-semibold">Stripe</span>
              <span className="text-lg font-semibold">Razorpay</span>
              <span className="text-lg font-semibold">Paytm</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Patterns */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6" data-testid="problems-title">
              Financial <span className="text-gradient">Challenges We Solve</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complex financial technology challenges require specialized expertise and proven solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problemPatterns.map((problem, index) => (
              <div key={index} className="glass rounded-2xl p-6 hover-lift" data-testid={`problem-${index}`}>
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">{index + 1}</span>
                </div>
                <p className="text-muted-foreground">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reference Architecture */}
      <section className="py-24 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6" data-testid="architecture-title">
              Financial <span className="text-gradient">Architecture</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enterprise-grade fintech architecture designed for security, compliance, and scalability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {architectureComponents.map((component, index) => {
              const IconComponent = component.icon;
              return (
                <div key={index} className="glass rounded-3xl p-8 hover-lift" data-testid={`architecture-${index}`}>
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-4" data-testid={`architecture-title-${index}`}>
                    {component.title}
                  </h3>
                  <p className="text-muted-foreground" data-testid={`architecture-description-${index}`}>
                    {component.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <FintechCalculator />

      {/* Case Studies Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              Success <span className="text-gradient">Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results from our fintech implementations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass rounded-3xl p-8 hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-primary" />
                <h3 className="font-bold text-xl">Digital Payment Platform</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Built a comprehensive payment processing platform for a leading fintech startup, handling multi-currency transactions with real-time fraud detection.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-2xl font-bold text-primary">99.99%</p>
                  <p className="text-sm text-muted-foreground">Uptime achieved</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">65ms</p>
                  <p className="text-sm text-muted-foreground">Avg. transaction time</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">$500M+</p>
                  <p className="text-sm text-muted-foreground">Monthly volume</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">99.8%</p>
                  <p className="text-sm text-muted-foreground">Fraud detection rate</p>
                </div>
              </div>
              <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                "Cehpoint delivered a robust, scalable platform that exceeded our expectations. Their expertise in fintech compliance was invaluable."
                <footer className="text-sm mt-2 not-italic">— CTO, Digital Payments Inc.</footer>
              </blockquote>
            </div>

            <div className="glass rounded-3xl p-8 hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-primary" />
                <h3 className="font-bold text-xl">Mobile Banking App</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Developed a feature-rich mobile banking application with biometric authentication, instant transfers, and AI-powered financial insights.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-2xl font-bold text-primary">2M+</p>
                  <p className="text-sm text-muted-foreground">Active users</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">4.8★</p>
                  <p className="text-sm text-muted-foreground">App store rating</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">40%</p>
                  <p className="text-sm text-muted-foreground">Increase in engagement</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">1.2s</p>
                  <p className="text-sm text-muted-foreground">App launch time</p>
                </div>
              </div>
              <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                "The mobile app transformed our customer experience. User adoption exceeded projections by 150%."
                <footer className="text-sm mt-2 not-italic">— Head of Digital, Regional Bank</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Security */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-6" data-testid="compliance-title">
                Regulatory <span className="text-gradient">Compliance</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Financial platforms built with comprehensive regulatory compliance and security frameworks.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>PCI-DSS Level 1 Compliance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>SOX Financial Reporting Standards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>KYC/AML Compliance Frameworks</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>GDPR & Privacy Protection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>ISO 27001 Security Standards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Regional Banking Regulations</span>
                </div>
              </div>
            </div>

            <div className="glass rounded-3xl p-8">
              <h3 className="font-bold text-2xl mb-6 text-center" data-testid="security-features-title">
                Security Features
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>End-to-End Encryption</span>
                  <span className="flex items-center text-green-500 font-semibold"><Check className="w-4 h-4 mr-2" /> Included</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Multi-Factor Authentication</span>
                  <span className="flex items-center text-green-500 font-semibold"><Check className="w-4 h-4 mr-2" /> Included</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Biometric Authentication</span>
                  <span className="flex items-center text-green-500 font-semibold"><Check className="w-4 h-4 mr-2" /> Included</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Real-time Fraud Detection</span>
                  <span className="flex items-center text-green-500 font-semibold"><Check className="w-4 h-4 mr-2" /> Included</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Blockchain Security</span>
                  <span className="flex items-center text-green-500 font-semibold"><Check className="w-4 h-4 mr-2" /> Included</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Audit Trail & Logging</span>
                  <span className="flex items-center text-green-500 font-semibold"><Check className="w-4 h-4 mr-2" /> Included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Certified & <span className="text-gradient">Trusted</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="glass rounded-2xl p-6 text-center hover-lift">
              <Shield className="w-12 h-12 text-primary mx-auto mb-3" />
              <p className="font-semibold mb-1">PCI-DSS</p>
              <p className="text-xs text-muted-foreground">Level 1 Certified</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center hover-lift">
              <Award className="w-12 h-12 text-primary mx-auto mb-3" />
              <p className="font-semibold mb-1">ISO 27001</p>
              <p className="text-xs text-muted-foreground">Security Standards</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center hover-lift">
              <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-3" />
              <p className="font-semibold mb-1">SOC 2 Type II</p>
              <p className="text-xs text-muted-foreground">Compliance</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center hover-lift">
              <Globe className="w-12 h-12 text-primary mx-auto mb-3" />
              <p className="font-semibold mb-1">GDPR</p>
              <p className="text-xs text-muted-foreground">Compliant</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">Technology Partners</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <span className="text-base font-semibold">AWS Partner</span>
              <span className="text-base font-semibold">Google Cloud</span>
              <span className="text-base font-semibold">Microsoft Azure</span>
              <span className="text-base font-semibold">Stripe Partner</span>
            </div>
          </div>
        </div>
      </section>

      {/* KPIs & Deliverables */}
      <section className="py-24 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6" data-testid="kpis-title">
              Performance <span className="text-gradient">Metrics</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mission-critical performance standards for financial technology platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kpis.map((kpi, index) => (
              <div key={index} className="glass rounded-2xl p-6 text-center hover-lift" data-testid={`kpi-${index}`}>
                <div className="text-3xl font-bold text-primary mb-2" data-testid={`kpi-target-${index}`}>
                  {kpi.target}
                </div>
                <h3 className="font-bold text-lg mb-2" data-testid={`kpi-metric-${index}`}>
                  {kpi.metric}
                </h3>
                <p className="text-muted-foreground text-sm" data-testid={`kpi-description-${index}`}>
                  {kpi.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            <div className="glass rounded-2xl p-6 hover-lift">
              <h3 className="font-bold text-lg mb-3">How long does it take to build a fintech platform?</h3>
              <p className="text-muted-foreground">
                Timeline varies based on complexity, but typically ranges from 4-9 months for a full-featured platform. We follow an agile approach with regular releases, so you can start seeing value within the first 6-8 weeks.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 hover-lift">
              <h3 className="font-bold text-lg mb-3">Do you handle regulatory compliance?</h3>
              <p className="text-muted-foreground">
                Yes, compliance is built into our development process. We have extensive experience with PCI-DSS, KYC/AML, GDPR, SOX, and regional banking regulations. Our team includes compliance specialists who ensure your platform meets all requirements.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 hover-lift">
              <h3 className="font-bold text-lg mb-3">What security measures do you implement?</h3>
              <p className="text-muted-foreground">
                We implement end-to-end encryption, multi-factor authentication, real-time fraud detection, secure API gateways, regular security audits, and comprehensive audit logging. All our solutions are built with security-first architecture.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 hover-lift">
              <h3 className="font-bold text-lg mb-3">Can you integrate with existing banking systems?</h3>
              <p className="text-muted-foreground">
                Absolutely. We have extensive experience integrating with core banking systems, payment gateways, credit bureaus, and third-party financial services through secure APIs and industry-standard protocols.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 hover-lift">
              <h3 className="font-bold text-lg mb-3">What ongoing support do you provide?</h3>
              <p className="text-muted-foreground">
                We offer 24/7 monitoring, regular security updates, performance optimization, compliance updates, and dedicated support teams. Our SLA guarantees 99.9% uptime with rapid incident response.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-secondary to-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-3xl p-8 md:p-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Clock className="w-4 h-4" />
              Limited slots available this month
            </div>
            <h2 className="font-display font-bold text-3xl md:text-5xl mb-6" data-testid="cta-title">
              Ready to Build the <span className="text-gradient">Future of Finance?</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8" data-testid="cta-description">
              Get a detailed quotation with AI-powered analysis, compliance roadmap, and technical architecture for your fintech project.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link href="/quotation">
                <Button className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold text-primary-foreground w-full sm:w-auto" data-testid="cta-final">
                  Get Your Fintech Quotation <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="px-8 py-4 rounded-xl text-lg font-semibold w-full sm:w-auto">
                  Schedule a Call
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>No commitment required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Response within 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
