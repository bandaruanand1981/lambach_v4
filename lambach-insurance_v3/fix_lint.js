const fs = require('fs');
const glob = require('glob');

const files = glob.sync('app/**/*.tsx');
files.forEach(f => {
  let text = fs.readFileSync(f, 'utf8');
  let newText = text.replace(/(?<!\\)'/g, "&apos;");
  
  // Actually, wait, replacing all single quotes with &apos; in TSX might break JSX syntax...
  // A better way is using regex to find text inside tags and replace quotes there.
  // Or simply replace the known literal strings. Let's fix them manually.
});
