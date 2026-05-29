
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, ShieldAlert, Lock, Eye, Clock, MapPin, TrendingUp, Coins, Rocket, Store, UserX, UserCheck, GraduationCap, ShoppingBag, Wrench, Stethoscope, Truck, ShoppingCart, Scale, Landmark, Factory, Building, Sprout, HardHat, Coffee } from "lucide-react";
import { Link } from "wouter";
import SEO from "@/components/seo";
import BreadcrumbSchema from "@/components/seo/breadcrumb-schema";
import { getYesterdayDate } from "@/lib/date-utils";
import { useTranslation } from "react-i18next";

export default function Insights() {
    const { t } = useTranslation();
    const articles = [
        {
            id: "healthcare-ai-triage",
            title: "How a Local Clinic Reclaimed 40 Hours a Week with Under $1,000 in AI Tools",
            excerpt: "Discover how a local clinic eliminated manual patient data entry weekly using a targeted NLP automated triage system.",
            date: getYesterdayDate(),
            author: "Automation Team",
            category: "Healthcare & Tech",
            readTime: "4 min read",
            slug: "/insights/healthcare-ai-triage",
            icon: Stethoscope
        },
        {
            id: "logistics-route-automation",
            title: "How We Slashed Fleet Fuel Costs by 18% Using a Sub-$1,000 AI Dispatcher",
            excerpt: "Read how a regional delivery network slashed fuel costs in under a week using automated webhook dispatching via WhatsApp.",
            date: getYesterdayDate(),
            author: "Supply Chain Solutions",
            category: "Supply Chain",
            readTime: "5 min read",
            slug: "/insights/logistics-route-automation",
            icon: Truck
        },
        {
            id: "retail-inventory-ai",
            title: "Ending Stockouts: How a $1k Machine Learning Pipeline Saved a Retailer 20% in Lost Revenue",
            excerpt: "See how a retail chain cut inventory waste by 40% utilizing machine learning to predict consumer demand automatically.",
            date: getYesterdayDate(),
            author: "Retail Technologies",
            category: "Retail & E-commerce",
            readTime: "4 min read",
            slug: "/insights/retail-inventory-ai",
            icon: ShoppingCart
        },
        {
            id: "legal-contract-automation",
            title: "How We Eliminated 60% of Non-Billable Hours with a $1,000 NLP Bot",
            excerpt: "Discover how a corporate law firm utilized a secure NLP service to cut non-billable contract review hours by 60%.",
            date: getYesterdayDate(),
            author: "Legal Ops",
            category: "Legal & Compliance",
            readTime: "5 min read",
            slug: "/insights/legal-contract-automation",
            icon: Scale
        },
        {
            id: "finance-fraud-ml",
            title: "Ending the Fraud Bleed: ML Anomaly Detection Engine for under $1000",
            excerpt: "Read how a boutique credit institution swapped manual auditing for real-time Machine Learning anomaly detection.",
            date: getYesterdayDate(),
            author: "FinTech Innovation",
            category: "Finance & Banking",
            readTime: "4 min read",
            slug: "/insights/finance-fraud-ml",
            icon: Landmark
        },
        {
            id: "manufacturing-rpa",
            title: "Eliminating 50 Weekly Hours of Manual Reporting in Manufacturing for Under $1,000",
            excerpt: "Discover how a factory deployed a lightweight Robotic Process Automation (RPA) bot to bridge modern data forms with legacy ERPs instantaneously.",
            date: getYesterdayDate(),
            author: "Industrial Tech",
            category: "Manufacturing",
            readTime: "5 min read",
            slug: "/insights/manufacturing-rpa",
            icon: Factory
        },
        {
            id: "real-estate-ai-valuation",
            title: "Closing 30% More Deals: AI Lead Scoring & Valuation for Under $1,000",
            excerpt: "See how a real estate broker slashed comp-generation queues from 48 hours to 10 seconds via API-driven Automated Valuation Models.",
            date: getYesterdayDate(),
            author: "PropTech Division",
            category: "Real Estate",
            readTime: "5 min read",
            slug: "/insights/real-estate-ai-valuation",
            icon: Building
        },
        {
            id: "edtech-automated-enrollment",
            title: "Scaling Admissions: Automating the Enrollment Pipeline for Under $1,000",
            excerpt: "Learn how an academy turned 400 daily manual WhatsApp questions into an instant-response, 24/7 converting RAG AI agent.",
            date: getYesterdayDate(),
            author: "EdTech Strategist",
            category: "Education Tech",
            readTime: "4 min read",
            slug: "/insights/edtech-automated-enrollment",
            icon: GraduationCap
        },
        {
            id: "agriculture-iot-automation",
            title: "Precision Farming: How IoT Cut Water Waste by 40% for Under $1,000",
            excerpt: "Discover how a commercial farm reduced water costs by overriding scheduled watering with hyper-local weather logic arrays.",
            date: getYesterdayDate(),
            author: "AgriTech Lead",
            category: "Smart Farming",
            readTime: "5 min read",
            slug: "/insights/agriculture-iot-automation",
            icon: Sprout
        },
        {
            id: "construction-compliance-ai",
            title: "Ending Safety Violations: Automated Visual Compliance for Under $1,000",
            excerpt: "Read how a construction firm deployed Edge AI computer vision to monitor real-time worker safety and eliminate costly OSHA fines.",
            date: getYesterdayDate(),
            author: "Site Safety Dev",
            category: "Construction",
            readTime: "5 min read",
            slug: "/insights/construction-compliance-ai",
            icon: HardHat
        },
        {
            id: "hospitality-ai-concierge",
            title: "Reviving the Digital Front Desk: The $1,000 AI Concierge",
            excerpt: "How an independent boutique hotel cut OTA commission fees and secured 2:00 AM overseas bookings instantly.",
            date: getYesterdayDate(),
            author: "Hospitality Lead",
            category: "Travel & Hospitality",
            readTime: "4 min read",
            slug: "/insights/hospitality-ai-concierge",
            icon: Coffee
        },
        {
            id: "cyber-security-myths",
            title: "5 Cyber Security Myths That Will Bankrupt Your Business",
            excerpt: "Stop believing that you are 'too small to target'. We debunk the 5 most dangerous myths leaving your business exposed.",
            date: getYesterdayDate(),
            author: "Security Team",
            category: "Security Awareness",
            readTime: "5 min read",
            slug: "/insights/cyber-security-myths",
            icon: ShieldAlert
        },
        {
            id: "digital-forensics-roi",
            title: "The ROI of Digital Forensics: Why It's an Investment, Not an Expense",
            excerpt: "Most companies treat digital forensics as a clean-up crew. Smart leaders use it as a proactive shield that pays for itself. 100x ROI explained.",
            date: getYesterdayDate(),
            author: "Business Strategy",
            category: "Business Strategy",
            readTime: "5 min read",
            slug: "/insights/digital-forensics-roi",
            icon: TrendingUp
        },
        {
            id: "cto-trap",
            title: "The CTO Trap: Why Hiring a Technical Co-Founder is a Liability",
            excerpt: "Stop giving away 50% equity for code. Learn why smart founders hire tools, not bosses.",
            date: getYesterdayDate(),
            author: "Startup Advisor",
            category: "Founder Advice",
            readTime: "4 min read",
            slug: "/insights/cto-trap",
            icon: UserX
        },
        {
            id: "hyperlocal-future",
            title: "E-commerce is Dead. Long Live Hyperlocal.",
            excerpt: "Don't fight Amazon. Own your neighborhood. The future of retail is 10-minute delivery from the store next door.",
            date: getYesterdayDate(),
            author: "Strategy Team",
            category: "Retail Evolution",
            readTime: "5 min read",
            slug: "/insights/hyperlocal-future",
            icon: Store
        },
        {
            id: "rural-goldmine",
            title: "The Untapped Goldmine in Tier-3 India: Why The Next Unicorn Will Come From a Village",
            excerpt: "Forget Bangalore. The 700 million users in rural India are waiting for YOU. Discover how a ₹15k app can dominate a district.",
            date: getYesterdayDate(),
            author: "Strategy Team",
            category: "Market Analysis",
            readTime: "4 min read",
            slug: "/insights/rural-goldmine",
            icon: MapPin
        },
        {
            id: "15k-revolution",
            title: "The ₹15,000 Startup Revolution: Launch a Tech Business for the Price of a Smartphone",
            excerpt: "Break the myth that you need millions. We break down the exact math of how a 15k investment can generate a full-time income.",
            date: getYesterdayDate(),
            author: "Finance Team",
            category: "Financial Freedom",
            readTime: "5 min read",
            slug: "/insights/15k-revolution",
            icon: Coins
        },
        {
            id: "escape-9-5",
            title: "The Salary Trap: Why Your 9-5 is Killing Your Potential",
            excerpt: "Stop trading time for money. Learn how smart professionals are building automated digital assets on the side.",
            date: getYesterdayDate(),
            author: "Career Coach",
            category: "Entrepreneurship",
            readTime: "6 min read",
            slug: "/insights/escape-9-5",
            icon: Rocket
        },
        {
            id: "ransomware-paradox",
            title: "The Ransomware Paradox: Why Paying is a Trap",
            excerpt: "Paying the ransom doesn't save your business. It marks you as a target. Learn the reality of ransomware negotiation and why you shouldn't pay.",
            date: getYesterdayDate(),
            author: "Defensive Security",
            category: "Cyber Threat",
            readTime: "6 min read",
            slug: "/insights/ransomware-paradox",
            icon: ShieldAlert
        },
        {
            id: "hr-forensics",
            title: "The Internal Threat: Is Your Employee Selling Your Data?",
            excerpt: "80% of data breaches involve insider threats. Learn how digital forensics can secure your HR process and protect your IP.",
            date: getYesterdayDate(),
            author: "Corporate Intel",
            category: "HR Prevention",
            readTime: "5 min read",
            slug: "/insights/hr-forensics",
            icon: UserCheck
        },
        {
            id: "ethical-standards-digital-investigation",
            title: "The Silent Crisis in Digital Investigation: Why Transparency is the New Gold Standard",
            excerpt: "In an industry plagued by overpromises and hidden costs, business leaders are waking up to a harsh reality. Discover why 'Certified Ethical' isn't just a buzzword.",
            date: getYesterdayDate(),
            author: "Cehpoint Research Team",
            category: "Industry Standards",
            readTime: "5 min read",
            slug: "/insights/ethical-standards",
            icon: ShieldAlert
        },
        {
            id: "ai-vs-reality",
            title: "AI in Forensics: The Fine Line Between Innovation and Fabrication",
            excerpt: "Is your forensic provider actually using AI, or just selling you a script? We expose the common 'AI-washing' tactics used by budget competitors.",
            date: getYesterdayDate(),
            author: "Cehpoint Tech Lead",
            category: "Technology",
            readTime: "4 min read",
            slug: "/insights/ai-vs-reality",
            icon: Lock
        },
        {
            id: "hidden-cost-cheap-security",
            title: "The True Cost of 'Cheap' Cyber Security: A Case Study",
            excerpt: "When the invoice is low, the price is paid in data. An anonymous look at how a mid-sized firm lost ₹50L by choosing the cheapest vendor.",
            date: getYesterdayDate(),
            author: "Senior Analyst",
            category: "Case Study",
            readTime: "6 min read",
            slug: "/insights/hidden-costs",
            icon: Eye
        },
        {
            id: "gig-economy-upgrade",
            title: "The Gig Economy Upgrade: Professionalizing Home Services",
            excerpt: "Turn chaotic home services into a professional empire. Discover how to organize electricians, plumbers, and cleaners with a simple app.",
            date: getYesterdayDate(),
            author: "Service Industry Lead",
            category: "Service Industry",
            readTime: "5 min read",
            slug: "/insights/gig-economy-upgrade",
            icon: Wrench
        },
        {
            id: "edtech-evolution",
            title: "EdTech 2.0: Moving Beyond the Classroom",
            excerpt: "Local coaching centers are dying. Digital academies are thriving. Learn how to transform your teaching skill into a scalable global business.",
            date: getYesterdayDate(),
            author: "EdTech Strategist",
            category: "Education Technology",
            readTime: "5 min read",
            slug: "/insights/edtech-evolution",
            icon: GraduationCap
        },
        {
            id: "fashion-tech-revolution",
            title: "From Home Boutique to Global Brand: The Digital Fashion Wave",
            excerpt: "Turn your small boutique into a national brand. Discover how local fashion sellers are using apps to beat algorithms and build loyal communities.",
            date: getYesterdayDate(),
            author: "Fashion Tech Expert",
            category: "Direct to Consumer",
            readTime: "5 min read",
            slug: "/insights/fashion-tech-revolution",
            icon: ShoppingBag
        }
    ];

    return (
        <main className="min-h-screen pt-24 pb-16 bg-background">
            <SEO
                title="Industry Insights & Business Ideas"
                description="Unlock your potential with our insights. From low-cost startup ideas to deep industry analysis, we provide the blueprint for your success."
                url="https://www.cehpoint.co.in/insights"
                canonical="https://www.cehpoint.co.in/insights"
                image="/assets/blog/business-hero-generic.png"
            />
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "https://www.cehpoint.co.in/" },
                    { name: "Insights", url: "https://www.cehpoint.co.in/insights" }
                ]}
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <Badge variant="outline" className="mb-4">
                        {t("pages.insights.eyebrow")}
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-black text-primary mb-6">
                        {t("pages.insights.title")} <span className="text-primary">{t("pages.insights.titleAccent")}</span>
                    </h1>
                    <p className="text-xl text-foreground max-w-3xl mx-auto">
                        {t("pages.insights.subtitle")}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <motion.div
                            key={article.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <article className="h-full">
                                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-t-4 border-primary/20 hover:border-primary group bg-card/50 backdrop-blur flex flex-col">
                                    <CardHeader>
                                        <div className="flex justify-between items-start mb-4">
                                            <Badge variant="secondary" className="bg-primary/10 text-primary">
                                                {article.category}
                                            </Badge>
                                            <article.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" aria-hidden="true" />
                                        </div>
                                        <CardTitle className="text-xl font-bold leading-tight mb-2 group-hover:text-primary transition-colors">
                                            <Link href={article.slug} className="hover:text-primary transition-colors focus:outline-none focus:underline">
                                                {article.title}
                                            </Link>
                                        </CardTitle>
                                        <div className="flex items-center text-sm text-muted-foreground space-x-4">
                                            <span className="flex items-center">
                                                <Calendar className="w-3 h-3 mr-1" aria-hidden="true" />
                                                {article.date}
                                            </span>
                                            <span className="flex items-center">
                                                <Clock className="w-3 h-3 mr-1" aria-hidden="true" />
                                                {article.readTime}
                                            </span>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <CardDescription className="text-base text-foreground/80">
                                            {article.excerpt}
                                        </CardDescription>
                                    </CardContent>
                                    <CardFooter>
                                        <Link href={article.slug} className="w-full flex justify-between items-center py-2 px-4 rounded-md text-sm font-medium transition-colors hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-foreground/80 hover:text-foreground">
                                            Read More
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </CardFooter>
                                </Card>
                            </article>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
