import SEO from "@/components/seo";
import BreadcrumbSchema from "@/components/seo/breadcrumb-schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, FileText, Mail, UserCog, Globe2, Trash2, ClipboardList, Server, AlertTriangle, RefreshCw } from "lucide-react";
import { EMAILS, HQ_ADDRESS, COMPANY } from "@/data/contact";

const LAST_UPDATED = "2026-05-29";

export default function Privacy() {
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
                    <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 text-primary">Privacy Policy</h1>
                    <p className="text-muted-foreground text-lg">Last updated: <time dateTime={LAST_UPDATED}>{new Date(LAST_UPDATED).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</time></p>
                    <p className="text-sm text-muted-foreground mt-2">Applies to all visitors and customers of cehpoint.co.in and our subdomains.</p>
                </div>

                <div className="space-y-6">

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Shield className="w-5 h-5 text-primary" />1. Who we are</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed space-y-3 text-sm">
                            <p>Cehpoint ("Cehpoint", "we", "our", "us") is an Indian IT, AI, and cybersecurity services firm founded in {COMPANY.foundingYear}. Our registered office is at {HQ_ADDRESS.display}.</p>
                            <p>For this policy, Cehpoint is the <strong>Data Fiduciary</strong> under India's Digital Personal Data Protection Act, 2023 ("DPDP Act") and the <strong>Data Controller</strong> under the EU General Data Protection Regulation ("GDPR"). When we process data on behalf of an enterprise client (for example, while delivering a software project), we act as a <strong>Data Processor</strong> on that client's instructions and the terms of our master services agreement govern.</p>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Eye className="w-5 h-5 text-primary" />2. Data we collect</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed space-y-3 text-sm">
                            <p><strong>You give us directly</strong> — name, email, phone, company, role, country, project description, budget range, attachments — when you fill our quotation, contact, careers, partner, or tender forms.</p>
                            <p><strong>Collected automatically</strong> — IP address, device and browser fingerprint, referring URL, language preference, theme preference, anonymised analytics events. We do not use third-party advertising cookies.</p>
                            <p><strong>From third parties</strong> — when you sign in via an OAuth provider on one of our portals (e.g. Projects Portal, Outreach), we receive the profile fields you authorise that provider to share.</p>
                            <p><strong>Sensitive personal data</strong> — we do not collect government-issued IDs, biometrics, financial account numbers, or health data through the marketing site. If a project requires such data, it is collected only inside the dedicated client portal with a signed Data Processing Addendum.</p>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Lock className="w-5 h-5 text-primary" />3. Why we process it (lawful basis)</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed space-y-2 text-sm">
                            <ul className="list-disc list-outside ml-5 space-y-2">
                                <li><strong>Performance of a contract</strong> — to respond to your inquiry, prepare a proposal, deliver the project you engaged us for, and invoice you.</li>
                                <li><strong>Legitimate interest</strong> — to keep the website secure, prevent fraud, run aggregate analytics that don't identify you, and improve our services.</li>
                                <li><strong>Consent</strong> — for any marketing communications you opt into; you can withdraw consent at any time without affecting prior lawful processing.</li>
                                <li><strong>Legal obligation</strong> — to comply with Indian tax, GST, statutory audit, and lawful information requests from competent authorities.</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Server className="w-5 h-5 text-primary" />4. Sharing &amp; processors</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed space-y-2 text-sm">
                            <p>We share personal data only with vetted processors who help us run the business. Each is bound by data processing agreements and processes data only on our instructions:</p>
                            <ul className="list-disc list-outside ml-5 space-y-1.5">
                                <li><strong>Hosting &amp; CDN</strong> — Vercel Inc. (USA), AWS, and Cloudflare for content delivery.</li>
                                <li><strong>Email &amp; transactional messaging</strong> — Google Workspace, WhatsApp Business.</li>
                                <li><strong>Analytics</strong> — first-party aggregated event analytics, no cross-site profiling.</li>
                                <li><strong>Payments</strong> — Razorpay, Stripe (for invoicing only).</li>
                                <li><strong>Helpdesk &amp; CRM</strong> — internally hosted; access restricted by role.</li>
                            </ul>
                            <p>We do not sell personal data. We do not share it for cross-context behavioural advertising. We do not perform automated decision-making with legal effect on you.</p>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Globe2 className="w-5 h-5 text-primary" />5. International transfers</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed text-sm">
                            <p>Our primary data is stored in India. When data must move across borders (e.g. to a US-region CDN edge), we rely on the Standard Contractual Clauses (EU) and, where the DPDP Act notifies a country list, we transfer only to jurisdictions that the Indian government has not restricted.</p>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><ClipboardList className="w-5 h-5 text-primary" />6. Retention</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed text-sm">
                            <p>We keep inquiry data for up to <strong>24 months</strong> after the last interaction, after which it is securely deleted unless a longer period is required for tax, statutory audit, or active litigation. Active client project data is retained for the duration of the engagement plus the period defined in the master services agreement (typically 7 years for invoicing records, per Indian law).</p>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><UserCog className="w-5 h-5 text-primary" />7. Your rights as a Data Principal</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed space-y-2 text-sm">
                            <p>Under the DPDP Act 2023 and GDPR you can:</p>
                            <ul className="list-disc list-outside ml-5 space-y-1.5">
                                <li><strong>Access</strong> the personal data we hold about you.</li>
                                <li><strong>Correct or update</strong> inaccurate or incomplete data.</li>
                                <li><strong>Erase</strong> data we no longer need to retain by law.</li>
                                <li><strong>Withdraw consent</strong> for any processing based on consent.</li>
                                <li><strong>Nominate</strong> another individual to exercise these rights in the event of your death or incapacity.</li>
                                <li><strong>Lodge a grievance</strong> with our Grievance Officer (Section 9 below).</li>
                            </ul>
                            <p>We respond within <strong>30 days</strong> of receiving a verifiable request.</p>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Trash2 className="w-5 h-5 text-primary" />8. Cookies &amp; local storage</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed text-sm">
                            <p>We use a small number of <em>first-party</em> cookies and localStorage entries strictly to remember your preferences — language, theme (light/dark), and a session-level flag so our chat assistant doesn't reopen on every page. We do not use third-party tracking cookies, marketing pixels, or session replay tools on this site.</p>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Mail className="w-5 h-5 text-primary" />9. Grievance Officer</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed text-sm">
                            <p>In accordance with the DPDP Act 2023 and the Information Technology Act 2000:</p>
                            <div className="rounded-lg bg-background border border-border p-4 mt-3 not-italic">
                                <p><strong>Grievance Officer</strong></p>
                                <p>Office of the DPO, Cehpoint</p>
                                <p>{HQ_ADDRESS.display}</p>
                                <p className="mt-2">Email: <a href={`mailto:${EMAILS.escalation}`} className="text-primary hover:underline">{EMAILS.escalation}</a></p>
                                <p>Response time: within <strong>30 days</strong> of a verifiable request.</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-primary" />10. Security &amp; breach notification</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed text-sm">
                            <p>We apply industry-standard controls — TLS 1.2+ in transit, AES-256 at rest, role-based access, principle of least privilege, signed audit logs, third-party penetration tests. In the event of a personal data breach, affected Data Principals and the Data Protection Board of India will be notified without undue delay and in any event within the statutory timelines.</p>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><RefreshCw className="w-5 h-5 text-primary" />11. Changes to this policy</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed text-sm">
                            <p>We review this policy at least annually and whenever the law materially changes. The "Last updated" date at the top reflects the latest revision. Material changes will be highlighted in the footer for 30 days.</p>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><FileText className="w-5 h-5 text-primary" />12. Contact</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed text-sm">
                            <p>Anything unclear? Email <a href={`mailto:${EMAILS.primary}`} className="text-primary hover:underline">{EMAILS.primary}</a> with subject "Privacy" and we'll route it to the right person.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
