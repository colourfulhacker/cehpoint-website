
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Wrench, Hammer, UserCheck, Smartphone, Calendar, Clock } from "lucide-react";
import { Link } from "wouter";
import { formatArticleDate } from "@/lib/date-utils";
import { InsightSEO } from "@/components/seo/insight-seo";

export default function GigEconomyUpgrade() {
    return (
        <main className="min-h-screen bg-background pt-24 pb-16">
            <InsightSEO
                title="The Gig Economy Upgrade: Professionalizing Home Services"
                description="Turn chaotic home services into a professional empire. Discover how to organize electricians, plumbers, and cleaners with a simple app."
                articleSlug="gig-economy-upgrade"
                publishedDate="2024-04-22"
                category="Service Industry"
            />

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
                    <Badge className="mb-4" variant="secondary">Service Industry</Badge>
                    <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight">
                        The Gig Economy Upgrade: <span className="text-gradient">Professionalizing Home Services</span>
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-muted-foreground border-b border-border pb-8">
                        <div className="flex items-center">
                            <Wrench className="w-4 h-4 mr-2" aria-hidden="true" />
                            <span>Service Revolution</span>
                        </div>
                        <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" aria-hidden="true" />
                            <span>Published: {formatArticleDate("2024-04-22")}</span>
                        </div>
                        <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" aria-hidden="true" />
                            <span>Updated: April 22, 2024</span>
                        </div>
                    </div>
                </motion.div>

                <article className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-p:text-foreground prose-lead:text-foreground prose-strong:text-primary prose-a:text-primary prose-ul:text-foreground prose-li:text-foreground prose-blockquote:text-foreground">
                    <img src="/assets/blog/service-hero.png" alt="Service Booking App Interface" className="w-full h-auto rounded-xl mb-8 shadow-2xl"  decoding="async" fetchPriority="high"/>
                    <p className="lead text-xl text-foreground font-medium mb-8">
                        The local service market is chaotic. Finding a reliable plumber or electrician is a nightmare for customers. This chaos is your <span className="text-primary font-bold">opportunity</span>.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">The "Reliability" Gap</h2>
                    <p className="text-foreground/90">
                        In every city, thousands of skilled workers (electricians, cleaners, AC repairmen) sit idle, waiting for a call. Meanwhile, thousands of households struggle to find help. There is no shortage of skill, only a shortage of <strong>connection</strong>.
                    </p>
                    <p className="text-foreground/90">
                        The company that bridges this gap with <strong>trust</strong> and <strong>professionalism</strong> wins the market.
                    </p>

                    <div className="my-12 p-8 bg-secondary/10 rounded-2xl border-l-4 border-primary">
                        <h3 className="text-2xl font-bold mb-4 flex items-center text-foreground">
                            <UserCheck className="w-6 h-6 mr-3 text-primary" aria-hidden="true" />
                            Marketplace Engineering Stack
                        </h3>
                        <ul className="text-foreground/90 list-none p-0 space-y-2">
                            <li>• <strong>Proximity Matching:</strong> Using <strong>Google Maps Distance Matrix API</strong> to route the closest verified professional to the customer, minimizing travel time and fuel costs.</li>
                            <li>• <strong>Frictionless Payments:</strong> <strong>Stripe Connect</strong> handles complex split-payments, automatically taking your 20% commission and sending the 80% balance to the professional's bank account.</li>
                            <li>• <strong>Secure Privacy:</strong> <strong>Twilio Number Masking</strong> allows customers and professionals to communicate without ever seeing each other's private mobile numbers.</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Why Service Apps Scale Fast</h2>
                    <div className="grid md:grid-cols-2 gap-8 my-8">
                        <div>
                            <h4 className="font-bold text-lg text-foreground mb-2">High Ticket Size</h4>
                            <p className="text-foreground/90">
                                Repairs and maintenance aren't cheap. Just a small commission on AC servicing or home cleaning adds up to significant revenue fast.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg text-foreground mb-2">Zero Capital Model</h4>
                            <p className="text-foreground/90">
                                You don't own tools. You don't pay salaries. You only pay when a job is done. It's the ultimate asset-light business model.
                            </p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Your Tech Advantage</h2>
                    <p className="text-foreground/90">
                        Managing 50 freelancers on WhatsApp is impossible. You need a robust system. Cehpoint's <strong>Service Booking App</strong> handles everything:
                    </p>
                    <ul className="list-disc pl-4 space-y-2 text-foreground/90">
                        <li><strong>Geo-Fencing:</strong> Auto-assign jobs to the nearest available worker.</li>
                        <li><strong>Standardized Rate Cards:</strong> Eliminate bargaining and increase trust.</li>
                        <li><strong>Review System:</strong> Weed out bad workers and promote the best ones.</li>
                    </ul>

                    <p className="text-foreground/90 font-bold mt-8">
                        Stop looking for a job. Start giving jobs to thousands.
                    </p>

                </article>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <h2 className="text-2xl font-bold mb-6 text-foreground">Start Your Service Empire</h2>
                    <Link href="/services/business-app-catalog" className="inline-flex items-center justify-center rounded-md text-lg font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 shadow-lg hover:shadow-xl transform duration-200">
                        View Service App Demos
                    </Link>
                </motion.div>
            </div>
        </main >
    );
}
