import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
    GraduationCap,
    Users,
    Video,
    Award,
    LayoutTemplate,
    Brain,
    Shield,
    MessageCircle,
    Calculator
} from "lucide-react";
import { Button } from "@/components/ui/button";

const RATES = {
    USD: {
        base: 2500,
        userTier: { startup: 500, growth: 2000, scale: 5000 },
        features: {
            lms: 3000,
            live: 2500,
            proctoring: 4000,
            gamification: 2000,
            portal: 1500,
            cert: 1000
        },
        symbol: "$"
    },
    INR: {
        base: 200000,
        userTier: { startup: 50000, growth: 150000, scale: 400000 },
        features: {
            lms: 250000,
            live: 200000,
            proctoring: 350000,
            gamification: 150000,
            portal: 100000,
            cert: 80000
        },
        symbol: "₹"
    },
    EUR: {
        base: 2200,
        userTier: { startup: 450, growth: 1800, scale: 4500 },
        features: {
            lms: 2800,
            live: 2300,
            proctoring: 3600,
            gamification: 1800,
            portal: 1400,
            cert: 900
        },
        symbol: "€"
    },
    GBP: {
        base: 2000,
        userTier: { startup: 400, growth: 1600, scale: 4000 },
        features: {
            lms: 2500,
            live: 2000,
            proctoring: 3200,
            gamification: 1600,
            portal: 1200,
            cert: 800
        },
        symbol: "£"
    },
};

export default function EdtechCalculator() {
    const [currency, setCurrency] = useState<keyof typeof RATES>("INR");
    const [userCount, setUserCount] = useState("startup"); // startup, growth, scale
    const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
    const [totalCost, setTotalCost] = useState(0);

    const featuresList = [
        { id: "lms", label: "LMS Core (Courses, Quizzes)", icon: LayoutTemplate },
        { id: "live", label: "Live Classroom Integration", icon: Video },
        { id: "proctoring", label: "AI Proctoring System", icon: Brain },
        { id: "gamification", label: "Gamification & Leaderboards", icon: Award },
        { id: "portal", label: "Parent/Admin Portals", icon: Users },
        { id: "cert", label: "Certification Engine", icon: Shield },
    ];

    const toggleFeature = (id: string) => {
        setSelectedFeatures(prev =>
            prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
        );
    };

    useEffect(() => {
        const rates = RATES[currency];
        // @ts-ignore
        let cost = rates.base + rates.userTier[userCount];

        selectedFeatures.forEach(feature => {
            // @ts-ignore
            cost += rates.features[feature];
        });

        setTotalCost(cost);
    }, [currency, userCount, selectedFeatures]);

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency,
            maximumFractionDigits: 0,
        }).format(amount);
    };

    const handleWhatsApp = () => {
        const featureLabels = selectedFeatures.map(id => featuresList.find(f => f.id === id)?.label).join(", ");

        const message = `Hi, I used the Edtech Cost Estimator on Cehpoint. Here are my requirements:

*Project Scale:*
- User Base Tier: ${userCount.toUpperCase()}

*Selected Features:*
${featureLabels || "None"}

*Estimation Summary:*
- Currency: ${currency}
- Total Estimated Investment: ${formatCurrency(totalCost)}

Please provide a formal quotation.`;
        window.open(`https://wa.me/919091156095?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <section className="py-24 relative overflow-hidden" data-testid="edtech-calculator">
            <div className="absolute inset-0 bg-secondary/5"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-4 border border-blue-500/30">
                        <Calculator className="w-5 h-5 text-blue-400 mr-2" />
                        <span className="text-sm font-medium text-blue-400">EdTech Investment Planner</span>
                    </div>
                    <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
                        Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Learning Platform</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                        <Card className="glass-intense border-white/10">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <GraduationCap className="w-5 h-5 text-blue-400" />
                                    Platform Scale
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label>Projected User Base (Monthly Active Users)</Label>
                                        <Select value={userCount} onValueChange={setUserCount}>
                                            <SelectTrigger><SelectValue /></SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="startup">&lt; 1,000 Users)</SelectItem>
                                                <SelectItem value="growth">Growth (1,000 - 10,000 Users)</SelectItem>
                                                <SelectItem value="scale">Scale (10,000+ Users)</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="glass-intense border-white/10">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Brain className="w-5 h-5 text-pink-400" />
                                    Platform Features
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
                            <Card className="glass-intense border-blue-500/20 shadow-2xl">
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
                                        <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
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
