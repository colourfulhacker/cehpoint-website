
import {
    Brain, ShieldCheck, Lock, Cloud, Eye, Briefcase,
    Factory, Car, Server, RefreshCw, Activity, Bot,
    Building2, Flame, Link as LinkIcon, Cpu, Siren, Fingerprint,
    ArrowRight, Shield, Globe, PoundSterling, Network, ShieldAlert,
    BrainCircuit, Building, Code, Play
} from "lucide-react";

export interface RegionData {
    id: string;
    name: string;
    flag: string;
    focus: string;
    marketAnalysis: string; // Strategic overview
    topITService: {
        title: string;
        description: string;
        icon: string; // String name for dynamic mapping
    };
    topCybersecurity: {
        title: string;
        description: string;
        icon: string;
    };
    innovativeTech: {
        title: string;
        description: string;
        icon: string;
    };
    challenges: Array<{
        title: string;
        description: string;
    }>;
    aiSolutions: Array<{
        title: string;
        description: string;
        impact: string;
    }>;
    industries: Array<{
        name: string;
        needs: string;
    }>;
    techStack: string[]; // Preferred technologies
    complianceBadges: string[];
    localBusiness?: {
        streetAddress: string;
        addressLocality: string;
        addressCountry: string;
        postalCode?: string;
        telephone?: string;
    };
    seoJson: {
        title: string;
        description: string;
        keywords: string[];
        faq: Array<{ question: string; answer: string }>;
    };
}

