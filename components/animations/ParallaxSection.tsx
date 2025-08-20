'use client';

import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ParallaxContainer = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  background-color: black; // Background color for the section
`;

const ParallaxLayer = styled.div<{ speed: number }>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transform: translateZ(0); // Enable hardware acceleration
  will-change: transform; // Optimize performance
  background: url(${(props) => props.background}) center center / cover no-repeat;
  transform: translateY(${(props) => props.speed}px); // Parallax effect
`;

const ParallaxSection: React.FC<{ layers: Array<{ speed: number; background: string }> }> = ({ layers }) => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (parallaxRef.current) {
      const scrollY = window.scrollY;
      layers.forEach((layer, index) => {
        const speed = layer.speed;
        const layerElement = parallaxRef.current.children[index] as HTMLElement;
        layerElement.style.transform = `translateY(${scrollY * speed}px)`; // Update position based on scroll
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [layers]);

  return (
    <ParallaxContainer ref={parallaxRef}>
      {layers.map((layer, index) => (
        <ParallaxLayer key={index} speed={layer.speed} background={layer.background} />
      ))}
    </ParallaxContainer>
  );
};

export default ParallaxSection;