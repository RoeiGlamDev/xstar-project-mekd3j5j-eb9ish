import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const useAnimation = (triggerRef: React.RefObject<HTMLElement>, animationProps: any) => {
  const animationRef = useRef<GSAPTimeline | null>(null);

  useEffect(() => {
    if (triggerRef.current) {
      animationRef.current = gsap.timeline({ paused: true })
        .from(triggerRef.current, animationProps);

      const handleScroll = () => {
        const { top } = triggerRef.current!.getBoundingClientRect();
        if (top < window.innerHeight && top > 0) {
          animationRef.current!.play();
        } else {
          animationRef.current!.pause(0); // Reset animation
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [triggerRef, animationProps]);

  return animationRef;
};

export default useAnimation;