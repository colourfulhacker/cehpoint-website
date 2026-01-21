
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, CheckCircle2, XCircle, Share2, Calendar, User, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";

export default function EthicalStandardsArticle() {
    return (
        <div className="min-h-screen bg-background pt-24 pb-16">
            <Helmet>
                <title>The Silent Crisis in Digital Investigation: Why Transparency is the New Gold Standard - Cehpoint</title>
                <meta name="description" content="Exposing the hidden pitfalls of cheap digital forensics and why ethical, transparent investigation is the only safe choice for businesses." />
            </Helmet>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/insights">
                    <Button variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Insights
                    </Button>
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
                    <div className="flex items-center space-x-6 text-foreground/60 border-b border-border pb-8">
                        <div className="flex items-center">
                            <User className="w-4 h-4 mr-2" />
                            <span>Cehpoint Research Team</span>
                        </div>
                        <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>October 24, 2025</span>
                        </div>
                    </div>
                </motion.div>

                {/* Article Body */}
                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="lead text-xl text-foreground/80 mb-8">
                        In the shadows of the digital world, a silent crisis is brewing. Businesses, desperate for answers after a cyber breach or fraud, are turning to the "fastest" and "cheapest" providers. But what they are buying isn't a solution—it's often a legal time bomb.
                    </p>

                    <div className="my-12 p-8 bg-secondary/10 rounded-2xl border-l-4 border-primary">
                        <h3 className="text-2xl font-bold mb-4 flex items-center">
                            <AlertTriangle className="w-6 h-6 mr-3 text-primary" />
                            The "Black Box" Problem
                        </h3>
                        <p className="mb-0">
                            70% of budget forensic providers cannot produce a verifiable chain of custody in court. They operate like a "black box"—you put money in, you get a "result" out. But without a meticulously documented process, that result is legally worthless.
                        </p>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6">The Bait and Switch</h2>
                    <p>
                        We've auditioned dozens of competitors. The pattern is terrifyingly consistent. They promise "instant" hacking services or "guaranteed" recovery of lost funds.
                    </p>
                    <p>
                        <strong>Let’s be clear:</strong> Ethical investigation doesn't work that way.
                    </p>

                    {/* Comparative Graphic Placeholder */}
                    <div className="my-12 bg-card border rounded-xl overflow-hidden shadow-lg">
                        <div className="bg-muted p-4 border-b text-center font-mono text-sm text-muted-foreground">
                            [GRAPHIC: The "Forensic Trap" Flowchart]
                        </div>
                        <div className="p-8 grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h4 className="text-red-500 font-bold flex items-center">
                                    <XCircle className="w-5 h-5 mr-2" /> The "Budget" Approach
                                </h4>
                                <ul className="space-y-2 text-sm">
                                    <li>• Promises "Hack Back" (Illegal)</li>
                                    <li>• No contract or NDAs signed</li>
                                    <li>• Requesting payment in untraceable crypto</li>
                                    <li>• Delivers "screenshots" without metadata</li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-green-500 font-bold flex items-center">
                                    <CheckCircle2 className="w-5 h-5 mr-2" /> The Cehpoint Standard
                                </h4>
                                <ul className="space-y-2 text-sm">
                                    <li>• Legal Process & Law Enforcement Liaison</li>
                                    <li>• Iron-clad NDAs & Service Agreements</li>
                                    <li>• Corporate invoicing & GST compliance</li>
                                    <li>• Admissible forensic reports with hash values</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6">Why "Silent" Promotion Works</h2>
                    <p>
                        The best investigators don't need to shout. We don't run ads promising to "hack your ex's WhatsApp." We exist for the serious corporate client who understands that <strong>reputation</strong> is worth more than a quick fix.
                    </p>
                    <p>
                        Our "Propaganda" is simple: <strong>Competence is quiet.</strong> Scams are loud.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6">Audit Your Provider</h2>
                    <p>
                        Before you hire another agency, ask them for a <strong>Sample Audit Trail</strong>. If they hesitate, or if they send you a generic Word document, run.
                    </p>
                    <p>
                        At Cehpoint, our clients sleep at night. Not because we perform magic, but because we follow the law, the science, and the strictest ethical codes in the industry.
                    </p>
                </div>

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
                    <Link href="/contact">
                        <Button size="lg" variant="secondary" className="font-bold text-primary hover:scale-105 transition-transform">
                            Schedule a Confidential Consultation
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
