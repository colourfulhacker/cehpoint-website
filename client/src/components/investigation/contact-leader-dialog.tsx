import { useState, useEffect } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface Leader {
    name: string;
    role: string;
    email: string;
}

interface ContactLeaderDialogProps {
    preSelectedLeader?: string; // Email of the pre-selected leader
    allLeaders: Leader[];
}

export default function ContactLeaderDialog({ preSelectedLeader, allLeaders }: ContactLeaderDialogProps) {
    const [formData, setFormData] = useState({
        name: "",
        organization: "",
        phone: "",
        selectedEmail: preSelectedLeader || "",
        requirement: "",
    });

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (preSelectedLeader) {
            setFormData(prev => ({ ...prev, selectedEmail: preSelectedLeader }));
        }
    }, [preSelectedLeader]);

    const generateMailto = () => {
        const selectedLeaderObj = allLeaders.find(l => l.email === formData.selectedEmail);
        const leaderName = selectedLeaderObj ? selectedLeaderObj.name : "Investigation Team";
        const emailTo = formData.selectedEmail || "support@cehpoint.co.in"; // Fallback

        const subject = encodeURIComponent(`[Investigation Inquiry] - ${leaderName} - ${formData.name}`);
        const bodyValue = `Dear ${leaderName},%0D%0A%0D%0AI am contacting you via the Cehpoint Cyber Crime Platform.%0D%0A%0D%0A--- Sender Details ---%0D%0AName: ${formData.name}%0D%0AOrganization: ${formData.organization || "N/A"}%0D%0APhone: ${formData.phone || "N/A"}%0D%0ATarget Team: ${leaderName}%0D%0A%0D%0A--- Requirement ---%0D%0A${formData.requirement}%0D%0A%0D%0ARequesting your technical assessment on this matter.%0D%0A%0D%0ARegards,%0D%0A${formData.name}`;

        window.location.href = `mailto:${emailTo}?subject=${subject}&body=${bodyValue}`;
        setIsOpen(false);
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" className="w-full mt-4 border-white/10 hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/30 transition-all group">
                    <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Contact Securely
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-black/95 border-white/10 text-white backdrop-blur-xl">
                <DialogHeader>
                    <DialogTitle className="text-xl font-display font-bold">Encrypted Inquiry Channel</DialogTitle>
                    <DialogDescription className="text-muted-foreground text-sm">
                        Select the practice lead relevant to your case.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 py-4">
                    <div className="space-y-2">
                        <Label className="text-white/80">To: Practice Lead (Select)</Label>
                        <Select
                            value={formData.selectedEmail}
                            onValueChange={(val) => setFormData({ ...formData, selectedEmail: val })}
                        >
                            <SelectTrigger className="bg-white/5 border-white/10 focus:border-red-500/50">
                                <SelectValue placeholder="Select Leader" />
                            </SelectTrigger>
                            <SelectContent className="bg-black border-white/10 text-white">
                                {allLeaders.map((leader, i) => (
                                    <SelectItem key={i} value={leader.email}>
                                        {leader.name} - {leader.role}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name" className="text-white/80">Full Name *</Label>
                            <Input
                                id="name"
                                placeholder="John Doe"
                                className="bg-white/5 border-white/10 focus:border-red-500/50"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="org" className="text-white/80">Organization</Label>
                            <Input
                                id="org"
                                placeholder="Company Ltd"
                                className="bg-white/5 border-white/10 focus:border-red-500/50"
                                value={formData.organization}
                                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="phone" className="text-white/80">Phone (Optional)</Label>
                        <Input
                            id="phone"
                            placeholder="+91..."
                            className="bg-white/5 border-white/10 focus:border-red-500/50"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="req" className="text-white/80">Requirement Details *</Label>
                        <Textarea
                            id="req"
                            placeholder="Briefly describe your case or requirement..."
                            className="bg-white/5 border-white/10 focus:border-red-500/50 min-h-[100px]"
                            value={formData.requirement}
                            onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                        />
                    </div>
                </div>

                <div className="flex justify-end gap-3">
                    <Button variant="ghost" onClick={() => setIsOpen(false)} className="hover:bg-white/5">Cancel</Button>
                    <Button
                        onClick={generateMailto}
                        disabled={!formData.name || !formData.requirement || !formData.selectedEmail}
                        className="btn-primary"
                    >
                        <Send className="w-4 h-4 mr-2" />
                        Generate Secure Mail
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
