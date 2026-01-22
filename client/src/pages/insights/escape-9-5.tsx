
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Rocket, Briefcase, Zap, Lock } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";

export default function Escape95Article() {
    return (
        <main className="min-h-screen bg-background pt-24 pb-16">
            <Helmet>
                <title>The Salary Trap: Why Your 9-5 is Killing Your Potential - Cehpoint Insights</title>
                <meta name="description" content="Stop trading time for money. Learn how smart professionals are building automated digital assets on the side." />
            </Helmet>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/insights" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 mb-8 pl-0 hover:pl-2">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Insights
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <Badge className="mb-4" variant="secondary">Entrepreneurship</Badge>
                    <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight">
                        The Salary Trap: <span className="text-gradient">Why Your 9-5 is Safety, Not Success</span>
                    </h1>
                    <div className="flex items-center space-x-6 text-muted-foreground border-b border-border pb-8">
                        <div className="flex items-center">
                            <Briefcase className="w-4 h-4 mr-2" aria-hidden="true" />
                            <span>Career Advice</span>
                        </div>
                        <div className="flex items-center">
                            <span>October 22, 2025</span>
                        </div>
                    </div>
                </motion.div>

                <article className="prose prose-lg dark:prose-invert max-w-none text-foreground">
                    <p className="lead text-xl text-foreground font-medium mb-8">
                        You work 9 hours a day. You commute for 2. You get paid once a month. If you stop working, the money stops. That's not a career; that's a subscription to survival.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">The Asset Mindset</h2>
                    <p className="text-foreground/90">
                        Wealthy people don't just work; they build assets. Real estate, stocks, businesses. Things that pay them while they sleep. But buying a house requires crores. buying stocks requires risky knowledge.
                    </p>
                    <p className="text-foreground/90 font-bold">
                        Building a Digital Asset (App) requires peanuts.
                    </p>

                    <div className="my-12 p-8 bg-secondary/10 rounded-2xl border-l-4 border-secondary">
                        <h3 className="text-2xl font-bold mb-4 flex items-center text-foreground">
                            <Zap className="w-6 h-6 mr-3 text-secondary-foreground" aria-hidden="true" />
                            Digital Real Estate
                        </h3>
                        <p className="mb-0 text-foreground/90">
                            Think of an app like a digital shop. You open it once (launch). You stock it (features). And then it runs. A simple appointment booking app for local doctors can earn ₹20k/month on autopilot. That's more than a 2 Lakh FD interest.
                        </p>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">"But I Can't Code!"</h2>
                    <p className="text-foreground/90">
                        Good. You shouldn't. The best CEOs don't write code; they own the vision.
                    </p>
                    <p className="text-foreground/90">
                        At Cehpoint, we have pre-built the engines. You just need to drive. Choose from 50+ business models—Edutech, E-commerce, Fintech. We hand you the keys. You keep 100% of the profit.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">The Risk Analysis</h2>
                    <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                        <li><strong>Stay in 9-5:</strong> Risk of layoffs, inflation eating salary, 0% control.</li>
                        <li><strong>Start a Side Hustle:</strong> Risk of ₹15,000 investment. Upside of infinite income.</li>
                    </ul>
                </article>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <h2 className="text-2xl font-bold mb-6 text-foreground">Build Your Escape Pod</h2>
                    <Link href="/services/business-app-catalog" className="inline-flex items-center justify-center rounded-md text-lg font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-foreground text-background hover:bg-foreground/90 h-12 px-8 shadow-lg hover:shadow-xl transform duration-200">
                        See 50+ Business Ideas
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
