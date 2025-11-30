import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ShieldCheck, Crown, Download, MessageCircle, ArrowRight, Star } from "lucide-react";

interface Idea {
    id: string;
    title: string;
    industry: string;
    budget: string;
    profitPotential?: string;
    timeToMarket?: string;
    problemStatement?: string;
    solution?: string;
    techStack?: string[];
    targetMarket?: string;
    competitiveAdvantage?: string;
    revenueModel?: string;
}

interface FinalPitchProps {
    idea: Idea;
}

export default function FinalPitch({ idea }: FinalPitchProps) {
    // Generate comprehensive business plan text for download
    const generateBusinessPlanText = () => {
        const plan = `
INVESTMENT OPPORTUNITY - ${idea.title}
${'='.repeat(60)}

EXECUTIVE SUMMARY
-----------------
Industry: ${idea.industry}
Investment Required: ${idea.budget}
Expected Revenue (Year 1): ${idea.profitPotential || 'TBD'}
Time to Market: ${idea.timeToMarket || 'TBD'}

PROBLEM STATEMENT
-----------------
${idea.problemStatement || 'Detailed problem analysis to be discussed.'}

SOLUTION
--------
${idea.solution || 'Comprehensive solution details to be discussed.'}

TECHNOLOGY STACK
----------------
${idea.techStack ? idea.techStack.join(', ') : 'Modern web and mobile technologies'}

TARGET MARKET
-------------
${idea.targetMarket || 'Detailed market analysis to be discussed.'}

COMPETITIVE ADVANTAGE
---------------------
${idea.competitiveAdvantage || 'Unique value proposition to be discussed.'}

REVENUE MODEL
-------------
${idea.revenueModel || 'Subscription-based SaaS model with multiple revenue streams.'}

INVESTMENT TERMS
----------------
1. 100% Equity Ownership
   You own the entire product/solution with full intellectual property rights.

2. Complete Source Code
   Full access to all source code and technical documentation.

3. Comprehensive Documentation
   Technical architecture, API documentation, and user guides included.

4. Post-Launch Support
   6 months of technical support and maintenance included.

5. Production Deployment
   Fully deployed solution on your preferred infrastructure.

NEXT STEPS
----------
1. Review this business plan thoroughly
2. Schedule a detailed discussion via WhatsApp
3. Conduct due diligence and technical validation
4. Sign agreement and finalize project scope
5. Begin development and delivery

${'='.repeat(60)}
Generated on ${new Date().toLocaleDateString('en-IN')}

Cehpoint
Contact: +91 9091156095
Website: https://cehpoint.co.in
    `.trim();

        return plan;
    };

    // Download business plan as text file
    const handleDownload = () => {
        const planText = generateBusinessPlanText();
        const blob = new Blob([planText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${idea.title.replace(/\s+/g, '_')}_Business_Plan.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    // Generate WhatsApp message
    const getWhatsAppMessage = () => {
        const message = `Hi Cehpoint Team!

I'm interested in the following investment opportunity from your Investor Connect platform:

*Idea:* ${idea.title}
*Industry:* ${idea.industry}
*Investment:* ${idea.budget}

I'd like to discuss:
- Complete technical architecture
- Development timeline and milestones
- Legal agreements and IP transfer
- Payment terms

Please share more details and schedule a discussion at your earliest convenience.

Thank you!`;

        return encodeURIComponent(message);
    };

    const whatsappUrl = `https://wa.me/919091156095?text=${getWhatsAppMessage()}`;

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-16 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full -z-10 pointer-events-none" />

            <div className="text-center mb-20">
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, duration: 1 }}
                    className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700 text-white mb-8 shadow-2xl shadow-yellow-500/30"
                >
                    <Crown className="w-12 h-12 drop-shadow-md" />
                </motion.div>
                <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight">
                    The <span className="text-gradient">Final Offer</span>
                </h1>
                <p className="text-xl md:text-2xl text-foreground/60 max-w-2xl mx-auto font-light">
                    You don't just fund it. You <span className="text-foreground font-semibold">own it completely.</span>
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24 items-center">
                {/* Traditional Investment */}
                <div className="lg:col-span-1 opacity-60 hover:opacity-100 transition-all duration-500 transform hover:scale-105">
                    <div className="p-8 rounded-3xl border border-dashed border-foreground/20 bg-secondary/10 h-full relative">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-secondary text-foreground/60 text-xs font-bold uppercase tracking-widest rounded-full">
                            The Old Way
                        </div>
                        <h3 className="text-2xl font-bold mb-6 text-foreground/80 text-center">Traditional VC</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-center text-foreground/60"><span className="w-6 h-6 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center mr-3 flex-shrink-0"><Check className="w-3 h-3 rotate-45" /></span> You get 10-20% Equity</li>
                            <li className="flex items-center text-foreground/60"><span className="w-6 h-6 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center mr-3 flex-shrink-0"><Check className="w-3 h-3 rotate-45" /></span> Founders control decisions</li>
                            <li className="flex items-center text-foreground/60"><span className="w-6 h-6 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center mr-3 flex-shrink-0"><Check className="w-3 h-3 rotate-45" /></span> Dilution in future rounds</li>
                            <li className="flex items-center text-foreground/60"><span className="w-6 h-6 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center mr-3 flex-shrink-0"><Check className="w-3 h-3 rotate-45" /></span> Years to exit</li>
                        </ul>
                    </div>
                </div>

                {/* The Cehpoint Offer - Black Card Style */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="lg:col-span-2 relative z-10"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-purple-600/30 blur-[60px] -z-10 rounded-3xl" />

                    {/* Card Container */}
                    <div className="relative p-1 rounded-[2.5rem] bg-gradient-to-br from-white/20 to-white/5 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-600 to-pink-600 opacity-20 animate-pulse" />

                        <div className="bg-[#0a0a0f] rounded-[2.4rem] p-8 sm:p-12 relative overflow-hidden">
                            {/* Card Texture/Shine */}
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-b from-white/5 to-transparent blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                            <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-10 relative z-10">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-wide">The Cehpoint Model</h3>
                                        <Star className="w-6 h-6 text-yellow-400 fill-yellow-400 animate-pulse" />
                                    </div>
                                    <p className="text-primary-foreground/60 font-medium text-lg">Exclusive Offer for <span className="text-white">{idea.title}</span></p>
                                </div>
                                <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-yellow-500/20 uppercase tracking-wider flex items-center gap-2">
                                    <Crown className="w-4 h-4" /> Recommended
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 relative z-10">
                                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                    <div className="p-3 rounded-xl bg-gradient-to-br from-green-400 to-green-600 text-white shadow-lg shadow-green-500/20 flex-shrink-0">
                                        <Crown className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl text-white mb-1">100% Equity</h4>
                                        <p className="text-sm text-gray-400 leading-relaxed">You own the code, the IP, and the brand. No dilution, ever.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 text-white shadow-lg shadow-blue-500/20 flex-shrink-0">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl text-white mb-1">Zero Tech Risk</h4>
                                        <p className="text-sm text-gray-400 leading-relaxed">We build, launch, and maintain it. You focus on growth.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-white/10 pt-10 space-y-8 relative z-10">
                                <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                                    <div>
                                        <p className="text-sm text-gray-400 mb-2 uppercase tracking-wider font-medium">Total Investment Required</p>
                                        <div className="flex items-baseline gap-2">
                                            <p className="text-5xl sm:text-6xl font-bold text-white tracking-tight">{idea.budget}</p>
                                            <span className="text-sm text-gray-500 font-medium">One-time fee</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button
                                        onClick={handleDownload}
                                        variant="outline"
                                        className="flex-1 h-auto py-6 text-lg rounded-xl border-white/20 text-white hover:bg-white/10 hover:text-white transition-all"
                                    >
                                        <Download className="mr-2 w-5 h-5" /> Download Plan
                                    </Button>
                                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                                        <Button className="w-full h-auto py-6 text-lg rounded-xl bg-white text-black hover:bg-gray-100 hover:scale-[1.02] transition-all shadow-xl font-bold">
                                            <MessageCircle className="mr-2 w-5 h-5" /> Claim This Deal
                                        </Button>
                                    </a>
                                </div>

                                <p className="text-xs text-center text-gray-500">
                                    Clicking "Claim This Deal" opens WhatsApp with a prefilled message to our team
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="glass-intense rounded-[2.5rem] p-8 sm:p-12 border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                <h3 className="text-2xl sm:text-3xl font-bold mb-12 text-center">What Happens Next?</h3>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                        {[
                            { title: "WhatsApp Discussion", desc: "Initial conversation and Q&A" },
                            { title: "Due Diligence", desc: "Technical validation & planning" },
                            { title: "Agreement", desc: "Legal docs & payment terms" },
                            { title: "Development", desc: "Build, test, and deliver" }
                        ].map((step, i) => (
                            <div key={i} className="flex flex-col items-center text-center group">
                                <div className="w-16 h-16 rounded-full bg-background border-4 border-secondary group-hover:border-primary transition-colors flex items-center justify-center mb-6 shadow-xl relative">
                                    <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{i + 1}</span>
                                    {i < 3 && <div className="md:hidden absolute bottom-[-32px] left-1/2 w-0.5 h-8 bg-border -translate-x-1/2" />}
                                </div>
                                <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                                <p className="text-sm text-foreground/60">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
