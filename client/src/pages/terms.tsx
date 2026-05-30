import SEO from "@/components/seo";
import BreadcrumbSchema from "@/components/seo/breadcrumb-schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Gavel, AlertCircle, RefreshCw, HelpCircle, ShieldCheck,
    Scale, FileWarning, Ban, Receipt, ScrollText, MapPin, UserX
} from "lucide-react";
import { EMAILS, PHONES, HQ_ADDRESS, COMPANY } from "@/data/contact";
import { useTranslation } from "react-i18next";

const LAST_UPDATED = "2026-05-29";

export default function Terms() {
    const { t } = useTranslation();
    return (
        <div className="pt-24 min-h-screen bg-background">
            <SEO
                title="Terms of Service | Cehpoint"
                description="The legal terms governing engagement, deliverables, payment, IP, liability, and dispute resolution for Cehpoint's IT, AI, and cybersecurity services."
                url="https://www.cehpoint.co.in/terms"
                canonical="https://www.cehpoint.co.in/terms"
            />

            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "https://www.cehpoint.co.in/" },
                    { name: "Terms of Service", url: "https://www.cehpoint.co.in/terms" }
                ]}
            />

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 text-primary">{t("pages.pgTerms.title")}</h1>
                    <p className="text-muted-foreground text-lg">
                        {t("pages.pgTerms.lastUpdated")} <time dateTime={LAST_UPDATED}>{new Date(LAST_UPDATED).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</time>
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">{t("pages.pgTerms.appliesTo")}</p>
                </div>

                <div className="space-y-6">
                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Gavel className="w-5 h-5 text-primary" />{t("pages.pgTerms.s1Title")}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed text-sm">
                            <p>{t("pages.pgTerms.s1p1")}</p>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" />{t("pages.pgTerms.s2Title")}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed text-sm space-y-2">
                            <p>{t("pages.pgTerms.s2p1")}</p>
                            <p>{t("pages.pgTerms.s2p2")}</p>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Receipt className="w-5 h-5 text-primary" />{t("pages.pgTerms.s3Title")}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed text-sm space-y-2">
                            <p>{t("pages.pgTerms.s3p1")}</p>
                            <p>{t("pages.pgTerms.s3p2")}</p>
                            <p>{t("pages.pgTerms.s3p3")}</p>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><AlertCircle className="w-5 h-5 text-primary" />{t("pages.pgTerms.s4Title")}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed text-sm space-y-2">
                            <p>{t("pages.pgTerms.s4p1")}</p>
                            <p>{t("pages.pgTerms.s4p2")}</p>
                            <p>{t("pages.pgTerms.s4p3")}</p>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Ban className="w-5 h-5 text-primary" />{t("pages.pgTerms.s5Title")}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed text-sm space-y-2">
                            <p>{t("pages.pgTerms.s5p1")}</p>
                            <p>{t("pages.pgTerms.s5p2")}</p>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><FileWarning className="w-5 h-5 text-primary" />{t("pages.pgTerms.s6Title")}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed text-sm space-y-2">
                            <p>{t("pages.pgTerms.s6p1")}</p>
                            <p>{t("pages.pgTerms.s6p2")}</p>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Scale className="w-5 h-5 text-primary" />{t("pages.pgTerms.s7Title")}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed text-sm space-y-2">
                            <p>{t("pages.pgTerms.s7p1")}</p>
                            <p>{t("pages.pgTerms.s7p2")}</p>
                            <p>{t("pages.pgTerms.s7p3")}</p>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><UserX className="w-5 h-5 text-primary" />{t("pages.pgTerms.s8Title")}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed text-sm space-y-2">
                            <p>{t("pages.pgTerms.s8p1")}</p>
                            <p>{t("pages.pgTerms.s8p2")}</p>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><MapPin className="w-5 h-5 text-primary" />{t("pages.pgTerms.s9Title")}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed text-sm space-y-2">
                            <p>{t("pages.pgTerms.s9p1")}</p>
                            <p>{t("pages.pgTerms.s9p2")}</p>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><RefreshCw className="w-5 h-5 text-primary" />{t("pages.pgTerms.s10Title")}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed text-sm">
                            <p>{t("pages.pgTerms.s10p1")}</p>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><ScrollText className="w-5 h-5 text-primary" />{t("pages.pgTerms.s11Title")}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed text-sm space-y-2">
                            <p>{t("pages.pgTerms.s11p1")}</p>
                            <p>{t("pages.pgTerms.s11p2")}</p>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><HelpCircle className="w-5 h-5 text-primary" />{t("pages.pgTerms.s12Title")}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed text-sm space-y-2">
                            <p>{t("pages.pgTerms.s12p1")}</p>
                            <div className="rounded-lg bg-background border border-border p-4 mt-2">
                                <p><strong>{t("pages.pgTerms.s12Founded", { year: COMPANY.foundingYear })}</strong></p>
                                <p>{HQ_ADDRESS.display}</p>
                                <p className="mt-2">{t("pages.pgTerms.s12EmailLabel")} <a href={`mailto:${EMAILS.primary}`} className="text-primary hover:underline">{EMAILS.primary}</a></p>
                                <p>{t("pages.pgTerms.s12PhoneLabel")} <a href={`tel:${PHONES.primary.replace(/\s/g, '')}`} className="text-primary hover:underline">{PHONES.primary}</a></p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
