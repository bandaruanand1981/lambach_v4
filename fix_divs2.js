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

  // Fix Intro section
  text = text.replace(/referrerPolicy="no-referrer"\s*\/>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/g, 'referrerPolicy="no-referrer"\n              />\n            </div>\n          </div>\n        </div>\n      </section>');
  text = text.replace(/referrerPolicy="no-referrer"\s*\/>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/g, 'referrerPolicy="no-referrer"\n              />\n            </div>\n          </div>\n        </div>\n      </section>');

  // Fix Overview section in health/page.tsx
  text = text.replace(/<\/h4>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/g, '</h4>\n                 </div>\n               </div>\n            </div>\n          </div>\n        </div>\n      </section>');

  // Fix Why Choose Us ending. Wait, in add_images_to_whychoose.js I replaced it to be exactly 4 </div>s. Let's see if that's correct:
  // <section>
  //   <div layout-container>
  //     <div grid lg:grid-cols-2>
  //       <div relative>...</div>
  //       <div>
  //         ... h2 ...
  //         <div grid grid-cols-1>
  //            <div flex> ... </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </section>
  // So:
  //         </div> <!-- closes grid grid-cols-1 -->
  //       </div> <!-- closes outer div for text col -->
  //     </div> <!-- closes grid lg:grid-cols-2 -->
  //   </div> <!-- closes layout-container -->
  // </section>
  // My replace put: </div></div></div></div></section> - this is precisely 4! So Why Choose Us is correct!
  
  // Closing section
  text = text.replace(/<\/p>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/g, '</p>\n        \n              </div>\n            </div>\n          </div>\n        </div>\n      </section>');

  fs.writeFileSync(pPath, text);
});
