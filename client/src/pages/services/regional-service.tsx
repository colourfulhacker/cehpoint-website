
import { useRoute, Link } from "wouter";
import {
    Brain, ShieldCheck, Lock, Cloud, Eye, Briefcase,
    Factory, Car, Server, RefreshCw, Activity, Bot,
    Building2, Flame, Link as LinkIcon, Cpu, Siren, Fingerprint,
    ArrowRight, Shield, Globe, PoundSterling, Network, ShieldAlert,
    BrainCircuit, Building, Code, Play, CheckCircle2, TrendingUp,
    Zap, Globe2, Target, Users
} from "lucide-react";
import { regionalTrends } from "@/data/regional-trends";
import SEO from "@/components/seo";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import NotFound from "@/pages/not-found";
import AIServiceEstimator from "@/components/calculators/ai-service-estimator";
import { WhatsAppInquiryDialog } from "@/components/shared/whatsapp-inquiry-dialog";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Map string icon names to Lucide components
const iconMap: Record<string, any> = {
    Brain, ShieldCheck, Lock, Cloud, Eye, Briefcase,
    Factory, Car, Server, RefreshCw, Activity, Bot,
    Building2, Flame, Link: LinkIcon, Cpu, Siren, Fingerprint,
    PoundSterling, Network, ShieldAlert, BrainCircuit, Building, Code,
    Globe
};

