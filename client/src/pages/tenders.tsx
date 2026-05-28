import SEO from "@/components/seo";
import BreadcrumbSchema from "@/components/seo/breadcrumb-schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
    Mail, 
    FileText, 
    Briefcase, 
    Calendar, 
    Shield, 
    Building2, 
    User, 
    CheckCircle2, 
    Clock, 
    ArrowRight, 
    Search, 
    Filter, 
    Sparkles, 
    Copy, 
    Check, 
    FileSpreadsheet, 
    Lock, 
    AlertCircle, 
    HelpCircle, 
    Phone, 
    ArrowUpRight, 
    Upload, 
    TrendingUp, 
    Award,
    RefreshCw,
    Eye
} from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";

const ALL_TENDERS = [
    {
        id: "CEH-TND-2026-001",
        title: "Startup Cybersecurity Baseline Utility Development",
        category: "Cybersecurity",
        budget: "₹1,50,000",
        description: "Development and licensing of an all-in-one cybersecurity audit and protection utility toolkit, tailored for early-stage startups and small businesses to monitor baseline compliance.",
        eligibility: "Startups, Independent Developers, Cyber Security Researchers",
        deadline: "2026-06-30",
        publishedDate: "2026-05-15",
        status: "Active",
        docName: "CEH-TND-2026-001-RFP"
    },
    {
        id: "CEH-TND-2026-002",
        title: "Cybercrime Case Investigation & Evidence Logging Tool",
        category: "Forensics",
        budget: "₹5,00,000",
        description: "Design and deployment of a cyber forensics system for case management, chain-of-custody tracking, and threat signature cataloging, for state law enforcement integration.",
        eligibility: "Empaneled Security Firms, Certified Forensic Software Agencies",
        deadline: "2026-07-15",
        publishedDate: "2026-05-20",
        status: "Active",
        docName: "CEH-TND-2026-002-RFP"
    },
    {
        id: "CEH-TND-2026-003",
        title: "AI-Powered Real-time Anomaly Detection SIEM Agent",
        category: "Cybersecurity",
        budget: "₹8,50,000",
        description: "Development of a lightweight agent that inspects network flow logs and predicts intrusion attempts using a pre-trained ML model, integrating with major SIEM frameworks.",
        eligibility: "R&D Labs, ISO 27001 Certified Cybersecurity Firms",
        deadline: "2026-08-01",
        publishedDate: "2026-05-24",
        status: "Active",
        docName: "CEH-TND-2026-003-RFP"
    },
    {
        id: "CEH-TND-2026-004",
        title: "State Municipal Grievance & Public Administration System",
        category: "GovTech",
        budget: "₹12,00,000",
        description: "A centralized, scalable citizen grievance redressal and workflow automation portal for district governance bodies, featuring digital signature validations.",
        eligibility: "Registered Software Development Corporations with GovTech experience",
        deadline: "2026-06-15",
        publishedDate: "2026-05-01",
        status: "Under Evaluation",
        docName: "CEH-TND-2026-004-RFP"
    },
    {
        id: "CEH-TND-2026-005",
        title: "Unified Secure Enterprise Multi-Cloud Migration",
        category: "Infrastructure",
        budget: "₹18,00,000",
        description: "Comprehensive planning, security configuration, and automated database migration of Cehpoint's internal databases to AWS/Azure multi-region clusters.",
        eligibility: "Cloud Managed Service Partners (AWS/Azure Certified Gold Competency)",
        deadline: "2026-04-20",
        publishedDate: "2026-03-01",
        status: "Awarded",
        docName: "CEH-TND-2026-005-Award-Notice"
    }
];

const TENDER_DETAILS: Record<string, { scope: string[]; technical: string[]; milestones: string[] }> = {
    "CEH-TND-2026-001": {
        scope: [
            "Develop local threat detection auditing agent for macOS and Windows systems.",
            "Implement automated port vulnerability and compliance scanning scripts.",
            "Create a local React / HTML5 dashboard visualizing status levels.",
            "Export raw audit summaries in portable JSON and PDF formats."
        ],
        technical: [
            "Rust or Go compiler runtime for execution speed.",
            "Tailwind CSS / React client dashboard.",
            "SQLite database structure compatibility."
        ],
        milestones: [
            "Milestone 1 (20%): System Architecture & Design Signoff",
            "Milestone 2 (50%): Agent build with scanner capabilities",
            "Milestone 3 (30%): Interface integration & Final acceptance testing"
        ]
    },
    "CEH-TND-2026-002": {
        scope: [
            "Build secure dashboard logs for cybercrime units to track threat logs.",
            "Develop cryptographic forensic evidence chain-of-custody hashes (SHA-256).",
            "Integrate search algorithms to cross-reference suspect IP footprints.",
            "Build automated PDF dossier exports for legal administration."
        ],
        technical: [
            "Node.js or Python backend frameworks.",
            "Secure Postgres database with strict logging schemas.",
            "AES-256 end-to-end data encryption."
        ],
        milestones: [
            "Milestone 1 (30%): Database setup & logger modules",
            "Milestone 2 (40%): Search indexes, notification engine, and dossier export",
            "Milestone 3 (30%): Security auditing & Production rollout"
        ]
    },
    "CEH-TND-2026-003": {
        scope: [
            "Train local network flow log anomaly detection models.",
            "Build libpcap packet-sniffing service module.",
            "Implement SIEM forwarding pipelines via standard CEF formatting.",
            "Optimize packet loop latency under 50ms threshold."
        ],
        technical: [
            "Python / PyTorch for ML model development.",
            "C++ or Go runtime binaries for packet loop monitoring.",
            "Splunk or ElasticSearch forwarding pipelines."
        ],
        milestones: [
            "Milestone 1 (30%): Model training & PCAP streaming utility",
            "Milestone 2 (40%): Real-time analysis module & Alert generation hooks",
            "Milestone 3 (30%): SIEM pipeline validation & Performance profiling"
        ]
    },
    "CEH-TND-2026-004": {
        scope: [
            "Design citizen-facing complaint logs and registration portal.",
            "Build administrative ticket-handling and routing workflow panels.",
            "Integrate official digital signature verifying systems (eSign).",
            "Implement municipality analytics graphs."
        ],
        technical: [
            "React / Next.js client layers.",
            "FastAPI / Python middleware APIs.",
            "SSL/TLS database authentication."
        ],
        milestones: [
            "Milestone 1 (20%): Prototype UI, citizen dashboard, and grievance forms",
            "Milestone 2 (50%): Workflow automation panel, department logins, and Aadhaar eSign modules",
            "Milestone 3 (30%): Integration with localized SMS/Email gateways & Production rollout"
        ]
    },
    "CEH-TND-2026-005": {
        scope: [
            "Perform security log assessments on current virtual infrastructure.",
            "Draft cloud failover schemas and active back-ups.",
            "Migrate active databases (12TB+) to managed Aurora / Cosmos DB clusters.",
            "Enforce strict identity management governance."
        ],
        technical: [
            "Terraform for Infrastructure as Code config.",
            "AWS Database Migration Service setup.",
            "Multi-region Cloud provider setup."
        ],
        milestones: [
            "Milestone 1 (30%): Cloud Assessment & Infrastructure design plans",
            "Milestone 2 (50%): Workload packaging, deployment scripting, & Database pilot migration",
            "Milestone 3 (20%): Multi-region cutover & security governance sign-off"
        ]
    }
};

