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

const imageMapping = {
  'motor': {
    intro: 'https://images.unsplash.com/photo-1549317661-bc32c58a164e?auto=format&fit=crop&q=80&w=1200',
    closing: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1200'
  },
  'health': {
    intro: 'https://images.unsplash.com/photo-1584982751601-97d883c610f4?auto=format&fit=crop&q=80&w=1200',
    closing: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&q=80&w=1200'
  },
  'individual-mediclaim': {
    intro: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=1200',
    closing: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200'
  },
  'personal-accident': {
    intro: 'https://images.unsplash.com/photo-1628348070830-246f8c644d62?auto=format&fit=crop&q=80&w=1200',
    closing: 'https://images.unsplash.com/photo-1510265236892-329bfd7577e8?auto=format&fit=crop&q=80&w=1200'
  },
  'home': {
    intro: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    closing: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200'
  },
  'travel': {
    intro: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1200',
    closing: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=1200'
  },
  'critical-illness': {
    intro: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1200',
    closing: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&q=80&w=1200'
  }
};

retailPages.forEach(slug => {
  const pPath = path.join('app', 'retail', slug, 'page.tsx');
  if (!fs.existsSync(pPath)) return;
  let content = fs.readFileSync(pPath, 'utf8');

  const imgs = imageMapping[slug];

  // 1. Update Intro Section
  // Find <div className="max-w-4xl mx-auto"> or similar and update it.
  const introRegex = /<div className="max-w-4xl mx-auto">\s*<h1 className="text-3xl md:text-4xl font-bold text-brand-marine mb-6">(.*?)<\/h1>\s*<div className="prose max-w-none text-slate-600 space-y-6">\s*([\s\S]*?)<\/div>\s*<\/div>/g;
  
  if (introRegex.test(content)) {
    content = content.replace(introRegex, (match, h1, paragraphs) => {
      return `<div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-brand-marine mb-6">${h1}</h1>
              <div className="prose max-w-none text-slate-600 space-y-6">
                ${paragraphs}
              </div>
            </div>
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="${imgs.intro}" 
                alt="Introduction to ${slug.replace(/-/g, ' ')} insurance" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700" 
                sizes="(max-width: 1024px) 100vw, 50vw"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>`;
    });
  }

  // 2. Update Closing Section
  // Find <div className="layout-container relative z-10 text-center max-w-4xl mx-auto">
  const closeRegex = /<div className="layout-container relative z-10 text-center max-w-4xl mx-auto">\s*<h2 className="text-3xl md:text-4xl font-bold mb-6">(.*?)<\/h2>\s*([\s\S]*?)<\/div>\s*<\/section>/;
  
  if (closeRegex.test(content)) {
    content = content.replace(closeRegex, (match, h2, paragraphs) => {
      return `<div className="layout-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/20">
              <Image 
                src="${imgs.closing}" 
                alt="Comprehensive ${slug.replace(/-/g, ' ')} protection" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700" 
                sizes="(max-width: 1024px) 100vw, 50vw"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 lg:order-2 text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">${h2}</h2>
              <div className="space-y-6 text-slate-300">
                ${paragraphs}
              </div>
            </div>
          </div>
        </div>
      </section>`;
    });
  }

  // 3. Make sure Image is imported if not already. Although we saw "import Image from 'next/image';" in page.tsx.

  fs.writeFileSync(pPath, content);
  console.log('Processed', slug);
});
