
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Globe, Users, TrendingUp, Smartphone, Wifi, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import SEO from "@/components/seo"; // Assuming a generic SEO component exists or using the one from other pages
import ServiceSchema from "@/components/seo/service-schema";
import BreadcrumbSchema from "@/components/seo/breadcrumb-schema";

export default function RuralDigitalizationPage() {
    const { t } = useTranslation();
    const B = "pages.serviceRural";
    const valueIcons = [TrendingUp, Users, Smartphone, Wifi];
    const valueProps = (t(`${B}.valueProps`, { returnObjects: true }) as { title: string; desc: string }[]).map((v, i) => ({ ...v, icon: valueIcons[i] ?? TrendingUp }));
    const solutions = t(`${B}.solutions`, { returnObjects: true }) as { title: string; desc: string; features: string[] }[];
    return (
        <div className="pt-24 min-h-screen">
            <SEO
                title="Rural Digitalization Services | Empowering Local Businesses"
                description="We help rural businesses modernize with affordable digital tools, creating employment and growth opportunities in non-urban areas."
                keywords={["Rural Digitalization", "Village Business Tech", "Rural IT Services", "Digital Employment", "Local Business Growth"]}
                url="https://www.cehpoint.co.in/services/rural-digitalization"
                canonical="https://www.cehpoint.co.in/services/rural-digitalization"
            />

            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "https://www.cehpoint.co.in/" },
                    { name: "Services", url: "https://www.cehpoint.co.in/services" },
                    { name: "Rural Digitalization", url: "https://www.cehpoint.co.in/services/rural-digitalization" }
                ]}
            />

            <ServiceSchema
                name="Rural Digitalization Services"
                description="Comprehensive digital transformation services tailored for rural enterprises to boost growth and employment."
                serviceType="IT Consultant"
                category="Rural Development"
                url="https://www.cehpoint.co.in/services/rural-digitalization"
            />

            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-green-50/50 via-background to-blue-50/30">
                <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:60px_60px]" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 mb-6 border border-green-200">
                            <Globe className="w-4 h-4 mr-2" />
                            <span className="text-sm font-bold">{t(`${B}.eyebrow`)}</span>
                        </div>

                        <h1 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl mb-6 tracking-tight leading-tight">
                            {t(`${B}.heroL1`)} <span className="text-green-600">{t(`${B}.heroA1`)}</span> {t(`${B}.heroL2`)} <br />
                            <span className="text-primary">{t(`${B}.heroA2`)}</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
                            {t(`${B}.heroSubtitle`)}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact">
                                <Button className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold w-full sm:w-auto">
                                    {t(`${B}.ctaStart`)} <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                            <Link href="#solutions">
                                <Button variant="outline" className="px-8 py-4 rounded-xl text-lg font-semibold w-full sm:w-auto hover:bg-green-50">
                                    {t(`${B}.viewSolutions`)}
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {valueProps.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 rounded-2xl bg-secondary/20 border border-border hover:border-green-500/30 transition-colors"
                            >
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                    <item.icon className="w-6 h-6 text-green-600" />
                                </div>
                                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                                <p className="text-muted-foreground">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Solutions */}
            <section id="solutions" className="py-24 bg-gradient-to-b from-secondary/30 to-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">
                            {t(`${B}.solutionsTitleLead`)} <span className="text-primary">{t(`${B}.solutionsTitleAccent`)}</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            {t(`${B}.solutionsSub`)}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {solutions.map((solution, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass p-8 rounded-3xl border border-primary/10 hover:shadow-xl transition-all"
                            >
                                <h3 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-400">{solution.title}</h3>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    {solution.desc}
                                </p>
                                <ul className="space-y-3">
                                    {solution.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-center text-sm font-medium">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-green-600 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-foreground/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                        <div className="relative z-10">
                            <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">
                                {t(`${B}.ctaTitle`)}
                            </h2>
                            <p className="text-lg md:text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                                {t(`${B}.ctaDesc`)}
                            </p>
                            <Link href="/contact">
                                <Button className="bg-white text-green-700 hover:bg-green-50 px-8 py-6 rounded-xl text-lg font-bold shadow-lg transition-transform hover:scale-105">
                                    {t(`${B}.ctaButton`)}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
