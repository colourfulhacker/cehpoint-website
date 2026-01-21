import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Code,
  Users,
  Target,
  Clock,
  MapPin,
  Mail,
  ExternalLink,
  AlertTriangle,
  Ban,
  CheckCircle2,
  XCircle,
} from "lucide-react";

import AIInterviewPopup from "@/components/careers/ai-interview-popup";
import JobPostingSchema from "@/components/seo/job-posting-schema";

export default function Careers() {
  const fullTimeJobs = [
    {
      title: "Senior Cybersecurity Engineer",
      department: "Security",
      location: "Remote/Hybrid",
      salary: "₹60,000/month",
      type: "Full-time",
      description:
        "Lead cybersecurity initiatives and develop secure software solutions for enterprise clients.",
      responsibilities: [
        "Design and implement robust security frameworks",
        "Conduct security audits and vulnerability assessments",
        "Develop secure coding standards and practices",
        "Lead incident response and threat analysis",
        "Mentor junior security team members",
      ],
      requirements: [
        "5+ years experience in cybersecurity",
        "Expert knowledge of security frameworks (OWASP, NIST)",
        "Experience with penetration testing and vulnerability assessment",
        "Strong knowledge of cryptography and secure coding",
        "Relevant certifications (CISSP, CEH, OSCP preferred)",
      ],
    },
    {
      title: "Secure Software Developer",
      department: "Development",
      location: "Remote/Hybrid",
      salary: "₹60,000/month",
      type: "Full-time",
      description:
        "Build secure, scalable applications with focus on security-first development practices.",
      responsibilities: [
        "Develop secure web applications using modern frameworks",
        "Implement security controls and secure coding practices",
        "Perform code reviews with security focus",
        "Integrate security testing into CI/CD pipelines",
        "Collaborate with security team on threat modeling",
      ],
      requirements: [
        "4+ years experience in secure software development",
        "Proficiency in React, Node.js, and modern web technologies",
        "Strong understanding of web security (XSS, CSRF, SQL injection)",
        "Experience with secure authentication and authorization",
        "Knowledge of DevSecOps practices and tools",
      ],
    },
    {
      title: "DevSecOps Engineer",
      department: "DevOps & Security",
      location: "Remote/Hybrid",
      salary: "₹60,000/month",
      type: "Full-time",
      description:
        "Integrate security practices into development and operations workflows.",
      responsibilities: [
        "Build and maintain secure CI/CD pipelines",
        "Implement infrastructure security and monitoring",
        "Automate security testing and compliance checks",
        "Manage cloud security configurations",
        "Develop security automation tools and scripts",
      ],
      requirements: [
        "3+ years experience in DevOps with security focus",
        "Expertise in AWS/Azure cloud security",
        "Experience with containerization and orchestration security",
        "Knowledge of infrastructure as code (Terraform, CloudFormation)",

        "Familiarity with security scanning tools and SAST/DAST",
      ],
    },
  ];

  const internships = [
    {
      title: "Cybersecurity Intern",
      department: "Security",
      duration: "3-6 months",
      stipend: "Up to ₹15,000/month",
      description:
        "Learn cybersecurity fundamentals while working on real security projects.",
      responsibilities: [
        "Assist in security assessments and vulnerability scanning",
        "Support incident response activities",
        "Research emerging security threats and technologies",
        "Help maintain security documentation",
        "Participate in security awareness programs",
      ],
      requirements: [
        "Currently pursuing degree in Computer Science/IT/Cybersecurity",
        "Basic knowledge of networking and security concepts",
        "Familiarity with security tools (Nmap, Wireshark, etc.)",
        "Strong analytical and problem-solving skills",
        "Eagerness to learn and grow in cybersecurity",
      ],
    },
    {
      title: "SDE Intern (Software Development Engineer)",
      department: "Development",
      duration: "3-6 months",
      stipend: "Up to ₹15,000/month",
      description:
        "Work on Next.js projects and gain hands-on development experience with modern tech stacks. We focus on practical technology skills, not DSA problems.",
      responsibilities: [
        "Develop applications using Next.js and modern React patterns",
        "Build mobile applications with Flutter/Firebase or React Native",
        "Work with backend technologies including Node.js and Laravel",
        "Implement Firebase integration for real-time features",
        "Collaborate on MERN stack projects and migrations to Next.js",
        "Participate in code reviews and agile development processes",
      ],
      requirements: [
        "Currently pursuing degree in Computer Science/IT",
        "Must have knowledge in one or more: Flutter + Firebase, Kotlin + Firebase, MERN stack + Firebase, React Native, or Laravel",
        "MERN developers willing to learn and migrate to Next.js are welcome",
        "Understanding of modern web/mobile development practices",
        "Experience with Firebase for backend services",
        "Java-only developers need not apply - we require the above technology stacks",
        "Want to learn? Prepare with our free organized course: https://ai-skill-enhancement-and-job-readiness.cehpoint.co.in/",
        "Good communication and eagerness to work with cutting-edge technologies",
      ],
    },
  ];

  const policies = [
    {
      title: "Performance-Based Compensation",
      description:
        "All internship stipends are performance-based. Exceptional work is rewarded with higher compensation up to ₹15,000/month.",
    },
    {
      title: "Payment Transparency",
      description:
        "If an employee or intern fails to deliver committed work or meet quality standards, we reserve the right to adjust or decline payment for that specific deliverable.",
    },
    {
      title: "Pre-Placement Offer (PPO)",
      description:
        "Outstanding interns who demonstrate exceptional performance, technical skills, and cultural fit will be eligible for a Pre-Placement Offer worth ₹6 LPA upon successful completion of their internship.",
    },
    {
      title: "Professional Growth",
      description:
        "We provide mentorship, training, and career development opportunities to help our team members grow professionally and advance their careers.",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <AIInterviewPopup />

      {/* JobPosting Structured Data for Full-Time Positions */}
      {fullTimeJobs.map((job) => (
        <JobPostingSchema
          key={job.title}
          title={job.title}
          description={job.description}
          department={job.department}
          location={job.location}
          employmentType="FULL_TIME"
          salary={{
            currency: "INR",
            value: 720000, // ₹60,000/month = ₹720,000/year
            unitText: "YEAR",
          }}
          datePosted="2025-01-01"
          validThrough="2025-12-31"
          responsibilities={job.responsibilities}
          requirements={job.requirements}
          applicationUrl="http://interview-ai.cehpoint.co.in"
        />
      ))}

      {/* JobPosting Structured Data for Internships */}
      {internships.map((internship) => (
        <JobPostingSchema
          key={internship.title}
          title={internship.title}
          description={internship.description}
          department={internship.department}
          location="Remote/Hybrid"
          employmentType="INTERN"
          salary={{
            currency: "INR",
            value: 180000, // Up to ₹15,000/month = ₹180,000/year
            unitText: "YEAR",
          }}
          datePosted="2025-01-01"
          validThrough="2025-12-31"
          responsibilities={internship.responsibilities}
          requirements={internship.requirements}
          applicationUrl="https://internlink.cehpoint.co.in/"
        />
      ))}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Badge variant="secondary" className="mb-4">
              <Users className="w-4 h-4 mr-2" />
              Join Our Team
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
              Build Your Career in Cybersecurity
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
              Join our innovative team and work on cutting-edge security
              solutions. We offer competitive compensation, flexible work
              arrangements, and exceptional growth opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Full-Time Opportunities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Full-Time Opportunities
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Permanent positions with competitive salary of ₹60,000/month and
              comprehensive benefits
            </p>
          </motion.div>

          <div className="grid gap-8">
            {fullTimeJobs.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl">{job.title}</CardTitle>
                        <CardDescription className="text-lg mt-2">
                          {job.description}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <Badge variant="default" className="mb-2">
                          {job.type}
                        </Badge>
                        <p className="font-semibold text-lg">{job.salary}</p>
                        <p className="text-sm text-foreground/70 flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                              <span className="text-foreground/70">
                                {resp}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0" />
                              <span className="text-foreground/70">
                                {req}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t">
                      <Button asChild className="w-full md:w-auto">
                        <a href="http://interview-ai.cehpoint.co.in">
                          <Mail className="w-4 h-4 mr-2" />
                          Apply Now
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Marketing & Business Development Opportunities */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Marketing & Business Development Opportunities
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
              Join our growth team and help expand Cehpoint's reach across multiple sectors.
            </p>
            <Button size="lg" asChild>
              <a
                href="https://marketing-jobs.cehpoint.co.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Target className="w-5 h-5 mr-2" />
                View Marketing Opportunities
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
      {/* Internship Opportunities */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Internship Opportunities
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Performance-based internships with stipends up to ₹15,000/month
              and PPO opportunities worth ₹6 LPA
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {internships.map((internship, index) => (
              <motion.div
                key={internship.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">
                          {internship.title}
                        </CardTitle>
                        <CardDescription className="mt-2">
                          {internship.description}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="mb-2">
                          {internship.duration}
                        </Badge>
                        <p className="font-semibold">{internship.stipend}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">What You'll Do</h4>
                        <ul className="space-y-1">
                          {internship.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                              <span className="text-sm text-foreground/70">
                                {resp}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">
                          What We're Looking For
                        </h4>
                        <ul className="space-y-1">
                          {internship.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-2 flex-shrink-0" />
                              <span className="text-sm text-foreground/70">
                                {req}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6 pt-4 border-t">
                      <Button asChild className="w-full">
                        <a
                          href="https://internlink.cehpoint.co.in/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Apply for Internship
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Policies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Policies & Benefits
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Transparent policies that ensure fairness and growth for all team
              members
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {policies.map((policy, index) => (
              <motion.div
                key={policy.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Shield className="w-5 h-5 mr-2 text-primary" />
                      {policy.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/70">
                      {policy.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* The Brutal Truth Section */}
      <section className="py-24 bg-red-50 dark:bg-red-950/10 border-t border-red-100 dark:border-red-900/30 overflow-hidden relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center p-4 bg-red-100 dark:bg-red-900/30 rounded-full mb-6">
              <AlertTriangle className="w-12 h-12 text-red-600 dark:text-red-500" />
            </div>

            <h2 className="text-3xl md:text-5xl font-black mb-6 text-red-700 dark:text-red-500 uppercase tracking-tight">
              We Are a “Bad Company”
            </h2>
            <h3 className="text-xl md:text-2xl font-bold mb-8 text-foreground/80">
              For Anyone Who Puts Our Clients at Risk
            </h3>

            <div className="max-w-3xl mx-auto text-lg leading-relaxed text-foreground/70 space-y-4">
              <p className="font-medium text-foreground">
                We would like to be very clear and very honest.
              </p>
              <p>
                We win clients through hard work, long sales cycles, trust, and delivery promises.
                <br className="hidden md:block" />
                <span className="font-bold text-red-600 dark:text-red-400"> Not shortcuts. Not cheating. Not fake skills.</span>
              </p>
              <p className="font-semibold text-lg pt-2">So yes, we openly admit:</p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl p-8 shadow-xl border-t-4 border-red-500 hover:shadow-2xl transition-all"
            >
              <h4 className="text-xl font-bold mb-6 flex items-center text-red-600 dark:text-red-500">
                <Ban className="w-6 h-6 mr-3 flex-shrink-0" />
                We will choose to be bad to you if:
              </h4>
              <ul className="space-y-4">
                {[
                  "You cheat during interviews or bypass AI screening using external help",
                  "You pass assessments unethically and misrepresent your capability",
                  "You accept client-facing work without the skill or seriousness to deliver",
                  "You respond to deadlines with excuses instead of outcomes",
                  "You compromise quality that directly affects our clients"
                ].map((item, i) => (
                  <li key={i} className="flex items-start group">
                    <XCircle className="w-5 h-5 mr-3 text-red-400 mt-0.5 flex-shrink-0 group-hover:text-red-600 transition-colors" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl p-8 shadow-xl border-t-4 border-slate-600 hover:shadow-2xl transition-all"
            >
              <h4 className="text-xl font-bold mb-6 flex items-center text-foreground">
                <Shield className="w-6 h-6 mr-3 flex-shrink-0" />
                If any of the above happens, we will:
              </h4>
              <ul className="space-y-4">
                {[
                  "Decline or reduce payments",
                  "Cancel internships or engagements",
                  "Withdraw benefits and certificates",
                  "Protect our clients first, always"
                ].map((item, i) => (
                  <li key={i} className="flex items-start group">
                    <CheckCircle2 className="w-5 h-5 mr-3 text-slate-400 mt-0.5 flex-shrink-0 group-hover:text-slate-600 transition-colors" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-red-50 to-slate-50 dark:from-red-950/20 dark:to-slate-900/20 rounded-3xl p-8 md:p-12 text-center border border-red-100 dark:border-red-900/30"
          >
            <div className="max-w-3xl mx-auto space-y-8">
              <div>
                <h4 className="text-xl font-semibold mb-6 text-foreground/70">And when that happens, the pattern is familiar:</h4>
                <div className="flex flex-wrap justify-center gap-3">
                  {["Performance stops.", "Accountability disappears.", "Anonymous reviews appear."].map((text, i) => (
                    <span key={i} className="bg-background px-4 py-2 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 font-mono text-red-600 dark:text-red-400 text-sm font-medium">
                      {text}
                    </span>
                  ))}
                </div>
              </div>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-red-200 dark:via-red-800 to-transparent" />

              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-black uppercase text-foreground">
                  Let us expose ourselves clearly:
                </h3>
                <p className="text-xl md:text-2xl font-bold text-red-600 dark:text-red-500">
                  We are a bad company for people who endanger client trust.
                </p>
                <p className="text-lg text-foreground/80 font-medium">
                  We will not reward dishonesty, low effort, or unethical behavior.
                  <br className="hidden sm:block" />
                  We will not sacrifice client delivery to keep everyone “happy.”
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Join Our Team?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
              Take the next step in your cybersecurity career. Apply today and
              become part of our innovative team building the future of secure
              technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="mailto:hr@cehpoint.co.in?subject=Career Inquiry&body=Hello,%0A%0AI am interested in career opportunities at Cehpoint. Please let me know about current openings.%0A%0AThank you.">
                  Contact HR Team
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <a
                  href="https://internlink.cehpoint.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply for Internship
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
