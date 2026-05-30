import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Coffee, MessageSquare, Clock, Calendar } from "lucide-react";
import { formatArticleDate } from "@/lib/date-utils";
import { Link } from "wouter";
import { InsightSEO } from "@/components/seo/insight-seo";
import { useTranslation } from "react-i18next";

export default function HospitalityAIConcierge() {
    const { t } = useTranslation();
    const B = "pages.xHospitalityAiConcierge";
    const conciergeItems = t(`${B}.conciergeItems`, { returnObjects: true }) as string[];
    const afterItems = t(`${B}.afterItems`, { returnObjects: true }) as string[];
    return (
        <main className="min-h-screen bg-background pt-24 pb-16">
            <InsightSEO
                title="Reviving the Digital Front Desk: The $1,000 AI Concierge"
                description="How an independent boutique hotel cut OTA commission fees and secured 2:00 AM overseas bookings instantly."
                articleSlug="hospitality-ai-concierge"
                publishedDate="2024-10-22"
                category="Travel & Hospitality"
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
                    <Badge className="mb-4 bg-rose-500/10 text-rose-500 hover:bg-rose-500/20 border-rose-500/20">{t(`${B}.badge`)}</Badge>
                    <h1 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
                        {t(`${B}.titlePre`)}<span className="text-rose-500">{t(`${B}.titleHighlight`)}</span>
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-muted-foreground/80 border-b border-border pb-8">
                        <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2 text-rose-500/70" />
                            <span>{t(`${B}.metaPublished`)}{formatArticleDate("2024-10-22")}</span>
                        </div>
                        <div className="flex items-center text-green-400 font-semibold">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>{t(`${B}.metaUpdated`)}</span>
                        </div>
                        <div className="flex items-center text-foreground/90">
                            <Coffee className="w-4 h-4 mr-2 text-rose-500/70" />
                            <span>{t(`${B}.metaCaseStudy`)}</span>
                        </div>
                    </div>
                </motion.div>

                <article className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-p:text-foreground/90 prose-strong:text-primary">
                    <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=600&fit=crop" alt="Hospitality Tech AI Concierge" className="w-full h-auto rounded-xl mb-8 shadow-2xl opacity-90"  decoding="async" fetchPriority="high"/>

                    <p className="lead text-xl font-medium mb-8">
                        {t(`${B}.lead`)}
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6">{t(`${B}.h2Before`)}</h2>
                    <p>
                        {t(`${B}.beforeP1`)}
                    </p>
                    <p>
                        {t(`${B}.beforeP2`)}
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-rose-500">{t(`${B}.h2Concierge`)}</h2>
                    <p dangerouslySetInnerHTML={{ __html: t(`${B}.conciergeP`) }} />
                    <ul>
                        {conciergeItems.map((item, i) => (
                            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                        ))}
                    </ul>

                    <div className="my-8 p-6 bg-muted border-l-4 border-rose-500 rounded-r-lg">
                        <p className="text-xl font-bold mb-2 flex items-center gap-2"><MessageSquare className="text-rose-500" /> {t(`${B}.afterTitle`)}</p>
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
