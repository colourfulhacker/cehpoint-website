import { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import {
  ShoppingCart,
  BookOpen,
  DollarSign,
  Heart,
  Building,
  Truck,
  Film,
  Users,
  Blocks,
  Brain,
  Wifi,
  Shield,
  Factory,
  Plane,
  Utensils,
  GraduationCap,
  Car,
  Home,
  Briefcase,
  ArrowUpRight,
  Sparkles
} from "lucide-react";

// --- Data (Strictly Professional - No Themes) ---
const industries = [
  {
    title: "Innovative IT Services",
    icon: Brain,
    description: "Cutting-edge technology solutions tailored for your business growth. We deliver scalable, robust, and future-ready IT infrastructure.",
    features: ["Custom Software", "Cloud Architecture", "Digital Transformation", "Legacy Modernization"],
    cost: "Custom Quote",
    time: "2-4 Weeks",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Cyber Security",
    icon: Shield,
    description: "Comprehensive protection strategies safeguarding your digital assets against evolving threats.",
    features: ["Vulnerability Assessment", "Penetration Testing", "Compliance", "Threat Monitoring"],
    cost: "From ₹15,000",
    time: "1 Week",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    title: "E-commerce",
    icon: ShoppingCart,
    description: "Intelligent recommendations and seamless omnichannel integration.",
    features: ["Custom Storefronts", "Payment Gateways", "Inventory Mgmt", "UX Design"],
    cost: "From ₹25,000",
    time: "3-5 Weeks",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Edutech",
    icon: GraduationCap,
    description: "Adaptive learning platforms and virtual classrooms.",
    features: ["LMS Development", "Virtual Classrooms", "Student Analytics", "Gamified Learning"],
    cost: "From ₹30,000",
    time: "4-6 Weeks",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Fintech",
    icon: DollarSign,
    description: "Secure financial technology. Digital wallets to blockchain.",
    features: ["Secure Transactions", "Blockchain", "Compliance", "Financial Analytics"],
    cost: "From ₹50,000",
    time: "6-8 Weeks",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Healthcare",
    icon: Heart,
    description: "HIPAA-compliant telemedicine and patient management.",
    features: ["Telemedicine Apps", "EHR Systems", "Medical IoT", "Patient Portals"],
    cost: "From ₹45,000",
    time: "5-7 Weeks",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Manufacturing",
    icon: Factory,
    description: "Industry 4.0 with IoT and predictive maintenance.",
    features: ["IoT Monitoring", "Predictive Maintenance", "Smart Factory", "Supply Chain"],
    cost: "From ₹60,000",
    time: "8+ Weeks",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Real Estate",
    icon: Building,
    description: "PropTech with virtual tours and smart contracts.",
    features: ["Virtual Tours", "Smart Contracts", "Property Mgmt", "Listings"],
    cost: "From ₹35,000",
    time: "4-6 Weeks",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Logistics",
    icon: Truck,
    description: "Route optimization and fleet management.",
    features: ["Route Optimization", "Fleet Mgmt", "Real-time Tracking", "Delivery Apps"],
    cost: "From ₹40,000",
    time: "5-7 Weeks",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Travel & Tourism",
    icon: Plane,
    description: "Booking engines and experience management.",
    features: ["Booking Engines", "Itinerary Planners", "Travel CRM", "Mobile Apps"],
    cost: "From ₹30,000",
    time: "4-6 Weeks",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Food & Beverage",
    icon: Utensils,
    description: "Restaurant tech with ordering and inventory systems.",
    features: ["Online Ordering", "POS Systems", "Inventory Mgmt", "Delivery"],
    cost: "From ₹20,000",
    time: "3-4 Weeks",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Automotive",
    icon: Car,
    description: "Connected vehicle platforms and smart mobility.",
    features: ["Fleet Telematics", "Service Scheduling", "Connected Car", "Dealer Mgmt"],
    cost: "From ₹55,000",
    time: "6-9 Weeks",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    title: "SaaS & Enterprise",
    icon: Blocks,
    description: "Scalable cloud software with enterprise integration.",
    features: ["Multi-tenant", "API Development", "Subscription Billing", "Integrations"],
    cost: "Custom",
    time: "Scale Dependent",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Media",
    icon: Film,
    description: "Streaming platforms and content management.",
    features: ["Video Streaming", "Content CMS", "Live Broadcasting", "Analytics"],
    cost: "From ₹40,000",
    time: "5-7 Weeks",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Government",
    icon: Briefcase,
    description: "Secure digital transformation for public sector.",
    features: ["Citizen Portals", "E-Governance", "Data Security", "Public Service Apps"],
    cost: "Tender Based",
    time: "Project Based",
    span: "md:col-span-2 md:row-span-1",
  },
];

// --- Components ---

function MasterpieceCard({ item }: { item: typeof industries[0] }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative rounded-3xl border border-white/5 bg-[#0a0a0a] overflow-hidden transition-all duration-500 hover:border-primary/50 ${item.span}`}
      onMouseMove={handleMouseMove}
    >
      {/* 
          STRICT BRANDING ENFORCEMENT:
          - Background: #0a0a0a (Deep Dark)
          - Border: White/5 (Subtle) -> Primary/50 (Violet on Hover)
          - No Rainbow Gradients.
      */}

      {/* Spotlight Effect - Pure Primary (Violet) */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(124, 58, 237, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative h-full p-8 flex flex-col justify-between z-10">
        {/* Icon Header */}
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white group-hover:text-primary group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-500">
            <item.icon className="h-6 w-6" />
          </div>
          {/* Subtle "Active" Indicator - Accent Color (Orange) */}
          <div className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent group-hover:shadow-[0_0_10px_rgba(249,115,22,0.6)] transition-all duration-500" />
        </div>

        {/* Content */}
        <div>
          <h3 className="text-xl font-display font-medium text-white mb-3 group-hover:text-primary-foreground transition-colors duration-300">
            {item.title}
          </h3>
          <p className="text-sm text-zinc-400 font-light leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
            {item.description}
          </p>
        </div>

        {/* Footer / Features Reveal */}
        <div className="mt-8 pt-6 border-t border-white/5 group-hover:border-white/10 transition-colors duration-500">
          {/* Default State: Metrics */}
          <div className="flex justify-between items-center group-hover:opacity-0 transition-opacity duration-300 absolute w-[85%]">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold">Starts From</p>
              <p className="text-sm font-medium text-zinc-300">{item.cost}</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold">Timeline</p>
              <p className="text-sm font-medium text-zinc-300">{item.time}</p>
            </div>
          </div>

          {/* Hover State: Features */}
          <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
            <ul className="grid grid-cols-2 gap-2">
              {item.features.slice(0, 4).map((feat, i) => (
                <li key={i} className="flex items-center text-[11px] text-zinc-400">
                  <ArrowUpRight className="w-2.5 h-2.5 mr-1.5 text-primary" />
                  {feat}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function IndustrySolutions() {
  return (
    <section className="py-32 bg-black relative overflow-hidden" data-testid="industry-solutions-masterpiece">
      {/* 
          MASTERPIECE BACKGROUND 
          - Deep Black Base
          - Subtle Violet Fog (Primary)
          - No Noise/Grid clutter
      */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium uppercase tracking-widest mb-6 backdrop-blur-md">
              <span className="text-xl">🌐</span>
              <span>Global Expertise</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-medium text-white tracking-tight leading-[1.1]">
              Industries <br />
              <span className="text-zinc-500">Reimagined.</span>
            </h2>
          </div>
          <div className="max-w-xs text-zinc-400 text-sm font-light leading-relaxed mb-2">
            We engineer digital dominance across diverse sectors, transforming legacy systems into future-proof powerhouses.
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(320px,auto)]">
          {industries.map((item, i) => (
            <MasterpieceCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
