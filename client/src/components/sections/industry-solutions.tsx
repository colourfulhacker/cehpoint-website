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
  TreePine,
  Briefcase,
  Music,
} from "lucide-react"

export default function IndustrySolutions() {
  const industries = [
    {
      icon: Brain,
      title: "Innovative IT Services",
      description:
        "Cutting-edge technology solutions tailored for your business growth. We deliver scalable, robust, and future-ready IT infrastructure.",
      features: [
        "Custom Software Development",
        "Cloud Architecture",
        "Digital Transformation",
        "Legacy Modernization",
      ],
      growth: "High Impact",
      projects: "200+",
    },
    {
      icon: Shield,
      title: "Cyber Security",
      description:
        "Comprehensive security audits and protection strategies. We safeguard your digital assets against evolving threats with advanced protocols.",
      features: ["Vulnerability Assessment", "Penetration Testing", "Security Compliance", "Threat Monitoring"],
      growth: "Critical",
      projects: "150+",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Development",
      description:
        "Transform shopping experiences with intelligent recommendations and seamless omnichannel integration that boosts sales and customer retention.",
      features: [
        "Custom Storefronts",
        "Payment Gateway Integration",
        "Inventory Management",
        "User Experience Design",
      ],
      growth: "35% YoY",
      projects: "150+",
    },
    {
      icon: BookOpen,
      title: "Edutech Solutions",
      description:
        "Revolutionize education with adaptive learning platforms, virtual classrooms, and student management systems.",
      features: ["LMS Development", "Virtual Classrooms", "Student Analytics", "Gamified Learning"],
      growth: "28% YoY",
      projects: "85+",
    },
    {
      icon: DollarSign,
      title: "Fintech Applications",
      description:
        "Secure and compliant financial technology solutions. From digital wallets to blockchain integration, we build trust.",
      features: ["Secure Transactions", "Blockchain Integration", "Regulatory Compliance", "Financial Analytics"],
      growth: "42% YoY",
      projects: "120+",
    },
    {
      icon: Heart,
      title: "Healthcare & Medical",
      description:
        "HIPAA-compliant healthcare solutions including telemedicine platforms, patient management, and diagnostic tools.",
      features: ["Telemedicine Apps", "EHR Systems", "Medical IoT", "Patient Portals"],
      growth: "31% YoY",
      projects: "95+",
    },
    {
      icon: Factory,
      title: "Manufacturing & IoT",
      description:
        "Industry 4.0 solutions with IoT integration, predictive maintenance, and supply chain optimization.",
      features: ["IoT Monitoring", "Predictive Maintenance", "Smart Factory", "Supply Chain Ops"],
      growth: "24% YoY",
      projects: "70+",
    },
    {
      icon: Building,
      title: "Real Estate (PropTech)",
      description: "Innovative property technology solutions with virtual tours, smart contracts, and automated property management.",
      features: ["Virtual Tours", "Smart Contracts", "Property Management", "Listing Portals"],
      growth: "29% YoY",
      projects: "65+",
    },
    {
      icon: Truck,
      title: "Logistics & Supply Chain",
      description: "Smart logistics with route optimization, fleet management, and real-time tracking technologies.",
      features: ["Route Optimization", "Fleet Management", "Real-time Tracking", "Delivery Apps"],
      growth: "26% YoY",
      projects: "80+",
    },
    {
      icon: Plane,
      title: "Travel & Tourism",
      description:
        "Comprehensive travel platforms with booking systems, itinerary planning, and experience management.",
      features: ["Booking Engines", "Itinerary Planners", "Travel CRM", "Mobile Travel Apps"],
      growth: "33% YoY",
      projects: "45+",
    },
    {
      icon: Utensils,
      title: "Food & Beverage",
      description: "Restaurant tech with ordering systems, inventory management, and customer experience optimization.",
      features: ["Online Ordering", "POS Systems", "Inventory Mgmt", "Delivery Integration"],
      growth: "27% YoY",
      projects: "60+",
    },
    {
      icon: Car,
      title: "Automotive",
      description:
        "Connected vehicle platforms with fleet management, maintenance tracking, and smart mobility solutions.",
      features: ["Fleet Telematics", "Service Scheduling", "Connected Car Apps", "Dealer Management"],
      growth: "22% YoY",
      projects: "40+",
    },
    {
      icon: Blocks,
      title: "SaaS & Enterprise Software",
      description:
        "Scalable cloud-based software solutions with multi-tenancy, subscription management, and enterprise integrations.",
      features: ["Multi-tenant Architecture", "API Development", "Subscription Billing", "Enterprise Integrations"],
      growth: "38% YoY",
      projects: "110+",
    },
    {
      icon: Film,
      title: "Media & Entertainment",
      description:
        "Streaming platforms, content management systems, and digital media solutions for modern entertainment.",
      features: ["Video Streaming", "Content CMS", "Live Broadcasting", "Media Analytics"],
      growth: "30% YoY",
      projects: "55+",
    },
    {
      icon: Briefcase,
      title: "Government & Public Sector",
      description:
        "Secure, compliant digital transformation solutions for government agencies and public services.",
      features: ["Citizen Portals", "E-Governance", "Data Security", "Public Service Apps"],
      growth: "19% YoY",
      projects: "35+",
    },
  ]

  return (
    <section id="services" className="py-24 bg-secondary/50" data-testid="industry-solutions-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6">
            <span className="text-sm font-medium text-accent">🌍 Global Industry Coverage</span>
          </div>
          <h2
            className="font-display font-bold text-4xl md:text-7xl mb-8 tracking-tight"
            data-testid="industry-solutions-title"
          >
            Transforming Every
            <span className="text-gradient"> Industry</span>
          </h2>
          <p
            className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light"
            data-testid="industry-solutions-subtitle"
          >
            From startups to Fortune 500 companies, we deliver enterprise-grade solutions across every business vertical
            with cutting-edge technology and measurable outcomes.
          </p>
        </div>

        <div className="mb-20 animate-fade-up">
          <div className="glass-intense rounded-3xl p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-50"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 gradient-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-accent uppercase tracking-wider">
                    Full Spectrum Services
                  </span>
                  <div className="w-3 h-3 gradient-accent rounded-full animate-pulse"></div>
                </div>
              </div>

              <div className="max-w-5xl mx-auto text-center">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                  We offer a <span className="text-primary font-semibold">full spectrum of services</span>, including
                  software development, cloud infrastructure, IT consulting, and cybersecurity solutions such as
                  penetration testing, vulnerability assessments, and security compliance.
                </p>

                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent flex-1 max-w-20"></div>
                  <div className="w-2 h-2 gradient-primary rounded-full"></div>
                  <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent flex-1 max-w-20"></div>
                </div>

                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Every project we undertake is built with <span className="text-accent font-semibold">innovation</span>
                  , <span className="text-primary font-semibold">reliability</span>, and{" "}
                  <span className="text-accent font-semibold">protection</span> in mind — ensuring that your technology
                  not only works but stays secure.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="text-center p-4 rounded-xl bg-background/50 backdrop-blur-sm">
                  <div className="w-8 h-8 gradient-primary rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <Blocks className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-foreground">Development</span>
                </div>
                <div className="text-center p-4 rounded-xl bg-background/50 backdrop-blur-sm">
                  <div className="w-8 h-8 gradient-primary rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <Wifi className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-foreground">Cloud Infrastructure</span>
                </div>
                <div className="text-center p-4 rounded-xl bg-background/50 backdrop-blur-sm">
                  <div className="w-8 h-8 gradient-primary rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-foreground">IT Consulting</span>
                </div>
                <div className="text-center p-4 rounded-xl bg-background/50 backdrop-blur-sm">
                  <div className="w-8 h-8 gradient-primary rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-foreground">Cybersecurity</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon
            const serviceId = industry.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
            return (
              <div
                id={serviceId}
                key={industry.title}
                className="glass-intense rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover-lift group relative overflow-hidden scroll-mt-24"
                data-testid={`industry-card-${industry.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                role="article"
                aria-labelledby={`industry-title-${industry.title.toLowerCase()}`}
              >
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className="text-xs font-medium text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                    {industry.growth}
                  </span>
                  <span className="text-xs font-medium text-blue-400 bg-blue-400/10 px-2 py-1 rounded-full">
                    {industry.projects}
                  </span>
                </div>

                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                <h3
                  className="font-display font-bold text-2xl mb-4 group-hover:text-primary transition-colors"
                  data-testid={`industry-title-${industry.title.toLowerCase()}`}
                >
                  {industry.title}
                </h3>

                <p
                  className="text-muted-foreground mb-6 leading-relaxed"
                  data-testid={`industry-description-${industry.title.toLowerCase()}`}
                >
                  {industry.description}
                </p>

                <div className="space-y-3">
                  {industry.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-sm"
                      data-testid={`industry-feature-${industry.title.toLowerCase()}-${featureIndex}`}
                    >
                      <div className="w-2 h-2 gradient-accent rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
