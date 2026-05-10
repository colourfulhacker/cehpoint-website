import { useState, useEffect } from "react";
import { Link, useSearch } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion, AnimatePresence } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import {
    Rocket,
    GraduationCap,
    Clock,
    CheckCircle2,
    BrainCircuit,
    TrendingUp,
    Users,
    ArrowRight,
    BookOpen,
    MessageCircle,
    Crown,
    Star,
    Gem,
    ShieldCheck,
    Lightbulb,
    Target,
    Cpu,
    Globe,
    Monitor
} from "lucide-react";

// --- Visual Assets ---
// Using generated asset paths or placeholders if strict paths are needed.
// For this environment, we will refer to them by their specific concept.
const IMAGES = {
    // Helper object if we need dynamic access
};

// --- Premium Data (MIND BLOWING EDITION) ---
const premiumTrainings = [
    {
        id: 1,
        title: "The 'Zero-Touch' Operations Empire",
        price: 2499,
        problem: "Are you a Business Owner or a Glorified Employee?",
        solution: "Build a Digital Clone of Yourself.",
        image: "business_automation_ai_1768692293169.png",
        curriculum: [
            "The 'CEO Dashboard' - Control your business from a beach.",
            "Automating the 'Boring Stuff': Invoicing, Follow-ups, & Reporting.",
            "Trigger-Based Delegation: Systems that assign tasks automatically.",
            "Eliminating Human Error from your daily operations."
        ],
        outcome: "Reclaim 20 Hours/Week. Stop working IN the business, start working ON it."
    },
    {
        id: 2,
        title: "AI Sales Terminator System",
        price: 4999,
        problem: "Burning cash on leads that don't convert?",
        solution: "Deploy a 24/7 AI Sales Army.",
        image: "sales_growth_dynamic_1768692305032.png",
        curriculum: [
            "Building an Unstoppable WhatsApp AI Chatbot.",
            "Lead Scoring: Ignore the tire-kickers, focus on the buyers.",
            "Instant Quote Generation: Close deals while you sleep.",
            "The 'Never-Die' Follow-up Sequence."
        ],
        outcome: "Explosive 300% Conversion Boost. Your sales team will thank you."
    },
    {
        id: 3,
        title: "WhatsApp Revenue Engine",
        price: 1899,
        problem: "Using WhatsApp just for 'Good Morning' messages?",
        solution: "Turn Chat into Cash Flow.",
        image: "business_automation_ai_1768692293169.png", // Reuse abstract
        curriculum: [
            "Broadcast Engineering: Reach thousands without getting banned.",
            "The 'One-Click' Checkout experience inside WhatsApp.",
            "Pipeline Management with Smart Labels.",
            "Automated Order Updates & Customer Support."
        ],
        outcome: "A Direct-to-Consumer Channel that prints money on command."
    },
    {
        id: 4,
        title: "Inventory Clairvoyance",
        price: 2499,
        problem: "Dead stock eating your profits alive?",
        solution: "Predict the future with simple AI.",
        image: "business_automation_ai_1768692293169.png",
        curriculum: [
            "Digitizing your warehouse without expensive software.",
            "Demand Forecasting: Know what sells next month, today.",
            "Automated Low-Stock Alerts & Supplier Ordering.",
            "Flash-Sale Strategies for slow-moving items."
        ],
        outcome: "Zero Waste. Maximum Cash Flow. Perfect Stock Levels."
    },
    {
        id: 5,
        title: "The 'Invisible Competitor' Branding",
        price: 1899,
        problem: "Why choose you over the big guys?",
        solution: "Look like a Fortune 500 company on a startup budget.",
        image: "sales_growth_dynamic_1768692305032.png",
        curriculum: [
            "AI-Generated Content: Viral posts in seconds.",
            "Website Psychology: Design that forces trust.",
            "Automated Review Collection: Build unshakeable social proof.",
            "Omni-Channel Presence: Be everywhere, automatically."
        ],
        outcome: "Dominate your niche. specific authority that commands higher prices."
    },
    {
        id: 6,
        title: "Global Team Command Center",
        price: 3499,
        problem: "Chasing employees for updates?",
        solution: "Radical Transparency & Productivity Tracking.",
        image: "remote_team_connection_1768692335528.png",
        curriculum: [
            "GPS & Field Tracking: know where your sales team is.",
            "Digital KRA/KPIs: Gamify performance targets.",
            "The 'No-Meeting' Reporting Structure.",
            "Automated Performance Appraisals based on data."
        ],
        outcome: "A self-driving team that works harder when you aren't looking."
    },
    {
        id: 7,
        title: "Financial X-Ray Vision",
        price: 2999,
        problem: "Flying blind without financial data?",
        solution: "Real-time P&L on your smartphone.",
        image: "business_automation_ai_1768692293169.png",
        curriculum: [
            "Automated Bookkeeping: Fire your data entry tasks.",
            "Daily Profit vs. Expense naming and shaming.",
            "Cash Flow Forecasting: Never run out of money.",
            "One-Click GST Report Generation."
        ],
        outcome: "Make fearless decisions backed by hard data."
    },
    {
        id: 8,
        title: "The 'Customer Obsession' Loop",
        price: 1899,
        problem: "One-time buyers are killing your growth.",
        solution: "Automate Loyalty so they never leave.",
        image: "remote_team_connection_1768692335528.png",
        curriculum: [
            "Birthday & Anniversary Offers on Autopilot.",
            "Feedback-to-Action Systems.",
            "Digital Loyalty Points: Gamify the purchase.",
            "The 'We Miss You' Reactivation Campaign."
        ],
        outcome: "Double your Lifetime Value (LTV). It's cheaper to keep them."
    },
    {
        id: 9,
        title: "Iron-Clad Cyber Fortress",
        price: 3999,
        problem: "One hack could wipe you out.",
        solution: "Bank-Grade Security for Small Business.",
        image: "cyber_security_fortress_1768692319996.png",
        curriculum: [
            "Ransomware Proofing your critical data.",
            "Employee Access Control: Zero Trust Architecture.",
            "Automated Encrypted Backups.",
            "Social Engineering Defense Training."
        ],
        outcome: "Sleep peacefully. Your empire is untouchable."
    },
    {
        id: 10,
        title: "The 2030 Future-Proof Strategy",
        price: 9999, // Premium High Ticket
        problem: "Will your business exist in 5 years?",
        solution: "Adopt AI or Die.",
        image: "business_automation_ai_1768692293169.png",
        curriculum: [
            "Industry-Specific AI Disruption Radar.",
            "Cost-Benefit Analysis of Emerging Tech.",
            "The 5-Year Roadmap: From Survival to Domination.",
            "Building an Agile, Tech-First Culture."
        ],
        outcome: "Stay 5 years ahead. Be the disruptor, not the disrupted."
    },
];

