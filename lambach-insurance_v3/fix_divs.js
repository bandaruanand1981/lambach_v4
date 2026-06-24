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

  // Fix Intro section
  // It starts with <section className="py-24 bg-slate-50"> and goes to </section> before {/* Product Wordings or Overview
  text = text.replace(/<section className="py-24 bg-slate-50">\s*<div className="layout-container">\s*<div className="grid lg:grid-cols-2 gap-12 items-center">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/g, (match, inner) => {
    return `<section className="py-24 bg-slate-50">
        <div className="layout-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">${inner}</div>
        </div>
      </section>`;
  });
  text = text.replace(/<section className="py-24 bg-slate-50">\s*<div className="layout-container">\s*<div className="grid lg:grid-cols-2 gap-12 items-center">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/g, (match, inner) => {
    return `<section className="py-24 bg-slate-50">
        <div className="layout-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">${inner}</div>
        </div>
      </section>`;
  });

  // Fix Closing section
  text = text.replace(/<section className="py-20 bg-brand-marine text-white relative overflow-hidden">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/g, (match, inner) => {
    // we just want to ensure it ends cleanly
    return `<section className="py-20 bg-brand-marine text-white relative overflow-hidden">${inner}</div>
        </div>
      </section>`;
  });
  text = text.replace(/<section className="py-20 bg-brand-marine text-white relative overflow-hidden">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/g, (match, inner) => {
    return `<section className="py-20 bg-brand-marine text-white relative overflow-hidden">${inner}</div>
        </div>
      </section>`;
  });
  
  // Actually, wait, let's just use a more reliable way.
  // We can see how many </div> we have vs how many <div...>
  
  fs.writeFileSync(pPath, text);
});
