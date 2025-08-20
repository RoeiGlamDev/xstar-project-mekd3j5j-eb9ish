'use client';

import React from 'react';
import { useEffect, useState } from 'react';
import './GradientBackground.css'; // Assuming you have a CSS file for styles

const GradientBackground: React.FC = () => {
    const [gradient, setGradient] = useState<string>('');

    useEffect(() => {
        const gradients = [
            'linear-gradient(to right, #000000, #ff007f)', // Black to Pink
            'linear-gradient(to right, #ff007f, #000000)', // Pink to Black
        ];
        let index = 0;

        const changeGradient = () => {
            setGradient(gradients[index]);
            index = (index + 1) % gradients.length;
        };

        const interval = setInterval(changeGradient, 5000); // Change every 5 seconds
        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="gradient-background" style={{ background: gradient }}>
            {/* Content can go here */}
        </div>
    );
};

export default GradientBackground;