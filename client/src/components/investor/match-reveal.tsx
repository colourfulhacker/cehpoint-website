import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    X,
    CheckCircle,
    TrendingUp,
    Users,
    DollarSign,
    Shield,
    MessageCircle,
    ArrowRight,
    Zap,
    Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import { Idea } from "@/data/investor-ideas";

interface MatchRevealProps {
    idea: Idea;
    onProceed: () => void;
}

export default function MatchReveal({ idea, onProceed }: MatchRevealProps) {
    const [activeTab, setActiveTab] = useState("overview");

    // Fallback values if data is missing
    const problemStatement = idea.problemStatement || "Detailed problem statement not available.";
    const solution = idea.solution || "Detailed solution description not available.";
    const techStack = idea.techStack || ["React", "Node.js"];
    const targetMarket = idea.targetMarket || "General Market";
    const competitiveAdvantage = idea.competitiveAdvantage || "First mover advantage";
    const revenueModel = idea.revenueModel || "Subscription based";

    return (
        <div className="w-full max-w-4xl mx-auto pb-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-8 md:mb-16"
            >
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm font-bold mb-6 border border-green-500/20">
                    <CheckCircle className="w-4 h-4 mr-2" /> 98% Match Found
                </div>
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                    You matched with <br />
                    <span className={`bg-gradient-to-r ${idea.color} bg-clip-text text-transparent`}>
                        {idea.title}
                    </span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    {idea.elevatorPitch}
                </p>
            </motion.div>

            <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
                <div className="flex justify-center mb-8 md:mb-12 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4">
                    <TabsList className="bg-secondary/30 backdrop-blur-md border border-white/10 p-1 rounded-full h-auto inline-flex">
                        {[
                            { id: "overview", label: "Overview" },
                            { id: "financial", label: "Financials" },
                            { id: "execution", label: "Execution" },
                            { id: "faq", label: "FAQ" }
                        ].map((tab) => (
                            <TabsTrigger
                                key={tab.id}
                                value={tab.id}
                                className="relative px-4 md:px-6 py-3 rounded-full text-xs md:text-sm font-medium transition-all data-[state=active]:text-white data-[state=active]:shadow-lg hover:text-primary whitespace-nowrap"
                            >
                                {activeTab === tab.id && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-primary rounded-full -z-10"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                {tab.label}
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
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="glass p-8 rounded-3xl relative overflow-hidden group hover:border-primary/30 transition-colors">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-red-500/20 transition-colors" />
                                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                                            <X className="w-5 h-5" />
                                        </div>
                                        The Problem
                                    </h3>
                                    <p className="text-lg text-foreground/80 leading-relaxed">
                                        {problemStatement}
                                    </p>
                                </div>

                                <div className="glass p-8 rounded-3xl relative overflow-hidden group hover:border-green-500/30 transition-colors">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-green-500/20 transition-colors" />
                                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                                            <CheckCircle className="w-5 h-5" />
                                        </div>
                                        The Solution
                                    </h3>
                                    <p className="text-lg text-foreground/80 leading-relaxed">
                                        {solution}
                                    </p>
                                </div>
                            </div>

                            <div className="glass p-8 rounded-3xl">
                                <h3 className="text-2xl font-bold mb-6">Tech Stack</h3>
                                <div className="flex flex-wrap gap-3">
                                    {techStack.map((tech, i) => (
                                        <span key={i} className="px-4 py-2 rounded-xl bg-secondary/50 border border-white/5 text-sm font-medium hover:bg-primary/10 hover:border-primary/30 transition-colors cursor-default">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

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

                                {idea.faq && idea.faq.length > 0 ? (
                                    <Accordion type="single" collapsible className="w-full">
                                        {idea.faq.map((item, i) => (
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
                                ) : (
                                    <div className="flex flex-col items-center justify-center h-full text-center p-8">
                                        <p className="text-muted-foreground text-lg">No specific FAQs available for this idea yet.</p>
                                        <Button variant="link" className="mt-4 text-primary">
                                            Contact us for more details
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </TabsContent>
                    </motion.div>
                </AnimatePresence>
            </Tabs>

            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-center mt-12 md:mt-20"
            >
                <Button
                    onClick={onProceed}
                    className="w-full md:w-auto px-8 py-4 md:py-6 text-lg md:text-xl font-bold rounded-xl shadow-xl shadow-primary/20 hover:scale-105 transition-all group"
                >
                    Start Your Ownership Journey
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="mt-4 text-sm text-muted-foreground">
                    Review the complete roadmap and ownership terms
                </p>
            </motion.div>
        </div>
    );
}
