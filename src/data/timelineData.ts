import { TimelineArc, ProjectItem, SkillCategory, FoundationItem } from '@/types/timeline';

export const TIMELINE_ARCS: TimelineArc[] = [
  {
    id: 'arc-01-origin',
    arcNumber: 1,
    romanNumeral: 'ARC 01',
    title: 'THE ORIGIN',
    subtitle: 'Genesis of an Identity & Unshaped Ambition',
    period: '2019',
    startDate: '2019-01-01',
    endDate: '2019-12-31',
    theme: 'Exploration & Genesis',
    accentColor: '#FF007F',
    glowColor: 'rgba(255, 0, 127, 0.45)',
    bgGradient: 'radial-gradient(ellipse at 70% 30%, rgba(255, 0, 127, 0.15) 0%, rgba(5, 7, 11, 0.95) 70%)',
    characterImage: '/characters/origin.png',
    characterPoseDescription: 'A young digital creator silhouetted against early pixel grids and magenta CRT light.',
    quote: 'Before knowing where the path led, the identity was born.',
    description: [
      'In 2019, the moniker "Rishisuperyo" was forged as a personal creative identity.',
      'The journey started with a humble passion: uploading YouTube videos with relentless consistency, driven by the childhood dream of becoming a creator and a footballer.',
      'This was the Free Fire era—navigating early virtual worlds, testing creative output, and planting the seeds of digital storytelling.'
    ],
    keyHighlights: [
      'Forged the moniker "Rishisuperyo"',
      'Consistent YouTube video uploads & content experiments',
      'Dual aspirations: Competitive football and digital content creation',
      'Immersion in the Free Fire gaming subculture'
    ],
    events: [
      {
        year: '2019',
        headline: 'Identity Genesis',
        detail: 'Rishisuperyo established as a creative signature across early digital communities.',
        tag: 'Identity'
      },
      {
        year: '2019',
        headline: 'First Video Uploads',
        detail: 'Began producing and publishing content regularly, studying audience engagement.',
        tag: 'YouTube'
      },
      {
        year: '2019',
        headline: 'Childhood Dreams',
        detail: 'Balancing rigorous football practice on dusty pitches with late-night editing.',
        tag: 'Aspirations'
      }
    ],
    stats: [
      { label: 'Year', value: '2019' },
      { label: 'Focus', value: 'Content & Gaming' },
      { label: 'Status', value: 'Identity Born' }
    ]
  },
  {
    id: 'arc-02-struggle',
    arcNumber: 2,
    romanNumeral: 'ARC 02',
    title: 'THE STRUGGLE',
    subtitle: 'Ambition Without Support & Resource Scarcity',
    period: 'Jan – Jul 2020',
    startDate: '2020-01-01',
    endDate: '2020-07-31',
    theme: 'Hardship & Grit',
    accentColor: '#8B5CF6',
    glowColor: 'rgba(139, 92, 246, 0.35)',
    bgGradient: 'radial-gradient(ellipse at 70% 30%, rgba(139, 92, 246, 0.12) 0%, rgba(5, 7, 11, 0.98) 75%)',
    characterImage: '/characters/struggle.png',
    characterPoseDescription: 'A solitary figure cloaked in dark violet shadows, enduring constraints with quiet resolve.',
    quote: 'When you are laughed at with only 2 GB of RAM, endurance becomes your only compiler.',
    description: [
      'The first half of 2020 tested every ounce of resolve. Being young and ambitious with zero institutional support meant facing mockery and skepticism.',
      'Hardware constraints were brutally real: building, editing, and learning on a single phone with just 2 GB RAM that would lag under minimal load.',
      'Despite the mockery and personal adversity, the drive to create and understand technology refused to extinguish.'
    ],
    keyHighlights: [
      'Operating with extreme device constraints (2 GB RAM hardware)',
      'Persevering through personal abuse and community ridicule',
      'Relentless self-taught experimentation despite lacking mentorship',
      'Refusal to surrender creative ambition during widespread lockdown'
    ],
    events: [
      {
        month: 'Jan – Mar 2020',
        headline: 'The Hardware Ceiling',
        detail: 'Pushing a 2 GB RAM device to its absolute breaking point to edit scripts and render basic media.',
        tag: 'Constraint'
      },
      {
        month: 'Apr – Jul 2020',
        headline: 'Silent Defiance',
        detail: 'Enduring social ridicule while quietly researching scripting, user environments, and digital protocols.',
        tag: 'Resilience'
      }
    ],
    stats: [
      { label: 'Hardware', value: '2 GB RAM' },
      { label: 'Backing', value: 'Zero' },
      { label: 'Trajectory', value: 'Unbroken' }
    ]
  },
  {
    id: 'arc-03-rise',
    arcNumber: 3,
    romanNumeral: 'ARC 03',
    title: 'THE RISE',
    subtitle: 'Entering the Telegram Underground & Userbot Recognition',
    period: 'Aug – Dec 2020',
    startDate: '2020-08-01',
    endDate: '2020-12-31',
    theme: 'Ascent & Recognition',
    accentColor: '#9D4EDD',
    glowColor: 'rgba(157, 78, 221, 0.5)',
    bgGradient: 'radial-gradient(ellipse at 70% 30%, rgba(157, 78, 221, 0.2) 0%, rgba(5, 7, 11, 0.95) 70%)',
    characterImage: '/characters/rise.png',
    characterPoseDescription: 'A rising operative surrounded by glowing Telegram nodes and energetic purple telemetry.',
    quote: 'From asking for help to becoming the one hundreds relied on for answers.',
    description: [
      'In August 2020, everything shifted. Entering the Telegram userbot subculture opened the gateway to real systems architecture and automation.',
      'Demonstrating deep curiosity, Rishisuperyo spent hours debugging userbot deployments, answering queries, and assisting users who were stuck.',
      'By late 2020, through sheer consistency, he earned recognition across circles as the premier Black Lightning key helper.'
    ],
    keyHighlights: [
      'Breakthrough entry into Telegram userbot and automation networks',
      'Mastery of userbot configurations, Python deployment patterns, and API tokens',
      'Became the recognized #1 Black Lightning key helper in the community',
      'First taste of large-scale peer network coordination'
    ],
    events: [
      {
        month: 'August 2020',
        headline: 'Entering Telegram',
        detail: 'Discovered the developer and userbot communities; began diagnosing deployment issues for peers.',
        tag: 'Discovery'
      },
      {
        month: 'Late 2020',
        headline: 'Black Lightning Helper Recognition',
        detail: 'Achieved top standing as the go-to technical troubleshooter for Black Lightning userbots.',
        tag: 'Mastery'
      }
    ],
    stats: [
      { label: 'Role', value: 'Top Key Helper' },
      { label: 'Platform', value: 'Telegram Ecosystem' },
      { label: 'Momentum', value: 'Accelerating' }
    ]
  },
  {
    id: 'arc-04-prime',
    arcNumber: 4,
    romanNumeral: 'ARC 04',
    title: 'THE PRIME',
    subtitle: 'Cyberlegends, 30+ Key Bots & Digital Hegemony',
    period: 'Jan – Aug 2021',
    startDate: '2021-01-01',
    endDate: '2021-08-31',
    theme: 'Power, Scale & Empire',
    accentColor: '#00F0FF',
    glowColor: 'rgba(0, 240, 255, 0.6)',
    bgGradient: 'radial-gradient(ellipse at 70% 30%, rgba(0, 240, 255, 0.25) 0%, rgba(5, 7, 11, 0.95) 70%)',
    characterImage: '/characters/prime.png',
    characterPoseDescription: 'Armored monarch in black obsidian plating, radiant cyan chest core, crowned helm, commanding vast data streams.',
    quote: '???K subscribers. 400 communities. An empire forged from lines of Python.',
    description: [
      'The apex era of early influence. Rishisuperyo engineered an expansive ecosystem of Telegram bots, automation tools, and media channels.',
      'He founded Cyberlegends, whose network grew into a ???K-subscriber juggernaut. He personally administered over 400 active group communities.',
      'Deeply immersed in MTProto and Telegram protocols, he engineered over 30 bespoke key bots, hunted vulnerabilities, fought scammers, and actively repelled session hijackers.'
    ],
    keyHighlights: [
      'Founded Cyberlegends: amassed ???K+ total community subscribers',
      'Administered and secured over 400 communities simultaneously',
      'Architected 30+ custom key bots and automation frameworks',
      'Hunted platform exploits and defended networks against session stealers',
      'Built international developer and security alliances'
    ],
    events: [
      {
        month: 'Jan – Mar 2021',
        headline: 'Genesis of Cyberlegends',
        detail: 'Launched Cyberlegends network, exploding across global Telegram channels to ???K+ reach.',
        tag: 'Growth'
      },
      {
        month: 'May 2021',
        headline: 'Bot Foundry & Vulnerability Defense',
        detail: 'Deployed 30+ automation bots; dissected Telegram MTProto bugs and countered malicious scripts.',
        tag: 'Engineering'
      },
      {
        month: 'July 2021',
        headline: 'Peak Administration',
        detail: 'Overseeing 400+ connected communities with automated moderation and custom security bots.',
        tag: 'Scale'
      }
    ],
    stats: [
      { label: 'Subscribers', value: '???K+' },
      { label: 'Communities', value: '400+' },
      { label: 'Bots Built', value: '30+' }
    ]
  },
  {
    id: 'arc-05-alone-fighter',
    arcNumber: 5,
    romanNumeral: 'ARC 05',
    title: 'THE ALONE FIGHTER',
    subtitle: 'The Collapse of Trust, Infiltration & Self-Destruction',
    period: 'Late 2021',
    startDate: '2021-09-01',
    endDate: '2021-12-31',
    theme: 'Betrayal & Fall',
    accentColor: '#00E5BC',
    glowColor: 'rgba(0, 229, 188, 0.35)',
    bgGradient: 'radial-gradient(ellipse at 70% 30%, rgba(0, 229, 188, 0.12) 0%, rgba(5, 7, 11, 0.98) 75%)',
    characterImage: '/characters/alone-fighter.png',
    characterPoseDescription: 'Fallen Prime with cracked armor, flickering cyan chest core, shattered crown, standing alone amidst dissolving matrices.',
    quote: 'When allies turn and the network is compromised, you destroy your own throne before letting thieves claim it.',
    description: [
      'The empire faced coordinated infiltration. Hostile actors targeted accounts using session hijacking techniques; personal photographs were leaked, and trust disintegrated.',
      'Misunderstandings strained friendships to the breaking point. Manipulated acquaintances unknowingly aided the attackers, while Rishisuperyo was falsely accused of the very breaches he was fighting.',
      'Under intense siege, he resisted, took down the responsible hostile actors, but the collateral damage was devastating. Rather than letting Cyberlegends fall into hostile hands, he made the agonizing choice to destroy his own digital empire.'
    ],
    keyHighlights: [
      'Account hijack attempts and unauthorized session infiltrations',
      'Severe personal character attacks and false accusations across circles',
      'Counter-attacked and dismantled the hostile actors’ infrastructure',
      'Deliberately dismantled Cyberlegends rather than surrender control',
      'Complete evacuation from his primary digital stronghold'
    ],
    events: [
      {
        month: 'Late 2021',
        headline: 'The Breach & Smear Campaign',
        detail: 'Targeted with session hijack exploits, personal doxxing attempts, and smear campaigns.',
        tag: 'Conflict'
      },
      {
        month: 'Late 2021',
        headline: 'The Final Strike & Scorched Earth',
        detail: 'Neutralized the attackers, followed by the voluntary deletion and dissolution of Cyberlegends.',
        tag: 'Dissolution'
      }
    ],
    stats: [
      { label: 'Empire Status', value: 'Self-Terminated' },
      { label: 'Allies', value: 'Dispersed' },
      { label: 'Position', value: 'Alone' }
    ]
  },
  {
    id: 'arc-06-exile',
    arcNumber: 6,
    romanNumeral: 'ARC 06',
    title: 'THE EXILE',
    subtitle: 'Severing the Grid, The Lost Ball & The Unspoken Past',
    period: '2022 (Pre-July)',
    startDate: '2022-01-01',
    endDate: '2022-06-30',
    theme: 'Withdrawal & Void',
    accentColor: '#64748B',
    glowColor: 'rgba(100, 116, 139, 0.3)',
    bgGradient: 'radial-gradient(ellipse at 70% 30%, rgba(100, 116, 139, 0.12) 0%, rgba(5, 7, 11, 0.98) 75%)',
    characterImage: '/characters/exile.png',
    characterPoseDescription: 'A traveler turning his back on ruined neon spires, hands in pockets, walking into misty greyscale terrain.',
    quote: 'I stepped away from the screens back to the football field, only to find the field was empty too.',
    description: [
      'Turning his back on the digital realm, Rishisuperyo sought solace in his childhood anchor: football. But time had passed.',
      'Old teammates had moved on or turned distant, skills felt rusty, and he did not even have a ball of his own. The childhood dream seemed out of reach.',
      'Simultaneously, a deeply personal search that began in 2016 reached a quiet conclusion: he found the person he had looked for, only to discover a school rival had entered her life first. Choosing peace over confrontation, he buried his feelings and withdrew.',
      'Distant from faith and feeling dead to the old world, this was the quietest winter.'
    ],
    keyHighlights: [
      'Total departure from online ecosystems and social platforms',
      'Attempted revival of childhood competitive football dream',
      'Encountered fractured old peer circles and lack of equipment',
      'The quiet closure of a search ongoing since 2016 to preserve peace',
      'Period of spiritual distance and existential re-evaluation'
    ],
    events: [
      {
        month: 'Early 2022',
        headline: 'Departure from the Screen',
        detail: 'Deleted remaining active communication handles to reset mental baseline in physical reality.',
        tag: 'Solitude'
      },
      {
        month: 'Spring 2022',
        headline: 'The Quiet Resolution',
        detail: 'Encountered the answer to a search originating in 2016; chose respectful silence and withdrawal.',
        tag: 'Closure'
      }
    ],
    stats: [
      { label: 'State', value: 'Complete Offline' },
      { label: 'Field', value: 'Abandoned' },
      { label: 'Outlook', value: 'Re-evaluating' }
    ]
  },
  {
    id: 'arc-07-lone-warrior',
    arcNumber: 7,
    romanNumeral: 'ARC 07',
    title: 'THE LONE WARRIOR',
    subtitle: 'Voice Arenas, Street-Fighting Clans & Hardened Edges',
    period: 'Jul 2022 – Jun 2023',
    startDate: '2022-07-01',
    endDate: '2023-06-30',
    theme: 'Aggression & Hardening',
    accentColor: '#FF2A54',
    glowColor: 'rgba(255, 42, 84, 0.55)',
    bgGradient: 'radial-gradient(ellipse at 70% 30%, rgba(255, 42, 84, 0.22) 0%, rgba(5, 7, 11, 0.95) 70%)',
    characterImage: '/characters/lone-warrior.png',
    characterPoseDescription: 'Ferocious combatant clad in obsidian and jagged crimson armor, surrounded by blood-red battle telemetry and sharp sparks.',
    quote: 'If the world demands violence, you become the sharper blade.',
    description: [
      'In July 2022, Rishisuperyo returned to Telegram—not as a gentle helper, but as an uncompromising gladiator.',
      'Entering competitive voice-chat fighting arenas and toxic faction wars, he fought clan battles and established dominance in raw verbal and psychological skirmishes.',
      'He aligned with hardened groups he once avoided, out-maneuvering opponents through quick wits and sheer intensity, while recognizing in hindsight that his demeanor had become dangerously sharp.'
    ],
    keyHighlights: [
      'Re-entry into Telegram through competitive voice-chat arenas',
      'Engagement in high-stakes online street-fighting subcultures',
      'Dominance achieved through rapid argumentation and psychological resilience',
      'Self-admitted period of heightened aggression and harsh communication'
    ],
    events: [
      {
        month: 'July 2022',
        headline: 'The Arena Re-Entry',
        detail: 'Stepped into high-conflict voice channels, quickly building an aggressive combat record.',
        tag: 'Re-Entry'
      },
      {
        month: 'Late 2022 – Mid 2023',
        headline: 'Clan Wars',
        detail: 'Commanded respect across hostile factions, establishing an unshakeable offensive reputation.',
        tag: 'Conflict'
      }
    ],
    stats: [
      { label: 'Style', value: 'Offensive' },
      { label: 'Stance', value: 'Hardened' },
      { label: 'Arena', value: 'Voice Warzones' }
    ]
  },
  {
    id: 'arc-08-return-to-self',
    arcNumber: 8,
    romanNumeral: 'ARC 08',
    title: 'THE RETURN TO SELF',
    subtitle: 'Ceasing the Fire & Tempering the Blade',
    period: 'Jul 2023 Onward',
    startDate: '2023-07-01',
    endDate: '2023-12-31',
    theme: 'Introspection & Calibration',
    accentColor: '#00E5BC',
    glowColor: 'rgba(0, 229, 188, 0.45)',
    bgGradient: 'radial-gradient(ellipse at 70% 30%, rgba(0, 229, 188, 0.15) 0%, rgba(5, 7, 11, 0.95) 70%)',
    characterImage: '/characters/return-to-self.png',
    characterPoseDescription: 'A serene warrior standing composed, crimson fires cooling into subtle cyan accents, lowering his guard with wisdom.',
    quote: 'Power without restraint is merely self-destruction. I chose to step back from the venom.',
    description: [
      'In July 2023, clarity pierced the fog of combat. Rishisuperyo observed the trajectory of endless arena warfare and realized how toxic the environment had made him.',
      'He made a conscious, deliberate choice: cease unnecessary conflict, step back from factional grudge matches, and regain emotional equilibrium.',
      'The aggression subsided, giving way to calculated discipline and paving the road for commercial engineering and systems design.'
    ],
    keyHighlights: [
      'Self-awareness breakthrough: acknowledging the toll of toxic behaviors',
      'Decisive cessation of voice-chat hostilities and faction feuds',
      'Deliberate transition from destructive fighting to constructive building',
      'Restoration of internal calm and strategic patience'
    ],
    events: [
      {
        month: 'July 2023',
        headline: 'The Conscious Brake',
        detail: 'Recognized corrosive habits and formally withdrew from toxic arena battles.',
        tag: 'Clarity'
      },
      {
        month: 'Autumn 2023',
        headline: 'Recalibrating Focus',
        detail: 'Redirected intense analytical energy towards market mechanisms, algorithms, and software.',
        tag: 'Pivot'
      }
    ],
    stats: [
      { label: 'Shift', value: 'Aggression to Restraint' },
      { label: 'Mental State', value: 'Centered' },
      { label: 'Direction', value: 'Systems Building' }
    ]
  },
  {
    id: 'arc-09-market-king',
    arcNumber: 9,
    romanNumeral: 'ARC 09',
    title: 'THE MARKET KING',
    subtitle: 'Old Groups Finder, 10,000 Traders & Crypto Commerce',
    period: 'Jun 2023 – 2024',
    startDate: '2023-06-01',
    endDate: '2024-06-30',
    theme: 'Commerce & Systems Superiority',
    accentColor: '#FFB703',
    glowColor: 'rgba(255, 183, 3, 0.55)',
    bgGradient: 'radial-gradient(ellipse at 70% 30%, rgba(255, 183, 3, 0.18) 0%, rgba(5, 7, 11, 0.95) 70%)',
    characterImage: '/characters/market-king.png',
    characterPoseDescription: 'An astute digital oligarch draped in royal violet and gold circuit-cloth, surrounded by glowing marketplace charts and trade matrices.',
    quote: 'While others fought over words, I built the tool that powered five thousand traders.',
    description: [
      'Entering the niche Telegram old-groups digital marketplace in June 2023, Rishisuperyo recognized that the market ran on manual, inefficient methods.',
      'Rather than relying on luck, he engineered proprietary software: Old Groups Finder. The utility rapidly became a market staple, adopted by over 5,000 participants across a 10,000+ member marketplace.',
      'Operating daily peer-to-peer crypto settlements, negotiating high-stakes transactions while underage, and executing complex arbitrage, he honed ruthless negotiation skills and commercial acumen.'
    ],
    keyHighlights: [
      'Engineered "Old Groups Finder", adopted by 5,000+ active traders',
      'Competed at the summit of a 10,000+ participant marketplace ecosystem',
      'Orchestrated daily peer-to-peer cryptocurrency settlements',
      'Forged domestic and cross-border commercial trade pipelines',
      'Mastered strategic negotiation, market psychology, and deal closure'
    ],
    events: [
      {
        month: 'June 2023',
        headline: 'Marketplace Entry',
        detail: 'Identified arbitrage opportunities in aged group assets; established commercial trading routes.',
        tag: 'Commerce'
      },
      {
        month: 'Late 2023',
        headline: 'Old Groups Finder Launch',
        detail: 'Released custom search engine bot, scaling to 5,000+ active utility users.',
        tag: 'Tooling'
      },
      {
        month: 'Early 2024',
        headline: 'Peak P2P Flow',
        detail: 'Handled high-frequency daily settlements across international peer networks.',
        tag: 'Finance'
      }
    ],
    stats: [
      { label: 'Tool Users', value: '5,000+' },
      { label: 'Market Scope', value: '10,000+ Traders' },
      { label: 'Settlement', value: 'Daily Crypto P2P' }
    ]
  },
  {
    id: 'arc-10-second-rise',
    arcNumber: 10,
    romanNumeral: 'ARC 10',
    title: 'THE SECOND RISE',
    subtitle: 'Skibidi Toilet Viral Reach, 10K Network & The Dual Blow',
    period: '2024',
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    theme: 'Dual Trajectory & Unforeseen Shocks',
    accentColor: '#A855F7',
    glowColor: 'rgba(168, 85, 247, 0.5)',
    bgGradient: 'radial-gradient(ellipse at 70% 30%, rgba(168, 85, 247, 0.2) 0%, rgba(5, 7, 11, 0.95) 70%)',
    characterImage: '/characters/second-rise.png',
    characterPoseDescription: 'A multi-threaded strategist with holographic interfaces flickering between YouTube metrics and trade consoles, experiencing subtle glitch distortion.',
    quote: 'Reaching 8,000 subscribers and running a 10K network—until the platform rules hit.',
    description: [
      '2024 operated on twin engines: commercial market execution on one front, and explosive YouTube content on the other.',
      'His YouTube channel captured lightning in a bottle through Skibidi Toilet animations and memes, skyrocketing to approximately 8,000 subscribers. Meanwhile, his Telegram trade network surpassed 10,000 members.',
      'Then two catastrophic platform blows struck: In January 2024, Telegram wiped out a significant portion of his network during mass policy enforcements. Later in September 2024, significant accumulated earnings were frozen due to age-verification thresholds.',
      'Despite losing both network distribution and hard-earned capital, he stayed standing.'
    ],
    keyHighlights: [
      'YouTube channel surged to ~8,000 subscribers via viral Skibidi Toilet content',
      'Telegram business network reached 10,000+ active participants',
      'January 2024: Sudden platform purge obliterated core channel assets',
      'September 2024: Major accumulated revenues frozen due to underage verification rules',
      'Endured massive financial and infrastructural setbacks without quitting'
    ],
    events: [
      {
        month: 'January 2024',
        headline: 'The Platform Wipeout',
        detail: 'Telegram infrastructure sweep wiped out key distribution channels in hours.',
        tag: 'Disruption'
      },
      {
        month: 'Mid 2024',
        headline: 'Viral Creator Scale',
        detail: 'YouTube animation channel reached 8,000 subscribers with rapid view velocity.',
        tag: 'YouTube'
      },
      {
        month: 'September 2024',
        headline: 'Capital Freeze',
        detail: 'Institutional age compliance rules froze significant earnings from digital operations.',
        tag: 'Financial'
      }
    ],
    stats: [
      { label: 'YouTube Reach', value: '~8,000 Subs' },
      { label: 'Network Size', value: '10,000+' },
      { label: 'Major Blows', value: '2 Overcome' }
    ]
  },
  {
    id: 'arc-11-burnout',
    arcNumber: 11,
    romanNumeral: 'ARC 11',
    title: 'THE BURNOUT',
    subtitle: 'Market Decay, Creator Fatigue & The Quiet Retreat',
    period: 'Late 2024 – Aug 2025',
    startDate: '2024-10-01',
    endDate: '2025-08-15',
    theme: 'Exhaustion & Deep Rest',
    accentColor: '#71717A',
    glowColor: 'rgba(113, 113, 122, 0.35)',
    bgGradient: 'radial-gradient(ellipse at 70% 30%, rgba(113, 113, 122, 0.1) 0%, rgba(5, 7, 11, 0.98) 75%)',
    characterImage: '/characters/burnout.png',
    characterPoseDescription: 'A weary digital architect sitting on the steps of a deactivated server monolith, low-power indicator pulsing dimly.',
    quote: 'When every system you built either gets wiped or freezes your funds, the mind demands an unconditional pause.',
    description: [
      'By late 2024, the entire macro-environment turned sluggish. The old-groups marketplace dwindled into diminishing returns, and the viral Skibidi Toilet meta lost steam.',
      'The relentless stress of managing thousands of transactions, defending against hacks, platform bans, and lost capital culminated in profound burnout.',
      'Rishisuperyo took the healthiest decision available: pull the plug. He disconnected from the relentless 24/7 digital grind to focus on physical reality, rest, and mental restoration until August 2025.'
    ],
    keyHighlights: [
      'Decay of the old-groups marketplace and declining creator incentives',
      'Onset of severe burnout after years of uninterrupted operational strain',
      'Intentional complete hiatus from high-stress online commerce',
      'Reconnection with physical health, family, and grounding routines'
    ],
    events: [
      {
        month: 'Late 2024',
        headline: 'Marketplace Contraction',
        detail: 'Observed the macro saturation of old groups and made the decision to wind down operations.',
        tag: 'Transition'
      },
      {
        month: 'Early – Mid 2025',
        headline: 'The Grand Hiatus',
        detail: 'Stepped away from screens to heal cognitive fatigue and realign priorities.',
        tag: 'Recovery'
      }
    ],
    stats: [
      { label: 'Activity', value: 'Suspended' },
      { label: 'Digital Grind', value: 'Zero' },
      { label: 'Purpose', value: 'Cognitive Reset' }
    ]
  },
  {
    id: 'arc-12-reckoning',
    arcNumber: 12,
    romanNumeral: 'ARC 12',
    title: 'THE RECKONING',
    subtitle: 'The 2016 Thread, Uncovered Truths & The Defusal of Vengeance',
    period: 'Starting Aug 2025',
    startDate: '2025-08-16',
    endDate: '2025-12-31',
    theme: 'Investigation & Emotional Resolution',
    accentColor: '#F43F5E',
    glowColor: 'rgba(244, 63, 94, 0.45)',
    bgGradient: 'radial-gradient(ellipse at 70% 30%, rgba(244, 63, 94, 0.16) 0%, rgba(5, 7, 11, 0.96) 70%)',
    characterImage: '/characters/reckoning.png',
    characterPoseDescription: 'An analytical investigator piecing together holographic timeline fragments in a dimly lit vault, emotion transmuting into clarity.',
    quote: 'Finding the truth made me furious—until understanding the bigger picture dissolved the need for revenge.',
    description: [
      'In August 2025, an unresolved ghost from 2016 resurfaced. Rishisuperyo set out to investigate what had really happened with the girl he had once searched for.',
      'Piecing together archives, mutual contacts, and hidden timelines, he uncovered that she had been betrayed and cheated by the very rival who had entered her life.',
      'The initial revelation triggered a storm of fury and contemplation of retaliation. Yet, as the fragments settled and understanding deepened, he chose maturity over vengeance—transmuting raw anger into wisdom and permanently letting go of toxic impulses.'
    ],
    keyHighlights: [
      'Investigative deep dive into personal events dating back to 2016',
      'Discovery of hidden realities and betrayal suffered by someone from the past',
      'Internal battle between retaliatory impulse and emotional maturity',
      'Definitive defusal of lingering resentment and abandonment of toxic grudges'
    ],
    events: [
      {
        month: 'August 2025',
        headline: 'Revisiting the Archive',
        detail: 'Gathered contextual facts and verified timelines regarding events from 2016 onward.',
        tag: 'Investigation'
      },
      {
        month: 'Autumn 2025',
        headline: 'The Choice of Peace',
        detail: 'Recognized that revenge solves nothing; chose self-mastery and permanent emotional release.',
        tag: 'Maturity'
      }
    ],
    stats: [
      { label: 'Origin Date', value: '2016' },
      { label: 'Outcome', value: 'Truth Uncovered' },
      { label: 'Resolution', value: 'Peace Over Revenge' }
    ]
  },
  {
    id: 'arc-13-rewakening',
    arcNumber: 13,
    romanNumeral: 'ARC 13',
    title: 'THE REAWAKENING',
    subtitle: 'The Alliance, Cyberlegends Reborn & Academic Warfare ("Boards For Breakfast")',
    period: 'Early 2026 (Jan – Mar)',
    startDate: '2026-01-01',
    endDate: '2026-03-31',
    theme: 'Strategic Alliance & Academic Masterclass',
    accentColor: '#38BDF8',
    glowColor: 'rgba(56, 189, 248, 0.55)',
    bgGradient: 'radial-gradient(ellipse at 70% 30%, rgba(56, 189, 248, 0.2) 0%, rgba(5, 7, 11, 0.95) 70%)',
    characterImage: '/characters/rewakening.png',
    characterPoseDescription: 'A renewed champion bathed in serene azure and soft gold radiance, surrounded by reverse-engineered exam matrices, calm tactical focus, and restored armor.',
    quote: 'When the alliance is forged, the noise disappears. Academic boards and digital frontiers become just another operating system to decompile.',
    description: [
      'Early 2026 marked a profound tactical and creative revival. Rishisuperyo forged a powerful new alliance, shedding the remnants of past bitterness and grounding his identity.',
      'With a purified mindset, he reopened Cyberlegends—not to chase ephemeral clout, but to build a meaningful, positive community ecosystem, while resuming YouTube content creation with mature vision.',
      'Simultaneously, February 2026 brought the crucible of the ICSE board examinations. Rishisuperyo did not study passively; he led and dissected the battlefield. Applying the same reverse-engineering mindset he honed on Python APIs and Telegram algorithms, he analyzed question patterns, marking schemes, and answer structures with mathematical precision.',
      'Coined the iconic battle cry: "BOARDS FOR BREAKFAST"—approaching high-pressure academic examinations with calm, tactical mastery and leading his peers through the fire.'
    ],
    keyHighlights: [
      'Strategic alliance formation and renewed tactical focus',
      'Relaunch of the iconic Cyberlegends brand as a revitalized community',
      'Resumption of strategic YouTube content creation with renewed purpose',
      'Led peers through the rigorous ICSE board examination period',
      'Reverse-engineered ICSE question patterns and evaluation criteria with systems precision',
      'Embodied the motto: "BOARDS FOR BREAKFAST"'
    ],
    events: [
      {
        month: 'January 2026',
        headline: 'The Alliance',
        detail: 'Forged key alliances and strategic bonds, grounding personal discipline and forward focus.',
        tag: 'Alliance'
      },
      {
        month: 'January 2026',
        headline: 'Cyberlegends Reborn',
        detail: 'Reopened the gates of Cyberlegends, welcoming community members to a new era.',
        tag: 'Community'
      },
      {
        month: 'February 2026',
        headline: 'Decompiling the Syllabus ("Boards for Breakfast")',
        detail: 'Analyzed historical ICSE question distributions and mapped optimal answer formulations as a structured systems-engineering problem.',
        tag: 'Academic Masterclass'
      },
      {
        month: 'Feb – Mar 2026',
        headline: 'The Examination Arena',
        detail: 'Executed examination papers with disciplined analytical pacing and total calm.',
        tag: 'Execution'
      }
    ],
    stats: [
      { label: 'Foundation', value: 'The Alliance' },
      { label: 'Battle Cry', value: 'Boards for Breakfast' },
      { label: 'Brand', value: 'Cyberlegends Reborn' }
    ]
  },
  {
    id: 'arc-14-architect',
    arcNumber: 14,
    romanNumeral: 'ARC 14',
    title: 'THE ARCHITECT',
    subtitle: 'Armada Web OS, Armada.tech & Armada WebNova',
    period: '2026 (Present Era)',
    startDate: '2026-04-01',
    endDate: '2026-08-01',
    theme: 'Flagship Engineering & AI Systems',
    accentColor: '#00F0FF',
    glowColor: 'rgba(0, 240, 255, 0.65)',
    bgGradient: 'radial-gradient(ellipse at 70% 30%, rgba(0, 240, 255, 0.25) 0%, rgba(121, 40, 202, 0.15) 50%, rgba(5, 7, 11, 0.95) 75%)',
    characterImage: '/characters/architect.png',
    characterPoseDescription: 'Master digital architect hovering before monumental Web OS structures, orchestrating neural workflows, web engines, and cyan energy grids.',
    quote: 'Seven years of automation, bot networks, market economics, and design condensing into one unified operating system.',
    description: [
      'The culmination of every era. Rishisuperyo initiates his most ambitious engineering vision: Armada Web OS.',
      'Armada Web OS is not a basic drag-and-drop website builder. It is an AI-native digital enterprise engine: researching business verticals, modeling customer journeys, generating bespoke web experiences, and binding autonomous backend workflows.',
      'Armada.tech serves as the flagship platform housing technology and services, while Armada WebNova leads the commercial website-development arm.',
      'The multi-domain ecosystem links rishisuperyo.me (personal identity), armada.tech (platform & tech), and armadawebnova.tech (commercial development).'
    ],
    keyHighlights: [
      'Architecting Armada Web OS: AI-native web creation and business workflow operating system',
      'Established Armada.tech as the central technology and services hub',
      'Formulated Armada WebNova as the premier commercial web engineering offering',
      'Synthesizing 7 years of Telegram bots, automation, market strategy, and full-stack engineering',
      'Targeting enterprise-grade customer journey automation'
    ],
    events: [
      {
        month: '2026',
        headline: 'Armada Web OS Blueprint',
        detail: 'Architected the core AI agent workflows for automated market discovery and site generation.',
        tag: 'Architecture'
      },
      {
        month: '2026',
        headline: 'Armada.tech Platform Launch',
        detail: 'Structured Armada.tech as the central flagship entity for software and services.',
        tag: 'Platform'
      },
      {
        month: '2026',
        headline: 'Armada WebNova Commercial Rollout',
        detail: 'Launched commercial website design and development services powered by the Armada engine.',
        tag: 'Commerce'
      }
    ],
    stats: [
      { label: 'Core Initiative', value: 'Armada Web OS' },
      { label: 'Platform Hub', value: 'Armada.tech' },
      { label: 'Commercial Wing', value: 'Armada WebNova' }
    ]
  },
  {
    id: 'arc-15-confidential',
    arcNumber: 15,
    romanNumeral: 'ARC 15',
    title: 'PLAN...',
    subtitle: 'CONFIDENTIAL INFORMATION // FUTURE ARC UNDISCLOSED',
    period: 'Aug 2026 – 2027',
    startDate: '2026-08-01',
    endDate: '2027-12-31',
    theme: 'Classified Horizon',
    accentColor: '#EF4444',
    glowColor: 'rgba(239, 68, 68, 0.6)',
    bgGradient: 'radial-gradient(ellipse at 70% 30%, rgba(239, 68, 68, 0.15) 0%, rgba(2, 3, 5, 0.99) 75%)',
    characterImage: '/characters/confidential.png',
    characterPoseDescription: 'A redacted silhouette surrounded by biometric scanning lines, classified warning stamps, and quantum encryption shields.',
    quote: 'ACCESS RESTRICTED: CLASSIFIED OPERATIONAL TIMELINE.',
    description: [
      '2026–2027',
      'PLAN...',
      'CONFIDENTIAL INFORMATION',
      'FUTURE ARC UNDISCLOSED'
    ],
    keyHighlights: [
      'SECURITY CLEARANCE REQUIRED',
      'PROTOCOL ACTIVE: ENCRYPTED STORAGE',
      'FUTURE HORIZON SEALED',
      'STATUS: 2026–2027???'
    ],
    events: [
      {
        year: '2026–2027',
        headline: 'INITIALIZING PLAN...',
        detail: 'CONFIDENTIAL INFORMATION DETECTED. ACCESS RESTRICTED.',
        tag: 'CLASSIFIED'
      }
    ],
    stats: [
      { label: 'Timeline', value: '2026–2027???' },
      { label: 'Classification', value: 'TOP SECRET' },
      { label: 'Status', value: 'SEALED' }
    ],
    isConfidential: true
  }
];

