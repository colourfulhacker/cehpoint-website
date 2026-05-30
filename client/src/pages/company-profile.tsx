import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Download, Globe, Shield, Target, Users, Cpu, Building2, TrendingUp,
    Award, Server, Layout, Database, CheckCircle2, Briefcase, Rocket, Landmark,
    Lock, Search, GraduationCap, Coins, Stethoscope, Factory, Truck
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { globalLocations } from "@/data/global-locations";
import { serviceTechStacks } from "@/data/service-tech-stacks";
import SEO from "@/components/seo";
import BreadcrumbSchema from "@/components/seo/breadcrumb-schema";
import { useTranslation } from "react-i18next";

export default function CompanyProfile() {
    const { t } = useTranslation();
    const [isGenerating, setIsGenerating] = useState(false);
    const profileRef = useRef<HTMLDivElement>(null);

    const generatePDF = async () => {
        if (!profileRef.current) return;
        setIsGenerating(true);

        try {
            const element = profileRef.current;
            const originalStyle = {
                height: element.style.height,
                overflow: element.style.overflow,
                maxHeight: element.style.maxHeight
            };

            // Expand for capture
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

            pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeightInPdf);
            heightLeft -= pdfHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeightInPdf;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeightInPdf);
                heightLeft -= pdfHeight;
            }

            pdf.save('Cehpoint_Master_Service_Catalog.pdf');
        } catch (error) {
            console.error("PDF Generation failed", error);
            alert("Failed to generate PDF. Please try again.");
        } finally {
            setIsGenerating(false);
        }
    };

    const metricsText = t("pages.pgCompanyProfile.metrics", { returnObjects: true }) as { label: string; desc: string }[];
    const metricValues = ["500+", "35%", "99.9%", "25+"];
    const metrics = metricsText.map((m, i) => ({ label: m.label, value: metricValues[i], desc: m.desc }));

    const serviceEcoText = t("pages.pgCompanyProfile.serviceEcosystem", { returnObjects: true }) as { title: string; desc: string; services: string[] }[];
    const serviceEcoIcons = [Cpu, Shield, Cpu, TrendingUp];
    const serviceEcosystem = serviceEcoText.map((s, i) => ({ ...s, icon: serviceEcoIcons[i] }));

    const industriesText = t("pages.pgCompanyProfile.industries", { returnObjects: true }) as { name: string; desc: string }[];
    const industriesIcons = [Coins, Stethoscope, GraduationCap, Factory, Truck, Landmark];
    const industries = industriesText.map((ind, i) => ({ ...ind, icon: industriesIcons[i] }));

    const useCases = t("pages.pgCompanyProfile.useCases", { returnObjects: true }) as { title: string; problem: string; solution: string }[];

    // Shared Footer Component for Print
    const PrintFooter = ({ pageNum }: { pageNum: number }) => (
        <div className="bg-slate-50 border-t border-slate-200 text-slate-500 p-6 flex justify-between items-center h-[80px] absolute bottom-0 w-full print:fixed print:bottom-0">
            <div className="text-[10px]">
                <p>{t("pages.pgCompanyProfile.footerCopyright")}</p>
                <p className="mt-0.5">{t("pages.pgCompanyProfile.footerHq")}</p>
            </div>
            <div className="text-right text-[10px]">
                <p className="font-bold text-slate-900">{t("pages.pgCompanyProfile.footerPage", { num: pageNum })}</p>
                <p className="text-primary mt-1">contact@cehpoint.co.in</p>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans pt-20 pb-20">
            <SEO 
                title="Company Profile | Cehpoint" 
                description="View and download the complete company profile of Cehpoint, detailing our services, global presence, tech stack, and achievements." 
                url="https://www.cehpoint.co.in/company-profile"
            />
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "https://www.cehpoint.co.in/" },
                    { name: "Company Profile", url: "https://www.cehpoint.co.in/company-profile" }
                ]}
            />
            {/* Control Bar */}
            <div className="fixed bottom-8 right-8 z-50">
                <Button
                    onClick={generatePDF}
                    disabled={isGenerating}
                    className="shadow-2xl btn-primary rounded-full px-8 h-14 text-lg font-semibold animate-in fade-in slide-in-from-bottom-4"
                >
                    {isGenerating ? t("pages.pgCompanyProfile.downloadCompiling") : t("pages.pgCompanyProfile.downloadCta")}
                    {!isGenerating && <Download className="ml-2 w-5 h-5" />}
                </Button>
            </div>

            {/* Main Document Container */}
            <div className="max-w-[210mm] mx-auto bg-white shadow-xl min-h-[297mm] relative text-slate-800" ref={profileRef}>

                {/* 1. COVER PAGE HEADER */}
                <div className="bg-slate-900 text-white p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-10 -mt-20"></div>
                    <div className="relative z-10 flex justify-between items-start">
                        <div>
                            <h1 className="text-5xl font-bold font-display tracking-tight mb-2">Cehpoint</h1>
                            <p className="text-sm text-slate-300 uppercase tracking-widest font-semibold">{t("pages.pgCompanyProfile.coverTagline")}</p>
                        </div>
                        <div className="text-right">
                            <Badge variant="outline" className="text-white border-white/20 mb-2">{t("pages.pgCompanyProfile.coverBadge")}</Badge>
                            <p className="text-xs text-slate-300">www.cehpoint.co.in</p>
                        </div>
                    </div>
                </div>

                {/* 2. EXECUTIVE SUMMARY */}
                <div className="p-10 border-b border-slate-200">
                    <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">{t("pages.pgCompanyProfile.visionMissionLabel")}</h2>
                    <p className="text-xl font-light leading-relaxed text-slate-800">
                        {t("pages.pgCompanyProfile.execSummaryPart1")} <span className="font-semibold text-primary">{t("pages.pgCompanyProfile.execSummaryDigitalSovereign")}</span>{t("pages.pgCompanyProfile.execSummaryPart2")} <span className="font-semibold text-primary">{t("pages.pgCompanyProfile.execSummaryOffensive")}</span> {t("pages.pgCompanyProfile.execSummaryPart3")} <span className="font-semibold text-primary">{t("pages.pgCompanyProfile.execSummaryHighVelocity")}</span> {t("pages.pgCompanyProfile.execSummaryPart4")}
                    </p>
                </div>

                {/* 3. GLOBAL FOOTPRINT */}
                <div className="p-10 bg-slate-50 border-b border-slate-200">
                    <h2 className="text-lg font-bold font-display text-slate-900 mb-6 flex items-center">
                        <Globe className="w-5 h-5 mr-2 text-primary" /> {t("pages.pgCompanyProfile.globalNodesTitle")}
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {globalLocations.slice(0, 8).map((loc) => (
                            <div key={loc.id} className="bg-white p-3 rounded border border-slate-200">
                                <div className="text-xs font-bold text-primary mb-1">{loc.country}</div>
                                <div className="text-sm font-bold text-slate-900">{loc.name}</div>
                                <div className="text-[10px] text-slate-500 truncate">{loc.techFocus}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 4. SERVICE ECOSYSTEM */}
                <div className="p-10 border-b border-slate-200">
                    <h2 className="text-2xl font-bold font-display text-slate-900 mb-8">{t("pages.pgCompanyProfile.serviceEcosystemTitle")}</h2>
                    <div className="grid grid-cols-2 gap-8">
                        {serviceEcosystem.map((eco, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                    <eco.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">{eco.title}</h3>
                                    <p className="text-xs text-slate-500 mb-2 uppercase tracking-wide">{eco.desc}</p>
                                    <ul className="space-y-1">
                                        {eco.services.map((s, j) => (
                                            <li key={j} className="text-xs flex items-center text-slate-700">
                                                <div className="w-1 h-1 bg-slate-300 rounded-full mr-2"></div>
                                                {s}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 5. INDUSTRY VERTICALS */}
                <div className="p-10 bg-slate-50 border-b border-slate-200">
                    <h2 className="text-lg font-bold font-display text-slate-900 mb-6">{t("pages.pgCompanyProfile.industryVerticalsTitle")}</h2>
                    <div className="grid grid-cols-3 gap-4">
                        {industries.map((ind, i) => (
                            <div key={i} className="bg-white p-4 rounded border border-slate-200">
                                <ind.icon className="w-5 h-5 text-primary mb-2" />
                                <h3 className="font-bold text-xs text-slate-900">{ind.name}</h3>
                                <p className="text-[10px] text-slate-500 leading-snug">{ind.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 6. USE CASE GALLERY */}
                <div className="p-10 border-b border-slate-200">
                    <h2 className="text-lg font-bold font-display text-slate-900 mb-6">{t("pages.pgCompanyProfile.useCasesTitle")}</h2>
                    <div className="space-y-4">
                        {useCases.map((uc, i) => (
                            <div key={i} className="bg-slate-50 p-4 rounded-lg flex gap-4">
                                <div className="shrink-0 mt-1">
                                    <Target className="w-4 h-4 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm text-slate-900">{uc.title}</h3>
                                    <div className="grid grid-cols-2 gap-4 mt-2">
                                        <div>
                                            <span className="text-[10px] uppercase font-bold text-red-400">{t("pages.pgCompanyProfile.challengeLabel")}</span>
                                            <p className="text-xs text-slate-600">{uc.problem}</p>
                                        </div>
                                        <div>
                                            <span className="text-[10px] uppercase font-bold text-green-500">{t("pages.pgCompanyProfile.solutionLabel")}</span>
                                            <p className="text-xs text-slate-600">{uc.solution}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 7. TALENT & TRAINING (New Section) */}
                <div className="p-10 pb-24">
                    <h2 className="text-lg font-bold font-display text-slate-900 mb-4">{t("pages.pgCompanyProfile.talentOpsTitle")}</h2>
                    <div className="flex gap-8">
                        <div className="flex-1">
                            <h3 className="font-bold text-xs mb-2 flex items-center"><GraduationCap className="w-3 h-3 mr-2" /> {t("pages.pgCompanyProfile.corporateTrainingTitle")}</h3>
                            <p className="text-xs text-slate-600">{t("pages.pgCompanyProfile.corporateTrainingDesc")}</p>
                        </div>
                        <div className="flex-1">
                            <h3 className="font-bold text-xs mb-2 flex items-center"><Users className="w-3 h-3 mr-2" /> {t("pages.pgCompanyProfile.leadershipSearchTitle")}</h3>
                            <p className="text-xs text-slate-600">{t("pages.pgCompanyProfile.leadershipSearchDesc")}</p>
                        </div>
                    </div>
                </div>

                <PrintFooter pageNum={1} />
            </div>
        </div>
    );
}
