import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import IdeaCard from "./idea-card";
import { Button } from "@/components/ui/button";
import { X, Heart, RefreshCw, Sparkles, Zap } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || "");

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

interface SwipeDeckProps {
    onMatch: (idea: Idea) => void;
}

const INITIAL_IDEAS: Idea[] = [
    {
        id: "1",
        title: "AI-Powered Supply Chain Optimization",
        industry: "LogisticsTech",
        elevatorPitch: "Autonomous logistics platform that predicts demand spikes and optimizes delivery routes in real-time, reducing fuel costs by 35%.",
        budget: "₹8L - ₹12L",
        profitPotential: "₹45L/yr",
        timeToMarket: "6 Weeks",
        tags: ["AI", "Logistics", "B2B"],
        color: "from-blue-600 to-indigo-900",
        problemStatement: "Logistics companies in India lose billions annually due to inefficient route planning, fuel wastage, and unpredictable demand spikes.",
        solution: "Our platform uses predictive AI to analyze traffic patterns, order history, and weather data to optimize delivery routes and inventory distribution dynamically.",
        techStack: ["Python", "TensorFlow", "React Native", "AWS Lambda", "PostgreSQL"],
        targetMarket: "Mid-sized logistics fleets (50-500 vehicles) in Tier-1 and Tier-2 cities.",
        competitiveAdvantage: "Proprietary 'Traffic-Aware' algorithm specifically trained on Indian road conditions; 40% cheaper than global competitors.",
        revenueModel: "SaaS Subscription: ₹15,000/month per fleet + ₹50 per active vehicle.",
        architecture: {
            frontend: { title: "Driver Mobile App", description: "React Native app for real-time navigation and proof of delivery." },
            backend: { title: "Optimization Engine", description: "Python-based microservices handling route calculation and demand forecasting." },
            data: { title: "Real-time Telemetry", description: "IoT data ingestion pipeline for vehicle tracking and diagnostics." }
        },
        risks: [
            { type: "Adoption Risk", level: "Medium", mitigation: "Simple UI for drivers and extensive onboarding support." },
            { type: "Technical Risk", level: "Low", mitigation: "Using proven mapping APIs (Google Maps/Mapbox)." },
            { type: "Market Risk", level: "Medium", mitigation: "Focusing on high-margin cold chain logistics first." }
        ],
        metrics: {
            customers: "10-15 Fleets",
            revenue: "₹45L",
            retention: "90%",
            breakeven: "8 Months"
        },
        faq: [
            { question: "How accurate is the demand prediction?", answer: "Our pilot tests showed 85% accuracy in predicting demand spikes 48 hours in advance." },
            { question: "Does it work in remote areas?", answer: "Yes, the driver app has offline capabilities and syncs when connectivity is restored." },
            { question: "What is the implementation time?", answer: "We can onboard a fleet of 50 vehicles in less than 3 days." }
        ]
    }
];

