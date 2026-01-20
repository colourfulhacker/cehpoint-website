import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Calculator,
    MessageCircle,
    Briefcase,
    Globe,
    Siren,
    Scale,
    ShieldAlert,
    Search,
    FileText,
    Lock,
    Bitcoin,
    Globe2
} from "lucide-react";
import { Button } from "@/components/ui/button";

const baseRates = {
    Individual: 5000,
    "SME / Startup": 25000,
    Enterprise: 100000,
    "Government / PSU": 150000,
    "International Client": 85000 // ~$1000
};

const scopeItems = [
    { id: "consultation", label: "Initial Expert Consultation", min: 2500, max: 5000, icon: MessageCircle },
    { id: "digital_evidence", label: "Digital Evidence Collection", min: 15000, max: 50000, icon: Search },
    { id: "malware", label: "Malware / Ransomware Analysis", min: 25000, max: 100000, icon: ShieldAlert },
    { id: "financial_fraud", label: "Financial Fraud Tracing", min: 20000, max: 75000, icon: Briefcase },
    { id: "crypto", label: "Crypto Wallet Tracing", min: 35000, max: 150000, icon: Bitcoin },
    { id: "dark_web", label: "Dark Web Intelligence", min: 25000, max: 100000, icon: Globe2 },
    { id: "cloud_forensics", label: "Cloud / SaaS Forensics", min: 50000, max: 200000, icon: Globe },
    { id: "court_report", label: "Court-Ready Report", min: 15000, max: 50000, icon: FileText },
];

