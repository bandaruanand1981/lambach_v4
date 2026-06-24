const fs = require('fs');
const glob = require('glob');

const files = glob.sync('app/life/*/page.tsx');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  const heroMatch = content.match(/<PageHero[\s\S]*?\/>/);
  const ctaMatch = content.match(/<CTAContact \/>/);
  
  if (!heroMatch || !ctaMatch) return;
  
  const heroIndex = heroMatch.index + heroMatch[0].length;
  const ctaIndex = ctaMatch.index;
  
  const originalBody = content.substring(heroIndex, ctaIndex);
  
  // 1. Intro Section
  const introImgRegex = /<div className="w-full lg:w-5\/12 relative">[\s\S]*?<Image\s+src="([^"]+)"\s+alt="([^"]+)"/;
  const introImgMatch = originalBody.match(introImgRegex);
  const imgSrc = introImgMatch[1];
  const imgAlt = introImgMatch[2];
  
  const introTitleRegex = /<h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-marine mb-8 leading-tight">\s*([\s\S]*?)\s*<\/h2>/;
  const introTitleMatch = originalBody.match(introTitleRegex);
  const introTitle = introTitleMatch[1];
  
  const introOvertitleRegex = /<div className="inline-flex items-center gap-2 bg-blue-100 text-primary px-3 py-1 rounded-full mb-4 text-xs font-bold uppercase tracking-widest">\s*([\s\S]*?)\s*<\/div>/;
  const introOvertitleMatch = originalBody.match(introOvertitleRegex);
  const introOvertitle = introOvertitleMatch[1];
  
  const introParasRegex = /<div className="space-y-4 mb-12 text-lg text-slate-600 leading-relaxed">([\s\S]*?)<\/div>\s*<div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">/;
  const introParasMatch = originalBody.match(introParasRegex);
  let introParas = introParasMatch[1].trim();
  introParas = introParas.replace(/<p>/g, '<p className="text-lg leading-relaxed">');
  
  // 2. Intro Features (4 mini cards)
  const miniCardsBlockRegex = /<div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">([\s\S]*?)<\/div>\s*<div className="mt-12 pt-10 border-t border-slate-100">/;
  const miniCardsBlockMatch = originalBody.match(miniCardsBlockRegex);
  
  const miniCardRegex = /<div className="bg-([a-z]+)-50 p-6 rounded-3xl border border-transparent shadow-sm group hover:shadow-md transition-all hover:border-[a-z]+-100 flex flex-col h-full">\s*<div className="[^"]+">\s*<([A-Za-z0-9]+) className="[^"]+" \/>\s*<\/div>\s*<h4 className="font-bold text-lg text-brand-marine mb-2">\s*([\s\S]*?)\s*<\/h4>\s*<p className="text-sm text-slate-700 leading-relaxed">\s*([\s\S]*?)\s*<\/p>\s*<\/div>/g;
  
  const introFeatures = [];
  let match;
  while ((match = miniCardRegex.exec(miniCardsBlockMatch[1])) !== null) {
      introFeatures.push({
          color: match[1],
          icon: match[2],
          title: match[3],
          desc: match[4]
      });
  }
  
  // 3. Role of Brokers Section
  const roleTitleMatch = originalBody.match(/<h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-marine mb-4">\s*([\s\S]*?)\s*<\/h2>\s*<p className="text-slate-600">\s*([\s\S]*?)\s*<\/p>/);
  const roleTitle = roleTitleMatch[1];
  const roleDesc = roleTitleMatch[2];
  
  const roleCardsBlockRegex = /<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">([\s\S]*?)<\/div>\s*<\/div>\s*<\/section>\s*\{\/\* Benefits Section \*\/\}/;
  const roleCardsBlockMatch = originalBody.match(roleCardsBlockRegex);
  
  const roleCardRegex = /<div className="bg-([a-z]+)-50 p-8 rounded-\[2rem\] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[a-z]+-100 h-full">\s*<div className="flex items-start justify-between mb-8 gap-4">\s*<div className="flex-1">\s*<h3 className="font-bold text-xl text-brand-marine mb-3">\s*([\s\S]*?)\s*<\/h3>\s*<p className="text-sm text-slate-700 leading-relaxed">\s*([\s\S]*?)\s*<\/p>\s*<\/div>\s*<div className="w-16 h-16 flex-shrink-0 bg-white\/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:-translate-y-1 transition-transform">\s*<([A-Za-z0-9]+) className="w-7 h-7 text-[a-z]+-500" \/>\s*<\/div>\s*<\/div>\s*<\/div>/g;
  
  const roleFeatures = [];
  while ((match = roleCardRegex.exec(roleCardsBlockMatch[1])) !== null) {
      roleFeatures.push({
          color: match[1],
          title: match[2],
          desc: match[3],
          icon: match[4]
      });
  }
  
  // 4. Benefits Section
  const benefitsTitleMatch = originalBody.match(/<h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-marine mb-4">\s*([\s\S]*?)\s*<\/h2>/);
  const benefitsTitle = benefitsTitleMatch[1];
  
  const benefitsCardsBlockRegex = /<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">([\s\S]*?)<\/div>\s*<div className="mt-24 bg-gradient-to-br from-brand-marine to-slate-800/;
  const benefitsCardsBlockMatch = originalBody.match(benefitsCardsBlockRegex);
  
  const benefitsCardRegex = /<div className="bg-([a-z]+)-50 flex flex-col items-center text-center p-8 rounded-\[2rem\] border border-transparent hover:shadow-lg transition-all group hover:border-[a-z]+-100 h-full">\s*<div className="w-16 h-16 rounded-2xl bg-white\/60 flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform shadow-sm">\s*<([A-Za-z0-9]+) className="w-8 h-8 text-[a-z]+-500" \/>\s*<\/div>\s*<h3 className="font-bold text-lg text-brand-marine mb-4">\s*([\s\S]*?)\s*<\/h3>\s*<p className="text-slate-700 text-sm leading-relaxed">\s*([\s\S]*?)\s*<\/p>\s*<\/div>/g;
  
  const benefitsFeatures = [];
  while ((match = benefitsCardRegex.exec(benefitsCardsBlockMatch[1])) !== null) {
      benefitsFeatures.push({
          color: match[1],
          icon: match[2],
          title: match[3],
          desc: match[4]
      });
  }
  
  // 5. CTA Section
  const ctaTitleMatch = originalBody.match(/<h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">\s*([\s\S]*?)\s*<\/h3>/);
  const ctaTitle = ctaTitleMatch[1];
  
  const ctaOvertitleMatch = originalBody.match(/<div className="inline-flex items-center gap-2 bg-white\/10 text-white px-3 py-1 rounded-full mb-6 text-xs font-bold uppercase tracking-widest backdrop-blur-md">\s*([\s\S]*?)\s*<\/div>/);
  const ctaOvertitle = ctaOvertitleMatch[1] || "Secure Your Future";
  
  const ctaDescMatch = originalBody.match(/<p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-xl">\s*([\s\S]*?)\s*<\/p>/);
  const ctaDesc = ctaDescMatch[1];
  
  let newBody = `
      <section className="py-24 bg-slate-50">
        <div className="layout-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-2">
              <h1 className="text-3xl md:text-4xl font-bold text-brand-marine mb-6">
                \${introTitle}
              </h1>
              <div className="prose max-w-none text-slate-600 space-y-6">
                \${introParas}
              </div>
            </div>
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-1">
              <Image
                src="\${imgSrc}"
                alt="\${imgAlt}"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="layout-container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-primary px-3 py-1 rounded-full mb-4 text-xs font-bold uppercase tracking-widest">
              Core Principles
            </div>
            <h2 className="font-heading text-4xl font-bold text-brand-marine mb-4">
              \${introOvertitle === "Overview" ? "Important Product Features" : "Important Features"}
            </h2>
            <p className="text-slate-600">
              Essential components that form the foundation of a robust policy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
`;

  introFeatures.forEach(feature => {
      newBody += `
            <div className="bg-\${feature.color}-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-6">
                <div className="flex-1 flex flex-col items-start">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">
                    \${feature.title}
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 sm:hidden">
                <\${feature.icon} className="w-8 h-8 text-\${feature.color}-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-600 leading-relaxed">
                  \${feature.desc}
                </p>
                <div className="mt-6">
                  <Link
                    href="/who-we-are#contact-us"
                    className="bg-white border border-slate-200 text-primary px-4 py-2 rounded-full text-xs font-bold shadow-sm group-hover:bg-primary group-hover:text-white transition-colors inline-block w-max"
                  >
                    Compare Now
                  </Link>
                </div>
              </div>
            </div>`;
  });

  newBody += `
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="layout-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-xl ring-1 ring-slate-100 hidden lg:block">
              <Image
                src="\${imgSrc}"
                alt="\${imgAlt}"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-4">
                Why Lambach?
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-marine mb-10">
                \${roleTitle}
              </h2>
              <div className="grid grid-cols-1 gap-10">
`;

  roleFeatures.forEach((feature, idx) => {
      newBody += `
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xl">\${idx + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-marine mb-2">
                      \${feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      \${feature.desc}
                    </p>
                  </div>
                </div>`;
  });
  
  newBody += `
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="layout-container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-primary px-3 py-1 rounded-full mb-4 text-xs font-bold uppercase tracking-widest">
              Benefits
            </div>
            <h2 className="font-heading text-4xl font-bold text-brand-marine mb-4">
              \${benefitsTitle}
            </h2>
            <p className="text-slate-600">
              Discover the advantages of securing your insurance through our expert brokers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
`;

  benefitsFeatures.forEach(feature => {
      newBody += `
            <div className="bg-\${feature.color}-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-6">
                <div className="flex-1 flex flex-col items-start">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">
                    \${feature.title}
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 sm:hidden">
                <\${feature.icon} className="w-8 h-8 text-\${feature.color}-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-600 leading-relaxed">
                  \${feature.desc}
                </p>
              </div>
            </div>`;
  });

  newBody += `
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-marine text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="layout-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/20">
              <Image
                src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&q=80&w=1200"
                alt="Protect Your Future"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 lg:order-2 text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                \${ctaTitle}
              </h2>
              <div className="space-y-6 text-slate-300">
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  \${ctaDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>\n\n    `;
      
  const finalContent = content.substring(0, heroIndex) + "\n\n" + newBody + content.substring(ctaIndex);
  fs.writeFileSync(file, finalContent, 'utf8');
  console.log("Processed " + file);
});
