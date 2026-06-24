const fs = require('fs');
const path = require('path');

const generatePage = (title, overviewSubtitle, overviewp1, overviewp2, overviewp3, cardsData, whyChooseData, closingTitle, closingP1, closingP2, icons) => {
  return [
    "import { Metadata } from 'next';",
    "import PageHero from '@/components/PageHero';",
    "import CTAContact from '@/components/CTAContact';",
    "import { ArrowRight, CheckCircle2, ShieldAlert, " + icons.join(', ') + " } from 'lucide-react';",
    "import Link from 'next/link';",
    "import Image from 'next/image';",
    "",
    "export const metadata: Metadata = {",
    "  title: '" + title + " | Security & Coverage | Lambach Insurance Brokers',",
    "  description: 'Comprehensive " + title + " solutions to protect from rising costs and unforeseen emergencies.',",
    "};",
    "",
    "export default function " + title.replace(/\\s+/g,'') + "Page() {",
    "  return (",
    "    <>",
    "      <PageHero ",
    "        title=\"" + title + "\" ",
    "        description=\"" + overviewSubtitle + "\"",
    "        imageSrc=\"https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=1200\"",
    "        imageAlt=\"" + title + " professional coverage\"",
    "        showContactCta label=\"Retail Solution\"",
    "      />",
    "",
    "      <section className=\"py-24 bg-slate-50\">",
    "        <div className=\"layout-container\">",
    "          <div className=\"grid lg:grid-cols-2 gap-12 items-center\">",
    "            <div>",
    "              <h1 className=\"text-3xl md:text-4xl font-bold text-brand-marine mb-6\">" + title + ": Prioritizing Your Well-being</h1>",
    "              <div className=\"prose max-w-none text-slate-600 space-y-6\">",
    "                <p className=\"text-lg leading-relaxed\">" + overviewp1 + "</p>",
    "                <p className=\"text-lg leading-relaxed\">" + overviewp2 + "</p>",
    "              </div>",
    "            </div>",
    "            <div className=\"relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl\">",
    "              <Image ",
    "                src=\"https://images.unsplash.com/photo-1518544801976-3e159e50e5bb?auto=format&fit=crop&q=80&w=1200\" ",
    "                alt=\"Introduction to " + title + "\" ",
    "                fill ",
    "                className=\"object-cover hover:scale-105 transition-transform duration-700\" ",
    "                sizes=\"(max-width: 1024px) 100vw, 50vw\"",
    "                referrerPolicy=\"no-referrer\"",
    "              />",
    "            </div>",
    "          </div>",
    "        </div>",
    "      </section>",
    "",
    "      <section className=\"py-24 bg-slate-50\">",
    "        <div className=\"layout-container\">",
    "          <div className=\"text-center mb-16 max-w-3xl mx-auto\">",
    "            <div className=\"inline-flex items-center gap-2 bg-blue-100 text-primary px-3 py-1 rounded-full mb-4 text-xs font-bold uppercase tracking-widest\">",
    "              Coverage Details",
    "            </div>",
    "            <h2 className=\"font-heading text-4xl font-bold text-brand-marine mb-4\">",
    "              Key Features of " + title + "",
    "            </h2>",
    "            <p className=\"text-slate-600\">",
    "              Essential components that form the foundation of a robust " + title + " policy.",
    "            </p>",
    "          </div>",
    "",
    "          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6\">",
    ...cardsData.map((c, i) => {
      const colors = ['blue','emerald','purple','rose','orange'];
      const cName = colors[i%5];
      const span = (i === cardsData.length-1) ? " md:col-span-2 lg:col-span-2" : "";
      return [
        "            <div className=\"bg-" + cName + "-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300" + span + "\">",
        "              <div className=\"flex flex-col sm:flex-row items-start justify-between mb-4 gap-6\">",
        "                <div className=\"flex-1 flex flex-col items-start\">",
        "                  <h3 className=\"font-bold text-xl text-brand-marine mb-2\">" + c.title + "</h3>",
        "                </div>",
        "                <div className=\"relative hidden lg:block w-28 h-28 flex-shrink-0 rounded-2xl overflow-hidden shadow-sm group-hover:-translate-y-1 transition-transform\">",
        "                  <Image src=\"https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=600\" alt=\"" + c.title + "\" fill className=\"object-cover\" referrerPolicy=\"no-referrer\" sizes=\"(max-width: 768px) 112px, 112px\" />",
        "                </div>",
        "              </div>",
        "              <div className=\"flex items-center gap-3 mb-4 sm:hidden\">",
        "                 <"+c.icon+" className=\"w-8 h-8 text-" + cName + "-500\" />",
        "              </div>",
        "              <div className=\"flex-1\">",
        "                <p className=\"text-sm text-slate-600 leading-relaxed\">" + c.desc + "</p>",
        "                <div className=\"mt-6\">",
        "                  <Link href=\"/who-we-are#contact-us\" className=\"bg-white border border-slate-200 text-primary px-4 py-2 rounded-full text-xs font-bold shadow-sm group-hover:bg-primary group-hover:text-white transition-colors inline-block w-max\">",
        "                    Compare Now",
        "                  </Link>",
        "                </div>",
        "              </div>",
        "            </div>"
      ].join('\\n');
    }),
    "          </div>",
    "        </div>",
    "      </section>",
    "",
    "      <section className=\"py-24 bg-white\">",
    "        <div className=\"layout-container\">",
    "          <div className=\"grid lg:grid-cols-2 gap-16 items-center\">",
    "            <div className=\"relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-xl ring-1 ring-slate-100 hidden lg:block\">",
    "              <Image ",
    "                src=\"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000\" ",
    "                alt=\"Why Choose Lambach Insurance\" ",
    "                fill ",
    "                className=\"object-cover\" ",
    "                referrerPolicy=\"no-referrer\"",
    "              />",
    "            </div>",
    "            <div>",
    "              <div className=\"inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-4\">",
    "                Why Lambach?",
    "              </div>",
    "              <h2 className=\"text-3xl md:text-4xl font-bold text-brand-marine mb-10\">Why Choose Lambach Insurance Brokers Pvt. Ltd.</h2>",
    "              <div className=\"grid grid-cols-1 gap-10\">",
    ...whyChooseData.map((w, i) => [
        "                <div className=\"flex gap-6\">",
        "                  <div className=\"w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0\">",
        "                    <span className=\"text-primary font-bold text-xl\">" + (i+1) + "</span>",
        "                  </div>",
        "                  <div>",
        "                    <h3 className=\"text-xl font-bold text-brand-marine mb-2\">" + w.title + "</h3>",
        "                    <p className=\"text-slate-600 leading-relaxed\">" + w.desc + "</p>",
        "                  </div>",
        "                </div>"
      ].join('\\n')),
    "              </div>",
    "            </div>",
    "          </div>",
    "        </div>",
    "      </section>",
    "",
    "      <section className=\"py-20 bg-brand-marine text-white relative overflow-hidden\">",
    "        <div className=\"absolute inset-0 bg-primary/10\" />",
    "        <div className=\"layout-container relative z-10\">",
    "          <div className=\"grid lg:grid-cols-2 gap-16 items-center\">",
    "            <div className=\"order-2 lg:order-1 relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/20\">",
    "              <Image ",
    "                src=\"https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&q=80&w=1200\" ",
    "                alt=\"" + closingTitle + "\" ",
    "                fill ",
    "                className=\"object-cover hover:scale-105 transition-transform duration-700\" ",
    "                sizes=\"(max-width: 1024px) 100vw, 50vw\"",
    "                referrerPolicy=\"no-referrer\"",
    "              />",
    "            </div>",
    "            <div className=\"order-1 lg:order-2 text-left\">",
    "              <h2 className=\"text-3xl md:text-4xl font-bold mb-6 text-white\">" + closingTitle + "</h2>",
    "              <div className=\"space-y-6 text-slate-300\">",
    "                <p className=\"text-lg text-slate-300 leading-relaxed mb-6\">" + closingP1 + "</p>",
    "                <p className=\"text-lg text-slate-300 leading-relaxed\">" + closingP2 + "</p>",
    "              </div>",
    "            </div>",
    "          </div>",
    "        </div>",
    "      </section>",
    "      ",
    "      <CTAContact />",
    "    </>",
    "  );",
    "}"
  ].join('\n');
}