import SEO from "@/components/seo";

// ... existing imports

export default function Training() {
    const searchString = useSearch();
    const [activeTab, setActiveTab] = useState("entrepreneurs");
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [bookingType, setBookingType] = useState<"entrepreneur" | "student" | "premium">("entrepreneur");
    const [selectedPremiumTraining, setSelectedPremiumTraining] = useState<string>("");

    // Parse query params
    const getParams = () => {
        const params = new URLSearchParams(searchString);
        return {
            type: params.get("type") // 'business' or 'student'
        };
    };

    const { type } = getParams();
    const isSpecificView = !!type;

    useEffect(() => {
        if (type === "student") {
            setActiveTab("students");
        } else if (type === "business" || type === "entrepreneur") {
            setActiveTab("entrepreneurs");
        }
    }, [type]);

    // Form State
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        companyName: "",
        industry: "",
        collegeName: "",
        yearOfStudy: "",
        areaOfInterest: ""
    });

    const handleOpenBooking = (type: "entrepreneur" | "student" | "premium", trainingTitle?: string) => {
        setBookingType(type);
        if (trainingTitle) setSelectedPremiumTraining(trainingTitle);
        setIsBookingOpen(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleWhatsAppRedirect = (e: React.FormEvent) => {
        e.preventDefault();

        // 1. Construct the Data Payload (Machine Readable)
        let curriculum: string[] = [];
        let trainingTitle = "";
        let price = "";

        if (bookingType === "premium") {
            const training = premiumTrainings.find(t => t.title === selectedPremiumTraining);
            if (training) {
                curriculum = training.curriculum;
                trainingTitle = training.title;
                price = training.price.toString();
            }
        } else if (bookingType === "entrepreneur") {
            trainingTitle = "Business Growth Session (Free)";
            curriculum = ["Business Audit", "AI Introduction", "Process Optimization"]; // Default context
        } else {
            trainingTitle = "Student Cohort Application";
            curriculum = ["Future Tech Skills", "Internship Opportunity"]; // Default context
        }

        const payload = {
            source: "cehpoint_website_training",
            timestamp: new Date().toISOString(),
            type: bookingType,
            training: trainingTitle,
            price: price,
            user_data: formData,
            curriculum_context: curriculum
        };

        let encodedPayload = "";
        try {
            encodedPayload = btoa(JSON.stringify(payload));
        } catch (err) {
            console.error("Payload encoding failed", err);
            encodedPayload = "ERROR_ENCODING_PAYLOAD";
        }

        // 2. Construct the Message (Human Readable)
        let message = "";

        if (bookingType === "premium") {
            message = `*PREMIUM TRAINING APPLICATION*\n` +
                `--------------------------------\n` +
                `*Course:* ${trainingTitle}\n` +
                `*Price:* ₹${price}\n` +
                `--------------------------------\n` +
                `*APPLICANT DETAILS:*\n` +
                `*Name:* ${formData.name}\n` +
                `*Company:* ${formData.companyName}\n` +
                `*Phone:* ${formData.phone}\n` +
                `*Email:* ${formData.email}\n` +
                `--------------------------------\n` +
                `*DIGITAL_PAYLOAD (System Use):*\n` +
                `${encodedPayload}\n` +
                `--------------------------------\n` +
                `_ready to proceed with payment_`;

        } else if (bookingType === "entrepreneur") {
            message = `*BUSINESS SESSION BOOKING*\n` +
                `--------------------------------\n` +
                `*Type:* ${trainingTitle}\n` +
                `--------------------------------\n` +
                `*APPLICANT DETAILS:*\n` +
                `*Name:* ${formData.name}\n` +
                `*Company:* ${formData.companyName}\n` +
                `*Industry:* ${formData.industry}\n` +
                `*Phone:* ${formData.phone}\n` +
                `*Email:* ${formData.email}\n` +
                `--------------------------------\n` +
                `*DIGITAL_PAYLOAD:*\n${encodedPayload}\n` +
                `--------------------------------`;
        } else {
            message = `*STUDENT COHORT APPLICATION*\n` +
                `--------------------------------\n` +
                `*Interest:* ${formData.areaOfInterest}\n` +
                `*Year:* ${formData.yearOfStudy}\n` +
                `--------------------------------\n` +
                `*APPLICANT DETAILS:*\n` +
                `*Name:* ${formData.name}\n` +
                `*College:* ${formData.collegeName}\n` +
                `*Phone:* ${formData.phone}\n` +
                `*Email:* ${formData.email}\n` +
                `--------------------------------\n` +
                `*DIGITAL_PAYLOAD:*\n${encodedPayload}\n` +
                `--------------------------------`;
        }

        const whatsappUrl = `https://wa.me/919091156095?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        setIsBookingOpen(false);
    };

    // Generate Schema for Premium Trainings
    const courseSchema = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": premiumTrainings.map((course, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "Course",
                "name": course.title,
                "description": course.solution + " " + course.outcome,
                "provider": {
                    "@type": "Organization",
                    "name": "Cehpoint",
                    "sameAs": "https://www.cehpoint.co.in"
                },
                "offers": {
                    "@type": "Offer",
                    "category": "Paid",
                    "price": course.price,
                    "priceCurrency": "INR"
                }
            }
        }))
    });

    return (
        <div className="min-h-screen bg-background text-foreground">
            <SEO
                title="Business Automation & AI Training"
                description="Master business automation, AI sales systems, and cyber security with Cehpoint's premium training for entrepreneurs and students. Live implementation via Google Meet."
                keywords={["Business Automation Training", "AI Course India", "Entrepreneur Mentorship", "Sales Automation", "Cyber Security Training", "Cehpoint Academy"]}
                schema={courseSchema}
            />

            {/* Premium Background Elements */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-purple-500/10 blur-[100px] rounded-full" />
                <div className="absolute -bottom-[5%] left-[20%] w-[35%] h-[35%] bg-yellow-500/5 blur-[130px] rounded-full" />
            </div>

            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-background to-background" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1.5 text-sm border-primary/20 backdrop-blur-md shadow-sm">
                            {activeTab === "entrepreneurs" ? "Business Growth Hub" : "Student Career Launchpad"}
                        </Badge>
                    </motion.div>
                    
                    <motion.h1 
                        className="font-display font-bold text-5xl md:text-8xl mb-6 tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        {activeTab === "entrepreneurs" ? "Solve Real Business Problems" : "Fast-Track Your Career"} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 pb-2">
                            {activeTab === "entrepreneurs" ? "With Technology" : "With Future Tech"}
                        </span>
                    </motion.h1>
                    
                    <motion.p 
                        className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {activeTab === "entrepreneurs"
                            ? "From free automation audits to premium hand-holding implementation sessions."
                            : "Learn high-demand skills like AI and Cloud that colleges miss."}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-6"
                    >
                        <div className="flex items-center gap-3 px-5 py-2.5 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                            <Users className="w-5 h-5 text-blue-400" />
                            <span className="text-sm font-medium">5000+ Students Trained</span>
                        </div>
                        <div className="flex items-center gap-3 px-5 py-2.5 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                            <span className="text-sm font-medium">4.9/5 Rating</span>
                        </div>
                        <div className="flex items-center gap-3 px-5 py-2.5 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                            <span className="text-sm font-medium">100% Practical</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-20 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Monitor className="w-8 h-8 text-yellow-500" />,
                                title: "Live Implementation",
                                desc: "No passive videos. We build systems together on live calls (Zoom/Meet)."
                            },
                            {
                                icon: <BrainCircuit className="w-8 h-8 text-blue-500" />,
                                title: "AI-First Approach",
                                desc: "Learn to leverage Gen-AI for coding, marketing, and business automation."
                            },
                            {
                                icon: <Target className="w-8 h-8 text-purple-500" />,
                                title: "Job-Ready Outcomes",
                                desc: "Our students work on real-world projects that get them hired instantly."
                            }
                        ].map((feature, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group p-8 rounded-3xl bg-secondary/20 border border-white/5 hover:border-primary/20 hover:bg-secondary/30 transition-all duration-300"
                            >
                                <div className="mb-4 p-3 w-fit rounded-2xl bg-background/50 border border-white/5 shadow-inner">
                                    <Monitor className="w-8 h-8 text-yellow-500" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Live Implementation</h3>
                                <p className="text-muted-foreground leading-relaxed">No passive videos. We build systems together on live calls (Zoom/Meet).</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 bg-background relative z-10 -mt-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                        {/* Only show TabsList if NO specific type is requested */}
                        {!isSpecificView && (
                            <div className="flex justify-center mb-12">
                                <TabsList className="grid w-full max-w-md grid-cols-2 p-1 bg-secondary/30 backdrop-blur-md rounded-full">
                                    <TabsTrigger
                                        value="entrepreneurs"
                                        className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white"
                                    >
                                        For Entrepreneurs
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="students"
                                        className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
                                    >
                                        For Students
                                    </TabsTrigger>
                                </TabsList>
                            </div>
                        )}

                        {/* Entrepreneurs Content */}
                        <TabsContent value="entrepreneurs" className="space-y-20 animate-in fade-in slide-in-from-bottom-4 duration-500">

                            {/* PREMIUM SECTION */}
                            <div className="relative rounded-3xl overflow-hidden border border-yellow-500/30 shadow-2xl bg-slate-950">
                                <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-10 z-0" />
                                <div className="absolute top-0 right-0 p-32 bg-yellow-500/10 blur-[120px] rounded-full pointer-events-none" />

                                <div className="relative z-10 p-4 md:p-12">
                                    <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
                                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-yellow-600/20 to-orange-600/20 text-yellow-500 border border-yellow-500/20 text-sm font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(234,179,8,0.2)]">
                                            <Crown className="w-4 h-4" /> Mr. Banerjee's Masterclass
                                        </div>
                                        <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                                            Run Your Business <br />
                                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500">Like A Tech Giant</span>
                                        </h2>
                                        <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                                            Don't just survive in 2026. <span className="text-white font-semibold underline decoration-yellow-500/50 underline-offset-4">Dominate</span> it.
                                            Join elite 2-hour problem-solving sessions designed towards one goal: <span className="text-yellow-400 font-bold">Explosive Growth.</span>
                                        </p>

                                        <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm font-medium text-slate-400">
                                            <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                                                <Globe className="w-4 h-4 text-blue-400" /> Online via Google Meet & Zoom
                                            </div>
                                            <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                                                <Monitor className="w-4 h-4 text-yellow-400" /> Live Implementation
                                            </div>
                                        </div>
                                    </div>

                                    {/* BONUS BANNER */}
                                    <div className="mb-16 mx-auto max-w-3xl bg-gradient-to-r from-yellow-900/40 to-orange-900/40 border border-yellow-500/30 rounded-2xl p-6 md:p-8 backdrop-blur-sm relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-16 bg-yellow-500/10 blur-[60px] rounded-full group-hover:bg-yellow-500/20 transition-all duration-500" />
                                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                                            <div className="p-4 bg-yellow-500 rounded-full text-slate-900 shadow-[0_0_20px_rgba(234,179,8,0.4)] animate-pulse">
                                                <Star className="w-8 h-8 fill-current" />
                                            </div>
                                            <div className="space-y-2">
                                                <h3 className="text-2xl font-bold text-white">The "Lucky Winner" Bonus</h3>
                                                <p className="text-slate-300">
                                                    Stand a chance to win <span className="text-yellow-400 font-bold">3 Days of Physical Mentorship</span>.
                                                    Mr. Banerjee will visit your office to restructure your business personally.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                                        {premiumTrainings.map((training, index) => (
                                            <motion.div
                                                key={training.id}
                                                initial={{ opacity: 0, y: 30 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                            >
                                                <Card className="bg-slate-900/50 border-white/10 hover:border-yellow-500/50 transition-all duration-300 group overflow-hidden flex flex-col h-full shadow-lg hover:shadow-yellow-900/40 backdrop-blur-sm relative">
                                                    {/* IMAGE HEADER */}
                                                    <div className="h-56 relative overflow-hidden bg-slate-800">
                                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900 z-10" />
                                                        <img
                                                            src={`/assets/${training.image}`}
                                                            alt={training.title}
                                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90 group-hover:opacity-100"
                                                            onError={(e) => {
                                                                e.currentTarget.style.display = 'none';
                                                                e.currentTarget.parentElement?.classList.add('bg-gradient-to-br', 'from-slate-800', 'to-slate-900');
                                                            }}
                                                        />
                                                        <div className="absolute top-4 right-4 z-20">
                                                            <div className="bg-white/10 backdrop-blur-md text-yellow-400 font-bold border border-yellow-500/30 text-sm px-4 py-1.5 rounded-full shadow-xl">
                                                                ₹{training.price.toLocaleString()}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <CardHeader className="pb-3 relative z-10 -mt-16">
                                                        <div className="p-3.5 w-fit rounded-2xl bg-slate-900 border border-white/10 text-yellow-500 shadow-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                                            <Gem className="w-6 h-6" />
                                                        </div>
                                                        <CardTitle className="text-xl md:text-2xl text-white group-hover:text-yellow-400 transition-colors leading-tight min-h-[3.5rem] font-bold">
                                                            {training.title}
                                                        </CardTitle>
                                                        
                                                        <div className="space-y-4 mt-6">
                                                            <div className="bg-red-500/5 p-4 rounded-2xl border border-red-500/10 group-hover:border-red-500/20 transition-colors">
                                                                <div className="flex items-center gap-2 mb-2">
                                                                    <Target className="w-4 h-4 text-red-400 shrink-0" />
                                                                    <span className="text-[10px] uppercase font-black text-red-400/80 tracking-[0.2em]">The Challenge</span>
                                                                </div>
                                                                <p className="text-sm text-slate-300 leading-relaxed font-medium">{training.problem}</p>
                                                            </div>

                                                            <div className="bg-green-500/5 p-4 rounded-2xl border border-green-500/10 group-hover:border-green-500/20 transition-colors">
                                                                <div className="flex items-center gap-2 mb-2">
                                                                    <Lightbulb className="w-4 h-4 text-green-400 shrink-0" />
                                                                    <span className="text-[10px] uppercase font-black text-green-400/80 tracking-[0.2em]">The Solution</span>
                                                                    <Badge variant="outline" className="ml-auto text-[10px] bg-green-500/10 border-green-500/20 text-green-400 py-0 h-5">Proven Method</Badge>
                                                                </div>
                                                                <p className="text-sm text-slate-300 leading-relaxed font-medium">{training.solution}</p>
                                                            </div>
                                                        </div>
                                                    </CardHeader>

                                                    <CardContent className="pb-4 flex-grow">
                                                        <Accordion type="single" collapsible className="w-full">
                                                            <AccordionItem value="item-1" className="border-white/5 px-2">
                                                                <AccordionTrigger className="text-slate-400 hover:text-white py-4 text-sm font-semibold transition-colors">
                                                                    Curriculum Overview ({training.curriculum.length} Core Modules)
                                                                </AccordionTrigger>
                                                                <AccordionContent>
                                                                    <div className="space-y-5 pt-2 pb-4">
                                                                        <ul className="space-y-3.5">
                                                                            {training.curriculum.map((item, i) => (
                                                                                <li key={i} className="flex items-start gap-3.5 text-sm text-slate-300 group/item">
                                                                                    <div className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-yellow-500/60 group-hover/item:bg-yellow-400 transition-colors" />
                                                                                    <span className="leading-snug group-hover/item:text-white transition-colors">{item}</span>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                        <div className="bg-gradient-to-br from-yellow-500/10 to-transparent p-5 rounded-2xl border border-yellow-500/20 mt-6 relative overflow-hidden">
                                                                            <div className="absolute top-0 right-0 p-8 bg-yellow-500/5 blur-2xl rounded-full" />
                                                                            <h4 className="text-[10px] font-black text-yellow-500 uppercase tracking-[0.2em] mb-2 flex items-center gap-2 relative z-10">
                                                                                <ShieldCheck className="w-3.5 h-3.5" /> Guaranteed Outcome
                                                                            </h4>
                                                                            <p className="text-sm text-white font-semibold italic relative z-10 leading-relaxed">
                                                                                "{training.outcome}"
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </AccordionContent>
                                                            </AccordionItem>
                                                        </Accordion>
                                                    </CardContent>

                                                    <CardFooter className="p-6 pt-2">
                                                        <Button
                                                            onClick={() => handleOpenBooking("premium", training.title)}
                                                            className="w-full bg-gradient-to-r from-yellow-600 via-orange-600 to-yellow-600 bg-[length:200%_auto] hover:bg-right transition-all duration-500 text-white font-black border-0 py-7 text-lg shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-yellow-500/40 rounded-2xl group"
                                                        >
                                                            Secure Your Throne <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                                        </Button>
                                                    </CardFooter>
                                                </Card>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="mt-16 text-center border-t border-white/10 pt-8">
                                        <p className="text-slate-500 text-sm">
                                            * Prices are subject to increase. Sessions are conducted via Google Meet/Zoom upon booking confirmation.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* FREE SECTION */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center border-t border-border pt-12 opacity-80 hover:opacity-100 transition-opacity">
                                <div className="space-y-6">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium">
                                        <Rocket className="w-4 h-4" />
                                        Free Starter Options
                                    </div>
                                    <h2 className="text-3xl font-bold">Free 40-Min Power Sessions</h2>
                                    <p className="text-muted-foreground text-lg">
                                        Not ready for the Masterclass? Start with our free sessions to understand the basics of automation and AI.
                                        Limited to one session per business.
                                    </p>
                                    <ul className="space-y-4">
                                        {[
                                            "Basic Process Audit",
                                            "Intro to AI Tools",
                                            "Digital Marketing Basics",
                                            "Customer Journey Mapping"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button
                                        onClick={() => handleOpenBooking("entrepreneur")}
                                        variant="outline"
                                        className="w-full sm:w-auto px-8 py-6 text-lg border-primary text-primary hover:bg-primary/5"
                                    >
                                        Book Free Session <ArrowRight className="w-5 h-5 ml-2" />
                                    </Button>
                                </div>
                                <div className="grid grid-cols-1 gap-6">
                                    <Card className="glass-intense border-blue-500/20">
                                        <CardHeader>
                                            <CardTitle className="flex items-center gap-2 text-blue-400">
                                                <Clock className="w-5 h-5" />
                                                Quick & Effective
                                                <Badge variant="secondary" className="ml-2 bg-green-500/10 text-green-400 border-green-500/20">Free</Badge>
                                            </CardTitle>
                                            <CardDescription>
                                                Concise, actionable training with no fluff. Get the skills you need and get back to business.
                                            </CardDescription>
                                        </CardHeader>
                                    </Card>
                                    <Card className="glass-intense border-blue-500/20">
                                        <CardHeader>
                                            <CardTitle className="flex items-center gap-2 text-blue-400">
                                                <TrendingUp className="w-5 h-5" />
                                                ROI Focused
                                            </CardTitle>
                                            <CardDescription>
                                                Every session is designed to provide immediate value and return on investment for your company.
                                            </CardDescription>
                                        </CardHeader>
                                    </Card>
                                </div>
                            </div>
                        </TabsContent>

                        {/* Students Content */}
                        <TabsContent value="students" className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                <div className="grid grid-cols-1 gap-6 order-2 md:order-1">
                                    <Card className="glass-intense border-purple-500/20">
                                        <CardHeader>
                                            <CardTitle className="flex items-center gap-2 text-purple-400">
                                                <BrainCircuit className="w-5 h-5" />
                                                Industry-Ready Skills
                                            </CardTitle>
                                            <CardDescription>
                                                Learn the exact technologies and frameworks top companies are using right now.
                                            </CardDescription>
                                        </CardHeader>
                                    </Card>
                                    <Card className="glass-intense border-purple-500/20">
                                        <CardHeader>
                                            <CardTitle className="flex items-center gap-2 text-purple-400">
                                                <Users className="w-5 h-5" />
                                                Internship Opportunities
                                            </CardTitle>
                                            <CardDescription>
                                                Top performers get direct access to internship interviews and career mentorship.
                                            </CardDescription>
                                        </CardHeader>
                                    </Card>
                                    <Card className="glass-intense border-purple-500/20">
                                        <CardHeader>
                                            <CardTitle className="flex items-center gap-2 text-purple-400">
                                                <Clock className="w-5 h-5" />
                                                40-Min Free Training
                                                <Badge variant="secondary" className="ml-2 bg-green-500/10 text-green-400 border-green-500/20">Free</Badge>
                                            </CardTitle>
                                            <CardDescription>
                                                Join our free sessions to learn high-demand skills without any financial barrier.
                                            </CardDescription>
                                        </CardHeader>
                                    </Card>
                                </div>
                                <div className="space-y-6 order-1 md:order-2">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium">
                                        <GraduationCap className="w-4 h-4" />
                                        Future Tech & Internships
                                    </div>
                                    <h2 className="text-3xl font-bold">Master Future Technologies</h2>
                                    <p className="text-muted-foreground text-lg">
                                        Stay ahead of the curve. Learn about the latest trends in AI, Cyber Security, and Cloud Computing that colleges don't teach you yet.
                                    </p>
                                    <ul className="space-y-4">
                                        {[
                                            "Generative AI & LLMs",
                                            "Cyber Security Essentials",
                                            "Modern Web Development",
                                            "Cloud Infrastructure Patterns"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button
                                        onClick={() => handleOpenBooking("student")}
                                        className="btn-primary-purple w-full sm:w-auto px-8 py-6 text-lg bg-purple-600 hover:bg-purple-700"
                                    >
                                        Join Next Cohort <BookOpen className="w-5 h-5 ml-2" />
                                    </Button>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>

            {/* Booking Dialog */}
            <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
                <DialogContent className="sm:max-w-[500px] glass-intense border-white/10">
                    <DialogHeader>
                        <DialogTitle>
                            {bookingType === 'entrepreneur' ? 'Book Business Growth Session' :
                                bookingType === 'premium' ? 'Secure Your Masterclass Seat' :
                                    'Apply for Student Cohort'}
                        </DialogTitle>
                        <DialogDescription>
                            {bookingType === 'premium' ? (
                                <span className="text-yellow-600 font-semibold bg-yellow-50 px-2 py-1 rounded">
                                    {selectedPremiumTraining}
                                </span>
                            ) : bookingType === 'entrepreneur'
                                ? 'Fill in your details to book a 1-on-1 session. Sessions are 40 minutes.'
                                : 'Join our next training batch. Limited spots available.'}
                        </DialogDescription>
                    </DialogHeader>

                    <form onSubmit={handleWhatsAppRedirect} className="space-y-4 mt-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2 col-span-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input id="name" name="name" required value={formData.name} onChange={handleInputChange} placeholder="John Doe" />
                            </div>

                            <div className="space-y-2 col-span-1">
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input id="phone" name="phone" required value={formData.phone} onChange={handleInputChange} placeholder="+91..." />
                            </div>

                            <div className="space-y-2 col-span-1">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} placeholder="john@example.com" />
                            </div>

                            {(bookingType === 'entrepreneur' || bookingType === 'premium') ? (
                                <>
                                    <div className="space-y-2 col-span-2">
                                        <Label htmlFor="companyName">Company Name</Label>
                                        <Input id="companyName" name="companyName" required value={formData.companyName} onChange={handleInputChange} placeholder="Acme Inc." />
                                    </div>
                                    {bookingType !== 'premium' && (
                                        <div className="space-y-2 col-span-2">
                                            <Label htmlFor="industry">Industry</Label>
                                            <Input id="industry" name="industry" required value={formData.industry} onChange={handleInputChange} placeholder="Retail, Tech, etc." />
                                        </div>
                                    )}
                                </>
                            ) : (
                                <>
                                    <div className="space-y-2 col-span-2">
                                        <Label htmlFor="collegeName">College / University</Label>
                                        <Input id="collegeName" name="collegeName" required value={formData.collegeName} onChange={handleInputChange} placeholder="University Name" />
                                    </div>
                                    <div className="space-y-2 col-span-1">
                                        <Label htmlFor="yearOfStudy">Year</Label>
                                        <Input id="yearOfStudy" name="yearOfStudy" required value={formData.yearOfStudy} onChange={handleInputChange} placeholder="e.g. 3rd Year" />
                                    </div>
                                    <div className="space-y-2 col-span-1">
                                        <Label htmlFor="areaOfInterest">Interest</Label>
                                        <Input id="areaOfInterest" name="areaOfInterest" required value={formData.areaOfInterest} onChange={handleInputChange} placeholder="AI, Web, etc." />
                                    </div>
                                </>
                            )}
                        </div>

                        <Button type="submit" className={`w-full font-bold py-6 text-lg mt-6 text-white ${bookingType === 'premium' ? 'bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500' : 'btn-primary'}`}>
                            <MessageCircle className="w-5 h-5 mr-2" />
                            {bookingType === 'premium' ? 'Confirm & Get Payment Link' : 'Book via WhatsApp'}
                        </Button>
                        {bookingType === 'premium' && (
                            <p className="text-xs text-center text-muted-foreground mt-2">
                                Mr. Banerjee or his team will verify your slot immediately on WhatsApp.
                            </p>
                        )}
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}
