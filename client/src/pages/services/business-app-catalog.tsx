import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    MessageSquare, Laptop, ShoppingBag, BookOpen, User, Cpu, ArrowRight,
    CheckCircle2, ShieldCheck, Layers, Info, MapPin, Building2, Phone, Target,
    Store, Truck, Utensils, Car, Wrench, GraduationCap, Shirt, Smartphone,
    Home, Gift, Briefcase, Camera, Music, Video, Gamepad2, Coffee, Plane,
    Hammer, Stethoscope, Pill, Ticket, Map, Palette, Code, Database,
    Cloud, Wifi, Landmark, Briefcase as WorkIcon, Gem, Crown, Rocket,
    Fish, Carrot, Milk, Warehouse, Armchair, MonitorPlay, HeartHandshake, Newspaper, Copy,
    ChevronDown, HelpCircle, Star, Lightbulb, SprayCan, Sun
} from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";

// SEO Imports
import SEO from "@/components/seo";
import FAQSchema from "@/components/seo/faq-schema";
import BreadcrumbSchema from "@/components/seo/breadcrumb-schema";

// Centralized catalog data + helpers (removes ~400 lines of duplicate definitions)
import { allApps, commonTechStack, getFeatures, getIconForApp, type AppIdea } from "@/data/business-apps";

// --- SEO Data ---

const faqs = [
    {
        question: "How much does it cost to start a business application?",
        answer: "With Cehpoint's catalog solutions, you can start your own business app for as low as ₹15,000. This includes a fully functional Progressive Web App (PWA), admin panel, and deployment. There are no hidden monthly fees for the software itself."
    },
    {
        question: "Do I need coding knowledge to run these apps?",
        answer: "No, absolutely not. All our apps come with a user-friendly Admin Dashboard. You can manage products, orders, users, and payments without writing a single line of code. We also provide training videos."
    },
    {
        question: "How long does it take to launch my app?",
        answer: "Since these are pre-built, optimized solutions, we can launch your branded app in as little as 3-5 days. Customizations might take a bit longer depending on your requirements."
    },
    {
        question: "What is the tech stack used?",
        answer: "We use modern, scalable technologies: React Native for the PWA (Progressive Web App) ensuring it works on both Android and iOS, and Google Firebase for a secure, real-time backend database."
    },
    {
        question: "Can I customize the app later?",
        answer: "Yes! Our solutions are scalable. You can start with the base features and request custom add-ons or design changes as your business grows. We offer full development support."
    }
];

const breadcrumbItems = [
    { name: "Home", url: "https://www.cehpoint.co.in" },
    { name: "Services", url: "https://www.cehpoint.co.in/services" },
    { name: "Business App Catalog", url: "https://www.cehpoint.co.in/services/business-app-catalog" }
];

// --- Visual Generation System ---

const GRADIENTS = [
    "from-blue-600 to-indigo-600",
    "from-emerald-500 to-teal-600",
    "from-orange-500 to-red-600",
    "from-purple-600 to-pink-600",
    "from-cyan-500 to-blue-600",
    "from-rose-500 to-orange-500",
    "from-amber-400 to-orange-500",
    "from-fuchsia-600 to-purple-600",
    "from-lime-500 to-green-600",
    "from-sky-500 to-indigo-500",
    "from-violet-600 to-fuchsia-600",
    "from-indigo-500 to-purple-500",
    "from-pink-500 to-rose-500",
    "from-teal-400 to-emerald-500",
    "from-blue-500 to-cyan-400"
];

const PATTERNS = [
    "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
    "linear-gradient(45deg, rgba(255,255,255,0.05) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.05) 75%, transparent 75%, transparent)",
    "repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 2px, transparent 2px, transparent 10px)",
    "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.15) 0%, transparent 50%)",
    "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 100%)"
];

const getGradient = (id: number) => GRADIENTS[id % GRADIENTS.length];
const getPattern = (id: number) => PATTERNS[id % PATTERNS.length];

