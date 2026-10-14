'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Lock, ShieldAlert, Terminal, AlertTriangle } from 'lucide-react';
import { CHARACTER_REGISTRY } from '@/config/characters';

interface ConfidentialArcProps {
  isActive?: boolean;
}

export const ConfidentialArc: React.FC<ConfidentialArcProps> = ({ isActive = false }) => {
  const [typedStage, setTypedStage] = useState(0);
  const charConfig = CHARACTER_REGISTRY['arc-15-confidential'] || CHARACTER_REGISTRY['arc-16-confidential'];

  useEffect(() => {
    if (!isActive) {
      setTypedStage(0);
      return;
    }

    const timer1 = setTimeout(() => setTypedStage(1), 400);  // INITIALIZING PLAN...
    const timer2 = setTimeout(() => setTypedStage(2), 1200); // CONFIDENTIAL INFORMATION DETECTED
    const timer3 = setTimeout(() => setTypedStage(3), 2000); // ACCESS RESTRICTED
    const timer4 = setTimeout(() => setTypedStage(4), 2800); // FINAL SEAL: 2026–2027???

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [isActive]);

  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center p-6 sm:p-12 bg-black border-2 border-red-950/60 rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(239,68,68,0.15)]">
      {/* Red ambient warning pulse */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.12)_0%,rgba(0,0,0,0.98)_70%)] pointer-events-none" />

      {/* Grid Scanline */}
      <div className="absolute inset-0 scanlines-overlay opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-4xl w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left Column: Locked Terminal Display */}
        <div className="md:col-span-7 space-y-6">
          {/* Header Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-500/40 text-red-400 font-mono text-xs">
            <ShieldAlert className="w-4 h-4 animate-pulse" />
            <span className="tracking-widest uppercase font-bold">CLASSIFIED LEVEL 5 // PROTOCOL REDACTED</span>
          </div>

          <div>
            <div className="text-xs font-mono text-red-500/80 tracking-widest uppercase">
              CONFIDENTIAL CHAPTER // HORIZON SEALED
            </div>
            <h3 className="text-4xl sm:text-6xl font-display font-black text-white tracking-tight mt-1">
              PLAN...
            </h3>
            <div className="text-xl sm:text-2xl font-mono text-red-500 font-bold mt-2">
              2026–2027
            </div>
          </div>

          {/* Terminal Console Box */}
          <div className="p-5 rounded-xl bg-zinc-950/90 border border-red-900/40 font-mono text-xs space-y-2.5">
            <div className="flex items-center justify-between pb-2 border-b border-red-950 text-[10px] text-zinc-500">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-red-500" />
                <span>TERMINAL_STDOUT // SECURE_SOCKET</span>
              </span>
              <span className="text-red-500 font-bold">ENCRYPTED</span>
            </div>

            <div className="space-y-1.5 text-zinc-300">
              <div className="flex items-center gap-2">
                <span className="text-red-500">&gt;</span>
                <span className="text-zinc-400">STATUS:</span>
                <span className="text-white">INITIALIZING PLAN...</span>
              </div>

              {typedStage >= 1 && (
                <div className="flex items-center gap-2 text-red-400">
                  <span className="text-red-500">&gt;</span>
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>CONFIDENTIAL INFORMATION DETECTED</span>
                </div>
              )}

              {typedStage >= 2 && (
                <div className="flex items-center gap-2 text-red-500 font-bold">
                  <span>&gt;</span>
                  <Lock className="w-3.5 h-3.5" />
                  <span>ACCESS RESTRICTED — CLEARANCE NULL</span>
                </div>
              )}

              {typedStage >= 3 && (
                <div className="pt-2 text-sm font-bold text-white border-t border-red-950/60 flex items-center justify-between">
                  <span className="text-red-500">FUTURE ARC:</span>
                  <span className="tracking-widest text-red-400 font-mono">UNDISCLOSED</span>
                </div>
              )}
            </div>
          </div>

          <p className="text-xs font-mono text-zinc-500 leading-relaxed">
            The next chapter remains sealed in operational confidentiality. No forward projections, fabricated goals, or spoilers are authorized.
          </p>
        </div>

        {/* Right Column: Encrypted Silhouette Stage */}
        <div className="md:col-span-5 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-[280px] aspect-[3/4] flex items-center justify-center">
            {/* Holographic red rings */}
            <div className="absolute inset-0 rounded-full border border-red-500/20 animate-spin" style={{ animationDuration: '25s' }} />
            <div className="absolute inset-6 rounded-full border border-dashed border-red-500/40 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />

            {/* Character Silhouette */}
            <div className="relative z-10 w-full h-full filter drop-shadow-[0_0_30px_rgba(239,68,68,0.5)]">
              <Image
                src={charConfig.imageSrc}
                alt="Confidential Horizon Arc"
                fill
                sizes="(max-width: 768px) 100vw, 280px"
                className="object-contain filter brightness-75 contrast-125"
              />
            </div>

            {/* Redacted Lock Seal Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px] rounded-2xl">
              <div className="w-16 h-16 rounded-full bg-red-950/80 border-2 border-red-500 flex items-center justify-center text-red-500 shadow-[0_0_30px_rgba(239,68,68,0.8)]">
                <Lock className="w-8 h-8" />
              </div>
              <div className="mt-3 px-3 py-1 rounded bg-black/80 border border-red-500/40 text-red-400 font-mono font-bold text-[11px] tracking-widest">
                2026–2027???
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