export default function RegionalService() {
    const [match, params] = useRoute("/services/global/:region");

    if (!match || !params?.region) {
        return <NotFound />;
    }

    const regionData = regionalTrends[params.region];

    if (!regionData) {
        return <NotFound />;
    }

    const TopITIcon = iconMap[regionData.topITService.icon] || Brain;
    const TopCyberIcon = iconMap[regionData.topCybersecurity.icon] || ShieldCheck;
    const InnovationIcon = iconMap[regionData.innovativeTech.icon] || Lock;

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        visible: { transition: { staggerChildren: 0.1 } }
    };

    // Schema Markup Construction
    const schemaMarkup = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://www.cehpoint.co.in/#organization",
                "name": "Cehpoint",
                "url": "https://www.cehpoint.co.in/",
                "logo": "https://www.cehpoint.co.in/assets/logo.png",
                "sameAs": ["https://twitter.com/cehpoint", "https://linkedin.com/company/cehpoint"]
            },
            regionData.localBusiness && {
                "@type": "LocalBusiness",
                "@id": `https://www.cehpoint.co.in/services/global/${regionData.id}#localbusiness`,
                "name": `Cehpoint ${regionData.name}`,
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": regionData.localBusiness.streetAddress,
                    "addressLocality": regionData.localBusiness.addressLocality,
                    "addressCountry": regionData.localBusiness.addressCountry,
                    "postalCode": regionData.localBusiness.postalCode
                },
                "telephone": regionData.localBusiness.telephone,
                "parentOrganization": { "@id": "https://www.cehpoint.co.in/#organization" }
            },
            {
                "@type": "Service",
                "name": regionData.topITService.title,
                "description": regionData.topITService.description,
                "provider": { "@id": "https://www.cehpoint.co.in/#organization" },
                "areaServed": {
                    "@type": "Place",
                    "name": regionData.name
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": regionData.seoJson.faq.map(item => ({
                    "@type": "Question",
                    "name": item.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": item.answer
                    }
                }))
            }
        ].filter(Boolean)
    };

    return (
        <div className="pt-24 min-h-screen bg-background" data-testid={`service-${regionData.id}`}>
            <SEO
                title={regionData.seoJson.title}
                description={regionData.seoJson.description}
                keywords={regionData.seoJson.keywords}
                url={`https://www.cehpoint.co.in/services/global/${regionData.id}`}
                canonical={`https://www.cehpoint.co.in/services/global/${regionData.id}`}
            />
            {/* Hreflang Implementation & Schema */}
            <head>
                <link rel="alternate" hrefLang="en-us" href="https://www.cehpoint.co.in/services/global/us-ca" />
                <link rel="alternate" hrefLang="en-gb" href="https://www.cehpoint.co.in/services/global/uk" />
                <link rel="alternate" hrefLang="de-de" href="https://www.cehpoint.co.in/services/global/de" />
                <link rel="alternate" hrefLang="en-au" href="https://www.cehpoint.co.in/services/global/au" />
                <link rel="alternate" hrefLang="en-ae" href="https://www.cehpoint.co.in/services/global/ae" />
                <link rel="alternate" hrefLang="en-in" href="https://www.cehpoint.co.in/services/global/in" />
                <link rel="alternate" hrefLang="x-default" href="https://www.cehpoint.co.in/services" />
                <script type="application/ld+json">
                    {JSON.stringify(schemaMarkup)}
                </script>
            </head>

            {/* --- Hero Section --- */}
            <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-background via-secondary/10 to-background">
                <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:60px_60px]" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none opacity-40" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-primary/20 bg-background/50 backdrop-blur-md shadow-sm mb-4">
                            <span className="text-4xl filter drop-shadow-md">{regionData.flag}</span>
                            <span className="h-6 w-px bg-border/60"></span>
                            <span className="text-sm font-bold text-primary tracking-wide uppercase">Strategic Innovation Hub</span>
                        </div>

                        <h1 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1]">
                            {regionData.name} <br />
                            <span className="text-gradient">Tech Frontiers</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            {regionData.marketAnalysis}
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 pt-6">
                            <WhatsAppInquiryDialog
                                appName="Consulting Inquiry"
                                locationName={regionData.name}
                                title="Book Strategic Consultation"
                                trigger={
                                    <Button size="lg" className="rounded-full text-lg h-14 px-8 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
                                        Partner with Cehpoint {regionData.id.toUpperCase()} <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                }
                            />
                        </div>

                        {/* Compliance Badges */}
                        {regionData.complianceBadges && (
                            <div className="flex flex-wrap justify-center gap-4 mt-12 opacity-80">
                                {regionData.complianceBadges.map((badge) => (
                                    <div key={badge} className="flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-md border border-border/50">
                                        <BadgeCheckIcon className="w-4 h-4 text-green-500" />
                                        <span className="text-xs font-semibold">{badge}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* --- Key Challenges --- */}
            <section className="py-20 bg-secondary/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="mb-14 text-center md:text-left"
                    >
                        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Regional <span className="text-gradient">Challenges</span> We Solve</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl">Targeted intervention for the unique pain points of the {regionData.name} market.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {regionData.challenges.map((challenge, idx) => (
                            <motion.div key={idx} variants={fadeInUp}>
                                <Card className="h-full bg-background border-border/50 hover:border-primary/50 transition-colors">
                                    <CardHeader>
                                        <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
                                            <Target className="w-6 h-6 text-red-500" />
                                        </div>
                                        <CardTitle className="text-xl">{challenge.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {challenge.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Core Services Showcase --- */}
            <section className="py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <Badge variant="outline" className="mb-4">Core Competencies</Badge>
                        <h2 className="font-display text-3xl md:text-5xl font-bold">Strategic <span className="text-gradient">Capabilities</span></h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Service 1 */}
                        <ServiceCard
                            icon={TopITIcon}
                            title={regionData.topITService.title}
                            description={regionData.topITService.description}
                            color="text-blue-500"
                            bgColor="bg-blue-500/10"
                        />
                        {/* Service 2 */}
                        <ServiceCard
                            icon={TopCyberIcon}
                            title={regionData.topCybersecurity.title}
                            description={regionData.topCybersecurity.description}
                            color="text-emerald-500"
                            bgColor="bg-emerald-500/10"
                        />
                        {/* Service 3 */}
                        <ServiceCard
                            icon={InnovationIcon}
                            title={regionData.innovativeTech.title}
                            description={regionData.innovativeTech.description}
                            color="text-purple-500"
                            bgColor="bg-purple-500/10"
                        />
                    </div>
                </div>
            </section>

            {/* --- AI Solutions High-Impact --- */}
            <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Applied <span className="text-gradient">AI Innovation</span></h2>
                            <p className="text-lg text-muted-foreground">Moving beyond hype to deliver measurable business impact in the {regionData.name} ecosystem.</p>
                        </div>
                        <Button variant="outline" className="rounded-full">
                            Explore All AI Models <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {regionData.aiSolutions.map((sol, idx) => (
                            <Card key={idx} className="bg-background/80 backdrop-blur border-primary/10 overflow-hidden">
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <CardTitle className="text-2xl">{sol.title}</CardTitle>
                                        <Bot className="w-8 h-8 text-primary/60" />
                                    </div>
                                    <CardDescription className="text-base mt-2">{sol.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="bg-secondary/50 p-4 rounded-lg flex items-start gap-3">
                                        <TrendingUp className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                                        <div>
                                            <span className="font-semibold text-foreground block mb-1">Impact Analysis</span>
                                            <span className="text-sm text-muted-foreground">{sol.impact}</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Industries (ICP) --- */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">Powering Key <span className="text-gradient">Industries</span></h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {regionData.industries.map((ind, idx) => (
                            <div key={idx} className="group relative p-6 rounded-2xl bg-secondary/20 hover:bg-secondary/40 transition-colors border border-border/50">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
                                <h3 className="text-xl font-bold mb-2 relative z-10">{ind.name}</h3>
                                <p className="text-sm text-muted-foreground relative z-10">{ind.needs}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Tech Stack & CTA --- */}
            <section className="py-24 bg-background">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">Preferred Technology Stack</p>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-20 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        {regionData.techStack.map((tech, i) => (
                            <span key={i} className="text-xl font-bold text-foreground/80">{tech}</span>
                        ))}
                    </div>

                    <Card className="bg-primary text-primary-foreground border-none overflow-hidden relative">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

                        <CardContent className="relative z-10 py-16 px-8">
                            <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">
                                Ready to deploy in {regionData.name}?
                            </h2>
                            <p className="text-primary-foreground/90 text-xl max-w-2xl mx-auto mb-10">
                                Get a customized technical roadmap aligned with local compliance and market trends.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <WhatsAppInquiryDialog
                                    appName="Regional Deployment"
                                    locationName={regionData.name}
                                    title="Consult Experts"
                                    trigger={
                                        <Button size="lg" variant="secondary" className="text-primary font-bold text-lg h-14 px-8">
                                            Connect with Local Experts
                                        </Button>
                                    }
                                />
                                <div className="hidden sm:block">
                                    <AIServiceEstimator />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
}

function ServiceCard({ icon: Icon, title, description, color, bgColor }: any) {
    return (
        <Card className="border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
            <CardHeader>
                <div className={`w-14 h-14 rounded-xl ${bgColor} flex items-center justify-center mb-4`}>
                    <Icon className={`w-7 h-7 ${color}`} />
                </div>
                <CardTitle className="text-2xl">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription className="text-base leading-relaxed">
                    {description}
                </CardDescription>
            </CardContent>
        </Card>
    );
}

function BadgeCheckIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.78 4.78 4 4 0 0 1-6.74 0 4 4 0 0 1-4.78-4.78 4 4 0 0 1 0-6.74Z" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    )
}
