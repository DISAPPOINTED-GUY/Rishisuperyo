'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { User, Terminal, Trophy, Bot, ShoppingCart, Brain, Layers, Sparkles } from 'lucide-react';
import { YoutubeIcon } from '@/components/icons/BrandIcons';

export const AboutSection: React.FC = () => {
  const evolutionThreads = [
    {
      icon: YoutubeIcon,
      title: 'Content Creation & Early Vision',
      years: '2019 – Present',
      desc: 'Started with Free Fire videos and regular YouTube uploads on limited hardware, evolving through viral animations to strategic digital media.',
      color: '#FF007F'
    },
    {
      icon: Trophy,
      title: 'Football & Competitive Spirit',
      years: '2019 – 2022',
      desc: 'Early dreams on dusty football grounds taught resilience, grit, and how to stay grounded when conditions are stacked against you.',
      color: '#64748B'
    },
    {
      icon: Bot,
      title: 'Python Automation & Telegram Bots',
      years: '2020 – 2021',
      desc: 'Transitioned from asking for assistance to architecting over 30 custom key bots, mastering MTProto protocols, and administering 400+ communities.',
      color: '#00F0FF'
    },
    {
      icon: ShoppingCart,
      title: 'Marketplaces & Commercial Trade',
      years: '2023 – 2024',
      desc: 'Built Old Groups Finder for 5,000+ traders, negotiated high-frequency peer-to-peer crypto transactions, and mastered digital market mechanics.',
      color: '#FFB703'
    },
    {
      icon: Brain,
      title: 'Analytical Systems & Strategic Alliance',
      years: '2025 – 2026',
      desc: 'Overcame burnout, decoupled from online conflicts, formed key strategic alliances, and reverse-engineered ICSE board examinations with calm precision.',
      color: '#38BDF8'
    },
    {
      icon: Layers,
      title: 'Armada Web OS & Armada WebNova',
      years: '2026',
      desc: 'Synthesizing 7 years of automation, bot infrastructure, market economics, and design into an AI-native web and business workflow operating system.',
      color: '#00F0FF'
    }
  ];

  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-[#05070B] overflow-hidden">
      {/* Background cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start space-y-3 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-raised border border-white/10 text-xs font-mono text-cyber-cyan">
            <User className="w-3.5 h-3.5" />
            <span>NARRATIVE BIOGRAPHY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
            THE ARCHITECTURE OF A YOUNG BUILDER
          </h2>
          <p className="text-zinc-400 font-mono text-sm sm:text-base max-w-3xl leading-relaxed">
            I am not a conventional resume with corporate certificates. I am a builder shaped by real digital trenches: trial by fire, device constraints, platform bans, market competition, and relentless rebuilding.
          </p>
        </motion.div>

        {/* Narrative Split: Story + Evolution Threads */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Narrative Pillar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-2xl bg-surface border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-cyan/10 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="text-xl font-display font-bold text-white mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-cyber-cyan" />
                <span>The Unfiltered Journey</span>
              </h3>

              <div className="space-y-4 text-sm text-zinc-300 leading-relaxed font-sans">
                <p>
                  My trajectory began without a mentor, high-end PC, or roadmap. In 2019, I started with a single smartphone and a desire to create something memorable online while balancing football dreams.
                </p>
                <p>
                  When 2020 arrived with lockdown and ridicule, hardware limitations—working on just 2 GB RAM—became an asset in disguise: it forced me to understand memory efficiency, lightweight scripts, and raw execution.
                </p>
                <p>
                  Between 2020 and 2024, I journeyed through the entire spectrum of digital influence: building a ???K-subscriber network in Cyberlegends, losing it all to coordinated breaches, stepping into high-conflict voice arenas, dominating digital markets with custom tooling, enduring severe burnout, and finding clarity through strategic alliances.
                </p>
                <p className="text-cyber-cyan font-mono text-xs pt-2">
                  Today, every lesson converges into one focused initiative: architecting Armada Web OS.
                </p>
              </div>
            </div>

            {/* Core Values Quote */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-surface-raised to-surface border border-cyber-cyan/20">
              <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">OPERATIONAL PHILOSOPHY</div>
              <p className="text-sm font-mono text-zinc-200 italic leading-relaxed">
                "Build what solves the bottleneck. Ship it before you feel ready. When systems fail or platforms pull the rug, calibrate without resentment and build a stronger architecture."
              </p>
            </div>
          </motion.div>

          {/* Right Evolution Threads Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {evolutionThreads.map((thread, index) => {
              const Icon = thread.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="p-6 rounded-xl bg-surface/70 border border-white/5 hover:border-white/20 transition-all group hover:bg-surface-raised/90 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center transition-all group-hover:scale-110"
                        style={{ backgroundColor: `${thread.color}15`, color: thread.color }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono text-zinc-500">{thread.years}</span>
                    </div>

                    <h4 className="font-display font-bold text-base text-white group-hover:text-cyber-cyan transition-colors">
                      {thread.title}
                    </h4>

                    <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                      {thread.desc}
                    </p>
                  </div>

                  <div className="pt-4 flex items-center gap-1.5 text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: thread.color }} />
                    <span>Evolutionary Vector</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
