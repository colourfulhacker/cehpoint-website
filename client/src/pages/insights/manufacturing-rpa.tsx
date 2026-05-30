import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Factory, Cog, Clock, Calendar } from "lucide-react";
import { formatArticleDate } from "@/lib/date-utils";
import { Link } from "wouter";
import { InsightSEO } from "@/components/seo/insight-seo";
import { useTranslation } from "react-i18next";

export default function ManufacturingRPA() {
    const { t } = useTranslation();
    return (
        <main className="min-h-screen bg-background pt-24 pb-16">
            <InsightSEO
                title="Industrial Tech: Sub-$1,000 RPA for Manufacturing"
                description="Discover how a factory deployed a lightweight Robotic Process Automation (RPA) bot to bridge modern data forms with legacy ERPs."
                articleSlug="manufacturing-rpa"
                publishedDate="2025-01-08"
                category="Manufacturing"
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/insights" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 mb-8 pl-0 hover:pl-2">
                    <ArrowLeft className="w-4 h-4 mr-2" /> {t("pages.xManufacturingRpa.backToInsights")}
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <Badge className="mb-4 bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20 border-yellow-500/20">{t("pages.xManufacturingRpa.badge")}</Badge>
                    <h1 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
                        {t("pages.xManufacturingRpa.titleLead")} <span className="text-yellow-500">{t("pages.xManufacturingRpa.titleHighlight")}</span>
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-muted-foreground border-b border-border pb-8">
                        <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{t("pages.xManufacturingRpa.publishedLabel")} {formatArticleDate("2025-01-08")}</span>
                        </div>
                        <div className="flex items-center text-green-500 font-medium">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>{t("pages.xManufacturingRpa.updatedLabel")}</span>
                        </div>
                        <div className="flex items-center">
                            <Factory className="w-4 h-4 mr-2" />
                            <span>{t("pages.xManufacturingRpa.metaCaseStudy")}</span>
                        </div>
                    </div>
                </motion.div>

                <article className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-p:text-foreground/90 prose-strong:text-primary">
                    <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=600&fit=crop" alt="Smart Manufacturing Tech Automation" className="w-full h-auto rounded-xl mb-8 shadow-2xl opacity-90"  decoding="async" fetchPriority="high"/>

                    <p className="lead text-xl font-medium mb-8">
                        {t("pages.xManufacturingRpa.lead")}
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">{t("pages.xManufacturingRpa.beforeHeading")}</h2>
                    <p>
                        {t("pages.xManufacturingRpa.beforeP1")}
                    </p>
                    <p dangerouslySetInnerHTML={{ __html: t("pages.xManufacturingRpa.beforeP2") }} />

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-yellow-600">{t("pages.xManufacturingRpa.rpaHeading")}</h2>
                    <p dangerouslySetInnerHTML={{ __html: t("pages.xManufacturingRpa.rpaBody") }} />

                    <div className="grid md:grid-cols-2 gap-8 my-8 text-sm">
                        <div className="bg-card/50 p-6 rounded-xl border border-border">
                            <h3 className="text-lg font-bold mb-4 text-primary">{t("pages.xManufacturingRpa.stackHeading")}</h3>
                            <ul className="space-y-2">
                                {(t("pages.xManufacturingRpa.stackList", { returnObjects: true }) as string[]).map((item, i) => (
                                    <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                                ))}
                            </ul>
                        </div>
                        <div className="bg-card/50 p-6 rounded-xl border border-border">
                            <h3 className="text-lg font-bold mb-4 text-primary">{t("pages.xManufacturingRpa.hackHeading")}</h3>
                            <p dangerouslySetInnerHTML={{ __html: t("pages.xManufacturingRpa.hackBody") }} />
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">{t("pages.xManufacturingRpa.predictiveHeading")}</h2>
                    <p dangerouslySetInnerHTML={{ __html: t("pages.xManufacturingRpa.predictiveBody") }} />

                    <div className="my-8 p-6 bg-muted border-l-4 border-yellow-500 rounded-r-lg">
                        <p className="text-xl font-bold mb-2 flex items-center gap-2"><Cog className="text-yellow-500" /> {t("pages.xManufacturingRpa.afterHeading")}</p>
                        <ul className="m-0 space-y-2">
                            {(t("pages.xManufacturingRpa.afterList", { returnObjects: true }) as string[]).map((item, i) => (
                                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                            ))}
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6">{t("pages.xManufacturingRpa.conclusionHeading")}</h2>
                    <p>
                        {t("pages.xManufacturingRpa.conclusionBody")}
                    </p>
                </article>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center border-t border-border pt-12"
                >
                    <Link href="/contact" className="inline-flex items-center justify-center rounded-md text-lg font-bold transition-transform hover:scale-105 bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 shadow-lg shadow-primary/20">
                        {t("pages.xManufacturingRpa.ctaButton")}
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
