const fs = require('fs');
['chemical','it','aviation','agri-business','entertainment'].forEach(dir => {
  const file = 'app/industries/' + dir + '/page.tsx';
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(
    /(<PageHero\s+[\s\S]*?imageAlt=\"[^\"]*\")/g,
    '$1\n        showIndustryActions={true}'
  );
  fs.writeFileSync(file, content);
  console.log('Updated ' + file);
});
