
import { useRoute, Link } from "wouter";
import {
    Brain, ShieldCheck, Lock, Cloud, Eye, Briefcase,
    Factory, Car, Server, RefreshCw, Activity, Bot,
    Building2, Flame, Link as LinkIcon, Cpu, Siren, Fingerprint,
    ArrowRight, Shield, Globe, PoundSterling, Network, ShieldAlert,
    BrainCircuit, Building, Code, Play
} from "lucide-react";
import { regionalTrends } from "@/data/regional-trends";
import SEO from "@/components/seo";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import NotFound from "@/pages/not-found";
import AIServiceEstimator from "@/components/calculators/ai-service-estimator";
import { WhatsAppInquiryDialog } from "@/components/shared/whatsapp-inquiry-dialog";

// Map string icon names to Lucide components
const iconMap: Record<string, any> = {
    Brain, ShieldCheck, Lock, Cloud, Eye, Briefcase,
    Factory, Car, Server, RefreshCw, Activity, Bot,
    Building2, Flame, Link: LinkIcon, Cpu, Siren, Fingerprint,
    PoundSterling, Network, ShieldAlert, BrainCircuit, Building, Code
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

    // Schema Markup Construction
    const schemaMarkup = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://www.cehpoint.co.in/#organization",
                "name": "Cehpoint",
                "url": "https://www.cehpoint.co.in/",
                "logo": "https://www.cehpoint.co.in/assets/logo.png", // Assuming logo path
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
        <div className="pt-36 min-h-screen" data-testid={`service-${regionData.id}`}>
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

            <section className="py-20 md:py-28 bg-gradient-to-br from-background via-secondary/30 to-background relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

                {/* Animated Background Blob for "Vibrant" feel */}
                <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-50" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6 border border-primary/20">
                            <span className="text-3xl mr-3">{regionData.flag}</span>
                            <span className="text-sm font-bold text-primary tracking-wide uppercase">2026 Innovation Hub</span>
                        </div>

                        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-7xl mb-6 tracking-tight">
                            {regionData.name} <span className="text-gradient block mt-2">Future-Ready IT Services</span>
                        </h1>

                        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 max-w-4xl mx-auto leading-relaxed">
                            Driving innovative growth with <strong className="text-foreground">{regionData.focus}</strong>.
                        </p>

                        {/* Compliance Badges - E-E-A-T Signal */}
                        {regionData.complianceBadges && (
                            <div className="flex flex-wrap justify-center gap-4 mb-10">
                                {regionData.complianceBadges.map((badge) => (
                                    <div key={badge} className="flex items-center gap-2 bg-background/50 backdrop-blur-md px-4 py-2 rounded-full border border-primary/20 shadow-sm">
                                        <Shield className="w-4 h-4 text-green-500" />
                                        <span className="text-sm font-semibold text-foreground">{badge}</span>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <WhatsAppInquiryDialog
                                appName="Regional Service Inquiry"
                                locationName={regionData.name}
                                title="Get Localized Quote"
                                trigger={
                                    <Button className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold text-primary-foreground w-full sm:w-auto hover:shadow-lg hover:shadow-primary/25 transition-all">
                                        Get Localized Quote <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                }
                            />
                        </div>
                    </motion.div>
                </div>
            </section>
/* ... */
            <section className="py-24 bg-secondary/50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">
                        Ready to deploy across <span className="text-gradient">{regionData.name}?</span>
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        Get a customized technical roadmap aligned with local compliance and market trends.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <WhatsAppInquiryDialog
                            appName="Regional Deployment"
                            locationName={regionData.name}
                            title="Connect with Experts"
                            trigger={
                                <Button className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold text-primary-foreground">
                                    Connect with Local Experts <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            }
                        />
                        <AIServiceEstimator />
                    </div>
                </div>
            </section>
        </div>
    );
}
