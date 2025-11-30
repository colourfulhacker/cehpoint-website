import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Calculator, TrendingUp, Clock, Zap, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function AIROICalculator() {
    const [industry, setIndustry] = useState("ecommerce");
    const [teamSize, setTeamSize] = useState([10]);
    const [hoursPerWeek, setHoursPerWeek] = useState([20]); // Hours spent on manual tasks per employee
    const [hourlyRate, setHourlyRate] = useState([500]); // Average hourly rate in INR (approx $6)

    const [savings, setSavings] = useState(0);
    const [efficiency, setEfficiency] = useState(0);
    const [recommendation, setRecommendation] = useState("");

    const calculateROI = () => {
        // Logic:
        // Total Manual Cost = Team Size * Hours/Week * 52 Weeks * Hourly Rate
        // AI Efficiency Gain = Varies by industry (e.g., 40-70%)
        // Potential Savings = Total Manual Cost * Efficiency Gain

        const totalManualHours = teamSize[0] * hoursPerWeek[0] * 52;
        const totalManualCost = totalManualHours * hourlyRate[0];

        let efficiencyFactor = 0.4; // Default 40%
        let rec = "General Automation";

        switch (industry) {
            case "ecommerce":
                efficiencyFactor = 0.6; // High automation potential (support, inventory)
                rec = "AI Customer Support & Inventory Automation";
                break;
            case "finance":
                efficiencyFactor = 0.5; // Doc processing, fraud detection
                rec = "Smart Document Processing & Fraud Detection";
                break;
            case "healthcare":
                efficiencyFactor = 0.45; // Admin tasks, scheduling
                rec = "Patient Scheduling & Admin Automation";
                break;
            case "marketing":
                efficiencyFactor = 0.7; // Content gen, analytics
                rec = "Generative AI Content & Predictive Analytics";
                break;
            case "manufacturing":
                efficiencyFactor = 0.35; // QA, predictive maintenance
                rec = "Predictive Maintenance & Quality Control";
                break;
            default:
                efficiencyFactor = 0.4;
                rec = "Custom Workflow Automation";
        }

        const potentialSavings = totalManualCost * efficiencyFactor;

        setSavings(Math.round(potentialSavings));
        setEfficiency(Math.round(efficiencyFactor * 100));
        setRecommendation(rec);
    };

    useEffect(() => {
        calculateROI();
    }, [industry, teamSize, hoursPerWeek, hourlyRate]);

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <Card className="glass-intense w-full max-w-4xl mx-auto overflow-hidden border-primary/20 shadow-2xl">
            <CardHeader className="bg-primary/5 border-b border-primary/10 pb-8">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/20 rounded-lg">
                        <Calculator className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl md:text-3xl font-display font-bold">
                        AI Reality Check: <span className="text-gradient">ROI Calculator</span>
                    </CardTitle>
                </div>
                <CardDescription className="text-lg">
                    See exactly how much time and money AI automation can save your business.
                </CardDescription>
            </CardHeader>

            <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Inputs */}
                    <div className="p-6 md:p-8 space-y-8 border-r border-primary/10">
                        <div className="space-y-4">
                            <Label className="text-base font-semibold">Select Your Industry</Label>
                            <Select value={industry} onValueChange={setIndustry}>
                                <SelectTrigger className="h-12 text-base">
                                    <SelectValue placeholder="Select Industry" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="ecommerce">E-commerce & Retail</SelectItem>
                                    <SelectItem value="finance">Finance & Banking</SelectItem>
                                    <SelectItem value="healthcare">Healthcare</SelectItem>
                                    <SelectItem value="marketing">Marketing & Sales</SelectItem>
                                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                                    <SelectItem value="other">Other Services</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <Label className="text-base font-semibold">Team Size (Employees)</Label>
                                <span className="text-primary font-bold">{teamSize[0]}</span>
                            </div>
                            <Slider
                                value={teamSize}
                                onValueChange={setTeamSize}
                                min={1}
                                max={100}
                                step={1}
                                className="py-4"
                            />
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <Label className="text-base font-semibold">Manual Work (Hours/Week/Emp)</Label>
                                <span className="text-primary font-bold">{hoursPerWeek[0]} hrs</span>
                            </div>
                            <Slider
                                value={hoursPerWeek}
                                onValueChange={setHoursPerWeek}
                                min={1}
                                max={40}
                                step={1}
                                className="py-4"
                            />
                            <p className="text-xs text-muted-foreground">Time spent on repetitive tasks like data entry, support, reporting, etc.</p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <Label className="text-base font-semibold">Avg. Hourly Cost (INR)</Label>
                                <span className="text-primary font-bold">₹{hourlyRate[0]}</span>
                            </div>
                            <Slider
                                value={hourlyRate}
                                onValueChange={setHourlyRate}
                                min={100}
                                max={5000}
                                step={100}
                                className="py-4"
                            />
                        </div>
                    </div>

                    {/* Results */}
                    <div className="p-6 md:p-8 bg-secondary/20 flex flex-col justify-center space-y-8">
                        <div className="text-center space-y-2">
                            <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm">Potential Annual Savings</p>
                            <div className="text-4xl md:text-5xl font-bold text-gradient animate-in fade-in zoom-in duration-500">
                                {formatCurrency(savings)}
                            </div>
                            <p className="text-sm text-green-500 font-medium flex items-center justify-center gap-1">
                                <TrendingUp className="w-4 h-4" />
                                ROI within 3-6 months
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-background/50 rounded-xl p-4 text-center border border-primary/10">
                                <Zap className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
                                <div className="text-2xl font-bold">{efficiency}%</div>
                                <div className="text-xs text-muted-foreground">Efficiency Gain</div>
                            </div>
                            <div className="bg-background/50 rounded-xl p-4 text-center border border-primary/10">
                                <Clock className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                                <div className="text-2xl font-bold">{Math.round(teamSize[0] * hoursPerWeek[0] * 52 * (efficiency / 100))}</div>
                                <div className="text-xs text-muted-foreground">Hours Saved/Year</div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                                <p className="text-xs font-semibold text-primary uppercase mb-1">Recommended Solution</p>
                                <p className="font-bold text-lg">{recommendation}</p>
                            </div>

                            <Link href="/quotation">
                                <Button className="w-full btn-primary py-6 text-lg font-bold shadow-lg hover:shadow-primary/25 transition-all">
                                    Get This Solution Now <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                            <p className="text-xs text-center text-muted-foreground">
                                Based on industry benchmarks. Actual results may vary.
                            </p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
