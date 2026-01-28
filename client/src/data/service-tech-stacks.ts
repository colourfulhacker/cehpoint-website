export interface TechnologyCategory {
    name: string;
    tools: {
        name: string;
        description: string;
        category: string;
    }[];
}

export interface ServiceTechStack {
    serviceId: string;
    serviceName: string;
    description: string;
    categories: TechnologyCategory[];
}

export const serviceTechStacks: Record<string, ServiceTechStack> = {
    "ai-solutions": {
        serviceId: "ai-solutions",
        serviceName: "AI & Machine Learning Solutions",
        description: "Cutting-edge artificial intelligence and machine learning technologies for enterprise transformation",
        categories: [
            {
                name: "LLM & Generative AI",
                tools: [
                    { name: "OpenAI GPT-4", description: "Advanced language models for natural language processing", category: "Foundation Models" },
                    { name: "Google Gemini", description: "Multimodal AI for text, image, and code generation", category: "Foundation Models" },
                    { name: "Anthropic Claude", description: "Constitutional AI for safe, helpful responses", category: "Foundation Models" },
                    { name: "LangChain", description: "Framework for developing LLM-powered applications", category: "Development Framework" },
                    { name: "LlamaIndex", description: "Data framework for LLM applications", category: "Development Framework" },
                    { name: "HuggingFace Transformers", description: "Open-source NLP models and tools", category: "Model Library" }
                ]
            },
            {
                name: "Vector Databases & RAG",
                tools: [
                    { name: "Pinecone", description: "Fully managed vector database for AI applications", category: "Vector DB" },
                    { name: "Weaviate", description: "Open-source vector search engine", category: "Vector DB" },
                    { name: "Chroma", description: "AI-native embedding database", category: "Vector DB" },
                    { name: "FAISS", description: "Facebook AI Similarity Search library", category: "Vector Search" },
                    { name: "Milvus", description: "Cloud-native vector database", category: "Vector DB" }
                ]
            },
            {
                name: "ML Frameworks & Training",
                tools: [
                    { name: "TensorFlow", description: "End-to-end ML platform", category: "ML Framework" },
                    { name: "PyTorch", description: "Deep learning framework", category: "ML Framework" },
                    { name: "Scikit-learn", description: "Machine learning library for Python", category: "ML Library" },
                    { name: "XGBoost", description: "Gradient boosting framework", category: "ML Library" },
                    { name: "Keras", description: "High-level neural networks API", category: "ML Framework" }
                ]
            },
            {
                name: "MLOps & Model Management",
                tools: [
                    { name: "MLflow", description: "Open source platform for ML lifecycle", category: "MLOps" },
                    { name: "Kubeflow", description: "ML toolkit for Kubernetes", category: "MLOps" },
                    { name: "Weights & Biases", description: "ML experiment tracking and visualization", category: "Monitoring" },
                    { name: "DVC", description: "Data version control for ML projects", category: "Version Control" },
                    { name: "Airflow", description: "Platform for authoring and scheduling ML pipelines", category: "Orchestration" }
                ]
            },
            {
                name: "Cloud AI Platforms",
                tools: [
                    { name: "AWS SageMaker", description: "Fully managed ML service", category: "Cloud Platform" },
                    { name: "Google Vertex AI", description: "Unified AI platform", category: "Cloud Platform" },
                    { name: "Azure Machine Learning", description: "Enterprise ML service", category: "Cloud Platform" },
                    { name: "Databricks", description: "Unified analytics platform", category: "Data Platform" }
                ]
            },
            {
                name: "AI Monitoring & Observability",
                tools: [
                    { name: "Prometheus", description: "Monitoring and alerting toolkit", category: "Monitoring" },
                    { name: "Grafana", description: "Analytics and monitoring platform", category: "Visualization" },
                    { name: "DataDog", description: "Cloud monitoring service", category: "APM" },
                    { name: "Arize AI", description: "ML observability platform", category: "ML Monitoring" }
                ]
            }
        ]
    },

    "cybersecurity": {
        serviceId: "cybersecurity",
        serviceName: "Cybersecurity Services",
        description: "Comprehensive security solutions including VAPT, SOC, forensics, and compliance",
        categories: [
            {
                name: "VAPT & Penetration Testing",
                tools: [
                    { name: "Burp Suite Pro", description: "Web application security testing", category: "VAPT" },
                    { name: "OWASP ZAP", description: "Open-source web app scanner", category: "VAPT" },
                    { name: "Metasploit", description: "Penetration testing framework", category: "Exploitation" },
                    { name: "Nmap", description: "Network discovery and security auditing", category: "Network Scanning" },
                    { name: "Wireshark", description: "Network protocol analyzer", category: "Network Analysis" },
                    { name: "Acunetix", description: "Automated web vulnerability scanner", category: "VAPT" },
                    { name: "Nessus", description: "Vulnerability assessment solution", category: "Vulnerability Scanning" }
                ]
            },
            {
                name: "SIEM & Threat Intelligence",
                tools: [
                    { name: "Splunk Enterprise Security", description: "Security information and event management", category: "SIEM" },
                    { name: "IBM QRadar", description: "SIEM and threat detection", category: "SIEM" },
                    { name: "ELK Stack", description: "Elasticsearch, Logstash, Kibana for log management", category: "SIEM" },
                    { name: "Wazuh", description: "Open-source security monitoring", category: "SIEM" },
                    { name: "ArcSight", description: "Enterprise SIEM platform", category: "SIEM" }
                ]
            },
            {
                name: "Endpoint & Network Security",
                tools: [
                    { name: "CrowdStrike Falcon", description: "Cloud-native endpoint protection", category: "EDR" },
                    { name: "Palo Alto Cortex XDR", description: "Extended detection and response", category: "XDR" },
                    { name: "Microsoft Defender", description: "Enterprise threat protection", category: "EDR" },
                    { name: "Fortinet FortiGate", description: "Next-generation firewall", category: "Firewall" },
                    { name: "Cisco Firepower", description: "Network security appliance", category: "Firewall" },
                    { name: "SentinelOne", description: "Autonomous endpoint protection", category: "EDR" }
                ]
            },
            {
                name: "Digital Forensics",
                tools: [
                    { name: "EnCase Forensic", description: "Digital investigation platform", category: "Forensics" },
                    { name: "FTK (Forensic Toolkit)", description: "Court-cited digital investigations", category: "Forensics" },
                    { name: "X-Ways Forensics", description: "Integrated forensics environment", category: "Forensics" },
                    { name: "Volatility", description: "Memory forensics framework", category: "Memory Analysis" },
                    { name: "Autopsy", description: "Digital forensics platform", category: "Forensics" },
                    { name: "Cellebrite", description: "Mobile forensics solutions", category: "Mobile Forensics" }
                ]
            },
            {
                name: "Compliance & GRC",
                tools: [
                    { name: "Vanta", description: "Automated compliance platform", category: "Compliance" },
                    { name: "Drata", description: "Security and compliance automation", category: "Compliance" },
                    { name: "Secureframe", description: "Compliance automation", category: "Compliance" },
                    { name: "OneTrust", description: "Privacy and data governance", category: "Privacy" },
                    { name: "Qualys", description: "Cloud security and compliance", category: "Compliance" }
                ]
            },
            {
                name: "Cloud Security",
                tools: [
                    { name: "AWS Security Hub", description: "Centralized security management", category: "Cloud Security" },
                    { name: "Azure Security Center", description: "Unified security management", category: "Cloud Security" },
                    { name: "Prisma Cloud", description: "Cloud-native application protection", category: "CNAPP" },
                    { name: "Cloudflare", description: "Web security and performance", category: "CDN/Security" },
                    { name: "Snyk", description: "Developer security platform", category: "DevSecOps" }
                ]
            }
        ]
    },

    "web-development": {
        serviceId: "web-development",
        serviceName: "Web Development",
        description: "Modern web application development with cutting-edge frameworks and tools",
        categories: [
            {
                name: "Frontend Frameworks",
                tools: [
                    { name: "React 18", description: "Component-based UI library", category: "Framework" },
                    { name: "Next.js 14", description: "React framework with SSR and SSG", category: "Meta-Framework" },
                    { name: "TypeScript", description: "Typed JavaScript superset", category: "Language" },
                    { name: "Vite", description: "Next-generation frontend tooling", category: "Build Tool" },
                    { name: "Tailwind CSS", description: "Utility-first CSS framework", category: "Styling" },
                    { name: "Vue.js 3", description: "Progressive JavaScript framework", category: "Framework" },
                    { name: "Svelte", description: "Compile-time framework", category: "Framework" }
                ]
            },
            {
                name: "Backend Technologies",
                tools: [
                    { name: "Node.js", description: "JavaScript runtime", category: "Runtime" },
                    { name: "Express.js", description: "Web application framework", category: "Framework" },
                    { name: "Fastify", description: "Fast web framework", category: "Framework" },
                    { name: "Python FastAPI", description: "Modern async Python framework", category: "Framework" },
                    { name: "Go Gin", description: "High-performance Go framework", category: "Framework" },
                    { name: "NestJS", description: "Progressive Node.js framework", category: "Framework" }
                ]
            },
            {
                name: "Databases & ORMs",
                tools: [
                    { name: "PostgreSQL", description: "Advanced relational database", category: "Database" },
                    { name: "MongoDB", description: "NoSQL document database", category: "Database" },
                    { name: "Redis", description: "In-memory data store", category: "Cache" },
                    { name: "Neon", description: "Serverless Postgres", category: "Database" },
                    { name: "Drizzle ORM", description: "TypeScript ORM", category: "ORM" },
                    { name: "Prisma", description: "Next-generation ORM", category: "ORM" }
                ]
            },
            {
                name: "API & Real-time",
                tools: [
                    { name: "REST API", description: "Standard API architecture", category: "API" },
                    { name: "GraphQL", description: "Query language for APIs", category: "API" },
                    { name: "tRPC", description: "End-to-end typesafe APIs", category: "API" },
                    { name: "WebSockets", description: "Real-time bidirectional communication", category: "Real-time" },
                    { name: "Socket.io", description: "Real-time application framework", category: "Real-time" }
                ]
            },
            {
                name: "Testing & Quality",
                tools: [
                    { name: "Jest", description: "JavaScript testing framework", category: "Testing" },
                    { name: "Vitest", description: "Vite-native testing framework", category: "Testing" },
                    { name: "Playwright", description: "End-to-end testing", category: "E2E Testing" },
                    { name: "Cypress", description: "JavaScript E2E testing", category: "E2E Testing" },
                    { name: "ESLint", description: "JavaScript linting", category: "Code Quality" },
                    { name: "Prettier", description: "Code formatter", category: "Code Quality" }
                ]
            },
            {
                name: "Deployment & DevOps",
                tools: [
                    { name: "Vercel", description: "Frontend cloud platform", category: "Hosting" },
                    { name: "AWS", description: "Cloud services platform", category: "Cloud" },
                    { name: "Docker", description: "Containerization platform", category: "Containers" },
                    { name: "Kubernetes", description: "Container orchestration", category: "Orchestration" },
                    { name: "GitHub Actions", description: "CI/CD automation", category: "CI/CD" },
                    { name: "Terraform", description: "Infrastructure as code", category: "IaC" }
                ]
            }
        ]
    },

    "ecommerce": {
        serviceId: "ecommerce",
        serviceName: "E-commerce Solutions",
        description: "Complete e-commerce platforms with payment integration and analytics",
        categories: [
            {
                name: "E-commerce Platforms",
                tools: [
                    { name: "Shopify Plus", description: "Enterprise e-commerce platform", category: "Platform" },
                    { name: "WooCommerce", description: "WordPress e-commerce plugin", category: "Platform" },
                    { name: "Magento", description: "Adobe Commerce platform", category: "Platform" },
                    { name: "Custom React/Next.js", description: "Headless commerce solutions", category: "Custom Build" },
                    { name: "Medusa", description: "Open-source headless commerce", category: "Headless" }
                ]
            },
            {
                name: "Payment Processing",
                tools: [
                    { name: "Stripe", description: "Payment processing platform", category: "Payment Gateway" },
                    { name: "Razorpay", description: "India payment solutions", category: "Payment Gateway" },
                    { name: "PayPal", description: "Global payment processor", category: "Payment Gateway" },
                    { name: "Square", description: "Payment and commerce platform", category: "Payment Gateway" },
                    { name: "PhonePe", description: "UPI payment gateway", category: "UPI" }
                ]
            },
            {
                name: "Fintech Integration",
                tools: [
                    { name: "Plaid", description: "Banking and financial data API", category: "Banking API" },
                    { name: "Dwolla", description: "ACH payment platform", category: "Banking" },
                    { name: "Yodlee", description: "Account aggregation", category: "Banking API" }
                ]
            },
            {
                name: "Analytics & Tracking",
                tools: [
                    { name: "Google Analytics 4", description: "Web analytics platform", category: "Analytics" },
                    { name: "Mixpanel", description: "Product analytics", category: "Analytics" },
                    { name: "Segment", description: "Customer data platform", category: "CDP" },
                    { name: "Hotjar", description: "Behavior analytics", category: "UX Analytics" },
                    { name: "PostHog", description: "Open-source product analytics", category: "Analytics" }
                ]
            },
            {
                name: "CDN & Performance",
                tools: [
                    { name: "Cloudflare", description: "Global CDN and security", category: "CDN" },
                    { name: "AWS CloudFront", description: "Content delivery network", category: "CDN" },
                    { name: "Fastly", description: "Edge cloud platform", category: "Edge" },
                    { name: "Vercel Edge Network", description: "Serverless edge platform", category: "Edge" }
                ]
            },
            {
                name: "Marketing & CRM",
                tools: [
                    { name: "HubSpot", description: "CRM and marketing platform", category: "CRM" },
                    { name: "Mailchimp", description: "Email marketing automation", category: "Email Marketing" },
                    { name: "SendGrid", description: "Email delivery platform", category: "Email" },
                    { name: "Klaviyo", description: "E-commerce marketing automation", category: "Marketing" }
                ]
            }
        ]
    },

    "mobile-development": {
        serviceId: "mobile-development",
        serviceName: "Mobile App Development",
        description: "Native and cross-platform mobile applications for iOS and Android",
        categories: [
            {
                name: "Cross-Platform Frameworks",
                tools: [
                    { name: "React Native", description: "Build native apps using React", category: "Framework" },
                    { name: "Flutter", description: "Google's UI toolkit", category: "Framework" },
                    { name: "Expo", description: "React Native development platform", category: "Platform" }
                ]
            },
            {
                name: "Native Development",
                tools: [
                    { name: "Swift", description: "iOS app development", category: "Language" },
                    { name: "SwiftUI", description: "Modern iOS UI framework", category: "UI Framework" },
                    { name: "Kotlin", description: "Android app development", category: "Language" },
                    { name: "Jetpack Compose", description: "Modern Android UI", category: "UI Framework" }
                ]
            },
            {
                name: "Backend & Services",
                tools: [
                    { name: "Firebase", description: "Mobile backend platform", category: "BaaS" },
                    { name: "Supabase", description: "Open-source Firebase alternative", category: "BaaS" },
                    { name: "AWS Amplify", description: "Mobile backend framework", category: "BaaS" },
                    { name: "Parse Server", description: "Open-source backend", category: "BaaS" }
                ]
            },
            {
                name: "Push Notifications",
                tools: [
                    { name: "FCM", description: "Firebase Cloud Messaging", category: "Push" },
                    { name: "OneSignal", description: "Push notification service", category: "Push" },
                    { name: "APNs", description: "Apple Push Notification service", category: "Push" }
                ]
            },
            {
                name: "App Analytics",
                tools: [
                    { name: "Firebase Analytics", description: "Mobile app analytics", category: "Analytics" },
                    { name: "Amplitude", description: "Product analytics", category: "Analytics" },
                    { name: "App Store Connect", description: "iOS analytics", category: "Platform Analytics" },
                    { name: "Google Play Console", description: "Android analytics", category: "Platform Analytics" }
                ]
            },
            {
                name: "App Distribution",
                tools: [
                    { name: "TestFlight", description: "iOS beta testing", category: "Distribution" },
                    { name: "Google Play Beta", description: "Android beta testing", category: "Distribution" },
                    { name: "App Center", description: "App distribution and analytics", category: "Distribution" }
                ]
            }
        ]
    }
};

// Helper function to get tech stack by service ID
export const getTechStack = (serviceId: string): ServiceTechStack | undefined => {
    return serviceTechStacks[serviceId];
};

// Get all categories for a service
export const getServiceCategories = (serviceId: string): TechnologyCategory[] => {
    const stack = serviceTechStacks[serviceId];
    return stack?.categories || [];
};

// Search tools across all services
export const searchTools = (query: string): Array<{ tool: any; service: string; category: string }> => {
    const results: Array<{ tool: any; service: string; category: string }> = [];
    const lowerQuery = query.toLowerCase();

    Object.values(serviceTechStacks).forEach(service => {
        service.categories.forEach(category => {
            category.tools.forEach(tool => {
                if (
                    tool.name.toLowerCase().includes(lowerQuery) ||
                    tool.description.toLowerCase().includes(lowerQuery)
                ) {
                    results.push({
                        tool,
                        service: service.serviceName,
                        category: category.name
                    });
                }
            });
        });
    });

    return results;
};
