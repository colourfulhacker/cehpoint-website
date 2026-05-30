import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Truck, TrendingDown, MapPin, Clock, Calendar } from "lucide-react";
import { formatArticleDate } from "@/lib/date-utils";
import { Link } from "wouter";
import { InsightSEO } from "@/components/seo/insight-seo";
import { useTranslation } from "react-i18next";

export default function LogisticsRouteAutomation() {
    const { t } = useTranslation();
    return (
        <main className="min-h-screen bg-background pt-24 pb-16">
            <InsightSEO
                title="Fleet Fuel Costs Reduction: Sub-$1,000 AI Dispatcher"
                description="Read how a regional delivery network slashed fuel costs in under a week using automated webhook dispatching via WhatsApp."
                articleSlug="logistics-route-automation"
                publishedDate="2025-05-30"
                category="Supply Chain"
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/insights" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 mb-8 pl-0 hover:pl-2">
                    <ArrowLeft className="w-4 h-4 mr-2" /> {t("pages.xLogisticsRouteAutomation.backToInsights")}
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <Badge className="mb-4 bg-orange-500/10 text-orange-500 hover:bg-orange-500/20 border-orange-500/20">{t("pages.xLogisticsRouteAutomation.badge")}</Badge>
                    <h1 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
                        {t("pages.xLogisticsRouteAutomation.titleLead")} <span className="text-orange-500">{t("pages.xLogisticsRouteAutomation.titleHighlight")}</span> {t("pages.xLogisticsRouteAutomation.titleTail")}
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-muted-foreground border-b border-border pb-8">
                        <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{t("pages.xLogisticsRouteAutomation.publishedLabel")} {formatArticleDate("2025-05-30")}</span>
                        </div>
                        <div className="flex items-center text-green-500 font-medium">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>{t("pages.xLogisticsRouteAutomation.updatedLabel")}</span>
                        </div>
                        <div className="flex items-center">
                            <Truck className="w-4 h-4 mr-2" />
                            <span>{t("pages.xLogisticsRouteAutomation.metaCaseStudy")}</span>
                        </div>
                    </div>
                </motion.div>

                <article className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-p:text-foreground/90 prose-strong:text-primary">
                    <img src="https://images.unsplash.com/photo-1586528116311-ad8ed7c80a71?w=1200&h=600&fit=crop" alt="Logistics Automation Tech" className="w-full h-auto rounded-xl mb-8 shadow-2xl opacity-90"  decoding="async" fetchPriority="high"/>

                    <p className="lead text-xl font-medium mb-8">
                        {t("pages.xLogisticsRouteAutomation.lead")}
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3"><MapPin className="text-red-500" /> {t("pages.xLogisticsRouteAutomation.beforeHeading")}</h2>
                    <p>
                        {t("pages.xLogisticsRouteAutomation.beforeP1")}
                    </p>
                    <p dangerouslySetInnerHTML={{ __html: t("pages.xLogisticsRouteAutomation.beforeP2") }} />

                    <h2 className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3"><TrendingDown className="text-green-500" /> {t("pages.xLogisticsRouteAutomation.implHeading")}</h2>
                    <p dangerouslySetInnerHTML={{ __html: t("pages.xLogisticsRouteAutomation.implBody") }} />

                    <div className="grid md:grid-cols-2 gap-8 my-8 text-sm">
                        <div className="bg-card/50 p-6 rounded-xl border border-border">
                            <h3 className="text-lg font-bold mb-4 text-primary">{t("pages.xLogisticsRouteAutomation.stackHeading")}</h3>
                            <ul className="space-y-2">
                                {(t("pages.xLogisticsRouteAutomation.stackList", { returnObjects: true }) as string[]).map((item, i) => (
                                    <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                                ))}
                            </ul>
                        </div>
                        <div className="bg-card/50 p-6 rounded-xl border border-border">
                            <h3 className="text-lg font-bold mb-4 text-primary">{t("pages.xLogisticsRouteAutomation.hackHeading")}</h3>
                            <p dangerouslySetInnerHTML={{ __html: t("pages.xLogisticsRouteAutomation.hackBody") }} />
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">{t("pages.xLogisticsRouteAutomation.headlessHeading")}</h2>
                    <p>
                        {t("pages.xLogisticsRouteAutomation.headlessBody")}
                    </p>

                    <div className="my-8 p-6 bg-muted border-l-4 border-orange-500 rounded-r-lg">
                        <p className="text-xl font-bold mb-2">{t("pages.xLogisticsRouteAutomation.afterHeading")}</p>
                        <ul className="m-0 space-y-2">
                            {(t("pages.xLogisticsRouteAutomation.afterList", { returnObjects: true }) as string[]).map((item, i) => (
                                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                            ))}
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6">{t("pages.xLogisticsRouteAutomation.conclusionHeading")}</h2>
                    <p>
                        {t("pages.xLogisticsRouteAutomation.conclusionBody")}
                    </p>
                </article>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center border-t border-border pt-12"
                >
                    <h2 className="text-2xl font-bold mb-6 text-foreground">{t("pages.xLogisticsRouteAutomation.ctaHeading")}</h2>
                    <Link href="/services" className="inline-flex items-center justify-center rounded-md text-lg font-bold transition-transform hover:scale-105 bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 shadow-lg shadow-primary/20">
                        {t("pages.xLogisticsRouteAutomation.ctaButton")}
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
