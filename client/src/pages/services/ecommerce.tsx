import { ShoppingCart, CreditCard, BarChart3, Shield, Smartphone, Globe, Star, TrendingUp, Award, CheckCircle2, Clock, ArrowRight, Package, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import SEO from "@/components/seo";
import RelatedPrograms from "@/components/shared/related-programs";
import ServiceSchema from "@/components/seo/service-schema";
import BreadcrumbSchema from "@/components/seo/breadcrumb-schema";
import FAQSchema from "@/components/seo/faq-schema";
import EcommerceCalculator from "@/components/calculators/ecommerce-calculator";

export default function EcommerceService() {
  const { t } = useTranslation();
  const B = "pages.serviceEcommerce";
  const problemPatterns = t(`${B}.problems`, { returnObjects: true }) as string[];
  const archIcons = [ShoppingCart, CreditCard, BarChart3, Shield, Smartphone, Globe];
  const architectureComponents = (t(`${B}.architecture`, { returnObjects: true }) as { title: string; description: string }[]).map((c, i) => ({ ...c, icon: archIcons[i] ?? ShoppingCart }));
  const kpiTargets = ["3.5%+", "<2s", "<65%", "70%+", "99.9%", "A+"];
  const kpis = (t(`${B}.kpis`, { returnObjects: true }) as { metric: string; description: string }[]).map((k, i) => ({ ...k, target: kpiTargets[i] ?? "" }));
  const faqs = t(`${B}.faqs`, { returnObjects: true }) as { q: string; a: string }[];

  return (
    <div className="pt-36 min-h-screen" data-testid="ecommerce-service-page">
      <SEO
        title="E-commerce Development Services in India"
        description="Build scalable, conversion-optimized e-commerce platforms with PCI-DSS compliance, advanced fraud detection, and multi-channel integration. Drive revenue and customer satisfaction."
        keywords={["E-commerce Solutions", "Online Store Development", "Shopping Cart", "Payment Integration", "Multi-channel Commerce", "Mobile Commerce", "E-commerce Platform", "Conversion Optimization"]}
        url="https://www.cehpoint.co.in/services/ecommerce"
        canonical="https://www.cehpoint.co.in/services/ecommerce"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.cehpoint.co.in/" },
          { name: "Services", url: "https://www.cehpoint.co.in/services" },
          { name: "E-commerce Solutions", url: "https://www.cehpoint.co.in/services/ecommerce" }
        ]}
      />
      <ServiceSchema
        name="E-commerce Development Services"
        description="Build scalable, conversion-optimized e-commerce platforms with PCI-DSS compliance, advanced fraud detection, and multi-channel integration."
        serviceType="E-commerce Platform Development"
        category="E-commerce Software"
        url="https://www.cehpoint.co.in/services/ecommerce"
        hasOfferCatalog={true}
      />
      <FAQSchema
        pageId="ecommerce"
        faqs={[
          { question: "How long does it take to launch an e-commerce store?", answer: "Timeline depends on complexity and customization, but typically ranges from 2-4 months for a full-featured store. We can launch a basic store in 3-4 weeks with iterative enhancements." },
          { question: "What payment gateways do you support?", answer: "We integrate with all major payment gateways including Stripe, PayPal, Razorpay, Square, and regional providers. We also support digital wallets, buy-now-pay-later services, and cryptocurrency payments." },
          { question: "How do you optimize for conversions?", answer: "We implement proven conversion optimization techniques including fast page loads, simplified checkout, personalized recommendations, abandoned cart recovery, A/B testing, and mobile-first design." },
          { question: "Can you handle high traffic volumes?", answer: "Absolutely. Our platforms are built on scalable cloud infrastructure with auto-scaling, CDN integration, and caching strategies to handle traffic spikes during sales events and seasonal peaks." },
          { question: "Do you provide ongoing maintenance and support?", answer: "Yes, we offer comprehensive support including 24/7 monitoring, security updates, performance optimization, feature enhancements, and dedicated support teams with guaranteed response times." }
        ]}
      />

      {/* Hero Section */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-background via-secondary to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up">
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-7xl mb-6 tracking-tight" data-testid="page-title">
              {t(`${B}.heroTitleLead`)} <span className="text-primary">{t(`${B}.heroTitleAccent`)}</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed" data-testid="page-subtitle">
              {t(`${B}.heroSubtitle`)}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/quotation">
                <Button className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold text-primary-foreground w-full sm:w-auto" data-testid="cta-get-quote">
                  {t(`${B}.heroCta`)} <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>{t(`${B}.freeConsult`)}</span>
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
              <p className="text-sm text-muted-foreground">{t(`${B}.ratingSub`)}</p>
            </div>
            <div className="text-center">
              <Package className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-3xl font-bold mb-1">$850M+</p>
              <p className="text-sm text-muted-foreground">{t(`${B}.gmvSub`)}</p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-3xl font-bold mb-1">3.8%</p>
              <p className="text-sm text-muted-foreground">{t(`${B}.convSub`)}</p>
            </div>
          </div>

          <div className="text-center mb-8">
            <p className="text-sm text-muted-foreground mb-4">{t(`${B}.trustedBy`)}</p>
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
              {t(`${B}.problemsTitleLead`)} <span className="text-primary">{t(`${B}.problemsTitleAccent`)}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t(`${B}.problemsSub`)}
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
              {t(`${B}.archTitleLead`)} <span className="text-primary">{t(`${B}.archTitleAccent`)}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t(`${B}.archSub`)}
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
              {t(`${B}.caseTitleLead`)} <span className="text-primary">{t(`${B}.caseTitleAccent`)}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t(`${B}.caseSub`)}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass rounded-3xl p-8 hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-primary" />
                <h3 className="font-bold text-xl">{t(`${B}.case1Title`)}</h3>
              </div>
              <p className="text-muted-foreground mb-6">{t(`${B}.case1Desc`)}</p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div><p className="text-2xl font-bold text-primary">4.2%</p><p className="text-sm text-muted-foreground">{t(`${B}.mConversion`)}</p></div>
                <div><p className="text-2xl font-bold text-primary">$12M</p><p className="text-sm text-muted-foreground">{t(`${B}.mRevenue`)}</p></div>
                <div><p className="text-2xl font-bold text-primary">1.8s</p><p className="text-sm text-muted-foreground">{t(`${B}.mLoad`)}</p></div>
                <div><p className="text-2xl font-bold text-primary">55%</p><p className="text-sm text-muted-foreground">{t(`${B}.mCart`)}</p></div>
              </div>
              <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                "{t(`${B}.case1Quote`)}"
                <footer className="text-sm mt-2 not-italic">{t(`${B}.case1Author`)}</footer>
              </blockquote>
            </div>

            <div className="glass rounded-3xl p-8 hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-primary" />
                <h3 className="font-bold text-xl">{t(`${B}.case2Title`)}</h3>
              </div>
              <p className="text-muted-foreground mb-6">{t(`${B}.case2Desc`)}</p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div><p className="text-2xl font-bold text-primary">500K+</p><p className="text-sm text-muted-foreground">{t(`${B}.mOrders`)}</p></div>
                <div><p className="text-2xl font-bold text-primary">99.9%</p><p className="text-sm text-muted-foreground">{t(`${B}.mUptime`)}</p></div>
                <div><p className="text-2xl font-bold text-primary">75%</p><p className="text-sm text-muted-foreground">{t(`${B}.mMobile`)}</p></div>
                <div><p className="text-2xl font-bold text-primary">180%</p><p className="text-sm text-muted-foreground">{t(`${B}.mRoi`)}</p></div>
              </div>
              <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                "{t(`${B}.case2Quote`)}"
                <footer className="text-sm mt-2 not-italic">{t(`${B}.case2Author`)}</footer>
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
                {t(`${B}.compTitleLead`)} <span className="text-primary">{t(`${B}.compTitleAccent`)}</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">{t(`${B}.compSub`)}</p>

              <div className="space-y-4">
                {(t(`${B}.compliance`, { returnObjects: true }) as string[]).map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-3xl p-8">
              <h3 className="font-bold text-2xl mb-6 text-center" data-testid="security-features-title">
                {t(`${B}.secFeaturesTitle`)}
              </h3>
              <div className="space-y-4">
                {(t(`${B}.secFeatures`, { returnObjects: true }) as string[]).map((feat, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span>{feat}</span>
                    <span className="flex items-center text-green-500 font-semibold"><Check className="w-4 h-4 mr-2" /> {t(`${B}.included`)}</span>
                  </div>
                ))}
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
              {t(`${B}.trustTitleLead`)} <span className="text-primary">{t(`${B}.trustTitleAccent`)}</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="glass rounded-2xl p-6 text-center hover-lift">
              <Shield className="w-12 h-12 text-primary mx-auto mb-3" />
              <p className="font-semibold mb-1">PCI-DSS</p>
              <p className="text-xs text-muted-foreground">{t(`${B}.certifiedLabel`)}</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center hover-lift">
              <Award className="w-12 h-12 text-primary mx-auto mb-3" />
              <p className="font-semibold mb-1">SOC 2 Type II</p>
              <p className="text-xs text-muted-foreground">{t(`${B}.compliantLabel`)}</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center hover-lift">
              <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-3" />
              <p className="font-semibold mb-1">GDPR</p>
              <p className="text-xs text-muted-foreground">{t(`${B}.compliantLabel`)}</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center hover-lift">
              <Globe className="w-12 h-12 text-primary mx-auto mb-3" />
              <p className="font-semibold mb-1">CCPA</p>
              <p className="text-xs text-muted-foreground">{t(`${B}.compliantLabel`)}</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">{t(`${B}.techPartners`)}</p>
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
              {t(`${B}.kpisTitleLead`)} <span className="text-primary">{t(`${B}.kpisTitleAccent`)}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t(`${B}.kpisSub`)}
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
              {t(`${B}.faqTitleLead`)} <span className="text-primary">{t(`${B}.faqTitleAccent`)}</span>
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="glass rounded-2xl p-6 hover-lift">
                <h3 className="font-bold text-lg mb-3">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-secondary to-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-3xl p-8 md:p-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Clock className="w-4 h-4" />
              {t(`${B}.ctaOffer`)}
            </div>
            <h2 className="font-display font-bold text-3xl md:text-5xl mb-6" data-testid="cta-title">
              {t(`${B}.ctaTitleLead`)} <span className="text-primary">{t(`${B}.ctaTitleAccent`)}</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8" data-testid="cta-description">
              {t(`${B}.ctaDesc`)}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link href="/quotation">
                <Button className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold text-primary-foreground w-full sm:w-auto" data-testid="cta-final">
                  {t(`${B}.ctaQuote`)} <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="px-8 py-4 rounded-xl text-lg font-semibold w-full sm:w-auto">
                  {t(`${B}.ctaConsult`)}
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /><span>{t(`${B}.ctaBadge1`)}</span></div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /><span>{t(`${B}.ctaBadge2`)}</span></div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /><span>{t(`${B}.ctaBadge3`)}</span></div>
            </div>
          </div>
        </div>
      </section>

      <RelatedPrograms
        heading="What ecommerce founders read next"
        description="Three articles every D2C team should send their CTO."
        programs={[
          { href: "/insights/retail-inventory-ai", label: "AI for Inventory", description: "Predicting demand 30 days ahead — the model, the math, and what it does to your gross margin." },
          { href: "/insights/fashion-tech-revolution", label: "Direct to Consumer", description: "How small boutiques are turning Instagram followers into app users — and what changes when they do." },
          { href: "/insights/hyperlocal-future", label: "Hyperlocal Wins", description: "Why the next ₹100Cr retail brands will be city-first, not country-first." },
        ]}
      />
    </div>
  );
}
