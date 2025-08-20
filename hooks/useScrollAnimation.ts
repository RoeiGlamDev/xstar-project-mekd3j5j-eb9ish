import { useEffect, useState } from 'react';

const useScrollAnimation = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) { // Adjust threshold as needed
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrolling; // Returns true if scrolled past threshold
};

export default useScrollAnimation;