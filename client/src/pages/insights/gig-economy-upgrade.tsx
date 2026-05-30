
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Wrench, Hammer, UserCheck, Smartphone, Calendar, Clock } from "lucide-react";
import { Link } from "wouter";
import { formatArticleDate } from "@/lib/date-utils";
import { InsightSEO } from "@/components/seo/insight-seo";
import { useTranslation } from "react-i18next";

export default function GigEconomyUpgrade() {
    const { t } = useTranslation();
    const B = "pages.xGigEconomyUpgrade";
    const stackItems = t(`${B}.stackItems`, { returnObjects: true }) as string[];
    const advantageItems = t(`${B}.advantageItems`, { returnObjects: true }) as string[];
    return (
        <main className="min-h-screen bg-background pt-24 pb-16">
            <InsightSEO
                title="The Gig Economy Upgrade: Professionalizing Home Services"
                description="Turn chaotic home services into a professional empire. Discover how to organize electricians, plumbers, and cleaners with a simple app."
                articleSlug="gig-economy-upgrade"
                publishedDate="2024-04-22"
                category="Service Industry"
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
                    <Badge className="mb-4" variant="secondary">{t(`${B}.badge`)}</Badge>
                    <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight">
                        {t(`${B}.titlePre`)}<span className="text-gradient">{t(`${B}.titleHighlight`)}</span>
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-muted-foreground border-b border-border pb-8">
                        <div className="flex items-center">
                            <Wrench className="w-4 h-4 mr-2" aria-hidden="true" />
                            <span>{t(`${B}.metaService`)}</span>
                        </div>
                        <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" aria-hidden="true" />
                            <span>{t(`${B}.metaPublished`)}{formatArticleDate("2024-04-22")}</span>
                        </div>
                        <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" aria-hidden="true" />
                            <span>{t(`${B}.metaUpdated`)}</span>
                        </div>
                    </div>
                </motion.div>

                <article className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-p:text-foreground prose-lead:text-foreground prose-strong:text-primary prose-a:text-primary prose-ul:text-foreground prose-li:text-foreground prose-blockquote:text-foreground">
                    <img src="/assets/blog/service-hero.png" alt="Service Booking App Interface" className="w-full h-auto rounded-xl mb-8 shadow-2xl"  decoding="async" fetchPriority="high"/>
                    <p className="lead text-xl text-foreground font-medium mb-8">
                        {t(`${B}.lead`)}<span className="text-primary font-bold">{t(`${B}.leadHighlight`)}</span>{t(`${B}.leadPost`)}
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">{t(`${B}.h2Gap`)}</h2>
                    <p className="text-foreground/90">
                        {t(`${B}.gapP1Pre`)}<strong>{t(`${B}.gapP1Strong`)}</strong>{t(`${B}.gapP1Post`)}
                    </p>
                    <p className="text-foreground/90">
                        {t(`${B}.gapP2Pre`)}<strong>{t(`${B}.gapP2Strong1`)}</strong>{t(`${B}.gapP2Mid`)}<strong>{t(`${B}.gapP2Strong2`)}</strong>{t(`${B}.gapP2Post`)}
                    </p>

                    <div className="my-12 p-8 bg-secondary/10 rounded-2xl border-l-4 border-primary">
                        <h3 className="text-2xl font-bold mb-4 flex items-center text-foreground">
                            <UserCheck className="w-6 h-6 mr-3 text-primary" aria-hidden="true" />
                            {t(`${B}.stackTitle`)}
                        </h3>
                        <ul className="text-foreground/90 list-none p-0 space-y-2">
                            {stackItems.map((item, i) => (
                                <li key={i}>• <span dangerouslySetInnerHTML={{ __html: item }} /></li>
                            ))}
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">{t(`${B}.h2Scale`)}</h2>
                    <div className="grid md:grid-cols-2 gap-8 my-8">
                        <div>
                            <h4 className="font-bold text-lg text-foreground mb-2">{t(`${B}.ticketTitle`)}</h4>
                            <p className="text-foreground/90">
                                {t(`${B}.ticketP`)}
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg text-foreground mb-2">{t(`${B}.capitalTitle`)}</h4>
                            <p className="text-foreground/90">
                                {t(`${B}.capitalP`)}
                            </p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">{t(`${B}.h2Advantage`)}</h2>
                    <p className="text-foreground/90">
                        {t(`${B}.advantagePPre`)}<strong>{t(`${B}.advantagePStrong`)}</strong>{t(`${B}.advantagePPost`)}
                    </p>
                    <ul className="list-disc pl-4 space-y-2 text-foreground/90">
                        {advantageItems.map((item, i) => (
                            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                        ))}
                    </ul>

                    <p className="text-foreground/90 font-bold mt-8">
                        {t(`${B}.closing`)}
                    </p>

                </article>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <h2 className="text-2xl font-bold mb-6 text-foreground">{t(`${B}.ctaHeading`)}</h2>
                    <Link href="/services/business-app-catalog" className="inline-flex items-center justify-center rounded-md text-lg font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 shadow-lg hover:shadow-xl transform duration-200">
                        {t(`${B}.ctaButton`)}
                    </Link>
                </motion.div>
            </div>
        </main >
    );
}
