
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Coins, Calculator, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";

export default function StartupRevolutionArticle() {
    return (
        <main className="min-h-screen bg-background pt-24 pb-16">
            <Helmet>
                <title>The ₹15,000 Startup Revolution - Cehpoint Insights</title>
                <meta name="description" content="You don't need VC funding. Break down the math of starting a profitable tech business with just ₹15k." />
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
                    <Badge className="mb-4" variant="secondary">Financial Freedom</Badge>
                    <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight">
                        The <span className="text-green-600 dark:text-green-400">₹15,000</span> Startup Revolution
                    </h1>
                    <div className="flex items-center space-x-6 text-muted-foreground border-b border-border pb-8">
                        <div className="flex items-center">
                            <Coins className="w-4 h-4 mr-2" aria-hidden="true" />
                            <span>Business Finance</span>
                        </div>
                        <div className="flex items-center">
                            <span>October 20, 2025</span>
                        </div>
                    </div>
                </motion.div>

                <article className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-p:text-foreground prose-lead:text-foreground prose-strong:text-primary prose-a:text-primary prose-ul:text-foreground prose-li:text-foreground prose-blockquote:text-foreground">
                    <img src="/assets/blog/business-hero-generic.png" alt="Startup Cost Comparison" className="w-full h-auto rounded-xl mb-8 shadow-2xl" />
                    <p className="lead text-xl text-foreground font-medium mb-8">
                        They told you business is expensive. They told you that you need an MBA. They told you that you need investors. They lied.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">The New Entry Barrier: Zero</h2>
                    <p className="text-foreground/90">
                        In 2010, building a tech startup cost ₹50 Lakhs. In 2025, with Cehpoint's pre-built ecosystem, it costs ₹15,000. That's less than the price of a mid-range smartphone.
                    </p>

                    <div className="bg-card border rounded-xl overflow-hidden my-8 overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <caption className="sr-only">Comparison of Traditional Startup vs Cehpoint Model</caption>
                            <thead>
                                <tr className="bg-muted border-b">
                                    <th scope="col" className="p-4 font-bold text-foreground">Expense</th>
                                    <th scope="col" className="p-4 font-bold text-red-500 dark:text-red-400">Traditional Way</th>
                                    <th scope="col" className="p-4 font-bold text-green-600 dark:text-green-400">The Cehpoint Way</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                <tr>
                                    <th scope="row" className="p-4 font-semibold text-foreground border-r bg-muted/20">Development</th>
                                    <td className="p-4 text-sm text-foreground/90">₹5,00,000+</td>
                                    <td className="p-4 text-sm text-green-600 dark:text-green-400 font-bold">Starts @ ₹15,000</td>
                                </tr>
                                <tr>
                                    <th scope="row" className="p-4 font-semibold text-foreground border-r bg-muted/20">Time to Market</th>
                                    <td className="p-4 text-sm text-foreground/90">6 Months</td>
                                    <td className="p-4 text-sm text-green-600 dark:text-green-400 font-bold">48 Hours</td>
                                </tr>
                                <tr>
                                    <th scope="row" className="p-4 font-semibold text-foreground border-r bg-muted/20">Tech Knowledge</th>
                                    <td className="p-4 text-sm text-foreground/90">Required (or expensive CTO)</td>
                                    <td className="p-4 text-sm text-green-600 dark:text-green-400 font-bold">None (We handle it)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">The Math of ROI</h2>
                    <p className="text-foreground/90">
                        Let's do the math on a ₹15k investment for a "Local Service Finder" app.
                    </p>
                    <div className="pl-6 border-l-4 border-green-500 my-6 space-y-2">
                        <p className="text-lg font-bold flex items-center text-foreground"><Calculator className="w-5 h-5 mr-2" aria-hidden="true" /> Daily Goal: 1 Subscription @ ₹500</p>
                        <p className="text-foreground/90">If you convince just <strong>ONE</strong> local plumber or electrician to join your platform daily.</p>
                        <p className="text-foreground/90"><strong>Monthly Revenue:</strong> ₹15,000</p>
                        <p className="text-foreground/90"><strong>Break Even:</strong> 30 Days.</p>
                        <p className="text-foreground/90"><strong>Year 1 Profit:</strong> ₹1,65,000 (with literally 1 sale a day).</p>
                    </div>

                    <p className="text-foreground/90 font-bold mt-8">
                        This isn't rocket science. It's basic arithmetic. And the numbers are screaming at you to start.
                    </p>

                </article>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <h2 className="text-2xl font-bold mb-6 text-foreground">Start Before The Price Goes Up</h2>
                    <Link href="/services/business-app-catalog" className="inline-flex items-center justify-center rounded-md text-lg font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 shadow-lg hover:shadow-xl transform duration-200">
                        Go To Business Catalog
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
