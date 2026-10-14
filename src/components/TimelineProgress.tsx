'use client';

import React, { useEffect, useState } from 'react';

export const TimelineProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById('timeline');
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const scrollHeight = el.offsetHeight - window.innerHeight;
      if (scrollHeight <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.min(Math.max(scrolled / scrollHeight, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] bg-white/5 z-50 pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-cyber-cyan via-cyber-turquoise to-cyber-violet transition-all duration-150 ease-out shadow-[0_0_8px_rgba(0,240,255,0.8)]"
        style={{ width: `${scrollProgress * 100}%` }}
      />
    </div>
  );
};
