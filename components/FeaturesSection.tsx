import React from 'react';
import './FeaturesSection.css'; // Importing CSS for styling

const features = [
  {
    title: 'Luxury Accommodations',
    description: 'Experience the finest in luxury living with our handpicked properties.',
  },
  {
    title: 'Exclusive Amenities',
    description: 'Enjoy top-notch amenities that cater to your every need.',
  },
  {
    title: 'Personalized Service',
    description: 'Our dedicated team is here to ensure your stay is unforgettable.',
  },
  {
    title: 'Prime Locations',
    description: 'Stay in the heart of the city, close to all the attractions.',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="features-section">
      <h2 className="features-title">Why Choose HouseIL?</h2>
      <div className="features-list">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;