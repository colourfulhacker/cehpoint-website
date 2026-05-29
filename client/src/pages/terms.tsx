import SEO from "@/components/seo";
import BreadcrumbSchema from "@/components/seo/breadcrumb-schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Gavel, AlertCircle, RefreshCw, HelpCircle, ShieldCheck,
    Scale, FileWarning, Ban, Receipt, ScrollText, MapPin, UserX
} from "lucide-react";
import { EMAILS, PHONES, HQ_ADDRESS, COMPANY } from "@/data/contact";

const LAST_UPDATED = "2026-05-29";

export default function Terms() {
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
                    <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 text-primary">Terms of Service</h1>
                    <p className="text-muted-foreground text-lg">
                        Last updated: <time dateTime={LAST_UPDATED}>{new Date(LAST_UPDATED).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</time>
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">These terms govern your use of cehpoint.co.in and the engagements that follow. For project-specific terms, refer to the signed master services agreement.</p>
                </div>

                <div className="space-y-6">
                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Gavel className="w-5 h-5 text-primary" />1. Acceptance</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed text-sm">
                            <p>By accessing cehpoint.co.in or any subdomain, by submitting a quotation/contact/careers/tender form, or by signing a project proposal with Cehpoint ("Cehpoint", "we", "us"), you agree to be bound by these Terms of Service ("Terms"). If you act on behalf of a company, you confirm you are authorised to bind that company.</p>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" />2. Services we provide</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed text-sm space-y-2">
                            <p>Cehpoint provides — among other things — custom software development, AI/ML implementations, cybersecurity audits and operations, digital forensics, training, and managed engineering teams. The exact scope, deliverables, milestones, and acceptance criteria for any engagement are set out in a written Statement of Work ("SOW") that supersedes any conflicting marketing copy.</p>
                            <p>Demos and proof-of-concepts shared during the sales process are illustrative; the contractually binding artefact is the SOW.</p>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Receipt className="w-5 h-5 text-primary" />3. Pay-after-demo &amp; payment terms</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed text-sm space-y-2">
                            <p>Where our public material advertises a "pay-after-demo" model: we deliver a working slice of the proposed product within the agreed window (typically 24 working hours for web prototypes, 7 days for mobile). You owe nothing for that demo. The full project, if commissioned, begins on signature of the SOW and a 30%-50% milestone advance (project-dependent).</p>
                            <p>Invoices are payable in INR for Indian clients and USD/EUR/GBP/AED for international clients. Standard payment terms are net-15 unless the SOW states otherwise. Overdue invoices accrue interest at 1.5%/month (or the statutory maximum, whichever is lower).</p>
                            <p>GST, VAT, sales tax, and withholding taxes are the client's responsibility unless explicitly bundled in the SOW.</p>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><AlertCircle className="w-5 h-5 text-primary" />4. Intellectual property</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed text-sm space-y-2">
                            <p><strong>Foreground IP</strong> (everything we build specifically for you under the SOW) transfers to you on full payment of the related milestones. Until then, Cehpoint retains a security interest.</p>
                            <p><strong>Background IP</strong> (our libraries, frameworks, internal tooling, accumulated know-how) remains ours; we grant you a perpetual, worldwide, royalty-free licence to use it as embedded in your deliverables.</p>
                            <p>The cehpoint.co.in site itself — including code, copy, design, logos, and marks — is our property or licensed to us. You may not scrape, mirror, or republish without written consent.</p>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Ban className="w-5 h-5 text-primary" />5. Acceptable use</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed text-sm space-y-2">
                            <p>You agree not to (and not to permit a third party to): probe, scan, or test the vulnerability of the site or any portal without prior written authorisation; introduce malware; impersonate another person or entity; use the site to harvest information for spam, scams, or unlawful purposes; or interfere with other users' access.</p>
                            <p>Authorised security research is welcome — contact our Grievance Officer for the scope and reporting protocol.</p>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><FileWarning className="w-5 h-5 text-primary" />6. Warranties &amp; disclaimers</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed text-sm space-y-2">
                            <p>We warrant that the services will be performed with reasonable skill and care by qualified engineers, in line with industry standards and the SOW. Beyond this and any warranties contained in the SOW, the site and services are provided "as is" — to the maximum extent permitted by law, we disclaim implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
                            <p>We do not warrant that the site will be uninterrupted or error-free, or that defects in third-party software (including any open-source dependencies the deliverable uses) will be corrected within a specific time.</p>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Scale className="w-5 h-5 text-primary" />7. Limitation of liability</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed text-sm space-y-2">
                            <p>To the maximum extent permitted by law, Cehpoint's aggregate liability arising from or relating to an engagement is capped at the total fees actually paid to us by you for that engagement during the twelve (12) months preceding the event giving rise to the claim.</p>
                            <p>Neither party is liable for indirect, incidental, special, consequential, exemplary, or punitive damages — including lost profits, lost data, lost goodwill, or business interruption — even if advised of the possibility.</p>
                            <p>Nothing in these Terms limits liability that cannot be limited under applicable law (e.g. fraud, wilful misconduct, gross negligence, or statutory rights of consumers).</p>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><UserX className="w-5 h-5 text-primary" />8. Termination</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed text-sm space-y-2">
                            <p>Either party may terminate the engagement for material breach if the breach is not cured within thirty (30) days of written notice. We may suspend access immediately if payments are more than thirty (30) days overdue or if continued use puts our systems or other clients at risk.</p>
                            <p>On termination: you pay for work delivered up to the effective date; we hand over the foreground IP for paid milestones; both parties return or destroy the other's confidential information.</p>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><MapPin className="w-5 h-5 text-primary" />9. Governing law &amp; dispute resolution</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed text-sm space-y-2">
                            <p>These Terms are governed by the laws of India. Disputes will be resolved first by good-faith negotiation. If unresolved within thirty (30) days, the dispute will be referred to arbitration in Kolkata under the Arbitration and Conciliation Act, 1996, before a sole arbitrator appointed by mutual consent. The language of arbitration is English. The seat is Kolkata, West Bengal, India.</p>
                            <p>Subject to the arbitration clause, the courts at Kolkata have exclusive jurisdiction.</p>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><RefreshCw className="w-5 h-5 text-primary" />10. Changes to these terms</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed text-sm">
                            <p>We may revise these Terms occasionally. Material changes will be notified on this page for at least thirty (30) days before taking effect. Your continued use of the site after the effective date constitutes acceptance. Terms applicable to a signed SOW are frozen at the date of signature and only change by written amendment.</p>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><ScrollText className="w-5 h-5 text-primary" />11. Miscellaneous</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed text-sm space-y-2">
                            <p>If any clause is held unenforceable, the rest of the Terms remain in effect. Failure to enforce a right is not a waiver. You may not assign your rights without our written consent; we may assign in connection with a merger, acquisition, or sale of all or substantially all of our assets.</p>
                            <p>These Terms together with the signed SOW and the Privacy Policy form the entire agreement between us and supersede all prior discussions.</p>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><HelpCircle className="w-5 h-5 text-primary" />12. Contact</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed text-sm space-y-2">
                            <p>For any matter regarding these Terms — clarification, dispute, escalation — please write to us:</p>
                            <div className="rounded-lg bg-background border border-border p-4 mt-2">
                                <p><strong>Cehpoint</strong> · Founded {COMPANY.foundingYear}</p>
                                <p>{HQ_ADDRESS.display}</p>
                                <p className="mt-2">Email: <a href={`mailto:${EMAILS.primary}`} className="text-primary hover:underline">{EMAILS.primary}</a></p>
                                <p>Phone: <a href={`tel:${PHONES.primary.replace(/\s/g, '')}`} className="text-primary hover:underline">{PHONES.primary}</a></p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
