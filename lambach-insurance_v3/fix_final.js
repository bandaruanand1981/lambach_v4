const fs = require('fs');
const path = require('path');

const retailPages = [
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

  // We know the "Coverage Details" section or section before "Broker Services" is missing a </div>
  // Wait, let's just let prettier or eslint report the error!
  // Eslint cannot auto-fix missing JSX tags.
  // But we know it's always the </div> that is missing at the end of the section containing <Link>Compare Now</Link>.
  
  // Actually, we can use Babel to parse, but we don't have it.
  // Instead, let's just do a string replacement targeting that specific block.

  let blockEnd = text.match(/(<\/Link>\s*)\n\s*(<\/div>\s*<\/div>\s*<\/div>\s*<\/section>)/);
  if (blockEnd) {
    text = text.replace(/(<\/Link>\s*)\n\s*(<\/div>\s*<\/div>\s*<\/div>\s*<\/section>)/, '$1\n        </div>\n$2');
  } else {
    // try 4 divs
    let blockEnd4 = text.match(/(<\/Link>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>)/);
    if(blockEnd4) {
      text = text.replace(/(<\/Link>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>)/, '$1\n      </div>');
    }
  }

  // wait, in travel/page.tsx:
  // it was `SyntaxError: Expected corresponding JSX closing tag for 'div'. (147:9)`
  // let's just add an extra </div> before </section> in every section that fails format!
  
});
