'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Terminal, Shield, Check, Copy } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const telegramHandle = '@rishi_legit';

  const handleCopy = () => {
    navigator.clipboard.writeText(telegramHandle);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-[#07090E]">
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Header Block with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-raised border border-white/10 text-xs font-mono text-purple-400 mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>TRANSMISSION TERMINAL</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight mb-2">
            INITIATE CONTACT
          </h2>

          {/* Slogan Spotlight */}
          <div className="text-base sm:text-lg font-mono font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 uppercase mb-6">
            "The Price Of Fate Haunts Everyone"
          </div>

          <p className="text-zinc-400 font-mono text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-10">
            Interested in discussing Armada Web OS, AI automation systems, or strategic digital ventures? Connect directly through verified channels.
          </p>
        </motion.div>

        {/* Contact Console Box */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="p-8 rounded-3xl bg-surface border border-white/10 max-w-2xl mx-auto shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-surface-raised border border-white/5 mb-6">
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-lg bg-purple-500/15 border border-purple-500/30 text-purple-400 flex items-center justify-center">
                <Send className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-zinc-500 uppercase">Primary Direct Channel</div>
                <div className="text-base font-mono font-bold text-white">{telegramHandle}</div>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={handleCopy}
                className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-zinc-300 flex items-center justify-center gap-1.5 transition-all w-full sm:w-auto"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'COPIED' : 'COPY'}</span>
              </button>

              <a
                href="https://t.me/rishi_legit"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all w-full sm:w-auto shadow-[0_0_15px_rgba(168,85,247,0.3)]"
              >
                <span>OPEN</span>
                <Send className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left text-xs font-mono">
            <div className="p-3.5 rounded-xl bg-surface-raised/60 border border-white/5">
              <span className="text-zinc-500 text-[10px] uppercase block mb-1">GitHub Root</span>
              <a
                href="https://github.com/disappointed-guy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:underline font-semibold"
              >
                @disappointed-guy
              </a>
            </div>

            <div className="p-3.5 rounded-xl bg-surface-raised/60 border border-white/5">
              <span className="text-zinc-500 text-[10px] uppercase block mb-1">Instagram</span>
              <a
                href="https://instagram.com/rishisuperyo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:underline font-semibold"
              >
                @rishisuperyo
              </a>
            </div>

            <div className="p-3.5 rounded-xl bg-surface-raised/60 border border-white/5">
              <span className="text-zinc-500 text-[10px] uppercase block mb-1">Armada Platform</span>
              <a
                href="https://armada.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline font-semibold"
              >
                armada.tech
              </a>
            </div>
          </div>
        </motion.div>

        {/* Under Development & Confidentiality Notice */}
        <div className="mt-10 max-w-2xl mx-auto p-4 rounded-2xl bg-red-950/20 border border-red-500/20 text-center font-mono text-xs space-y-1.5">
          <div className="text-red-400 font-bold uppercase tracking-wider flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span>CONFIDENTIAL ARCHIVES // PRE-ALPHA DEPLOYMENT</span>
          </div>
          <p className="text-zinc-400 leading-relaxed text-[11px]">
            This site is still under active development (didn't even start yet). The current pages cover only <span className="text-white font-bold">7% of the actual timeline</span> and reveal only <span className="text-white font-bold">15% of total capabilities</span>. Major operations, subterranean events, and systems remain strictly confidential.
          </p>
          <div className="pt-1.5 text-[10px] text-amber-300/80 font-mono">
            ⚠ Rushed and messy build, cooked in a hurry — don't pay much attention to pics or placeholders.
          </div>
        </div>

        {/* Footer Credit & Slogan */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-4">
          <div>
            © 2019–2026 Rishisuperyo. Chronicles in continuous construction.
          </div>
          <div className="flex items-center gap-2 text-zinc-300 font-bold tracking-wider">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span>THE PRICE OF FATE HAUNTS EVERYONE</span>
          </div>
        </div>
      </div>
    </section>
  );
};
