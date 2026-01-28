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
import OrganizationSchema from "@/components/seo/organization-schema";
import WebSiteSchema from "@/components/seo/website-schema";
import LocalBusinessSchema from "@/components/seo/local-business-schema";
import BreadcrumbSchema from "@/components/seo/breadcrumb-schema";

export default function Home() {
  return (
    <div className="" data-testid="home-page">
      <SEO
        title="Home"
        description="Cehpoint is a leading IT consultancy offering enterprise outsourcing, custom software development, AI solutions, cybersecurity, and digital transformation services. Partner with us to accelerate innovation and drive business growth."
        keywords={["IT Consultancy", "Enterprise Outsourcing", "Custom Software Development", "AI Solutions", "Digital Transformation", "Cloud Services", "Agile Development", "Tech Innovation", "Cybersecurity", "Software Company India"]}
        url="https://www.cehpoint.co.in/"
        canonical="https://www.cehpoint.co.in/"
      />

      {/* Structured Data Schemas */}
      <OrganizationSchema />
      <WebSiteSchema />
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.cehpoint.co.in/" }
        ]}
      />

      <main id="main-content">
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
      </main>
    </div>
  );
}
