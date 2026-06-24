const fs = require('fs');
const path = require('path');

const retailPages = [
  { slug: 'motor', title: 'Motor Insurance' },
  { slug: 'health', title: 'Health Insurance' },
  { slug: 'individual-mediclaim', title: 'Individual Mediclaim Insurance' },
  { slug: 'personal-accident', title: 'Personal Accident Insurance' },
  { slug: 'home', title: 'Home Insurance' },
  { slug: 'travel', title: 'Travel Insurance' },
  { slug: 'critical-illness', title: 'Critical Illness Insurance' }
];

const injectSection = () => {
  retailPages.forEach(page => {
    const pPath = path.join('app', 'retail', page.slug, 'page.tsx');
    if (!fs.existsSync(pPath)) return;

    let content = fs.readFileSync(pPath, 'utf8');

    // Skip if already injected
    if (content.includes('Explore Other Retail Insurance Solutions')) return;

    // Create the links block excluding the current page
    const otherPages = retailPages.filter(p => p.slug !== page.slug);
    
    const relatedHtml = `
      {/* Related Coverages */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="layout-container">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-marine mb-4">Explore Other Retail Insurance Solutions</h2>
            <p className="text-slate-600">Discover comprehensive protection plans tailored for your personal and family needs.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            ${otherPages.map(p => `
              <Link href="/retail/${p.slug}" className="bg-slate-50 border border-slate-200 hover:border-primary hover:bg-primary/5 text-brand-marine px-6 py-3 rounded-full font-medium transition-all text-sm flex items-center gap-2">
                ${p.title}
                <ArrowRight className="w-4 h-4 opacity-70" />
              </Link>
            `).join('')}
          </div>
        </div>
      </section>
    `;

    // Replace before CTAContact
    content = content.replace('<CTAContact />', relatedHtml + '\n\n      <CTAContact />');

    fs.writeFileSync(pPath, content);
    console.log('Injected related coverages into ' + page.slug);
  });
};

injectSection();
