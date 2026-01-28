
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Store, Globe, MapPin, ShoppingBag } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";

export default function HyperlocalFutureArticle() {
    return (
        <main className="min-h-screen bg-background pt-24 pb-16">
            <Helmet>
                <title>Why E-commerce is Dead: The Rise of Hyperlocal - Cehpoint Insights</title>
                <meta name="description" content="Don't fight Amazon. Own your neighborhood. The future of retail is 10-minute delivery from the store next door." />
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
                    <Badge className="mb-4" variant="secondary">Business Strategy</Badge>
                    <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight">
                        E-commerce is Dead. <span className="text-gradient">Long Live Hyperlocal.</span>
                    </h1>
                    <div className="flex items-center space-x-6 text-muted-foreground border-b border-border pb-8">
                        <div className="flex items-center">
                            <Store className="w-4 h-4 mr-2" aria-hidden="true" />
                            <span>Retail Evolution</span>
                        </div>
                        <div className="flex items-center">
                            <span>October 27, 2025</span>
                        </div>
                    </div>
                </motion.div>

                <article className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-p:text-foreground prose-lead:text-foreground prose-strong:text-primary prose-a:text-primary prose-ul:text-foreground prose-li:text-foreground prose-blockquote:text-foreground">
                    <img src="/assets/blog/hyperlocal-hero.png" alt="Hyperlocal Delivery Service" className="w-full h-auto rounded-xl mb-8 shadow-2xl" />
                    <p className="lead text-xl text-foreground font-medium mb-8">
                        Trying to build the "Next Amazon" is a suicide mission. You cannot compete with their logistics. You cannot compete with their pricing. But you can beat them where they are weakest: <span className="text-primary font-bold">Time.</span>
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">The 10-Minute War</h2>
                    <p className="text-foreground/90">
                        The modern Indian consumer is impatient. They don't want to wait 2 days for a phone charger. They want it *now*. This shift has killed traditional drop-shipping and birthed the <strong>Hyperlocal Empire</strong>.
                    </p>

                    <div className="my-12 p-8 bg-secondary/10 rounded-2xl border-l-4 border-primary">
                        <h3 className="text-2xl font-bold mb-4 flex items-center text-foreground">
                            <MapPin className="w-6 h-6 mr-3 text-primary" aria-hidden="true" />
                            The Neighborhood Monopoly
                        </h3>
                        <p className="mb-0 text-foreground/90">
                            Imagine an app that connects the 50 Kirana stores in your sector to the 5,000 residents in high-rise apartments nearby. No warehouse needed. No inventory risk. Just pure connection.
                        </p>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Why Hyperlocal Wins</h2>
                    <div className="grid md:grid-cols-2 gap-8 my-8">
                        <div>
                            <h4 className="font-bold text-lg text-foreground mb-2">For the Startup (You)</h4>
                            <ul className="list-disc pl-4 space-y-2 text-foreground/90">
                                <li><strong>Zero Inventory:</strong> You don't buy products; you move them.</li>
                                <li><strong>Low CAC:</strong> Marketing is offline (pamphlets/word of mouth).</li>
                                <li><strong>High Loyalty:</strong> You are the "community" app.</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg text-foreground mb-2">For the Customer</h4>
                            <ul className="list-disc pl-4 space-y-2 text-foreground/90">
                                <li><strong>Speed:</strong> 15-minute delivery beats 2-day shipping.</li>
                                <li><strong>Trust:</strong> Buying from "Raju Kirana" feels safer than a random seller.</li>
                                <li><strong>Easy Returns:</strong> The shop is down the street.</li>
                            </ul>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">The Tech is Ready</h2>
                    <p className="text-foreground/90">
                        You don't need a team of engineers to build a Blinkit clone. Cehpoint provides the entire Hyperlocal Stack—Customer App, Delivery Partner App, and Store Dashboard—ready to deploy in 48 hours.
                    </p>
                    <p className="text-foreground/90 font-bold">
                        Stop thinking global. Get rich local.
                    </p>

                </article>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <h2 className="text-2xl font-bold mb-6 text-foreground">Launch Your Local Empire</h2>
                    <Link href="/services/business-app-catalog" className="inline-flex items-center justify-center rounded-md text-lg font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 shadow-lg hover:shadow-xl transform duration-200">
                        See Hyperlocal App Demos
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
