import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Rocket, 
  Briefcase, 
  Timer, 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Globe, 
  Award, 
  ArrowRight,
  Zap,
  Code
} from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import SEO from "@/components/seo";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function AIInRealLife() {
  const courseSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Artificial Intelligence in Real Life (AI-IRL)",
    "description": "A 3-month comprehensive AI training program for professionals, entrepreneurs, and students.",
    "provider": {
      "@type": "Organization",
      "name": "Cehpoint",
      "sameAs": "https://www.cehpoint.co.in"
    },
    "courseCode": "AI-IRL-001",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "Online/Hybrid",
      "duration": "P3M",
      "instructor": {
        "@type": "Person",
        "name": "Expert AI Practitioners"
      }
    }
  });

  const modules = [
    {
      title: "Foundations & GenAI",
      description: "Master LLMs, Prompt Engineering, and AI-driven content creation.",
      icon: <Brain className="w-6 h-6 text-primary" />,
      topics: ["LLM Fundamentals", "Advanced Prompting", "Image Generation", "AI for Productivity"]
    },
    {
      title: "Business Automation",
      description: "Build custom AI agents and automate repetitive business workflows.",
      icon: <Zap className="w-6 h-6 text-primary" />,
      topics: ["AI Agents (AutoGPT/BabyAGI)", "Workflow Automation", "No-code AI Tools", "CRM Integration"]
    },
    {
      title: "Data Intelligence",
      description: "Leverage AI for predictive analytics and deep business insights.",
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      topics: ["Predictive Modeling", "Fine-tuning Models", "RAG Systems", "Data Visualization"]
    },
    {
      title: "Capstone & Career",
      description: "Deploy a real-world AI project and optimize your professional portfolio.",
      icon: <Rocket className="w-6 h-6 text-primary" />,
      topics: ["Final Project", "AI Ethics", "Portfolio Building", "Job Assistance"]
    }
  ];

  const weeklyBreakdown = [
    { week: "01-03", title: "The GenAI Specialist", focus: "Prompt Engineering, ChatGPT Plus, Claude 3.5, Midjourney" },
    { week: "04-06", title: "Automation Architect", focus: "Make.com, Zapier AI, Custom GPTs, Autonomous Agents" },
    { week: "07-09", title: "Intelligence Engineer", focus: "Pinecone, LangChain, RAG Setup, Python for AI Basics" },
    { week: "10-12", title: "Launch Phase", focus: "Portfolio Deployment, Client Pitching, AI Ethics & Security" }
  ];

  return (
    <div className="pt-36 min-h-screen bg-background text-foreground" data-testid="ai-irl-page">
      <SEO
        title="AI in Real Life Training | 3-Month Professional AI Course | Cehpoint"
        description="Master Artificial Intelligence with our outcome-oriented 3-month training program. Designed for professionals and entrepreneurs to drive real business value with AI."
        keywords={["AI Training India", "Artificial Intelligence Course", "Generative AI Training", "AI for Professionals", "Prompt Engineering Course", "AI Automation Training"]}
        schema={courseSchema}
      />

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] bg-[size:60px_60px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full glass border-primary/20 mb-8"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider flex items-center gap-2">
              Next Batch Starting Soon
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight"
          >
            Artificial Intelligence <br /> 
            <span className="text-gradient">In Real Life</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Stop learning theory. Start building reality. A 3-month outcome-oriented program designed for those who want to lead the AI revolution.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button 
              size="lg"
              className="btn-primary px-10 py-7 text-lg rounded-2xl flex items-center gap-3 hover-glow transition-all duration-300"
              onClick={() => window.open("https://wa.me/919091156095?text=Hi%2C%20I'm%20interested%20in%20the%20AI%20in%20Real%20Life%203-month%20training.%20Please%20share%20the%20details.", "_blank")}
            >
              Secure Your Spot <ArrowRight className="w-5 h-5" />
            </Button>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="text-lg font-semibold border-primary/20 hover:bg-primary/10 hover:text-primary hover:border-primary/40 px-10 py-7 rounded-2xl transition-all duration-300"
                >
                  View Brochure
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl glass-intense border-white/10 p-0 overflow-hidden bg-background/95 backdrop-blur-2xl max-h-[90vh] overflow-y-auto">
                <div className="relative">
                  {/* Brochure Header */}
                  <div className="bg-primary/20 p-12 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]" />
                    <DialogHeader className="relative z-10">
                      <DialogTitle className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight">
                         AI In <span className="text-gradient">Real Life</span>
                      </DialogTitle>
                      <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                        A 3-Month Transformative Journey into Applied Artificial Intelligence
                      </p>
                    </DialogHeader>
                  </div>

                  {/* Brochure Body */}
                  <div className="p-8 md:p-12 space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="space-y-6">
                        <h3 className="text-2xl font-bold flex items-center gap-2">
                          <CheckCircle className="w-6 h-6 text-primary" /> Core Program Stats
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 rounded-2xl bg-secondary/30 border border-white/5">
                            <div className="text-3xl font-bold text-primary">12</div>
                            <div className="text-sm opacity-60">Intensive Weeks</div>
                          </div>
                          <div className="p-4 rounded-2xl bg-secondary/30 border border-white/5">
                            <div className="text-3xl font-bold text-primary">40+</div>
                            <div className="text-sm opacity-60">AI Tools Mastered</div>
                          </div>
                          <div className="p-4 rounded-2xl bg-secondary/30 border border-white/5">
                            <div className="text-3xl font-bold text-primary">5+</div>
                            <div className="text-sm opacity-60">Real Projects</div>
                          </div>
                          <div className="p-4 rounded-2xl bg-secondary/30 border border-white/5">
                            <div className="text-3xl font-bold text-primary">∞</div>
                            <div className="text-sm opacity-60">Community Access</div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <h3 className="text-2xl font-bold flex items-center gap-2">
                          <Rocket className="w-6 h-6 text-primary" /> Key Outcomes
                        </h3>
                        <ul className="space-y-4">
                          {[
                            "Build Your Own AI SaaS in 30 Days",
                            "Automate 60% of Business Operations",
                            "Master Advanced Prompt Engineering",
                            "Generate High-End AI Visuals & Video",
                            "Deploy Production-Ready RAG Systems"
                          ].map((outcome, i) => (
                            <li key={i} className="flex items-center gap-3 text-foreground/80">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Enhanced Section: Weekly Breakdown */}
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold flex items-center gap-2 text-center md:text-left justify-center md:justify-start">
                        <Timer className="w-6 h-6 text-primary" /> The Curriculum Roadmap
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {weeklyBreakdown.map((item, idx) => (
                          <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors group">
                            <div className="text-primary font-bold mb-1">Week {item.week}</div>
                            <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                            <p className="text-sm text-foreground/60">{item.focus}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Enhanced Section: Tools */}
                    <div className="p-8 rounded-3xl bg-secondary/30 border border-white/5">
                      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <Code className="w-5 h-5 text-primary" /> Multi-Tool Ecosystem
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {["OpenAI", "Anthropic", "Midjourney", "Make.com", "Pinecone", "LangChain", "Cursor", "ElevenLabs", "Luma AI", "Stable Diffusion"].map((tool, i) => (
                          <span key={i} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-medium">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-8 rounded-[32px] bg-primary/5 border border-primary/20">
                      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-center md:text-left">
                          <h4 className="text-2xl font-bold mb-2">Ready to Start?</h4>
                          <p className="opacity-70">Enrollment is limited to 20 seats per batch.</p>
                        </div>
                        <Button 
                          onClick={() => window.open("https://wa.me/919091156095", "_blank")}
                          className="btn-primary px-8 py-6 rounded-xl text-lg font-bold"
                        >
                          Talk to Admission Expert
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-secondary/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Briefcase className="w-7 h-7" />, title: "Career Growth", desc: "Unlock high-paying AI-focused roles or supercharge your current position with advanced automation skills." },
              { icon: <TrendingUp className="w-7 h-7" />, title: "Productivity", desc: "Automate 40%+ of your daily tasks using custom AI tools and workflows built by you." },
              { icon: <Rocket className="w-7 h-7" />, title: "Entrepreneurship", desc: "Learn how to build and launch AI-powered products from scratch in less than 30 days." }
            ].map((prop, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="space-y-4 p-8 rounded-3xl glass border-white/5 hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  {prop.icon}
                </div>
                <h3 className="text-2xl font-bold">{prop.title}</h3>
                <p className="text-foreground/70 leading-relaxed">
                  {prop.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Curriculum */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.05),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              What You'll <span className="text-gradient">Master</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-foreground/70 max-w-2xl mx-auto"
            >
              Our 4-pillared approach ensures you go from AI amateur to Advanced Practitioner.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {modules.map((module, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <Card className="glass h-full border-white/5 hover:border-primary/30 transition-all duration-500 group overflow-hidden">
                  <CardContent className="p-8 relative">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                      {module.icon}
                    </div>
                    <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500 bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center">
                      {module.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{module.title}</h4>
                    <p className="text-foreground/70 text-sm mb-6 leading-relaxed">
                      {module.description}
                    </p>
                    <ul className="space-y-3">
                      {module.topics.map((topic, tIdx) => (
                        <li key={tIdx} className="flex items-center text-xs text-foreground/60">
                          <div className="w-1 h-1 rounded-full bg-primary/40 mr-2" /> {topic}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flexible Batches */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Built for <br /> Working Professionals</h2>
              <p className="text-xl opacity-90 mb-10 leading-relaxed">
                We understand your schedule. Our program offers multiple tracks to ensure you can learn without compromising your current commitments.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-2 rounded-lg mt-1"><Timer className="w-5 h-5" /></div>
                  <div>
                    <h4 className="text-xl font-bold">Weekday Evening Batch</h4>
                    <p className="opacity-80">Ideal for daily consistency after work hours.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-2 rounded-lg mt-1"><Timer className="w-5 h-5" /></div>
                  <div>
                    <h4 className="text-xl font-bold">Weekend Intensive</h4>
                    <p className="opacity-80">Deep dive sessions for busy leaders.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-intense p-10 rounded-3xl border-white/20">
              <h3 className="text-2xl font-bold mb-8 text-center underline decoration-primary underline-offset-8">Batch Availability</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="font-semibold">Morning Track</span>
                  <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold ring-1 ring-green-500/30">Filling Fast</span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="font-semibold">Evening Track</span>
                  <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold ring-1 ring-red-500/30">Last 3 Seats</span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="font-semibold">Weekend Track</span>
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold ring-1 ring-blue-500/30">Next Month</span>
                </div>
                
                <Button 
                  className="w-full bg-white text-primary hover:bg-white/90 py-7 text-lg font-bold rounded-2xl mt-4"
                  onClick={() => window.open("https://wa.me/919091156095?text=Hi%2C%20I'd%20like%20to%20enroll%20in%20the%20AI%20Training%20program.%20Please%20check%20seat%20availability%20for%20the%20evening%20batch.", "_blank")}
                >
                  Check Seat Availability
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification & Global Opportunity */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 text-primary mb-6">
            <Award className="w-8 h-8" />
            <span className="text-lg font-bold uppercase tracking-tighter">Globally Certified</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Step into the <span className="text-gradient">Global Market</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="p-8 rounded-3xl bg-secondary/10 border border-white/5">
              <Globe className="w-10 h-10 text-primary mx-auto mb-6" />
              <h4 className="text-xl font-bold mb-3">Remote Work</h4>
              <p className="text-foreground/70 text-sm">Work for global AI startups from anywhere.</p>
            </div>
            <div className="p-8 rounded-3xl bg-secondary/10 border border-white/5">
              <Users className="w-10 h-10 text-primary mx-auto mb-6" />
              <h4 className="text-xl font-bold mb-3">Consulting</h4>
              <p className="text-foreground/70 text-sm">Offer AI consulting services to SMEs globally.</p>
            </div>
            <div className="p-8 rounded-3xl bg-secondary/10 border border-white/5">
               <TrendingUp className="w-10 h-10 text-primary mx-auto mb-6" />
              <h4 className="text-xl font-bold mb-3">Growth</h4>
              <p className="text-foreground/70 text-sm">Scale your earnings with specialized AI expertise.</p>
            </div>
            <div className="p-8 rounded-3xl bg-secondary/10 border border-white/5">
               <CheckCircle className="w-10 h-10 text-primary mx-auto mb-6" />
              <h4 className="text-xl font-bold mb-3">Legacy</h4>
              <p className="text-foreground/70 text-sm">Stay ahead of the curve in a rapidly changing world.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(139,92,246,0.1),transparent_70%)]" />
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-secondary/10 p-16 rounded-[40px] border border-white/5 relative overflow-hidden group hover:border-primary/20 transition-all duration-500"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05),transparent_70%)]" />
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 relative z-10 leading-tight">Ready to <span className="text-gradient">Rewrite</span> <br /> Your Career?</h2>
          <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto relative z-10 leading-relaxed">
            Join the elite club of professionals using AI to define the future. Limited seats available for the upcoming cohort.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            <Button 
               size="lg"
               className="btn-primary px-12 py-8 text-xl rounded-2xl hover-glow transition-all duration-300"
               onClick={() => window.open("https://wa.me/919091156095?text=Hi%2C%20I'm%20ready%20to%20join%20the%20AI%20revolution.%20Send%20me%20the%20enrollment%20link.", "_blank")}
            >
              Enroll Now
            </Button>
            <Button 
               variant="outline" 
               size="lg"
               className="px-12 py-8 text-xl rounded-2xl border-primary/20 hover:bg-primary/10 hover:text-primary hover:border-primary/40 transition-all duration-300"
            >
              Request a Callback
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
