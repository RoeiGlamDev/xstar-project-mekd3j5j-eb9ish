'use client';

import React, { useEffect } from 'react';

const ParticleBackground: React.FC = () => {
    useEffect(() => {
        const canvas = document.getElementById('particleCanvas') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d');
        const particles: Array<{ x: number; y: number; radius: number; color: string }> = [];
        const colors = ['#ff4d94', '#000000']; // Pink and Black colors

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const createParticles = () => {
            for (let i = 0; i < 100; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 5 + 1,
                    color: colors[Math.floor(Math.random() * colors.length)],
                });
            }
        };

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(particle => {
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = particle.color;
                ctx.fill();
            });
        };

        const animateParticles = () => {
            drawParticles();
            requestAnimationFrame(animateParticles);
        };

        resizeCanvas();
        createParticles();
        animateParticles();

        window.addEventListener('resize', resizeCanvas);
        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return <canvas id="particleCanvas" style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} />;
};

export default ParticleBackground;