const fs = require('fs');

const imgFile = 'lib/images.ts';
let imgContent = fs.readFileSync(imgFile, 'utf8');

imgContent = imgContent.replace(/url: "https:\/\/images.unsplash.com\/photo-1540039155733[^"]*"/g, 'url: "https://picsum.photos/seed/ent1/800/600"');

// Fix the bad picsum strings
imgContent = imgContent.replace(/'https:\/\/picsum\.photos\/seed\/[^']+'/g, (match) => {
  return `'https://picsum.photos/seed/${Math.random().toString(36).substring(7)}/800/600'`;
});

fs.writeFileSync(imgFile, imgContent);
console.log('Fixed images.ts');
