import { BookOpen, Users, Award, Monitor, Brain, Globe, Star, TrendingUp, CheckCircle2, Clock, ArrowRight, GraduationCap, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import SEO from "@/components/seo";
import RelatedPrograms from "@/components/shared/related-programs";
import ServiceSchema from "@/components/seo/service-schema";
import BreadcrumbSchema from "@/components/seo/breadcrumb-schema";
import FAQSchema from "@/components/seo/faq-schema";
import EdtechCalculator from "@/components/calculators/edtech-calculator";

export default function EdutechService() {
  const { t } = useTranslation();
  const B = "pages.serviceEdutech";
  const problemPatterns = t(`${B}.problems`, { returnObjects: true }) as string[];
  const archIcons = [BookOpen, Users, Award, Monitor, Brain, Globe];
  const architectureComponents = (t(`${B}.architecture`, { returnObjects: true }) as { title: string; description: string }[]).map((c, i) => ({ ...c, icon: archIcons[i] ?? BookOpen }));
  const kpiTargets = ["85%+", "25%", "99.9%", "65%+", "WCAG 2.1 AA", "<1.5s"];
  const kpis = (t(`${B}.kpis`, { returnObjects: true }) as { metric: string; description: string }[]).map((k, i) => ({ ...k, target: kpiTargets[i] ?? "" }));
  const faqs = t(`${B}.faqs`, { returnObjects: true }) as { q: string; a: string }[];

  return (
    <div className="pt-36 min-h-screen" data-testid="edutech-service-page">
      <SEO
        title="Edutech Software Development Services in India"
        description="Transform education with cutting-edge learning platforms featuring AI-powered analytics, virtual classrooms, and personalized learning paths. WCAG 2.1 AA compliant and FERPA certified."
        keywords={["Edutech Solutions", "Learning Management System", "Online Education", "Virtual Classroom", "Educational Technology", "LMS Platform", "E-Learning", "Student Analytics"]}
        url="https://www.cehpoint.co.in/services/edutech"
        canonical="https://www.cehpoint.co.in/services/edutech"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.cehpoint.co.in/" },
          { name: "Services", url: "https://www.cehpoint.co.in/services" },
          { name: "Edutech Solutions", url: "https://www.cehpoint.co.in/services/edutech" }
        ]}
      />
      <ServiceSchema
        name="Educational Technology Solutions"
        description="Transform education with cutting-edge learning platforms featuring AI-powered analytics, virtual classrooms, and personalized learning paths."
        serviceType="Educational Technology Services"
        category="Education Technology"
        url="https://www.cehpoint.co.in/services/edutech"
        hasOfferCatalog={true}
      />
      <FAQSchema
        pageId="edutech"
        faqs={[
          { question: "How long does it take to implement an LMS?", answer: "Implementation timelines vary based on customization needs, but typically range from 3-6 months for a full-featured LMS. We can have a basic system running within 4-6 weeks with phased rollouts." },
          { question: "Is the platform accessible for students with disabilities?", answer: "Yes, all our educational platforms are built to WCAG 2.1 AA standards, ensuring accessibility for students with visual, auditory, motor, and cognitive disabilities. We include screen reader support, keyboard navigation, and customizable interfaces." },
          { question: "How do you protect student data and privacy?", answer: "We comply with FERPA, COPPA, and GDPR regulations. All student data is encrypted, access is role-based, and we implement comprehensive audit logging. Parents have full control over their children's data." },
          { question: "Can you integrate with our existing systems?", answer: "Absolutely. We integrate with popular SIS systems, Google Classroom, Microsoft Teams, Zoom, and other educational tools through standard protocols like LTI, OneRoster, and custom APIs." },
          { question: "What training and support do you provide?", answer: "We provide comprehensive training for administrators, teachers, and students, along with detailed documentation and video tutorials. Our support team is available 24/7 during critical periods like exam seasons." }
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
              <GraduationCap className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-3xl font-bold mb-1">5M+</p>
              <p className="text-sm text-muted-foreground">{t(`${B}.studentsSub`)}</p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-3xl font-bold mb-1">85%</p>
              <p className="text-sm text-muted-foreground">{t(`${B}.engagementSub`)}</p>
            </div>
          </div>

          <div className="text-center mb-8">
            <p className="text-sm text-muted-foreground mb-4">{t(`${B}.trustedBy`)}</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <span className="text-lg font-semibold">MIT</span>
              <span className="text-lg font-semibold">Stanford</span>
              <span className="text-lg font-semibold">Coursera</span>
              <span className="text-lg font-semibold">Khan Academy</span>
              <span className="text-lg font-semibold">Udemy</span>
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
      <EdtechCalculator />

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
                <div><p className="text-2xl font-bold text-primary">92%</p><p className="text-sm text-muted-foreground">{t(`${B}.mCompletion`)}</p></div>
                <div><p className="text-2xl font-bold text-primary">50K+</p><p className="text-sm text-muted-foreground">{t(`${B}.mStudents`)}</p></div>
                <div><p className="text-2xl font-bold text-primary">35%</p><p className="text-sm text-muted-foreground">{t(`${B}.mScores`)}</p></div>
                <div><p className="text-2xl font-bold text-primary">99.8%</p><p className="text-sm text-muted-foreground">{t(`${B}.mUptime`)}</p></div>
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
                <div><p className="text-2xl font-bold text-primary">1M+</p><p className="text-sm text-muted-foreground">{t(`${B}.mUsers`)}</p></div>
                <div><p className="text-2xl font-bold text-primary">4.9★</p><p className="text-sm text-muted-foreground">{t(`${B}.mRating`)}</p></div>
                <div><p className="text-2xl font-bold text-primary">60%</p><p className="text-sm text-muted-foreground">{t(`${B}.mDaily`)}</p></div>
                <div><p className="text-2xl font-bold text-primary">45min</p><p className="text-sm text-muted-foreground">{t(`${B}.mSession`)}</p></div>
              </div>
              <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                "{t(`${B}.case2Quote`)}"
                <footer className="text-sm mt-2 not-italic">{t(`${B}.case2Author`)}</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Standards */}
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
              <h3 className="font-bold text-2xl mb-6 text-center" data-testid="learning-features-title">
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
              <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-3" />
              <p className="font-semibold mb-1">FERPA</p>
              <p className="text-xs text-muted-foreground">{t(`${B}.compliantLabel`)}</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center hover-lift">
              <Award className="w-12 h-12 text-primary mx-auto mb-3" />
              <p className="font-semibold mb-1">WCAG 2.1 AA</p>
              <p className="text-xs text-muted-foreground">{t(`${B}.accessibleLabel`)}</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center hover-lift">
              <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-3" />
              <p className="font-semibold mb-1">COPPA</p>
              <p className="text-xs text-muted-foreground">{t(`${B}.certifiedLabel`)}</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center hover-lift">
              <Globe className="w-12 h-12 text-primary mx-auto mb-3" />
              <p className="font-semibold mb-1">GDPR</p>
              <p className="text-xs text-muted-foreground">{t(`${B}.compliantLabel`)}</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">{t(`${B}.techPartners`)}</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <span className="text-base font-semibold">AWS Educate</span>
              <span className="text-base font-semibold">Google Classroom</span>
              <span className="text-base font-semibold">Microsoft Teams</span>
              <span className="text-base font-semibold">Zoom</span>
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
        heading="What edtech leaders read next"
        description="Three pieces that influenced how we build for schools, universities, and edupreneurs."
        programs={[
          { href: "/insights/edtech-evolution", label: "EdTech Evolution", description: "From COVID-era patchwork to a real learning operating system — the architecture choices that matter." },
          { href: "/insights/edtech-automated-enrollment", label: "Automating Enrollment", description: "A 6-step playbook to take a 14-day admissions process down to 90 minutes." },
          { href: "/ai-in-real-life", label: "Pair with AI-in-Real-Life", description: "Six-week applied AI program — the program template adapts naturally to higher-ed and corporate L&D." },
        ]}
      />
    </div>
  );
}
