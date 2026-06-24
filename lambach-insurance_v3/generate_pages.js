const fs = require('fs');
const path = require('path');

const pagesToCreate = [
  // Industries
  '/app/industries/power-engineering/page.tsx',
  '/app/industries/chemical/page.tsx',
  '/app/industries/it/page.tsx',
  '/app/industries/aviation/page.tsx',
  '/app/industries/agri-business/page.tsx',
  '/app/industries/entertainment/page.tsx',
  
  // Corporate
  '/app/corporate/engineering/page.tsx',
  '/app/corporate/property/page.tsx',
  '/app/corporate/marine/page.tsx',
  '/app/corporate/marine-hull/page.tsx',
  '/app/corporate/liability/page.tsx',
  '/app/corporate/employee-benefits/page.tsx',
  '/app/corporate/group-mediclaim/page.tsx',
  '/app/corporate/group-personal-accident/page.tsx',
  '/app/corporate/credit/page.tsx',
  '/app/corporate/affinity/page.tsx',
  '/app/corporate/warranty/page.tsx',
  '/app/corporate/stop/page.tsx',

  // Retail
  '/app/retail/motor/page.tsx',
  '/app/retail/health/page.tsx',
  '/app/retail/individual-mediclaim/page.tsx',
  '/app/retail/personal-accident/page.tsx',
  '/app/retail/home/page.tsx',
  '/app/retail/travel/page.tsx',
  '/app/retail/critical-illness/page.tsx',

  // Life
  '/app/life/term/page.tsx',
  '/app/life/group-term/page.tsx',
  '/app/life/endowment/page.tsx',
  '/app/life/pension/page.tsx',
  '/app/life/keyman/page.tsx'
];

pagesToCreate.forEach(filePath => {
  const fullPath = path.join(process.cwd(), filePath);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Derive title from route
  const slug = path.basename(dir);
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const content = `import PageHero from '@/components/PageHero';
import CTAContact from '@/components/CTAContact';

export default function ${title.replace(/\s+/g, '')}Page() {
  return (
    <>
      <PageHero 
        title="${title}" 
        description="Detailed information about ${title} will be available soon."
      />
      <section className="py-24 bg-white">
        <div className="layout-container text-center">
          <p className="text-slate-600 text-lg">
            This is a placeholder for the ${title} page. Content is under development.
          </p>
        </div>
      </section>
      <CTAContact />
    </>
  );
}
`;

  // Only write if it doesn't exist
  if (!fs.existsSync(fullPath)) {
    fs.writeFileSync(fullPath, content);
    console.log(`Created: ${filePath}`);
  }
});
