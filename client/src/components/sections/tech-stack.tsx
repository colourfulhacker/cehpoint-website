import { useState } from "react";
import { serviceTechStacks } from "@/data/service-tech-stacks";
import {
    Code2, Database, Smartphone, Globe, Layers, Zap,
    Shield, Brain, Cloud, Terminal, Cpu, Lock,
    Layout, Server, Activity, ShoppingCart
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

// Map tool categories to generic icons if needed, or use default
const CategoryIcons: Record<string, any> = {
    "LLM & Generative AI": BotIcon,
    "Vector Databases & RAG": Database,
    "VAPT & Penetration Testing": Terminal,
    "Frontend Frameworks": Layout,
    "Backend Technologies": Server,
    "Cloud AI Platforms": Cloud
};

function BotIcon(props: any) {
    return <Cpu {...props} />;
}

export default function TechStack() {
    const [activeService, setActiveService] = useState("ai-solutions");

    // Get current service data
    const currentService = serviceTechStacks[activeService];
    const categories = currentService?.categories || [];

    // Flatten tools for the current service to show top picks or all
    // For this view, let's show categories and their top tools

    return (
        <section className="py-24 bg-background" data-testid="tech-stack-section">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-up">
                    <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6">
                        <Code2 className="w-4 h-4 text-primary mr-2" />
                        <span className="text-sm font-medium text-primary">Our Technology Arsenal</span>
                    </div>
                    <h2 className="font-display font-bold text-4xl md:text-6xl mb-6 tracking-tight">
                        Powered by <span className="text-gradient">Modern Tech</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        We leverage over 150+ cutting-edge tools and frameworks to build scalable, secure, and future-proof solutions.
                    </p>
                </div>

                {/* Service Selection Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {Object.values(serviceTechStacks).map((service) => {
                        const Icon = ServiceIcons[service.serviceId] || Layers;
                        return (
                            <Button
                                key={service.serviceId}
                                variant={activeService === service.serviceId ? "default" : "outline"}
                                onClick={() => setActiveService(service.serviceId)}
                                className={`rounded-full px-6 py-6 h-auto text-base transition-all ${activeService === service.serviceId ? 'shadow-lg shadow-primary/25 scale-105' : 'hover:bg-secondary'}`}
                            >
                                <Icon className="w-5 h-5 mr-2" />
                                {service.serviceName}
                            </Button>
                        );
                    })}
                </div>

                {/* Tech Categories Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeService}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                    >
                        {categories.map((category) => (
                            <div
                                key={category.name}
                                className="glass p-8 rounded-3xl hover-lift group border border-white/10 h-full"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <Zap className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="font-display font-bold text-xl group-hover:text-primary transition-colors">
                                        {category.name}
                                    </h3>
                                </div>

                                <ul className="space-y-4">
                                    {category.tools.map((tool) => {
                                        // Get specific icon for the tool
                                        const ToolIcon = getTechIcon(tool.name);

                                        return (
                                            <li key={tool.name} className="flex items-start group/tool">
                                                <div className="mt-1 mr-3 min-w-[20px]">
                                                    <ToolIcon className="w-5 h-5 text-gray-400 group-hover/tool:text-primary transition-colors" />
                                                </div>
                                                <div>
                                                    <span className="font-bold text-foreground block group-hover/tool:text-primary transition-colors">{tool.name}</span>
                                                    <span className="text-sm text-muted-foreground">{tool.description}</span>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                <div className="glass-intense p-8 rounded-3xl text-center max-w-4xl mx-auto border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                    <div className="mb-4 inline-block p-3 bg-background rounded-full shadow-lg">
                        <Code2 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-2xl mb-4">Don't see your tech?</h3>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        This is just a glimpse of our core stack. We are agnostic experts capable of adapting to any legacy or modern infrastructure.
                    </p>
                </div>
            </div>
        </section>
    );
}
