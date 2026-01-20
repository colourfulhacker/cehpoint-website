import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Check, ChevronRight, Lock, Loader2, Link, Shield } from "lucide-react";

const formSchema = z.object({
    clientType: z.string().min(1, "Required"),
    incidentType: z.string().min(1, "Required"),
    description: z.string().min(20, "Please provide more detail"),
    urgency: z.string().min(1, "Required"),
    jurisdiction: z.string().min(1, "Required"),
    email: z.string().email("Invalid email"),
    ndaConsent: z.boolean().refine(val => val === true, "Must agree to NDA terms")
});

const steps = ["Client Profile", "Incident Details", "Urgency & Scope", "Secure Handshake"];

export default function IntakeForm() {
    const [step, setStep] = useState(0);
    const [caseId, setCaseId] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPrivacy, setShowPrivacy] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            ndaConsent: false
        }
    });

    const nextStep = async () => {
        // Validate current step fields before moving (simplified for demo)
        setStep(prev => Math.min(prev + 1, steps.length - 1));
    };

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        setIsSubmitting(true);
        // Simulate backend processing
        setTimeout(() => {
            const newCaseId = "CASE-" + Math.random().toString(36).substr(2, 9).toUpperCase();
            setCaseId(newCaseId);
            setIsSubmitting(false);
        }, 2000);
    };

    const handleWhatsApp = () => {
        if (!caseId) return;
        const data = form.getValues();
        const msg = `*New Case Inquiry: ${caseId}*\n\n*Client Type:* ${data.clientType}\n*Incident:* ${data.incidentType}\n*Urgency:* ${data.urgency}\n*Jurisdiction:* ${data.jurisdiction}\n\n*Description:*\n${data.description}\n\n*Contact Email:* ${data.email}\n\n*NDA Status:* Signed via Portal`;
        window.open(`https://wa.me/917319116415?text=${encodeURIComponent(msg)}`, '_blank');
    };

    if (caseId) {
        return (
            <Card className="max-w-xl mx-auto border-emerald-500/50 bg-emerald-950/10">
                <CardHeader className="text-center">
                    <div className="mx-auto w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4">
                        <Check className="w-8 h-8 text-emerald-500" />
                    </div>
                    <CardTitle className="text-2xl">Inquiry Generated</CardTitle>
                    <CardDescription>Your case ID has been generated securely.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 text-center">
                    <div className="p-4 bg-background rounded-lg border border-white/10 font-mono text-xl">
                        {caseId}
                    </div>
                    <p className="text-muted-foreground text-sm">
                        An intake specialist has been notified. Please retain this Case ID for all future correspondence.
                    </p>
                    <Button onClick={handleWhatsApp} className="w-full btn-primary h-12 gap-2 text-lg">
                        Contact Investigation Lead
                        <ChevronRight className="w-4 h-4" />
                    </Button>
                </CardContent>
            </Card>
        )
    }

    return (
        <Card className="max-w-2xl mx-auto glass border-white/10">
            <CardHeader>
                <div className="flex justify-between items-center mb-6">
                    {steps.map((s, i) => (
                        <div key={i} className={`flex items-center gap-2 ${i <= step ? 'text-primary' : 'text-muted-foreground/30'}`}>
                            <div className={`
                        w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border
                        ${i <= step ? 'border-primary bg-primary/20' : 'border-white/10 bg-white/5'}
                    `}>
                                {i + 1}
                            </div>
                            <span className="hidden md:block text-xs uppercase tracking-wider font-semibold">{s}</span>
                        </div>
                    ))}
                </div>
                <CardTitle>Secure Investigation Request</CardTitle>
                <CardDescription>All information entered is encrypted and protected under our pre-inquiry NDA protocol.</CardDescription>
            </CardHeader>

            <CardContent>
                <div className="space-y-6">
                    {step === 0 && (
                        <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                            <div className="space-y-2">
                                <Label>I am representing...</Label>
                                <Select onValueChange={(v) => form.setValue("clientType", v)}>
                                    <SelectTrigger className="h-12">
                                        <SelectValue placeholder="Select Client Type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Individual">Individual / Victim</SelectItem>
                                        <SelectItem value="Corporate">Corporate / Enterprise</SelectItem>
                                        <SelectItem value="Government">Government / Law Enforcement</SelectItem>
                                        <SelectItem value="Legal">Law Firm / Legal Counsel</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    )}

                    {step === 1 && (
                        <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                            <div className="space-y-2">
                                <Label>Incident Category</Label>
                                <Select onValueChange={(v) => form.setValue("incidentType", v)}>
                                    <SelectTrigger className="h-12">
                                        <SelectValue placeholder="Select Incident Type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Financial Fraud">Financial Fraud / Scam</SelectItem>
                                        <SelectItem value="Ransomware">Ransomware / Hack</SelectItem>
                                        <SelectItem value="Data Breach">Data Breach / Leak</SelectItem>
                                        <SelectItem value="Crypto">Crypto Asset Theft</SelectItem>
                                        <SelectItem value="Harassment">Digital Harassment / Blackmail</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label>Brief Description</Label>
                                <Textarea
                                    placeholder="Describe the incident briefly (no sensitive data yet)..."
                                    className="min-h-[120px] bg-white/5"
                                    {...form.register("description")}
                                />
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label>Urgency</Label>
                                    <Select onValueChange={(v) => form.setValue("urgency", v)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select Level" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Standard">Standard (24-48 hrs)</SelectItem>
                                            <SelectItem value="Priority">Priority (Same Day)</SelectItem>
                                            <SelectItem value="Emergency">Emergency (Immediate)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label>Jurisdiction</Label>
                                    <Select onValueChange={(v) => form.setValue("jurisdiction", v)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Location" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="India">India</SelectItem>
                                            <SelectItem value="International">International</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                            <div className="p-4 bg-yellow-950/20 border border-yellow-500/20 rounded-lg text-sm text-yellow-200/80 leading-relaxed flex gap-3">
                                <Lock className="w-5 h-5 shrink-0 mt-0.5" />
                                <div>
                                    <strong>Confidentiality Binding:</strong> By proceeding, you agree that Cehpoint is authorized to receive this initial query. A formal NDA will be executed prior to any data exchange. This transmission is 256-bit encrypted.
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label>Official Email Address</Label>
                                <Input
                                    {...form.register("email")}
                                    placeholder="name@organization.com"
                                    className="h-12 bg-white/5"
                                />
                            </div>

                            <div className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="nda"
                                    className="w-4 h-4 rounded border-gray-600 bg-transparent"
                                    {...form.register("ndaConsent")}
                                />
                                <label htmlFor="nda" className="text-sm text-gray-400 cursor-pointer select-none">
                                    I accept the{" "}
                                    <span
                                        className="text-primary underline hover:text-rose-400 transition-colors"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            setShowPrivacy(true);
                                        }}
                                    >
                                        Privacy Policy
                                    </span>{" "}
                                    and consent to initial assessment.
                                </label>
                            </div>
                        </div>
                    )}
                </div>
            </CardContent>

            <Dialog open={showPrivacy} onOpenChange={setShowPrivacy}>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                            <Shield className="w-5 h-5 text-primary" />
                            Privacy & Data Protection Policy
                        </DialogTitle>
                        <DialogDescription>
                            Protocol for handling sensitive investigative data.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 text-sm text-muted-foreground mt-2">
                        <div className="p-3 bg-secondary/10 rounded-lg border border-secondary/20">
                            <h4 className="font-semibold text-foreground mb-1">1. Data Encryption & Storage</h4>
                            <p>All data submitted via this portal is encrypted using AES-256 standards. We operate on a customized zero-knowledge architecture where only assigned case investigators hold decryption keys.</p>
                        </div>

                        <div>
                            <h4 className="font-semibold text-foreground mb-1">2. Non-Disclosure (NDA)</h4>
                            <p>Cehpoint binds itself to strict confidentiality. Your identity, case details, and evidence are never shared with third parties, law enforcement, or public entities without your explicit written consent or a court order.</p>
                        </div>

                        <div>
                            <h4 className="font-semibold text-foreground mb-1">3. Data Retention</h4>
                            <p>Case data is retained for the duration of the active investigation. Upon case closure, all sensitive digital evidence is securely wiped (DoD 5220.22-M standard) after 30 days unless a longer retention period is requested for legal proceedings.</p>
                        </div>

                        <div>
                            <h4 className="font-semibold text-foreground mb-1">4. Intelligence Gathering</h4>
                            <p>Our OSINT and dark web monitoring tools allow us to gather intelligence passively. We do not engage in offensive hacking or unauthorized access to systems in violation of the IT Act, 2000.</p>
                        </div>

                        <div className="pt-4 border-t border-border">
                            <p className="text-xs">By checking the box, you acknowledge that you are the authorized owner or legal representative of the entities involved in this investigation request.</p>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

            <CardFooter className="flex justify-between border-t border-white/5 pt-6">
                <Button
                    variant="ghost"
                    onClick={() => setStep(s => Math.max(0, s - 1))}
                    disabled={step === 0}
                >
                    Back
                </Button>
                {step < steps.length - 1 ? (
                    <Button onClick={nextStep} className="btn-primary">
                        Next Step
                        <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                ) : (
                    <Button
                        onClick={form.handleSubmit(onSubmit)}
                        disabled={isSubmitting}
                        className="btn-primary w-40"
                    >
                        {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : "Submit Securely"}
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
}
