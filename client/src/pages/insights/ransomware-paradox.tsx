
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ShieldAlert, Lock, AlertOctagon, XCircle } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";

export default function RansomwareParadox() {
    return (
        <main className="min-h-screen bg-background pt-24 pb-16">
            <Helmet>
                <title>The Ransomware Paradox: Why Paying is a Trap - Cehpoint Insights</title>
                <meta name="description" content="Paying the ransom doesn't save your business. It marks you as a target. Learn the reality of ransomware negotiation." />
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
                    <Badge className="mb-4" variant="destructive">Cyber Threat</Badge>
                    <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight">
                        The Ransomware Paradox: <span className="text-red-600 dark:text-red-400">Why Paying is a Trap</span>
                    </h1>
                    <div className="flex items-center space-x-6 text-muted-foreground border-b border-border pb-8">
                        <div className="flex items-center">
                            <ShieldAlert className="w-4 h-4 mr-2" aria-hidden="true" />
                            <span>Security Intelligence</span>
                        </div>
                        <div className="flex items-center">
                            <span>October 26, 2025</span>
                        </div>
                    </div>
                </motion.div>

                <article className="prose prose-lg dark:prose-invert max-w-none text-foreground">
                    <p className="lead text-xl text-foreground font-medium mb-8">
                        Your screen is locked. Your files are encrypted. The clock is ticking. The hackers want 5 Bitcoin. The fastest way out is to pay, right? <span className="text-red-600 dark:text-red-400 font-bold">Wrong.</span>
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">The "Sucker List" Reality</h2>
                    <p className="text-foreground/90">
                        When you pay a ransom, you aren't just buying your data back. You are purchasing a permanent spot on the Dark Web's "Sucker List"—a database of companies known to pay up.
                    </p>
                    <div className="my-8 p-6 bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 rounded-r-lg">
                        <p className="text-lg font-bold text-red-700 dark:text-red-400 mb-2">Statistically Speaking:</p>
                        <ul className="list-disc pl-4 space-y-2 text-foreground/90">
                            <li><strong>80%</strong> of organizations that pay are attacked again within 6 months.</li>
                            <li><strong>40%</strong> never get their data back even after paying.</li>
                            <li><strong>100%</strong> fund future terrorism and crime.</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">The Decryption Lie</h2>
                    <p className="text-foreground/90">
                        Ransomware gangs are criminals, not software engineers. Their decryption tools are often buggy, slow, and corrupt files during recovery. You pay millions for a key that breaks half your database.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 my-12">
                        <div className="bg-card border p-6 rounded-xl shadow-sm">
                            <h4 className="text-xl font-bold mb-4 flex items-center text-red-600 dark:text-red-400">
                                <XCircle className="w-5 h-5 mr-2" aria-hidden="true" /> The Panic Response
                            </h4>
                            <p className="text-sm text-foreground/90">
                                1. Pay the ransom.<br />
                                2. Hope for a key.<br />
                                3. Get re-infected via the same backdoor they left open.
                            </p>
                        </div>
                        <div className="bg-card border p-6 rounded-xl shadow-sm">
                            <h4 className="text-xl font-bold mb-4 flex items-center text-green-600 dark:text-green-500">
                                <Lock className="w-5 h-5 mr-2" aria-hidden="true" /> The Cehpoint Response
                            </h4>
                            <p className="text-sm text-foreground/90">
                                1. Isolate the breach.<br />
                                2. Deploy forensic extraction tools.<br />
                                3. Negotiate (or stall) while we restore from hidden backups.<br />
                                4. Patch the vulnerability forever.
                            </p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Don't Negotiate with Terrorists</h2>
                    <p className="text-foreground/90">
                        It's a cliché for a reason. Every dollar you send them buys them better malware to attack your competitors—or you again. Break the cycle.
                    </p>

                </article>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <h2 className="text-2xl font-bold mb-6 text-foreground">In a Crisis? Call Us.</h2>
                    <Link href="/contact" className="inline-flex items-center justify-center rounded-md text-lg font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-destructive text-destructive-foreground hover:bg-destructive/90 h-12 px-8 shadow-lg">
                        Emergency Incident Response
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
