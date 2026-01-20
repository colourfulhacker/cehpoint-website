import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    MessageSquare, Laptop, ShoppingBag, BookOpen, User, Zap, ArrowRight,
    CheckCircle2, ShieldCheck, Layers, Info, MapPin, Building2, Phone, Target,
    Store, Truck, Utensils, Car, Wrench, GraduationCap, Shirt, Smartphone,
    Home, Gift, Briefcase, Camera, Music, Video, Gamepad2, Coffee, Plane,
    Hammer, Stethoscope, Pill, Ticket, Map, Palette, Code, Cpu, Database,
    Cloud, Wifi, Landmark, Briefcase as WorkIcon, Gem, Crown, Rocket, Sparkles,
    Fish, Carrot, Milk, Warehouse, Armchair, MonitorPlay, HeartHandshake, Newspaper, Copy
} from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";

// --- Visual Generation System ---

const GRADIENTS = [
    "from-blue-600 to-indigo-600",
    "from-emerald-500 to-teal-600",
    "from-orange-500 to-red-600",
    "from-purple-600 to-pink-600",
    "from-cyan-500 to-blue-600",
    "from-rose-500 to-orange-500",
    "from-amber-400 to-orange-500",
    "from-fuchsia-600 to-purple-600",
    "from-lime-500 to-green-600",
    "from-sky-500 to-indigo-500",
];

const getGradient = (id: number) => GRADIENTS[id % GRADIENTS.length];

const getIconForApp = (title: string, category: string) => {
    const text = (title + category).toLowerCase();

    // Map keywords to Icons
    if (text.includes("grocery") || text.includes("ration")) return <Store className="w-6 h-6 text-white" />;
    if (text.includes("fish") || text.includes("meat")) return <Fish className="w-6 h-6 text-white" />;
    if (text.includes("veg") || text.includes("farm")) return <Carrot className="w-6 h-6 text-white" />;
    if (text.includes("milk") || text.includes("dairy")) return <Milk className="w-6 h-6 text-white" />;
    if (text.includes("food") || text.includes("tiffin") || text.includes("cook")) return <Utensils className="w-6 h-6 text-white" />;
    if (text.includes("sweet") || text.includes("bakery") || text.includes("cake")) return <Coffee className="w-6 h-6 text-white" />;
    if (text.includes("car") || text.includes("vehicle") || text.includes("transport")) return <Car className="w-6 h-6 text-white" />;
    if (text.includes("bike") || text.includes("scooter")) return <MapPin className="w-6 h-6 text-white" />; // Bike icon replacement
    if (text.includes("repair") || text.includes("ac") || text.includes("service")) return <Wrench className="w-6 h-6 text-white" />;
    if (text.includes("electric")) return <Zap className="w-6 h-6 text-white" />;
    if (text.includes("paint") || text.includes("decor")) return <Palette className="w-6 h-6 text-white" />;
    if (text.includes("clean") || text.includes("pest")) return <Sparkles className="w-6 h-6 text-white" />;
    if (text.includes("plumb")) return <Hammer className="w-6 h-6 text-white" />;

    if (text.includes("tuition") || text.includes("coaching") || text.includes("school")) return <GraduationCap className="w-6 h-6 text-white" />;
    if (text.includes("english") || text.includes("book")) return <BookOpen className="w-6 h-6 text-white" />;
    if (text.includes("computer") || text.includes("tech")) return <Laptop className="w-6 h-6 text-white" />;
    if (text.includes("dance") || text.includes("music")) return <Music className="w-6 h-6 text-white" />;

    if (text.includes("clothing") || text.includes("saree") || text.includes("fashion")) return <Shirt className="w-6 h-6 text-white" />;
    if (text.includes("jewel") || text.includes("gold")) return <Gem className="w-6 h-6 text-white" />;
    if (text.includes("mobile") || text.includes("phone")) return <Smartphone className="w-6 h-6 text-white" />;
    if (text.includes("gift")) return <Gift className="w-6 h-6 text-white" />;
    if (text.includes("toy") || text.includes("game")) return <Gamepad2 className="w-6 h-6 text-white" />;

    if (text.includes("job")) return <Briefcase className="w-6 h-6 text-white" />;
    if (text.includes("real estate") || text.includes("property")) return <Building2 className="w-6 h-6 text-white" />;
    if (text.includes("astrology") || text.includes("temple")) return <Sparkles className="w-6 h-6 text-white" />;
    if (text.includes("event") || text.includes("wedding")) return <HeartHandshake className="w-6 h-6 text-white" />;
    if (text.includes("news")) return <Newspaper className="w-6 h-6 text-white" />;
    if (text.includes("travel") || text.includes("tour")) return <Plane className="w-6 h-6 text-white" />;
    if (text.includes("influencer")) return <Camera className="w-6 h-6 text-white" />;

    return <Rocket className="w-6 h-6 text-white" />; // Default
};

