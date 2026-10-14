'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TIMELINE_ARCS } from '@/data/timelineData';
import { CHARACTER_REGISTRY } from '@/config/characters';
import { ConfidentialArc } from './ConfidentialArc';
import { TimelineNavigator } from './TimelineNavigator';
import { 
  Calendar, 
  Sparkles, 
  Layers, 
  Shield, 
  Terminal, 
  ChevronRight, 
  Quote, 
  Activity,
  Zap,
  CheckCircle2
} from 'lucide-react';

interface TimelineSectionProps {
  onArcChange?: (arcIndex: number, title: string) => void;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ onArcChange }) => {
  const [currentArcIndex, setCurrentArcIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const prevArcIndexRef = useRef(0);
  const chapterRefs = useRef<(HTMLDivElement | null)[]>([]);

  const activeArc = TIMELINE_ARCS[currentArcIndex] || TIMELINE_ARCS[0];
  const charConfig = CHARACTER_REGISTRY[activeArc.id] || CHARACTER_REGISTRY['arc-04-prime'];

  // Handle active arc detection via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    chapterRefs.current.forEach((el, index) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
              if (prevArcIndexRef.current !== index) {
                // Trigger digital glitch transition
                setIsGlitching(true);
                setCurrentArcIndex(index);
                prevArcIndexRef.current = index;

                if (onArcChange) {
                  onArcChange(index + 1, TIMELINE_ARCS[index].title);
                }

                // Settle transition after 450ms
                setTimeout(() => {
                  setIsGlitching(false);
                }, 450);
              }
            }
          });
        },
        {
          root: null,
          rootMargin: '-10% 0px -25% 0px',
          threshold: [0.15, 0.4]
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [onArcChange]);

  const handleSelectArc = (index: number) => {
    const targetEl = chapterRefs.current[index];
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="timeline" className="relative py-20 bg-[#05070B] overflow-hidden">
      {/* Dynamic Background Atmosphere */}
      <div
        className="fixed inset-0 pointer-events-none transition-colors duration-1000 opacity-20 -z-10"
        style={{
          background: `radial-gradient(ellipse at 80% 40%, ${activeArc.glowColor} 0%, transparent 65%)`
        }}
      />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 flex flex-col items-start space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-raised border border-purple-500/30 text-xs font-mono text-purple-300">
            <Activity className="w-3.5 h-3.5 animate-pulse text-purple-400" />
            <span>SCROLL-DRIVEN AUTOBIOGRAPHY</span>
          </div>

          <div className="space-y-2">
            <h2 className="text-4xl sm:text-6xl font-black font-display text-white tracking-tight">
              THE CHRONOLOGICAL EVOLUTION
            </h2>

            {/* Slogan */}
            <div className="text-sm sm:text-base font-mono font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 uppercase">
              "The Price Of Fate Haunts Everyone"
            </div>
          </div>

          <p className="text-zinc-400 font-mono text-sm sm:text-base max-w-3xl leading-relaxed">
            Scroll down to witness every chapter from 2019 to 2026. Watch the character transmute, the atmospheric lighting shift, and the real story unfold.
          </p>

          {/* 7% Disclosure & Pre-Alpha Telemetry Banner */}
          <div className="w-full max-w-3xl p-4 rounded-2xl bg-gradient-to-r from-red-950/40 via-surface-raised to-surface border border-red-500/30 font-mono text-xs space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="flex items-center gap-2 text-red-400 font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <span>CHRONICLE COVERAGE: ONLY 7% REVEALED</span>
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-red-900/40 text-red-300 border border-red-500/30 uppercase font-bold">
                93% STRICTLY CONFIDENTIAL
              </span>
            </div>
            <p className="text-zinc-300 text-xs leading-relaxed">
              Notice: This interactive document covers <strong className="text-white">only 7% of the actual timing and occurrences</strong>. The platform is currently <strong className="text-red-400">under initial development (didn't even start yet)</strong>. Countless operations, underground networks, and personal chapters remain sealed in operational confidentiality.
            </p>
            <div className="pt-1.5 border-t border-red-900/40 text-[11px] font-mono text-amber-300/85 flex items-center gap-1.5">
              <span className="text-amber-400 font-bold">⚠ NOTE:</span>
              <span>Site is rushed and messy, cooked in a hurry—so please don't pay much attention to pics, temporary crops, etc.</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono text-zinc-400">
            <span className="px-3 py-1 rounded-md bg-surface border border-white/10 text-white font-semibold">
              7% REVEALED // 93% CLASSIFIED
            </span>
            <span className="text-zinc-600">•</span>
            <span className="px-3 py-1 rounded-md bg-surface border border-white/10 text-white font-semibold">
              CHARACTER EVOLUTION SYSTEM
            </span>
            <span className="text-zinc-600">•</span>
            <span className="px-3 py-1 rounded-md bg-surface border border-white/10 text-white font-semibold">
              DEV: DIDN'T EVEN START
            </span>
          </div>
        </motion.div>

        {/* Master Staging Layout: Split Desktop Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
          
          {/* LEFT / CENTER: Scrolling Narrative Chapters (7 Columns) */}
          <div className="lg:col-span-7 space-y-36">
            {TIMELINE_ARCS.map((arc, index) => {
              const isArcActive = currentArcIndex === index;

              return (
                <div
                  key={arc.id}
                  id={arc.id}
                  ref={(el) => {
                    chapterRefs.current[index] = el;
                  }}
                  className={`scroll-mt-28 transition-all duration-500 ${
                    isArcActive ? 'opacity-100 scale-100' : 'opacity-40 hover:opacity-75 scale-[0.99]'
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  >
                  {arc.isConfidential ? (
                    /* ARC 15: CLASSIFIED TERMINAL CHAPTER */
                    <ConfidentialArc isActive={isArcActive} />
                  ) : (
                    /* ARCS 01 - 14: RICH CINEMATIC CHAPTER */
                    <div className="p-6 sm:p-10 rounded-3xl bg-surface/90 border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden backdrop-blur-md">
                      
                      {/* Era Ambient Glow Accent */}
                      <div
                        className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-15 pointer-events-none transition-all"
                        style={{ backgroundColor: arc.accentColor }}
                      />

                      {/* Chapter Metadata Ribbon */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/10">
                        <div className="flex items-center gap-3">
                          <span
                            className="px-3.5 py-1.5 rounded-md font-display font-black text-xs sm:text-sm tracking-wider uppercase text-black"
                            style={{ backgroundColor: arc.accentColor }}
                          >
                            {arc.title}
                          </span>
                          <span className="text-xs font-mono font-semibold text-zinc-300 flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                            <span>{arc.period}</span>
                          </span>
                        </div>

                        <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
                          {arc.theme}
                        </span>
                      </div>

                      {/* Cinematic Character Scroll Reveal for this Chapter */}
                      <div className="my-8 p-6 rounded-2xl bg-gradient-to-b from-surface-raised/90 via-surface to-[#0A0D14] border border-white/10 relative overflow-hidden flex flex-col sm:flex-row items-center gap-6 shadow-[0_10px_40px_rgba(0,0,0,0.5)] group">
                        {/* Ambient Halo behind character */}
                        <div
                          className="absolute -left-10 top-1/2 -translate-y-1/2 w-60 h-60 rounded-full blur-3xl opacity-20 pointer-events-none transition-all duration-700"
                          style={{ backgroundColor: arc.accentColor }}
                        />

                        <div className="relative w-44 sm:w-52 h-64 sm:h-72 shrink-0 flex items-center justify-center">
                          {/* Concentric subtle rings */}
                          <div
                            className="absolute inset-2 rounded-full border border-dashed opacity-30 animate-spin"
                            style={{ borderColor: arc.accentColor, animationDuration: '24s' }}
                          />
                          <div className="relative z-10 w-full h-full animate-float">
                            <Image
                              src={arc.characterImage}
                              alt={arc.title}
                              fill
                              sizes="(max-width: 640px) 176px, 208px"
                              className="object-contain"
                              style={{
                                filter: `drop-shadow(0 0 25px ${arc.glowColor})`,
                                objectFit: 'contain'
                              }}
                            />
                          </div>
                        </div>

                        <div className="space-y-2 text-left z-10 flex-1">
                          <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                            Era Visual Form
                          </div>
                          <div className="text-xl sm:text-2xl font-display font-black text-white" style={{ color: arc.accentColor }}>
                            {arc.title}
                          </div>
                          <div className="text-xs font-mono text-zinc-300 leading-relaxed">
                            {arc.characterPoseDescription}
                          </div>
                          <div className="pt-2 flex items-center gap-2 text-[10px] font-mono text-zinc-400">
                            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: arc.accentColor }} />
                            <span>{arc.period} • {arc.theme}</span>
                          </div>
                        </div>
                      </div>

                      {/* Main Title & Subtitle */}
                      <div className="mt-6 mb-4">
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight">
                          {arc.title}
                        </h3>
                        <p
                          className="text-sm sm:text-base font-mono font-medium mt-1.5"
                          style={{ color: arc.accentColor }}
                        >
                          {arc.subtitle}
                        </p>
                      </div>

                      {/* Era Quote */}
                      {arc.quote && (
                        <div className="my-6 p-4 rounded-xl bg-surface-raised border-l-4 border-white/20 italic font-mono text-xs sm:text-sm text-zinc-300 flex items-start gap-3">
                          <Quote className="w-4 h-4 shrink-0 text-zinc-500 mt-0.5" />
                          <span>"{arc.quote}"</span>
                        </div>
                      )}

                      {/* Description Paragraphs */}
                      <div className="space-y-4 text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                        {arc.description.map((paragraph, pIdx) => (
                          <p key={pIdx}>{paragraph}</p>
                        ))}
                      </div>

                      {/* Key Highlights Matrix */}
                      <div className="mt-8 pt-6 border-t border-white/10">
                        <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 mb-3 flex items-center gap-1.5">
                          <Zap className="w-3.5 h-3.5 text-cyber-cyan" />
                          <span>HISTORICAL MILESTONES & ACHIEVEMENTS</span>
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {arc.keyHighlights.map((hl, hlIdx) => (
                            <li
                              key={hlIdx}
                              className="p-2.5 rounded-lg bg-surface-raised/60 border border-white/5 text-xs text-zinc-300 flex items-start gap-2 leading-snug"
                            >
                              <CheckCircle2
                                className="w-4 h-4 shrink-0 mt-0.5"
                                style={{ color: arc.accentColor }}
                              />
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Timeline Events Breakdown */}
                      {arc.events && arc.events.length > 0 && (
                        <div className="mt-8 pt-6 border-t border-white/10">
                          <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 mb-4">
                            EVENT LOGS
                          </div>
                          <div className="space-y-3">
                            {arc.events.map((evt, eIdx) => (
                              <div
                                key={eIdx}
                                className="p-3.5 rounded-xl bg-surface-raised/80 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                              >
                                <div className="space-y-1">
                                  <div className="flex items-center gap-2">
                                    {evt.month && (
                                      <span className="text-[11px] font-mono text-zinc-500">
                                        [{evt.month}]
                                      </span>
                                    )}
                                    <span className="text-xs font-mono font-bold text-white">
                                      {evt.headline}
                                    </span>
                                  </div>
                                  <p className="text-xs text-zinc-400 font-sans">
                                    {evt.detail}
                                  </p>
                                </div>
                                {evt.tag && (
                                  <span className="self-start sm:self-center px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-zinc-400 border border-white/5 shrink-0">
                                    {evt.tag}
                                  </span>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Era Stats Badges */}
                      {arc.stats && arc.stats.length > 0 && (
                        <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-4">
                          {arc.stats.map((st, stIdx) => (
                            <div key={stIdx} className="p-3 rounded-xl bg-surface-raised border border-white/5 text-center">
                              <div
                                className="text-base sm:text-xl font-display font-black"
                                style={{ color: arc.accentColor }}
                              >
                                {st.value}
                              </div>
                              <div className="text-[10px] font-mono text-zinc-500 uppercase mt-0.5">
                                {st.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                    </div>
                  )}
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Pinned Sticky Cinematic Character Stage (5 Columns, Desktop Only) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block lg:col-span-5 sticky top-28 self-start"
          >
            <div className="p-8 rounded-3xl bg-surface/90 border border-white/10 backdrop-blur-xl relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
              
              {/* Top Telemetry Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full animate-pulse"
                    style={{ backgroundColor: activeArc.accentColor }}
                  />
                  <span className="text-white font-bold uppercase tracking-wider">{activeArc.title}</span>
                  <span className="text-zinc-500">•</span>
                  <span className="text-zinc-400">{activeArc.period}</span>
                </div>
                <div className="text-purple-400 font-mono text-[11px] font-semibold">
                  ACTIVE CHAPTER
                </div>
              </div>

              {/* Dynamic Aura Background */}
              <div
                className="absolute inset-0 transition-all duration-700 pointer-events-none opacity-20"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${activeArc.glowColor} 0%, transparent 70%)`
                }}
              />

              {/* Central Character Staging Arena */}
              <div className="relative w-full aspect-[3/4] max-h-[520px] flex items-center justify-center my-4">
                
                {/* Holographic Rotation Rings */}
                <div
                  className="absolute inset-2 rounded-full border border-dashed transition-colors duration-700 animate-spin"
                  style={{
                    borderColor: `${activeArc.accentColor}30`,
                    animationDuration: '30s'
                  }}
                />

                {/* Glitch Overlay Layers during era transition */}
                {isGlitching && (
                  <div className="absolute inset-0 z-30 pointer-events-none">
                    <div className="absolute inset-0 bg-cyber-cyan/20 mix-blend-screen glitch-layer-1" />
                    <div className="absolute inset-0 bg-cyber-crimson/20 mix-blend-screen glitch-layer-2" />
                    <div className="absolute inset-0 scanlines-overlay opacity-80" />
                  </div>
                )}

                {/* The Character Image Cutout */}
                <div
                  className={`relative z-20 w-full h-full flex items-center justify-center transition-all duration-500 ${
                    isGlitching
                      ? 'scale-105 opacity-70 filter blur-[1px] contrast-150'
                      : 'scale-100 opacity-100 animate-float'
                  }`}
                >
                  <Image
                    key={activeArc.id}
                    src={charConfig.imageSrc}
                    alt={charConfig.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 450px"
                    className="object-contain transition-all duration-500"
                    style={{
                      filter: `drop-shadow(0 0 35px ${activeArc.glowColor})`
                    }}
                  />
                </div>

                {/* Glitch scan-line slice indicator */}
                {isGlitching && (
                  <div className="absolute inset-x-0 h-1 bg-white/70 animate-scanline z-40" />
                )}
              </div>

              {/* Character State Status Card */}
              <div className="p-4 rounded-xl bg-surface-raised border border-white/10 space-y-2 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest">
                    ACTIVE ARCHETYPE
                  </span>
                  <span
                    className="text-[11px] font-bold"
                    style={{ color: activeArc.accentColor }}
                  >
                    {charConfig.name}
                  </span>
                </div>

                <div className="text-zinc-300 text-xs font-sans leading-relaxed">
                  {activeArc.characterPoseDescription}
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-zinc-500">
                  <span>ASSET: {charConfig.imageSrc}</span>
                  <span className="text-emerald-400 font-mono">STANDBY / ALPHA OK</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
