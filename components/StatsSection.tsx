import React from 'react';
import './StatsSection.css'; // Assuming you have a CSS file for styles

const StatsSection: React.FC = () => {
    return (
        <section className="stats-section">
            <div className="stat-item">
                <h2 className="stat-number">500+</h2>
                <p className="stat-description">Luxury Homes</p>
            </div>
            <div className="stat-item">
                <h2 className="stat-number">1,000+</h2>
                <p className="stat-description">Happy Guests</p>
            </div>
            <div className="stat-item">
                <h2 className="stat-number">24/7</h2>
                <p className="stat-description">Customer Support</p>
            </div>
            <div className="stat-item">
                <h2 className="stat-number">5-Star</h2>
                <p className="stat-description">Guest Ratings</p>
            </div>
        </section>
    );
};

export default StatsSection;