export const FOUNDATIONS: FoundationItem[] = [
  {
    id: 'systems-thinking',
    title: 'Systems Thinking',
    theme: 'Architectural Paradigm',
    statement: 'Every problem is a node in a larger graph. Solve the systemic constraint, not the symptom.',
    narrative: 'Born from managing 400+ Telegram communities and 30+ bots simultaneously—understanding how feedback loops, permissions, and network cascades operate under real load.',
    icon: 'Network'
  },
  {
    id: 'python-automation',
    title: 'Python & Automation',
    theme: 'Execution Engine',
    statement: 'If a workflow is repeated twice, it belongs in an autonomous script.',
    narrative: 'From debugging userbot forks on a 2 GB phone to engineering asynchronous MTProto listeners and Old Groups Finder scrapers handling thousands of users.',
    icon: 'Terminal'
  },
  {
    id: 'iterative-building',
    title: 'Iterative Building',
    theme: 'Velocity & Feedback',
    statement: 'Ship early, stress-test under hostile fire, calibrate rapidly.',
    narrative: 'No theory survives contact with real markets. Real capability is forged by shipping tools that traders and communities use daily.',
    icon: 'Cpu'
  },
  {
    id: 'technical-experimentation',
    title: 'Technical Experimentation',
    theme: 'Deep Curiosity',
    statement: 'Explore the boundaries of APIs, protocols, and unofficial endpoints.',
    narrative: 'Investigating Telegram internal bugs, protocol quirks, and AI agent orchestration without waiting for formal documentation.',
    icon: 'Sparkles'
  },
  {
    id: 'community-network-dynamics',
    title: 'Community & Network Dynamics',
    theme: 'Human Layer',
    statement: 'Software succeeds or fails by the network psychology surrounding it.',
    narrative: 'Scaling Cyberlegends to ???K+ subscribers and navigating ruthless faction battlegrounds provided firsthand mastery of mass communication.',
    icon: 'Users'
  },
  {
    id: 'product-development',
    title: 'Product Development',
    theme: 'Value Delivery',
    statement: 'Translate raw technical mechanisms into frictionless user experiences.',
    narrative: 'Designing utility bots like Old Groups Finder that non-technical traders could use instantly to generate economic value.',
    icon: 'Layers'
  },
  {
    id: 'digital-business',
    title: 'Digital Business & Negotiation',
    theme: 'Economic Acumen',
    statement: 'Mastering peer-to-peer liquidity, market psychology, and leverage.',
    narrative: 'Conducting high-frequency crypto settlements and arbitrage across international channels taught real-world economic risk and calculated negotiation.',
    icon: 'Briefcase'
  },
  {
    id: 'learning-through-experience',
    title: 'Learning Through Experience',
    theme: 'Empirical Wisdom',
    statement: 'Scar tissue is the highest-bandwidth teacher.',
    narrative: 'From total burnout, wiped channels, and frozen funds to forging strategic alliances and architecting Armada—every setback was converted into architectural clarity.',
    icon: 'Compass'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Core Development & Automation',
    description: 'Years of asynchronous Python scripting, bot frameworks, and API integrations.',
    skills: [
      { name: 'Python Systems & AsyncIO', level: 'Extensive Practice', iconName: 'Code', note: 'MTProto, Telethon, Pyrogram, automation engines' },
      { name: 'Telegram Bot Ecosystems', level: 'High Mastery', iconName: 'Bot', note: '30+ custom bots, helper tools, automated admin suites' },
      { name: 'Automation & Scripting', level: 'Core Discipline', iconName: 'Zap', note: 'Workflow automation, data scrapers, batch utilities' },
      { name: 'API Integrations & Protocols', level: 'Advanced', iconName: 'Webhook', note: 'REST, WebSockets, custom protocol communication' }
    ]
  },
  {
    title: 'Modern Web & AI Engineering',
    description: 'Modern full-stack architectures and AI-native web generation for Armada.',
    skills: [
      { name: 'Next.js & React (TypeScript)', level: 'Active Focus', iconName: 'Globe', note: 'App router, interactive UI, state orchestrations' },
      { name: 'Tailwind CSS & Motion Design', level: 'Design Systems', iconName: 'Palette', note: 'Cyberpunk UI, responsive layouts, GSAP & Framer Motion' },
      { name: 'AI Applications & Agents', level: 'Core Initiative', iconName: 'Brain', note: 'Contextual AI agents, prompt engineering, generative flows' },
      { name: 'Technical Research & Debugging', level: 'Native Habit', iconName: 'Search', note: 'Root-cause analysis, pattern reverse-engineering' }
    ]
  },
  {
    title: 'Architecture, Strategy & Operations',
    description: 'High-scale community management, competitive analysis, and commercial strategy.',
    skills: [
      { name: 'Product Architecture', level: 'Armada Web OS', iconName: 'Layout', note: 'Architecting multi-tenant web experience platforms' },
      { name: 'Digital Business & Negotiation', level: 'Real Markets', iconName: 'TrendingUp', note: 'P2P settlements, market arbitrage, strategic dealmaking' },
      { name: 'Community Operations', level: '???K+ History', iconName: 'Users', note: 'Mass moderation, retention, engagement strategies' },
      { name: 'Digital Content Creation', level: 'Creator History', iconName: 'Video', note: 'YouTube video production, narrative storytelling' }
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'armada-web-os',
    title: 'Armada Web OS',
    subtitle: 'AI-Native Website & Business Experience Operating System',
    category: 'Flagship Core Platform',
    status: 'Flagship Core',
    isFlagship: true,
    domain: 'armada.tech',
    description: 'The central technology initiative. Armada Web OS reimagines web development: not as a generic drag-and-drop tool, but as an intelligent operating system that researches target industries, understands customer journeys, designs high-converting web experiences, and orchestrates backend automated workflows.',
    technologies: ['Next.js', 'TypeScript', 'AI Agent Orchestration', 'Automated Workflows', 'Tailwind CSS', 'Cloud Architecture'],
    metrics: [
      'Next-Gen Web Architecture',
      'Integrated Business Intelligence',
      'Multi-Domain Unified Engine'
    ]
  },
  {
    id: 'armada-webnova',
    title: 'Armada WebNova',
    subtitle: 'Commercial High-End Web Development Offering',
    category: 'Commercial Venture',
    status: 'Commercial Offering',
    domain: 'armadawebnova.tech',
    link: 'https://armada.tech',
    description: 'The commercial website-development arm powered by Armada.tech. WebNova provides forward-looking businesses with bespoke, high-performance web engineering, cinematic aesthetics, and integrated automation systems.',
    technologies: ['Modern Web Architecture', 'Cinematic Interactive UI', 'Performance Optimization', 'Client Solutions'],
    metrics: [
      'Commercial Service Arm',
      'Powered by Armada.tech Engine'
    ]
  },
  {
    id: 'old-groups-finder',
    title: 'Old Groups Finder',
    subtitle: 'Proprietary Telegram Marketplace Search Utility',
    category: 'Utility Software',
    status: 'Historic Milestone',
    description: 'A custom search and indexing system engineered for the competitive Telegram aged-groups marketplace. Allowed traders to instantly surface high-value groups and verify parameters, replacing slow manual workflows.',
    technologies: ['Python', 'Telethon', 'AsyncIO', 'Data Indexing', 'Telegram Bot API'],
    metrics: [
      '5,000+ Active Utility Users',
      '10,000+ Marketplace Ecosystem'
    ]
  },
  {
    id: 'cyberlegends',
    title: 'Cyberlegends',
    subtitle: 'Massive Digital Network & Community Hub',
    category: 'Network Ecosystem',
    status: 'Active Ecosystem',
    description: 'Originally founded in the 2021 Prime era, Cyberlegends grew to over ???K+ subscribers across channels before being voluntarily dissolved during security breaches. Reopened in early 2026 as a renewed, revitalized community.',
    technologies: ['Community Systems', 'Broadcasting Frameworks', 'Custom Moderation Bots'],
    metrics: [
      '???K+ Historical Reach',
      'Reopened in Early 2026'
    ]
  },
  {
    id: 'telegram-bot-ecosystem',
    title: '30+ Key Bot Foundry',
    subtitle: 'Autonomous Helpers, Anti-Scam & Management Bots',
    category: 'Bot Infrastructure',
    status: 'Historic Milestone',
    description: 'A suite of over 30 custom Python bots engineered across 2020-2021. Included automated key-helpers, group security enforcement against session hijackers, anti-scammer detection, and administrative automation for 400+ groups.',
    technologies: ['Python', 'MTProto', 'Bot API', 'Security Scripting'],
    metrics: [
      '30+ Custom Bots Deployed',
      '400+ Groups Administered'
    ]
  },
  {
    id: 'youtube-creator-channels',
    title: 'YouTube Creator Ventures',
    subtitle: 'Gaming & Viral Animation Content Hubs',
    category: 'Content Media',
    status: 'Active Ecosystem',
    description: 'From 2019 Free Fire origins to 2024 viral Skibidi Toilet animations (~8,000 subscribers). Ongoing creative exploration communicating stories and engaging digital audiences.',
    technologies: ['Video Production', 'Visual Effects', 'Audience Analytics'],
    metrics: [
      '~8,000 Historical Subscribers',
      'Continuously Evolving Direction'
    ]
  }
];

export const SOCIAL_LINKS = [
  {
    name: 'Telegram',
    handle: '@rishi_legit',
    url: 'https://t.me/rishi_legit',
    description: 'Direct communications, alpha channels & ecosystem operations',
    icon: 'Telegram',
    isConfigured: true
  },
  {
    name: 'GitHub',
    handle: 'disappointed-guy',
    url: 'https://github.com/disappointed-guy',
    description: 'Core source code, systems engineering & experimental repos',
    icon: 'Github',
    isConfigured: true
  },
  {
    name: 'Instagram',
    handle: '@rishisuperyo',
    url: 'https://instagram.com/rishisuperyo',
    description: 'Visual chronicles, personal archives & creative broadcasts',
    icon: 'Instagram',
    isConfigured: true
  },
  {
    name: 'YouTube',
    handle: '@rishisuperyo',
    url: 'https://youtube.com/@rishisuperyo',
    description: 'Video content, animations & creative projects',
    icon: 'Youtube',
    isConfigured: true
  },
  {
    name: 'Armada.tech',
    handle: 'armada.tech',
    url: 'https://armada.tech',
    description: 'Flagship technology platform & Armada Web OS',
    icon: 'Globe',
    isConfigured: true
  }
];
