
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { DollarSign, ArrowLeft, BarChart3 } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";

export default function HiddenCostsArticle() {
    return (
        <main className="min-h-screen bg-background pt-24 pb-16">
            <Helmet>
                <title>The True Cost of 'Cheap' Cyber Security: Case Study - Cehpoint Insights</title>
                <meta name="description" content="A case study on how cutting corners on cybersecurity costs led to a massive financial loss for a mid-sized firm." />
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
                    <Badge className="mb-4" variant="destructive">Case Study</Badge>
                    <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight">
                        The Price of <span className="text-red-500">"Cheap"</span> Security
                    </h1>
                    <div className="flex items-center space-x-6 text-muted-foreground border-b border-border pb-8">
                        <div className="flex items-center">
                            <BarChart3 className="w-4 h-4 mr-2" aria-hidden="true" />
                            <span>Senior Analyst</span>
                        </div>
                        <div className="flex items-center">
                            <span>September 28, 2025</span>
                        </div>
                    </div>
                </motion.div>

                <article className="prose prose-lg dark:prose-invert max-w-none text-foreground">
                    <p className="lead text-xl text-foreground/90 font-medium mb-8 italic border-l-4 border-red-500 pl-4">
                        "We saved ₹50 Lakhs on the contract. We lost ₹5 Crores in the breach."
                    </p>

                    <p className="text-foreground/90">
                        It is the most common story we hear at Cehpoint. A CFO looks at two proposals. One from a certified, insured, and compliant agency (Us). And one from a freelancer or "startup" offering to do the same job for 1/10th the price.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">The "Vendor B" Scenario</h2>
                    <p className="text-foreground/90">
                        Let's look at a real (anonymized) client, "Company X". They chose "Vendor B" for their VAPT (Vulnerability Assessment).
                    </p>

                    <div className="bg-card border rounded-xl overflow-hidden my-8 overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <caption className="sr-only">Comparison between Vendor B and Cehpoint Standard</caption>
                            <thead>
                                <tr className="bg-muted border-b">
                                    <th scope="col" className="p-4 font-bold text-foreground">Feature</th>
                                    <th scope="col" className="p-4 font-bold text-red-700 dark:text-red-500">Vendor B (The Cheap Option)</th>
                                    <th scope="col" className="p-4 font-bold text-green-700 dark:text-green-500">Cehpoint Standard</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                <tr>
                                    <th scope="row" className="p-4 font-semibold text-foreground border-r bg-muted/20">Tools Used</th>
                                    <td className="p-4 text-sm text-foreground/90">Cracked/Free Scanners</td>
                                    <td className="p-4 text-sm text-foreground/90">Enterprise Licensed Suites</td>
                                </tr>
                                <tr>
                                    <th scope="row" className="p-4 font-semibold text-foreground border-r bg-muted/20">Report</th>
                                    <td className="p-4 text-sm text-foreground/90">Automated PDF Export</td>
                                    <td className="p-4 text-sm text-foreground/90">Manual POC Validation</td>
                                </tr>
                                <tr>
                                    <th scope="row" className="p-4 font-semibold text-foreground border-r bg-muted/20">Liability</th>
                                    <td className="p-4 text-sm text-foreground/90">Zero (Ghosted after payment)</td>
                                    <td className="p-4 text-sm text-foreground/90">Contractual Guarantee</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 className="text-2xl font-bold mt-12 mb-4 text-foreground">The Aftermath</h3>
                    <p className="text-foreground/90">
                        Three months after Vendor B's "Clean" report, Company X was hit by a Ransomware attack. The entry point? A known vulnerability in their RDP server that any competent manual tester would have found in 5 minutes.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                        <li><strong>Ransom Paid:</strong> ₹2 Crores</li>
                        <li><strong>Downtime Cost:</strong> ₹1.5 Crores</li>
                        <li><strong>Legal Fines:</strong> ₹45 Lakhs</li>
                        <li><strong>Reputation Damage:</strong> Immeasurable</li>
                    </ul>

                    <div className="my-12 p-8 bg-green-50/10 border border-green-200/20 rounded-2xl">
                        <h3 className="text-2xl font-bold mb-4 flex items-center text-green-700 dark:text-green-500">
                            <DollarSign className="w-6 h-6 mr-3" aria-hidden="true" />
                            The ROI of Competence
                        </h3>
                        <p className="text-foreground/90">
                            Quality security is an insurance policy. You don't buy the cheapest parachute. You don't hire the cheapest heart surgeon. Why would you expose your organization's entire existence to the lowest bidder?
                        </p>
                    </div>

                </article>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <h2 className="text-2xl font-bold mb-6 text-foreground">Stop Gambling with Your Data</h2>
                    <Link href="/quotation" className="inline-flex items-center justify-center rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8">
                        Get a Serious Quote
                    </Link>
                </motion.div>

            </div>
        </main>
    );
}