const AppIconBox = ({ id, title, category }: { id: number, title: string, category: string }) => {
    return (
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${getGradient(id)} shadow-lg flex items-center justify-center shrink-0`}>
            {getIconForApp(title, category)}
        </div>
    );
};

// --- Types ---

interface AppIdea {
    id: number;
    title: string;
    description: string;
    category: string;
    icon: JSX.Element;
    techStack: string[];
    features: string[];
    objective: string;
    howItWorks: string;
    whyThisApp: string;
    businessIdea?: string;
}

// --- Data ---

const categories = [
    "Local & Daily-Need",
    "Service-Based",
    "Education & Skill",
    "Selling & Reselling",
    "Digital & Modern"
];

const categoryDescriptions: Record<string, string> = {
    "Local & Daily-Need": "Essential apps connecting local vendors with daily customers for recurring needs.",
    "Service-Based": "On-demand platforms connecting customers with skilled professionals nearby.",
    "Education & Skill": "Digital learning platforms for coaching centers, tutors, and institutes.",
    "Selling & Reselling": "E-commerce solutions for boutiques, retailers, and homepreneurs.",
    "Digital & Modern": "Innovative apps for niche markets, events, and community services."
};

const commonTechStack = ["PWA (React/Vite)", "Firebase Auth", "Firestore DB", "Cloud Functions"];

// Helper to generate generic features if specific ones aren't needed
const getFeatures = (category: string) => {
    if (category.includes("Local")) return ["User App: Browse & Order", "Vendor App: Manage Orders", "Admin Panel: Analytics"];
    if (category.includes("Service")) return ["User App: Book Service", "Partner App: Accept Jobs", "GPS Tracking"];
    if (category.includes("Education")) return ["Student Portal: Videos/Notes", "Live Class Integration", "Fee Management"];
    if (category.includes("Selling")) return ["Product Catalog", "Cart & Checkout", "Order Tracking"];
    return ["User Dashboard", "Secure Payments", "Notification System"];
};

const allApps: AppIdea[] = [
    // LOCAL & DAILY-NEED BENEFITS
    {
        id: 1, title: "Local Grocery Ordering App", description: "Customers order daily groceries; owner delivers locally.", category: "Local & Daily-Need", icon: <ShoppingBag className="w-6 h-6" />, techStack: commonTechStack, features: ["Inventory Management", "Delivery Scheduling", "WhatsApp Order Alerts"],
        objective: "Digitize local kirana stores to compete with quick-commerce giants.",
        howItWorks: "Customers browse local stock -> Place order -> Shop owner accepts & packs -> Delivery boy delivers.",
        whyThisApp: "High recurrence; everyone needs groceries daily. Builds loyal local customer base.",
        businessIdea: "Start a dark store model in your neighborhood. Partner with 10-15 local kirana stores to fulfill orders. You manage the platform and delivery, they manage the stock. With a small delivery fleet, you can offer 30-min delivery, beating big players on speed and trust."
    },
    {
        id: 2, title: "Fish & Meat Booking App", description: "Morning pre-orders, evening pickup or delivery.", category: "Local & Daily-Need", icon: <ShoppingBag className="w-6 h-6" />, techStack: commonTechStack, features: ["Pre-order System", "Freshness Guarantee Badge", "Slot Booking"],
        objective: "Reduce waste by taking pre-orders for perishable goods.",
        howItWorks: "Users pre-book previous night -> Vendor buys exact quantity -> Fresh delivery in morning.",
        whyThisApp: "Solves the 'freshness' trust issue and eliminates vendor stock waste.",
        businessIdea: "Hygiene is the biggest concern for meat buyers. Position this as a premium, 'antibiotic-free' or 'fresh-catch' delivery service. Source directly from local fishermen or quality butchers. The pre-order model ensures zero wastage for you and guaranteed fresh produce for customers."
    },
    {
        id: 3, title: "Vegetable Vendor App", description: "Fixed customer list, daily fresh supply.", category: "Local & Daily-Need", icon: <ShoppingBag className="w-6 h-6" />, techStack: commonTechStack, features: ["Subscription Management", "Daily Route Optimization", "Bill Book"],
        objective: "Manage fixed daily routes and customer credit (khata) digitally.",
        howItWorks: "Vendor sets daily route -> App shows customer orders -> Auto-generates bills -> Tracks payments.",
        whyThisApp: "Organizes the unorganized street vendor sector; huge user base.",
        businessIdea: "Empower local cart vendors. Create a subscription model where customers get a 'daily fresh basket' delivered. Vendors get a fixed route and assured income, while you take a commission. It revolutionizes the chaotic street vending market."
    },
    {
        id: 4, title: "Milk Subscription App", description: "Monthly prepaid milk delivery management.", category: "Local & Daily-Need", icon: <ShoppingBag className="w-6 h-6" />, techStack: commonTechStack, features: ["Calendar View", "Pause/Resume Subscription", "Monthly Billing"],
        objective: "Automate tracking of daily milk delivery and monthly billing.",
        howItWorks: "User subscribes -> Daily auto-entry -> User marks 'vacation' if away -> Monthly auto-invoice.",
        whyThisApp: "Eliminates manual card/diary entry errors; ensures timely payments.",
        businessIdea: "Combine milk delivery with other morning essentials like bread, eggs, and newspapers. The 'Morning Basket' concept is verified and successful. Your app digitizes the billing, which is the biggest pain point for traditional milkmen."
    },
    {
        id: 5, title: "Rice & Ration Supply App", description: "Bulk local ration orders.", category: "Local & Daily-Need", icon: <ShoppingBag className="w-6 h-6" />, techStack: commonTechStack, features: ["Bulk Quantity Discounts", "Repeat Order", "Ledger Management"],
        objective: "Wholesale/Bulk delivery management for heavy staples.",
        howItWorks: "Households order monthly staples -> Vendor aggregates orders -> Bulk delivery planned.",
        whyThisApp: "High average order value; steady recurring revenue.",
        businessIdea: "Target housing societies for bulk group buying. Residents pool their orders for rice, flour, and pulses to get wholesale rates. You negotiate with millers directly, cutting out middlemen and passing savings to customers while keeping a healthy margin."
    },
    {
        id: 6, title: "Home Tiffin Service App", description: "Daily meal booking with weekly plans.", category: "Local & Daily-Need", icon: <ShoppingBag className="w-6 h-6" />, techStack: commonTechStack, features: ["Meal Planner Menu", "Veg/Non-Veg Toggle", "Feedback System"],
        objective: "Connect home cooks with office goers/students for healthy food.",
        howItWorks: "Cook posts weekly menu -> User subscribes/orders -> Delivery partner collects & drops.",
        whyThisApp: "Growing demand for hygienic, home-cooked meals in metro cities.",
        businessIdea: "Market this to corporate offices and PG students who crave 'Maa ke haath ka khana'. Onboard 5-10 tailored home chefs who specialize in different cuisines. The subscription model guarantees monthly recurring revenue effectively."
    },
    {
        id: 7, title: "Sweet Shop Pre-Order App", description: "Order sweets before festivals.", category: "Local & Daily-Need", icon: <ShoppingBag className="w-6 h-6" />, techStack: commonTechStack, features: ["Festival Catalog", "Gift Packing Options", "Advance Payment"],
        objective: "Manage festival rush and advance orders for bulk sweets.",
        howItWorks: "Shop lists festival specials -> Customers pre-book & pay -> Express pickup counter at shop.",
        whyThisApp: "Prevents overcrowding at shops during festivals; guarantees stock.",
        businessIdea: "Become the aggregator for famous local sweet shops that don't offer delivery. During festivals like Diwali or Durga Puja, offer 'Assorted Festival Boxes' containing specialties from multiple shops. This exclusive curated offering commands a premium."
    },
    {
        id: 8, title: "Bakery Order App", description: "Cake and snack pre-booking.", category: "Local & Daily-Need", icon: <ShoppingBag className="w-6 h-6" />, techStack: commonTechStack, features: ["Custom Cake Builder", "Pickup Scheduling", "Photo Upload"],
        objective: "Custom cake ordering and daily snack inventory management.",
        howItWorks: "Customer customizes cake (flavor/design) -> Baker confirms -> Delivery or Pickup scheduled.",
        whyThisApp: "Niche market with high emotional value (birthdays/events).",
        businessIdea: "Focus on customized celebration cakes. Allow users to upload designs from Pinterest/Instagram and get quotes from top local home-bakers. This 'Cake Concierge' service fills the gap between generic shop cakes and expensive boutique bakers."
    },
    {
        id: 9, title: "Water Jar Supply App", description: "Monthly water delivery subscription.", category: "Local & Daily-Need", icon: <ShoppingBag className="w-6 h-6" />, techStack: commonTechStack, features: ["QR Code Jar Tracking", "Stock Management", "Monthly Cards"],
        objective: "Track returnable assets (jars) and manage subscriptions.",
        howItWorks: "Driver scans jar QR on delivery -> App tracks inventory -> Monthly bill generated based on usage.",
        whyThisApp: "Solves the 'lost jar' problem and simplifies collection.",
        businessIdea: "The drinking water supply market is fragmented. Create a branded localized delivery service. Use the app to track jar assets (which often get lost) and automate monthly billing. You can eventually white-label the water jars for higher brand recall."
    },
    {
        id: 10, title: "Gas Stove Repair Booking App", description: "Local service booking.", category: "Local & Daily-Need", icon: <ShoppingBag className="w-6 h-6" />, techStack: commonTechStack, features: ["Service History", "Spare Parts Catalog", "Instant Calling"],
        objective: "Quick access to emergency kitchen repair services.",
        howItWorks: "User books issue -> Technician gets alert -> Visits home -> Bills via app.",
        whyThisApp: "Essential utility service with urgent demand.",
        businessIdea: "Aggregate freelance mechanics who usually sit idle. offer a '30-minute emergency response' guarantee for gas leaks or stove issues. Safety is a high-priority selling point that allows you to charge a premium for convenience."
    },

    // SERVICE-BASED APPS
    {
        id: 11, title: "Electrician Booking App", description: "Per-visit service charges.", category: "Service-Based", icon: <User className="w-6 h-6" />, techStack: commonTechStack, features: getFeatures("Service-Based"),
        objective: "On-demand access to verified electricians for small jobs.",
        howItWorks: "User selects issue (Fan/Light) -> App finds nearby electrician -> Fix & Pay.",
        whyThisApp: "High frequency of small electrical faults in every household.",
        businessIdea: "Launch a 'Quick-Fix' subscription for societies. For a small annual fee, households get priority visits and no visiting charges. This ensures customer loyalty and a steady cash flow, while mechanics get consistent work."
    },
    {
        id: 12, title: "Plumber Booking App", description: "Location-based job requests.", category: "Service-Based", icon: <User className="w-6 h-6" />, techStack: commonTechStack, features: getFeatures("Service-Based"),
        objective: "Emergency plumbing assistance platform.",
        howItWorks: "User reports leak/blockage -> Plumber accepts request -> Visits & resolves.",
        whyThisApp: "Urgent nature of plumbing issues creates instant demand.",
        businessIdea: "Target older apartment complexes with aging plumbing. Offer 'preventive maintenance packages' where you check for leaks and blocks quarterly. Positioning as 'Home Health Checkup' changes the perception from emergency repair to wellness."
    },
    {
        id: 13, title: "AC Repair Booking App", description: "Seasonal high-demand service.", category: "Service-Based", icon: <User className="w-6 h-6" />, techStack: commonTechStack, features: getFeatures("Service-Based"),
        objective: "Manage seasonal peaks for AC service and repair.",
        howItWorks: "User books AMC or one-time service -> Technician assigned -> Service history logged.",
        whyThisApp: "Extremely high demand in summer; recurring annual business.",
        businessIdea: "Offer an 'AC Health Pass' before summer. It includes servicing, gas top-up, and breakdown cover. During peak heat, getting a mechanic is hard; your subscribers get priority. This creates huge demand during the pre-season."
    },
    {
        id: 14, title: "Car Wash at Home App", description: "Doorstep car cleaning.", category: "Service-Based", icon: <User className="w-6 h-6" />, techStack: commonTechStack, features: getFeatures("Service-Based"),
        objective: "Convenient doorstep car cleaning service.",
        howItWorks: "User selects package (Interior/Exterior) -> Washer arrives on bike -> Washes car -> Payment.",
        whyThisApp: "Saves time for car owners; low investment for service providers.",
        businessIdea: "Eco-friendly waterless car wash at home. Market it to luxury car owners who fear scratches from daily cleaners. Use microfiber cloths and premium wax. The convenience of 'while you sleep' cleaning is a massive USP."
    },
    {
        id: 15, title: "Bike Repair On-Demand App", description: "Local mechanic discovery.", category: "Service-Based", icon: <User className="w-6 h-6" />, techStack: commonTechStack, features: getFeatures("Service-Based"),
        objective: "Breakdown assistance and doorstep servicing for bikes.",
        howItWorks: "User sends location -> Mechanic arrives with tools -> Fixes puncture/engine -> Paid.",
        whyThisApp: "Critical for stranded riders; consistent servicing needs.",
        businessIdea: "Roadside assistance subscription for bikers. Partner with garages every 5km. If a bike breaks down, the nearest mechanic is dispatched. It's like 'AAA for Bikes' in your city. Great for students and office commuters."
    },
    {
        id: 16, title: "House Cleaning App", description: "Per-room cleaning packages.", category: "Service-Based", icon: <User className="w-6 h-6" />, techStack: commonTechStack, features: getFeatures("Service-Based"),
        objective: "Professional deep cleaning services for homes.",
        howItWorks: "User chooses rooms/area -> Team arrives with equipment -> Deep cleans -> Rating.",
        whyThisApp: "Rising trend in metro cities for professional cleaning.",
        businessIdea: "Specialize in 'Deep Cleaning' for move-in/move-out tenants. Landlords want clean flats to show; tenants want their deposit back. Partner with real estate brokers to get leads automatically."
    },
    {
        id: 17, title: "Pest Control Lead App", description: "Generate service leads.", category: "Service-Based", icon: <User className="w-6 h-6" />, techStack: commonTechStack, features: getFeatures("Service-Based"),
        objective: "Connect users with reliable pest control experts.",
        howItWorks: "User inputs infestation details -> Agencies bid or accept -> Service scheduled.",
        whyThisApp: "Health and hygiene necessity; high ticket size.",
        businessIdea: "Offer an odorless, herbal pest control service. Parents and pet owners worry about chemicals. Market this strongly as 'Safe for Kids & Pets'. The annual contract model ensures you get paid year-round."
    },
    {
        id: 18, title: "RO Service Booking App", description: "Filter replacement & AMC.", category: "Service-Based", icon: <User className="w-6 h-6" />, techStack: commonTechStack, features: getFeatures("Service-Based"),
        objective: "Maintenance tracking for water purifiers.",
        howItWorks: "App tracks filter life -> Reminds user -> Auto-books technician for replacement.",
        whyThisApp: "Pure water is a necessity; AMC model ensures recurring income.",
        businessIdea: "The water quality in many areas is poor. Don't just repair; rent out RO machines. 'Pure water as a service' - customers pay a monthly fee for the machine and service. Zero ownership cost for them, lifetime value for you."
    },
    {
        id: 19, title: "Painter Booking App", description: "Home renovation leads.", category: "Service-Based", icon: <User className="w-6 h-6" />, techStack: commonTechStack, features: getFeatures("Service-Based"),
        objective: "Simplifying home painting projects.",
        howItWorks: "User requests quote -> Painter visits for measurement -> Estimate provided -> Work starts.",
        whyThisApp: "High value projects; organizes a chaotic market.",
        businessIdea: "Focus on 'Express Painting' - painting a room in a day using mechanized tools. Traditional painting takes weeks. Speed and cleanliness are your USPs to charge a premium from busy urban professionals."
    },
    {
        id: 20, title: "Appliance Installation App", description: "TV, geyser, chimney setup.", category: "Service-Based", icon: <User className="w-6 h-6" />, techStack: commonTechStack, features: getFeatures("Service-Based"),
        objective: "Expert installation for new appliances.",
        howItWorks: "User buys appliance -> Books installation -> Certified expert installs correctly.",
        whyThisApp: "Ensures safety and warranty compliance for expensive appliances.",
        businessIdea: "Partner with local electronics showrooms. They sell the TV/AC but struggle with installation coordination. Be their official 'Installation Partner'. You get the customer data immediately after purchase."
    },

    // EDUCATION & SKILL BUSINESSES
    {
        id: 21, title: "Local Tuition App", description: "Class-wise student enrollment.", category: "Education & Skill", icon: <BookOpen className="w-6 h-6" />, techStack: commonTechStack, features: getFeatures("Education"),
        objective: "Manage local tuition batches and fees.",
        howItWorks: "Tutor adds students -> Schedules classes -> Marks attendance -> Sends notes/homework.",
        whyThisApp: "Organizes the massive shadow education sector.",
        businessIdea: "Create a hyperlocal 'Star Tutor' network. Vetting is key. Parents trust recommendations. If you certify tutors after a test, parents will pay a premium for 'verified' tutors. Charge a commission on the first month's fee."
    },
    {
        id: 22, title: "Spoken English Coaching App", description: "Monthly batch management.", category: "Education & Skill", icon: <BookOpen className="w-6 h-6" />, techStack: commonTechStack, features: getFeatures("Education"),
        objective: "Virtual or hybrid coaching for language skills.",
        howItWorks: "Student enrolls -> Gets access to video lessons -> Practices via audio tasks -> Feedback.",
        whyThisApp: "High aspiration for English fluency in non-metro areas.",
        businessIdea: "Focus on 'Job-Interview Readiness'. Don't just teach grammar; teach confidence. Conduct mock AI interviews or peer-to-peer practice sessions. Aspiring job seekers in Tier-2 cities are desperate for this specific skill."
    },
    {
        id: 23, title: "Computer Training Institute App", description: "Course listings & fees.", category: "Education & Skill", icon: <BookOpen className="w-6 h-6" />, techStack: commonTechStack, features: getFeatures("Education"),
        objective: "Digitize operations for local computer centers.",
        howItWorks: "Institute lists courses (DCA, PGDCA) -> Students register -> Fee tracking -> Certification.",
        whyThisApp: "Essential for skill development institutes to look professional.",
        businessIdea: "Offer 'Weekend Bootcamps' for working professionals or college students (e.g., Advanced Excel, PowerBI). Local institutes often lack updated curriculum. Bring in industry experts for guest lectures via the app to add immense value."
    },
    {
        id: 24, title: "Abacus / Vedic Math App", description: "Parent-focused enrollment.", category: "Education & Skill", icon: <BookOpen className="w-6 h-6" />, techStack: commonTechStack, features: getFeatures("Education"),
        objective: "Gamified learning for kids.",
        howItWorks: "Child plays math games -> Progress tracked -> Parents view reports -> Monthly subscription.",
        whyThisApp: "Parents invest heavily in child development activities.",
        businessIdea: "Organize monthly 'Math Olympiads' via the app. Competition drives parental engagement. Winners get scholarships. This effectively gamifies the learning process and creates a viral loop among parents."
    },
    {
        id: 25, title: "Music / Dance Academy App", description: "Class schedules & fees.", category: "Education & Skill", icon: <BookOpen className="w-6 h-6" />, techStack: commonTechStack, features: getFeatures("Education"),
        objective: "Schedule management for performing arts.",
        howItWorks: "Academy schedules slots -> Students book slots -> Practice videos shared -> Showcase.",
        whyThisApp: "Streamlines scheduling and fee collection for hobby classes.",
        businessIdea: "Launch 'Hybrid Learning'. Students learn basics via app videos and attend weekly physical jam sessions. This scales the teacher's time (one-to-many online) while keeping the personal touch (physical jams)."
    },
    {
        id: 26, title: "Competitive Exam Prep App", description: "Paid notes & test series.", category: "Education & Skill", icon: <BookOpen className="w-6 h-6" />, techStack: commonTechStack, features: getFeatures("Education"),
        objective: "Sell study material and mock tests.",
        howItWorks: "Admin uploads PDF notes/Tests -> User buys pack -> Attempts test -> Gets analytics.",
        whyThisApp: "Scalable model; create content once, sell many times.",
        businessIdea: "Niche down to state-level exams (like WBPSC, TNPSC) where big ed-tech players aren't focused. The content is specific and competition is lower. Community features for doubt solving build high retention."
    },
    {
        id: 27, title: "Online Bengali Course App", description: "Regional language advantage.", category: "Education & Skill", icon: <BookOpen className="w-6 h-6" />, techStack: commonTechStack, features: getFeatures("Education"),
        objective: "Teach regional culture and literature.",
        howItWorks: "Course structure defined -> Video lectures uploaded -> Community discussion forum.",
        whyThisApp: "Targeted audience with strong cultural connection.",
        businessIdea: "Target the diaspora (Probashi Bengalis) who want their kids to learn their mother tongue. Connect them with retired teachers in Kolkata. It's high emotional value service with currency arbitrage potential."
    },
    {
        id: 28, title: "Skill Certification App", description: "Paid short-term courses.", category: "Education & Skill", icon: <BookOpen className="w-6 h-6" />, techStack: commonTechStack, features: getFeatures("Education"),
        objective: "Offer valid certificates for vocational skills.",
        howItWorks: "User completes modules -> Passes quiz -> Auto-generates verifiable certificate.",
        whyThisApp: "Certificates add value to job seekers' resumes.",
        businessIdea: "Partner with local MSMEs who need specific skills (e.g., GST filing, Tally). Create a course that guarantees an internship. 'Learn & Earn' is a powerful motivator for youth in small towns."
    },
    {
        id: 29, title: "School Assignment App", description: "Homework & notes distribution.", category: "Education & Skill", icon: <BookOpen className="w-6 h-6" />, techStack: commonTechStack, features: getFeatures("Education"),
        objective: "Communication bridge between teachers and parents/students.",
        howItWorks: "Teacher uploads assignment -> Student gets notification -> Submits photo of work -> Teacher grades.",
        whyThisApp: "Reduces communication gap and paper usage.",
        businessIdea: "Pitch this to affordable private schools that can't afford big ERPs. Offer it as a 'Digital Diary'. It saves printing costs for the school and gives parents real-time updates, making it a win-win."
    },
    {
        id: 30, title: "Coaching Centre CRM App", description: "Student & fee tracking.", category: "Education & Skill", icon: <BookOpen className="w-6 h-6" />, techStack: commonTechStack, features: getFeatures("Education"),
        objective: "Business management for coaching owners.",
        howItWorks: "Admin dashboard shows due fees, inquiries, and attendance trends -> Auto-SMS reminders.",
        whyThisApp: "Increases revenue collection and inquiry conversion.",
        businessIdea: "This is a B2B SaaS play. Small coaching centers lose 20% revenue due to uncollected fees. Your app automates reminders and blocks access to notes if fees aren't paid. The ROI for the coaching owner is immediate."
    },

    // SELLING & RESELLING BUSINESSES
    {
        id: 31, title: "Local Clothing Store App", description: "WhatsApp-integrated orders.", category: "Selling & Reselling", icon: <ShoppingBag className="w-6 h-6" />, techStack: commonTechStack, features: getFeatures("Selling"),
        objective: "Take a physical boutique online.",
        howItWorks: "Upload latest stock photos -> Share link on WhatsApp Status -> Customer clicks & buys.",
        whyThisApp: "Leverages existing customer trust to increase sales.",
        businessIdea: "Enable 'Live Selling'. Shop owners can go live on the app to show new stock. Customers can book instantly. It mimics the in-store experience and creates urgency ('Only 1 piece left!')."
    },
    {
        id: 32, title: "Saree & Boutique App", description: "Catalog-based selling.", category: "Selling & Reselling", icon: <ShoppingBag className="w-6 h-6" />, techStack: commonTechStack, features: getFeatures("Selling"),
        objective: "Showcase extensive saree collections easily.",
        howItWorks: "Filter by fabric/occasion -> Zoom in on designs -> Add to cart -> COD/Online Pay.",
        whyThisApp: "Visual appeal drives high sales in fashion.",
        businessIdea: "Offer 'Try at Home' for premium sarees. Customers shortlists 5 designs, you send a rep. They buy one. This high-touch model works wonders for expensive purchases where touch-and-feel is crucial."
    },
    {
        id: 33, title: "Handicraft Selling App", description: "Bengal artisan products.", category: "Selling & Reselling", icon: <ShoppingBag className="w-6 h-6" />, techStack: commonTechStack, features: getFeatures("Selling"),
        objective: "Global platform for local artisans.",
        howItWorks: "Artisan lists product -> Global buyer orders -> Shipping partner integrated -> Delivery.",
        whyThisApp: "Unique products with high export potential.",
        businessIdea: "Tell the story of the artisan. Don't just sell a 'Bamboo Basket'; sell 'Ram kaka's 40 years of weaving'. Storytelling increases the perceived value of handicrafts massively for urban and international buyers."
    },
    {
        id: 34, title: "Jewellery Showcase App", description: "Inquiry-based sales.", category: "Selling & Reselling", icon: <ShoppingBag className="w-6 h-6" />, techStack: commonTechStack, features: getFeatures("Selling"),
        objective: "Safe comparison and inquiry for expensive items.",
        howItWorks: "User browses designs -> 'Request Price' -> Video Call setup -> Finalize deal offline/securely.",
        whyThisApp: "High-ticket items require a trust-building interface.",
        businessIdea: "Virtual Try-On using AR (Augmented Reality). Let users see how a necklace looks on their selfie. It reduces the friction of buying expensive items online and sets you apart as a high-tech jeweller."
    },
    {
        id: 35, title: "Mobile Accessories App", description: "COD local delivery.", category: "Selling & Reselling", icon: <ShoppingBag className="w-6 h-6" />, techStack: commonTechStack, features: getFeatures("Selling"),
        objective: "High-volume sales of trending accessories.",
        howItWorks: "Select phone model -> Show covers/guards -> Fast local delivery.",
        whyThisApp: "Impulse buy market with high margins.",
        businessIdea: "Create 'Style Boxes' - a curated set of phone cover, cable protector, and grip holder matching a theme (e.g., Marvel, Floral). Bundling increases average order value significantly."
    },
    {
        id: 36, title: "Second-Hand Goods App", description: "Buy/sell locally.", category: "Selling & Reselling", icon: <ShoppingBag className="w-6 h-6" />, techStack: commonTechStack, features: getFeatures("Selling"),
        objective: "Hyperlocal classifieds for used items.",
        howItWorks: "Seller snaps photo -> Posts ad -> Buyer chats -> Meet & Exchange.",
        whyThisApp: "Sustainable and economically viable for cost-conscious users.",
        businessIdea: "Focus on 'Verified Refurbished' mobiles or laptops. Run 50 quality checks and offer a 6-month warranty. Trust is the missing link in the second-hand market. If you build trust, you build a brand."
    },
    {
        id: 37, title: "Book Reselling App", description: "Academic & exam books.", category: "Selling & Reselling", icon: <ShoppingBag className="w-6 h-6" />, techStack: commonTechStack, features: getFeatures("Selling"),
        objective: "Circular economy for educational books.",
        howItWorks: "Student sells old books -> Junior buys them -> Platform takes commission.",
        whyThisApp: "Textbooks are expensive; students always look for second-hand options.",
        businessIdea: "Launch a 'Book Exchange' library. Users donate old books to get credits, and use credits to take other books. You charge a small transaction fee. Ideally suits dense student hubs or residential complexes."
    },
    {
        id: 38, title: "Home Decor App", description: "Curtains, bedsheets, wall items.", category: "Selling & Reselling", icon: <ShoppingBag className="w-6 h-6" />, techStack: commonTechStack, features: getFeatures("Selling"),
        objective: "Lifestyle and aesthetic home improvement.",
        howItWorks: "Browse categories (Bedroom/Living) -> AR View (optional) -> Order.",
        whyThisApp: "Growing interest in home aesthetics and interior design.",
        businessIdea: "Offer 'Room Makeover Kits'. Instead of selling just a cushion, sell a 'Boho Living Room Look' (Curtains + Cushion + Rug). It simplifies decision making for customers and increases your basket size."
    },
    {
        id: 39, title: "Gift & Hampers App", description: "Festival-focused sales.", category: "Selling & Reselling", icon: <ShoppingBag className="w-6 h-6" />, techStack: commonTechStack, features: getFeatures("Selling"),
        objective: "Curated gifting solutions.",
        howItWorks: "Choose occasion -> Select hamper -> Add personal note -> Schedule delivery.",
        whyThisApp: "Convenience is king in the gifting market.",
        businessIdea: "Corporate Gifting is a goldmine. Use the app to let HRs customize hampers for employees. Bulk orders means high volume. Position yourself as the 'Employee Engagement Partner' for companies."
    },
    {
        id: 40, title: "Kids Toy Store App", description: "Local toy delivery.", category: "Selling & Reselling", icon: <ShoppingBag className="w-6 h-6" />, techStack: commonTechStack, features: getFeatures("Selling"),
        objective: "Instant joy for children.",
        howItWorks: "Browse by Age Group -> Video demo of toy -> Order -> Same-day delivery.",
        whyThisApp: "Parents spend willingly on kids; emotional purchase.",
        businessIdea: "Toy Rental Library. Kids outgrow toys in 2 months. Parents hate the waste. Let them subscribe to a 'Toy Box' that changes every month. It's sustainable and pocket-friendly."
    },

    // DIGITAL & MODERN BUSINESS IDEAS
    {
        id: 41, title: "Local Job Posting App", description: "Employers post jobs, candidates apply.", category: "Digital & Modern", icon: <Zap className="w-6 h-6" />, techStack: commonTechStack, features: getFeatures("Digital"),
        objective: "Connect local employers with blue-collar workforce.",
        howItWorks: "Shop owner posts 'Helper Wanted' -> Candidates apply -> Call directly.",
        whyThisApp: "Massive gap in local hiring for non-corporate jobs.",
        businessIdea: "Focus on 'Hyperlocal Blue Collar' jobs. Cooks, maids, drivers usually find work via word of mouth. Your app organizes this. Verify candidates with Aadhaar to offer safety to employers. Charge a small fee for contact details."
    },
    {
        id: 42, title: "Real Estate Listing App", description: "Flat, land & rental leads.", category: "Digital & Modern", icon: <Zap className="w-6 h-6" />, techStack: commonTechStack, features: getFeatures("Digital"),
        objective: "Property discovery without heavy brokerage.",
        howItWorks: "Owner lists property -> Buyer filters by area/budget -> Contact Owner.",
        whyThisApp: "High-value transactions; demand for direct connections.",
        businessIdea: "No-Brokerage model for PGs and Hostels. Students move cities annually. They need cheap, reliable accommodation fast. Verify listings personally to avoid scams. Students will readily pay a small convenience fee."
    },
    {
        id: 43, title: "Astrology Consultation App", description: "Paid chat/call booking.", category: "Digital & Modern", icon: <Zap className="w-6 h-6" />, techStack: commonTechStack, features: getFeatures("Digital"),
        objective: "Monetize astrological expertise.",
        howItWorks: "User recharges wallet -> Selects Astrologer -> Chat/Call per minute -> Advice given.",
        whyThisApp: "Huge cultural belief system drives massive traffic.",
        businessIdea: "Offer 'Micro-Consultations' - one question for ₹50. It lowers the entry barrier. Users who get a good answer often upgrade to a full session. It's a classic 'freemium' model adapted for astrology."
    },
    {
        id: 44, title: "Temple Donation App", description: "Online puja booking.", category: "Digital & Modern", icon: <Zap className="w-6 h-6" />, techStack: commonTechStack, features: getFeatures("Digital"),
        objective: "Remote spiritual access and donations.",
        howItWorks: "Devotee selects Puja -> Pays donation -> Priest performs puja -> Video/Prasad sent.",
        whyThisApp: "Connects distant devotees with their innovative temples.",
        businessIdea: "Partner with smaller, ancient temples that need funds for renovation but lack reach. Tell their history. Devotees love to support heritage restoration. You take a small platform fee for facilitating the transaction."
    },
    {
        id: 45, title: "Event Management App", description: "Birthday & wedding bookings.", category: "Digital & Modern", icon: <Zap className="w-6 h-6" />, techStack: commonTechStack, features: getFeatures("Digital"),
        objective: "One-stop shop for celebration planning.",
        howItWorks: "User posts requirement -> Venues/Caterers send quotes -> Compare & Book.",
        whyThisApp: "Simplifies the complex process of event organization.",
        businessIdea: "Create 'Party in a Box' packages. You coordinate everything - decoration, cake, snacks. The customer just clicks 'Book 5th Birthday Party'. Convenience for busy parents is your biggest selling point."
    },
    {
        id: 46, title: "Influencer Portfolio App", description: "Brand inquiry generation.", category: "Digital & Modern", icon: <Zap className="w-6 h-6" />, techStack: commonTechStack, features: getFeatures("Digital"),
        objective: "Professional showcase for content creators.",
        howItWorks: "Influencer connects social stats -> Brands view reach/engagement -> Request collab.",
        whyThisApp: "Creator economy is booming; influencers need professional tools.",
        businessIdea: "Micro-influencers (5k-50k followers) have high engagement but no managers. Build a platform where local brands (cafes, boutiques) can hire them for small barter or paid collabs. You democratize influencer marketing."
    },
    {
        id: 47, title: "Local News & Ads App", description: "Paid local advertisements.", category: "Digital & Modern", icon: <Zap className="w-6 h-6" />, techStack: commonTechStack, features: getFeatures("Digital"),
        objective: "Hyperlocal news and advertising platform.",
        howItWorks: "Reporter posts local news -> Users read free -> Businesses pay for banner ads.",
        whyThisApp: "People care deeply about what happens in their immediate neighborhood.",
        businessIdea: "Citizen Journalism. Reward users for reporting local potholes, accidents, or events. Verify and publish. Local businesses are desperate to advertise to a hyper-local audience which Google/FB ads often miss."
    },
    {
        id: 48, title: "Travel & Tour Booking App", description: "Local tour packages.", category: "Digital & Modern", icon: <Zap className="w-6 h-6" />, techStack: commonTechStack, features: getFeatures("Digital"),
        objective: "Promote and sell local travel experiences.",
        howItWorks: "Agency lists weekend trips -> User books seat -> Itinerary managed via app.",
        whyThisApp: "Short, frequent trips are a growing lifestyle trend.",
        businessIdea: "Curate 'Unseen Weekend Getaways'. Don't sell Digha or Darjeeling. Sell hidden villages or farmstays nearby. Urban folks are bored of standard spots and crave unique, offbeat experiences."
    },
    {
        id: 49, title: "Wedding Vendor App", description: "Photographer, caterer listings.", category: "Digital & Modern", icon: <Zap className="w-6 h-6" />, techStack: commonTechStack, features: getFeatures("Digital"),
        objective: "Directory for wedding services.",
        howItWorks: "Vendors list portfolios -> Couples shortlists -> In-app chat/inquiry.",
        whyThisApp: "Wedding industry is recession-proof and high-spending.",
        businessIdea: "'Last Minute Wedding Deals'. Wedding dates are fixed. If a photographer or venue is unbooked for a date, they lose money. Help them sell these slots at a discount to couples with tighter budgets."
    },
    {
        id: 50, title: "Community Marketplace App", description: "Hyperlocal buying/selling.", category: "Digital & Modern", icon: <Zap className="w-6 h-6" />, techStack: commonTechStack, features: getFeatures("Digital"),
        objective: "Build a self-sustaining local economy.",
        howItWorks: "Residents list services/products -> Neighbors buy/barter -> Community grows.",
        whyThisApp: "Fosters community spirit and supports local economy.",
        businessIdea: "Apartment Complex Management. Only for residents of a complex to buy/sell/borrow items. 'Borrow a drill', 'Sell a cycle'. Trust is automatic as everyone is a neighbor. It builds a sticky, highly engaged user base."
    },
];

const inquirySchema = z.object({
    name: z.string().min(2, "Name is required"),
    businessName: z.string().min(2, "Business name is required"),
    appName: z.string().optional(),
    location: z.string().min(2, "Location is required"),
    additionalInfo: z.string().optional(),
});

function BusinessAppInquiryDialog({ selectedApp, trigger }: { selectedApp?: string, trigger: React.ReactNode }) {
    const form = useForm<z.infer<typeof inquirySchema>>({
        resolver: zodResolver(inquirySchema),
        defaultValues: {
            name: "",
            businessName: "",
            appName: selectedApp || "",
            location: "",
            additionalInfo: "",
        },
    });

    const onSubmit = (data: z.infer<typeof inquirySchema>) => {
        const message = `*New Business App Inquiry*
Name: ${data.name}
Business Name: ${data.businessName}
App Idea: ${data.appName || "Not specified"}
Location: ${data.location}
Other Info: ${data.additionalInfo || "N/A"}
`;
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/919091156095?text=${encodedMessage}`, "_blank");
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                {trigger}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Start Your Business Journey</DialogTitle>
                    <DialogDescription>
                        Fill in the details below to discuss your app idea with our experts on WhatsApp.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Your Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="John Doe" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="businessName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Business Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="My Dream Store" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="appName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>App Name / Idea</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g. Local Grocery App" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="location"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Location</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Kolkata, West Bengal" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="additionalInfo"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Other Requirements</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Any specific features or questions?" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full gap-2 bg-green-600 hover:bg-green-700 text-white">
                            <MessageSquare className="w-4 h-4" /> Send via WhatsApp
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}

