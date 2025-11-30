import Hero from "@/components/sections/hero";
import IndustrySolutions from "@/components/sections/industry-solutions";
import TechStack from "@/components/sections/tech-stack";
import ProcessWorkflow from "@/components/sections/process-workflow";
import AISolutions from "@/components/sections/ai-solutions";
import WhyChooseUs from "@/components/sections/why-choose-us";
import DemoProcess from "@/components/sections/demo-process";
import EngagementModel from "@/components/sections/engagement-model";
import ProjectCostEstimator from "@/components/calculators/project-cost-estimator";
import PortfolioCareers from "@/components/sections/portfolio-careers";
import SEO from "@/components/seo";

export default function Home() {
  return (
    <div className="pt-[105px]" data-testid="home-page">
      <SEO
        title="Home"
        description="Cehpoint is a leading IT consultancy offering enterprise outsourcing, custom software development, AI solutions, and digital transformation services."
      />
      <Hero />
      <IndustrySolutions />
      <TechStack />
      <AISolutions />
      <WhyChooseUs />
      <ProcessWorkflow />
      <DemoProcess />
      <EngagementModel />
      <ProjectCostEstimator />
      <PortfolioCareers />
    </div>
  );
}
