import SEO from "@/components/seo";
import BreadcrumbSchema from "@/components/seo/breadcrumb-schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, FileText, Mail, UserCog, Globe2, Trash2, ClipboardList, Server, AlertTriangle, RefreshCw } from "lucide-react";
import { EMAILS, HQ_ADDRESS, COMPANY } from "@/data/contact";
import { useTranslation } from "react-i18next";

const LAST_UPDATED = "2026-05-29";

export default function Privacy() {
    const { t } = useTranslation();
    return (
        <div className="pt-24 min-h-screen bg-background">
            <SEO
                title="Privacy Policy | Cehpoint"
                description="How Cehpoint collects, uses, retains, and protects personal data — compliant with India's DPDP Act 2023 and GDPR."
                url="https://www.cehpoint.co.in/privacy"
                canonical="https://www.cehpoint.co.in/privacy"
            />

            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "https://www.cehpoint.co.in/" },
                    { name: "Privacy Policy", url: "https://www.cehpoint.co.in/privacy" }
                ]}
            />

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 text-primary">{t("pages.pgPrivacy.title")}</h1>
                    <p className="text-muted-foreground text-lg">{t("pages.pgPrivacy.lastUpdated")} <time dateTime={LAST_UPDATED}>{new Date(LAST_UPDATED).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</time></p>
                    <p className="text-sm text-muted-foreground mt-2">{t("pages.pgPrivacy.appliesTo")}</p>
                </div>

                <div className="space-y-6">

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Shield className="w-5 h-5 text-primary" />{t("pages.pgPrivacy.s1Title")}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed space-y-3 text-sm">
                            <p>{t("pages.pgPrivacy.s1p1Pre", { year: COMPANY.foundingYear })}{HQ_ADDRESS.display}.</p>
                            <p>{t("pages.pgPrivacy.s1p2")}</p>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Eye className="w-5 h-5 text-primary" />{t("pages.pgPrivacy.s2Title")}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed space-y-3 text-sm">
                            <p>{t("pages.pgPrivacy.s2p1")}</p>
                            <p>{t("pages.pgPrivacy.s2p2")}</p>
                            <p>{t("pages.pgPrivacy.s2p3")}</p>
                            <p>{t("pages.pgPrivacy.s2p4")}</p>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Lock className="w-5 h-5 text-primary" />{t("pages.pgPrivacy.s3Title")}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed space-y-2 text-sm">
                            <ul className="list-disc list-outside ml-5 space-y-2">
                                <li>{t("pages.pgPrivacy.s3li1")}</li>
                                <li>{t("pages.pgPrivacy.s3li2")}</li>
                                <li>{t("pages.pgPrivacy.s3li3")}</li>
                                <li>{t("pages.pgPrivacy.s3li4")}</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Server className="w-5 h-5 text-primary" />{t("pages.pgPrivacy.s4Title")}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed space-y-2 text-sm">
                            <p>{t("pages.pgPrivacy.s4p1")}</p>
                            <ul className="list-disc list-outside ml-5 space-y-1.5">
                                <li>{t("pages.pgPrivacy.s4li1")}</li>
                                <li>{t("pages.pgPrivacy.s4li2")}</li>
                                <li>{t("pages.pgPrivacy.s4li3")}</li>
                                <li>{t("pages.pgPrivacy.s4li4")}</li>
                                <li>{t("pages.pgPrivacy.s4li5")}</li>
                            </ul>
                            <p>{t("pages.pgPrivacy.s4p2")}</p>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Globe2 className="w-5 h-5 text-primary" />{t("pages.pgPrivacy.s5Title")}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed text-sm">
                            <p>{t("pages.pgPrivacy.s5p1")}</p>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><ClipboardList className="w-5 h-5 text-primary" />{t("pages.pgPrivacy.s6Title")}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed text-sm">
                            <p>{t("pages.pgPrivacy.s6p1")}</p>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><UserCog className="w-5 h-5 text-primary" />{t("pages.pgPrivacy.s7Title")}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed space-y-2 text-sm">
                            <p>{t("pages.pgPrivacy.s7p1")}</p>
                            <ul className="list-disc list-outside ml-5 space-y-1.5">
                                <li>{t("pages.pgPrivacy.s7li1")}</li>
                                <li>{t("pages.pgPrivacy.s7li2")}</li>
                                <li>{t("pages.pgPrivacy.s7li3")}</li>
                                <li>{t("pages.pgPrivacy.s7li4")}</li>
                                <li>{t("pages.pgPrivacy.s7li5")}</li>
                                <li>{t("pages.pgPrivacy.s7li6")}</li>
                            </ul>
                            <p>{t("pages.pgPrivacy.s7p2")}</p>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Trash2 className="w-5 h-5 text-primary" />{t("pages.pgPrivacy.s8Title")}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed text-sm">
                            <p>{t("pages.pgPrivacy.s8p1")}</p>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Mail className="w-5 h-5 text-primary" />{t("pages.pgPrivacy.s9Title")}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed text-sm">
                            <p>{t("pages.pgPrivacy.s9p1")}</p>
                            <div className="rounded-lg bg-background border border-border p-4 mt-3 not-italic">
                                <p><strong>{t("pages.pgPrivacy.s9Officer")}</strong></p>
                                <p>{t("pages.pgPrivacy.s9Office")}</p>
                                <p>{HQ_ADDRESS.display}</p>
                                <p className="mt-2">{t("pages.pgPrivacy.s9EmailLabel")} <a href={`mailto:${EMAILS.escalation}`} className="text-primary hover:underline">{EMAILS.escalation}</a></p>
                                <p>{t("pages.pgPrivacy.s9Response")}</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-primary" />{t("pages.pgPrivacy.s10Title")}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed text-sm">
                            <p>{t("pages.pgPrivacy.s10p1")}</p>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><RefreshCw className="w-5 h-5 text-primary" />{t("pages.pgPrivacy.s11Title")}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed text-sm">
                            <p>{t("pages.pgPrivacy.s11p1")}</p>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><FileText className="w-5 h-5 text-primary" />{t("pages.pgPrivacy.s12Title")}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed text-sm">
                            <p>{t("pages.pgPrivacy.s12Pre")}<a href={`mailto:${EMAILS.primary}`} className="text-primary hover:underline">{EMAILS.primary}</a>{t("pages.pgPrivacy.s12Post")}</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
