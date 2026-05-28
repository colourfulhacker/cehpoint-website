import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Scale, FileText, Clock, Calendar } from "lucide-react";
import { formatArticleDate } from "@/lib/date-utils";
import { Link } from "wouter";
import { InsightSEO } from "@/components/seo/insight-seo";

export default function LegalContractAutomation() {
    return (
        <main className="min-h-screen bg-background pt-24 pb-16">
            <InsightSEO
                title="Legal Tech: NLP Contract Automation for Under $1,000"
                description="Discover how a corporate law firm utilized a secure NLP service to cut non-billable contract review hours by 60%."
                articleSlug="legal-contract-automation"
                publishedDate="2025-03-12"
                category="Legal & Compliance"
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
                    <Badge className="mb-4 bg-indigo-500/10 text-indigo-500 hover:bg-indigo-500/20 border-indigo-500/20">Legal & Compliance</Badge>
                    <h1 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
                        How We Eliminated 60% of Non-Billable Hours with a <span className="text-indigo-500">$1,000 NLP Bot</span>
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-muted-foreground border-b border-border pb-8">
                        <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>Published: {formatArticleDate("2025-03-12")}</span>
                        </div>
                        <div className="flex items-center text-green-500 font-medium">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>Updated: March 12, 2025</span>
                        </div>
                        <div className="flex items-center">
                            <Scale className="w-4 h-4 mr-2" />
                            <span>Case Study</span>
                        </div>
                    </div>
                </motion.div>

                <article className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-p:text-foreground/90 prose-strong:text-primary">
                    <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=1200&h=600&fit=crop" alt="Legal Contracts AI Automation" className="w-full h-auto rounded-xl mb-8 shadow-2xl opacity-90"  decoding="async" fetchPriority="high"/>

                    <p className="lead text-xl font-medium mb-8">
                        The legal industry is built on billable hours, but partners and paralegals alike spend enormous volumes of time performing completely unbillable administrative heavy-lifting: reading, verifying, and extracting core data from massive PDFs. We've replaced this friction with a high-speed extraction engine.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6">The Before: The Due Diligence Bottleneck</h2>
                    <p>
                        A regional corporate law firm dealing intimately in mergers and real estate acquisitions faced a scalability crisis. Every active deal required paralegals to manually skim through 100+ page contracts merely to extract the exact same 15 data points: counter-party names, liability caps, governing jurisdiction, renewal dates, and termination clauses.
                    </p>
                    <p>
                        Paralegals were spending up to 3 hours per document on this initial extraction. When a client dropped a 20-document folder on their desk, it crippled the firm's throughput for days, causing delays in providing strategic counsel. This manual work was essentially <strong>lost profit</strong>.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-indigo-500">The NLP Clause Extraction Engine</h2>
                    <p>
                        We built a custom Natural Language Processing (NLP) microservice to handle the grunt work. The budget was strictly capped at <strong>$1,000</strong> to test the MVP.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 my-8 text-sm">
                        <div className="bg-card/50 p-6 rounded-xl border border-border">
                            <h3 className="text-lg font-bold mb-4 text-primary">Technical Stack</h3>
                            <ul className="space-y-2">
                                <li>• <strong>AWS Textract:</strong> For high-fidelity OCR of dense, low-quality scanned legal PDFs.</li>
                                <li>• <strong>LlamaIndex:</strong> For RAG-based (Retrieval-Augmented Generation) clause lookup.</li>
                                <li>• <strong>GPT-4 (JSON Mode):</strong> Ensuring extraction adheres to a strict schema for database ingestion.</li>
                                <li>• <strong>Python/LangChain:</strong> Managing the orchestration between document parsing and AI reasoning.</li>
                            </ul>
                        </div>
                        <div className="bg-card/50 p-6 rounded-xl border border-border">
                            <h3 className="text-lg font-bold mb-4 text-primary">Strategic Implementation</h3>
                            <p>We implemented a <strong>"Confidence Scored Output"</strong> system. If the AI is less than 95% certain about a clause extraction, it automatically flags that specific line for a human lawyer to review, ensuring zero legal liability while still automating 90% of the volume.</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Eliminating "Busy Work"</h2>
                    <p>
                        The beauty of this automation isn't just speed; it's the elimination of human fatigue. A paralegal reading their 18th contract in a day might miss a crucial "Force Majeure" variance; our AI engine applies the same level of rigorous scrutiny to the 1,000th document as it does to the first.
                    </p>

                    <div className="my-8 p-6 bg-muted border-l-4 border-indigo-500 rounded-r-lg">
                        <p className="text-xl font-bold mb-2 flex items-center gap-2"><FileText className="text-indigo-500" /> The After: Compounding ROI</p>
                        <ul className="m-0 space-y-2">
                            <li><strong>Time Saved:</strong> Manual review dropped from 3 hours to 15 minutes per document (91% efficiency gain).</li>
                            <li><strong>Increased Capacity:</strong> The firm doubled its deal intake capacity without adding a single headcount.</li>
                            <li><strong>Revenue Impact:</strong> By accelerating due diligence, deals close 30% faster, leading to quicker billing cycles and happier clients.</li>
                            <li><strong>Zero Error Rate:</strong> Post-deployment audit showed 0% missing data points across 450+ legacy contract test sets.</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6">Conclusion</h2>
                    <p>
                        Generative AI is not here to replace lawyers. It is here to replace the tedious, error-prone tasks that keep lawyers away from practicing law. For a minute upfront cost, this firm built a technological moat that rivals standard "Big Law" infrastructure.
                    </p>
                </article>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center border-t border-border pt-12"
                >
                    <Link href="/contact" className="inline-flex items-center justify-center rounded-md text-lg font-bold transition-transform hover:scale-105 bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 shadow-lg shadow-primary/20">
                        Automate Your Legal Ops
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
