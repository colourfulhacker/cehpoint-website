import { useState } from "react";
import { serviceTechStacks } from "@/data/service-tech-stacks";
import {
    Code2, Database, Smartphone, Globe, Layers, Zap,
    Shield, Brain, Cloud, Terminal, Cpu, Lock,
    Layout, Server, Activity, ShoppingCart, ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { getTechIcon } from "@/components/shared/tech-icons";

// Map service IDs to display icons
const ServiceIcons: Record<string, any> = {
    "ai-solutions": Brain,
    "cybersecurity": Shield,
    "web-development": Globe,
    "mobile-development": Smartphone,
    "ecommerce": ShoppingCart
};

export default function TechStack() {
    const [activeService, setActiveService] = useState("ai-solutions");

    // Get current service data
    const currentService = serviceTechStacks[activeService];
    const categories = currentService?.categories || [];

    return (
        <section className="py-32 bg-background relative overflow-hidden" data-testid="tech-stack-section">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('/bg-grid.svg')] opacity-5 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-20">
                    <h2 className="font-display font-medium text-5xl md:text-7xl mb-6 tracking-tight text-white leading-tight">
                        Powering <br />
                        <span className="text-zinc-500">The Future.</span>
                    </h2>
                    <p className="text-xl text-zinc-400 font-light max-w-2xl leading-relaxed border-l-2 border-primary/20 pl-6">
                        Our engineering DNA consists of 150+ enterprise-grade technologies, carefully selected for scalability and security.
                    </p>
                </div>

                {/* Service Selection Tabs (Premium Pill Design) */}
                <div className="flex flex-wrap gap-3 mb-16">
                    {Object.values(serviceTechStacks).map((service) => {
                        const Icon = ServiceIcons[service.serviceId] || Layers;
                        const isActive = activeService === service.serviceId;
                        return (
                            <button
                                key={service.serviceId}
                                onClick={() => setActiveService(service.serviceId)}
                                className={`
                                    flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border
                                    ${isActive
                                        ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105'
                                        : 'bg-zinc-900/50 text-zinc-400 border-white/5 hover:bg-zinc-800 hover:text-white hover:border-white/10'
                                    }
                                `}
                            >
                                <Icon className={`w-4 h-4 mr-2 ${isActive ? 'text-black' : 'text-zinc-500'}`} />
                                {service.serviceName}
                            </button>
                        );
                    })}
                </div>

                {/* Tech Categories Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeService}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
                    >
                        {categories.map((category) => (
                            <div
                                key={category.name}
                                className="group bg-zinc-900/40 border border-white/5 p-8 rounded-3xl hover:bg-zinc-900/80 hover:border-primary/20 transition-all duration-300"
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center border border-white/5 group-hover:border-primary/30 transition-colors">
                                        <Zap className="w-5 h-5 text-zinc-400 group-hover:text-primary transition-colors" />
                                    </div>
                                    <h3 className="font-display font-medium text-lg text-white group-hover:text-primary-foreground transition-colors">
                                        {category.name}
                                    </h3>
                                </div>

                                <ul className="space-y-4">
                                    {category.tools.map((tool) => {
                                        const ToolIcon = getTechIcon(tool.name);
                                        return (
                                            <li key={tool.name} className="flex items-center group/tool">
                                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center mr-4 group-hover/tool:bg-white/10 transition-colors">
                                                    <ToolIcon className="w-4 h-4 text-zinc-500 group-hover/tool:text-white transition-colors" />
                                                </div>
                                                <div className="flex-1">
                                                    <span className="text-sm font-medium text-zinc-300 block group-hover/tool:text-white transition-colors">{tool.name}</span>
                                                    <span className="text-[11px] text-zinc-600 block group-hover/tool:text-zinc-500 transition-colors line-clamp-1">{tool.description}</span>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-primary/10 text-primary">
                            <Code2 className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="text-white font-medium">Custom Stack Architecture</h4>
                            <p className="text-sm text-zinc-500">We don't just use tools; we engineer ecosystems.</p>
                        </div>
                    </div>
                    <Button variant="outline" className="rounded-full border-white/10 hover:bg-white hover:text-black transition-colors">
                        View Full Tech Radar <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
