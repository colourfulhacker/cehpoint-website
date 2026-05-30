
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, IndianRupee, TrendingUp, Smartphone, Calendar, Clock } from "lucide-react";
import { Link } from "wouter";
import { InsightSEO } from "@/components/seo/insight-seo";
import { formatArticleDate } from "@/lib/date-utils";
import { useTranslation } from "react-i18next";

export default function RuralGoldmine() {
    const { t } = useTranslation();
    return (
        <main className="min-h-screen bg-background pt-24 pb-16">
            <InsightSEO
                title="The Untapped Goldmine in Tier-3 India"
                description="Forget Bangalore. The 700 million users in rural India are waiting for YOU. Discover how a ₹15k app can dominate a district."
                articleSlug="rural-goldmine"
                publishedDate="2024-08-12"
                category="Market Analysis"
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/insights" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 mb-8 pl-0 hover:pl-2">
                    <ArrowLeft className="w-4 h-4 mr-2" /> {t("xRuralGoldmine.backToInsights")}
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <Badge className="mb-4" variant="secondary">{t("xRuralGoldmine.badge")}</Badge>
                    <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight">
                        {t("xRuralGoldmine.titlePart1")}<span className="text-gradient">{t("xRuralGoldmine.titleHighlight")}</span>
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-muted-foreground border-b border-border pb-8">
                        <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" aria-hidden="true" />
                            <span>{t("xRuralGoldmine.metaStrategy")}</span>
                        </div>
                        <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" aria-hidden="true" />
                            <span>{t("xRuralGoldmine.publishedLabel")} {formatArticleDate("2024-08-12")}</span>
                        </div>
                        <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" aria-hidden="true" />
                            <span>{t("xRuralGoldmine.updatedLabel")}</span>
                        </div>
                    </div>
                </motion.div>

                <article className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-p:text-foreground prose-lead:text-foreground prose-strong:text-primary prose-a:text-primary prose-ul:text-foreground prose-li:text-foreground prose-blockquote:text-foreground">
                    <img src="/assets/blog/business-hero-generic.png" alt={t("xRuralGoldmine.imgAlt")} className="w-full h-auto rounded-xl mb-8 shadow-2xl"  decoding="async" fetchPriority="high"/>
                    <p className="lead text-xl text-foreground font-medium mb-8">
                        {t("xRuralGoldmine.lead")}
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">{t("xRuralGoldmine.h2AmazonGap")}</h2>
                    <p className="text-foreground/90">
                        {t("xRuralGoldmine.pAmazonGap")}
                    </p>
                    <p className="text-foreground/90 font-bold">
                        {t("xRuralGoldmine.pMonopoly")}
                    </p>

                    <div className="my-12 p-8 bg-secondary/10 rounded-2xl border-l-4 border-primary">
                        <h3 className="text-2xl font-bold mb-4 flex items-center text-foreground">
                            <IndianRupee className="w-6 h-6 mr-3 text-primary" aria-hidden="true" />
                            {t("xRuralGoldmine.stackTitle")}
                        </h3>
                        <ul className="text-foreground/90 list-none p-0 space-y-2">
                            <li>• <strong>{t("xRuralGoldmine.stack1Bold")}</strong>{t("xRuralGoldmine.stack1MidA")}<strong>{t("xRuralGoldmine.stack1BoldB")}</strong>{t("xRuralGoldmine.stack1Rest")}</li>
                            <li>• <strong>{t("xRuralGoldmine.stack2Bold")}</strong>{t("xRuralGoldmine.stack2MidA")}<strong>{t("xRuralGoldmine.stack2BoldB")}</strong>{t("xRuralGoldmine.stack2Rest")}</li>
                            <li>• <strong>{t("xRuralGoldmine.stack3Bold")}</strong>{t("xRuralGoldmine.stack3MidA")}<strong>{t("xRuralGoldmine.stack3BoldB")}</strong>{t("xRuralGoldmine.stack3Rest")}</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">{t("xRuralGoldmine.h2Founders")}</h2>
                    <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                        <li><strong>{t("xRuralGoldmine.founder1Bold")}</strong>{t("xRuralGoldmine.founder1Rest")}</li>
                        <li><strong>{t("xRuralGoldmine.founder2Bold")}</strong>{t("xRuralGoldmine.founder2Rest")}</li>
                        <li><strong>{t("xRuralGoldmine.founder3Bold")}</strong>{t("xRuralGoldmine.founder3Rest")}</li>
                    </ul>

                    <div className="my-12 p-8 bg-primary/5 border border-primary/20 rounded-2xl">
                        <h3 className="text-2xl font-bold mb-4 flex items-center text-foreground">
                            <TrendingUp className="w-6 h-6 mr-3 text-primary" aria-hidden="true" />
                            {t("xRuralGoldmine.caseStudyTitle")}
                        </h3>
                        <p className="text-foreground/90 mb-4">
                            {t("xRuralGoldmine.caseStudyP1")}
                        </p>
                        <p className="text-foreground/90 font-bold">
                            {t("xRuralGoldmine.caseStudyInvestment")}<br />
                            {t("xRuralGoldmine.caseStudyProfit")}
                        </p>
                        <p className="text-foreground/90 mt-2">
                            {t("xRuralGoldmine.caseStudyP2")}
                        </p>
                    </div>

                </article>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <h2 className="text-2xl font-bold mb-6 text-foreground">{t("xRuralGoldmine.ctaHeading")}</h2>
                    <Link href="/services/business-app-catalog" className="inline-flex items-center justify-center rounded-md text-lg font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 shadow-lg hover:shadow-xl transform duration-200">
                        {t("xRuralGoldmine.ctaButton")}
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
