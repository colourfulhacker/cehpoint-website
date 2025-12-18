import { useRef, useEffect } from "react";
import { Link } from "wouter";
import {
    Shield,
    Lock,
    Server,
    Eye,
    FileCheck,
    AlertTriangle,
    CheckCircle,
    ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import CyberSecurityCalculator from "@/components/calculators/cyber-security-calculator";
import SEO from "@/components/seo";
import { MessageCircle } from "lucide-react";

export default function CyberSecurity() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    const services = [
        {
            icon: <Shield className="w-12 h-12 text-blue-400" />,
            title: "VAPT Services",
            description: "Vulnerability Assessment & Penetration Testing to identify and fix security loopholes before hackers exploit them.",
            features: ["Web Application Testing", "Mobile App Security", "Network Penetration", "Cloud Security Audit"]
        },
        {
            icon: <Eye className="w-12 h-12 text-emerald-400" />,
            title: "SOC as a Service",
            description: "24/7 Security Operations Center monitoring to detect, analyze, and respond to cyber threats in real-time.",
            features: ["Real-time Monitoring", "Threat Intelligence", "Incident Response", "Log Management"]
        },
        {
            icon: <FileCheck className="w-12 h-12 text-purple-400" />,
            title: "Compliance & Audit",
            description: "Ensure your business meets international security standards and regulatory requirements.",
            features: ["ISO 27001", "GDPR", "HIPAA", "PCI DSS"]
        },
        {
            icon: <Lock className="w-12 h-12 text-rose-400" />,
            title: "Data Protection",
            description: "Comprehensive data security solutions to protect your sensitive business and customer information.",
            features: ["Encryption Solutions", "DLP Implementation", "Access Control", "Data Privacy"]
        },
        {
            icon: <Server className="w-12 h-12 text-amber-400" />,
            title: "Cloud Security",
            description: "Secure your cloud infrastructure across AWS, Azure, and Google Cloud platforms.",
            features: ["Cloud Config Review", "Container Security", "Serverless Security", "Identity Management"]
        },
        {
            icon: <AlertTriangle className="w-12 h-12 text-cyan-400" />,
            title: "Forensics & Recovery",
            description: "Post-incident analysis and disaster recovery planning to minimize downtime and data loss.",
            features: ["Digital Forensics", "Malware Analysis", "Ransomware Recovery", "Business Continuity"]
        }
    ];

    return (
        <div ref={containerRef} className="min-h-screen bg-background relative overflow-hidden">
            <SEO
                title="Cyber Security Services | Cehpoint"
                description="Elite cyber security solutions including VAPT, SOC, Compliance, and Cloud Security. Protect your digital assets with Cehpoint."
                keywords={["cyber security", "VAPT", "SOC", "penetration testing", "compliance", "data protection"]}
            />

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-8 border border-blue-500/30">
                            <Shield className="w-5 h-5 text-blue-400 mr-2" />
                            <span className="text-blue-400 font-medium tracking-wide upercase">Elite Cyber Defense</span>
                        </div>

                        <h1 className="font-display font-bold text-5xl md:text-7xl mb-6 leading-tight">
                            Secure Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400">Digital Frontline</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
                            Comprehensive security solutions engineered to protect your business against evolving cyber threats. From VAPT to 24/7 SOC monitoring.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://wa.me/919091156095?text=Hi%2C%20I%20am%20interested%20in%20a%20Security%20Audit%20for%20my%20business."
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button className="btn-primary h-14 px-8 text-lg rounded-full">
                                    Get Security Audit
                                    <MessageCircle className="ml-2 w-5 h-5" />
                                </Button>
                            </a>
                            <Button variant="outline" className="h-14 px-8 text-lg rounded-full glass hover:bg-white/10" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                                Explore Services
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="py-20 relative border-y border-white/5 bg-white/5 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { label: "Threats Blocked", value: "10M+" },
                            { label: "Uptime Guaranteed", value: "99.9%" },
                            { label: "Security Experts", value: "50+" },
                            { label: "Clients Secured", value: "200+" }
                        ].map((stat, index) => (
                            <div key={index} className="space-y-2">
                                <div className="text-4xl md:text-5xl font-bold text-gradient">{stat.value}</div>
                                <div className="text-muted-foreground font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section id="services" className="py-24 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-display font-bold text-4xl mb-4">Our <span className="text-blue-400">Security Arsenal</span></h2>
                        <p className="text-xl text-muted-foreground">End-to-end protection for your enterprise infrastructure</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="glass p-8 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 relative group overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    <div className="mb-6 p-4 rounded-xl bg-white/5 inline-block group-hover:bg-white/10 transition-colors">
                                        {service.icon}
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                                    <p className="text-muted-foreground mb-6 line-clamp-3">{service.description}</p>

                                    <ul className="space-y-3">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-sm text-gray-300">
                                                <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 relative bg-secondary/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="font-display font-bold text-4xl mb-6">Why Trust Cehpoint?</h2>
                            <div className="space-y-8">
                                {[
                                    {
                                        title: "Certified Experts",
                                        description: "Our team holds industry-leading certifications (CISSP, CISA, CEH, OSCP) ensuring top-tier expertise."
                                    },
                                    {
                                        title: "Advanced Technology",
                                        description: "We utilize state-of-the-art AI-driven tools for threat detection and behavior analysis."
                                    },
                                    {
                                        title: "Customized Approach",
                                        description: "Tailored security strategies that align with your specific business goals and risk profile."
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="flex gap-4">
                                        <div className="mt-1">
                                            <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">
                                                {index + 1}
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                            <p className="text-muted-foreground">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl opacity-20" />
                            <img
                                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop"
                                alt="Cyber Security Operations"
                                className="rounded-2xl border border-white/10 shadow-2xl relative z-10"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Cost Estimator Integration */}
            <div className="bg-background">
                <CyberSecurityCalculator />
            </div>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20" />
                <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Fortify Your Business?</h2>
                    <p className="text-xl text-muted-foreground mb-8">
                        Don't wait for a breach to happen. Secure your digital assets with our comprehensive cyber security solutions today.
                    </p>
                    <a
                        href="https://wa.me/919091156095?text=Hi%2C%20I%20implore%20you%20to%20secure%20my%20business.%20I%20need%20a%20security%20quote."
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button size="lg" className="btn-primary text-lg px-8 py-6 rounded-full flex items-center gap-2 mx-auto">
                            <MessageCircle className="w-5 h-5" />
                            Get Your Security Quote via WhatsApp
                        </Button>
                    </a>
                </div>
            </section>
        </div>
    );
}
