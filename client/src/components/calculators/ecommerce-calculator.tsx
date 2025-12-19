import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
    ShoppingCart,
    Store,
    Smartphone,
    Globe,
    Zap,
    Box,
    BarChart3,
    CreditCard,
    MessageCircle,
    Calculator
} from "lucide-react";
import { Button } from "@/components/ui/button";

const RATES = {
    USD: {
        platform: { web: 2000, app: 3000, cross: 4500 },
        skuTier: { small: 500, medium: 1500, large: 3000 },
        features: {
            multivendor: 2500,
            ai: 1500,
            crm: 1000,
            global: 1200,
            pwa: 800,
            inventory: 1000,
            loyalty: 600
        },
        symbol: "$"
    },
    INR: {
        platform: { web: 150000, app: 250000, cross: 350000 },
        skuTier: { small: 40000, medium: 100000, large: 200000 },
        features: {
            multivendor: 150000,
            ai: 100000,
            crm: 80000,
            global: 90000,
            pwa: 60000,
            inventory: 70000,
            loyalty: 40000
        },
        symbol: "₹"
    },
    EUR: {
        platform: { web: 1800, app: 2800, cross: 4000 },
        skuTier: { small: 450, medium: 1300, large: 2700 },
        features: {
            multivendor: 2200,
            ai: 1300,
            crm: 900,
            global: 1100,
            pwa: 700,
            inventory: 900,
            loyalty: 500
        },
        symbol: "€"
    },
    GBP: {
        platform: { web: 1600, app: 2500, cross: 3800 },
        skuTier: { small: 400, medium: 1200, large: 2500 },
        features: {
            multivendor: 2000,
            ai: 1200,
            crm: 800,
            global: 1000,
            pwa: 650,
            inventory: 800,
            loyalty: 450
        },
        symbol: "£"
    },
};

export default function EcommerceCalculator() {
    const [currency, setCurrency] = useState<keyof typeof RATES>("INR");
    const [platform, setPlatform] = useState("web");
    const [skuTier, setSkuTier] = useState("small");
    const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
    const [totalCost, setTotalCost] = useState(0);

    const featuresList = [
        { id: "multivendor", label: "Multi-vendor Marketplace", icon: Store },
        { id: "ai", label: "AI Recommendations & Search", icon: Zap },
        { id: "crm", label: "Integrated CRM/ERP", icon: BarChart3 },
        { id: "global", label: "Multi-currency/Global Support", icon: Globe },
        { id: "pwa", label: "Progressive Web App (PWA)", icon: Smartphone },
        { id: "inventory", label: "Advanced Inventory Tracking", icon: Box },
        { id: "loyalty", label: "Loyalty & Rewards System", icon: CreditCard },
    ];

    const toggleFeature = (id: string) => {
        setSelectedFeatures(prev =>
            prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
        );
    };

    useEffect(() => {
        const rates = RATES[currency];
        // @ts-ignore
        let cost = rates.platform[platform] + rates.skuTier[skuTier];

        selectedFeatures.forEach(feature => {
            // @ts-ignore
            cost += rates.features[feature];
        });

        // Volume logic or complexity adjustments could go here

        setTotalCost(cost);
    }, [currency, platform, skuTier, selectedFeatures]);

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency,
            maximumFractionDigits: 0,
        }).format(amount);
    };

    const handleWhatsApp = () => {
        const featureLabels = selectedFeatures.map(id => featuresList.find(f => f.id === id)?.label).join(", ");

        const message = `Hi, I used the E-commerce Cost Estimator on Cehpoint. Here are my requirements:

*Project Profile:*
- Platform: ${platform.toUpperCase()}
- Scale: ${skuTier.toUpperCase()} SKUs

*Advanced Features:*
${featureLabels || "None"}

*Estimation Summary:*
- Currency: ${currency}
- Total Estimated Investment: ${formatCurrency(totalCost)}

Please provide a formal quotation.`;
        window.open(`https://wa.me/919091156095?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <section className="py-24 relative overflow-hidden" data-testid="ecommerce-calculator">
            <div className="absolute inset-0 bg-secondary/5"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-4 border border-purple-500/30">
                        <Calculator className="w-5 h-5 text-purple-400 mr-2" />
                        <span className="text-sm font-medium text-purple-400">E-commerce Investment Planner</span>
                    </div>
                    <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
                        Plan Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Digital Store</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                        <Card className="glass-intense border-white/10">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <ShoppingCart className="w-5 h-5 text-purple-400" />
                                    Core Platform Details
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label>Platform Type</Label>
                                        <Select value={platform} onValueChange={setPlatform}>
                                            <SelectTrigger>
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="web">Web Store Only</SelectItem>
                                                <SelectItem value="app">Mobile App Only</SelectItem>
                                                <SelectItem value="cross">Web + Mobile Apps (Cross-platform)</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Inventory Scale (SKUs)</Label>
                                        <Select value={skuTier} onValueChange={setSkuTier}>
                                            <SelectTrigger>
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="small">Startup (up to 100 SKUs)</SelectItem>
                                                <SelectItem value="medium">Growth (up to 1,000 SKUs)</SelectItem>
                                                <SelectItem value="large">Enterprise (10,000+ SKUs)</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="glass-intense border-white/10">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Zap className="w-5 h-5 text-yellow-400" />
                                    Advanced Features
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
                            <Card className="glass-intense border-purple-500/20 shadow-2xl">
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
                                        <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
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
