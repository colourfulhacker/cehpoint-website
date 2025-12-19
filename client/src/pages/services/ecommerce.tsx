import { ShoppingCart, CreditCard, BarChart3, Shield, Smartphone, Globe, Star, TrendingUp, Users, Award, CheckCircle2, Clock, ArrowRight, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import SEO from "@/components/seo";
import EcommerceCalculator from "@/components/calculators/ecommerce-calculator";

export default function EcommerceService() {
  const problemPatterns = [
    "Slow-loading product pages affecting conversion rates",
    "Complex checkout processes leading to cart abandonment",
    "Inadequate inventory management across multiple channels",
    "Poor mobile shopping experience",
    "Limited payment gateway options",
    "Lack of real-time analytics and insights"
  ];

  const architectureComponents = [
    {
      icon: ShoppingCart,
      title: "Product Catalog Management",
      description: "Scalable product information management with advanced search and filtering capabilities."
    },
    {
      icon: CreditCard,
      title: "Payment Processing",
      description: "Secure, multi-gateway payment integration with support for global payment methods."
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Real-time business intelligence with conversion tracking and customer insights."
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "PCI-DSS compliant architecture with advanced fraud detection and prevention."
    },
    {
      icon: Smartphone,
      title: "Mobile Commerce",
      description: "Progressive web apps and native mobile applications for seamless shopping."
    },
    {
      icon: Globe,
      title: "Multi-channel Integration",
      description: "Unified commerce platform connecting online stores, marketplaces, and physical retail."
    }
  ];

  const kpis = [
    { metric: "Conversion Rate", target: "3.5%+", description: "Industry-leading conversion optimization" },
    { metric: "Page Load Time", target: "<2s", description: "Fast-loading pages for better UX" },
    { metric: "Cart Abandonment", target: "<65%", description: "Reduced abandonment through UX optimization" },
    { metric: "Mobile Traffic", target: "70%+", description: "Mobile-first responsive design" },
    { metric: "Uptime", target: "99.9%", description: "High availability and reliability" },
    { metric: "Security Score", target: "A+", description: "Top-tier security implementation" }
  ];

  return (
    <div className="pt-24 min-h-screen" data-testid="ecommerce-service-page">
      <SEO
        title="E-commerce Solutions"
        description="Build scalable, conversion-optimized e-commerce platforms with PCI-DSS compliance, advanced fraud detection, and multi-channel integration. Drive revenue and customer satisfaction."
        keywords={["E-commerce Solutions", "Online Store Development", "Shopping Cart", "Payment Integration", "Multi-channel Commerce", "Mobile Commerce", "E-commerce Platform", "Conversion Optimization"]}
        url="https://cehpoint.co.in/services/ecommerce"
      />

      {/* Hero Section */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-background via-secondary to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up">
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-7xl mb-6 tracking-tight" data-testid="page-title">
              E-commerce <span className="text-gradient">Solutions</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed" data-testid="page-subtitle">
              Build scalable, conversion-optimized e-commerce platforms that drive revenue and customer satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/quotation">
                <Button className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold text-primary-foreground w-full sm:w-auto" data-testid="cta-get-quote">
                  Get E-commerce Quote <ArrowRight className="ml-2 w-5 h-5" />
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
              <p className="text-3xl font-bold mb-1">4.7/5</p>
              <p className="text-sm text-muted-foreground">From 180+ merchants</p>
            </div>
            <div className="text-center">
              <Package className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-3xl font-bold mb-1">$850M+</p>
              <p className="text-sm text-muted-foreground">GMV processed annually</p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-3xl font-bold mb-1">3.8%</p>
              <p className="text-sm text-muted-foreground">Avg. conversion rate</p>
            </div>
          </div>

          <div className="text-center mb-8">
            <p className="text-sm text-muted-foreground mb-4">Trusted by leading e-commerce brands</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <span className="text-lg font-semibold">Amazon</span>
              <span className="text-lg font-semibold">Shopify</span>
              <span className="text-lg font-semibold">WooCommerce</span>
              <span className="text-lg font-semibold">BigCommerce</span>
              <span className="text-lg font-semibold">Magento</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Patterns */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6" data-testid="problems-title">
              E-commerce <span className="text-gradient">Challenges We Solve</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Common pain points that prevent e-commerce businesses from reaching their full potential
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
              Reference <span className="text-gradient">Architecture</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enterprise-grade e-commerce architecture designed for scale, performance, and reliability
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
      <EcommerceCalculator />

      {/* Case Studies Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              Success <span className="text-gradient">Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real revenue growth from our e-commerce solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass rounded-3xl p-8 hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-primary" />
                <h3 className="font-bold text-xl">Fashion Retail Platform</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Built a multi-vendor fashion marketplace with advanced search, personalized recommendations, and seamless checkout experience.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-2xl font-bold text-primary">4.2%</p>
                  <p className="text-sm text-muted-foreground">Conversion rate</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">$12M</p>
                  <p className="text-sm text-muted-foreground">Monthly revenue</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">1.8s</p>
                  <p className="text-sm text-muted-foreground">Page load time</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">55%</p>
                  <p className="text-sm text-muted-foreground">Cart abandonment</p>
                </div>
              </div>
              <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                "Our revenue tripled within 6 months. The platform is fast, reliable, and our customers love the experience."
                <footer className="text-sm mt-2 not-italic">— CEO, Fashion Marketplace</footer>
              </blockquote>
            </div>

            <div className="glass rounded-3xl p-8 hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-primary" />
                <h3 className="font-bold text-xl">Electronics Store</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Developed a high-performance e-commerce platform with real-time inventory, multiple payment options, and omnichannel integration.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-2xl font-bold text-primary">500K+</p>
                  <p className="text-sm text-muted-foreground">Monthly orders</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">99.9%</p>
                  <p className="text-sm text-muted-foreground">Uptime SLA</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">75%</p>
                  <p className="text-sm text-muted-foreground">Mobile traffic</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">180%</p>
                  <p className="text-sm text-muted-foreground">ROI increase</p>
                </div>
              </div>
              <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                "The platform handles Black Friday traffic effortlessly. Best investment we've made in our digital infrastructure."
                <footer className="text-sm mt-2 not-italic">— CTO, Electronics Retailer</footer>
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
                Security & <span className="text-gradient">Compliance</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Built-in security measures and compliance standards to protect your business and customers.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>PCI-DSS Level 1 Compliance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>GDPR & CCPA Privacy Protection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>SOC 2 Type II Security Standards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Advanced Fraud Detection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>SSL/TLS Encryption</span>
                </div>
              </div>
            </div>

            <div className="glass rounded-3xl p-8">
              <h3 className="font-bold text-2xl mb-6 text-center" data-testid="security-features-title">
                Security Features
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Two-Factor Authentication</span>
                  <span className="text-green-500 font-semibold">✓ Included</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Data Encryption at Rest</span>
                  <span className="text-green-500 font-semibold">✓ Included</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Regular Security Audits</span>
                  <span className="text-green-500 font-semibold">✓ Included</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>WAF Protection</span>
                  <span className="text-green-500 font-semibold">✓ Included</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>DDoS Mitigation</span>
                  <span className="text-green-500 font-semibold">✓ Included</span>
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
              Certified & <span className="text-gradient">Secure</span>
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
              <p className="font-semibold mb-1">SOC 2 Type II</p>
              <p className="text-xs text-muted-foreground">Compliant</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center hover-lift">
              <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-3" />
              <p className="font-semibold mb-1">GDPR</p>
              <p className="text-xs text-muted-foreground">Compliant</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center hover-lift">
              <Globe className="w-12 h-12 text-primary mx-auto mb-3" />
              <p className="font-semibold mb-1">CCPA</p>
              <p className="text-xs text-muted-foreground">Compliant</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">Technology Partners</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <span className="text-base font-semibold">Stripe Partner</span>
              <span className="text-base font-semibold">PayPal Partner</span>
              <span className="text-base font-semibold">AWS Partner</span>
              <span className="text-base font-semibold">Shopify Plus</span>
            </div>
          </div>
        </div>
      </section>

      {/* KPIs & Deliverables */}
      <section className="py-24 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6" data-testid="kpis-title">
              Target <span className="text-gradient">KPIs</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Measurable outcomes we deliver for e-commerce success
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
              <h3 className="font-bold text-lg mb-3">How long does it take to launch an e-commerce store?</h3>
              <p className="text-muted-foreground">
                Timeline depends on complexity and customization, but typically ranges from 2-4 months for a full-featured store. We can launch a basic store in 3-4 weeks with iterative enhancements.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 hover-lift">
              <h3 className="font-bold text-lg mb-3">What payment gateways do you support?</h3>
              <p className="text-muted-foreground">
                We integrate with all major payment gateways including Stripe, PayPal, Razorpay, Square, and regional providers. We also support digital wallets, buy-now-pay-later services, and cryptocurrency payments.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 hover-lift">
              <h3 className="font-bold text-lg mb-3">How do you optimize for conversions?</h3>
              <p className="text-muted-foreground">
                We implement proven conversion optimization techniques including fast page loads, simplified checkout, personalized recommendations, abandoned cart recovery, A/B testing, and mobile-first design.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 hover-lift">
              <h3 className="font-bold text-lg mb-3">Can you handle high traffic volumes?</h3>
              <p className="text-muted-foreground">
                Absolutely. Our platforms are built on scalable cloud infrastructure with auto-scaling, CDN integration, and caching strategies to handle traffic spikes during sales events and seasonal peaks.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 hover-lift">
              <h3 className="font-bold text-lg mb-3">Do you provide ongoing maintenance and support?</h3>
              <p className="text-muted-foreground">
                Yes, we offer comprehensive support including 24/7 monitoring, security updates, performance optimization, feature enhancements, and dedicated support teams with guaranteed response times.
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
              Special offer: Free conversion audit
            </div>
            <h2 className="font-display font-bold text-3xl md:text-5xl mb-6" data-testid="cta-title">
              Ready to Transform Your <span className="text-gradient">E-commerce Business?</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8" data-testid="cta-description">
              Get a detailed quotation with AI-powered analysis, conversion optimization strategy, and technical recommendations for your e-commerce project.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link href="/quotation">
                <Button className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold text-primary-foreground w-full sm:w-auto" data-testid="cta-final">
                  Get Your E-commerce Quotation <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="px-8 py-4 rounded-xl text-lg font-semibold w-full sm:w-auto">
                  Schedule Consultation
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Free conversion audit</span>
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
