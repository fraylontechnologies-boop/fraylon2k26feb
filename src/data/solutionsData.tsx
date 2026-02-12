import { FaCloud, FaDatabase, FaBrain, FaCogs, FaShieldAlt, FaTruck } from 'react-icons/fa';
import { SiSap, SiOracle } from 'react-icons/si';
import { FaUserTie, FaNetworkWired, FaLock, FaBalanceScale } from 'react-icons/fa';

import type { IconType } from 'react-icons';

export interface SolutionData {
    title: string;
    description: string;
    icon: IconType;
    capabilities: { title: string; desc: string }[];
    benefits: string[];
    techStack: string[];
    methodology: { step: string; title: string; desc: string }[];
    caseStudies: { client: string; tag: string; title: string; metric: string; label: string }[];
    stats: { value: string; label: string }[];
    certifications: string[];
    testimonial: { quote: string; author: string; role: string; company: string };
    comparison: { feature: string; fraylon: string; others: string }[];
    challenge: { title: string; problem: string; solution: string; outcome: string };
    architecture: { title: string; description: string; highlights: string[] };
    detailedFeatures?: { title: string; desc: string; icon?: IconType }[];
    faq: { question: string; answer: string }[];
}

export const solutionsData: Record<string, SolutionData> = {
    cloud: {
        title: 'Cloud Transformation',
        description: 'Stop treating the cloud like a data center. We re-platform legacy monoliths into elastic, self-healing ecosystems that scale to zero and deployment instantly.',
        icon: FaCloud,
        stats: [
            { value: '40%', label: 'Avg. Cloud Bill Reduction' },
            { value: '99.99%', label: 'Uptime SLA Guarantee' },
            { value: '15min', label: 'Disaster Recovery RTO' },
            { value: '20x', label: 'Faster Deployment Cycle' }
        ],
        certifications: ['AWS Advanced Consulting Partner', 'Microsoft Azure Gold', 'Google Cloud Premier', 'CKA Kubernetes Certified'],
        testimonial: {
            quote: "We were bleeding cash on AWS with zero visibility. Fraylon didn't just migrate us; they implemented FinOps controls that cut our bill in half while doubling performance.",
            author: "Rajesh Kumar",
            role: "CTO",
            company: "OmniRetail Group"
        },
        comparison: [
            { feature: 'Migration Strategy', fraylon: 'Refactor for Cloud-Native (Long-term ROI)', others: 'Lift-and-Shift (Technical debt transfer)' },
            { feature: 'Cost Model', fraylon: 'Performance-based optimization', others: 'Hourly billing without incentives' },
            { feature: 'Operations', fraylon: 'Proactive SRE & Self-healing infra', others: 'Reactive ticket-based support' }
        ],
        capabilities: [
            { title: 'Monolith Strangulation', desc: 'We decompose legacy giants into efficient microservices using the Strangler Fig pattern, ensuring zero downtime during transition.' },
            { title: 'Kubernetes Platform', desc: 'Production-grade EKS/AKS clusters with built-in Istio service mesh, Prometheus observability, and automated canary deployments.' },
            { title: 'Serverless Event Mesh', desc: 'Event-driven architectures using Lambda/EventBridge that scale infinitely and cost nothing when idle.' },
            { title: 'Automated FinOps', desc: 'Implementation of continuous compliance policies (Cloud Custodian) to auto-terminate waste and enforce tagging.' }
        ],
        benefits: [
            'Slash infrastructure costs by eliminating over-provisioning',
            'Deploy code 20x a day with confidence, not fear',
            'Survive regional outages with multi-zone redundancy',
            'Pass security audits (SOC2/PCI) automatically'
        ],
        techStack: ['AWS', 'Azure', 'GCP', 'Terraform', 'Kubernetes', 'Argocd', 'Prometheus', 'Datadog'],
        methodology: [
            { step: '01', title: 'Audit & Map', desc: 'We scan your entire estate to map dependencies and identify "zombie" resources wasting money.' },
            { step: '02', title: 'Landing Zone', desc: 'We build a secure, compliant foundation (IaC) with CIS Benchmark hardening before moving a single byte.' },
            { step: '03', title: 'Refactor & Move', desc: 'Automated pipelines migrate workloads in waves, prioritizing high-impact, low-risk services first.' },
            { step: '04', title: 'Day 2 Ops', desc: 'We hand over a fully observable system with runbooks, or manage it for you with our 24/7 SRE team.' }
        ],
        caseStudies: [
            { client: 'Fintech Unicorn', tag: 'Re-platforming', title: 'From Monolith to Microservices with Zero Downtime', metric: '99.999%', label: 'Availability Achieved' },
            { client: 'Logistics Firm', tag: 'Hybrid Cloud', title: 'Connecting legacy mainframes to Azure AI', metric: '60%', label: 'Faster Processing' }
        ],
        challenge: {
            title: "The 'Bill Shock' Crisis",
            problem: "A Series-B logistics startup was spending $80k/mo on AWS. Their 'lift-and-shift' migration resulted in over-provisioned EC2 instances running 24/7, even during low traffic weekends.",
            solution: "We Containerized their core dispatch engine and moved it to AWS Fargate (Serverless Containers). We implemented Karpenter for aggressive node autoscaling on their remaining K8s clusters.",
            outcome: "Monthly bill dropped to $35k (56% savings) immediately. Uptime improved as the new architecture self-healed replacing failed pods automatically."
        },
        architecture: {
            title: "Reference Architecture: The 'Invincible' Cluster",
            description: "Our standard high-availability blueprint designed for mission-critical banking and healthcare workloads.",
            highlights: [
                "Multi-AZ Control Plane (EKS/AKS) for fault tolerance.",
                "Private Networking with VPC Endpoints—no traffic traverses the public internet.",
                "GitOps Pipeline (ArgoCD) ensuring the cluster state always matches the code repository.",
                "Secret Management via HashiCorp Vault with dynamic rotation."
            ]
        },
        detailedFeatures: [
            {
                title: "Infrastructure as Code (IaC) Foundation",
                desc: "We don't click buttons in consoles. Every single piece of infrastructure—from VPCs to database subnets—is defined in Terraform or Pulumi code. This ensures your environments are strictly version-controlled, auditable, and identical across dev, staging, and production. No more 'it works on my machine' drift."
            },
            {
                title: "Microservices & Containerization",
                desc: "We refactor monolithic applications into loosely coupled microservices wrapped in Docker containers. This decoupling allows individual teams to deploy updates independently without bringing down the entire system, significantly accelerating your time-to-market."
            },
            {
                title: "Continuous Intelligence & Observability",
                desc: "You can't fix what you can't see. We implement full-stack observability using Prometheus, Grafana, and ELK/Datadog. We trace every request from the load balancer to the database query, giving you instant root-cause analysis when things go wrong."
            }
        ],
        faq: [
            { question: "Do you minimalize 'vendor lock-in'?", answer: "Yes. We prioritize open standards (CNCF technologies like Kubernetes, Terraform, Prometheus) so you can port your platform to another cloud if pricing changes." },
            { question: "How fast can we migrate?", answer: "A typical 'Assessment to Pilot' takes 4 weeks. Full migration depends on complexity, but our automation accelerates the process by approximately 60% compared to manual methods." },
            { question: "What about our legacy compliance requirements?", answer: "We bake compliance into the infrastructure code. Your landing zone will automatically block non-compliant resources (e.g., unencrypted buckets) from ever being created." }
        ]
    },
    data: {
        title: 'Data & Analytics',
        description: 'Stop guessing. We turn messy, siloed data into clean, trusted pipelines that feed real-time dashboards and predictive models.',
        icon: FaDatabase,
        stats: [
            { value: '5PB+', label: 'Daily Ingestion' },
            { value: '<1s', label: 'Streaming Latency' },
            { value: '100%', label: 'Data Trust Score' },
            { value: '50+', label: 'Enterprise Data Mesh' }
        ],
        certifications: ['Snowflake Elite Partner', 'Databricks Champion', 'dbt Certified', 'Tableau Premier'],
        testimonial: {
            quote: "Our data was a swamp—unreliable and weeks old. Fraylon built a streaming architecture that now powers our real-time pricing engine. It's a competitive weapon.",
            author: "Sarah Johnson",
            role: "VP of Data Strategy",
            company: "FinStream Capital"
        },
        comparison: [
            { feature: 'Data Freshness', fraylon: 'Real-time (Kafka/Spark Streaming)', others: 'Batch (Last night\'s data)' },
            { feature: 'Architecture', fraylon: 'Decoupled Modern Data Stack', others: 'Rigid, proprietary warehouses' },
            { feature: 'Quality Control', fraylon: 'Automated testing (Great Expectations)', others: 'Fixing bugs in production' }
        ],
        capabilities: [
            { title: 'Modern Data Stack', desc: 'Replace fragile ETL scripts with robust ELT pipelines (Airflow, dbt, Snowflake).' },
            { title: 'Real-time Streaming', desc: 'Process events as they happen using Kafka and Spark Structured Streaming.' },
            { title: 'Data Mesh Strategy', desc: 'Decentralize data ownership while maintaining federated governance.' },
            { title: 'Self-Service BI', desc: 'Empower business users to query data without begging IT for reports.' }
        ],
        benefits: [
            'Make decisions based on what happened seconds ago',
            'Trust your numbers: automated quality checks block bad data',
            'Democratize access: let marketing and sales run their own queries',
            'Scale storage cheaply without performance penalties'
        ],
        techStack: ['Snowflake', 'Databricks', 'dbt', 'Airflow', 'Kafka', 'Looker', 'Fivetran', 'Python'],
        methodology: [
            { step: '01', title: 'Audit', desc: 'We trace data lineage to find bottlenecks and logic errors.' },
            { step: '02', title: 'Pipeline', desc: 'We build robust ingestion pipelines that handle schema drift automatically.' },
            { step: '03', title: 'Model', desc: 'We structure data marts for fast, business-friendly querying.' },
            { step: '04', title: 'Serve', desc: 'We connect BI tools and APIs for consumption.' }
        ],
        caseStudies: [
            { client: 'Retail Giant', tag: 'Analytics', title: 'Real-time Inventory Optimization', metric: '30%', label: 'Stockout Reduction' },
            { client: 'Healthcare', tag: 'Compliance', title: 'HIPAA-Compliant Data Lake', metric: '100%', label: 'Audit Pass Rate' }
        ],
        challenge: {
            title: "Data Silos & Stale Reports",
            problem: "Marketing data was in Hubspot, Sales in Salesforce, and Product in MongoDB. Executives waited 3 weeks for monthly reports that were already obsolete.",
            solution: "We implemented a Modern Data Stack with Fivetran for ingestion and Snowflake as the central source of truth. dbt models now transform raw data into 'Gold' standard tables.",
            outcome: "Reports update every 15 minutes. The 'Board Deck' is now a live dashboard."
        },
        architecture: {
            title: "The 'Source of Truth' Pipeline",
            description: "A fault-tolerant ELT pipeline designed for scale and governance.",
            highlights: ["Automated Ingestion (Fivetran)", "Transformation as Code (dbt)", "Data Reliability Engineering (Monte Carlo)", "Role-Based Access Control"]
        },
        detailedFeatures: [
            {
                title: "Modern Data Stack (MDS) Implementation",
                desc: "We replace fragile legacy ETL with a modular, scalable Modern Data Stack. Using Fivetran for zero-maintenance ingestion, Snowflake/Databricks for infinite storage, and dbt for transformation-as-code, we build pipelines that are resilient, testable, and easy to maintain."
            },
            {
                title: "Real-Time Streaming Analytics",
                desc: "Batch processing isn't enough for modern agility. We implement Kafka and Spark Structured Streaming to process events as they happen, powering live dashboards and instant operational alerts."
            },
            {
                title: "Data Governance & Mesh",
                desc: "We implement a Data Mesh architecture that decentralizes data ownership while maintaining centralized governance standards. This removes the 'central IT' bottleneck and empowers domain teams to produce high-quality data products."
            }
        ],
        faq: [
            { question: "Is our data secure?", answer: "Yes. All data is encrypted at rest and in transit. We implement column-level masking for PII." },
            { question: "Can we use our existing BI tools?", answer: "Absolutely. We build the data layer to be tool-agnostic. Tableau, PowerBI, or Looker will just work faster." }
        ]
    },
    ai: {
        title: 'Artificial Intelligence',
        description: 'Move beyond the hype. We build production-ready AI systems—from predictive maintenance to custom LLMs—that solve boring business problems profitably.',
        icon: FaBrain,
        stats: [
            { value: '85%', label: 'Model Accuracy' },
            { value: '70%', label: 'Task Automation' },
            { value: '4 Weeks', label: 'PoC to Production' },
            { value: '10x', label: 'ROI Year One' }
        ],
        certifications: ['NVIDIA AI Elite', 'Microsoft AI Inner Circle', 'Google ML Experts'],
        testimonial: {
            quote: "Everyone sold us 'magic' AI. Fraylon built a practical defect-detection model that actually works on our noisy factory floor. It paid for itself in 3 months.",
            author: "David Chen",
            role: "Director of Ops",
            company: "Precision Mfg Corps"
        },
        comparison: [
            { feature: 'Data Privacy', fraylon: 'Private LLMs hosted in your VPC', others: 'Sending IP to public APIs' },
            { feature: 'Explainability', fraylon: 'transparent models (Why did it decide?)', others: 'Black box (Trust us)' },
            { feature: 'Engineering', fraylon: 'MLOps: Versioned, monitored, tested', others: 'Jupyter notebooks in production' }
        ],
        capabilities: [
            { title: 'Private Generative AI', desc: 'Fine-tune Llama/Mistral/GPT on your docs for secure, internal knowledge search.' },
            { title: 'Computer Vision', desc: 'Detect defects, safety violations, or inventory levels using camera feeds.' },
            { title: 'Demand Forecasting', desc: 'Predict operational spikes using time-series analysis to optimize staffing.' },
            { title: 'MLOps Platform', desc: 'Automate training, deployment, and monitoring of models to prevent drift.' }
        ],
        benefits: [
            'Automate complex cognitive tasks, not just simple clicks',
            'Secure your IP: run AI locally without leaking data',
            'Predict failures before they cause downtime',
            'Personalize every customer interaction at scale'
        ],
        techStack: ['PyTorch', 'TensorFlow', 'LangChain', 'Hugging Face', 'MLflow', 'OpenCV', 'CUDA', 'Pinecone'],
        methodology: [
            { step: '01', title: 'Feasibility', desc: 'We assess if you actually need AI or just better SQL. We only build if the ROI is clear.' },
            { step: '02', title: 'Data Prep', desc: 'Garbage in, garbage out. We clean and label your proprietary data for training.' },
            { step: '03', title: 'Train & Tune', desc: 'We experiment with architectures to find the best balance of accuracy and latency.' },
            { step: '04', title: 'Deploy', desc: 'We wrap models in robust APIs with fallback logic and drift detection.' }
        ],
        caseStudies: [
            { client: 'E-commerce Giant', tag: 'GenAI Search', title: 'Semantic search increasing conversion', metric: '+18%', label: 'Conversion Uplift' },
            { client: 'Energy Utility', tag: 'Predictive Maint', title: 'Forecasting grid failures pre-storm', metric: '$20M', label: 'Saved in Outages' }
        ],
        challenge: {
            title: "Manual Quality Control",
            problem: "A factory relied on human inspectors to spot microscopic defects in circuit boards. Fatigue led to a 15% error rate.",
            solution: "We deployed a Computer Vision model on edge devices (NVIDIA Jetson) to scan boards in real-time on the assembly line.",
            outcome: "Error rate dropped to near zero. Throughput increased by 200%."
        },
        architecture: {
            title: "Edge AI Architecture",
            description: "Low-latency inference running directly where the data is created.",
            highlights: ["Model Training in Cloud", "Optimized Inference (TensorRT)", "Edge Device Fleet Management", "Feedback Loop for Retraining"]
        },
        detailedFeatures: [
            {
                title: "Custom LLM Fine-Tuning",
                desc: "We don't just use generic models. We securely fine-tune open-source LLMs (like Llama 3 or Mistral) on your proprietary data within your own VPC. This gives you a highly specialized AI assistant that knows your business inside-out, without leaking IP to public APIs."
            },
            {
                title: "Computer Vision at the Edge",
                desc: "Deploy AI where the action is. We build optimized vision models that run on edge devices (NVIDIA Jetson, Raspberry Pi) to detect defects, monitor safety compliance, or track inventory in real-time, even without internet connectivity."
            },
            {
                title: "MLOps & Model Governance",
                desc: "An AI model is only as good as its maintenance. We set up robust MLOps pipelines using MLflow or Kubeflow to automate retraining, monitor for data drift, and ensure your models remain accurate and reliable over time."
            }
        ],
        faq: [
            { question: "How much data do we need?", answer: "Less than you think. With Transfer Learning, we can fine-tune powerful existing models with just a few hundred examples." },
            { question: "Is it a black box?", answer: "No. We prioritize explainable AI (XAI) techniques so you understand why the model makes a decision." }
        ]
    },
    automation: {
        title: 'Intelligent Automation',
        description: 'Eliminate "busy work". We deploy resilient digital workers (RPA) combined with AI to handle complex, messy processes from end-to-end.',
        icon: FaCogs,
        stats: [
            { value: '500k+', label: 'Hours Returned' },
            { value: 'Zero', label: 'Processing Errors' },
            { value: '24/7', label: 'Worker Availability' },
            { value: '30%', label: 'OpEx Reduction' }
        ],
        certifications: ['UiPath Diamond Partner', 'Automation Anywhere Master', 'Microsoft Power Platform Lead'],
        testimonial: {
            quote: "Our claims process used to take 5 days and 12 humans. Fraylon's bots do it in 4 minutes with 100% accuracy. Our team now focuses on fraud investigation.",
            author: "Elena Rodriguez",
            role: "Claims Director",
            company: "SafeGuard Insurance"
        },
        comparison: [
            { feature: 'Resilience', fraylon: 'Self-healing bots with AI exception handling', others: 'Scripts break on UI changes' },
            { feature: 'Scope', fraylon: 'End-to-End process (API + UI + AI)', others: 'Task-based mouse clicking' },
            { feature: 'Governance', fraylon: 'Central Control Room & Audit Logs', others: 'Shadow IT & Unmanaged bots' }
        ],
        capabilities: [
            { title: 'Cognitive RPA', desc: 'Bots that can read emails, process PDFs, and make decisions using AI skills.' },
            { title: 'ERP Integration', desc: 'Automate data entry into SAP, Oracle, and Salesforce without API limits.' },
            { title: 'Process Mining', desc: 'X-ray your workflows to scientifically identify bottlenecks before automating.' },
            { title: 'Chatbot Orchestration', desc: 'Connect front-end chat interfaces to back-end execution bots.' }
        ],
        benefits: [
            'Scale capacity instantly during peak seasons',
            'Eliminate human error in payroll, finance, and compliance',
            'Reduce processing cost per transaction by 90%',
            'Improve employee morale by removing robotic tasks'
        ],
        techStack: ['UiPath', 'Power Automate', 'Automation Anywhere', 'Celonis', 'Abbyy', 'Python'],
        methodology: [
            { step: '01', title: 'Process X-Ray', desc: 'We don\'t just automate; we optimize. We fix broken processes first.' },
            { step: '02', title: 'Bot Design', desc: 'We design modular, reusable components so one fix updates all bots.' },
            { step: '03', title: 'UAT & Stress', desc: 'We hammer the bots with edge cases and bad data to ensure stability.' },
            { step: '04', title: 'CoE Managed', desc: 'Our Center of Excellence monitors bots 24/7, restarting them if they get stuck.' }
        ],
        caseStudies: [
            { client: 'National Bank', tag: 'KYC Automation', title: 'Automating 10k daily customer verifications', metric: '95%', label: 'Auto-Approval Rate' },
            { client: 'Logistics', tag: 'Invoice Processing', title: 'Extracting data from messy PDFs', metric: '60s', label: 'Avg Process Time' }
        ],
        challenge: {
            title: "Invoice Chaos",
            problem: "Accounts Payable processed 5,000 invoices monthly by hand. Late payments incurred penalties.",
            solution: "We built an Intelligent Document Processing pipeline using UiPath Document Understanding to read PDF invoices.",
            outcome: "95% of invoices are now processed straight-through. Staff focuses on exceptions only."
        },
        architecture: {
            title: "Hyperautomation Fabric",
            description: "A convergence of RPA, APIs, and AI for total process coverage.",
            highlights: ["Unattended Robot Fleet", "Human-in-the-Loop Validation", "Centralized Analytics", "Secure Credential Vault"]
        },
        detailedFeatures: [
            {
                title: "Cognitive RPA",
                desc: "We upgrade standard RPA bots with AI skills. Using Document Understanding and NLP, our bots can read unstructured emails, extract data from messy PDFs, and make intelligent decisions, expanding the scope of what you can automate."
            },
            {
                title: "Process Mining & Discovery",
                desc: "Stop guessing what to automate. We use Process Mining tools (like Celonis) to X-ray your actual workflows, identifying bottlenecks, inefficiencies, and the highest-ROI opportunities for automation based on real user data."
            },
            {
                title: "Intelligent Document Processing (IDP)",
                desc: "Paperwork is the enemy of speed. Our IDP solutions automatically classify, extract, and validate data from invoices, contracts, and claims, achieving straight-through processing rates of over 95%."
            }
        ],
        faq: [
            { question: "Will bots replace our jobs?", answer: "No. They take the 'robot' out of the human. Your team moves to higher-value analytical work." },
            { question: "What if the UI changes?", answer: "Modern RPA uses AI computer vision and sturdy selectors to adapt to minor UI changes automatically." }
        ]
    },
    cyber: {
        title: 'Cybersecurity',
        description: 'Passive monitoring isn\'t enough. We prefer active defense: Threat Hunting, Zero Trust architectures, and rapid automated response.',
        icon: FaShieldAlt,
        stats: [
            { value: 'Zero', label: 'Ransomware Payouts' },
            { value: '15min', label: 'Mean Time to Contain' },
            { value: '100%', label: 'Audit Pass Rate' },
            { value: '24/7', label: 'Eyes on Glass' }
        ],
        certifications: ['CISSP Team', 'ISO 27001 Lead Auditors', 'OSCP Offensive Security', 'CrowdStrike Partners'],
        testimonial: {
            quote: "We thought we were secure until Fraylon's red team got in within 4 hours. They helped us rebuild our perimeter into a true Zero Trust fortress.",
            author: "Michael Chang",
            role: "CISO",
            company: "TechFlow Systems"
        },
        comparison: [
            { feature: 'Philosophy', fraylon: 'Assume Breach & Zero Trust', others: 'Castle & Moat (Outdated)' },
            { feature: 'Response', fraylon: 'Automated Playbooks (SOAR)', others: 'Manual investigation (Too slow)' },
            { feature: 'Coverage', fraylon: 'Identity, Cloud, Endpoint, Mobile', others: 'Just Firewall & Antivirus' }
        ],
        capabilities: [
            { title: 'Zero Trust Rollout', desc: 'Verify every user, every device, every time. No more trusted zones.' },
            { title: 'MDR & SOC', desc: '24/7 Managed Detection and Response. We hunt threats while you sleep.' },
            { title: 'Cloud Security Posture', desc: 'Continuous scanning of AWS/Azure to close open buckets and ports.' },
            { title: 'Offensive Security', desc: 'Regular penetration testing and red teaming to find holes before attackers do.' }
        ],
        benefits: [
            'Sleep better knowing active hunters are watching your network',
            'Stop lateral movement dead in its tracks',
            'Comply with GDPR, HIPAA, and PCI without stress',
            'Secure your remote workforce without VPN bottlenecks'
        ],
        techStack: ['CrowdStrike', 'SentinelOne', 'Splunk', 'Wiz', 'Okta', 'Zscaler', 'Palo Alto'],
        methodology: [
            { step: '01', title: 'Hardening', desc: 'We lock down the basics: MFA, patching, and reducing the attack surface.' },
            { step: '02', title: 'Detection', desc: 'We deploy EDR agents and SIEM collectors to see every digital footprint.' },
            { step: '03', title: 'Response', desc: 'We script automated actions to isolate infected hosts instantly.' },
            { step: '04', title: 'Resilience', desc: 'We practice disaster recovery. If the worst happens, we get you back online fast.' }
        ],
        caseStudies: [
            { client: 'SaaS Platform', tag: 'DevSecOps', title: 'Integrating security into CI/CD pipeline', metric: '0', label: 'Prod Vulnerabilities' },
            { client: 'Regional Hospital', tag: 'Ransomware Defense', title: 'Stopping a live attack in 12 minutes', metric: '$0', label: 'Data Loss' }
        ],
        challenge: {
            title: "Supply Chain Risk",
            problem: "A client's vendor was breached, putting their shared data at risk.",
            solution: "We implemented a Zero Trust architecture where no user or system is trusted by default, regardless of location.",
            outcome: "Lateral movement was blocked. The 'blast radius' of the breach was contained to a single non-critical isolator."
        },
        architecture: {
            title: "Zero Trust Network",
            description: "Never trust, always verify.",
            highlights: ["Micro-segmentation", "Just-in-Time Access", "Continuous Auth Validation", "Encrypted Everywhere"]
        },
        detailedFeatures: [
            {
                title: "Zero Trust Architecture",
                desc: "The castle-and-moat security model is dead. We implement Zero Trust, verifying every user and device for every request. By using identity-aware proxies and micro-segmentation, we ensure that a breach in one area cannot spread laterally."
            },
            {
                title: "Managed Detection & Response (MDR)",
                desc: "Security isn't a 9-to-5 job. Our 24/7 SOC utilizes advanced EDR and SIEM tools to actively hunt for threats. We don't just alert you; we investigate and contain incidents within minutes, minimizing potential damage."
            },
            {
                title: "Offensive Security (Red Teaming)",
                desc: "The best defense is a good offense. Our certified ethical hackers simulate sophisticated attacks against your infrastructure to identify weaknesses. We provide detailed remediation paths to patch holes before real attackers find them."
            }
        ],
        faq: [
            { question: "Does security slow us down?", answer: "Not with DevSecOps. We automate security checks so they happen instantly in the pipeline." },
            { question: "We are small, are we a target?", answer: "Yes. Automated bots scan every IP on the internet. Everyone is a target." }
        ]
    },
    'supply-chain': {
        title: 'Smart Supply Chain',
        description: 'Fragile chains break. We build resilient, predictive supply networks that adapt to disruptions in real-time using IoT and AI.',
        icon: FaTruck,
        stats: [
            { value: '$50M+', label: 'Inventory Unlocked' },
            { value: '99%', label: 'On-Time Delivery' },
            { value: 'Real-time', label: 'Global Visibility' },
            { value: '30%', label: 'Logistic Savings' }
        ],
        certifications: ['SAP Gold Partner', 'Oracle SCM Masters', 'Gartner Supply Chain Leaders'],
        testimonial: {
            quote: "Before Fraylon, we were flying blind. Now I know exactly where every container is, and the AI warns me of delays days before they happen.",
            author: "Robert Vance",
            role: "VP Operations",
            company: "Global Motors"
        },
        comparison: [
            { feature: 'Visibility', fraylon: 'Real-time Digital Twin', others: 'Excel & Phone calls' },
            { feature: 'Planning', fraylon: 'Probabilistic AI Forecasting', others: 'Historical Averages' },
            { feature: 'Execution', fraylon: 'Automated Re-routing', others: 'Manual Firefighting' }
        ],
        capabilities: [
            { title: 'Digital Twin', desc: 'A live virtual replica of your entire supply chain to simulate scenarios.' },
            { title: 'Demand Sensing', desc: 'Use weather, trends, and social data to predict what people will buy.' },
            { title: 'Smart Warehousing', desc: 'Robotics and vision systems to automate pick, pack, and sort.' },
            { title: 'Supplier Risk', desc: 'AI monitoring of supplier financial health and geopolitical risks.' }
        ],
        benefits: [
            'Reduce safety stock while improving service levels',
            'React to port strikes or weather events instantly',
            'Optimize routes dynamically to save fuel',
            'Trace sustainability metrics from source to shelf'
        ],
        techStack: ['SAP IBP', 'Blue Yonder', 'Project44', 'Coupa', 'Kafka', 'Tableau'],
        methodology: [
            { step: '01', title: 'Connect', desc: 'We break silos between ERP, WMS, and TMS to create a single source of truth.' },
            { step: '02', title: 'Illuminate', desc: 'Visual dashboards show you the bottleneck immediately.' },
            { step: '03', title: 'Predict', desc: 'We replace "gut feel" ordering with algorithmic precision.' },
            { step: '04', title: 'Automate', desc: 'The system places replenishment orders automatically within approved limits.' }
        ],
        caseStudies: [
            { client: 'FMCG Giant', tag: 'Inventory Opt', title: 'Slashing waste with demand sensing', metric: '25%', label: 'Inventory Reduction' },
            { client: 'Auto Manufacturer', tag: 'Just-in-Time', title: 'Keeping lines running during chip shortage', metric: '100%', label: 'Uptime Maintained' }
        ],
        challenge: {
            title: "Inventory Black Holw",
            problem: "Once goods left the factory, the client had no idea where they were until they arrived at the warehouse weeks later.",
            solution: "We integrated Project44 APIs to track ocean and air freight in real-time, feeding a central control tower.",
            outcome: "Team can now proactively manage exceptions. Expedited freight costs reduced by 30%."
        },
        architecture: {
            title: "Digital Supply Chain Twin",
            description: "A virtual replica of your logistics network.",
            highlights: ["Real-time Sensor Data", "Supplier Portal Integration", "Predictive Alerting Engine", "Scenario Planning"]
        },
        detailedFeatures: [
            {
                title: "Supply Chain Digital Twin",
                desc: "We create a living digital replica of your entire supply network. This allows you to simulate 'what-if' scenarios—like port strikes or supplier failures—and proactively plan mitigation strategies before disruptions occur."
            },
            {
                title: "Demand Sensing & Formatting",
                desc: "Move beyond historical averages. We use AI to analyze real-time market signals (weather, trends, economic data) to predict demand with high precision, optimizing inventory levels and reducing stockouts."
            },
            {
                title: "Logistics Control Tower",
                desc: "Gain total visibility. We integrate data from ERPs, WMS, and carriers into a single Control Tower dashboard. Track shipments in real-time, monitor carrier performance, and manage exceptions from one central command center."
            }
        ],
        faq: [
            { question: "Do we need to replace our ERP?", answer: "No. We layer our solutions on top of your existing ERP (SAP, Oracle) to enhance, not replace." },
            { question: "Is it expensive to integrate carriers?", answer: "We use modern aggregator networks so you connect once to us, and access thousands of carriers." }
        ]
    },
    // Missing solutions added below:
    sap: {
        title: 'SAP S/4HANA Transformation',
        description: 'Modernize your core ERP with S/4HANA. We ensure a seamless transition to the intelligent enterprise.',
        icon: SiSap,
        stats: [
            { value: '30%', label: 'Faster Implementation' },
            { value: '100%', label: 'Data Migration Accuracy' },
            { value: '24/7', label: 'Support Coverage' },
            { value: '50+', label: 'Certified Consultants' }
        ],
        certifications: ['SAP Gold Partner', 'SAP Certified Consultants'],
        testimonial: {
            quote: "The migration to S/4HANA was daunting, but their team made it feel manageable and executed flawlessly.",
            author: "Johann Müller",
            role: "CIO",
            company: "German AutoParts"
        },
        comparison: [
            { feature: 'Implementation', fraylon: 'Agile & Template-based', others: 'Waterfall & Lengthy' },
            { feature: 'Customization', fraylon: 'Keep the Core Clean', others: 'Heavy Customization' },
            { feature: 'Support', fraylon: 'Proactive Monitoring', others: 'Reactive Tickets' }
        ],
        capabilities: [
            { title: 'S/4HANA Migration', desc: 'Brownfield, Greenfield, or Selective Data Transition strategies tailored to your needs.' },
            { title: 'SAP Fiori UX', desc: 'Enhance user experience with modern, responsive Fiori apps.' },
            { title: 'SAP BTP', desc: 'Innovate faster by extending SAP capabilities on the Business Technology Platform.' },
            { title: 'SAP Analytics Cloud', desc: 'Real-time insights and planning integrated directly with your ERP.' }
        ],
        benefits: [
            'Real-time financial performace visibility',
            'Streamlined procurement and inventory processes',
            'Enhanced user productivity with modern UX',
            'Scalable platform for future innovation'
        ],
        techStack: ['SAP S/4HANA', 'SAP BTP', 'SAP Fiori', 'SAP Analytics Cloud', 'ABAP'],
        methodology: [
            { step: '01', title: 'Discover', desc: 'Assess current landscape and define the S/4HANA roadmap.' },
            { step: '02', title: 'Prepare', desc: 'Set up the environment and clean data for migration.' },
            { step: '03', title: 'Realize', desc: 'Configure, customize, and test the new system iteratively.' },
            { step: '04', title: 'Deploy', desc: 'Cutover to production and provide hypercare support.' }
        ],
        caseStudies: [
            { client: 'Global Manufacturing', tag: 'S/4HANA', title: 'Global ERP Consolidation', metric: '40%', label: 'Process Efficiency' },
            { client: 'Retail Chain', tag: 'Analytics', title: 'Real-time Sales Dashboard', metric: '20%', label: 'Revenue Increase' }
        ],
        challenge: {
            title: "Legacy ERP Bottlenecks",
            problem: "An aging ECC system was slowing down financial closing and lacked real-time reporting capabilities.",
            solution: "We executed a Brownfield migration to S/4HANA, optimizing code and database performance.",
            outcome: "Financial close time reduced by 5 days. Real-time dashboards enable faster decision-making."
        },
        architecture: {
            title: "Intelligent Enterprise Core",
            description: "S/4HANA as the digital core, connected to cloud innovations.",
            highlights: ["Clean Core Principle", "Cloud-Native Extensions", "Integrated Analytics", "Intelligent Automations"]
        },
        detailedFeatures: [
            {
                title: "Brownfield & Greenfield Migration",
                desc: "We tailor the path to S/4HANA based on your needs. Whether it's a 'Greenfield' reimplementation to standardize processes or a 'Brownfield' technical conversion to preserve history, our automated tools accelerate the timeline and reduce risk."
            },
            {
                title: "SAP Business Technology Platform (BTP)",
                desc: "Keep your core clean. We build custom extensions, mobile apps, and integrations on SAP BTP rather than modifying the ERP core. This ensures your upgrades are painless and your system remains agile."
            },
            {
                title: "embedded Analytics & Fiori UX",
                desc: "User adoption makes or breaks ERP projects. We deploy modern SAP Fiori apps that are intuitive and mobile-ready, along with embedded analytics that bring real-time insights directly into the transaction screens."
            }
        ],
        faq: [
            { question: "How long does a migration take?", answer: "It varies, but a typical Brownfield migration can be completed in 6-9 months." },
            { question: "Do we need to retrain staff?", answer: "Yes, we provide comprehensive training, especially for the new Fiori user interface." }
        ]
    },
    oracle: {
        title: 'Oracle Cloud Solutions',
        description: 'Leverage the power of Oracle Cloud Infrastructure (OCI) and Fusion Applications for high-performance enterprise workloads.',
        icon: SiOracle,
        stats: [
            { value: '40%', label: 'TCO Reduction' },
            { value: '2x', label: 'Performance Gain' },
            { value: '99.95%', label: 'Availability' },
            { value: 'Global', label: 'Data Centers' }
        ],
        certifications: ['Oracle Cloud Service Partner', 'OCI Certified Architects'],
        testimonial: {
            quote: "Moving our database to OCI gave us incredible performance gains at a fraction of the cost of other clouds.",
            author: "Sarah Jenkins",
            role: "VP of Engineering",
            company: "DataFlow Systems"
        },
        comparison: [
            { feature: 'Database', fraylon: 'Autonomous Database', others: 'Manual Management' },
            { feature: 'Cost', fraylon: 'Predictable Low Pricing', others: 'High Data Egress Fees' },
            { feature: 'Performance', fraylon: 'Bare Metal Performance', others: 'Virtualized Overhead' }
        ],
        capabilities: [
            { title: 'Cloud Migration', desc: 'Move Oracle workloads to OCI with minimal downtime.' },
            { title: 'Oracle Fusion Apps', desc: 'Implement ERP, HCM, and SCM Cloud for modern business processes.' },
            { title: 'Autonomous Database', desc: 'Self-driving, self-securing, and self-repairing database services.' },
            { title: 'Integration Cloud', desc: 'Seamlessly connect on-premise and cloud applications.' }
        ],
        benefits: [
            'Lower total cost of ownership compared to on-premise',
            'Superior performance for Oracle Database workloads',
            'Automated management reduces administrative overhead',
            'Robust security built-in from the ground up'
        ],
        techStack: ['Oracle OCI', 'Oracle Fusion', 'Autonomous DB', 'WebLogic', 'GoldenGate'],
        methodology: [
            { step: '01', title: 'Assess', desc: 'Evaluate workloads for cloud readiness and TCO analysis.' },
            { step: '02', title: 'Design', desc: 'Architect secure and scalable OCI infrastructure.' },
            { step: '03', title: 'Migrate', desc: 'Execute migration using tools like Zero Downtime Migration.' },
            { step: '04', title: 'Optimize', desc: 'Fine-tune performance and implement cost governance.' }
        ],
        caseStudies: [
            { client: 'Logistics Provider', tag: 'OCI Migration', title: 'Mission-Critical App to Cloud', metric: '50%', label: 'Cost Savings' },
            { client: 'Finance Corp', tag: 'Analytics', title: 'High-Performance Data Warehouse', metric: '10x', label: 'Query Speedup' }
        ],
        challenge: {
            title: "Database Scalability",
            problem: "On-premise Oracle databases were hitting performance limits during peak transaction times.",
            solution: "Migrated to Oracle Autonomous Transaction Processing on OCI with auto-scaling enabled.",
            outcome: "System automatically scales CPUs during peaks, ensuring consistent performance without manual intervention."
        },
        architecture: {
            title: "OCI High Availability",
            description: "Resilient architecture spanning multiple Availability Domains.",
            highlights: ["Autonomous Database RAC", "Load Balancing Service", "FastConnect for Hybrid Cloud", "Data Guard for DR"]
        },
        detailedFeatures: [
            {
                title: "Oracle Autonomous Database",
                desc: "Leverage the world's first self-driving database. We migrate your workloads to Oracle Autonomous Database (ATP/ADW), which automatically patches, tunes, and scales itself, eliminating manual DBA toil and human error."
            },
            {
                title: "Move and Improve to OCI",
                desc: "Don't just lift and shift. We re-architect your Oracle applications (E-Business Suite, PeopleSoft, JD Edwards) for Oracle Cloud Infrastructure (OCI), taking advantage of its superior price-performance and built-in security features."
            },
            {
                title: "Hybrid Cloud with FastConnect",
                desc: "Keep your sensitive data where you need it. We build high-speed, low-latency hybrid architectures using Oracle FastConnect, linking your on-premise data centers seamlessly with OCI regions."
            }
        ],
        faq: [
            { question: "Is OCI only for Oracle DBs?", answer: "No, OCI is a general-purpose cloud supporting all types of workloads, including containers and VMs." },
            { question: "How hard is it to move from AWS?", answer: "OCI is compatible with industry standards (Terraform, K8s), making migration straightforward." }
        ]
    },
    hr: {
        title: 'HR Transformation',
        description: 'Empower your workforce with modern HR technologies. We digitize the employee lifecycle from hire to retire.',
        icon: FaUserTie,
        stats: [
            { value: '30%', label: 'HR Admin Efficiency' },
            { value: '50%', label: 'Faster Onboarding' },
            { value: 'High', label: 'Employee NPS' },
            { value: 'Global', label: 'Compliance' }
        ],
        certifications: ['Workday Partners', 'SAP SuccessFactors Expert'],
        testimonial: {
            quote: "Our employee experience completely transformed. Self-service is now the norm, and our HR team focuses on strategy, not paperwork.",
            author: "Linda Wu",
            role: "CHRO",
            company: "Global Tech Inc."
        },
        comparison: [
            { feature: 'Experience', fraylon: 'Consumer-grade Mobile UX', others: 'Clunky Legacy Portals' },
            { feature: 'Analytics', fraylon: 'Predictive Workforce Insights', others: 'Basic Headcount Reports' },
            { feature: 'Integration', fraylon: 'Seamless Payroll & IT flows', others: 'Siloed HR Data' }
        ],
        capabilities: [
            { title: 'HCM Implementation', desc: 'Deploying Workday, SuccessFactors, or Oracle HCM.' },
            { title: 'Service Delivery', desc: 'Setting up HR Helpdesks and Knowledge Bases.' },
            { title: 'People Analytics', desc: 'Dashboards for retention, diversity, and performance.' },
            { title: 'Learning Experience', desc: 'Modern LMS platforms for upskilling.' }
        ],
        benefits: [
            'Attract and retain top talent with great digital experiences',
            'Reduce administrative burden through automation',
            'Make data-driven decisions about your workforce',
            'Ensure compliance with global labor regulations'
        ],
        techStack: ['Workday', 'SAP SuccessFactors', 'Oracle HCM', 'ServiceNow HR', 'BambooHR'],
        methodology: [
            { step: '01', title: 'Align', desc: 'Map HR strategy to technology capability.' },
            { step: '02', title: 'Design', desc: 'Configure processes for global consistency and local compliance.' },
            { step: '03', title: 'Change', desc: 'Manage the cultural shift and user adoption.' },
            { step: '04', title: 'Support', desc: 'Ongoing optimization of the HR platforms.' }
        ],
        caseStudies: [
            { client: 'Pharma Co', tag: 'Core HR', title: 'Global HCM Rollout', metric: '100%', label: 'Data Visibility' },
            { client: 'Tech Startup', tag: 'Onboarding', title: 'Automated Onboarding Flow', metric: '-3 Days', label: 'Time-to-Productivity' }
        ],
        challenge: {
            title: "Fragmented HR Data",
            problem: "Employee data was scattered across spreadsheets and local payroll systems, making global reporting impossible.",
            solution: "Implemented a single global instance of Workday HCM as the source of truth.",
            outcome: "Real-time visibility into global headcount and costs. Automated data flows to payroll providers."
        },
        architecture: {
            title: "Connected People Ecosystem",
            description: "Core HR integrated with the broader enterprise landscape.",
            highlights: ["Unified Employee Profile", "API-led Integrations", "Secure Identity Management", "Mobile-First Access"]
        },
        detailedFeatures: [
            {
                title: "Global Core HR (HCM)",
                desc: "Create a single source of truth for your workforce. We implement global HCM platforms (Workday, SuccessFactors) that standardize HR data across all countries while respecting local regulations and compliance needs."
            },
            {
                title: "Employee Experience (EX) Platforms",
                desc: "Treat employees like customers. We deploy consumer-grade portals and mobile apps that allow staff to manage their own data, benefits, and learning, reducing the administrative burden on your HR teams."
            },
            {
                title: "People Analytics & Workforce Planning",
                desc: "Stop flying blind. Our advanced analytics dashboards provide real-time visibility into headcount, turnover, and skills gaps, enabling you to make data-driven decisions about talent strategy and retention."
            }
        ],
        faq: [
            { question: "Can we keep our local payroll?", answer: "Yes, we integrate Core HR systems with local payroll providers seamlessly." },
            { question: "How do you handle data privacy?", answer: "We strictly adhere to GDPR and local data residency requirements in our system designs." }
        ]
    },
    network: {
        title: 'Network Modernization',
        description: 'Build the connectivity foundation for the digital era. SD-WAN, SASE, and 5G solutions for an agile enterprise.',
        icon: FaNetworkWired,
        stats: [
            { value: '50%', label: 'Lower WAN Costs' },
            { value: '10x', label: 'Bandwidth Increase' },
            { value: 'Zero', label: 'Touch Provisioning' },
            { value: 'Secure', label: 'Edge Access' }
        ],
        certifications: ['Cisco Gold Partner', 'Palo Alto Networks Expert', 'Fortinet NSE'],
        testimonial: {
            quote: "Our branch connectivity was slow and expensive. SD-WAN gave us direct internet access securely, boosting app performance massively.",
            author: "Tom Baker",
            role: "Network Manager",
            company: "Retail Chains Ltd."
        },
        comparison: [
            { feature: 'Architecture', fraylon: 'Software-Defined (SD-WAN)', others: 'Rigid MPLS Circuits' },
            { feature: 'Security', fraylon: 'Integrated SASE', others: 'Bolt-on Firewalls' },
            { feature: 'Management', fraylon: 'Centralized Cloud Controller', others: 'CLI on every device' }
        ],
        capabilities: [
            { title: 'SD-WAN', desc: 'Intelligent traffic routing over any transport (MPLS, Broadband, LTE).' },
            { title: 'SASE', desc: 'Converging network and security tailored for the hybrid workforce.' },
            { title: 'Wi-Fi 6 & 5G', desc: 'Next-gen wireless for high-density and low-latency environments.' },
            { title: 'Network Automation', desc: 'Scripting infrastructure changes (NetDevOps) to eliminate errors.' }
        ],
        benefits: [
            'Reduce reliance on expensive MPLS lines',
            'Improve application performance for remote users',
            'Enhance security posture at the network edge',
            'Simplify management with a single pane of glass'
        ],
        techStack: ['Cisco SD-WAN', 'Meraki', 'Versa', 'Palo Alto Prisma', 'Aruba', 'Ansible'],
        methodology: [
            { step: '01', title: 'Audit', desc: 'Assess current network traffic patterns and bottlenecks.' },
            { step: '02', title: 'Design', desc: 'Blueprint a software-defined architecture.' },
            { step: '03', title: 'Pilot', desc: 'Test at select sites to validate performance policies.' },
            { step: '04', title: 'Rollout', desc: 'Zero-touch deployment to hundreds of sites rapidly.' }
        ],
        caseStudies: [
            { client: 'Bank', tag: 'SD-WAN', title: 'Connecting 500 Branches', metric: '$2M', label: 'Annual Savings' },
            { client: 'Manufacturing', tag: 'Wi-Fi 6', title: 'Smart Factory Connectivity', metric: '100%', label: 'Coverage' }
        ],
        challenge: {
            title: "Slow Cloud Access",
            problem: "Backhauling all traffic to the data center via MPLS was killing performance for Office 365 and SaaS apps.",
            solution: "Deployed SD-WAN with local internet breakout, enabling direct secure access to cloud services.",
            outcome: "Latency reduced by 60%. Microsoft Teams calls are now crystal clear."
        },
        architecture: {
            title: "Secure Access Service Edge",
            description: "Network and security as a unified cloud service.",
            highlights: ["Cloud-Native Backbone", "Identity-Aware Routing", "Zero Trust Access", "Global PoP Optimization"]
        },
        detailedFeatures: [
            {
                title: "Software-Defined WAN (SD-WAN)",
                desc: "Cut the cord on expensive MPLS. We deploy intelligent SD-WAN solutions that bond multiple low-cost internet links to create a resilient, high-bandwidth enterprise network, optimizing traffic flow for critical apps."
            },
            {
                title: "SASE (Secure Access Service Edge)",
                desc: "Network and security are no longer separate. We implement SASE architectures that converge SD-WAN with cloud-native security (SWG, CASB, ZTNA), ensuring users have secure, fast access from anywhere."
            },
            {
                title: "Network Automation (NetDevOps)",
                desc: "Treat your network like code. We use Ansible and Python to automate configuration management and updates across thousands of devices, eliminating configuration drift and manual errors."
            }
        ],
        faq: [
            { question: "Is internet secure enough?", answer: "With SD-WAN encrypted overlays and cloud firewalls, it is as secure, if not more, than private lines." },
            { question: "What happens if a link fails?", answer: "The system sub-second fails over to the backup link (e.g., LTE) without dropping the call." }
        ]
    },
    'cloud-sec': {
        title: 'Cloud Security',
        description: 'Secure your cloud journey. From CSPM to CNAPP, we ensure your cloud infrastructure is compliant and defended.',
        icon: FaLock,
        stats: [
            { value: '100%', label: 'Visibility' },
            { value: 'Auto', label: 'Remediation' },
            { value: 'DevSecOps', label: 'Integration' },
            { value: 'Compliance', label: 'Mapping' }
        ],
        certifications: ['AWS Security Competency', 'Azure Security Engineers', 'CCSP'],
        testimonial: {
            quote: "We had open S3 buckets and no idea who had access. Fraylon locked it down and gave us a dashboard to keep it that way.",
            author: "Emily Davis",
            role: "security architect",
            company: "CloudNative Startup"
        },
        comparison: [
            { feature: 'Approach', fraylon: 'Code-First & Automated', others: 'Manual Audits' },
            { feature: 'Coverage', fraylon: 'Multi-Cloud & Container', others: 'Single Cloud Silos' },
            { feature: 'Speed', fraylon: 'Remediation in minutes', others: 'Weeks to fix findings' }
        ],
        capabilities: [
            { title: 'CSPM', desc: 'Cloud Security Posture Management to detect misconfigurations.' },
            { title: 'CNAPP', desc: 'Cloud-Native Application Protection Platform for workloads.' },
            { title: 'Identity Security', desc: 'Least privilege access enforcement (CIEM).' },
            { title: 'Container Security', desc: 'Scanning images and runtime protection for K8s.' }
        ],
        benefits: [
            'Prevent data breaches caused by misconfiguration',
            'Embed security into the CI/CD pipeline',
            'Gain unified visibility across AWS, Azure, and GCP',
            'Automate compliance reporting for auditors'
        ],
        techStack: ['Wiz', 'Prisma Cloud', 'Lacework', 'Aqua Security', 'HashiCorp Vault'],
        methodology: [
            { step: '01', title: 'Scan', desc: 'Connect tools to APIs to discover accurate asset inventory.' },
            { step: '02', title: 'Prioritize', desc: 'Identify critical risks based on exposure and impact.' },
            { step: '03', title: 'Remediate', desc: 'Fix issues automatically or via guided workflows.' },
            { step: '04', title: 'Shift Left', desc: 'Prevent drift by scanning IaC templates before deployment.' }
        ],
        caseStudies: [
            { client: 'Fintech', tag: 'Compliance', title: 'Achieving PCI-DSS in Cloud', metric: 'Pass', label: 'First Audit' },
            { client: 'Media', tag: 'DevSecOps', title: 'Blocking Vulnerable Images', metric: 'Zero', label: 'Critical Vulns in Prod' }
        ],
        challenge: {
            title: "Shadow IT Growth",
            problem: "Developers were spinning up unmanaged resources in multiple regions, bypassing security controls.",
            solution: "Implemented a CSPM tool with auto-remediation policies to terminate unauthorized resources.",
            outcome: "100% asset visibility regained. Cloud spend optimized by removing rogue instances."
        },
        architecture: {
            title: "Defense in Depth",
            description: "Layered security controls for cloud environments.",
            highlights: ["Perimeter Firewalling", "Workload Micro-segmentation", "Data Encryption", "Activity Monitoring"]
        },
        detailedFeatures: [
            {
                title: "Cloud Security Posture Management (CSPM)",
                desc: "Gain visibility into your risk. We deploy CSPM tools that continuously scan your AWS/Azure environments against compliance frameowrks (CIS, NIST), automatically detecting and fixing dangerous misconfigurations."
            },
            {
                title: "Cloud Workload Protection (CWPP)",
                desc: "Secure the runtime. Our CWPP solutions protect your servers, containers, and serverless functions from attacks in real-time, using behavioral analysis to stop malicious activity."
            },
            {
                title: "DevSecOps Integration",
                desc: "Shift security left. We integrate security scanners (SAST, DAST, SCA) directly into your CI/CD pipelines, empowering developers to fix vulnerabilities before code ever reaches production."
            }
        ],
        faq: [
            { question: "Does this impact developers?", answer: "We integrate into their tools (IDE, Git) to give fast feedback, not block them unnecessarily." },
            { question: "Do you support hybrid?", answer: "Yes, our modern tools can extend visibility to on-premise Kubernetes and VMs." }
        ]
    },
    grc: {
        title: 'Governance, Risk & Compliance',
        description: 'Navigate the complex regulatory landscape with confidence. We digitize GRC processes to turn compliance into a business enabler.',
        icon: FaBalanceScale,
        stats: [
            { value: '50%', label: 'Less Audit Effort' },
            { value: 'Real-time', label: 'Risk Monitoring' },
            { value: 'Unified', label: 'Control Framework' },
            { value: 'Trust', label: 'Customer' }
        ],
        certifications: ['CISA', 'CISM', 'ISO 27001 Lead Implementer'],
        testimonial: {
            quote: "Audits used to freeze the company for a month. Now, we just export the report from our GRC platform. It's a non-event.",
            author: "Mark Evans",
            role: "Compliance Officer",
            company: "HealthData Corp"
        },
        comparison: [
            { feature: 'Management', fraylon: 'Integrated GRC Platform', others: 'Spreadsheets & Email' },
            { feature: 'Controls', fraylon: 'Automated Evidence Collection', others: 'Manual Screenshots' },
            { feature: 'Perspective', fraylon: 'Risk-Based Approach', others: 'Check-the-box' }
        ],
        capabilities: [
            { title: 'eGRC Implementation', desc: 'Deploying platforms like ServiceNow GRC or Archer.' },
            { title: 'Compliance Automation', desc: 'Continuous monitoring of controls against frameworks (ISO, SOC2).' },
            { title: 'Third-Party Risk', desc: 'Managing vendor risk assessments efficiently.' },
            { title: 'Policy Management', desc: 'Lifecycle management of corporate policies and attestations.' }
        ],
        benefits: [
            'Reduce the cost and stress of external audits',
            'Proactively identify and mitigate enterprise risks',
            'Build trust with customers through demonstrable compliance',
            'Eliminate manual data collection for evidence'
        ],
        techStack: ['ServiceNow GRC', 'OneTrust', 'Vanta', 'Drata', 'Archer'],
        methodology: [
            { step: '01', title: 'Harmonize', desc: 'Map controls across multiple frameworks to test once, comply many.' },
            { step: '02', title: 'Automate', desc: 'Connect to systems to pull evidence automatically.' },
            { step: '03', title: 'Monitor', desc: 'Dashboard view of compliance posture in real-time.' },
            { step: '04', title: 'Improve', desc: 'Continuous loop of risk assessment and control refinement.' }
        ],
        caseStudies: [
            { client: 'SaaS Platform', tag: 'SOC 2', title: 'SOC 2 Type II Readiness', metric: '3 Weeks', label: 'To Audit Ready' },
            { client: 'Bank', tag: 'Vendor Risk', title: 'Automating Vendor Assessments', metric: '75%', label: 'Faster Onboarding' }
        ],
        challenge: {
            title: "Spreadsheet Fatigue",
            problem: "Managing ISO 27001 compliance via Excel was error-prone and lacked version control.",
            solution: "Migrated to a GRC platform that centralized risks, controls, and evidence.",
            outcome: "Single source of truth established. Audit preparation time reduced by 60%."
        },
        architecture: {
            title: "Integrated Risk Management",
            description: "Connecting the dots between IT, Security, and Business objectives.",
            highlights: ["Unified Compliance Framework", "Automated Connectors", "Risk Register", "Executive Dashboards"]
        },
        detailedFeatures: [
            {
                title: "eGRC Platform Implementation",
                desc: "Ditch the spreadsheets. We implement market-leading GRC platforms (ServiceNow, Archer, OneTrust) to centralize all your risk and compliance data, streamlining workflows and reporting."
            },
            {
                title: "Automated Compliance Monitoring",
                desc: "Continuous audit readiness. We build automated connectors that pull evidence directly from your technical systems, ensuring you are always ready for SOC2, ISO, or HIPAA audits without the manual scramble."
            },
            {
                title: "Third-Party Risk Management (TPRM)",
                desc: "Know who you're doing business with. We automate the vendor risk assessment process, providing a real-time view of the supply chain risks posed by your external partners."
            }
        ],
        faq: [
            { question: "Is this only for big companies?", answer: "No, automated compliance tools like Vanta make GRC accessible for startups too." },
            { question: "Which frameworks do you cover?", answer: "All major ones: SOC2, ISO 27001, HIPAA, GDPR, PCI-DSS, NIST, etc." }
        ]
    }
};
