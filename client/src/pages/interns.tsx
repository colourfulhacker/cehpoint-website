import { ExternalLink, Users, Code, Award, Rocket, Brain, Laptop, Server, Cloud, Smartphone, Monitor, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/seo";
import BreadcrumbSchema from "@/components/seo/breadcrumb-schema";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Interns() {
  const { t } = useTranslation();
  const [expandedRole, setExpandedRole] = useState<string | null>(null);

  const benefitsText = t("pages.pgInterns.benefits", { returnObjects: true }) as { title: string; description: string }[];
  const benefitsIcons = [Code, Users, Award, Rocket];
  const benefits = benefitsText.map((b, i) => ({ ...b, icon: benefitsIcons[i] }));

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
              {t("pages.pgInterns.heroTitle")} <span className="text-primary">{t("pages.pgInterns.heroTitleAccent")}</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed" data-testid="page-subtitle">
              {t("pages.pgInterns.heroSubtitlePart1")} <span className="text-primary font-semibold">{t("pages.pgInterns.heroSubtitleStipend")}</span> {t("pages.pgInterns.heroSubtitlePart2")} <span className="text-primary font-semibold">{t("pages.pgInterns.heroSubtitlePpo")}</span>.
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t("pages.pgInterns.heroMeta")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#open-roles">
                <Button className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold text-primary-foreground inline-flex items-center">
                  {t("pages.pgInterns.viewOpenRoles")}
                  <ChevronDown className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <a
                href="mailto:careers@cehpoint.co.in?subject=Internship Application — [Your Name]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="px-8 py-4 rounded-xl text-lg font-semibold inline-flex items-center">
                  {t("pages.pgInterns.applyNow")}
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
              {t("pages.pgInterns.openRolesTitle")} <span className="text-primary">{t("pages.pgInterns.openRolesTitleAccent")}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("pages.pgInterns.openRolesDesc")}
            </p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {/* SDE Intern */}
            <div className="glass rounded-3xl overflow-hidden">
              <button
                onClick={() => setExpandedRole(expandedRole === "sde" ? null : "sde")}
                className="w-full p-8 text-left flex items-center justify-between hover:bg-foreground/5 transition-colors"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Laptop className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl md:text-3xl">
                      {t("pages.pgInterns.sdeRoleTitle")}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="secondary">{t("pages.pgInterns.badgeFullStack")}</Badge>
                      <Badge variant="secondary">{t("pages.pgInterns.badgeRemoteHybrid")}</Badge>
                      <Badge variant="secondary">{t("pages.pgInterns.badgeMonths")}</Badge>
                      <Badge variant="secondary">{t("pages.pgInterns.badgePaid")}</Badge>
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
                        <h4 className="font-bold text-xl mb-4 text-primary">{t("pages.pgInterns.aboutRole")}</h4>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {t("pages.pgInterns.sdeAbout1")}
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          {t("pages.pgInterns.sdeAbout2")}
                        </p>
                      </div>

                      {/* Who Should Apply */}
                      <div className="mt-8">
                        <h4 className="font-bold text-xl mb-4 text-primary">{t("pages.pgInterns.whoShouldApply")}</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          {(t("pages.pgInterns.sdeWho", { returnObjects: true }) as string[]).map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Required Technical Skills */}
                      <div className="mt-8">
                        <h4 className="font-bold text-xl mb-6 text-primary">{t("pages.pgInterns.requiredSkills")}</h4>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Frontend */}
                          <div className="glass rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                                <Code className="w-5 h-5 text-primary" />
                              </div>
                              <h5 className="font-bold text-lg">{t("pages.pgInterns.sdeFrontendTitle")}</h5>
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
                              <h5 className="font-bold text-lg">{t("pages.pgInterns.sdeBackendTitle")}</h5>
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
                              <h5 className="font-bold text-lg">{t("pages.pgInterns.sdeDatabasesTitle")}</h5>
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
                              <h5 className="font-bold text-lg">{t("pages.pgInterns.sdeCloudTitle")}</h5>
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
                              <h5 className="font-bold text-lg">{t("pages.pgInterns.sdeCrossPlatformTitle")}</h5>
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
                        <h4 className="font-bold text-xl mb-4 text-primary">{t("pages.pgInterns.dayToDay")}</h4>
                        <div className="space-y-3">
                          {(t("pages.pgInterns.sdeDayToDay", { returnObjects: true }) as string[]).map((item, i) => (
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
                        <h4 className="font-bold text-xl mb-4 text-primary">{t("pages.pgInterns.bonusSkills")}</h4>
                        <div className="flex flex-wrap gap-2">
                          {sdeSkills.bonus.map((skill, i) => (
                            <Badge key={i} variant="outline" className="text-muted-foreground">{skill}</Badge>
                          ))}
                        </div>
                      </div>

                      {/* Apply CTA */}
                      <div className="mt-8 p-6 bg-primary/10 rounded-2xl text-center">
                        <p className="font-bold text-lg mb-2">{t("pages.pgInterns.readyToApply")}</p>
                        <p className="text-muted-foreground mb-4">
                          {t("pages.pgInterns.sdeApplyDesc")}
                        </p>
                        <a href="mailto:careers@cehpoint.co.in?subject=SDE Intern Application — [Your Name]" target="_blank" rel="noopener noreferrer">
                          <Button className="btn-primary px-6 py-3 rounded-xl font-semibold text-primary-foreground inline-flex items-center">
                            {t("pages.pgInterns.applySde")}
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
                className="w-full p-8 text-left flex items-center justify-between hover:bg-foreground/5 transition-colors"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Brain className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl md:text-3xl">
                      {t("pages.pgInterns.aiRoleTitle")}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="secondary">{t("pages.pgInterns.badgeAiMl")}</Badge>
                      <Badge variant="secondary">{t("pages.pgInterns.badgeRemoteHybrid")}</Badge>
                      <Badge variant="secondary">{t("pages.pgInterns.badgeMonths")}</Badge>
                      <Badge variant="secondary">{t("pages.pgInterns.badgePaid")}</Badge>
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
                        <h4 className="font-bold text-xl mb-4 text-primary">{t("pages.pgInterns.aboutRole")}</h4>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {t("pages.pgInterns.aiAbout1")}
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          {t("pages.pgInterns.aiAbout2Part1")} <em>{t("pages.pgInterns.aiAbout2Why")}</em> {t("pages.pgInterns.aiAbout2Part2")} <em>{t("pages.pgInterns.aiAbout2That")}</em> {t("pages.pgInterns.aiAbout2Part3")}
                        </p>
                      </div>

                      {/* Who Should Apply */}
                      <div className="mt-8">
                        <h4 className="font-bold text-xl mb-4 text-primary">{t("pages.pgInterns.whoShouldApply")}</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          {(t("pages.pgInterns.aiWho", { returnObjects: true }) as string[]).map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Required Technical Skills */}
                      <div className="mt-8">
                        <h4 className="font-bold text-xl mb-6 text-primary">{t("pages.pgInterns.requiredSkills")}</h4>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* LLM Core */}
                          <div className="glass rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                                <Brain className="w-5 h-5 text-primary" />
                              </div>
                              <h5 className="font-bold text-lg">{t("pages.pgInterns.aiCoreTitle")}</h5>
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
                              <h5 className="font-bold text-lg">{t("pages.pgInterns.aiToolsTitle")}</h5>
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
                              <h5 className="font-bold text-lg">{t("pages.pgInterns.aiBackendTitle")}</h5>
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
                              <h5 className="font-bold text-lg">{t("pages.pgInterns.aiDeploymentTitle")}</h5>
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
                        <h4 className="font-bold text-xl mb-4 text-primary">{t("pages.pgInterns.dayToDay")}</h4>
                        <div className="space-y-3">
                          {(t("pages.pgInterns.aiDayToDay", { returnObjects: true }) as string[]).map((item, i) => (
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
                        <h4 className="font-bold text-xl mb-4 text-primary">{t("pages.pgInterns.bonusSkills")}</h4>
                        <div className="flex flex-wrap gap-2">
                          {aiSkills.bonus.map((skill, i) => (
                            <Badge key={i} variant="outline" className="text-muted-foreground">{skill}</Badge>
                          ))}
                        </div>
                      </div>

                      {/* Apply CTA */}
                      <div className="mt-8 p-6 bg-primary/10 rounded-2xl text-center">
                        <p className="font-bold text-lg mb-2">{t("pages.pgInterns.readyToApply")}</p>
                        <p className="text-muted-foreground mb-4">
                          {t("pages.pgInterns.aiApplyDesc")}
                        </p>
                        <a href="mailto:careers@cehpoint.co.in?subject=AI Agent Intern Application — [Your Name]" target="_blank" rel="noopener noreferrer">
                          <Button className="btn-primary px-6 py-3 rounded-xl font-semibold text-primary-foreground inline-flex items-center">
                            {t("pages.pgInterns.applyAi")}
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
              {t("pages.pgInterns.whyChooseTitle")} <span className="text-primary">{t("pages.pgInterns.whyChooseAccent")}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("pages.pgInterns.whyChooseDesc")}
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
              {t("pages.pgInterns.whatYouGetTitle")} <span className="text-primary">{t("pages.pgInterns.whatYouGetAccent")}</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {(t("pages.pgInterns.whatYouGet", { returnObjects: true }) as { title: string; desc: string }[]).map((item, i) => (
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
              {t("pages.pgInterns.applicationProcessTitle")} <span className="text-primary">{t("pages.pgInterns.applicationProcessAccent")}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("pages.pgInterns.applicationProcessDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {(t("pages.pgInterns.process", { returnObjects: true }) as { title: string; desc: string }[]).map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{i + 1}</span>
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
              {t("pages.pgInterns.ctaTitle")} <span className="text-primary">{t("pages.pgInterns.ctaTitleAccent")}</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-4" data-testid="cta-description">
              {t("pages.pgInterns.ctaDesc")}
            </p>
            <p className="text-2xl font-bold text-primary mb-8">careers@cehpoint.co.in</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:careers@cehpoint.co.in?subject=SDE Intern Application — [Your Name]" target="_blank" rel="noopener noreferrer">
                <Button className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold text-primary-foreground inline-flex items-center">
                  {t("pages.pgInterns.applySde")}
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <a href="mailto:careers@cehpoint.co.in?subject=AI Agent Intern Application — [Your Name]" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="px-8 py-4 rounded-xl text-lg font-semibold inline-flex items-center">
                  {t("pages.pgInterns.applyAi")}
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
            <p className="text-muted-foreground text-sm mt-6">{t("pages.pgInterns.equalOpportunity")}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
