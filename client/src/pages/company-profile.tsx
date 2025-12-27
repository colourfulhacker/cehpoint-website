import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Globe, Shield, Target, Users, Zap, Building2, TrendingUp, Award, Server, Layout, Database, CheckCircle2, Briefcase, Rocket, Landmark } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CompanyProfile() {
    const [isGenerating, setIsGenerating] = useState(false);
    const profileRef = useRef<HTMLDivElement>(null);

    const generatePDF = async () => {
        if (!profileRef.current) return;
        setIsGenerating(true);

        try {
            const element = profileRef.current;

            // Temporary style adjustments for capture
            const originalStyle = {
                height: element.style.height,
                overflow: element.style.overflow,
                maxHeight: element.style.maxHeight
            };

            element.style.height = 'auto';
            element.style.overflow = 'visible';
            element.style.maxHeight = 'none';

            const canvas = await html2canvas(element, {
                scale: 2,
                useCORS: true,
                logging: false,
                backgroundColor: '#ffffff',
                height: element.scrollHeight,
                windowHeight: element.scrollHeight
            });

            // Restore styles
            element.style.height = originalStyle.height;
            element.style.overflow = originalStyle.overflow;
            element.style.maxHeight = originalStyle.maxHeight;

            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = pdfWidth / imgWidth;
            const imgHeightInPdf = imgHeight * ratio;

            let heightLeft = imgHeightInPdf;
            let position = 0;

            // First page
            pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeightInPdf);
            heightLeft -= pdfHeight;

            // Additional pages if needed
            while (heightLeft >= 0) {
                position = heightLeft - imgHeightInPdf;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeightInPdf);
                heightLeft -= pdfHeight;
            }

            pdf.save('Cehpoint_Corporate_Profile.pdf');

        } catch (error) {
            console.error("PDF Generation failed", error);
            alert("Failed to generate PDF. Please try again.");
        } finally {
            setIsGenerating(false);
        }
    };

    const metrics = [
        { label: "Global Projects", value: "200+", desc: "Successful Deliveries" },
        { label: "YoY Growth", value: "35%", desc: "Consistent Revenue Scale" },
        { label: "Threats Blocked", value: "99.9%", desc: "Enterprise Security Efficiency" },
        { label: "Innovation Assets", value: "25+", desc: "Proprietary IP & Ventures" },
    ];

    const capabilities = [
        {
            category: "Enterprise Solutions",
            services: ["Custom ERP/CRM Systems", "Cloud Architecture & Migration", "Legacy System Modernization", "SaaS Product Development"]
        },
        {
            category: "Advanced Technology",
            services: ["Generative AI & LLM Integration", "Predictive Analytics Models", "IoT Networks & Smart City", "Blockchain & Web3 Solutions"]
        },
        {
            category: "Cybersecurity Excellence",
            services: ["VAPT & Security Audits", "24/7 SOC Operations", "Compliance (GDPR, HIPAA, ISO)", "Zero Trust Architecture"]
        },
        {
            category: "Digital Experience",
            services: ["E-commerce & Quick Commerce", "High-Performance Mobile Apps", "Immersive UI/UX Design", "Digital Marketing Automation"]
        }
    ];

    const businessValues = [
        {
            icon: Rocket,
            title: "For Startups",
            focus: "Speed & Scalability",
            points: [
                "Rapid MVP Development (4-8 weeks)",
                "Scalable Cloud-Native Architecture",
                "Fractional CTO & Advisory",
                "Investor-Ready Tech Decks"
            ]
        },
        {
            icon: Building2,
            title: "For Enterprises",
            focus: "Efficiency & Security",
            points: [
                "Digital Transformation Frameworks",
                "Legacy Modernization with Zero Downtime",
                "Enterprise-Grade Security (ISO 27001)",
                "AI-Driven Process Automation"
            ]
        },
        {
            icon: Landmark,
            title: "For Government",
            focus: "Compliance & Integrity",
            points: [
                "Secure E-Governance Portals",
                "Smart City Infrastructure",
                "Data Sovereignty Compliance",
                "Public Sector Digital Utility"
            ]
        }
    ];

    const industries = [
        "FinTech", "HealthTech", "EdTech", "Logistics",
        "Retail/E-com", "Real Estate", "Manufacturing", "GovTech"
    ];

    // Shared Header Component for Print
    const PrintHeader = () => (
        <div className="bg-slate-900 text-white p-8 flex justify-between items-center h-[120px]">
            <div>
                <h1 className="text-3xl font-bold font-display tracking-tight">Cehpoint</h1>
                <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold mt-1">Technologies • Innovation • Security</p>
            </div>
            <div className="text-right">
                <Badge variant="outline" className="text-white border-white/20 mb-1 px-2 py-0.5 text-xs">Corporate Profile 2025</Badge>
                <p className="text-[10px] text-slate-400">www.cehpoint.co.in</p>
            </div>
        </div>
    );

    // Shared Footer Component for Print
    const PrintFooter = ({ pageNum }: { pageNum: number }) => (
        <div className="bg-slate-50 border-t border-slate-200 text-slate-500 p-6 flex justify-between items-center h-[80px] absolute bottom-0 w-full">
            <div className="text-[10px]">
                <p>© 2025 Cehpoint Technologies. Confidential.</p>
                <p className="mt-0.5">Global HQ: India | Nodes: USA, UK, Germany</p>
            </div>
            <div className="text-right text-[10px]">
                <p className="font-bold text-slate-900">Page {pageNum} of 3</p>
                <p className="text-primary mt-1">contact@cehpoint.co.in</p>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans pt-20 pb-20">
            {/* Control Bar */}
            <div className="fixed bottom-8 right-8 z-50">
                <Button
                    onClick={generatePDF}
                    disabled={isGenerating}
                    className="shadow-2xl btn-primary rounded-full px-8 h-14 text-lg font-semibold animate-in fade-in slide-in-from-bottom-4"
                >
                    {isGenerating ? "Processing Document..." : "Download Official Profile"}
                    {!isGenerating && <Download className="ml-2 w-5 h-5" />}
                </Button>
            </div>

            {/* Main Document Container */}
            <div className="max-w-[210mm] mx-auto bg-white shadow-xl min-h-[297mm] relative" ref={profileRef}>

                {/* Header Section */}
                <div className="bg-slate-900 text-white p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-10 -mt-20"></div>
                    <div className="relative z-10 flex justify-between items-start">
                        <div>
                            <h1 className="text-4xl font-bold font-display tracking-tight mb-2">Cehpoint</h1>
                            <p className="text-sm text-slate-400 uppercase tracking-widest font-semibold">Excellence in Technology & Security</p>
                        </div>
                        <div className="text-right">
                            <Badge variant="outline" className="text-white border-white/20 mb-2">Corporate Profile 2025</Badge>
                            <p className="text-xs text-slate-400">www.cehpoint.co.in | HQ: India</p>
                        </div>
                    </div>
                </div>

                {/* Executive Summary */}
                <div className="p-12 border-b border-neutral-100">
                    <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Executive Summary</h2>
                    <p className="text-2xl font-light leading-relaxed text-slate-800">
                        Cehpoint is a premier global technology consultancy combining
                        <span className="font-semibold text-primary"> offensive security expertise</span> with
                        <span className="font-semibold text-primary"> enterprise-grade software engineering</span>.
                        We architect resilient digital ecosystems that enable businesses to innovate without compromising on security.
                        Our mission is to democratize access to high-end technology for businesses of all scales.
                    </p>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-4 border-b border-neutral-100 divide-x divide-neutral-100 bg-slate-50">
                    {metrics.map((m, i) => (
                        <div key={i} className="p-8 text-center">
                            <div className="text-3xl font-bold text-slate-900 mb-1">{m.value}</div>
                            <div className="text-sm font-semibold text-slate-700 mb-1">{m.label}</div>
                            <div className="text-xs text-slate-500">{m.desc}</div>
                        </div>
                    ))}
                </div>

                {/* Business Value Section (NEW) */}
                <div className="p-12 border-b border-neutral-100 bg-slate-50/50">
                    <h2 className="text-2xl font-bold font-display text-slate-900 mb-8">Strategic Business Value</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {businessValues.map((val, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                                    <val.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-1">{val.title}</h3>
                                <p className="text-xs font-semibold text-primary mb-4 uppercase tracking-wider">{val.focus}</p>
                                <ul className="space-y-2">
                                    {val.points.map((p, j) => (
                                        <li key={j} className="flex items-start text-sm text-slate-600">
                                            <CheckCircle2 className="w-4 h-4 mr-2 text-green-500 shrink-0 mt-0.5" />
                                            <span>{p}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Capabilities Matrix */}
                <div className="p-12 border-b border-neutral-100">
                    <div className="flex justify-between items-end mb-8">
                        <h2 className="text-2xl font-bold font-display text-slate-900">Service Capabilities</h2>
                        <div className="flex gap-2 flex-wrap max-w-md justify-end">
                            {industries.map((ind, i) => (
                                <span key={i} className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-md font-medium">{ind}</span>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mb-8">
                        {capabilities.map((cap, i) => (
                            <div key={i} className="border border-slate-200 rounded p-5 bg-white">
                                <h3 className="font-bold text-base mb-3 text-primary">{cap.category}</h3>
                                <ul className="space-y-2">
                                    {cap.services.map((s, j) => (
                                        <li key={j} className="flex items-center text-xs text-slate-600">
                                            <CheckCircle2 className="w-3 h-3 text-green-500 mr-2" />
                                            {s}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                                <Globe className="w-4 h-4 mr-2 text-primary" /> Distributed Operations
                            </h4>
                            <p className="text-xs text-slate-600 leading-relaxed mb-4">
                                Headquartered in India with operational nodes in USA, UK, Germany, Canada, and Australia. 24/7 "Follow the Sun" support model.
                            </p>
                            <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                                <Shield className="w-4 h-4 mr-2 text-primary" /> Security First
                            </h4>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                ISO 27001 certified processes. Zero Trust Architecture implemented by default for all client projects.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded border border-slate-100 text-center">
                            <div className="w-16 h-16 mx-auto bg-white border rounded-full flex items-center justify-center mb-3 shadow-sm">
                                <Users className="w-8 h-8 text-slate-400" />
                            </div>
                            <h4 className="font-bold text-slate-900">Sujan Banerjee</h4>
                            <p className="text-xs text-primary mb-4">Founder & CEO</p>
                            <p className="text-[10px] text-slate-500 italic">"We build leverage, not just software."</p>
                        </div>
                    </div>
                </div>

                <PrintFooter pageNum={3} />
            </div>
        </div>
    );
}
