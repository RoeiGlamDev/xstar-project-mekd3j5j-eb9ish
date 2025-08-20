import { useEffect, useState } from 'react';

const useParallax = (scrollRef: React.RefObject<HTMLDivElement>, speed: number) => {
    const [offset, setOffset] = useState(0);

    const handleScroll = () => {
        if (scrollRef.current) {
            const scrollTop = window.scrollY; // Get the vertical scroll position
            setOffset(scrollTop * speed); // Calculate the parallax offset
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll); // Add scroll event listener
        return () => {
            window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
        };
    }, []);

    return offset; // Return the calculated offset
};

export default useParallax;