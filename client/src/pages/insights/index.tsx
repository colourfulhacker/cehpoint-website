
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, ShieldAlert, Lock, Eye, Clock } from "lucide-react";
import { Link } from "wouter";

export default function Insights() {
    const articles = [
        {
            id: "ethical-standards-digital-investigation",
            title: "The Silent Crisis in Digital Investigation: Why Transparency is the New Gold Standard",
            excerpt: "In an industry plagued by overpromises and hidden costs, business leaders are waking up to a harsh reality. Discover why 'Certified Ethical' isn't just a buzzword—it's your only legal safeguard.",
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
        }
    ];

    return (
        <div className="min-h-screen pt-24 pb-16 bg-background">
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
                        The Unspoken Truths
                    </h1>
                    <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
                        We don't just solve crimes; we expose the flaws in the industry.
                        Read our latest reports on what really happens behind the scenes of digital investigation.
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
                            <Card className="h-full hover:shadow-2xl transition-all duration-300 border-t-4 border-primary/20 hover:border-primary group bg-card/50 backdrop-blur">
                                <CardHeader>
                                    <div className="flex justify-between items-start mb-4">
                                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                                            {article.category}
                                        </Badge>
                                        <article.icon className="w-6 h-6 text-foreground/40 group-hover:text-primary transition-colors" />
                                    </div>
                                    <CardTitle className="text-xl font-bold leading-tight mb-2 group-hover:text-primary transition-colors">
                                        <Link href={article.slug}>
                                            {article.title}
                                        </Link>
                                    </CardTitle>
                                    <div className="flex items-center text-sm text-foreground/60 space-x-4">
                                        <span className="flex items-center">
                                            <Calendar className="w-3 h-3 mr-1" />
                                            {article.date}
                                        </span>
                                        <span className="flex items-center">
                                            <Clock className="w-3 h-3 mr-1" />
                                            {article.readTime}
                                        </span>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base">
                                        {article.excerpt}
                                    </CardDescription>
                                </CardContent>
                                <CardFooter>
                                    <Link href={article.slug}>
                                        <Button variant="ghost" className="w-full group-hover:bg-primary/10 flex justify-between items-center">
                                            Read In-Depth Analysis
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
