import { Code, Cpu, Globe, ShieldCheck, Users, TrendingUp } from "lucide-react";

export default function WhyChooseUs() {
    const reasons = [
        {
            icon: Cpu,
            title: "Rapid Delivery",
            description: "From concept to prototype in 24 hours. We value your time and business speed."
        },
        {
            icon: ShieldCheck,
            title: "Enterprise Security",
            description: "Security is not an afterthought. We implement bank-grade security protocols from day one."
        },
        {
            icon: Code,
            title: "Clean Architecture",
            description: "We build scalable, maintainable systems with modern engineering practices and thorough documentation."
        },
        {
            icon: Globe,
            title: "Global Standards",
            description: "World-class development practices ensuring your product is ready for the global market."
        },
        {
            icon: Users,
            title: "Expert Team",
            description: "A curated team of senior developers, security experts, and creative designers."
        },
        {
            icon: TrendingUp,
            title: "Measurable Results",
            description: "We focus on delivering measurable outcomes - faster load times, higher conversion, lower operational costs."
        }
    ];

    return (
        <section className="py-24 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-display font-bold text-4xl md:text-6xl mb-6 text-white">
                        Why Work With Us
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Technical excellence meets business outcomes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => {
                        const Icon = reason.icon;
                        return (
                            <div key={index} className="glass rounded-3xl p-8 hover-lift transition-all duration-300 border border-white/10 hover:border-primary/30">
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                    <Icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="font-bold text-xl mb-3 text-white">{reason.title}</h3>
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
