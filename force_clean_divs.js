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
  let text = fs.readFileSync(pPath, 'utf8');

  // Let's replace the end of Coverage Section strictly.
  // We know it ends with the last card. 
  // <Link ...>Compare Now</Link>
  // </div>
  // </div>
  // </div>
  // (extra divs)
  // </section>

  // We can target the exact end of the Coverage section by looking for the last "Compare Now" button before the "Why Choose Us" section.
  
  const sections = text.split(/(?=<section)/g);
  for (let i = 0; i < sections.length; i++) {
    let sec = sections[i];
    
    // Coverage Details section check:
    if (sec.includes('Coverage Details')) {
       // It ends with:
       //                   </Link>
       //                 </div>
       //               </div>
       //             </div>
       // followed by some number of </div> and </section>
       
       sec = sec.replace(/<\/Link>(\s*<\/div>\s*<\/div>\s*<\/div>)[\s\S]*?(<\/section>)/, '</Link>$1\n          </div>\n        </div>\n      $2');
       sections[i] = sec;
    }
    
    // Also, "Product Wordings and Insurance Broker Services" in motor ends with:
    //                   </p>
    //                 </div>
    //               </div>
    //followed by <div...> or </section>
    if (sec.includes('Product Wordings and Insurance Broker Services')) {
       sec = sec.replace(/<\/p>\s*<\/div>\s*<\/div>[\s\S]*?(<\/section>)/, '</p>\n            </div>\n          </div>\n        </div>\n      </section>');
       sections[i] = sec;
    }
    
    // Intro Section check: ends with Image in relative aspect.
    //             />
    //           </div>
    if (sec.includes('aspect-[4/3]') && sec.includes('Intro Section') || sec.includes('Introduction to')) {
       sec = sec.replace(/referrerPolicy="no-referrer"(\s*\/>\s*<\/div>)[\s\S]*?(<\/section>)/, 'referrerPolicy="no-referrer"$1\n          </div>\n        </div>\n      $2');
       sections[i] = sec;
    }

  }

  fs.writeFileSync(pPath, sections.join(''));
  console.log('Cleaned up structure for', slug);
});
