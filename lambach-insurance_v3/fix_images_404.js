const fs = require('fs');
const glob = require('glob');

const replacements = {
  '1542810634-71277d95dc8a': '1504439468489-c8920d796a29',
  '1556761175-5973dc0f32b7': '1552664730-d307ca884978',
};

const files = glob.sync('app/**/*.tsx');
files.forEach(f => {
  let text = fs.readFileSync(f, 'utf8');
  let original = text;
  
  for (const [bad, good] of Object.entries(replacements)) {
    text = text.replace(new RegExp(bad, 'g'), good);
  }

  if (text !== original) {
    fs.writeFileSync(f, text);
    console.log('Fixed images in', f);
  }
});
