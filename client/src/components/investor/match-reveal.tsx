import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Target, Lightbulb, Rocket, DollarSign, Users, TrendingUp, Shield, Code, Database, Zap, MessageCircle, Heart, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface Idea {
    id: string;
    title: string;
    industry: string;
    elevatorPitch: string;
    budget: string;
    profitPotential: string;
    timeToMarket: string;
    tags: string[];
    color: string;
    // Extended details
    problemStatement?: string;
    solution?: string;
    techStack?: string[];
    targetMarket?: string;
    competitiveAdvantage?: string;
    revenueModel?: string;
    faq?: { question: string; answer: string }[];
    architecture?: {
        frontend: { title: string; description: string };
        backend: { title: string; description: string };
        data: { title: string; description: string };
    };
    risks?: Array<{
        type: string;
        level: 'Low' | 'Medium' | 'High';
        mitigation: string;
    }>;
    metrics?: {
        customers: string;
        revenue: string;
        retention: string;
        breakeven: string;
    };
}

interface MatchRevealProps {
    idea: Idea;
    onProceed: () => void;
}

interface ChatMessage {
    role: 'user' | 'ai';
    content: string;
}

export default function MatchReveal({ idea, onProceed }: MatchRevealProps) {
    const [activeTab, setActiveTab] = useState("overview");

    // Professional default details if not provided by Gemini
    const problemStatement = idea.problemStatement || `In the ${idea.industry} sector, businesses struggle with inefficient manual processes that waste valuable time and resources. Current solutions are either too expensive, too complex, or don't address the core pain points effectively.`;

    const solution = idea.solution || `Our platform leverages modern technology to automate and optimize key workflows, reducing operational costs by 40-60% while improving accuracy and speed. The system integrates seamlessly with existing infrastructure and requires minimal training.`;

    const techStack = idea.techStack || ["React.js", "Node.js", "PostgreSQL", "AWS Cloud", "AI/ML APIs"];

    const targetMarket = idea.targetMarket || `Small to medium-sized businesses in India operating in the ${idea.industry} sector, with annual revenues between ₹50L-₹10Cr.`;

    const competitiveAdvantage = idea.competitiveAdvantage || "First-mover advantage in tier-2/3 cities, affordable pricing (1/3rd of competitors), built specifically for Indian business workflows, flexible customization, and local language support.";

    const revenueModel = idea.revenueModel || "SaaS subscription model: ₹5K-₹15K/month per business depending on usage tier. Additional revenue from implementation fees (₹50K-₹2L) and premium support packages.";

    const tabs = [
        { id: "overview", label: "Overview" },
        { id: "technical", label: "Technical" },
        { id: "market", label: "Market" },
        { id: "financial", label: "Financial" },
        { id: "execution", label: "Execution" },
        { id: "faq", label: "FAQ" },
    ];



    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8 md:py-12 relative">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-primary/20 blur-[120px] rounded-full -z-10 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border-primary/30 text-primary font-medium">
                    <CheckCircle className="w-5 h-5" />
                    <span>Perfect Match Found</span>
                </div>
                <h1 className="text-4xl md:text-7xl font-display font-bold mb-6 tracking-tight">
                    Investment <span className="text-gradient">Opportunity</span>
                </h1>
                <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
                    Comprehensive business plan, technical architecture, and financial projections for <span className="text-foreground font-semibold">{idea.title}</span>
                </p>
            </motion.div>

            <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <div className="flex justify-center mb-12 overflow-x-auto pb-4 scrollbar-hide">
                    <TabsList className="bg-transparent border-none p-1 gap-2 h-auto">
                        {tabs.map((tab) => (
                            <TabsTrigger
                                key={tab.id}
                                value={tab.id}
                                className="relative px-6 py-3 rounded-full text-sm font-medium transition-all data-[state=active]:text-white data-[state=active]:shadow-lg hover:text-primary"
                            >
                                {activeTab === tab.id && (
                                    <motion.div
                                        layoutId="active-tab"
                                        className="absolute inset-0 bg-primary rounded-full -z-10"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{tab.label}</span>
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Overview Tab */}
                        <TabsContent value="overview" className="space-y-8 mt-0">
                            <div className={`p-6 md:p-12 rounded-3xl bg-gradient-to-br ${idea.color} text-white shadow-2xl relative overflow-hidden`}>
                                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
                                <div className="relative z-10">
                                    <h2 className="text-3xl sm:text-5xl font-display font-bold mb-4 md:mb-6">{idea.title}</h2>
                                    <p className="text-lg sm:text-xl opacity-90 mb-10 max-w-3xl leading-relaxed">{idea.elevatorPitch}</p>

                                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                                        {[
                                            { icon: Target, label: "Industry", value: idea.industry },
                                            { icon: DollarSign, label: "Investment", value: idea.budget },
                                            { icon: TrendingUp, label: "Est. Revenue", value: idea.profitPotential },
                                            { icon: Rocket, label: "Launch", value: idea.timeToMarket }
                                        ].map((item, i) => (
                                            <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:bg-white/20 transition-colors">
                                                <item.icon className="w-6 h-6 mb-3 opacity-80" />
                                                <p className="text-xs font-medium opacity-60 uppercase tracking-wider mb-1">{item.label}</p>
                                                <p className="text-lg font-bold">{item.value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="glass-intense p-8 rounded-3xl hover-lift border-l-4 border-l-red-500">
                                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                        <div className="p-2 bg-red-500/10 rounded-lg text-red-500">
                                            <Shield className="w-6 h-6" />
                                        </div>
                                        Problem Statement
                                    </h3>
                                    <p className="text-foreground/80 leading-relaxed text-lg">{problemStatement}</p>
                                </div>

                                <div className="glass-intense p-8 rounded-3xl hover-lift border-l-4 border-l-green-500">
                                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                        <div className="p-2 bg-green-500/10 rounded-lg text-green-500">
                                            <Lightbulb className="w-6 h-6" />
                                        </div>
                                        Our Solution
                                    </h3>
                                    <p className="text-foreground/80 leading-relaxed text-lg">{solution}</p>
                                </div>
                            </div>
                        </TabsContent>

                        {/* Technical Tab */}
                        <TabsContent value="technical" className="space-y-8 mt-0">
                            <div className="glass p-8 rounded-3xl">
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <Code className="w-6 h-6 text-primary" />
                                    Technology Stack
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {techStack.map((tech, i) => (
                                        <div key={i} className="px-4 py-2 bg-secondary/50 border border-white/5 rounded-full flex items-center gap-2 hover:bg-secondary transition-colors">
                                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                                            <span className="font-medium">{tech}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="glass-intense p-8 rounded-3xl">
                                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                    <Database className="w-6 h-6 text-primary" />
                                    System Architecture
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {[
                                        {
                                            icon: Code,
                                            title: idea.architecture?.frontend.title || "Frontend Layer",
                                            desc: idea.architecture?.frontend.description || "Progressive Web App (PWA) with offline capabilities.",
                                            color: "blue"
                                        },
                                        {
                                            icon: Zap,
                                            title: idea.architecture?.backend.title || "Backend Services",
                                            desc: idea.architecture?.backend.description || "RESTful APIs with microservices architecture.",
                                            color: "purple"
                                        },
                                        {
                                            icon: Shield,
                                            title: idea.architecture?.data.title || "Data & Security",
                                            desc: idea.architecture?.data.description || "Encrypted data storage and GDPR compliance.",
                                            color: "green"
                                        }
                                    ].map((layer, i) => (
                                        <div key={i} className={`p-6 rounded-2xl bg-gradient-to-br from-${layer.color}-500/5 to-${layer.color}-500/10 border border-${layer.color}-500/20 hover:border-${layer.color}-500/40 transition-all hover:-translate-y-1`}>
                                            <div className={`w-12 h-12 rounded-xl bg-${layer.color}-500/10 text-${layer.color}-500 flex items-center justify-center mb-4`}>
                                                <layer.icon className="w-6 h-6" />
                                            </div>
                                            <h4 className="font-bold text-lg mb-2">{layer.title}</h4>
                                            <p className="text-sm text-foreground/70 leading-relaxed">{layer.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="glass p-8 rounded-3xl">
                                <h3 className="text-2xl font-bold mb-6">Development Roadmap</h3>
                                <div className="space-y-4">
                                    {["Core architecture & database design", "Feature development & API integration", "UI/UX implementation & testing", "Beta testing & bug fixes", "Deployment & client handover"].map((milestone, i) => (
                                        <div key={i} className="flex items-center gap-4 p-4 bg-secondary/30 rounded-xl border border-white/5">
                                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
                                                {i + 1}
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-medium">Phase {i + 1}</p>
                                                <p className="text-sm text-foreground/60">{milestone}</p>
                                            </div>
                                            <ChevronRight className="w-5 h-5 text-foreground/20" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </TabsContent>

                        {/* Market Tab */}
                        <TabsContent value="market" className="space-y-8 mt-0">
                            <div className="glass p-8 rounded-3xl">
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <Users className="w-6 h-6 text-primary" />
                                    Target Market
                                </h3>
                                <p className="text-lg text-foreground/80 leading-relaxed mb-8">{targetMarket}</p>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {[
                                        { value: "50,000+", label: "Potential Customers", color: "text-blue-500" },
                                        { value: "₹500Cr+", label: "Total Market Size", color: "text-green-500" },
                                        { value: "25%", label: "Annual Growth Rate", color: "text-purple-500" }
                                    ].map((stat, i) => (
                                        <div key={i} className="p-6 bg-secondary/30 rounded-2xl border border-white/5 text-center">
                                            <p className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</p>
                                            <p className="text-sm text-foreground/60 font-medium uppercase tracking-wider">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="glass-intense p-8 rounded-3xl">
                                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                    <Zap className="w-6 h-6 text-primary" />
                                    Competitive Advantage
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {competitiveAdvantage.split(',').map((item, i) => (
                                        <div key={i} className="flex items-start gap-4 p-5 bg-secondary/40 rounded-2xl border border-white/5 hover:bg-secondary/60 transition-colors">
                                            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                                                <CheckCircle className="w-4 h-4" />
                                            </div>
                                            <p className="font-medium leading-relaxed">{item.trim()}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </TabsContent>

                        {/* Financial Tab */}
                        <TabsContent value="financial" className="space-y-8 mt-0">
                            <div className="glass p-8 rounded-3xl text-center">
                                <h3 className="text-2xl font-bold mb-6">Revenue Model</h3>
                                <p className="text-xl text-foreground/90 font-medium leading-relaxed max-w-3xl mx-auto">
                                    {revenueModel}
                                </p>
                            </div>

                            <div className="glass-intense p-8 rounded-3xl border border-green-500/20 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-[80px] rounded-full -z-10" />
                                <h4 className="font-bold text-2xl mb-8 flex items-center gap-3">
                                    <TrendingUp className="w-6 h-6 text-green-500" />
                                    Financial Projections (3 Years)
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                    {[
                                        { year: "Year 1", revenue: idea.profitPotential.replace('₹', '').replace('L/yr', ''), customers: "15-20" },
                                        { year: "Year 2", revenue: parseInt(idea.profitPotential.replace('₹', '').replace('L/yr', '')) * 2.5, customers: "50-60" },
                                        { year: "Year 3", revenue: parseInt(idea.profitPotential.replace('₹', '').replace('L/yr', '')) * 5, customers: "150+" }
                                    ].map((proj, i) => (
                                        <div key={i} className={`p-6 rounded-2xl text-center ${i === 1 ? 'bg-green-500/10 border border-green-500/30 scale-105 shadow-xl' : 'bg-secondary/30 border border-white/5'}`}>
                                            <p className="text-sm text-foreground/60 mb-3 font-bold uppercase tracking-wider">{proj.year}</p>
                                            <p className="text-4xl font-bold text-green-500 mb-2">₹{proj.revenue}L</p>
                                            <p className="text-sm font-bold text-foreground">{proj.customers} customers</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="glass p-8 rounded-3xl">
                                    <h3 className="text-xl font-bold mb-6">Investment Breakdown</h3>
                                    <div className="space-y-4">
                                        {[
                                            { item: "Development & Design", amount: "40%" },
                                            { item: "Infrastructure & Hosting", amount: "15%" },
                                            { item: "Initial Marketing", amount: "20%" },
                                            { item: "Legal & Compliance", amount: "10%" },
                                            { item: "Operations Buffer", amount: "15%" }
                                        ].map((expense, i) => (
                                            <div key={i} className="flex justify-between items-center p-3 border-b border-white/5 last:border-0">
                                                <span className="font-medium">{expense.item}</span>
                                                <span className="font-bold text-primary">{expense.amount}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="glass p-8 rounded-3xl bg-blue-500/5 border-blue-500/20">
                                    <h3 className="text-xl font-bold mb-6">ROI Analysis</h3>
                                    <div className="space-y-6">
                                        <div>
                                            <p className="text-sm text-foreground/60 mb-1 font-bold uppercase tracking-wider">Break-even Period</p>
                                            <p className="text-4xl font-bold text-blue-500">6-9 Months</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-foreground/60 mb-1 font-bold uppercase tracking-wider">Expected ROI (3 Years)</p>
                                            <p className="text-4xl font-bold text-blue-500">300-500%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        {/* Execution Tab */}
                        <TabsContent value="execution" className="space-y-8 mt-0">
                            <div className="glass p-8 rounded-3xl">
                                <h3 className="text-2xl font-bold mb-6">Team Requirements</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {[
                                        { role: "Full-stack Developer", count: "2" },
                                        { role: "UI/UX Designer", count: "1" },
                                        { role: "DevOps Engineer", count: "1" },
                                        { role: "QA Tester", count: "1" }
                                    ].map((member, i) => (
                                        <div key={i} className="p-4 bg-secondary/40 rounded-xl text-center border border-white/5">
                                            <p className="font-bold text-primary text-2xl mb-1">{member.count}x</p>
                                            <p className="font-medium text-sm">{member.role}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="glass-intense p-8 rounded-3xl border-orange-500/20">
                                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                    <Shield className="w-6 h-6 text-orange-500" />
                                    Risk Assessment & Mitigation
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {(idea.risks && idea.risks.length > 0 ? idea.risks : [
                                        { type: "Market Risk", level: "Medium" as const, mitigation: "Validated through pilot program." },
                                        { type: "Technical Risk", level: "Low" as const, mitigation: "Using proven technologies." },
                                        { type: "Competition Risk", level: "Medium" as const, mitigation: "Focus on tier-2/3 cities." }
                                    ]).map((risk, i) => {
                                        const color = risk.level === 'Low' ? 'green' : risk.level === 'High' ? 'red' : 'orange';
                                        return (
                                            <div key={i} className={`p-6 rounded-2xl bg-${color}-500/5 border border-${color}-500/20 hover:bg-${color}-500/10 transition-colors`}>
                                                <div className="flex justify-between items-start mb-4">
                                                    <h4 className="font-bold text-lg">{risk.type}</h4>
                                                    <span className={`px-2 py-1 bg-${color}-500/20 text-${color}-500 text-xs font-bold rounded uppercase`}>{risk.level}</span>
                                                </div>
                                                <p className="text-sm font-medium leading-relaxed">
                                                    <span className="opacity-60">Mitigation:</span> <br />
                                                    {risk.mitigation}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="glass p-8 rounded-3xl bg-green-500/5 border-green-500/20">
                                <h3 className="text-xl font-bold mb-8 text-center">Success Metrics (Year 1)</h3>
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                                    {[
                                        { icon: Users, value: idea.metrics?.customers || "15-20", label: "Paying Customers" },
                                        { icon: DollarSign, value: idea.metrics?.revenue || idea.profitPotential.replace('/yr', ''), label: "Annual Revenue" },
                                        { icon: Heart, value: idea.metrics?.retention || "85%+", label: "Retention Rate" },
                                        { icon: TrendingUp, value: idea.metrics?.breakeven || "9 Mo", label: "Break-even" }
                                    ].map((metric, i) => (
                                        <div key={i} className="flex flex-col items-center text-center">
                                            <div className="w-12 h-12 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mb-3">
                                                <metric.icon className="w-6 h-6" />
                                            </div>
                                            <p className="text-2xl font-bold mb-1">{metric.value}</p>
                                            <p className="text-xs font-bold opacity-60 uppercase tracking-wider">{metric.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </TabsContent>

                        {/* FAQ Tab */}
                        <TabsContent value="faq" className="space-y-8 mt-0">
                            <div className="glass p-6 md:p-8 rounded-3xl min-h-[500px] flex flex-col">
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <MessageCircle className="w-6 h-6 text-primary" />
                                    Frequently Asked Questions
                                </h3>

                                <Accordion type="single" collapsible className="w-full">
                                    {idea.faq && idea.faq.map((item, i) => (
                                        <AccordionItem key={i} value={`item-${i}`} className="border-b-white/10">
                                            <AccordionTrigger className="text-lg font-medium text-left hover:text-primary transition-colors">
                                                {item.question}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                                                {item.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </TabsContent>
                    </motion.div>
                </AnimatePresence>
            </Tabs>

            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-center mt-20"
            >
                <Button
                    onClick={onProceed}
                    className="btn-primary text-xl px-12 py-8 rounded-full shadow-2xl hover:scale-105 transition-transform group"
                >
                    Review Investment Terms <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="mt-6 text-sm font-medium text-foreground/50 uppercase tracking-widest">
                    100% Equity Ownership • Zero Hidden Costs
                </p>
            </motion.div>
        </div>
    );
}
