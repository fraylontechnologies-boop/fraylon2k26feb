import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-cta-section">
            <div className="cta-bg-graphic"></div>
            <div className="cta-wrapper">
                <div className="cta-content">
                    <h2>Ready to Scale?</h2>
                    <p>
                        Let's discuss how Fraylon can accelerate your digital transformation journey with speed and precision.
                    </p>
                </div>
                <div className="cta-actions">
                    <Link to="/partners">
                        <button className="btn btn-primary">
                            Partner With Us
                        </button>
                    </Link>
                    <Link to="/contact">
                        <button className="btn btn-outline">
                            Contact Sales <FaArrowRight className="btn-icon-right" />
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Contact;
