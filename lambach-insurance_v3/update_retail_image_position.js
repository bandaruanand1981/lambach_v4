const fs = require('fs');
const glob = require('glob');

const files = glob.sync('app/retail/*/page.tsx');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // We are looking for:
  // <div className="grid lg:grid-cols-2 gap-12 items-center">
  //   <div>
  //     <h1...
  
  // Replace the first '<div>' after the grid
  let gridRegex = /(<div className="grid lg:grid-cols-2 gap-12 items-center">[\s\n]*)<div>/m;
  content = content.replace(gridRegex, '$1<div className="order-2 lg:order-2">');

  // Replace the FIRST 'relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl'
  // Let's use a regex that matches only if it hasn't been modified:
  let imageWrapperRegex = /<div className="relative w-full aspect-\[4\/3\] rounded-3xl overflow-hidden shadow-2xl">/;
  content = content.replace(imageWrapperRegex, '<div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-1">');

  fs.writeFileSync(file, content, 'utf8');
  console.log('Updated ' + file);
});
