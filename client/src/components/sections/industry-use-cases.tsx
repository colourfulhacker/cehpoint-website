import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, ArrowRight, ShoppingCart, Landmark, Stethoscope, Factory, Building, BookOpen, Truck, Scale, Cpu } from "lucide-react";

export default function IndustryUseCaseExplorer() {
    const [activeTab, setActiveTab] = useState("retail");

    const industries = [
        { id: "retail", name: "Retail & E-commerce", icon: ShoppingCart },
        { id: "finance", name: "Finance & Banking", icon: Landmark },
        { id: "healthcare", name: "Healthcare & Clinics", icon: Stethoscope },
        { id: "manufacturing", name: "Manufacturing", icon: Factory },
        { id: "real_estate", name: "Real Estate & PropTech", icon: Building },
        { id: "education", name: "Education & EdTech", icon: BookOpen },
        { id: "logistics", name: "Logistics & Supply", icon: Truck },
        { id: "legal", name: "Legal & Professional", icon: Scale },
    ];

    const useCases = {
        retail: [
            {
                title: "Dynamic Pricing Engine",
                pain: "Static pricing leaves money on the table while competitors constantly adjust to market demand.",
                fix: "ML algorithms adjust your product prices in real-time based on competitor scraping and demand surges.",
                gain: "Increase profit margins by 12-18% without losing competitive edge.",
                tech: ["Reinforcement Learning", "Market Scraping"]
            },
            {
                title: "Visual Product Search",
                pain: "Shoppers struggle to find the exact clothing or furniture item using text keywords.",
                fix: "Computer vision allows users to upload a photo and instantly find similar products in your catalog.",
                gain: "Boost average order value and increase search-to-cart conversions.",
                tech: ["Computer Vision", "Embeddings"]
            },
            {
                title: "Hyper-Personalized Merchandising",
                pain: "Every visitor sees the same generic storefront, leading to high bounce rates.",
                fix: "AI reorganizes the homepage and product grids dynamically for each user based on their past behavior.",
                gain: "Increase repeat purchase rate and customer lifetime value.",
                tech: ["Collaborative Filtering", "Real-time Analytics"]
            }
        ],
        finance: [
            {
                title: "Credit Risk Scoring Models",
                pain: "Traditional credit scores exclude viable borrowers and rely on outdated, limited data.",
                fix: "Advanced AI models analyze alternative data points (digital footprint, utility bills) to assess true risk.",
                gain: "Safely approve 20% more loan applications while maintaining low default rates.",
                tech: ["Alternative Data Models", "XGBoost"]
            },
            {
                title: "Algorithmic Wealth Advisory",
                pain: "Human financial advisors are too expensive for the mass market, limiting client acquisition.",
                fix: "Robo-advisors generate optimized, personalized, tax-efficient investment portfolios at scale.",
                gain: "Scale asset management to thousands of clients with zero variable cost.",
                tech: ["Portfolio Optimization", "Predictive Modeling"]
            },
            {
                title: "Anti-Money Laundering (AML)",
                pain: "Legacy rule-based AML systems generate 95% false positives, burying compliance teams.",
                fix: "Network graph analysis and ML spot sophisticated laundering rings across complex transaction webs.",
                gain: "Slash compliance investigation time and avoid severe regulatory fines.",
                tech: ["Graph Neural Networks", "Anomaly Detection"]
            }
        ],
        healthcare: [
            {
                title: "Medical Imaging Diagnostics",
                pain: "Radiologists suffer from fatigue, leading to delayed or missed diagnoses on subtle X-rays/MRIs.",
                fix: "Computer vision algorithms pre-screen scans, highlighting micro-anomalies with superhuman precision.",
                gain: "Detect conditions like tumors 30% faster with higher accuracy rates.",
                tech: ["CNNs", "Computer Vision"]
            },
            {
                title: "Predictive Vitals Monitoring",
                pain: "Nurses manually checking vitals react to deterioration only *after* it happens.",
                fix: "Real-time AI analysis of continuous ICU streams predicts cardiac or sepsis events hours in advance.",
                gain: "Reduce ICU mortality rates and shorten average hospital stays.",
                tech: ["Time-Series Analysis", "IoT Healthcare"]
            },
            {
                title: "Drug Discovery Acceleration",
                pain: "Identifying new drug compounds takes years of trial and error in expensive laboratories.",
                fix: "Generative AI simulates molecular structures and predicts their binding affinity to target proteins.",
                gain: "Cut early-stage drug discovery timelines from years to months.",
                tech: ["AlphaFold", "Generative Chemistry"]
            }
        ],
        manufacturing: [
            {
                title: "IoT Predictive Maintenance",
                pain: "Machinery breaking down unexpectedly halts the entire production line, costing millions.",
                fix: "Sensors feed vibration and temperature data to AI, predicting specific part failures weeks before they snap.",
                gain: "Achieve near-zero unplanned downtime and extend equipment lifespan.",
                tech: ["IoT Telemetry", "Predictive Analytics"]
            },
            {
                title: "Visual Defect Detection",
                pain: "Human QA inspectors get tired and miss microscopic flaws on high-speed conveyor belts.",
                fix: "High-speed cameras with edge AI inspect 100% of products, instantly rejecting sub-millimeter defects.",
                gain: "Eliminate defective product shipments and reduce QA labor costs.",
                tech: ["Edge AI", "Computer Vision"]
            },
            {
                title: "Digital Twin Simulation",
                pain: "Testing new factory layouts or processes in the real world is risky and expensive.",
                fix: "Create a virtual AI replica of your factory floor to simulate bottlenecks and optimize throughput safely.",
                gain: "Increase factory yield by 15% without physical trial-and-error.",
                tech: ["Digital Twins", "Simulation AI"]
            }
        ],
        real_estate: [
            {
                title: "Automated Property Valuation",
                pain: "Manual appraisals are slow, biased, and often lag behind rapidly changing neighborhood data.",
                fix: "AI aggregates thousands of data points (crime rates, school zones, past sales) for instant, hyper-accurate pricing.",
                gain: "Price properties perfectly for faster sales and higher yields.",
                tech: ["Regression Models", "Geospatial AI"]
            },
            {
                title: "Generative Virtual Staging",
                pain: "Physically staging an empty home or hiring 3D rendering artists is expensive and slow.",
                fix: "Upload a raw photo of an empty room, and AI instantly populates it with photorealistic, trendy furniture.",
                gain: "Increase listing click-through rates by 40% at zero marginal cost.",
                tech: ["Generative Adversarial Networks (GANs)", "Image Synthesis"]
            },
            {
                title: "Smart Building Energy Management",
                pain: "HVAC systems waste enormous amounts of energy cooling empty commercial floors.",
                fix: "AI analyzes occupancy patterns and weather forecasts to dynamically optimize building temperatures.",
                gain: "Cut commercial energy bills by 20% and lower carbon footprint.",
                tech: ["IoT Integration", "Optimization Algorithms"]
            }
        ],
        education: [
            {
                title: "Adaptive Learning Paths",
                pain: "A one-size-fits-all curriculum leaves advanced students bored and struggling students behind.",
                fix: "AI analyzes a student's quiz performance to dynamically adjust the difficulty and topic of the next lesson.",
                gain: "Boost student test scores and engagement exponentially.",
                tech: ["Knowledge Tracing Algorithms", "Personalization"]
            },
            {
                title: "Predictive Dropout Prevention",
                pain: "Schools often don't realize a student is at risk of dropping out until they stop attending.",
                fix: "Machine learning flags subtle behavioral changes (login frequency, assignment delays) for early intervention.",
                gain: "Improve student retention rates and graduation outcomes.",
                tech: ["Behavioral Analytics", "Classification Models"]
            },
            {
                title: "Automated Essay Grading",
                pain: "Teachers spend countless weekend hours subjectively grading hundreds of long-form essays.",
                fix: "NLP models grade essays for grammar, structure, and thematic relevance, providing instant feedback.",
                gain: "Free up 30% of teacher time to focus on actual student mentorship.",
                tech: ["Natural Language Processing", "LLMs"]
            }
        ],
        logistics: [
            {
                title: "Dynamic Route Optimization",
                pain: "Static delivery routes waste fuel and fail to account for live traffic, weather, or new pickups.",
                fix: "AI continuously recalculates the optimal delivery sequence for hundreds of trucks in real-time.",
                gain: "Reduce fleet fuel consumption by 15% and improve on-time deliveries.",
                tech: ["Graph Algorithms", "Real-time Telematics"]
            },
            {
                title: "Autonomous Warehouse Robotics",
                pain: "Human pickers spend 70% of their shift just walking between aisles to find items.",
                fix: "Computer-vision guided robots autonomously navigate warehouses to bring the correct shelves directly to the packers.",
                gain: "Multiply order fulfillment speed by 3x during peak seasons.",
                tech: ["Robotics", "Spatial AI"]
            },
            {
                title: "Last-Mile Delivery Prediction",
                pain: "Customers are frustrated by inaccurate delivery windows spanning entire days.",
                fix: "Predictive models calculate highly accurate ETA windows based on historical driver speeds and micro-local data.",
                gain: "Dramatically increase customer satisfaction and reduce support calls.",
                tech: ["Predictive Analytics", "Machine Learning"]
            }
        ],
        legal: [
            {
                title: "Contract Risk Analysis",
                pain: "Lawyers spend tedious hours reading dense 100-page M&A contracts looking for liability loopholes.",
                fix: "AI scans legal documents in seconds, redlining missing clauses and flagging severe compliance risks.",
                gain: "Accelerate due diligence by 80% while minimizing human oversight errors.",
                tech: ["NLP", "Transformers"]
            },
            {
                title: "Case Law Precedent Discovery",
                pain: "Paralegals struggle to find that one obscure, highly relevant court ruling buried in millions of documents.",
                fix: "Semantic AI search understands the *context* of a case, not just keywords, to surface perfect precedents.",
                gain: "Build stronger litigation strategies in a fraction of the research time.",
                tech: ["Vector Embeddings", "Semantic Search"]
            },
            {
                title: "IP & Trademark Infringement Scanning",
                pain: "Protecting a brand globally is impossible when relying on manual web searches for copycats.",
                fix: "Computer vision continuously scrapes the web and global registries to find visually similar logos or stolen IP.",
                gain: "Protect brand equity actively with zero manual monitoring effort.",
                tech: ["Image Recognition", "Web Scraping Automation"]
            }
        ]
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
                <h2 className="font-display font-bold text-3xl md:text-5xl mb-4">
                    Industry <span className="text-primary">Transformations</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    A deep dive into the specialized AI architectures we build for specific sectors.
                </p>
            </div>

            <Tabs defaultValue="retail" value={activeTab} onValueChange={setActiveTab} className="w-full relative">
                <div className="flex justify-center mb-12 pb-4 pt-1 px-1 w-full relative">
                    <TabsList className="h-auto p-1.5 bg-secondary/20 backdrop-blur-md rounded-2xl md:rounded-full flex flex-wrap justify-center w-full max-w-4xl gap-2 border border-primary/20 shadow-inner">
                        {industries.map((industry) => (
                            <TabsTrigger
                                key={industry.id}
                                value={industry.id}
                                className="rounded-full px-5 py-2.5 text-sm font-semibold whitespace-nowrap data-[state=inactive]:text-muted-foreground data-[state=inactive]:hover:text-white data-[state=inactive]:hover:bg-foreground/10 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-purple-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-primary/20 transition-all flex items-center gap-2"
                            >
                                <industry.icon className={`w-4 h-4 ${activeTab === industry.id ? "text-white" : "text-muted-foreground group-hover:text-white"}`} />
                                <span className="inline-block">{industry.name}</span>
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </div>

                {industries.map((industry) => (
                    <TabsContent key={industry.id} value={industry.id} className="mt-0 focus-visible:outline-none focus:ring-0">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                            {/* Industry Image Panel */}
                            <div className="lg:col-span-4 space-y-6">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 aspect-video lg:aspect-auto lg:h-[calc(100%-2rem)] group bg-muted border border-border/50">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                                    {/* Using a generic tech abstract fallback if specific image is missing */}
                                    <img
                                        src="/images/headers/contact-hero.jpg"
                                        alt={`${industry.name} AI Solutions`}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-60 mix-blend-overlay"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop';
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-primary/10 mix-blend-color-burn z-10" />
                                    <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                                        <div className="bg-primary/20 p-3 rounded-lg w-max mb-4 border border-primary/30">
                                            <industry.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-3xl font-display font-bold text-white mb-2">{industry.name}</h3>
                                        <p className="text-white/80 text-sm leading-relaxed mb-4">
                                            Specialized machine learning and computer vision architectures designed explicitly for {industry.name.toLowerCase()} challenges.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Use Cases Grid */}
                            <div className="lg:col-span-8">
                                <div className="grid grid-cols-1 gap-6">
                                    {useCases[industry.id as keyof typeof useCases].map((useCase, index) => (
                                        <Card key={index} className="glass border border-primary/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:border-primary/30 transition-all group">
                                            <CardHeader className="pb-3 border-b border-primary/5">
                                                <div className="flex justify-between items-start gap-4">
                                                    <CardTitle className="text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">{useCase.title}</CardTitle>
                                                    <Badge variant="outline" className="shrink-0 bg-primary/5 text-primary border-primary/20">
                                                        Architecture
                                                    </Badge>
                                                </div>
                                            </CardHeader>
                                            <CardContent className="space-y-5 pt-4">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div className="bg-gradient-to-br from-destructive/10 to-transparent p-4 rounded-xl border border-destructive/20 relative overflow-hidden">
                                                        <div className="absolute top-0 right-0 p-2 opacity-10"><XCircle className="w-12 h-12" /></div>
                                                        <span className="text-[10px] font-bold text-destructive uppercase tracking-widest block mb-2">Legacy Constraint</span>
                                                        <p className="text-sm text-foreground/80 leading-relaxed font-medium">{useCase.pain}</p>
                                                    </div>
                                                    <div className="bg-gradient-to-br from-blue-500/10 to-transparent p-4 rounded-xl border border-blue-500/20 relative overflow-hidden">
                                                        <div className="absolute top-0 right-0 p-2 opacity-10"><ArrowRight className="w-12 h-12" /></div>
                                                        <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest block mb-2">AI Implementation</span>
                                                        <p className="text-sm text-foreground/80 leading-relaxed font-medium">{useCase.fix}</p>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-foreground/5">
                                                    <div className="flex items-center gap-2">
                                                        <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                                                        <span className="text-sm font-medium text-foreground">
                                                            <span className="text-muted-foreground mr-1">Outcome:</span>
                                                            <span className="text-green-500 font-bold">{useCase.gain}</span>
                                                        </span>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 justify-end">
                                                        {useCase.tech.map((t, i) => (
                                                            <Badge key={i} variant="secondary" className="text-[10px] bg-secondary/50 hover:bg-secondary border-none px-2 py-0.5">
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