export const regionalTrends: Record<string, RegionData> = {
    "us-ca": {
        id: "us-ca",
        name: "United States & Canada",
        flag: "🇺🇸 🇨🇦",
        focus: "AI Governance, Cloud Resilience, and Compliance",
        marketAnalysis: "The North American market is pivoting sharply towards 'Responsible AI' and operational resilience. With the SEC's new cyber disclosure rules and the EU AI Act influencing global standards, US enterprises are prioritizing governance over raw speed. The focus is on integrating GenAI into improved workflows without compromising data sanctity or regulatory standing.",
        topITService: {
            title: "Agentic AI & LLMOps Integration",
            description: "Moving from pilot to production with autonomous AI agents and robust Large Language Model Operations (LLMOps) frameworks.",
            icon: "Bot"
        },
        topCybersecurity: {
            title: "Identity-Bound Zero Trust",
            description: "Implementing Zero Trust architectures where identity is the new perimeter, securing remote and hybrid workforces.",
            icon: "ShieldCheck"
        },
        innovativeTech: {
            title: "Cloud-Native AI Architecture",
            description: "Designing scalable, cloud-native infrastructures specifically optimized for high-performance AI workloads.",
            icon: "Cloud"
        },
        challenges: [
            { title: "Legacy Modernization Debt", description: "Huge backlogs of monolithic legacy systems preventing agility." },
            { title: "Regulatory Fragmentation", description: "Navigating state-level privacy laws (CCPA, CPRA) alongside federal mandates." },
            { title: "AI Hallucination Risks", description: "Enterprises fear deploying GenAI in customer-facing roles due to accuracy concerns." }
        ],
        aiSolutions: [
            { title: "RAG-Based Knowledge Bots", description: "Retrieval-Augmented Generation bots that only reference internal, verified documents.", impact: "99% reduction in hallucination for customer support." },
            { title: "Predictive Compliance Engines", description: "AI models that scan codebases and logs for real-time compliance violations.", impact: "Automated audit readiness 24/7." }
        ],
        industries: [
            { name: "Fintech & Banking", needs: "Fraud detection, HFT latency reduction, and regulatory reporting." },
            { name: "Healthcare", needs: "HIPAA-compliant patient data processing and predictive diagnostics." },
            { name: "SaaS Platforms", needs: "Scalable multi-tenant architectures and churn prediction." }
        ],
        techStack: ["AWS", "Azure", "Snowflake", "Kubernetes", "Python", "React", "Terraform"],
        complianceBadges: ["SOC2 Type II", "HIPAA Compliant", "CCPA Ready", "NIST Framework"],
        localBusiness: {
            streetAddress: "5 Penn Plaza, 14th Floor",
            addressLocality: "New York, NY",
            addressCountry: "US",
            postalCode: "10001",
            telephone: "+1-212-555-0123"
        },
        seoJson: {
            title: "US & Canada IT Services | Agentic AI, LLMOps & Zero Trust",
            description: "Leading IT services for North America 2026: Agentic AI Integration, Identity-Bound Zero Trust, and Cloud-Native AI Architecture. SOC2 & HIPAA Compliant.",
            keywords: ["Agentic AI", "LLMOps", "Zero Trust", "Cloud-Native AI", "Identity Management", "US IT Services"],
            faq: [
                { question: "How do we implement Agentic AI in US enterprises?", answer: "We integrate autonomous AI agents into your existing workflows using secure LLMOps frameworks, ensuring compliance with US AI safety standards." },
                { question: "What is Identity-Bound Zero Trust?", answer: "It is a security model where access is granted based on verified identity rather than network location, crucial for hybrid US workforces." }
            ]
        }
    },
    "uk": {
        id: "uk",
        name: "United Kingdom",
        flag: "🇬🇧",
        focus: "Data Privacy (Post-GDPR evolution) and Hybrid Cloud",
        marketAnalysis: "The UK market is characterized by a pragmatic approach to digital transformation, driven by cost-efficiency (FinOps) and rigorous data sovereignty requirements. Post-Brexit data adequacy deals and the new UK Data Reform Bill are shaping how businesses handle personal information, making 'Privacy by Design' a critical competitive advantage.",
        topITService: {
            title: "FinOps & Cloud Cost Optimization",
            description: "Strategic cloud financial management to maximize value and minimize waste in complex hybrid cloud environments.",
            icon: "PoundSterling"
        },
        topCybersecurity: {
            title: "Managed Detection & Response (MDR)",
            description: "24/7 outsourced security operations providing rapid detection and remediation of advanced threats.",
            icon: "Eye"
        },
        innovativeTech: {
            title: "Hybrid Cloud Orchestration",
            description: "Seamless management and automation of workloads across on-premise, private, and public cloud infrastructures.",
            icon: "Network"
        },
        challenges: [
            { title: "Cloud Overspending", description: "Uncontrolled cloud sprawl leading to inflated operational costs." },
            { title: "Talent Shortage", description: "Critical lack of specialized cybersecurity and DevOps professionals in the local market." },
            { title: "Data Sovereignty", description: "Strict requirements on where and how customer data is stored and processed." }
        ],
        aiSolutions: [
            { title: "AI-Driven FinOps", description: "Machine learning models that predict cloud spikes and automate resource rightsizing.", impact: "Average 30% reduction in cloud bills." },
            { title: "Automated SOC Analysts", description: "AI agents handling Tier-1 security alerts to relieve pressure on human teams.", impact: "60% faster Mean Time to Respond (MTTR)." }
        ],
        industries: [
            { name: "Financial Services (City of London)", needs: "High-frequency trading infrastructure and strict FCA compliance." },
            { name: "Retail & E-commerce", needs: "Personalization engines and supply chain visibility." },
            { name: "Public Sector", needs: "G-Cloud compatible services and citizen-facing digital portals." }
        ],
        techStack: ["Azure", "AWS", "Java", "C# .NET", "Angular", "SQL Server"],
        complianceBadges: ["GDPR Compliant", "ISO/IEC 27001", "Cyber Essentials Plus", "FCA Aligned"],
        localBusiness: {
            streetAddress: "12 Steward Street, The Steward Building",
            addressLocality: "London",
            addressCountry: "GB",
            postalCode: "E1 6FQ"
        },
        seoJson: {
            title: "UK IT Services | FinOps, MDR Security & Hybrid Cloud",
            description: "UK-focused IT: FinOps & Cloud Cost Optimization, Managed Detection & Response (MDR), and Hybrid Cloud Orchestration. GDPR & ISO 27001 Certified.",
            keywords: ["FinOps", "MDR", "Hybrid Cloud", "Cloud Cost Optimization", "UK Cybersecurity", "GDPR"],
            faq: [
                { question: "How does MDR protect UK businesses?", answer: "Our MDR service provides continuous 24/7 monitoring and rapid incident response, essential for complying with UK data protection regulations." },
                { question: "Why is FinOps important for UK cloud strategy?", answer: "FinOps ensures transparency and accountability in cloud spending, crucial for UK firms managing tight budgets in 2026." }
            ]
        }
    },
    "de": {
        id: "de",
        name: "Germany",
        flag: "🇩🇪",
        focus: "Industry 4.0, IoT Security, and Automotive Tech",
        marketAnalysis: "Germany remains the industrial heart of Europe. The convergence of OT (Operational Technology) and IT is the primary driver here. 'Industrie 4.0' is no longer a buzzword but an operational reality requiring extreme reliability, real-time processing, and unshakeable security for connected factories and vehicles.",
        topITService: {
            title: "Industrial IoT (IIoT) & Digital Twins",
            description: "Creating virtual replicas of physical systems to optimize manufacturing processes and predict maintenance needs.",
            icon: "Factory"
        },
        topCybersecurity: {
            title: "Automotive & Supply Chain VAPT",
            description: "Vulnerability Assessment and Penetration Testing specifically for automotive software and complex supply chain networks.",
            icon: "Car"
        },
        innovativeTech: {
            title: "Sovereign Cloud Migration",
            description: "Migrating sensitive data to sovereign cloud solutions that ensure strict compliance with German data residency laws.",
            icon: "Server"
        },
        challenges: [
            { title: "Legacy OT Integration", description: "Connecting 20-year-old machinery to modern cloud analytics platforms." },
            { title: "Supply Chain Attacks", description: "Vulnerabilities introduced through third-party component suppliers." },
            { title: "Strict Data Residency", description: "Requirement to keep data physically within German borders (Bundesdatenschutzgesetz)." }
        ],
        aiSolutions: [
            { title: "Predictive Maintenance AI", description: "Models analyzing vibration and heat sensors to predict machine failure days in advance.", impact: "Zero unplanned downtime." },
            { title: "Visual QA Inspection", description: "Computer vision systems checking product quality on high-speed assembly lines.", impact: "99.99% defect detection rate." }
        ],
        industries: [
            { name: "Automotive", needs: "Embedded software, V2X communication, and production line automation." },
            { name: "Manufacturing (Mittelstand)", needs: "ERP modernization and IoT integration." },
            { name: "Pharma & Chemical", needs: "Process control optimization and IP protection." }
        ],
        techStack: ["SAP", "Siemens Mindsphere", "Azure IoT", "Java", "C++", "Python"],
        complianceBadges: ["GDPR Compliant", "ISO/IEC 27001", "BSI Standards", "TISAX"],
        localBusiness: {
            streetAddress: "Maximilianstraße 54",
            addressLocality: "München",
            addressCountry: "DE",
            postalCode: "80538"
        },
        seoJson: {
            title: "Germany IT Solutions | IIoT, Digital Twins & Sovereign Cloud",
            description: "German Engineering IT: Industry 4.0 IIoT, Digital Twins, Automotive VAPT, and Sovereign Cloud Migration. BSI & TISAX aligned.",
            keywords: ["Industrial IoT", "Digital Twins", "Automotive Security", "Sovereign Cloud", "VAPT", "Germany IT"],
            faq: [
                { question: "What is the benefit of Digital Twins in German manufacturing?", answer: "Digital Twins allow manufacturers to simulate and optimize production lines in real-time, reducing downtime and improving efficiency." },
                { question: "How do we ensure Supply Chain Security?", answer: "We perform rigorous VAPT on all vendor integrations to prevent third-party breaches, a key requirement for the German automotive sector." }
            ]
        }
    },
    "au": {
        id: "au",
        name: "Australia",
        flag: "🇦🇺",
        focus: "Critical Infrastructure Protection and SaaS Modernization",
        marketAnalysis: "Australia is facing a surge in cyber threats targeting critical infrastructure, prompting severe regulatory updates (SOCI Act). Simultaneously, the remote nature of the continent drives a heavy reliance on efficient, resilient SaaS applications. The market demands robust business continuity and high-availability systems.",
        topITService: {
            title: "Cyber Resilience & Business Continuity",
            description: "Comprehensive strategies to maintain essential functions during adverse cyber events and ensure rapid recovery.",
            icon: "Activity"
        },
        topCybersecurity: {
            title: "Ransomware Preemption (CTEM)",
            description: "Continuous Threat Exposure Management to identify and mitigate ransomware risks before they can be exploited.",
            icon: "ShieldAlert"
        },
        innovativeTech: {
            title: "SaaS Modernization & Recovery",
            description: "Modernizing legacy applications to SaaS models while ensuring robust data recovery mechanisms.",
            icon: "RefreshCw"
        },
        challenges: [
            { title: "Ransomware Epidemic", description: "High frequency of attacks targeting healthcare and logistics sectors." },
            { title: "Skills Gap", description: "Shortage of local talent for niche technologies." },
            { title: "Network Latency", description: "Ensuring responsive apps despite geographic isolation." }
        ],
        aiSolutions: [
            { title: "AI-Powered Threat Hunting", description: "Behavioral analysis of network traffic to identify zero-day ransomware actors.", impact: "Pre-encryption attack neutralisation." },
            { title: "Intelligent Edge Caching", description: "AI aiming to predict user data needs and pre-cache content locally.", impact: "Sub-50ms app experience nationwide." }
        ],
        industries: [
            { name: "Mining & Resources", needs: "Remote asset monitoring and autonomous operations." },
            { name: "Healthcare", needs: "Patient data security and interoperability (FHIR)." },
            { name: "Public Sector", needs: "Secure citizen portals and sovereign data handling." }
        ],
        techStack: ["AWS", "Atlassian Suite", ".NET Core", "React", "Node.js"],
        complianceBadges: ["Essential Eight", "ISO 22301", "SOCI Act Aligned"],
        localBusiness: {
            streetAddress: "Level 11/10 Carrington St",
            addressLocality: "Sydney NSW",
            addressCountry: "AU",
            postalCode: "2000"
        },
        seoJson: {
            title: "Australia Cyber Resilience | Ransomware Protection & SaaS",
            description: "Australian IT Services: Cyber Resilience, Ransomware Preemption (CTEM), and SaaS Modernization. Protecting Critical Infrastructure.",
            keywords: ["Cyber Resilience", "Ransomware Protection", "CTEM", "SaaS Modernization", "Business Continuity", "Australia IT"],
            faq: [
                { question: "What is CTEM and why is it needed in Australia?", answer: "CTEM (Continuous Threat Exposure Management) proactively fixes vulnerabilities, preventing the ransomware attacks targeting Australian infrastructure." },
                { question: "How do we handle SaaS Modernization?", answer: "We migrate legacy on-prem systems to secure, scalable cloud-based SaaS platforms with built-in disaster recovery." }
            ]
        }
    },
    "ae": {
        id: "ae",
        name: "United Arab Emirates (Dubai)",
        flag: "🇦🇪",
        focus: "Smart Cities, FinTech, and Secure Communications",
        marketAnalysis: "Information technology in the UAE is synonymous with 'Vision'. The aggressive push towards the Digital Economy Strategy means high demand for Web3, Blockchain, and AI-driven citizen services. Security is paramount, but it must be frictionless to support the rapid pace of business in Dubai and Abu Dhabi.",
        topITService: {
            title: "Web3 & Blockchain for Smart Cities",
            description: "Building decentralized infrastructure for identity, property, and logistics to support Dubai's Smart City vision.",
            icon: "Link"
        },
        topCybersecurity: {
            title: "AI-Powered Fraud Defense",
            description: "Utilizing advanced AI to detect and prevent complex financial fraud and cyber attacks in real-time.",
            icon: "BrainCircuit"
        },
        innovativeTech: {
            title: "Digital Government Solutions",
            description: "Enabling seamless, paperless government services through secure and efficient digital platforms.",
            icon: "Building"
        },
        challenges: [
            { title: "Rapid Digitization Risk", description: "Speed of adoption often outpaces security controls." },
            { title: "Cryptocurrency Regulation", description: "Navigating the evolving VARA compliance landscape." },
            { title: "Talent Retention", description: "High turnover of expatriate technical staff." }
        ],
        aiSolutions: [
            { title: "Smart City Traffic AI", description: "Reinforcement learning for optimizing traffic flow and public transport.", impact: "20% reduction in congestion." },
            { title: "AML/KYC Automation", description: "AI verifying documents and transactions for crypto exchanges.", impact: "Instantonboarding with bank-grade security." }
        ],
        industries: [
            { name: "Real Estate", needs: "Tokenization of assets and virtual tours." },
            { name: "Fintech & Crypto", needs: "Secure exchange architecture and wallet management." },
            { name: "Logistics", needs: "Route optimization and customs blockchain integration." }
        ],
        techStack: ["Solidity", "Python", "Go", "Flutter", "Azure"],
        complianceBadges: ["NESA Compliant", "DESC Standards", "VARA Aligned"],
        localBusiness: {
            streetAddress: "1st Floor, Emaar Square, Building 6",
            addressLocality: "Dubai",
            addressCountry: "AE",
            postalCode: ""
        },
        seoJson: {
            title: "Dubai IT Services | Web3, Smart Cities & AI Fraud Defense",
            description: "Dubai & UAE Innovation: Web3 Blockchain, AI-Powered Fraud Defense, and Digital Government Solutions. NESA & DESC Compliant.",
            keywords: ["Web3", "Blockchain", "Smart Cities", "AI Fraud Defense", "Digital Government", "Dubai IT"],
            faq: [
                { question: "How do we provide Zero-Trust security in Dubai?", answer: "We implement Identity-Bound Zero Trust architectures tailored to UAE's specific regulatory requirements for secure access." },
                { question: "What are the key Smart City solutions?", answer: "Our solutions include blockchain-based registries and AI-driven urban management systems aligned with the Dubai 2040 Master Plan." }
            ]
        }
    },
    "in": {
        id: "in",
        name: "India",
        flag: "🇮🇳",
        focus: "Global Capability Centers (GCCs) and AI-Led Development",
        marketAnalysis: "India has evolved from a back-office outsource hub to the world's R&D engine. The trend is 'Value upwards'—shifting from maintenance to full-stack product ownership and AI innovation. GCCs (Global Capability Centers) are burgeoning, requiring rapid scaling of high-performance teams and secure, compliant infrastructure.",
        topITService: {
            title: "Full-Stack AI-Native Development",
            description: "End-to-end development of applications where AI is the core functionality, not just an add-on.",
            icon: "Code"
        },
        topCybersecurity: {
            title: "SOC-as-a-Service (24/7 Monitoring)",
            description: "Complete Security Operations Center services providing continuous monitoring, threat detection, and response.",
            icon: "Siren"
        },
        innovativeTech: {
            title: "Global Capability Center (GCC) Tech",
            description: "Setting up and scaling technology centers of excellence for global enterprises within India.",
            icon: "Globe"
        },
        challenges: [
            { title: "Attrition & Skilling", description: "High competition for top-tier full-stack and AI talent." },
            { title: "Infrastructure Scalability", description: "Handling sudden bursts in data and user load for super-apps." },
            { title: "Data Privacy Bill", description: "Adapting to the new DPDP Act requirements." }
        ],
        aiSolutions: [
            { title: "AI Code Assistants", description: "Custom-trained LLMs to assist developers with proprietary codebases.", impact: "40% increase in developer productivity." },
            { title: "HR Analytics AI", description: "Predictive models to identify attrition risk and optimization recruitment.", impact: "Better retention strategies." }
        ],
        industries: [
            { name: "GCC (Global Capability Centers)", needs: "Rapid team scaling, remote infrastructure, and complianc." },
            { name: "E-commerce & Retail", needs: "High-concurrency platforms and recommendation engines." },
            { name: "BFSI", needs: "Secure payments & UPI integration." }
        ],
        techStack: ["MERN Stack", "Java Spring Boot", "Python (Django/FastAPI)", "AWS", "Flutter"],
        complianceBadges: ["ISO 27001", "CERT-In Aligned", "DPDP Ready"],
        localBusiness: {
            streetAddress: "Sandipan Patsala Para, Birbhum",
            addressLocality: "Bolpur, West Bengal",
            addressCountry: "IN",
            postalCode: "731303"
        },
        seoJson: {
            title: "India IT Services | AI-Native Development & SOC-as-a-Service",
            description: "India's Top Tech Services: Full-Stack AI-Native Development, SOC-as-a-Service, and GCC Setup & Scaling. CERT-In Aligned.",
            keywords: ["AI-Native Development", "SOC-as-a-Service", "GCC Tech", "Global Capability Centers", "Full Stack", "India IT"],
            faq: [
                { question: "What is AI-Native Development?", answer: "It means building applications from the ground up with AI as the central driver of functionality and user experience." },
                { question: "How does SOC-as-a-Service help Indian enterprises?", answer: "It provides enterprise-grade security monitoring and incident response without the high capital expenditure of building an in-house SOC." }
            ]
        }
    }
};
