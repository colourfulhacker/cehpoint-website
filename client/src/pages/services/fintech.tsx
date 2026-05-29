import { DollarSign, Shield, BarChart3, Smartphone, Globe, Lock, Star, TrendingUp, Users, Award, CheckCircle2, Clock, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import SEO from "@/components/seo";
import RelatedPrograms from "@/components/shared/related-programs";
import ServiceSchema from "@/components/seo/service-schema";
import BreadcrumbSchema from "@/components/seo/breadcrumb-schema";
import FAQSchema from "@/components/seo/faq-schema";
import FintechCalculator from "@/components/calculators/fintech-calculator";

export default function FintechService() {
  const { t } = useTranslation();
  const B = "pages.serviceFintech";
  const problemPatterns = t(`${B}.problems`, { returnObjects: true }) as string[];
  const archIcons = [DollarSign, Shield, BarChart3, Smartphone, Globe, Lock];
  const architectureComponents = (t(`${B}.architecture`, { returnObjects: true }) as { title: string; description: string }[]).map((c, i) => ({ ...c, icon: archIcons[i] ?? DollarSign }));
  const kpiTargets = ["<100ms", "99.99%", "99.9%", "100%", "80%+", "<50ms"];
  const kpis = (t(`${B}.kpis`, { returnObjects: true }) as { metric: string; description: string }[]).map((k, i) => ({ ...k, target: kpiTargets[i] ?? "" }));
  const faqs = t(`${B}.faqs`, { returnObjects: true }) as { q: string; a: string }[];

  return (
    <div className="pt-36 min-h-screen" data-testid="fintech-service-page">
      <SEO
        title="Fintech Application Development in India"
        description="Build secure, compliant, and scalable financial technology platforms with PCI-DSS compliance, real-time fraud detection, and enterprise-grade security. Trusted by leading financial institutions."
        keywords={["Fintech Solutions", "Payment Processing", "Financial Software", "Banking Technology", "PCI-DSS Compliance", "Fraud Detection", "Blockchain Integration", "Mobile Banking"]}
        url="https://www.cehpoint.co.in/services/fintech"
        canonical="https://www.cehpoint.co.in/services/fintech"
      />

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
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-3xl font-bold mb-1">$2.4B+</p>
              <p className="text-sm text-muted-foreground">{t(`${B}.volSub`)}</p>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-3xl font-bold mb-1">50M+</p>
              <p className="text-sm text-muted-foreground">{t(`${B}.usersSub`)}</p>
            </div>
          </div>

          <div className="text-center mb-8">
            <p className="text-sm text-muted-foreground mb-4">{t(`${B}.trustedBy`)}</p>
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
      <FintechCalculator />

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
                <div><p className="text-2xl font-bold text-primary">99.99%</p><p className="text-sm text-muted-foreground">{t(`${B}.mUptime`)}</p></div>
                <div><p className="text-2xl font-bold text-primary">65ms</p><p className="text-sm text-muted-foreground">{t(`${B}.mTxTime`)}</p></div>
                <div><p className="text-2xl font-bold text-primary">$500M+</p><p className="text-sm text-muted-foreground">{t(`${B}.mVolume`)}</p></div>
                <div><p className="text-2xl font-bold text-primary">99.8%</p><p className="text-sm text-muted-foreground">{t(`${B}.mFraud`)}</p></div>
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
                <div><p className="text-2xl font-bold text-primary">2M+</p><p className="text-sm text-muted-foreground">{t(`${B}.mUsers`)}</p></div>
                <div><p className="text-2xl font-bold text-primary">4.8★</p><p className="text-sm text-muted-foreground">{t(`${B}.mRating`)}</p></div>
                <div><p className="text-2xl font-bold text-primary">40%</p><p className="text-sm text-muted-foreground">{t(`${B}.mEngagement`)}</p></div>
                <div><p className="text-2xl font-bold text-primary">1.2s</p><p className="text-sm text-muted-foreground">{t(`${B}.mLaunch`)}</p></div>
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
                {t(`${B}.featuresTitle`)}
              </h3>
              <div className="space-y-4">
                {(t(`${B}.features`, { returnObjects: true }) as string[]).map((feat, i) => (
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
              <p className="text-xs text-muted-foreground">{t(`${B}.t1Label`)}</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center hover-lift">
              <Award className="w-12 h-12 text-primary mx-auto mb-3" />
              <p className="font-semibold mb-1">ISO 27001</p>
              <p className="text-xs text-muted-foreground">{t(`${B}.t2Label`)}</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center hover-lift">
              <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-3" />
              <p className="font-semibold mb-1">SOC 2 Type II</p>
              <p className="text-xs text-muted-foreground">{t(`${B}.t3Label`)}</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center hover-lift">
              <Globe className="w-12 h-12 text-primary mx-auto mb-3" />
              <p className="font-semibold mb-1">GDPR</p>
              <p className="text-xs text-muted-foreground">{t(`${B}.t4Label`)}</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">{t(`${B}.techPartners`)}</p>
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
        heading="What fintech teams read next"
        description="Practical guides from our work with lenders, neobanks, and payments teams."
        programs={[
          { href: "/insights/finance-fraud-ml", label: "Catching Fraud with ML", description: "How a real lending platform cut fraud losses 47% in one quarter using AI-assisted anomaly detection." },
          { href: "/insights/digital-forensics-roi", label: "The Forensics ROI", description: "Why every regulated fintech needs a digital-forensics retainer before it has an incident, not after." },
          { href: "/services/cyber-security", label: "Pair with Cyber Security", description: "Penetration testing, PCI-DSS audits, and 24/7 SOC for regulated financial platforms." },
        ]}
      />
    </div>
  );
}
