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
  'motor': [
    'https://images.unsplash.com/photo-1549317661-bc32c58a164e?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1502877338535-34cb0dd4ebd3?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1542382103-db2cb53b3f27?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1518712959828-5cefc599b860?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=600'
  ],
  'health': [
    'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1551076805-e1869043e560?auto=format&fit=crop&q=80&w=600'
  ],
  'individual-mediclaim': [
    'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1551076805-e1869043e560?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1551076805-e1869043e560?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=600'
  ],
  'personal-accident': [
    'https://images.unsplash.com/photo-1628348070830-246f8c644d62?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1510265236892-329bfd7577e8?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1587569106263-d1502447b9ce?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1588614660288-75276e05d9ae?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1563820689436-eeb52ce1bc30?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1504439468489-c8920d786a2b?auto=format&fit=crop&q=80&w=600'
  ],
  'home': [
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1628012198083-057bfbcfec4c?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1502672260266-1c1de2d9200b?auto=format&fit=crop&q=80&w=600'
  ],
  'travel': [
    'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1473625247510-8ceb1760943f?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?auto=format&fit=crop&q=80&w=600'
  ],
  'critical-illness': [
    'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1551076805-e1869043e560?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&q=80&w=600'
  ]
};

retailPages.forEach(slug => {
  const pPath = path.join('app', 'retail', slug, 'page.tsx');
  if (!fs.existsSync(pPath)) return;
  let content = fs.readFileSync(pPath, 'utf8');

  let imgIdx = 0;
  const generateImg = (title) => {
    const list = imageCats[slug];
    const img = list[imgIdx % list.length];
    imgIdx++;
    return "\n                <div className=\"relative hidden lg:block w-28 h-28 flex-shrink-0 rounded-2xl overflow-hidden shadow-sm group-hover:-translate-y-1 transition-transform\">\n                  <Image src=\"" + img + "\" alt=\"" + title.replace(/"/g, '&quot;') + "\" fill className=\"object-cover\" referrerPolicy=\"no-referrer\" sizes=\"(max-width: 768px) 112px, 112px\" />\n                </div>";
  };

  const regexCoverage = /<h3 className="font-bold text-xl text-brand-marine mb-2">(.*?)<\/h3>\s*<\/div>\s*<div className="hidden sm:flex w-20 h-20 flex-shrink-0 bg-white\/60 rounded-2xl items-center justify-center shadow-sm group-hover:rotate-6 transition-transform">\s*<[A-Za-z0-9]+ className="w-10 h-10 text-[a-z]+-500" \/>\s*<\/div>/g;
  
  content = content.replace(regexCoverage, (match, title) => {
    return "<h3 className=\"font-bold text-xl text-brand-marine mb-2\">" + title + "</h3>\n                </div>" + generateImg(title);
  });
  
  fs.writeFileSync(pPath, content);
  console.log('Coverages updated for', slug);
});
