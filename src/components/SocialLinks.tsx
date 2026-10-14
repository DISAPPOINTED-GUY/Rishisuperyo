'use client';

import React from 'react';
import { SOCIAL_LINKS } from '@/data/timelineData';
import { Globe, ExternalLink, ShieldCheck } from 'lucide-react';
import { YoutubeIcon, GithubIcon, TelegramIcon, InstagramIcon } from '@/components/icons/BrandIcons';

const SOCIAL_ICONS: Record<string, React.FC<{ className?: string }>> = {
  Youtube: YoutubeIcon,
  Telegram: TelegramIcon,
  Send: TelegramIcon,
  Github: GithubIcon,
  Instagram: InstagramIcon,
  Globe
};

export const SocialLinks: React.FC = () => {
  return (
    <section id="socials" className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-[#05070B]">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-raised border border-white/10 text-xs font-mono text-purple-400">
            <Globe className="w-3.5 h-3.5" />
            <span>COMMUNICATION CHANNELS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
            NETWORK & SOCIAL ECOSYSTEM
          </h2>
          <p className="text-zinc-400 font-mono text-sm sm:text-base max-w-2xl leading-relaxed">
            Direct public touchpoints. All links are centrally configured and verified against real handles.
          </p>
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {SOCIAL_LINKS.map((item, index) => {
            const Icon = SOCIAL_ICONS[item.icon] || Globe;
            return (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-surface border border-white/5 hover:border-purple-500/40 hover:bg-surface-raised transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-surface-raised border border-white/10 text-purple-400 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] flex items-center justify-center transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-purple-400 transition-colors" />
                  </div>

                  <div>
                    <h3 className="text-lg font-display font-bold text-white group-hover:text-purple-300 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs font-mono text-purple-400 font-semibold mt-0.5">
                      {item.handle}
                    </p>
                  </div>

                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                    <span>Verified Config</span>
                  </span>
                  <span className="text-purple-400 group-hover:underline">Connect</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
