import { Shield, Server, Activity, CheckCircle, ArrowRight, Building2, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function SecurityScheme() {
    const features = [
        {
            icon: Activity,
            title: "Real-time Monitoring",
            description: "24/7 surveillance of your digital infrastructure using Wazuh's advanced detection capabilities."
        },
        {
            icon: Shield,
            title: "Threat Detection",
            description: "Automated identification of potential security threats, malware, and suspicious activities."
        },
        {
            icon: Server,
            title: "Centralized SOC",
            description: "All signals are fed into our centralized Security Operations Center for expert analysis."
        },
        {
            icon: Lock,
            title: "Compliance Ready",
            description: "Helps meeting regulatory requirements like GDPR, HIPAA, and PCI DSS through log retention."
        }
    ];

    const steps = [
        {
            number: "01",
            title: "Registration",
            description: "Submit your SME details to check eligibility for the free scheme."
        },
        {
            number: "02",
            title: "Agent Deployment",
            description: "Install the lightweight Wazuh agent on your endpoints (Servers, PCs, Cloud instances)."
        },
        {
            number: "03",
            title: "Connection",
            description: "Agents securely connect to CEHPOINT's Centralized Master Wazuh Server."
        },
        {
            number: "04",
            title: "Active Protection",
            description: "Our SOC team begins monitoring and alerting you on critical threats."
        }
    ];

    return (
        <div className="pt-24 min-h-screen">
            {/* Hero Section */}
            <section className="py-24 bg-gradient-to-br from-background via-secondary to-background relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl rounded-l-full pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 animate-fade-in">
                            <Shield className="w-4 h-4" />
                            <span className="text-sm font-semibold">SME Protection Initiative</span>
                        </div>
                        <h1 className="font-display font-bold text-5xl md:text-7xl mb-6 tracking-tight animate-fade-up">
                            Free Cyber Security <span className="text-gradient">Services Scheme</span>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-up delay-100">
                            Empowering Small and Medium Enterprises with enterprise-grade protection.
                            Secure your business with our open-source SOC solution powered by <span className="font-bold text-primary">Wazuh</span>.
                        </p>
                        <div className="flex flex-wrap gap-4 animate-fade-up delay-200">
                            <Link href="/contact">
                                <Button className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold shadow-lg shadow-primary/25">
                                    Check Eligibility
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </Link>
                            <Link href="#how-it-works">
                                <Button variant="outline" className="px-8 py-4 rounded-xl text-lg hover:bg-secondary/50">
                                    How it Works
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Powered By Wazuh */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="glass rounded-3xl p-8 md:p-12 border-primary/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">
                                    Powered by <span className="text-gradient">Wazuh</span>
                                </h2>
                                <p className="text-lg text-muted-foreground mb-6">
                                    We utilize Wazuh, the world's most widely used open-source security platform, to provide you with unified XDR and SIEM protection.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-primary" />
                                        <span>Open Source & Transparent</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-primary" />
                                        <span>Lightweight Agent Architecture</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-primary" />
                                        <span>Real-time Threat Intelligence</span>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {features.map((feature, index) => (
                                    <div key={index} className="bg-background/50 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-primary/30 transition-colors">
                                        <feature.icon className="w-8 h-8 text-primary mb-4" />
                                        <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="py-24 bg-secondary/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
                            Deployment <span className="text-gradient">Architecture</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Simple setup, powerful protection. Convert your infrastructure into a monitored fortress in minutes.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="relative group">
                                <div className="glass h-full p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
                                    <div className="text-6xl font-bold text-primary/10 mb-6 absolute top-4 right-4 group-hover:text-primary/20 transition-colors">
                                        {step.number}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 relative z-10">{step.title}</h3>
                                    <p className="text-muted-foreground relative z-10">
                                        {step.description}
                                    </p>
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-primary/30 z-0" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Eligibility */}
            <section className="py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-8">
                        <Building2 className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
                        Who Can <span className="text-gradient">Apply?</span>
                    </h2>
                    <p className="text-xl text-muted-foreground mb-12">
                        This scheme is exclusively designed to support the growth and security of Small and Medium Enterprises.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        <div className="bg-secondary/20 p-8 rounded-2xl border border-white/5">
                            <h3 className="font-bold text-xl mb-4 text-primary">Eligible Entities</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                                    <span>Registered SMEs / MSMEs</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                                    <span>Startups with valid registration</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                                    <span>Educational Institutions (Case basis)</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-secondary/20 p-8 rounded-2xl border border-white/5">
                            <h3 className="font-bold text-xl mb-4 text-primary">Technical Requirements</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5" />
                                    <span>Internet connectivity for Agent logs</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5" />
                                    <span>Admin access to install Wazuh Agents</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5" />
                                    <span>Commitment to security monitoring</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-12">
                        <Link href="/contact">
                            <Button className="btn-primary px-12 py-6 rounded-xl text-xl font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
                                Apply for Free Protection Now
                            </Button>
                        </Link>
                        <p className="mt-4 text-sm text-muted-foreground">
                            *Limited slots available per quarter. Subject to verification.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
