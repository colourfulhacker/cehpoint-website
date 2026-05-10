export interface AutomationTask {
    name: string;
    beforeAI: string;
    afterAI: string;
}

export interface FocusArea {
    id: string;
    name: string;
    automations: AutomationTask[];
    timeSaved: string; // e.g., "15-20 hours/week"
    costEstimate: string; // e.g., "₹15,000 - ₹35,000"
    businessImpact: string;
}

export interface BusinessFunctionData {
    id: string;
    name: string;
    focusAreas: FocusArea[];
}

export const automationServicesData: BusinessFunctionData[] = [
    {
        id: "customer-support",
        name: "Customer Support & Success",
        focusAreas: [
            {
                id: "query-resolution",
                name: "Automated Ticket & Query Resolution",
                timeSaved: "30-50 hours/week",
                costEstimate: "₹20,000 - ₹45,000",
                businessImpact: "Resolve 80% of tier-1 customer queries instantly, 24/7.",
                automations: [
                    {
                        name: "Intelligent Chatbots",
                        beforeAI: "Agents manually answer repetitive FAQs and order status queries.",
                        afterAI: "AI bot instantly resolves over 75% of routine questions across WhatsApp and website.",
                    },
                    {
                        name: "Ticket Routing",
                        beforeAI: "Manual reading and assigning of complex support tickets.",
                        afterAI: "NLP models categorize and route tickets to the right expert instantly.",
                    }
                ]
            },
            {
                id: "customer-onboarding",
                name: "Client Onboarding",
                timeSaved: "15-25 hours/week",
                costEstimate: "₹25,000 - ₹60,000",
                businessImpact: "Reduce time-to-value for new clients from weeks to hours.",
                automations: [
                    {
                        name: "Automated Document Verification",
                        beforeAI: "Staff manually checks uploaded IDs and forms.",
                        afterAI: "Computer vision verifies IDs and extracts data automatically.",
                    }
                ]
            }
        ]
    },
    {
        id: "sales-marketing",
        name: "Sales & Marketing",
        focusAreas: [
            {
                id: "lead-generation",
                name: "Lead Qualification & Outreach",
                timeSaved: "25-40 hours/week",
                costEstimate: "₹30,000 - ₹70,000",
                businessImpact: "Increase sales conversions by engaging only hot, pre-qualified leads.",
                automations: [
                    {
                        name: "24/7 AI Sales Agent",
                        beforeAI: "Missing leads outside of business hours or taking hours to respond.",
                        afterAI: "Bot pre-qualifies budgets, answers product questions, and books meetings 24/7.",
                    },
                    {
                        name: "Personalized Outreach",
                        beforeAI: "Sending generic mass emails with low open rates.",
                        afterAI: "AI generates hyper-personalized cold emails based on prospect LinkedIn data.",
                    }
                ]
            },
            {
                id: "content-creation",
                name: "Content Generation & SEO",
                timeSaved: "20-30 hours/week",
                costEstimate: "₹15,000 - ₹40,000",
                businessImpact: "Scale content production 10x without sacrificing brand voice.",
                automations: [
                    {
                        name: "Blog & Social Media Engine",
                        beforeAI: "Writing posts from scratch every week.",
                        afterAI: "LLMs draft SEO-optimized articles and social copy based on core industry keywords.",
                    }
                ]
            }
        ]
    },
    {
        id: "finance-accounting",
        name: "Finance & Accounting",
        focusAreas: [
            {
                id: "invoice-processing",
                name: "Accounts Payable Automation",
                timeSaved: "15-25 hours/week",
                costEstimate: "₹18,000 - ₹45,000",
                businessImpact: "Eliminates manual data entry errors and speeds up vendor payments.",
                automations: [
                    {
                        name: "Automated Data Extraction (OCR)",
                        beforeAI: "Accountants manually type invoice details into ERPs.",
                        afterAI: "AI instantly extracts line items, amounts, and tax info with 99% accuracy.",
                    },
                    {
                        name: "Expense Categorization",
                        beforeAI: "Manually deciding the ledger category for each receipt.",
                        afterAI: "Machine learning auto-categorizes expenses based on historical data.",
                    }
                ]
            },
            {
                id: "reconciliation",
                name: "Bank Reconciliation",
                timeSaved: "10-15 hours/week",
                costEstimate: "₹20,000 - ₹50,000",
                businessImpact: "Closes the books days faster every month with zero human errors.",
                automations: [
                    {
                        name: "Transaction Matching",
                        beforeAI: "Staring at two screens to match bank statements with ledger entries.",
                        afterAI: "AI auto-matches 90%+ transactions and highlights only the exceptions.",
                    }
                ]
            }
        ]
    },
    {
        id: "human-resources",
        name: "Human Resources & Recruitment",
        focusAreas: [
            {
                id: "recruitment",
                name: "Candidate Screening & Scheduling",
                timeSaved: "20-40 hours/week",
                costEstimate: "₹25,000 - ₹60,000",
                businessImpact: "Cut time-to-hire in half while finding higher-quality candidates.",
                automations: [
                    {
                        name: "Resume Parsing & Ranking",
                        beforeAI: "Recruiters manually read hundreds of unqualified resumes.",
                        afterAI: "AI scores resumes against the job description and surfaces the top 10%.",
                    },
                    {
                        name: "Interview Scheduling Bot",
                        beforeAI: "Playing email ping-pong to find a mutual interview time.",
                        afterAI: "AI connects with calendars and books interviews with candidates autonomously.",
                    }
                ]
            },
            {
                id: "employee-support",
                name: "Internal Helpdesk",
                timeSaved: "10-15 hours/week",
                costEstimate: "₹15,000 - ₹30,000",
                businessImpact: "Provide immediate responses to HR policy and leave queries.",
                automations: [
                    {
                        name: "HR Policy Assistant",
                        beforeAI: "HR reps answering the same questions about PTO and benefits.",
                        afterAI: "Internal chatbot answers policy questions instantly by querying the company handbook.",
                    }
                ]
            }
        ]
    },
    {
        id: "operations",
        name: "Operations & Supply Chain",
        focusAreas: [
            {
                id: "inventory",
                name: "Inventory & Forecasting",
                timeSaved: "15-25 hours/week",
                costEstimate: "₹30,000 - ₹80,000",
                businessImpact: "Maximize profit margins and prevent costly out-of-stock scenarios.",
                automations: [
                    {
                        name: "Demand Prediction",
                        beforeAI: "Guessing next month's stock requirements based on basic spreadsheets.",
                        afterAI: "AI models predict exact stock quantity needed based on seasonality and external trends.",
                    },
                    {
                        name: "Automated Reordering",
                        beforeAI: "Manual tracking of minimum stock thresholds.",
                        afterAI: "System automatically triggers purchase orders when stock hits predicted minimums.",
                    }
                ]
            }
        ]
    }
];
