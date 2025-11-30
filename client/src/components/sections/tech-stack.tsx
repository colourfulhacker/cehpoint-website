import { Code2, Database, Smartphone, Globe, Layers, Zap } from "lucide-react";

export default function TechStack() {
    const technologies = [
        {
            name: "React.js",
            icon: Code2,
            category: "Frontend",
            description: "Building dynamic, high-performance user interfaces with component-based architecture.",
            useCase: "Single Page Applications (SPAs), Interactive Dashboards"
        },
        {
            name: "Next.js",
            icon: Globe,
            category: "Full Stack",
            description: "Production-ready React framework for server-side rendering and static site generation.",
            useCase: "SEO-optimized Websites, Enterprise Web Apps"
        },
        {
            name: "Kotlin",
            icon: Smartphone,
            category: "Mobile",
            description: "Modern, concise, and safe programming language for Android development.",
            useCase: "Native Android Apps, High-performance Mobile Solutions"
        },
        {
            name: "Flutter",
            icon: Layers,
            category: "Cross-Platform",
            description: "Google's UI toolkit for building natively compiled applications from a single codebase.",
            useCase: "Cross-platform Mobile Apps (iOS & Android), MVP Development"
        },
        {
            name: "Supabase",
            icon: Database,
            category: "Backend",
            description: "Open source Firebase alternative. Instant APIs, real-time subscriptions, and authentication.",
            useCase: "Real-time Apps, Rapid Backend Prototyping"
        },
        {
            name: "Firebase",
            icon: Zap,
            category: "Backend",
            description: "Comprehensive app development platform from Google for building and growing apps.",
            useCase: "Real-time Databases, Auth, Cloud Functions"
        }
    ];

    return (
        <section className="py-24 bg-background" data-testid="tech-stack-section">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-up">
                    <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6">
                        <span className="text-sm font-medium text-primary">🛠️ Our Technology Arsenal</span>
                    </div>
                    <h2 className="font-display font-bold text-4xl md:text-6xl mb-6 tracking-tight">
                        Powered by <span className="text-gradient">Modern Tech</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        We leverage the latest frameworks and tools to build scalable, secure, and high-performance solutions.
                        <span className="block mt-4 text-primary font-medium">
                            Specializing in Rapid MVP Development for Startups 🚀
                        </span>
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {technologies.map((tech) => (
                        <div
                            key={tech.name}
                            className="glass p-8 rounded-3xl hover-lift group border border-white/10"
                            data-testid={`tech-card-${tech.name.toLowerCase()}`}
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <tech.icon className="w-7 h-7 text-primary" />
                                </div>
                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-muted-foreground border border-white/5">
                                    {tech.category}
                                </span>
                            </div>

                            <h3 className="font-display font-bold text-2xl mb-3 group-hover:text-primary transition-colors">
                                {tech.name}
                            </h3>

                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                {tech.description}
                            </p>

                            <div className="pt-6 border-t border-white/5">
                                <p className="text-sm font-medium text-accent mb-1">Best Use Case:</p>
                                <p className="text-sm text-muted-foreground">{tech.useCase}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="glass-intense p-8 rounded-3xl text-center max-w-4xl mx-auto">
                    <h3 className="font-display font-bold text-2xl mb-4">Startup Accelerator Program</h3>
                    <p className="text-muted-foreground mb-6">
                        We help founders go from <span className="text-primary font-bold">Idea to MVP in weeks</span>, not months.
                        Our agile process and modern tech stack ensure you launch quickly and scale effortlessly.
                    </p>
                </div>
            </div>
        </section>
    );
}
