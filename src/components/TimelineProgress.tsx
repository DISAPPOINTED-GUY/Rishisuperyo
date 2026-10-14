'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const TimelineProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] bg-white/5 z-50 pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-purple-500 via-fuchsia-500 via-cyber-cyan to-amber-300 origin-left shadow-[0_0_12px_rgba(168,85,247,0.9),0_0_20px_rgba(0,240,255,0.7)]"
        style={{ scaleX }}
      />
    </div>
  );
};
