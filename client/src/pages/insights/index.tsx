
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, ShieldAlert, Lock, Eye, Clock, MapPin, TrendingUp, Coins, Rocket, Store, UserX, UserCheck, GraduationCap, ShoppingBag, Wrench } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";

export default function Insights() {
    const articles = [
        {
            id: "cyber-security-myths",
            title: "5 Cyber Security Myths That Will Bankrupt Your Business",
            excerpt: "Stop believing that you are 'too small to target'. We debunk the 5 most dangerous myths leaving your business exposed.",
            date: "October 31, 2025",
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
            date: "October 30, 2025",
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
            date: "October 28, 2025",
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
            date: "October 27, 2025",
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
            date: "October 24, 2025",
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
            date: "October 20, 2025",
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
            date: "October 22, 2025",
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
            date: "October 26, 2025",
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
            date: "October 29, 2025",
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
            date: "October 24, 2025",
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
            date: "October 10, 2025",
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
            date: "September 28, 2025",
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
            date: "November 2, 2025",
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
            date: "November 5, 2025",
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
            date: "November 8, 2025",
            author: "Fashion Tech Expert",
            category: "Direct to Consumer",
            readTime: "5 min read",
            slug: "/insights/fashion-tech-revolution",
            icon: ShoppingBag
        }
    ];

    return (
        <main className="min-h-screen pt-24 pb-16 bg-background">
            <Helmet>
                <title>Industry Insights & Business Ideas - Cehpoint</title>
                <meta name="description" content="Unlock your potential with our insights. From low-cost startup ideas to deep industry analysis, we provide the blueprint for your success." />
            </Helmet>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <Badge variant="outline" className="mb-4">
                        Industry Insights
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-black text-gradient mb-6">
                        Unlock Your <span className="text-primary">Empire</span>
                    </h1>
                    <p className="text-xl text-foreground max-w-3xl mx-auto">
                        Whether you are fighting cybercrime or building a business, knowledge is your weapon.
                        Read the blueprints that are creating the next generation of leaders.
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
