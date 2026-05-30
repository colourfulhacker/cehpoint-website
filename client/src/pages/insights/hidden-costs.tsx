
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { DollarSign, ArrowLeft, BarChart3, MessageCircle, Calendar, Clock } from "lucide-react";
import { Link } from "wouter";
import { formatArticleDate } from "@/lib/date-utils";
import { InsightSEO } from "@/components/seo/insight-seo";
import { useTranslation } from "react-i18next";

export default function HiddenCosts() {
    const { t } = useTranslation();
    const B = "pages.xHiddenCosts";
    const aftermathItems = t(`${B}.aftermathItems`, { returnObjects: true }) as string[];
    return (
        <main className="min-h-screen bg-background pt-24 pb-16">
            <InsightSEO
                title="The True Cost of 'Cheap' Cyber Security: A Case Study"
                description="When the invoice is low, the price is paid in data. An anonymous look at how a mid-sized firm lost ₹50L by choosing the cheapest vendor."
                articleSlug="hidden-costs"
                publishedDate="2024-05-10"
                category="Case Study"
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/insights" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 mb-8 pl-0 hover:pl-2">
                    <ArrowLeft className="w-4 h-4 mr-2" /> {t(`${B}.back`)}
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <Badge className="mb-4" variant="destructive">{t(`${B}.badge`)}</Badge>
                    <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight">
                        {t(`${B}.titlePre`)}<span className="text-red-500">{t(`${B}.titleHighlight`)}</span>{t(`${B}.titlePost`)}
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-muted-foreground border-b border-border pb-8">
                        <div className="flex items-center">
                            <BarChart3 className="w-4 h-4 mr-2" aria-hidden="true" />
                            <span>{t(`${B}.metaAnalyst`)}</span>
                        </div>
                        <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" aria-hidden="true" />
                            <span>{t(`${B}.metaPublished`)}{formatArticleDate("2024-05-10")}</span>
                        </div>
                        <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" aria-hidden="true" />
                            <span>{t(`${B}.metaUpdated`)}</span>
                        </div>
                    </div>
                </motion.div>

                <article className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-p:text-foreground prose-lead:text-foreground prose-strong:text-primary prose-a:text-primary prose-ul:text-foreground prose-li:text-foreground prose-blockquote:text-foreground">
                    <img src="/assets/blog/cyber-hero-generic.png" alt="Hidden Costs of Cheap Security" className="w-full h-auto rounded-xl mb-8 shadow-2xl"  decoding="async" fetchPriority="high"/>
                    <p className="lead text-xl text-foreground/90 font-medium mb-8 italic border-l-4 border-red-500 pl-4">
                        {t(`${B}.lead`)}
                    </p>

                    <p className="text-foreground/90">
                        {t(`${B}.introP`)}
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">{t(`${B}.h2Vendor`)}</h2>
                    <p className="text-foreground/90">
                        {t(`${B}.vendorP`)}
                    </p>

                    <div className="bg-card border rounded-xl overflow-hidden my-8 overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <caption className="sr-only">{t(`${B}.tableCaption`)}</caption>
                            <thead>
                                <tr className="bg-muted border-b">
                                    <th scope="col" className="p-4 font-bold text-foreground">{t(`${B}.thFeature`)}</th>
                                    <th scope="col" className="p-4 font-bold text-red-400">{t(`${B}.thVendorB`)}</th>
                                    <th scope="col" className="p-4 font-bold text-green-400">{t(`${B}.thCehpoint`)}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                <tr>
                                    <th scope="row" className="p-4 font-semibold text-foreground border-r bg-muted/20">{t(`${B}.rowToolsHead`)}</th>
                                    <td className="p-4 text-sm text-foreground/90">{t(`${B}.rowToolsB`)}</td>
                                    <td className="p-4 text-sm text-foreground/90" dangerouslySetInnerHTML={{ __html: t(`${B}.rowToolsC`) }} />
                                </tr>
                                <tr>
                                    <th scope="row" className="p-4 font-semibold text-foreground border-r bg-muted/20">{t(`${B}.rowFalseHead`)}</th>
                                    <td className="p-4 text-sm text-foreground/90">{t(`${B}.rowFalseB`)}</td>
                                    <td className="p-4 text-sm text-foreground/90" dangerouslySetInnerHTML={{ __html: t(`${B}.rowFalseC`) }} />
                                </tr>
                                <tr>
                                    <th scope="row" className="p-4 font-semibold text-foreground border-r bg-muted/20">{t(`${B}.rowResultHead`)}</th>
                                    <td className="p-4 text-sm text-foreground/90">{t(`${B}.rowResultB`)}</td>
                                    <td className="p-4 text-sm text-foreground/90" dangerouslySetInnerHTML={{ __html: t(`${B}.rowResultC`) }} />
                                </tr>
                                <tr>
                                    <th scope="row" className="p-4 font-semibold text-foreground border-r bg-muted/20">{t(`${B}.rowLiabilityHead`)}</th>
                                    <td className="p-4 text-sm text-foreground/90">{t(`${B}.rowLiabilityB`)}</td>
                                    <td className="p-4 text-sm text-foreground/90">{t(`${B}.rowLiabilityC`)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 className="text-2xl font-bold mt-12 mb-4 text-foreground">{t(`${B}.h3Aftermath`)}</h3>
                    <p className="text-foreground/90">
                        {t(`${B}.aftermathP`)}
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                        {aftermathItems.map((item, i) => (
                            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                        ))}
                    </ul>

                    <div className="my-12 p-8 bg-green-900/20 border border-green-200/20 rounded-2xl">
                        <h3 className="text-2xl font-bold mb-4 flex items-center text-green-400">
                            <DollarSign className="w-6 h-6 mr-3" aria-hidden="true" />
                            {t(`${B}.roiTitle`)}
                        </h3>
                        <p className="text-foreground/90">
                            {t(`${B}.roiP`)}
                        </p>
                    </div>

                </article>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <h2 className="text-2xl font-bold mb-6 text-foreground">{t(`${B}.ctaHeading`)}</h2>
                    <a
                        href="https://wa.me/919091156095?text=Hi%20Cehpoint%20team%2C%20I%20read%20your%20case%20study%20on%20the%20'Price%20of%20Cheap%20Security'%20and%20I%20would%20like%20to%20request%20a%20technical%20audit%20and%20quote%20for%20my%20organization."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-md text-lg font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#25D366] text-white hover:bg-[#128C7E] h-12 px-8 shadow-lg transform hover:scale-105 duration-200"
                    >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        {t(`${B}.ctaButton`)}
                    </a>
                </motion.div>

            </div >
        </main >
    );
}
