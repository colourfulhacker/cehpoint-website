import { BookOpen, Users, Award, Monitor, Brain, Globe, Star, TrendingUp, CheckCircle2, Clock, ArrowRight, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import SEO from "@/components/seo";
import ServiceSchema from "@/components/seo/service-schema";
import BreadcrumbSchema from "@/components/seo/breadcrumb-schema";
import FAQSchema from "@/components/seo/faq-schema";
import EdtechCalculator from "@/components/calculators/edtech-calculator";

export default function EdutechService() {
  const problemPatterns = [
    "Low student engagement in online learning environments",
    "Difficulty tracking student progress and performance",
    "Limited interactive content and assessment tools",
    "Poor user experience on mobile devices",
    "Lack of personalized learning paths",
    "Inadequate collaboration tools for remote learning"
  ];

  const architectureComponents = [
    {
      icon: BookOpen,
      title: "Learning Management System",
      description: "Comprehensive LMS with course management, content delivery, and assessment capabilities."
    },
    {
      icon: Users,
      title: "Virtual Classrooms",
      description: "Interactive online classrooms with video conferencing, screen sharing, and collaboration tools."
    },
    {
      icon: Award,
      title: "Assessment & Certification",
      description: "Advanced testing engine with automated grading, plagiarism detection, and certification management."
    },
    {
      icon: Monitor,
      title: "Content Management",
      description: "Multimedia content creation and delivery system with version control and accessibility features."
    },
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Learning analytics and AI-driven insights for personalized education and performance optimization."
    },
    {
      icon: Globe,
      title: "Multi-tenant Platform",
      description: "Scalable platform supporting multiple institutions with customizable branding and features."
    }
  ];

  const kpis = [
    { metric: "Student Engagement", target: "85%+", description: "Active participation and course completion rates" },
    { metric: "Learning Outcomes", target: "25%", description: "Improvement in assessment scores" },
    { metric: "Platform Uptime", target: "99.9%", description: "Reliable access to educational content" },
    { metric: "Mobile Usage", target: "65%+", description: "Mobile-optimized learning experience" },
    { metric: "Content Accessibility", target: "WCAG 2.1 AA", description: "Inclusive design for all learners" },
    { metric: "Response Time", target: "<1.5s", description: "Fast-loading educational content" }
  ];

  return (
    <div className="pt-24 min-h-screen" data-testid="edutech-service-page">
      <SEO
        title="Edutech Solutions"
        description="Transform education with cutting-edge learning platforms featuring AI-powered analytics, virtual classrooms, and personalized learning paths. WCAG 2.1 AA compliant and FERPA certified."
        keywords={["Edutech Solutions", "Learning Management System", "Online Education", "Virtual Classroom", "Educational Technology", "LMS Platform", "E-Learning", "Student Analytics"]}
        url="https://www.cehpoint.co.in/services/edutech"
        canonical="https://www.cehpoint.co.in/services/edutech"
      />

      {/* Structured Data Schemas */}
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
              Edutech <span className="text-gradient">Solutions</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed" data-testid="page-subtitle">
              Transform education with cutting-edge learning platforms that engage students and empower educators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/quotation">
                <Button className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold text-primary-foreground w-full sm:w-auto" data-testid="cta-get-quote">
                  Get Edutech Quote <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>Free demo • No commitment</span>
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
              <p className="text-3xl font-bold mb-1">4.8/5</p>
              <p className="text-sm text-muted-foreground">From 200+ educators</p>
            </div>
            <div className="text-center">
              <GraduationCap className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-3xl font-bold mb-1">5M+</p>
              <p className="text-sm text-muted-foreground">Students learning daily</p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-3xl font-bold mb-1">85%</p>
              <p className="text-sm text-muted-foreground">Avg. engagement increase</p>
            </div>
          </div>

          <div className="text-center mb-8">
            <p className="text-sm text-muted-foreground mb-4">Trusted by leading educational institutions</p>
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
              Educational <span className="text-gradient">Challenges We Solve</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Modern education faces unique challenges that require innovative technology solutions
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
              Educational <span className="text-gradient">Architecture</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive platform architecture designed for modern educational institutions
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
              Success <span className="text-gradient">Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real impact from our educational technology solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass rounded-3xl p-8 hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-primary" />
                <h3 className="font-bold text-xl">University LMS Platform</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Developed a comprehensive learning management system for a major university, supporting 50,000+ students with virtual classrooms, assessments, and analytics.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-2xl font-bold text-primary">92%</p>
                  <p className="text-sm text-muted-foreground">Course completion rate</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">50K+</p>
                  <p className="text-sm text-muted-foreground">Active students</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">35%</p>
                  <p className="text-sm text-muted-foreground">Better test scores</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">99.8%</p>
                  <p className="text-sm text-muted-foreground">Platform uptime</p>
                </div>
              </div>
              <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                "This platform revolutionized our online learning. Student engagement and outcomes improved dramatically."
                <footer className="text-sm mt-2 not-italic">— Dean of Digital Learning, State University</footer>
              </blockquote>
            </div>

            <div className="glass rounded-3xl p-8 hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-primary" />
                <h3 className="font-bold text-xl">K-12 Learning App</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Created an adaptive learning mobile app for K-12 students with gamification, personalized learning paths, and parent dashboards.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-2xl font-bold text-primary">1M+</p>
                  <p className="text-sm text-muted-foreground">Student users</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">4.9★</p>
                  <p className="text-sm text-muted-foreground">App store rating</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">60%</p>
                  <p className="text-sm text-muted-foreground">Daily active usage</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">45min</p>
                  <p className="text-sm text-muted-foreground">Avg. session time</p>
                </div>
              </div>
              <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                "Our students love the app! The adaptive learning feature has made a huge difference in their progress."
                <footer className="text-sm mt-2 not-italic">— Principal, International School</footer>
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
                Privacy & <span className="text-gradient">Compliance</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Educational platforms built with student privacy and regulatory compliance at their core.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>FERPA Compliance for Student Records</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>COPPA Protection for Minors</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>GDPR Privacy Protection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>WCAG 2.1 AA Accessibility</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>ISO 27001 Security Standards</span>
                </div>
              </div>
            </div>

            <div className="glass rounded-3xl p-8">
              <h3 className="font-bold text-2xl mb-6 text-center" data-testid="learning-features-title">
                Learning Features
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Adaptive Learning Paths</span>
                  <span className="text-green-500 font-semibold">✓ Included</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Real-time Collaboration</span>
                  <span className="text-green-500 font-semibold">✓ Included</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Advanced Analytics</span>
                  <span className="text-green-500 font-semibold">✓ Included</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Mobile Learning Apps</span>
                  <span className="text-green-500 font-semibold">✓ Included</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Gamification Elements</span>
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
              Certified & <span className="text-gradient">Compliant</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="glass rounded-2xl p-6 text-center hover-lift">
              <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-3" />
              <p className="font-semibold mb-1">FERPA</p>
              <p className="text-xs text-muted-foreground">Compliant</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center hover-lift">
              <Award className="w-12 h-12 text-primary mx-auto mb-3" />
              <p className="font-semibold mb-1">WCAG 2.1 AA</p>
              <p className="text-xs text-muted-foreground">Accessible</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center hover-lift">
              <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-3" />
              <p className="font-semibold mb-1">COPPA</p>
              <p className="text-xs text-muted-foreground">Certified</p>
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
              Educational <span className="text-gradient">Outcomes</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Measurable improvements in learning effectiveness and platform performance
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
              <h3 className="font-bold text-lg mb-3">How long does it take to implement an LMS?</h3>
              <p className="text-muted-foreground">
                Implementation timelines vary based on customization needs, but typically range from 3-6 months for a full-featured LMS. We can have a basic system running within 4-6 weeks with phased rollouts.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 hover-lift">
              <h3 className="font-bold text-lg mb-3">Is the platform accessible for students with disabilities?</h3>
              <p className="text-muted-foreground">
                Yes, all our educational platforms are built to WCAG 2.1 AA standards, ensuring accessibility for students with visual, auditory, motor, and cognitive disabilities. We include screen reader support, keyboard navigation, and customizable interfaces.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 hover-lift">
              <h3 className="font-bold text-lg mb-3">How do you protect student data and privacy?</h3>
              <p className="text-muted-foreground">
                We comply with FERPA, COPPA, and GDPR regulations. All student data is encrypted, access is role-based, and we implement comprehensive audit logging. Parents have full control over their children's data.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 hover-lift">
              <h3 className="font-bold text-lg mb-3">Can you integrate with our existing systems?</h3>
              <p className="text-muted-foreground">
                Absolutely. We integrate with popular SIS systems, Google Classroom, Microsoft Teams, Zoom, and other educational tools through standard protocols like LTI, OneRoster, and custom APIs.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 hover-lift">
              <h3 className="font-bold text-lg mb-3">What training and support do you provide?</h3>
              <p className="text-muted-foreground">
                We provide comprehensive training for administrators, teachers, and students, along with detailed documentation and video tutorials. Our support team is available 24/7 during critical periods like exam seasons.
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
              Free demo available this week
            </div>
            <h2 className="font-display font-bold text-3xl md:text-5xl mb-6" data-testid="cta-title">
              Ready to Revolutionize <span className="text-gradient">Education?</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8" data-testid="cta-description">
              Get a comprehensive quotation with AI-powered analysis, feature roadmap, and implementation timeline for your educational technology project.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link href="/quotation">
                <Button className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold text-primary-foreground w-full sm:w-auto" data-testid="cta-final">
                  Get Your Edutech Quotation <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="px-8 py-4 rounded-xl text-lg font-semibold w-full sm:w-auto">
                  Request Demo
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Free platform demo</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>No commitment required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Expert consultation included</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
