import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Bot, CheckCircle2, Clock, Cpu, TrendingUp, Briefcase } from "lucide-react";
import { automationServicesData, BusinessFunctionData, FocusArea } from "@/data/automation-services";

export default function AutomationRecommender() {
    const [step, setStep] = useState(1);
    const [businessName, setBusinessName] = useState("");
    const [selectedFunctionId, setSelectedFunctionId] = useState("");
    const [selectedFocusId, setSelectedFocusId] = useState("");

    const selectedFunction = automationServicesData.find(f => f.id === selectedFunctionId);
    const selectedFocus = selectedFunction?.focusAreas.find(f => f.id === selectedFocusId);

    const handleNextToStep2 = () => {
        if (businessName && selectedFunctionId) {
            setStep(2);
        }
    };

    const handleNextToStep3 = () => {
        if (selectedFocusId) {
            setStep(3);
        }
    };

    const handleWhatsApp = () => {
        if (!selectedFunction || !selectedFocus) return;

        const message = `Hi Cehpoint team,\n\nI just used your Automation Recommender for ${businessName}.\n\n*Business Function:* ${selectedFunction.name}\n*Focus Area:* ${selectedFocus.name}\n\nI'm interested in the 7-Day AI Sprint to implement these automations. Please get in touch!`;
        window.open(`https://wa.me/919091156095?text=${encodeURIComponent(message)}`, '_blank');
    };

    const resetForm = () => {
        setStep(1);
        setBusinessName("");
        setSelectedFunctionId("");
        setSelectedFocusId("");
    };

    return (
        <div className="w-full max-w-5xl mx-auto" id="automation-recommender">
            <Card className="glass overflow-hidden border-primary/20 shadow-[0_0_40px_-10px_rgba(139,92,246,0.3)] relative">
                {/* Progress Bar */}
                <div className="absolute top-0 left-0 h-1 bg-primary/20 w-full">
                    <div
                        className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500 ease-in-out"
                        style={{ width: `${(step / 3) * 100}%` }}
                    />
                </div>

                <CardHeader className="bg-primary/5 border-b border-primary/10 pb-8 pt-10">
                    <div className="flex items-center gap-3 mb-2 justify-center">
                        <div className="p-3 bg-primary/20 rounded-xl">
                            <Cpu className="w-8 h-8 text-primary" />
                        </div>
                        <CardTitle className="text-3xl md:text-4xl font-display font-bold text-center">
                            AI Automation <span className="text-primary">Blueprint Planner</span>
                        </CardTitle>
                    </div>
                    <CardDescription className="text-lg text-center max-w-2xl mx-auto mt-4 text-gray-200 font-medium">
                        {step === 1 && "Tell us about your business to get a custom automation blueprint."}
                        {step === 2 && `Which department is the biggest bottleneck for ${businessName}?`}
                        {step === 3 && `Your Custom Blueprint for ${businessName}`}
                    </CardDescription>
                </CardHeader>

                <CardContent className="p-6 md:p-10">
                    {/* STEP 1 */}
                    {step === 1 && (
                        <div className="space-y-8 animate-in fade-in zoom-in duration-300 max-w-2xl mx-auto">
                            <div className="space-y-4">
                                <Label htmlFor="business-name" className="text-lg">Business Name</Label>
                                <Input
                                    id="business-name"
                                    placeholder="e.g. Acme Corp"
                                    value={businessName}
                                    onChange={(e) => setBusinessName(e.target.value)}
                                    className="h-14 text-lg bg-background/50 focus:ring-primary/50"
                                />
                            </div>

                            <div className="space-y-4">
                                <Label className="text-lg">Select Business Function</Label>
                                <Select value={selectedFunctionId} onValueChange={setSelectedFunctionId}>
                                    <SelectTrigger className="h-14 text-lg bg-background/50">
                                        <SelectValue placeholder="Choose a department" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {automationServicesData.map((func) => (
                                            <SelectItem key={func.id} value={func.id} className="text-base py-3">
                                                {func.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <Button
                                onClick={handleNextToStep2}
                                disabled={!businessName || !selectedFunctionId}
                                className="w-full btn-primary h-14 text-lg mt-8"
                            >
                                Next Step <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                    )}

                    {/* STEP 2 */}
                    {step === 2 && selectedFunction && (
                        <div className="space-y-8 animate-in slide-in-from-right-8 duration-300 max-w-3xl mx-auto">
                            <div className="flex flex-wrap justify-center gap-4">
                                {selectedFunction.focusAreas.map((focus) => (
                                    <div
                                        key={focus.id}
                                        onClick={() => setSelectedFocusId(focus.id)}
                                        className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 flex flex-col items-center text-center gap-4 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] max-w-[280px] ${selectedFocusId === focus.id
                                            ? "border-primary bg-primary/10 shadow-[0_0_20px_#8b5cf633]"
                                            : "border-primary/20 bg-background/30 hover:border-primary/50 hover:bg-primary/5"
                                            }`}
                                    >
                                        <Briefcase className={`w-10 h-10 ${selectedFocusId === focus.id ? "text-primary" : "text-gray-400"}`} />
                                        <h3 className={`font-bold text-lg md:text-xl ${selectedFocusId === focus.id ? "text-white" : "text-gray-200"}`}>{focus.name}</h3>
                                    </div>
                                ))}
                            </div>

                            <div className="flex gap-4 pt-8">
                                <Button variant="outline" onClick={() => setStep(1)} className="h-14 flex-1">
                                    Back
                                </Button>
                                <Button
                                    onClick={handleNextToStep3}
                                    disabled={!selectedFocusId}
                                    className="btn-primary h-14 flex-[2] text-lg"
                                >
                                    Generate Blueprint <Cpu className="ml-2 w-5 h-5" />
                                </Button>
                            </div>
                        </div>
                    )}

                    {/* STEP 3 */}
                    {step === 3 && selectedFocus && selectedFunction && (
                        <div className="animate-in slide-in-from-bottom-8 duration-500">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                {/* Left Column: The Plan */}
                                <div className="lg:col-span-2 space-y-6">
                                    <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 md:p-8">
                                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                            <Bot className="text-primary w-6 h-6" /> Recommended Automations
                                        </h3>

                                        <div className="space-y-8">
                                            {selectedFocus.automations.map((automation, idx) => (
                                                <div key={idx} className="bg-background/80 rounded-xl p-5 border border-white/5 relative overflow-hidden">
                                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent"></div>
                                                    <h4 className="text-xl font-bold mb-4 ml-4">{automation.name}</h4>

                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-4">
                                                        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                                                            <span className="text-xs font-bold text-destructive uppercase tracking-wider mb-2 block">Before AI (Manual)</span>
                                                            <p className="text-sm text-foreground/80">{automation.beforeAI}</p>
                                                        </div>
                                                        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                                                            <span className="text-xs font-bold text-green-500 uppercase tracking-wider mb-2 block">After AI (Automated)</span>
                                                            <p className="text-sm text-foreground/80">{automation.afterAI}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column: ROI & Action */}
                                <div className="space-y-6">
                                    <div className="glass-card p-6 border-t-4 border-t-primary">
                                        <h3 className="text-xl font-bold mb-6">Impact Analysis</h3>

                                        <div className="space-y-6">
                                            <div>
                                                <p className="text-sm text-gray-200 font-bold flex items-center gap-2 mb-1">
                                                    <Clock className="w-4 h-4 text-primary" /> Estimated Time Saved
                                                </p>
                                                <p className="text-2xl font-bold text-primary">{selectedFocus.timeSaved}</p>
                                            </div>

                                            <div>
                                                <p className="text-sm text-gray-200 font-bold flex items-center gap-2 mb-1">
                                                    <TrendingUp className="w-4 h-4 text-primary" /> Estimated Setup Cost
                                                </p>
                                                <p className="text-2xl font-bold text-white">{selectedFocus.costEstimate}</p>
                                                <p className="text-xs text-primary font-bold mt-1">One-time setup. Predictable ROI.</p>
                                            </div>

                                            <div className="pt-4 border-t border-white/10">
                                                <p className="text-sm text-gray-300 font-bold mb-2">Business Outcome</p>
                                                <p className="text-sm leading-relaxed flex items-start gap-2 text-white/90">
                                                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                                    <span>{selectedFocus.businessImpact}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <Button
                                        onClick={handleWhatsApp}
                                        className="w-full btn-primary h-16 text-lg font-bold shadow-lg shadow-primary/25 hover:scale-105 transition-transform"
                                    >
                                        Start 7-Day Sprint
                                    </Button>

                                    <Button
                                        variant="ghost"
                                        onClick={resetForm}
                                        className="w-full text-gray-300 hover:text-white font-semibold"
                                    >
                                        Recalculate for a different focus
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
