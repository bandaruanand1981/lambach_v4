const fs = require('fs');
const path = require('path');

const retailPages = [
  'motor',
  'health',
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

  // We have a lot of sections ending with too many </div>.
  // A section typically should have <div className="layout-container"> as its only direct child.
  // Which means it should end with TWO </div>:
  //   </div> <!-- closes the content div (e.g. grid) -->
  // </div> <!-- closes layout-container -->
  // </section>

  // However, because we replaced things blindly, some sections end with 4 </div>.
  
  // Let's identify the start of each section, and count opening `<div` and closing `</div`.
  // Actually, we can just find and replace the whole `Why Choose Us` section, and for everything else, we can manually fix the endings.
  // Wait, calculating balance programmatically is easiest.
  
  const sections = text.split(/(?=<section)/g);
  
  for (let i = 0; i < sections.length; i++) {
     let sec = sections[i];
     if (!sec.startsWith('<section')) continue;

     // count <div... and </div...
     const openDivs = (sec.match(/<div(\s|>)/g) || []).length;
     const closeDivs = (sec.match(/<\/div>/g) || []).length;
     
     if (openDivs !== closeDivs) {
       console.log(`${slug} section ${i} imbalance: open ${openDivs}, close ${closeDivs}`);
       if (closeDivs > openDivs) {
         // remove extra </div>s from the end of the section (just before </section>)
         let extra = closeDivs - openDivs;
         let endMatch = sec.match(/((?:\s*<\/div>\s*)+)(<\/section>.*)$/);
         if (endMatch) {
            let divsStr = endMatch[1];
            // remove exactly `extra` number of "</div>" from divsStr
            for (let j=0; j<extra; j++) {
               divsStr = divsStr.replace(/<\/div>\s*$/, '');
            }
            sec = sec.replace(/((?:\s*<\/div>\s*)+)(<\/section>.*)$/, divsStr + "$2");
         }
       } else {
         // needs extra </div>
         let extra = openDivs - closeDivs;
         let endMatch = sec.match(/((?:\s*<\/div>\s*)+)?(<\/section>.*)$/);
         if (endMatch) {
            let divsStr = endMatch[1] || '';
            for (let j=0; j<extra; j++) {
               divsStr += '\n        </div>';
            }
            sec = sec.replace(/((?:\s*<\/div>\s*)+)?(<\/section>.*)$/, divsStr + '\n      ' + "$2");
         }
       }
       sections[i] = sec;
     }
  }
  
  fs.writeFileSync(pPath, sections.join(''));
  console.log('Fixed', slug);
});
