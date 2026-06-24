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

  // Find the exact pattern at the end of the Coverage Details section where the extra </div> is
  // Typically it looks like:
  //                 </div>
  //               </div>
  //           </div>
  //         </div>
  //       </section>
  // Let's just remove ONE </div> before the first </section> that has 4 </div>s leading up to it, if that's the error.
  
  // Wait, let's just do a string replacement on the exact block:
  text = text.replace(/<\/Link>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/g, '</Link>\n                  </div>\n                </div>\n              </div>\n          </div>\n        </div>\n      </section>');
  
  // What if it doesn't have `<Link>` at the very end but the same structure?
  text = text.replace(/<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/g, '\n              </div>\n          </div>\n        </div>\n      </section>');

  fs.writeFileSync(pPath, text);
  console.log('Fixed div structures in', slug);
});
