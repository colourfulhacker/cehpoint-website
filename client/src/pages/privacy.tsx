import SEO from "@/components/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, FileText } from "lucide-react";

export default function Privacy() {
    return (
        <div className="pt-[105px] min-h-screen bg-background">
            <SEO
                title="Privacy Policy"
                description="Cehpoint's Privacy Policy outlining how we collect, use, and protect your data in compliance with GDPR and DPDP Act."
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 text-gradient">Privacy Policy</h1>
                    <p className="text-muted-foreground text-lg">Last Updated: December 2025</p>
                </div>

                <div className="space-y-8">
                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Shield className="w-5 h-5 text-primary" />
                                1. Introduction
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed">
                            <p>
                                Cehpoint ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                            </p>
                            <p className="mt-4">
                                We adhere to international data protection standards, including the General Data Protection Regulation (GDPR) and the Digital Personal Data Protection Act, 2023 (India).
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Eye className="w-5 h-5 text-primary" />
                                2. Information We Collect
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed space-y-4">
                            <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
                            <ul className="list-disc list-inside pl-4 space-y-2">
                                <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.</li>
                                <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Lock className="w-5 h-5 text-primary" />
                                3. Use of Your Information
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed">
                            <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
                            <ul className="list-disc list-inside pl-4 mt-4 space-y-2">
                                <li>Create and manage your account.</li>
                                <li>Process your transactions and prevent fraud.</li>
                                <li>Email you regarding your account or order.</li>
                                <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <FileText className="w-5 h-5 text-primary" />
                                4. Disclosure of Your Information
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed">
                            <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
                            <ul className="list-disc list-inside pl-4 mt-4 space-y-2">
                                <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.</li>
                                <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
