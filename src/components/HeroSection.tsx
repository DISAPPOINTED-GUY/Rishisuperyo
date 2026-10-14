'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowDown, Sparkles, Shield, Cpu, Terminal, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { CHARACTER_REGISTRY } from '@/config/characters';

export const HeroSection: React.FC = () => {
  const currentHeroChar = CHARACTER_REGISTRY['arc-04-prime'] || CHARACTER_REGISTRY['arc-15-architect'];

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-16 px-3 xs:px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/20 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Monumental typography & Narrative Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
        >
          {/* Top Status Capsule */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-surface-raised/90 border border-purple-500/30 text-purple-300 text-xs font-mono tracking-wider shadow-[0_0_20px_rgba(168,85,247,0.2)] max-w-full">
            <span className="flex h-2 w-2 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400"></span>
            </span>
            <span className="truncate text-[10px] sm:text-xs">CHRONICLES 2019 – 2026 // FROM ORIGIN TO ARCHITECT</span>
          </div>

          {/* Main Title - Calibrated with clamp for mobile screens */}
          <div className="space-y-3 w-full">
            <h1 className="text-[clamp(1.75rem,7.5vw,5.5rem)] xs:text-5xl sm:text-7xl lg:text-8xl font-black font-display tracking-tight text-white leading-none whitespace-nowrap sm:whitespace-normal overflow-visible">
              RISHI<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-white">SUPERYO</span>
            </h1>

            {/* Official Slogan */}
            <div className="text-xs sm:text-base lg:text-lg font-mono font-bold tracking-wider sm:tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 uppercase flex items-center gap-2">
              <span>"The Price Of Fate Haunts Everyone"</span>
            </div>

            <p className="text-sm sm:text-lg lg:text-xl text-zinc-300 font-mono font-medium max-w-2xl leading-relaxed">
              An evolving timeline of code, creation, competition, and rebuilding.
            </p>
          </div>

          {/* Under Development & Confidentiality Banner */}
          <div className="w-full max-w-xl p-4 rounded-xl bg-gradient-to-r from-red-950/40 via-surface/90 to-surface border border-red-500/30 backdrop-blur-md space-y-2">
            <div className="flex items-center justify-between text-[11px] font-mono">
              <span className="flex items-center gap-2 text-red-400 font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                SYSTEM UNDER DEVELOPMENT // DIDN'T EVEN START
              </span>
              <span className="px-2 py-0.5 rounded bg-red-900/40 text-red-300 border border-red-500/30 text-[10px] font-bold">
                CONFIDENTIAL
              </span>
            </div>
            <p className="text-xs text-zinc-300 font-mono leading-relaxed">
              This site covers <span className="text-cyber-cyan font-bold">only 7% of the actual timeline</span> and exposes <span className="text-purple-400 font-bold">only 15% of skills</span>. The remaining 93% of operations, archives, and subterranean history remain strictly classified.
            </p>
            <div className="pt-2 border-t border-red-900/40 text-[11px] font-mono text-amber-300/90 flex items-start gap-2 leading-relaxed">
              <span className="text-amber-400 font-bold shrink-0">⚠ NOTE:</span>
              <span>Site is rushed & messy, cooked in a hurry—so please don't pay much attention to pictures or rough edges.</span>
            </div>
          </div>

          {/* Philosophical Manifesto / Intro */}
          <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed max-w-xl">
            From uploading YouTube videos on a 2 GB RAM phone in 2019 to commanding Telegram bot ecosystems, handling international crypto markets, enduring total collapse, and architecting <span className="text-purple-400 font-medium">Armada Web OS</span>.
            This is an interactive scroll-driven autobiography across seven years of relentless digital trial.
          </p>

          {/* The Central Concept Banner */}
          <div className="w-full max-w-xl p-3.5 rounded-xl bg-surface/80 border border-white/10 backdrop-blur-md">
            <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">Core Axiom</div>
            <div className="text-xs sm:text-sm font-mono text-zinc-200 mt-1 font-semibold flex items-center gap-2">
              <span className="text-purple-400">THE CHARACTER CHANGES.</span>
              <span className="text-zinc-500">•</span>
              <span className="text-fuchsia-400">THE TIMELINE MOVES.</span>
              <span className="text-zinc-500">•</span>
              <span className="text-white">THE STORY CONTINUES.</span>
            </div>
          </div>

          {/* Interactive CTAs */}
          <div className="pt-2 flex flex-wrap gap-4 w-full sm:w-auto">
            <a
              href="#timeline"
              className="px-6 py-3.5 rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-mono font-bold text-xs sm:text-sm tracking-wider uppercase hover:from-purple-500 hover:to-fuchsia-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all flex items-center justify-center gap-2.5 group"
            >
              <Terminal className="w-4 h-4" />
              <span>ENTER THE TIMELINE</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#projects"
              className="px-6 py-3.5 rounded-lg bg-surface-raised hover:bg-white/5 border border-white/10 hover:border-purple-500/50 text-white font-mono text-xs sm:text-sm tracking-wider uppercase transition-all flex items-center justify-center gap-2"
            >
              <Cpu className="w-4 h-4 text-purple-400" />
              <span>EXPLORE MY WORK</span>
            </a>

            <a
              href="#about"
              className="px-5 py-3.5 rounded-lg bg-transparent hover:bg-white/5 text-zinc-400 hover:text-white font-mono text-xs sm:text-sm tracking-wider uppercase transition-all flex items-center justify-center gap-1.5"
            >
              <span>ABOUT ME</span>
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 w-full max-w-xl text-left">
            <div>
              <div className="text-2xl sm:text-3xl font-display font-black text-cyber-cyan">7%</div>
              <div className="text-[11px] font-mono text-zinc-400">Timeline Revealed</div>
              <div className="text-[9px] font-mono text-zinc-600">93% Confidential</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-display font-black text-purple-400">15%</div>
              <div className="text-[11px] font-mono text-zinc-400">Skills Disclosed</div>
              <div className="text-[9px] font-mono text-zinc-600">85% Sealed</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-display font-black text-red-400">DEV</div>
              <div className="text-[11px] font-mono text-zinc-400">Didn't Even Start</div>
              <div className="text-[9px] font-mono text-zinc-600">Pre-Alpha Build</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-display font-black text-amber-300">ARMADA</div>
              <div className="text-[11px] font-mono text-zinc-400">Web OS (2026)</div>
              <div className="text-[9px] font-mono text-zinc-600">Flagship Core</div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Character Stage Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative flex items-center justify-center"
        >
          {/* Holographic backdrop disk */}
          <div className="relative w-full max-w-[420px] aspect-[3/4] flex items-center justify-center">
            {/* Energy rings */}
            <div className="absolute inset-0 rounded-full border border-purple-500/20 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-dashed border-fuchsia-500/20 animate-[spin_30s_linear_infinite_reverse]" />
            <div className="absolute inset-12 rounded-full border border-white/10" />

            {/* Glowing core atmosphere */}
            <div className="absolute inset-8 rounded-full bg-gradient-to-t from-purple-600/30 to-transparent blur-2xl" />

            {/* Character Image Cutout */}
            <div className="relative z-10 w-full h-full flex items-center justify-center animate-float">
              <div className="relative w-full h-full max-h-[540px]">
                <Image
                  src={currentHeroChar.imageSrc}
                  alt={currentHeroChar.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-contain filter drop-shadow-[0_0_35px_rgba(168,85,247,0.6)] transition-transform duration-500"
                />
              </div>

              {/* Holographic Data Overlay Badges */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-surface-raised/90 border border-white/10 backdrop-blur-md flex items-center justify-between text-xs font-mono">
                <div>
                  <div className="text-[10px] text-zinc-400 uppercase tracking-widest">Featured Era</div>
                  <div className="text-white font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span>THE PRIME [2021]</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-zinc-400 uppercase tracking-widest">Aura Class</div>
                  <div className="text-purple-300 font-semibold">CYBER MONARCH</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator with Motion */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="relative z-10 mt-12 flex flex-col items-center gap-2 text-zinc-400 text-xs font-mono"
      >
        <span className="tracking-widest uppercase text-[11px] text-zinc-400">Scroll to Witness Evolution</span>
        <div className="w-5 h-9 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-1.5 h-2.5 rounded-full bg-cyber-cyan"
          />
        </div>
      </motion.div>
    </section>
  );
};
