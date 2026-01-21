
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingDown, DollarSign, ArrowLeft, FileWarning, BarChart3, ShieldClose } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";

export default function HiddenCostsArticle() {
    return (
        <div className="min-h-screen bg-background pt-24 pb-16">
            <Helmet>
                <title>The True Cost of 'Cheap' Cyber Security: Case Study - Cehpoint Insights</title>
                <meta name="description" content="A case study on how cutting corners on cybersecurity costs led to a massive financial loss for a mid-sized firm." />
            </Helmet>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/insights">
                    <Button variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Insights
                    </Button>
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
                    <div className="flex items-center space-x-6 text-foreground/60 border-b border-border pb-8">
                        <div className="flex items-center">
                            <BarChart3 className="w-4 h-4 mr-2" />
                            <span>Senior Analyst</span>
                        </div>
                        <div className="flex items-center">
                            <span>September 28, 2025</span>
                        </div>
                    </div>
                </motion.div>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="lead text-xl text-foreground/80 mb-8 italic border-l-4 border-red-500 pl-4">
                        "We saved ₹50 Lakhs on the contract. We lost ₹5 Crores in the breach."
                    </p>

                    <p>
                        It is the most common story we hear at Cehpoint. A CFO looks at two proposals. One from a certified, insured, and compliant agency (Us). And one from a freelancer or "startup" offering to do the same job for 1/10th the price.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6">The "Vendor B" Scenario</h2>
                    <p>
                        Let's look at a real (anonymized) client, "Company X". They chose "Vendor B" for their VAPT (Vulnerability Assessment).
                    </p>

                    <div className="bg-card border rounded-xl overflow-hidden my-8">
                        <div className="bg-muted p-4 font-bold border-b">Direct Comparison</div>
                        <div className="grid grid-cols-3 divide-x">
                            <div className="p-4 font-bold">Feature</div>
                            <div className="p-4 font-bold text-red-500">Vendor B (The Cheap Option)</div>
                            <div className="p-4 font-bold text-green-500">Cehpoint Standard</div>

                            <div className="p-4 border-t">Tools Used</div>
                            <div className="p-4 border-t text-sm">Cracked/Free Scanners</div>
                            <div className="p-4 border-t text-sm">Enterprise Licensed Suites</div>

                            <div className="p-4 border-t">Report</div>
                            <div className="p-4 border-t text-sm">Automated PDF Export</div>
                            <div className="p-4 border-t text-sm">Manual POC Validation</div>

                            <div className="p-4 border-t">Liability</div>
                            <div className="p-4 border-t text-sm">Zero (Ghosted after payment)</div>
                            <div className="p-4 border-t text-sm">Contractual Guarantee</div>
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold mt-12 mb-4">The Aftermath</h3>
                    <p>
                        Three months after Vendor B's "Clean" report, Company X was hit by a Ransomware attack. The entry point? A known vulnerability in their RDP server that any competent manual tester would have found in 5 minutes.
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Ransom Paid:</strong> ₹2 Crores</li>
                        <li><strong>Downtime Cost:</strong> ₹1.5 Crores</li>
                        <li><strong>Legal Fines:</strong> ₹45 Lakhs</li>
                        <li><strong>Reputation Damage:</strong> Immeasurable</li>
                    </ul>

                    <div className="my-12 p-8 bg-green-50/10 border border-green-200/20 rounded-2xl">
                        <h3 className="text-2xl font-bold mb-4 flex items-center text-green-500">
                            <DollarSign className="w-6 h-6 mr-3" />
                            The ROI of Competence
                        </h3>
                        <p>
                            Quality security is an insurance policy. You don't buy the cheapest parachute. You don't hire the cheapest heart surgeon. Why would you expose your organization's entire existence to the lowest bidder?
                        </p>
                    </div>

                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <h2 className="text-2xl font-bold mb-6">Stop Gambling with Your Data</h2>
                    <Link href="/quotation">
                        <Button size="lg" className="h-12 px-8 text-lg">Get a Serious Quote</Button>
                    </Link>
                </motion.div>

            </div>
        </div>
    );
}
