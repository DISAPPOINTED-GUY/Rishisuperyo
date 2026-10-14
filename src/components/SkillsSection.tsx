'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '@/data/timelineData';
import { Code, Bot, Zap, Webhook, Globe, Palette, Brain, Search, Layout, TrendingUp, Users, Video, CheckCircle2 } from 'lucide-react';

const SKILL_ICONS: Record<string, React.FC<{ className?: string }>> = {
  Code,
  Bot,
  Zap,
  Webhook,
  Globe,
  Palette,
  Brain,
  Search,
  Layout,
  TrendingUp,
  Users,
  Video
};

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-[#05070B]">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start space-y-4 mb-16"
        >
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-raised border border-white/10 text-xs font-mono text-purple-400">
              <Code className="w-3.5 h-3.5" />
              <span>TECHNICAL CLUSTERS</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/40 text-xs font-mono text-purple-300">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <span className="font-bold">ONLY 15% SKILLS REVEALED</span>
              <span className="text-zinc-500">•</span>
              <span className="text-zinc-400">85% CONFIDENTIAL</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/50 border border-red-500/30 text-xs font-mono text-red-400">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              <span>PRE-ALPHA // COOKED IN A HURRY</span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
            CORE CAPABILITIES & DOMAINS
          </h2>

          <p className="text-zinc-400 font-mono text-sm sm:text-base max-w-2xl leading-relaxed">
            Battle-tested competencies derived directly from real software deployment, market competition, and system architecture. The items below represent only <span className="text-purple-300 font-semibold">15% of total capability</span>—advanced network operations, proprietary algorithms, and enterprise telemetry remain strictly redacted.
          </p>
        </motion.div>

        {/* 3 Clusters Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((cat, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: catIdx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 rounded-2xl bg-surface border border-white/10 hover:border-purple-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <h3 className="text-lg font-display font-bold text-white">
                    {cat.title}
                  </h3>
                  <span className="text-xs font-mono text-purple-400">CLUSTER 0{catIdx + 1}</span>
                </div>

                <p className="text-xs text-zinc-400 font-sans my-4 leading-relaxed">
                  {cat.description}
                </p>

                <div className="space-y-4 pt-2">
                  {cat.skills.map((skill, sIdx) => {
                    const Icon = SKILL_ICONS[skill.iconName] || Code;
                    return (
                      <div
                        key={sIdx}
                        className="p-3.5 rounded-xl bg-surface-raised/80 border border-white/5 hover:border-purple-500/30 hover:bg-surface-raised transition-all group"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-2.5">
                            <div className="text-purple-400 group-hover:scale-110 transition-transform">
                              <Icon className="w-4 h-4" />
                            </div>
                            <span className="text-xs font-mono font-semibold text-zinc-200 group-hover:text-white transition-colors">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-400 border border-white/5">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-[11px] font-sans text-zinc-400 pl-6 leading-relaxed">
                          {skill.note}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyber-turquoise" />
                  <span>Configurable Registry</span>
                </span>
                <span>Active 2026</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
