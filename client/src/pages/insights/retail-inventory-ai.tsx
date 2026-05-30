import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ShoppingCart, BarChart, Clock, Calendar } from "lucide-react";
import { formatArticleDate } from "@/lib/date-utils";
import { Link } from "wouter";
import { InsightSEO } from "@/components/seo/insight-seo";
import { useTranslation } from "react-i18next";

export default function RetailInventoryAI() {
    const { t } = useTranslation();
    return (
        <main className="min-h-screen bg-background pt-24 pb-16">
            <InsightSEO
                title="Ending Stockouts: Sub-$1,000 Retail AI Pipeline"
                description="See how a retail chain cut inventory waste by 40% utilizing machine learning to predict consumer demand automatically."
                articleSlug="retail-inventory-ai"
                publishedDate="2025-04-25"
                category="Retail & E-commerce"
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/insights" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 mb-8 pl-0 hover:pl-2">
                    <ArrowLeft className="w-4 h-4 mr-2" /> {t("xRetailInventoryAi.backToInsights")}
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <Badge className="mb-4 bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 border-emerald-500/20">{t("xRetailInventoryAi.badge")}</Badge>
                    <h1 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
                        {t("xRetailInventoryAi.titlePart1")}<span className="text-emerald-500">{t("xRetailInventoryAi.titleHighlight")}</span>
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-muted-foreground border-b border-border pb-8">
                        <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{t("xRetailInventoryAi.publishedLabel")} {formatArticleDate("2025-04-25")}</span>
                        </div>
                        <div className="flex items-center text-green-500 font-medium">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>{t("xRetailInventoryAi.updatedLabel")}</span>
                        </div>
                        <div className="flex items-center">
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            <span>{t("xRetailInventoryAi.metaCaseStudy")}</span>
                        </div>
                    </div>
                </motion.div>

                <article className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-p:text-foreground/90 prose-strong:text-primary">
                    <img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=1200&h=600&fit=crop" alt={t("xRetailInventoryAi.imgAlt")} className="w-full h-auto rounded-xl mb-8 shadow-2xl opacity-90"  decoding="async" fetchPriority="high"/>

                    <p className="lead text-xl font-medium mb-8">
                        {t("xRetailInventoryAi.lead")}
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6">{t("xRetailInventoryAi.h2Before")}</h2>
                    <p>
                        {t("xRetailInventoryAi.pBefore1")}
                    </p>
                    <p>
                        {t("xRetailInventoryAi.pBefore2Part1")}<strong>{t("xRetailInventoryAi.pBefore2Bold")}</strong>{t("xRetailInventoryAi.pBefore2Rest")}
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6">{t("xRetailInventoryAi.h2Setup")}</h2>
                    <p>
                        {t("xRetailInventoryAi.pSetupPart1")}<strong>{t("xRetailInventoryAi.pSetupBold")}</strong>{t("xRetailInventoryAi.pSetupPart2")}
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 my-8 text-sm">
                        <div className="bg-card/50 p-6 rounded-xl border border-border">
                            <h3 className="text-lg font-bold mb-4 text-primary">{t("xRetailInventoryAi.techStackTitle")}</h3>
                            <ul className="space-y-2">
                                <li>• <strong>{t("xRetailInventoryAi.tech1Bold")}</strong>{t("xRetailInventoryAi.tech1Rest")}</li>
                                <li>• <strong>{t("xRetailInventoryAi.tech2Bold")}</strong>{t("xRetailInventoryAi.tech2Rest")}</li>
                                <li>• <strong>{t("xRetailInventoryAi.tech3Bold")}</strong>{t("xRetailInventoryAi.tech3Rest")}</li>
                                <li>• <strong>{t("xRetailInventoryAi.tech4Bold")}</strong>{t("xRetailInventoryAi.tech4Rest")}</li>
                            </ul>
                        </div>
                        <div className="bg-card/50 p-6 rounded-xl border border-border">
                            <h3 className="text-lg font-bold mb-4 text-primary">{t("xRetailInventoryAi.keyInsightTitle")}</h3>
                            <p>{t("xRetailInventoryAi.keyInsightPart1")}<strong>{t("xRetailInventoryAi.keyInsightBold")}</strong>{t("xRetailInventoryAi.keyInsightRest")}</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">{t("xRetailInventoryAi.h2Beyond")}</h2>
                    <p>
                        {t("xRetailInventoryAi.pBeyondPart1")}<strong>{t("xRetailInventoryAi.pBeyondBold")}</strong>{t("xRetailInventoryAi.pBeyondRest")}
                    </p>

                    <div className="my-8 p-6 bg-muted border-l-4 border-emerald-500 rounded-r-lg">
                        <p className="text-xl font-bold mb-2 flex items-center gap-2"><BarChart className="text-emerald-500" /> {t("xRetailInventoryAi.afterTitle")}</p>
                        <ul className="m-0 space-y-2">
                            <li><strong>{t("xRetailInventoryAi.after1Bold")}</strong>{t("xRetailInventoryAi.after1Rest")}</li>
                            <li><strong>{t("xRetailInventoryAi.after2Bold")}</strong>{t("xRetailInventoryAi.after2Rest")}</li>
                            <li><strong>{t("xRetailInventoryAi.after3Bold")}</strong>{t("xRetailInventoryAi.after3Rest")}</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6">{t("xRetailInventoryAi.h2Conclusion")}</h2>
                    <p>
                        {t("xRetailInventoryAi.pConclusion")}
                    </p>
                </article>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center border-t border-border pt-12"
                >
                    <Link href="/contact" className="inline-flex items-center justify-center rounded-md text-lg font-bold transition-transform hover:scale-105 bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 shadow-lg shadow-primary/20">
                        {t("xRetailInventoryAi.ctaButton")}
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
