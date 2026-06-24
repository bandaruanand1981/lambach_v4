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

  const regex = /\{\/\* Related Coverages \*\/\}[\s\S]*?(?=<CTAContact \/>)/g;
  
  if (regex.test(content)) {
    content = content.replace(regex, '');
    fs.writeFileSync(pPath, content);
    console.log('Removed from ' + slug);
  } else {
    console.log('Not found in ' + slug);
  }
});
