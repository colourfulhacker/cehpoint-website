import { motion } from "framer-motion";
import { FileText, Search, CheckCircle, Lock, ShieldAlert, Cpu, Gavel } from "lucide-react";

const steps = [
    {
        id: 1,
        title: "Confidential Inquiry & NDA",
        desc: "Secure intake process where NDA is signed automatically before any case details are shared. Zero data analysis starts without authorization.",
        icon: Lock,
        duration: "Day 0"
    },
    {
        id: 2,
        title: "Case Scoping & Feasibility Review",
        desc: "Internal expert review of incident type, systems involved, and jurisdiction to confirm investigation capability and define clear scope.",
        icon: Search,
        duration: "24-48 Hrs"
    },
    {
        id: 3,
        title: "Engagement Confirmation & Fee Approval",
        desc: "Transparent scope-based pricing generated. Engagement letter issued. No hidden costs or scope creep after approval.",
        icon: FileText,
        duration: "Day 2"
    },
    {
        id: 4,
        title: "Evidence Collection (Forensic Acquisition)",
        desc: "Read-only forensic copies of devices, servers, and logs collected maintaining strict Chain of Custody. No random system access.",
        icon: Cpu,
        duration: "Day 3-5"
    },
    {
        id: 5,
        title: "Investigation & Analysis",
        desc: "Deep-dive analysis: Timeline reconstruction, attack path mapping, actor profiling, and correlation across data sources.",
        icon: ShieldAlert,
        duration: "Week 1-2"
    },
    {
        id: 6,
        title: "Findings & Reporting",
        desc: "Delivery of technical investigation report, evidence summary, and impact assessment. Court-ready formats available.",
        icon: CheckCircle,
        duration: "Final"
    },
    {
        id: 7,
        title: "Post-Investigation Support",
        desc: "Guidance on law enforcement coordination, legal team assistance, and security hardening recommendations.",
        icon: Gavel,
        duration: "Ongoing"
    }
];

export default function ProcessTimeline() {
    return (
        <div className="relative py-10">
            {/* Vertical Line */}
            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-red-500/50 to-transparent" />

            <div className="space-y-12">
                {steps.map((step, index) => (
                    <motion.div
                        key={step.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`flex flex-col md:flex-row gap-8 items-start relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                    >
                        {/* Center Dot */}
                        <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-red-500 z-10 shadow-[0_0_10px_rgba(239,68,68,0.5)]">
                            <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-20" />
                        </div>

                        {/* Content Card */}
                        <div className="flex-1 md:w-1/2 pl-12 md:pl-0">
                            <div className={`
                                p-6 rounded-2xl glass hover:border-red-500/30 transition-all group
                                ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}
                            `}>
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 rounded-xl bg-white/5 group-hover:bg-red-500/10 transition-colors">
                                        <step.icon className="w-6 h-6 text-red-500" />
                                    </div>
                                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-muted-foreground">
                                        {step.duration}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-2 flex items-center gap-3">
                                    <span className="text-white/20 font-display text-2xl">0{step.id}</span>
                                    {step.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </div>

                        {/* Spacer for alternate side */}
                        <div className="hidden md:block flex-1" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
