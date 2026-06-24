const fs = require('fs');
const glob = require('glob');

const files = glob.sync('app/**/*.tsx');
files.forEach(f => {
  let text = fs.readFileSync(f, 'utf8');
  let original = text;
  
  text = text.replace(/individual's/g, "individual&apos;s");

  if (text !== original) {
    fs.writeFileSync(f, text);
    console.log('Fixed individual quotes in', f);
  }
});
