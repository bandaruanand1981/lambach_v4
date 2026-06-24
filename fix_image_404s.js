const fs = require('fs');
const glob = require('glob');

const replacements = {
  '1576091160399-11cb730c5cb2': '1576091160399-112ba8d25d1d', // Valid substitute
  '1584982751601-97d883c610f4': '1542281286-9e0a16bb7366',
  '1549317661-bc32c58a164e': '1518544801976-3e159e50e5bb',
  '1502877338535-34cb0dd4ebd3': '1505751172876-fa1923c5c528',
  '1542382103-db2cb53b3f27': '1516574187841-cb9cc2ca948b',
  '1518712959828-5cefc599b860': '1576091160399-112ba8d25d1d'
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
