'use client';

import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const ScrollRevealComponent: React.FC = ({ children }) => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom', // Change as needed
      distance: '50px',
      duration: 800,
      delay: 200,
      opacity: 0,
      scale: 1,
      easing: 'ease-in-out',
    });

    sr.reveal('.reveal', { interval: 200 }); // Apply to elements with class 'reveal'
  }, []);

  return <div>{children}</div>;
};

export default ScrollRevealComponent;