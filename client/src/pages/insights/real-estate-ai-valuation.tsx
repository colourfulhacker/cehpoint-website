import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Home, Building, Clock, Calendar } from "lucide-react";
import { formatArticleDate } from "@/lib/date-utils";
import { Link } from "wouter";
import { InsightSEO } from "@/components/seo/insight-seo";
import { useTranslation } from "react-i18next";

export default function RealEstateAIValuation() {
    const { t } = useTranslation();
    return (
        <main className="min-h-screen bg-background pt-24 pb-16">
            <InsightSEO
                title="PropTech: Sub-$1,000 AI Lead Scoring & Valuation"
                description="See how a real estate broker slashed comp-generation queues from 48 hours to 10 seconds via API-driven Automated Valuation Models."
                articleSlug="real-estate-ai-valuation"
                publishedDate="2024-11-15"
                category="Real Estate"
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/insights" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 mb-8 pl-0 hover:pl-2">
                    <ArrowLeft className="w-4 h-4 mr-2" /> {t("xRealEstateAiValuation.backToInsights")}
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <Badge className="mb-4 bg-sky-500/10 text-sky-500 hover:bg-sky-500/20 border-sky-500/20">{t("xRealEstateAiValuation.badge")}</Badge>
                    <h1 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
                        {t("xRealEstateAiValuation.titlePart1")}<span className="text-sky-500">{t("xRealEstateAiValuation.titleHighlight")}</span>
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-muted-foreground border-b border-border pb-8">
                        <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{t("xRealEstateAiValuation.publishedLabel")} {formatArticleDate("2024-11-15")}</span>
                        </div>
                        <div className="flex items-center text-green-500 font-medium">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>{t("xRealEstateAiValuation.updatedLabel")}</span>
                        </div>
                        <div className="flex items-center">
                            <Building className="w-4 h-4 mr-2" />
                            <span>{t("xRealEstateAiValuation.metaCaseStudy")}</span>
                        </div>
                    </div>
                </motion.div>

                <article className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-p:text-foreground/90 prose-strong:text-primary">
                    <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop" alt={t("xRealEstateAiValuation.imgAlt")} className="w-full h-auto rounded-xl mb-8 shadow-2xl opacity-90"  decoding="async" fetchPriority="high"/>

                    <p className="lead text-xl font-medium mb-8">
                        {t("xRealEstateAiValuation.lead")}
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6">{t("xRealEstateAiValuation.h2Before")}</h2>
                    <p>
                        {t("xRealEstateAiValuation.pBefore1")}
                    </p>
                    <p>
                        {t("xRealEstateAiValuation.pBefore2")}
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-sky-500">{t("xRealEstateAiValuation.h2Automated")}</h2>
                    <p>
                        {t("xRealEstateAiValuation.pAutomatedPart1")}<strong>{t("xRealEstateAiValuation.pAutomatedBold")}</strong>{t("xRealEstateAiValuation.pAutomatedPart2")}
                    </p>
                    <ul>
                        <li><strong>{t("xRealEstateAiValuation.li1Bold")}</strong>{t("xRealEstateAiValuation.li1MidA")}<strong>{t("xRealEstateAiValuation.li1BoldB")}</strong>{t("xRealEstateAiValuation.li1MidB")}<strong>{t("xRealEstateAiValuation.li1BoldC")}</strong>{t("xRealEstateAiValuation.li1MidC")}<strong>{t("xRealEstateAiValuation.li1BoldD")}</strong>{t("xRealEstateAiValuation.li1Rest")}</li>
                        <li><strong>{t("xRealEstateAiValuation.li2Bold")}</strong>{t("xRealEstateAiValuation.li2MidA")}<strong>{t("xRealEstateAiValuation.li2BoldB")}</strong>{t("xRealEstateAiValuation.li2Rest")}</li>
                        <li><strong>{t("xRealEstateAiValuation.li3Bold")}</strong>{t("xRealEstateAiValuation.li3MidA")}<strong>{t("xRealEstateAiValuation.li3BoldB")}</strong>{t("xRealEstateAiValuation.li3Rest")}</li>
                    </ul>

                    <div className="my-8 p-6 bg-muted border-l-4 border-sky-500 rounded-r-lg">
                        <p className="text-xl font-bold mb-2 flex items-center gap-2"><Home className="text-sky-500" /> {t("xRealEstateAiValuation.afterTitle")}</p>
                        <ul className="m-0 space-y-2">
                            <li><strong>{t("xRealEstateAiValuation.after1Bold")}</strong>{t("xRealEstateAiValuation.after1MidA")}<strong>{t("xRealEstateAiValuation.after1BoldB")}</strong>{t("xRealEstateAiValuation.after1Rest")}</li>
                            <li><strong>{t("xRealEstateAiValuation.after2Bold")}</strong>{t("xRealEstateAiValuation.after2MidA")}<strong>{t("xRealEstateAiValuation.after2BoldB")}</strong>{t("xRealEstateAiValuation.after2Rest")}</li>
                            <li><strong>{t("xRealEstateAiValuation.after3Bold")}</strong>{t("xRealEstateAiValuation.after3MidA")}<strong>{t("xRealEstateAiValuation.after3BoldB")}</strong>{t("xRealEstateAiValuation.after3Rest")}</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6">{t("xRealEstateAiValuation.h2Conclusion")}</h2>
                    <p>
                        {t("xRealEstateAiValuation.pConclusion")}
                    </p>
                </article>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center border-t border-border pt-12"
                >
                    <Link href="/contact" className="inline-flex items-center justify-center rounded-md text-lg font-bold transition-transform hover:scale-105 bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 shadow-lg shadow-primary/20">
                        {t("xRealEstateAiValuation.ctaButton")}
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
