import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulating API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
    };

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
                    {isSubmitted ? (
                        <motion.div
                            className="success-message"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                        >
                            <FaCheckCircle className="success-icon" />
                            <h3>Message Sent!</h3>
                            <p>Thank you for reaching out. Our team will get back to you shortly.</p>
                            <button className="btn btn-outline" onClick={() => setIsSubmitted(false)}>Send Another</button>
                        </motion.div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    className="form-input"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    className="form-input"
                                    placeholder="john@company.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    className="form-input"
                                    placeholder="How can we help you?"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button
                                className="btn btn-primary form-submit-btn"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    )}
                </div>

            </motion.div>
        </div>
    );
};

export default Contact;
