import React from 'react';
import './AboutPage.css'; // Assuming you have a CSS file for styles

const AboutPage: React.FC = () => {
    return (
        <div className="about-page" style={{ backgroundColor: '#000', color: '#FFC0CB' }}>
            <header className="about-header">
                <h1>Welcome to HouseIL</h1>
                <p>Your luxury getaway awaits</p>
            </header>
            <section className="about-content">
                <h2>About Us</h2>
                <p>
                    At HouseIL, we provide an exquisite selection of luxury accommodations
                    that redefine elegance and comfort. Our properties are designed for those
                    who appreciate the finer things in life.
                </p>
                <h2>Our Mission</h2>
                <p>
                    To offer unparalleled experiences and memorable stays in stunning locations
                    that cater to your every need.
                </p>
            </section>
            <footer className="about-footer">
                <p>Contact us: info@houseil.com</p>
            </footer>
        </div>
    );
};

export default AboutPage;