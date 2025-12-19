import SEO from "@/components/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gavel, AlertCircle, RefreshCw, HelpCircle } from "lucide-react";

export default function Terms() {
    return (
        <div className="pt-[105px] min-h-screen bg-background">
            <SEO
                title="Terms of Use"
                description="Cehpoint's Terms of Use governing the access and use of our website and services."
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 text-gradient">Terms of Use</h1>
                    <p className="text-muted-foreground text-lg">Last Updated: December 2025</p>
                </div>

                <div className="space-y-8">
                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Gavel className="w-5 h-5 text-primary" />
                                1. Agreement to Terms
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed">
                            <p>
                                These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Cehpoint ("we," "us" or "our"), concerning your access to and use of the cehpoint.co.in website.
                            </p>
                            <p className="mt-4">
                                You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms of Use. If you do not agree with all of these terms of use, then you are expressly prohibited from using the site and you must discontinue use immediately.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <AlertCircle className="w-5 h-5 text-primary" />
                                2. Intellectual Property Rights
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed">
                            <p>
                                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <RefreshCw className="w-5 h-5 text-primary" />
                                3. Modifications and Interruptions
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed">
                            <p>
                                We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the Site without notice at any time.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="glass-intense border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <HelpCircle className="w-5 h-5 text-primary" />
                                4. Contact Us
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground leading-relaxed">
                            <p>
                                In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
                            </p>
                            <p className="mt-4 font-semibold text-foreground">
                                Cehpoint<br />
                                contact@cehpoint.co.in<br />
                                +91 33690 29331
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
