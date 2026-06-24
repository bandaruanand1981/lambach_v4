const fs = require('fs');
const glob = require('glob');

const files = glob.sync('app/life/*/page.tsx');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Update the grid to stretch items
  content = content.replace(/className="grid grid-cols-1 md:grid-cols-2 gap-4"/g, 'className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch"');
  
  // Add flex and h-full to the cards
  content = content.replace(/className="(bg-[a-z0-9]+-[0-9]+ p-6 rounded-3xl border border-transparent shadow-sm group hover:shadow-md transition-all hover:border-[a-z0-9]+-[0-9]+)"/g, 'className="$1 flex flex-col h-full"');

  fs.writeFileSync(file, content, 'utf8');
  console.log('Updated ' + file);
});