const pages = [
  {
    slug: 'home',
    title: 'Home Insurance',
    icons: ['Home', 'Flame', 'CloudLightning', 'Users', 'Shield'],
    cardsData: [
      {title: 'Structural Coverage', icon: 'Home', desc: 'Tremendous Home Insurance robustly provides massive financial protection extensively for the core physical structure uniquely of your lovely home, vastly including thick walls, sturdy roofs, solid floors, high ceilings, beautiful doors, secure windows, and various built-in permanent fixtures.'},
      {title: 'Contents Coverage', icon: 'Shield', desc: 'Thoroughly depending broadly on the specific policy intelligently selected, premier Home Insurance completely can also dramatically protect the incredibly valuable diverse contents securely inside your grand home.'},
      {title: 'Natural Calamities', icon: 'CloudLightning', desc: 'Extensive Home Insurance broadly offers vast protection vehemently against terrible events exactly such as violent earthquakes, massive surging floods, destructive cyclones, rampant storms, powerful hurricanes, direct lightning strikes, and various other entirely natural calamities.'},
      {title: 'Man-Made Disaster Protection', icon: 'Flame', desc: 'Meticulous Home Insurance also widely covers sprawling damages aggressively caused directly by broadly various deeply man-made horrific incidents, comprehensively including sudden fire outbreaks, massive violent explosions, terrifying destructive riots.'},
      {title: 'Personal Liability Coverage', icon: 'Users', desc: 'Many exceptionally comprehensive grand Home Insurance policies actively include highly critical robust personal liability heavy protection. This massive coverage reliably helps significantly protect highly vulnerable homeowners distinctly if an innocent visitor suffers unexpected bodily injury.'}
    ]
  },
  {
    slug: 'travel',
    title: 'Travel Insurance',
    icons: ['Plane', 'Activity', 'ShieldAlert', 'Briefcase', 'HeartPulse'],
    cardsData: [
      {title: 'Medical Emergencies Abroad', icon: 'HeartPulse', desc: 'Extensively covers utterly unexpected, extraordinarily expensive medical treatments rapidly required abroad precisely due to sudden debilitating sudden severe illnesses or truly horrific accidental injuries.'},
      {title: 'Trip Cancellation/Interruption', icon: 'Plane', desc: 'Tremendously minimizes severe financial pain powerfully by vastly reimbursing substantial non-refundable deposits massively spent on absolutely essential flight tickets directly.'},
      {title: 'Baggage Loss/Delay', icon: 'Briefcase', desc: 'Properly provides incredibly crucial robust compensation seamlessly covering vastly expensive replacements precisely when extremely precious checked baggage gracefully is unfortunately entirely lost.'},
      {title: 'Flight Delay', icon: 'Plane', desc: 'Significantly compensates extensively for incredibly significant, sprawling unexpected essential expenses actively required uniquely during intensely prolonged, deeply frustrating flight delays.'},
      {title: 'Personal Liability & Accident', icon: 'ShieldAlert', desc: 'Provides utterly essential heavy financial backing actively if your careless actions mistakenly result completely in severe terrible accidental bodily injury fiercely given directly.'}
    ]
  },
  {
    slug: 'personal-accident',
    title: 'Personal Accident Insurance',
    icons: ['Activity', 'HeartPulse', 'Scale', 'ShieldCheck', 'Stethoscope'],
    cardsData: [
      {title: 'Accidental Death Cover', icon: 'ShieldCheck', desc: 'Provides absolute financial relief distinctly when the main designated policyholder completely succumbs strictly to catastrophic severe bodily injuries visibly sustained broadly.'},
      {title: 'Permanent Total Disability', icon: 'Scale', desc: 'Grants fully substantial, wildly critical compensation specifically for incredibly severe accidents aggressively resulting largely in complete irreversible major physical disability.'},
      {title: 'Permanent Partial Disability', icon: 'Activity', desc: 'Actively covers massively traumatic unfortunate incidents aggressively leading widely to the partial tremendous permanent tragic loss of critical vital limb functions.'},
      {title: 'Temporary Total Disability', icon: 'Stethoscope', desc: 'Regularly provides profoundly essential vital weekly financial stipends rigorously to remarkably support affected policyholders severely restricted comprehensively by a completely incapacitating accident.'},
      {title: 'Medical Expense Reimbursement', icon: 'HeartPulse', desc: 'Exclusively reimburses heavily mounting critical hospitalization costs vastly and extensive major treatment expenses distinctly resulting from sweeping bodily injuries.'}
    ]
  },
  {
    slug: 'critical-illness',
    title: 'Critical Illness Insurance',
    icons: ['HeartPulse', 'Activity', 'ShieldCheck', 'Briefcase', 'Stethoscope'],
    cardsData: [
      {title: 'Lump Sum Payout On Diagnosis', icon: 'ShieldCheck', desc: 'Rapidly provides an unbelievably substantial, wildly immediate massive lump sum massive benefit cleanly upon the strictly official medical diagnosis firmly detailing any officially heavily covered disease.'},
      {title: 'Income Replacement', icon: 'Briefcase', desc: 'Genuinely offers remarkably comprehensive massive financial security strongly precisely during intensely critical heavily prolonged demanding recovery periods uniquely when earning capacities completely vanish.'},
      {title: 'Widespread Disease Coverage', icon: 'Activity', desc: 'Deeply covers universally acknowledged sprawling massive critical conditions strictly exactly like tremendous severe heart attacks, life-threatening advanced strokes, aggressive terrible cancer, and heavy deep kidney failures.'},
      {title: 'Debt Unburdening', icon: 'Scale', desc: 'Actively empowers wildly struggling policyholders completely effectively utilizing the granted lump sum perfectly immediately clearing off significant mounting accumulated pressing heavy debts rapidly.'},
      {title: 'Peace of Mind for Family', icon: 'HeartPulse', desc: 'Rigorously protects intensely profoundly emotionally heavily burdened devoted family members actively greatly from facing devastating massive major unprecedented spiraling financial strain dynamically.'}
    ]
  },
  {
    slug: 'individual-mediclaim',
    title: 'Individual Mediclaim Insurance',
    icons: ['Stethoscope', 'Pill', 'FileText', 'Activity', 'HeartPulse'],
    cardsData: [
      {title: 'Room & Nursing Expenses', icon: 'HeartPulse', desc: 'Uncompromising coverage extensively encompassing standard hospital room charges, necessary boarding expenses, and round-the-clock skilled nursing services rightfully incurred during prolonged hospitalization.'},
      {title: 'Specialist & Surgeon Fees', icon: 'Stethoscope', desc: 'Vast coverage strictly accounting for hefty fees rightfully charged by primary medical practitioners, elite surgeons, certified anesthetists, expert consultants, and highly skilled medical specialists directly involved.'},
      {title: 'Medical & Surgical Expenses', icon: 'Activity', desc: 'Extensive protection specifically for towering expenses deeply related to vital anesthesia, life-saving blood transfusions, constant oxygen administration, intense operation theatre charges, strict surgical appliances.'},
      {title: 'Vitamins and Tonics', icon: 'Pill', desc: 'Unexpectedly mounting expenses explicitly for recuperative vitamins and restorative tonics are comprehensively covered uniquely when highly prescribed strictly as part of a rigorously structured, medically necessary treatment plan.'},
      {title: 'Domiciliary Hospitalization', icon: 'FileText', desc: 'Crucial coverage fluidly extends to fully encompass highly eligible, heavily documented domiciliary hospitalization expenses rapidly incurred when critical treatment is adequately provided explicitly at home strictly under explicitly medically approved.'}
    ]
  }
];

