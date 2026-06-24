const { execSync } = require('child_process');
execSync('git checkout -- app/retail');
console.log('Restored files from git!');
