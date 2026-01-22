
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, IndianRupee, TrendingUp, Smartphone } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";

export default function RuralGoldmineArticle() {
    return (
        <main className="min-h-screen bg-background pt-24 pb-16">
            <Helmet>
                <title>The Untapped Goldmine in Tier-3 India - Cehpoint Insights</title>
                <meta name="description" content="Why the next big tech revolution won't happen in Bangalore, but in your hometown. Learn how to monetize hyperlocal markets." />
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
                    <Badge className="mb-4" variant="secondary">Market Analysis</Badge>
                    <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight">
                        The Untapped Goldmine in <span className="text-gradient">Tier-3 India</span>
                    </h1>
                    <div className="flex items-center space-x-6 text-muted-foreground border-b border-border pb-8">
                        <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" aria-hidden="true" />
                            <span>Business Strategy</span>
                        </div>
                        <div className="flex items-center">
                            <span>October 24, 2025</span>
                        </div>
                    </div>
                </motion.div>

                <article className="prose prose-lg dark:prose-invert max-w-none text-foreground">
                    <p className="lead text-xl text-foreground font-medium mb-8">
                        Everyone is looking at Bangalore and Mumbai. But the real money? It's sitting right in your village, your town, your district. While the giants fight for the 1%, the 99% of India is waiting for YOU.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">The "Amazon Gap"</h2>
                    <p className="text-foreground/90">
                        Big players like Amazon and Zomato operate on massive scale. They can't deliver a single packet of milk to a remote village in 10 minutes. They can't connect a local farmer directly to the town market without massive commissions.
                    </p>
                    <p className="text-foreground/90 font-bold">
                        This is your monopoly.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 my-12">
                        <div className="bg-card border p-6 rounded-xl shadow-sm">
                            <h4 className="text-xl font-bold mb-4 flex items-center text-primary">
                                <Smartphone className="w-5 h-5 mr-2" aria-hidden="true" /> The Opportunity
                            </h4>
                            <p className="text-sm text-foreground/90">
                                700 Million Indians are online. They know how to use WhatsApp. They know how to use UPI. What they lack is a <strong>local service ecosystem</strong> designed for them.
                            </p>
                        </div>
                        <div className="bg-card border p-6 rounded-xl shadow-sm">
                            <h4 className="text-xl font-bold mb-4 flex items-center text-green-600 dark:text-green-500">
                                <IndianRupee className="w-5 h-5 mr-2" aria-hidden="true" /> The Investment
                            </h4>
                            <p className="text-sm text-foreground/90">
                                You don't need crores. You need a simple, robust app. With Cehpoint's catalog, you can launch a full-fledged delivery or service platform for as low as ₹15,000.
                            </p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Why Local Founders Win</h2>
                    <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                        <li><strong>Trust:</strong> Your customers know your face. They don't trust a faceless corporation.</li>
                        <li><strong>Agility:</strong> You can change your prices or services in 5 minutes.</li>
                        <li><strong>Low Overhead:</strong> No fancy offices. Run your empire from your smartphone.</li>
                    </ul>

                    <div className="my-12 p-8 bg-primary/5 border border-primary/20 rounded-2xl">
                        <h3 className="text-2xl font-bold mb-4 flex items-center text-foreground">
                            <TrendingUp className="w-6 h-6 mr-3 text-primary" aria-hidden="true" />
                            Case Study: The "Vegetable King" of Pakur
                        </h3>
                        <p className="text-foreground/90 mb-4">
                            One of our partners in a small Jharkhand town launched a simple veggie delivery app. He didn't build it from scratch; he bought a template.
                        </p>
                        <p className="text-foreground/90 font-bold">
                            Investment: ₹20,000.<br />
                            Monthly Profit Today: ₹1.5 Lakhs.
                        </p>
                        <p className="text-foreground/90 mt-2">
                            He owns the district market now. What are you waiting for?
                        </p>
                    </div>

                </article>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <h2 className="text-2xl font-bold mb-6 text-foreground">Own Your Town Today</h2>
                    <Link href="/services/business-app-catalog" className="inline-flex items-center justify-center rounded-md text-lg font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 shadow-lg hover:shadow-xl transform duration-200">
                        Explore Local Business Ideas
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
