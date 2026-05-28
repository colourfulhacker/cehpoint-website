import { ExternalLink, Users, Code, Award, Rocket, Brain, Laptop, Server, Cloud, Smartphone, Monitor, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/seo";
import BreadcrumbSchema from "@/components/seo/breadcrumb-schema";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Interns() {
  const [expandedRole, setExpandedRole] = useState<string | null>(null);

  const benefits = [
    {
      icon: Code,
      title: "Real Project Experience",
      description: "Work on actual client projects using cutting-edge technologies and frameworks."
    },
    {
      icon: Users,
      title: "Mentorship Program",
      description: "Learn from real world professionals and experts with personalized guidance and code reviews."
    },
    {
      icon: Award,
      title: "Skill Development",
      description: "Comprehensive training in modern development practices and industry standards."
    },
    {
      icon: Rocket,
      title: "Career Growth",
      description: "Fast-track your career with performance-based advancement opportunities."
    }
  ];

  const sdeSkills = {
    frontend: [
      "Next.js (App Router, Pages Router, SSR / ISR / SSG)",
      "API Routes, Middleware, Dynamic Routing",
      "Image Optimisation, Metadata, Performance tuning",
      "Must be written by hand — no AI-generated scaffolding",
    ],
    backend: [
      "Vercel Serverless + PHP API Bypass",
      "Understanding of Vercel's 10s/60s function time limits",
      "Building PHP-based API endpoints as long-running bridge layers",
      "Offloading heavy tasks via HTTP calls to PHP servers",
    ],
    databases: [
      "Firebase — Firestore, Realtime DB, Auth, Cloud Functions, Storage, Security Rules",
      "Supabase — PostgreSQL, RLS, Edge Functions, Realtime Subscriptions, Auth, Storage",
    ],
    cloud: [
      "Firebase / Supabase → Azure migration (Cosmos DB, Azure SQL, Azure PostgreSQL)",
      "Azure App Service, Azure Functions, Static Web Apps",
      "Environment config, secrets management, CI/CD setup",
    ],
    crossPlatform: [
      "PWA — Service Workers, Offline-first, Push Notifications, Lighthouse",
      "TWA — Bubblewrap CLI, Digital Asset Links, APK/AAB generation, Play Console",
      "Electron — Cross-platform desktop apps, IPC, native OS integrations, auto-updater",
      "Bubble.io / Bubblewrap — No-code prototyping, Android packaging",
    ],
    bonus: [
      "TypeScript, Tailwind CSS, Docker, GitHub Actions / CI-CD",
      "Azure DevOps, Cloudflare Workers / Pages, Redis / Upstash",
      "Capacitor.js, tRPC, Stripe, Web Push Notifications",
    ],
  };

  const aiSkills = {
    core: [
      "LLM fundamentals — Transformers, attention, tokenization, context windows",
      "Prompt engineering — system prompts, few-shot, chain-of-thought, ReAct",
      "AI Agent frameworks — LangChain, CrewAI, AutoGen, Semantic Kernel",
      "RAG pipelines — vector databases, embeddings, chunking strategies",
    ],
    tools: [
      "Function calling / tool use — OpenAI, Anthropic, Google Gemini APIs",
      "Orchestration — multi-agent coordination, memory management, state machines",
      "Observability — tracing, token cost tracking, evaluation metrics",
    ],
    backend: [
      "Node.js / Python API development for agent backends",
      "Database design for conversation history, embeddings, and agent state",
      "Authentication and rate limiting for AI-powered endpoints",
    ],
    deployment: [
      "Serverless deployment (Vercel, AWS Lambda, Azure Functions)",
      "Streaming responses, WebSocket connections",
      "Cost optimization — model routing, caching, fallback strategies",
    ],
    bonus: [
      "Fine-tuning / LoRA adapters",
      "Computer vision integration",
      "Voice AI / TTS / STT pipelines",
      "MCP (Model Context Protocol) server development",
    ],
  };

  return (
    <div className="pt-36 min-h-screen" data-testid="interns-page">
      <SEO
        title="Internship Program | SDE & AI Agent Development | Cehpoint"
        description="Join Cehpoint's paid internship program. Open roles: Software Development Engineer (SDE) and AI Agent Development Intern. Work on real products, get mentored, earn stipends up to ₹15,000/month with PPO opportunities."
        url="https://www.cehpoint.co.in/interns"
        canonical="https://www.cehpoint.co.in/interns"
        keywords={["internship", "SDE intern", "AI agent intern", "software development intern", "Next.js intern", "full-stack intern", "paid internship India", "Cehpoint careers"]}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.cehpoint.co.in/" },
          { name: "Interns", url: "https://www.cehpoint.co.in/interns" }
        ]}
      />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-secondary to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up">
            <h1 className="font-display font-bold text-5xl md:text-7xl mb-6 tracking-tight" data-testid="page-title">
              Join Our <span className="text-primary">Internship Program</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed" data-testid="page-subtitle">
              Performance-based internships with stipends up to <span className="text-primary font-semibold">₹15,000/month</span> and PPO opportunities worth <span className="text-primary font-semibold">₹6 LPA</span>.
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Remote / Hybrid &middot; 3–6 Months &middot; Paid
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#open-roles">
                <Button className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold text-primary-foreground inline-flex items-center">
                  View Open Roles
                  <ChevronDown className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <a
                href="mailto:careers@cehpoint.co.in?subject=Internship Application — [Your Name]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="px-8 py-4 rounded-xl text-lg font-semibold inline-flex items-center">
                  Apply Now
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section id="open-roles" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-6xl mb-6">
              Open <span className="text-primary">Roles</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're hiring for two positions. Click each role to view the full job description.
            </p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {/* SDE Intern */}
            <div className="glass rounded-3xl overflow-hidden">
              <button
                onClick={() => setExpandedRole(expandedRole === "sde" ? null : "sde")}
                className="w-full p-8 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Laptop className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl md:text-3xl">
                      Software Development Engineer — Intern
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="secondary">Full-Stack</Badge>
                      <Badge variant="secondary">Remote / Hybrid</Badge>
                      <Badge variant="secondary">3–6 Months</Badge>
                      <Badge variant="secondary">Paid</Badge>
                    </div>
                  </div>
                </div>
                <ChevronDown className={`w-6 h-6 text-muted-foreground transition-transform flex-shrink-0 ${expandedRole === "sde" ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {expandedRole === "sde" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 border-t border-border/50">
                      {/* About the Role */}
                      <div className="mt-8">
                        <h4 className="font-bold text-xl mb-4 text-primary">About the Role</h4>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          We're not looking for someone who leans on AI to write their code. We need a developer who genuinely understands the craft — someone who can build a production-grade Next.js app from scratch, engineer a PHP-based workaround for Vercel's serverless time limits, and confidently work across Firebase and Supabase without hand-holding.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          You'll own real features across the entire stack: frontend, backend, database, cloud deployment, and even desktop and app-store-ready experiences. If migrating a Firebase project to Azure sounds like an interesting problem rather than a scary one, this role is for you.
                        </p>
                      </div>

                      {/* Who Should Apply */}
                      <div className="mt-8">
                        <h4 className="font-bold text-xl mb-4 text-primary">Who Should Apply</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            B.Tech / MCA / BCA students (final or pre-final year)
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            Developers who build things and have a GitHub to prove it
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            People who debug first and Google second
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            Anyone who has shipped a live project — big or small
                          </li>
                        </ul>
                      </div>

                      {/* Required Technical Skills */}
                      <div className="mt-8">
                        <h4 className="font-bold text-xl mb-6 text-primary">Required Technical Skills</h4>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Frontend */}
                          <div className="glass rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                                <Code className="w-5 h-5 text-primary" />
                              </div>
                              <h5 className="font-bold text-lg">Frontend & Core Framework</h5>
                            </div>
                            <ul className="space-y-2">
                              {sdeSkills.frontend.map((skill, i) => (
                                <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                                  <span className="text-primary mt-1">▸</span>
                                  {skill}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Backend */}
                          <div className="glass rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                                <Server className="w-5 h-5 text-primary" />
                              </div>
                              <h5 className="font-bold text-lg">Backend & Serverless</h5>
                            </div>
                            <ul className="space-y-2">
                              {sdeSkills.backend.map((skill, i) => (
                                <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                                  <span className="text-primary mt-1">▸</span>
                                  {skill}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Databases */}
                          <div className="glass rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                                <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>
                              </div>
                              <h5 className="font-bold text-lg">Databases & BaaS</h5>
                            </div>
                            <ul className="space-y-2">
                              {sdeSkills.databases.map((skill, i) => (
                                <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                                  <span className="text-primary mt-1">▸</span>
                                  {skill}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Cloud */}
                          <div className="glass rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                                <Cloud className="w-5 h-5 text-primary" />
                              </div>
                              <h5 className="font-bold text-lg">Cloud Migration & Deployment</h5>
                            </div>
                            <ul className="space-y-2">
                              {sdeSkills.cloud.map((skill, i) => (
                                <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                                  <span className="text-primary mt-1">▸</span>
                                  {skill}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Cross-Platform */}
                          <div className="glass rounded-2xl p-6 md:col-span-2">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                                <Smartphone className="w-5 h-5 text-primary" />
                              </div>
                              <h5 className="font-bold text-lg">Cross-Platform & App Distribution</h5>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {sdeSkills.crossPlatform.map((skill, i) => (
                                <div key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                                  <span className="text-primary mt-1">▸</span>
                                  {skill}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Day-to-Day */}
                      <div className="mt-8">
                        <h4 className="font-bold text-xl mb-4 text-primary">What You'll Do Day-to-Day</h4>
                        <div className="space-y-3">
                          {[
                            "Build and maintain Next.js web applications — every line written manually, no AI-generated code.",
                            "Design PHP API bridge layers to handle long-running tasks that exceed Vercel's serverless function limits.",
                            "Develop and manage Firebase and Supabase backends — including auth flows, real-time data, and security rules.",
                            "Assist in migrating existing projects from Firebase / Supabase / Serverless to production Azure infrastructure.",
                            "Build installable PWAs and package them as TWAs for the Google Play Store using Bubblewrap.",
                            "Wrap web applications into desktop apps using Electron, including native OS features and auto-update pipelines.",
                            "Build and iterate on Bubble.io no-code prototypes and prepare them for distribution.",
                            "Write clear documentation, participate in code reviews, and contribute to architecture decisions with the team.",
                          ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <div className="w-7 h-7 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-primary font-bold text-xs">{i + 1}</span>
                              </div>
                              <p className="text-muted-foreground">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bonus Skills */}
                      <div className="mt-8">
                        <h4 className="font-bold text-xl mb-4 text-primary">Good to Have (Bonus Skills)</h4>
                        <div className="flex flex-wrap gap-2">
                          {sdeSkills.bonus.map((skill, i) => (
                            <Badge key={i} variant="outline" className="text-muted-foreground">{skill}</Badge>
                          ))}
                        </div>
                      </div>

                      {/* Apply CTA */}
                      <div className="mt-8 p-6 bg-primary/10 rounded-2xl text-center">
                        <p className="font-bold text-lg mb-2">Ready to apply?</p>
                        <p className="text-muted-foreground mb-4">
                          Send your GitHub profile, one project you're proud of (and why), and a short intro.
                        </p>
                        <a href="mailto:careers@cehpoint.co.in?subject=SDE Intern Application — [Your Name]" target="_blank" rel="noopener noreferrer">
                          <Button className="btn-primary px-6 py-3 rounded-xl font-semibold text-primary-foreground inline-flex items-center">
                            Apply for SDE Intern
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* AI Agent Development Intern */}
            <div className="glass rounded-3xl overflow-hidden">
              <button
                onClick={() => setExpandedRole(expandedRole === "ai" ? null : "ai")}
                className="w-full p-8 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Brain className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl md:text-3xl">
                      AI Agent Development Intern
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="secondary">AI / ML</Badge>
                      <Badge variant="secondary">Remote / Hybrid</Badge>
                      <Badge variant="secondary">3–6 Months</Badge>
                      <Badge variant="secondary">Paid</Badge>
                    </div>
                  </div>
                </div>
                <ChevronDown className={`w-6 h-6 text-muted-foreground transition-transform flex-shrink-0 ${expandedRole === "ai" ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {expandedRole === "ai" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 border-t border-border/50">
                      {/* About the Role */}
                      <div className="mt-8">
                        <h4 className="font-bold text-xl mb-4 text-primary">About the Role</h4>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          We're building AI-powered products that go beyond simple chatbots. We need an intern who understands how large language models actually work — someone who can design agentic workflows, build RAG pipelines, orchestrate multi-agent systems, and ship production-ready AI features.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          You'll work directly on tools like our AI Service Estimator, Kaira AI Assistant, and internal automation agents. If you've experimented with LangChain, function calling, or vector databases — and you can explain <em>why</em> a prompt works, not just <em>that</em> it works — this role is for you.
                        </p>
                      </div>

                      {/* Who Should Apply */}
                      <div className="mt-8">
                        <h4 className="font-bold text-xl mb-4 text-primary">Who Should Apply</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            B.Tech / MCA / BCA students with a strong interest in AI and LLMs
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            Developers who have built and shipped at least one AI-powered feature or tool
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            People who understand prompt engineering beyond "write me a poem"
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            Anyone who can read a Transformer paper and explain it in plain English
                          </li>
                        </ul>
                      </div>

                      {/* Required Technical Skills */}
                      <div className="mt-8">
                        <h4 className="font-bold text-xl mb-6 text-primary">Required Technical Skills</h4>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* LLM Core */}
                          <div className="glass rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                                <Brain className="w-5 h-5 text-primary" />
                              </div>
                              <h5 className="font-bold text-lg">LLM & Agent Fundamentals</h5>
                            </div>
                            <ul className="space-y-2">
                              {aiSkills.core.map((skill, i) => (
                                <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                                  <span className="text-primary mt-1">▸</span>
                                  {skill}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Tools & Orchestration */}
                          <div className="glass rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                                <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                              </div>
                              <h5 className="font-bold text-lg">Tools & Orchestration</h5>
                            </div>
                            <ul className="space-y-2">
                              {aiSkills.tools.map((skill, i) => (
                                <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                                  <span className="text-primary mt-1">▸</span>
                                  {skill}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Backend */}
                          <div className="glass rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                                <Server className="w-5 h-5 text-primary" />
                              </div>
                              <h5 className="font-bold text-lg">Backend for AI</h5>
                            </div>
                            <ul className="space-y-2">
                              {aiSkills.backend.map((skill, i) => (
                                <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                                  <span className="text-primary mt-1">▸</span>
                                  {skill}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Deployment */}
                          <div className="glass rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                                <Cloud className="w-5 h-5 text-primary" />
                              </div>
                              <h5 className="font-bold text-lg">Deployment & Optimization</h5>
                            </div>
                            <ul className="space-y-2">
                              {aiSkills.deployment.map((skill, i) => (
                                <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                                  <span className="text-primary mt-1">▸</span>
                                  {skill}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Day-to-Day */}
                      <div className="mt-8">
                        <h4 className="font-bold text-xl mb-4 text-primary">What You'll Do Day-to-Day</h4>
                        <div className="space-y-3">
                          {[
                            "Design and build AI agent workflows — multi-step reasoning, tool calling, memory management, and error recovery.",
                            "Develop and optimize RAG pipelines — chunking strategies, embedding models, vector search, and reranking.",
                            "Integrate LLM APIs (OpenAI, Anthropic, Gemini, open-source models) into production features with proper error handling and fallbacks.",
                            "Build and maintain AI-powered tools like the Kaira assistant, service estimators, and internal automation agents.",
                            "Implement observability — trace agent decisions, track token costs, build evaluation harnesses, and measure quality.",
                            "Experiment with new models, techniques, and frameworks — then write up findings and propose production adoption.",
                            "Collaborate with the SDE team to integrate AI features into Next.js applications with streaming, caching, and rate limiting.",
                            "Document your work — architecture decisions, prompt strategies, model comparisons — so the team can build on your findings.",
                          ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <div className="w-7 h-7 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-primary font-bold text-xs">{i + 1}</span>
                              </div>
                              <p className="text-muted-foreground">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bonus Skills */}
                      <div className="mt-8">
                        <h4 className="font-bold text-xl mb-4 text-primary">Good to Have (Bonus Skills)</h4>
                        <div className="flex flex-wrap gap-2">
                          {aiSkills.bonus.map((skill, i) => (
                            <Badge key={i} variant="outline" className="text-muted-foreground">{skill}</Badge>
                          ))}
                        </div>
                      </div>

                      {/* Apply CTA */}
                      <div className="mt-8 p-6 bg-primary/10 rounded-2xl text-center">
                        <p className="font-bold text-lg mb-2">Ready to apply?</p>
                        <p className="text-muted-foreground mb-4">
                          Send your GitHub profile, one AI project you've built (and what you learned), and a short intro.
                        </p>
                        <a href="mailto:careers@cehpoint.co.in?subject=AI Agent Intern Application — [Your Name]" target="_blank" rel="noopener noreferrer">
                          <Button className="btn-primary px-6 py-3 rounded-xl font-semibold text-primary-foreground inline-flex items-center">
                            Apply for AI Agent Intern
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-24 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-6xl mb-6" data-testid="benefits-title">
              Why Choose <span className="text-primary">Cehpoint</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our internship program is designed to accelerate your growth as a developer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="glass rounded-3xl p-8 hover-lift text-center" data-testid={`benefit-${index}`}>
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-4" data-testid={`benefit-title-${index}`}>
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground" data-testid={`benefit-description-${index}`}>
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-6xl mb-6">
              What You <span className="text-primary">Get</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Paid Internship", desc: "Competitive stipend based on skills" },
              { title: "Real Products", desc: "Work on live, user-facing applications" },
              { title: "Mentorship", desc: "Weekly 1:1s with senior engineers" },
              { title: "Cloud Access", desc: "Azure, Firebase & Supabase credits" },
              { title: "LOR", desc: "Detailed letter of recommendation" },
              { title: "PPO Opportunity", desc: "Pre-placement offer for top performers" },
              { title: "Flexible Hours", desc: "Async-first, remote-friendly culture" },
              { title: "Certification", desc: "Industry-recognized completion certificate" },
            ].map((item, i) => (
              <div key={i} className="glass rounded-2xl p-6 hover-lift text-center">
                <h3 className="font-bold text-lg mb-2 text-primary">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-24 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-6xl mb-6" data-testid="application-process-title">
              Application <span className="text-primary">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Simple and straightforward — no lengthy cover letters. Show us what you've built.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Apply via Email", desc: "Send your GitHub, a project you're proud of, and a short intro (3–5 lines)" },
              { step: "2", title: "Initial Screening", desc: "We review your code, projects, and background" },
              { step: "3", title: "Technical Assessment", desc: "Coding challenge and technical interview" },
              { step: "4", title: "Final Interview", desc: "Meet the team and discuss goals" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{item.step}</span>
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-3xl p-12">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6" data-testid="cta-title">
              Ready to Start Your <span className="text-primary">Tech Career?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-4" data-testid="cta-description">
              Send your GitHub profile, one project you're proud of, and a short intro to:
            </p>
            <p className="text-2xl font-bold text-primary mb-8">careers@cehpoint.co.in</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:careers@cehpoint.co.in?subject=SDE Intern Application — [Your Name]" target="_blank" rel="noopener noreferrer">
                <Button className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold text-primary-foreground inline-flex items-center">
                  Apply for SDE Intern
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <a href="mailto:careers@cehpoint.co.in?subject=AI Agent Intern Application — [Your Name]" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="px-8 py-4 rounded-xl text-lg font-semibold inline-flex items-center">
                  Apply for AI Agent Intern
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
            <p className="text-muted-foreground text-sm mt-6">Equal opportunity employer. All backgrounds welcome.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