function AppDetailDialog({ app, children }: { app: AppIdea, children: React.ReactNode }) {
    const { toast } = useToast();

    const handleCopyInput = () => {
        const textToCopy = `*App Idea: ${app.title}*
Category: ${app.category}
Description: ${app.description}

*Business Objective:*
${app.objective}

*Business Vision:*
${app.businessIdea || "N/A"}

*Key Market Advantage:*
${app.whyThisApp}

*Core Features:*
${app.features.join(", ")}`.trim();

        navigator.clipboard.writeText(textToCopy);
        toast({
            title: "Copied to clipboard",
            description: "App details copied successfully!",
        });
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                {app.icon}
                            </div>
                            <div>
                                <DialogTitle className="text-2xl">{app.title}</DialogTitle>
                                <Badge variant="secondary" className="mt-1">{app.category}</Badge>
                            </div>
                        </div>
                        <Button variant="ghost" size="icon" onClick={handleCopyInput} title="Copy Details">
                            <Copy className="w-5 h-5" />
                        </Button>
                    </div>
                    <DialogDescription className="text-base text-foreground/80 pt-2">
                        {app.description}
                    </DialogDescription>
                </DialogHeader>

                <div className="grid md:grid-cols-2 gap-6 py-4">
                    <div className="space-y-6">
                        {app.businessIdea && (
                            <div className="bg-primary/5 p-4 rounded-lg space-y-2 border border-primary/10">
                                <h4 className="font-semibold flex items-center gap-2 text-primary">
                                    <Sparkles className="w-4 h-4" /> Business Opportunity
                                </h4>
                                <p className="text-sm text-foreground/90 leading-relaxed italic">
                                    "{app.businessIdea}"
                                </p>
                            </div>
                        )}

                        <div className="bg-secondary/20 p-4 rounded-lg space-y-2">
                            <h4 className="font-semibold flex items-center gap-2 text-primary">
                                <Target className="w-4 h-4" /> Business Objective
                            </h4>
                            <p className="text-sm text-foreground/90 leading-relaxed">
                                {app.objective}
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h4 className="font-semibold flex items-center gap-2">
                                <Zap className="w-4 h-4 text-primary" /> Key Market Advantage
                            </h4>
                            <p className="text-sm border-l-2 border-primary pl-3 italic text-muted-foreground">
                                "{app.whyThisApp}"
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h4 className="font-semibold flex items-center gap-2">
                                <Layers className="w-4 h-4 text-primary" /> Tech Stack
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {app.techStack.map(tech => (
                                    <Badge key={tech} variant="outline" className="bg-background">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-3">
                            <h4 className="font-semibold flex items-center gap-2">
                                <Info className="w-4 h-4 text-primary" /> How It Works
                            </h4>
                            <div className="text-sm bg-secondary/10 p-4 rounded-lg border border-border">
                                {app.howItWorks.split('->').map((step, i) => (
                                    <div key={i} className="flex gap-2 mb-2 last:mb-0">
                                        <span className="font-bold text-primary">{i + 1}.</span>
                                        <span>{step.trim()}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-3">
                            <h4 className="font-semibold flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-500" /> Core Features
                            </h4>
                            <ul className="space-y-2">
                                {app.features.map(feature => (
                                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" /> {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <DialogFooter className="flex-col sm:flex-row gap-3 pt-4 border-t sticky bottom-0 bg-background/95 backdrop-blur z-10">
                    <BusinessAppInquiryDialog
                        selectedApp={app.title}
                        trigger={
                            <Button size="lg" className="w-full sm:w-auto shadow-md">
                                Start {app.title} Now
                            </Button>
                        }
                    />
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default function BusinessAppCatalog() {
    return (
        <>
            <Helmet>
                <title>Start Your Business | 50 App Ideas Catalog</title>
                <meta name="description" content="Launch your business with our 50 Business App Ideas. Low cost, high impact PWA + Firebase solutions." />
            </Helmet>

            <div className="min-h-screen bg-background pt-24 pb-12">
                {/* Banner Section */}
                <section className="relative overflow-hidden mb-16">
                    <div className="absolute inset-0 bg-primary/5 -skew-y-3 z-0 transform origin-top-left scale-110" />
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                            <div className="lg:w-1/2 space-y-6">
                                <Badge variant="outline" className="border-primary text-primary px-4 py-1 text-sm font-semibold rounded-full bg-primary/10">
                                    Business Launchpad
                                </Badge>
                                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
                                    <span className="text-primary">50</span> Business App <br /> Catalog
                                </h1>
                                <p className="text-xl text-muted-foreground max-w-lg">
                                    Browse our comprehensive collection of 50 business ideas, tailored to launch your entrepreneurship journey.
                                </p>
                                <div className="bg-card border border-border p-6 rounded-xl shadow-lg inline-block w-full max-w-md">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-lg font-medium text-foreground">One Time Fee</span>
                                        <span className="text-2xl font-bold text-primary">Starting ₹15,000</span>
                                    </div>
                                    <div className="space-y-2 text-sm text-foreground/80">
                                        <div className="flex items-center gap-2">
                                            <ShieldCheck className="w-4 h-4 text-green-500" />
                                            <span>No Advance Payment</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            <span>No Maintenance Required</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Zap className="w-4 h-4 text-green-500" />
                                            <span>Launch Fast</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4 pt-2">
                                    <BusinessAppInquiryDialog
                                        trigger={
                                            <Button size="lg" className="rounded-full px-8 shadow-lg hover:shadow-primary/25 transition-all">
                                                Get Started <ArrowRight className="ml-2 w-4 h-4" />
                                            </Button>
                                        }
                                    />
                                    <Link href="#apps">
                                        <Button variant="outline" size="lg" className="rounded-full px-8">
                                            View Catalog
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                            <div className="lg:w-1/2 relative bg-card p-8 rounded-2xl shadow-xl border border-border">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <Laptop className="w-5 h-5 text-primary" />
                                    Tech Stack & Support
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-2 rounded-lg text-primary">
                                            <div className="font-bold">PWA</div>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground">PWA App + Firebase Backend</h4>
                                            <p className="text-sm text-muted-foreground">Modern Progressive Web App technology ensuring performance and reliability.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-2 rounded-lg text-primary">
                                            <User className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground">Target Audience</h4>
                                            <p className="text-sm text-muted-foreground">New Entrepreneurs | Local Businesses | Side Hustles</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-2 rounded-lg text-primary">
                                            <MessageSquare className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground">Consultancy & Support</h4>
                                            <p className="text-sm text-muted-foreground">Full handholding support and consultancy to register your business if required.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Catalog Section */}
                <section id="apps" className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Explore Our Catalog</h2>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                        <p className="mt-4 text-muted-foreground">Click on any card to view detailed run-down, objective and features</p>
                    </div>

                    <div className="grid gap-12">
                        {categories.map((category) => (
                            <div key={category} className="scroll-mt-24" id={category.replace(/\s+/g, '-').toLowerCase()}>
                                <div className="mb-8">
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className="h-10 w-1 bg-primary rounded-full"></div>
                                        <h3 className="text-2xl font-bold text-foreground">{category} Businesses</h3>
                                    </div>
                                    <p className="text-muted-foreground ml-5">{categoryDescriptions[category]}</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                                    {allApps
                                        .filter((app) => (category === "Local & Daily-Need" ? app.category.includes("Daily-Need") : app.category.includes(category.split(" ")[0])))
                                        .map((app, index) => (
                                            <motion.div
                                                key={app.id}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                            >
                                                <AppDetailDialog app={app}>
                                                    <div className="group relative bg-card hover:bg-secondary/20 border border-border/50 hover:border-primary/50 transition-all duration-300 rounded-3xl p-5 cursor-pointer h-full flex flex-col hover:shadow-2xl hover:shadow-primary/5">

                                                        <div className="flex items-start gap-4 mb-4">
                                                            {/* Generated App Icon */}
                                                            <AppIconBox id={app.id} title={app.title} category={app.category} />

                                                            <div className="space-y-1">
                                                                <h4 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2">
                                                                    {app.title}
                                                                </h4>
                                                                <span className="inline-flex items-center text-xs font-medium text-muted-foreground bg-secondary/50 px-2 py-0.5 rounded-full">
                                                                    {app.category}
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-grow">
                                                            {app.description}
                                                        </p>

                                                        <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between">
                                                            <div className="flex -space-x-2">
                                                                {[1, 2, 3].map(i => (
                                                                    <div key={i} className="w-6 h-6 rounded-full bg-slate-800 border-2 border-background flex items-center justify-center text-[8px] text-white font-bold">
                                                                        {["U", "V", "A"][i - 1]}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                            <div className="text-xs font-bold text-primary flex items-center bg-primary/10 px-3 py-1.5 rounded-full group-hover:bg-primary group-hover:text-white transition-all">
                                                                OPEN APP <ArrowRight className="w-3 h-3 ml-1" />
                                                            </div>
                                                        </div>

                                                        {/* Decorative 'Install' Overlay effect on hover could go here, keeping it clean for now */}
                                                    </div>
                                                </AppDetailDialog>
                                            </motion.div>
                                        ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="container mx-auto px-4 mt-20">
                    <div className="bg-gradient-to-r from-primary/90 to-primary text-primary-foreground rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden text-center">
                        <div className="absolute top-0 right-0 p-12 bg-white/10 rounded-full transform translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 p-12 bg-black/10 rounded-full transform -translate-x-1/2 translate-y-1/2 blur-2xl"></div>

                        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
                            <p className="text-lg opacity-90 mb-8">
                                Don't wait! Grab this opportunity to launch your own business with our affordable, high-quality app solutions.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <BusinessAppInquiryDialog
                                    trigger={
                                        <Button size="lg" variant="secondary" className="font-bold text-primary rounded-full px-8 shadow-lg">
                                            Book Your App Now
                                        </Button>
                                    }
                                />
                                <BusinessAppInquiryDialog
                                    trigger={
                                        <Button size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 rounded-full px-8">
                                            Contact Expert
                                        </Button>
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
