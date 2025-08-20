import React from 'react';
import styled from 'styled-components';

const FloatingContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: black; // Background color for luxury theme
  overflow: hidden;
`;

const FloatingItem = styled.div`
  position: absolute;
  background-color: pink; // Elegant pink color
  border-radius: 50%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1); // Scale effect on hover
  }
`;

const FloatingElements: React.FC = () => {
  return (
    <FloatingContainer>
      <FloatingItem style={{ width: '100px', height: '100px', top: '20%', left: '10%' }} />
      <FloatingItem style={{ width: '150px', height: '150px', top: '40%', right: '15%' }} />
      <FloatingItem style={{ width: '120px', height: '120px', bottom: '25%', left: '30%' }} />
      <FloatingItem style={{ width: '180px', height: '180px', bottom: '10%', right: '5%' }} />
    </FloatingContainer>
  );
};

export default FloatingElements;