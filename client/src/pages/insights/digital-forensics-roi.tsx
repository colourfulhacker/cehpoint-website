
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, TrendingUp, ShieldCheck, DollarSign, FileSearch } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";

export default function DigitalForensicsROI() {
    return (
        <main className="min-h-screen bg-background pt-24 pb-16">
            <Helmet>
                <title>The ROI of Digital Forensics - Cehpoint Insights</title>
                <meta name="description" content="Discover why digital forensics is a crucial investment for protecting your business assets and reputation." />
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
                        The <span className="text-green-500">ROI</span> of Digital Forensics
                    </h1>
                    <div className="flex items-center space-x-6 text-muted-foreground border-b border-border pb-8">
                        <div className="flex items-center">
                            <TrendingUp className="w-4 h-4 mr-2" aria-hidden="true" />
                            <span>Investment Analysis</span>
                        </div>
                        <div className="flex items-center">
                            <span>October 30, 2025</span>
                        </div>
                    </div>
                </motion.div>

                <article className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-p:text-foreground prose-lead:text-foreground prose-strong:text-primary prose-a:text-primary prose-ul:text-foreground prose-li:text-foreground prose-blockquote:text-foreground">
                    <img src="/assets/blog/cyber-hero-generic.png" alt="Digital Forensics ROI" className="w-full h-auto rounded-xl mb-8 shadow-2xl" />
                    <p className="lead text-xl text-foreground font-medium mb-8">
                        Most companies treat digital forensics as a clean-up crew—something you call <em>after</em> the disaster. This is a costly mistake. Smart leaders use it as a proactive shield that pays for itself.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">The Cost of Ignorance</h2>
                    <p className="text-foreground/90">
                        Fraud isn't just about stolen cash. It's about stolen IP, compromised client lists, and reputation damage. The average internal fraud case lasts 14 months before detection, costing businesses 5% of their annual revenue.
                    </p>

                    <div className="my-8 p-6 bg-green-900/20 border-l-4 border-green-500 rounded-r-lg">
                        <p className="text-lg font-bold text-green-400 mb-2">The Hidden Math:</p>
                        <p className="text-foreground/90">
                            Spending ₹5 Lakhs on proactive forensic audit can save you ₹5 Crores in prevented data leakage. That's a <strong>100x ROI</strong>.
                        </p>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">How Forensics Makes You Money</h2>
                    <div className="grid md:grid-cols-2 gap-8 my-8">
                        <div className="bg-card border p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-bold mb-4 flex items-center text-primary">
                                <DollarSign className="w-5 h-5 mr-2" /> Asset Recovery
                            </h3>
                            <p className="text-sm text-foreground/90">
                                We track digital footprints to trace stolen funds and assets, often recovering what was thought to be lost forever.
                            </p>
                        </div>
                        <div className="bg-card border p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-bold mb-4 flex items-center text-primary">
                                <FileSearch className="w-5 h-5 mr-2" /> Litigation Support
                            </h3>
                            <p className="text-sm text-foreground/90">
                                Solid digital evidence wins lawsuits. Winning a breach of contract case because you had the logs? Priceless.
                            </p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">A Strategic Asset</h2>
                    <p className="text-foreground/90">
                        Don't wait for the fire. Install the sprinkler system. Cehpoint's forensic services are designed to identify vulnerabilities before they are exploited, protecting your bottom line.
                    </p>

                </article>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <h2 className="text-2xl font-bold mb-6 text-foreground">Secure Your Future Profits</h2>
                    <Link href="/services/cyber-crime-investigation" className="inline-flex items-center justify-center rounded-md text-lg font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 shadow-lg hover:shadow-xl transform duration-200">
                        Explore Investigation Services
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
