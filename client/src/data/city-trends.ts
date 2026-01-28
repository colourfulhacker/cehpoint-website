
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
    // --- INTERNATIONAL ---
    {
        slug: "new-york",
        heroTitle: "Tech for Wall Street & Beyond",
        heroSubtitle: "Enterprise-grade FinTech, Real Estate, and AI solutions for New York's fast-paced market.",
        metaDescription: "Top Software Development Company in New York. Experts in FinTech, PropTech, and Enterprise Al. Build scalable solutions for the NY market.",
        keywords: ["FinTech New York", "PropTech Development NY", "Enterprise AI NYC", "Wall Street Tech Partner", "Real Estate Software NY"],
        marketTrends: [
            { title: "DeFi Regulation Tech", description: "Automating compliance for NY's financial giants.", stat: "Critical Need" },
            { title: "PropTech 3.0", description: "Smart building management and tenant experience apps.", stat: "High Demand" },
            { title: "Enterprise AI", description: "Predictive analytics for high-frequency trading and risk.", stat: "Adoption 40%+" }
        ],
        popularServices: ["FinTech App Development", "PropTech Platforms", "Compliance AI", "High-Frequency Trading Bots"]
    },
    {
        slug: "london",
        heroTitle: "Build the Next Neobank",
        heroSubtitle: "Secure, scalable Banking & InsurTech infrastructure for London's financial ecosystem.",
        metaDescription: "Leading App Development Agency in London. Specializing in Neobanking, Open Banking APIs, and InsurTech. Partner with London's top tech talent.",
        keywords: ["Neobank Development London", "InsurTech Solutions UK", "Open Banking API London", "Fintech Agency UK", "London App Developers"],
        marketTrends: [
            { title: "Open Banking", description: "Leveraging PSD2 for seamless financial integrations.", stat: "Standard" },
            { title: "InsurTech AI", description: "Automated claims processing and personalized policies.", stat: "Disrupting" },
            { title: "Green Finance", description: "Tracking ESG metrics for sustainable investing.", stat: "Growing" }
        ],
        popularServices: ["Neobank App Design", "InsurTech Platforms", "Open Banking API Integration", "ESG Dashboards"]
    },
    {
        slug: "munich",
        heroTitle: "Engineering Industry 4.0",
        heroSubtitle: "Precision Software for Automotive, IoT, and Smart Manufacturing in Munich.",
        metaDescription: "Premier IT Consultancy in Munich. Experts in Automotive Software, Industrial IoT, and Smart Factory solutions. German engineering standards.",
        keywords: ["Automotive Software Munich", "Industrial IoT Germany", "Smart Factory Munich", "Industry 4.0 Solutions", "Embedded Systems Munich"],
        marketTrends: [
            { title: "Connected Cars", description: "V2X communication and telematics for next-gen vehicles.", stat: "Auto Standard" },
            { title: "Industrial IoT", description: "Predictive maintenance for manufacturing lines.", stat: "Efficiency +20%" },
            { title: "Green Energy", description: "Optimizing energy consumption in smart grids.", stat: "EU Priority" }
        ],
        popularServices: ["Automotive Software", "Industrial IoT Dashboards", "Embedded Systems", "Smart Grid Tech"]
    },
    {
        slug: "sydney",
        heroTitle: "Innovation Down Under",
        heroSubtitle: "Digital Real Estate, FinTech, and Consumer Apps for Australia's growing tech scene.",
        metaDescription: "Best Web & App Developers in Sydney. Specializing in Real Estate Tech, BNPL Solutions, and Consumer Marketplaces. Launch in Australia.",
        keywords: ["Real Estate App Sydney", "FinTech Australia", "BNPL Software Sydney", "Marketplace Development NSW", "Startup Tech Partner"],
        marketTrends: [
            { title: "PropTech Boom", description: "Virtual tours and auction platforms for Sydney's hot housing market.", stat: "Hot Market" },
            { title: "BNPL Integrations", description: "Buy Now Pay Later solutions dominating retail.", stat: "High Usage" },
            { title: "Green Tech", description: "Solar and sustainability tracking apps.", stat: "Gov Supported" }
        ],
        popularServices: ["Real Estate Portals", "BNPL Integration", "Solar Energy Apps", "On-Demand Services"]
    },
    {
        slug: "calgary",
        heroTitle: "Powering the Energy Sector",
        heroSubtitle: "Custom software for Oil & Gas, Renewable Energy, and Enterprise Resource Planning.",
        metaDescription: "Software Innovation Partner in Calgary. Custom App Development for Energy, Logistics, and Enterprise sectors. Optimize your operations.",
        keywords: ["Energy Software Calgary", "Oil and Gas Tech", "Renewable Energy Apps", "Enterprise ERP Calgary", "Logistics Software Alberta"],
        marketTrends: [
            { title: "Digital Oilfield", description: "IoT and analytics for remote asset monitoring.", stat: "Efficiency" },
            { title: "Renewable Transition", description: "Managing hybrid energy grids and carbon credits.", stat: "Future Focus" },
            { title: "AgTech", description: "Precision farming software for Alberta's agriculture.", stat: "Growing" }
        ],
        popularServices: ["Energy Management Systems", "Field Force Apps", "GIS Mapping Solutions", "AgTech Platforms"]
    },
    {
        slug: "dubai",
        heroTitle: "Future Tech in Dubai",
        heroSubtitle: "Blockchain Real Estate, Luxury Services, and Smart City Solutions.",
        metaDescription: "Top Mobile App Developers in Dubai. Specialized in Real Estate, Crypto/Blockchain, and Luxury Service Apps. Build for the Future.",
        keywords: ["Real Estate App Dubai", "Blockchain Development UAE", "Luxury Concierge App", "Crypto Exchange Dubai", "Smart City Tech UAE"],
        marketTrends: [
            { title: "Blockchain Realty", description: "Tokenizing property assets for fractional ownership.", stat: "High Growth" },
            { title: "Smart Tourism", description: "AI-driven personalized experiences for global visitors.", stat: "Gov Focus" },
            { title: "Crypto Hub", description: "Secure exchanges and wallet infrastructure.", stat: "Regional Hub" }
        ],
        popularServices: ["Crypto Exchange Dev", "Real Estate Tokenization", "Luxury Marketplace", "Tourism SuperApps"]
    },

    // --- INDIA TIER 1 ---
    {
        slug: "mumbai",
        heroTitle: "Mumbai's #1 Enterprise Tech Partner",
        heroSubtitle: "Dominate India's Financial Capital with FinTech, AI, and Cloud-Native Solutions.",
        metaDescription: "Top Software Development Company in Mumbai. Specializing in FinTech, Generative AI, and Enterprise Cloud Solutions. Launch your startup in Mumbai's booming tech ecosystem.",
        keywords: ["FinTech Development Mumbai", "Generative AI Company Mumbai", "Enterprise Cloud Solutions Mumbai", "Mumbai Startups 2025", "Software Company Bandra Kurla Complex"],
        marketTrends: [
            { title: "AI Capital of Asia", description: "Mumbai is rapidly becoming the AI use-case capital, with enterprises integrating GenAI for predictive banking and retail analytics.", stat: "AI Growth 30%+" },
            { title: "FinTech & Blockchain", description: "As India's financial hub, Mumbai leads in DeFi, Blockchain regulation tech, and secure payment gateway integrations.", stat: "FinTech Hub" },
            { title: "Cloud-Native Shift", description: "Enterprises are actively moving to Multi-Cloud environments to ensure 99.99% uptime for critical banking operations.", stat: "High Adoption" }
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
            { title: "DeepTech & AI Agents", description: "Moving beyond chatbots, Bangalore is innovating with autonomous AI agents that handle complex workflows independently.", stat: "#1 AI Talent Pool" },
            { title: "Industry 4.0", description: "Manufacturing hubs in Peenya and Electronic City are adopting Edge Computing and IoT for smart factories.", stat: "IoT Boom" },
            { title: "SaaS Dominance", description: "Bengaluru remains the global launchpad for SaaS unicorns, requiring scalable, multi-tenant architectures.", stat: "Unicorn Capital" }
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
            { title: "GovTech & Public Scale", description: "With massive public interfaces, Delhi demands high-concurrency platforms capable of handling millions of users.", stat: "High Scale" },
            { title: "E-commerce Explosion", description: "D2C brands across NCR are seeking rapid-scale e-commerce platforms with integrated logistics and AI marketing.", stat: "CAGR 23.9%" },
            { title: "Cybersecurity First", description: "With rising cyber threats, Delhi's enterprises are prioritizing Zero-Trust architecture and real-time threat detection.", stat: "Security Focus" }
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
            { title: "Global Capability Centers", description: "Hyderabad is the preferred destination for GCCs, requiring high-end product engineering and R&D support.", stat: "GCC Leader" },
            { title: "BioTech & Pharma IT", description: "Genome Valley demands specialized software for data analysis, lab automation, and compliance tracking.", stat: "BioTech Hub" },
            { title: "Emerging Tech", description: "From Quantum Computing to SpaceTech, Hyderabad is betting big on the next decade of deep technology.", stat: "Future Ready" }
        ],
        popularServices: ["GCC Setup & Support", "Pharma/BioTech IT", "Enterprise SaaS", "Data Analytics"]
    },

    // --- INDIA TIER 2 / EMERGING ---
    {
        slug: "chennai",
        heroTitle: "SaaS & Automotive Tech",
        heroSubtitle: "Building the backend of India's SaaS capital and optimizing the 'Detroit of India'.",
        metaDescription: "Top App Development Company in Chennai. Experts in SaaS, Automotive Software, and Enterprise IT. Partner with Chennai's disciplined engineering talent.",
        keywords: ["SaaS Development Chennai", "Automotive Software India", "Enterprise IT Chennai", "Tidel Park Tech Services", "Subscription Management Software"],
        marketTrends: [
            { title: "SaaS Capital", description: "Chennai is home to India's most successful SaaS giants, driving demand for subscription-based architectures.", stat: "Global Leader" },
            { title: "EV Software", description: "With the EV boom, automotive software for battery management and telemetry is in high demand.", stat: "EV Boom" },
            { title: "Deep Tech", description: "Strong focus on R&D driven software solutions.", stat: "R&D Focus" }
        ],
        popularServices: ["SaaS Product Dev", "EV Telemetry Software", "Subscription Billing Systems", "Enterprise Resource Planning"]
    },
    {
        slug: "pune",
        heroTitle: "Smart Manufacturing & IT",
        heroSubtitle: "Digital solutions for the East's Oxford. Education Tech and Auto Industry support.",
        metaDescription: "Leading IT Consultancy in Pune. Specializing in Smart Manufacturing, EdTech, and IT Services. Hinjewadi's trusted tech partner.",
        keywords: ["IT Company Pune", "Smart Manufacturing Software", "EdTech Solutions Pune", "Hinjewadi Tech Services", "Automotive ERP"],
        marketTrends: [
            { title: "Smart Manufacturing", description: "Integration of IoT and ERP for Pune's vast industrial belt.", stat: "Industry 4.0" },
            { title: "EdTech Innovation", description: "Digitizing education for one of India's largest student populations.", stat: "High Growth" },
            { title: "IT Services", description: "Traditional IT outsourcing moving towards value-added product engineering.", stat: "Mature Market" }
        ],
        popularServices: ["Manufacturing ERP", "LMS Platforms", "IoT Integration", "Student Information Systems"]
    },
    {
        slug: "kolkata",
        heroTitle: "Digital Bengal Revolution",
        heroSubtitle: "Empowering SMEs, Education, and Startups in the City of Joy.",
        metaDescription: "Best Website and App Company in Kolkata. Startup ecosystem partners for Salt Lake and New Town. Affordable and high-quality tech solutions.",
        keywords: ["Web Design Kolkata", "App Development Salt Lake", "SME Digitalization", "Education Software Kolkata", "Startup Tech Partner Kolkata"],
        marketTrends: [
            { title: "SME Digitization", description: "Massive wave of traditional businesses moving online.", stat: "High Volume" },
            { title: "EdTech Hub", description: "Strong demand for coaching and tuition management apps.", stat: "Education Focus" },
            { title: "Workforce Management", description: "Tools for managing remote and field teams.", stat: "Growing" }
        ],
        popularServices: ["E-commerce for SMEs", "Coaching Institute Apps", "Field Force Tracking", "Digital Marketing"]
    },
    {
        slug: "bolpur",
        heroTitle: "Global Tech, Rural Heart",
        heroSubtitle: "Connecting Shantiniketan to the world through Digital Education and Handicraft E-commerce.",
        metaDescription: "Leading IT Training & Software Company in Bolpur/Birbhum. Promoting Global Access for Local Art and Education. Shantiniketan's Digital Partner.",
        keywords: ["Software Company Bolpur", "Birbhum IT Services", "Handicraft E-commerce", "Rural EdTech", "Shantiniketan Digital"],
        marketTrends: [
            { title: "Global Handicraft", description: "Platforms to sell local Shantiniketan arts to a global audience.", stat: "Global Access" },
            { title: "Rural EdTech", description: "Accessible education apps for rural adoption.", stat: "High Impact" },
            { title: "Digital Literacy", description: "Simplified interfaces for first-time internet users.", stat: "User Focus" }
        ],
        popularServices: ["Handicraft E-commerce", "Local Education Apps", "Simplified Billing Software", "NGO Portals"]
    },
    {
        slug: "ahmedabad",
        heroTitle: "FinTech & Pharma Tech",
        heroSubtitle: "Supporting Gujarat's business acumen with GIFT City FinTech and Pharma ERPs.",
        metaDescription: "Best Web Development Agency in Ahmedabad. Solutions for Pharma, Chemicals, and GIFT City FinTech. Scale your business globally.",
        keywords: ["Fintech Ahmedabad", "Pharma ERP Software", "GIFT City Tech", "Export Management Software", "Gujarat IT Services"],
        marketTrends: [
            { title: "GIFT City FinTech", description: "Software for international financial services and trading.", stat: "Policy Support" },
            { title: "Pharma Supply Chain", description: "Traceability and compliance software for global pharma exports.", stat: "Compliance" },
            { title: "Export Mgmt", description: "Tools to manage complex export documentation and logistics.", stat: "Trade Focus" }
        ],
        popularServices: ["FinTech Trading Apps", "Pharma Supply Chain", "Export Documentation Tools", "Chemical Industry ERP"]
    },
    {
        slug: "jaipur",
        heroTitle: "Heritage Meets Digital",
        heroSubtitle: "Showcasing Rajasthan's tourism and jewelry to the world through immersive tech.",
        metaDescription: "Top Digital Marketing & App Company in Jaipur. AR/VR for Tourism, Jewelry E-commerce, and Handicraft exports.",
        keywords: ["Tourism App Jaipur", "Jewelry E-commerce", "Handicraft Export App", "AR Tourism Rajasthan", "Jaipur IT Company"],
        marketTrends: [
            { title: "Immersive Tourism", description: "AR/VR experiences for palaces and forts.", stat: "Tourism Tech" },
            { title: "Jewelry E-commerce", description: "Custom configurators for high-value gemstone exports.", stat: "High Value" },
            { title: "Artisan Tech", description: "Direct-to-consumer platforms for artisans.", stat: "D2C Growth" }
        ],
        popularServices: ["Tourism Booking Apps", "Jewelry Configurators", "Handicraft Marketplaces", "Hotel Management"]
    },
    {
        slug: "indore",
        heroTitle: "Cleanest City, Smartest Tech",
        heroSubtitle: "Smart City solutions and Waste Management algorithms for Central India.",
        metaDescription: "Leading Software Company in Indore. Smart City Integrations, Waste Management Tech, and Logistics. Madhya Pradesh's Tech Hub.",
        keywords: ["Smart City Solutions Indore", "Waste Management App", "Logistics Software MP", "Indore App Developers", "CleanTech India"],
        marketTrends: [
            { title: "CleanTech", description: "IoT for waste management and civic cleanliness maintenance.", stat: "#1 Cleanest" },
            { title: "Smart City Ops", description: "Dashboards for municipal management and civic engagement.", stat: "Civic Tech" },
            { title: "Central Logistics", description: "Warehousing software for India's central distribution hub.", stat: "Logistics" }
        ],
        popularServices: ["Civic Issue Reporting Apps", "Waste Management IoT", "Logistics Fleet Mgmt", "Food Delivery Apps"]
    },
    {
        slug: "kochi",
        heroTitle: "Maritime & Tourism Tech",
        heroSubtitle: "Logistics for the Queen of the Arabian Sea and Wellness Tourism platforms.",
        metaDescription: "Best App Developers in Kochi. Maritime Logistics, Ayurveda Tourism, and Export Software. Kerala's Startup IT Partner.",
        keywords: ["Maritime Software Kochi", "Tourism App Kerala", "Ayurveda Wellness App", "Logistics ERP Kerala", "Kochi Infopark"],
        marketTrends: [
            { title: "Blue Economy", description: "Software for port management, fishing, and seafood exports.", stat: "Marine Tech" },
            { title: "Wellness Tourism", description: "Booking and consultation platforms for Ayurveda and medical tourism.", stat: "Global Niches" },
            { title: "Gulf Connection", description: "Apps serving the NRI diaspora in the Middle East.", stat: "Remittance" }
        ],
        popularServices: ["Port logistics Software", "Ayurveda Booking Apps", "Seafood Export ERP", "NRI Service Apps"]
    },
    {
        slug: "chandigarh",
        heroTitle: "Planned City, Planned Code",
        heroSubtitle: "Urban Planning software and Organized Retail solutions for the Tricity.",
        metaDescription: "Top IT Services Provider in Chandigarh. Urban Planning Tools, Retail POS, and Government Interfaces. Tricity's Tech Leader.",
        keywords: ["Urban Planning Software", "Retail POS Chandigarh", "Tricity IT Services", "Mohali Tech Park", "Smart Traffic App"],
        marketTrends: [
            { title: "Urban Tech", description: "Software for maintaining the planned city infrastructure.", stat: "Civic Pride" },
            { title: "High-End Retail", description: "POS and CRM for luxury retail brands in the region.", stat: "Retail Tech" },
            { title: "Agri-Processing", description: "Software for food processing units in Punjab periphery.", stat: "Agri Tech" }
        ],
        popularServices: ["Urban Planning Tools", "Retail POS Systems", "Smart Traffic Mgmt", "Food Processing ERP"]
    },
    {
        slug: "lucknow",
        heroTitle: "GovTech & Logistics",
        heroSubtitle: "Digital Governance and Warehousing for India's most populous state.",
        metaDescription: "Best Software Company in Lucknow. GovTech Solutions, Warehousing Management, and Hindi Content Apps. Uttar Pradesh's Digital Partner.",
        keywords: ["GovTech Lucknow", "Warehouse Management UP", "Hindi App Development", "Lucknow IT Company", "Civic Apps UP"],
        marketTrends: [
            { title: "GovTech Scale", description: "Applications managing fierce scale of public beneficiaries.", stat: "Massive Scale" },
            { title: "Warehousing", description: "Logistics software for the growing distribution hubs.", stat: "Supply Chain" },
            { title: "Vernacular Content", description: "Apps prioritizing Hindi UI/UX for mass adoption.", stat: "Localization" }
        ],
        popularServices: ["GovTech Portals", "Warehouse WMS", "Hindi Learning Apps", "E-Governance Kiosks"]
    },
    {
        slug: "bhubaneswar",
        heroTitle: "Smart City & Sports Tech",
        heroSubtitle: "IoT for Smart City grids and High-Performance Sports Analytics.",
        metaDescription: "Leading Tech Company in Bhubaneswar. Smart City IoT, Sports Analytics, and Mining Software. Odisha's Innovation Hub.",
        keywords: ["Smart City Bhubaneswar", "Sports Analytics India", "Mining Software Odisha", "Bhubaneswar App Developers", "Hockey Tech India"],
        marketTrends: [
            { title: "Sports Capital", description: "Performance analytics for hockey and athletics training.", stat: "Sports Tech" },
            { title: "Mining Tech", description: "ERP and safety monitoring for the mineral-rich belt.", stat: "Industrial" },
            { title: "Smart Grid", description: "Advanced IoT implementations for city management.", stat: "Smart City" }
        ],
        popularServices: ["Sports Analytics Apps", "Mining ERP", "Smart Metering", "Disaster Mgmt Tools"]
    },
    {
        slug: "coimbatore",
        heroTitle: "Textile & Engineering Tech",
        heroSubtitle: "Automation for the Manchester of South India.",
        metaDescription: "Top Industrial IoT Partners in Coimbatore. Textile ERP, Pump Manufacturing Software, and Inventory Management.",
        keywords: ["Textile ERP Coimbatore", "Manufacturing IoT", "Pump Industry Software", "Inventory Management App", "Coimbatore IT Services"],
        marketTrends: [
            { title: "Textile Automation", description: "ERP specifically designed for yarn and fabric production cycles.", stat: "Specialized" },
            { title: "Precision Engg", description: "CAD/CAM integration and production tracking.", stat: "Manufacturing" },
            { title: "Export Compliance", description: "Tools for managing textile exports to global markets.", stat: "Trade Tech" }
        ],
        popularServices: ["Textile Mill ERP", "Production Tracking", "IoT Machine Monitoring", "Export Documentation"]
    },
    {
        slug: "visakhapatnam",
        heroTitle: "Port & Fintech Valley",
        heroSubtitle: "Marine Logistics and Fintech solutions for Andhra's tech capital.",
        metaDescription: "Best App Development Agency in Vizag. Port Logistics, Fintech Valley solutions, and Marine Tech. Vizag's Digital Partner.",
        keywords: ["Port Logistics Software", "Fintech Valley Vizag", "Marine Tech India", "Visakhapatnam IT Company", "Shipping ERP"],
        marketTrends: [
            { title: "Fintech Valley", description: "Specific incentives for Fintech startups in Vizag.", stat: "Gov Focus" },
            { title: "Port Operations", description: "Complex logistics handling for cargo and shipping.", stat: "Marine Tech" },
            { title: "Blue Data", description: "Oceanographic data processing and fisheries management.", stat: "Niche" }
        ],
        popularServices: ["Shipping Container Tracking", "Fintech Apps", "Fisheries Marketplace", "Port Management Systems"]
    },
    {
        slug: "nagpur",
        heroTitle: "Zero Mile Logistics",
        heroSubtitle: "Centralized Warehousing and Transport Management for India's logistic heart.",
        metaDescription: "Software Solutions in Nagpur. Logistics, Transport Management, and Warehousing WMS. Orange City's Tech Partner.",
        keywords: ["Logistics Software Nagpur", "Transport Management System", "Oranges Export App", "Nagpur IT Company", "Central Warehousing"],
        marketTrends: [
            { title: "Logistics Core", description: "The geographical center of India, ideal for warehousing logic.", stat: "Transport Hub" },
            { title: "Agri-Export", description: "Supply chain for oranges and cotton exports.", stat: "Agri Tech" },
            { title: "EV Transport", description: "Routing for emerging electric cargo fleets.", stat: "Green Logistics" }
        ],
        popularServices: ["Fleet Management", "Warehouse WMS", "Agri-Export Tracking", "Route Optimization"]
    }
    // End of generated cities
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