const overviewp1 = 'This policy serves as a vital financial safeguard against severe physical damage, total loss, and unforeseen incidents triggered by emergencies. Whether you own a personal property, travel, or operate specialized transport infrastructure, this insurance explicitly offers tremendous financial backing to save you from deep-seated economic stress.';
const overviewp2 = 'With rapid urbanization and astronomically rising costs, individuals today face dramatically greater risks of unforeseen catastrophic medical or emergency problems. A highly structured and robust insurance effectively supports prompt recoveries dynamically.';

const whyChooseData = [
  {title: "Expert Guidance", desc: "Our spectacular team of highly experienced, professionally certified insurance advisors possesses remarkable, in-depth knowledge surrounding the ever-changing industry and its myriad available policy options."},
  {title: "Tailored Solutions", desc: "We emphatically recognize that absolutely every single individual's vital needs, daily lifestyle choices, and underlying financial circumstances are drastically different. Our wonderfully customized solutions are meticulously designed to align directly with your lifestyle."},
  {title: "Claims Support", desc: "Sudden emergencies can inherently be exceptionally stressful and profoundly challenging structurally and emotionally. Our heavily dedicated, profoundly empathetic claims support team proactively assists our afflicted clients firmly."},
  {title: "Extensive Networks", desc: "We proudly collaborate directly with an incredibly broad, nationwide network of prestigious entities strictly to ensure our valued clients invariably have immediate access to world-class care and support."}
];

const closingTitle = 'Protect Your Future';
const closingP1 = 'At Lambach Insurance Brokers, we firmly believe that intelligently investing in comprehensive Insurance remains arguably one of the most monumentally important, foundational decisions you can safely make for yourself and your beloved family.';
const closingP2 = 'Our highly expert team is absolutely dedicated to actively helping you quickly find the definitively right Insurance solution perfectly tailored strictly to your highly specific demands and grand financial objectives.';

pages.forEach(p => {
  const pPath = path.join('app/retail', p.slug, 'page.tsx');
  fs.writeFileSync(pPath, generatePage(p.title, p.title + " Protection Overview", overviewp1, overviewp2, '', p.cardsData, whyChooseData, closingTitle, closingP1, closingP2, p.icons));
  console.log('Re-generated', p.slug);
});
