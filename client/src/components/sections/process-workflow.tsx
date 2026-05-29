import { PenTool, Code, Settings, CheckCircle2, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ProcessWorkflow() {
    const { t } = useTranslation();
    const icons = [PenTool, Code, Settings];
    const stepCopy = t("pages.sections.processSteps", { returnObjects: true }) as { title: string; description: string; details: string[] }[];
    const steps = (Array.isArray(stepCopy) ? stepCopy : []).map((s, i) => ({
        id: `0${i + 1}`,
        title: s.title,
        icon: icons[i] ?? PenTool,
        description: s.description,
        details: s.details,
    }));

    return (
        <section className="py-24 bg-secondary/30" data-testid="process-section">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20 animate-fade-up">
                    <h2 className="font-display font-bold text-4xl md:text-6xl mb-6 tracking-tight text-foreground">
                        {t("pages.sections.processTitle")}
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        {t("pages.sections.processSub")}
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <div
                                key={step.id}
                                className="glass-intense p-8 rounded-3xl hover-lift group relative"
                                data-testid={`process-step-${step.id}`}
                            >
                                <div className="absolute -top-6 left-8 bg-background border border-primary/20 text-primary font-bold text-xl py-2 px-4 rounded-xl shadow-lg">
                                    {step.id}
                                </div>

                                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                                    <step.icon className="w-8 h-8 text-foreground" />
                                </div>

                                <h3 className="font-display font-bold text-2xl mb-4">{step.title}</h3>
                                <p className="text-muted-foreground mb-8 leading-relaxed min-h-[80px]">
                                    {step.description}
                                </p>

                                <ul className="space-y-3">
                                    {step.details.map((detail) => (
                                        <li key={detail} className="flex items-center text-sm text-muted-foreground">
                                            <CheckCircle2 className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>

                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 text-primary/30 transform translate-x-1/2">
                                        <ArrowRight className="w-8 h-8" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
