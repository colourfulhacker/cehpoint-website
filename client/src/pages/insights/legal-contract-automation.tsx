import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Scale, FileText, Clock, Calendar } from "lucide-react";
import { formatArticleDate } from "@/lib/date-utils";
import { Link } from "wouter";
import { InsightSEO } from "@/components/seo/insight-seo";
import { useTranslation } from "react-i18next";

export default function LegalContractAutomation() {
    const { t } = useTranslation();
    return (
        <main className="min-h-screen bg-background pt-24 pb-16">
            <InsightSEO
                title="Legal Tech: NLP Contract Automation for Under $1,000"
                description="Discover how a corporate law firm utilized a secure NLP service to cut non-billable contract review hours by 60%."
                articleSlug="legal-contract-automation"
                publishedDate="2025-03-12"
                category="Legal & Compliance"
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/insights" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 mb-8 pl-0 hover:pl-2">
                    <ArrowLeft className="w-4 h-4 mr-2" /> {t("pages.xLegalContractAutomation.backToInsights")}
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <Badge className="mb-4 bg-indigo-500/10 text-indigo-500 hover:bg-indigo-500/20 border-indigo-500/20">{t("pages.xLegalContractAutomation.badge")}</Badge>
                    <h1 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
                        {t("pages.xLegalContractAutomation.titleLead")} <span className="text-indigo-500">{t("pages.xLegalContractAutomation.titleHighlight")}</span>
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-muted-foreground border-b border-border pb-8">
                        <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{t("pages.xLegalContractAutomation.publishedLabel")} {formatArticleDate("2025-03-12")}</span>
                        </div>
                        <div className="flex items-center text-green-500 font-medium">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>{t("pages.xLegalContractAutomation.updatedLabel")}</span>
                        </div>
                        <div className="flex items-center">
                            <Scale className="w-4 h-4 mr-2" />
                            <span>{t("pages.xLegalContractAutomation.metaCaseStudy")}</span>
                        </div>
                    </div>
                </motion.div>

                <article className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-p:text-foreground/90 prose-strong:text-primary">
                    <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=1200&h=600&fit=crop" alt="Legal Contracts AI Automation" className="w-full h-auto rounded-xl mb-8 shadow-2xl opacity-90"  decoding="async" fetchPriority="high"/>

                    <p className="lead text-xl font-medium mb-8">
                        {t("pages.xLegalContractAutomation.lead")}
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6">{t("pages.xLegalContractAutomation.beforeHeading")}</h2>
                    <p>
                        {t("pages.xLegalContractAutomation.beforeP1")}
                    </p>
                    <p dangerouslySetInnerHTML={{ __html: t("pages.xLegalContractAutomation.beforeP2") }} />

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-indigo-500">{t("pages.xLegalContractAutomation.engineHeading")}</h2>
                    <p dangerouslySetInnerHTML={{ __html: t("pages.xLegalContractAutomation.engineBody") }} />

                    <div className="grid md:grid-cols-2 gap-8 my-8 text-sm">
                        <div className="bg-card/50 p-6 rounded-xl border border-border">
                            <h3 className="text-lg font-bold mb-4 text-primary">{t("pages.xLegalContractAutomation.stackHeading")}</h3>
                            <ul className="space-y-2">
                                {(t("pages.xLegalContractAutomation.stackList", { returnObjects: true }) as string[]).map((item, i) => (
                                    <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                                ))}
                            </ul>
                        </div>
                        <div className="bg-card/50 p-6 rounded-xl border border-border">
                            <h3 className="text-lg font-bold mb-4 text-primary">{t("pages.xLegalContractAutomation.implHeading")}</h3>
                            <p dangerouslySetInnerHTML={{ __html: t("pages.xLegalContractAutomation.implBody") }} />
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">{t("pages.xLegalContractAutomation.busyHeading")}</h2>
                    <p>
                        {t("pages.xLegalContractAutomation.busyBody")}
                    </p>

                    <div className="my-8 p-6 bg-muted border-l-4 border-indigo-500 rounded-r-lg">
                        <p className="text-xl font-bold mb-2 flex items-center gap-2"><FileText className="text-indigo-500" /> {t("pages.xLegalContractAutomation.afterHeading")}</p>
                        <ul className="m-0 space-y-2">
                            {(t("pages.xLegalContractAutomation.afterList", { returnObjects: true }) as string[]).map((item, i) => (
                                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                            ))}
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6">{t("pages.xLegalContractAutomation.conclusionHeading")}</h2>
                    <p>
                        {t("pages.xLegalContractAutomation.conclusionBody")}
                    </p>
                </article>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center border-t border-border pt-12"
                >
                    <Link href="/contact" className="inline-flex items-center justify-center rounded-md text-lg font-bold transition-transform hover:scale-105 bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 shadow-lg shadow-primary/20">
                        {t("pages.xLegalContractAutomation.ctaButton")}
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
