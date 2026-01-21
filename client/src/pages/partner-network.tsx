
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import {
    Briefcase,
    Code,
    Search,
    PenTool,
    Phone,
    ShieldCheck,
    DollarSign,
    Send,
    User,
    Clock,
    Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

type FormData = {
    name: string;
    role: string;
    experience: string;
    rate: string;
    rateType: "hourly" | "fixed" | "monthly";
    skills: string;
    portfolio: string;
};

export default function PartnerNetwork() {
    const { register, handleSubmit, setValue, resetField } = useForm<FormData>();
    const [selectedCategory, setSelectedCategory] = useState("tech");

    // Register select fields
    useEffect(() => {
        register("role", { required: true });
        register("rateType", { required: true });
        setValue("rateType", "fixed"); // Default value
    }, [register, setValue]);

    const handleCategoryChange = (catId: string) => {
        setSelectedCategory(catId);
        resetField("role"); // Reset role when category changes
    };

    const onSubmit = (data: FormData) => {
        const message = `*New Partner Application*\n\n` +
            `*Name:* ${data.name}\n` +
            `*Role:* ${data.role}\n` +
            `*Experience:* ${data.experience}\n` +
            `*Rate Expectation:* ${data.rate} (${data.rateType})\n` +
            `*Key Skills:* ${data.skills}\n` +
            `*Portfolio/Links:* ${data.portfolio}\n\n` +
            `I am interested in joining the Cehpoint Partner Network as a ${selectedCategory === 'investigation' ? 'Private Investigator' : 'Freelancer'}.`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/918116343716?text=${encodedMessage}`, '_blank');
    };

    const categories = [
        {
            id: "tech",
            label: "Tech & Dev",
            icon: Code,
            roles: ["Full Stack Developer", "Mobile App Developer", "DevSecOps Engineer", "UI/UX Designer"],
            description: "Build secure, scalable applications for our global clients."
        },
        {
            id: "investigation",
            label: "Investigation",
            icon: Search,
            roles: ["Private Investigator", "Forensic Analyst", "Legal Consultant", "Field Agent"],
            description: "Join our elite network of verified investigators and legal experts."
        },
        {
            id: "content",
            label: "Creative",
            icon: PenTool,
            roles: ["Technical Writer", "SEO Specialist", "Video Editor", "Content Strategist"],
            description: "Create compelling content that educates and converts."
        },
        {
            id: "sales",
            label: "Sales",
            icon: Phone,
            roles: ["B2B Sales Associate", "Lead Generation Specialist", "Partnership Manager"],
            description: "Drive growth and build relationships with corporate clients."
        }
    ];

    return (
        <div className="min-h-screen pt-24 pb-16 bg-background">
            <Helmet>
                <title>Partner Network - Join Cehpoint as a Freelancer or Contractor</title>
                <meta name="description" content="Join Cehpoint's elite network of freelancers, investigators, and developers. Apply now with your rate and experience." />
            </Helmet>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <Badge variant="outline" className="mb-4">Work With Us</Badge>
                    <h1 className="text-4xl md:text-6xl font-black text-gradient mb-6">
                        The Partner Network
                    </h1>
                    <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
                        We are looking for the top 1% of talent. <br />
                        Freelancers, Contractors, and Agency Partners who value <strong>Autonomy, Mastery, and Purpose</strong>.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Left Column: Categories */}
                    <div className="lg:col-span-1 space-y-6">
                        <h3 className="text-2xl font-bold mb-6">Choose Your Path</h3>
                        <div className="space-y-4">
                            {categories.map((cat) => (
                                <div
                                    key={cat.id}
                                    onClick={() => handleCategoryChange(cat.id)}
                                    className={`cursor-pointer p-6 rounded-xl border transition-all duration-300 ${selectedCategory === cat.id
                                        ? "bg-primary/10 border-primary shadow-lg ring-1 ring-primary"
                                        : "bg-card border-border hover:border-primary/50"
                                        }`}
                                >
                                    <div className="flex items-center mb-3">
                                        <cat.icon className={`w-6 h-6 mr-3 ${selectedCategory === cat.id ? "text-primary" : "text-foreground/60"}`} />
                                        <h4 className={`font-bold ${selectedCategory === cat.id ? "text-primary" : "text-foreground"}`}>
                                            {cat.label}
                                        </h4>
                                    </div>
                                    <p className="text-sm text-foreground/70">
                                        {cat.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <Card className="mt-8 bg-gradient-to-br from-secondary/20 to-secondary/5 border-secondary/20">
                            <CardContent className="pt-6">
                                <div className="flex items-start">
                                    <Globe className="w-5 h-5 mr-3 text-secondary mt-1" />
                                    <div>
                                        <h4 className="font-bold text-sm">Remote First</h4>
                                        <p className="text-xs text-foreground/70">Work from anywhere. We care about output, not hours.</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column: Dynamic Form */}
                    <div className="lg:col-span-2">
                        <Card className="border-t-4 border-primary shadow-2xl">
                            <CardHeader>
                                <CardTitle className="text-2xl">Application Details</CardTitle>
                                <CardDescription>
                                    Tell us about yourself. This will generate a direct WhatsApp message to our hiring team.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Full Name</label>
                                            <div className="relative">
                                                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                                <Input
                                                    {...register("name", { required: true })}
                                                    className="pl-10"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Specific Role</label>
                                            <Select onValueChange={(val) => setValue("role", val)}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select your expertise" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {categories.find(c => c.id === selectedCategory)?.roles.map((role) => (
                                                        <SelectItem key={role} value={role}>{role}</SelectItem>
                                                    ))}
                                                    <SelectItem value="Other">Other</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Experience & Key Skills</label>
                                        <div className="relative">
                                            <Briefcase className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                            <Textarea
                                                {...register("skills", { required: true })}
                                                className="pl-10 min-h-[100px]"
                                                placeholder="E.g. 5 Years in React/Node.js. Specialized in FinTech apps..."
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Expected Rate</label>
                                            <div className="relative">
                                                <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                                <Input
                                                    {...register("rate", { required: true })}
                                                    className="pl-10"
                                                    placeholder="e.g. 2000"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Rate Type</label>
                                            <Select onValueChange={(val: any) => setValue("rateType", val)} defaultValue="fixed">
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select Type" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="hourly">Per Hour</SelectItem>
                                                    <SelectItem value="fixed">Per Project/Task</SelectItem>
                                                    <SelectItem value="monthly">Monthly Retainer</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Portfolio / LinkedIn / GitHub</label>
                                        <Input
                                            {...register("portfolio", { required: true })}
                                            placeholder="https://..."
                                        />
                                    </div>

                                    <Button type="submit" size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold h-12">
                                        <Send className="w-5 h-5 mr-2" />
                                        Send Application via WhatsApp
                                    </Button>
                                    <p className="text-xs text-center text-muted-foreground mt-2">
                                        This will open WhatsApp Web or App with your pre-filled details.
                                    </p>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
