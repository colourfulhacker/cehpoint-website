```typescript
import {
  SiOpenai, SiGooglecloud, SiAnthropic, SiLangchain, SiHuggingface,
  SiTensorflow, SiPytorch, SiScikitlearn, SiKeras,
  SiMlflow, SiAwslambda, SiDatabricks,
  SiPrometheus, SiGrafana, SiDatadog,
  SiBurpsuite, SiOwasp, SiKalilinux, SiWireshark,
  SiSplunk, SiElastic, SiPaloaltonetworks,
  SiFortinet, SiCisco,
  SiReact, SiNextdotjs, SiTypescript, SiVite, SiTailwindcss, SiVuedotjs, SiSvelte,
  SiNodedotjs, SiExpress, SiFastapi, SiGo, SiNestjs,
  SiPostgresql, SiMongodb, SiRedis, SiPrisma,
  SiGraphql, SiSocketdotio, SiJest, SiCypress, SiEslint, SiPrettier,
  SiVercel, SiAmazon, SiDocker, SiKubernetes, SiGithubactions, SiTerraform,
  SiShopify, SiWoo, SiMagento, SiStripe, SiPaypal, SiSquare,
  SiGoogleanalytics, SiMixpanel,
  SiCloudflare, SiFastly, SiHubspot, SiMailchimp,
  SiReact as SiReactNative, SiFlutter, SiExpo, SiSwift, SiKotlin, SiFirebase, SiSupabase
} from "react-icons/si";
import { FaRobot, FaShieldAlt, FaCode, FaMobileAlt, FaShoppingCart } from "react-icons/fa";
import { LucideProps, Layers } from "lucide-react";
import React from "react";

// Default fallback icon
import { Zap } from "lucide-react";

export const TechnologyIcons: Record<string, React.ElementType> = {
  // AI & ML
  "OpenAI GPT-4": SiOpenai,
  "Google Gemini": SiGooglecloud,
  "Anthropic Claude": SiAnthropic,
  "LangChain": SiLangchain,
  "LlamaIndex": FaRobot, // Fallback
  "HuggingFace Transformers": SiHuggingface,
  "Pinecone": FaRobot, // Fallback
  "Weaviate": FaRobot, // Fallback
  "TensorFlow": SiTensorflow,
  "PyTorch": SiPytorch,
  "Scikit-learn": SiScikitlearn,
  "Keras": SiKeras,
  "MLflow": SiMlflow,
  "Kubeflow": Layers, // Fallback
  "AWS SageMaker": SiAmazon,
  "Google Vertex AI": SiGooglecloud,
  "Azure Machine Learning": FaRobot, // Fallback
  "Databricks": SiDatabricks,
  "Prometheus": SiPrometheus,
  "Grafana": SiGrafana,
  "DataDog": SiDatadog,

  // Cybersecurity
  "Burp Suite Pro": SiBurpsuite,
  "OWASP ZAP": SiOwasp,
  "Metasploit": SiKalilinux, // Representing Exploitation
  "Wireshark": SiWireshark,
  "Splunk Enterprise Security": SiSplunk,
  "ELK Stack": SiElastic,
  "CrowdStrike Falcon": FaShieldAlt, // Fallback
  "Palo Alto Cortex XDR": SiPaloaltonetworks,
  "Microsoft Defender": FaShieldAlt, // Fallback
  "Fortinet FortiGate": SiFortinet,
  "Cisco Firepower": SiCisco,
  "Cloudflare": SiCloudflare,

  // Web Development
  "React 18": SiReact,
  "Next.js 14": SiNextdotjs,
  "TypeScript": SiTypescript,
  "Vite": SiVite,
  "Tailwind CSS": SiTailwindcss,
  "Vue.js 3": SiVuedotjs,
  "Svelte": SiSvelte,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "Fastify": FaCode,
  "Python FastAPI": SiFastapi,
  "Go Gin": SiGo,
  "NestJS": SiNestjs,
  "PostgreSQL": SiPostgresql,
  "MongoDB": SiMongodb,
  "Redis": SiRedis,
  "Neon": SiPostgresql,
  "Prisma": SiPrisma,
  "GraphQL": SiGraphql,
  "Socket.io": SiSocketdotio,
  "Jest": SiJest,
  "Cypress": SiCypress,
  "ESLint": SiEslint,
  "Prettier": SiPrettier,
  "Vercel": SiVercel,
  "AWS": SiAmazon,
  "Docker": SiDocker,
  "Kubernetes": SiKubernetes,
  "GitHub Actions": SiGithubactions,
  "Terraform": SiTerraform,

  // Ecommerce
  "Shopify Plus": SiShopify,
  "WooCommerce": SiWoo,
  "Magento": SiMagento,
  "Medusa": FaShoppingCart,
  "Stripe": SiStripe,
  "PayPal": SiPaypal,
  "Square": SiSquare,
  "Plaid": FaShoppingCart, // Fallback
  "Google Analytics 4": SiGoogleanalytics,
  "Mixpanel": SiMixpanel,
  "Segment": Layers, // Fallback
  "Hotjar": Layers, // Fallback
  "AWS CloudFront": SiAmazon,
  "HubSpot": SiHubspot,
  "Mailchimp": SiMailchimp,

  // Mobile
  "React Native": SiReactNative,
  "Flutter": SiFlutter,
  "Expo": SiExpo,
  "Swift": SiSwift,
  "SwiftUI": SiSwift,
  "Kotlin": SiKotlin,
  "Jetpack Compose": FaMobileAlt,
  "Firebase": SiFirebase,
  "Supabase": SiSupabase,
  "AWS Amplify": SiAmazon,
  "FCM": SiFirebase,
};

export function getTechIcon(toolName: string) {
  return TechnologyIcons[toolName] || Zap;
}
```
