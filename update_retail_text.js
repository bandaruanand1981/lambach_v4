const fs = require('fs');

const paragraphs = {
  'individual-mediclaim': [
    'Our Individual Mediclaim Insurance serves as a vital safety net, protecting your personal health and savings from unpredictable medical emergencies. Rising healthcare and hospitalization costs can quickly derail your financial stability. Mediclaim ensures you only focus on recovery instead of extensive medical bills.',
    'With comprehensive hospitalization coverage, you gain access to top-tier cashless treatment at network hospitals. A structured and robust health insurance plan protects you significantly during times of sudden distress.'
  ],
  'personal-accident': [
    'Personal Accident Insurance is a critical financial safeguard designed specifically to protect you and your family against the severe financial repercussions of accidental injuries, total disability, or accidental demise.',
    'No one can predict an accident, but you can secure your future. This policy explicitly offers tremendous monetary backing, including immediate lump sum payouts and income replacement, ensuring that a physical setback does not become a lasting economic blow.'
  ],
  'home': [
    'Home Insurance serves as a comprehensive shield for your most valuable asset. It protects physical properties and their precious contents against an array of natural perils, devastating fires, burglary, and unforeseen structural damages.',
    'With urbanization bringing varying degrees of domestic risks, securing your dwelling is absolutely essential. Our robust home insurance policy offers tremendous financial remediation to rebuild and restore your property quickly without wiping out your savings.'
  ],
  'travel': [
    'Travel Insurance acts as an essential companion for your global and domestic journeys. It serves as a vital safeguard against unforeseen trip cancellations, extensive flight delays, sudden medical emergencies abroad, and lost baggage.',
    'Navigating foreign terrain brings its own set of unpredictable risks. A precisely structured travel insurance policy provides swift financial assistance and constant 24/7 support globally to minimize the stress of travel disruptions.'
  ],
  'critical-illness': [
    'Critical Illness Insurance represents a specialized financial safeguard designed exclusively for major medical diagnoses. Treatable but severe lifestyle diseases like cancer or stroke demand aggressive, expensive care and often cause significant loss of income.',
    'This policy acts differently from standard mediclaim by providing a tremendously vital massive lump-sum payout unconditionally upon the first diagnosis. It unequivocally secures your lifestyle and well-being during a prolonged fight.'
  ]
};

Object.keys(paragraphs).forEach(cat => {
  const file = 'app/retail/' + cat + '/page.tsx';
  let text = fs.readFileSync(file, 'utf8');

  // Replace the exact 2 paragraphs
  const regex1 = /This policy serves as a vital financial safeguard against[\s\S]*?economic stress\./g;
  const regex2 = /With rapid urbanization and astronomically rising costs[\s\S]*?prompt recoveries dynamically\./g;

  text = text.replace(regex1, paragraphs[cat][0]);
  text = text.replace(regex2, paragraphs[cat][1]);

  fs.writeFileSync(file, text);
  console.log('Updated paragraphs for', cat);
});
