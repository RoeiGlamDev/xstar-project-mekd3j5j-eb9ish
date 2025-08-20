import React from 'react';
import './ContactSection.css'; // Importing CSS for styling

const ContactSection: React.FC = () => {
    return (
        <section className="contact-section" style={{ backgroundColor: '#000', color: '#FFC0CB' }}>
            <div className="contact-container">
                <h2>Contact Us</h2>
                <p>We'd love to hear from you!</p>
                <form className="contact-form">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" required></textarea>
                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;