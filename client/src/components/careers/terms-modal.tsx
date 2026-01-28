"use client";

import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertTriangle, Shield, CheckCircle2, Ban, XCircle } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface TermsAndConditionsModalProps {
    triggerText?: string;
    className?: string;
    onAgree?: () => void;
    children?: React.ReactNode;
}

export function TermsAndConditionsModal({
    triggerText = "View Hiring Policy",
    className,
    onAgree,
    children
}: TermsAndConditionsModalProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [agreed, setAgreed] = useState(false);

    const handleAgree = () => {
        if (agreed) {
            setIsOpen(false);
            if (onAgree) onAgree();
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                {children || <Button variant="outline" className={className}>{triggerText}</Button>}
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[85vh] flex flex-col bg-background border-primary/20">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold flex items-center gap-2 text-primary">
                        <Shield className="w-6 h-6" />
                        Cehpoint Hiring Policy & Terms
                    </DialogTitle>
                </DialogHeader>

                <ScrollArea className="flex-1 pr-4 border rounded-md p-4 bg-secondary/5">
                    <div className="space-y-6 text-foreground/90">

                        {/* Disclaimer Section */}
                        <div className="bg-red-950/20 border border-red-500/20 p-4 rounded-lg">
                            <h3 className="flex items-center gap-2 font-bold text-red-500 mb-2">
                                <AlertTriangle className="w-5 h-5" />
                                Real-World Evaluation Model
                            </h3>
                            <p className="text-sm leading-relaxed">
                                Cehpoint follows a <strong>real-world, output-driven evaluation model</strong>.
                                If accountability feels like exploitation, this is not the right place for you.
                                If responsibility excites you, welcome.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Our Commitment to Quality</h3>
                            <p className="text-sm">
                                We win clients through hard work, long sales cycles, trust, and delivery promises.
                                <strong> Not shortcuts. Not cheating. Not fake skills.</strong>
                            </p>
                        </div>

                        {/* The "Bad Company" Logic - Rephrased for Modal */}
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-3">
                                <h4 className="font-semibold text-red-500 flex items-center gap-2">
                                    <Ban className="w-4 h-4" />
                                    Zero Tolerance For:
                                </h4>
                                <ul className="text-sm space-y-2 text-muted-foreground">
                                    <li className="flex gap-2">
                                        <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                                        Cheating during interviews or bypassing AI screening.
                                    </li>
                                    <li className="flex gap-2">
                                        <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                                        Misrepresenting capabilities or fake experience.
                                    </li>
                                    <li className="flex gap-2">
                                        <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                                        Accepting client work without the skill to deliver.
                                    </li>
                                    <li className="flex gap-2">
                                        <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                                        Excuses instead of outcomes.
                                    </li>
                                </ul>
                            </div>

                            <div className="space-y-3">
                                <h4 className="font-semibold text-primary flex items-center gap-2">
                                    <Shield className="w-4 h-4" />
                                    Consequences:
                                </h4>
                                <ul className="text-sm space-y-2 text-muted-foreground">
                                    <li className="flex gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                        Declined or reduced payments.
                                    </li>
                                    <li className="flex gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                        Immediate cancellation of engagement.
                                    </li>
                                    <li className="flex gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                        Withdrawal of benefits/certificates.
                                    </li>
                                    <li className="flex gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                        We protect our clients first, always.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                            <h4 className="font-bold text-sm mb-2">Payment Transparency</h4>
                            <p className="text-sm">
                                If an employee or intern fails to deliver committed work or meet quality stands,
                                we reserve the right to adjust or decline payment for that specific deliverable.
                            </p>
                        </div>

                    </div>
                </ScrollArea>

                <DialogFooter className="flex-col sm:flex-row gap-4 items-center sm:justify-between pt-4 border-t border-border mt-2">
                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id="terms"
                            checked={agreed}
                            onCheckedChange={(checked) => setAgreed(checked as boolean)}
                        />
                        <Label htmlFor="terms" className="text-sm cursor-pointer">
                            I have read and agree to these terms
                        </Label>
                    </div>
                    <Button onClick={handleAgree} disabled={!agreed} className="w-full sm:w-auto">
                        Acknowledge & Continue
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
