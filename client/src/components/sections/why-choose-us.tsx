import { Code, Cpu, Globe, ShieldCheck, Users, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function WhyChooseUs() {
    const { t } = useTranslation();
    const icons = [Cpu, ShieldCheck, Code, Globe, Users, TrendingUp];
    const copy = t("pages.sections.whyChooseReasons", { returnObjects: true }) as { title: string; description: string }[];
    const reasons = (Array.isArray(copy) ? copy : []).map((r, i) => ({
        icon: icons[i] ?? Cpu,
        title: r.title,
        description: r.description,
    }));

    return (
        <section className="py-24 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-display font-bold text-4xl md:text-6xl mb-6 text-foreground">
                        {t("pages.sections.whyChooseTitle")}
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        {t("pages.sections.whyChooseSub")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => {
                        const Icon = reason.icon;
                        return (
                            <div key={index} className="glass rounded-3xl p-8 hover-lift transition-all duration-300 border border-foreground/10 hover:border-primary/30">
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                    <Icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="font-bold text-xl mb-3 text-foreground">{reason.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {reason.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
