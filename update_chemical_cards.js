const fs = require('fs');

const file = 'app/industries/chemical/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const replacements = [
  {
    title: 'Property Insurance',
    unsplash: '1542154139-2a9f1ed70529'
  },
  {
    title: 'Product Liability Insurance',
    unsplash: '1576086213369-97a306d36557'
  },
  {
    title: 'Business Interruption Insurance',
    unsplash: '1581091226825-a6a2a5aee158'
  },
  {
    title: 'Supply Chain Insurance',
    unsplash: '1586528116311-ad8ed7c50810'
  },
  {
    title: 'Environmental Liability Insurance',
    unsplash: '1611273426858-450d8ce4c227'
  },
  {
    title: 'Cyber Insurance',
    unsplash: '1550751827-4bd374c3f58b'
  },
  {
    title: 'R&D Insurance',
    unsplash: '1532094349884-543bc11b234d'
  },
  {
    title: 'Professional Liability Insurance',
    unsplash: '1454165804606-c3d57bc86b40'
  },
  {
    title: 'Cargo Insurance',
    unsplash: '1586528116493-a02826315df5'
  },
  {
    title: 'Workers&apos; Compensation Insurance',
    unsplash: '1504931301985-5b80b7e28945'
  }
];

content = content.replace(
  /<div className="bg-([a-z]+)-50 p-8 rounded-\[2rem\] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-\1-100">\s*<div className="flex items-start justify-between mb-6 gap-4">\s*<div className="flex-1">\s*<h3 className="font-bold text-xl text-brand-marine mb-2">([^<]+)<\/h3>\s*<\/div>\s*<div className="w-16 h-16 flex-shrink-0 bg-white\/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">\s*<([A-Za-z]+) className="w-8 h-8 text-\1-500" \/>\s*<\/div>\s*<\/div>\s*<p className="text-sm text-slate-600 leading-relaxed">\s*([\s\S]*?)<\/p>\s*<\/div>/g,
  (match, color, title, icon, pContent) => {
    const r = replacements.find(x => x.title === title || title.includes(x.title.replace('&apos;', "'")));
    const imgId = r ? r.unsplash : '1532187863486-abf9db090729'; // default fallback
    return `<div className="bg-${color}-50 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-${color}-100 overflow-hidden">
              <div className="relative w-full h-48 overflow-hidden bg-slate-200">
                <Image 
                  src="https://images.unsplash.com/photo-${imgId}?auto=format&fit=crop&q=80&w=800"
                  alt="${title.replace('&apos;', "'")}"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <${icon} className="w-6 h-6 text-${color}-500" />
                  <h3 className="font-bold text-xl text-brand-marine">${title}</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  ${pContent.trim()}
                </p>
              </div>
            </div>`;
  }
);

fs.writeFileSync(file, content);
console.log('Update complete');
