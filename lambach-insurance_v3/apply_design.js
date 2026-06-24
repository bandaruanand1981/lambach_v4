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

  // Add showContactCta and label to PageHero
  if (!content.includes('showContactCta')) {
    content = content.replace(/<PageHero([\s\S]*?)\/>/, `<PageHero$1showContactCta label="Retail Solution"\n      />`);
  }

  // Find and replace coverage cards
  // Original pattern:
  // <div className="bg-(.*?)-50 rounded-\[2rem\] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-\1-100 overflow-hidden(.*?)">
  //   <div className="p-8 flex-1 flex flex-col">
  //     <div className="flex items-center gap-3 mb-4">
  //       <([A-Za-z0-9]+) className="w-8 h-8 text-\1-500" \/>
  //       <h3 className="font-bold text-xl text-brand-marine">(.*?)<\/h3>
  //     <\/div>
  //     <p className="text-sm text-slate-600 leading-relaxed(.*?)">
  //       ([\s\S]*?)
  //     <\/p>\s*(?:<ul[\s\S]*?<\/ul>\s*<p[\s\S]*?<\/p>\s*)?
  //   <\/div>\s*<\/div>
  
  // Wait, some have lists inside, like motor has a list for Add-On Covers.
  // Instead of matching the whole body, let's just match the top part of the card and restructure it.
  
  // We want to transform:
  // <div className="bg-COLOR-50 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-COLOR-100 overflow-hidden CLASSES">
  //   <div className="p-8 flex-1 flex flex-col">
  //     <div className="flex items-center gap-3 mb-4">
  //       <ICON className="w-8 h-8 text-COLOR-500" />
  //       <h3 className="font-bold text-xl text-brand-marine">TITLE</h3>
  //     </div>
  
  // To matching Home Page Specialties:
  // <div className="bg-COLOR-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 CLASSES">
  //   <div className="flex flex-col sm:flex-row items-start justify-between mb-2 gap-6">
  //     <div className="flex-1">
  //       <h3 className="font-bold text-xl text-brand-marine mb-3">TITLE</h3>

  // And we place the icon at the end of the flex-row:
  //     </div>
  //     <div className="w-20 h-20 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:rotate-6 transition-transform">
  //       <ICON className="w-10 h-10 text-COLOR-500" />
  //     </div>
  //   </div>
  //   <div className="mt-2">  <!-- wrap the rest of the text -->

  const regex = /<div className="bg-([a-z]+)-50 rounded-\[2rem\] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-\1-100 overflow-hidden(.*?)">\s*<div className="p-8 flex-1 flex flex-col">\s*<div className="flex items-center gap-3 mb-4">\s*<([A-Za-z0-9]+) className="w-8 h-8 text-\1-500" \/>\s*<h3 className="font-bold text-xl text-brand-marine">(.*?)<\/h3>\s*<\/div>/g;

  content = content.replace(regex, (match, color, classes, icon, title) => {
    return `<div className="bg-${color}-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300${classes}">
              <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-6">
                <div className="flex-1 flex flex-col items-start">
                  <h3 className="font-[family-name:var(--font-inter)] font-bold text-xl text-brand-marine mb-2">${title}</h3>
                </div>
                <div className="hidden sm:flex w-20 h-20 flex-shrink-0 bg-white/60 rounded-2xl items-center justify-center shadow-sm group-hover:rotate-6 transition-transform">
                  <${icon} className="w-10 h-10 text-${color}-500" />
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 sm:hidden">
                 <${icon} className="w-8 h-8 text-${color}-500" />
              </div>
              <div className="flex-1">`;
  });

  if (content.includes('font-[family-name:var(--font-inter)]')) {
    // We handled the top part. Now we must fix the closing tags.
    // The original structure was:
    // </div> </div> (Closing the p-8 div, then the bg-color div)
    // We opened: <div class="bg"> <div class="top flex"> ... </div> <div class="flex-1">
    // So closing tags are exactly the same! </div> </div> perfectly closes <div class="flex-1"> and <div class="bg...">!
  }

  // Also match "Product Wordings and Insurance Broker Services" cards
  // Original pattern:
  // <div className="bg-slate-50 rounded-[2rem] p-8 hover:shadow-lg transition-all duration-300">
  //   <div className="w-14 h-14 bg-[color]-100 rounded-xl flex items-center justify-center mb-6">
  //     <[ICON] className="w-7 h-7 text-[color]-600" />
  //   </div>
  //   <h3 className="text-2xl font-bold text-brand-marine mb-4">[TITLE]</h3>
  //   <p className="text-slate-600 leading-relaxed">
  //     [DESC]
  //   </p>
  // </div>
  // To "WhyChooseUs" Home page style:
  // <div className="group border border-slate-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white relative overflow-hidden">
  //   <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:bg-primary/10 transition-colors"></div>
  //   <div className="w-14 h-14 bg-[color]-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
  //     <[ICON] className="w-7 h-7 text-[color]-500" />
  //   </div>
  //   <h3 className="text-xl font-bold text-brand-marine mb-4 group-hover:text-primary transition-colors">[TITLE]</h3>
  //   <p className="text-slate-600 leading-relaxed">
  //     [DESC]
  //   </p>
  // </div>

  const regexWhy = /<div className="bg-slate-50 rounded-\[2rem\] p-8 hover:shadow-lg transition-all duration-300">\s*<div className="w-14 h-14 bg-([a-z]+)-100 rounded-xl flex items-center justify-center mb-6">\s*<([A-Za-z0-9]+) className="w-7 h-7 text-[a-z]+-\d00" \/>\s*<\/div>\s*<h3 className="text-2xl font-bold text-brand-marine mb-4">(.*?)<\/h3>/g;

  content = content.replace(regexWhy, (match, color, icon, title) => {
    return `<div className="group border border-slate-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-${color}-500/5 rounded-bl-[100px] -z-10 group-hover:bg-${color}-500/10 transition-colors"></div>
              <div className="w-14 h-14 bg-${color}-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <${icon} className="w-7 h-7 text-${color}-600" />
              </div>
              <h3 className="text-xl font-bold text-brand-marine mb-4 group-hover:text-${color}-600 transition-colors">${title}</h3>`;
  });

  // Convert generic "bg-slate-50" sections to "bg-white" and vice versa if needed to match Home?
  // Home: Hero -> bg-gradient, Specialties -> bg-white, WhyChooseUs -> bg-slate-50, Testimonials -> bg-white.
  // Actually, we can fix the heading styles too.
  // "The Cover You Need, All In One Place" formatting:
  // <div className="inline-flex items-center gap-2 bg-blue-100 text-primary px-3 py-1 rounded-full mb-4 text-xs font-bold uppercase tracking-widest">
  //   Our Specialties
  // </div>
  // Wait, doing this via regex globally could be tricky, but we can do it for the "Product Wordings" and "Key Features" sections accurately.

  const sectionH2Regex = /<div className="text-center mb-16 max-w-([a-z0-9]+) mx-auto">\s*<h2 className="text-3xl md:text-4xl font-bold text-brand-marine mb-4">(Key Features of .*?|Why Choose .*?|Product Wordings .*?|Comprehensive .*?)<\/h2>\s*<p className="text-lg text-slate-600">(.*?)<\/p>\s*<\/div>/g;
  content = content.replace(sectionH2Regex, (match, mw, title, desc) => {
    let preTag = "Coverage Details";
    if (title.includes('Why Choose')) preTag = "Why Choose Us";
    if (title.includes('Product Wordings')) preTag = "Expert Brokerage";
    return `<div className="text-center mb-16 max-w-${mw} mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-primary px-3 py-1 rounded-full mb-4 text-xs font-bold uppercase tracking-widest">
              ${preTag}
            </div>
            <h2 className="font-heading text-4xl font-bold text-brand-marine mb-4">
              ${title}
            </h2>
            <p className="text-slate-600">
              ${desc}
            </p>
          </div>`;
  });

  // Adding internal links!
  // At the bottom of the page, right before CTAContact:
  if (!content.includes('Related Retail Plans')) {
      const otherPages = retailPages.filter(p => p !== slug);
      // create a nice links section matching Home page styling
      const linksHtml = `
      {/* Internal Links for SEO and Navigation */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="layout-container">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-brand-marine mb-4">Explore Related Retail Plans</h2>
            <p className="text-slate-600">Discover comprehensive protection plans tailored for your personal and family needs.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            ${otherPages.map(p => `
              <Link href="/retail/${p}" className="bg-slate-50 border border-slate-200 hover:border-primary hover:shadow-md text-brand-marine px-6 py-3 rounded-full font-medium transition-all text-sm flex items-center gap-2 group">
                <span className="capitalize group-hover:text-primary transition-colors">${p.replace(/-/g, ' ')}</span>
                <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            `).join('')}
          </div>
        </div>
      </section>
      `;
      content = content.replace('<CTAContact />', linksHtml + '\n      <CTAContact />');
  }

  // Find Add-on Cover lists, if any, and convert to use Tailwind styling better
  // we can add a button "Let's Talk" to the cards 
  // Let's add a button at the bottom of the card content!
  content = content.replace(/<\/p>(\s*(?:<ul[\s\S]*?<\/ul>\s*<p[\s\S]*?<\/p>\s*)?)\s*<\/div>\s*<\/div>/g, 
  `</p>$1
                  <div className="mt-8 pt-4 border-t border-slate-100/50">
                    <Link href="/who-we-are#contact-us" className="inline-flex items-center gap-2 text-sm font-bold text-brand-marine hover:text-primary transition-colors">
                      Discuss this coverage
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>`
  );

  fs.writeFileSync(pPath, content);
  console.log('Updated', slug);
});
