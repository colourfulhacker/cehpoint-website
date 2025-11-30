import { PenTool, Code, Settings, CheckCircle2, ArrowRight } from "lucide-react";

export default function ProcessWorkflow() {
    const steps = [
        {
            id: "01",
            title: "UX/UI Design",
            icon: PenTool,
            description: "We start by crafting intuitive and engaging user experiences. Our design phase focuses on user research, wireframing, and creating high-fidelity prototypes.",
            details: ["User Research", "Wireframing", "Prototyping", "Design System"]
        },
        {
            id: "02",
            title: "Development",
            icon: Code,
            description: "Our expert developers bring designs to life using cutting-edge technologies. We ensure clean code, scalability, and robust performance.",
            details: ["Frontend Dev", "Backend Logic", "API Integration", "Database Setup"]
        },
        {
            id: "03",
            title: "Maintenance",
            icon: Settings,
            description: "We provide ongoing support and maintenance to ensure your application runs smoothly, stays secure, and evolves with your business.",
            details: ["Security Updates", "Performance Tuning", "Bug Fixes", "Feature Enhancements"]
        }
    ];

    return (
        <section className="py-24 bg-secondary/30" data-testid="process-section">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20 animate-fade-up">
                    <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6">
                        <span className="text-sm font-medium text-accent">🔄 How We Work</span>
                    </div>
                    <h2 className="font-display font-bold text-4xl md:text-6xl mb-6 tracking-tight">
                        Our Development <span className="text-gradient">Process</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        A streamlined workflow designed to deliver excellence from concept to launch and beyond.
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
