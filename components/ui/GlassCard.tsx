import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: rgba(255, 255, 255, 0.1); // semi-transparent background
  border-radius: 15px; // rounded corners
  backdrop-filter: blur(10px); // glass effect
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); // subtle shadow
  padding: 20px; // padding inside the card
  color: #fff; // text color
`;

const Title = styled.h2`
  font-size: 1.5rem; // title font size
  margin: 0; // no margin
  color: #ff69b4; // pink color for title
`;

const Description = styled.p`
  font-size: 1rem; // description font size
  color: #e0e0e0; // light gray for description
`;

const GlassCard: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

export default GlassCard;