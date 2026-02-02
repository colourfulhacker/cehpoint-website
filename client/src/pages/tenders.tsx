import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, FileText, Briefcase, Calendar, Shield, Building2, User } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function TendersPage() {
    const tenders = [
        {
            id: "CEH-TND-2026-001",
            title: "Startup Cybersecurity Baseline Software",
            budget: "₹1,00,000",
            description: "Development of a standard cybersecurity software suite for early-stage startups. Goal: Provide affordable, baseline protection for new ventures.",
            eligibility: "Freelancers, Individual Developers",
            deadline: "Open until filled",
            status: "Active"
        },
        {
            id: "CEH-TND-2026-002",
            title: "Cybercrime Investigation & Tracking Tool",
            budget: "₹5,00,000",
            description: "Software solution for Cyber Crime Police Stations. Features: Case logging, digital evidence tracking, and investigation workflows.",
            eligibility: "IT Agencies, Cyber Security Firms",
            deadline: "Open until filled",
            status: "Active"
        },
        {
            id: "CEH-TND-2026-003",
            title: "Government Tech & Governance Infrastructure",
            budget: "₹10,00,000",
            description: "One-Stop Technology Solution for Government Governance. Goal: Enable better administration and technology adoption for government bodies.",
            eligibility: "Specialized Tech Companies, Infra Providers",
            deadline: "Upcoming",
            status: "Active"
        }
    ];

    const [selectedTender, setSelectedTender] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        summary: ""
    });

    const handleApply = (tenderId: string) => {
        setSelectedTender(tenderId);
        // Reset form or pre-fill if needed
        setFormData(prev => ({ ...prev, summary: `I am interested in applying for Tender ID: ${tenderId}` }));
    };

    const handleSendMail = () => {
        if (!selectedTender) return;

        const subject = encodeURIComponent(`Tender Application: ${selectedTender} - ${formData.company || formData.name}`);
        const body = encodeURIComponent(
            `Dear Cehpoint Tender Committee,

I am submitting my expression of interest for the following tender:

Tender ID: ${selectedTender}

APPLICANT DETAILS:
Name: ${formData.name}
Company/Agency: ${formData.company || "N/A (Individual)"}
Email: ${formData.email}
Phone: ${formData.phone}

PROPOSAL SUMMARY:
${formData.summary}

Please find attached my detailed portfolio and technical proposal in the subsequent email (if applicable).

Sincerely,
${formData.name}`
        );

        window.location.href = `mailto:tenders@cehpoint.co.in?cc=jit.banerjee@cehpoint.co.in&subject=${subject}&body=${body}`;
    };

    return (
        <>
            <Helmet>
                <title>Official Govt Tenders | Cehpoint</title>
                <meta name="description" content="Official Government & Private Sector Tenders issued by Cehpoint. Apply for Cybersecurity and GovTech contracts." />
            </Helmet>

            {/* Dark Professional Background */}
            <div className="min-h-screen bg-slate-950 text-slate-100 pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Official Header */}
                    <div className="mb-12 border-b border-slate-800 pb-8">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div>
                                <h1 className="text-4xl font-display font-bold text-white uppercase tracking-wider flex items-center gap-3">
                                    <Shield className="w-10 h-10 text-primary" />
                                    Notice Inviting Tenders
                                </h1>
                                <p className="text-slate-400 mt-2 text-lg font-light">
                                    Official Procurement Portal & Contract Listings (Ref: CEH-GOVT-2026)
                                </p>
                            </div>
                            <div className="text-right hidden md:block">
                                <div className="text-sm text-slate-500 uppercase tracking-widest">Authority</div>
                                <div className="font-bold text-xl text-white">Cehpoint Technical Board</div>
                            </div>
                        </div>
                    </div>

                    {/* Tenders Grid/Table */}
                    <div className="space-y-6">
                        {tenders.map((tender) => (
                            <Card key={tender.id} className="bg-slate-900/50 border-slate-800 hover:border-primary/50 transition-colors">
                                <CardContent className="p-6 md:p-8">
                                    <div className="flex flex-col lg:flex-row gap-6 lg:items-center justify-between">

                                        {/* Left: Info */}
                                        <div className="flex-1 space-y-4">
                                            <div className="flex items-center gap-3">
                                                <span className="font-mono text-xs px-2 py-1 rounded bg-slate-800 text-primary border border-primary/20">
                                                    {tender.id}
                                                </span>
                                                <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${tender.status === 'Active' ? 'bg-green-900/30 text-green-400 border border-green-800' : 'bg-yellow-900/30 text-yellow-400'
                                                    }`}>
                                                    {tender.status}
                                                </span>
                                            </div>

                                            <div>
                                                <h3 className="text-2xl font-bold text-white mb-2">{tender.title}</h3>
                                                <p className="text-slate-400 leading-relaxed max-w-3xl">
                                                    {tender.description}
                                                </p>
                                            </div>

                                            <div className="flex flex-wrap gap-4 text-sm text-slate-300 pt-2">
                                                <div className="flex items-center gap-2 bg-slate-800/50 px-3 py-1.5 rounded">
                                                    <Briefcase className="w-4 h-4 text-primary" />
                                                    Eligibility: <span className="text-white">{tender.eligibility}</span>
                                                </div>
                                                <div className="flex items-center gap-2 bg-slate-800/50 px-3 py-1.5 rounded">
                                                    <Calendar className="w-4 h-4 text-primary" />
                                                    Deadline: <span className="text-white">{tender.deadline}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right: Budget & Action */}
                                        <div className="flex flex-col sm:flex-row lg:flex-col gap-4 items-start lg:items-end lg:min-w-[200px] border-t lg:border-t-0 lg:border-l border-slate-800 pt-4 lg:pt-0 lg:pl-6">
                                            <div className="text-left lg:text-right">
                                                <div className="text-sm text-slate-500 uppercase">Estimated Budget</div>
                                                <div className="text-2xl font-bold text-white font-mono">{tender.budget}</div>
                                            </div>

                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <Button
                                                        className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-6"
                                                        onClick={() => handleApply(tender.id)}
                                                    >
                                                        Apply Now
                                                    </Button>
                                                </DialogTrigger>
                                                <DialogContent className="bg-slate-900 border-slate-800 text-slate-100 sm:max-w-lg">
                                                    <DialogHeader>
                                                        <DialogTitle className="text-xl font-bold text-white flex items-center gap-2">
                                                            <FileText className="w-5 h-5 text-primary" />
                                                            Apply for {tender.id}
                                                        </DialogTitle>
                                                        <DialogDescription className="text-slate-400">
                                                            Submit your interest. clicking 'Generate Email' will open your mail app.
                                                        </DialogDescription>
                                                    </DialogHeader>

                                                    <div className="space-y-4 py-4">
                                                        <div className="grid grid-cols-2 gap-4">
                                                            <div className="space-y-2">
                                                                <Label>Full Name</Label>
                                                                <Input
                                                                    placeholder="John Doe"
                                                                    className="bg-slate-950 border-slate-800 focus:border-primary"
                                                                    value={formData.name}
                                                                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                                                />
                                                            </div>
                                                            <div className="space-y-2">
                                                                <Label>Company (Optional)</Label>
                                                                <Input
                                                                    placeholder="Tech Solutions Ltd"
                                                                    className="bg-slate-950 border-slate-800 focus:border-primary"
                                                                    value={formData.company}
                                                                    onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="space-y-2">
                                                            <Label>Email Address</Label>
                                                            <Input
                                                                type="email"
                                                                placeholder="contractor@example.com"
                                                                className="bg-slate-950 border-slate-800 focus:border-primary"
                                                                value={formData.email}
                                                                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                                            />
                                                        </div>

                                                        <div className="space-y-2">
                                                            <Label>Phone Number</Label>
                                                            <Input
                                                                placeholder="+91 98765 43210"
                                                                className="bg-slate-950 border-slate-800 focus:border-primary"
                                                                value={formData.phone}
                                                                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                                                            />
                                                        </div>

                                                        <div className="space-y-2">
                                                            <Label>Proposal Short Summary</Label>
                                                            <Textarea
                                                                placeholder="Briefly describe your relevant experience..."
                                                                className="bg-slate-950 border-slate-800 focus:border-primary min-h-[100px]"
                                                                value={formData.summary}
                                                                onChange={(e) => setFormData(prev => ({ ...prev, summary: e.target.value }))}
                                                            />
                                                        </div>

                                                        <Button
                                                            className="w-full btn-primary font-bold text-lg py-6"
                                                            onClick={handleSendMail}
                                                        >
                                                            <Mail className="w-5 h-5 mr-2" />
                                                            Generate Email
                                                        </Button>
                                                        <p className="text-xs text-center text-slate-500">
                                                            Submitting will open your default email client with a pre-filled draft.
                                                        </p>
                                                    </div>
                                                </DialogContent>
                                            </Dialog>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Footer Info */}
                    <div className="mt-12 grid md:grid-cols-2 gap-8 text-slate-400 text-sm border-t border-slate-800 pt-8">
                        <div>
                            <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                                <User className="w-4 h-4" />
                                Submission Contact
                            </h4>
                            <p><strong>Primary:</strong> tenders@cehpoint.co.in</p>
                            <p><strong>Urgent Inquiries:</strong> jit.banerjee@cehpoint.co.in</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                                <Building2 className="w-4 h-4" />
                                Office Address
                            </h4>
                            <p>Cehpoint Agencies,</p>
                            <p>Kolkata, West Bengal, India.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
