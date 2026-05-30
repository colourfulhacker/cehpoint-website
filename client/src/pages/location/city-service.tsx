
import { useRoute, Link } from "wouter";
import { globalLocations, GlobalLocation } from "@/data/global-locations";
import { allApps, AppIdea, getIconForApp } from "@/data/business-apps";
import { cityTrends, defaultTrend, CityTrend } from "@/data/city-trends"; // Import trends
import SEO from "@/components/seo";
import PageBreadcrumb from "@/components/layout/page-breadcrumb";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, CheckCircle, CheckCircle2, Globe, Phone, Building2, TrendingUp, DollarSign, Star, Rocket, ShieldCheck, Bot, Code, Cpu, BarChart, Heart, Sun, Home, Video, Book, ShoppingBag, Diamond, Flag, Edit, Camera, Gem, Anchor, Search, Leaf, Calendar, Briefcase, Mic, BookOpen, Snowflake, HardHat, Activity, CloudRain, Circle, Layers, Settings, Calculator, Eye, Smile, Coffee, Send, MessageCircle, ShoppingCart, Music, Map, CreditCard, Lock, Beer, Recycle, Truck, Mountain, Wrench, Bitcoin, Users, Landmark, Utensils, GraduationCap, Palette, Gavel, Scissors, Feather, Car, Ticket, Stethoscope, Smartphone, Database, Cloud, Laptop, ChefHat, Bus, Plane } from "lucide-react";
import NotFound from "@/pages/not-found";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ProjectCostEstimator from "@/components/calculators/project-cost-estimator";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { WhatsAppInquiryDialog } from "@/components/shared/whatsapp-inquiry-dialog";

const ICON_MAP: Record<string, any> = {
    code: Code, cpu: Cpu, globe: Globe, shield: ShieldCheck,
    "bar-chart": BarChart, "chart-bar": BarChart,
    building: Building2, star: Star, heart: Heart, sun: Sun, home: Home,
    video: Video, book: Book, phone: Phone, bag: ShoppingBag, diamond: Diamond,
    flag: Flag, edit: Edit, camera: Camera, gem: Gem, anchor: Anchor,
    search: Search, "dollar-sign": DollarSign, leaf: Leaf, "shopping-bag": ShoppingBag,
    calendar: Calendar, briefcase: Briefcase, mic: Mic, "book-open": BookOpen,
    snowflake: Snowflake, "hard-hat": HardHat, activity: Activity, "cloud-rain": CloudRain,
    circle: Circle, layers: Layers, settings: Settings, calculator: Calculator,
    eye: Eye, smile: Smile, coffee: Coffee, "check-circle": CheckCircle,
    send: Send, "message-circle": MessageCircle, "shopping-cart": ShoppingCart,
    music: Music, map: Map, "credit-card": CreditCard, lock: Lock, beer: Beer,
    recycle: Recycle, truck: Truck, mountain: Mountain, tool: Wrench, bitcoin: Bitcoin,
    users: Users, landmark: Landmark, utensils: Utensils, "graduation-cap": GraduationCap,
    palette: Palette, gavel: Gavel, scissors: Scissors, feather: Feather, car: Car,
    ticket: Ticket, stethoscope: Stethoscope, smartphone: Smartphone, database: Database,
    cloud: Cloud, laptop: Laptop, "chef-hat": ChefHat, bus: Bus, plane: Plane
};

