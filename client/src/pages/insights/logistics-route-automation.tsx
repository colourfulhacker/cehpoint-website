import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Truck, TrendingDown, MapPin, Clock, Calendar } from "lucide-react";
import { formatArticleDate } from "@/lib/date-utils";
import { Link } from "wouter";
import { InsightSEO } from "@/components/seo/insight-seo";

export default function LogisticsRouteAutomation() {
    return (
        <main className="min-h-screen bg-background pt-24 pb-16">
            <InsightSEO
                title="Fleet Fuel Costs Reduction: Sub-$1,000 AI Dispatcher"
                description="Read how a regional delivery network slashed fuel costs in under a week using automated webhook dispatching via WhatsApp."
                articleSlug="logistics-route-automation"
                publishedDate="2025-05-30"
                category="Supply Chain"
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/insights" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 mb-8 pl-0 hover:pl-2">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Insights
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <Badge className="mb-4 bg-orange-500/10 text-orange-500 hover:bg-orange-500/20 border-orange-500/20">Supply Chain Logistics</Badge>
                    <h1 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
                        How We Slashed Fleet Fuel Costs by <span className="text-orange-500">18%</span> Using a Sub-$1,000 AI Dispatcher
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-muted-foreground border-b border-border pb-8">
                        <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>Published: {formatArticleDate("2025-05-30")}</span>
                        </div>
                        <div className="flex items-center text-green-500 font-medium">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>Updated: May 30, 2025</span>
                        </div>
                        <div className="flex items-center">
                            <Truck className="w-4 h-4 mr-2" />
                            <span>Case Study</span>
                        </div>
                    </div>
                </motion.div>

                <article className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-p:text-foreground/90 prose-strong:text-primary">
                    <img src="https://images.unsplash.com/photo-1586528116311-ad8ed7c80a71?w=1200&h=600&fit=crop" alt="Logistics Automation Tech" className="w-full h-auto rounded-xl mb-8 shadow-2xl opacity-90"  decoding="async" fetchPriority="high"/>

                    <p className="lead text-xl font-medium mb-8">
                        In logistics, margins are razor-thin. Fuel and time are the only currencies that matter. We recently showed a resilient regional logistics partner how easy it is to capture those margins back utilizing emerging technology that integrates seamlessly with their current operations.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3"><MapPin className="text-red-500" /> The Before: Spreadsheet Dispatching</h2>
                    <p>
                        A multi-city delivery operator managing 35 trucks was stuck in the past. Every morning, two dispatchers spent a combined 6 hours painstakingly mapping out multi-stop delivery routes in Excel, relying on driver intuition and static Google Maps estimates.
                    </p>
                    <p>
                        Because routes couldn't mathematically account for live traffic, changing weather, or last-minute order additions, drivers constantly crossed paths, wasted fuel idling, and routinely missed delivery windows. This outdated workflow was costing the firm over <strong>₹2.5 Lakhs monthly in wasted fuel and overtime</strong>.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3"><TrendingDown className="text-green-500" /> The Smart Dispatch Implementation</h2>
                    <p>
                        Without forcing drivers to learn complex proprietary hardware, we introduced a headless, algorithmic routing engine tailored for an ultra-lean budget (<strong>$&lt;1,000 implemented</strong>).
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 my-8 text-sm">
                        <div className="bg-card/50 p-6 rounded-xl border border-border">
                            <h3 className="text-lg font-bold mb-4 text-primary">Technical Stack</h3>
                            <ul className="space-y-2">
                                <li>• <strong>OR-Tools:</strong> Google's open-source Combinatorial Optimization library.</li>
                                <li>• <strong>OpenRouteService API:</strong> For real-time matrices of travel times and distances.</li>
                                <li>• <strong>Twilio + WhatsApp:</strong> Headless delivery of itineraries to drivers' phones.</li>
                                <li>• <strong>Python Flask:</strong> Lightweight backend bridge between CRM and Routing.</li>
                            </ul>
                        </div>
                        <div className="bg-card/50 p-6 rounded-xl border border-border">
                            <h3 className="text-lg font-bold mb-4 text-primary">Key Efficiency Hack</h3>
                            <p>We avoided the cost of expensive GPS trackers by using <strong>Geofence Webhooks</strong> via the drivers' existing mobile browsers, allowing the system to update the CRM status automatically as they arrived at delivery markers.</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">The "Headless" Advantage</h2>
                    <p>
                        The beauty of this implementation was its invisibility. Drivers didn't have to "learn a new app." They simply received a WhatsApp message with a pre-set Google Maps itinerary link. This eliminated training resistance and ensured 100% adoption on day one.
                    </p>

                    <div className="my-8 p-6 bg-muted border-l-4 border-orange-500 rounded-r-lg">
                        <p className="text-xl font-bold mb-2">The After: Lean & Green</p>
                        <ul className="m-0 space-y-2">
                            <li><strong>Fuel Expense:</strong> Slashed by 18% immediately, equivalent to ₹45,000/month in direct savings.</li>
                            <li><strong>Administrative ROI:</strong> Dispatch time dropped from 6 hours to just 5 minutes of automated processing.</li>
                            <li><strong>Fleet Efficiency:</strong> 22% more deliveries completed per truck, allowing the firm to take on new clients without buying new vehicles.</li>
                            <li><strong>Retention:</strong> Drivers finished their shifts 1.5 hours earlier, leading to a 30% drop in driver turnover.</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6">Conclusion</h2>
                    <p>
                        Many transport companies assume AI optimization requires replacing their entire fleet management software. This case study proves that by integrating modern APIs with existing tools (spreadsheets + WhatsApp), a $1,000 investment pays for itself within the first two weeks of fuel savings.
                    </p>
                </article>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center border-t border-border pt-12"
                >
                    <h2 className="text-2xl font-bold mb-6 text-foreground">Optimize Your Operations</h2>
                    <Link href="/services" className="inline-flex items-center justify-center rounded-md text-lg font-bold transition-transform hover:scale-105 bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 shadow-lg shadow-primary/20">
                        Explore Our Business Solutions
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
