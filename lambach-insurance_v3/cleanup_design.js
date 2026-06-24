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

  let content = fs.readFileSync(pPath, 'utf8');

  // Remove "font-[family-name:var(--font-inter)] " from all headers
  content = content.replace(/font-\[family-name:var\(--font-inter\)\] /g, '');

  // The regex accidentally added "Discuss this coverage" everywhere.
  // We only want it inside the coverage cards.
  // Let's remove it globally first!
  const discussBlockRegex = /\s*<div className="mt-8 pt-4 border-t border-slate-100\/50">\s*<Link href="\/who-we-are#contact-us" className="inline-flex items-center gap-2 text-sm font-bold text-brand-marine hover:text-primary transition-colors">\s*Discuss this coverage\s*<ArrowRight className="w-4 h-4" \/>\s*<\/Link>\s*<\/div>/g;
  
  content = content.replace(discussBlockRegex, '');

  fs.writeFileSync(pPath, content);
  console.log('Cleaned up', slug);
});
