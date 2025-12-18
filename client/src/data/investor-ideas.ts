export interface Idea {
    id: string;
    title: string;
    industry: string;
    elevatorPitch: string;
    budget: string;
    profitPotential: string;
    timeToMarket: string;
    tags: string[];
    color: string;
    problemStatement?: string;
    solution?: string;
    techStack?: string[];
    targetMarket?: string;
    competitiveAdvantage?: string;
    revenueModel?: string;
    faq?: { question: string; answer: string }[];
    architecture?: {
        frontend: { title: string; description: string };
        backend: { title: string; description: string };
        data: { title: string; description: string };
    };
    risks?: Array<{
        type: string;
        level: 'Low' | 'Medium' | 'High';
        mitigation: string;
    }>;
    metrics?: {
        customers: string;
        revenue: string;
        retention: string;
        breakeven: string;
    };
}

export const INVESTOR_IDEAS: Idea[] = [
    {
        id: "1",
        title: "AI-Powered Supply Chain Optimization",
        industry: "LogisticsTech",
        elevatorPitch: "Autonomous logistics platform that predicts demand spikes and optimizes delivery routes in real-time, reducing fuel costs by 35%.",
        budget: "₹8L - ₹12L",
        profitPotential: "₹45L/yr",
        timeToMarket: "6 Weeks",
        tags: ["AI", "Logistics", "B2B"],
        color: "from-blue-600 to-indigo-900",
        problemStatement: "Logistics companies lose billions annually due to inefficient route planning, fuel wastage, and unpredictable demand spikes.",
        solution: "Predictive AI analyzes traffic, order history, and weather to optimize routes and inventory dynamically.",
        techStack: ["Python", "TensorFlow", "React Native", "AWS Lambda", "PostgreSQL"],
        targetMarket: "Mid-sized logistics fleets (50-500 vehicles) in Tier-1/2 cities.",
        competitiveAdvantage: "Proprietary 'Traffic-Aware' algorithm trained on local road conditions.",
        revenueModel: "SaaS Subscription: ₹15,000/month per fleet + ₹50 per active vehicle.",
        metrics: { customers: "10-15 Fleets", revenue: "₹45L", retention: "90%", breakeven: "8 Months" },
        faq: [
            { question: "How does the AI prediction work?", answer: "The system uses historical data, weather patterns, and real-time traffic updates to predict demand and optimize routes with 95% accuracy." },
            { question: "What hardware is required?", answer: "Drivers only need a smartphone with our app. The backend handles all the complex processing." },
            { question: "Can it integrate with existing ERPs?", answer: "Yes, we have ready-made integrations for SAP, Oracle, and other major ERP systems." }
        ]
    },
    {
        id: "2",
        title: "Hyper-Local Quick Commerce Aggregator",
        industry: "RetailTech",
        elevatorPitch: "A unified platform for local kirana stores to compete with giants by offering 15-minute delivery using a shared neighborhood fleet.",
        budget: "₹10L - ₹15L",
        profitPotential: "₹60L/yr",
        timeToMarket: "8 Weeks",
        tags: ["Hyperlocal", "Retail", "Gig Economy"],
        color: "from-green-600 to-emerald-900",
        problemStatement: "Local stores are losing business to quick-commerce giants because they lack delivery infrastructure.",
        solution: "Aggregates local inventory and connects with a shared pool of neighborhood delivery partners.",
        techStack: ["Flutter", "Node.js", "MongoDB", "Google Maps API"],
        targetMarket: "Kirana stores and independent retailers in dense urban areas.",
        competitiveAdvantage: "Zero inventory model, leveraging existing store stock.",
        revenueModel: "Commission: 5% per order from store, ₹10 delivery fee from customer.",
        metrics: { customers: "500 Stores", revenue: "₹60L", retention: "85%", breakeven: "6 Months" },
        faq: [
            { question: "How do we recruit delivery partners?", answer: "We use a gig-worker model similar to Uber/Swiggy, onboarding locals who want to earn extra income." },
            { question: "What is the store onboarding process?", answer: "Stores can sign up via the app, upload their inventory using our scanner, and start selling in 24 hours." },
            { question: "Who handles customer support?", answer: "We provide a centralized support team to handle all customer queries and refunds." }
        ]
    },
    {
        id: "3",
        title: "Telemedicine for Rural India",
        industry: "HealthTech",
        elevatorPitch: "AI-assisted diagnostic kiosk for rural clinics connecting patients with city specialists via low-bandwidth video calls.",
        budget: "₹12L - ₹18L",
        profitPotential: "₹80L/yr",
        timeToMarket: "10 Weeks",
        tags: ["Healthcare", "Rural", "Telemedicine"],
        color: "from-teal-600 to-cyan-900",
        problemStatement: "Severe shortage of qualified doctors in rural areas leads to poor healthcare outcomes.",
        solution: "IoT-enabled kiosks with basic diagnostic tools (BP, SPO2) and AI triage connecting to specialists.",
        techStack: ["WebRTC", "React", "Python (AI Triage)", "IoT Integration"],
        targetMarket: "Rural clinics, pharmacies, and panchayats.",
        competitiveAdvantage: "Works on 2G/3G networks, local language interface.",
        revenueModel: "Per-consultation fee split (70/30) with doctors.",
        metrics: { customers: "50 Kiosks", revenue: "₹80L", retention: "95%", breakeven: "12 Months" },
        faq: [
            { question: "Do we need a full-time doctor at the kiosk?", answer: "No, the kiosk is operated by a trained nurse or technician. Doctors connect remotely via video." },
            { question: "How is the internet connectivity handled?", answer: "The system is optimized for low-bandwidth 3G/4G networks common in rural areas." },
            { question: "Is the medical data secure?", answer: "Yes, all patient data is encrypted and compliant with HIPAA and Indian telemedicine guidelines." }
        ]
    },
    {
        id: "4",
        title: "Smart Vertical Farming OS",
        industry: "AgriTech",
        elevatorPitch: "IoT-based operating system for urban vertical farms to automate climate control, nutrient dosing, and harvest scheduling.",
        budget: "₹15L - ₹20L",
        profitPotential: "₹1.2Cr/yr",
        timeToMarket: "12 Weeks",
        tags: ["IoT", "Agriculture", "Sustainability"],
        color: "from-emerald-600 to-green-900",
        problemStatement: "Urban farming is labor-intensive and prone to human error in climate management.",
        solution: "Fully automated OS using sensors to maintain perfect growing conditions 24/7.",
        techStack: ["C++ (Embedded)", "React Dashboard", "InfluxDB", "MQTT"],
        targetMarket: "Urban commercial farms, luxury hotels, and high-end restaurants.",
        competitiveAdvantage: "20% higher yield through AI-optimized growth recipes.",
        revenueModel: "Hardware setup fee + Monthly software subscription.",
        metrics: { customers: "10 Farms", revenue: "₹1.2Cr", retention: "92%", breakeven: "10 Months" },
        faq: [
            { question: "What crops can be grown?", answer: "Leafy greens, herbs, and microgreens are most profitable, but the system supports various crops." },
            { question: "How much electricity does it consume?", answer: "The system uses energy-efficient LED grow lights and smart sensors to minimize power usage." },
            { question: "Is technical farming knowledge needed?", answer: "The OS handles the agronomy. You just need to ensure the system is powered and water is available." }
        ]
    },
    {
        id: "5",
        title: "Decentralized Creator Economy Platform",
        industry: "Web3 / Media",
        elevatorPitch: "A platform allowing creators to tokenize their content and receive direct support from fans without platform intermediaries taking huge cuts.",
        budget: "₹15L - ₹25L",
        profitPotential: "₹2Cr/yr",
        timeToMarket: "12 Weeks",
        tags: ["Web3", "Blockchain", "Creator Economy"],
        color: "from-purple-600 to-violet-900",
        problemStatement: "Creators lose 30-50% of revenue to platforms and lack ownership of their audience.",
        solution: "NFT-based membership and content unlocking system on a low-gas blockchain.",
        techStack: ["Solidity", "Next.js", "IPFS", "Polygon"],
        targetMarket: "Digital artists, musicians, and educational content creators.",
        competitiveAdvantage: "0% platform fee (gas only), true ownership of audience data.",
        revenueModel: "Small transaction fee on token sales (2%).",
        metrics: { customers: "1000 Creators", revenue: "₹2Cr", retention: "80%", breakeven: "9 Months" },
        faq: [
            { question: "Do users need a crypto wallet?", answer: "We offer social login and fiat on-ramps, so users don't strictly need a wallet to start." },
            { question: "How do creators get paid?", answer: "Creators receive instant payouts in stablecoins or can withdraw to their bank accounts." },
            { question: "Is the content stored on the blockchain?", answer: "Content is stored on IPFS (decentralized storage), while ownership rights are on the blockchain." }
        ]
    },
    {
        id: "6",
        title: "AI Legal Assistant for SMEs",
        industry: "LegalTech",
        elevatorPitch: "Automated contract review and drafting tool specifically designed for Indian SME compliance and commercial agreements.",
        budget: "₹8L - ₹12L",
        profitPotential: "₹50L/yr",
        timeToMarket: "8 Weeks",
        tags: ["AI", "Legal", "SaaS"],
        color: "from-slate-600 to-gray-900",
        problemStatement: "SMEs cannot afford expensive corporate lawyers for routine contracts.",
        solution: "NLP model trained on Indian contract law to draft and review documents instantly.",
        techStack: ["Python (NLP)", "React", "Django", "PostgreSQL"],
        targetMarket: "Startups, freelancers, and small business owners.",
        competitiveAdvantage: "Trained specifically on Indian legal context and vernacular support.",
        revenueModel: "Freemium: Basic docs free, advanced review ₹2000/month.",
        metrics: { customers: "500 SMEs", revenue: "₹50L", retention: "88%", breakeven: "6 Months" },
        faq: [
            { question: "Is the legal advice binding?", answer: "The AI provides suggestions and drafts. We recommend final review by a qualified lawyer for critical deals." },
            { question: "How accurate is the Indian law model?", answer: "It is trained on thousands of Indian case laws and statutes, ensuring high relevance." },
            { question: "Can it handle multiple languages?", answer: "Yes, it supports English, Hindi, and major regional languages for contract translation." }
        ]
    },
    {
        id: "7",
        title: "EV Battery Swapping Network",
        industry: "CleanTech",
        elevatorPitch: "Software platform to manage a network of interoperable battery swapping stations for 2-wheeler and 3-wheeler EVs.",
        budget: "₹20L - ₹30L",
        profitPotential: "₹3Cr/yr",
        timeToMarket: "16 Weeks",
        tags: ["EV", "Sustainability", "Mobility"],
        color: "from-yellow-600 to-orange-900",
        problemStatement: "High charging time and range anxiety hinder EV adoption in commercial fleets.",
        solution: "Unified platform for battery tracking, health monitoring, and swap payments.",
        techStack: ["Go", "Flutter", "IoT", "Redis"],
        targetMarket: "Last-mile delivery fleets and gig workers.",
        competitiveAdvantage: "Universal compatibility protocol for different battery types.",
        revenueModel: "Transaction fee per swap + Battery leasing subscription.",
        metrics: { customers: "50 Stations", revenue: "₹3Cr", retention: "95%", breakeven: "18 Months" },
        faq: [
            { question: "What battery types are supported?", answer: "We support standard swappable batteries used by major EV 2-wheeler and 3-wheeler manufacturers." },
            { question: "How do we prevent battery theft?", answer: "Batteries have built-in GPS and IoT locks that disable them if unauthorized removal is detected." },
            { question: "Who owns the batteries?", answer: "Batteries can be owned by the station or leased from a third-party financing partner." }
        ]
    },
    {
        id: "8",
        title: "EdTech for Vernacular Learning",
        industry: "EdTech",
        elevatorPitch: "AI-driven skill development platform delivering technical courses in 10+ regional Indian languages.",
        budget: "₹10L - ₹15L",
        profitPotential: "₹75L/yr",
        timeToMarket: "8 Weeks",
        tags: ["Education", "Vernacular", "AI"],
        color: "from-orange-600 to-red-900",
        problemStatement: "English-only content excludes millions of talented Indians from the tech workforce.",
        solution: "AI dubbing and translation of high-quality tech courses into regional languages.",
        techStack: ["Python (TTS/Translation)", "React", "Node.js", "Video Streaming"],
        targetMarket: "Tier-2/3 city students and job seekers.",
        competitiveAdvantage: "High-quality automated dubbing at 1/10th the cost of manual production.",
        revenueModel: "Course fees (₹500-₹2000) + B2B licensing to colleges.",
        metrics: { customers: "5000 Students", revenue: "₹75L", retention: "85%", breakeven: "8 Months" },
        faq: [
            { question: "How good is the AI dubbing?", answer: "Our AI achieves 95% accuracy and retains the instructor's original voice tone." },
            { question: "Are the courses accredited?", answer: "We partner with industry bodies to provide recognized certifications." },
            { question: "Can students download content?", answer: "Yes, for offline viewing within the secure app environment." }
        ]
    },
    {
        id: "9",
        title: "Smart Waste Management System",
        industry: "CleanTech",
        elevatorPitch: "IoT sensors for municipal dustbins to optimize collection routes and prevent overflow.",
        budget: "₹12L - ₹18L",
        profitPotential: "₹60L/yr",
        timeToMarket: "10 Weeks",
        tags: ["IoT", "Smart City", "GovTech"],
        color: "from-green-700 to-teal-900",
        problemStatement: "Inefficient waste collection leads to overflowing bins and fuel wastage.",
        solution: "Ultrasonic sensors measure fill levels and optimize truck routes dynamically.",
        techStack: ["LoRaWAN", "C++", "React Dashboard", "PostGIS"],
        targetMarket: "Municipal corporations and large private townships.",
        competitiveAdvantage: "Low-cost, long-battery-life sensors using LoRaWAN.",
        revenueModel: "SaaS subscription per bin + Hardware cost.",
        metrics: { customers: "5 Municipalities", revenue: "₹60L", retention: "98%", breakeven: "12 Months" },
        faq: [
            { question: "How long do the sensors last?", answer: "The LoRaWAN sensors have a battery life of 5+ years." },
            { question: "Is it weather-proof?", answer: "Yes, the sensors are IP67 rated and can withstand heavy rain and heat." },
            { question: "Does it work in underground bins?", answer: "Yes, our specialized antennas ensure connectivity even in difficult locations." }
        ]
    },
    {
        id: "10",
        title: "Peer-to-Peer Equipment Rental",
        industry: "Sharing Economy",
        elevatorPitch: "Marketplace for construction and industrial equipment rental, connecting owners with idle machinery to contractors.",
        budget: "₹15L - ₹20L",
        profitPotential: "₹1.5Cr/yr",
        timeToMarket: "12 Weeks",
        tags: ["Marketplace", "Construction", "B2B"],
        color: "from-yellow-700 to-amber-900",
        problemStatement: "Expensive machinery sits idle for owners while contractors struggle to find rentals.",
        solution: "Trust-based platform with insurance, logistics, and payment handling.",
        techStack: ["React Native", "Node.js", "Stripe Connect", "PostgreSQL"],
        targetMarket: "Construction companies and infrastructure contractors.",
        competitiveAdvantage: "Integrated insurance and logistics support.",
        revenueModel: "15% commission on rental value.",
        metrics: { customers: "200 Contractors", revenue: "₹1.5Cr", retention: "80%", breakeven: "10 Months" },
        faq: [
            { question: "Who handles the insurance?", answer: "We partner with major insurers to provide per-rental coverage automatically." },
            { question: "What if the equipment is damaged?", answer: "The insurance covers damages, and we handle the claims process." },
            { question: "How is transport managed?", answer: "We have a network of logistics partners to deliver heavy equipment to the site." }
        ]
    },
    {
        id: "11",
        title: "AI Personal Finance Manager",
        industry: "FinTech",
        elevatorPitch: "Automated financial advisor that connects to bank accounts, categorizes spend, and suggests personalized investment strategies.",
        budget: "₹10L - ₹15L",
        profitPotential: "₹90L/yr",
        timeToMarket: "10 Weeks",
        tags: ["FinTech", "AI", "Consumer"],
        color: "from-indigo-600 to-blue-900",
        problemStatement: "Young professionals lack financial literacy and personalized investment advice.",
        solution: "Account aggregator integration + AI robo-advisory for automated wealth management.",
        techStack: ["Flutter", "Python", "Account Aggregator API", "Security Modules"],
        targetMarket: "Millennials and Gen-Z professionals.",
        competitiveAdvantage: "Hyper-personalized advice based on spending patterns, not generic buckets.",
        revenueModel: "Freemium + Commission on financial products.",
        metrics: { customers: "10,000 Users", revenue: "₹90L", retention: "88%", breakeven: "12 Months" },
        faq: [
            { question: "Is my bank data safe?", answer: "Yes, we use bank-grade encryption and are regulated as an Account Aggregator." },
            { question: "Can it execute trades?", answer: "Yes, through integrations with major brokerage platforms." },
            { question: "Does it support crypto?", answer: "Yes, it can track and analyze crypto portfolios alongside traditional assets." }
        ]
    },
    {
        id: "12",
        title: "AR Interior Design Visualizer",
        industry: "PropTech",
        elevatorPitch: "Augmented Reality app allowing users to visualize furniture and decor in their actual space before buying.",
        budget: "₹18L - ₹25L",
        profitPotential: "₹2Cr/yr",
        timeToMarket: "14 Weeks",
        tags: ["AR", "E-commerce", "Consumer"],
        color: "from-pink-600 to-rose-900",
        problemStatement: "High return rates in online furniture sales due to 'fit and look' mismatch.",
        solution: "Markerless AR to place 3D models of furniture in real-time camera view.",
        techStack: ["Unity/ARFoundation", "C#", "Node.js", "Cloudinary"],
        targetMarket: "Furniture retailers and interior designers.",
        competitiveAdvantage: "High-fidelity rendering and seamless integration with e-commerce carts.",
        revenueModel: "SaaS for retailers (per SKU) + Affiliate commission.",
        metrics: { customers: "20 Retailers", revenue: "₹2Cr", retention: "90%", breakeven: "14 Months" },
        faq: [
            { question: "Do users need a special app?", answer: "No, our WebAR technology works directly in the mobile browser." },
            { question: "How do we create 3D models?", answer: "We provide a service to convert 2D product photos into high-quality 3D models." },
            { question: "Does it slow down the website?", answer: "No, the 3D viewer is lazy-loaded and optimized for performance." }
        ]
    },
    {
        id: "13",
        title: "Blockchain Credential Verification",
        industry: "HRTech",
        elevatorPitch: "Tamper-proof academic and professional credential issuance and verification system on blockchain.",
        budget: "₹12L - ₹18L",
        profitPotential: "₹1Cr/yr",
        timeToMarket: "10 Weeks",
        tags: ["Blockchain", "HR", "B2B"],
        color: "from-cyan-600 to-blue-900",
        problemStatement: "Background checks are slow, expensive, and prone to fraud.",
        solution: "Universities/Employers issue verifiable credentials as NFTs/SBTs.",
        techStack: ["Solidity", "React", "Ether.js", "Hyperledger"],
        targetMarket: "Universities, EdTech platforms, and large employers.",
        competitiveAdvantage: "Instant, zero-cost verification for employers.",
        revenueModel: "Issuance fee per credential charged to institutions.",
        metrics: { customers: "50 Institutions", revenue: "₹1Cr", retention: "95%", breakeven: "12 Months" },
        faq: [
            { question: "Is it GDPR compliant?", answer: "Yes, we use Zero-Knowledge Proofs to verify data without revealing sensitive details." },
            { question: "What blockchain do you use?", answer: "We use Polygon for its low transaction costs and high speed." },
            { question: "Can old certificates be digitized?", answer: "Yes, we have a bulk onboarding process for legacy records." }
        ]
    },
    {
        id: "14",
        title: "Drone-Based Infrastructure Inspection",
        industry: "InfraTech",
        elevatorPitch: "AI platform analyzing drone footage to detect defects in bridges, towers, and pipelines automatically.",
        budget: "₹20L - ₹30L",
        profitPotential: "₹4Cr/yr",
        timeToMarket: "16 Weeks",
        tags: ["AI", "Drones", "Infrastructure"],
        color: "from-slate-700 to-zinc-900",
        problemStatement: "Manual inspection of infrastructure is dangerous, slow, and expensive.",
        solution: "Computer vision models to identify cracks, rust, and structural anomalies from drone video.",
        techStack: ["Python", "PyTorch", "React", "AWS S3"],
        targetMarket: "Government infrastructure bodies and private construction firms.",
        competitiveAdvantage: "99% accuracy in defect detection, 10x faster than manual.",
        revenueModel: "Per-km or per-asset inspection fee.",
        metrics: { customers: "10 Clients", revenue: "₹4Cr", retention: "90%", breakeven: "15 Months" },
        faq: [
            { question: "Do you provide the drones?", answer: "We provide the software. Clients can use their own drones or hire our partner operators." },
            { question: "How accurate is the detection?", answer: "Our models are trained on millions of images and achieve 99% defect detection accuracy." },
            { question: "Can it work offline?", answer: "Yes, data can be processed on the edge device or uploaded later." }
        ]
    },
    {
        id: "15",
        title: "Micro-Influencer Marketing Platform",
        industry: "AdTech",
        elevatorPitch: "Data-driven platform connecting brands with niche micro-influencers for high-ROI campaigns.",
        budget: "₹10L - ₹15L",
        profitPotential: "₹80L/yr",
        timeToMarket: "8 Weeks",
        tags: ["Marketing", "Social Media", "SaaS"],
        color: "from-fuchsia-600 to-purple-900",
        problemStatement: "Mega-influencers are expensive and have low engagement; brands struggle to find authentic niche voices.",
        solution: "AI matching of brand values with influencer content analysis.",
        techStack: ["React", "Node.js", "Instagram/YouTube APIs", "MongoDB"],
        targetMarket: "D2C brands and marketing agencies.",
        competitiveAdvantage: "Performance-based payout tracking integration.",
        revenueModel: "Platform subscription + % of campaign budget.",
        metrics: { customers: "100 Brands", revenue: "₹80L", retention: "85%", breakeven: "7 Months" },
        faq: [
            { question: "How do you verify influencers?", answer: "We analyze their engagement rates and audience authenticity to filter out fake followers." },
            { question: "What platforms are supported?", answer: "Instagram, YouTube, and TikTok are currently supported." },
            { question: "How are payments handled?", answer: "Brands pay into an escrow, which is released to influencers upon campaign completion." }
        ]
    },
    {
        id: "16",
        title: "Smart Parking Management",
        industry: "Smart City",
        elevatorPitch: "App-based parking reservation and navigation system for malls and public spaces.",
        budget: "₹12L - ₹18L",
        profitPotential: "₹70L/yr",
        timeToMarket: "10 Weeks",
        tags: ["IoT", "Consumer", "Mobility"],
        color: "from-blue-700 to-indigo-900",
        problemStatement: "Drivers waste time and fuel searching for parking spots in congested areas.",
        solution: "Real-time occupancy sensors + App for booking and navigation.",
        techStack: ["Flutter", "Node.js", "IoT Sensors", "PostgreSQL"],
        targetMarket: "Malls, office complexes, and municipal parking lots.",
        competitiveAdvantage: "Seamless entry/exit via ANPR (Number Plate Recognition).",
        revenueModel: "Convenience fee per booking + Parking management SaaS.",
        metrics: { customers: "20 Locations", revenue: "₹70L", retention: "92%", breakeven: "12 Months" },
        faq: [
            { question: "Does it require internet in the basement?", answer: "Our system uses a mesh network to ensure connectivity even in deep basements." },
            { question: "Can users reserve spots?", answer: "Yes, users can pre-book spots via the app." },
            { question: "How is payment collected?", answer: "Payments are automatic via the app or FastTag integration." }
        ]
    },
    {
        id: "17",
        title: "AI Mental Health Companion",
        industry: "HealthTech",
        elevatorPitch: "CBT-based AI chatbot providing 24/7 mental health support and mood tracking.",
        budget: "₹10L - ₹15L",
        profitPotential: "₹60L/yr",
        timeToMarket: "10 Weeks",
        tags: ["AI", "Healthcare", "Consumer"],
        color: "from-teal-500 to-emerald-800",
        problemStatement: "Mental health therapy is expensive and stigmatized.",
        solution: "Anonymous, accessible, and affordable AI therapy based on clinical protocols.",
        techStack: ["Python (NLP)", "React Native", "Secure Storage", "AWS"],
        targetMarket: "Students and corporate employees.",
        competitiveAdvantage: "Vernacular support and crisis intervention protocols.",
        revenueModel: "B2C Subscription (₹200/mo) + B2B Corporate Wellness.",
        metrics: { customers: "5000 Users", revenue: "₹60L", retention: "80%", breakeven: "9 Months" },
        faq: [
            { question: "Is it a replacement for a therapist?", answer: "No, it's a support tool. We escalate severe cases to human professionals." },
            { question: "Is the chat private?", answer: "Yes, all conversations are end-to-end encrypted and anonymous." },
            { question: "What therapy techniques are used?", answer: "We primarily use Cognitive Behavioral Therapy (CBT) and Mindfulness techniques." }
        ]
    },
    {
        id: "18",
        title: "Virtual Event & Expo Platform",
        industry: "EventsTech",
        elevatorPitch: "Immersive 3D virtual event platform with networking lounges and interactive booths.",
        budget: "₹15L - ₹22L",
        profitPotential: "₹1.5Cr/yr",
        timeToMarket: "12 Weeks",
        tags: ["WebRTC", "3D", "B2B"],
        color: "from-violet-600 to-purple-900",
        problemStatement: "Physical events are expensive and limited by geography.",
        solution: "Browser-based 3D environment for global reach and engagement.",
        techStack: ["Three.js", "React", "WebRTC", "Firebase"],
        targetMarket: "Trade associations, universities, and corporate event organizers.",
        competitiveAdvantage: "Low-bandwidth optimization for emerging markets.",
        revenueModel: "Per-event hosting fee + Sponsor booth sales.",
        metrics: { customers: "20 Events", revenue: "₹1.5Cr", retention: "75%", breakeven: "10 Months" },
        faq: [
            { question: "Do attendees need VR headsets?", answer: "No, the platform is accessible via standard web browsers on laptops and mobiles." },
            { question: "How many concurrent users can it handle?", answer: "Our scalable architecture supports up to 100,000 concurrent users." },
            { question: "Can exhibitors customize their booths?", answer: "Yes, we offer a drag-and-drop booth builder for exhibitors." }
        ]
    },
    {
        id: "19",
        title: "On-Demand Warehousing",
        industry: "Logistics",
        elevatorPitch: "'Airbnb for Warehousing' - connecting businesses needing temporary storage with warehouse owners having excess capacity.",
        budget: "₹15L - ₹20L",
        profitPotential: "₹1Cr/yr",
        timeToMarket: "12 Weeks",
        tags: ["Marketplace", "Logistics", "B2B"],
        color: "from-orange-700 to-red-900",
        problemStatement: "Fixed long-term warehouse leases are inflexible for seasonal businesses.",
        solution: "Flexible, pay-per-use storage marketplace.",
        techStack: ["React", "Node.js", "PostgreSQL", "Google Maps"],
        targetMarket: "E-commerce sellers and FMCG distributors.",
        competitiveAdvantage: "Standardized service levels and insurance included.",
        revenueModel: "Commission on storage value.",
        metrics: { customers: "100 Businesses", revenue: "₹1Cr", retention: "85%", breakeven: "11 Months" },
        faq: [
            { question: "Is the stored inventory insured?", answer: "Yes, all bookings include comprehensive insurance coverage." },
            { question: "What is the minimum rental period?", answer: "The minimum period is 1 week, offering great flexibility." },
            { question: "Do you handle transport?", answer: "We can arrange transport through our logistics partners if needed." }
        ]
    },
    {
        id: "20",
        title: "AI Code Reviewer & Auditor",
        industry: "DevTools",
        elevatorPitch: "Automated code review tool that detects bugs, security vulnerabilities, and performance issues in real-time.",
        budget: "₹12L - ₹18L",
        profitPotential: "₹80L/yr",
        timeToMarket: "10 Weeks",
        tags: ["AI", "Developer Tools", "SaaS"],
        color: "from-slate-800 to-black",
        problemStatement: "Manual code review is time-consuming and prone to missing subtle bugs.",
        solution: "Deep learning model trained on millions of open-source commits to suggest fixes.",
        techStack: ["Python", "VS Code Extension API", "Docker", "Redis"],
        targetMarket: "Software development teams and IT service companies.",
        competitiveAdvantage: "Context-aware suggestions and auto-fix capabilities.",
        revenueModel: "Per-seat subscription.",
        metrics: { customers: "50 Teams", revenue: "₹80L", retention: "90%", breakeven: "8 Months" },
        faq: [
            { question: "Does it support all languages?", answer: "It currently supports Python, JavaScript, Java, C++, and Go." },
            { question: "Is the code sent to the cloud?", answer: "We offer an on-premise version for enterprises with strict data security needs." },
            { question: "Can it fix the bugs automatically?", answer: "Yes, it generates pull requests with suggested fixes for review." }
        ]
    },
    {
        id: "21",
        title: "Solar Energy Trading Platform",
        industry: "CleanTech",
        elevatorPitch: "P2P energy trading platform allowing rooftop solar owners to sell excess power to neighbors.",
        budget: "₹20L - ₹30L",
        profitPotential: "₹2Cr/yr",
        timeToMarket: "16 Weeks",
        tags: ["Blockchain", "Energy", "Sustainability"],
        color: "from-yellow-500 to-orange-800",
        problemStatement: "Low feed-in tariffs discourage solar adoption; grid power is expensive for consumers.",
        solution: "Blockchain-based ledger for transparent local energy trading.",
        techStack: ["Hyperledger Fabric", "Node.js", "Smart Meters", "React"],
        targetMarket: "Gated communities and industrial parks.",
        competitiveAdvantage: "Dynamic pricing algorithm maximizing value for both buyer and seller.",
        revenueModel: "Transaction fee on traded energy.",
        metrics: { customers: "10 Communities", revenue: "₹2Cr", retention: "95%", breakeven: "18 Months" },
        faq: [
            { question: "Is this legal in India?", answer: "Yes, peer-to-peer energy trading is permitted under recent regulatory updates in many states." },
            { question: "Do we need special meters?", answer: "Yes, smart meters are required to track generation and consumption in real-time." },
            { question: "How are prices determined?", answer: "Prices are determined dynamically based on local supply and demand." }
        ]
    },
    {
        id: "22",
        title: "Gamified Fitness for Kids",
        industry: "HealthTech",
        elevatorPitch: "Mobile game that requires physical movement (jumping, running) to control in-game characters using computer vision.",
        budget: "₹10L - ₹15L",
        profitPotential: "₹50L/yr",
        timeToMarket: "10 Weeks",
        tags: ["Gaming", "Fitness", "AI"],
        color: "from-red-500 to-pink-800",
        problemStatement: "Childhood obesity and screen addiction are growing concerns.",
        solution: "Turning screen time into active time using phone camera motion tracking.",
        techStack: ["Unity", "TensorFlow Lite", "C#", "Firebase"],
        targetMarket: "Parents of children aged 6-12.",
        competitiveAdvantage: "No extra hardware needed (unlike Kinect/Switch).",
        revenueModel: "Freemium (In-app purchases for skins/levels).",
        metrics: { customers: "10,000 Users", revenue: "₹50L", retention: "75%", breakeven: "9 Months" },
        faq: [
            { question: "Is it safe for kids?", answer: "Yes, the games are designed to be safe and encourage healthy physical activity." },
            { question: "Does it collect video data?", answer: "No, all motion processing happens on the device; no video is uploaded." },
            { question: "What devices are supported?", answer: "It works on any modern smartphone or tablet with a camera." }
        ]
    },
    {
        id: "23",
        title: "AI Recruitment Automation",
        industry: "HRTech",
        elevatorPitch: "End-to-end recruitment platform that automates sourcing, screening, and scheduling interviews.",
        budget: "₹15L - ₹20L",
        profitPotential: "₹1.2Cr/yr",
        timeToMarket: "12 Weeks",
        tags: ["AI", "HR", "SaaS"],
        color: "from-blue-600 to-cyan-900",
        problemStatement: "Recruiters spend 80% of time on repetitive screening tasks.",
        solution: "AI parses resumes, conducts chat-based pre-screening, and ranks candidates.",
        techStack: ["Python (NLP)", "React", "Node.js", "PostgreSQL"],
        targetMarket: "Staffing agencies and high-growth startups.",
        competitiveAdvantage: "Bias-free screening algorithms.",
        revenueModel: "Subscription based on active job posts.",
        metrics: { customers: "50 Companies", revenue: "₹1.2Cr", retention: "88%", breakeven: "10 Months" },
        faq: [
            { question: "Does it replace recruiters?", answer: "No, it empowers them by automating repetitive tasks so they can focus on engagement." },
            { question: "How do you prevent AI bias?", answer: "Our algorithms are regularly audited and trained on diverse datasets to minimize bias." },
            { question: "Can it schedule interviews?", answer: "Yes, it integrates with calendars to automatically schedule interviews." }
        ]
    },
    {
        id: "24",
        title: "Smart Water Management for Apartments",
        industry: "IoT",
        elevatorPitch: "IoT solution for apartment complexes to track individual water usage and detect leaks.",
        budget: "₹12L - ₹18L",
        profitPotential: "₹70L/yr",
        timeToMarket: "10 Weeks",
        tags: ["IoT", "Sustainability", "Real Estate"],
        color: "from-cyan-500 to-blue-800",
        problemStatement: "Flat-rate water bills lead to wastage; leaks go undetected for weeks.",
        solution: "Smart flow meters + App for real-time usage tracking and billing.",
        techStack: ["Embedded C", "LoRaWAN", "Flutter", "InfluxDB"],
        targetMarket: "Residential societies and apartment associations.",
        competitiveAdvantage: "Gamified water saving goals for residents.",
        revenueModel: "Hardware + Monthly billing service fee.",
        metrics: { customers: "50 Societies", revenue: "₹70L", retention: "95%", breakeven: "12 Months" },
        faq: [
            { question: "Does it require cutting pipes?", answer: "No, our clamp-on ultrasonic sensors can be installed without plumbing changes." },
            { question: "How accurate are the sensors?", answer: "They are accurate to within 2% of actual flow." },
            { question: "Can it detect small leaks?", answer: "Yes, it can detect even slow drips that waste significant water over time." }
        ]
    },
    {
        id: "25",
        title: "No-Code App Builder for Restaurants",
        industry: "SaaS",
        elevatorPitch: "Platform allowing restaurants to launch their own ordering app and website in 15 minutes.",
        budget: "₹15L - ₹20L",
        profitPotential: "₹1Cr/yr",
        timeToMarket: "12 Weeks",
        tags: ["No-Code", "FoodTech", "SaaS"],
        color: "from-orange-600 to-red-900",
        problemStatement: "Restaurants pay 30% commission to aggregators and lose customer data.",
        solution: "Template-based builder for branded apps with integrated payments and delivery.",
        techStack: ["React", "Node.js", "PostgreSQL", "Stripe"],
        targetMarket: "Independent restaurants and cloud kitchens.",
        competitiveAdvantage: "Direct-to-consumer channel ownership.",
        revenueModel: "Monthly subscription (₹2000) + 0% commission.",
        metrics: { customers: "500 Restaurants", revenue: "₹1Cr", retention: "85%", breakeven: "10 Months" },
        faq: [
            { question: "Do I need coding skills?", answer: "No, the platform is completely drag-and-drop." },
            { question: "How long does it take to launch?", answer: "You can have your app live on the stores in less than 2 weeks." },
            { question: "Who owns the customer data?", answer: "You do. Unlike aggregators, we give you full access to your customer data." }
        ]
    }
];
