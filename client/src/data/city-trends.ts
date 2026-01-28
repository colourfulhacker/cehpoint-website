
export interface CityTrend {
    slug: string; // matches the url param
    heroTitle: string;
    heroSubtitle: string;
    metaDescription: string;
    keywords: string[];
    marketTrends: {
        title: string;
        description: string;
        stat: string; // e.g., "CAGR 23.9%"
    }[];
    popularServices: string[]; // specific to the city
}

export const cityTrends: CityTrend[] = [
    {
        slug: "mumbai",
        heroTitle: "Mumbai's #1 Enterprise Tech Partner",
        heroSubtitle: "Dominate India's Financial Capital with FinTech, AI, and Cloud-Native Solutions.",
        metaDescription: "Top Software Development Company in Mumbai. Specializing in FinTech, Generative AI, and Enterprise Cloud Solutions. Launch your startup in Mumbai's booming tech ecosystem.",
        keywords: ["FinTech Development Mumbai", "Generative AI Company Mumbai", "Enterprise Cloud Solutions Mumbai", "Mumbai Startups 2025", "Software Company Bandra Kurla Complex"],
        marketTrends: [
            {
                title: "AI Capital of Asia",
                description: "Mumbai is rapidly becoming the AI use-case capital, with enterprises integrating GenAI for predictive banking and retail analytics.",
                stat: "AI Growth 30%+"
            },
            {
                title: "FinTech & Blockchain",
                description: "As India's financial hub, Mumbai leads in DeFi, Blockchain regulation tech, and secure payment gateway integrations.",
                stat: "FinTech Hub"
            },
            {
                title: "Cloud-Native Shift",
                description: "Enterprises are actively moving to Multi-Cloud environments to ensure 99.99% uptime for critical banking operations.",
                stat: "High Adoption"
            }
        ],
        popularServices: ["FinTech App Development", "AI/ML Forecasting Models", "Banking Security (VAPT)", "Cloud Migration Services"]
    },
    {
        slug: "bengaluru",
        heroTitle: "Build in India's Silicon Valley",
        heroSubtitle: "Advanced AI, DeepTech, and SaaS Engineering for Bangalore's Unicorns.",
        metaDescription: "Best App Development Company in Bangalore (Bengaluru). Experts in AI Agents, SaaS Platforms, and DeepTech. Partner with Bangalore's top engineering talent.",
        keywords: ["AI Agents Development Bangalore", "SaaS Product Engineering Bengaluru", "DeepTech Startups Bangalore", "Startup Development Company Indiranagar", "Tech Trends Bangalore 2025"],
        marketTrends: [
            {
                title: "DeepTech & AI Agents",
                description: "Moving beyond chatbots, Bangalore is innovating with autonomous AI agents that handle complex workflows independently.",
                stat: "#1 AI Talent Pool"
            },
            {
                title: "Industry 4.0",
                description: "Manufacturing hubs in Peenya and Electronic City are adopting Edge Computing and IoT for smart factories.",
                stat: "IoT Boom"
            },
            {
                title: "SaaS Dominance",
                description: "Bengaluru remains the global launchpad for SaaS unicorns, requiring scalable, multi-tenant architectures.",
                stat: "Unicorn Capital"
            }
        ],
        popularServices: ["SaaS Product Engineering", "AI Agent Development", "IoT & Edge Computing", "Blockchain Solutions"]
    },
    {
        slug: "delhi",
        heroTitle: "Tech Powering the Capital",
        heroSubtitle: "Government Tech, Scalable Platforms, and AI for Delhi-NCR's Massive Market.",
        metaDescription: "Leading Software Company in Delhi NCR. Specializing in GovTech, Scalable E-commerce, and AI Automation. Custom solutions for Delhi's diverse business landscape.",
        keywords: ["Software Company Delhi NCR", "GovTech Solutions India", "E-commerce Development Delhi", "Noida Tech Hub Services", "Gurgaon Corporate IT Services"],
        marketTrends: [
            {
                title: "GovTech & Public Scale",
                description: "With massive public interfaces, Delhi demands high-concurrency platforms capable of handling millions of users.",
                stat: "High Scale"
            },
            {
                title: "E-commerce Explosion",
                description: "D2C brands across NCR are seeking rapid-scale e-commerce platforms with integrated logistics and AI marketing.",
                stat: "CAGR 23.9%"
            },
            {
                title: "Cybersecurity First",
                description: "With rising cyber threats, Delhi's enterprises are prioritizing Zero-Trust architecture and real-time threat detection.",
                stat: "Security Focus"
            }
        ],
        popularServices: ["High-Scale E-commerce", "GovTech Portals", "Cybersecurity Audits", "Mobile App Development"]
    },
    {
        slug: "hyderabad",
        heroTitle: "Innovation Hub of Hyderabad",
        heroSubtitle: "Product Engineering, BioTech IT, and Global Capability Centers.",
        metaDescription: "Premier IT Services in Hyderabad. Specializing in Product Engineering, BioTech Software, and GCC Support. Join the tech revolution in Hitech City.",
        keywords: ["Product Engineering Hyderabad", "GCC Support Services", "BioTech Software Solutions", "Hitech City IT Company", "Quantum Computing Hyderabad"],
        marketTrends: [
            {
                title: "Global Capability Centers",
                description: "Hyderabad is the preferred destination for GCCs, requiring high-end product engineering and R&D support.",
                stat: "GCC Leader"
            },
            {
                title: "BioTech & Pharma IT",
                description: "Genome Valley demands specialized software for data analysis, lab automation, and compliance tracking.",
                stat: "BioTech Hub"
            },
            {
                title: "Emerging Tech",
                description: "From Quantum Computing to SpaceTech, Hyderabad is betting big on the next decade of deep technology.",
                stat: "Future Ready"
            }
        ],
        popularServices: ["GCC Setup & Support", "Pharma/BioTech IT", "Enterprise SaaS", "Data Analytics"]
    }
];

// Fallback for other cities
export const defaultTrend: CityTrend = {
    slug: "default",
    heroTitle: "Launch Your Digital Empire",
    heroSubtitle: "World-Class Software Development & AI Solutions for Growing Enterprises.",
    metaDescription: "Top-rated Software & App Development Company. Custom AI, Mobile Apps, and Web Solutions to scale your business. Start today with a custom quote.",
    keywords: ["Software Development 2025", "AI Solutions Enterprise", "App Development Company", "Business Automation"],
    marketTrends: [
        {
            title: "AI-First Transformation",
            description: "Integrating Artificial Intelligence into core business logic to automate and optimize.",
            stat: "Global Trend"
        },
        {
            title: "Cloud Scalability",
            description: "Building systems that grow with your user base using serverless and microservices architectures.",
            stat: "Essential"
        },
        {
            title: "Mobile-First",
            description: "Ensuring your business is accessible on every device with high-performance PWAs and native apps.",
            stat: "Standard"
        }
    ],
    popularServices: ["Custom App Development", "AI Integration", "Cloud Infrastructure", "Digital Marketing"]
};
