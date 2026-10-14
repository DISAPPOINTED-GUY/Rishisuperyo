'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '@/data/timelineData';
import { Cpu, ExternalLink, Globe, Sparkles, Layers, Shield, Terminal, ArrowUpRight } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const flagshipProject = PROJECTS.find((p) => p.isFlagship) || PROJECTS[0];
  const secondaryProjects = PROJECTS.filter((p) => !p.isFlagship);

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-[#07090E]">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start space-y-3 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-raised border border-white/10 text-xs font-mono text-purple-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>PROJECT INITIATIVES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
            SYSTEMS, PLATFORMS & VENTURES
          </h2>
          <p className="text-zinc-400 font-mono text-sm sm:text-base max-w-2xl leading-relaxed">
            From grassroots automation tools powering thousands of active traders to the overarching flagship: Armada Web OS.
          </p>
        </motion.div>

        {/* Flagship Hero Project: Armada Web OS */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-surface-raised via-surface to-[#0A0E1A] border-2 border-purple-500/40 relative overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.2)] group"
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[140px] pointer-events-none group-hover:bg-purple-600/30 transition-all duration-700" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-mono font-bold text-xs tracking-wider uppercase shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                  CENTRAL TECHNOLOGY INITIATIVE
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-white font-mono text-xs">
                  Armada Ecosystem Core
                </span>
                <span className="text-xs font-mono text-purple-400 flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5" />
                  <span>armada.tech</span>
                </span>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight">
                  {flagshipProject.title}
                </h3>
                <p className="text-base sm:text-lg text-purple-400 font-mono mt-1 font-medium">
                  {flagshipProject.subtitle}
                </p>
              </div>

              <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed max-w-3xl">
                {flagshipProject.description}
              </p>

              {/* Technologies */}
              <div className="space-y-2">
                <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
                  ENGINEERING MATRIX
                </div>
                <div className="flex flex-wrap gap-2">
                  {flagshipProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-md bg-surface-border text-xs font-mono text-zinc-200 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Architecture Blueprint Metrics */}
              {flagshipProject.metrics && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  {flagshipProject.metrics.map((metric, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-surface/80 border border-white/10">
                      <div className="text-xs font-mono font-semibold text-white flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                        <span>{metric}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Architecture Ecosystem Card on the Right */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-surface/90 border border-white/10 space-y-4">
              <div className="text-xs font-mono uppercase text-zinc-400 tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-purple-400" />
                <span>Domain Architecture</span>
              </div>

              <div className="space-y-3 text-xs font-mono">
                <div className="p-3 rounded-lg bg-surface-raised border border-white/5">
                  <div className="text-purple-400 font-bold">rishisuperyo.me</div>
                  <div className="text-zinc-400 text-[11px]">Personal Identity & Cinematic Autobiography</div>
                </div>

                <div className="p-3 rounded-lg bg-surface-raised border border-purple-500/40">
                  <div className="text-white font-bold flex items-center justify-between">
                    <span>armada.tech</span>
                    <span className="text-[10px] text-purple-300 uppercase">Main Platform</span>
                  </div>
                  <div className="text-zinc-400 text-[11px]">Core technology, enterprise AI services & business</div>
                </div>

                <div className="p-3 rounded-lg bg-surface-raised border border-white/5">
                  <div className="text-white font-bold flex items-center justify-between">
                    <span>Armada WebNova</span>
                    <span className="text-[10px] text-zinc-400 uppercase">Commercial</span>
                  </div>
                  <div className="text-zinc-400 text-[11px]">High-end website development managed via Armada.tech</div>
                </div>
              </div>

              <a
                href="https://armada.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-lg bg-purple-500/15 hover:bg-purple-500/25 border border-purple-500/40 hover:border-purple-400 text-purple-300 font-mono text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-[0_0_15px_rgba(168,85,247,0.2)]"
              >
                <span>EXPLORE ARMADA.TECH</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Secondary Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondaryProjects.map((project, pIdx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: (pIdx % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 rounded-2xl bg-surface border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-white/5 text-zinc-300 border border-white/5">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono text-cyber-cyan">
                    {project.status}
                  </span>
                </div>

                <div>
                  <h4 className="text-xl font-display font-bold text-white group-hover:text-cyber-cyan transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs font-mono text-zinc-400 mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-raised text-zinc-400 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics / Footer */}
              <div className="pt-6 mt-6 border-t border-white/5">
                {project.metrics && (
                  <div className="space-y-1 mb-3">
                    {project.metrics.map((m, mi) => (
                      <div key={mi} className="text-[11px] font-mono text-zinc-300 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan/60" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                )}

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-cyber-cyan hover:underline"
                  >
                    <span>Visit {project.domain || 'Platform'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-[11px] font-mono text-zinc-500">
                    Chronicle Milestone
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
