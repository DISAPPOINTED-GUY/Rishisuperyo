'use client';

import React, { useState } from 'react';
import { AmbientEffects } from '@/components/AmbientEffects';
import { SiteNavigation } from '@/components/SiteNavigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { FoundationSection } from '@/components/FoundationSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { TimelineSection } from '@/components/TimelineSection';
import { TimelineProgress } from '@/components/TimelineProgress';
import { SocialLinks } from '@/components/SocialLinks';
import { ContactSection } from '@/components/ContactSection';
import { TIMELINE_ARCS } from '@/data/timelineData';

export default function Home() {
  const [activeArcNumber, setActiveArcNumber] = useState(14);
  const [activeArcTitle, setActiveArcTitle] = useState('THE ARCHITECT');

  const currentArc = TIMELINE_ARCS[activeArcNumber - 1] || TIMELINE_ARCS[13];

  const handleArcChange = (arcNumber: number, title: string) => {
    setActiveArcNumber(arcNumber);
    setActiveArcTitle(title);
  };

  return (
    <main className="min-h-screen bg-[#05070B] text-slate-100 selection:bg-purple-500 selection:text-white relative">
      {/* Scroll depth progress bar */}
      <TimelineProgress />

      {/* Atmospheric particle & ambient lighting engine */}
      <AmbientEffects activeColor={currentArc.accentColor} />

      {/* Fixed futuristic header */}
      <SiteNavigation
        activeArcTitle={activeArcTitle}
        activeArcNumber={activeArcNumber}
      />

      {/* A. Cinematic Opening / Hero */}
      <HeroSection />

      {/* B. About Me */}
      <AboutSection />

      {/* C. Core Foundations */}
      <FoundationSection />

      {/* D. Core Skills */}
      <SkillsSection />

      {/* E. Projects (Flagship: Armada Web OS) */}
      <ProjectsSection />

      {/* F. The Chronology (Centerpiece: 15 Arcs) */}
      <TimelineSection onArcChange={handleArcChange} />

      {/* G. Socials & Verified Channels */}
      <SocialLinks />

      {/* H. Contact Terminal & Footer */}
      <ContactSection />
    </main>
  );
}
