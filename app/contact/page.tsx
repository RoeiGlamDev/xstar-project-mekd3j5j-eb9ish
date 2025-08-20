import React from 'react';
import './ContactPage.css'; // Importing CSS for styling

const ContactPage: React.FC = () => {
    return (
        <div className="contact-page" style={{ backgroundColor: '#000', color: '#fff' }}>
            <header className="contact-header" style={{ color: '#ff69b4' }}>
                <h1>Contact Us</h1>
                <p>We would love to hear from you!</p>
            </header>
            <form className="contact-form" style={{ display: 'flex', flexDirection: 'column', maxWidth: '600px', margin: 'auto' }}>
                <label htmlFor="name" style={{ marginBottom: '10px' }}>Name</label>
                <input type="text" id="name" name="name" required style={{ padding: '10px', marginBottom: '20px', borderRadius: '5px', border: '1px solid #ff69b4' }} />
                
                <label htmlFor="email" style={{ marginBottom: '10px' }}>Email</label>
                <input type="email" id="email" name="email" required style={{ padding: '10px', marginBottom: '20px', borderRadius: '5px', border: '1px solid #ff69b4' }} />
                
                <label htmlFor="message" style={{ marginBottom: '10px' }}>Message</label>
                <textarea id="message" name="message" required style={{ padding: '10px', marginBottom: '20px', borderRadius: '5px', border: '1px solid #ff69b4' }} />
                
                <button type="submit" style={{ padding: '10px', backgroundColor: '#ff69b4', color: '#000', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactPage;