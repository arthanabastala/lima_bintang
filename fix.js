const fs = require('fs');

const content = fs.readFileSync('src/lib/i18n.ts', 'utf8');

let lines = content.split('\n');
let idLines = lines.slice(0, 80);
let enLines = lines.slice(80);

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

fs.writeFileSync('src/lib/i18n.ts', idLines.join('\n') + '\n' + newEnLinesForwards.join('\n'));
console.log('Fixed duplicates in EN block.');
