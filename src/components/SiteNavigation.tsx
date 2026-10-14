'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Terminal, Shield, ChevronRight } from 'lucide-react';

interface SiteNavigationProps {
  activeArcTitle?: string;
  activeArcNumber?: number;
}

export const SiteNavigation: React.FC<SiteNavigationProps> = ({
  activeArcTitle = 'THE ARCHITECT',
  activeArcNumber = 14,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Foundations', href: '#foundations' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Socials', href: '#socials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#05070B]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand identity */}
        <Link
          href="#"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-md"
        >
          <div className="w-9 h-9 rounded-lg bg-surface-raised border border-white/10 flex items-center justify-center text-purple-400 group-hover:border-purple-400/50 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all">
            <Terminal className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-black tracking-wider sm:tracking-widest text-base sm:text-lg text-white group-hover:text-purple-400 transition-colors">
              RISHISUPERYO
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-wider font-mono text-zinc-400 uppercase">
              Chronicles 2019–2026
            </span>
          </div>
        </Link>

        {/* Center telemetry status badge on desktop */}
        <div className="hidden lg:flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface/80 border border-white/10 text-xs font-mono text-zinc-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400"></span>
          </span>
          <span className="text-zinc-500">CHAPTER:</span>
          <span className="text-purple-400 font-semibold uppercase tracking-wider">
            {activeArcTitle}
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-xs font-mono tracking-wider text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#timeline"
            className="ml-2 px-4 py-2 text-xs font-mono tracking-wider bg-purple-500/15 hover:bg-purple-500/25 border border-purple-500/40 hover:border-purple-400 text-purple-300 rounded-md flex items-center gap-1.5 shadow-[0_0_15px_rgba(168,85,247,0.2)] hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all"
          >
            <span>THE TIMELINE</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="#timeline"
            className="px-2.5 py-1.5 text-[11px] font-mono bg-purple-500/15 border border-purple-500/40 text-purple-300 rounded"
          >
            TIMELINE
          </a>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-zinc-400 hover:text-white bg-surface-raised border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#070A11] border-b border-white/10 px-4 pt-3 pb-6 space-y-2">
          <div className="p-3 mb-3 rounded-lg bg-surface-raised border border-white/10 flex items-center gap-2 text-xs font-mono text-zinc-300">
            <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
            <span>ACTIVE CHAPTER: {activeArcTitle}</span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-sm font-mono text-zinc-300 hover:text-white hover:bg-white/5 rounded-md"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#timeline"
              onClick={() => setIsOpen(false)}
              className="w-full py-2.5 flex items-center justify-center gap-2 text-xs font-mono bg-purple-500/20 border border-purple-500 text-purple-300 rounded-md"
            >
              <Shield className="w-4 h-4" />
              <span>EXPLORE THE TIMELINE</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
