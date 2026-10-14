'use client';

import React from 'react';
import { FOUNDATIONS } from '@/data/timelineData';
import { Network, Terminal, Cpu, Sparkles, Users, Layers, Briefcase, Compass, ShieldCheck } from 'lucide-react';

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Network,
  Terminal,
  Cpu,
  Sparkles,
  Users,
  Layers,
  Briefcase,
  Compass
};

export const FoundationSection: React.FC = () => {
  return (
    <section id="foundations" className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-[#07090E]">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-raised border border-white/10 text-xs font-mono text-purple-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>CORE PILLARS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
            ENGINEERING & MENTAL FOUNDATIONS
          </h2>
          <p className="text-zinc-400 font-mono text-sm sm:text-base max-w-2xl leading-relaxed">
            The principles forged not in lecture halls, but through live network warfare, market dynamics, and building tools under pressure.
          </p>
        </div>

        {/* 8 Foundations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FOUNDATIONS.map((f, index) => {
            const Icon = ICON_MAP[f.icon] || Cpu;
            return (
              <div
                key={f.id}
                className="group p-6 rounded-2xl bg-surface border border-white/5 hover:border-purple-500/40 hover:bg-surface-raised transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-surface-raised border border-white/10 group-hover:border-purple-400/50 group-hover:text-purple-400 text-zinc-400 flex items-center justify-center transition-all group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-zinc-600">0{index + 1}</span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-purple-400 uppercase">
                      {f.theme}
                    </span>
                    <h3 className="text-lg font-display font-bold text-white mt-1 group-hover:text-purple-300 transition-colors">
                      {f.title}
                    </h3>
                  </div>

                  <p className="text-xs font-mono text-zinc-300 italic border-l-2 border-purple-500/40 pl-3 leading-relaxed">
                    "{f.statement}"
                  </p>

                  <p className="text-xs text-zinc-400 font-sans leading-relaxed pt-1">
                    {f.narrative}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>FOUNDATION #{index + 1}</span>
                  <span className="group-hover:text-purple-400 transition-colors">ACTIVE</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
