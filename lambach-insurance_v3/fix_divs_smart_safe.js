const fs = require('fs');
const path = require('path');

const retailPages = [
  'individual-mediclaim',
  'personal-accident',
  'home',
  'travel',
  'critical-illness'
];

retailPages.forEach(slug => {
  const pPath = path.join('app', 'retail', slug, 'page.tsx');
  if (!fs.existsSync(pPath)) return;
  let text = fs.readFileSync(pPath, 'utf8');

  const sections = text.split(/(?=<section)/g);
  
  for (let i = 0; i < sections.length; i++) {
     let sec = sections[i];
     if (!sec.startsWith('<section')) continue;

     // count <div... and </div...
     // Don't count divs inside comments! So strip comments first.
     let secNoCmt = sec.replace(/{\/\*[\s\S]*?\*\/}/g, '');
     
     const openDivs = (secNoCmt.match(/<div(\s|>)/g) || []).length;
     const closeDivs = (secNoCmt.match(/<\/div>/g) || []).length;
     
     if (openDivs !== closeDivs) {
       console.log(`${slug} section ${i} imbalance: open ${openDivs}, close ${closeDivs}`);
       if (closeDivs > openDivs) {
         // remove extra </div>s from the end of the section
         let extra = closeDivs - openDivs;
         let endMatch = sec.match(/((?:\s*<\/div>\s*)+)({?\s*\/\*.*?\*\/\s*}?\s*)?(<\/section>.*)$/);
         if (endMatch) {
            let divsStr = endMatch[1];
            for (let j=0; j<extra; j++) {
               divsStr = divsStr.replace(/<\/div>\s*$/, '');
            }
            sec = sec.replace(/((?:\s*<\/div>\s*)+)({?\s*\/\*.*?\*\/\s*}?\s*)?(<\/section>.*)$/, divsStr + (endMatch[2]||'') + "$3");
         }
       } else {
         // needs extra </div>
         let extra = openDivs - closeDivs;
         let endMatch = sec.match(/((?:\s*<\/div>\s*)+)?({?\s*\/\*.*?\*\/\s*}?\s*)?(<\/section>.*)$/);
         if (endMatch) {
            let divsStr = endMatch[1] || '';
            for (let j=0; j<extra; j++) {
               divsStr += '\n        </div>';
            }
            sec = sec.replace(/((?:\s*<\/div>\s*)+)?({?\s*\/\*.*?\*\/\s*}?\s*)?(<\/section>.*)$/, divsStr + '\n      ' + (endMatch[2]||'') + "$3");
         }
       }
       sections[i] = sec;
     }
  }
  
  fs.writeFileSync(pPath, sections.join(''));
  console.log('Fixed', slug);
});
