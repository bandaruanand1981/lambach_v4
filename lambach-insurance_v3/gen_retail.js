const fs = require('fs');
const path = require('path');

const pages = [
  {
    path: '/app/retail/motor/page.tsx',
    title: 'Motor Insurance',
    desc: 'Comprehensive protection for your private cars and two-wheelers.',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1080',
    introTitle: 'Drive with Confidence',
    introDesc: 'Motor insurance is not just a legal mandate; it is vital protection against accidents, theft, and third-party liabilities. Our retail motor policies offer extensive add-ons for complete peace of mind.',
    bullets: ['Comprehensive Cover', 'Zero Depreciation Add-on', 'Engine Protect', 'Roadside Assistance (RSA)'],
    features: [
      { name: 'Own Damage Cover', desc: 'Protection against accidental damage, fire, natural disasters, and theft.', icon: 'Car', color: 'blue' },
      { name: 'Third Party Liability', desc: 'Mandatory coverage against injury or death and property damage to third parties.', icon: 'ShieldAlert', color: 'rose' },
      { name: 'Zero Depreciation', desc: 'Get full claim settlement without deduction for depreciation on parts.', icon: 'Settings', color: 'emerald' }
    ]
  },
  {
    path: '/app/retail/health/page.tsx',
    title: 'Health Insurance',
    desc: 'Comprehensive medical coverage tailored for modern healthcare costs.',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1080',
    introTitle: 'Your Health, Financially Secured',
    introDesc: 'With medical inflation soaring, a robust health insurance policy is your first line of defense. We help you choose policies with high limits, no room rent capping, and extensive hospital networks.',
    bullets: ['Cashless Hospitalization', 'Pre & Post Hospitalization Cover', 'Annual Health Check-ups', 'Day Care Procedures'],
    features: [
      { name: 'In-Patient Hospitalization', desc: 'Covers room rent, ICU charges, nursing, and surgical procedures.', icon: 'Hospital', color: 'blue' },
      { name: 'No Copay Policies', desc: 'We source policies that do not require you to pay a percentage of the claim.', icon: 'PiggyBank', color: 'emerald' },
      { name: 'Restoration Benefit', desc: 'Automatic restoration of the base sum insured upon exhaustion.', icon: 'RefreshCw', color: 'orange' }
    ]
  },
  {
    path: '/app/retail/individual-mediclaim/page.tsx',
    title: 'Individual Mediclaim',
    desc: 'Dedicated health policies for single individuals with extensive coverage.',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1080',
    introTitle: 'Personalized Health Coverage',
    introDesc: 'Individual Mediclaim provides a dedicated sum insured for a single person, ensuring that maximum coverage is available without sharing it across family members.',
    bullets: ['Dedicated Sum Insured', 'Customizable Add-ons', 'Tax Benefits under Sec 80D', 'High No Claim Bonus (NCB)'],
    features: [
      { name: 'Maximum Coverage', desc: 'The entire sum insured is reserved exclusively for your medical needs.', icon: 'User', color: 'blue' },
      { name: 'Cumulative Bonus', desc: 'Increase in sum insured for every claim-free year without extra premium.', icon: 'TrendingUp', color: 'emerald' },
      { name: 'Tax Savings', desc: 'Save on income tax under section 80D of the Income Tax Act.', icon: 'Landmark', color: 'slate' }
    ]
  },
  {
    path: '/app/retail/personal-accident/page.tsx',
    title: 'Personal Accident',
    desc: 'Financial protection against accidental death and severe disability.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1080',
    introTitle: '24/7 Worldwide Accidental Cover',
    introDesc: 'Accidents are unpredictable. A standalone Personal Accident policy pays a lump sum amount in case of accidental death or permanent disablement, ensuring your family remains financially stable.',
    bullets: ['Accidental Death Cover', 'Permanent Total Disablement', 'Permanent Partial Disablement', 'Temporary Total Disablement'],
    features: [
      { name: 'Lump Sum Payout', desc: 'Direct financial compensation independent of other health insurance policies.', icon: 'Banknote', color: 'emerald' },
      { name: 'Global Cover', desc: 'You are protected 24/7, anywhere in the world.', icon: 'Globe', color: 'blue' },
      { name: 'Education Benefit', desc: 'Additional financial support for dependent children in case of severe accidents.', icon: 'GraduationCap', color: 'purple' }
    ]
  },
  {
    path: '/app/retail/home/page.tsx',
    title: 'Home Insurance',
    desc: 'Protecting your most valuable physical asset and its contents.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1080',
    introTitle: 'Safeguarding Your Sanctuary',
    introDesc: 'Home insurance covers your building structure and personal belongings against fire, natural disasters, theft, and accidental damage.',
    bullets: ['Building Structure Cover', 'Contents & Electronics Cover', 'Fire & Allied Perils', 'Burglary & Housebreaking'],
    features: [
      { name: 'Structure Coverage', desc: 'Rebuild or repair your home if damaged by fire, flood, or earthquake.', icon: 'Home', color: 'orange' },
      { name: 'Contents Coverage', desc: 'Protection for expensive electronics, furniture, and valuables against theft.', icon: 'Tv', color: 'slate' },
      { name: 'Alternate Accommodation', desc: 'Covers temporary rental costs if your home becomes uninhabitable.', icon: 'Bed', color: 'emerald' }
    ]
  },
  {
    path: '/app/retail/travel/page.tsx',
    title: 'Travel Insurance',
    desc: 'Medical and transit protection for international and domestic journeys.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1080',
    introTitle: 'Travel Without Worries',
    introDesc: 'Whether for leisure or business, travel insurance protects you against exorbitant foreign medical costs, trip cancellations, and loss of baggage.',
    bullets: ['Overseas Medical Emergencies', 'Trip Cancellation/Curtailment', 'Loss of Passport', 'Baggage Delay/Loss'],
    features: [
      { name: 'Medical Evacuation', desc: 'Covers emergency medical transport and repatriation of remains.', icon: 'Ambulance', color: 'rose' },
      { name: 'Flight Disruptions', desc: 'Compensation for heavy flight delays and missed connections.', icon: 'Plane', color: 'sky' },
      { name: 'Personal Liability', desc: 'Coverage for third-party damages caused accidentally while abroad.', icon: 'Scale', color: 'purple' }
    ]
  },
  {
    path: '/app/retail/critical-illness/page.tsx',
    title: 'Critical Illness Insurance',
    desc: 'Lump-sum financial support upon diagnosis of severe lifestyle diseases.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1080',
    introTitle: 'Fight Critical Diseases Financially',
    introDesc: 'Standard health insurance pays hospital bills, but Critical Illness insurance pays a guaranteed lump sum directly to you upon diagnosis of a covered severe illness (like cancer or heart attack), replacing lost income.',
    bullets: ['Cancer Cover', 'Heart Attack & Stroke', 'Kidney Failure', 'Major Organ Transplant'],
    features: [
      { name: 'Guaranteed Payout', desc: '100% of sum insured is paid out upon confirmed diagnosis, regardless of hospital bills.', icon: 'Banknote', color: 'emerald' },
      { name: 'Income Replacement', desc: 'Use the funds to pay off mortgages, debts, or replace lost income during recovery.', icon: 'PiggyBank', color: 'blue' },
      { name: 'Extensive Disease List', desc: 'Modern policies cover up to 30+ critical illnesses and surgical procedures.', icon: 'Activity', color: 'rose' }
    ]
  }
];

