import SEO from "@/components/seo";
import BreadcrumbSchema from "@/components/seo/breadcrumb-schema";
import { Link } from "wouter";
import {
    Users, Target, Rocket, Shield, Brain, Globe2, Award,
    HeartHandshake, Zap, ArrowRight, CheckCircle2, Building2,
    Briefcase, Cpu, GraduationCap, DollarSign, ShoppingBag
} from "lucide-react";
import { COMPANY, HQ_ADDRESS } from "@/data/contact";

const FOUNDED = COMPANY.foundingYear;
const YEARS = new Date().getFullYear() - FOUNDED;

const principles = [
    {
        icon: Shield,
        title: "Security by default",
        body: "Every line of code we ship is reviewed against the OWASP Top 10 and our internal hardening checklist. We treat your data the way a bank treats its vault.",
    },
    {
        icon: Brain,
        title: "Engineering, not buzzwords",
        body: "We don't sell jargon. Every recommendation comes with a working prototype, a real cost, and an honest tradeoff — so you can decide with eyes open.",
    },
    {
        icon: HeartHandshake,
        title: "Pay after the demo",
        body: "You see a working slice of your product before any commitment. If it doesn't earn your trust on day one, you owe us nothing.",
    },
    {
        icon: Zap,
        title: "24-hour first response",
        body: "Sales, support, security incident — somebody from our team replies within a working day, always with a name, never with a ticket bot.",
    },
];

const verticals = [
    { icon: Brain, title: "AI Solutions", href: "/ai-solutions", body: "LLM apps, RAG systems, computer vision, predictive analytics." },
    { icon: Shield, title: "Cyber Security", href: "/services/cyber-security", body: "VAPT, SOC monitoring, compliance, and incident response." },
    { icon: ShoppingBag, title: "E-commerce", href: "/services/ecommerce", body: "Conversion-grade storefronts and omnichannel commerce." },
    { icon: DollarSign, title: "Fintech", href: "/services/fintech", body: "Wallets, lending, payments, and KYC pipelines." },
    { icon: GraduationCap, title: "Edutech", href: "/services/edutech", body: "LMS, virtual classrooms, and adaptive learning." },
    { icon: Cpu, title: "Cyber Crime Investigation", href: "/services/cyber-crime-investigation", body: "Digital forensics with court-admissible reports." },
];

const milestones = [
    { year: FOUNDED, title: "Founded in Bolpur", body: "Started by ethical hackers and engineers who'd shipped at Indian banks, gov-tech, and Silicon Valley product teams." },
    { year: FOUNDED + 1, title: "First enterprise contracts", body: "Won security audits and software builds for fintech, edtech, and government clients across India." },
    { year: FOUNDED + 2, title: "Global presence", body: "Opened virtual offices across New York, London, Munich, Sydney, Dubai — supporting clients in 12+ time zones." },
    { year: FOUNDED + 3, title: "Cyber Crime Investigation Service", body: "Launched a forensics arm to support law-enforcement, HR teams, and corporate boards facing insider threats." },
    { year: FOUNDED + 4, title: "AI-IRL & Training Academy", body: "Began the public-facing AI-in-Real-Life program and partner ecosystem to spread practical AI literacy." },
];

