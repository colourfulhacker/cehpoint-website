import { Shield, Lock, Globe, CheckCircle, MessageCircle, Building2, Server, HeartHandshake, User, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SecurityScheme() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: ""
    });

    const handleWhatsAppRedirect = (e: React.FormEvent) => {
        e.preventDefault();

        const message = `*New Security Scheme Application*
        
Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone}

I am interested in the Free Cyber Security Services Scheme. Please guide me through the registration process.`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappLink = `https://wa.me/913369029331?text=${encodedMessage}`;

        window.open(whatsappLink, '_blank');
        setIsDialogOpen(false);
    };

    const benefits = [
        {
            icon: Shield,
            title: "Enterprise Protection",
            description: "Access the same level of security used by large corporations, completely free of charge. We believe security is a right."
        },
        {
            icon: HeartHandshake,
            title: "A CSR Initiative",
            description: "This is our way of giving back. CEHPOINT contributes to a safer digital India by empowering businesses."
        },
        {
            icon: Globe,
            title: "Global Compliance",
            description: "Stay ahead of regulations. Our Wazuh-powered solution helps you meet GDPR, HIPAA, and PCI DSS requirements."
        },
        {
            icon: Lock,
            title: "Zero-Cost Security",
            description: "No hidden fees, no trial periods. Just robust, open-source security monitoring to keep your business safe."
        }
    ];

    const steps = [
        {
            number: "01",
            title: "Connect",
            description: "Click the apply button and share your basic details with us."
        },
        {
            number: "02",
            title: "Verify",
            description: "We verifies your business eligibility for the scheme."
        },
        {
            number: "03",
            title: "Deploy",
            description: "Install the lightweight Wazuh agent on your endpoints."
        },
        {
            number: "04",
            title: "Protect",
            description: "24/7 Monitoring by our Security Operations Center starts."
        }
    ];

    return (
        <div className="pt-16 md:pt-24 min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative py-12 md:py-24 lg:py-32 overflow-hidden px-4 md:px-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div className="space-y-6 md:space-y-8 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full glass border border-primary/20 text-primary animate-fade-in mx-auto lg:mx-0">
                                <Shield className="w-3 h-3 md:w-4 md:h-4" />
                                <span className="text-xs md:text-sm font-semibold tracking-wide">CEHPOINT CSR INITIATIVE</span>
                            </div>

                            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-7xl leading-tight animate-fade-up">
                                Cyber Security is a <span className="text-gradient">Right</span>, Not a Privilege.
                            </h1>

                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-up delay-100 max-w-xl mx-auto lg:mx-0">
                                We are on a mission to secure the digital ecosystem. Get enterprise-grade monitoring and threat detection for your business—absolutely free.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-200 justify-center lg:justify-start">
                                <Button
                                    onClick={() => setIsDialogOpen(true)}
                                    className="w-full sm:w-auto btn-primary px-8 py-6 rounded-xl text-xl font-bold shadow-xl shadow-primary/25 hover:scale-105 transition-transform group"
                                >
                                    <MessageCircle className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                                    Apply via WhatsApp
                                </Button>
                                <Link href="#mission">
                                    <Button variant="outline" className="w-full sm:w-auto px-8 py-6 rounded-xl text-lg border-primary/20 hover:bg-secondary/50">
                                        Why We Do This
                                    </Button>
                                </Link>
                            </div>
                            <p className="text-sm text-muted-foreground flex items-center justify-center lg:justify-start gap-2 animate-fade-up delay-300">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span>Takes less than 2 minutes to apply</span>
                            </p>
                        </div>

                        <div className="relative animate-fade-in delay-200 h-auto flex items-center justify-center mt-8 lg:mt-0 w-full">
                            <div className="relative w-full max-w-lg mx-auto">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/20 rounded-full blur-[60px] md:blur-[100px]" />
                                <div className="glass-intense p-4 md:p-6 rounded-3xl border border-white/10 shadow-2xl relative z-10 backdrop-blur-xl w-full overflow-hidden">
                                    {/* Dashboard Header */}
                                    <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                                <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-sm md:text-base tracking-wide uppercase text-muted-foreground">Wazuh Dashboard</h3>
                                                <p className="text-xs font-mono text-green-400">● System Operational</p>
                                            </div>
                                        </div>
                                        <div className="text-right hidden sm:block">
                                            <p className="text-xs text-muted-foreground">Uptime</p>
                                            <p className="font-mono text-sm font-bold">99.98%</p>
                                        </div>
                                    </div>

                                    {/* Key Metrics */}
                                    <div className="grid grid-cols-3 gap-2 md:gap-4 mb-6">
                                        <div className="bg-background/40 p-3 rounded-xl border border-white/5">
                                            <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Total Events</p>
                                            <p className="text-lg md:text-xl font-bold font-mono">24,592</p>
                                        </div>
                                        <div className="bg-background/40 p-3 rounded-xl border border-white/5">
                                            <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Active Agents</p>
                                            <p className="text-lg md:text-xl font-bold font-mono text-blue-400">12/12</p>
                                        </div>
                                        <div className="bg-background/40 p-3 rounded-xl border border-white/5">
                                            <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Threat Level</p>
                                            <p className="text-lg md:text-xl font-bold font-mono text-green-500">Low</p>
                                        </div>
                                    </div>

                                    {/* Activity Graph Mockup */}
                                    <div className="mb-6 bg-background/30 rounded-xl p-4 border border-white/5">
                                        <div className="flex justify-between items-center mb-4">
                                            <p className="text-xs font-semibold text-muted-foreground">Security Events (Last 24h)</p>
                                            <div className="flex gap-1">
                                                <span className="w-2 h-2 rounded-full bg-red-500/50"></span>
                                                <span className="w-2 h-2 rounded-full bg-yellow-500/50"></span>
                                                <span className="w-2 h-2 rounded-full bg-blue-500/50"></span>
                                            </div>
                                        </div>
                                        <div className="flex items-end justify-between h-24 gap-1 md:gap-2">
                                            {[35, 60, 45, 70, 50, 80, 40, 65, 55, 75, 45, 60, 50, 70, 40].map((h, i) => (
                                                <div
                                                    key={i}
                                                    className="w-full bg-primary/20 rounded-t-sm relative group overflow-hidden"
                                                    style={{ height: `${h}%` }}
                                                >
                                                    <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-primary/40 to-transparent group-hover:from-primary/60 transition-all duration-300" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Recent Logs */}
                                    <div className="space-y-2">
                                        <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">Live Security Logs</p>
                                        {[
                                            { time: "10:42:05", level: "INFO", msg: "Agent connection established (ID: 004)", color: "text-blue-400" },
                                            { time: "10:41:58", level: "WARN", msg: "Failed SSH login attempt detected", color: "text-yellow-400" },
                                            { time: "10:41:12", level: "INFO", msg: "System integrity check passed", color: "text-green-400" },
                                        ].map((log, i) => (
                                            <div key={i} className="flex items-center gap-3 text-xs font-mono p-2 rounded-lg hover:bg-white/5 transition-colors border-b border-white/5 last:border-0">
                                                <span className="text-muted-foreground opacity-50">{log.time}</span>
                                                <span className={`font-bold ${log.color}`}>{log.level}</span>
                                                <span className="truncate">{log.msg}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-4 pt-4 border-t border-white/10 text-center flex justify-between items-center">
                                        <p className="text-[10px] text-muted-foreground">Version 4.7.2</p>
                                        <p className="text-[10px] text-muted-foreground">Powered by <span className="text-primary font-bold">Wazuh</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission / Benefits Section */}
            <section id="mission" className="py-16 md:py-24 bg-secondary/30 relative px-4 md:px-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
                        <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6">
                            Security with a <span className="text-gradient">Purpose</span>
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground">
                            We recognize that 60% of small businesses close within 6 months of a cyber attack.
                            Our goal is to change that statistic by removing the cost barrier to professional security.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="group p-6 md:p-8 rounded-3xl bg-background/50 border border-white/5 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1">
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                                    <benefit.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{benefit.title}</h3>
                                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Streamlined Process */}
            <section className="py-16 md:py-24 px-4 md:px-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="glass rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 relative overflow-hidden text-center">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />

                        <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-12 md:mb-16 relative z-10">
                            Get Secured in <span className="text-gradient">4 Simple Steps</span>
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10">
                            {steps.map((step, index) => (
                                <div key={index} className="relative">
                                    <div className="text-6xl md:text-7xl font-bold text-primary/5 absolute -top-8 left-1/2 -translate-x-1/2 select-none">
                                        {step.number}
                                    </div>
                                    <div className="relative pt-6 md:pt-8">
                                        <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{step.title}</h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 md:mt-16 relative z-10">
                            <Button
                                onClick={() => setIsDialogOpen(true)}
                                className="w-full sm:w-auto btn-primary px-8 md:px-12 py-6 md:py-8 rounded-2xl text-xl md:text-2xl font-bold shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
                            >
                                <MessageCircle className="w-6 h-6 md:w-8 md:h-8 mr-3 md:mr-4" />
                                Start Registration Now
                            </Button>
                            <p className="mt-4 md:mt-6 text-xs md:text-sm text-muted-foreground">
                                Direct line to our Security Onboarding Team
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Dialog */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="sm:max-w-md glass-intense border-primary/20">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-display font-bold">One Step Closer to Safety</DialogTitle>
                        <DialogDescription>
                            Please fill in your details. We will use this to generate a personalized application message for you on WhatsApp.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleWhatsAppRedirect} className="space-y-4 mt-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <div className="relative">
                                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                <Input
                                    id="name"
                                    placeholder="John Doe"
                                    className="pl-9 bg-secondary/50"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="company">Company Name</Label>
                            <div className="relative">
                                <Building2 className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                <Input
                                    id="company"
                                    placeholder="Acme Corp"
                                    className="pl-9 bg-secondary/50"
                                    value={formData.company}
                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                    required
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    className="pl-9 bg-secondary/50"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <div className="relative">
                                <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                <Input
                                    id="phone"
                                    type="tel"
                                    placeholder="+91 98765 43210"
                                    className="pl-9 bg-secondary/50"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    required
                                />
                            </div>
                        </div>
                        <div className="pt-4">
                            <Button type="submit" className="w-full btn-primary text-lg font-bold">
                                Proceed to WhatsApp
                                <MessageCircle className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}
