const fs = require('fs');
const path = require('path');

const retailPages = [
  'individual-mediclaim',
  'personal-accident',
  'home',
  'travel',
  'critical-illness',
  'health',
  'motor'
];

retailPages.forEach(slug => {
  const pPath = path.join('app', 'retail', slug, 'page.tsx');
  if (!fs.existsSync(pPath)) return;
  let text = fs.readFileSync(pPath, 'utf8');
  
  // Find the exact import line
  const match = text.match(/import\s+\{([^}]+)\}\s+from\s+['"]lucide-react['"];/);
  if (match) {
    const list = match[1].split(',').map(s=>s.trim()).filter(s => s !== "");
    const unique = [...new Set(list)];
    text = text.replace(match[0], "import { " + unique.join(', ') + " } from 'lucide-react';");
    fs.writeFileSync(pPath, text);
    console.log("Fixed imports for", slug);
  }
});
