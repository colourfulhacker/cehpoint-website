
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, UserCheck, Eye, FileWarning, Fingerprint, Calendar, Clock } from "lucide-react";
import { Link } from "wouter";
import { InsightSEO } from "@/components/seo/insight-seo";
import { formatArticleDate } from "@/lib/date-utils";

export default function HRForensics() {
    return (
        <main className="min-h-screen bg-background pt-24 pb-16">
            <InsightSEO
                title="The Internal Threat: Is Your Employee Selling Your Data?"
                description="80% of data breaches involve insider threats. Learn how digital forensics can secure your HR process and protect your IP."
                articleSlug="hr-forensics"
                publishedDate="2024-06-05"
                category="HR Prevention"
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
                    <Badge className="mb-4" variant="destructive">Corporate Security</Badge>
                    <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight">
                        The Internal Threat: <span className="text-red-600 dark:text-red-500">Is Your Employee Selling Your Data?</span>
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-muted-foreground border-b border-border pb-8">
                        <div className="flex items-center">
                            <UserCheck className="w-4 h-4 mr-2" aria-hidden="true" />
                            <span>HR Forensics</span>
                        </div>
                        <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" aria-hidden="true" />
                            <span>Published: {formatArticleDate("2024-06-05")}</span>
                        </div>
                        <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" aria-hidden="true" />
                            <span>Updated: June 5, 2024</span>
                        </div>
                    </div>
                </motion.div>

                <article className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-p:text-foreground prose-lead:text-foreground prose-strong:text-primary prose-a:text-primary prose-ul:text-foreground prose-li:text-foreground prose-blockquote:text-foreground">
                    <img src="/assets/blog/cyber-hero-generic.png" alt="HR Forensics" className="w-full h-auto rounded-xl mb-8 shadow-2xl"  decoding="async" fetchPriority="high"/>
                    <p className="lead text-xl text-foreground font-medium mb-8">
                        You build firewalls to keep hackers out. But what about the person sitting in your office with legitimate access to your entire client list? The most dangerous hacker is the disgruntled employee.
                    </p>

                    <div className="my-12 p-8 bg-secondary/10 rounded-2xl border-l-4 border-primary">
                        <h3 className="text-2xl font-bold mb-4 flex items-center text-foreground">
                            <Fingerprint className="w-6 h-6 mr-3 text-primary" aria-hidden="true" />
                            The 30-Day Danger Zone
                        </h3>
                        <p className="mb-0 text-foreground/90">
                            Statistics show that 60% of data theft happens in the 30 days before an employee resigns. They download customer lists, code repositories, and proprietary strategies to take to their next job—or your competitor.
                        </p>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Forensics as a Process, Not a Reaction</h2>
                    <p className="text-foreground/90">
                        Most companies call us *after* the leak. By then, the damage is done. Smart companies integrate Digital Forensics into their Offboarding process.
                    </p>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">Advanced Exit Audit:</h3>
                    <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                        <li><strong>Volatility RAM Analysis:</strong> Detection of "incognito" browser sessions or un-saved draft exfiltration.</li>
                        <li><strong>Registry & ShellBags:</strong> Verifying exactly which folders were browsed and which USB drives were connected in the final 48 hours.</li>
                        <li><strong>MFT (Master File Table) Analysis:</strong> Recovery of evidence even if the employee performed "Shift+Delete" or used file shredders.</li>
                        <li><strong>Shadow Copy Audits:</strong> Comparing current system state with month-old snapshots to detect slow, low-volume data leaks.</li>
                    </ul>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Trust, But Verify</h2>
                    <p className="text-foreground/90">
                        Implementing an Employee Integrity Policy isn't about creating a culture of fear. It's about protecting the livelihood of the honest employees who stay. One bad apple can bankrupt the company.
                    </p>

                </article>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <h2 className="text-2xl font-bold mb-6 text-foreground">Secure Your Offboarding</h2>
                    <Link href="/contact" className="inline-flex items-center justify-center rounded-md text-lg font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-destructive text-destructive-foreground hover:bg-destructive/90 h-12 px-8 shadow-lg">
                        Request HR Forensic Audit
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