const template = (page) => `import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTAContact from '@/components/CTAContact';
import { ArrowRight, CheckCircle2, ${Array.from(new Set(page.features.map(f => f.icon))).join(', ')} } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '${page.title} | Retail Cover | Lambach Insurance Brokers',
  description: '${page.desc.replace(/'/g, "\\'")}',
};

export default function Page() {
  return (
    <>
      <PageHero 
        title="${page.title}" 
        description="${page.desc.replace(/'/g, "\\'")}"
        imageSrc="${page.image}"
      />

      <section className="py-24 bg-slate-50">
        <div className="layout-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-marine mb-6">${page.introTitle}</h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              ${page.introDesc}
            </p>
            
            <div className="mb-14">
              <h3 className="text-2xl font-bold text-brand-marine mb-6">Key Coverage Highlights:</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                 ${page.bullets.map(b => `
                   <li className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                     <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                     <span className="text-slate-700 font-medium">${b}</span>
                   </li>
                 `).join('')}
              </ul>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
              <h3 className="text-2xl font-bold text-brand-marine mb-4 relative z-10">Need Expert Guidance?</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed relative z-10">
                At Lambach, we analyze the fine print so you don't have to. We help you compare top policies, understand exclusions, and secure the best coverage for your personal needs.
              </p>
              
              <Link href="/contact-us" className="inline-flex bg-primary hover:bg-primary-variant text-white px-8 py-3.5 rounded-full font-semibold items-center gap-2 hover:shadow-lg transition-all active:scale-95 relative z-10">
                Speak to our Advisors
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap bg-white">
        <div className="layout-container">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full mb-4 text-xs font-bold uppercase tracking-widest">
              Core Benefits
            </div>
            <h2 className="text-3xl font-bold text-brand-marine mb-4">Why You Need This Cover</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${page.features.map((f, i) => `
            <div className="bg-${f.color}-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-${f.color}-100">
              <div className="flex items-start justify-between mb-8 gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">${f.name}</h3>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                    ${f.desc}
                  </p>
                </div>
                <div className="w-20 h-20 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <${f.icon} className="w-8 h-8 text-${f.color}-500" />
                </div>
              </div>
            </div>
            `).join('')}
          </div>
        </div>
      </section>
      
      <CTAContact />
    </>
  );
}
`;

pages.forEach(p => {
  const file = path.join(process.cwd(), p.path);
  fs.writeFileSync(file, template(p));
});
console.log('Retail generated.');
