const fs = require('fs');
const path = require('path');

const dirs = ['power-engineering', 'chemical', 'it', 'aviation', 'agri-business', 'entertainment'];

for (const dir of dirs) {
  const file = `app/industries/${dir}/page.tsx`;
  let content = fs.readFileSync(file, 'utf8');

  content = content.replace(
    /Contact us today/g,
    '<Link href="/who-we-are#contact-us" className="text-primary hover:underline font-medium">Contact us today</Link>'
  );
  
  content = content.replace(
    /our team/gi,
    '<Link href="/who-we-are" className="text-primary hover:underline font-medium">Our team</Link>'
  );
  
  content = content.replace(
    /against claims/g,
    'against <Link href="/who-we-are#contact-us" className="text-primary hover:underline font-medium transition-colors">claims</Link>'
  );
  
  content = content.replace(
    /business continuity/g,
    '<Link href="/corporate" className="text-primary hover:underline font-medium transition-colors">business continuity</Link>'
  );

  fs.writeFileSync(file, content, 'utf8');
  console.log('Processed links in ' + file);
}
