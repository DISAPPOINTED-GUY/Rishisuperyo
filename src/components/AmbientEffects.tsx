'use client';

import React, { useEffect, useRef } from 'react';

interface AmbientEffectsProps {
  activeColor?: string;
}

export const AmbientEffects: React.FC<AmbientEffectsProps> = ({ activeColor = '#A855F7' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Number of particles: lower on mobile for maximum performance
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 35 : 75;

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
    }

    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 0.6,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render connected telemetry network
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = activeColor;
        ctx.globalAlpha = p.alpha * 0.4;
        ctx.fill();

        // Connect nearby nodes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = activeColor;
            ctx.globalAlpha = (1 - dist / 110) * 0.12;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeColor]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Dynamic ambient color glow that evolves with the active era */}
      <div
        className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full blur-[160px] opacity-20 transition-all duration-1000 ease-out"
        style={{ backgroundColor: activeColor }}
      />
      <div
        className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full blur-[140px] opacity-15 transition-all duration-1000 ease-out"
        style={{ backgroundColor: activeColor }}
      />

      {/* Cyber telemetry canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />

      {/* Scanline pattern overlay */}
      <div className="absolute inset-0 scanlines-overlay opacity-30" />

      {/* Vignette */}
      <div className="absolute inset-0 cinematic-vignette" />
    </div>
  );
};