export default function AboutPage() {
    return (
        <div className="pt-24 min-h-screen bg-background text-foreground">
            <SEO
                title="About Cehpoint — Engineering trust into every build"
                description="Cehpoint is an India-headquartered IT, AI, and cybersecurity firm engineering enterprise-grade software for startups, enterprises, and governments. Pay-after-demo, 24-hour first response."
                keywords={["About Cehpoint", "IT Company India", "AI Cybersecurity Firm", "Software Development Company", "Bolpur West Bengal IT"]}
                url="https://www.cehpoint.co.in/about"
                canonical="https://www.cehpoint.co.in/about"
            />
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "https://www.cehpoint.co.in/" },
                    { name: "About", url: "https://www.cehpoint.co.in/about" }
                ]}
            />

            {/* Hero */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10" />
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-8">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                            Since {FOUNDED} · {COMPANY.stats.projects} projects · {COMPANY.stats.industries} industries
                        </span>
                    </div>
                    <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-6 tracking-tight leading-[1.1]">
                        Engineering trust into every <span className="text-primary">product we ship</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Cehpoint is an India-headquartered IT, AI, and cybersecurity firm. We build the software, run the security, and stand behind the code — for {COMPANY.stats.projects} teams in {COMPANY.stats.industries} industries across {YEARS}+ years.
                    </p>
                    <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                        <Link
                            href="/quotation"
                            className="inline-flex items-center justify-center btn-primary px-7 py-3 rounded-full font-semibold"
                        >
                            Start a project <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                        </Link>
                        <Link
                            href="/company-profile"
                            className="inline-flex items-center justify-center btn-outline px-7 py-3 rounded-full font-semibold"
                        >
                            Download company profile
                        </Link>
                    </div>
                </div>
            </section>

            {/* Numbers */}
            <section className="py-12 border-y border-border bg-card/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {[
                        { value: COMPANY.stats.projects, label: "Projects delivered", sub: "Worldwide" },
                        { value: COMPANY.stats.industries, label: "Industries served", sub: "Hands-on expertise" },
                        { value: COMPANY.stats.clientSatisfaction, label: "Client satisfaction", sub: "Across 4 years" },
                        { value: COMPANY.stats.demoTurnaround, label: "First demo turnaround", sub: "Pay only after you approve" },
                    ].map(s => (
                        <div key={s.label} className="py-4">
                            <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">{s.value}</div>
                            <div className="text-sm font-semibold">{s.label}</div>
                            <div className="text-xs text-muted-foreground mt-0.5">{s.sub}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="rounded-3xl glass-card p-8 md:p-10">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 mb-6">
                                <Rocket className="w-6 h-6 text-primary" aria-hidden="true" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Our mission</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Make enterprise-grade software, AI, and cybersecurity accessible to every business — not only the ones with a Series B cheque. A village retailer in Birbhum and a Fortune 500 CIO in New York should both feel they got expert craft for a fair price.
                            </p>
                        </div>
                        <div className="rounded-3xl glass-card p-8 md:p-10">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-500/10 mb-6">
                                <Target className="w-6 h-6 text-blue-500" aria-hidden="true" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Our vision</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Be the partner clients call first — for the next product launch, the next compliance audit, and the next strategic bet — because we have already earned the right with the last one.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Principles */}
            <section className="py-20 bg-card/30 border-y border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">How we work</p>
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Four commitments that govern every engagement</h2>
                        <p className="text-muted-foreground">
                            These are not aspirations on a slide. They are the contract you can hold us to from the first call.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {principles.map(p => (
                            <div key={p.title} className="rounded-2xl bg-background border border-border p-6 hover:border-primary/40 transition-colors">
                                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 mb-4">
                                    <p.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                                </div>
                                <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What we do */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">What we do</p>
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">From a single landing page to a national-scale platform</h2>
                        <p className="text-muted-foreground">
                            Six core practices, one accountable team. Every project is led by a senior engineer who has shipped in production — not a sales rep with a slide deck.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {verticals.map(v => (
                            <Link
                                key={v.title}
                                href={v.href}
                                className="group rounded-2xl border border-border bg-card hover:border-primary/40 hover:bg-card transition-all p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10">
                                        <v.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" aria-hidden="true" />
                                </div>
                                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{v.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{v.body}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story / timeline */}
            <section className="py-20 bg-card/30 border-y border-border">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Our story</p>
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Built quietly, shipped consistently</h2>
                        <p className="text-muted-foreground">
                            We did not raise a funding round and announce it on stage. We took on one client, kept them, then took on the next. Four years in, that compounding is the company.
                        </p>
                    </div>
                    <ol className="relative border-l border-primary/30 ml-3 space-y-10">
                        {milestones.map(m => (
                            <li key={m.year} className="ml-6">
                                <span className="absolute -left-[7px] flex items-center justify-center w-3 h-3 rounded-full bg-primary ring-4 ring-background" />
                                <p className="text-xs font-mono text-primary mb-1">{m.year}</p>
                                <h3 className="font-semibold text-lg mb-1">{m.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{m.body}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* Where we work */}
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-10 items-start">
                        <div>
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 mb-5">
                                <Building2 className="w-6 h-6 text-primary" aria-hidden="true" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Headquartered in India, working everywhere</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                {HQ_ADDRESS.display}
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                With virtual offices across New York, London, Munich, Sydney, Dubai, and tier-1/2/3 Indian cities, we keep an engineer in your time zone — and an accountable lead in ours.
                            </p>
                        </div>
                        <div>
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 mb-5">
                                <Globe2 className="w-6 h-6 text-primary" aria-hidden="true" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Compliance, certification, recognition</h2>
                            <ul className="space-y-3 text-sm">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                                    <span>ISO 9001:2015 certified quality management</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                                    <span>GSTIN-registered Indian entity with full statutory compliance</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                                    <span>NDA-led engagements; SOC-aligned operational practices</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                                    <span>Empanelled with multiple government and PSU procurement portals</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Closing CTA */}
            <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-card border-t border-border">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Let's talk</p>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                        Tell us what you're building. We'll tell you what it costs and how fast we can ship it.
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
                        Most calls take 25 minutes. By the end of one, you'll have an honest scope, a working budget, and the name of the senior engineer who'd lead delivery.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link
                            href="/quotation"
                            className="inline-flex items-center justify-center btn-primary px-7 py-3 rounded-full font-semibold"
                        >
                            Get a proposal <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center btn-outline px-7 py-3 rounded-full font-semibold"
                        >
                            Talk to the team
                        </Link>
                        <Link
                            href="/leadership-search"
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline ml-2"
                        >
                            <Users className="w-4 h-4" aria-hidden="true" />
                            Meet our leadership
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
