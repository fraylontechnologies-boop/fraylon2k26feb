import { FaLandmark, FaHeartbeat, FaIndustry, FaShoppingCart, FaLightbulb, FaBuilding, FaPlane, FaBroadcastTower, FaFilm, FaMicrochip, FaFlask, FaCar, FaCreditCard, FaChartLine, FaUmbrella } from 'react-icons/fa';

export interface IndustryData {
    title: string;
    description: string;
    icon: any;
    challenges: { title: string; desc: string }[];
    solutions: { title: string; desc: string }[];
    stats: { value: string; label: string }[];
    tagline: string;
    image: string;
}

export const industriesData: Record<string, IndustryData> = {
    banking: {
        title: 'Banking & Financial',
        tagline: 'STRATEGIC MODERNIZATION',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2600&auto=format&fit=crop',
        description: 'Accelerate digital adoption, improve customer experience, and ensure compliance in a rapidly evolving financial landscape.',
        icon: FaLandmark,
        stats: [
            { value: '40%', label: 'Cost Reduction' },
            { value: '24/7', label: 'Service Availability' },
            { value: '100%', label: 'Compliance' },
            { value: '2x', label: 'Faster Time-to-Market' }
        ],
        challenges: [
            { title: 'Legacy Systems', desc: 'Aging mainframes slowing down innovation.' },
            { title: 'Regulatory Pressure', desc: 'Constant changes in compliance requirements.' },
            { title: 'Digital Challengers', desc: 'Neobanks stealing market share with better UX.' }
        ],
        solutions: [
            { title: 'Core Modernization', desc: 'Hollowing out the core with microservices.' },
            { title: 'Open Banking APIs', desc: 'Securely exposing data for partnership ecosystems.' },
            { title: 'AI Fraud Detection', desc: 'Real-time transaction monitoring.' }
        ]
    },
    insurance: {
        title: 'Insurance',
        tagline: 'RISK & COMPLIANCE',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2600&auto=format&fit=crop',
        description: 'Modernize claims processing, underwriting, and policy administration with AI and automation.',
        icon: FaUmbrella,
        stats: [
            { value: '60%', label: 'Faster Claims' },
            { value: '30%', label: 'Lower Loss Ratio' },
            { value: '95%', label: 'Auto-Underwriting' },
            { value: '50%', label: 'OpEx Savings' }
        ],
        challenges: [
            { title: 'Slow Claims', desc: 'Manual processing leads to poor customer experience.' },
            { title: 'Risk Assessment', desc: 'Lack of real-time data for accurate pricing.' },
            { title: 'Legacy Tech', desc: 'Inflexible systems hindering product innovation.' }
        ],
        solutions: [
            { title: 'Claims Automation', desc: 'AI-driven document processing and assessment.' },
            { title: 'Telematics Integration', desc: 'Usage-based insurance models.' },
            { title: 'Digital portals', desc: 'Self-service for policyholders and agents.' }
        ]
    },
    payments: {
        title: 'Payments & Fintech',
        tagline: 'SECURE INFRASTRUCTURE',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2600&auto=format&fit=crop',
        description: 'Build secure, scalable, and instant payment infrastructure for the digital economy.',
        icon: FaCreditCard,
        stats: [
            { value: '99.999%', label: 'Uptime' },
            { value: '<100ms', label: 'Latency' },
            { value: '0%', label: 'Data Loss' },
            { value: 'Global', label: 'Reach' }
        ],
        challenges: [
            { title: 'Scalability', desc: 'Handling spikes during peak shopping seasons.' },
            { title: 'Security', desc: 'Preventing sophisticated fraud attacks.' },
            { title: 'Integration', desc: 'Connecting with fragmented banking networks.' }
        ],
        solutions: [
            { title: 'Payment Gateways', desc: 'Robust, PCI-DSS compliant processing.' },
            { title: 'Real-time Clearing', desc: 'Instant settlement networks.' },
            { title: 'Tokenization', desc: 'Securing card data for recurring billing.' }
        ]
    },
    wealth: {
        title: 'Wealth Management',
        tagline: 'DATA-DRIVEN INSIGHTS',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2600&auto=format&fit=crop',
        description: 'Empower advisors and investors with personalized, data-driven insights and digital tools.',
        icon: FaChartLine,
        stats: [
            { value: '20%', label: 'AUM Growth' },
            { value: '50%', label: 'Advisor Efficiency' },
            { value: '360°', label: 'Client View' },
            { value: 'Hybrid', label: 'Advisory Model' }
        ],
        challenges: [
            { title: 'Personalization', desc: 'Delivering tailored advice at scale.' },
            { title: 'Compliance', desc: 'Meeting fiduciary standards and reporting.' },
            { title: 'Intergenerational Transfer', desc: 'Retaining assets as they pass to digital natives.' }
        ],
        solutions: [
            { title: 'Robo-Advisory', desc: 'Automated portfolio management.' },
            { title: 'Client Portals', desc: 'Real-time performance reporting.' },
            { title: 'AI Analytics', desc: 'Predictive churn and opportunity alerts.' }
        ]
    },
    healthcare: {
        title: 'Healthcare & Life Sciences',
        tagline: 'DIGITAL HEALTH ECOSYSTEMS',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2600&auto=format&fit=crop',
        description: 'Transform patient care and operations with data-driven insights and connected health solutions.',
        icon: FaHeartbeat,
        stats: [
            { value: '30%', label: 'Better Outcomes' },
            { value: '40%', label: 'Admin Savings' },
            { value: '100%', label: 'HIPAA Compliant' },
            { value: '24/7', label: 'Patient Access' }
        ],
        challenges: [
            { title: 'Data Interoperability', desc: 'Siloed EMR systems.' },
            { title: 'Patient Engagement', desc: 'Low adherence to care plans.' },
            { title: 'Burnout', desc: 'Administrative burden on clinicians.' }
        ],
        solutions: [
            { title: 'Telehealth', desc: 'Remote consultations and monitoring.' },
            { title: 'Health Data Lake', desc: 'Unified view of patient data.' },
            { title: 'AI Diagnostics', desc: 'Assisting doctors with image analysis.' }
        ]
    },
    'life-sci': {
        title: 'Life Sciences',
        tagline: 'ACCELERATED DISCOVERY',
        image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2600&auto=format&fit=crop',
        description: 'Accelerate drug discovery and clinical trials with AI and advanced analytics.',
        icon: FaFlask,
        stats: [
            { value: '2 Years', label: 'Faster R&D' },
            { value: '50%', label: 'Trial Efficiency' },
            { value: '99%', label: 'Compliance' },
            { value: 'Data', label: 'Driven' }
        ],
        challenges: [
            { title: 'R&D Cost', desc: 'Bringing a drug to market is expensive.' },
            { title: 'Trial Recruitment', desc: 'Finding eligible patients is slow.' },
            { title: 'Regulatory', desc: 'Strict FDA/EMA validation requirements.' }
        ],
        solutions: [
            { title: 'AI Drug Discovery', desc: 'Simulating molecule interactions.' },
            { title: 'Decentralized Trials', desc: 'Digital tools for remote participation.' },
            { title: 'Supply Chain Qual', desc: 'Ensuring cold chain integrity.' }
        ]
    },
    manufacturing: {
        title: 'Manufacturing & Energy',
        tagline: 'INDUSTRIAL TRANSFORMATION',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2600&auto=format&fit=crop',
        description: 'Build the factory of the future with smart manufacturing, IoT, and supply chain visibility.',
        icon: FaIndustry,
        stats: [
            { value: '20%', label: 'Throughput' },
            { value: '30%', label: 'Energy Savings' },
            { value: '90%', label: 'OEE' },
            { value: 'Zero', label: 'Unplanned Downtime' }
        ],
        challenges: [
            { title: 'Downtime', desc: 'Machine failures halt production.' },
            { title: 'Quality', desc: 'Defects reduce yield.' },
            { title: 'Visibility', desc: 'Blind spots in the supply chain.' }
        ],
        solutions: [
            { title: 'Predictive Maintenance', desc: 'Fixing machines before they break.' },
            { title: 'Digital Twins', desc: 'Simulating production changes.' },
            { title: 'Computer Vision QC', desc: 'Automated defect detection.' }
        ]
    },
    auto: {
        title: 'Automotive',
        tagline: 'CONNECTED MOBILITY',
        image: 'https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=2600&auto=format&fit=crop',
        description: 'Accelerate the shift to electric, autonomous, and connected vehicles.',
        icon: FaCar,
        stats: [
            { value: 'EV', label: 'Ready' },
            { value: 'OTA', label: 'Updates' },
            { value: 'Connected', label: 'Fleet' },
            { value: 'Smart', label: 'Factory' }
        ],
        challenges: [
            { title: 'Software Defined', desc: 'Cars are becoming computers on wheels.' },
            { title: 'Supply Chain', desc: 'Chip shortages and logistics.' },
            { title: 'Customer Exp', desc: 'Direct-to-consumer sales models.' }
        ],
        solutions: [
            { title: 'Connected Car', desc: 'IoT platforms for vehicle data.' },
            { title: 'Smart Manufacturing', desc: 'Flexible production lines.' },
            { title: 'Digital Retailing', desc: 'Online configurators and sales.' }
        ]
    },
    retail: {
        title: 'Retail & Consumer',
        tagline: 'OMNICHANNEL STRATEGY',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2600&auto=format&fit=crop',
        description: 'Create seamless omnichannel experiences and optimize operations with data analytics.',
        icon: FaShoppingCart,
        stats: [
            { value: '15%', label: 'Conversion Lift' },
            { value: '20%', label: 'Inventory Opt' },
            { value: '360°', label: 'Customer View' },
            { value: 'Omni', label: 'Channel' }
        ],
        challenges: [
            { title: 'Unified Commerce', desc: 'Connecting online and offline.' },
            { title: 'Personalization', desc: 'Delivering relevant offers.' },
            { title: 'Supply Chain', desc: 'Meeting 2-day delivery expectations.' }
        ],
        solutions: [
            { title: 'Headless Commerce', desc: 'Flexible front-ends.' },
            { title: 'CDP Implementation', desc: 'Unified customer profiles.' },
            { title: 'Demand Forecasting', desc: 'AI-driven inventory planning.' }
        ]
    },
    energy: {
        title: 'Energy, Resources & Utilities',
        tagline: 'SUSTAINABLE OPS',
        image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2600&auto=format&fit=crop',
        description: 'Drive sustainability and efficiency with digital solutions for the energy sector.',
        icon: FaLightbulb,
        stats: [
            { value: '15%', label: 'Grid Efficiency' },
            { value: 'Safety', label: 'First' },
            { value: 'Net', label: 'Zero' },
            { value: 'IoT', label: 'Enabled' }
        ],
        challenges: [
            { title: 'Transition', desc: 'Moving to renewables.' },
            { title: 'Grid Stability', desc: 'Managing distributed energy resources.' },
            { title: 'Safety', desc: 'Protecting workers in hazardous environments.' }
        ],
        solutions: [
            { title: 'Smart Grid', desc: 'IoT sensors for grid monitoring.' },
            { title: 'Asset Performance', desc: 'Predictive maintenance for turbines/rigs.' },
            { title: 'EHS Digital', desc: 'Connected worker safety solutions.' }
        ]
    },
    chem: {
        title: 'Chemicals & Agriculture',
        tagline: 'YIELD OPTIMIZATION',
        image: 'https://images.unsplash.com/photo-1530982011887-3cf111a44f78?q=80&w=2600&auto=format&fit=crop',
        description: 'Optimize yield, ensure safety, and drive sustainability through digital chemistry.',
        icon: FaFlask,
        stats: [
            { value: '10%', label: 'Yield Increase' },
            { value: 'Compliance', label: 'Assured' },
            { value: 'Sustainable', label: 'Ops' },
            { value: 'Safety', label: 'Focus' }
        ],
        challenges: [
            { title: 'Regulations', desc: 'Strict environmental and safety rules.' },
            { title: 'Supply Volatility', desc: 'Raw material price fluctuations.' },
            { title: 'Innovation', desc: 'Accelerating new material discovery.' }
        ],
        solutions: [
            { title: 'Process Optimization', desc: 'AI for batch consistency.' },
            { title: 'Supply Chain Visibility', desc: 'Tracking hazardous materials.' },
            { title: 'R&D Informatics', desc: 'Lab data management.' }
        ]
    },
    telecom: {
        title: 'Telecom & Media',
        tagline: '5G & CONNECTIVITY',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2600&auto=format&fit=crop',
        description: 'Monetize 5G, improve customer experience, and optimize network operations.',
        icon: FaBroadcastTower,
        stats: [
            { value: '5G', label: 'Ready' },
            { value: '30%', label: 'OpEx Savings' },
            { value: 'NPS', label: 'Growth' },
            { value: 'Auto', label: 'Ops' }
        ],
        challenges: [
            { title: '5G ROI', desc: 'Monetizing infrastructure investments.' },
            { title: 'CX', desc: 'Improving support and billing experiences.' },
            { title: 'Network Complexity', desc: 'Managing virtualized networks (SDN/NFV).' }
        ],
        solutions: [
            { title: 'AI Ops', desc: 'Automated network assurance.' },
            { title: 'Digital BSS', desc: 'Modern billing and CRM.' },
            { title: 'Edge Computing', desc: 'Low-latency services.' }
        ]
    },
    media: {
        title: 'Media & Entertainment',
        tagline: 'AUDIENCE ENGAGEMENT',
        image: 'https://images.unsplash.com/photo-1522869635100-ec57d363b843?q=80&w=2600&auto=format&fit=crop',
        description: 'Engage audiences with personalized content and seamless streaming experiences.',
        icon: FaFilm,
        stats: [
            { value: '4K', label: 'Streaming' },
            { value: 'Personalized', label: 'recommendations' },
            { value: 'Global', label: 'CDN' },
            { value: 'Content', label: 'Secure' }
        ],
        challenges: [
            { title: 'Content Explosion', desc: 'Managing massive media libraries.' },
            { title: 'Churn', desc: 'Retaining subscribers in a crowded market.' },
            { title: 'Monetization', desc: 'Balancing ads vs subscriptions.' }
        ],
        solutions: [
            { title: 'OTT Platforms', desc: 'Scalable streaming infrastructure.' },
            { title: 'Recommendation Engines', desc: 'AI-driven content discovery.' },
            { title: 'Digital Asset Mgmt', desc: 'Organizing and tagging archives.' }
        ]
    },
    hitech: {
        title: 'High Tech',
        tagline: 'INTELLIGENT PRODUCT DEV',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2600&auto=format&fit=crop',
        description: 'Accelerate innovation and product development in the fast-paced tech industry.',
        icon: FaMicrochip,
        stats: [
            { value: 'Faster', label: 'NPI' },
            { value: 'Supply', label: 'Resilience' },
            { value: 'IP', label: 'Protection' },
            { value: 'Agile', label: 'Enabled' }
        ],
        challenges: [
            { title: 'Time to Market', desc: 'Short product lifecycles.' },
            { title: 'Supply Chain', desc: 'Component shortages.' },
            { title: 'Complexity', desc: 'Hardware/Software integration.' }
        ],
        solutions: [
            { title: 'PLM', desc: 'Product Lifecycle Management.' },
            { title: 'Supply Chain Tower', desc: 'Visibility into tiers.' },
            { title: 'Engineering Cloud', desc: 'Collaboration platforms for design.' }
        ]
    },
    public: {
        title: 'Public Sector',
        tagline: 'CITIZEN-CENTRIC SERVICES',
        image: '/assets/ba-finance.jpg',
        description: 'Modernizing government services for the digital age. We build secure, scalable citizen portals and data exchange frameworks that improve transparency and efficiency.',
        icon: FaBuilding,
        stats: [
            { value: '60%', label: 'Better Accessibility' },
            { value: 'Zero', label: 'Security Breach' }
        ],
        challenges: [
            { title: 'Legacy Modernization', desc: 'Moving off mainframes.' },
            { title: 'Security', desc: 'Protecting citizen data.' },
            { title: 'Accessibility', desc: 'Serving all citizens equitably.' }
        ],
        solutions: [
            { title: 'E-Government Portals', desc: 'Digital citizen services.' },
            { title: 'Cybersecurity & GRC', desc: 'Secure cloud adoption.' },
            { title: 'Smart City Frameworks', desc: 'Connected urban infrastructure.' },
            { title: 'Data Interoperability', desc: 'Seamless agency exchange.' }
        ]
    },
    travel: {
        title: 'Travel & Logistics',
        tagline: 'ADAPTIVE SUPPLY CHAINS',
        image: 'https://images.unsplash.com/photo-1436491865332-7a61a10429bd?q=80&w=2600&auto=format&fit=crop',
        description: 'Optimize fleet operations and enhance traveler experiences.',
        icon: FaPlane,
        stats: [
            { value: 'On-Time', label: 'Performance' },
            { value: 'Fuel', label: 'Savings' },
            { value: 'Seamless', label: 'Journeys' },
            { value: 'Connected', label: 'Fleets' }
        ],
        challenges: [
            { title: 'Disruption', desc: 'Weather and operational delays.' },
            { title: 'CX', desc: 'Traveler expectations for real-time info.' },
            { title: 'Sustainability', desc: 'Reducing carbon footprint.' }
        ],
        solutions: [
            { title: 'Route Optimization', desc: 'AI-driven planning.' },
            { title: 'Mobile Apps', desc: 'Boarding, tracking, and booking.' },
            { title: 'Predictive Maint', desc: 'Keeping fleets moving.' }
        ]
    }
};
