'use client';

import React, { useState } from 'react';
import { TIMELINE_ARCS } from '@/data/timelineData';
import { ChevronRight, ListOrdered, Calendar, Shield, Lock } from 'lucide-react';

interface TimelineNavigatorProps {
  currentArcIndex: number;
  onSelectArc: (index: number) => void;
}

export const TimelineNavigator: React.FC<TimelineNavigatorProps> = ({
  currentArcIndex,
  onSelectArc,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const activeArc = TIMELINE_ARCS[currentArcIndex] || TIMELINE_ARCS[0];

  return (
    <>
      {/* Desktop Sticky Floating Timeline Scrubber */}
      <div className="hidden lg:block fixed left-6 top-1/2 -translate-y-1/2 z-40">
        <div className="p-3 rounded-2xl bg-surface/90 border border-white/10 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.6)] flex flex-col items-center gap-1.5 max-h-[85vh] overflow-y-auto no-scrollbar">
          <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest pb-1 border-b border-white/10 w-full text-center">
            ARCS
          </div>

          <div className="flex flex-col gap-1.5 py-1">
            {TIMELINE_ARCS.map((arc, index) => {
              const isSelected = index === currentArcIndex;
              return (
                <button
                  key={arc.id}
                  onClick={() => onSelectArc(index)}
                  className={`group relative flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-mono transition-all text-left ${
                    isSelected
                      ? 'bg-white/15 text-white font-bold shadow-[0_0_15px_rgba(255,255,255,0.1)]'
                      : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/5'
                  }`}
                  title={`${arc.romanNumeral}: ${arc.title} (${arc.period})`}
                >
                  {/* Indicator Dot with Arc Accent */}
                  <span
                    className={`w-2 h-2 rounded-full transition-transform ${
                      isSelected ? 'scale-125' : 'group-hover:scale-110 opacity-60'
                    }`}
                    style={{ backgroundColor: arc.accentColor }}
                  />

                  <span className="text-[11px] whitespace-nowrap">
                    {arc.romanNumeral}
                  </span>

                  {/* Tooltip Hover Badge */}
                  <span className="absolute left-full ml-3 px-2.5 py-1 rounded-md bg-surface-raised border border-white/10 text-white text-[11px] font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-lg z-50">
                    <span className="font-semibold text-cyber-cyan">{arc.title}</span>
                    <span className="text-zinc-400 ml-1.5">[{arc.period}]</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="pt-1.5 border-t border-white/10 text-[10px] font-mono text-zinc-500">
            {String(currentArcIndex + 1).padStart(2, '0')}/{String(TIMELINE_ARCS.length).padStart(2, '0')}
          </div>
        </div>
      </div>

      {/* Mobile Floating Quick Pill / Drawer Trigger */}
      <div className="lg:hidden fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="px-4 py-2.5 rounded-full bg-surface-raised/95 border border-cyber-cyan/50 text-white font-mono text-xs flex items-center gap-2 shadow-[0_4px_25px_rgba(0,240,255,0.3)] backdrop-blur-md"
        >
          <span
            className="w-2.5 h-2.5 rounded-full animate-pulse"
            style={{ backgroundColor: activeArc.accentColor }}
          />
          <span className="font-bold text-cyber-cyan">{activeArc.romanNumeral}</span>
          <span className="text-zinc-400">|</span>
          <span className="max-w-[100px] truncate">{activeArc.title}</span>
          <ListOrdered className="w-4 h-4 ml-1 text-zinc-400" />
        </button>

        {/* Mobile Full Modal Drawer */}
        {isExpanded && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl p-6 flex flex-col justify-end">
            <div className="bg-surface rounded-2xl border border-white/10 p-5 max-h-[80vh] flex flex-col">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="font-display font-bold text-white text-base">
                  TIMELINE CHAPTER NAVIGATION
                </div>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-xs font-mono px-2 py-1 rounded bg-white/10 text-zinc-300"
                >
                  CLOSE
                </button>
              </div>

              <div className="overflow-y-auto py-3 space-y-1.5">
                {TIMELINE_ARCS.map((arc, index) => {
                  const isSelected = index === currentArcIndex;
                  return (
                    <button
                      key={arc.id}
                      onClick={() => {
                        onSelectArc(index);
                        setIsExpanded(false);
                      }}
                      className={`w-full p-2.5 rounded-xl text-left flex items-center justify-between font-mono text-xs transition-all ${
                        isSelected
                          ? 'bg-cyber-cyan/20 border border-cyber-cyan text-white font-bold'
                          : 'bg-surface-raised/60 hover:bg-surface-raised text-zinc-300'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: arc.accentColor }}
                        />
                        <span>{arc.romanNumeral}: {arc.title}</span>
                      </div>
                      <span className="text-[11px] text-zinc-500">{arc.period}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
