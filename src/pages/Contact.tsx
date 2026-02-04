import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page container">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="contact-layout"
            >
                {/* Contact Info */}
                <div className="contact-info-section">
                    <h1>Get in Touch</h1>
                    <p className="contact-subtitle">
                        Ready to transform your business? Reach out to us. Whether you have a question about our services, pricing, or just want to say hello, we're here to answer.
                    </p>

                    <div className="contact-details">
                        <div className="contact-item">
                            <div className="contact-icon-wrapper">
                                <FaMapMarkerAlt />
                            </div>
                            <div className="contact-item-content">
                                <h4>Visit Us</h4>
                                <p>Hyderabad, Telangana,<br />India, 500001</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon-wrapper">
                                <FaEnvelope />
                            </div>
                            <div className="contact-item-content">
                                <h4>Email Us</h4>
                                <p><a href="mailto:contact@fraylontech.com">contact@fraylontech.com</a></p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon-wrapper">
                                <FaPhone />
                            </div>
                            <div className="contact-item-content">
                                <h4>Call Us</h4>
                                <p><a href="tel:+919381617904">+91 93816 17904</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="contact-form-card">
                    <form className="contact-form">
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" className="form-input" placeholder="John Doe" />
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" className="form-input" placeholder="john@company.com" />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea rows={5} className="form-input" placeholder="How can we help you?"></textarea>
                        </div>
                        <button className="btn btn-primary form-submit-btn">Send Message</button>
                    </form>
                </div>

            </motion.div>
        </div>
    );
};

export default Contact;