const RESOURCES = [
    {
        name: "General Procurement Guidelines 2026",
        description: "Comprehensive instructions, eligibility criteria, and general terms & conditions for bidding.",
        format: "PDF Request",
        size: "1.8 MB",
        icon: FileText
    },
    {
        name: "Technical Bid Template Form A",
        description: "Mandatory format for writing and submitting technical proposals, design sheets, and credentials.",
        format: "DOCX Request",
        size: "420 KB",
        icon: Briefcase
    },
    {
        name: "Financial Bid Price Schedule Form B",
        description: "Spreadsheet template for itemized pricing, delivery schedules, and licensing details.",
        format: "XLSX Request",
        size: "350 KB",
        icon: FileSpreadsheet
    },
    {
        name: "Vendor Registration Form C",
        description: "Form required for onboarding as an empaneled vendor under Cehpoint procurement policies.",
        format: "PDF Request",
        size: "1.2 MB",
        icon: Building2
    }
];

const STEPS = [
    {
        num: "01",
        title: "Review RFP Details",
        desc: "Select an active notice, review guidelines, and inspect scopes and technical prerequisites."
    },
    {
        num: "02",
        title: "Technical Drafting",
        desc: "Outline your tech architecture, team expertise, compliance metrics, and timelines."
    },
    {
        num: "03",
        title: "Financial Planning",
        desc: "Estimate cost schedules, licensing models, and deployment charges in Form B."
    },
    {
        num: "04",
        title: "Portal Registration",
        desc: "Register metadata details and initialize proposal mail generation."
    },
    {
        num: "05",
        title: "Attach & Transmit",
        desc: "Manually attach Form A & B documents inside your email client and send."
    }
];

const FAQS = [
    {
        q: "Who is eligible to participate in Cehpoint Tenders?",
        a: "Eligibility varies per project. Startup cybersecurity modules welcome freelancers and MSMEs, whereas municipal infrastructure integrations require registered corporate bodies, ISO certifications, and previous public sector deployments."
    },
    {
        q: "How are technical and commercial bids weighted?",
        a: "We adhere strictly to a Quality and Cost Based Selection (QCBS) mechanism. Typically, Technical Proposals carry a 70% weightage, and Commercial bids carry 30%. Only bids crossing the 75% technical score qualify for financial evaluation."
    },
    {
        q: "What is the procedure for pre-bid queries?",
        a: "Bidders can submit pre-bid clarification requests to tenders@cehpoint.co.in. Requests must include the Tender ID and be submitted at least 7 days before the official deadline. Consolidated FAQs will be published online."
    },
    {
        q: "Are joint ventures or consortia allowed to bid?",
        a: "Yes, consortia are permitted for high-budget integration projects (valued above ₹10,00,000), provided a clear lead member is designated and the consortium agreement is attached with the bid documentation."
    },
    {
        q: "How are tender payments and milestones structured?",
        a: "Standard contracts operate on a milestone delivery schedule (e.g., 20% advance upon signup, 40% upon beta release, 30% upon final acceptance, and 10% after support retention period) as outlined in each RFP."
    }
];

