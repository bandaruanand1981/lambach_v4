const fs = require('fs');
const path = require('path');

const buttonHtml = `
                  <div className="mt-6">
                    <Link href="/who-we-are#contact-us" className="bg-white border border-slate-200 text-primary px-4 py-2 rounded-full text-xs font-bold shadow-sm group-hover:bg-primary group-hover:text-white transition-colors inline-block w-max">
                      Compare Now
                    </Link>
                  </div>`;

const retailPages = [
  'motor', 'health', 'individual-mediclaim', 'personal-accident', 
  'home', 'travel', 'critical-illness'
];

retailPages.forEach(slug => {
  const pPath = path.join('app', 'retail', slug, 'page.tsx');
  let content = fs.readFileSync(pPath, 'utf8');

  // We only want to target the Coverage Details cards Grid.
  // The grid comes right after "Key Features of"
  const startIdx = content.indexOf('Key Features of');
  if (startIdx === -1) return;
  
  const endIdx = content.indexOf('Why Choose Lambach Insurance Brokers');
  if (endIdx === -1) return;

  let before = content.substring(0, startIdx);
  let targetSection = content.substring(startIdx, endIdx);
  let after = content.substring(endIdx);

  // In targetSection, replace all `</p>\s*<\/div>\s*<\/div>` with `</p>${buttonHtml}</div></div>`
  targetSection = targetSection.replace(/<\/p>(\s*)<\/div>\s*<\/div>/g, 
    `</p>$1${buttonHtml}\n                </div>\n              </div>`
  );

  fs.writeFileSync(pPath, before + targetSection + after);
  console.log('Added buttons to', slug);
});
