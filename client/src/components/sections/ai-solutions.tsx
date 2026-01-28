import { Brain, Bot, TrendingUp, Eye, Cpu, Shield, Target, Code, Sparkles, ArrowUpRight } from "lucide-react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"

// Premium Holographic Card Component
function AISolutionCard({ solution }: { solution: any }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      className="group relative rounded-3xl border border-white/5 bg-zinc-900/50 overflow-hidden hover:border-primary/30 transition-all duration-500"
      onMouseMove={handleMouseMove}
      data-testid={`ai-solution-${solution.title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      {/* Holographic Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(124, 58, 237, 0.1),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative p-8 h-full flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-500">
            <solution.icon className="w-6 h-6 text-zinc-400 group-hover:text-primary transition-colors" />
          </div>
          <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${solution.complexity === 'Expert' ? 'border-red-500/30 text-red-400 bg-red-500/10' :
              solution.complexity === 'Advanced' ? 'border-purple-500/30 text-purple-400 bg-purple-500/10' :
                'border-blue-500/30 text-blue-400 bg-blue-500/10'
            }`}>
            {solution.complexity}
          </div>
        </div>

        {/* Content */}
        <h3 className="font-display font-medium text-xl text-white mb-3 group-hover:text-primary-foreground transition-colors">
          {solution.title}
        </h3>
        <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6 group-hover:text-zinc-300 transition-colors">
          {solution.description}
        </p>

        {/* Features List (Compact) */}
        <div className="mt-auto space-y-3 pt-6 border-t border-white/5">
          <div className="flex flex-wrap gap-2 mb-4">
            {solution.features.slice(0, 3).map((feature: string, i: number) => (
              <span key={i} className="text-[10px] px-2 py-1 rounded-md bg-white/5 text-zinc-400 border border-white/5">
                {feature}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center text-primary/80">
              <Sparkles className="w-3 h-3 mr-1.5" />
              <span className="font-medium">{solution.benefits}</span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AISolutions() {
  const aiSolutions = [
    {
      icon: Brain,
      title: "Generative AI Integration",
      description: "Custom GPT models and neural networks architected for enterprise-scale content and decision automation.",
      features: ["LLM Fine-tuning", "RAG Pipelines", "Cognitive Agents"],
      benefits: "+40% Operational Efficiency",
      complexity: "Advanced",
    },
    {
      icon: Bot,
      title: "Intelligent Automation",
      description: "Autonomous agentic workflows that orchestrate complex business logic without human intervention.",
      features: ["Process Orchestration", "Decision Engines", "Self-Healing Workflows"],
      benefits: "60% Cost Reduction",
      complexity: "Intermediate",
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "High-dimensional forecasting models leveraging deep learning for market and operational foresight.",
      features: ["Time-series Forecasting", "Risk Modeling", "Demand Sensing"],
      benefits: "95% Forecast Accuracy",
      complexity: "Advanced",
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Edge-optimized visual intelligence for real-time quality assurance and biometric security.",
      features: ["Object Detection", "Visual QC", "Biometric Auth"],
      benefits: "Zero-Defect Manufacturing",
      complexity: "Expert",
    },
    {
      icon: Cpu,
      title: "Edge AI Processing",
      description: "Low-latency inference engines deployed on distributed edge infrastructure for instant responsiveness.",
      features: ["On-Device Training", "Tensor Optimization", "5G Integration"],
      benefits: "<10ms Latency",
      complexity: "Expert",
    },
    {
      icon: Shield,
      title: "AI Security Operations",
      description: "Real-time anomaly detection and automated threat neutralization using behavioral AI models.",
      features: ["Zero-Day Defense", "Fraud Detection", "Compliance AI"],
      benefits: "Proactive Defense",
      complexity: "Advanced",
    },
    {
      icon: Target,
      title: "Hyper-Personalization",
      description: "Real-time behavioral adaptation engines that curate unique user journeys at scale.",
      features: ["Dynamic UX", "Propensity Scoring", "User Cloning"],
      benefits: "3x Conversion Rate",
      complexity: "Intermediate",
    },
    {
      icon: Code,
      title: "Next-Gen DevTools",
      description: "AI-augmented development environments accelerating the software lifecycle from spec to deploy.",
      features: ["Code Synthesis", "Auto-Testing", "Arch. Validation"],
      benefits: "4x Dev Velocity",
      complexity: "Advanced",
    },
  ]

  return (
    <section id="ai-solutions" className="py-32 bg-black relative overflow-hidden" data-testid="ai-solutions-section">
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20">
          <h2 className="font-display font-medium text-5xl md:text-7xl mb-6 tracking-tight text-white leading-tight">
            Intelligence <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50">Architected.</span>
          </h2>
          <p className="text-xl text-zinc-400 font-light max-w-2xl leading-relaxed border-l-2 border-primary/20 pl-6">
            We move beyond simple chatbots to engineer cognitive architectures that redefine what's possible in your industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiSolutions.map((solution, index) => (
            <AISolutionCard key={index} solution={solution} />
          ))}
        </div>
      </div>
    </section>
  )
}
