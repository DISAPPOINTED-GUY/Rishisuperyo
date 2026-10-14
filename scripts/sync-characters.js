const fs = require('fs');
const path = require('path');

const charDir = path.join(__dirname, '../public/characters');
const primeFile = path.join(charDir, 'prime.png');

if (!fs.existsSync(primeFile)) {
  console.error('prime.png not found!');
  process.exit(1);
}

const chars = [
  'origin.png',
  'struggle.png',
  'rise.png',
  'alone-fighter.png',
  'exile.png',
  'lone-warrior.png',
  'return-to-self.png',
  'market-king.png',
  'second-rise.png',
  'burnout.png',
  'reckoning.png',
  'rewakening.png',
  'examiner.png',
  'architect.png',
  'confidential.png'
];

chars.forEach(c => {
  const dest = path.join(charDir, c);
  fs.copyFileSync(primeFile, dest);
  console.log(`Updated ${c} with authentic cyber warrior asset.`);
});

console.log('All character assets synchronized!');
