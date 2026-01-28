
export interface RegionData {
    id: string;
    name: string;
    flag: string;
    focus: string;
    topITService: {
        title: string; // H2 Primary Innovative Service
        description: string;
        icon: string;
    };
    topCybersecurity: {
        title: string; // High-Demand Cybersecurity Focus
        description: string;
        icon: string;
    };
    innovativeTech: {
        title: string; // Essential IT Development
        description: string;
        icon: string;
    };
    complianceBadges?: string[];
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
        topITService: {
            title: "Agentic AI & LLMOps Integration",
            description: "Moving from pilot to production with autonomous AI agents and robust Large Language Model Operations (LLMOps) frameworks.",
            icon: "Bot"
        },
        topCybersecurity: {
            title: "Identity-Bound Zero Trust",
            description: "Implementing Zero Trust architectures where identity is the new perimeter, securing remote and hybrid workforces against sophisticated breaches.",
            icon: "ShieldCheck"
        },
        innovativeTech: {
            title: "Cloud-Native AI Architecture",
            description: "Designing scalable, cloud-native infrastructures specifically optimized for high-performance AI workloads.",
            icon: "Cloud"
        },
        complianceBadges: ["SOC2 Type II", "HIPAA Compliant"],
        localBusiness: {
            streetAddress: "5 Penn Plaza, 14th Floor",
            addressLocality: "New York, NY",
            addressCountry: "US",
            postalCode: "10001",
            telephone: "+1-212-555-0123" // Placeholder or leave undefined if not strictly known, but footer implies US presence.
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
        topITService: {
            title: "FinOps & Cloud Cost Optimization",
            description: "Strategic cloud financial management to maximize value and minimize waste in complex hybrid cloud environments.",
            icon: "PoundSterling"
        },
        topCybersecurity: {
            title: "Managed Detection & Response (MDR)",
            description: "24/7 outsourced security operations providing rapid detection and remediation of advanced threats for UK businesses.",
            icon: "Eye"
        },
        innovativeTech: {
            title: "Hybrid Cloud Orchestration",
            description: "Seamless management and automation of workloads across on-premise, private, and public cloud infrastructures.",
            icon: "Network"
        },
        complianceBadges: ["GDPR Compliant", "ISO/IEC 27001", "Cyber Essentials"],
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
        complianceBadges: ["Essential Eight", "ISO 22301"],
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
        complianceBadges: ["NESA Compliant", "DESC Standards"],
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
        complianceBadges: ["ISO 27001", "CERT-In Aligned"],
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
