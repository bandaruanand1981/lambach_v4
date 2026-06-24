const fs = require('fs');
const glob = require('glob');

const files = glob.sync('app/life/*/page.tsx');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Let's replace any instance of 'p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent ' 
  // that does not have 'h-full'.
  
  // A regex to match these inner classes safely
  content = content.replace(/p-8 rounded-\[2rem\] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent (hover:border-[a-z0-9]+-[0-9]+)(?! flex-1 h-full)/g, 'p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent $1 h-full');

  // And for the third section ("Benefits Section")
  // <div className="bg-blue-50 flex flex-col items-center text-center p-8 rounded-[2rem] border border-transparent hover:shadow-lg transition-all group hover:border-blue-100">
  content = content.replace(/(bg-[a-z0-9]+-[0-9]+ flex flex-col items-center text-center p-8 rounded-\[2rem\] border border-transparent hover:shadow-lg transition-all group hover:border-[a-z0-9]+-[0-9]+)(?! h-full)/g, '$1 h-full');


  fs.writeFileSync(file, content, 'utf8');
  console.log('Updated ' + file);
});
