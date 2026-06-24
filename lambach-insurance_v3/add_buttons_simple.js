const fs = require('fs');
const path = require('path');

const buttonHtml = `
               <div className="mt-6 pt-4 border-t border-slate-100/50">
                 <Link href="/who-we-are#contact-us" className="bg-white border border-slate-200 text-primary px-4 py-2 rounded-full text-xs font-bold shadow-sm hover:bg-primary hover:text-white transition-colors inline-block w-max">
                   Compare Now
                 </Link>
               </div>`;

const pages = ['individual-mediclaim', 'personal-accident', 'critical-illness'];

pages.forEach(slug => {
  const pPath = path.join('app', 'retail', slug, 'page.tsx');
  let content = fs.readFileSync(pPath, 'utf8');

  // We are going to replace `</p>\n             </div>` with `</p>\n{buttonHtml}\n             </div>`
  
  // A generic replacement that checks for exactly a card's ending structure.
  // The structure is generally `</p>\n            </div>` (with varying spaces)
  // Let's use a regex targeting `</p>` followed by spaces and a `</div>` which is immediately followed by a new card `<div className="bg-` OR the grid's closing `</div>`.
  
  // Actually, we can just replace all instances of `</p>\n            </div>` or `</p>\n             </div>` safely within the grid section.
  
  if (slug === 'individual-mediclaim') {
    const start = content.indexOf('Comprehensive Coverage Inclusions');
    const end = content.indexOf('Important Policy Conditions');
    if (start !== -1 && end !== -1) {
      let target = content.substring(start, end);
      target = target.replace(/(<\/p>)\n(\s*)<\/div>/g, `$1\n$2${buttonHtml.replace(/\n\s{15}/g, '\n' + '$2')}\n$2<\/div>`);
      content = content.substring(0, start) + target + content.substring(end);
    }
  }

  if (slug === 'personal-accident') {
    const start1 = content.indexOf('Scope of Cover');
    const end1 = content.indexOf('Summary of Benefits');
    if (start1 !== -1 && end1 !== -1) {
      let target = content.substring(start1, end1);
      target = target.replace(/(<\/p>)\n(\s*)<\/div>/g, `$1\n$2${buttonHtml.replace(/\n\s{15}/g, '\n' + '$2')}\n$2<\/div>`);
      content = content.substring(0, start1) + target + content.substring(end1);
    }
  }

  if (slug === 'critical-illness') {
    const start = content.indexOf('Key Features of Critical Illness Insurance Protection');
    const end = content.indexOf('Insurance Broker Services');
    if (start !== -1 && end !== -1) {
      let target = content.substring(start, end);
      target = target.replace(/(<\/p>)\n(\s*)<\/div>/g, `$1\n$2${buttonHtml.replace(/\n\s{15}/g, '\n' + '$2')}\n$2<\/div>`);
      content = content.substring(0, start) + target + content.substring(end);
    }
  }

  fs.writeFileSync(pPath, content);
  console.log('Added buttons to', slug);
});
