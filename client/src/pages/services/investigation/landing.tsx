import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Shield, ChevronRight, User } from "lucide-react";
import InvestigationLayout from "@/components/layout/investigation-layout";
import SEO from "@/components/seo";
import { motion } from "framer-motion";
import ContactLeaderDialog from "@/components/investigation/contact-leader-dialog";

const LEADERSHIP_TEAM = [
    {
        name: "Meenakshi Rao",
        role: "Global Data Privacy & Evidence Integrity Lead",
        email: "meenakshi.rao@cehpoint.co.in"
    },
    {
        name: "Isha Malhotra",
        role: "Digital Forensics & Incident Response Lead",
        email: "isha.malhotra@cehpoint.co.in"
    },
    {
        name: "Pankaj Yadav",
        role: "Secure API & OSINT Investigation Lead",
        email: "pankaj.yadav@cehpoint.co.in"
    }
];

export default function InvestigationLanding() {
    return (
        <InvestigationLayout>
            <SEO
                title="Cyber Crime Investigation & Digital Forensics | Cehpoint"
                description="Elite digital forensics and cyber crime investigation unit. We investigate fraud, crypto theft, data breaches, and ransomware for corporates and individuals."
                url="https://www.cehpoint.co.in/services/cyber-crime-investigation"
            />

            {/* Hero */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/50" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-background/0 to-background/0" />

                <div className="max-w-5xl mx-auto px-4 relative z-10 text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-sm font-medium tracking-wide"
                    >
                        <span className="w-2 h-2 rounded-full bg-red-500 mr-2 animate-pulse" />
                        Active Investigation Unit
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-display font-bold leading-tight"
                    >
                        Cyber Crime Investigation <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">& Digital Forensics Services</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-xl md:text-2xl text-muted-foreground/80 max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        Technology-driven cyber investigation for corporates, governments, law enforcement partners, and individuals.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
                    >
                        <Link href="/services/cyber-crime-investigation/process">
                            <Button variant="outline" className="h-14 px-8 rounded-full border-white/10 hover:bg-white/5 hover:border-white/20 text-lg transition-all duration-300">
                                Understand Our Process
                            </Button>
                        </Link>
                        <Link href="/services/cyber-crime-investigation/request">
                            <Button className="h-14 px-8 rounded-full btn-primary text-lg shadow-lg shadow-red-600/20 hover:shadow-red-600/40 transition-all duration-300">
                                Request Investigation
                                <ChevronRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* What We Do */}
            <section className="py-24 border-y border-white/5 bg-white/[0.02] relative overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                                Digital Evidence. <br />Unlocked.
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                Cehpoint provides professional cyber crime investigation services where our experts analyze digital evidence, trace cyber activity, reconstruct incidents, and deliver legally usable technical reports.
                            </p>
                            <ul className="space-y-6">
                                {[
                                    "Investigate cyber fraud, hacking, ransomware, data breaches",
                                    "Collect and analyze digital evidence using forensic standards",
                                    "Trace financial flows, crypto assets, and dark web activity",
                                    "Support legal counsel and law enforcement with technical facts"
                                ].map((item, i) => (
                                    <motion.li
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        key={i}
                                        className="flex gap-4 items-start group"
                                    >
                                        <div className="p-2 rounded-lg bg-red-500/10 border border-red-500/20 group-hover:bg-red-500/20 transition-colors">
                                            <Shield className="w-5 h-5 text-red-500 shrink-0" />
                                        </div>
                                        <span className="text-white/80 text-lg">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-red-600/20 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                            <div className="relative p-8 rounded-3xl glass border border-white/10 backdrop-blur-xl bg-black/40">
                                <div className="grid grid-cols-2 gap-4">
                                    <StatCard value="98%" label="Evidence Integrity" />
                                    <StatCard value="Global" label="Coverage Area" />
                                    <StatCard value="24/7" label="Response Unit" />
                                    <StatCard value="ISO" label="Aligned Process" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Leadership Contacts */}
            <section className="py-24 bg-black/40">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-display font-bold mb-4">Investigation Leadership</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Direct accountability. Connect with our practice leads for specialized cases.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {LEADERSHIP_TEAM.map((lead, i) => (
                            <div key={i} className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group">
                                <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4 text-red-500 group-hover:scale-110 transition-transform">
                                    <User className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-1">{lead.name}</h3>
                                <p className="text-sm text-red-400 mb-4 h-10">{lead.role}</p>

                                <ContactLeaderDialog
                                    preSelectedLeader={lead.email}
                                    allLeaders={LEADERSHIP_TEAM}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </InvestigationLayout>
    );
}

function StatCard({ value, label }: { value: string, label: string }) {
    return (
        <div className="p-6 rounded-2xl bg-black/40 border border-white/5 text-center hover:border-red-500/20 transition-colors">
            <div className="text-4xl font-bold text-white mb-2 tracking-tight">{value}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-widest font-medium">{label}</div>
        </div>
    );
}