export default function SwipeDeck({ onMatch }: SwipeDeckProps) {
    const [ideas, setIdeas] = useState<Idea[]>(INITIAL_IDEAS);
    const [likedCount, setLikedCount] = useState(0);
    const [isGenerating, setIsGenerating] = useState(false);
    const [apiError, setApiError] = useState(false);
    const [sliderValue, setSliderValue] = useState(50);


    const handleSwipe = (direction: "left" | "right") => {
        if (direction === "right") {
            // Immediately match on the first right swipe
            setTimeout(() => onMatch(ideas[0]), 500);
        }

        setTimeout(() => {
            setIdeas(prev => prev.slice(1));
            setSliderValue(50);
        }, 200);
    };

    const handleSliderDecision = () => {
        if (sliderValue < 40) {
            handleSwipe("left");
        } else if (sliderValue > 60) {
            handleSwipe("right");
        }
    };

    const generateMoreIdeas = async () => {
        if (apiError || isGenerating) return;

        setIsGenerating(true);
        try {
            if (!import.meta.env.VITE_GEMINI_API_KEY) {
                console.warn("No Gemini API key found, using fallback");
                const newIdea: Idea = {
                    id: Date.now().toString(),
                    title: "Smart Fitness Coach",
                    industry: "HealthTech",
                    elevatorPitch: "AI-powered workout plans that adapt in real-time based on your Apple Watch data.",
                    budget: "₹7L - ₹10L",
                    profitPotential: "₹40L/yr",
                    timeToMarket: "6 Weeks",
                    tags: ["Health", "AI", "Mobile"],
                    color: "from-purple-600 to-pink-900",
                    faq: [
                        { question: "How does it track workouts?", answer: "It integrates with Apple HealthKit to pull real-time heart rate and motion data." },
                        { question: "Is it suitable for beginners?", answer: "Yes, the AI adapts the difficulty based on your performance and feedback." },
                        { question: "What is the revenue model?", answer: "Freemium model with a premium subscription for advanced analytics and personalized coaching." }
                    ]
                };
                setIdeas(prev => [...prev, newIdea]);
                setIsGenerating(false);
                return;
            }

            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
            const prompt = `You are an expert venture capital analyst and business consultant at Cehpoint E Solutions, helping investors discover technology-enabled business opportunities in India.

MISSION: Generate 3 DISTINCT, innovative, practical, and investment-worthy business ideas that traditional businesses can adopt with technology.

STRICT REQUIREMENTS:
1. Traditional Foundation: Based on proven business models (retail, hospitality, healthcare, education, logistics, manufacturing)
2. Technology Enhancement: Uses AI, IoT, Mobile Apps, Cloud, or Automation to solve specific pain points
3. Easy Operations: Minimal complexity once built
4. Clear ROI: Solves problems that cost businesses money or waste time
5. Indian Market: Tailored for Indian SMEs and mid-sized enterprises
6. Budget: Between ₹1L - ₹15L for development
7. Comprehensive Details: Include problem, solution, tech stack, market, competitive advantage, revenue model
8. Q&A Support: Anticipate 3 common investor questions and provide clear, professional answers.
9. UNIQUE Architecture: Generate SPECIFIC system architecture for THIS idea (not generic)
10. REALISTIC Risks: Identify 3 actual risks for THIS specific business with mitigation strategies
11. MEASURABLE Metrics: Provide concrete Year 1 success metrics for THIS idea

OUTPUT FORMAT (Valid JSON Array of Objects only):
[
  {
    "title": "Specific, actionable title (max 8 words)",
    "industry": "Sector + Tech suffix (e.g., 'RetailTech', 'HealthTech', 'EdTech')",
    "elevatorPitch": "Problem + Solution + Benefit in one sentence (max 120 chars)",
    "budget": "₹XL - ₹YL",
    "profitPotential": "₹ZL/yr",
    "timeToMarket": "X Weeks",
    "tags": ["tag1", "tag2", "tag3"],
    "color": "from-color-500 to-color-900",
    "problemStatement": "2-3 detailed sentences explaining the core business problem",
    "solution": "2-3 sentences on how technology solves it with measurable outcomes",
    "techStack": ["React/Next.js", "Node.js/Python", "PostgreSQL/MongoDB", "AWS/Azure", "Specific AI/ML tool"],
    "targetMarket": "Specific customer profile with market size (e.g., '10,000+ retail stores in tier-2 cities with ₹50L-₹5Cr revenue')",
    "competitiveAdvantage": "What makes this unique and defensible",
    "revenueModel": "Pricing strategy with specific numbers (e.g., 'SaaS: ₹5K-₹15K/month, Implementation: ₹50K-₹2L')",
    "architecture": {
      "frontend": {
        "title": "Specific frontend approach for THIS idea",
        "description": "Detailed description of frontend architecture tailored to this business (2 sentences)"
      },
      "backend": {
        "title": "Specific backend approach for THIS idea",
        "description": "Detailed description of backend services tailored to this business (2 sentences)"
      },
      "data": {
        "title": "Specific data/security approach for THIS idea",
        "description": "Detailed description of data management tailored to this business (2 sentences)"
      }
    },
    "risks": [
      {
        "type": "Market Risk" or "Technical Risk" or "Competition Risk" or "Operational Risk",
        "level": "Low" or "Medium" or "High",
        "mitigation": "Specific mitigation strategy for THIS business idea (1-2 sentences)"
      },
      {
        "type": "Different risk type",
        "level": "Low" or "Medium" or "High",
        "mitigation": "Specific mitigation strategy (1-2 sentences)"
      },
      {
        "type": "Another different risk type",
        "level": "Low" or "Medium" or "High",
        "mitigation": "Specific mitigation strategy (1-2 sentences)"
      }
    ],
    "metrics": {
      "customers": "Realistic customer count for Year 1 (e.g., '15-20' or '50-75')",
      "revenue": "Expected Year 1 revenue matching profitPotential",
      "retention": "Realistic retention rate (e.g., '85%+' or '70%+')",
      "breakeven": "Realistic breakeven timeline (e.g., '6-9 Mo' or '12-15 Mo')"
    },
    "faq": [
      { "question": "Anticipated investor question 1?", "answer": "Clear, professional answer." },
      { "question": "Anticipated investor question 2?", "answer": "Clear, professional answer." },
      { "question": "Anticipated investor question 3?", "answer": "Clear, professional answer." }
    ]
  }
]

CRITICAL:
- Architecture MUST be specific to the idea (not "Progressive Web App" for everything)
- Risks MUST be realistic for THIS specific business (not generic)
- Metrics MUST align with the budget and market size
- Focus on REAL pain points that waste money/time
- Technology should be PRACTICAL, not fancy
- Market should be SPECIFIC and REACHABLE
- Revenue model should be CLEAR and REALISTIC
- Generate 3 UNIQUE ideas in the array.

Generate the JSON array NOW:`;

            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();
            const jsonStr = text.replace(/```json/g, "").replace(/```/g, "").trim();
            const newIdeasData = JSON.parse(jsonStr);

            // Ensure we have an array
            const ideasArray = Array.isArray(newIdeasData) ? newIdeasData : [newIdeasData];

            const newIdeasWithIds = ideasArray.map((idea: any) => ({
                ...idea,
                id: Date.now().toString() + Math.random().toString(36).substr(2, 9)
            }));

            setIdeas(prev => [...prev, ...newIdeasWithIds]);
            setApiError(false);
        } catch (error) {
            console.error("Failed to generate ideas:", error);
            setApiError(true);
        } finally {
            setIsGenerating(false);
        }
    };

    // Aggressive generation - keep buffer of ideas
    useEffect(() => {
        // Generate immediately on mount if we have fewer than 5 ideas
        if (ideas.length < 5 && !isGenerating && !apiError) {
            generateMoreIdeas();
        }
    }, [ideas.length, isGenerating, apiError]);

    if (apiError && ideas.length === 0) {
        return (
            <div className="w-full max-w-md mx-auto h-[500px] md:h-[600px] flex flex-col items-center justify-center p-4 md:p-8 text-center">
                <div className="glass-intense rounded-3xl p-8 border-2 border-red-500/20">
                    <X className="w-16 h-16 text-red-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-4">We're Not Accepting New Investors</h3>
                    <p className="text-foreground/70 mb-6">
                        We appreciate your interest, but we're currently at capacity.
                        We don't want to waste your time showing you opportunities we can't support.
                    </p>
                    <Button onClick={() => window.location.href = "/quotation"} className="btn-primary">
                        Explore Other Services
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="relative w-full max-w-md mx-auto flex flex-col items-center justify-center">
            {/* Card Stack Container */}
            <div className="relative w-full h-[500px] md:h-[600px] mb-8 md:mb-12 perspective-1000">
                {/* Background Stack Effect */}
                {ideas.length > 1 && (
                    <div className="absolute top-4 left-4 right-4 bottom-0 bg-secondary/30 rounded-[2.5rem] transform scale-95 translate-y-4 blur-sm -z-10 border border-white/5"></div>
                )}
                {ideas.length > 2 && (
                    <div className="absolute top-8 left-8 right-8 bottom-0 bg-secondary/10 rounded-[2.5rem] transform scale-90 translate-y-8 blur-md -z-20 border border-white/5"></div>
                )}

                <AnimatePresence>
                    {ideas.map((idea, index) => (
                        index === 0 && <IdeaCard key={idea.id} idea={idea} index={index} onSwipe={handleSwipe} />
                    ))}
                </AnimatePresence>

                {ideas.length === 0 && !apiError && (
                    <div className="text-center p-8 absolute inset-0 flex flex-col items-center justify-center glass rounded-[2.5rem]">
                        <div className="relative w-24 h-24 mb-6">
                            <div className="absolute inset-0 border-4 border-primary/30 rounded-full animate-ping"></div>
                            <div className="absolute inset-0 border-4 border-primary rounded-full flex items-center justify-center">
                                <Zap className="w-10 h-10 text-primary animate-pulse" />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Scanning Opportunities...</h3>
                        <p className="text-foreground/60">Finding the next unicorn for you</p>
                    </div>
                )}
            </div>

            {/* Decision Slider */}
            <div className="w-full max-w-md mb-8 px-4">
                <div className="glass-intense rounded-3xl p-4 md:p-6 border border-white/10 shadow-xl">
                    <p className="text-xs text-center text-foreground/60 mb-4 font-bold uppercase tracking-widest">Slide to Decide</p>
                    <div className="flex items-center gap-4">
                        <div className="flex flex-col items-center flex-shrink-0 transition-opacity duration-300" style={{ opacity: sliderValue < 40 ? 1 : 0.5 }}>
                            <div className="w-10 h-10 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center mb-1 border border-red-500/20">
                                <X className="w-5 h-5" />
                            </div>
                        </div>
                        <div className="flex-1 relative h-12 flex items-center">
                            {/* Track */}
                            <div className="absolute inset-0 h-2 bg-secondary rounded-full overflow-hidden my-auto top-0 bottom-0">
                                <div className="w-full h-full bg-gradient-to-r from-red-500 via-gray-500 to-green-500 opacity-30"></div>
                            </div>

                            {/* Input */}
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={sliderValue}
                                onChange={(e) => setSliderValue(parseInt(e.target.value))}
                                className="w-full h-12 opacity-0 cursor-pointer absolute z-20"
                                disabled={ideas.length === 0}
                            />

                            {/* Custom Thumb */}
                            <div
                                className="absolute h-8 w-8 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.5)] flex items-center justify-center pointer-events-none transition-all duration-75 z-10"
                                style={{ left: `calc(${sliderValue}% - 16px)` }}
                            >
                                <div className={`w-2 h-2 rounded-full ${sliderValue < 40 ? 'bg-red-500' : sliderValue > 60 ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center flex-shrink-0 transition-opacity duration-300" style={{ opacity: sliderValue > 60 ? 1 : 0.5 }}>
                            <div className="w-10 h-10 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mb-1 border border-green-500/20">
                                <Heart className="w-5 h-5 fill-current" />
                            </div>
                        </div>
                    </div>

                    <Button
                        onClick={handleSliderDecision}
                        disabled={ideas.length === 0 || (sliderValue >= 40 && sliderValue <= 60)}
                        className={`w-full mt-6 rounded-xl py-6 text-lg font-bold transition-all duration-300 ${sliderValue < 40
                            ? "bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-500/20"
                            : sliderValue > 60
                                ? "bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/20"
                                : "bg-secondary text-foreground/40"
                            }`}
                    >
                        {sliderValue < 40 ? "Pass This Idea" : sliderValue > 60 ? "I'm Interested!" : "Move Slider to Decide"}
                    </Button>
                </div>
            </div>

            {/* Control Buttons */}
            <div className="flex items-center gap-8">
                <Button
                    size="icon"
                    variant="outline"
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full border-red-500/20 bg-red-500/5 text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 shadow-lg hover:scale-110 transition-all duration-300 group"
                    onClick={() => handleSwipe("left")}
                    disabled={ideas.length === 0}
                >
                    <X className="w-8 h-8 group-hover:rotate-90 transition-transform duration-300" />
                </Button>

                <Button
                    size="icon"
                    className="w-12 h-12 rounded-full bg-secondary text-foreground/60 shadow-inner hover:scale-110 hover:text-primary transition-all"
                    onClick={() => generateMoreIdeas()}
                    disabled={isGenerating || apiError}
                >
                    <RefreshCw className={`w-5 h-5 ${isGenerating ? 'animate-spin' : ''}`} />
                </Button>

                <Button
                    size="icon"
                    variant="outline"
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full border-green-500/20 bg-green-500/5 text-green-500 hover:bg-green-500 hover:text-white hover:border-green-500 shadow-lg hover:scale-110 transition-all duration-300 group"
                    onClick={() => handleSwipe("right")}
                    disabled={ideas.length === 0}
                >
                    <Heart className="w-8 h-8 group-hover:scale-125 transition-transform duration-300 fill-current" />
                </Button>
            </div>
        </div>
    );
}
