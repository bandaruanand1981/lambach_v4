const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

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
  
  let success = false;
  let attempts = 0;
  while (!success && attempts < 10) {
    attempts++;
    try {
      execSync(`npx -y prettier --write ${pPath}`, { stdio: 'pipe' });
      success = true;
      console.log(`${slug} is cleanly formatted!`);
    } catch (e) {
      const errOut = e.stderr ? e.stderr.toString() : (e.stdout ? e.stdout.toString() : e.toString());
      // Look for: SyntaxError: Expected corresponding JSX closing tag for 'div'. (147:9)
      // or JSX element 'div' has no corresponding closing tag. (55:10)
      
      let match = errOut.match(/\((\d+):\d+\)/);
      if (match) {
        let lineNo = parseInt(match[1], 10);
        console.log(`${slug} error at line`, lineNo);
        let lines = fs.readFileSync(pPath, 'utf8').split('\n');
        
        // Let's just insert '</div>' right before the line that caused the error!
        // Usually the error is at `</section>` because the `</div>` before it is missing.
        lines.splice(lineNo - 1, 0, '</div>');
        fs.writeFileSync(pPath, lines.join('\n'));
      } else {
        console.log(`Could not parse error for ${slug}`);
        break;
      }
    }
  }
});
