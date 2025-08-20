'use client';

import React, { useState } from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px; // Adjust height as needed
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
`;

const Slide = styled.div<{ active: boolean }>`
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease-in-out;
  transform: ${({ active }) => (active ? 'translateX(0)' : 'translateX(100%)')};
  background-color: ${({ active }) => (active ? 'black' : 'pink')}; // Adjust colors as needed
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
`;

const Dot = styled.div<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? 'pink' : 'rgba(255, 255, 255, 0.5)')};
  margin: 0 5px;
  cursor: pointer;
`;

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ['Slide 1', 'Slide 2', 'Slide 3']; // Add your slide content here

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <SliderContainer>
      {slides.map((slide, index) => (
        <Slide key={index} active={index === currentSlide}>
          {slide}
        </Slide>
      ))}
      <DotsContainer>
        {slides.map((_, index) => (
          <Dot key={index} active={index === currentSlide} onClick={() => setCurrentSlide(index)} />
        ))}
      </DotsContainer>
    </SliderContainer>
  );
};

export default Slider;