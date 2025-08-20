import React from 'react';
import './TestimonialsSection.css'; // Import CSS for styling

const testimonials = [
  {
    name: "John Doe",
    feedback: "An unforgettable experience! The luxury and comfort were beyond my expectations.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    feedback: "Absolutely stunning property! Perfect for a getaway.",
    rating: 5,
  },
  {
    name: "Emily Johnson",
    feedback: "The attention to detail is remarkable. Highly recommend!",
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">What Our Guests Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            <p className="testimonial-name">- {testimonial.name}</p>
            <div className="testimonial-rating">
              {'★'.repeat(testimonial.rating)}
              {'☆'.repeat(5 - testimonial.rating)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;