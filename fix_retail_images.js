const fs = require('fs');
const glob = require('glob');

const mapping = {
  'motor': {
    hero: '1541888086425-d81bb19240f5', // engineering / mechanics
    intro: '1542385151-efd9000785a0'  // marine-hull / transit
  },
  'health': {
    hero: '1504439468489-c8920d796a29', 
    intro: '1532187863486-abf9db090729'
  },
  'individual-mediclaim': {
    hero: '1552664730-d307ca884978', // employee benefits
    intro: '1516321318423-f06f85e504b3'
  },
  'personal-accident': {
    hero: '1589391886645-d51941baf7fb', // liability
    intro: '1556761175-5973dc0f32b7' // affinity
  },
  'home': {
    hero: '1486406146926-c627a92ad1ab', // property
    intro: '1611273426858-450d8ce4c227'
  },
  'travel': {
    hero: '1436491865332-7a61a109cc05', // aviation
    intro: '1459749411175-04bf5292ceea' 
  },
  'critical-illness': {
    hero: '1504917595217-d4dc5ebe6122',
    intro: '1500382017468-9049fed747ef'
  }
};

const commonValues = [
  '1576091160399-112ba8d25d1d',   // Why Lambach
  '1516574187841-cb9cc2ca948b',   // Protect your future
  '1542281286-9e0a16bb7366',      // default hero
  '1518544801976-3e159e50e5bb',   // default intro
  '1576091160399-11cb730c5cb2',
  '1584982751601-97d883c610f4'
];

Object.keys(mapping).forEach(cat => {
  const file = 'app/retail/' + cat + '/page.tsx';
  let text = fs.readFileSync(file, 'utf8');

  // Replace default hero (first Unsplash image encountered)
  let count = 0;
  text = text.replace(/photo-([a-zA-Z0-9\-]+)/g, (match, id) => {
    // If it's one of the feature card images (1505751172876-fa1923c5c528), don't touch so we can remove the block later, or actually we will remove the div anyway.
    
    // We only want to replace the FIRST match (Hero) and SECOND match (Intro)
    // The default ids are in commonValues, so if we see one of them (and not feature card):
    if (id === '1542281286-9e0a16bb7366' || id === '1576091160399-11cb730c5cb2') {
       return 'photo-' + mapping[cat].hero;
    }
    if (id === '1518544801976-3e159e50e5bb' || id === '1584982751601-97d883c610f4') {
       return 'photo-' + mapping[cat].intro;
    }
    return match;
  });

  // Remove the feature cards image block entirely
  // It looks like:
  // <div className="relative hidden lg:block w-28 h-28 flex-shrink-0 rounded-2xl overflow-hidden shadow-sm group-hover:-translate-y-1 transition-transform"> ... </div>
  const regex = /<div className="relative hidden lg:block w-28 h-28 flex-shrink-0 rounded-2xl overflow-hidden shadow-sm group-hover:-translate-y-1 transition-transform">[\s\S]*?<\/div>/g;
  text = text.replace(regex, '');

  fs.writeFileSync(file, text);
  console.log('Fixed', file);
});
