
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, UserCheck, Eye, FileWarning, Fingerprint, Calendar, Clock } from "lucide-react";
import { Link } from "wouter";
import { InsightSEO } from "@/components/seo/insight-seo";
import { formatArticleDate } from "@/lib/date-utils";
import { useTranslation } from "react-i18next";

export default function HRForensics() {
    const { t } = useTranslation();
    return (
        <main className="min-h-screen bg-background pt-24 pb-16">
            <InsightSEO
                title="The Internal Threat: Is Your Employee Selling Your Data?"
                description="80% of data breaches involve insider threats. Learn how digital forensics can secure your HR process and protect your IP."
                articleSlug="hr-forensics"
                publishedDate="2024-06-05"
                category="HR Prevention"
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/insights" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 mb-8 pl-0 hover:pl-2">
                    <ArrowLeft className="w-4 h-4 mr-2" /> {t("pages.xHrForensics.backToInsights")}
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <Badge className="mb-4" variant="destructive">{t("pages.xHrForensics.badge")}</Badge>
                    <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight">
                        {t("pages.xHrForensics.titleLead")} <span className="text-red-600 dark:text-red-500">{t("pages.xHrForensics.titleHighlight")}</span>
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-muted-foreground border-b border-border pb-8">
                        <div className="flex items-center">
                            <UserCheck className="w-4 h-4 mr-2" aria-hidden="true" />
                            <span>{t("pages.xHrForensics.metaCategory")}</span>
                        </div>
                        <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" aria-hidden="true" />
                            <span>{t("pages.xHrForensics.publishedLabel")} {formatArticleDate("2024-06-05")}</span>
                        </div>
                        <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" aria-hidden="true" />
                            <span>{t("pages.xHrForensics.updatedLabel")}</span>
                        </div>
                    </div>
                </motion.div>

                <article className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-p:text-foreground prose-lead:text-foreground prose-strong:text-primary prose-a:text-primary prose-ul:text-foreground prose-li:text-foreground prose-blockquote:text-foreground">
                    <img src="/assets/blog/cyber-hero-generic.png" alt="HR Forensics" className="w-full h-auto rounded-xl mb-8 shadow-2xl"  decoding="async" fetchPriority="high"/>
                    <p className="lead text-xl text-foreground font-medium mb-8">
                        {t("pages.xHrForensics.lead")}
                    </p>

                    <div className="my-12 p-8 bg-secondary/10 rounded-2xl border-l-4 border-primary">
                        <h3 className="text-2xl font-bold mb-4 flex items-center text-foreground">
                            <Fingerprint className="w-6 h-6 mr-3 text-primary" aria-hidden="true" />
                            {t("pages.xHrForensics.dangerZoneTitle")}
                        </h3>
                        <p className="mb-0 text-foreground/90">
                            {t("pages.xHrForensics.dangerZoneBody")}
                        </p>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">{t("pages.xHrForensics.processHeading")}</h2>
                    <p className="text-foreground/90">
                        {t("pages.xHrForensics.processBody")}
                    </p>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">{t("pages.xHrForensics.auditHeading")}</h3>
                    <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                        {(t("pages.xHrForensics.auditList", { returnObjects: true }) as string[]).map((item, i) => (
                            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                        ))}
                    </ul>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">{t("pages.xHrForensics.trustHeading")}</h2>
                    <p className="text-foreground/90">
                        {t("pages.xHrForensics.trustBody")}
                    </p>

                </article>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <h2 className="text-2xl font-bold mb-6 text-foreground">{t("pages.xHrForensics.ctaHeading")}</h2>
                    <Link href="/contact" className="inline-flex items-center justify-center rounded-md text-lg font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-destructive text-destructive-foreground hover:bg-destructive/90 h-12 px-8 shadow-lg">
                        {t("pages.xHrForensics.ctaButton")}
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
