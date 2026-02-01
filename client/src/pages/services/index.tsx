
import { Link } from "wouter";
import {
    ShoppingCart, BookOpen, DollarSign, Shield, Brain, Blocks,
    ArrowRight, CheckCircle2, TrendingUp, Users, Award, Zap,
    Code, Cloud, Lock, Smartphone, Globe, BarChart3, Gamepad2, Sprout
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/seo";
import ServiceSchema from "@/components/seo/service-schema";
import BreadcrumbSchema from "@/components/seo/breadcrumb-schema";
import { motion } from "framer-motion";

export default function ServicesPage() {
    const featuredServices = [
        {
            icon: Brain,
            title: "Innovative IT Services",
            description: "Custom software development, cloud architecture, and digital transformation solutions.",
            features: ["Custom Development", "Cloud Architecture", "Digital Transformation", "Legacy Modernization"],
            gradient: "from-purple-500 to-pink-500",
            href: "/services#innovative-it-services",
            stats: "200+ Projects"
        },
        {
            icon: Shield,
            title: "Cyber Security",
            description: "Comprehensive security audits, penetration testing, and threat protection strategies.",
            features: ["Pentesting", "Security Audits", "Compliance", "Threat Monitoring"],
            gradient: "from-blue-500 to-cyan-500",
            href: "/services/cyber-security",
            stats: "150+ Audits"
        },
        {
            icon: ShoppingCart,
            title: "E-commerce Solutions",
            description: "Conversion-optimized platforms with seamless payment integration and omnichannel support.",
            features: ["Custom Storefronts", "Payment Integration", "Inventory Mgmt", "Mobile Commerce"],
            gradient: "from-green-500 to-emerald-500",
            href: "/services/ecommerce",
            stats: "35% Avg Growth"
        },
        {
            icon: BookOpen,
            title: "Edutech Platforms",
            description: "Adaptive learning systems, virtual classrooms, and student management solutions.",
            features: ["LMS Development", "Virtual Classrooms", "Analytics", "Gamification"],
            gradient: "from-orange-500 to-red-500",
            href: "/services/edutech",
            stats: "85+ Platforms"
        },
        {
            icon: DollarSign,
            title: "Fintech Applications",
            description: "Secure, compliant financial technology with blockchain and payment processing.",
            features: ["Digital Wallets", "Blockchain", "Compliance", "Analytics"],
            gradient: "from-yellow-500 to-amber-500",
            href: "/services/fintech",
            stats: "42% YoY Growth"
        },
        {
            icon: Blocks,
            title: "SaaS & Enterprise",
            description: "Scalable cloud-based software with multi-tenancy and enterprise integrations.",
            features: ["Multi-tenant", "API Development", "Subscription Billing", "Integrations"],
            gradient: "from-indigo-500 to-purple-500",
            href: "/services#saas-enterprise-software",
            stats: "110+ Solutions"
        },
        {
            icon: Sprout,
            title: "Rural Digitalization",
            description: "Empowering rural businesses with modern tools to bridge the digital divide.",
            features: ["Agri-Tech Platforms", "Local E-commerce", "Skill Centers", "Low-Bandwidth Tech"],
            gradient: "from-green-600 to-lime-500",
            href: "/services/rural-digitalization",
            stats: "Social Impact"
        },
        {
            icon: Gamepad2,
            title: "Game Development",
            description: "Immersive P2E, eSports, and educational games with monetization strategies.",
            features: ["Unity & Unreal", "Play-to-Earn", "eSports Platforms", "Edu-Gaming"],
            gradient: "from-violet-600 to-fuchsia-600",
            href: "/services/game-development",
            stats: "300% Engagement"
        }
    ];

    const capabilities = [
        { icon: Code, label: "Full-Stack Development" },
        { icon: Cloud, label: "Cloud Infrastructure" },
        { icon: Lock, label: "Security & Compliance" },
        { icon: Smartphone, label: "Mobile Development" },
        { icon: Globe, label: "Web Applications" },
        { icon: BarChart3, label: "Data Analytics" }
    ];

    const stats = [
        { value: "500+", label: "Projects Delivered" },
        { value: "98%", label: "Client Satisfaction" },
        { value: "15+", label: "Industry Verticals" },
        { value: "24/7", label: "Support Available" }
    ];

    return (
        <div className="pt-36 min-h-screen" data-testid="services-page">
            <SEO
                title="Services"
                description="Comprehensive IT services including custom software development, cybersecurity, e-commerce, edutech, fintech, rural digitalization, and game development."
                keywords={["IT Services", "Software Development", "Cybersecurity", "E-commerce", "Edutech", "Fintech", "Game Development", "Rural Tech"]}
                url="https://www.cehpoint.co.in/services"
                canonical="https://www.cehpoint.co.in/services"
            />

            {/* Structured Data Schemas */}
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "https://www.cehpoint.co.in/" },
                    { name: "Services", url: "https://www.cehpoint.co.in/services" }
                ]}
            />

            {/* Service Schemas would be dynamically generated or listed here (simplified for brevity) */}
            <ServiceSchema
                name="Custom Software Development"
                description="Custom software development, cloud architecture, and digital transformation solutions for enterprises."
                serviceType="Software Development"
                category="Information Technology"
                url="https://www.cehpoint.co.in/services"
                hasOfferCatalog={true}
            />

            {/* Hero Section */}
            <section className="py-20 md:py-28 bg-gradient-to-br from-background via-secondary/30 to-background relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6">
                            <Zap className="w-4 h-4 text-primary mr-2" />
                            <span className="text-sm font-medium text-primary">Enterprise-Grade Solutions</span>
                        </div>

                        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-7xl mb-6 tracking-tight">
                            Transform Your Business with
                            <span className="text-gradient block mt-2">Cutting-Edge Technology</span>
                        </h1>

                        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 max-w-4xl mx-auto leading-relaxed">
                            From startups to Fortune 500 companies, we deliver world-class solutions across every industry vertical with measurable results and exceptional quality.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                            <Link href="/quotation">
                                <Button className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold text-primary-foreground w-full sm:w-auto">
                                    Get Your Quote <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                            <Link href="#featured-services">
                                <Button variant="outline" className="px-8 py-4 rounded-xl text-lg font-semibold w-full sm:w-auto">
                                    Explore Services
                                </Button>
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="glass rounded-2xl p-4"
                                >
                                    <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Capabilities Banner */}
            <section className="py-12 bg-secondary/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center items-center gap-8">
                        {capabilities.map((capability, index) => {
                            const IconComponent = capability.icon;
                            return (
                                <motion.div
                                    key={capability.label}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-2 text-sm font-medium"
                                >
                                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <IconComponent className="w-4 h-4 text-primary" />
                                    </div>
                                    <span>{capability.label}</span>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Global Trends 2026 Section */}
            <section className="py-24 bg-gradient-to-r from-blue-900/10 to-purple-900/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] bg-[size:40px_40px]" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 mb-4">
                            <Globe className="w-4 h-4 text-primary mr-2" />
                            <span className="text-sm font-medium text-primary">Global Strategic Trends 2026</span>
                        </div>
                        <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
                            tailored for <span className="text-gradient">Your Region</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Explore specialized IT and Cybersecurity strategies designed for key global markets.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {(() => {
                            const regions = [
                                { id: "us-ca", name: "United States & Canada", flag: "US | CA", desc: "AI Governance & Zero Trust", timezone: "America" },
                                { id: "uk", name: "United Kingdom", flag: "UK", desc: "FinOps & MDR Security", timezone: "Europe/London" },
                                { id: "de", name: "Germany", flag: "DE", desc: "Industry 4.0 & IoT Security", timezone: "Europe/Berlin" },
                                { id: "au", name: "Australia", flag: "AU", desc: "SaaS Modernization & Cyber Resilience", timezone: "Australia" },
                                { id: "ae", name: "UAE (Dubai)", flag: "UAE", desc: "Smart Cities & Blockchain", timezone: "Asia/Dubai" },
                                { id: "in", name: "India", flag: "IND", desc: "AI-Native Dev & SOC Services", timezone: "Asia/Kolkata" }
                            ];

                            // Robust timezone prioritization
                            const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

                            const sortedRegions = [...regions].sort((a, b) => {
                                // Explicit check for India/Asia timezones
                                const isUserIndia = userTimezone.includes("Asia/Kolkata") || userTimezone.includes("Asia/Calcutta") || userTimezone.includes("IST");

                                if (isUserIndia) {
                                    if (a.id === "in") return -1;
                                    if (b.id === "in") return 1;
                                }

                                if (userTimezone.includes(a.timezone) && !userTimezone.includes(b.timezone)) return -1;
                                if (!userTimezone.includes(a.timezone) && userTimezone.includes(b.timezone)) return 1;
                                return 0;
                            });

                            return sortedRegions.map((region, index) => (
                                <motion.div
                                    key={region.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Link href={`/services/global/${region.id}`}>
                                        <div className={`glass p-6 rounded-2xl hover:bg-primary/5 transition-colors cursor-pointer border border-border/50 hover:border-primary/50 group h-full ${index === 0 ? 'ring-2 ring-primary/20 bg-primary/5' : ''}`}>
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="text-4xl">{region.flag}</span>
                                                {index === 0 && <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">NEAR YOU</span>}
                                                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                            </div>
                                            <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">{region.name}</h3>
                                            <p className="text-sm text-muted-foreground">{region.desc}</p>
                                        </div>
                                    </Link>
                                </motion.div>
                            ));
                        })()}
                    </div>
                </div>
            </section>

            {/* Featured Services */}
            <section id="featured-services" className="py-24 scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
                            Our <span className="text-gradient">Featured Services</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Comprehensive technology solutions tailored to drive innovation and growth across your organization
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredServices.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Link href={service.href}>
                                        <div className="glass rounded-3xl p-8 h-full hover-lift group cursor-pointer relative overflow-hidden">
                                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`} />

                                            <div className="relative z-10">
                                                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                                    <IconComponent className="w-8 h-8 text-white" />
                                                </div>

                                                <div className="flex items-center justify-between mb-3">
                                                    <h3 className="font-bold text-2xl group-hover:text-primary transition-colors">
                                                        {service.title}
                                                    </h3>
                                                    <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </div>

                                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                                    {service.description}
                                                </p>

                                                <div className="space-y-2 mb-6">
                                                    {service.features.map((feature, idx) => (
                                                        <div key={idx} className="flex items-center text-sm">
                                                            <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                                                            <span className="text-muted-foreground">{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="flex items-center justify-between pt-4 border-t border-border">
                                                    <span className="text-sm font-medium text-primary">{service.stats}</span>
                                                    <span className="text-sm text-muted-foreground">Learn more →</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* All Industries Section */}
            <section className="py-24 bg-secondary/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
                            <span className="text-gradient">15+ Industries</span> We Serve
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                            Delivering specialized solutions across every business vertical with proven expertise and measurable outcomes
                        </p>
                        <Link href="/services#services">
                            <Button className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold text-primary-foreground">
                                View All Industries <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {[
                            "Healthcare", "Manufacturing", "Real Estate", "Logistics", "Travel & Tourism",
                            "Food & Beverage", "Automotive", "Media & Entertainment", "Government", "Retail"
                        ].map((industry, index) => (
                            <motion.div
                                key={industry}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="glass rounded-xl p-4 text-center hover:bg-primary/10 transition-colors cursor-pointer"
                            >
                                <span className="font-medium text-sm">{industry}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Indicators */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="glass rounded-3xl p-12 text-center">
                        <div className="flex justify-center gap-2 mb-6">
                            {[...Array(5)].map((_, i) => (
                                <Award key={i} className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                            ))}
                        </div>
                        <h3 className="font-bold text-3xl mb-4">Trusted by Industry Leaders</h3>
                        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Join hundreds of satisfied clients who have transformed their businesses with our solutions
                        </p>
                        <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wide">Technology Partners</p>
                        <div className="flex flex-wrap justify-center gap-8 opacity-60">
                            <span className="text-lg font-semibold">Amazon</span>
                            <span className="text-lg font-semibold">Shopify</span>
                            <span className="text-lg font-semibold">AWS Partner</span>
                            <span className="text-lg font-semibold">Microsoft</span>
                            <span className="text-lg font-semibold">Google Cloud</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-gradient-to-br from-primary/5 via-secondary to-primary/5">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="glass rounded-3xl p-12">
                        <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">
                            Ready to Build Something <span className="text-gradient">Amazing?</span>
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground mb-8">
                            Get a detailed quotation with AI-powered analysis and technical recommendations for your project.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/quotation">
                                <Button className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold text-primary-foreground w-full sm:w-auto">
                                    Get Your Quotation <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                            <Link href="/demo-delivery">
                                <Button variant="outline" className="px-8 py-4 rounded-xl text-lg font-semibold w-full sm:w-auto">
                                    See Our Process
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
