import { useRef } from "react";
import {
    Shield,
    Globe,
    Siren,
    Scale,
    Lock,
    Search,
    FileText,
    AlertTriangle,
    Eye,
    Server,
    CheckCircle,
    MessageCircle,
    Activity,
    CreditCard,
    Smartphone,
    ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CyberCrimeCalculator from "@/components/calculators/cyber-crime-calculator";
import SEO from "@/components/seo";
import ServiceSchema from "@/components/seo/service-schema";
import BreadcrumbSchema from "@/components/seo/breadcrumb-schema";

export default function CyberCrimeInvestigation() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    const clientTypes = [
        { title: "Corporates & Enterprises", icon: <BriefcaseIcon className="w-6 h-6 text-blue-400" />, items: ["Banks, NBFCs, FinTech", "IT / SaaS companies", "E-commerce & marketplaces", "Manufacturing & logistics"] },
        { title: "Government & Public Sector", icon: <Siren className="w-6 h-6 text-red-400" />, items: ["Ministries & departments", "PSUs", "Smart city authorities", "Regulatory bodies"] },
        { title: "Law Enforcement & Legal", icon: <Scale className="w-6 h-6 text-amber-400" />, items: ["Law firms", "Litigation consultants", "Police cyber cells", "Prosecutors"] },
        { title: "Individuals & HNI", icon: <UserIcon className="w-6 h-6 text-emerald-400" />, items: ["Fraud victims", "Crypto scam victims", "Identity theft cases", "Reputation damage"] },
    ];

    const scopes = [
        { title: "Financial Fraud", icon: <CreditCard className="w-10 h-10 text-rose-400" />, desc: "Banking, UPI, card, wallet fraud investigations." },
        { title: "Crypto Forensics", icon: <Lock className="w-10 h-10 text-indigo-400" />, desc: "Rug pulls, wallet tracing, and blockchain analysis." },
        { title: "Dark Web Ops", icon: <Globe className="w-10 h-10 text-purple-400" />, desc: "Monitoring and analysis of underground marketplaces." },
        { title: "Data Breaches", icon: <Server className="w-10 h-10 text-cyan-400" />, desc: "Insider threats, leaks, and industrial espionage." },
        { title: "Digital Impersonation", icon: <UserIcon className="w-10 h-10 text-yellow-400" />, desc: "Social media stalking, harassment, and deepfakes." },
        { title: "Ransomware", icon: <AlertTriangle className="w-10 h-10 text-orange-400" />, desc: "Attack analysis, negotiation support, and recovery." },
    ];

    const techStack = [
        { category: "Digital Forensics", items: ["Disk & Memory Forensics", "Mobile Forensics", "Cloud/SaaS Logs"] },
        { category: "Cyber Intelligence", items: ["Dark Web Monitoring", "OSINT & HUMINT", "Blockchain Tracing"] },
        { category: "AI & Automation", items: ["Log Analysis AI", "Pattern Detection", "Confidence Scoring"] },
        { category: "Legal Readiness", items: ["Court-Admissible Reports", "Chain-of-Custody", "ISO/NIST Aligned"] },
    ];

    return (
        <div ref={containerRef} className="min-h-screen bg-background relative overflow-hidden">
            <SEO
                title="Cyber Crime Investigation Services | Cehpoint"
                description="Professional cyber crime investigation, digital forensics, and intelligence services for corporates, government, and individuals. Global coverage."
                keywords={["cyber crime investigation", "digital forensics", "crypto tracing", "financial fraud", "dark web monitoring", "litigation support"]}
                url="https://www.cehpoint.co.in/services/cyber-crime-investigation"
            />
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "https://www.cehpoint.co.in/" },
                    { name: "Services", url: "https://www.cehpoint.co.in/services" },
                    { name: "Cyber Crime Investigation", url: "https://www.cehpoint.co.in/services/cyber-crime-investigation" }
                ]}
            />

            {/* Hero Section */}
            <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background" />

                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-8 border border-red-500/30">
                            <Siren className="w-5 h-5 text-red-500 mr-2" />
                            <span className="text-red-400 font-medium tracking-wide">On-Demand Investigation Unit</span>
                        </div>

                        <h1 className="font-display font-bold text-5xl md:text-7xl mb-8 leading-tight">
                            Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-amber-500">Cyber Intelligence</span> & Investigation Authority
                        </h1>

                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
                            We provide litigation-ready digital forensics, financial fraud tracing, and intelligence services for corporations, law enforcement, and high-net-worth individuals.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="#calculator">
                                <Button className="btn-primary h-14 px-8 text-lg rounded-full bg-red-600 hover:bg-red-700">
                                    Start Investigation
                                    <Activity className="ml-2 w-5 h-5" />
                                </Button>
                            </a>
                            <Button variant="outline" className="h-14 px-8 text-lg rounded-full glass" onClick={() => document.getElementById('expertise')?.scrollIntoView({ behavior: 'smooth' })}>
                                Explore Capabilities
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Service Positioning */}
            <section className="py-20 border-y border-white/5 bg-white/5 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {[
                            { title: "Investigation-as-a-Service", desc: "On-demand expert teams for rapid incident response." },
                            { title: "Litigation-Ready Forensics", desc: "Admissible evidence with strict chain-of-custody." },
                            { title: "Global Intelligence", desc: "Cross-border tracking and dark web infiltration." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                                <p className="text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who We Serve */}
            <section className="py-24 relative" id="expertise">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="font-display font-bold text-4xl mb-4">Who Can Hire This Service?</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {clientTypes.map((client, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5 }}
                                className="glass p-8 rounded-2xl border border-white/10"
                            >
                                <div className="mb-6 p-4 rounded-xl bg-white/5 inline-block">
                                    {client.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4">{client.title}</h3>
                                <ul className="space-y-2">
                                    {client.items.map((i, k) => (
                                        <li key={k} className="flex items-center text-sm text-gray-400">
                                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                                            {i}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Investigation Scope */}
            <section className="py-24 bg-secondary/5">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="mb-16">
                        <h2 className="font-display font-bold text-4xl mb-4">Core Investigation Domains</h2>
                        <p className="text-xl text-muted-foreground">Comprehensive coverage for modern digital threats.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {scopes.map((scope, idx) => (
                            <div key={idx} className="flex gap-4 p-6 glass rounded-xl border border-white/5 hover:border-red-500/30 transition-colors">
                                <div className="shrink-0">{scope.icon}</div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{scope.title}</h3>
                                    <p className="text-sm text-muted-foreground">{scope.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comprehensive Strategies & Services Section (New) */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-red-950/10" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="font-display font-bold text-4xl mb-4">Strategic Investigation Services</h2>
                        <p className="text-xl text-muted-foreground">Tailored intelligence & forensic roadmaps for every sector.</p>
                    </div>

                    <Tabs defaultValue="corporate" className="w-full">
                        <div className="flex justify-center mb-10">
                            <TabsList className="bg-white/5 border border-white/10 p-1 h-auto flex-wrap justify-center">
                                <TabsTrigger value="corporate" className="px-6 py-3 text-base data-[state=active]:bg-red-600 data-[state=active]:text-white">Corporate & Enterprise</TabsTrigger>
                                <TabsTrigger value="government" className="px-6 py-3 text-base data-[state=active]:bg-red-600 data-[state=active]:text-white">Government & PSUs</TabsTrigger>
                                <TabsTrigger value="legal" className="px-6 py-3 text-base data-[state=active]:bg-red-600 data-[state=active]:text-white">Legal & Law Enforcement</TabsTrigger>
                                <TabsTrigger value="individual" className="px-6 py-3 text-base data-[state=active]:bg-red-600 data-[state=active]:text-white">Individuals & HNIs</TabsTrigger>
                            </TabsList>
                        </div>

                        {/* Corporate Content */}
                        <TabsContent value="corporate" className="mt-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="p-8 rounded-2xl glass border-l-4 border-l-blue-500">
                                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                        <Briefcase className="w-6 h-6 text-blue-400" /> Corporate Counter-Measures
                                    </h3>
                                    <ul className="space-y-4">
                                        {[
                                            { title: "Insider Threat Detection", desc: "Identifying data exfiltration by disgruntled employees or moles." },
                                            { title: "Business Email Compromise (BEC)", desc: "Tracing fraudulent wire transfers and fake invoice spear-phishing." },
                                            { title: "Industrial Espionage Investigation", desc: "Detecting listening devices, hidden spyware, and competitor infiltration." },
                                            { title: "Root Cause Analysis (RCA)", desc: "Post-breach forensic analysis to determine 'Patient Zero' and entry vectors." },
                                            { title: "Employee Background Intelligence", desc: "Deep-dive OSINT checks on key personnel and potential new hires." }
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-4 items-start p-3 hover:bg-white/5 rounded-lg transition-colors">
                                                <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                                                <div>
                                                    <h4 className="font-bold text-base text-gray-200">{item.title}</h4>
                                                    <p className="text-sm text-gray-400">{item.desc}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="space-y-6">
                                    <div className="p-6 rounded-xl bg-blue-950/20 border border-blue-500/20">
                                        <h4 className="font-bold text-blue-400 mb-2">Priority Use Case: IP Theft</h4>
                                        <p className="text-sm text-gray-400 leading-relaxed">
                                            We deploy forensic agents to track stolen source code, customer lists, or trade secrets leaked to competitors. Our reports help secure court injunctions immediately.
                                        </p>
                                    </div>
                                    <div className="relative h-64 rounded-xl overflow-hidden border border-white/10 group">
                                        <div className="absolute inset-0 bg-blue-900/40 group-hover:bg-blue-900/20 transition-all duration-500" />
                                        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" alt="Corporate Boardroom" className="w-full h-full object-cover" />
                                        <div className="absolute bottom-4 left-4 font-bold text-xl text-white">Secure Your Assets</div>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        {/* Government Content */}
                        <TabsContent value="government" className="mt-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="p-8 rounded-2xl glass border-l-4 border-l-red-500">
                                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                        <Siren className="w-6 h-6 text-red-400" /> Public Sector Integrity
                                    </h3>
                                    <ul className="space-y-4">
                                        {[
                                            { title: "APT & Nation-State Defense", desc: "Hunting advanced persistent threats targeting critical infrastructure." },
                                            { title: "Financial Trail Analysis", desc: "Tracing complex money laundering networks using blockchain & bank logs." },
                                            { title: "Disinformation Forensics", desc: "Tracking origin of fake news campaigns destabilizing public order." },
                                            { title: "Encrypted Comms Interception", desc: "Technical assistance in decrypting seized devices (under legal mandate)." },
                                            { title: "Smart City Grid Security", desc: "Forensic audit of compromised IoT sensors and control systems." }
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-4 items-start p-3 hover:bg-white/5 rounded-lg transition-colors">
                                                <CheckCircle className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                                                <div>
                                                    <h4 className="font-bold text-base text-gray-200">{item.title}</h4>
                                                    <p className="text-sm text-gray-400">{item.desc}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="relative h-full rounded-2xl overflow-hidden border border-white/10">
                                    <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" alt="Cyber Command" className="w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                                    <div className="absolute bottom-6 left-6 max-w-sm">
                                        <div className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded mb-2 inline-block">CLEARANCE: CONFIDENTIAL</div>
                                        <h4 className="text-xl font-bold">National Security First</h4>
                                        <p className="text-sm text-gray-300 mt-2">We act as a force multiplier for LEAs and Cyber Cells.</p>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        {/* Legal Content */}
                        <TabsContent value="legal" className="mt-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="p-8 rounded-2xl glass border-l-4 border-l-amber-500">
                                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                        <Scale className="w-6 h-6 text-amber-400" /> Legal & Litigation Support
                                    </h3>
                                    <ul className="space-y-4">
                                        {[
                                            { title: "eDiscovery & Data Processing", desc: "Indexing terabytes of email/chat data for keyword search." },
                                            { title: "Forensic Imaging", desc: "Bit-by-bit cloning of HDDs/mobiles with hash verification (MD5/SHA256)." },
                                            { title: "Expert Witness Testimony", desc: "Simplifying technical evidence for judges and juries in court." },
                                            { title: "Cell Tower Triangulation", desc: "Corroborating alibis using detailed Call Detail Record (CDR) analysis." },
                                            { title: "Metadata Extraction", desc: "Proving document forgery through timestamps and author tags." }
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-4 items-start p-3 hover:bg-white/5 rounded-lg transition-colors">
                                                <CheckCircle className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                                                <div>
                                                    <h4 className="font-bold text-base text-gray-200">{item.title}</h4>
                                                    <p className="text-sm text-gray-400">{item.desc}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="space-y-6">
                                    <div className="p-6 rounded-xl bg-amber-950/20 border border-amber-500/20">
                                        <h4 className="font-bold text-amber-400 mb-2">Admissible Evidence Guarantee</h4>
                                        <p className="text-sm text-gray-400 leading-relaxed">
                                            All our methods adhere to Section 65B of the Indian Evidence Act. We maintain a strict Chain-of-Custody (CoC) log for every byte of data handled.
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-background/50 p-4 rounded-xl text-center border border-white/5">
                                            <div className="text-2xl font-bold text-amber-500 mb-1">100%</div>
                                            <div className="text-xs text-muted-foreground">Court Compliance</div>
                                        </div>
                                        <div className="bg-background/50 p-4 rounded-xl text-center border border-white/5">
                                            <div className="text-2xl font-bold text-amber-500 mb-1">ISO</div>
                                            <div className="text-xs text-muted-foreground">27001 Certified Labs</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        {/* Individual Content */}
                        <TabsContent value="individual" className="mt-8">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="md:col-span-2 p-8 rounded-2xl glass border-l-4 border-l-emerald-500">
                                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                        <UserIcon className="w-6 h-6 text-emerald-400" /> Private Client Protection
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        {[
                                            { title: "Crypto Scam Recovery", desc: "Tracing funds through mixers to exchanges for freeze orders." },
                                            { title: "Cyber Harassment & Stalking", desc: "Unmasking anonymous trolls and securing digital restraint orders." },
                                            { title: "Sextortion / Blackmail", desc: "Rapid takedown of sensitive content and perpetrator identification." },
                                            { title: "Device Compromise Check", desc: "Scanning personal phones/laptops for stalkerware or keyloggers." },
                                            { title: "Matrimonial Due Diligence", desc: "Discrete digital background verification before alliances." },
                                            { title: "Social Media Recovery", desc: "Assistance in recovering hacked Instagram/Facebook accounts." }
                                        ].map((item, i) => (
                                            <div key={i} className="bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors">
                                                <h4 className="font-bold text-emerald-400 mb-2 text-sm">{item.title}</h4>
                                                <p className="text-xs text-gray-400">{item.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-900/40 to-transparent border border-emerald-500/20 flex-grow">
                                        <ShieldCheck className="w-12 h-12 text-emerald-500 mb-4" />
                                        <h4 className="text-xl font-bold text-white mb-2">100% Confidential</h4>
                                        <p className="text-sm text-gray-400 mb-6">
                                            We understand the sensitivity of private matters. Your data is handled with absolute discretion.
                                        </p>
                                        <a href="#calculator">
                                            <Button variant="outline" className="w-full border-emerald-500/50 text-emerald-400 hover:bg-emerald-500 hover:text-white">
                                                Start Case Now
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>

            {/* Technology Stack Grid */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="font-display font-bold text-4xl mb-8">Advanced Forensic Technology</h2>
                            <div className="space-y-8">
                                {techStack.map((stack, idx) => (
                                    <div key={idx}>
                                        <h3 className="text-lg font-bold text-blue-400 mb-2 border-b border-blue-500/20 pb-2 inline-block">
                                            {stack.category}
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {stack.items.map((tech, k) => (
                                                <span key={k} className="px-3 py-1 text-sm bg-white/5 rounded-full border border-white/10">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-amber-500 blur-3xl opacity-10" />
                            <img
                                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop"
                                alt="Digital Forensics Lab"
                                className="rounded-2xl border border-white/10 shadow-2xl relative z-10"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Engagement Models */}
            <section className="py-20 bg-gradient-to-b from-transparent to-blue-950/20">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="font-display font-bold text-4xl mb-12 text-center">Engagement Models</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { title: "On-Demand Case", desc: "Single incident, fixed scope & timeline." },
                            { title: "Retainer Based", desc: "Monthly/Annual access to expert teams." },
                            { title: "Emergency Response", desc: "24x7 rapid deployment for live attacks." },
                            { title: "Govt / Enterprise", desc: "Large-scale intelligence & support contracts." }
                        ].map((m, i) => (
                            <div key={i} className="text-center p-6 glass rounded-xl">
                                <div className="text-4xl font-bold text-white/10 mb-4">{i + 1}</div>
                                <h3 className="text-xl font-bold mb-2">{m.title}</h3>
                                <p className="text-sm text-muted-foreground">{m.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Calculator */}
            <CyberCrimeCalculator />

            {/* Fees Table */}
            <section className="py-24">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">Standard Fee Structure</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="p-4 text-muted-foreground font-medium">Client Category</th>
                                    <th className="p-4 text-muted-foreground font-medium">Base Engagement Fee</th>
                                    <th className="p-4 text-muted-foreground font-medium">Description</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                <tr>
                                    <td className="p-4 font-bold">Individual / Victim</td>
                                    <td className="p-4 text-blue-400">₹25,000</td>
                                    <td className="p-4 text-sm text-muted-foreground">For personal fraud, harassment, or scam cases.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold">SME / Startup</td>
                                    <td className="p-4 text-blue-400">₹75,000</td>
                                    <td className="p-4 text-sm text-muted-foreground">Business email compromise, insider threats, data loss.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold">Enterprise</td>
                                    <td className="p-4 text-blue-400">₹2,50,000</td>
                                    <td className="p-4 text-sm text-muted-foreground">Full-scale breach investigation & forensics.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold">International</td>
                                    <td className="p-4 text-blue-400">$2,000</td>
                                    <td className="p-4 text-sm text-muted-foreground">Global standard investigation & cross-border intel.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Legal Disclaimer - Red Alert Style */}
            <section className="py-12 bg-red-950/20 border-y border-red-500/20">
                <div className="max-w-4xl mx-auto px-4 flex gap-6 items-start">
                    <AlertTriangle className="w-12 h-12 text-red-500 shrink-0" />
                    <div>
                        <h3 className="text-xl font-bold text-red-400 mb-2">Legal Disclaimer & Mandate</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Cehpoint Cyber Crime Investigation Services (CCIS) operates strictly as a private digital forensics and intelligence agency.
                            We are <strong>not a law enforcement agency</strong> and do not possess arrest or prosecution authority.
                            All reports provided are technical evidence to support legal proceedings. Clients are responsible for filing FIRs or legal complaints with relevant authorities.
                            We collaborate with police and legal teams solely as technical experts.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

function BriefcaseIcon({ className }: { className?: string }) {
    return <Briefcase className={className} />;
}
function UserIcon({ className }: { className?: string }) {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
}
function Briefcase({ className }: { className?: string }) {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
}
