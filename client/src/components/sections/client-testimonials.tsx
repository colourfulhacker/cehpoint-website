import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

export default function ClientTestimonials() {
    const { t } = useTranslation();
    const clients = [
        { name: "Cedarguard", contact: "Mr. Anthony", initials: "CG" },
        { name: "Getgrants", contact: "Utkarsh ji", initials: "GG" },
        { name: "Blackleoventures", contact: "Mr. Nirjosh ji", initials: "BV" },
        { name: "Bidchemz", contact: "Biswajit Sir", initials: "BC" },
        { name: "KSD Technologies", contact: "Simran Paji", initials: "KT" },
        { name: "TrueHealthcare", contact: "Punam ji", initials: "TH" },
        { name: "Charukala Digital Lab", contact: "Somiran da", initials: "CD" },
        { name: "HS Laxmi Studio", contact: "Barun da", initials: "HL" },
        { name: "MS Photography", contact: "Silajeet da", initials: "MP" },
        { name: "15+ NDA Brands", contact: "Enterprise Partners", initials: "EP" }
    ];

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(112,66,248,0.05),transparent_70%)]" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">{t("pages.sections.testimonialsTitle")}</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {t("pages.sections.testimonialsEyebrow")}
                    </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                            <Card className="glass-card h-full">
                                <CardContent className="p-6 flex flex-col items-center justify-center text-center space-y-4 h-full">
                                    <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center font-display font-bold text-xl">
                                        {client.initials}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-foreground mb-1">{client.name}</div>
                                        <div className="text-xs text-muted-foreground">{client.contact}</div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
                
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center space-x-2 bg-secondary/30 rounded-full px-6 py-3">
                        <div className="flex text-yellow-500">
                            {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
                        </div>
                        <span className="text-sm font-medium">Consistently rated 4.9/5 by our clients worldwide</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
