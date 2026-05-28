import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Shield,
  Code,
  Users,
  Target,
  Clock,
  MapPin,
  Mail,
  ExternalLink,
  Briefcase,
  GraduationCap,
  MessageSquare,
  CheckCircle2,
  XCircle,
  Ban,
  Calendar,
  MessageCircle,
  AlertTriangle,
  FileText,
  Cpu,
  UserCheck,
  ScrollText,
  Rocket
} from "lucide-react";

import AIInterviewPopup from "@/components/careers/ai-interview-popup";
import JobPostingSchema from "@/components/seo/job-posting-schema";
import { TermsAndConditionsModal } from "@/components/careers/terms-modal";
import SEO from "@/components/seo";
import BreadcrumbSchema from "@/components/seo/breadcrumb-schema";
import { useToast } from "@/hooks/use-toast";

export default function Careers() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    idea: "",
    opportunityType: "",
    message: "",
    selectedExamples: [] as string[],
    supportNeeded: [] as string[]
  });

  const appExamples = [
    "AI Legal Assistant", "HealthTech Monitor", "FinTech Dashboard",
    "Smart Edu-Platform", "Cyber Threat Map", "SaaS HR Automator",
    "IoT Smart Home App", "AI-Powered Agri-Advisor", "Blockchain Supply Chain",
    "Virtual Real Estate Tour", "E-commerce AR Try-On", "Personalized Fitness AI",
    "Smart Waste Management", "Autonomous Delivery Bot", "Mental Health Chatbot",
    "Remote Work Hub", "Cyber Security Audit Tool", "AI Resume Builder",
    "Personalized Nutrition App", "Smart City Traffic Control", "Renewable Energy Tracker",
    "AI Content Generator", "Virtual Collaboration Space", "Smart Inventory Manager",
    "Personal AI Tutor", "Multi-Cloud Manager"
  ];

  const supportOptions = [
    "Stipend/Financial Support",
    "Technical Mentorship",
    "Cloud/Hosting Infrastructure",
    "Design & UI/UX Support",
    "Direct PPO Opportunity"
  ];

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contact || !formData.opportunityType) {
      toast({
        title: "Missing required fields",
        description: "Please fill in Name, Contact, and Opportunity Type before submitting.",
        variant: "destructive",
      });
      return;
    }

    const waMessage = `Hi Cehpoint team! I'm interested in joining forces! 🚀

*Name:* ${formData.name}
*Contact:* ${formData.contact}
*Path:* ${formData.opportunityType}
${formData.idea ? `*Idea:* ${formData.idea}\n` : ""}
${formData.selectedExamples.length > 0 ? `*Inspired By:* ${formData.selectedExamples.join(", ")}\n` : ""}
${formData.supportNeeded.length > 0 ? `*Support Required:* ${formData.supportNeeded.join(", ")}\n` : ""}
${formData.message ? `*Additional Notes:* ${formData.message}` : ""}

I'm looking forward to discussing this!`;

    const encodedMessage = encodeURIComponent(waMessage);
    window.open(`https://wa.me/919091156095?text=${encodedMessage}`, '_blank');
  };

  const fullTimeJobs = [
    {
      title: "Senior Cybersecurity Engineer",
      department: "Security & Compliance",
      location: "Remote / Hybrid",
      salary: "₹60,000/month + Performance Bonus",
      type: "Full-time",
      employmentType: "FULL_TIME",
      description: "Lead enterprise security initiatives, conduct penetration testing, implement secure architecture, and protect client systems from cyber threats. You will work on real-world security challenges across diverse industries including fintech, healthcare, and government sectors.",
      aboutRole: "You'll be part of Cehpoint's Cyber Intelligence division, responsible for offensive and defensive security operations. This role requires hands-on expertise in ethical hacking, security architecture design, and compliance frameworks. You'll collaborate with development teams to embed security into the software development lifecycle (SDLC) from day one.",
      responsibilities: [
        "Lead VAPT engagements and penetration testing for web applications, APIs, mobile apps, and infrastructure",
        "Design and implement enterprise security architecture for cloud-native and on-premise environments",
        "Conduct threat modeling, risk assessments, and security code reviews",
        "Develop and maintain security policies, standards, and procedures aligned with ISO 27001, NIST, and OWASP guidelines",
        "Perform red team operations and social engineering assessments",
        "Investigate security incidents, perform digital forensics, and develop incident response playbooks",
        "Integrate DevSecOps practices into CI/CD pipelines with automated security scanning and vulnerability management",
        "Mentor junior developers on secure coding practices and security-first development culture",
        "Stay current with emerging threats, vulnerabilities, and attack vectors to proactively strengthen defenses",
        "Prepare comprehensive security reports and remediation roadmaps for clients and internal stakeholders"
      ],
      requirements: [
        "5+ years of hands-on experience in cybersecurity with proven penetration testing skills",
        "Expert-level knowledge of OWASP Top 10, SANS CWE, and modern attack vectors",
        "Proficiency in security tools: Burp Suite, Nmap, Metasploit, Nessus, Wireshark, and SIEM platforms",
        "Experience with cloud security (AWS/Azure/GCP): IAM, VPC, Security Groups, CloudTrail, GuardDuty",
        "Understanding of cryptography: AES, RSA, TLS/SSL, hashing, digital signatures, and PKI",
        "Knowledge of compliance frameworks: PCI-DSS, GDPR, HIPAA, SOC2, ISO 27001",
        "Scripting proficiency in Python, Bash, or PowerShell for automation",
        "Experience with container security (Docker, Kubernetes) and serverless architectures",
        "Industry certifications preferred: OSCP, CEH, CISSP, CISM, or equivalent"
      ],
      benefits: [
        "Competitive salary with quarterly performance bonuses",
        "Flexible work arrangements (Remote/Hybrid)",
        "Access to cutting-edge security tools and lab environments",
        "Certification reimbursement program (OSCP, CISSP, etc.)",
        "Comprehensive health insurance coverage",
        "Unlimited access to enterprise AI tools and platforms",
        "Collaborate with global clients across fintech, healthcare, and government sectors"
      ],
    },
    {
      title: "Secure Software Developer",
      department: "Engineering & Development",
      location: "Remote / Hybrid",
      salary: "₹60,000/month + Performance Bonus",
      type: "Full-time",
      employmentType: "FULL_TIME",
      description: "Design and build enterprise-grade applications with security-first approach. You'll develop scalable web and mobile applications using modern frameworks while implementing OWASP-recommended security controls throughout the development lifecycle.",
      aboutRole: "As a Secure Software Developer at Cehpoint, you'll bridge the gap between development and security. You'll write production-quality code that is inherently secure, leveraging AI tools and agentic workflows to accelerate development. You'll work on diverse projects from MVPs to enterprise systems, always maintaining a security-first mindset.",
      responsibilities: [
        "Design and develop secure full-stack web applications using React, Next.js, Node.js, and Python",
        "Implement authentication and authorization systems: OAuth 2.0, SAML, JWT, RBAC, ABAC",
        "Develop secure REST/GraphQL APIs with input validation, rate limiting, and API gateway security",
        "Build encrypted data pipelines and secure database architectures (SQL/NoSQL)",
        "Integrate payment gateways (Razorpay, Stripe) with PCI-DSS compliant implementation",
        "Implement AI/ML features securely: LLM integration, RAG systems, and agentic workflows",
        "Write comprehensive unit and integration tests ensuring security regression coverage",
        "Conduct peer code reviews with security lens focusing on vulnerability prevention",
        "Document technical specifications, API contracts, and architectural decision records",
        "Collaborate with clients to understand requirements and deliver secure, scalable solutions"
      ],
      requirements: [
        "4+ years of professional software development experience",
        "Expert proficiency in at least two: React/Next.js, Node.js, Python, TypeScript, Go, or Rust",
        "Deep understanding of web security: XSS, SQL Injection, CSRF, IDOR, SSRF, XXE vulnerabilities",
        "Experience with secure database design: encryption at rest, field-level encryption, TDE",
        "Knowledge of authentication protocols: OAuth 2.0, OpenID Connect, SAML 2.0, LDAP",
        "Understanding of CI/CD security: SAST, DAST, SCA, secret scanning, container security",
        "Familiarity with cloud platforms (AWS/Azure/GCP) and their security primitives",
        "Experience integrating AI capabilities: OpenAI APIs, LangChain, vector databases, RAG",
        "Knowledge of Agile/Scrum development methodologies",
        "Strong debugging and performance optimization skills"
      ],
      benefits: [
        "Market-leading salary with performance bonuses",
        "Work on diverse projects from startup MVPs to enterprise systems",
        "Access to premium AI tools and platforms (OpenAI, Anthropic, Google AI)",
        "Flexible remote/hybrid work culture",
        "Annual learning budget for courses and certifications",
        "Health and wellness benefits",
        "Direct mentorship from senior engineers and industry experts"
      ],
    },
    {
      title: "DevSecOps Engineer",
      department: "Infrastructure & Security",
      location: "Remote / Hybrid",
      salary: "₹60,000/month + Performance Bonus",
      type: "Full-time",
      employmentType: "FULL_TIME",
      description: "Build and maintain secure CI/CD pipelines, cloud infrastructure, and automation frameworks. You'll be responsible for implementing infrastructure as code, managing Kubernetes clusters, and ensuring security across all deployment environments.",
      aboutRole: "At Cehpoint, DevSecOps Engineers are the backbone of our secure development operations. You'll work at the intersection of development, operations, and security, building automated pipelines that enforce security policies at every stage. You'll manage multi-cloud environments, implement zero-trust architectures, and ensure 99.99% uptime for critical systems.",
      responsibilities: [
        "Design and implement secure CI/CD pipelines with automated security scanning at every stage",
        "Manage cloud infrastructure (AWS/Azure/GCP) using Terraform, Pulumi, or CloudFormation",
        "Implement and manage Kubernetes clusters with security hardening, network policies, and RBAC",
        "Configure and maintain security tools: WAF, DDoS protection, SIEM, vulnerability scanners",
        "Develop automation scripts (Python, Bash, Go) for infrastructure provisioning, monitoring, and incident response",
        "Implement zero-trust network architecture with micro-segmentation and service mesh security",
        "Monitor system performance, security events, and orchestrate incident response for production issues",
        "Conduct infrastructure security audits and compliance checks against CIS benchmarks",
        "Build and maintain disaster recovery and business continuity solutions",
        "Collaborate with development teams to integrate security requirements into application architecture"
      ],
      requirements: [
        "3+ years of experience in DevOps with demonstrable security focus",
        "Expert knowledge of Kubernetes (K8s), Docker, and container orchestration (EKS/AKS/GKE)",
        "Proficiency in infrastructure as code: Terraform, Pulumi, Ansible, CloudFormation",
        "Experience with CI/CD tools: GitHub Actions, GitLab CI, Jenkins, ArgoCD, Argo Workflows",
        "Strong understanding of cloud security services: IAM, Security Groups, Network ACLs, VPC, WAF, Shield",
        "Experience with monitoring and observability: Prometheus, Grafana, Datadog, ELK stack",
        "Knowledge of network security: VPN, Zero Trust, micro-segmentation, firewall rules",
        "Scripting proficiency in Python, Bash, or Go for automation and tooling",
        "Understanding of security compliance: SOC2, ISO 27001, CIS benchmarks for cloud",
        "Experience with database security and encryption (RDS, CloudSQL, MongoDB Atlas)"
      ],
      benefits: [
        "Competitive compensation with performance bonuses",
        "Work with cutting-edge cloud and security technologies",
        "Remote-first culture with flexible working hours",
        "Access to enterprise security tools and sandbox environments",
        "Certification and training opportunities (AWS, Azure, Kubernetes, CKA/CKS)",
        "Health insurance and wellness benefits",
        "Opportunity to work on high-impact infrastructure serving global clients"
      ],
    },
  ];

  const internships = [
    {
      title: "Secure Software Developer (Intern)",
      department: "Security + Development",
      duration: "6 months (2-month mandatory internship + 4-month structured training)",
      stipend: "Performance-based (₹0 to ₹15,000/month)",
      employmentType: "INTERN",
      description: "Develop secure software and web applications for Cehpoint and our enterprise clients. This is a skill verification program where we assess your AI automation, agentic workflows, and security knowledge through real project work. Only candidates who pass the 7-day trial assessment and 2-month internship will be considered for PPO.",
      aboutRole: "As a Secure Software Developer Intern, you'll work on production projects under senior guidance. You'll be expected to leverage AI tools, automation frameworks, and modern development practices to deliver secure, scalable solutions. This program is designed to convert high-performing interns into full-time Secure Software Developers.",
      responsibilities: [
        "Build secure web applications using React, Next.js, Node.js, or Python with security-first approach",
        "Implement AI-powered features: chatbots, automation workflows, RAG systems, and LLM integrations",
        "Develop agentic AI solutions using frameworks like LangChain, AutoGen, CrewAI, or LangGraph",
        "Work with cloud platforms (AWS, GCP, Azure) to deploy and manage applications securely",
        "Implement security controls: authentication, authorization, input validation, and output encoding",
        "Integrate with third-party APIs and payment gateways following security best practices",
        "Write clean, well-documented, maintainable code with proper version control (Git)",
        "Participate in code reviews and learn security-conscious development practices",
        "Debug and resolve security vulnerabilities identified during testing",
        "Deliver project milestones on time with regular status updates to project leads"
      ],
      requirements: [
        "Currently pursuing or completed B.E./B.Tech in Computer Science, IT, or related field",
        "Hands-on knowledge of AI/LLM tools (ChatGPT, Claude, Gemini) and prompt engineering",
        "Understanding of AI automation frameworks: LangChain, AutoGen, CrewAI, n8n, Make.com",
        "Proficiency in at least one: Python, JavaScript, TypeScript, Go, or Rust",
        "Familiarity with web security concepts: OWASP Top 10, XSS, SQL Injection, CSRF, Authentication",
        "Basic understanding of databases (SQL/NoSQL) and API development (REST/GraphQL)",
        "Experience with version control (Git) and collaborative development workflows",
        "Knowledge of containerization and basic cloud concepts (preferred but not mandatory)",
        "Strong problem-solving skills and ability to learn new technologies quickly",
        "Clear communication skills to articulate technical concepts and progress updates"
      ],
      benefits: [
        "Stipend: ₹0 to ₹15,000/month based on performance and project delivery",
        "Work on real enterprise projects with potential for PPO conversion",
        "Mentorship from senior developers and security experts",
        "Access to premium AI platforms and tools (OpenAI, Anthropic, Google AI, Azure AI)",
        "Training on modern security frameworks and agentic AI development",
        "Certificate of completion and experience letter for successful interns",
        "Fast-track to full-time role for top performers after 6 months"
      ],
      selectionProcess: [
        "Step 1: Submit application via Internlink portal",
        "Step 2: Complete mandatory 7-day trial work assessment (skill evaluation)",
        "Step 3: 2-month mandatory internship with real project work",
        "Step 4: 4-month structured skill and project training",
        "Step 5: PPO consideration based on overall performance"
      ],
    },
    {
      title: "Security-Aware Full Stack Developer (Intern)",
      department: "Development + Security",
      duration: "6 months (2-month mandatory internship + 4-month structured training)",
      stipend: "Performance-based (₹0 to ₹15,000/month)",
      employmentType: "INTERN",
      description: "Build enterprise-grade web and mobile applications with security-first mindset. This is a skill verification program where we assess your ability to develop secure, scalable solutions using modern technologies and AI frameworks. Candidates must complete the 7-day trial assessment and 2-month mandatory internship to be considered for PPO.",
      aboutRole: "As a Security-Aware Full Stack Developer Intern, you'll build production-ready applications that are secure by design. You'll work with modern frameworks, integrate AI capabilities, and implement security controls throughout the development lifecycle. This program is designed to identify and nurture talent for future full-time roles.",
      responsibilities: [
        "Develop responsive web and mobile applications using React, Next.js, Node.js, or React Native",
        "Build and integrate AI-powered features: intelligent chatbots, automation workflows, and analytics",
        "Implement agentic AI solutions using CrewAI, LangGraph, or similar frameworks",
        "Create and maintain RESTful APIs with proper authentication, rate limiting, and input validation",
        "Design and implement database schemas with security considerations (encryption, access control)",
        "Deploy applications to cloud platforms (Firebase, Supabase, AWS, Vercel, Netlify)",
        "Implement CI/CD pipelines with security scanning at build, test, and deploy stages",
        "Write security-aware code following OWASP guidelines and secure coding practices",
        "Collaborate with team members using Agile methodologies and Git-based workflows",
        "Document technical specifications and maintain project documentation"
      ],
      requirements: [
        "Currently pursuing or completed B.E./B.Tech, BCA, MCA, or equivalent in relevant field",
        "Working knowledge of modern AI automation and agentic technologies",
        "Proficiency in frontend (React/Next.js) OR backend (Node.js/Python) development",
        "Understanding of web security fundamentals: HTTPS, CSP, CORS, Content Security, Authentication",
        "Experience with databases: PostgreSQL, MongoDB, Firebase, or Supabase",
        "Familiarity with cloud platforms and deployment tools (Vercel, Netlify, AWS, Firebase)",
        "Understanding of CI/CD concepts and basic DevOps practices",
        "Awareness of compliance requirements: GDPR, PCI-DSS, SOC2 (basic understanding sufficient)",
        "Strong analytical skills and ability to debug issues independently",
        "Self-motivated learner with passion for building secure, scalable applications"
      ],
      benefits: [
        "Stipend: ₹0 to ₹15,000/month based on performance metrics and project delivery",
        "Convert to full-time PPO for exceptional performers after 6 months",
        "Mentorship from experienced developers and security professionals",
        "Access to enterprise AI tools and learning resources",
        "Exposure to diverse project domains: fintech, healthcare, edtech, and more",
        "Training on security-first development and AI agentic workflows",
        "Certificate and employment verification for successful completion"
      ],
      selectionProcess: [
        "Step 1: Apply through Internlink portal with your portfolio/GitHub links",
        "Step 2: Complete mandatory 7-day trial work demonstrating AI and security skills",
        "Step 3: 2-month mandatory internship with hands-on project work",
        "Step 4: 4-month advanced training on enterprise development and AI",
        "Step 5: Final performance review for PPO consideration"
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-background">
      <SEO
        title="Careers | Join the Cehpoint Team"
        description="Join Cehpoint to build secure AI-powered software and work on diverse projects from startup MVPs to enterprise systems."
        url="https://www.cehpoint.co.in/careers"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.cehpoint.co.in/" },
          { name: "Careers", url: "https://www.cehpoint.co.in/careers" }
        ]}
      />
      <AIInterviewPopup />

      {/* SEO Schema Objects */}
      {fullTimeJobs.map((job) => (
        <JobPostingSchema
          key={job.title}
          title={job.title}
          description={job.description}
          department={job.department}
          location={job.location}
          employmentType={job.employmentType as "FULL_TIME" | "INTERN" | "PART_TIME" | "CONTRACTOR"}
          salary={{ currency: "INR", value: 720000, unitText: "YEAR" }}
          datePosted="2025-01-01"
          validThrough="2025-12-31"
          responsibilities={job.responsibilities}
          requirements={job.requirements}
          applicationUrl="http://interview-ai.cehpoint.co.in"
        />
      ))}
      {internships.map((internship) => (
        <JobPostingSchema
          key={internship.title}
          title={internship.title}
          description={internship.description}
          department={internship.department}
          location="Remote/Hybrid"
          employmentType={internship.employmentType as "FULL_TIME" | "INTERN" | "PART_TIME" | "CONTRACTOR"}
          salary={{ currency: "INR", value: 180000, unitText: "YEAR" }}
          datePosted="2025-01-01"
          validThrough="2025-12-31"
          responsibilities={internship.responsibilities}
          requirements={internship.requirements}
          applicationUrl="https://internlink.cehpoint.co.in/"
        />
      ))}

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 bg-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-black to-blue-900/20" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12">

          {/* Hero Content */}
          <div className="lg:w-1/2 text-left">
            <Badge className="bg-white/10 text-white hover:bg-white/20 border-white/20 mb-6 px-4 py-2 text-sm backdrop-blur-md">
              <Rocket className="w-4 h-4 mr-2 text-primary" />
              Zero Trial Period - Real Work From Day One
            </Badge>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Build Secure <span className="text-primary">AI-Powered</span> Software
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl font-light leading-relaxed">
              We hire Secure Software Developers who can build enterprise-grade applications with AI automation, agentic workflows, and cybersecurity best practices. 7-day trial work is mandatory skill assessment - no offers without completing it.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm text-gray-300 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                <span>7-Day Trial (Mandatory)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>AI/Agentic Tech Skills</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <UserCheck className="w-4 h-4 text-green-400" />
                <span>PPO Based on Performance</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <TermsAndConditionsModal triggerText="View our Hiring Policy & Terms" className="bg-transparent border border-white/20 text-white hover:bg-white/10" />
              <Button
                variant="outline"
                className="bg-primary/10 border-primary/50 text-white hover:bg-primary/20"
                onClick={() => window.open("https://works.cehpoint.co.in/", "_blank")}
              >
                <Briefcase className="w-4 h-4 mr-2 text-primary" />
                Explore Project-Based Work
              </Button>
            </div>
          </div>

          {/* Dream App Builder Form */}
          <div className="lg:w-1/2 w-full max-w-md mx-auto lg:mx-0">
            <Card className="bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-blue-500" />
              <CardHeader className="pb-4 border-b border-white/5">
                <CardTitle className="text-2xl font-bold flex items-center text-white">
                  <MessageSquare className="w-6 h-6 mr-3 text-primary" />
                  Pitch Your Dream
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Fill this out to get instantly connected with Cehpoint via WhatsApp.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-300 text-xs uppercase tracking-wider">Your Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      autoComplete="name"
                      required
                      className="h-12 bg-white/5 border-white/10 text-white focus:border-primary transition-colors text-base"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact" className="text-gray-300 text-xs uppercase tracking-wider">Contact No. / LinkedIn *</Label>
                    <Input
                      id="contact"
                      type="text"
                      inputMode="text"
                      autoComplete="tel"
                      required
                      className="h-12 bg-white/5 border-white/10 text-white focus:border-primary transition-colors text-base"
                      placeholder="+91 98765 43210 or linkedin.com/in/you"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-gray-300 text-xs uppercase tracking-wider">Your path with us *</Label>
                    <Select required onValueChange={(value) => setFormData({ ...formData, opportunityType: value })}>
                      <SelectTrigger className="h-12 bg-white/5 border-white/10 text-white focus:border-primary">
                        <SelectValue placeholder="Select Opportunity" />
                      </SelectTrigger>
                      <SelectContent className="bg-zinc-900 border-white/10 text-white">
                        <SelectItem value="I have an Idea, let's build it!">I have an Idea, let's build it!</SelectItem>
                        <SelectItem value="Select a Project">Select a Project</SelectItem>
                        <SelectItem value="Project Collab">Project Collab</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <AnimatePresence>
                    {(formData.opportunityType === "I have an Idea, let's build it!" || formData.opportunityType === "Project Collab" || formData.opportunityType === "Select a Project") && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-4 overflow-hidden"
                      >
                        <div className="space-y-2">
                          <Label className="text-gray-300 text-xs uppercase tracking-wider">Example Innovations (Select for inspiration)</Label>
                          <div className="flex flex-wrap gap-2">
                            {appExamples.map((example) => (
                              <button
                                key={example}
                                type="button"
                                onClick={() => {
                                  const isSelected = formData.selectedExamples.includes(example);
                                  setFormData({
                                    ...formData,
                                    selectedExamples: isSelected
                                      ? formData.selectedExamples.filter(e => e !== example)
                                      : [...formData.selectedExamples, example]
                                  });
                                }}
                                className={`px-4 py-2 text-sm rounded-full border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ring-offset-background ${formData.selectedExamples.includes(example)
                                  ? "bg-primary/20 border-primary text-white"
                                  : "bg-white/5 border-white/10 text-gray-300 hover:border-white/20"
                                  }`}
                              >
                                {example}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="idea" className="text-green-400 text-xs uppercase tracking-wider font-semibold">Pitch Your Idea Briefly</Label>
                          <Textarea
                            id="idea"
                            className="bg-white/5 border-green-500/30 text-white focus:border-green-500 transition-colors min-h-[80px]"
                            placeholder="I want to build a platform that does..."
                            value={formData.idea}
                            onChange={(e) => setFormData({ ...formData, idea: e.target.value })}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label className="text-gray-300 text-xs uppercase tracking-wider">What do you need from us? *</Label>
                          <div className="grid grid-cols-1 gap-2">
                            {supportOptions.map((option) => (
                              <label key={option} className="flex items-center gap-2 cursor-pointer group">
                                <input
                                  type="checkbox"
                                  className="form-checkbox bg-white/5 border-white/10 rounded text-primary"
                                  checked={formData.supportNeeded.includes(option)}
                                  onChange={(e) => {
                                    const isChecked = e.target.checked;
                                    setFormData({
                                      ...formData,
                                      supportNeeded: isChecked
                                        ? [...formData.supportNeeded, option]
                                        : formData.supportNeeded.filter(o => o !== option)
                                    });
                                  }}
                                />
                                <span className={`text-xs transition-colors ${formData.supportNeeded.includes(option) ? "text-primary" : "text-gray-300 group-hover:text-gray-300"}`}>
                                  {option}
                                </span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300 text-xs uppercase tracking-wider">Why should we pick you? (Optional)</Label>
                    <Textarea
                      id="message"
                      className="bg-white/5 border-white/10 text-white focus:border-primary transition-colors min-h-[60px]"
                      placeholder="Share a quick link to your portfolio or state your core skills."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 shadow-lg shadow-emerald-500/20 text-white font-bold h-14 rounded-xl mt-4 flex items-center justify-center gap-2 group transition-all">
                    <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform text-white" />
                    <span className="text-base">Contact Company via WhatsApp</span>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Traditional Listings - Streamlined */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-16">

            {/* Full Time Section */}
            <div>
              <div className="mb-10">
                <h2 className="text-3xl font-bold flex items-center mb-3 text-white">
                  <Briefcase className="w-8 h-8 mr-3 text-primary" /> Hiring Portals
                </h2>
                <p className="text-muted-foreground text-lg">Access our specialized hiring and work portals.</p>
              </div>

              <div className="grid grid-cols-1 gap-4 mb-12">
                <Card className="group border border-primary/20 hover:border-primary/50 transition-all duration-300 bg-primary/5 backdrop-blur-sm overflow-hidden hover:shadow-xl hover:shadow-primary/10">
                  <CardHeader className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-primary/10 text-primary">
                          <Rocket className="w-6 h-6" />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-bold text-white">Marketing Jobs Portal</CardTitle>
                          <CardDescription className="text-gray-300 mt-1">Explore specialized marketing opportunities and roles.</CardDescription>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" asChild className="border-primary/20 hover:bg-primary/10 text-primary">
                        <a href="https://marketing-jobs.cehpoint.co.in/" target="_blank" rel="noopener noreferrer">
                          Visit Portal <ExternalLink className="w-3 h-3 ml-2" />
                        </a>
                      </Button>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="group border border-secondary/20 hover:border-secondary/50 transition-all duration-300 bg-secondary/5 backdrop-blur-sm overflow-hidden hover:shadow-xl hover:shadow-secondary/10">
                  <CardHeader className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-secondary/10 text-primary">
                          <Rocket className="w-6 h-6" />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-bold text-white">Work Portal</CardTitle>
                          <CardDescription className="text-gray-300 mt-1">Mission-based work for professionals. Verified projects, direct assignment, and weekly liquidity.</CardDescription>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" asChild className="border-secondary/20 hover:bg-secondary/10 text-primary">
                        <a href="https://works.cehpoint.co.in/" target="_blank" rel="noopener noreferrer">
                          Start Working <ExternalLink className="w-3 h-3 ml-2" />
                        </a>
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              </div>

              <div className="mb-10">
                <h2 className="text-3xl font-bold flex items-center mb-3 text-white">
                  <Briefcase className="w-8 h-8 mr-3 text-primary" /> Full-Time Roles
                </h2>
                <p className="text-muted-foreground text-lg">Permanent positions with competitive benefits.</p>
              </div>

              <div className="space-y-4">
                {fullTimeJobs.map((job, idx) => (
                  <Card key={idx} className="group border border-white/10 hover:border-primary/50 transition-all duration-300 bg-zinc-900/50 backdrop-blur-sm overflow-hidden hover:shadow-xl hover:shadow-primary/10">
                    <CardHeader className="p-6 pb-4 bg-gradient-to-b from-primary/5 to-transparent">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="text-xs font-bold uppercase tracking-widest text-primary mb-2 shadow-sm">JOB • {job.department}</div>
                          <CardTitle className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{job.title}</CardTitle>
                        </div>
                        <Badge variant="default" className="bg-primary text-primary-foreground px-4 py-1.5 font-bold shadow-lg ring-2 ring-primary/20">{job.salary}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <p className="text-base text-gray-200 mb-4 leading-relaxed">{job.description}</p>
                      <p className="text-sm text-gray-300 mb-6 leading-relaxed"><strong className="text-white">About the Role:</strong> {job.aboutRole}</p>
                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-2 flex items-center"><Code className="w-4 h-4 mr-2" />Key Responsibilities</h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {job.responsibilities.map((resp, i) => (
                              <li key={i} className="text-sm text-gray-300 flex items-start"><span className="text-primary mr-2">•</span>{resp}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-2 flex items-center"><Shield className="w-4 h-4 mr-2" />Requirements</h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {job.requirements.map((req, i) => (
                              <li key={i} className="text-sm text-gray-300 flex items-start"><span className="text-primary mr-2">•</span>{req}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-green-400 uppercase tracking-wider mb-2 flex items-center"><CheckCircle2 className="w-4 h-4 mr-2" />What We Offer</h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {job.benefits.map((ben, i) => (
                              <li key={i} className="text-sm text-gray-300 flex items-start"><span className="text-green-400 mr-2">+</span>{ben}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="flex justify-between items-center bg-white/5 p-3 px-4 rounded-xl border border-white/10 group-hover:bg-white/10 transition-colors">
                        <span className="text-sm font-semibold text-gray-100 flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-primary fill-primary/20" /> {job.location}
                        </span>
                        <Button variant="ghost" size="sm" asChild className="hover:text-primary hover:bg-primary/10 transition-colors font-semibold">
                          <a href="http://interview-ai.cehpoint.co.in">
                            Take Tech Interview <ExternalLink className="w-3 h-3 ml-2" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Internships Section */}
            <div>
              <div className="mb-10">
                <h2 className="text-3xl font-bold flex items-center mb-3">
                  <GraduationCap className="w-8 h-8 mr-3 text-primary" /> Internships (Skill Verification Program)
                </h2>
                <p className="text-muted-foreground text-lg">Stipend and PPO are strictly subject to performance - not fixed. No 7-day trial completion = No opportunity.</p>
              </div>

              <div className="space-y-4">
                {internships.map((intern, idx) => (
                  <Card key={idx} className="group border border-white/10 hover:border-secondary/50 transition-all duration-300 bg-zinc-900/50 backdrop-blur-sm overflow-hidden hover:shadow-xl hover:shadow-secondary/10">
                    <CardHeader className="p-6 pb-4 bg-gradient-to-b from-secondary/10 to-transparent">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2 shadow-sm">INTERNSHIP • {intern.department}</div>
                          <CardTitle className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{intern.title}</CardTitle>
                        </div>
                        <Badge variant="default" className="bg-secondary text-primary-foreground px-4 py-1.5 font-bold shadow-lg ring-2 ring-secondary/20">{intern.stipend}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <p className="text-base text-gray-200 mb-4 leading-relaxed">{intern.description}</p>
                      <p className="text-sm text-gray-300 mb-6 leading-relaxed"><strong className="text-white">About the Program:</strong> {intern.aboutRole}</p>
                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-2 flex items-center"><Code className="w-4 h-4 mr-2" />What You'll Work On</h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {intern.responsibilities.map((resp, i) => (
                              <li key={i} className="text-sm text-gray-300 flex items-start"><span className="text-primary mr-2">•</span>{resp}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-2 flex items-center"><Target className="w-4 h-4 mr-2" />What We're Looking For</h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {intern.requirements.map((req, i) => (
                              <li key={i} className="text-sm text-gray-300 flex items-start"><span className="text-primary mr-2">•</span>{req}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-green-400 uppercase tracking-wider mb-2 flex items-center"><CheckCircle2 className="w-4 h-4 mr-2" />Program Benefits</h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {intern.benefits.map((ben, i) => (
                              <li key={i} className="text-sm text-gray-300 flex items-start"><span className="text-green-400 mr-2">+</span>{ben}</li>
                            ))}
                          </ul>
                        </div>
                        {intern.selectionProcess && (
                          <div>
                            <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center"><Clock className="w-4 h-4 mr-2" />Selection Process</h4>
                            <ol className="space-y-2">
                              {intern.selectionProcess.map((step, i) => (
                                <li key={i} className="text-sm text-gray-300 flex items-start"><span className="text-amber-400 font-bold mr-3">{i + 1}.</span>{step}</li>
                              ))}
                            </ol>
                          </div>
                        )}
                      </div>
                      <div className="flex justify-between items-center bg-white/5 p-3 px-4 rounded-xl border border-white/10 group-hover:bg-white/10 transition-colors">
                        <span className="text-sm font-semibold text-gray-100 flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-primary fill-primary/20" /> {intern.duration}
                        </span>
                        <Button variant="ghost" size="sm" asChild className="hover:text-primary hover:bg-secondary/10 transition-colors">
                          <a href="https://internlink.cehpoint.co.in/" target="_blank" rel="noopener noreferrer">
                            Apply via Internlink <ExternalLink className="w-3 h-3 ml-2" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Careers Structure & FAQ - Very Minimal & Distinctive Red */}
      <section className="py-20 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 flex justify-center items-center gap-2">
              <Shield className="w-8 h-8 text-red-500" /> Ground Rules & Policies
            </h2>
          </div>

          <div className="space-y-6">
            <Card className="border-l-4 border-l-red-500 shadow-xl bg-red-950/10 backdrop-blur-md border border-red-500/20">
              <CardHeader className="pb-3 border-b border-red-500/10">
                <CardTitle className="text-2xl flex items-center font-bold text-red-500">
                  <XCircle className="w-7 h-7 mr-3" /> Mandatory Internship Tenure
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg text-gray-100 pt-6 space-y-5">
                <p className="leading-relaxed">
                  The initial two-month internship is <strong className="text-red-400 border-b-2 border-red-500/30 pb-0.5">mandatory and non-negotiable</strong>. Leaving before 2 months, termination due to non-performance, or policy violations will result in:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="bg-red-500/10 p-4 rounded-xl flex items-center text-red-400 text-base font-bold border border-red-500/20 shadow-inner">
                    <Ban className="w-5 h-5 mr-3 text-red-500" /> Withheld Certificates
                  </div>
                  <div className="bg-red-500/10 p-4 rounded-xl flex items-center text-red-400 text-base font-bold border border-red-500/20 shadow-inner">
                    <Ban className="w-5 h-5 mr-3 text-red-500" /> Stipend Refusal
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary shadow-xl bg-primary/5 backdrop-blur-md border border-primary/20">
              <CardHeader className="pb-3 border-b border-primary/10">
                <CardTitle className="text-2xl flex items-center font-bold text-primary">
                  <Calendar className="w-7 h-7 mr-3" /> The 6-Month Structured Journey
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg text-gray-100 pt-6 space-y-6">
                <div className="space-y-4">
                  <p className="flex items-center gap-3"><span className="w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(139,92,246,0.5)]"></span><strong className="text-white">First 2 months:</strong> Mandatory Internship Plan</p>
                  <p className="flex items-center gap-3"><span className="w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(139,92,246,0.5)]"></span><strong className="text-white">Next 4 months:</strong> Mandatory Skill & Project Training</p>
                </div>
                <div className="text-base bg-primary/20 border border-primary/30 p-5 rounded-xl text-primary-foreground font-semibold mt-8 flex items-start gap-4 shadow-lg backdrop-blur-sm">
                  <Shield className="w-6 h-6 shrink-0 mt-0.5 text-primary" />
                  <p>Only after successful completion of both phases does a candidate become eligible for PPO consideration.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-amber-500 shadow-xl bg-amber-950/10 backdrop-blur-md border border-amber-500/20">
              <CardHeader className="pb-3 border-b border-amber-500/10">
                <CardTitle className="text-2xl flex items-center font-bold text-amber-500">
                  <ScrollText className="w-7 h-7 mr-3" /> 7-Day Trial Work (Mandatory)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg text-gray-100 pt-6 space-y-4">
                <p className="leading-relaxed">
                  Without completing the <strong className="text-amber-400">7-day trial work assessment</strong>, we do not offer any internship or job opportunity. This trial tests your <strong className="text-amber-400">AI/Automation and Security knowledge</strong> - no exceptions.
                </p>
                <div className="bg-amber-500/10 p-4 rounded-xl border border-amber-500/20 text-amber-400 font-bold text-center">
                  <XCircle className="w-5 h-5 inline mr-2" /> No Trial Completion = No Opportunity
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-cyan-500 shadow-xl bg-cyan-950/10 backdrop-blur-md border border-cyan-500/20">
              <CardHeader className="pb-3 border-b border-cyan-500/10">
                <CardTitle className="text-2xl flex items-center font-bold text-cyan-400">
                  <Cpu className="w-7 h-7 mr-3" /> AI, Automation & Agentic Skills (Mandatory)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg text-gray-100 pt-6 space-y-4">
                <p className="leading-relaxed">
                  Interns must have working knowledge of <strong className="text-cyan-400">modern AI automation and agentic technologies</strong> including but not limited to:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                  {["LangChain", "AutoGen", "CrewAI", "LangGraph", "Vertex AI", "AWS Bedrock", "Azure OpenAI", "CrewAI", "n8n", "Make.com", "RAG Systems", "Vector DBs", "LLM Fine-tuning", "AI Agents", "Multi-agent Systems"].map((tech) => (
                    <div key={tech} className="bg-cyan-500/10 p-3 rounded-lg text-cyan-300 text-sm font-medium text-center border border-cyan-500/20">
                      {tech}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500 shadow-xl bg-green-950/10 backdrop-blur-md border border-green-500/20">
              <CardHeader className="pb-3 border-b border-green-500/10">
                <CardTitle className="text-2xl flex items-center font-bold text-green-400">
                  <CheckCircle2 className="w-7 h-7 mr-3" /> Stipend & PPO Policy
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg text-gray-100 pt-6 space-y-4">
                <p className="leading-relaxed">
                  <strong className="text-green-400">Stipend and PPO are strictly subject to performance - not fixed.</strong> Your skills, project delivery, and contribution determine compensation. Only top performers receive offers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </div>
  );
}
