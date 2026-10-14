const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// CRC32 implementation for PNG chunks
const crcTable = [];
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) {
    c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  }
  crcTable[n] = c;
}

function crc32(buf) {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc = crcTable[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function createChunk(type, data) {
  const len = data.length;
  const chunk = Buffer.alloc(4 + 4 + len + 4);
  chunk.writeUInt32BE(len, 0);
  chunk.write(type, 4, 4, 'ascii');
  data.copy(chunk, 8);
  const toCrc = Buffer.alloc(4 + len);
  chunk.copy(toCrc, 0, 4, 8 + len);
  chunk.writeUInt32BE(crc32(toCrc), 8 + len);
  return chunk;
}

function encodeRGBAtoPNG(width, height, rgbaBuffer) {
  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

  // IHDR
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // bit depth
  ihdrData[9] = 6; // color type RGBA
  ihdrData[10] = 0; // compression
  ihdrData[11] = 0; // filter
  ihdrData[12] = 0; // interlace
  const ihdrChunk = createChunk('IHDR', ihdrData);

  // IDAT: Scanlines with filter byte 0
  const scanlines = Buffer.alloc(height * (1 + width * 4));
  for (let y = 0; y < height; y++) {
    const rowOffset = y * (1 + width * 4);
    scanlines[rowOffset] = 0; // filter type 0 (None)
    const srcOffset = y * width * 4;
    rgbaBuffer.copy(scanlines, rowOffset + 1, srcOffset, srcOffset + width * 4);
  }

  const compressedData = zlib.deflateSync(scanlines, { level: 6 });
  const idatChunk = createChunk('IDAT', compressedData);
  const iendChunk = createChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

// Arc specifications for procedural character rasterization
const ARCS = [
  {
    name: 'origin',
    primary: [255, 0, 127],      // Magenta
    secondary: [147, 51, 234],   // Purple
    accent: [255, 255, 255],
    armor: [20, 20, 30],
    glow: [255, 0, 127],
    coreStyle: 'circle',
    hasCrown: false,
    helmetStyle: 'visor',
    energyIntensity: 0.75
  },
  {
    name: 'struggle',
    primary: [139, 92, 246],    // Slate Violet
    secondary: [75, 85, 99],    // Dim Grey
    accent: [167, 139, 250],
    armor: [15, 17, 23],
    glow: [139, 92, 246],
    coreStyle: 'dim',
    hasCrown: false,
    helmetStyle: 'hood',
    energyIntensity: 0.4
  },
  {
    name: 'rise',
    primary: [157, 78, 221],    // Violet Pulse
    secondary: [0, 240, 255],   // Cyan node
    accent: [224, 170, 255],
    armor: [18, 22, 35],
    glow: [157, 78, 221],
    coreStyle: 'network',
    hasCrown: false,
    helmetStyle: 'cyber-mask',
    energyIntensity: 0.85
  },
  {
    name: 'prime',
    primary: [0, 240, 255],     // Electric Cyan
    secondary: [0, 229, 188],   // Turquoise
    accent: [255, 255, 255],
    armor: [10, 15, 22],        // Obsidian Black
    glow: [0, 240, 255],
    coreStyle: 'reactor',
    hasCrown: true,             // Majestic Crown Helm
    helmetStyle: 'crowned-monarch',
    energyIntensity: 1.0
  },
  {
    name: 'alone-fighter',
    primary: [0, 229, 188],     // Glitching Cyan
    secondary: [239, 68, 68],   // Red fracture
    accent: [148, 163, 184],
    armor: [18, 18, 22],
    glow: [0, 229, 188],
    coreStyle: 'flicker',
    hasCrown: true,             // Broken Crown
    helmetStyle: 'cracked-crown',
    energyIntensity: 0.6
  },
  {
    name: 'exile',
    primary: [100, 116, 139],   // Muted Slate
    secondary: [51, 65, 85],
    accent: [203, 213, 225],
    armor: [15, 18, 25],
    glow: [148, 163, 184],
    coreStyle: 'dormant',
    hasCrown: false,
    helmetStyle: 'wanderer',
    energyIntensity: 0.35
  },
  {
    name: 'lone-warrior',
    primary: [255, 42, 84],     // Blood Crimson
    secondary: [220, 38, 38],   // Deep Red
    accent: [255, 255, 255],
    armor: [14, 10, 12],
    glow: [255, 42, 84],
    coreStyle: 'blaze',
    hasCrown: false,
    helmetStyle: 'demon-visor',
    energyIntensity: 0.95
  },
  {
    name: 'return-to-self',
    primary: [0, 229, 188],     // Calming Cyan
    secondary: [148, 163, 184],
    accent: [255, 255, 255],
    armor: [18, 24, 32],
    glow: [0, 229, 188],
    coreStyle: 'centered',
    hasCrown: false,
    helmetStyle: 'monk-visage',
    energyIntensity: 0.7
  },
  {
    name: 'market-king',
    primary: [255, 183, 3],     // Imperial Gold
    secondary: [124, 58, 237],  // Royal Violet
    accent: [254, 240, 138],
    armor: [22, 18, 32],
    glow: [255, 183, 3],
    coreStyle: 'sol',
    hasCrown: true,
    helmetStyle: 'golden-crown',
    energyIntensity: 0.95
  },
  {
    name: 'second-rise',
    primary: [168, 85, 247],    // Violet Overdrive
    secondary: [236, 72, 153],  // Hot Pink
    accent: [255, 255, 255],
    armor: [20, 15, 28],
    glow: [168, 85, 247],
    coreStyle: 'dual-pulse',
    hasCrown: false,
    helmetStyle: 'streamer-helm',
    energyIntensity: 0.9
  },
  {
    name: 'burnout',
    primary: [113, 113, 122],   // Zinc / Ash
    secondary: [63, 63, 70],
    accent: [161, 161, 170],
    armor: [12, 12, 14],
    glow: [113, 113, 122],
    coreStyle: 'low-battery',
    hasCrown: false,
    helmetStyle: 'exhausted',
    energyIntensity: 0.25
  },
  {
    name: 'reckoning',
    primary: [244, 63, 94],     // Rose Crimson
    secondary: [139, 92, 246],  // Memory Violet
    accent: [255, 228, 230],
    armor: [18, 15, 22],
    glow: [244, 63, 94],
    coreStyle: 'archive-lock',
    hasCrown: false,
    helmetStyle: 'inquisitor',
    energyIntensity: 0.75
  },
  {
    name: 'rewakening',
    primary: [56, 189, 248],    // Divine Sky Cyan
    secondary: [250, 204, 21],  // Krishna Gold
    accent: [255, 255, 255],
    armor: [15, 25, 40],
    glow: [56, 189, 248],
    coreStyle: 'divine-lotus',
    hasCrown: true,
    helmetStyle: 'celestial-crest',
    energyIntensity: 0.95
  },
  {
    name: 'examiner',
    primary: [0, 240, 255],     // Mathematical Cyan
    secondary: [37, 99, 235],   // Blueprint Cobalt
    accent: [255, 255, 255],
    armor: [14, 20, 30],
    glow: [0, 240, 255],
    coreStyle: 'geometric-matrix',
    hasCrown: false,
    helmetStyle: 'tactical-hud',
    energyIntensity: 0.9
  },
  {
    name: 'architect',
    primary: [0, 240, 255],     // Armada Cyan
    secondary: [121, 40, 202],  // Armada Violet
    accent: [255, 255, 255],
    armor: [8, 12, 20],         // Nanotech Composite
    glow: [0, 240, 255],
    coreStyle: 'armada-engine',
    hasCrown: true,
    helmetStyle: 'system-architect',
    energyIntensity: 1.0
  },
  {
    name: 'confidential',
    primary: [239, 68, 68],     // Classified Red
    secondary: [245, 158, 11],  // Warning Amber
    accent: [255, 255, 255],
    armor: [8, 8, 10],          // Blackout Silhouette
    glow: [239, 68, 68],
    coreStyle: 'quantum-lock',
    hasCrown: false,
    helmetStyle: 'encrypted-mask',
    energyIntensity: 0.8
  }
];

function renderCharacter(spec, width = 600, height = 900) {
  const buf = Buffer.alloc(width * height * 4); // all 0 = transparent alpha 0

  function setPixel(x, y, r, g, b, a) {
    if (x < 0 || x >= width || y < 0 || y >= height) return;
    const idx = (y * width + x) * 4;
    if (a <= 0) return;
    const srcA = a / 255;
    const destA = buf[idx + 3] / 255;
    const outA = srcA + destA * (1 - srcA);
    if (outA <= 0) return;

    const outR = Math.round((r * srcA + buf[idx] * destA * (1 - srcA)) / outA);
    const outG = Math.round((g * srcA + buf[idx + 1] * destA * (1 - srcA)) / outA);
    const outB = Math.round((b * srcA + buf[idx + 2] * destA * (1 - srcA)) / outA);

    buf[idx] = outR;
    buf[idx + 1] = outG;
    buf[idx + 2] = outB;
    buf[idx + 3] = Math.round(outA * 255);
  }

  const cx = width / 2;
  const cy = height * 0.45;

  // Draw procedural character silhouette with authentic anatomy, armor & energy
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const dx = x - cx;
      const dy = y;

      // 1. Crown / Headgear (y: 100 - 220)
      let inCrown = false;
      if (spec.hasCrown && dy >= 90 && dy <= 165) {
        const crownDist = Math.abs(dx);
        // Spikes at dx = 0, dx = +-35, dx = +-70
        const spike = Math.cos((dx / 30) * Math.PI) * 20;
        if (crownDist < 85 && (dy - 120 + spike < 35)) {
          inCrown = true;
        }
      }

      // Helmet / Head (y: 140 - 250, dx width: 60)
      const headDist = Math.hypot(dx * 1.25, (dy - 200) * 0.95);
      const inHead = headDist < 58;

      // Visor / Eyes (y: 190 - 205, dx: -35 to 35)
      const inVisor = inHead && dy >= 188 && dy <= 204 && Math.abs(dx) <= 36;

      // Neck (y: 245 - 280, dx: -25 to 25)
      const inNeck = dy >= 245 && dy <= 280 && Math.abs(dx) <= 24;

      // Pauldrons / Shoulders (y: 260 - 360, dx: -190 to 190)
      const leftShoulderDist = Math.hypot(dx + 130, (dy - 305) * 1.1);
      const rightShoulderDist = Math.hypot(dx - 130, (dy - 305) * 1.1);
      const inPauldrons = (leftShoulderDist < 56 || rightShoulderDist < 56) && dy >= 260;

      // Chest / Torso (y: 275 - 470, tapering dx from 115 down to 75)
      const torsoHalfW = 115 - ((dy - 275) / 195) * 40;
      const inTorso = dy >= 275 && dy <= 470 && Math.abs(dx) <= torsoHalfW;

      // Chest Arc Reactor / Core (y: 320 - 360, dx: -28 to 28)
      const coreDist = Math.hypot(dx, dy - 340);
      const inCore = coreDist < 26;
      const inCoreGlow = coreDist < 55;

      // Arms / Forearms (y: 330 - 560, dx: ~ +-130 to +-165)
      const armX = Math.abs(dx);
      const inArms = dy >= 325 && dy <= 560 && armX >= 95 && armX <= 165 && (dy - 325) * 0.15 + armX < 170;

      // Waist / Belt (y: 470 - 520, dx: -78 to 78)
      const inWaist = dy > 470 && dy <= 520 && Math.abs(dx) <= 78;

      // Legs / Thighs (y: 520 - 820, dx: ~25 to 80 on each side)
      const legDistX = Math.abs(dx);
      const inLegs = dy > 520 && dy <= 820 && legDistX >= 10 && legDistX <= (75 - ((dy - 520) / 300) * 20);

      // Boots (y: 780 - 860)
      const inBoots = dy > 780 && dy <= 860 && legDistX >= 8 && legDistX <= 68;

      // Is within character body
      const isSolid = inCrown || inHead || inNeck || inPauldrons || inTorso || inArms || inWaist || inLegs || inBoots;

      if (isSolid) {
        if (inVisor) {
          // Blazing visor
          setPixel(x, y, spec.primary[0], spec.primary[1], spec.primary[2], 255);
        } else if (inCore) {
          // Pure energy core
          const intensity = Math.min(1, (1 - coreDist / 26) * spec.energyIntensity + 0.3);
          const r = Math.round(spec.primary[0] * intensity + spec.accent[0] * (1 - intensity));
          const g = Math.round(spec.primary[1] * intensity + spec.accent[1] * (1 - intensity));
          const b = Math.round(spec.primary[2] * intensity + spec.accent[2] * (1 - intensity));
          setPixel(x, y, r, g, b, 255);
        } else if (inCrown) {
          // Majestic crown armor
          const crColor = spec.hasCrown ? spec.secondary : spec.armor;
          setPixel(x, y, crColor[0] + 30, crColor[1] + 30, crColor[2] + 40, 245);
        } else {
          // Armor base with rim lighting and cyber grooves
          const edgeDist = Math.abs(dx) / 120;
          const rim = Math.pow(edgeDist, 1.8) * 0.7;

          // Armor plate shading
          const baseR = spec.armor[0] + Math.round(rim * (spec.primary[0] - spec.armor[0]));
          const baseG = spec.armor[1] + Math.round(rim * (spec.primary[1] - spec.armor[1]));
          const baseB = spec.armor[2] + Math.round(rim * (spec.primary[2] - spec.armor[2]));

          // Cyber circuitry lines
          const isCircuit = ((x + y) % 32 === 0 || (x - y) % 36 === 0) && (Math.abs(dx) > 20);
          if (isCircuit && spec.energyIntensity > 0.4) {
            setPixel(x, y, spec.primary[0], spec.primary[1], spec.primary[2], 230);
          } else {
            setPixel(x, y, baseR, baseG, baseB, 240);
          }
        }
      } else if (inCoreGlow && dy >= 280 && dy <= 420) {
        // Ambient core glow halo over armor/space
        const glowAlpha = Math.max(0, (1 - coreDist / 55) * 0.45 * spec.energyIntensity);
        setPixel(x, y, spec.primary[0], spec.primary[1], spec.primary[2], Math.round(glowAlpha * 255));
      }
    }
  }

  return encodeRGBAtoPNG(width, height, buf);
}

// Generate all characters into public/characters
const targetDir = path.join(__dirname, '../public/characters');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

console.log('Generating transparent PNG character cutouts for all 16 arcs...');
ARCS.forEach(arc => {
  const filePath = path.join(targetDir, `${arc.name}.png`);
  const pngBuffer = renderCharacter(arc, 600, 900);
  fs.writeFileSync(filePath, pngBuffer);
  console.log(`✓ Generated ${filePath} (${(pngBuffer.length / 1024).toFixed(1)} KB)`);
});
console.log('All 16 character cutouts generated successfully with genuine alpha transparency!');
