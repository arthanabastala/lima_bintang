const fs = require('fs');

const content = fs.readFileSync('src/lib/i18n.ts', 'utf8');

let lines = content.split('\n');

// Find where ID ends and EN begins.
let idEndLineIndex = -1;
let enStartLineIndex = -1;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('EN: {')) {
    enStartLineIndex = i;
    break;
  }
}

if (enStartLineIndex !== -1) {
    let beforeEnLines = lines.slice(0, enStartLineIndex);
    let enLines = lines.slice(enStartLineIndex);

    let enKeys = new Set();
    let newEnLinesForwards = [];

    // Reverse iteration to keep only the last defined value
    for (let i = enLines.length - 1; i >= 0; i--) {
       let line = enLines[i];
       let match = line.match(/^\s*'([^']+)':/);
       
       if (match) {
           let key = match[1];
           if (enKeys.has(key)) {
               continue; // Skip duplicate
           }
           enKeys.add(key);
       }
       
       newEnLinesForwards.unshift(line);
    }

    fs.writeFileSync('src/lib/i18n.ts', beforeEnLines.join('\n') + '\n' + newEnLinesForwards.join('\n'));
    console.log('Fixed duplicates in EN block.');
} else {
    console.log('EN block not found');
}
