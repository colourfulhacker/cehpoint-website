
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, FileText, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function AIServiceEstimator() {
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { toast } = useToast();

    const [formData, setFormData] = useState({
        infrastructure: "",
        users: "",
        dataVolume: "",
        industry: "",
        email: ""
    });

    const [strategy, setStrategy] = useState<any>(null);

    // Offline Strategy Generator
    const generateOfflineStrategy = (data: typeof formData) => {
        const { industry, infrastructure, dataVolume } = data;

        // Dynamic Content Generation
        let summary = "";
        let roi = "";
        let risk = "";
        let roadmap = [];
        let compliance = [];

        // Industry Specifics
        switch (industry) {
            case "finance":
                summary = `For a Financial Institution managing ${dataVolume === 'high' ? 'massive' : 'critical'} data volumes on ${infrastructure} infrastructure, we recommend a Federated Learning approach to enhance Fraud Detection and Risk Analysis without compromising data privacy.`;
                roi = "25-40% reduction in operational costs via automated compliance reporting and fraud prevention.";
                risk = "Data Privacy & Model Explainability (ensure AI decisions are auditable).";
                compliance = ["SOC2 Type II", "GDPR/CCPA", "Basel III"];
                break;
            case "healthcare":
                summary = `Implementing Privacy-Preserving AI is crucial for healthcare. Given your ${infrastructure} setup, we suggest a hybrid edge-cloud architecture to process patient data locally while leveraging cloud for heavy model training (Diagnostics/R&D).`;
                roi = "30% faster diagnosis cycles and 50% reduction in administrative overhead.";
                risk = "HIPAA Compliance violations & Bias in diagnostic models.";
                compliance = ["HIPAA", "HITECH", "FDA AI/ML Guidelines"];
                break;
            case "retail":
                summary = `To dominate in Retail, hyper-personalization is key. We propose a Customer 360 AI engine that unifies data from your ${dataVolume} volume streams to predict trends and automate inventory management on your ${infrastructure} stack.`;
                roi = "15-20% revenue uplift through personalized recommendations and dynamic pricing.";
                risk = "Supply chain disruptions & Consumer data privacy trust.";
                compliance = ["PCI-DSS", "CCPA", "GDPR"];
                break;
            case "manufacturing":
                summary = `For Manufacturing 4.0, we recommend a Digital Twin implementation. Your ${infrastructure} environment is prime for integrating IoT sensors to drive Predictive Maintenance and optimize production lines in real-time.`;
                roi = "Minimize downtime by 35-50% and extend equipment lifespan by years.";
                risk = "IoT Security vulnerabilities & Integration with legacy OT systems.";
                compliance = ["ISO 27001", "IEC 62443", "OSHA"];
                break;
            default:
                summary = "A custom AI transformation roadmap tailored to your specific infrastructure and data needs.";
                roi = "Estimated 20-30% efficiency gain across core operations.";
                risk = "Change management & Technology adoption curve.";
                compliance = ["General Data Protection Regulations"];
        }

        // Roadmap Modification based on Infrastructure
        const baseRoadmap = [
            { timeline: "Week 1-4", phase: "Discovery & Data Audit", action: "Assess data quality and security posture." },
            { timeline: "Week 5-12", phase: "Pilot Implementation", action: "Deploy MVP model on selected high-impact use case." },
            { timeline: "Month 4-6", phase: "Full Scale Integration", action: "Expand to production environment and integrate with ERP/CRM." }
        ];

        if (infrastructure === 'on-prem') {
            baseRoadmap.splice(1, 0, { timeline: "Week 4-8", phase: "Hybrid Gateway Setup", action: "Establish secure tunnels for hybrid model deployment." });
        } else if (infrastructure === 'cloud-native') {
            baseRoadmap[0].action += " & Cloud cost optimization analysis.";
        }

        return {
            executiveSummary: summary,
            roiProjection: roi,
            riskAssessment: risk,
            roadmap: baseRoadmap,
            complianceChecklist: compliance
        };
    };

    const handleEstimate = async () => {
        setLoading(true);
        // Simulate API latency for better UX
        setTimeout(() => {
            const generatedStrategy = generateOfflineStrategy(formData);
            setStrategy(generatedStrategy);
            setStep(2);
            setLoading(false);
            toast({
                title: "AI Strategy Ready",
                description: "Your personalized strategy has been generated.",
            });
        }, 1500);
    };

    const reset = () => {
        setStep(1);
        setStrategy(null);
        setFormData({ infrastructure: "", users: "", dataVolume: "", industry: "", email: "" });
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" className="px-8 py-4 rounded-xl text-lg font-semibold w-full sm:w-auto hover:bg-primary/10 border-primary/20 text-foreground">
                    Get AI Strategy Estimate
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] glass-intense border-primary/20 max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-display font-bold text-center mb-2">
                        AI Implementation Estimator
                    </DialogTitle>
                    <p className="text-center text-muted-foreground text-sm">
                        Powered by Enterprise Multi-Model AI
                    </p>
                </DialogHeader>

                {step === 1 ? (
                    <div className="space-y-4 py-4">
                        <div className="space-y-2">
                            <Label>Current Infrastructure</Label>
                            <Select onValueChange={(val) => setFormData({ ...formData, infrastructure: val })}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="on-prem">On-Premise Legacy</SelectItem>
                                    <SelectItem value="hybrid">Hybrid Cloud</SelectItem>
                                    <SelectItem value="cloud-native">Cloud Native</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label>Data Volume (Monthly)</Label>
                            <Select onValueChange={(val) => setFormData({ ...formData, dataVolume: val })}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select volume" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="low">Under 1TB</SelectItem>
                                    <SelectItem value="med">1TB - 50TB</SelectItem>
                                    <SelectItem value="high">50TB+ (Big Data)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label>Industry Sector</Label>
                            <Select onValueChange={(val) => setFormData({ ...formData, industry: val })}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select industry" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="finance">Finance & Banking</SelectItem>
                                    <SelectItem value="healthcare">Healthcare</SelectItem>
                                    <SelectItem value="retail">Retail & E-commerce</SelectItem>
                                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <Button
                            className="w-full btn-primary mt-4"
                            onClick={handleEstimate}
                            disabled={!formData.infrastructure || !formData.dataVolume || !formData.industry || loading}
                        >
                            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Generate 2026 Strategy"}
                        </Button>
                    </div>
                ) : (
                    <div className="py-2 space-y-6">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                <CheckCircle className="w-6 h-6 text-green-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-1">Strategy Generated</h3>
                            <p className="text-xs text-muted-foreground">{formData.industry} • {formData.infrastructure}</p>
                        </div>

                        {strategy && (
                            <div className="space-y-4">
                                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                                    <h4 className="text-sm font-bold text-primary mb-2">Executive Summary</h4>
                                    <p className="text-sm text-gray-300 leading-relaxed">{strategy.executiveSummary}</p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                                        <h4 className="text-xs font-bold text-green-400 mb-1">Projected ROI</h4>
                                        <p className="text-sm font-semibold">{strategy.roiProjection}</p>
                                    </div>
                                    <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                                        <h4 className="text-xs font-bold text-red-400 mb-1">Key Risk</h4>
                                        <p className="text-xs text-gray-300 line-clamp-3">{strategy.riskAssessment}</p>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-sm font-bold mb-2">Implementation Roadmap</h4>
                                    <div className="space-y-2">
                                        {strategy.roadmap?.map((step: any, idx: number) => (
                                            <div key={idx} className="flex gap-3 text-sm bg-secondary/20 p-2 rounded">
                                                <span className="font-mono text-xs text-primary bg-primary/10 px-1 py-0.5 rounded h-fit whitespace-nowrap">{step.timeline}</span>
                                                <div>
                                                    <p className="font-bold text-xs">{step.phase}</p>
                                                    <p className="text-xs text-gray-400">{step.action}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-sm font-bold mb-2">Compliance Requirements</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {strategy.complianceChecklist?.map((item: string, idx: number) => (
                                            <span key={idx} className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded-full text-gray-300">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        <Button className="w-full btn-primary" onClick={() => { setIsOpen(false); reset(); }}>
                            Close Report
                        </Button>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
}
