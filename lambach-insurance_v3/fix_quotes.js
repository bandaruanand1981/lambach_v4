const fs = require('fs');
let content = fs.readFileSync('app/risk-assessment/page.tsx', 'utf-8');
content = content.replace(/organization's/g, "organization&apos;s");
content = content.replace(/don't/g, "don&apos;t");
fs.writeFileSync('app/risk-assessment/page.tsx', content);
console.log('Fixed quotes.');
