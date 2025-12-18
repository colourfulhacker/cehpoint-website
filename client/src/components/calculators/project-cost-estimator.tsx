import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, Clock, Shield, Briefcase, GraduationCap, Calculator, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProposalPopup from "@/components/quotation/proposal-popup";

const RATES = {
    USD: { intern: 500, contractual: 2000, fulltime: 4000, secure: 6000, symbol: "$" },
    INR: { intern: 15000, contractual: 80000, fulltime: 150000, secure: 250000, symbol: "₹" },
    EUR: { intern: 450, contractual: 1800, fulltime: 3600, secure: 5400, symbol: "€" },
    GBP: { intern: 400, contractual: 1600, fulltime: 3200, secure: 4800, symbol: "£" },
};

export default function ProjectCostEstimator() {
    const [currency, setCurrency] = useState<keyof typeof RATES>("INR");
    const [duration, setDuration] = useState([3]);
    const [interns, setInterns] = useState([0]);
    const [contractual, setContractual] = useState([1]);
    const [fulltime, setFulltime] = useState([1]);
    const [secure, setSecure] = useState([0]);
    const [includePM, setIncludePM] = useState(true);
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        const rates = RATES[currency];
        const monthlyDevCost =
            (interns[0] * rates.intern) +
            (contractual[0] * rates.contractual) +
            (fulltime[0] * rates.fulltime) +
            (secure[0] * rates.secure);

        const monthlyTotal = includePM ? monthlyDevCost * 1.15 : monthlyDevCost;
        setTotalCost(Math.round(monthlyTotal * duration[0]));
    }, [currency, duration, interns, contractual, fulltime, secure, includePM]);

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency,
            maximumFractionDigits: 0,
        }).format(amount);
    };

    const handleWhatsApp = () => {
        const message = `Hi, I used the Project Cost Estimator on Cehpoint. Here are my requirements:
- Duration: ${duration} Months
- Interns: ${interns}
- Contractual: ${contractual}
- Full-time: ${fulltime}
- Secure Devs: ${secure}
- Currency: ${currency}
- Estimated Cost: ${formatCurrency(totalCost)}
- PM Included: ${includePM ? 'Yes' : 'No'}

Please contact me to discuss further.`;
        window.open(`https://wa.me/919091156095?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <section className="py-24 relative overflow-hidden" data-testid="cost-estimator">
            <ProposalPopup />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-4">
                        <Calculator className="w-4 h-4 text-primary mr-2" />
                        <span className="text-sm font-medium text-primary">Transparent Pricing Model</span>
                    </div>
                    <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
                        Estimate Your <span className="text-gradient">Project Investment</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Calculate a genuine, affordable estimate based on your timeline and team composition.
                        Mix and match talent to fit your budget.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Controls */}
                    <div className="lg:col-span-2 space-y-6">
                        <Card className="glass-intense border-white/10">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-primary" />
                                    Project Timeline
                                </CardTitle>
                                <CardDescription>Estimated duration in months</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex justify-between">
                                        <span className="font-medium">Duration</span>
                                        <span className="text-primary font-bold">{duration} Months</span>
                                    </div>
                                    <Slider
                                        value={duration}
                                        onValueChange={setDuration}
                                        max={24}
                                        min={1}
                                        step={1}
                                        className="py-4"
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="glass-intense border-white/10">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Users className="w-5 h-5 text-primary" />
                                    Team Composition
                                </CardTitle>
                                <CardDescription>Build your ideal team structure</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-8">
                                {/* Interns */}
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <div className="p-2 bg-primary/10 rounded-lg">
                                                <GraduationCap className="w-4 h-4 text-primary" />
                                            </div>
                                            <div>
                                                <div className="font-medium">Interns / Junior Devs</div>
                                                <div className="text-xs text-muted-foreground">Cost-effective, guided by seniors</div>
                                            </div>
                                        </div>
                                        <span className="font-bold">{interns}</span>
                                    </div>
                                    <Slider value={interns} onValueChange={setInterns} max={10} step={1} />
                                </div>

                                {/* Contractual */}
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <div className="p-2 bg-primary/10 rounded-lg">
                                                <Briefcase className="w-4 h-4 text-primary" />
                                            </div>
                                            <div>
                                                <div className="font-medium">Contractual Developers</div>
                                                <div className="text-xs text-muted-foreground">Flexible, skilled professionals</div>
                                            </div>
                                        </div>
                                        <span className="font-bold">{contractual}</span>
                                    </div>
                                    <Slider value={contractual} onValueChange={setContractual} max={10} step={1} />
                                </div>

                                {/* Full-time */}
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <div className="p-2 bg-primary/10 rounded-lg">
                                                <Users className="w-4 h-4 text-primary" />
                                            </div>
                                            <div>
                                                <div className="font-medium">Full-time Senior Devs</div>
                                                <div className="text-xs text-muted-foreground">Dedicated, core team members</div>
                                            </div>
                                        </div>
                                        <span className="font-bold">{fulltime}</span>
                                    </div>
                                    <Slider value={fulltime} onValueChange={setFulltime} max={10} step={1} />
                                </div>

                                {/* Secure Devs */}
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <div className="p-2 bg-primary/10 rounded-lg">
                                                <Shield className="w-4 h-4 text-primary" />
                                            </div>
                                            <div>
                                                <div className="font-medium">Secure Software Devs</div>
                                                <div className="text-xs text-muted-foreground">Specialized in security & compliance</div>
                                            </div>
                                        </div>
                                        <span className="font-bold">{secure}</span>
                                    </div>
                                    <Slider value={secure} onValueChange={setSecure} max={5} step={1} />
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Summary */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            <Card className="glass-intense border-primary/20 shadow-2xl">
                                <CardHeader>
                                    <CardTitle>Estimated Cost</CardTitle>
                                    <CardDescription>Indicative project investment</CardDescription>
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

                                    <div className="flex items-center justify-between py-4 border-t border-white/10">
                                        <div className="flex items-center gap-2">
                                            <Label htmlFor="pm-mode">Project Management</Label>
                                            <span className="text-xs text-muted-foreground">(+15%)</span>
                                        </div>
                                        <Switch id="pm-mode" checked={includePM} onCheckedChange={setIncludePM} />
                                    </div>

                                    <div className="pt-6 border-t border-white/10 text-center">
                                        <div className="text-sm text-muted-foreground mb-2">Total Estimated Cost</div>
                                        <div className="text-4xl font-bold text-gradient mb-2">
                                            {formatCurrency(totalCost)}
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                            *Rough estimate based on selected parameters. Final quote may vary.
                                        </div>
                                    </div>

                                    <Button
                                        onClick={handleWhatsApp}
                                        className="w-full btn-primary font-bold py-6 text-lg rounded-xl flex items-center justify-center gap-2"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        Get Quote via WhatsApp
                                    </Button>
                                </CardContent>
                            </Card>

                            <div className="glass p-6 rounded-xl text-sm text-muted-foreground">
                                <h4 className="font-bold text-foreground mb-2">Why this model?</h4>
                                <ul className="space-y-2 list-disc pl-4">
                                    <li>Transparent pricing based on actual resource allocation</li>
                                    <li>Flexibility to mix seniority levels to optimize budget</li>
                                    <li>Pay for what you use, scale up or down as needed</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
