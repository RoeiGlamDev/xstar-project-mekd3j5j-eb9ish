import React from 'react';
import './PricingSection.css'; // Importing CSS for styling

const PricingSection: React.FC = () => {
    return (
        <section className="pricing-section">
            <div className="container">
                <h2 className="section-title">Our Pricing</h2>
                <div className="pricing-cards">
                    <div className="pricing-card">
                        <h3 className="card-title">Luxury Suite</h3>
                        <p className="card-price">$299/night</p>
                        <p className="card-description">Experience elegance and comfort in our luxury suite.</p>
                        <button className="btn-book">Book Now</button>
                    </div>
                    <div className="pricing-card">
                        <h3 className="card-title">Deluxe Room</h3>
                        <p className="card-price">$199/night</p>
                        <p className="card-description">Enjoy a spacious room with premium amenities.</p>
                        <button className="btn-book">Book Now</button>
                    </div>
                    <div className="pricing-card">
                        <h3 className="card-title">Standard Room</h3>
                        <p className="card-price">$129/night</p>
                        <p className="card-description">A cozy room perfect for a relaxing stay.</p>
                        <button className="btn-book">Book Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;