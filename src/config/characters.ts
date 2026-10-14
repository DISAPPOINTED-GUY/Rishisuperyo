/**
 * Centralized Character Configuration
 *
 * All character assets can be swapped here or by replacing the corresponding PNG file in /public/characters/.
 * All assets require transparent backgrounds (PNG with alpha channel).
 */

export interface CharacterConfig {
  arcId: string;
  name: string;
  imageSrc: string;
  fallbackColor: string;
  glowColor: string;
  auraFilter: string;
  themeStyle: 'cyber' | 'stealth' | 'combat' | 'royal' | 'mystic' | 'academic' | 'classified';
  label: string;
  era: string;
}

export const CHARACTER_REGISTRY: Record<string, CharacterConfig> = {
  'arc-01-origin': {
    arcId: 'arc-01-origin',
    name: 'The 2019 Origin',
    imageSrc: '/characters/origin.png',
    fallbackColor: '#FF007F',
    glowColor: 'rgba(255, 0, 127, 0.5)',
    auraFilter: 'drop-shadow(0 0 25px rgba(255, 0, 127, 0.4))',
    themeStyle: 'cyber',
    label: 'Football & Creator Dream',
    era: '2019'
  },
  'arc-02-struggle': {
    arcId: 'arc-02-struggle',
    name: 'The Solitary Drifter',
    imageSrc: '/characters/struggle.png',
    fallbackColor: '#8B5CF6',
    glowColor: 'rgba(139, 92, 246, 0.35)',
    auraFilter: 'drop-shadow(0 0 20px rgba(139, 92, 246, 0.3))',
    themeStyle: 'stealth',
    label: 'Constrained Warrior',
    era: 'Jan – Jul 2020'
  },
  'arc-03-rise': {
    arcId: 'arc-03-rise',
    name: 'The Network Operative',
    imageSrc: '/characters/rise.png',
    fallbackColor: '#9D4EDD',
    glowColor: 'rgba(157, 78, 221, 0.55)',
    auraFilter: 'drop-shadow(0 0 30px rgba(157, 78, 221, 0.45))',
    themeStyle: 'cyber',
    label: 'Userbot Vanguard',
    era: 'Aug – Dec 2020'
  },
  'arc-04-prime': {
    arcId: 'arc-04-prime',
    name: 'The Crowned Monarch',
    imageSrc: '/characters/prime.png',
    fallbackColor: '#00F0FF',
    glowColor: 'rgba(0, 240, 255, 0.75)',
    auraFilter: 'drop-shadow(0 0 40px rgba(0, 240, 255, 0.65))',
    themeStyle: 'royal',
    label: 'Apex Cyber Sovereign',
    era: 'Jan – Aug 2021'
  },
  'arc-05-alone-fighter': {
    arcId: 'arc-05-alone-fighter',
    name: 'The Alone Fighter',
    imageSrc: '/characters/alone-fighter.png',
    fallbackColor: '#00E5BC',
    glowColor: 'rgba(0, 229, 188, 0.45)',
    auraFilter: 'drop-shadow(0 0 35px rgba(0, 229, 188, 0.45))',
    themeStyle: 'combat',
    label: 'Battle-Damaged Prime',
    era: 'Late 2021'
  },
  'arc-06-exile': {
    arcId: 'arc-06-exile',
    name: 'The 2022 Downfall',
    imageSrc: '/characters/exile.png',
    fallbackColor: '#64748B',
    glowColor: 'rgba(100, 116, 139, 0.3)',
    auraFilter: 'drop-shadow(0 0 15px rgba(100, 116, 139, 0.25))',
    themeStyle: 'stealth',
    label: 'The Broken Ball & Downfall',
    era: '2022'
  },
  'arc-07-lone-warrior': {
    arcId: 'arc-07-lone-warrior',
    name: 'The Crimson Gladiator',
    imageSrc: '/characters/lone-warrior.png',
    fallbackColor: '#FF2A54',
    glowColor: 'rgba(255, 42, 84, 0.65)',
    auraFilter: 'drop-shadow(0 0 35px rgba(255, 42, 84, 0.55))',
    themeStyle: 'combat',
    label: 'Arena Striker',
    era: 'Jul 2022 – Jun 2023'
  },
  'arc-08-return-to-self': {
    arcId: 'arc-08-return-to-self',
    name: 'The Tempered Sentinel',
    imageSrc: '/characters/return-to-self.png',
    fallbackColor: '#00E5BC',
    glowColor: 'rgba(0, 229, 188, 0.5)',
    auraFilter: 'drop-shadow(0 0 25px rgba(0, 229, 188, 0.4))',
    themeStyle: 'cyber',
    label: 'Composed Blade',
    era: 'Jul 2023 Onward'
  },
  'arc-09-market-king': {
    arcId: 'arc-09-market-king',
    name: 'The Grand Broker',
    imageSrc: '/characters/market-king.png',
    fallbackColor: '#FFB703',
    glowColor: 'rgba(255, 183, 3, 0.6)',
    auraFilter: 'drop-shadow(0 0 35px rgba(255, 183, 3, 0.5))',
    themeStyle: 'royal',
    label: 'Market Dominator',
    era: 'Jun 2023 – 2024'
  },
  'arc-10-second-rise': {
    arcId: 'arc-10-second-rise',
    name: 'The Dual-Threaded Titan',
    imageSrc: '/characters/second-rise.png',
    fallbackColor: '#A855F7',
    glowColor: 'rgba(168, 85, 247, 0.55)',
    auraFilter: 'drop-shadow(0 0 30px rgba(168, 85, 247, 0.45))',
    themeStyle: 'cyber',
    label: 'Viral Strategist',
    era: '2024'
  },
  'arc-11-burnout': {
    arcId: 'arc-11-burnout',
    name: 'The Slumbering Core',
    imageSrc: '/characters/burnout.png',
    fallbackColor: '#71717A',
    glowColor: 'rgba(113, 113, 122, 0.25)',
    auraFilter: 'drop-shadow(0 0 15px rgba(113, 113, 122, 0.2))',
    themeStyle: 'stealth',
    label: 'Low Power Standby',
    era: 'Late 2024 – Aug 2025'
  },
  'arc-12-reckoning': {
    arcId: 'arc-12-reckoning',
    name: 'The Silent Inquisitor',
    imageSrc: '/characters/reckoning.png',
    fallbackColor: '#F43F5E',
    glowColor: 'rgba(244, 63, 94, 0.5)',
    auraFilter: 'drop-shadow(0 0 30px rgba(244, 63, 94, 0.4))',
    themeStyle: 'stealth',
    label: 'Truth Seeker',
    era: 'Aug 2025'
  },
  'arc-13-rewakening': {
    arcId: 'arc-13-rewakening',
    name: 'The Alliance Champion & Scholar',
    imageSrc: '/characters/rewakening.png',
    fallbackColor: '#38BDF8',
    glowColor: 'rgba(56, 189, 248, 0.6)',
    auraFilter: 'drop-shadow(0 0 35px rgba(56, 189, 248, 0.5))',
    themeStyle: 'mystic',
    label: 'Alliance Strategist & Systems Decompiler',
    era: 'Early 2026'
  },
  'arc-14-architect': {
    arcId: 'arc-14-architect',
    name: 'The Armada Architect',
    imageSrc: '/characters/architect.png',
    fallbackColor: '#00F0FF',
    glowColor: 'rgba(0, 240, 255, 0.75)',
    auraFilter: 'drop-shadow(0 0 45px rgba(0, 240, 255, 0.65))',
    themeStyle: 'cyber',
    label: 'Armada Web OS Founder',
    era: '2026'
  },
  'arc-15-confidential': {
    arcId: 'arc-15-confidential',
    name: 'CLASSIFIED HORIZON',
    imageSrc: '/characters/confidential.png',
    fallbackColor: '#EF4444',
    glowColor: 'rgba(239, 68, 68, 0.6)',
    auraFilter: 'drop-shadow(0 0 40px rgba(239, 68, 68, 0.55))',
    themeStyle: 'classified',
    label: 'RESTRICTED LEVEL 5',
    era: '2026–2027???'
  },
  // Backward compatibility alias keys
  'arc-14-examiner': {
    arcId: 'arc-13-rewakening',
    name: 'The Alliance Champion & Scholar',
    imageSrc: '/characters/rewakening.png',
    fallbackColor: '#38BDF8',
    glowColor: 'rgba(56, 189, 248, 0.6)',
    auraFilter: 'drop-shadow(0 0 35px rgba(56, 189, 248, 0.5))',
    themeStyle: 'mystic',
    label: 'Alliance Strategist & Systems Decompiler',
    era: 'Early 2026'
  },
  'arc-15-architect': {
    arcId: 'arc-14-architect',
    name: 'The Armada Architect',
    imageSrc: '/characters/architect.png',
    fallbackColor: '#00F0FF',
    glowColor: 'rgba(0, 240, 255, 0.75)',
    auraFilter: 'drop-shadow(0 0 45px rgba(0, 240, 255, 0.65))',
    themeStyle: 'cyber',
    label: 'Armada Web OS Founder',
    era: '2026'
  },
  'arc-16-confidential': {
    arcId: 'arc-15-confidential',
    name: 'CLASSIFIED HORIZON',
    imageSrc: '/characters/confidential.png',
    fallbackColor: '#EF4444',
    glowColor: 'rgba(239, 68, 68, 0.6)',
    auraFilter: 'drop-shadow(0 0 40px rgba(239, 68, 68, 0.55))',
    themeStyle: 'classified',
    label: 'RESTRICTED LEVEL 5',
    era: '2026–2027???'
  }
};
