
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ShieldAlert, Lock, AlertOctagon, XCircle, Calendar, Clock } from "lucide-react";
import { Link } from "wouter";
import { InsightSEO } from "@/components/seo/insight-seo";
import { formatArticleDate } from "@/lib/date-utils";
import { useTranslation } from "react-i18next";

export default function RansomwareParadox() {
    const { t } = useTranslation();
    return (
        <main className="min-h-screen bg-background pt-24 pb-16">
            <InsightSEO
                title="The Ransomware Paradox: Why Paying is a Trap"
                description="Paying the ransom doesn't save your business. It marks you as a target. Learn the reality of ransomware negotiation and why you shouldn't pay."
                articleSlug="ransomware-paradox"
                publishedDate="2024-07-18"
                category="Cyber Threat"
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/insights" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 mb-8 pl-0 hover:pl-2">
                    <ArrowLeft className="w-4 h-4 mr-2" /> {t("xRansomwareParadox.backToInsights")}
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <Badge className="mb-4" variant="destructive">{t("xRansomwareParadox.badge")}</Badge>
                    <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight">
                        {t("xRansomwareParadox.titlePart1")}<span className="text-red-400">{t("xRansomwareParadox.titleHighlight")}</span>
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-muted-foreground border-b border-border pb-8">
                        <div className="flex items-center">
                            <ShieldAlert className="w-4 h-4 mr-2" aria-hidden="true" />
                            <span>{t("xRansomwareParadox.metaSecurity")}</span>
                        </div>
                        <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" aria-hidden="true" />
                            <span>{t("xRansomwareParadox.publishedLabel")} {formatArticleDate("2024-07-18")}</span>
                        </div>
                        <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" aria-hidden="true" />
                            <span>{t("xRansomwareParadox.updatedLabel")}</span>
                        </div>
                    </div>
                </motion.div>

                <article className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-p:text-foreground prose-lead:text-foreground prose-strong:text-primary prose-a:text-primary prose-ul:text-foreground prose-li:text-foreground prose-blockquote:text-foreground">
                    <img src="/assets/blog/cyber-hero-generic.png" alt={t("xRansomwareParadox.imgAlt")} className="w-full h-auto rounded-xl mb-8 shadow-2xl"  decoding="async" fetchPriority="high"/>
                    <p className="lead text-xl text-foreground font-medium mb-8">
                        {t("xRansomwareParadox.leadPart1")}<span className="text-red-400 font-bold">{t("xRansomwareParadox.leadWrong")}</span>
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">{t("xRansomwareParadox.h2SuckerList")}</h2>
                    <p className="text-foreground/90">
                        {t("xRansomwareParadox.pSuckerList")}
                    </p>
                    <div className="my-8 p-6 bg-red-900/20 border-l-4 border-red-500 rounded-r-lg">
                        <p className="text-lg font-bold text-red-400 mb-2">{t("xRansomwareParadox.statsTitle")}</p>
                        <ul className="list-disc pl-4 space-y-2 text-foreground/90">
                            <li><strong>{t("xRansomwareParadox.stat1Bold")}</strong>{t("xRansomwareParadox.stat1Rest")}</li>
                            <li><strong>{t("xRansomwareParadox.stat2Bold")}</strong>{t("xRansomwareParadox.stat2Rest")}</li>
                            <li><strong>{t("xRansomwareParadox.stat3Bold")}</strong>{t("xRansomwareParadox.stat3Rest")}</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">{t("xRansomwareParadox.h2Decryption")}</h2>
                    <p className="text-foreground/90">
                        {t("xRansomwareParadox.pDecryption")}
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 my-12">
                        <div className="bg-card border p-6 rounded-xl shadow-sm">
                            <h4 className="text-xl font-bold mb-4 flex items-center text-red-400">
                                <XCircle className="w-5 h-5 mr-2" aria-hidden="true" /> {t("xRansomwareParadox.panicTitle")}
                            </h4>
                            <p className="text-sm text-foreground/90">
                                {t("xRansomwareParadox.panicLine1")}<br />
                                {t("xRansomwareParadox.panicLine2")}<br />
                                {t("xRansomwareParadox.panicLine3")}
                            </p>
                        </div>
                        <div className="bg-card border p-6 rounded-xl shadow-sm">
                            <h4 className="text-xl font-bold mb-4 flex items-center text-green-500">
                                <Lock className="w-5 h-5 mr-2" aria-hidden="true" /> {t("xRansomwareParadox.resilienceTitle")}
                            </h4>
                            <p className="text-sm text-foreground/90">
                                1. <strong>{t("xRansomwareParadox.resilience1Bold")}</strong>{t("xRansomwareParadox.resilience1Mid")}<strong>{t("xRansomwareParadox.resilience1BoldB")}</strong>{t("xRansomwareParadox.resilience1Rest")}<br />
                                2. <strong>{t("xRansomwareParadox.resilience2Bold")}</strong>{t("xRansomwareParadox.resilience2Rest")}<br />
                                3. <strong>{t("xRansomwareParadox.resilience3Bold")}</strong>{t("xRansomwareParadox.resilience3Rest")}
                            </p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">{t("xRansomwareParadox.h2Negotiate")}</h2>
                    <p className="text-foreground/90">
                        {t("xRansomwareParadox.pNegotiate")}
                    </p>

                </article>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <h2 className="text-2xl font-bold mb-6 text-foreground">{t("xRansomwareParadox.ctaHeading")}</h2>
                    <Link href="/contact" className="inline-flex items-center justify-center rounded-md text-lg font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-destructive text-destructive-foreground hover:bg-destructive/90 h-12 px-8 shadow-lg">
                        {t("xRansomwareParadox.ctaButton")}
                    </Link>
                </motion.div>
            </div >
        </main >
    );
}
