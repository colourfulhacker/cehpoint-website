
import { motion } from "framer-motion";
import { 
  Users, Handshake, Shield, ArrowRight, CheckCircle2, 
  Calculator, Palette, Camera, Scale, Share2, Wallet, 
  Clock, TrendingUp, Briefcase, Globe, Cpu
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import SEO from "@/components/seo";
import BreadcrumbSchema from "@/components/seo/breadcrumb-schema";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const partnerTypes = [
  {
    title: "Accounting & Finance",
    icon: Calculator,
    description: "Manage high-value compliance and financial planning for Cehpoint's enterprise clients.",
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Designers & Creatives",
    icon: Palette,
    description: "Deliver world-class UI/UX, branding, and digital assets for our global project pipeline.",
    color: "from-purple-500 to-pink-400"
  },
  {
    title: "Studios & Production",
    icon: Camera,
    description: "Handle professional video production and digital content creation for tech-driven campaigns.",
    color: "from-orange-500 to-red-400"
  },
  {
    title: "Legal & Compliance",
    icon: Scale,
    description: "Provide essential legal framework and IP protection services for our hardware and software innovations.",
    color: "from-emerald-500 to-teal-400"
  },
  {
    title: "Influencers & PR",
    icon: Share2,
    description: "Amplify our technological breakthroughs and educational reach through strategic digital influence.",
    color: "from-yellow-500 to-amber-400"
  },
  {
    title: "Industry Experts",
    icon: Globe,
    description: "Join as a domain specialist for niche technical and strategic consulting projects.",
    color: "from-indigo-500 to-violet-400"
  }
];

const corePillars = [
  {
    title: "Zero Acquisition Cost",
    description: "We handle the marketing and client vetting. You focus entirely on delivery.",
    icon: Users
  },
  {
    title: "Fixed Rates",
    description: "Transparent, pre-negotiated project rates ensure your revenue is predictable.",
    icon: Wallet
  },
  {
    title: "45-Minute Payout",
    description: "Industry-leading payment speed. Funds released instantly upon project approval.",
    icon: Clock
  },
  {
    title: "Priority Ecosystem",
    description: "Cehpoint projects must be your top priority. In return, you get consistent work.",
    icon: Cpu
  }
];

export default function ProfessionalPartnerPage() {
  const { t } = useTranslation();
  const B = "pages.servicePartner";
  const partnerTypesI18n = (t(`${B}.partnerTypes`, { returnObjects: true }) as { title: string; description: string }[])
    .map((x, i) => ({ ...x, icon: partnerTypes[i].icon, color: partnerTypes[i].color }));
  const corePillarsI18n = (t(`${B}.corePillars`, { returnObjects: true }) as { title: string; description: string }[])
    .map((x, i) => ({ ...x, icon: corePillars[i].icon }));
  const payoutSteps = t(`${B}.payoutSteps`, { returnObjects: true }) as { label: string; text: string }[];
  const tableRows = t(`${B}.tableRows`, { returnObjects: true }) as { feature: string; self: string; partner: string }[];
  return (
    <div className="min-h-screen pt-24 bg-background">
      <SEO 
        title="Professional Partner Program"
        description="Scale your traditional business with Cehpoint. We provide the clients, fixed rates, and 45-minute payouts. Join our elite network of experts."
        keywords={["Traditional Business Growth", "Service Partnership", "Accounting Partner", "Legal Partner", "Design Partnership"]}
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.cehpoint.co.in/" },
          { name: "Services", url: "https://www.cehpoint.co.in/services" },
          { name: "Professional Partner", url: "https://www.cehpoint.co.in/services/professional-partner" }
        ]}
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div 
              variants={fadeIn}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass border border-primary/20 mb-6"
            >
              <Handshake className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{t(`${B}.eyebrow`)}</span>
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight"
            >
              {t(`${B}.heroTitleLead`)}
              <span className="text-primary block mt-2">{t(`${B}.heroTitleAccent`)}</span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-xl text-muted-foreground mb-10 leading-relaxed"
            >
              {t(`${B}.heroSubtitle`)}
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-primary rounded-xl px-8 h-12 text-lg" asChild>
                <Link href="/partner-network">
                  {t(`${B}.ctaApply`)} <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Link href="/services">
                <Button size="lg" variant="outline" className="rounded-xl px-8 h-12 text-lg">
                  {t(`${B}.exploreServices`)}
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The 4 Pillars Section */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">{t(`${B}.pillarsTitleLead`)} <span className="text-primary">{t(`${B}.pillarsTitleAccent`)}</span></h2>
            <p className="text-muted-foreground text-lg">{t(`${B}.pillarsSub`)}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {corePillarsI18n.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-3xl border border-border/50 hover:border-primary/50 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <pillar.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Partner With */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">{t(`${B}.whoTitleLead`)} <span className="text-primary">{t(`${B}.whoTitleAccent`)}</span></h2>
            <p className="text-muted-foreground text-lg">{t(`${B}.whoSub`)}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerTypesI18n.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="glass-intense p-8 rounded-3xl h-full relative overflow-hidden flex flex-col hover-lift">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${type.color} opacity-5 blur-3xl group-hover:opacity-20 transition-opacity`} />
                  
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-6`}>
                    <type.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{type.title}</h3>
                  <p className="text-muted-foreground flex-grow leading-relaxed">{type.description}</p>
                  
                  <div className="mt-8 flex items-center text-sm font-medium text-primary">
                    {t(`${B}.joinCategory`)} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payout Mechanism Section */}
      <section className="py-24 bg-gradient-to-r from-primary/5 to-secondary/30 relative">
        <div className="max-w-5xl mx-auto px-4">
          <div className="glass p-12 rounded-4xl border border-primary/10 relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-display font-bold mb-6">{t(`${B}.payoutTitleLead`)} <span className="text-primary">{t(`${B}.payoutTitleAccent`)}</span></h3>
                <div className="space-y-6">
                  {payoutSteps.map((step, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">{i + 1}</div>
                      <p className="text-muted-foreground"><span className="text-foreground font-semibold">{step.label}</span> {step.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square glass-intense rounded-full flex items-center justify-center relative animate-pulse">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary mb-2">45m</div>
                    <div className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">{t(`${B}.settlementTime`)}</div>
                  </div>
                  {/* Decorative orbital rings */}
                  <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
                  <div className="absolute inset-8 border border-primary/10 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Comparison Table */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">{t(`${B}.whyTitleLead`)} <span className="text-primary">{t(`${B}.whyTitleAccent`)}</span></h2>
          </div>

          <div className="max-w-3xl mx-auto overflow-hidden rounded-3xl border border-border glass relative">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-secondary/50">
                  <th className="p-6 font-bold">{t(`${B}.tableFeature`)}</th>
                  <th className="p-6 font-bold text-muted-foreground">{t(`${B}.tableSelf`)}</th>
                  <th className="p-6 font-bold text-primary">{t(`${B}.tablePartner`)}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {tableRows.map((row, i) => (
                  <tr key={i}>
                    <td className="p-6 font-semibold">{row.feature}</td>
                    <td className="p-6 text-muted-foreground">{row.self}</td>
                    <td className="p-6 text-primary flex items-center"><CheckCircle2 className="w-4 h-4 mr-2" /> {row.partner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-b from-transparent to-primary/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="glass-intense rounded-4xl p-16 border border-primary/20">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">{t(`${B}.finalTitleLead`)} <span className="text-primary">{t(`${B}.finalTitleAccent`)}</span></h2>
            <p className="text-xl text-muted-foreground mb-12">
              {t(`${B}.finalDesc`)}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="btn-primary h-14 px-10 text-xl rounded-2xl shadow-xl shadow-primary/20" asChild>
                <Link href="/partner-network">
                  {t(`${B}.applyJoin`)} <ArrowRight className="ml-2 w-6 h-6" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-10 text-xl rounded-2xl glass" asChild>
                <Link href="/contact">
                  {t(`${B}.getCallback`)}
                </Link>
              </Button>
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              {t(`${B}.vetNote`)}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
