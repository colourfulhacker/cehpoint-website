
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, CheckCircle2, XCircle, Calendar, User, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";

export default function EthicalStandardsArticle() {
    return (
        <main className="min-h-screen bg-background pt-24 pb-16">
            <Helmet>
                <title>The Silent Crisis in Digital Investigation: Why Transparency is the New Gold Standard - Cehpoint</title>
                <meta name="description" content="Exposing the hidden pitfalls of cheap digital forensics and why ethical, transparent investigation is the only safe choice for businesses." />
            </Helmet>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/insights" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 mb-8 pl-0 hover:pl-2">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Insights
                </Link>

                {/* Article Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <Badge className="mb-4" variant="secondary">Industry Analysis</Badge>
                    <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight">
                        The Silent Crisis in <span className="text-gradient">Digital Investigation</span>
                    </h1>
                    <div className="flex items-center space-x-6 text-muted-foreground border-b border-border pb-8">
                        <div className="flex items-center">
                            <User className="w-4 h-4 mr-2" aria-hidden="true" />
                            <span>Cehpoint Research Team</span>
                        </div>
                        <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" aria-hidden="true" />
                            <span>October 24, 2025</span>
                        </div>
                    </div>
                </motion.div>

                {/* Article Body */}
                <article className="prose prose-lg dark:prose-invert max-w-none text-foreground">
                    <p className="lead text-xl text-foreground font-medium mb-8">
                        In the shadows of the digital world, a silent crisis is brewing. Businesses, desperate for answers after a cyber breach or fraud, are turning to the "fastest" and "cheapest" providers. But what they are buying isn't a solution—it's often a legal time bomb.
                    </p>

                    <div className="my-12 p-8 bg-secondary/10 rounded-2xl border-l-4 border-primary">
                        <h3 className="text-2xl font-bold mb-4 flex items-center text-foreground">
                            <AlertTriangle className="w-6 h-6 mr-3 text-primary" aria-hidden="true" />
                            The "Black Box" Problem
                        </h3>
                        <p className="mb-0 text-foreground/90">
                            70% of budget forensic providers cannot produce a verifiable chain of custody in court. They operate like a "black box"—you put money in, you get a "result" out. But without a meticulously documented process, that result is legally worthless.
                        </p>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">The Bait and Switch</h2>
                    <p className="text-foreground/90">
                        We've auditioned dozens of competitors. The pattern is terrifyingly consistent. They promise "instant" hacking services or "guaranteed" recovery of lost funds.
                    </p>
                    <p className="text-foreground/90">
                        <strong>Let’s be clear:</strong> Ethical investigation doesn't work that way.
                    </p>

                    {/* Comparative Graphic Placeholder */}
                    <div className="my-12 bg-card border rounded-xl overflow-hidden shadow-lg">
                        <div className="bg-muted p-4 border-b text-center font-mono text-sm text-muted-foreground">
                            [GRAPHIC: The "Forensic Trap" Flowchart]
                        </div>
                        <div className="p-8 grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h4 className="text-red-700 dark:text-red-400 font-bold flex items-center">
                                    <XCircle className="w-5 h-5 mr-2" aria-hidden="true" /> The "Budget" Approach
                                </h4>
                                <ul className="space-y-2 text-sm text-foreground/90">
                                    <li>• Promises "Hack Back" (Illegal)</li>
                                    <li>• No contract or NDAs signed</li>
                                    <li>• Requesting payment in untraceable crypto</li>
                                    <li>• Delivers "screenshots" without metadata</li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-green-700 dark:text-green-400 font-bold flex items-center">
                                    <CheckCircle2 className="w-5 h-5 mr-2" aria-hidden="true" /> The Cehpoint Standard
                                </h4>
                                <ul className="space-y-2 text-sm text-foreground/90">
                                    <li>• Legal Process & Law Enforcement Liaison</li>
                                    <li>• Iron-clad NDAs & Service Agreements</li>
                                    <li>• Corporate invoicing & GST compliance</li>
                                    <li>• Admissible forensic reports with hash values</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Why "Silent" Promotion Works</h2>
                    <p className="text-foreground/90">
                        The best investigators don't need to shout. We don't run ads promising to "hack your ex's WhatsApp." We exist for the serious corporate client who understands that <strong>reputation</strong> is worth more than a quick fix.
                    </p>
                    <p className="text-foreground/90">
                        Our "Propaganda" is simple: <strong>Competence is quiet.</strong> Scams are loud.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Audit Your Provider</h2>
                    <p className="text-foreground/90">
                        Before you hire another agency, ask them for a <strong>Sample Audit Trail</strong>. If they hesitate, or if they send you a generic Word document, run.
                    </p>
                    <p className="text-foreground/90">
                        At Cehpoint, our clients sleep at night. Not because we perform magic, but because we follow the law, the science, and the strictest ethical codes in the industry.
                    </p>
                </article>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 p-8 md:p-12 bg-gradient-to-br from-primary via-primary/80 to-secondary text-primary-foreground rounded-3xl text-center shadow-2xl"
                >
                    <h2 className="text-3xl font-bold mb-4">Demand Better Standards</h2>
                    <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                        Don't let a bad investigation ruin your case. Consult with our certified experts today.
                    </p>
                    <Link href="/contact" className="inline-flex items-center justify-center rounded-md text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-secondary text-secondary-foreground hover:bg-secondary/80 h-11 px-8 hover:scale-105 transform duration-200">
                        Schedule a Confidential Consultation
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