const AppVisual = ({ id, title, icon, image, className = "h-40" }: { id: number, title: string, icon: JSX.Element, image?: string, className?: string }) => {
    const gradient = getGradient(id);
    const pattern = getPattern(id);

    if (image) {
        return (
            <div className={`relative w-full ${className} overflow-hidden rounded-t-xl group transition-all duration-300`}>
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                <div className="absolute top-3 right-3 bg-black/20 backdrop-blur-md p-2 rounded-xl border border-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="scale-75 text-white">
                        {icon}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={`relative w-full ${className} overflow-hidden rounded-t-xl bg-gradient-to-br ${gradient} flex flex-col items-center justify-center p-6 group transition-all duration-300`}>
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-30" style={{ backgroundImage: pattern, backgroundSize: '20px 20px' }} />

            {/* Glossy Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-white/10 to-transparent rotate-45 pointer-events-none" />

            {/* Icon & Content */}
            <div className="relative z-10 flex flex-col items-center gap-3 transform group-hover:scale-110 transition-transform duration-300">
                <div className="bg-foreground/20 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-foreground/20">
                    {/* Make icon larger via cloneElement or wrapper */}
                    <div className="scale-150 text-white">
                        {icon}
                    </div>
                </div>
                <h3 className="text-white font-bold text-lg text-center leading-tight drop-shadow-md opacity-0 group-hover:opacity-100 absolute -bottom-8 transition-all duration-300 translate-y-4 group-hover:translate-y-0 w-max max-w-[200px]">
                    {title}
                </h3>
            </div>

            {/* Floating particles/shapes for extra dynamism (randomized by ID) */}
            <div className={`absolute top-4 left-4 w-12 h-12 rounded-full bg-foreground/5 blur-xl animate-pulse delay-${(id % 3) * 100}`} />
            <div className={`absolute bottom-4 right-4 w-20 h-20 rounded-full bg-black/5 blur-xl`} />
        </div>
    );
};

const AppIconBox = ({ id, title, category }: { id: number, title: string, category: string }) => {
    return (
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${getGradient(id)} shadow-lg flex items-center justify-center shrink-0`}>
            {getIconForApp(title, category)}
        </div>
    );
};

// AppIdea, commonTechStack, getFeatures, getIconForApp, allApps are now imported from @/data/business-apps above.

const categories = [
    "Local & Daily-Need",
    "Service-Based",
    "Education & Skill",
    "Selling & Reselling",
    "Digital & Modern"
];

const categoryDescriptions: Record<string, string> = {
    "Local & Daily-Need": "High-frequency daily essentials and hyper-local delivery services.",
    "Service-Based": "On-demand home services and professional consultations.",
    "Education & Skill": "platforms for coaching classes, tutors, and learning management.",
    "Selling & Reselling": "E-commerce solutions for boutiques, shops, and resellers.",
    "Digital & Modern": "New-age digital businesses, content platforms, and aggregators."
};

// Local allApps removed — now imported from @/data/business-apps (see top of file)



function AppDetailDialog({ app, children }: { app: AppIdea, children: React.ReactNode }) {
    const { toast } = useToast();

    const handleCopyInput = () => {
        const textToCopy = `*App Idea: ${app.title}*
Category: ${app.category}
Description: ${app.description}

*Business Objective:*
${app.objective}

*Business Vision:*
${app.businessIdea || "N/A"}

*Key Market Advantage:*
${app.whyThisApp}

*Core Features:*
${app.features.join(", ")}`.trim();

        navigator.clipboard.writeText(textToCopy);
        toast({
            title: "Copied to clipboard",
            description: "App details copied successfully!",
        });
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                {app.icon}
                            </div>
                            <div>
                                <DialogTitle className="text-2xl">{app.title}</DialogTitle>
                                <Badge variant="secondary" className="mt-1">{app.category}</Badge>
                            </div>
                        </div>
                        <Button variant="ghost" size="icon" onClick={handleCopyInput} title="Copy Details">
                            <Copy className="w-5 h-5" />
                        </Button>
                    </div>
                    <DialogDescription className="text-base text-foreground/80 pt-2">
                        {app.description}
                    </DialogDescription>
                </DialogHeader>

                <div className="grid md:grid-cols-2 gap-6 py-4">
                    <div className="space-y-6">
                        {app.businessIdea && (
                            <div className="bg-primary/5 p-4 rounded-lg space-y-2 border border-primary/10">
                                <h4 className="font-semibold flex items-center gap-2 text-primary">
                                    <Lightbulb className="w-4 h-4" /> Business Opportunity
                                </h4>
                                <p className="text-sm text-foreground/90 leading-relaxed italic">
                                    "{app.businessIdea}"
                                </p>
                            </div>
                        )}

                        <div className="bg-secondary/20 p-4 rounded-lg space-y-2">
                            <h4 className="font-semibold flex items-center gap-2 text-primary">
                                <Target className="w-4 h-4" /> Business Objective
                            </h4>
                            <p className="text-sm text-foreground/90 leading-relaxed">
                                {app.objective}
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h4 className="font-semibold flex items-center gap-2">
                                <Cpu className="w-4 h-4 text-primary" /> Key Market Advantage
                            </h4>
                            <p className="text-sm border-l-2 border-primary pl-3 italic text-muted-foreground">
                                "{app.whyThisApp}"
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h4 className="font-semibold flex items-center gap-2">
                                <Layers className="w-4 h-4 text-primary" /> Tech Stack
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {app.techStack.map(tech => (
                                    <Badge key={tech} variant="outline" className="bg-background">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-3">
                            <h4 className="font-semibold flex items-center gap-2">
                                <Info className="w-4 h-4 text-primary" /> How It Works
                            </h4>
                            <div className="text-sm bg-secondary/10 p-4 rounded-lg border border-border">
                                {app.howItWorks.split('->').map((step, i) => (
                                    <div key={i} className="flex gap-2 mb-2 last:mb-0">
                                        <span className="font-bold text-primary">{i + 1}.</span>
                                        <span>{step.trim()}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-3">
                            <h4 className="font-semibold flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-500" /> Core Features
                            </h4>
                            <ul className="space-y-2">
                                {app.features.map(feature => (
                                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" /> {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <DialogFooter className="flex-col sm:flex-row gap-3 pt-4 border-t sticky bottom-0 bg-background/95 backdrop-blur z-10">
                    <Link href="/quotation">
                        <Button size="lg" className="w-full sm:w-auto shadow-md">
                            Start {app.title} Now
                        </Button>
                    </Link>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default function BusinessAppCatalog() {
    return (
        <>
            <SEO
                title="50+ Best Business App Ideas 2025 | Profitable Startup Catalog"
                description="Discover 50+ profitable app business ideas with budget estimates. Start your own delivery, education, or service business today. Low investment, high returns."
                keywords={["business app ideas", "startup apps", "low investment business", "app development cost", "profitable small business ideas", "daily need apps", "education apps"]}
                url="https://www.cehpoint.co.in/services/business-app-catalog"
                canonical="https://www.cehpoint.co.in/services/business-app-catalog"
                image="/assets/og-catalog.jpg"
                schema={JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "ItemList",
                    "itemListElement": allApps.map((app, index) => ({
                        "@type": "ListItem",
                        "position": index + 1,
                        "item": {
                            "@type": "SoftwareApplication",
                            "name": app.title,
                            "applicationCategory": "BusinessApplication",
                            "operatingSystem": "Android, iOS, Web",
                            "offers": {
                                "@type": "Offer",
                                "price": "15000",
                                "priceCurrency": "INR"
                            },
                            "description": app.description
                        }
                    }))
                })}
            />

            <FAQSchema faqs={faqs} pageId="catalog-faq" />
            <BreadcrumbSchema items={breadcrumbItems} />

            <div className="min-h-screen bg-background pt-24 pb-12">
                {/* Banner Section */}
                <section className="relative overflow-hidden mb-16">
                    <div className="absolute inset-0 bg-primary/5 -skew-y-3 z-0 transform origin-top-left scale-110" />
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                            <div className="lg:w-1/2 space-y-6">
                                <Badge variant="outline" className="border-primary text-primary px-4 py-1 text-sm font-semibold rounded-full bg-primary/10">
                                    Business Launchpad 2025
                                </Badge>
                                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
                                    <span className="text-primary">50+ Profitable</span> <br />
                                    Business App Ideas
                                </h1>
                                <p className="text-xl text-muted-foreground max-w-lg">
                                    Launch your dream startup with our catalogue of 50+ pre-built, customizable business applications. Low investment, rapid launch, and high ranking potential.
                                </p>
                                <div className="bg-card border border-border p-6 rounded-xl shadow-lg inline-block w-full max-w-md">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-lg font-medium text-foreground">One Time Fee</span>
                                        <span className="text-2xl font-bold text-primary">Starting ₹15,000</span>
                                    </div>
                                    <div className="space-y-2 text-sm text-foreground/80">
                                        <div className="flex items-center gap-2">
                                            <ShieldCheck className="w-4 h-4 text-green-500" />
                                            <span>No Advance Payment</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            <span>No Maintenance Required</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Cpu className="w-4 h-4 text-green-500" />
                                            <span>Launch Fast</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4 pt-2">
                                    <Button
                                        size="lg"
                                        className="rounded-full px-8 shadow-lg hover:shadow-primary/25 transition-all"
                                        onClick={() => {
                                            const msg = encodeURIComponent("I am interested in starting a business app. Please guide me.");
                                            window.open(`https://wa.me/919091156095?text=${msg}`, "_blank");
                                        }}
                                    >
                                        Get Started <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                    <Link href="#apps">
                                        <Button variant="outline" size="lg" className="rounded-full px-8">
                                            View Catalog
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                            <div className="lg:w-1/2 relative bg-card p-8 rounded-2xl shadow-xl border border-border">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <Laptop className="w-5 h-5 text-primary" />
                                    Tech Stack & Support
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-2 rounded-lg text-primary">
                                            <div className="font-bold">PWA</div>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground">PWA App + Firebase Backend</h4>
                                            <p className="text-sm text-muted-foreground">Modern Progressive Web App technology ensuring performance and reliability.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-2 rounded-lg text-primary">
                                            <User className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground">Target Audience</h4>
                                            <p className="text-sm text-muted-foreground">New Entrepreneurs | Local Businesses | Side Hustles</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-2 rounded-lg text-primary">
                                            <MessageSquare className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground">Consultancy & Support</h4>
                                            <p className="text-sm text-muted-foreground">Full handholding support and consultancy to register your business if required.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SEO Content Section - Intro */}
                <section className="container mx-auto px-4 mb-20">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <h2 className="text-3xl font-bold">Why Start an App-Based Business in 2025?</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            The digital economy is booming. In 2025, maximizing your local presence through a dedicated mobile application is not just a luxury, it's a necessity.
                            Whether you are looking to digitize your existing grocery store, start a new coaching center, or launch a hyperlocal delivery service, having a robust
                            **Progressive Web App (PWA)** gives you the edge. Our catalog offers **low-investment business ideas** that are designed for high profitability and scalability.
                        </p>
                    </div>
                </section>

                {/* Catalog Section */}
                <section id="apps" className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Explore Our Catalog</h2>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                        <p className="mt-4 text-muted-foreground">Click on any card to view detailed run-down, objective and features</p>
                    </div>

                    <div className="grid gap-12">
                        {categories.map((category) => (
                            <div key={category} className="scroll-mt-24" id={category.replace(/\s+/g, '-').toLowerCase()}>
                                <div className="mb-8">
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className="h-10 w-1 bg-primary rounded-full"></div>
                                        <h3 className="text-2xl font-bold text-foreground">{category} Businesses</h3>
                                    </div>
                                    <p className="text-muted-foreground ml-5">{categoryDescriptions[category]}</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                                    {allApps
                                        .filter((app) => (category === "Local & Daily-Need" ? app.category.includes("Daily-Need") : app.category.includes(category.split(" ")[0])))
                                        .map((app, index) => (
                                            <motion.div
                                                key={app.id}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                            >
                                                <AppDetailDialog app={app}>
                                                    <div className="group relative bg-card hover:bg-secondary/20 border border-border/50 hover:border-primary/50 transition-all duration-300 rounded-3xl overflow-hidden cursor-pointer h-full flex flex-col hover:shadow-2xl hover:shadow-primary/5">

                                                        <AppVisual id={app.id} title={app.title} icon={app.icon} image={app.image} className="h-48" />

                                                        <div className="p-5 flex flex-col flex-grow">
                                                            <div className="flex items-start gap-4 mb-4">
                                                                <div className="space-y-1">
                                                                    <h4 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2">
                                                                        {app.title}
                                                                    </h4>
                                                                    <span className="inline-flex items-center text-xs font-medium text-muted-foreground bg-secondary/50 px-2 py-0.5 rounded-full">
                                                                        {app.category}
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-grow">
                                                                {app.description}
                                                            </p>

                                                            <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between">
                                                                <div className="flex -space-x-2">
                                                                    {[1, 2, 3].map(i => (
                                                                        <div key={i} className="w-6 h-6 rounded-full bg-slate-800 border-2 border-background flex items-center justify-center text-[8px] text-white font-bold">
                                                                            {["U", "V", "A"][i - 1]}
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                                <div className="text-xs font-bold text-primary flex items-center bg-primary/10 px-3 py-1.5 rounded-full group-hover:bg-primary group-hover:text-foreground transition-all">
                                                                    OPEN APP <ArrowRight className="w-3 h-3 ml-1" />
                                                                </div>
                                                            </div>

                                                            {/* Decorative 'Install' Overlay effect on hover could go here, keeping it clean for now */}
                                                        </div>
                                                    </div>
                                                </AppDetailDialog>
                                            </motion.div>
                                        ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SEO Content Section - Footer/FAQs */}
                <section className="container mx-auto px-4 mt-20 mb-12">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                            <p className="text-muted-foreground">Everything you need to know about starting your app business.</p>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                                    <details className="group">
                                        <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
                                            <h3 className="font-semibold text-lg text-foreground pr-4">{faq.question}</h3>
                                            <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform group-open:rotate-180" />
                                        </summary>
                                        <div className="px-4 pb-4 text-muted-foreground leading-relaxed border-t border-border/50 pt-2">
                                            {faq.answer}
                                        </div>
                                    </details>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="container mx-auto px-4 mt-20">
                    <div className="bg-gradient-to-r from-primary/90 to-primary text-primary-foreground rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden text-center">
                        <div className="absolute top-0 right-0 p-12 bg-foreground/10 rounded-full transform translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 p-12 bg-black/10 rounded-full transform -translate-x-1/2 translate-y-1/2 blur-2xl"></div>

                        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
                            <p className="text-lg opacity-90 mb-8">
                                Don't wait! Grab this opportunity to launch your own business with our affordable, high-quality app solutions.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    size="lg"
                                    variant="secondary"
                                    className="font-bold text-primary rounded-full px-8 shadow-lg"
                                    onClick={() => {
                                        const msg = encodeURIComponent("I want to book my app now. Please help.");
                                        window.open(`https://wa.me/919091156095?text=${msg}`, "_blank");
                                    }}
                                >
                                    Book Your App Now
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="bg-transparent border-foreground/30 text-foreground hover:bg-foreground/10 rounded-full px-8"
                                    onClick={() => {
                                        const msg = encodeURIComponent("I want to speak with an expert regarding business apps.");
                                        window.open(`https://wa.me/919091156095?text=${msg}`, "_blank");
                                    }}
                                >
                                    Contact Expert
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
