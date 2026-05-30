
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Store, Globe, MapPin, ShoppingBag, Calendar, Clock } from "lucide-react";
import { Link } from "wouter";
import { InsightSEO } from "@/components/seo/insight-seo";
import { formatArticleDate } from "@/lib/date-utils";
import { useTranslation } from "react-i18next";

export default function HyperlocalFuture() {
    const { t } = useTranslation();
    return (
        <main className="min-h-screen bg-background pt-24 pb-16">
            <InsightSEO
                title="E-commerce is Dead. Long Live Hyperlocal."
                description="Don't fight Amazon. Own your neighborhood. The future of retail is 10-minute delivery from the store next door."
                articleSlug="hyperlocal-future"
                publishedDate="2024-09-03"
                category="Retail Evolution"
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/insights" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 mb-8 pl-0 hover:pl-2">
                    <ArrowLeft className="w-4 h-4 mr-2" /> {t("pages.xHyperlocalFuture.backToInsights")}
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <Badge className="mb-4" variant="secondary">{t("pages.xHyperlocalFuture.badge")}</Badge>
                    <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight">
                        {t("pages.xHyperlocalFuture.titleLead")} <span className="text-gradient">{t("pages.xHyperlocalFuture.titleHighlight")}</span>
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-muted-foreground border-b border-border pb-8">
                        <div className="flex items-center">
                            <Store className="w-4 h-4 mr-2" aria-hidden="true" />
                            <span>{t("pages.xHyperlocalFuture.metaCategory")}</span>
                        </div>
                        <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" aria-hidden="true" />
                            <span>{t("pages.xHyperlocalFuture.publishedLabel")} {formatArticleDate("2024-09-03")}</span>
                        </div>
                        <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" aria-hidden="true" />
                            <span>{t("pages.xHyperlocalFuture.updatedLabel")}</span>
                        </div>
                    </div>
                </motion.div>

                <article className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-p:text-foreground prose-lead:text-foreground prose-strong:text-primary prose-a:text-primary prose-ul:text-foreground prose-li:text-foreground prose-blockquote:text-foreground">
                    <img src="/assets/blog/hyperlocal-hero.png" alt="Hyperlocal Delivery Service" className="w-full h-auto rounded-xl mb-8 shadow-2xl"  decoding="async" fetchPriority="high"/>
                    <p className="lead text-xl text-foreground font-medium mb-8" dangerouslySetInnerHTML={{ __html: t("pages.xHyperlocalFuture.lead") }} />

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">{t("pages.xHyperlocalFuture.warHeading")}</h2>
                    <p className="text-foreground/90" dangerouslySetInnerHTML={{ __html: t("pages.xHyperlocalFuture.warBody") }} />

                    <div className="my-12 p-8 bg-secondary/10 rounded-2xl border-l-4 border-primary">
                        <h3 className="text-2xl font-bold mb-4 flex items-center text-foreground">
                            <MapPin className="w-6 h-6 mr-3 text-primary" aria-hidden="true" />
                            {t("pages.xHyperlocalFuture.engineTitle")}
                        </h3>
                        <ul className="text-foreground/90 list-none p-0 space-y-2">
                            {(t("pages.xHyperlocalFuture.engineList", { returnObjects: true }) as string[]).map((item, i) => (
                                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                            ))}
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">{t("pages.xHyperlocalFuture.winsHeading")}</h2>
                    <div className="grid md:grid-cols-2 gap-8 my-8">
                        <div>
                            <h4 className="font-bold text-lg text-foreground mb-2">{t("pages.xHyperlocalFuture.startupHeading")}</h4>
                            <ul className="list-disc pl-4 space-y-2 text-foreground/90">
                                {(t("pages.xHyperlocalFuture.startupList", { returnObjects: true }) as string[]).map((item, i) => (
                                    <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg text-foreground mb-2">{t("pages.xHyperlocalFuture.customerHeading")}</h4>
                            <ul className="list-disc pl-4 space-y-2 text-foreground/90">
                                {(t("pages.xHyperlocalFuture.customerList", { returnObjects: true }) as string[]).map((item, i) => (
                                    <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                                ))}
                            </ul>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">{t("pages.xHyperlocalFuture.techHeading")}</h2>
                    <p className="text-foreground/90">
                        {t("pages.xHyperlocalFuture.techBody")}
                    </p>
                    <p className="text-foreground/90 font-bold">
                        {t("pages.xHyperlocalFuture.techTagline")}
                    </p>

                </article>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <h2 className="text-2xl font-bold mb-6 text-foreground">{t("pages.xHyperlocalFuture.ctaHeading")}</h2>
                    <Link href="/services/business-app-catalog" className="inline-flex items-center justify-center rounded-md text-lg font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 shadow-lg hover:shadow-xl transform duration-200">
                        {t("pages.xHyperlocalFuture.ctaButton")}
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
