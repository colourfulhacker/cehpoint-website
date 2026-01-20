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
    Zap,
    Globe
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

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-secondary/5" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1.5 text-sm border-primary/20 backdrop-blur-sm">
                        {activeTab === "entrepreneurs" ? "Business Growth Hub" : "Student Career Launchpad"}
                    </Badge>
                    <h1 className="font-display font-bold text-5xl md:text-7xl mb-6 tracking-tight">
                        {activeTab === "entrepreneurs" ? "Solve Real Business Problems" : "Fast-Track Your Career"} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                            {activeTab === "entrepreneurs" ? "With Technology" : "With Future Tech"}
                        </span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                        {activeTab === "entrepreneurs"
                            ? "From free automation audits to premium hand-holding implementation sessions."
                            : "Learn high-demand skills like AI and Cloud that colleges miss."}
                    </p>
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
                                                <Zap className="w-4 h-4 text-yellow-400" /> Live Implementation
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
                                        {premiumTrainings.map((training) => (
                                            <Card key={training.id} className="bg-slate-900/50 border-white/10 hover:border-yellow-500/50 transition-all duration-300 group overflow-hidden flex flex-col h-full shadow-lg hover:shadow-yellow-900/20">
                                                {/* IMAGE HEADER */}
                                                <div className="h-48 relative overflow-hidden bg-slate-800">
                                                    {/* Fallback pattern if image fails or while loading */}
                                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90 z-10" />
                                                    {/* In a real app we'd use the actual image path. For this demo, using abstract colors/gradients based on ID to simulate variety if images aren't moved yet. */}
                                                    {/* But I WILL generate them. So I'll render the img tag. */}
                                                    <img
                                                        src={`/assets/${training.image}`}
                                                        alt={training.title}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                                                        onError={(e) => {
                                                            e.currentTarget.style.display = 'none'; // Hide if not found
                                                            e.currentTarget.parentElement?.classList.add('bg-gradient-to-br', 'from-slate-800', 'to-slate-900');
                                                        }}
                                                    />
                                                    <div className="absolute top-4 right-4 z-20">
                                                        <Badge className="bg-yellow-500 text-slate-900 hover:bg-yellow-400 font-bold border-0 text-sm px-3 py-1 shadow-lg">
                                                            ₹{training.price}
                                                        </Badge>
                                                    </div>
                                                </div>

                                                <CardHeader className="pb-3 relative z-10 -mt-12">
                                                    <div className="p-3 w-fit rounded-xl bg-slate-900 border border-white/10 text-yellow-500 shadow-xl mb-3">
                                                        <Gem className="w-6 h-6" />
                                                    </div>
                                                    <CardTitle className="text-xl md:text-2xl text-white group-hover:text-yellow-400 transition-colors leading-tight min-h-[3.5rem]">
                                                        {training.title}
                                                    </CardTitle>
                                                    <div className="space-y-3 mt-4 bg-white/5 p-4 rounded-lg border border-white/5">
                                                        <div className="flex items-start gap-3">
                                                            <Target className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                                            <div>
                                                                <span className="text-xs uppercase font-bold text-red-400 tracking-wider">The Problem</span>
                                                                <p className="text-sm text-slate-300 leading-snug">{training.problem}</p>
                                                            </div>
                                                        </div>
                                                        <div className="w-full h-px bg-white/5" />
                                                        <div className="flex items-start gap-3">
                                                            <Lightbulb className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                                                            <div>
                                                                <span className="text-xs uppercase font-bold text-green-400 tracking-wider">The Solution</span>
                                                                <p className="text-sm text-slate-300 leading-snug">{training.solution}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </CardHeader>

                                                <CardContent className="pb-4 flex-grow">
                                                    <Accordion type="single" collapsible className="w-full">
                                                        <AccordionItem value="item-1" className="border-white/10 px-1">
                                                            <AccordionTrigger className="text-slate-400 hover:text-white py-3 text-sm font-medium">
                                                                View Full Curriculum ({training.curriculum.length} Modules)
                                                            </AccordionTrigger>
                                                            <AccordionContent>
                                                                <div className="space-y-4 pt-2">
                                                                    <ul className="space-y-3">
                                                                        {training.curriculum.map((item, i) => (
                                                                            <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                                                                                <CheckCircle2 className="w-4 h-4 mt-0.5 text-yellow-500/70 shrink-0" />
                                                                                <span className="leading-snug">{item}</span>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                    <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-4 rounded-lg border border-yellow-500/20 mt-4">
                                                                        <h4 className="text-xs font-bold text-yellow-500 uppercase tracking-wide mb-1 flex items-center gap-2">
                                                                            <ShieldCheck className="w-3 h-3" /> Guaranteed Outcome
                                                                        </h4>
                                                                        <p className="text-sm text-white font-medium italic">"{training.outcome}"</p>
                                                                    </div>
                                                                </div>
                                                            </AccordionContent>
                                                        </AccordionItem>
                                                    </Accordion>
                                                </CardContent>

                                                <CardFooter className="pt-2">
                                                    <Button
                                                        onClick={() => handleOpenBooking("premium", training.title)}
                                                        className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500 text-white font-bold border-0 py-6 text-base shadow-lg hover:shadow-yellow-500/25 transition-all"
                                                    >
                                                        Secure Seat • ₹{training.price}
                                                    </Button>
                                                </CardFooter>
                                            </Card>
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
