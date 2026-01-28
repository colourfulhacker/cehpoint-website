
export interface ServiceDetail {
    title: string;
    description: string;
    icon: "code" | "cpu" | "globe" | "shield" | "zap" | "bar-chart" | "chart-bar" | "building" | "star" | "heart" | "sun" | "home" | "video" | "book" | "phone" | "bag" | "diamond" | "flag" | "edit" | "camera" | "gem" | "anchor" | "search" | "dollar-sign" | "leaf" | "shopping-bag" | "calendar" | "briefcase" | "mic" | "book-open" | "snowflake" | "hard-hat" | "activity" | "cloud-rain" | "circle" | "layers" | "settings" | "calculator" | "eye" | "smile" | "coffee" | "check-circle" | "send" | "message-circle" | "shopping-cart" | "music" | "map" | "credit-card" | "lock" | "beer" | "recycle" | "truck" | "mountain" | "tool" | "bitcoin" | "users"; // Extended icon mapping
}

export interface CitySegment {
    audience: "Business Owners" | "Students & Grads" | "Women Entrepreneurs";
    title: string;
    description: string;
    ideas: ServiceDetail[];
}

export interface CityTrend {
    slug: string;
    heroTitle: string;
    heroSubtitle: string;
    metaDescription: string;
    keywords: string[];
    marketTrends: {
        title: string;
        description: string;
        stat: string;
    }[];
    popularServices: ServiceDetail[];
    segments?: CitySegment[]; // New field for segmented audience content
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
        popularServices: [
            { title: "FinTech Trading Platforms", description: "Low-latency trading interfaces and dashboards designed for Wall Street firms, ensuring millisecond precision.", icon: "bar-chart" },
            { title: "PropTech Management Suites", description: "Comprehensive tenant portals and smart building IoT dashboards for NYC's skyline properties.", icon: "building" },
            { title: "Regulatory Compliance AI", description: "Automated KYC/AML checking and reporting systems ensuring SEC and energetic compliance.", icon: "shield" },
            { title: "Hedge Fund Analytics", description: "Custom data visualization tools converting complex datasets into actionable investment insights.", icon: "cpu" },
            { title: "InsurTech Claims Bots", description: "AI-driven claims processing ensuring 24/7 responsiveness for global insurance providers.", icon: "zap" },
            { title: "High-Frequency Algo Bots", description: "Custom algorithmic trading bots optimized for speed and strategy execution.", icon: "code" }
        ],
        segments: [
            {
                audience: "Business Owners",
                title: "Wall Street Tech",
                description: "Dominate the financial capital.",
                ideas: [
                    { title: "Hedge Fund Dashboard", description: "Real-time portfolio analytics.", icon: "bar-chart" },
                    { title: "PropTech Management", description: "Tenant apps for skyscrapers.", icon: "building" },
                    { title: "LegalTech AI", description: "Automating contract reviews.", icon: "shield" }
                ]
            },
            {
                audience: "Students & Grads",
                title: "FinTech Careers",
                description: "Breaking into NYC finance.",
                ideas: [
                    { title: "Quant Interview Prep", description: "Practice for algo roles.", icon: "code" },
                    { title: "NYU/Columbia Marketplace", description: "Buying/selling textbooks.", icon: "book" },
                    { title: "Subway Navigator", description: "Real-time train tracking.", icon: "map" }
                ]
            },
            {
                audience: "Women Entrepreneurs",
                title: "Fashion & Media",
                description: "Leading global trends.",
                ideas: [
                    { title: "Fashion Tech Agency", description: "Digital showrooms for designers.", icon: "shopping-bag" },
                    { title: "Art Gallery App", description: "Virtual tours of Chelsea galleries.", icon: "camera" },
                    { title: "PR Mgmt Platform", description: "Managing media relationships.", icon: "message-circle" }
                ]
            }
        ]
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
        popularServices: [
            { title: "Neobank Mobile Experience", description: "Frictionless, design-first mobile banking apps competing with Monzo and Revolut.", icon: "globe" },
            { title: "Open Banking API Engines", description: "Secure middleware connecting your app to thousands of UK financial institutions.", icon: "code" },
            { title: "InsurTech Underwriting AI", description: "Machine learning models predicting risk scores in real-time for instant policy issuance.", icon: "cpu" },
            { title: "ESG Impact Trackers", description: "Dashboards monitoring and reporting sustainability metrics for Green Finance initiatives.", icon: "bar-chart" },
            { title: "Wealth Management Portals", description: "Secure client-facing portals for high-net-worth individual asset tracking.", icon: "shield" },
            { title: "Cross-Border Payment Hubs", description: "Multi-currency wallet systems optimized for post-Brexit global trade.", icon: "globe" }
        ],
        segments: [
            {
                audience: "Business Owners",
                title: "FinTech & InsurTech",
                description: "Innovating in the City.",
                ideas: [
                    { title: "Neobank White Label", description: "Launch your own digital bank.", icon: "credit-card" },
                    { title: "InsurTech Risk Model", description: "AI underwriting for Lloyds.", icon: "shield" },
                    { title: "GDPR Compliance Tool", description: "Automated data privacy checks.", icon: "lock" }
                ]
            },
            {
                audience: "Students & Grads",
                title: "LSE & Imperial",
                description: "Tools for London's scholars.",
                ideas: [
                    { title: "Student Housing App", description: "Finding flats in Zone 2.", icon: "home" },
                    { title: "Gig Economy Aggregator", description: "Finding flexible work.", icon: "search" },
                    { title: "Pub Finder AR", description: "Historic pub guide.", icon: "beer" }
                ]
            },
            {
                audience: "Women Entrepreneurs",
                title: "Green & Design",
                description: "Sustainable British business.",
                ideas: [
                    { title: "Sustainable Fashion", description: "Renting designer dresses.", icon: "recycle" },
                    { title: "FinTech Consultancy", description: "Advising on open banking.", icon: "briefcase" },
                    { title: "Wellness App", description: "Mental health for city workers.", icon: "heart" }
                ]
            }
        ]
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
        popularServices: [
            { title: "Automotive HMI Systems", description: "In-car entertainment and control dashboards with rigorous safety compliance.", icon: "cpu" },
            { title: "Industrial IoT Dashboards", description: "Real-time visualization of factory floor sensors and predictive maintenance alerts.", icon: "bar-chart" },
            { title: "Embedded Firmware Dev", description: "Low-level coding for microcontrollers in smart devices and machinery.", icon: "code" },
            { title: "Smart Grid Energy Mgmt", description: "Algorithms optimizing power usage across manufacturing plants to reduce carbon footprint.", icon: "zap" },
            { title: "Digital Twin Modeling", description: "Create virtual replicas of physical assets for simulation and stress testing.", icon: "building" },
            { title: "Supply Chain Traceability", description: "Blockchain-based tracking ensuring parts authenticity in the auto supply chain.", icon: "shield" }
        ],
        segments: [
            {
                audience: "Business Owners",
                title: "Auto & Industry 4.0",
                description: "Engineering excellence.",
                ideas: [
                    { title: "Auto Supply Chain", description: "Just-in-time parts tracking.", icon: "truck" },
                    { title: "Smart Factory IoT", description: "Predictive maintenance.", icon: "cpu" },
                    { title: "Green Energy Audit", description: "Carbon footprint tracking.", icon: "leaf" }
                ]
            },
            {
                audience: "Students & Grads",
                title: "TUM & Engineering",
                description: "Tech for technical innovators.",
                ideas: [
                    { title: "Engineering Calc App", description: "Complex formula solver.", icon: "calculator" },
                    { title: "Language Learning AI", description: "Mastering Technical German.", icon: "mic" },
                    { title: "Oktoberfest Guide", description: "Tent bookings and maps.", icon: "beer" }
                ]
            },
            {
                audience: "Women Entrepreneurs",
                title: "Eco & Craft",
                description: "Quality and sustainability.",
                ideas: [
                    { title: "Eco-Tourism Bavaria", description: "Hiking and nature tours.", icon: "mountain" },
                    { title: "Craft Beer Branding", description: "Marketing for microbreweries.", icon: "beer" },
                    { title: "Vocational Training", description: "Skill workshops organization.", icon: "tool" }
                ]
            }
        ]
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
        popularServices: [
            { title: "Real Estate Auction Platforms", description: "Live bidding apps with virtual tour integration for the hot Sydney property market.", icon: "building" },
            { title: "BNPL Fintech Engines", description: "Custom Buy-Now-Pay-Later modules integrated into e-commerce flows.", icon: "zap" },
            { title: "Solar Energy ROI Calculators", description: "Consumer apps tracking solar panel efficiency and government rebates.", icon: "globe" },
            { title: "On-Demand Service Marketplaces", description: "Uber-like platforms for local tradespeople and services.", icon: "code" },
            { title: "HealthTech Patient Portals", description: "Secure booking and telehealth interfaces for private practices.", icon: "shield" },
            { title: "Fintech Personal Finance", description: "Budgeting and investment tracking apps tailored to Australian tax laws.", icon: "bar-chart" }
        ],
        segments: [
            {
                audience: "Business Owners",
                title: "PropTech & Solar",
                description: "Capitalizing on the housing boom.",
                ideas: [
                    { title: "Real Estate Auction", description: "Live bidding apps.", icon: "home" },
                    { title: "Solar Power Grid", description: "Managing feed-in tariffs.", icon: "sun" },
                    { title: "Beach Safety Tech", description: "Drone monitoring for sharks.", icon: "eye" }
                ]
            },
            {
                audience: "Students & Grads",
                title: "Surf & Study",
                description: "Lifestyle for Sydney uni.",
                ideas: [
                    { title: "Surfing Forecast App", description: "Wave height and tides.", icon: "anchor" },
                    { title: "Uni Sydney Notes", description: "Sharing lecture summaries.", icon: "book" },
                    { title: "Barista Training VR", description: "Learning coffee art.", icon: "coffee" }
                ]
            },
            {
                audience: "Women Entrepreneurs",
                title: "Coastal & Wellness",
                description: "Healthy Aussie lifestyle.",
                ideas: [
                    { title: "Coastal Decor E-com", description: "Selling beach home goods.", icon: "shopping-bag" },
                    { title: "Wellness Retreat", description: "Booking yoga escapes.", icon: "heart" },
                    { title: "Organic Skincare", description: "Native Australian ingredients.", icon: "smile" }
                ]
            }
        ]
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
        popularServices: [
            { title: "Digital Oilfield IoT", description: "Remote monitoring dashboards for pipelines and extraction sites.", icon: "cpu" },
            { title: "HSE Compliance Portals", description: "Health, Safety, and Environment tracking systems ensuring regulatory adherence.", icon: "shield" },
            { title: "Energy Trading Platforms", description: "Real-time marketplaces for oil, gas, and carbon credit trading.", icon: "bar-chart" },
            { title: "Precision AgTech Apps", description: "Satellite and sensor data analysis for maximizing crop yields.", icon: "globe" },
            { title: "Logistics Fleet Tracking", description: "Optimizing heavy haulage routes across the province.", icon: "zap" },
            { title: "Geospatial Mapping (GIS)", description: "Custom mapping solutions for land surveying and asset location.", icon: "globe" }
        ],
        segments: [
            {
                audience: "Business Owners",
                title: "Energy & Logistics",
                description: "Powering the province.",
                ideas: [
                    { title: "Oil Rig IoT Dashboard", description: "Remote sensor monitoring.", icon: "activity" },
                    { title: "Carbon Credit Trade", description: "Buying and selling offsets.", icon: "leaf" },
                    { title: "Logistics Fleet AI", description: "Winter route optimization.", icon: "truck" }
                ]
            },
            {
                audience: "Students & Grads",
                title: "Field & Snow",
                description: "Tools for Alberta's terrain.",
                ideas: [
                    { title: "Geology Field App", description: "Mapping rock formations.", icon: "map" },
                    { title: "Winter Sports Rental", description: "Ski and snowboard gear.", icon: "snowflake" },
                    { title: "Petro-Eng Tools", description: "Calculators for drilling.", icon: "tool" }
                ]
            },
            {
                audience: "Women Entrepreneurs",
                title: "Arts & Sustainability",
                description: "Diverse voices of Canada.",
                ideas: [
                    { title: "Indigenous Art Market", description: "Global platform for local art.", icon: "heart" },
                    { title: "Sustainable Living", description: "Blog and eco-store.", icon: "leaf" },
                    { title: "Winter Event Planning", description: "Corporate retreats in Banff.", icon: "calendar" }
                ]
            }
        ]
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
        popularServices: [
            { title: "Real Estate Tokenization", description: "Platforms allowing fractional investment in luxury properties via blockchain.", icon: "building" },
            { title: "Luxury Concierge SuperApps", description: "High-end lifestyle management apps with exclusive booking features.", icon: "star" },
            { title: "Crypto Exchange Architecture", description: "Secure, compliant centralized and decentralized exchange setups.", icon: "shield" },
            { title: "Smart City GovTech", description: "Interfaces for citizen services and municipal payments.", icon: "globe" },
            { title: "Tourism Experience AR", description: "Augmented reality guides for malls and landmarks.", icon: "zap" },
            { title: "Trade Zone ERPs", description: "Management software for Free Zone logistics and operations.", icon: "bar-chart" }
        ],
        segments: [
            {
                audience: "Business Owners",
                title: "Crypto & Luxury",
                description: "Building the future city.",
                ideas: [
                    { title: "Crypto Estate Agent", description: "Buying property with BTC.", icon: "bitcoin" },
                    { title: "Luxury Concierge", description: "Booking supercars and yachts.", icon: "star" },
                    { title: "Free Zone Setup AI", description: "Navigating business laws.", icon: "briefcase" }
                ]
            },
            {
                audience: "Students & Grads",
                title: "Expat & Arabic",
                description: "Thriving in the UAE.",
                ideas: [
                    { title: "Expat Community App", description: "Finding flatmates and events.", icon: "users" },
                    { title: "Arabic Learning Game", description: "Fun way to learn language.", icon: "book" },
                    { title: "Desert Safari Booking", description: "Adventure tour aggregator.", icon: "sun" }
                ]
            },
            {
                audience: "Women Entrepreneurs",
                title: "Fashion & Lifestyle",
                description: "Elegance and enterprise.",
                ideas: [
                    { title: "Modest Fashion Brand", description: "Modern Abaya designs.", icon: "shopping-bag" },
                    { title: "Perfume Customizer", description: "Creating signature scents.", icon: "smile" },
                    { title: "Influencer Mgmt", description: "Agency for social stars.", icon: "camera" }
                ]
            }
        ]
    },

    // --- INDIA LOCATIONS ---
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
        popularServices: [
            { title: "FinTech SuperApps", description: "All-in-one financial platforms combining banking, investment, and insurance.", icon: "bar-chart" },
            { title: "Enterprise GenAI Models", description: "Custom LLMs trained on corporate data for internal knowledge retrieval.", icon: "cpu" },
            { title: "Cloud Migration Strategy", description: "Moving legacy banking mainframes to secure AWS/Azure architectures.", icon: "globe" },
            { title: "Banking VAPT Audits", description: "Rigorous penetration testing for RBI compliance.", icon: "shield" },
            { title: "Media Streaming Apps", description: "High-concurrency OTT platforms for Bollywood and entertainment content.", icon: "zap" },
            { title: "Corporate HRK Systems", description: "Employee management suites for large conglomerates.", icon: "building" }
        ],
        segments: [
            {
                audience: "Business Owners",
                title: "Scale Your Enterprise",
                description: "High-impact solutions for Mumbai's competitive market.",
                ideas: [
                    { title: "Equity Research Dashboard", description: "Real-time market analysis tools for investment firms.", icon: "bar-chart" },
                    { title: "Video KYC Platform", description: "Automated customer onboarding for NBFCs and Banks.", icon: "shield" },
                    { title: "Corporate Event Planner", description: "Managing large-scale corporate conferences and expos.", icon: "star" }
                ]
            },
            {
                audience: "Students & Grads",
                title: "Launch Your Startup",
                description: "Trendy ideas for Mumbai's vibrant youth culture.",
                ideas: [
                    { title: "Creator Economy Hub", description: "Connecting brands with micro-influencers in Mumbai.", icon: "zap" },
                    { title: "Film Casting Portal", description: "Aggregating auditions for Bollywood aspirants.", icon: "star" },
                    { title: "Gig Economy Aggregator", description: "Finding quick gigs for delivery and events.", icon: "globe" }
                ]
            },
            {
                audience: "Women Entrepreneurs",
                title: "Empower Your Business",
                description: "Flexible business models perfect for women leaders.",
                ideas: [
                    { title: "Boutique Cloud Kitchen", description: "Managing delivery-only food brands from home.", icon: "heart" },
                    { title: "Virtual Stylist App", description: "Personal fashion consulting via video calls.", icon: "star" },
                    { title: "Wellness Subscription", description: "Curated yoga and mental health plans.", icon: "sun" }
                ]
            }
        ]
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
        popularServices: [
            { title: "SaaS Product Architectures", description: "Scalable, multi-tenant boilerplates for rapid unicorn growth.", icon: "code" },
            { title: "Autonomous AI Agents", description: "Self-learning bots that perform complex workflows without human intervention.", icon: "cpu" },
            { title: "DeepTech R&D", description: "Prototyping hard-tech solutions in robotics and advanced algorithms.", icon: "zap" },
            { title: "IOT Edge Computing", description: "Processing data locally on devices for smart factory latency reduction.", icon: "chart-bar" },
            { title: "Web3 DApps", description: "Decentralized applications for the next generation Internet.", icon: "shield" },
            { title: "Developer Tools", description: "Building CLI tools and APIs for other developers.", icon: "code" }
        ],
        segments: [
            {
                audience: "Business Owners",
                title: "SaaS & Enterprise",
                description: "Build the next unicorn with scalable tech.",
                ideas: [
                    { title: "B2B SaaS Boilerplate", description: "Rapidly launching enterprise software tools.", icon: "code" },
                    { title: "GenAI Customer Support", description: "Automating L1 support with custom LLMs.", icon: "cpu" },
                    { title: "HR Tech Platform", description: "Recruitment automation for tech hiring.", icon: "building" }
                ]
            },
            {
                audience: "Students & Grads",
                title: "Tech Innovation",
                description: "Deep tech ideas for engineering students.",
                ideas: [
                    { title: "Hackathon Platform", description: "Organizing and judging coding competitions.", icon: "code" },
                    { title: "Skill-Share App", description: "P2P coding mentorship marketplace.", icon: "globe" },
                    { title: "AI Note Taker", description: "Summarizing lectures and meetings automatically.", icon: "zap" }
                ]
            },
            {
                audience: "Women Entrepreneurs",
                title: "Creative & Tech",
                description: "Leading in design and niche markets.",
                ideas: [
                    { title: "Tech-Returnship Portal", description: "Helping women get back into tech jobs.", icon: "shield" },
                    { title: "Home Bakers Market", description: "Selling artisanal cakes and breads online.", icon: "heart" },
                    { title: "Kids Coding Academy", description: "Online platform for teaching kids to code.", icon: "star" }
                ]
            }
        ]
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
        popularServices: [
            { title: "High-Scale GovTech Portals", description: "Citizen-facing platforms built to handle millions of concurrent users.", icon: "building" },
            { title: "D2C E-commerce Engines", description: "Custom storefronts with integrated logistics and marketing automation.", icon: "globe" },
            { title: "Cybersecurity & Forensics", description: "Digital forensic audits and threat mitigation for corporate HQs.", icon: "shield" },
            { title: "Logistics Aggregators", description: "Apps connecting shippers with trucking fleets across North India.", icon: "zap" },
            { title: "EdTech Learning Management", description: "Platforms for Delhi's vast network of coaching centers and universities.", icon: "code" },
            { title: "Smart City Traffic AI", description: "Computer vision systems for traffic monitoring and management.", icon: "cpu" }
        ],
        segments: [
            {
                audience: "Business Owners",
                title: "Trade & Commerce",
                description: "Digitizing Delhi's massive wholesale markets.",
                ideas: [
                    { title: "Wholesale B2B Portal", description: "Connecting Sadar Bazar traders to retailers.", icon: "bar-chart" },
                    { title: "Political Campaign CRM", description: "Managing voter data and outreach.", icon: "building" },
                    { title: "Import/Export ERP", description: "Handling customs and documentation.", icon: "globe" }
                ]
            },
            {
                audience: "Students & Grads",
                title: "Exam & Career",
                description: "Solutions for the UPSC/JEE capital.",
                ideas: [
                    { title: "Competitive Exam Prep", description: "Mock tests and analytics for aspirants.", icon: "code" },
                    { title: "PG/Hostel Finder", description: "Finding accommodation for students in North Campus.", icon: "home" },
                    { title: "Used Book Marketplace", description: "Buying and selling second-hand study materials.", icon: "star" }
                ]
            },
            {
                audience: "Women Entrepreneurs",
                title: "Lifestyle & Reselling",
                description: "Tapping into fashion and beauty markets.",
                ideas: [
                    { title: "Social Reselling App", description: "Selling fashion items via WhatsApp/Instagram.", icon: "heart" },
                    { title: "Beauty Service Aggregator", description: "Booking salon services at home.", icon: "star" },
                    { title: "Wedding Planner Suite", description: "Managing logistics for Delhi weddings.", icon: "zap" }
                ]
            }
        ]
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
        popularServices: [
            { title: "GCC Offshore Centers", description: "Setting up dedicated development teams for global enterprises.", icon: "building" },
            { title: "Bioinformatics Platforms", description: "Data analysis tools for genomic research and drug discovery.", icon: "cpu" },
            { title: "Enterprise SaaS Suites", description: "Large-scale software solutions for multinational corporations.", icon: "code" },
            { title: "Lab Automation Software", description: "Robotic process automation for pharmaceutical testing labs.", icon: "zap" },
            { title: "SpaceTech Data Analysis", description: "Processing satellite imagery and telemetry data.", icon: "globe" },
            { title: "VR Training Modules", description: "Immersive training for pharma manufacturing safety.", icon: "cpu" }
        ],
        segments: [
            {
                audience: "Business Owners",
                title: "Pharma & Infra",
                description: "High-tech solutions for Genome Valley.",
                ideas: [
                    { title: "Pharma Supply Chain", description: "Cold chain monitoring for drugs.", icon: "shield" },
                    { title: "Real Estate CRM", description: "Managing Hyderabad's booming property market.", icon: "building" },
                    { title: "Lab Inventory Mgmt", description: "Tracking chemicals and equipment.", icon: "bar-chart" }
                ]
            },
            {
                audience: "Students & Grads",
                title: "Global Careers",
                description: "Apps for the US-bound demographic.",
                ideas: [
                    { title: "Study Abroad Consultant", description: "Application tracking and visa guidance.", icon: "globe" },
                    { title: "Coding Bootcamp LMS", description: "Learning platform for full-stack dev.", icon: "code" },
                    { title: "GRE/IELTS Prep", description: "Vocabulary and practice test apps.", icon: "star" }
                ]
            },
            {
                audience: "Women Entrepreneurs",
                title: "Service Industry",
                description: "Catering to the IT workforce.",
                ideas: [
                    { title: "Nutritious Tiffin Service", description: "Healthy meals for Hitech City employees.", icon: "heart" },
                    { title: "Daycare Management", description: "Software for managing child care centers.", icon: "sun" },
                    { title: "Event Decor Planner", description: "Organizing parties and corporate events.", icon: "star" }
                ]
            }
        ]
    },
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
        popularServices: [
            { title: "SaaS Subscription Billing", description: "Recurring revenue management systems similar to those pioneered in Chennai.", icon: "bar-chart" },
            { title: "EV Battery Telemetry", description: "Real-time monitoring of electric vehicle battery health and range.", icon: "zap" },
            { title: "Enterprise ERP Customization", description: "Tailoring Oracle/SAP implementations for manufacturing.", icon: "building" },
            { title: "Supply Chain Optimization", description: "Algorithms to reduce waste in auto-manufacturing logistics.", icon: "code" },
            { title: "Cloud Infrastructure Mgmt", description: "DevOps services for scaling SaaS applications globally.", icon: "globe" },
            { title: "R&D Simulation Tools", description: "Software for virtual testing of automotive components.", icon: "cpu" }
        ],
        segments: [
            {
                audience: "Business Owners",
                title: "Auto & SaaS",
                description: "Solutions for Chennai's industrial giants.",
                ideas: [
                    { title: "Automotive Supply Chain", description: "Tracking parts for manufacturers.", icon: "zap" },
                    { title: "SaaS Billing Engine", description: "Subscription management for software companies.", icon: "bar-chart" },
                    { title: "Export Documentation", description: "Automating customs for Chennai port.", icon: "globe" }
                ]
            },
            {
                audience: "Students & Grads",
                title: "Engineering Hub",
                description: "Projects for Anna University talent.",
                ideas: [
                    { title: "Engineering Project Hub", description: "Marketplace for final year project components.", icon: "cpu" },
                    { title: "Carnatic Music App", description: "Learning and streaming classical music.", icon: "heart" },
                    { title: "EV Charging Finder", description: "Locating stations for electric bikes.", icon: "zap" }
                ]
            },
            {
                audience: "Women Entrepreneurs",
                title: "Tradition & Tech",
                description: "Modernizing traditional businesses.",
                ideas: [
                    { title: "Filter Coffee Brand", description: "D2C subscription for authentic coffee.", icon: "star" },
                    { title: "Silk Saree Marketplace", description: "Selling Kanchipuram silk globally.", icon: "heart" },
                    { title: "Music Tuition App", description: "Teaching instruments online.", icon: "video" }
                ]
            }
        ]
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
        popularServices: [
            { title: "Manufacturing ERPs", description: "End-to-end management of production lines, inventory, and procurement.", icon: "building" },
            { title: "University Management Systems", description: "Comprehensive portals for student records, exams, and fees.", icon: "code" },
            { title: "IoT Sensor Integration", description: "Connecting factory machines to the cloud for real-time analytics.", icon: "cpu" },
            { title: "Automotive Design Software", description: "CAD/CAM plugins and tools for vehicle design.", icon: "zap" },
            { title: "Corporate eLearning", description: "Training platforms for upskilling large IT workforces.", icon: "globe" },
            { title: "Financial Services IT", description: "Backend support for Pune's growing fintech back-offices.", icon: "shield" }
        ],
        segments: [
            {
                audience: "Business Owners",
                title: "Industrial & IT",
                description: "Digitizing Hinjewadi and Chakan.",
                ideas: [
                    { title: "Smart Factory Dashboard", description: "IoT monitoring for manufacturing lines.", icon: "cpu" },
                    { title: "Corporate Training LMS", description: "Upskilling IT employees.", icon: "code" },
                    { title: "Inventory Optimization", description: "Just-in-time stock management.", icon: "bar-chart" }
                ]
            },
            {
                audience: "Students & Grads",
                title: "Oxford of the East",
                description: "Apps for Pune's massive student base.",
                ideas: [
                    { title: "Student Housing Finder", description: "PGs and flats in Viman Nagar/Kothrud.", icon: "home" },
                    { title: "Language Learning App", description: "German/Japanese classes for auto jobs.", icon: "globe" },
                    { title: "Exam Notes Exchange", description: "Sharing university study materials.", icon: "code" }
                ]
            },
            {
                audience: "Women Entrepreneurs",
                title: "Modern Lifestyle",
                description: "Catering to the urban IT crowd.",
                ideas: [
                    { title: "Organic Farm to Table", description: "Delivering fresh produce to societies.", icon: "sun" },
                    { title: "Corporate Gifting", description: "Curated gift hampers for offices.", icon: "star" },
                    { title: "Fitness trainer App", description: "Yoga and Zumba classes significantly.", icon: "heart" }
                ]
            }
        ]
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
        popularServices: [
            { title: "SME E-commerce Stores", description: "Affordable, easy-to-manage online shops for local retailers.", icon: "globe" },
            { title: "Coaching Institute Apps", description: "Live classes, notes sharing, and fee management for tutors.", icon: "code" },
            { title: "Field Force Tracking", description: "GPS-based apps to monitor sales teams and delivery agents.", icon: "zap" },
            { title: "Digital Marketing Automation", description: "Tools to automate social media and email campaigns for small biz.", icon: "bar-chart" },
            { title: "Hospital Management", description: "OPD booking and patient record systems for nursing homes.", icon: "shield" },
            { title: "Creative Portfolio Sites", description: "Showcasing the work of Kolkata's artists and designers.", icon: "star" }
        ],
        segments: [
            {
                audience: "Business Owners",
                title: "Trade & Tea",
                description: "Modernizing Burrabazar and Tea Gardens.",
                ideas: [
                    { title: "Tea Garden ERP", description: "Managing workforce and production in Darjeeling.", icon: "sun" },
                    { title: "Distribution Management", description: "Supply chain for FMCG distributors.", icon: "home" },
                    { title: "Hospital Queue Mgmt", description: "Reducing wait times in clinics.", icon: "heart" }
                ]
            },
            {
                audience: "Students & Grads",
                title: "Arts & Academics",
                description: "For the intellectuals of College Street.",
                ideas: [
                    { title: "Literature & Art Blog", description: "Publishing platform for Bengali writers.", icon: "code" },
                    { title: "Private Tutor Finder", description: "Connecting students with home tutors.", icon: "book" },
                    { title: "Used Gadget Reselling", description: "Buying/selling phones in Chandni Chowk.", icon: "phone" }
                ]
            },
            {
                audience: "Women Entrepreneurs",
                title: "Boutique & Food",
                description: "Turning passion into business.",
                ideas: [
                    { title: "Boutique Saree Store", description: "Selling handloom sarees online.", icon: "star" },
                    { title: "Home-Cooked Bengali Meals", description: "Delivery app for office goers.", icon: "heart" },
                    { title: "Art & Craft Workshop", description: "Booking platform for creative classes.", icon: "sun" }
                ]
            }
        ]
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
        popularServices: [
            { title: "Global Handicraft Marketplaces", description: "Multi-currency e-commerce platforms connecting artisans to the world.", icon: "globe" },
            { title: "Vernacular EdTech", description: "Learning apps in Bengali and local dialects for rural schools.", icon: "code" },
            { title: "Self-Help Group ERP", description: "Simple accounting and management tools for cooperative groups.", icon: "building" },
            { title: "Tourism Homestay Booking", description: "Platforms promoting local homestays in Shantiniketan.", icon: "star" },
            { title: "Agri-Advisory Apps", description: "Providing crop advice and weather alerts to local farmers.", icon: "zap" },
            { title: "NGO Impact Dashboards", description: "Reporting tools for non-profits to visualize their social impact.", icon: "chart-bar" }
        ],
        segments: [
            {
                audience: "Business Owners",
                title: "Rural Industry",
                description: "Tech for Rice Mills and Hospitality.",
                ideas: [
                    { title: "Rice Mill Automation", description: "Inventory and processing tracking.", icon: "cpu" },
                    { title: "Resort Booking Engine", description: "Direct bookings for weekend getaways.", icon: "home" },
                    { title: "Cold Storage Management", description: "IoT for preserving perishable produce.", icon: "sun" }
                ]
            },
            {
                audience: "Students & Grads",
                title: "Culture & Tech",
                description: "Bridging tradition with modern tech.",
                ideas: [
                    { title: "Shantiniketan Guide", description: "Tourism app with audio guides.", icon: "globe" },
                    { title: "Rural EdTech Center", description: "Teaching computer skills to village kids.", icon: "code" },
                    { title: "Local News Portal", description: "Hyperlocal news in Bengali.", icon: "zap" }
                ]
            },
            {
                audience: "Women Entrepreneurs",
                title: "Artisan Global",
                description: "Taking local art to the world.",
                ideas: [
                    { title: "Kantha Stitch Store", description: "Global e-commerce for embroidery.", icon: "heart" },
                    { title: "Handicraft Reselling", description: "Aggregating products from rural women.", icon: "star" },
                    { title: "Homemade Pickle Brand", description: "Selling organic food products online.", icon: "bag" }
                ]
            }
        ]
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
        popularServices: [
            { title: "International Trading Platforms", description: "Forex and stock trading engines for GIFT City businesses.", icon: "bar-chart" },
            { title: "Pharma Compliance ERP", description: "Manufacturing software adhering to FDA and EU regulations.", icon: "shield" },
            { title: "Export Document Automation", description: "Generating shipping and customs docs automatically.", icon: "code" },
            { title: "Chemical Plant IoT", description: "Monitoring reactor safety and efficiency in real-time.", icon: "zap" },
            { title: "Family Office Wealth Tools", description: "Investment tracking for Gujarat's high-net-worth families.", icon: "building" },
            { title: "Diamond Inventory Cloud", description: "Secure tracking of high-value inventory for the gem industry.", icon: "star" }
        ],
        segments: [
            {
                audience: "Business Owners",
                title: "Global Trade",
                description: "Tools for Gujarat's export giants.",
                ideas: [
                    { title: "Stock Trading Terminal", description: "Low latency trading for GIFT City.", icon: "bar-chart" },
                    { title: "Textile Export ERP", description: "Managing international fabric orders.", icon: "globe" },
                    { title: "Chemical Lab Management", description: "Quality control for pharma units.", icon: "shield" }
                ]
            },
            {
                audience: "Students & Grads",
                title: "Finance & Event",
                description: "Opportunities in the business capital.",
                ideas: [
                    { title: "CA/CS Exam Prep", description: "Coaching app for commerce students.", icon: "book" },
                    { title: "Event Management App", description: "Organizing Garba and corporate events.", icon: "star" },
                    { title: "Startup Pitch Deck Tool", description: "Helping new founders raise capital.", icon: "zap" }
                ]
            },
            {
                audience: "Women Entrepreneurs",
                title: "Food & Fashion",
                description: "Scaling household businesses.",
                ideas: [
                    { title: "Home Decor Reselling", description: "Selling handicrafts and furniture.", icon: "home" },
                    { title: "Gujarati Snacks D2C", description: "Shipping Thepla/Khakhra globally.", icon: "heart" },
                    { title: "Tiffin Service Manager", description: "Managing daily meal orders.", icon: "sun" }
                ]
            }
        ]
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
        popularServices: [
            { title: "AR/VR Heritage Tours", description: "Immersive virtual guides for forts and palaces.", icon: "globe" },
            { title: "Jewelry 3D Configurators", description: "Allowing global buyers to customize jewelry designs online.", icon: "star" },
            { title: "Handicraft Export Portals", description: "Wholesale B2B platforms for Rajasthan's art exports.", icon: "building" },
            { title: "Destination Wedding Planners", description: "Apps to manage logistics for big palace weddings.", icon: "heart" },
            { title: "Hotel Management Systems", description: "PMS for heritage hotels and boutique havellis.", icon: "building" },
            { title: "Textile Sourcing Apps", description: "Connecting designers with Block Print artisans.", icon: "zap" }
        ],
        segments: [
            {
                audience: "Business Owners",
                title: "Tourism & Jewels",
                description: "High-value industries of Rajasthan.",
                ideas: [
                    { title: "Gemstone Inventory", description: "Tracking high-value stones.", icon: "diamond" },
                    { title: "Heritage Hotel PMS", description: "Booking system for palaces.", icon: "home" },
                    { title: "Export Catalog App", description: "Digital showcases for B2B buyers.", icon: "globe" }
                ]
            },
            {
                audience: "Students & Grads",
                title: "Design & Guide",
                description: "Creative careers in Jaipur.",
                ideas: [
                    { title: "Tourism Guide Training", description: "Certification for local guides.", icon: "flag" },
                    { title: "Handicraft Design Tool", description: "Creating new patterns digitially.", icon: "edit" },
                    { title: "Pre-Wedding Shoot Booking", description: "Finding locations and photographers.", icon: "camera" }
                ]
            },
            {
                audience: "Women Entrepreneurs",
                title: "Art & Wedding",
                description: "Thriving in the creative sector.",
                ideas: [
                    { title: "Block Print Online Store", description: "Selling Jaipuri prints globally.", icon: "star" },
                    { title: "Wedding Planning Asst", description: "Coordinating vendors for weddings.", icon: "heart" },
                    { title: "Jewelry Reselling", description: "Selling imitation jewelry online.", icon: "gem" }
                ]
            }
        ]
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
        popularServices: [
            { title: "Waste Mgmt IoT Solutions", description: "Smart bin sensors and route optimization for collection trucks.", icon: "zap" },
            { title: "Civic Engagement Apps", description: "Platforms for citizens to report issues to the municipality.", icon: "globe" },
            { title: "Logistics Fleet ERP", description: "Managing truck fleets operating across Central India.", icon: "building" },
            { title: "Food Delivery Aggregators", description: "Hyperlocal delivery apps for Indore's famous food culture.", icon: "star" },
            { title: "Warehousing Automation", description: "Inventory systems for large distribution centers.", icon: "code" },
            { title: "Smart Traffic Control", description: "AI monitoring for traffic signals and violations.", icon: "cpu" }
        ],
        segments: [
            {
                audience: "Business Owners",
                title: "Logistics & CleanTech",
                description: "Solutions for Central India's hub.",
                ideas: [
                    { title: "Fleet Management ERP", description: "Tracking trucks across MP.", icon: "globe" },
                    { title: "Waste Recycling Tech", description: "Processing plant automation.", icon: "zap" },
                    { title: "FMCG Distribution", description: "Supply chain for snacks.", icon: "bar-chart" }
                ]
            },
            {
                audience: "Students & Grads",
                title: "Food & Tech",
                description: "Innovating for the foodie city.",
                ideas: [
                    { title: "Street Food Discovery", description: "Guide to Sarafa Bazaar gems.", icon: "star" },
                    { title: "Civic Hackathon App", description: "Solving city problems with code.", icon: "code" },
                    { title: "Local Event Finder", description: "Concerts and meetups in Indore.", icon: "music" }
                ]
            },
            {
                audience: "Women Entrepreneurs",
                title: "Culinary & Art",
                description: "Turning skills into brands.",
                ideas: [
                    { title: "Sustainable Waste Art", description: "Selling upcycled products.", icon: "heart" },
                    { title: "Farsan Cloud Kitchen", description: "Homemade snacks delivery.", icon: "sun" },
                    { title: "Event Decor Services", description: "Wedding and party planning.", icon: "star" }
                ]
            }
        ]
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
        popularServices: [
            { title: "Port Logistics Systems", description: "Managing container movements and shipping schedules.", icon: "globe" },
            { title: "Ayurveda Tele-Consultation", description: "Video platforms connecting global patients with Kerala's doctors.", icon: "heart" },
            { title: "Seafood Export Traceability", description: "Blockchain tracking from catch to consumer.", icon: "shield" },
            { title: "NRI Remittance Apps", description: "Fintech solutions for the Kerala diaspora.", icon: "bar-chart" },
            { title: "Houseboat Booking Engines", description: "Specialized travel portals for backwater tourism.", icon: "star" },
            { title: "Start-up Incubation Portals", description: "Management tools for Kochi's vibrant startup village.", icon: "code" }
        ],
        segments: [
            {
                audience: "Business Owners",
                title: "Marine & Wellness",
                description: "Exporting Kerala's best.",
                ideas: [
                    { title: "Seafood Export Chain", description: "Cold chain for fish exports.", icon: "anchor" },
                    { title: "Ayurveda Resort Mgmt", description: "Booking and patient tracking.", icon: "sun" },
                    { title: "Shipping Agency ERP", description: "Managing port documentation.", icon: "globe" }
                ]
            },
            {
                audience: "Students & Grads",
                title: "Tech Village",
                description: "Ideas for the Startup Village.",
                ideas: [
                    { title: "Marine Bio-Tech App", description: "Researching ocean life.", icon: "search" },
                    { title: "Tourism Vlogging Platform", description: "Showcasing God's Own Country.", icon: "video" },
                    { title: "Fintech for Remittance", description: "Simpler money transfer apps.", icon: "dollar-sign" }
                ]
            },
            {
                audience: "Women Entrepreneurs",
                title: "Tourism & Care",
                description: "Hospitality and wellness ventures.",
                ideas: [
                    { title: "Spice Garden Tours", description: "Booking guided farm visits.", icon: "leaf" },
                    { title: "Wellness Yoga Brand", description: "Online yoga classes.", icon: "heart" },
                    { title: "Homestay Management", description: "Running BnBs for tourists.", icon: "home" }
                ]
            }
        ]
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
        popularServices: [
            { title: "Urban Planning GIS", description: "Tools for mapping zoning and infrastructure maintenance.", icon: "globe" },
            { title: "Luxury Retail POS", description: "Point of sale systems with CRM for high-end boutiques.", icon: "bar-chart" },
            { title: "Smart Traffic Management", description: "Automated systems to maintain Chandigarh's disciplined traffic.", icon: "cpu" },
            { title: "Food Processing ERP", description: "Managing production lines for wheat and dairy processing.", icon: "building" },
            { title: "Real Estate CRM", description: "Managing property sales in the expanding Mohali/Zirakpur belt.", icon: "home" },
            { title: "Govt Citizen Portals", description: "Streamlined interfaces for public services.", icon: "shield" }
        ],
        segments: [
            {
                audience: "Business Owners",
                title: "Retail & Planning",
                description: "Serving the affluent Tricity.",
                ideas: [
                    { title: "Luxury Retail CRM", description: "Managing high-net-worth clients.", icon: "star" },
                    { title: "Real Estate Portal", description: "Selling properties in Mohali.", icon: "home" },
                    { title: "Urban Town Planning", description: "Software for architects.", icon: "map" }
                ]
            },
            {
                audience: "Students & Grads",
                title: "Study & Fashion",
                description: "Trends in Punjab University.",
                ideas: [
                    { title: "Visa Consultant App", description: "Tracking immigration applications.", icon: "globe" },
                    { title: "Fashion Design Portfolio", description: "Showcasing student designs.", icon: "camera" },
                    { title: "IELTS Coahing App", description: "Practice for english tests.", icon: "book" }
                ]
            },
            {
                audience: "Women Entrepreneurs",
                title: "Boutique & Events",
                description: "High-end lifestyle businesses.",
                ideas: [
                    { title: "Designer Boutique", description: "Custom Punjabi suits online.", icon: "shopping-bag" },
                    { title: "Event Planner App", description: "Organizing kitty parties and launches.", icon: "calendar" },
                    { title: "Diet & Nutrition App", description: "Personalized meal plans.", icon: "heart" }
                ]
            }
        ]
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
        popularServices: [
            { title: "Large-Scale GovTech Apps", description: "Beneficiary management systems for state schemes.", icon: "building" },
            { title: "Warehouse Management (WMS)", description: "Barcode scanning and inventory tracking for logistics parks.", icon: "building" },
            { title: "Hindi-First Mobile Apps", description: "UX designed specifically for Hindi-speaking user bases.", icon: "globe" },
            { title: "E-Governance Kiosks", description: "Touchscreen interfaces for public service delivery.", icon: "cpu" },
            { title: "Handicraft(Chikankari) E-com", description: "Global platforms for Lucknow's famous embroidery.", icon: "star" },
            { title: "Smart City Surveillance", description: "Integration of CCTV feeds for city safety.", icon: "shield" }
        ],
        segments: [
            {
                audience: "Business Owners",
                title: "GovTech & Export",
                description: "Navigating UP's massive market.",
                ideas: [
                    { title: "Cold Storage WMS", description: "Storing mangoes and produce.", icon: "snowflake" },
                    { title: "Chikankari Export House", description: "Global B2B sales of embroidery.", icon: "globe" },
                    { title: "Govt Contractor ERP", description: "Managing tender projects.", icon: "briefcase" }
                ]
            },
            {
                audience: "Students & Grads",
                title: "Gov Jobs & Arts",
                description: "For the aspirants of Lucknow.",
                ideas: [
                    { title: "Gov Exam Prep (Hindi)", description: "Study materials for UPPSC.", icon: "book" },
                    { title: "Poetry/Shayari App", description: "Platform for local poets.", icon: "mic" },
                    { title: "Used Book Exchange", description: "Marketplace for Aminabad books.", icon: "book-open" }
                ]
            },
            {
                audience: "Women Entrepreneurs",
                title: "Tradition & Taste",
                description: "Monetizing heritage skills.",
                ideas: [
                    { title: "Awadhi Cloud Kitchen", description: "Delivering Galouti Kebabs.", icon: "heart" },
                    { title: "Home Boutique", description: "Selling Kurti sets from home.", icon: "shopping-bag" },
                    { title: "Online Tuition Class", description: "Teaching Hindi/Sanskrit.", icon: "video" }
                ]
            }
        ]
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
        popularServices: [
            { title: "Sports Performance Analytics", description: "Wearable data integration for athlete training optimization.", icon: "zap" },
            { title: "Mining Safety ERP", description: "IoT sensors for tracking worker safety in mines.", icon: "shield" },
            { title: "Smart City Grid IoT", description: "Managing streetlights and utilities efficiently.", icon: "cpu" },
            { title: "Disaster Management Tools", description: "Early warning systems for cyclones and floods.", icon: "globe" },
            { title: "Hockey League Mgmt", description: "Tournament software for India's sports capital.", icon: "star" },
            { title: "Tourism Circuits App", description: "Guides for Temple City and eco-tourism spots.", icon: "globe" }
        ],
        segments: [
            {
                audience: "Business Owners",
                title: "Industry & Sports",
                description: "Tech for Mines and Stadiums.",
                ideas: [
                    { title: "Mining Safety System", description: "IoT for worker protection.", icon: "hard-hat" },
                    { title: "Sports Academy Mgmt", description: "Managing Kalinga Stadium events.", icon: "activity" },
                    { title: "Hotel Booking Engine", description: "For Puri/Konark tourists.", icon: "home" }
                ]
            },
            {
                audience: "Students & Grads",
                title: "Tech & Relief",
                description: "Innovating for social good.",
                ideas: [
                    { title: "Disaster Relief App", description: "Coordinating volunteers during cyclones.", icon: "cloud-rain" },
                    { title: "Hockey Fan App", description: "News and stats for indian hockey.", icon: "circle" },
                    { title: "Odia Learning App", description: "Teaching local language.", icon: "book" }
                ]
            },
            {
                audience: "Women Entrepreneurs",
                title: "Handloom & Tour",
                description: "Promoting Odisha's culture.",
                ideas: [
                    { title: "Handloom Saree Store", description: "Direct sales for weavers.", icon: "shopping-bag" },
                    { title: "Temple Tour Guide", description: "Organized tours for older women.", icon: "map" },
                    { title: "Odia Sweet Shop", description: "Online orders for Rasagola.", icon: "heart" }
                ]
            }
        ]
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
        popularServices: [
            { title: "Textile Mill ERP", description: "Tracking cotton-to-fabric lifecycle and efficiency.", icon: "code" },
            { title: "IoT Machine Monitoring", description: "Sensors checking loom health and production speeds.", icon: "cpu" },
            { title: "Pump Mfg Inventory", description: "Specialized inventory for engineering components.", icon: "building" },
            { title: "Export Documentation", description: "Automating customs paperwork for global shipping.", icon: "globe" },
            { title: "Foundry Management", description: "Process tracking for casting and molding units.", icon: "zap" },
            { title: "Employee Shift Mgmt", description: "Scheduling tools for large factory workforces.", icon: "building" }
        ],
        segments: [
            {
                audience: "Business Owners",
                title: "Manuf. & Textiles",
                description: "Automation for the Manchester of South.",
                ideas: [
                    { title: "Textile Production ERP", description: "Managing spinning mills.", icon: "layers" },
                    { title: "Pump Inventory System", description: "Tracking motor parts.", icon: "settings" },
                    { title: "Foundry Analytics", description: "Optimizing casting processes.", icon: "bar-chart" }
                ]
            },
            {
                audience: "Students & Grads",
                title: "Core Engineering",
                description: "Tools for mechanical students.",
                ideas: [
                    { title: "Engineering Formula Tool", description: "Quick ref for calculations.", icon: "calculator" },
                    { title: "Robotics Club App", description: "Managing college tech fests.", icon: "cpu" },
                    { title: "CAD Design Viewer", description: "Mobile app for diagrams.", icon: "eye" }
                ]
            },
            {
                audience: "Women Entrepreneurs",
                title: "Cotton & Food",
                description: "Sustainable business ideas.",
                ideas: [
                    { title: "Organic Cotton Brand", description: "Baby clothes D2C.", icon: "smile" },
                    { title: "Home Catering Service", description: "South Indian meals for hostels.", icon: "coffee" },
                    { title: "Terrace Garden Consultant", description: "Helping set up green roofs.", icon: "sun" }
                ]
            }
        ]
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
        popularServices: [
            { title: "Shipping Container Tracking", description: "Real-time location and status of cargo.", icon: "globe" },
            { title: "Fisheries Marketplace", description: "Connecting fishermen directly with exporters.", icon: "star" },
            { title: "Fintech Startup Sandbox", description: "Testing environments for new financial apps.", icon: "code" },
            { title: "Port Terminal OS", description: "Managing movement of goods within the harbor.", icon: "building" },
            { title: "Beach Tourism Apps", description: "Guides and booking for coastal experiences.", icon: "sun" },
            { title: "Naval Defense Tech", description: "Secure communications software for defense partners.", icon: "shield" }
        ],
        segments: [
            {
                audience: "Business Owners",
                title: "Port & Fintech",
                description: "Leveraging the coast and code.",
                ideas: [
                    { title: "Container Tracking", description: "Live updates for logistics.", icon: "globe" },
                    { title: "Fintech Sandbox", description: "Testing new payment apps.", icon: "code" },
                    { title: "Fisheries Supply Chain", description: "Cold storage for exports.", icon: "anchor" }
                ]
            },
            {
                audience: "Students & Grads",
                title: "Marine & Tech",
                description: "Careers in the blue economy.",
                ideas: [
                    { title: "Marine Biology App", description: "Identifying local fish species.", icon: "search" },
                    { title: "Beach Sports Booking", description: "Volleyball/Surfing slots.", icon: "sun" },
                    { title: "Defense Exam Prep", description: "Navy recruitment coaching.", icon: "shield" }
                ]
            },
            {
                audience: "Women Entrepreneurs",
                title: "Sea & Wellness",
                description: "Coastal lifestyle business.",
                ideas: [
                    { title: "Seafood Restaurant App", description: "Delivery of fresh catches.", icon: "coffee" },
                    { title: "Wellness Retreat", description: "Yoga by the beach bookings.", icon: "heart" },
                    { title: "Pearl Jewelry Store", description: "Selling local pearls online.", icon: "gem" }
                ]
            }
        ]
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
        popularServices: [
            { title: "Transport Mgmt System (TMS)", description: "Optimizing routes for cross-country trucking.", icon: "globe" },
            { title: "Warehouse Optimization", description: "Maximizing storage space in central hubs.", icon: "building" },
            { title: "Agri-Export Cold Chain", description: "Monitoring temperature for perishable orange exports.", icon: "zap" },
            { title: "EV Fleet Charging Ops", description: "Managing charging schedules for electric trucks.", icon: "cpu" },
            { title: "Multi-Modal Logistics", description: "Syncing rail and road transport data.", icon: "code" },
            { title: "Driver Safety App", description: "Monitoring fatigue and secure driving practices.", icon: "shield" }
        ],
        segments: [
            {
                audience: "Business Owners",
                title: "Logistics Hub",
                description: "Zero Mile connectivity solutions.",
                ideas: [
                    { title: "Transport Mgmt (TMS)", description: "Route planning for trucks.", icon: "map" },
                    { title: "Orange Export Chain", description: "Quality check for exports.", icon: "check-circle" },
                    { title: "Warehouse Space Finder", description: "Leasing helps.", icon: "home" }
                ]
            },
            {
                audience: "Students & Grads",
                title: "Agri & Transport",
                description: "Modernizing traditional sectors.",
                ideas: [
                    { title: "Agri Drone Service", description: "Spraying and monitoring crops.", icon: "send" },
                    { title: "Transport Logistics App", description: "Driver communication tool.", icon: "message-circle" },
                    { title: "Railway Exam Prep", description: "Coaching for railway jobs.", icon: "book" }
                ]
            },
            {
                audience: "Women Entrepreneurs",
                title: "Food Processing",
                description: "Value addition to local produce.",
                ideas: [
                    { title: "Fruit Processing Unit", description: "Making juices/jams.", icon: "heart" },
                    { title: "Organic Jam Brand", description: "D2C sales of orange marmalade.", icon: "shopping-cart" },
                    { title: "Tution Center Mgmt", description: "Managing classes at home.", icon: "edit" }
                ]
            }
        ]
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
    popularServices: [
        { title: "Custom App Development", description: "Tailor-made mobile and web applications built for your specific business goals.", icon: "code" },
        { title: "Enterprise AI Integration", description: "Deploying machine learning models to automate workflows and drive insights.", icon: "cpu" },
        { title: "Cloud Infrastructure", description: "Secure, scalable cloud architectures on AWS, Azure, or Google Cloud.", icon: "globe" },
        { title: "Digital Transformation", description: "Modernizing legacy systems to improve agility and reduce costs.", icon: "zap" },
        { title: "E-commerce Solutions", description: "High-conversion online stores with seamless payment gateways.", icon: "star" },
        { title: "Cybersecurity Audits", description: "Comprehensive testing to protect your data and intellectual property.", icon: "shield" }
    ]
};
