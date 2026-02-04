import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { FaCloud, FaBrain, FaShieldAlt, FaCode, FaChartLine, FaMobileAlt, FaArrowRight } from 'react-icons/fa';
import './Services.css';

const services = [
    {
        icon: <FaCloud />,
        title: "Cloud Infrastructure",
        desc: "Scalable, secure, and resilient cloud architectures designed for the enterprise.",
        image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg",
        link: "/services/digital-transformation"
    },
    {
        icon: <FaBrain />,
        title: "Artificial Intelligence",
        desc: "Deploying generative AI agents to automate complex workflows and decision making.",
        image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
        link: "/services/ai-integration"
    },
    {
        icon: <FaCode />,
        title: "Digital Engineering",
        desc: "End-to-end software development that modernizes legacy systems.",
        image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
        link: "/services/software-dev"
    },
    {
        icon: <FaShieldAlt />,
        title: "Cyber Security",
        desc: "Zero-trust security frameworks protecting your most critical digital assets.",
        image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg",
        link: "/services/tech-consulting"
    },
    {
        icon: <FaChartLine />,
        title: "Data & Analytics",
        desc: "Turning raw data into actionable strategic insights via advanced pipelines.",
        image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
        link: "/solutions/data"
    },
    {
        icon: <FaMobileAlt />,
        title: "Enterprise Mobility",
        desc: "Seamless mobile experiences for your workforce and customers.",
        image: "https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg",
        link: "/services/native-app"
    }
];

const ServiceCard = ({ service, index }: { service: any, index: number }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Parallax effect: Move image vertically as user scrolls
    const rawY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    const y = useSpring(rawY, { stiffness: 100, damping: 30, restDelta: 0.001 });

    return (
        <motion.div
            ref={ref}
            className="service-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
        >
            <div className="service-icon">{service.icon}</div>
            <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <div className="read-more-link">
                    <Link to={service.link} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'inherit', textDecoration: 'none' }}>
                        LEARN MORE <FaArrowRight size={12} />
                    </Link>
                </div>
            </div>

            {/* Background Image with Parallax */}
            <motion.div
                className="service-image-container"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 1,
                    overflow: 'hidden'
                }}
            >
                <motion.img
                    src={service.image}
                    alt={service.title}
                    className="service-bg-image"
                    style={{
                        y,
                        scale: 1.2, // Scale up to ensure coverage during scroll
                        height: '110%',
                        top: '-5%'
                    }}
                />
            </motion.div>
        </motion.div>
    );
};

const Services = () => {
    return (
        <section className="services-section">
            <div className="container">
                <div className="section-header">
                    <div>
                        <span className="section-label">OUR EXPERTISE</span>
                        <h2 className="section-title">End-to-End <br /> Digital Capabilities</h2>
                    </div>
                    <p className="section-desc">
                        We deliver a comprehensive suite of services to help you navigate the complexities of the digital age.
                    </p>
                </div>
            </div>

            <div className="services-grid">
                {services.map((service, index) => (
                    <ServiceCard key={index} service={service} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Services;
