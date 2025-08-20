import React from 'react';
import './AboutSection.css'; // Importing CSS for styling

const AboutSection: React.FC = () => {
    return (
        <section className="about-section">
            <div className="about-content">
                <h1 className="about-title">Welcome to HouseIL</h1>
                <p className="about-description">
                    Experience luxury like never before in our exquisite properties designed for the discerning traveler.
                </p>
                <p className="about-description">
                    At HouseIL, we blend elegance with comfort, offering you a unique stay that reflects sophistication.
                </p>
                <button className="about-button">Discover More</button>
            </div>
        </section>
    );
};

export default AboutSection;