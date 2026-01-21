import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, ArrowRight, ShoppingCart, Landmark, Stethoscope, Factory, Briefcase, Sparkles } from "lucide-react";

export default function IndustryUseCaseExplorer() {
    const [activeTab, setActiveTab] = useState("retail");

    const industries = [
        { id: "retail", name: "Retail & E-commerce", icon: ShoppingCart },
        { id: "finance", name: "Finance & Banking", icon: Landmark },
        { id: "healthcare", name: "Healthcare", icon: Stethoscope },
        { id: "manufacturing", name: "Manufacturing", icon: Factory },
        { id: "professional", name: "Professional Services", icon: Briefcase },
    ];

    const useCases = {
        retail: [
            {
                title: "Smart Inventory & Demand Forecasting",
                pain: "Overstocking leads to waste; stockouts lead to lost sales. Manual spreadsheets are always outdated.",
                fix: "AI analyzes historical sales, seasonality, and trends to predict demand with 95% accuracy.",
                gain: "Reduce inventory costs by 30% and prevent lost revenue.",
                tech: ["Predictive Analytics", "Python", "TensorFlow"]
            },
            {
                title: "24/7 AI Shopping Assistant",
                pain: "Customer support is slow and expensive. 60% of carts are abandoned due to unanswered questions.",
                fix: "GenAI chatbots answer product questions, recommend items, and handle returns instantly.",
                gain: "Increase conversion rates by 25% and cut support costs by 70%.",
                tech: ["Generative AI", "OpenAI", "NLP"]
            },
            {
                title: "Dynamic Pricing Engine",
                pain: "Static pricing leaves money on the table. Competitors change prices faster than you can react.",
                fix: "Algorithms adjust prices in real-time based on demand, competition, and user behavior.",
                gain: "Boost margins by 10-15% without losing customers.",
                tech: ["Reinforcement Learning", "Big Data"]
            }
        ],
        finance: [
            {
                title: "Automated Fraud Detection",
                pain: "Manual review of transactions is slow and error-prone. Fraud costs billions annually.",
                fix: "ML models analyze transaction patterns in real-time to flag anomalies instantly.",
                gain: "Detect 99.9% of fraud attempts while reducing false positives.",
                tech: ["Anomaly Detection", "Scikit-learn"]
            },
            {
                title: "Intelligent Document Processing (IDP)",
                pain: "Processing loan applications and invoices takes days of manual data entry.",
                fix: "OCR + NLP extracts data from scanned documents and verifies it automatically.",
                gain: "Reduce processing time from days to seconds.",
                tech: ["OCR", "Computer Vision", "NLP"]
            },
            {
                title: "Personalized Wealth Advisory",
                pain: "Advisors can only manage a limited number of clients effectively.",
                fix: "AI analyzes market data and client goals to generate personalized investment strategies.",
                gain: "Scale advisory services to 10x more clients with hyper-personalization.",
                tech: ["Predictive Modeling", "Robo-Advisory"]
            }
        ],
        healthcare: [
            {
                title: "Patient Appointment Scheduling",
                pain: "Missed appointments and scheduling conflicts waste valuable doctor time.",
                fix: "AI voice agents handle booking, rescheduling, and reminders 24/7.",
                gain: "Reduce no-shows by 40% and administrative burden by 80%.",
                tech: ["Voice AI", "Conversational AI"]
            },
            {
                title: "Medical Imaging Analysis",
                pain: "Radiologists are overworked, leading to potential diagnosis errors.",
                fix: "Computer vision algorithms detect anomalies in X-rays and MRIs with superhuman precision.",
                gain: "Faster, more accurate diagnoses and earlier detection of conditions.",
                tech: ["Computer Vision", "Deep Learning"]
            },
            {
                title: "Predictive Patient Monitoring",
                pain: "Reacting to patient deterioration is often too late.",
                fix: "AI monitors vitals in real-time to predict adverse events before they happen.",
                gain: "Improve patient outcomes and reduce ICU readmissions.",
                tech: ["IoT", "Time-series Analysis"]
            }
        ],
        manufacturing: [
            {
                title: "Predictive Maintenance",
                pain: "Unplanned equipment downtime costs millions in lost production.",
                fix: "Sensors and AI predict machine failures weeks before they occur.",
                gain: "Eliminate unplanned downtime and extend equipment life.",
                tech: ["IoT", "Predictive Analytics"]
            },
            {
                title: "Visual Quality Control",
                pain: "Manual inspection is slow, inconsistent, and misses defects.",
                fix: "Cameras with AI detect microscopic defects on high-speed production lines.",
                gain: "Achieve 100% inspection coverage and near-zero defect rates.",
                tech: ["Computer Vision", "Edge AI"]
            },
            {
                title: "Supply Chain Optimization",
                pain: "Supply chain disruptions cause delays and excess costs.",
                fix: "AI models predict disruptions and optimize routes and logistics dynamically.",
                gain: "Reduce logistics costs by 20% and improve on-time delivery.",
                tech: ["Optimization Algorithms", "Graph Neural Networks"]
            }
        ],
        professional: [
            {
                title: "Automated Legal Contract Review",
                pain: "Lawyers spend hours reviewing standard contracts for risks.",
                fix: "NLP models highlight risks, suggest edits, and ensure compliance in seconds.",
                gain: "Speed up contract review by 80% and reduce legal costs.",
                tech: ["NLP", "BERT/Transformers"]
            },
            {
                title: "AI Recruitment & Screening",
                pain: "Recruiters drown in resumes, missing top talent.",
                fix: "AI screens resumes, ranks candidates, and conducts initial interviews.",
                gain: "Cut time-to-hire by 50% and improve candidate quality.",
                tech: ["NLP", "Recommendation Systems"]
            },
            {
                title: "Automated Report Generation",
                pain: "Consultants spend days compiling data into reports.",
                fix: "GenAI aggregates data and writes comprehensive reports and summaries instantly.",
                gain: "Free up 90% of time for high-value strategic work.",
                tech: ["Generative AI", "LLMs"]
            }
        ]
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
                <h2 className="font-display font-bold text-3xl md:text-5xl mb-4">
                    Industry <span className="text-gradient">Use Cases</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    See exactly how AI solves the specific problems in your industry.
                </p>
            </div>

            <Tabs defaultValue="retail" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <div className="flex justify-center mb-12 overflow-x-auto pb-4">
                    <TabsList className="h-auto p-1 bg-secondary/30 backdrop-blur-sm rounded-full">
                        {industries.map((industry) => (
                            <TabsTrigger
                                key={industry.id}
                                value={industry.id}
                                className="rounded-full px-6 py-3 text-sm md:text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all flex items-center gap-2"
                            >
                                <industry.icon className="w-4 h-4 hidden md:inline-block" />
                                {industry.name}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </div>

                {industries.map((industry) => (
                    <TabsContent key={industry.id} value={industry.id} className="mt-0">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                            {/* Industry Image Panel */}
                            <div className="lg:col-span-5 space-y-6">
                                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video lg:aspect-auto lg:h-full group bg-muted border border-border/50">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                                    <img
                                        src={`/images/ai/${industry.id}.png`}
                                        alt={`${industry.name} AI Solutions`}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-0 left-0 p-6 z-20">
                                        <h3 className="text-2xl font-bold text-white mb-2">{industry.name}</h3>
                                        <div className="flex items-center text-white/90 text-sm font-medium">
                                            <Sparkles className="w-4 h-4 mr-2 text-primary" />
                                            <span>AI-Powered Transformation</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Use Cases Grid */}
                            <div className="lg:col-span-7">
                                <div className="grid grid-cols-1 gap-6">
                                    {useCases[industry.id as keyof typeof useCases].map((useCase, index) => (
                                        <Card key={index} className="bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
                                            <CardHeader className="pb-3">
                                                <div className="flex justify-between items-start gap-4">
                                                    <CardTitle className="text-lg font-bold text-foreground leading-tight">{useCase.title}</CardTitle>
                                                    <Badge variant="outline" className="shrink-0 bg-primary/5 text-primary border-primary/20">
                                                        Use Case #{index + 1}
                                                    </Badge>
                                                </div>
                                            </CardHeader>
                                            <CardContent className="space-y-4">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div className="bg-red-500/5 p-3 rounded-lg border border-red-500/10">
                                                        <div className="flex gap-2">
                                                            <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                                                            <div>
                                                                <span className="text-xs font-bold text-red-500 uppercase block mb-1">Pain Point</span>
                                                                <p className="text-sm text-foreground/80 leading-snug">{useCase.pain}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="bg-blue-500/5 p-3 rounded-lg border border-blue-500/10">
                                                        <div className="flex gap-2">
                                                            <ArrowRight className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                                                            <div>
                                                                <span className="text-xs font-bold text-blue-500 uppercase block mb-1">AI Solution</span>
                                                                <p className="text-sm text-foreground/80 leading-snug">{useCase.fix}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-border/50">
                                                    <div className="flex items-center gap-2">
                                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                                        <span className="text-sm font-medium text-foreground">
                                                            Impact: <span className="text-green-600 font-bold">{useCase.gain}</span>
                                                        </span>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2">
                                                        {useCase.tech.map((t, i) => (
                                                            <Badge key={i} variant="secondary" className="text-[10px] h-5 px-1.5">
                                                                {t}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
}
