import { useState, useEffect } from "react";
import { Link, useSearch } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Rocket,
    GraduationCap,
    Clock,
    CheckCircle2,
    BrainCircuit,
    TrendingUp,
    Users,
    ArrowRight,
    BookOpen,
    MessageCircle
} from "lucide-react";

export default function Training() {
    const searchString = useSearch();
    const [activeTab, setActiveTab] = useState("entrepreneurs");
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [bookingType, setBookingType] = useState<"entrepreneur" | "student">("entrepreneur");

    // Parse query params
    const getParams = () => {
        const params = new URLSearchParams(searchString);
        return {
            type: params.get("type") // 'business' or 'student'
        };
    };

    const { type } = getParams();
    const isSpecificView = !!type;

    useEffect(() => {
        if (type === "student") {
            setActiveTab("students");
        } else if (type === "business" || type === "entrepreneur") {
            setActiveTab("entrepreneurs");
        }
    }, [type]);

    // Form State
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        // Entrepreneur specific
        companyName: "",
        industry: "",
        // Student specific
        collegeName: "",
        yearOfStudy: "",
        areaOfInterest: ""
    });

    const handleOpenBooking = (type: "entrepreneur" | "student") => {
        setBookingType(type);
        setIsBookingOpen(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleWhatsAppRedirect = (e: React.FormEvent) => {
        e.preventDefault();

        let message = "";

        if (bookingType === "entrepreneur") {
            message = `*New 40-Min Business Session Booking*\n\n` +
                `*Name:* ${formData.name}\n` +
                `*Company:* ${formData.companyName}\n` +
                `*Industry:* ${formData.industry}\n` +
                `*Phone:* ${formData.phone}\n` +
                `*Email:* ${formData.email}\n\n` +
                `_Source: Cehpoint Training Hub_`;
        } else {
            message = `*New 40-Min Student Training Booking*\n\n` +
                `*Name:* ${formData.name}\n` +
                `*College:* ${formData.collegeName}\n` +
                `*Year:* ${formData.yearOfStudy}\n` +
                `*Interest:* ${formData.areaOfInterest}\n` +
                `*Phone:* ${formData.phone}\n` +
                `*Email:* ${formData.email}\n\n` +
                `_Source: Cehpoint Training Hub_`;
        }

        const whatsappUrl = `https://wa.me/919091156095?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        setIsBookingOpen(false);
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-secondary/5" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <Badge className="mb-4 bg-green-500/10 text-green-400 hover:bg-green-500/20 px-4 py-1.5 text-sm border-green-500/20 backdrop-blur-sm">
                        Free 40-Minute Power Sessions
                    </Badge>
                    <h1 className="font-display font-bold text-5xl md:text-7xl mb-6 tracking-tight">
                        {activeTab === "entrepreneurs" ? "Scale Your Business" : "Fast-Track Your Career"} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                            {activeTab === "entrepreneurs" ? "With Automation" : "With Future Tech"}
                        </span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                        {activeTab === "entrepreneurs"
                            ? "Short, impactful sessions to automate workflows and drive revenue."
                            : "Learn high-demand skills like AI and Cloud that colleges miss."}
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 bg-background relative z-10 -mt-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                        {/* Only show TabsList if NO specific type is requested */}
                        {!isSpecificView && (
                            <div className="flex justify-center mb-12">
                                <TabsList className="grid w-full max-w-md grid-cols-2 p-1 bg-secondary/30 backdrop-blur-md rounded-full">
                                    <TabsTrigger
                                        value="entrepreneurs"
                                        className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white"
                                    >
                                        For Entrepreneurs
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="students"
                                        className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
                                    >
                                        For Students
                                    </TabsTrigger>
                                </TabsList>
                            </div>
                        )}

                        {/* Entrepreneurs Content */}
                        <TabsContent value="entrepreneurs" className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                <div className="space-y-6">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium">
                                        <Rocket className="w-4 h-4" />
                                        Business Growth & Automation
                                    </div>
                                    <h2 className="text-3xl font-bold">Scale Your Business with AI</h2>
                                    <p className="text-muted-foreground text-lg">
                                        Learn how to leverage artificial intelligence and process automation to reduce costs, improve efficiency, and drive revenue growth in just 40 minutes per session.
                                    </p>
                                    <ul className="space-y-4">
                                        {[
                                            "Process Automation Strategies",
                                            "AI Tools for Decision Making",
                                            "Digital Marketing Scaling",
                                            "Customer Experience Optimization"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button
                                        onClick={() => handleOpenBooking("entrepreneur")}
                                        className="btn-primary w-full sm:w-auto px-8 py-6 text-lg"
                                    >
                                        Book Training Session <ArrowRight className="w-5 h-5 ml-2" />
                                    </Button>
                                </div>
                                <div className="grid grid-cols-1 gap-6">
                                    <Card className="glass-intense border-blue-500/20">
                                        <CardHeader>
                                            <CardTitle className="flex items-center gap-2 text-blue-400">
                                                <Clock className="w-5 h-5" />
                                                40-Min Power Session
                                                <Badge variant="secondary" className="ml-2 bg-green-500/10 text-green-400 border-green-500/20">Free</Badge>
                                            </CardTitle>
                                            <CardDescription>
                                                Concise, actionable training with no fluff. Get the skills you need and get back to business.
                                            </CardDescription>
                                        </CardHeader>
                                    </Card>
                                    <Card className="glass-intense border-blue-500/20">
                                        <CardHeader>
                                            <CardTitle className="flex items-center gap-2 text-blue-400">
                                                <TrendingUp className="w-5 h-5" />
                                                ROI Focused
                                            </CardTitle>
                                            <CardDescription>
                                                Every session is designed to provide immediate value and return on investment for your company.
                                            </CardDescription>
                                        </CardHeader>
                                    </Card>
                                </div>
                            </div>
                        </TabsContent>

                        {/* Students Content */}
                        <TabsContent value="students" className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                <div className="grid grid-cols-1 gap-6 order-2 md:order-1">
                                    <Card className="glass-intense border-purple-500/20">
                                        <CardHeader>
                                            <CardTitle className="flex items-center gap-2 text-purple-400">
                                                <BrainCircuit className="w-5 h-5" />
                                                Industry-Ready Skills
                                            </CardTitle>
                                            <CardDescription>
                                                Learn the exact technologies and frameworks top companies are using right now.
                                            </CardDescription>
                                        </CardHeader>
                                    </Card>
                                    <Card className="glass-intense border-purple-500/20">
                                        <CardHeader>
                                            <CardTitle className="flex items-center gap-2 text-purple-400">
                                                <Users className="w-5 h-5" />
                                                Internship Opportunities
                                            </CardTitle>
                                            <CardDescription>
                                                Top performers get direct access to internship interviews and career mentorship.
                                            </CardDescription>
                                        </CardHeader>
                                    </Card>
                                    <Card className="glass-intense border-purple-500/20">
                                        <CardHeader>
                                            <CardTitle className="flex items-center gap-2 text-purple-400">
                                                <Clock className="w-5 h-5" />
                                                40-Min Free Training
                                                <Badge variant="secondary" className="ml-2 bg-green-500/10 text-green-400 border-green-500/20">Free</Badge>
                                            </CardTitle>
                                            <CardDescription>
                                                Join our free sessions to learn high-demand skills without any financial barrier.
                                            </CardDescription>
                                        </CardHeader>
                                    </Card>
                                </div>
                                <div className="space-y-6 order-1 md:order-2">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium">
                                        <GraduationCap className="w-4 h-4" />
                                        Future Tech & Internships
                                    </div>
                                    <h2 className="text-3xl font-bold">Master Future Technologies</h2>
                                    <p className="text-muted-foreground text-lg">
                                        Stay ahead of the curve. Learn about the latest trends in AI, Cyber Security, and Cloud Computing that colleges don't teach you yet.
                                    </p>
                                    <ul className="space-y-4">
                                        {[
                                            "Generative AI & LLMs",
                                            "Cyber Security Essentials",
                                            "Modern Web Development",
                                            "Cloud Infrastructure Patterns"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button
                                        onClick={() => handleOpenBooking("student")}
                                        className="btn-primary-purple w-full sm:w-auto px-8 py-6 text-lg bg-purple-600 hover:bg-purple-700"
                                    >
                                        Join Next Cohort <BookOpen className="w-5 h-5 ml-2" />
                                    </Button>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>

            {/* Booking Dialog */}
            <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
                <DialogContent className="sm:max-w-[500px] glass-intense border-white/10">
                    <DialogHeader>
                        <DialogTitle>
                            {bookingType === 'entrepreneur' ? 'Book Business Growth Session' : 'Apply for Student Cohort'}
                        </DialogTitle>
                        <DialogDescription>
                            {bookingType === 'entrepreneur'
                                ? 'Fill in your details to book a 1-on-1 session. Sessions are 40 minutes.'
                                : 'Join our next training batch. Limited spots available.'}
                        </DialogDescription>
                    </DialogHeader>

                    <form onSubmit={handleWhatsAppRedirect} className="space-y-4 mt-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2 col-span-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input id="name" name="name" required value={formData.name} onChange={handleInputChange} placeholder="John Doe" />
                            </div>

                            <div className="space-y-2 col-span-1">
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input id="phone" name="phone" required value={formData.phone} onChange={handleInputChange} placeholder="+91..." />
                            </div>

                            <div className="space-y-2 col-span-1">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} placeholder="john@example.com" />
                            </div>

                            {bookingType === 'entrepreneur' ? (
                                <>
                                    <div className="space-y-2 col-span-2">
                                        <Label htmlFor="companyName">Company Name</Label>
                                        <Input id="companyName" name="companyName" required value={formData.companyName} onChange={handleInputChange} placeholder="Acme Inc." />
                                    </div>
                                    <div className="space-y-2 col-span-2">
                                        <Label htmlFor="industry">Industry</Label>
                                        <Input id="industry" name="industry" required value={formData.industry} onChange={handleInputChange} placeholder="Retail, Tech, etc." />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="space-y-2 col-span-2">
                                        <Label htmlFor="collegeName">College / University</Label>
                                        <Input id="collegeName" name="collegeName" required value={formData.collegeName} onChange={handleInputChange} placeholder="University Name" />
                                    </div>
                                    <div className="space-y-2 col-span-1">
                                        <Label htmlFor="yearOfStudy">Year</Label>
                                        <Input id="yearOfStudy" name="yearOfStudy" required value={formData.yearOfStudy} onChange={handleInputChange} placeholder="e.g. 3rd Year" />
                                    </div>
                                    <div className="space-y-2 col-span-1">
                                        <Label htmlFor="areaOfInterest">Interest</Label>
                                        <Input id="areaOfInterest" name="areaOfInterest" required value={formData.areaOfInterest} onChange={handleInputChange} placeholder="AI, Web, etc." />
                                    </div>
                                </>
                            )}
                        </div>

                        <Button type="submit" className="w-full btn-primary font-bold py-6 text-lg mt-6">
                            <MessageCircle className="w-5 h-5 mr-2" />
                            {bookingType === 'entrepreneur' ? 'Book via WhatsApp' : 'Apply via WhatsApp'}
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}
