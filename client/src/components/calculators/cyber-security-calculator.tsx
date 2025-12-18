import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Shield,
    Lock,
    Activity,
    FileCheck,
    Calculator,
    MessageCircle,
    Server,
    Globe,
    Smartphone,
    Wifi,
    Cloud,
    ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";

const RATES = {
    USD: {
        vapt: { web: 200, mobile: 250, network: 150, cloud: 300 },
        soc: { endpoint: 20 },
        compliance: { iso: 2000, gdpr: 2500, hipaa: 3000, pcidss: 2500 },
        symbol: "$"
    },
    INR: {
        vapt: { web: 15000, mobile: 20000, network: 10000, cloud: 25000 },
        soc: { endpoint: 1500 },
        compliance: { iso: 150000, gdpr: 200000, hipaa: 250000, pcidss: 200000 },
        symbol: "₹"
    },
    EUR: {
        vapt: { web: 180, mobile: 230, network: 130, cloud: 270 },
        soc: { endpoint: 18 },
        compliance: { iso: 1800, gdpr: 2300, hipaa: 2700, pcidss: 2300 },
        symbol: "€"
    },
    GBP: {
        vapt: { web: 160, mobile: 200, network: 120, cloud: 240 },
        soc: { endpoint: 15 },
        compliance: { iso: 1600, gdpr: 2000, hipaa: 2400, pcidss: 2000 },
        symbol: "£"
    },
};