export default function CityServicePage() {
    const { t } = useTranslation();
    const B = "pages.pgCity";
    const [match, params] = useRoute("/location/:city");

    if (!match || !params?.city) { return <NotFound />; }
    const cityData = globalLocations.find(c => c.slug === params.city.toLowerCase());
    if (!cityData) { return <NotFound />; }

    // SEO Data Logic
    const trendData: CityTrend = cityTrends.find(t => t.slug === cityData.slug) || defaultTrend;
    const isDefaultTrend = trendData === defaultTrend;

    // Dynamic Hero Content (fallback to generic if no specific trend)
    // Safe templating: split around the city name and highlight it as a React node (no innerHTML)
    const heroTitle = isDefaultTrend
        ? <span>{t(`${B}.heroDefPre`)} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-pink-500">{t(`${B}.heroDefAccent`)}</span><br /> {t(`${B}.heroDefIn`)} {cityData.name}</span>
        : (() => {
            const raw = trendData.heroTitle;
            const idx = raw.indexOf(cityData.name);
            if (idx === -1) return <span>{raw}</span>;
            return (
                <span>
                    {raw.slice(0, idx)}
                    <span className="text-primary">{cityData.name}</span>
                    {raw.slice(idx + cityData.name.length)}
                </span>
            );
        })();

    const heroSubtitle = isDefaultTrend
        ? <span>{t(`${B}.heroSubPre`)} <span className="text-foreground font-medium">{t(`${B}.heroSubAccent`)}</span> <br /> {t(`${B}.heroSubPost`)}</span>
        : trendData.heroSubtitle;

    // Get Recommended Apps
    const recommendedApps = cityData.recommendedAppIds
        ? allApps.filter(app => cityData.recommendedAppIds.includes(app.id))
        : allApps.slice(0, 4); // Fallback

    const cityUrl = `https://www.cehpoint.co.in/location/${cityData.slug}`;
    const seoTitle = `${cityData.name}: ${trendData.heroTitle}`;

    const jsonLd: Record<string, unknown> = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": `${cityUrl}#localbusiness`,
        "name": `Cehpoint ${cityData.name}`,
        "description": trendData.metaDescription,
        "url": cityUrl,
        "image": "https://www.cehpoint.co.in/og-image.png",
        "logo": "https://www.cehpoint.co.in/og-image.png",
        "telephone": cityData.phone,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": cityData.name,
            "addressRegion": cityData.state || cityData.name,
            "addressCountry": cityData.country
        },
        "areaServed": {
            "@type": "City",
            "name": cityData.name
        },
        "priceRange": `${cityData.currency === 'INR' ? '₹15000' : '$200'} - ${cityData.currency === 'INR' ? '₹500000' : '$5000'}`
    };
    if ((cityData as any).lat && (cityData as any).lng) {
        jsonLd.geo = {
            "@type": "GeoCoordinates",
            latitude: (cityData as any).lat,
            longitude: (cityData as any).lng,
        };
    }

    return (
        <div className="pt-36 min-h-screen bg-background text-foreground selection:bg-primary/30">
            <SEO
                title={seoTitle}
                description={trendData.metaDescription}
                keywords={[...trendData.keywords, `Business App ${cityData.name}`, `App Developers ${cityData.name}`, `Software Company ${cityData.name}`, cityData.techFocus]}
                url={cityUrl}
                schema={JSON.stringify(jsonLd)}
            />

            <PageBreadcrumb
                items={[
                    { name: "Services", href: "/services" },
                    { name: cityData.name, href: `/location/${cityData.slug}` },
                ]}
                className="max-w-7xl mx-auto px-4 pt-2"
            />

            {/* --- HERO SECTION --- */}
            <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
                {/* Dynamic Background */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/70 to-background" />
                <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:60px_60px]" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-foreground/10 mb-8 backdrop-blur-md">
                            <MapPin className="w-4 h-4 text-primary mr-2" />
                            <span className="text-sm font-medium tracking-wide uppercase text-foreground/90">
                                Powering {cityData.name}, {cityData.state}
                            </span>
                        </div>

                        <h1 className="font-display font-bold text-5xl md:text-8xl mb-6 tracking-tight leading-tight">
                            {heroTitle}
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-10 font-light leading-relaxed">
                            {heroSubtitle}
                        </p>

                        {/* Market Trends Badges (New for SEO) */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {trendData.marketTrends.map((trend, i) => (
                                <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 hover:border-primary/50 transition-colors cursor-default">
                                    <TrendingUp className="w-4 h-4 text-primary" />
                                    <span className="text-sm font-medium text-muted-foreground">{trend.title}: <span className="text-foreground">{trend.stat}</span></span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            {/* Updated to use WhatsApp Dialog */}
                            <WhatsAppInquiryDialog
                                appName="Startup Launch"
                                locationName={cityData.name}
                                title={t(`${B}.launchStartupTitle`)}
                                trigger={
                                    <Button className="h-14 px-8 rounded-full text-lg font-bold bg-foreground text-background hover:bg-foreground/90 transition-transform hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                                        <Rocket className="mr-2 w-5 h-5 text-primary" /> {t(`${B}.launchStartupBtn`)}
                                    </Button>
                                }
                            />

                            <WhatsAppInquiryDialog
                                appName="Custom Project"
                                locationName={cityData.name}
                                title={t(`${B}.customQuoteTitle`)}
                                trigger={
                                    <Button variant="outline" className="h-14 px-8 rounded-full text-lg font-medium border-foreground/20 bg-foreground/5 backdrop-blur-sm hover:bg-foreground/10 text-foreground">
                                        {t(`${B}.customQuoteBtn`)}
                                    </Button>
                                }
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- RECOMMENDED APPS (The Core Value) --- */}
            <section id="business-ideas" className="py-24 relative bg-background">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm">{t(`${B}.oppsEyebrow`)}</span>
                        <h2 className="text-4xl md:text-6xl font-display font-bold mt-2 mb-6">
                            {t(`${B}.oppsTitle`)} <br /> {t(`${B}.oppsTitleIn`)} <span className="text-primary">{cityData.name}</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                            {t(`${B}.oppsSub`, { name: cityData.name })}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {recommendedApps.map((app, idx) => (
                            <motion.div
                                key={app.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative h-full glass-intense border border-foreground/10 rounded-3xl p-6 flex flex-col hover:-translate-y-2 transition-transform duration-300">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-muted to-secondary border border-border flex items-center justify-center mb-6 shadow-lg group-hover:shadow-primary/25 transition-shadow">
                                        {app.icon}
                                    </div>

                                    <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{app.title}</h3>
                                    <p className="text-sm text-muted-foreground mb-6 flex-grow">{app.whyThisApp}</p>

                                    <div className="mt-auto pt-6 border-t border-foreground/5">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">{t(`${B}.readyLaunch`)}</span>
                                            <span className="text-lg font-bold text-foreground">{cityData.currency === 'INR' ? '₹15k' : '$200'}<span className="text-xs font-normal text-muted-foreground">{t(`${B}.oneTime`)}</span></span>
                                        </div>
                                        <WhatsAppInquiryDialog
                                            appName={app.title}
                                            locationName={cityData.name}
                                            trigger={
                                                <Button className="w-full bg-foreground text-background hover:bg-foreground/90 font-bold rounded-xl">
                                                    {t(`${B}.viewDemo`)}
                                                </Button>
                                            }
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </section >

            {/* --- SEGMENTED OPPORTUNITIES (NEW) --- */}
            {
                trendData.segments && (
                    <section className="py-24 bg-secondary/20 relative border-t border-border">
                        <div className="max-w-7xl mx-auto px-4">
                            <div className="text-center mb-16">
                                <span className="text-primary font-bold tracking-widest uppercase text-sm">{t(`${B}.segEyebrow`)}</span>
                                <h2 className="text-3xl md:text-5xl font-display font-bold mt-2 mb-6 text-foreground">
                                    {t(`${B}.segTitle`)} <span className="text-primary">{t(`${B}.segAccent`)}</span>
                                </h2>
                                <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                                    {t(`${B}.segSub`, { name: cityData.name })}
                                </p>
                            </div>

                            <Tabs defaultValue="Business Owners" className="w-full">
                                <TabsList className="flex flex-col md:grid md:grid-cols-3 w-full max-w-2xl mx-auto bg-foreground/5 p-1 rounded-[2rem] mb-12 h-auto gap-2 md:gap-0">
                                    {trendData.segments.map((segment, idx) => (
                                        <TabsTrigger
                                            key={idx}
                                            value={segment.audience}
                                            className="rounded-[1.5rem] py-4 text-lg font-medium data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-lg transition-all"
                                        >
                                            {segment.audience}
                                        </TabsTrigger>
                                    ))}
                                </TabsList>

                                {trendData.segments.map((segment, idx) => (
                                    <TabsContent key={idx} value={segment.audience} className="mt-0 focus-visible:outline-none">
                                        <div className="text-center mb-12">
                                            <h3 className="text-2xl font-bold text-foreground mb-2">{segment.title}</h3>
                                            <p className="text-muted-foreground max-w-lg mx-auto">{segment.description}</p>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                            {segment.ideas.map((idea, i) => {
                                                const Icon = ICON_MAP[idea.icon] || Cpu;
                                                return (
                                                    <div key={i} className="p-8 rounded-3xl bg-foreground/5 border border-foreground/10 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_-10px_rgba(124,58,237,0.3)] hover:-translate-y-1 group relative overflow-hidden">
                                                        <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                                                            <Icon className="w-32 h-32 text-primary rotate-12" />
                                                        </div>
                                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-muted to-secondary border border-border flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform shadow-lg">
                                                            <Icon className="w-7 h-7" />
                                                        </div>
                                                        <h4 className="text-xl font-bold text-foreground mb-3 relative z-10">{idea.title}</h4>
                                                        <p className="text-muted-foreground mb-6 text-sm leading-relaxed relative z-10 min-h-[60px]">{idea.description}</p>
                                                        <div className="relative z-10 pt-4 border-t border-foreground/5">
                                                            <WhatsAppInquiryDialog
                                                                appName={idea.title}
                                                                locationName={cityData.name}
                                                                title={`Connect for ${idea.title}`}
                                                                trigger={
                                                                    <Button variant="ghost" className="text-foreground hover:text-primary hover:bg-foreground/5 font-bold p-0 h-auto w-full justify-between group-hover:px-2 transition-all">
                                                                        {t(`${B}.getBlueprint`)} <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                                                    </Button>
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </TabsContent>
                                ))}
                            </Tabs>
                        </div>
                    </section>
                )
            }

            {/* --- PRICING & ROI --- */}
            <section className="py-24 bg-secondary/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-purple-600/10 blur-[100px]" />

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                                {t(`${B}.pricePre`)} <br />
                                <span className="text-muted-foreground">{t(`${B}.priceAccent`)}</span>
                            </h2>
                            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                                {t(`${B}.priceDesc`, { name: cityData.name })}
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 p-4 rounded-2xl bg-foreground/5 border border-foreground/10">
                                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                        <DollarSign className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-foreground">{t(`${B}.lowCostTitle`)}</h4>
                                        <p className="text-sm text-muted-foreground">{t(`${B}.lowCostDesc`, { price: cityData.currency === 'INR' ? '₹15,000' : '$200' })}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 rounded-2xl bg-foreground/5 border border-foreground/10">
                                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                                        <Rocket className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-foreground">{t(`${B}.liveTitle`)}</h4>
                                        <p className="text-sm text-muted-foreground">{t(`${B}.liveDesc`)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Cost Calculator Card */}
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-3xl blur opacity-30" />
                            <div className="relative glass-intense rounded-3xl p-8 border border-foreground/20">
                                <div className="text-center mb-8">
                                    <p className="text-sm text-muted-foreground uppercase tracking-widest">{t(`${B}.investBreakdown`)}</p>
                                    <div className="text-5xl font-bold text-foreground mt-2">{cityData.currency === 'INR' ? '₹15,000' : '$200'}</div>
                                    <p className="text-green-400 text-sm mt-1">{t(`${B}.limitedOffer`, { name: cityData.name })}</p>
                                </div>

                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between text-sm py-3 border-b border-foreground/10">
                                        <span className="text-muted-foreground">{t(`${B}.androidApp`)}</span>
                                        <span className="text-foreground font-bold">{t(`${B}.included`)}</span>
                                    </div>
                                    <div className="flex justify-between text-sm py-3 border-b border-foreground/10">
                                        <span className="text-muted-foreground">{t(`${B}.adminDash`)}</span>
                                        <span className="text-foreground font-bold">{t(`${B}.included`)}</span>
                                    </div>
                                    <div className="flex justify-between text-sm py-3 border-b border-foreground/10">
                                        <span className="text-muted-foreground">{t(`${B}.serverSetup`)}</span>
                                        <span className="text-foreground font-bold">{t(`${B}.included`)}</span>
                                    </div>
                                    <div className="flex justify-between text-sm py-3 border-b border-foreground/10">
                                        <span className="text-muted-foreground">{t(`${B}.playStore`)}</span>
                                        <span className="text-foreground font-bold">{t(`${B}.included`)}</span>
                                    </div>
                                </div>

                                <Link href="/services/business-app-catalog">
                                    <Button className="w-full h-12 rounded-xl text-lg font-bold bg-foreground text-background hover:bg-foreground/90">
                                        {t(`${B}.browseApps`)}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- ENTERPRISE SERVICES SECTION (NEW) --- */}
            <section className="py-24 bg-background relative">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-purple-500 font-bold tracking-widest uppercase text-sm">{t(`${B}.beyondApps`)}</span>
                        <h2 className="text-3xl md:text-5xl font-display font-bold mt-2 mb-6 text-foreground">
                            {t(`${B}.completeIT`, { name: cityData.name })}
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8">
                            {t(`${B}.completeITdesc`, { name: cityData.name })}
                        </p>

                        {/* Popular Services Tags (SEO Rich) */}
                        <div className="flex flex-wrap justify-center gap-3">
                            {trendData.popularServices.slice(0, 5).map((service, idx) => (
                                <span key={idx} className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium">
                                    <Cpu className="w-3 h-3 inline mr-2 text-purple-400" />
                                    {service.title}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {trendData.popularServices.map((service, idx) => {
                            const Icon = ICON_MAP[service.icon] || Cpu;

                            return (
                                <div key={idx} className="p-8 rounded-3xl bg-foreground/5 border border-foreground/10 hover:border-primary/50 transition-colors group h-full flex flex-col">
                                    <Icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
                                    <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                                    <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                                    <WhatsAppInquiryDialog
                                        appName={service.title}
                                        locationName={cityData.name}
                                        title={`Inquire about ${service.title}`}
                                        trigger={
                                            <Button variant="link" className="text-primary font-bold hover:underline p-0 h-auto justify-start">
                                                {t(`${B}.requestQuote`)} &rarr;
                                            </Button>
                                        }
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
                {/* --- PROCESS AUTOMATION SECTION --- */}
                <section className="py-24 bg-secondary/20 border-t border-border">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-purple-500/30 mb-6">
                                    <Bot className="w-4 h-4 text-purple-400 mr-2" />
                                    <span className="text-sm font-bold text-purple-400 tracking-wide uppercase">{t(`${B}.autoEyebrow`)}</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-foreground leading-tight">
                                    {t(`${B}.autoTitlePre`)} <br />
                                    <span className="text-muted-foreground">{t(`${B}.autoAccent`)}</span>
                                </h2>
                                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                                    {t(`${B}.autoDesc`, { name: cityData.name })}
                                </p>

                                <ul className="space-y-4 mb-8">
                                    {(t(`${B}.autoList`, { returnObjects: true }) as string[]).map((item, i) => (
                                        <li key={i} className="flex items-center text-muted-foreground">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <WhatsAppInquiryDialog
                                    appName="Automation Consultation"
                                    locationName={cityData.name}
                                    title="Automate My Business"
                                    trigger={
                                        <Button className="h-12 px-8 rounded-full text-lg font-bold bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-900/20">
                                            {t(`${B}.autoBtn`)} <ArrowRight className="ml-2 w-5 h-5" />
                                        </Button>
                                    }
                                />
                            </div>
                            <div className="relative">
                                <div className="absolute inset-0 bg-purple-600/20 rounded-3xl blur-3xl animate-pulse" />
                                <div className="relative glass-intense rounded-3xl p-8 border border-foreground/10">
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between p-4 rounded-xl bg-foreground/5 border border-foreground/5">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400"><DollarSign className="w-5 h-5" /></div>
                                                <div>
                                                    <p className="text-sm text-muted-foreground">{t(`${B}.dashPayroll`)}</p>
                                                    <p className="font-bold text-foreground">{t(`${B}.dashAutomated`)}</p>
                                                </div>
                                            </div>
                                            <span className="text-xs text-green-400 px-2 py-1 rounded bg-green-500/10">{t(`${B}.dashSaved`)}</span>
                                        </div>
                                        <div className="flex items-center justify-between p-4 rounded-xl bg-foreground/5 border border-foreground/5">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400"><Bot className="w-5 h-5" /></div>
                                                <div>
                                                    <p className="text-sm text-muted-foreground">{t(`${B}.dashQueries`)}</p>
                                                    <p className="font-bold text-foreground">{t(`${B}.dashAiHandled`)}</p>
                                                </div>
                                            </div>
                                            <span className="text-xs text-green-400 px-2 py-1 rounded bg-green-500/10">{t(`${B}.dashActive`)}</span>
                                        </div>
                                        <div className="flex items-center justify-between p-4 rounded-xl bg-foreground/5 border border-foreground/5">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400"><TrendingUp className="w-5 h-5" /></div>
                                                <div>
                                                    <p className="text-sm text-muted-foreground">{t(`${B}.dashSales`)}</p>
                                                    <p className="font-bold text-foreground">{t(`${B}.dashSync`)}</p>
                                                </div>
                                            </div>
                                            <span className="text-xs text-green-400 px-2 py-1 rounded bg-green-500/10">{t(`${B}.dashZero`)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            {/* --- TRUST SIGNALS --- */}
            <section className="py-24 bg-background border-t border-border">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-display font-bold mb-12">{t(`${B}.trustTitle`, { name: cityData.name })}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Abstract Logos */}
                        <div className="flex items-center justify-center gap-2"><Globe className="w-8 h-8" /> <span className="text-xl font-bold">TechCorp</span></div>
                        <div className="flex items-center justify-center gap-2"><Building2 className="w-8 h-8" /> <span className="text-xl font-bold">UrbanEst</span></div>
                        <div className="flex items-center justify-center gap-2"><TrendingUp className="w-8 h-8" /> <span className="text-xl font-bold">GrowFast</span></div>
                        <div className="flex items-center justify-center gap-2"><ShieldCheck className="w-8 h-8" /> <span className="text-xl font-bold">SecureIt</span></div>
                    </div>
                </div>
            </section>

            {/* --- CTA --- */}
            <section className="py-24 bg-primary text-primary-foreground text-center px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">
                        {t(`${B}.ctaTitle`, { name: cityData.name })}
                    </h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                        {t(`${B}.ctaDesc`, { name: cityData.name })}
                    </p>
                    <WhatsAppInquiryDialog
                        appName="Project Inquiry"
                        locationName={cityData.name}
                        title="Start Your Project"
                        trigger={
                            <Button className="h-16 px-12 rounded-full text-xl font-bold bg-white text-primary hover:bg-gray-100 shadow-2xl">
                                {t(`${B}.startProject`)} <ArrowRight className="ml-2 w-6 h-6" />
                            </Button>
                        }
                    />
                </div>
            </section>

            {/* Sibling cities (other locations we serve in the same country) */}
            {(() => {
                const siblings = globalLocations
                    .filter(c => c.slug !== cityData.slug && c.country === cityData.country)
                    .slice(0, 6);
                if (siblings.length === 0) return null;
                return (
                    <section className="py-20 bg-background border-t border-border">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex items-end justify-between mb-10 gap-6 flex-wrap">
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">{t(`${B}.nearbyEyebrow`)}</p>
                                    <h2 className="text-3xl md:text-4xl font-display font-bold">{t(`${B}.nearbyTitle`, { country: cityData.country })}</h2>
                                </div>
                                <Link href="/services" className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1">
                                    {t(`${B}.seeAll`)} <ArrowRight className="w-4 h-4" aria-hidden="true" />
                                </Link>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                                {siblings.map(s => (
                                    <Link
                                        key={s.slug}
                                        href={`/location/${s.slug}`}
                                        className="rounded-xl border border-border/60 hover:border-primary/40 bg-card/50 hover:bg-card transition-all p-4 text-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                    >
                                        <MapPin className="w-4 h-4 mx-auto mb-2 text-primary" aria-hidden="true" />
                                        <span className="text-sm font-medium block group-hover:text-primary transition-colors">{s.name}</span>
                                        {s.state && <span className="text-xs text-muted-foreground block mt-0.5">{s.state}</span>}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                );
            })()}
        </div >
    );
}
