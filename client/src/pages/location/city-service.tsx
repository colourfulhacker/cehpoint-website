
import { useRoute, Link } from "wouter";
import { globalLocations, GlobalLocation } from "@/data/global-locations";
import { allApps, AppIdea, getIconForApp } from "@/data/business-apps";
import { cityTrends, defaultTrend, CityTrend } from "@/data/city-trends"; // Import trends
import SEO from "@/components/seo";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, CheckCircle, CheckCircle2, Globe, Phone, Building2, TrendingUp, DollarSign, Star, Rocket, ShieldCheck, Bot, Zap, Code, Cpu, BarChart, Heart, Sun, Home } from "lucide-react";
import NotFound from "@/pages/not-found";
import { motion } from "framer-motion";
import ProjectCostEstimator from "@/components/calculators/project-cost-estimator";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { WhatsAppInquiryDialog } from "@/components/shared/whatsapp-inquiry-dialog";

export default function CityServicePage() {
    const [match, params] = useRoute("/location/:city");

    if (!match || !params?.city) { return <NotFound />; }
    const cityData = globalLocations.find(c => c.slug === params.city.toLowerCase());
    if (!cityData) { return <NotFound />; }

    // SEO Data Logic
    const trendData: CityTrend = cityTrends.find(t => t.slug === cityData.slug) || defaultTrend;
    const isDefaultTrend = trendData === defaultTrend;

    // Dynamic Hero Content (fallback to generic if no specific trend)
    const heroTitle = isDefaultTrend
        ? <span>Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-pink-500">Empire</span><br /> in {cityData.name}</span>
        : <span dangerouslySetInnerHTML={{ __html: trendData.heroTitle.replace(cityData.name, `<span class="text-primary">${cityData.name}</span>`) }} />;

    const heroSubtitle = isDefaultTrend
        ? <span>Don't just run a business. <span className="text-white font-medium">Dominate the market.</span> <br /> We provide the technology Top Startups use.</span>
        : trendData.heroSubtitle;

    // Get Recommended Apps
    const recommendedApps = cityData.recommendedAppIds
        ? allApps.filter(app => cityData.recommendedAppIds.includes(app.id))
        : allApps.slice(0, 4); // Fallback

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `Cehpoint ${cityData.name}`,
        "description": trendData.metaDescription,
        "url": `https://www.cehpoint.co.in/location/${cityData.slug}`,
        "telephone": cityData.phone,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": cityData.name,
            "addressRegion": cityData.state || cityData.name,
            "addressCountry": cityData.country
        },
        "priceRange": `${cityData.currency === 'INR' ? '₹15000' : '$200'} - ${cityData.currency === 'INR' ? '₹500000' : '$5000'}`
    };

    return (
        <div className="pt-36 min-h-screen bg-black text-white selection:bg-primary/30">
            <SEO
                title={`${trendData.heroTitle} | Cehpoint ${cityData.name}`}
                description={trendData.metaDescription}
                keywords={[...trendData.keywords, `Business App ${cityData.name}`, `App Developers ${cityData.name}`, `Software Company ${cityData.name}`, cityData.techFocus]}
                url={`https://www.cehpoint.co.in/location/${cityData.slug}`}
                schema={JSON.stringify(jsonLd)}
            />

            {/* --- HERO SECTION --- */}
            <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
                {/* Dynamic Background */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black" />
                <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:60px_60px]" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-white/10 mb-8 backdrop-blur-md">
                            <MapPin className="w-4 h-4 text-primary mr-2" />
                            <span className="text-sm font-medium tracking-wide uppercase text-gray-200">
                                Powering {cityData.name}, {cityData.state}
                            </span>
                        </div>

                        <h1 className="font-display font-bold text-5xl md:text-8xl mb-6 tracking-tight leading-tight">
                            {heroTitle}
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-10 font-light leading-relaxed">
                            {heroSubtitle}
                        </p>

                        {/* Market Trends Badges (New for SEO) */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {trendData.marketTrends.map((trend, i) => (
                                <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 transition-colors cursor-default">
                                    <TrendingUp className="w-4 h-4 text-primary" />
                                    <span className="text-sm font-medium text-gray-300">{trend.title}: <span className="text-white">{trend.stat}</span></span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            {/* Updated to use WhatsApp Dialog */}
                            <WhatsAppInquiryDialog
                                appName="Startup Launch"
                                locationName={cityData.name}
                                title="Launch Your Startup"
                                trigger={
                                    <Button className="h-14 px-8 rounded-full text-lg font-bold bg-white text-black hover:bg-gray-100 transition-transform hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                                        <Rocket className="mr-2 w-5 h-5 text-primary" /> Launch Startup
                                    </Button>
                                }
                            />

                            <WhatsAppInquiryDialog
                                appName="Custom Project"
                                locationName={cityData.name}
                                title="Get Custom Quote"
                                trigger={
                                    <Button variant="outline" className="h-14 px-8 rounded-full text-lg font-medium border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white">
                                        Get Custom Quote
                                    </Button>
                                }
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- RECOMMENDED APPS (The Core Value) --- */}
            <section id="business-ideas" className="py-24 relative bg-black">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm">Hyper-Local Opportunities</span>
                        <h2 className="text-4xl md:text-6xl font-display font-bold mt-2 mb-6">
                            Top Businesses to Start <br /> in <span className="text-gradient">{cityData.name}</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            We analyzed the {cityData.name} market and found these high-demand business ideas.
                            Start yours today for just <strong>₹15,000</strong>.
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
                                <div className="relative h-full glass-intense border border-white/10 rounded-3xl p-6 flex flex-col hover:-translate-y-2 transition-transform duration-300">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center mb-6 shadow-lg group-hover:shadow-primary/25 transition-shadow">
                                        {app.icon}
                                    </div>

                                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">{app.title}</h3>
                                    <p className="text-sm text-gray-400 mb-6 flex-grow">{app.whyThisApp}</p>

                                    <div className="mt-auto pt-6 border-t border-white/5">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">READY TO LAUNCH</span>
                                            <span className="text-lg font-bold text-white">{cityData.currency === 'INR' ? '₹15k' : '$200'}<span className="text-xs font-normal text-gray-500">/one-time</span></span>
                                        </div>
                                        <WhatsAppInquiryDialog
                                            appName={app.title}
                                            locationName={cityData.name}
                                            trigger={
                                                <Button className="w-full bg-white text-black hover:bg-gray-200 font-bold rounded-xl">
                                                    View Demo
                                                </Button>
                                            }
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- PRICING & ROI --- */}
            <section className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-purple-600/10 blur-[100px]" />

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                                Why Pay Millions? <br />
                                <span className="text-gray-400">Start Smart.</span>
                            </h2>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                Traditional agencies in {cityData.name} charge ₹1 Lakh+ for custom development.
                                We disrupted this with our <strong>Business App Catalog</strong>.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                        <DollarSign className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-white">Lowest Cost of Ownership</h4>
                                        <p className="text-sm text-gray-400">One-time payment of {cityData.currency === 'INR' ? '₹15,000' : '$200'}. No monthly royalties.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                                        <Rocket className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-white">Live in 72 Hours</h4>
                                        <p className="text-sm text-gray-400">Pre-built, tested codebases ready to deploy with your brand.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Cost Calculator Card */}
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-3xl blur opacity-30" />
                            <div className="relative glass-intense rounded-3xl p-8 border border-white/20">
                                <div className="text-center mb-8">
                                    <p className="text-sm text-gray-400 uppercase tracking-widest">Investment Breakdown</p>
                                    <div className="text-5xl font-bold text-white mt-2">{cityData.currency === 'INR' ? '₹15,000' : '$200'}</div>
                                    <p className="text-green-400 text-sm mt-1">Limited Time Offer in {cityData.name}</p>
                                </div>

                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between text-sm py-3 border-b border-white/10">
                                        <span className="text-gray-300">Android App (PWA)</span>
                                        <span className="text-white font-bold">Included</span>
                                    </div>
                                    <div className="flex justify-between text-sm py-3 border-b border-white/10">
                                        <span className="text-gray-300">Admin Dashboard</span>
                                        <span className="text-white font-bold">Included</span>
                                    </div>
                                    <div className="flex justify-between text-sm py-3 border-b border-white/10">
                                        <span className="text-gray-300">Server Setup</span>
                                        <span className="text-white font-bold">Included</span>
                                    </div>
                                    <div className="flex justify-between text-sm py-3 border-b border-white/10">
                                        <span className="text-gray-300">Play Store Upload Guide</span>
                                        <span className="text-white font-bold">Included</span>
                                    </div>
                                </div>

                                <Link href="/services/business-app-catalog">
                                    <Button className="w-full h-12 rounded-xl text-lg font-bold bg-white text-black hover:bg-gray-200">
                                        Browse All 50+ Apps
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- ENTERPRISE SERVICES SECTION (NEW) --- */}
            <section className="py-24 bg-black relative">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-purple-500 font-bold tracking-widest uppercase text-sm">Beyond Apps</span>
                        <h2 className="text-3xl md:text-5xl font-display font-bold mt-2 mb-6 text-white">
                            Complete IT Solutions in {cityData.name}
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
                            We don't just build apps. We secure them, scale them, and infuse them with AI.
                            Our full-stack services are available for enterprises in {cityData.name}.
                        </p>

                        {/* Popular Services Tags (SEO Rich) */}
                        <div className="flex flex-wrap justify-center gap-3">
                            {trendData.popularServices.slice(0, 5).map((service, idx) => (
                                <span key={idx} className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium">
                                    <Zap className="w-3 h-3 inline mr-2 text-purple-400" />
                                    {service.title}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {trendData.popularServices.map((service, idx) => {
                            const IconMap: any = {
                                code: Code, cpu: Cpu, globe: Globe, shield: ShieldCheck, zap: Zap,
                                "bar-chart": BarChart, "chart-bar": BarChart,
                                building: Building2, star: Star, heart: Heart, sun: Sun, home: Home
                            };
                            const Icon = IconMap[service.icon] || Zap;

                            return (
                                <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors group h-full flex flex-col">
                                    <Icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
                                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                                    <p className="text-gray-400 mb-6 flex-grow">{service.description}</p>
                                    <WhatsAppInquiryDialog
                                        appName={service.title}
                                        locationName={cityData.name}
                                        title={`Inquire about ${service.title}`}
                                        trigger={
                                            <Button variant="link" className="text-primary font-bold hover:underline p-0 h-auto justify-start">
                                                Request Quote &rarr;
                                            </Button>
                                        }
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
                {/* --- PROCESS AUTOMATION SECTION --- */}
                <section className="py-24 bg-gradient-to-b from-black to-gray-900 border-t border-white/5">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-purple-500/30 mb-6">
                                    <Bot className="w-4 h-4 text-purple-400 mr-2" />
                                    <span className="text-sm font-bold text-purple-400 tracking-wide uppercase">Business Process Automation</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white leading-tight">
                                    Automate Your Boring Work. <br />
                                    <span className="text-gray-400">Scale Your Business.</span>
                                </h2>
                                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                    Why hire 10 people for data entry when 1 AI Bot can do it 24/7?
                                    We build custom automation workflows for {cityData.name}'s businesses to reduce costs by 60%.
                                </p>

                                <ul className="space-y-4 mb-8">
                                    {[
                                        "Auto-Invoice Generation from WhatsApp Orders",
                                        "Customer Service Chatbots for Website",
                                        "Inventory Sync across Amazon/Flipkart",
                                        "Automated Lead Follow-ups via Email/SMS"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center text-gray-300">
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
                                            Get Automation Audit <ArrowRight className="ml-2 w-5 h-5" />
                                        </Button>
                                    }
                                />
                            </div>
                            <div className="relative">
                                <div className="absolute inset-0 bg-purple-600/20 rounded-3xl blur-3xl animate-pulse" />
                                <div className="relative glass-intense rounded-3xl p-8 border border-white/10">
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400"><DollarSign className="w-5 h-5" /></div>
                                                <div>
                                                    <p className="text-sm text-gray-400">Payroll Processing</p>
                                                    <p className="font-bold text-white">Automated</p>
                                                </div>
                                            </div>
                                            <span className="text-xs text-green-400 px-2 py-1 rounded bg-green-500/10">Saved 40hrs</span>
                                        </div>
                                        <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400"><Bot className="w-5 h-5" /></div>
                                                <div>
                                                    <p className="text-sm text-gray-400">Customer Queries</p>
                                                    <p className="font-bold text-white">AI Handled</p>
                                                </div>
                                            </div>
                                            <span className="text-xs text-green-400 px-2 py-1 rounded bg-green-500/10">24/7 Active</span>
                                        </div>
                                        <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400"><TrendingUp className="w-5 h-5" /></div>
                                                <div>
                                                    <p className="text-sm text-gray-400">Sales Reporting</p>
                                                    <p className="font-bold text-white">Real-time sync</p>
                                                </div>
                                            </div>
                                            <span className="text-xs text-green-400 px-2 py-1 rounded bg-green-500/10">Zero Errors</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            {/* --- TRUST SIGNALS --- */}
            <section className="py-24 bg-black border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-display font-bold mb-12">Trusted by {cityData.name}'s Best</h2>
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
            <section className="py-24 bg-primary text-black text-center px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">
                        {cityData.name} is Waiting.
                    </h2>
                    <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                        Your customers are searching for your service right now. Be the first to launch {cityData.name}'s next big app.
                    </p>
                    <WhatsAppInquiryDialog
                        appName="Project Inquiry"
                        locationName={cityData.name}
                        title="Start Your Project"
                        trigger={
                            <Button className="h-16 px-12 rounded-full text-xl font-bold bg-white text-primary hover:bg-gray-100 shadow-2xl">
                                Start My Project Now <ArrowRight className="ml-2 w-6 h-6" />
                            </Button>
                        }
                    />
                </div>
            </section>
        </div>
    );
}
