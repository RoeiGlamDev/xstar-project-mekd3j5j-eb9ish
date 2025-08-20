import React from 'react';
import './PricingPage.css'; // Custom styles for the pricing page

const PricingPage: React.FC = () => {
    return (
        <div className="pricing-page" style={{ backgroundColor: '#000', color: '#fff' }}>
            <header className="pricing-header" style={{ textAlign: 'center', padding: '50px 0' }}>
                <h1 style={{ color: '#ff69b4' }}>HouseIL Pricing</h1>
                <p style={{ fontSize: '1.2em' }}>Experience luxury like never before</p>
            </header>
            <section className="pricing-options" style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
                <div className="pricing-card" style={{ backgroundColor: '#111', borderRadius: '10px', padding: '20px', width: '30%' }}>
                    <h2 style={{ color: '#ff69b4' }}>Basic</h2>
                    <p style={{ fontSize: '1.5em' }}>$100/night</p>
                    <ul>
                        <li>1 Bedroom</li>
                        <li>Free Wi-Fi</li>
                        <li>Complimentary Breakfast</li>
                    </ul>
                    <button style={{ backgroundColor: '#ff69b4', color: '#000', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>Book Now</button>
                </div>
                <div className="pricing-card" style={{ backgroundColor: '#222', borderRadius: '10px', padding: '20px', width: '30%' }}>
                    <h2 style={{ color: '#ff69b4' }}>Deluxe</h2>
                    <p style={{ fontSize: '1.5em' }}>$200/night</p>
                    <ul>
                        <li>2 Bedrooms</li>
                        <li>Free Wi-Fi</li>
                        <li>Complimentary Breakfast</li>
                        <li>Private Pool</li>
                    </ul>
                    <button style={{ backgroundColor: '#ff69b4', color: '#000', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>Book Now</button>
                </div>
                <div className="pricing-card" style={{ backgroundColor: '#333', borderRadius: '10px', padding: '20px', width: '30%' }}>
                    <h2 style={{ color: '#ff69b4' }}>Luxury</h2>
                    <p style={{ fontSize: '1.5em' }}>$500/night</p>
                    <ul>
                        <li>3 Bedrooms</li>
                        <li>Free Wi-Fi</li>
                        <li>Complimentary Breakfast</li>
                        <li>Private Pool</li>
                        <li>Spa Services</li>
                    </ul>
                    <button style={{ backgroundColor: '#ff69b4', color: '#000', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>Book Now</button>
                </div>
            </section>
            <footer className="pricing-footer" style={{ textAlign: 'center', padding: '20px 0', borderTop: '1px solid #444' }}>
                <p>© 2023 HouseIL. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default PricingPage;