export default function CyberCrimeCalculator() {
    const [clientType, setClientType] = useState("Individual");
    const [selectedScopes, setSelectedScopes] = useState<string[]>([]);
    const [scopeComplexity, setScopeComplexity] = useState<Record<string, number>>({});
    const [urgency, setUrgency] = useState("Standard");
    const [jurisdiction, setJurisdiction] = useState("India");
    const [totalCost, setTotalCost] = useState(0);

    const toggleScope = (id: string) => {
        setSelectedScopes(prev =>
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
        // Initialize complexity to 50% if adding
        if (!scopeComplexity[id]) {
            setScopeComplexity(prev => ({ ...prev, [id]: 50 }));
        }
    };

    const updateComplexity = (id: string, val: number) => {
        setScopeComplexity(prev => ({ ...prev, [id]: val }));
    };

    useEffect(() => {
        let cost = baseRates[clientType as keyof typeof baseRates];

        selectedScopes.forEach(scopeId => {
            const scope = scopeItems.find(s => s.id === scopeId);
            if (scope) {
                const complexity = scopeComplexity[scopeId] || 50; // 0 to 100
                const scopePrice = scope.min + ((scope.max - scope.min) * (complexity / 100));
                cost += scopePrice;
            }
        });

        // Multipliers
        let multiplier = 1;
        if (urgency === "Priority") multiplier += 0.25;
        if (urgency === "Emergency") multiplier += 0.50;
        if (jurisdiction === "Cross-border") multiplier += 0.50;

        setTotalCost(Math.round(cost * multiplier));
    }, [clientType, selectedScopes, scopeComplexity, urgency, jurisdiction]);

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0,
        }).format(amount);
    };

    const handleWhatsApp = () => {
        const scopeDetails = selectedScopes.map(id => {
            const s = scopeItems.find(i => i.id === id);
            return `- ${s?.label} (Complexity: ${scopeComplexity[id]}%)`;
        }).join('\n');

        const message = `*Cyber Crime Investigation Request*\n
*Client Type:* ${clientType}
*Jurisdiction:* ${jurisdiction}
*Urgency:* ${urgency}
\n*Scope of Investigation:*
${scopeDetails || "None selected"}
\n*Estimated Budget:* ${formatCurrency(totalCost)}
\nPlease contact me for a detailed discussion.`;

        window.open(`https://wa.me/917319116415?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <section className="py-12 bg-black/20 rounded-2xl border border-white/10" id="calculator">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-4 font-display">Cyber Investigation <span className="text-blue-400">Cost Estimator</span></h2>
                    <p className="text-muted-foreground">Estimate professional fees based on case complexity and requirements.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <Label>Client Category</Label>
                            <Select value={clientType} onValueChange={setClientType}>
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    {Object.keys(baseRates).map((type) => (
                                        <SelectItem key={type} value={type}>{type}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label>Investigation Scope (Select all that apply)</Label>
                            <div className="grid gap-3">
                                {scopeItems.map((item) => (
                                    <div key={item.id} className={`p-3 rounded-lg border transition-all ${selectedScopes.includes(item.id) ? 'bg-blue-500/10 border-blue-500/50' : 'bg-white/5 border-white/10'}`}>
                                        <div className="flex items-center space-x-3 mb-2">
                                            <Checkbox
                                                id={item.id}
                                                checked={selectedScopes.includes(item.id)}
                                                onCheckedChange={() => toggleScope(item.id)}
                                            />
                                            <Label htmlFor={item.id} className="flex-1 cursor-pointer flex items-center gap-2">
                                                <item.icon className="w-4 h-4 text-blue-400" />
                                                {item.label}
                                            </Label>
                                        </div>
                                        {selectedScopes.includes(item.id) && (
                                            <div className="pl-7 pr-2">
                                                <div className="flex justify-between text-xs text-muted-foreground mb-1">
                                                    <span>Simple</span>
                                                    <span>Complex</span>
                                                </div>
                                                <Slider
                                                    value={[scopeComplexity[item.id] || 50]}
                                                    onValueChange={(val) => updateComplexity(item.id, val[0])}
                                                    max={100}
                                                    step={10}
                                                />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Urgency Level</Label>
                                <Select value={urgency} onValueChange={setUrgency}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Standard">Standard</SelectItem>
                                        <SelectItem value="Priority">Priority (x1.25)</SelectItem>
                                        <SelectItem value="Emergency">Emergency (x1.5)</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label>Jurisdiction</Label>
                                <Select value={jurisdiction} onValueChange={setJurisdiction}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="India">India</SelectItem>
                                        <SelectItem value="Cross-border">International / Cross-border</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <Card className="bg-blue-950/20 border-blue-500/30">
                            <CardHeader>
                                <CardTitle className="text-xl">Estimated Fees</CardTitle>
                                <CardDescription>Indicative pricing for professional services</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="text-4xl font-bold text-blue-400">
                                    {formatCurrency(totalCost)}
                                </div>

                                <div className="space-y-2 text-sm text-gray-400">
                                    <p className="flex justify-between"><span>Base Fee ({clientType}):</span> <span>{formatCurrency(baseRates[clientType as keyof typeof baseRates])}</span></p>
                                    <p className="flex justify-between"><span>Scope Cost:</span> <span>{formatCurrency(selectedScopes.reduce((acc, id) => {
                                        const scope = scopeItems.find(s => s.id === id);
                                        if (!scope) return acc;
                                        const complexity = scopeComplexity[id] || 50;
                                        return acc + (scope.min + ((scope.max - scope.min) * (complexity / 100)));
                                    }, 0))}</span></p>
                                    {(urgency !== "Standard" || jurisdiction !== "Cross-border") && (
                                        <p className="flex justify-between text-yellow-500"><span>Multipliers Applied:</span> <span>{(() => {
                                            let m = 0; // base addition
                                            if (urgency === "Priority") m += 25;
                                            if (urgency === "Emergency") m += 50;
                                            if (jurisdiction === "Cross-border") m += 50;
                                            return `+${m}%`;
                                        })()}</span></p>
                                    )}
                                </div>

                                <Button onClick={handleWhatsApp} className="w-full btn-primary gap-2">
                                    <MessageCircle className="w-4 h-4" />
                                    Request Official Quote
                                </Button>
                                <p className="text-xs text-center text-muted-foreground mt-2">
                                    *Final quotation may vary based on detailed case assessment.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