export default function TendersPage() {
    const { toast } = useToast();
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedStatus, setSelectedStatus] = useState("All");
    
    const [selectedTender, setSelectedTender] = useState<string | null>(null);
    const [viewingTenderId, setViewingTenderId] = useState<string | null>(null);
    const [copiedId, setCopiedId] = useState<string | null>(null);
    
    // Form submission state
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        bidValue: "",
        summary: ""
    });
    
    // File upload mock simulation (Actual attachments handled in email mailbox)
    const [techFile, setTechFile] = useState<string | null>(null);
    const [finFile, setFinFile] = useState<string | null>(null);
    const [uploading, setUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);

    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const categories = ["All", "Cybersecurity", "Forensics", "GovTech", "Infrastructure"];
    const statuses = ["All", "Active", "Under Evaluation", "Awarded"];

    // Filter tenders
    const filteredTenders = ALL_TENDERS.filter(tender => {
        const matchesSearch = tender.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              tender.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              tender.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "All" || tender.category === selectedCategory;
        const matchesStatus = selectedStatus === "All" || tender.status === selectedStatus;
        return matchesSearch && matchesCategory && matchesStatus;
    });

    const handleApplyClick = (tenderId: string) => {
        setSelectedTender(tenderId);
        setFormData(prev => ({
            ...prev,
            summary: `Submission of Interest for Tender ID: ${tenderId}.\nOur agency specializes in custom deliveries matching the specified criteria...`
        }));
    };

    const handleCopyId = (e: React.MouseEvent, id: string) => {
        e.stopPropagation();
        navigator.clipboard.writeText(id);
        setCopiedId(id);
        toast({
            title: "Copied!",
            description: `Tender Reference ${id} copied to clipboard.`,
        });
        setTimeout(() => setCopiedId(null), 2000);
    };

    const handleFileChange = (type: 'tech' | 'fin', name: string) => {
        if (type === 'tech') setTechFile(name);
        else setFinFile(name);
        
        toast({
            title: "File Selected locally",
            description: `Ready to attach: ${name}.`,
        });
    };

    const handleMailToRequest = (subjectText: string, bodyText: string, toastDesc: string) => {
        const subject = encodeURIComponent(subjectText);
        const body = encodeURIComponent(bodyText);
        window.location.href = `mailto:tenders@cehpoint.co.in?cc=jit.banerjee@cehpoint.co.in&subject=${subject}&body=${body}`;
        
        toast({
            title: "Email Action Triggered",
            description: toastDesc,
        });
    };

    const handleRequestRFPDetails = (tenderId: string, docName: string) => {
        const subject = `Inquiry / Request for RFP details: ${tenderId}`;
        const body = `Dear Cehpoint Technical Board,

I am requesting additional specifications, schedules, or RFP documents for the following tender:

Tender ID: ${tenderId}
Title: ${ALL_TENDERS.find(t => t.id === tenderId)?.title}

Please reply with the relevant information.

Regards,
[Name]
[Company]`;

        handleMailToRequest(subject, body, `Redirecting to email client to request details for ${tenderId}.`);
    };

    const handleRequestTemplate = (name: string) => {
        const subject = `Request for Procurement Template: ${name}`;
        const body = `Dear Cehpoint Procurement Division,

We are preparing our bid proposal and would like to request the official framework/template document:

Document: ${name}

Please reply with the relevant attachment.

Sincerely,
[Name]
[Company Name]`;

        handleMailToRequest(subject, body, `Redirecting to request template: ${name}.`);
    };

    const handleSendMail = () => {
        if (!selectedTender) return;

        const subject = `TENDER BID PROPOSAL: ${selectedTender} - ${formData.company || formData.name}`;
        const body = `Dear Cehpoint Procurement Committee,

We are formally submitting our bid proposal for the following project:

==================================================
TENDER DETAILS:
Tender Reference ID: ${selectedTender}
Category: ${ALL_TENDERS.find(t => t.id === selectedTender)?.category || "N/A"}
==================================================

APPLICANT PROFILE:
Contact Person Name: ${formData.name}
Company Name: ${formData.company || "Individual / Freelance Contractor"}
Email Address: ${formData.email}
Phone / Mobile: ${formData.phone}
Proposed Commercial Quote: ${formData.bidValue || "As specified in attachment Form B"}

[IMPORTANT - ATTACHMENT REQUIRED]:
Please remember to attach the following files to this email manually before sending:
1. Technical Proposal Form A: ${techFile || "[Attach File Here]"}
2. Financial Bid Form B: ${finFile || "[Attach File Here]"}

PROPOSAL BRIEF SUMMARY:
${formData.summary}

Sincerely,
${formData.name}
${formData.company}`;

        handleMailToRequest(subject, body, "Opening prefilled email client. Please attach your files manually before sending.");
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.phone || !formData.bidValue) {
            toast({
                title: "Incomplete Bid Form",
                description: "Please fill in all mandatory applicant details.",
                variant: "destructive"
            });
            return;
        }

        setUploading(true);
        setUploadProgress(15);

        // Simulate preparation cycle
        const interval = setInterval(() => {
            setUploadProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setUploading(false);
                        setUploadProgress(0);
                        handleSendMail();
                    }, 1000);
                    return 100;
                }
                return prev + 30;
            });
        }, 300);
    };

    const stats = [
        { label: "Active Open Bids", value: ALL_TENDERS.filter(t => t.status === "Active").length.toString(), icon: Shield, color: "text-green-400 bg-green-500/10 border-green-500/20" },
        { label: "Cumulative Allocation", value: "₹45,00,000+", icon: TrendingUp, color: "text-purple-400 bg-purple-500/10 border-purple-500/20" },
        { label: "Evaluation Lead Time", value: "14 Days", icon: Clock, color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20" },
        { label: "Awarded Contracts", value: "12 Projects", icon: Award, color: "text-amber-400 bg-amber-500/10 border-amber-500/20" }
    ];

    return (
        <>
            <SEO 
                title="Official Corporate Procurement & Tenders | Cehpoint" 
                description="View active Notice Inviting Tenders (NIT) issued by Cehpoint. Submit technical and commercial proposals for cybersecurity, GovTech, and cloud integration contracts." 
                url="https://www.cehpoint.co.in/tenders"
            />

            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "https://www.cehpoint.co.in/" },
                    { name: "Tenders", url: "https://www.cehpoint.co.in/tenders" }
                ]}
            />

            <div className="min-h-screen bg-slate-950 text-slate-100 pt-32 pb-20 relative overflow-hidden">
                {/* Glowing Abstract Backdrops */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute top-40 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                    {/* Official Banner Header */}
                    <div className="mb-12 border-b border-slate-800 pb-10">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div>
                                <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full text-xs text-slate-300 font-mono mb-4">
                                    <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
                                    Procurement Notice Inviting Bids
                                </div>
                                <h1 className="text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-wider flex items-center gap-3">
                                    Notice Inviting Tenders
                                </h1>
                                <p className="text-slate-400 mt-3 text-lg font-light max-w-3xl">
                                    Cehpoint Procurement and Operations Directorate publishes Request for Proposals (RFP) for software audits, cyberdefense utilities, and public governance infrastructures.
                                </p>
                            </div>
                            <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-xl text-left md:text-right glass min-w-[240px]">
                                <div className="text-xs text-slate-400 uppercase tracking-widest font-mono">Authority Division</div>
                                <div className="font-bold text-lg text-white mt-1">Cehpoint Technical Board</div>
                                <div className="text-xs text-slate-400 mt-1 font-mono">Ref: CEH-NIT-OPS-2026</div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Dashboard Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                        {stats.map((stat, i) => (
                            <div key={i} className={`p-4 rounded-xl border glass flex items-center gap-4 hover-lift`}>
                                <div className={`p-3 rounded-lg border ${stat.color}`}>
                                    <stat.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-white font-mono">{stat.value}</div>
                                    <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Search & Dynamic Filter Portal Section */}
                    <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl mb-10 glass-intense">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                    <Filter className="w-5 h-5 text-primary" />
                                    Contract Listings & Searches
                                </h2>
                                <div className="text-xs text-slate-400 font-mono">
                                    Showing {filteredTenders.length} of {ALL_TENDERS.length} procurement listings
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {/* Search Bar */}
                                <div className="relative">
                                    <Search className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                                    <Input
                                        placeholder="Search by ID, Title, Keyword..."
                                        className="pl-10 bg-slate-950 border-slate-800 text-white placeholder-slate-400 focus:border-primary py-6"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>

                                {/* Category Selector */}
                                <div>
                                    <select
                                        className="w-full bg-slate-950 border border-slate-800 text-slate-300 rounded-lg p-3.5 focus:outline-none focus:border-primary font-medium"
                                        value={selectedCategory}
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                    >
                                        {categories.map((cat, idx) => (
                                            <option key={idx} value={cat}>
                                                {cat === "All" ? "All Categories" : cat}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Status Selector */}
                                <div>
                                    <select
                                        className="w-full bg-slate-950 border border-slate-800 text-slate-300 rounded-lg p-3.5 focus:outline-none focus:border-primary font-medium"
                                        value={selectedStatus}
                                        onChange={(e) => setSelectedStatus(e.target.value)}
                                    >
                                        {statuses.map((stat, idx) => (
                                            <option key={idx} value={stat}>
                                                {stat === "All" ? "All Statuses" : stat}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Reset filter helpers */}
                            {(searchQuery || selectedCategory !== "All" || selectedStatus !== "All") && (
                                <div className="flex justify-end">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="text-slate-400 hover:text-white border-slate-800 hover:bg-slate-800/50"
                                        onClick={() => {
                                            setSearchQuery("");
                                            setSelectedCategory("All");
                                            setSelectedStatus("All");
                                        }}
                                    >
                                        <RefreshCw className="w-3.5 h-3.5 mr-2" />
                                        Clear Search Filters
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Tenders Listings Grid */}
                    <div className="space-y-6 mb-16">
                        {filteredTenders.length > 0 ? (
                            filteredTenders.map((tender) => (
                                <Card key={tender.id} className="bg-slate-900/50 border-slate-800 hover:border-primary/40 transition-all duration-300 glass hover:shadow-2xl hover:shadow-primary/5">
                                    <CardContent className="p-6 md:p-8">
                                        <div className="flex flex-col lg:flex-row gap-6 lg:items-center justify-between">
                                            
                                            {/* Info Panel Left */}
                                            <div className="flex-1 space-y-4">
                                                <div className="flex flex-wrap items-center gap-3">
                                                    <div 
                                                        className="flex items-center gap-2 font-mono text-xs px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-primary hover:border-primary/50 cursor-pointer transition-colors"
                                                        onClick={(e) => handleCopyId(e, tender.id)}
                                                        title="Click to copy ID"
                                                    >
                                                        {tender.id}
                                                        {copiedId === tender.id ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                                                    </div>
                                                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                                                        {tender.category}
                                                    </span>
                                                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase border ${
                                                        tender.status === 'Active' 
                                                            ? 'bg-green-950/50 text-green-400 border-green-800' 
                                                            : tender.status === 'Under Evaluation'
                                                            ? 'bg-cyan-950/50 text-cyan-400 border-cyan-800'
                                                            : 'bg-purple-950/50 text-purple-400 border-purple-800'
                                                    }`}>
                                                        {tender.status}
                                                    </span>
                                                </div>

                                                <div>
                                                    <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{tender.title}</h3>
                                                    <p className="text-slate-400 leading-relaxed max-w-4xl text-sm md:text-base">
                                                        {tender.description}
                                                    </p>
                                                </div>

                                                <div className="flex flex-wrap gap-4 text-xs md:text-sm text-slate-300 pt-2">
                                                    <div className="flex items-center gap-2 bg-slate-950 border border-slate-800/80 px-3 py-1.5 rounded-lg">
                                                        <Briefcase className="w-4 h-4 text-primary" />
                                                        <span>Eligibility: <strong className="text-white font-medium">{tender.eligibility}</strong></span>
                                                    </div>
                                                    <div className="flex items-center gap-2 bg-slate-950 border border-slate-800/80 px-3 py-1.5 rounded-lg">
                                                        <Calendar className="w-4 h-4 text-primary" />
                                                        <span>Deadline: <strong className="text-white font-medium">{tender.deadline}</strong></span>
                                                    </div>
                                                    <div className="flex items-center gap-2 bg-slate-950 border border-slate-800/80 px-3 py-1.5 rounded-lg">
                                                        <Calendar className="w-4 h-4 text-slate-400" />
                                                        <span>Published: <strong className="text-slate-400 font-medium">{tender.publishedDate}</strong></span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Action / Budget Panel Right */}
                                            <div className="flex flex-col sm:flex-row lg:flex-col gap-5 items-start lg:items-end lg:min-w-[240px] border-t lg:border-t-0 lg:border-l border-slate-800 pt-5 lg:pt-0 lg:pl-8">
                                                <div className="text-left lg:text-right w-full">
                                                    <div className="text-xs text-slate-400 uppercase tracking-widest font-mono">Estimated Tender Budget</div>
                                                    <div className="text-3xl font-bold text-white font-mono mt-1">{tender.budget}</div>
                                                </div>

                                                <div className="flex flex-col sm:flex-row lg:flex-col gap-2 w-full">
                                                    <Dialog open={viewingTenderId === tender.id} onOpenChange={(open) => setViewingTenderId(open ? tender.id : null)}>
                                                        <DialogTrigger asChild>
                                                            <Button
                                                                variant="outline"
                                                                className="w-full border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-medium hover:bg-slate-800/40"
                                                                onClick={() => setViewingTenderId(tender.id)}
                                                            >
                                                                <Eye className="w-4 h-4 mr-2 text-primary" />
                                                                View RFP Details
                                                            </Button>
                                                        </DialogTrigger>
                                                        <DialogContent className="bg-slate-900 border-slate-800 text-slate-100 sm:max-w-xl glass-intense max-h-[90vh] overflow-y-auto">
                                                            <DialogHeader>
                                                                <DialogTitle className="text-2xl font-bold text-white flex items-center gap-2">
                                                                    <FileText className="w-6 h-6 text-primary" />
                                                                    Request for Proposal (RFP) Details
                                                                </DialogTitle>
                                                                <DialogDescription className="text-slate-400 font-mono text-xs">
                                                                    Tender Ref: {tender.id} | Budget: {tender.budget}
                                                                </DialogDescription>
                                                            </DialogHeader>

                                                            <div className="space-y-6 py-4">
                                                                {/* Summary description */}
                                                                <div>
                                                                    <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-1.5 border-b border-slate-850 pb-1">Project Objective</h4>
                                                                    <p className="text-slate-350 text-sm leading-relaxed">{tender.description}</p>
                                                                </div>

                                                                {/* Tender Details (Scope, technical, milestones) */}
                                                                {TENDER_DETAILS[tender.id] && (
                                                                    <>
                                                                        <div>
                                                                            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-1.5 border-b border-slate-850 pb-1">Scope of Work</h4>
                                                                            <ul className="list-disc pl-5 space-y-1 text-slate-400 text-xs md:text-sm">
                                                                                {TENDER_DETAILS[tender.id].scope.map((item, idx) => (
                                                                                    <li key={idx}>{item}</li>
                                                                                ))}
                                                                            </ul>
                                                                        </div>

                                                                        <div>
                                                                            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-1.5 border-b border-slate-850 pb-1">Technical Stack Requirements</h4>
                                                                            <ul className="list-disc pl-5 space-y-1 text-slate-400 text-xs md:text-sm">
                                                                                {TENDER_DETAILS[tender.id].technical.map((item, idx) => (
                                                                                    <li key={idx}>{item}</li>
                                                                                ))}
                                                                            </ul>
                                                                        </div>

                                                                        <div>
                                                                            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-1.5 border-b border-slate-850 pb-1">Payment Milestones</h4>
                                                                            <ul className="list-disc pl-5 space-y-1 text-slate-400 text-xs md:text-sm">
                                                                                {TENDER_DETAILS[tender.id].milestones.map((item, idx) => (
                                                                                    <li key={idx}>{item}</li>
                                                                                ))}
                                                                            </ul>
                                                                        </div>
                                                                    </>
                                                                )}

                                                                {/* Action Section inside RFP viewer */}
                                                                <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-xl space-y-3">
                                                                    <h5 className="font-bold text-white text-sm flex items-center gap-1.5">
                                                                        <Lock className="w-4 h-4 text-primary" />
                                                                        Procurement Policy Inquiry
                                                                    </h5>
                                                                    <p className="text-slate-400 text-xs leading-relaxed">
                                                                        Official guidelines, clarification reports, or full packages can be requested securely. All bid actions are processed via pre-filled email transmission protocols.
                                                                    </p>
                                                                    <div className="flex flex-col sm:flex-row gap-2 pt-1.5">
                                                                        <Button 
                                                                            variant="outline" 
                                                                            className="flex-1 border-slate-800 text-xs text-slate-300 hover:text-white"
                                                                            onClick={() => handleRequestRFPDetails(tender.id, tender.docName)}
                                                                        >
                                                                            <Mail className="w-3.5 h-3.5 mr-1.5 text-primary" />
                                                                            Request Full Documents via Mail
                                                                        </Button>
                                                                        <Button 
                                                                            variant="outline" 
                                                                            className="flex-1 border-slate-800 text-xs text-slate-300 hover:text-white"
                                                                            onClick={() => handleMailToRequest(
                                                                                `Pre-Bid Clarification Request: ${tender.id}`,
                                                                                `Dear Cehpoint Procurement,\n\nWe have a clarification query regarding Tender ID: ${tender.id}.\n\nQuery:\n- [Write your query here]\n\nRegards,\n[Name]`,
                                                                                "Opening pre-bid inquiry mail draft."
                                                                            )}
                                                                        >
                                                                            <HelpCircle className="w-3.5 h-3.5 mr-1.5 text-primary" />
                                                                            Request Clarification
                                                                        </Button>
                                                                    </div>
                                                                </div>

                                                                {tender.status === 'Active' && (
                                                                    <Button
                                                                        className="w-full btn-primary text-white font-bold py-5"
                                                                        onClick={() => {
                                                                            setViewingTenderId(null);
                                                                            // Trigger apply modal
                                                                            setTimeout(() => {
                                                                                handleApplyClick(tender.id);
                                                                                const btn = document.getElementById(`apply-trigger-${tender.id}`);
                                                                                if (btn) btn.click();
                                                                            }, 200);
                                                                        }}
                                                                    >
                                                                        Proceed to Application Form
                                                                        <ArrowRight className="w-4 h-4 ml-1.5" />
                                                                    </Button>
                                                                )}
                                                            </div>
                                                        </DialogContent>
                                                    </Dialog>

                                                    {tender.status === 'Active' ? (
                                                        <Dialog>
                                                            <DialogTrigger asChild>
                                                                <Button
                                                                    id={`apply-trigger-${tender.id}`}
                                                                    className="w-full btn-primary text-white font-bold py-5 hover-lift"
                                                                    onClick={() => handleApplyClick(tender.id)}
                                                                >
                                                                    Apply for Tender
                                                                </Button>
                                                            </DialogTrigger>
                                                            <DialogContent className="bg-slate-900 border-slate-800 text-slate-100 sm:max-w-xl glass-intense max-h-[90vh] overflow-y-auto">
                                                                <DialogHeader>
                                                                    <DialogTitle className="text-2xl font-bold text-white flex items-center gap-2">
                                                                        <Shield className="w-6 h-6 text-primary" />
                                                                        Bid Proposal Submission
                                                                    </DialogTitle>
                                                                    <DialogDescription className="text-slate-400">
                                                                        Enter your technical information and cost metrics. Submitting generates an email draft. You must manually attach your final document proposals in your mailbox client.
                                                                    </DialogDescription>
                                                                </DialogHeader>

                                                                <form onSubmit={handleFormSubmit} className="space-y-5 py-4">
                                                                    
                                                                    {/* Project Details Locked */}
                                                                    <div className="bg-slate-950/80 border border-slate-800/80 p-4 rounded-xl flex items-center justify-between">
                                                                        <div>
                                                                            <div className="text-xs text-slate-400 font-mono">Applying For</div>
                                                                            <div className="text-sm font-bold text-white mt-0.5">{tender.title}</div>
                                                                        </div>
                                                                        <div className="text-right">
                                                                            <div className="text-xs text-slate-400 font-mono">Reference</div>
                                                                            <div className="text-xs font-mono font-bold text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20 mt-0.5">{selectedTender}</div>
                                                                        </div>
                                                                    </div>

                                                                    {/* Notification banner */}
                                                                    <div className="bg-amber-950/20 border border-amber-900/40 rounded-xl p-3.5 flex items-start gap-2.5 text-amber-400 text-xs">
                                                                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                                                                        <div>
                                                                            <strong>Notice regarding Attachments:</strong> Since bid submissions are processed securely via email, please manually attach your actual Technical Proposal (Form A) and Financial Bid (Form B) documents directly inside your email client when it opens after clicking Submit.
                                                                        </div>
                                                                    </div>

                                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                                        <div className="space-y-2">
                                                                            <Label className="text-slate-300 font-medium">Contact Person Name *</Label>
                                                                            <Input
                                                                                type="text"
                                                                                autoComplete="name"
                                                                                required
                                                                                placeholder="John Doe"
                                                                                className="bg-slate-950 border-slate-800 focus:border-primary text-white py-5 text-base"
                                                                                value={formData.name}
                                                                                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                                                            />
                                                                        </div>
                                                                        <div className="space-y-2">
                                                                            <Label className="text-slate-300 font-medium">Company Name (or Legal Agency) *</Label>
                                                                            <Input
                                                                                type="text"
                                                                                autoComplete="organization"
                                                                                required
                                                                                placeholder="Apex CyberCorp Ltd"
                                                                                className="bg-slate-950 border-slate-800 focus:border-primary text-white py-5 text-base"
                                                                                value={formData.company}
                                                                                onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                                                                            />
                                                                        </div>
                                                                    </div>

                                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                                        <div className="space-y-2">
                                                                            <Label className="text-slate-300 font-medium">Official Email Address *</Label>
                                                                            <Input
                                                                                type="email"
                                                                                inputMode="email"
                                                                                autoComplete="email"
                                                                                required
                                                                                placeholder="contracts@agency.com"
                                                                                className="bg-slate-950 border-slate-800 focus:border-primary text-white py-5 text-base"
                                                                                value={formData.email}
                                                                                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                                                            />
                                                                        </div>
                                                                        <div className="space-y-2">
                                                                            <Label className="text-slate-300 font-medium">Telephone / Mobile *</Label>
                                                                            <Input
                                                                                type="tel"
                                                                                inputMode="tel"
                                                                                autoComplete="tel"
                                                                                required
                                                                                placeholder="+91 90000 12345"
                                                                                className="bg-slate-950 border-slate-800 focus:border-primary text-white py-5 text-base"
                                                                                value={formData.phone}
                                                                                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                                                                            />
                                                                        </div>
                                                                    </div>

                                                                    <div className="space-y-2">
                                                                        <Label className="text-slate-300 font-medium">Financial Quote Proposal Bid (INR) *</Label>
                                                                        <div className="relative">
                                                                            <span className="absolute left-3 top-3.5 text-slate-400 text-sm font-mono font-bold">₹</span>
                                                                            <Input
                                                                                type="text"
                                                                                inputMode="numeric"
                                                                                required
                                                                                placeholder="1,40,000"
                                                                                className="pl-8 bg-slate-950 border-slate-800 focus:border-primary text-white py-5 font-mono text-base"
                                                                                value={formData.bidValue}
                                                                                onChange={(e) => setFormData(prev => ({ ...prev, bidValue: e.target.value }))}
                                                                            />
                                                                        </div>
                                                                        <p className="text-xs text-slate-400">Provide your total commercial quote. This value is locked under security policies.</p>
                                                                    </div>

                                                                    {/* Mock Document Selection fields */}
                                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                                        <div className="space-y-2">
                                                                            <Label className="text-slate-300 font-medium">Technical Proposal Form A (Simulated Selection)</Label>
                                                                            <div className="border border-dashed border-slate-800 rounded-lg p-4 text-center hover:border-primary/50 transition-colors relative bg-slate-950/40">
                                                                                <input 
                                                                                    type="file" 
                                                                                    className="absolute inset-0 opacity-0 cursor-pointer" 
                                                                                    onChange={(e) => {
                                                                                        if (e.target.files && e.target.files[0]) {
                                                                                            handleFileChange('tech', e.target.files[0].name);
                                                                                        }
                                                                                    }}
                                                                                />
                                                                                <Upload className="w-5 h-5 mx-auto text-slate-400 mb-1" />
                                                                                <span className="text-xs text-slate-300 block truncate">
                                                                                    {techFile ? techFile : "Select local PDF"}
                                                                                </span>
                                                                            </div>
                                                                        </div>

                                                                        <div className="space-y-2">
                                                                            <Label className="text-slate-300 font-medium">Financial Bid Form B (Simulated Selection)</Label>
                                                                            <div className="border border-dashed border-slate-800 rounded-lg p-4 text-center hover:border-primary/50 transition-colors relative bg-slate-950/40">
                                                                                <input 
                                                                                    type="file" 
                                                                                    className="absolute inset-0 opacity-0 cursor-pointer" 
                                                                                    onChange={(e) => {
                                                                                        if (e.target.files && e.target.files[0]) {
                                                                                            handleFileChange('fin', e.target.files[0].name);
                                                                                        }
                                                                                    }}
                                                                                />
                                                                                <Upload className="w-5 h-5 mx-auto text-slate-400 mb-1" />
                                                                                <span className="text-xs text-slate-300 block truncate">
                                                                                    {finFile ? finFile : "Select local Excel"}
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="space-y-2">
                                                                        <Label className="text-slate-300 font-medium">Executive Technical Summary *</Label>
                                                                        <Textarea
                                                                            required
                                                                            placeholder="Outline key deliverables, compliance frameworks, SLA commitments, and technology stacks..."
                                                                            className="bg-slate-950 border-slate-800 focus:border-primary text-white min-h-[100px]"
                                                                            value={formData.summary}
                                                                            onChange={(e) => setFormData(prev => ({ ...prev, summary: e.target.value }))}
                                                                        />
                                                                    </div>

                                                                    {uploading ? (
                                                                        <div className="space-y-2 pt-2">
                                                                            <div className="flex justify-between text-xs text-slate-400 font-mono">
                                                                                <span>Packing bid metadata...</span>
                                                                                <span>{uploadProgress}%</span>
                                                                            </div>
                                                                            <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                                                                                <div 
                                                                                    className="bg-gradient-to-r from-primary to-accent h-1.5 transition-all duration-300"
                                                                                    style={{ width: `${uploadProgress}%` }}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    ) : (
                                                                        <Button
                                                                            type="submit"
                                                                            className="w-full btn-primary text-white font-bold text-base py-6 mt-4"
                                                                        >
                                                                            <Mail className="w-5 h-5 mr-2" />
                                                                            Submit Official Bid Proposal
                                                                        </Button>
                                                                    )}
                                                                    <p className="text-[10px] text-center text-slate-400">
                                                                        By clicking Submit, your bid price, contact metrics, and summaries will be packaged, and a mail client prompt will open. You must manually attach your files in your mail application before transmitting.
                                                                    </p>
                                                                </form>
                                                            </DialogContent>
                                                        </Dialog>
                                                    ) : tender.status === 'Awarded' ? (
                                                        <div className="w-full bg-purple-950/20 border border-purple-900/50 rounded-xl p-3.5 text-center">
                                                            <div className="flex items-center justify-center gap-1.5 text-purple-400 font-bold text-sm">
                                                                <CheckCircle2 className="w-4 h-4" />
                                                                Contract Awarded
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 text-center">
                                                            <div className="flex items-center justify-center gap-1.5 text-slate-400 font-bold text-sm">
                                                                <AlertCircle className="w-4 h-4 text-cyan-400" />
                                                                Bid Under Review
                                                            </div>
                                                            <div className="text-[10px] text-slate-400 mt-1">Bids are closed. Evaluating submissions.</div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                        </div>
                                    </CardContent>
                                </Card>
                            ))
                        ) : (
                            <div className="text-center py-16 bg-slate-900/20 border border-slate-800 rounded-2xl glass">
                                <AlertCircle className="w-12 h-12 text-slate-600 mx-auto mb-3" />
                                <h3 className="text-xl font-bold text-white">No Matching Procurement Notices</h3>
                                <p className="text-slate-400 mt-1 text-sm max-w-md mx-auto">
                                    No tender matches your search criteria. Try modifying your search query or choosing another status category.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Step-by-Step Bidding Workflow Timeline */}
                    <div className="mb-20">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-white tracking-tight uppercase">Procurement Workflow</h2>
                            <p className="text-slate-400 mt-2 text-sm md:text-base max-w-2xl mx-auto">
                                Our transparent bidding cycle ensures fair opportunity and technical adherence across all projects.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
                            {STEPS.map((step, idx) => (
                                <div key={idx} className="bg-slate-900/30 border border-slate-800/80 rounded-2xl p-5 relative glass hover:border-primary/20 transition-all duration-300 group">
                                    <div className="text-3xl font-extrabold text-slate-600 font-mono mb-3 group-hover:text-primary/60 transition-colors">
                                        {step.num}
                                    </div>
                                    <h4 className="font-bold text-white text-base mb-1.5 group-hover:text-primary transition-colors">{step.title}</h4>
                                    <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Procurement Guidelines & Templates Downloads Grid */}
                    <div className="grid md:grid-cols-2 gap-8 mb-20">
                        {/* Request Documents Section */}
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-2xl font-bold text-white tracking-tight uppercase">Procurement Guidelines & Bidding Templates</h2>
                                <p className="text-slate-400 text-sm mt-1 max-w-xl">
                                    Official forms and policy guides can be requested via email redirection. Please complete proposals using these templates before submission.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {RESOURCES.map((res, idx) => (
                                    <div key={idx} className="p-4 bg-slate-900/40 border border-slate-800/60 rounded-xl glass hover:border-slate-700 transition-colors flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center justify-between mb-3">
                                                <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-primary">
                                                    <res.icon className="w-5 h-5" />
                                                </div>
                                                <span className="font-mono text-[10px] bg-slate-950 text-slate-400 border border-slate-800 px-2 py-0.5 rounded uppercase font-bold">
                                                    {res.format}
                                                </span>
                                            </div>
                                            <h4 className="font-bold text-white text-sm mb-1 line-clamp-1">{res.name}</h4>
                                            <p className="text-slate-400 text-[11px] leading-snug line-clamp-2">{res.description}</p>
                                        </div>
                                        <div className="pt-4 flex items-center justify-between border-t border-slate-800/40 mt-3">
                                            <span className="text-[10px] text-slate-400 font-mono">{res.size}</span>
                                            <Button 
                                                variant="ghost" 
                                                size="sm" 
                                                className="h-7 text-xs text-primary hover:text-white px-2 hover:bg-slate-800"
                                                onClick={() => handleRequestTemplate(res.name)}
                                            >
                                                <Mail className="w-3.5 h-3.5 mr-1" />
                                                Request Document
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Interactive Accordion FAQs */}
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-2xl font-bold text-white tracking-tight uppercase">Procurement FAQ</h2>
                                <p className="text-slate-400 text-sm mt-1">
                                    Find quick clarifications on submission guidelines, evaluation criteria, and contract awards.
                                </p>
                            </div>

                            <div className="space-y-3">
                                {FAQS.map((faq, idx) => {
                                    const isOpen = openFaq === idx;
                                    return (
                                        <div key={idx} className="border border-slate-800 rounded-xl overflow-hidden glass">
                                            <button
                                                className="w-full flex items-center justify-between p-4 bg-slate-900/20 text-left hover:bg-slate-900/50 transition-colors"
                                                onClick={() => setOpenFaq(isOpen ? null : idx)}
                                            >
                                                <span className="font-semibold text-white text-sm md:text-base pr-4">{faq.q}</span>
                                                <HelpCircle className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`} />
                                            </button>
                                            
                                            <AnimatePresence initial={false}>
                                                {isOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.25, ease: "easeInOut" }}
                                                    >
                                                        <div className="p-4 bg-slate-950/40 text-slate-400 text-xs md:text-sm leading-relaxed border-t border-slate-800/60">
                                                            {faq.a}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Trust Banner / Legal Info / Helpdesk */}
                    <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6 md:p-8 glass flex flex-col md:flex-row gap-6 md:items-center justify-between">
                        <div className="space-y-3 max-w-3xl">
                            <h4 className="font-bold text-white text-lg flex items-center gap-2">
                                <Lock className="w-5 h-5 text-primary" />
                                Anti-Corruption Policy & Encrypted Bids
                            </h4>
                            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                                Cehpoint adheres strictly to international public procurement guidelines. Technical documentation and pricing data submitted via this portal are cryptographically registered. No commercial quotes are visible prior to the official opening date of financial evaluation.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                            <a 
                                href="mailto:tenders@cehpoint.co.in" 
                                className="flex items-center justify-center gap-2 bg-slate-950 border border-slate-800 hover:border-slate-700 text-white text-xs md:text-sm px-4 py-3 rounded-xl transition-all"
                            >
                                <Mail className="w-4 h-4 text-primary" />
                                tenders@cehpoint.co.in
                            </a>
                            <a 
                                href="tel:+919876543210" 
                                className="flex items-center justify-center gap-2 bg-slate-950 border border-slate-800 hover:border-slate-700 text-white text-xs md:text-sm px-4 py-3 rounded-xl transition-all"
                            >
                                <Phone className="w-4 h-4 text-primary" />
                                Procurement Hotline
                            </a>
                        </div>
                    </div>

                    {/* Official Footer Details */}
                    <div className="mt-12 grid md:grid-cols-2 gap-8 text-slate-400 text-sm border-t border-slate-800 pt-8">
                        <div>
                            <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                                <User className="w-4 h-4 text-primary" />
                                Official Submission Hotline
                            </h4>
                            <p className="text-xs md:text-sm">For portal support or urgent operational issues, contact the procurement office:</p>
                            <p className="mt-2 text-white font-mono text-xs">Primary: tenders@cehpoint.co.in</p>
                            <p className="text-white font-mono text-xs">Escalations: jit.banerjee@cehpoint.co.in</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                                <Building2 className="w-4 h-4 text-primary" />
                                Procurement Directorate Address
                            </h4>
                            <p className="text-xs md:text-sm">Cehpoint Agencies HQ,</p>
                            <p className="text-xs md:text-sm">Labpur, Sandipan Patsala Para, Birbhum, Bolpur,</p>
                            <p className="text-xs md:text-sm">West Bengal - 731303, India.</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
