
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ShieldAlert, Lock, AlertTriangle, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";

export default function CyberSecurityMyths() {
    return (
        <main className="min-h-screen bg-background pt-24 pb-16">
            <Helmet>
                <title>5 Cyber Security Myths - Cehpoint Insights</title>
                <meta name="description" content="Stop believing these dangerous myths. They are leaving your business exposed to cyber attacks." />
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
                    <Badge className="mb-4" variant="destructive">Security Awareness</Badge>
                    <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight">
                        5 Cyber Security <span className="text-red-600 dark:text-red-400">Myths</span> That Will Bankrupt You
                    </h1>
                    <div className="flex items-center space-x-6 text-muted-foreground border-b border-border pb-8">
                        <div className="flex items-center">
                            <ShieldAlert className="w-4 h-4 mr-2" aria-hidden="true" />
                            <span>Risk Management</span>
                        </div>
                        <div className="flex items-center">
                            <span>October 31, 2025</span>
                        </div>
                    </div>
                </motion.div>

                <article className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-p:text-foreground prose-lead:text-foreground prose-strong:text-primary prose-a:text-primary prose-ul:text-foreground prose-li:text-foreground prose-blockquote:text-foreground">
                    <img src="/assets/blog/cyber-hero-generic.png" alt="Cyber Security Digital Fortress" className="w-full h-auto rounded-xl mb-8 shadow-2xl" />
                    <p className="lead text-xl text-foreground font-medium mb-8">
                        What you don't know can hurt you. But what you <em>think</em> you know that ain't so? That will destroy you.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Myth #1: "I'm Too Small to Target"</h2>
                    <p className="text-foreground/90">
                        <strong>Reality:</strong> Automated bots don't care about your size. They scan for vulnerabilities. Small businesses are actually the <em>preferred</em> target because they have weaker defenses.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Myth #2: "My Antivirus is Enough"</h2>
                    <p className="text-foreground/90">
                        <strong>Reality:</strong> Antivirus detects known threats. Modern attacks use "fileless" malware, social engineering, and zero-day exploits that traditional antivirus software completely misses.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Myth #3: "We Have Backups"</h2>
                    <p className="text-foreground/90">
                        <strong>Reality:</strong> Modern ransomware targets your backups first. Unless you have immutable, off-site, air-gapped backups, you don't have backups. You have encrypted copies of your data.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Myth #4: "It Won't Happen to Me"</h2>
                    <p className="text-foreground/90">
                        <strong>Reality:</strong> It is not a matter of <em>if</em>, but <em>when</em>. Every 39 seconds, a cyber attack occurs. It is a statistical certainty that you will be targeted.
                    </p>

                    <div className="my-8 p-6 bg-red-900/20 border-l-4 border-red-500 rounded-r-lg">
                        <p className="text-lg font-bold text-red-400 mb-2">The Solution:</p>
                        <p className="text-foreground/90">
                            Move from a reactive "hope" strategy to a proactive "defense" strategy.
                        </p>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Myth #5: "Security is IT's Problem"</h2>
                    <p className="text-foreground/90">
                        <strong>Reality:</strong> Security is a business problem. One wrong click by a CEO or HR manager can bypass the most expensive firewall.
                    </p>

                </article>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <h2 className="text-2xl font-bold mb-6 text-foreground">Get Real Protection</h2>
                    <Link href="/services/cyber-security" className="inline-flex items-center justify-center rounded-md text-lg font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 shadow-lg hover:shadow-xl transform duration-200">
                        Audit Your Security Now
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
