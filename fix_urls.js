const fs = require('fs');

// 1. Fix Entertainment page
const entFile = 'app/industries/entertainment/page.tsx';
let entContent = fs.readFileSync(entFile, 'utf8');

entContent = entContent.replace(/1540039155733-d730a53ffb46/g, '1459749411175-04bf5292ceea'); // Event
entContent = entContent.replace(/1450101499163-c8848c66cb85/g, '1454165804606-c3d57bc86b40'); // Errors
entContent = entContent.replace(/1493225457124-a1a2a5f0b4d4/g, '1514362545857-3bc16c4c7d1b'); // Non-Appearance
entContent = entContent.replace(/1516280440502-36c11d6190be/g, '1598899134739-24c46f58b8c0'); // Equipment -> Using another camera one or picsum
entContent = entContent.replace(/1516280440502-36c11d6190be/g, '1514362545857-3bc16c4c7d1b');
entContent = entContent.replace(/1470229722913-7c090be5c5b2/g, '1492684223066-81342ee5ff30'); // Venue

// Wait, I can just replace all missing Unsplash with picsum.
entContent = entContent.replace(/url: "https:\/\/images.unsplash.com\/photo-1540039155733[^"]*"/g, 'https://picsum.photos/seed/ent1/800/600');
entContent = entContent.replace(/https:\/\/images.unsplash.com\/photo-1540039155733-d730a53ffb46\?auto=format&fit=crop&q=80&w=1200/g, 'https://picsum.photos/seed/enthero/1200/800');
entContent = entContent.replace(/https:\/\/images.unsplash.com\/photo-1540039155733-d730a53ffb46\?auto=format&fit=crop&q=80&w=800/g, 'https://picsum.photos/seed/ent1/800/600');
entContent = entContent.replace(/1450101499163-c8848c66cb85/g, '1454165804606-c3d57bc86b40'); 
entContent = entContent.replace(/1493225457124-a1a2a5f0b4d4/g, '1514362545857-3bc16c4c7d1b'); 
entContent = entContent.replace(/1516280440502-36c11d6190be/g, '1459749411175-04bf5292ceea'); 
entContent = entContent.replace(/1470229722913-7c090be5c5b2/g, '1492684223066-81342ee5ff30'); 

fs.writeFileSync(entFile, entContent);

// 2. Fix images.ts
const imgFile = 'lib/images.ts';
let imgContent = fs.readFileSync(imgFile, 'utf8');

imgContent = imgContent.replace(/https:\/\/lh3\.googleusercontent\.com\/aida\/AP1\w+/g, (match) => {
  return 'https://picsum.photos/seed/' + Math.random().toString(36).substring(7) + '/800/600';
});

fs.writeFileSync(imgFile, imgContent);

console.log('Fixed URLs');
