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
  text = text.replace(/export default function .*Page\(\)/, 'export default function ' + slug.replace(/-/g, '') + 'Page()');
  fs.writeFileSync(pPath, text);
});
