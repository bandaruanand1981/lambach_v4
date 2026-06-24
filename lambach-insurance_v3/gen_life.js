const fs = require('fs');
const path = require('path');

const pages = [
  {
    path: '/app/life/term/page.tsx',
    title: 'Term Insurance',
    desc: 'Pure life cover ensuring absolute financial security for your dependents.',
    image: 'https://images.unsplash.com/photo-1573164574472-797ce4211116?auto=format&fit=crop&q=80&w=1080',
    introTitle: 'The Purest Form of Protection',
    introDesc: 'Term Life Insurance is a pure protection plan that pays a substantial death benefit to your nominees if something happens to you during the policy term. It is the most cost-effective way to secure your families financial future.',
    bullets: ['High Cover at Low Premium', 'Waiver of Premium Add-on', 'Accidental Death Benefit Rider', 'Tax Benefits under 80C and 10(10D)'],
    features: [
      { name: 'Income Replacement', desc: 'Ensures your family can maintain their lifestyle and pay off debts (like home loans).', icon: 'Home', color: 'blue' },
      { name: 'Lump Sum or Regular Payout', desc: 'Choose how your family receives the death benefit—as a lump sum or monthly income.', icon: 'Banknote', color: 'emerald' },
      { name: 'Optional Riders', desc: 'Enhance your policy with Critical Illness or Accidental Death riders.', icon: 'ShieldPlus', color: 'purple' }
    ]
  },
  {
    path: '/app/life/group-term/page.tsx',
    title: 'Group Term Insurance',
    desc: 'Cost-effective life insurance coverage for corporate employee teams.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1080',
    introTitle: 'Protecting Corporate Families',
    introDesc: 'Group Term Life Insurance (GTLI) allows employers to provide life insurance coverage to their employees under a single master policy. It acts as a powerful retention tool while offering financial security.',
    bullets: ['No Medicals Required (upto Free Cover Limit)', 'Flat Cover or Grade-based Cover', 'Easy Employee Onboarding', 'Employer Tax Deductions'],
    features: [
      { name: 'Free Cover Limit (FCL)', desc: 'Majority of employees receive instant coverage without medical examinations.', icon: 'UserCheck', color: 'emerald' },
      { name: 'Terminal Illness Benefit', desc: 'Early payout of a percentage of the sum insured upon terminal diagnosis.', icon: 'Activity', color: 'rose' },
      { name: 'Spouse Cover Options', desc: 'Extend term life benefits to the spouses of your employees.', icon: 'Users', color: 'blue' }
    ]
  },
  {
    path: '/app/life/endowment/page.tsx',
    title: 'Endowment Plans',
    desc: 'A combination of life protection and guaranteed savings maturity.',
    image: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&q=80&w=1080',
    introTitle: 'Save While You Protect',
    introDesc: 'Endowment policies offer a dual benefit: they pay out a death benefit if the insured passes away, but also pay out a survival maturity benefit (often with bonuses) if the insured outlives the policy term.',
    bullets: ['Guaranteed Returns', 'Death Benefit + Survival Benefit', 'Loan Facility against Policy', 'Wealth Accumulation'],
    features: [
      { name: 'Wealth Creation', desc: 'Disciplined savings that compound over time for future life goals.', icon: 'TrendingUp', color: 'emerald' },
      { name: 'Capital Guarantee', desc: 'Unlike market-linked plans, traditional endowments guarantee your capital return.', icon: 'ShieldCheck', color: 'blue' },
      { name: 'Bonus Additions', desc: 'Participate in the insurers profits through annual reversionary bonuses.', icon: 'Gift', color: 'purple' }
    ]
  },
  {
    path: '/app/life/pension/page.tsx',
    title: 'Pension Plan',
    desc: 'Retirement solutions assuring a steady stream of income for life.',
    image: 'https://images.unsplash.com/photo-1473186578172-c141e6798cfe?auto=format&fit=crop&q=80&w=1080',
    introTitle: 'Secure Your Golden Years',
    introDesc: 'Retirement pension plans (Annuities) help you accumulate a corpus during your working years and convert it into a regular, guaranteed pension income after retirement.',
    bullets: ['Deferred & Immediate Annuities', 'Guaranteed Lifelong Income', 'Joint Life Annuity Options', 'Vesting Benefit'],
    features: [
      { name: 'Lifelong Income', desc: 'Guarantees regular payout for as long as you live, eliminating longevity risk.', icon: 'Infinity', color: 'blue' },
      { name: 'Spousal Protection', desc: 'Joint-life options ensure your spouse continues receiving the pension after you.', icon: 'Heart', color: 'rose' },
      { name: 'Commutation Options', desc: 'Withdraw up to a certain percentage of the corpus as a lump sum at retirement.', icon: 'PiggyBank', color: 'emerald' }
    ]
  },
  {
    path: '/app/life/keyman/page.tsx',
    title: 'Keyman Insurance',
    desc: 'Protecting your business against the financial loss of a key executive.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1080',
    introTitle: 'Insuring Your Most Valuable Asset',
    introDesc: 'Keyman Insurance is bought by a company on the life of its most vital employee(s). The policy protects the business from the financial fallout and operational disruption if that key person were to unexpectedly pass away.',
    bullets: ['Business Continuity', 'Compensates Profit Loss', 'Funds Executive Replacement', 'Favorable Tax Treatment'],
    features: [
      { name: 'Business Protection', desc: 'The company is the proposer and beneficiary, securing its bottom line.', icon: 'Building', color: 'slate' },
      { name: 'Debt Protection', desc: 'Ensures corporate loans backed by the keyman can be paid off.', icon: 'Landmark', color: 'purple' },
      { name: 'Talent Acquisition', desc: 'Provides the cash flow required to headhunt and train a high-level replacement.', icon: 'UserSearch', color: 'blue' }
    ]
  }
];

const template = (page) => `import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTAContact from '@/components/CTAContact';
import { ArrowRight, CheckCircle2, ${Array.from(new Set(page.features.map(f => f.icon))).join(', ')} } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '${page.title} | Life Insurance | Lambach Insurance Brokers',
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
              <h3 className="text-2xl font-bold text-brand-marine mb-6">Key Policy Highlights:</h3>
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
              <h3 className="text-2xl font-bold text-brand-marine mb-4 relative z-10">We Calculate the Exact Cover</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed relative z-10">
                Determining the right sum assured requires financial modeling of Human Life Value (HLV). Let our actuaries help you determine the exact coverage required to secure your family or business.
              </p>
              
              <Link href="/contact-us" className="inline-flex bg-primary hover:bg-primary-variant text-white px-8 py-3.5 rounded-full font-semibold items-center gap-2 hover:shadow-lg transition-all active:scale-95 relative z-10">
                Value My Cover
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
            <h2 className="text-3xl font-bold text-brand-marine mb-4">Financial Certainty</h2>
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
console.log('Life generated.');
