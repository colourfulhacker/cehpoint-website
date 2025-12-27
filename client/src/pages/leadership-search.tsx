import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Mail, MapPin, Briefcase, X, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MultiSelect } from "@/components/ui/multi-select";

interface Leader {
    name: string;
    designation: string;
    email: string;
    country: string;
    department?: string;
}

const leadershipData: Leader[] = [
    // Executive Leadership & Strategy
    { name: "Jit Banerjee", designation: "CEO & Founder", email: "jit.banerjee@cehpoint.co.in", country: "India", department: "Executive Leadership & Strategy" },
    { name: "Amit Banerjee", designation: "Global Operations & Strategy Lead", email: "amit.banerjee@cehpoint.co.in", country: "United States", department: "Executive Leadership & Strategy" },
    { name: "Neha Sharma", designation: "Business Strategy & Market Expansion Lead", email: "neha.sharma@cehpoint.co.in", country: "United States", department: "Executive Leadership & Strategy" },
    { name: "Nirav Shah", designation: "Principal Product Architect – Global Platforms", email: "nirav.shah@cehpoint.co.in", country: "United States", department: "Executive Leadership & Strategy" },

    // Technology, Engineering & Innovation
    { name: "Kanai Shil", designation: "Tech Head & Senior Developer", email: "kanai.shil@cehpoint.co.in", country: "India", department: "Technology, Engineering & Innovation" },
    { name: "Tithi Banerjee", designation: "UI/UX Head", email: "tithi.banerjee@cehpoint.co.in", country: "India", department: "Technology, Engineering & Innovation" },
    { name: "Tushar Bhowal", designation: "Valo Developer", email: "tushar.bhowal@cehpoint.co.in", country: "India", department: "Technology, Engineering & Innovation" },
    { name: "Siddharth Jain", designation: "Zero-Trust Architecture & Threat Attribution Lead", email: "siddharth.jain@cehpoint.co.in", country: "Global", department: "Technology, Engineering & Innovation" },
    { name: "Sneha Kulkarni", designation: "Zero-Trust Experience & Privacy Engineering Lead", email: "sneha.kulkarni@cehpoint.co.in", country: "Global", department: "Technology, Engineering & Innovation" },
    { name: "Harshad Patil", designation: "Cloud-Native Security & Cybercrime Automation Lead", email: "harshad.patil@cehpoint.co.in", country: "Global", department: "Technology, Engineering & Innovation" },
    { name: "Pankaj Yadav", designation: "Secure API & OSINT Investigation Lead", email: "pankaj.yadav@cehpoint.co.in", country: "Global", department: "Technology, Engineering & Innovation" },
    { name: "Rina Ghosh", designation: "Quality Engineering & Forensic Image Specialist", email: "rina.ghosh@cehpoint.co.in", country: "Global", department: "Technology, Engineering & Innovation" },
    { name: "Ritika Shah", designation: "Secure Digital Strategy & Financial Fraud Lead", email: "ritika.shah@cehpoint.co.in", country: "Global", department: "Technology, Engineering & Innovation" },
    { name: "Ankit Srivastava", designation: "Secure Platform Engineering Lead", email: "ankit.srivastava@cehpoint.co.in", country: "United States", department: "Technology, Engineering & Innovation" },
    { name: "Naveen Reddy", designation: "Cloud Security & Infrastructure Automation Lead", email: "naveen.reddy@cehpoint.co.in", country: "United States", department: "Technology, Engineering & Innovation" },
    { name: "Aarohi Mehta", designation: "Global Cyber Innovation Program Director", email: "aarohi.mehta@cehpoint.co.in", country: "United States", department: "Technology, Engineering & Innovation" },
    { name: "Pallavi Joshi", designation: "AI-Driven Product Intelligence Lead", email: "pallavi.joshi@cehpoint.co.in", country: "United States", department: "Technology, Engineering & Innovation" },
    { name: "Sourav Mukherjee", designation: "Technology Delivery & Architecture Lead", email: "sourav.mukherjee@cehpoint.co.in", country: "United Kingdom", department: "Technology, Engineering & Innovation" },
    { name: "Jayesh Modi", designation: "Cloud Infrastructure & Services Lead", email: "jayesh.modi@cehpoint.co.in", country: "United Kingdom", department: "Technology, Engineering & Innovation" },
    { name: "Abhishek Tyagi", designation: "Threat Intelligence & SOC Operations Lead", email: "abhishek.tyagi@cehpoint.co.in", country: "United Kingdom", department: "Technology, Engineering & Innovation" },
    { name: "Neeraj Saxena", designation: "DevSecOps Enablement Lead", email: "neeraj.saxena@cehpoint.co.in", country: "United Kingdom", department: "Technology, Engineering & Innovation" },
    { name: "Isha Malhotra", designation: "Digital Forensics & Incident Response Lead", email: "isha.malhotra@cehpoint.co.in", country: "United Kingdom", department: "Technology, Engineering & Innovation" },
    { name: "Prashant Mishra", designation: "AI Research & Applied Intelligence Lead", email: "prashant.mishra@cehpoint.co.in", country: "Germany", department: "Technology, Engineering & Innovation" },
    { name: "Rohit Shetty", designation: "Cyber Risk Quantification & Advisory Lead", email: "rohit.shetty@cehpoint.co.in", country: "Germany", department: "Technology, Engineering & Innovation" },
    { name: "Anurag Mishra", designation: "AI Security & Model Risk Lead", email: "anurag.mishra@cehpoint.co.in", country: "Germany", department: "Technology, Engineering & Innovation" },
    { name: "Tanvi Gokhale", designation: "Privacy-First System Design Lead", email: "tanvi.gokhale@cehpoint.co.in", country: "Germany", department: "Technology, Engineering & Innovation" },
    { name: "Aditi Shelar", designation: "Secure Data Lifecycle Governance Lead", email: "aditi.shelar@cehpoint.co.in", country: "Germany", department: "Technology, Engineering & Innovation" },
    { name: "Neha Oberoi", designation: "Regulatory Intelligence Automation Lead", email: "neha.oberoi@cehpoint.co.in", country: "Germany", department: "Technology, Engineering & Innovation" },
    { name: "Arindam Chatterjee", designation: "Engineering Delivery Lead", email: "arindam.chatterjee@cehpoint.co.in", country: "Australia", department: "Technology, Engineering & Innovation" },
    { name: "Tejaswini Joshi", designation: "Innovation & Advanced Research Lead", email: "tejaswini.joshi@cehpoint.co.in", country: "Australia", department: "Technology, Engineering & Innovation" },
    { name: "Sachin Sawant", designation: "Platform Reliability & DevOps Lead", email: "sachin.sawant@cehpoint.co.in", country: "Australia", department: "Technology, Engineering & Innovation" },
    { name: "Prachi Patil", designation: "Resilient Platform Engineering Lead", email: "prachi.patil@cehpoint.co.in", country: "Australia", department: "Technology, Engineering & Innovation" },
    { name: "Sayali Deshpande", designation: "Secure Dev Experience & Tooling Lead", email: "sayali.deshpande@cehpoint.co.in", country: "Australia", department: "Technology, Engineering & Innovation" },
    { name: "Ishita Arora", designation: "Cloud Governance Automation Lead", email: "ishita.arora@cehpoint.co.in", country: "Australia", department: "Technology, Engineering & Innovation" },
    { name: "Mitali Bhosale", designation: "Autonomous Systems Validation Lead", email: "mitali.bhosale@cehpoint.co.in", country: "Australia", department: "Technology, Engineering & Innovation" },
    { name: "Rahul Kulkarni", designation: "Software Engineering Delivery Manager", email: "rahul.kulkarni@cehpoint.co.in", country: "Canada", department: "Technology, Engineering & Innovation" },
    { name: "Vinayak Shinde", designation: "Data Platforms & Advanced Analytics Lead", email: "vinayak.shinde@cehpoint.co.in", country: "Canada", department: "Technology, Engineering & Innovation" },
    { name: "Karthik Iyer", designation: "Data Engineering & Secure Analytics Lead", email: "karthik.iyer@cehpoint.co.in", country: "Canada", department: "Technology, Engineering & Innovation" },
    { name: "Aman Choudhary", designation: "Advanced Threat Detection Systems Lead", email: "aman.choudhary@cehpoint.co.in", country: "Canada", department: "Technology, Engineering & Innovation" },
    { name: "Divya Kulkarni", designation: "Security Automation & SOAR Lead", email: "divya.kulkarni@cehpoint.co.in", country: "Canada", department: "Technology, Engineering & Innovation" },
    { name: "Pooja Nair", designation: "Responsible AI Systems Governance Lead", email: "pooja.nair@cehpoint.co.in", country: "Canada", department: "Technology, Engineering & Innovation" },
    { name: "Rashmi Kulkarni", designation: "Predictive Cyber Analytics Lead", email: "rashmi.kulkarni@cehpoint.co.in", country: "Canada", department: "Technology, Engineering & Innovation" },
    { name: "Shreya Shah", designation: "Secure Data Monetization Strategy Lead", email: "shreya.shah@cehpoint.co.in", country: "Canada", department: "Technology, Engineering & Innovation" },
    { name: "Lukas Meyer", designation: "Cyber Risk Modeling & Assurance Lead", email: "lukas.meyer@cehpoint.co.in", country: "Germany", department: "Technology, Engineering & Innovation" },

    // Special Tech Strategy (New Additions)
    { name: "Avyukt Sarode", designation: "Chief Systems Imagination Officer", email: "avyukt.sarode@cehpoint.co.in", country: "India", department: "Technology, Engineering & Innovation" },
    { name: "Reva Kshirsagar", designation: "Head of Cognitive Platform Strategy", email: "reva.kshirsagar@cehpoint.co.in", country: "India", department: "Technology, Engineering & Innovation" },
    { name: "Yugant Chitale", designation: "Director – Autonomous Technology Orchestration", email: "yugant.chitale@cehpoint.co.in", country: "India", department: "Technology, Engineering & Innovation" },
    { name: "Anvika Ranpura", designation: "Vice President – Digital Foresight & Execution", email: "anvika.ranpura@cehpoint.co.in", country: "India", department: "Technology, Engineering & Innovation" },
    { name: "Ishan Velhal", designation: "Chief Engineering Productivity Officer", email: "ishan.velhal@cehpoint.co.in", country: "India", department: "Technology, Engineering & Innovation" },
    { name: "Samriddhi Gune", designation: "Head of Intelligent Operations Design", email: "samriddhi.gune@cehpoint.co.in", country: "India", department: "Technology, Engineering & Innovation" },
    { name: "Taarush Kapre", designation: "Director – Scalable Architecture Futures", email: "taarush.kapre@cehpoint.co.in", country: "India", department: "Technology, Engineering & Innovation" },
    { name: "Vritika Mankodi", designation: "Chief Technology Enablement Officer", email: "vritika.mankodi@cehpoint.co.in", country: "India", department: "Technology, Engineering & Innovation" },
    { name: "Aaryan Khedkar", designation: "Head of Platform Evolution & Growth", email: "aaryan.khedkar@cehpoint.co.in", country: "India", department: "Technology, Engineering & Innovation" },
    { name: "Nirvi Contractor", designation: "Director – Human-AI Collaboration Systems", email: "nirvi.contractor@cehpoint.co.in", country: "India", department: "Technology, Engineering & Innovation" },
    { name: "Shlok Bhandare", designation: "Vice President – Deep Tech Program Strategy", email: "shlok.bhandare@cehpoint.co.in", country: "India", department: "Technology, Engineering & Innovation" },
    { name: "Eshita Satra", designation: "Head of Digital Intelligence Operations", email: "eshita.satra@cehpoint.co.in", country: "India", department: "Technology, Engineering & Innovation" },
    { name: "Ronav Sheth", designation: "Chief Technology Integration Officer", email: "ronav.sheth@cehpoint.co.in", country: "India", department: "Technology, Engineering & Innovation" },
    { name: "Kavisha Prabhu", designation: "Director – Knowledge Systems & Tech Playbooks", email: "kavisha.prabhu@cehpoint.co.in", country: "India", department: "Technology, Engineering & Innovation" },
    { name: "Yuvan Malpani", designation: "Head of Product-System Convergence", email: "yuvan.malpani@cehpoint.co.in", country: "India", department: "Technology, Engineering & Innovation" },
    { name: "Sailee Nerurkar", designation: "Vice President – Engineering Culture & Velocity", email: "sailee.nerurkar@cehpoint.co.in", country: "India", department: "Technology, Engineering & Innovation" },
    { name: "Arhaan Pingle", designation: "Director – Algorithmic Decision Platforms", email: "arhaan.pingle@cehpoint.co.in", country: "India", department: "Technology, Engineering & Innovation" },
    { name: "Nayantara Kagal", designation: "Chief Digital Operating Model Officer", email: "nayantara.kagal@cehpoint.co.in", country: "India", department: "Technology, Engineering & Innovation" },
    { name: "Hriday Datar", designation: "Head of Secure Innovation Pipelines", email: "hriday.datar@cehpoint.co.in", country: "India", department: "Technology, Engineering & Innovation" },
    { name: "Mehar Bomal", designation: "Director – Technology Value Realization", email: "mehar.bomal@cehpoint.co.in", country: "India", department: "Technology, Engineering & Innovation" },

    // People, Culture & Workforce Strategy
    { name: "Sharmila Iyer", designation: "Leadership Development & Digital Forensic Documentation Lead", email: "sharmila.iyer@cehpoint.co.in", country: "Global", department: "People, Culture & Workforce Strategy" },
    { name: "Ayesha Khan", designation: "Global People Strategy & Workforce Planning Lead", email: "ayesha.khan@cehpoint.co.in", country: "United States", department: "People, Culture & Workforce Strategy" },
    { name: "Rohit Malhotra", designation: "Talent Acquisition & Employer Branding Lead", email: "rohit.malhotra@cehpoint.co.in", country: "United States", department: "People, Culture & Workforce Strategy" },
    { name: "Nisha Arora", designation: "People Analytics & Performance Systems Lead", email: "nisha.arora@cehpoint.co.in", country: "United Kingdom", department: "People, Culture & Workforce Strategy" },
    { name: "Amit Tandon", designation: "Global HR Compliance & Policy Lead", email: "amit.tandon@cehpoint.co.in", country: "United Kingdom", department: "People, Culture & Workforce Strategy" },
    { name: "Pallavi Khanna", designation: "Employee Experience & Engagement Lead", email: "pallavi.khanna@cehpoint.co.in", country: "United Kingdom", department: "People, Culture & Workforce Strategy" },
    { name: "Sanjay Kulkarni", designation: "Workforce Compliance & Labor Risk Lead", email: "sanjay.kulkarni@cehpoint.co.in", country: "Germany", department: "People, Culture & Workforce Strategy" },
    { name: "Arvind Menon", designation: "Global Ethics & Policy Operations Lead", email: "arvind.menon@cehpoint.co.in", country: "Germany", department: "People, Culture & Workforce Strategy" },
    { name: "Varun Naik", designation: "Technical Capability & Upskilling Lead", email: "varun.naik@cehpoint.co.in", country: "Australia", department: "People, Culture & Workforce Strategy" },
    { name: "Ritu Saxena", designation: "APAC Workforce Planning Lead", email: "ritu.saxena@cehpoint.co.in", country: "Australia", department: "People, Culture & Workforce Strategy" },
    { name: "Alok Tripathi", designation: "Global Policy Enablement & HR Risk Lead", email: "alok.tripathi@cehpoint.co.in", country: "Canada", department: "People, Culture & Workforce Strategy" },
    { name: "Sonal Mehra", designation: "Diversity, Equity & Inclusion Programs Lead", email: "sonal.mehra@cehpoint.co.in", country: "Canada", department: "People, Culture & Workforce Strategy" },

    // New HR Additions
    { name: "Samarjeet Khurana", designation: "Chief People Transformation Officer", email: "samarjeet.khurana@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Ira Malani", designation: "Chief Workforce Strategy & Culture Officer", email: "ira.malani@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Devang Raut", designation: "Executive Director – Human Capital Governance", email: "devang.raut@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Meher Contractor", designation: "Vice President – Organizational Effectiveness", email: "meher.contractor@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Yuvraj Salgaonkar", designation: "Head of Enterprise Workforce Planning", email: "yuvraj.salgaonkar@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Kritika Talwar", designation: "Director – Leadership Enablement & Capability", email: "kritika.talwar@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Rohil Mehendale", designation: "Chief Talent Intelligence Officer", email: "rohil.mehendale@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Anoushka Wagle", designation: "Head of Employee Experience Architecture", email: "anoushka.wagle@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Siddhant Vohra", designation: "Director – Strategic Hiring & Executive Search", email: "siddhant.vohra@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Pallav Puranik", designation: "Global Head – Workforce Risk & Controls", email: "pallav.puranik@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Nairita Bhattacharya", designation: "Vice President – Culture, Ethics & Trust", email: "nairita.bhattacharya@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Aviral Sinha", designation: "Head of Performance Systems & OKR Governance", email: "aviral.sinha@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Jhanvi Gada", designation: "Director – Employer Brand & Reputation Strategy", email: "jhanvi.gada@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Ritesh Kothari", designation: "Chief HR Operations & Compliance Officer", email: "ritesh.kothari@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Sharika Apte", designation: "Head of Learning Ecosystems & Certifications", email: "sharika.apte@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Manthan Parekh", designation: "Director – People Analytics & Workforce Science", email: "manthan.parekh@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Aashima Kohli", designation: "Head of Change Leadership & Org Renewal", email: "aashima.kohli@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Nikhil Borde", designation: "Vice President – Workforce Scalability Programs", email: "nikhil.borde@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Tanisha Lakhani", designation: "Director – Employee Lifecycle Engineering", email: "tanisha.lakhani@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Harpreet Chaddha", designation: "Head of Compensation Architecture & Rewards", email: "harpreet.chaddha@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Ravina Paranjpe", designation: "Chief People Systems & HR Technology Officer", email: "ravina.paranjpe@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Kunal Nagarkar", designation: "Director – Workforce Policy Automation", email: "kunal.nagarkar@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Simran Bedi", designation: "Head of Talent Retention & Engagement Science", email: "simran.bedi@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Prateek Munjal", designation: "Vice President – Leadership Pipeline & Succession", email: "prateek.munjal@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Rupal Gokani", designation: "Director – Internal Communications & Alignment", email: "rupal.gokani@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Amitanshu Kaul", designation: "Chief Ethics, POSH & Workforce Integrity Officer", email: "amitanshu.kaul@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Sheetal Damle", designation: "Head of Workforce Wellbeing & Resilience", email: "sheetal.damle@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Ishaan Malde", designation: "Director – HR Vendor Strategy & Ecosystem", email: "ishaan.malde@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Pavitra Sengupta", designation: "Vice President – People Governance & Audit", email: "pavitra.sengupta@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Dhruv Sachdeva", designation: "Head of Global Mobility & Remote Workforce", email: "dhruv.sachdeva@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Charulata Bhandari", designation: "Director – Learning Quality & Impact Measurement", email: "charulata.bhandari@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Varun Maheshwari", designation: "Chief Workforce Forecasting Officer", email: "varun.maheshwari@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Neelakshi Dutta", designation: "Head of HR Knowledge Systems & Playbooks", email: "neelakshi.dutta@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Akshay Panvelkar", designation: "Director – People Process Excellence", email: "akshay.panvelkar@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Sukanya Bhave", designation: "Vice President – Culture Integration & M&A HR", email: "sukanya.bhave@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Rohinton Commissariat", designation: "Head of Strategic Workforce Advisory", email: "rohinton.commissariat@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Purnima Kulshreshtha", designation: "Director – Leadership Coaching & Mentorship", email: "purnima.kulshreshtha@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Aditya Chitale", designation: "Chief HR Risk & Continuity Officer", email: "aditya.chitale@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Saumya Rastogi", designation: "Head of Workforce Communication Strategy", email: "saumya.rastogi@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Karan Dhamija", designation: "Director – Talent Market Intelligence", email: "karan.dhamija@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Zoya Sidhwa", designation: "Vice President – Inclusive Leadership Programs", email: "zoya.sidhwa@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Aniket Gharat", designation: "Head of Workforce Operations Modernization", email: "aniket.gharat@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Ritika Lall", designation: "Director – Employee Advocacy & Trust Systems", email: "ritika.lall@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Pranav Velankar", designation: "Chief People Governance Architect", email: "pranav.velankar@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Minal Keni", designation: "Head of HR Digital Adoption & Change", email: "minal.keni@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Armaan Qureshi", designation: "Director – Workforce Policy Intelligence", email: "armaan.qureshi@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Sharmistha Banik", designation: "Vice President – People Enablement Strategy", email: "sharmistha.banik@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Raghav Puri", designation: "Head of Leadership Hiring & Board Advisory", email: "raghav.puri@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Kashish Advani", designation: "Director – Employee Experience Innovation", email: "kashish.advani@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },

    // Payroll & Compensation
    { name: "Ayan Mukhopadhyay", designation: "Chief Payroll & Workforce Payments Officer", email: "ayan.mukhopadhyay@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Shravani Pethe", designation: "Director – Salary Architecture & Pay Equity", email: "shravani.pethe@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Rajat Singhania", designation: "Head of Global Payroll Operations & Controls", email: "rajat.singhania@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Ketaki Phadke", designation: "Director – Compensation Intelligence & Benchmarking", email: "ketaki.phadke@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Mohit Bansiwal", designation: "Head of Intern, Trainee & Stipend Disbursement Systems", email: "mohit.bansiwal@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Sonal Vora", designation: "Director – Payroll Compliance, Audits & Statutory Mapping", email: "sonal.vora@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Abhinav Lodha", designation: "Head of Automated Payroll Platforms & HR Finance Tech", email: "abhinav.lodha@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Ruchita Mankame", designation: "Director – Incentives, Bonuses & Variable Pay Programs", email: "ruchita.mankame@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Kartikeya Upadhyay", designation: "Head of Salary Forecasting & Workforce Cost Modeling", email: "kartikeya.upadhyay@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Mrunal Pathak", designation: "Director – Cross-Border Payroll & FX Settlement", email: "mrunal.pathak@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Yashovardhan Shetty", designation: "Head of Contractor, Freelancer & Gig Payments", email: "yashovardhan.shetty@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Pallavi Vaidya", designation: "Director – Payroll Risk, Fraud Prevention & Controls", email: "pallavi.vaidya@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Rohan Chitnis", designation: "Head of Monthly Payroll Execution & Reconciliation", email: "rohan.chitnis@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Ankush Gawde", designation: "Director – Stipend Automation & Academic Program Payments", email: "ankush.gawde@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Nirali Jhaveri", designation: "Head of Salary Policy Design & Governance", email: "nirali.jhaveri@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Satyajeet Ranade", designation: "Director – Payroll Continuity & Business Resilience", email: "satyajeet.ranade@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Ishwari Desai", designation: "Head of Employee Pay Experience & Transparency Systems", email: "ishwari.desai@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Parthiv Mehra", designation: "Director – Payroll Vendor Strategy & Integrations", email: "parthiv.mehra@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Shrikant Kale", designation: "Head of Statutory Deductions, PF, ESI & Tax Interfaces", email: "shrikant.kale@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Aanchal Sood", designation: "Director – Salary Dispute Resolution & Pay Corrections", email: "aanchal.sood@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Devvrat Purohit", designation: "Head of Real-Time Payroll Analytics & Dashboards", email: "devvrat.purohit@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Chaitali Keni", designation: "Director – Payroll Documentation & Evidence Management", email: "chaitali.keni@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Arjun Malhotra", designation: "Head of Executive Compensation & Retainer Programs", email: "arjun.malhotra@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Vibhuti Saraf", designation: "Director – Internship Grants, Fellowships & Allowances", email: "vibhuti.saraf@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },
    { name: "Naman Bhargava", designation: "Head of Payroll API, Banking & FinTech Integrations", email: "naman.bhargava@cehpoint.co.in", country: "India", department: "People, Culture & Workforce Strategy" },

    // Global Operations & Enablement
    { name: "Rajesh Kumar", designation: "Regional Operations Manager – North America", email: "rajesh.kumar@cehpoint.co.in", country: "United States", department: "Global Operations & Enablement" },
    { name: "Kunal Mehta", designation: "Global Delivery Operations Lead", email: "kunal.mehta@cehpoint.co.in", country: "United States", department: "Global Operations & Enablement" },
    { name: "Deepak Agarwal", designation: "Enterprise Process Optimization Lead", email: "deepak.agarwal@cehpoint.co.in", country: "United States", department: "Global Operations & Enablement" },
    { name: "Poonam Verma", designation: "Strategic Partner Operations Lead", email: "poonam.verma@cehpoint.co.in", country: "United States", department: "Global Operations & Enablement" },
    { name: "Nupur Bansal", designation: "Global Risk-Aligned Operations Lead", email: "nupur.bansal@cehpoint.co.in", country: "United States", department: "Global Operations & Enablement" },
    { name: "Ananya Malhotra", designation: "Enterprise Trust Enablement Manager", email: "ananya.malhotra@cehpoint.co.in", country: "United States", department: "Global Operations & Enablement" },
    { name: "Moumita Das", designation: "Client Success & Engagement Manager", email: "moumita.das@cehpoint.co.in", country: "United Kingdom", department: "Global Operations & Enablement" },
    { name: "Rakesh Soni", designation: "Client Operations & SLA Governance Lead", email: "rakesh.soni@cehpoint.co.in", country: "United Kingdom", department: "Global Operations & Enablement" },
    { name: "Shweta Kapoor", designation: "Program Management & Delivery Assurance Lead", email: "shweta.kapoor@cehpoint.co.in", country: "United Kingdom", department: "Global Operations & Enablement" },
    { name: "Tarun Bansal", designation: "Revenue Operations & Commercial Strategy Lead", email: "tarun.bansal@cehpoint.co.in", country: "United Kingdom", department: "Global Operations & Enablement" },
    { name: "Kavya Desai", designation: "Global Client Assurance & Trust Lead", email: "kavya.desai@cehpoint.co.in", country: "United Kingdom", department: "Global Operations & Enablement" },
    { name: "Rhea Kapadia", designation: "Secure Engagement & Value Engineering Lead", email: "rhea.kapadia@cehpoint.co.in", country: "United Kingdom", department: "Global Operations & Enablement" },
    { name: "Mehul Jain", designation: "Cross-Border Program Governance Lead", email: "mehul.jain@cehpoint.co.in", country: "United Kingdom", department: "Global Operations & Enablement" },
    { name: "Emily Watson", designation: "Digital Transformation Advisory Lead", email: "emily.watson@cehpoint.co.in", country: "United Kingdom", department: "Global Operations & Enablement" },
    { name: "Sophia Turner", designation: "Enterprise Privacy Experience Lead", email: "sophia.turner@cehpoint.co.in", country: "United Kingdom", department: "Global Operations & Enablement" },
    { name: "Nandita Roy", designation: "Regulatory Compliance & Data Protection Lead", email: "nandita.roy@cehpoint.co.in", country: "Germany", department: "Global Operations & Enablement" },
    { name: "Puneet Chawla", designation: "EU Regulatory Operations & Audit Lead", email: "puneet.chawla@cehpoint.co.in", country: "Germany", department: "Global Operations & Enablement" },
    { name: "Kavita Deshpande", designation: "Cross-Border Delivery Operations Lead", email: "kavita.deshpande@cehpoint.co.in", country: "Germany", department: "Global Operations & Enablement" },
    { name: "Ashish Pawar", designation: "Engineering Program Operations Lead", email: "ashish.pawar@cehpoint.co.in", country: "Australia", department: "Global Operations & Enablement" },
    { name: "Manoj Patwardhan", designation: "Service Continuity & Resilience Lead", email: "manoj.patwardhan@cehpoint.co.in", country: "Australia", department: "Global Operations & Enablement" },
    { name: "Smita Kulkarni", designation: "Corporate Risk, Policy & Governance Manager", email: "smita.kulkarni@cehpoint.co.in", country: "Canada", department: "Global Operations & Enablement" },
    { name: "Priyanka Bhat", designation: "Client Lifecycle & Retention Operations Lead", email: "priyanka.bhat@cehpoint.co.in", country: "Canada", department: "Global Operations & Enablement" },
    { name: "Kritika Sood", designation: "Client Lifecycle Automation Lead", email: "kritika.sood@cehpoint.co.in", country: "Canada", department: "Global Operations & Enablement" },
    { name: "Olivia Martin", designation: "Digital Operations Excellence Lead", email: "olivia.martin@cehpoint.co.in", country: "Canada", department: "Global Operations & Enablement" },

    // Cybercrime, Forensics & Security Intelligence
    { name: "Meenakshi Rao", designation: "Global Data Privacy, Governance & Evidence Integrity Lead", email: "meenakshi.rao@cehpoint.co.in", country: "Global", department: "Cybercrime, Forensics & Security Intelligence" },
    { name: "Vikas Nair", designation: "Managed Services Operations & Network Forensics Lead", email: "vikas.nair@cehpoint.co.in", country: "Global", department: "Cybercrime, Forensics & Security Intelligence" },
    { name: "Daniel Brooks", designation: "Cloud Security Architecture & Digital Forensics Advisory Lead", email: "daniel.brooks@cehpoint.co.in", country: "Global", department: "Cybercrime, Forensics & Security Intelligence" },
    { name: "Debashis Roy", designation: "Information Security & Risk Advisory Lead", email: "debashis.roy@cehpoint.co.in", country: "Germany", department: "Cybercrime, Forensics & Security Intelligence" },
    { name: "Aditi Kulkarni", designation: "National Cybercrime Investigation Training Lead", email: "aditi.kulkarni@cehpoint.co.in", country: "India", department: "Cybercrime, Forensics & Security Intelligence" },
    { name: "Rohit Verma", designation: "Senior Cybercrime Case Analysis Specialist", email: "rohit.verma@cehpoint.co.in", country: "India", department: "Cybercrime, Forensics & Security Intelligence" },
    { name: "Sneha Patil", designation: "Digital Evidence Handling & Chain-of-Custody Lead", email: "sneha.patil@cehpoint.co.in", country: "India", department: "Cybercrime, Forensics & Security Intelligence" },
    { name: "Amit Saxena", designation: "Advanced Cybercrime Investigation Mentor", email: "amit.saxena@cehpoint.co.in", country: "India", department: "Cybercrime, Forensics & Security Intelligence" },
    { name: "Pooja Deshpande", designation: "Mobile & Device Forensics Training Lead", email: "pooja.deshpande@cehpoint.co.in", country: "India", department: "Cybercrime, Forensics & Security Intelligence" },
    { name: "Kunal Mishra", designation: "Cyber Law & Digital Crime Advisory Lead", email: "kunal.mishra@cehpoint.co.in", country: "India", department: "Cybercrime, Forensics & Security Intelligence" },
    { name: "Neha Arora", designation: "Cybercrime Awareness & Law Enforcement Training Lead", email: "neha.arora@cehpoint.co.in", country: "India", department: "Cybercrime, Forensics & Security Intelligence" },
    { name: "Saurabh Tiwari", designation: "Dark Web Monitoring & Investigation Trainer", email: "saurabh.tiwari@cehpoint.co.in", country: "India", department: "Cybercrime, Forensics & Security Intelligence" },
    { name: "Ankit Choudhary", designation: "Incident Response & Cybercrime Simulation Lead", email: "ankit.choudhary@cehpoint.co.in", country: "India", department: "Cybercrime, Forensics & Security Intelligence" },
    { name: "Prachi Joshi", designation: "Email & Communication Forensics Specialist", email: "prachi.joshi@cehpoint.co.in", country: "India", department: "Cybercrime, Forensics & Security Intelligence" },
    { name: "Nitin Agarwal", designation: "Cybercrime Risk Assessment & Intelligence Lead", email: "nitin.agarwal@cehpoint.co.in", country: "India", department: "Cybercrime, Forensics & Security Intelligence" },
    { name: "Sayali Gokhale", designation: "Operating System & Memory Forensics Trainer", email: "sayali.gokhale@cehpoint.co.in", country: "India", department: "Cybercrime, Forensics & Security Intelligence" },
    { name: "Ravi Shankar", designation: "Cybercrime Investigation Tools & Lab Setup Lead", email: "ravi.shankar@cehpoint.co.in", country: "India", department: "Cybercrime, Forensics & Security Intelligence" },
    { name: "Aakash Bansal", designation: "Ransomware & Malware Investigation Specialist", email: "aakash.bansal@cehpoint.co.in", country: "India", department: "Cybercrime, Forensics & Security Intelligence" },
    { name: "Komal Mehta", designation: "Cybercrime Case File Preparation & Prosecution Support Lead", email: "komal.mehta@cehpoint.co.in", country: "India", department: "Cybercrime, Forensics & Security Intelligence" },
    { name: "Anuja Kulkarni", designation: "Cloud-Based Digital Forensics Training Lead", email: "anuja.kulkarni@cehpoint.co.in", country: "India", department: "Cybercrime, Forensics & Security Intelligence" },
    { name: "Divya Malhotra", designation: "Cybercrime Case Review & Quality Assurance Lead", email: "divya.malhotra@cehpoint.co.in", country: "India", department: "Cybercrime, Forensics & Security Intelligence" },
    { name: "Emily Carter", designation: "Global Cybercrime Investigation Training Director", email: "emily.carter@cehpoint.co.in", country: "International", department: "Cybercrime, Forensics & Security Intelligence" },
    { name: "Sophia Martinez", designation: "Cross-Border Cybercrime Investigation Specialist", email: "sophia.martinez@cehpoint.co.in", country: "International", department: "Cybercrime, Forensics & Security Intelligence" },
    { name: "Michael Anderson", designation: "Cybercrime Intelligence & Threat Attribution Lead", email: "michael.anderson@cehpoint.co.in", country: "International", department: "Cybercrime, Forensics & Security Intelligence" },
    { name: "Laura Bennett", designation: "Advanced Digital Evidence Analysis Trainer", email: "laura.bennett@cehpoint.co.in", country: "International", department: "Cybercrime, Forensics & Security Intelligence" },
    { name: "James O’Connor", designation: "Law Enforcement Cyber Forensics Program Advisor", email: "james.oconnor@cehpoint.co.in", country: "International", department: "Cybercrime, Forensics & Security Intelligence" },
    { name: "Anna Müller", designation: "EU Cybercrime & GDPR Forensic Compliance Lead", email: "anna.mueller@cehpoint.co.in", country: "International", department: "Cybercrime, Forensics & Security Intelligence" },
    { name: "Lucas Weber", designation: "Financial Cybercrime & Crypto Forensics Specialist", email: "lucas.weber@cehpoint.co.in", country: "International", department: "Cybercrime, Forensics & Security Intelligence" },
    { name: "Sarah Thompson", designation: "Mobile Device & Cloud Forensics Expert", email: "sarah.thompson@cehpoint.co.in", country: "International", department: "Cybercrime, Forensics & Security Intelligence" },
    { name: "David Collins", designation: "Cybercrime Incident Reconstruction Specialist", email: "david.collins@cehpoint.co.in", country: "International", department: "Cybercrime, Forensics & Security Intelligence" },
    { name: "Emma Richardson", designation: "Digital Evidence Validation & Expert Witness Lead", email: "emma.richardson@cehpoint.co.in", country: "International", department: "Cybercrime, Forensics & Security Intelligence" },
    { name: "Markus Klein", designation: "Enterprise & Government Cybercrime Training Lead", email: "markus.klein@cehpoint.co.in", country: "International", department: "Cybercrime, Forensics & Security Intelligence" },
    { name: "Olivia Brown", designation: "Cybercrime Investigation Curriculum Architect", email: "olivia.brown@cehpoint.co.in", country: "International", department: "Cybercrime, Forensics & Security Intelligence" },
    { name: "Thomas Fischer", designation: "Dark Web Crime Investigation Advisor", email: "thomas.fischer@cehpoint.co.in", country: "International", department: "Cybercrime, Forensics & Security Intelligence" },
    { name: "Isabella Romano", designation: "International Cybercrime Case Coordination Lead", email: "isabella.romano@cehpoint.co.in", country: "International", department: "Cybercrime, Forensics & Security Intelligence" },
    { name: "Nathan Scott", designation: "Malware Reverse Engineering & Forensic Analysis Lead", email: "nathan.scott@cehpoint.co.in", country: "International", department: "Cybercrime, Forensics & Security Intelligence" },
    { name: "Chloe Dubois", designation: "Digital Forensics Lab Design & Accreditation Lead", email: "chloe.dubois@cehpoint.co.in", country: "International", department: "Cybercrime, Forensics & Security Intelligence" },
    { name: "Ryan Mitchell", designation: "Cybercrime Response Simulation & Training Designer", email: "ryan.mitchell@cehpoint.co.in", country: "International", department: "Cybercrime, Forensics & Security Intelligence" },
    { name: "Julia Novak", designation: "Cross-Jurisdiction Evidence Handling Specialist", email: "julia.novak@cehpoint.co.in", country: "International", department: "Cybercrime, Forensics & Security Intelligence" },
    { name: "Benjamin Lee", designation: "Asia-Pacific Cybercrime Investigation Advisor", email: "benjamin.lee@cehpoint.co.in", country: "International", department: "Cybercrime, Forensics & Security Intelligence" },
    { name: "Hannah Wilson", designation: "Cybercrime Reporting Standards & Compliance Lead", email: "hannah.wilson@cehpoint.co.in", country: "International", department: "Cybercrime, Forensics & Security Intelligence" },
    { name: "Victor Alvarez", designation: "Financial Fraud & Online Scam Investigation Lead", email: "victor.alvarez@cehpoint.co.in", country: "International", department: "Cybercrime, Forensics & Security Intelligence" },
    { name: "Sofia Petrova", designation: "Digital Identity Abuse & Investigation Specialist", email: "sofia.petrova@cehpoint.co.in", country: "International", department: "Cybercrime, Forensics & Security Intelligence" },
    { name: "Kevin Murphy", designation: "Cybercrime Intelligence Fusion & Analytics Lead", email: "kevin.murphy@cehpoint.co.in", country: "International", department: "Cybercrime, Forensics & Security Intelligence" },
    { name: "Natalie Green", designation: "Cyber Forensics Training Content Creator & Reviewer", email: "natalie.green@cehpoint.co.in", country: "International", department: "Cybercrime, Forensics & Security Intelligence" },
];

export default function LeadershipSearch() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
    const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);

    // Extract unique countries
    const countryOptions = useMemo(() => {
        return Array.from(new Set(leadershipData.map(l => l.country)))
            .sort()
            .map(c => ({ label: c, value: c }));
    }, []);

    // Extract unique departments for the selected countries
    const departmentOptions = useMemo(() => {
        const filteredByCountries = selectedCountries.length === 0
            ? leadershipData
            : leadershipData.filter(l => selectedCountries.includes(l.country));

        return Array.from(new Set(filteredByCountries.map(l => l.department || "Other")))
            .sort()
            .map(d => ({ label: d, value: d }));
    }, [selectedCountries]);

    // Cleanup: Remove selected departments that are no longer available in the newly selected countries
    useMemo(() => {
        if (selectedCountries.length > 0 && selectedDepartments.length > 0) {
            const availableDepts = new Set(
                leadershipData
                    .filter(l => selectedCountries.includes(l.country))
                    .map(l => l.department || "Other")
            );

            const validSelectedDepts = selectedDepartments.filter(d => availableDepts.has(d));
            if (validSelectedDepts.length !== selectedDepartments.length) {
                setSelectedDepartments(validSelectedDepts);
            }
        }
    }, [selectedCountries]);

    const filteredLeaders = useMemo(() => {
        // Only show results if a specific country or department is selected
        if (selectedCountries.length === 0 && selectedDepartments.length === 0) {
            return [];
        }

        return leadershipData.filter(leader => {
            const matchesSearch =
                leader.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                leader.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (leader.department && leader.department.toLowerCase().includes(searchQuery.toLowerCase()));

            const matchesCountry = selectedCountries.length === 0 || selectedCountries.includes(leader.country);
            const matchesDepartment = selectedDepartments.length === 0 || selectedDepartments.includes(leader.department || "Other");

            return matchesSearch && matchesCountry && matchesDepartment;
        });
    }, [searchQuery, selectedCountries, selectedDepartments]);

    const clearFilters = () => {
        setSearchQuery("");
        setSelectedCountries([]);
        setSelectedDepartments([]);
    };

    const isInitialState = selectedCountries.length === 0 && selectedDepartments.length === 0;

    return (
        <div className="min-h-screen bg-background pt-24 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
                    >
                        Leadership Team Search
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        Find the right expert entirely by Name, Designation, Country, or Department.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-4xl mx-auto space-y-6"
                >
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                        <Input
                            type="text"
                            placeholder="Search by name, designation, or department..."
                            className="pl-10 h-12 text-lg bg-background text-foreground border-2 border-primary/20 focus:border-primary placeholder:text-muted-foreground shadow-sm"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        )}
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 md:w-[300px]">
                            <MultiSelect
                                options={countryOptions}
                                selected={selectedCountries}
                                onChange={setSelectedCountries}
                                placeholder="Select Countries"
                                className="bg-background border-primary/20"
                            />
                        </div>

                        <div className="flex-1 md:w-[400px]">
                            <MultiSelect
                                options={departmentOptions}
                                selected={selectedDepartments}
                                onChange={setSelectedDepartments}
                                placeholder="Select Departments"
                                className="bg-background border-primary/20"
                            />
                        </div>

                        {(selectedCountries.length > 0 || selectedDepartments.length > 0 || searchQuery) && (
                            <Button
                                variant="ghost"
                                onClick={clearFilters}
                                className="h-11 px-4 text-muted-foreground hover:text-foreground"
                            >
                                <X className="h-4 w-4 mr-2" />
                                Clear Filters
                            </Button>
                        )}
                    </div>

                    <div className="mt-2 text-sm text-center text-muted-foreground">
                        {filteredLeaders.length === 0 ? (
                            isInitialState ? "" : "No matches found"
                        ) : (
                            `Showing ${filteredLeaders.length} result${filteredLeaders.length !== 1 ? 's' : ''}`
                        )}
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredLeaders.map((leader, index) => (
                            <motion.div
                                key={`${leader.email}-${leader.name}`}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Card className="h-full hover:shadow-lg transition-all duration-300 border-primary/10 bg-card/50 backdrop-blur-sm group">
                                    <CardHeader>
                                        <div className="flex justify-between items-start gap-4">
                                            <div>
                                                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                                                    {leader.name}
                                                </CardTitle>
                                                <CardDescription className="mt-1 font-medium text-foreground/80">
                                                    {leader.designation}
                                                </CardDescription>
                                                {leader.department && (
                                                    <div className="mt-2 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                                                        <Briefcase className="h-3.5 w-3.5" />
                                                        {leader.department}
                                                    </div>
                                                )}
                                            </div>
                                            <Badge variant="outline" className="shrink-0 flex items-center gap-1 bg-background/50">
                                                <MapPin className="h-3 w-3" />
                                                {leader.country}
                                            </Badge>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex items-center gap-2 text-muted-foreground group-hover:text-primary/80 transition-colors">
                                            <Mail className="h-4 w-4" />
                                            <a href={`mailto:${leader.email}`} className="text-sm hover:underline truncate">
                                                {leader.email}
                                            </a>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {filteredLeaders.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12 text-muted-foreground"
                    >
                        <div className="flex flex-col items-center gap-3">
                            <Filter className="h-10 w-10 opacity-20" />
                            {isInitialState ? (
                                <p className="text-lg">Please select a <b>Country</b> or <b>Department</b> to view leadership members.</p>
                            ) : (
                                <>
                                    <Search className="h-10 w-10 opacity-20" />
                                    <p>No team members found with the current filters.</p>
                                    <Button variant="link" onClick={clearFilters}>
                                        Clear all filters
                                    </Button>
                                </>
                            )}
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
