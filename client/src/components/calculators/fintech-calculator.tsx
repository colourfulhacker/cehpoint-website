import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Landmark,
    Shield,
    Banknote,
    FileCheck,
    Lock,
    Scale,
    Activity,
    MessageCircle,
    Calculator
} from "lucide-react";
import { Button } from "@/components/ui/button";

const RATES = {
    USD: {
        base: 5000,
        volume: { low: 1000, medium: 3000, high: 8000 },
        features: {
            kyc: 2000,
            gateway: 3000,
            ledger: 4000,
            fraud: 3500,
            compliance: 5000
        },
        symbol: "$"
    },
    INR: {
        base: 400000,
        volume: { low: 80000, medium: 250000, high: 600000 },
        features: {
            kyc: 150000,
            gateway: 250000,
            ledger: 300000,
            fraud: 280000,
            compliance: 400000
        },
        symbol: "₹"
    },
    EUR: {
        base: 4500,
        volume: { low: 900, medium: 2700, high: 7200 },
        features: {
            kyc: 1800,
            gateway: 2700,
            ledger: 3600,
            fraud: 3100,
            compliance: 4500
        },
        symbol: "€"
    },
    GBP: {
        base: 4000,
        volume: { low: 800, medium: 2400, high: 6400 },
        features: {
            kyc: 1600,
            gateway: 2400,
            ledger: 3200,
            fraud: 2800,
            compliance: 4000
        },
        symbol: "£"
    },
};

export default function FintechCalculator() {
    const [currency, setCurrency] = useState<keyof typeof RATES>("INR");
    const [volume, setVolume] = useState("low");
    const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
    const [totalCost, setTotalCost] = useState(0);

    const featuresList = [
        { id: "kyc", label: "e-KYC / AML Integration", icon: Shield },
        { id: "gateway", label: "Multi-Payment Gateway Hub", icon: Banknote },
        { id: "ledger", label: "Core Banking / Ledger System", icon: Landmark },
        { id: "fraud", label: "AI Fraud Detection", icon: Activity },
        { id: "compliance", label: "Regulatory Compliance Suite (RBI/SEBI/GDPR)", icon: Scale },
    ];

    const toggleFeature = (id: string) => {
        setSelectedFeatures(prev =>
            prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
        );
    };

    useEffect(() => {
        const rates = RATES[currency];
        // @ts-ignore
        let cost = rates.base + rates.volume[volume];

        selectedFeatures.forEach(feature => {
            // @ts-ignore
            cost += rates.features[feature];
        });

        setTotalCost(cost);
    }, [currency, volume, selectedFeatures]);

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency,
            maximumFractionDigits: 0,
        }).format(amount);
    };

    const handleWhatsApp = () => {
        const featureLabels = selectedFeatures.map(id => featuresList.find(f => f.id === id)?.label).join(", ");

        const message = `Hi, I used the Fintech Cost Estimator on Cehpoint. Here are my requirements:

*Transaction Volume:*
- Tier: ${volume.toUpperCase()}

*Core Modules:*
${featureLabels || "None"}

*Estimation Summary:*
- Currency: ${currency}
- Total Estimated Investment: ${formatCurrency(totalCost)}

Please provide a formal quotation.`;
        window.open(`https://wa.me/919091156095?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <section className="py-24 relative overflow-hidden" data-testid="fintech-calculator">
            <div className="absolute inset-0 bg-secondary/5"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-4 border border-emerald-500/30">
                        <Calculator className="w-5 h-5 text-emerald-400 mr-2" />
                        <span className="text-sm font-medium text-emerald-400">Fintech Product Planner</span>
                    </div>
                    <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
                        Engineer the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Future of Finance</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                        <Card className="glass-intense border-white/10">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Activity className="w-5 h-5 text-emerald-400" />
                                    Transaction Volume Scale
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label>Projected Monthly Transactions</Label>
                                        <Select value={volume} onValueChange={setVolume}>
                                            <SelectTrigger><SelectValue /></SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="low">&lt; 10k Txns)</SelectItem>
                                                <SelectItem value="medium">Growth Stage (10k - 100k Txns)</SelectItem>
                                                <SelectItem value="high">High Velocity (100k+ Txns)</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="glass-intense border-white/10">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Shield className="w-5 h-5 text-emerald-400" />
                                    Security & Compliance Modules
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {featuresList.map((feature) => (
                                        <div key={feature.id}
                                            onClick={() => toggleFeature(feature.id)}
                                            className={`p-4 rounded-xl border cursor-pointer transition-all ${selectedFeatures.includes(feature.id)
                                                    ? 'bg-primary/10 border-primary/50'
                                                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                                                }`}>
                                            <div className="flex items-center gap-3">
                                                <Checkbox checked={selectedFeatures.includes(feature.id)} />
                                                <div className="flex items-center gap-2">
                                                    <feature.icon className="w-4 h-4 text-muted-foreground" />
                                                    <span className="font-medium text-sm">{feature.label}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                            <Card className="glass-intense border-emerald-500/20 shadow-2xl">
                                <CardHeader>
                                    <CardTitle>Estimated Investment</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="space-y-2">
                                        <Label>Currency</Label>
                                        <Select value={currency} onValueChange={(v: any) => setCurrency(v)}>
                                            <SelectTrigger><SelectValue /></SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="USD">USD ($)</SelectItem>
                                                <SelectItem value="INR">INR (₹)</SelectItem>
                                                <SelectItem value="EUR">EUR (€)</SelectItem>
                                                <SelectItem value="GBP">GBP (£)</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="pt-6 border-t border-white/10 text-center">
                                        <div className="text-sm text-muted-foreground mb-2">Total Estimated Cost</div>
                                        <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                                            {formatCurrency(totalCost)}
                                        </div>
                                    </div>
                                    <Button onClick={handleWhatsApp} className="w-full btn-primary font-bold py-6 text-lg rounded-xl flex items-center justify-center gap-2">
                                        <MessageCircle className="w-6 h-6" />
                                        Get Formal Quote
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
