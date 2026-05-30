import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Landmark, ShieldCheck, Clock, Calendar } from "lucide-react";
import { formatArticleDate } from "@/lib/date-utils";
import { Link } from "wouter";
import { InsightSEO } from "@/components/seo/insight-seo";
import { useTranslation } from "react-i18next";

export default function FinanceFraudML() {
    const { t } = useTranslation();
    const B = "pages.xFinanceFraudMl";
    const stackItems = t(`${B}.stackItems`, { returnObjects: true }) as string[];
    const afterItems = t(`${B}.afterItems`, { returnObjects: true }) as string[];
    return (
        <main className="min-h-screen bg-background pt-24 pb-16">
            <InsightSEO
                title="FinTech: Sub-$1,000 ML Fraud Detection Engine"
                description="Read how a boutique credit institution swapped manual auditing for real-time Machine Learning anomaly detection."
                articleSlug="finance-fraud-ml"
                publishedDate="2025-02-20"
                category="Finance & Banking"
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/insights" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 mb-8 pl-0 hover:pl-2">
                    <ArrowLeft className="w-4 h-4 mr-2" /> {t(`${B}.back`)}
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <Badge className="mb-4 bg-teal-500/10 text-teal-500 hover:bg-teal-500/20 border-teal-500/20">{t(`${B}.badge`)}</Badge>
                    <h1 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
                        {t(`${B}.titlePre`)}<span className="text-teal-500">{t(`${B}.titleHighlight`)}</span>
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-muted-foreground border-b border-border pb-8">
                        <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{t(`${B}.metaPublished`)}{formatArticleDate("2025-02-20")}</span>
                        </div>
                        <div className="flex items-center text-green-500 font-medium">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>{t(`${B}.metaUpdated`)}</span>
                        </div>
                        <div className="flex items-center">
                            <Landmark className="w-4 h-4 mr-2" />
                            <span>{t(`${B}.metaCaseStudy`)}</span>
                        </div>
                    </div>
                </motion.div>

                <article className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-p:text-foreground/90 prose-strong:text-primary">
                    <img src="https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?w=1200&h=600&fit=crop" alt="Finance Security Technology" className="w-full h-auto rounded-xl mb-8 shadow-2xl opacity-90"  decoding="async" fetchPriority="high"/>

                    <p className="lead text-xl font-medium mb-8">
                        {t(`${B}.lead`)}
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">{t(`${B}.h2Before`)}</h2>
                    <p>
                        {t(`${B}.beforeP1`)}
                    </p>
                    <p dangerouslySetInnerHTML={{ __html: t(`${B}.beforeP2`) }} />

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-teal-500">{t(`${B}.h2Engine`)}</h2>
                    <p dangerouslySetInnerHTML={{ __html: t(`${B}.engineP`) }} />

                    <div className="grid md:grid-cols-2 gap-8 my-8 text-sm">
                        <div className="bg-card/50 p-6 rounded-xl border border-border">
                            <h3 className="text-lg font-bold mb-4 text-primary">{t(`${B}.stackTitle`)}</h3>
                            <ul className="space-y-2">
                                {stackItems.map((item, i) => (
                                    <li key={i}>• <span dangerouslySetInnerHTML={{ __html: item }} /></li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-card/50 p-6 rounded-xl border border-border">
                            <h3 className="text-lg font-bold mb-4 text-primary">{t(`${B}.protocolTitle`)}</h3>
                            <p dangerouslySetInnerHTML={{ __html: t(`${B}.protocolP`) }} />
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">{t(`${B}.h2Realtime`)}</h2>
                    <p>
                        {t(`${B}.realtimeP`)}
                    </p>

                    <div className="my-8 p-6 bg-muted border-l-4 border-teal-500 rounded-r-lg">
                        <p className="text-xl font-bold mb-2 flex items-center gap-2"><ShieldCheck className="text-teal-500" /> {t(`${B}.afterTitle`)}</p>
                        <ul className="m-0 space-y-2">
                            {afterItems.map((item, i) => (
                                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                            ))}
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6">{t(`${B}.h2Conclusion`)}</h2>
                    <p>
                        {t(`${B}.conclusionP`)}
                    </p>
                </article>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center border-t border-border pt-12"
                >
                    <Link href="/contact" className="inline-flex items-center justify-center rounded-md text-lg font-bold transition-transform hover:scale-105 bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 shadow-lg shadow-primary/20">
                        {t(`${B}.ctaButton`)}
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
