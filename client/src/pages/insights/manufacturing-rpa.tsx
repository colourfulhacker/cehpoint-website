import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Factory, Cog, Clock, Calendar } from "lucide-react";
import { formatArticleDate } from "@/lib/date-utils";
import { Link } from "wouter";
import { InsightSEO } from "@/components/seo/insight-seo";

export default function ManufacturingRPA() {
    return (
        <main className="min-h-screen bg-background pt-24 pb-16">
            <InsightSEO
                title="Industrial Tech: Sub-$1,000 RPA for Manufacturing"
                description="Discover how a factory deployed a lightweight Robotic Process Automation (RPA) bot to bridge modern data forms with legacy ERPs."
                articleSlug="manufacturing-rpa"
                publishedDate="2025-01-08"
                category="Manufacturing"
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
                    <Badge className="mb-4 bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20 border-yellow-500/20">Manufacturing Tech</Badge>
                    <h1 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
                        Eliminating 50 Weekly Hours of Manual Reporting in Manufacturing for <span className="text-yellow-500">Under $1,000</span>
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-muted-foreground border-b border-border pb-8">
                        <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>Published: {formatArticleDate("2025-01-08")}</span>
                        </div>
                        <div className="flex items-center text-green-500 font-medium">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>Updated: January 8, 2025</span>
                        </div>
                        <div className="flex items-center">
                            <Factory className="w-4 h-4 mr-2" />
                            <span>Case Study</span>
                        </div>
                    </div>
                </motion.div>

                <article className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-p:text-foreground/90 prose-strong:text-primary">
                    <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=600&fit=crop" alt="Smart Manufacturing Tech Automation" className="w-full h-auto rounded-xl mb-8 shadow-2xl opacity-90"  decoding="async" fetchPriority="high"/>

                    <p className="lead text-xl font-medium mb-8">
                        The factory floor thrives on precision, yet the back-office of many manufacturing plants remains bogged down by clipboard tallies and legacy Excel macros. We've introduced a digital bridge that connects decades-old hardware to modern cloud analytics.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">The Before: The Clipboard Crusade</h2>
                    <p>
                        A specialized metals manufacturer with 3 daily shifts had a critical data lag. Shift supervisors spent the final hour of every shift taking physical notes of machine yield, raw material scrap, and downtime minutes.
                    </p>
                    <p>
                        These notes were handed to data entry clerks the next morning who spent combined <strong>50 hours a week</strong> transferring data into an obsolete inventory ERP. Because the data had a 24-hour lag, management could never react to machine inefficiencies in real-time, resulting in over <strong>₹8 Lakhs in monthly scrap waste</strong> that could have been prevented.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-yellow-600">The Robotic Process Automation (RPA) Pivot</h2>
                    <p>
                        Instead of enforcing a multi-million-dollar "Industry 4.0" hardware upgrade, we built a digital bridge using Robotic Process Automation (RPA). Total implementation outlay: <strong>$950</strong>.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 my-8 text-sm">
                        <div className="bg-card/50 p-6 rounded-xl border border-border">
                            <h3 className="text-lg font-bold mb-4 text-primary">Technical Stack</h3>
                            <ul className="space-y-2">
                                <li>• <strong>Selenium/AutoGui:</strong> Custom headless bots that mimic human interaction with legacy windows-based ERPs.</li>
                                <li>• <strong>Node-RED:</strong> For low-latency data piping between the shop floor and the database.</li>
                                <li>• <strong>InfluxDB:</strong> A time-series database to track machine pulses and downtime intervals.</li>
                                <li>• <strong>Grafana:</strong> For real-time visual dashboards displayed across 55-inch monitors on the floor.</li>
                            </ul>
                        </div>
                        <div className="bg-card/50 p-6 rounded-xl border border-border">
                            <h3 className="text-lg font-bold mb-4 text-primary">Operational Hack</h3>
                            <p>To avoid expensive sensor installations, we used <strong>Audio Analysis AI</strong>. A $20 microphone near critical machines detects specific 'pitch shifts' that indicate a belt is about to slip, triggering a maintenance alert *before* the machine breaks.</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Predictive Maintenance on a Budget</h2>
                    <p>
                        The RPA bot doesn't just enter data; it analyzes it. By comparing current shift scrap rates against a 30-day rolling average, the bot automatically flags if a specific shift's yield is falling outside of the <strong>6-Sigma quality standard</strong>, allowing for immediate corrective training or machine adjustment.
                    </p>

                    <div className="my-8 p-6 bg-muted border-l-4 border-yellow-500 rounded-r-lg">
                        <p className="text-xl font-bold mb-2 flex items-center gap-2"><Cog className="text-yellow-500" /> The After: Synchronized Symphony</p>
                        <ul className="m-0 space-y-2">
                            <li><strong>Labor Savings:</strong> Eliminated 2,600 hours per year of manual back-office data entry.</li>
                            <li><strong>Scrap Reduction:</strong> Real-time feedback led to a 12% drop in raw material waste, saving the firm ₹95,000 monthly.</li>
                            <li><strong>Uptime Increase:</strong> Predictive audio alerts reduced unexpected machine downtime by 20%.</li>
                            <li><strong>Staff Sentiment:</strong> Supervisors returned to the floor where they are most valuable, rather than being stuck behind a desk.</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6">Conclusion</h2>
                    <p>
                        RPA is the ultimate duct tape for aging industrial systems. By automating the repetitive human bridge between modern inputs and legacy databases, manufacturers can drastically increase operational velocity on an extremely lean budget.
                    </p>
                </article>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center border-t border-border pt-12"
                >
                    <Link href="/contact" className="inline-flex items-center justify-center rounded-md text-lg font-bold transition-transform hover:scale-105 bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 shadow-lg shadow-primary/20">
                        Modernize Your Factory Floor
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
