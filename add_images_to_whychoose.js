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

const imageCats = {
  'motor': 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1000',
  'health': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000',
  'individual-mediclaim': 'https://images.unsplash.com/photo-1551076805-e1869043e560?auto=format&fit=crop&q=80&w=1000',
  'personal-accident': 'https://images.unsplash.com/photo-1588614660288-75276e05d9ae?auto=format&fit=crop&q=80&w=1000',
  'home': 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1000',
  'travel': 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1000',
  'critical-illness': 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1000'
};

retailPages.forEach(slug => {
  const pPath = path.join('app', 'retail', slug, 'page.tsx');
  if (!fs.existsSync(pPath)) return;
  let content = fs.readFileSync(pPath, 'utf8');

  const regex = /<div className="text-center mb-16 max-w-2xl mx-auto">\s*<h2 className="text-3xl md:text-4xl font-bold text-brand-marine mb-4">(.*?)<\/h2>\s*<\/div>\s*<div className="grid grid-cols-1 md:grid-cols-2 gap-10">/g;

  if (regex.test(content)) {
    const img = imageCats[slug];
    content = content.replace(regex, (match, title) => {
      return `<div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-xl ring-1 ring-slate-100 hidden lg:block">
              <Image 
                src="${img}" 
                alt="Why Choose Lambach Insurance" 
                fill 
                className="object-cover" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-4">
                Why Lambach?
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-marine mb-10">${title}</h2>
              <div className="grid grid-cols-1 gap-10">`;
    });
    
    // Also we need to close the extra div we opened for the left/right split.
    // The structure originally was:
    // <div className="layout-container">
    //   <div className="text-center ...">...</div>
    //   <div className="grid ..."> ... </div>
    // </div>
    // </section>
    
    // Now it is:
    // <div className="layout-container">
    //   <div className="grid lg:grid-cols-2 ...">
    //     <div className="relative ...">...</div>
    //     <div>
    //       <h2>...</h2>
    //       <div className="grid grid-cols-1 ..."> ... </div>
    
    // So we need to add an extra `</div>` before `</div>\n      </section>`
    const endRegex = /<\/div>\n        <\/div>\n      <\/section>/g;
    content = content.replace(endRegex, "</div>\n            </div>\n          </div>\n        </div>\n      </section>");
  }

  fs.writeFileSync(pPath, content);
  console.log('WhyChoose updated for', slug);
});