export default function CyberSecurityCalculator() {
    const [currency, setCurrency] = useState<keyof typeof RATES>("INR");

    // VAPT State - storing counts for each type. 0 means not selected/disabled.
    const [vaptCounts, setVaptCounts] = useState({
        web: 1,
        mobile: 0,
        network: 0,
        cloud: 0
    });

    // Helper to toggle VAPT selection
    const toggleVapt = (type: keyof typeof vaptCounts) => {
        setVaptCounts(prev => ({
            ...prev,
            [type]: prev[type] > 0 ? 0 : 1 // Toggle between 0 (off) and 1 (on)
        }));
    };

    // Helper to update count
    const updateVaptCount = (type: keyof typeof vaptCounts, val: number) => {
        setVaptCounts(prev => ({
            ...prev,
            [type]: val
        }));
    };

    // SOC State
    const [socEndpoints, setSocEndpoints] = useState([0]);

    // Compliance State
    const [compliance, setCompliance] = useState("none");

    const [discount, setDiscount] = useState(0);
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        const rates = RATES[currency];
        const vaptBaseCost = Object.keys(vaptCounts).reduce((acc, type) => {
            // @ts-ignore
            const count = vaptCounts[type];
            // @ts-ignore
            return count > 0 ? acc + ((rates.vapt[type] || 0) * count) : acc;
        }, 0);

        const totalAssets = Object.keys(vaptCounts).reduce((acc, type) => {
            // @ts-ignore
            return acc + (vaptCounts[type] || 0);
        }, 0);

        // Apply Tiered Discount Logic
        let discountMultiplier = 1;
        if (totalAssets > 20) {
            discountMultiplier = 0.75; // 25% off for 21+ assets
        } else if (totalAssets > 5) {
            discountMultiplier = 0.85; // 15% off for 6-20 assets
        }

        const finalVaptCost = vaptBaseCost * discountMultiplier;
        const discountAmount = vaptBaseCost - finalVaptCost;
        setDiscount(discountAmount);

        // Calculate Total Estimated Cost
        let estimated = finalVaptCost;

        // Calculate SOC Cost
        if (socEndpoints[0] > 0) {
            estimated += rates.soc.endpoint * socEndpoints[0];
        }

        // Calculate Compliance Cost
        if (compliance !== "none") {
            // @ts-ignore
            estimated += rates.compliance[compliance] || 0;
        }

        setTotalCost(Math.round(estimated));
    }, [currency, vaptCounts, socEndpoints, compliance]);

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency,
            maximumFractionDigits: 0,
        }).format(amount);
    };

    const handleWhatsApp = () => {
        // Construct VAPT summary
        let vaptSummary = "";
        if (vaptCounts.web > 0) vaptSummary += `- Web App Penetration Testing: ${vaptCounts.web} Assets\n`;
        if (vaptCounts.mobile > 0) vaptSummary += `- Mobile App Penetration Testing: ${vaptCounts.mobile} Apps\n`;
        if (vaptCounts.network > 0) vaptSummary += `- Network Vulnerability Assessment: ${vaptCounts.network} IPs\n`;
        if (vaptCounts.cloud > 0) vaptSummary += `- Cloud Security Config Review: ${vaptCounts.cloud} Accounts\n`;

        if (vaptSummary === "") vaptSummary = "- None selected";

        let discountMsg = "";
        if (discount > 0) {
            discountMsg = `\n*Volume Discount Applied:* ${formatCurrency(discount)} saved!`;
        }

        const message = `Hi, I used the Cyber Security Cost Estimator on Cehpoint. Here are my requirements:

*VAPT Scope:*
${vaptSummary}

*SOC Monitoring:*
- Endpoints: ${socEndpoints}

*Compliance:*
- Standard: ${compliance === 'none' ? 'None' : compliance.toUpperCase()}

*Estimation Summary:*
- Currency: ${currency}
- Total Estimated Investment: ${formatCurrency(totalCost)}${discountMsg}

Please provide a formal quotation for these services.`;
        window.open(`https://wa.me/919091156095?text=${encodeURIComponent(message)}`, '_blank');
    };

    const vaptOptions = [
        { id: "web", label: "Web App Security", icon: Globe, color: "text-blue-400" },
        { id: "mobile", label: "Mobile App Security", icon: Smartphone, color: "text-purple-400" },
        { id: "network", label: "Network Security", icon: Wifi, color: "text-emerald-400" },
        { id: "cloud", label: "Cloud Security", icon: Cloud, color: "text-amber-400" },
    ];

    return (
        <section className="py-24 relative overflow-hidden" data-testid="security-calculator">
            <div className="absolute inset-0 bg-secondary/5"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-4 border border-blue-500/30">
                        <Calculator className="w-5 h-5 text-blue-400 mr-2" />
                        <span className="text-sm font-medium text-blue-400">Security Investment Calculator</span>
                    </div>
                    <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
                        Calculate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400">Security Budget</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Get an instant estimate for VAPT, SOC, and Compliance services tailored to your specific infrastructure.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Controls */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* VAPT Section */}
                        <Card className="glass-intense border-white/10 overflow-hidden relative">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <ShieldCheck className="w-24 h-24" />
                            </div>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <ShieldCheck className="w-6 h-6 text-blue-400" />
                                    Vulnerability Assessment (VAPT)
                                </CardTitle>
                                <CardDescription>Select all asset types you need to secure</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {vaptOptions.map((option) => (
                                        <div key={option.id} className={`p-4 rounded-xl border transition-all duration-300 ${
                                            // @ts-ignore
                                            vaptCounts[option.id] > 0
                                                ? 'bg-primary/5 border-primary/50'
                                                : 'bg-white/5 border-white/10 hover:bg-white/10'
                                            }`}>
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="flex items-center gap-3">
                                                    <div className={`p-2 rounded-lg bg-background/50 ${option.color}`}>
                                                        <option.icon className="w-5 h-5" />
                                                    </div>
                                                    <Label htmlFor={`check-${option.id}`} className="font-medium cursor-pointer">
                                                        {option.label}
                                                    </Label>
                                                </div>
                                                <Checkbox
                                                    id={`check-${option.id}`}
                                                    // @ts-ignore
                                                    checked={vaptCounts[option.id] > 0}
                                                    // @ts-ignore
                                                    onCheckedChange={() => toggleVapt(option.id)}
                                                    className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                                                />
                                            </div>

                                            {
                                                // @ts-ignore
                                                vaptCounts[option.id] > 0 && (
                                                    <div className="pt-2 animate-in fade-in slide-in-from-top-2">
                                                        <div className="flex justify-between text-xs mb-2">
                                                            <span className="text-muted-foreground">Quantity</span>
                                                            <span className="font-bold text-primary">
                                                                {/* @ts-ignore */}
                                                                {vaptCounts[option.id]}
                                                            </span>
                                                        </div>
                                                        <Slider
                                                            // @ts-ignore
                                                            value={[vaptCounts[option.id]]}
                                                            // @ts-ignore
                                                            onValueChange={(val) => updateVaptCount(option.id, val[0])}
                                                            max={50}
                                                            min={1}
                                                            step={1}
                                                            className="py-2"
                                                        />
                                                    </div>
                                                )}
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* SOC Section */}
                        <Card className="glass-intense border-white/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Activity className="w-24 h-24" />
                            </div>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Activity className="w-5 h-5 text-emerald-400" />
                                    SOC Monitoring
                                </CardTitle>
                                <CardDescription>24/7 Threat monitoring and incident response</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <div className="space-y-1">
                                            <span className="font-medium block">Number of Endpoints</span>
                                            <span className="text-xs text-muted-foreground">Workstations, Servers, Devices</span>
                                        </div>
                                        <span className="text-emerald-400 font-bold text-xl">{socEndpoints}</span>
                                    </div>
                                    <Slider
                                        value={socEndpoints}
                                        onValueChange={setSocEndpoints}
                                        max={500}
                                        min={0}
                                        step={5}
                                        className="py-4"
                                    />
                                    <p className="text-xs text-muted-foreground text-right">*Set to 0 if not required</p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Compliance Section */}
                        <Card className="glass-intense border-white/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <FileCheck className="w-24 h-24" />
                            </div>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <FileCheck className="w-5 h-5 text-purple-400" />
                                    Compliance & Audit
                                </CardTitle>
                                <CardDescription>Regulatory compliance certification support</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Select value={compliance} onValueChange={setCompliance}>
                                    <SelectTrigger className="w-full h-12 text-lg">
                                        <SelectValue placeholder="Select Compliance Type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="none">No Compliance Needed</SelectItem>
                                        <SelectItem value="iso">ISO 27001</SelectItem>
                                        <SelectItem value="gdpr">GDPR</SelectItem>
                                        <SelectItem value="hipaa">HIPAA</SelectItem>
                                        <SelectItem value="pcidss">PCI DSS</SelectItem>
                                    </SelectContent>
                                </Select>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Summary */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            <Card className="glass-intense border-blue-500/20 shadow-2xl relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent pointer-events-none" />
                                <CardHeader>
                                    <CardTitle>Estimated Investment</CardTitle>
                                    <CardDescription>Indicative Estimation</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="space-y-2">
                                        <Label>Currency</Label>
                                        <Select value={currency} onValueChange={(v: any) => setCurrency(v)}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select Currency" />
                                            </SelectTrigger>
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
                                        <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                                            {formatCurrency(totalCost)}
                                        </div>
                                        {discount > 0 && (
                                            <div className="text-sm font-medium text-emerald-400 mb-2 animate-in fade-in slide-in-from-bottom-1">
                                                You save {formatCurrency(discount)} with volume discount!
                                            </div>
                                        )}
                                        <div className="text-xs text-muted-foreground">
                                            *Rough estimate based on selected parameters. Need a detailed proposal?
                                        </div>
                                        {discount > 0 && (
                                            <div className="text-sm font-medium text-emerald-400 mt-2 animate-in fade-in slide-in-from-bottom-1">
                                                You save {formatCurrency(discount)} with volume discount!
                                            </div>
                                        )}
                                    </div>

                                    <Button
                                        onClick={handleWhatsApp}
                                        className="w-full btn-primary font-bold py-6 text-lg rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all"
                                    >
                                        <MessageCircle className="w-6 h-6" />
                                        Get Formal Quote
                                    </Button>
                                </CardContent>
                            </Card>

                            <div className="glass p-6 rounded-xl text-sm text-muted-foreground border border-white/5 bg-gradient-to-br from-white/5 to-transparent">
                                <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                                    <ShieldCheck className="w-4 h-4 text-blue-400" />
                                    Why Choose Cehpoint?
                                </h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5" />
                                        CERT-In Empanelled Partners
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5" />
                                        Certified Security Experts (OSCP/CISSP)
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5" />
                                        Detailed Reporting & verification
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5" />
                                        0% False Positives Guarantee
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
