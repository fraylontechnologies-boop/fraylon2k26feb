import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import { FiAward, FiGlobe, FiArrowRight } from 'react-icons/fi';
import './Leadership.css';
import ramTejaImg from '../assets/images/alex-fraylon.jpg';
import vigneswarImg from '../assets/images/vigneswar-nalluri.jpg';

const executiveRoots = {
    top: [
        {
            name: "Ch. Ram Teja",
            role: "Chief Executive Officer",
            image: ramTejaImg,
            bio: "Visionary leader driving global digital transformation and enterprise growth through modern innovation."
        },
        {
            name: "Vigneswar Nalluri",
            role: "Chief Technology Officer",
            image: vigneswarImg,
            bio: "Pioneering AI architect focused on building scalable, future-ready infrastructure."
        }
    ],
    execs: [
        {
            name: "Lavanya Bojja",
            role: "President",
            image: "https://images.pexels.com/photos/1181682/pexels-photo-1181682.jpeg?auto=compress&cs=tinysrgb&w=800",
            bio: "Strategic institutional leader driving organizational excellence and global healthy growth."
        },
        {
            name: "Mahitha Bathula",
            role: "Co-President",
            image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=800",
            bio: "Focusing on operational brilliance and high-impact collaborative leadership."
        },
        {
            name: "Yuvaraj Dudukuru",
            role: "Chief Operating Officer",
            image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800",
            bio: "Expert in global delivery optimization and architectural execution frameworks."
        },
        {
            name: "Nikhil Balaji Nandhagiri",
            role: "Chief Marketing Officer",
            image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800",
            bio: "Brand visionary crafting the global narrative of Fraylon's technological evolution."
        }
    ]
};

const steeringCommittee = [
    { name: "Dr. Aris Vlahos", role: "Global Board Chair", region: "Athens, Greece" },
    { name: "Yuki Tanaka", role: "Specialized Advisor", region: "Tokyo, Japan" },
    { name: "David Henderson", role: "Independent Director", region: "London, UK" },
    { name: "Ines Moretti", role: "Sustainability Lead", region: "Milan, Italy" }
];

const familyInsights = [
    {
        title: "The Architecture of a Global Family",
        excerpt: "How Fraylon's internal culture drives innovation and resilience across borders.",
        category: "Culture",
        date: "March 2026",
        image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        title: "Scaling Roots in the Digital Soil",
        excerpt: "Strategies for organic growth and technological adoption in emerging systems.",
        category: "Strategy",
        date: "Feb 2026",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        title: "Future-Proofing the Canopy",
        excerpt: "Investing in the next generation of leadership and technical talent.",
        category: "Talent",
        date: "Jan 2026",
        image: "https://images.pexels.com/photos/7092453/pexels-photo-7092453.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
];

const Leadership = () => {
    return (
        <div className="leadership-page">
            {/* --- Hero Section --- */}
            <section className="leadership-hero">
                <div className="container">
                    <motion.span
                        className="hero-tag"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        THE FRAYLON GENEALOGY
                    </motion.span>
                    <div className="hero-content">
                        <motion.h1
                            className="hero-title"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        >
                            Visionaries Guiding <br /> the Family Tree.
                        </motion.h1>
                        <motion.p
                            className="hero-description"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                        >
                            We aren't just a corporation; we are a global family tree of innovators, architects, and visionaries rooted in shared values.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* --- Visual Tree Section --- */}
            <section className="tree-structure-section">
                <div className="container">
                    <div className="tree-container">
                        {/* CEO & CTO Level */}
                        <div className="tree-top-level">
                            <div className="top-nodes-grid">
                                {executiveRoots.top.map((leader, idx) => (
                                    <motion.div 
                                        key={idx}
                                        className={`tree-node root-node ${idx === 0 ? 'ceo-node' : 'cto-node'}`}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="node-image">
                                            <img src={leader.image} alt={leader.name} />
                                        </div>
                                        <div className="node-info">
                                            <span className="node-role">{leader.role}</span>
                                            <h3>{leader.name}</h3>
                                            <p>{leader.bio}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="root-multi-connector"></div>
                        </div>

                        {/* Execs Level */}
                        <div className="tree-branches">
                            <div className="branches-connector-line"></div>
                            <div className="exec-grid">
                                {executiveRoots.execs.map((exec, idx) => (
                                    <motion.div 
                                        key={idx}
                                        className="tree-node exec-node"
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                    >
                                        <div className="node-image">
                                            <img src={exec.image} alt={exec.name} />
                                        </div>
                                        <div className="node-info">
                                            <span className="node-role">{exec.role}</span>
                                            <h3>{exec.name}</h3>
                                            <p>{exec.bio}</p>
                                        </div>
                                        <div className="branch-line"></div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Steering Committee --- */}
            <section className="committee-section">
                <div className="container">
                    <div className="committee-layout">
                        <div className="committee-text">
                            <FiAward className="section-icon" />
                            <h2>Global Board & <br /> Steering Committee</h2>
                            <p>An international assembly of advisors ensuring Fraylon remains a beacon of ethics and strategic excellence across every frontier.</p>
                        </div>
                        <div className="committee-grid">
                            {steeringCommittee.map((member, idx) => (
                                <motion.div 
                                    key={member.name}
                                    className="committee-card"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <div className="card-top">
                                        <FiGlobe className="geo-icon" />
                                        <span>{member.region}</span>
                                    </div>
                                    <h4>{member.name}</h4>
                                    <p>{member.role}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Family Insights --- */}
            <section className="family-insights-section">
                <div className="container">
                    <div className="section-header-centered">
                        <span className="tag">THOUGHT LEADERSHIP</span>
                        <h2>Family Insights</h2>
                        <p>Perspectives from our roots on technology, culture, and the future of global enterprise.</p>
                    </div>
                    <div className="insights-tree-grid">
                        {familyInsights.map((insight, idx) => (
                            <motion.div 
                                key={idx}
                                className="insight-tree-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <div className="insight-image-wrapper">
                                    <img src={insight.image} alt={insight.title} />
                                    <span className="insight-category">{insight.category}</span>
                                </div>
                                <div className="insight-content">
                                    <span className="insight-date">{insight.date}</span>
                                    <h3>{insight.title}</h3>
                                    <p>{insight.excerpt}</p>
                                    <button className="insight-read-more">Read Insight <FiArrowRight /></button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Philosophy Section --- */}
            <section className="philosophy-section">
                <div className="container">
                    <motion.div
                        className="philosophy-container"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <FaQuoteLeft className="quote-icon-large" />
                        <h2 className="philosophy-text">
                            A tree is only as strong as its roots. <br /> At Fraylon, our roots are our people, and our canopy is the future we build together.
                        </h2>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Leadership;
