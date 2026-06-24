const fs = require('fs');
const path = require('path');

const pages = [
  {
    path: '/app/corporate/engineering/page.tsx',
    title: 'Engineering',
    desc: 'Contractors All Risks (CAR), Erection All Risks (EAR), and machinery protection.',
    image: 'https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80&w=1080',
    introTitle: 'Engineering & Construction Risks',
    introDesc: 'Large scale engineering projects are inherently exposed to natural perils, fire, theft, and human error. Our policies provide comprehensive coverage from ground-breaking to handover.',
    bullets: ['Contractors All Risk (CAR)', 'Erection All Risk (EAR)', 'Contractors Plant & Machinery', 'Delay in Start Up'],
    features: [
      { name: 'CAR / EAR', desc: 'Covering physical loss or damage to contract works, materials, and equipment.', icon: 'HardHat', color: 'orange' },
      { name: 'Third Party Liability', desc: 'Legal liability for bodily injury or property damage to third parties on site.', icon: 'ShieldCheck', color: 'blue' },
      { name: 'Plant & Machinery', desc: 'Protection for expensive construction machinery, cranes, and earthmovers.', icon: 'Tractor', color: 'amber' }
    ]
  },
  {
    path: '/app/corporate/property/page.tsx',
    title: 'Property',
    desc: 'Fire, special perils, and consequential loss for commercial assets.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1080',
    introTitle: 'Safeguarding Your Physical Assets',
    introDesc: 'Protect your building, plant, machinery, and inventory against catastrophic events. Our property coverage ensures your business can rebuild after a disaster.',
    bullets: ['Fire & Special Perils', 'Burglary & Theft', 'Business Interruption', 'Terrorism Cover'],
    features: [
      { name: 'Standard Fire & Perils', desc: 'Coverage against fire, lightning, explosion, storms, and floods.', icon: 'Flame', color: 'rose' },
      { name: 'Consequential Loss', desc: 'Compensation for lost profits and continuing standing charges after damage.', icon: 'TrendingDown', color: 'purple' },
      { name: 'Burglary Insurance', desc: 'Protection of contents, stocks, and assets against theft and break-ins.', icon: 'Lock', color: 'slate' }
    ]
  },
  {
    path: '/app/corporate/marine/page.tsx',
    title: 'Marine',
    desc: 'Comprehensive transit insurance for import, export, and inland cargo.',
    image: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&q=80&w=1080',
    introTitle: 'Securing Global Supply Chains',
    introDesc: 'Movement of goods involves significant risk. Our marine cargo policies cover goods in transit via sea, air, rail, or road against physical loss or damage.',
    bullets: ['Import & Export Cargo', 'Inland Transit', 'Open Cover Policies', 'Project Cargo'],
    features: [
      { name: 'Marine Open Cover', desc: 'Automatic continuous coverage for frequent shippers and global supply chains.', icon: 'Ship', color: 'blue' },
      { name: 'Specific Transit', desc: 'One-off policies tailored for single high-value shipments.', icon: 'PackageOpen', color: 'emerald' },
      { name: 'Project Cargo', desc: 'Specialized cover for out-of-gauge equipment and project materials.', icon: 'Truck', color: 'orange' }
    ]
  },
  {
    path: '/app/corporate/marine-hull/page.tsx',
    title: 'Marine Hull',
    desc: 'Coverage for vessels, fleet operations, and maritime liabilities.',
    image: 'https://images.unsplash.com/photo-1542385151-efd9000785a0?auto=format&fit=crop&q=80&w=1080',
    introTitle: 'Protecting Maritime Fleets',
    introDesc: 'Marine Hull insurance protects shipowners and operators against physical damage to their vessels, machinery, and associated maritime liabilities.',
    bullets: ['Hull and Machinery', 'Protection & Indemnity (P&I)', 'Freight Demurrage & Defense', 'War & Strikes'],
    features: [
      { name: 'Hull & Machinery', desc: 'Covers physical damage to the ship, its engine, and on-board equipment.', icon: 'Anchor', color: 'slate' },
      { name: 'P & I', desc: 'Third-party liability coverage for maritime operations including environmental damage.', icon: 'ShieldAlert', color: 'rose' },
      { name: 'Loss of Hire', desc: 'Financial protection if the vessel is immobilized due to an insured peril.', icon: 'Banknote', color: 'emerald' }
    ]
  },
  {
    path: '/app/corporate/liability/page.tsx',
    title: 'Liability',
    desc: 'Commercial General Liability (CGL), Directors & Officers (D&O), and Professional Indemnity.',
    image: 'https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&q=80&w=1080',
    introTitle: 'Corporate Liability Management',
    introDesc: 'In a litigious environment, businesses face claims from third parties, employees, and shareholders. Liability insurance covers legal defense costs and settlement damages.',
    bullets: ['Commercial General Liability (CGL)', 'Directors & Officers (D&O)', 'Professional Indemnity / E&O', 'Product Liability'],
    features: [
      { name: 'CGL Policy', desc: 'Comprehensive coverage for bodily injury and property damage claims.', icon: 'Scale', color: 'blue' },
      { name: 'D&O Insurance', desc: 'Protects the personal assets of corporate directors and officers.', icon: 'UserCheck', color: 'indigo' },
      { name: 'Professional Indemnity', desc: 'Covers claims of professional negligence, errors, or omissions.', icon: 'Briefcase', color: 'slate' }
    ]
  },
  {
    path: '/app/corporate/employee-benefits/page.tsx',
    title: 'Employee Benefits',
    desc: 'Comprehensive protection packages to attract and retain corporate talent.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1080',
    introTitle: 'Investing in Your Workforce',
    introDesc: 'A robust employee benefits program enhances employee loyalty, productivity, and wellbeing, while providing a safety net for their families.',
    bullets: ['Group Health Insurance', 'Group Term Life', 'Accidental Coverage', 'Wellness Programs'],
    features: [
      { name: 'Talent Retention', desc: 'High-quality benefits packages help you retain top industry talent.', icon: 'Users', color: 'purple' },
      { name: 'Financial Security', desc: 'Provides employees with a financial safety net during health crises.', icon: 'HeartPulse', color: 'rose' },
      { name: 'Customizable Plans', desc: 'Flexible coverage terms dictated by company size and budget.', icon: 'Settings', color: 'blue' }
    ]
  },
  {
    path: '/app/corporate/group-mediclaim/page.tsx',
    title: 'Group Mediclaim',
    desc: 'Corporate health insurance policies tailored for employee wellness.',
    image: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&q=80&w=1080',
    introTitle: 'Corporate Health Coverage',
    introDesc: 'Group health insurance provides medical coverage for employees and their dependents. We negotiate optimal terms, high coverage limits, and cashless network facilities.',
    bullets: ['Cashless Hospitalization', 'Maternity Benefits', 'Pre & Post Hospitalization', 'Pre-existing Disease Cover'],
    features: [
      { name: 'Extensive Network', desc: 'Access to thousands of top-tier networked hospitals globally.', icon: 'Hospital', color: 'blue' },
      { name: 'Family Coverage', desc: 'Options to include spouses, children, and dependent parents.', icon: 'Home', color: 'emerald' },
      { name: 'Waiver of Waiting Periods', desc: 'Unlike retail health plans, pre-existing diseases can be covered from day one.', icon: 'Clock', color: 'orange' }
    ]
  },
  {
    path: '/app/corporate/group-personal-accident/page.tsx',
    title: 'Group Personal Accident',
    desc: 'Worldwide protection against accidental death and disability for employees.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1080',
    introTitle: '24/7 Accidental Protection',
    introDesc: 'Group Personal Accident (GPA) policies provide financial compensation to employees or their families in the event of death or disability caused by an accident.',
    bullets: ['Accidental Death (AD)', 'Permanent Total Disability (PTD)', 'Permanent Partial Disability (PPD)', 'Temporary Total Disability (TTD)'],
    features: [
      { name: 'Global Coverage', desc: 'Protection applies worldwide, whether on duty or off duty.', icon: 'Globe', color: 'sky' },
      { name: 'Income Replacement', desc: 'Weekly compensation for temporary total disablement (TTD).', icon: 'Banknote', color: 'emerald' },
      { name: 'Education Grant', desc: 'Additional financial support for dependent children education.', icon: 'GraduationCap', color: 'purple' }
    ]
  },
  {
    path: '/app/corporate/credit/page.tsx',
    title: 'Credit Insurance',
    desc: 'Protecting your accounts receivable against insolvency and default.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1080',
    introTitle: 'Secure Your Cash Flow',
    introDesc: 'Trade Credit Insurance protects your business against the risk of bad debt. It ensures you get paid for the goods and services you deliver, even if your customer goes bankrupt.',
    bullets: ['Commercial Risk (Insolvency)', 'Protracted Default', 'Political Risk Cover', 'Working Capital Enhancement'],
    features: [
      { name: 'Credit Risk Mitigation', desc: 'Safeguard your balance sheet against unexpected default events.', icon: 'Shield', color: 'blue' },
      { name: 'Market Expansion', desc: 'Trade confidently with new domestic and international partners.', icon: 'TrendingUp', color: 'emerald' },
      { name: 'Better Financing', desc: 'Improved access to competitive bank financing backed by insured receivables.', icon: 'Landmark', color: 'indigo' }
    ]
  },
  {
    path: '/app/corporate/affinity/page.tsx',
    title: 'Affinity',
    desc: 'Customized insurance programs tailored for your customers or members.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1080',
    introTitle: 'Value-Added Partner Programs',
    introDesc: 'Affinity insurance allows banks, retailers, telecos, and associations to offer specialized insurance products to their customer base, generating loyalty and ancillary revenue.',
    bullets: ['B2B2C Insurance Programs', 'Embedded Insurance', 'White-labeled Solutions', 'Customer Loyalty'],
    features: [
      { name: 'Revenue Generation', desc: 'Create new customized revenue streams through embedded insurance distribution.', icon: 'PiggyBank', color: 'rose' },
      { name: 'Brand Loyalty', desc: 'Increase customer stickiness by offering valuable, relevant protection products.', icon: 'Heart', color: 'purple' },
      { name: 'Seamless Tech Integration', desc: 'We help bridge API pipelines between insurers and your platform.', icon: 'Code', color: 'slate' }
    ]
  },
  {
    path: '/app/corporate/warranty/page.tsx',
    title: 'Warranty',
    desc: 'Extended warranty programs for electronics, appliances, and industrial goods.',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=1080',
    introTitle: 'Extended Product Protection',
    introDesc: 'Extended warranty insurance transfers the financial risk of post-sale product failures, allowing manufacturers and retailers to offer comprehensive repair/replacement guarantees.',
    bullets: ['Brown & White Goods', 'Consumer Electronics', 'Automobile Extended Warranty', 'Industrial Machinery'],
    features: [
      { name: 'Repair & Replacement', desc: 'Covers the cost of parts and labor for mechanical or electrical breakdowns.', icon: 'Wrench', color: 'blue' },
      { name: 'Customer Satisfaction', desc: 'Provides peace of mind to buyers, reducing post-purchase friction.', icon: 'Smile', color: 'emerald' },
      { name: 'Risk Transfer', desc: 'Removes the financial liability of repairs from the manufacturers balance sheet.', icon: 'ArrowRightLeft', color: 'orange' }
    ]
  },
  {
    path: '/app/corporate/stop/page.tsx',
    title: 'Stock Turnover Policy',
    desc: 'Seamless transit and storage coverage for fast-moving inventory.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c663be?auto=format&fit=crop&q=80&w=1080',
    introTitle: 'Integrated Transit & Storage Cover',
    introDesc: 'The Stock Throughput Policy (STOP) combines marine cargo insurance with static inventory storage cover into a single, seamless policy covering goods from raw materials to final delivery.',
    bullets: ['End-to-End Supply Chain', 'No Gap in Coverage', 'Raw Materials to Finished Goods', 'Reduced Administration'],
    features: [
      { name: 'Seamless Protection', desc: 'Eliminates grey areas between transit policies and static property policies.', icon: 'Layers', color: 'purple' },
      { name: 'Cost Efficiency', desc: 'Often more cost-effective than purchasing separate transit and storage policies.', icon: 'Wallet', color: 'emerald' },
      { name: 'Simplified Administration', desc: 'Manage global inventory risks under one master policy document.', icon: 'FileText', color: 'blue' }
    ]
  }
];

const template = (page) => `import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTAContact from '@/components/CTAContact';
import { ArrowRight, CheckCircle2, ${Array.from(new Set(page.features.map(f => f.icon))).join(', ')} } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '${page.title} Insurance | Corporate Risk | Lambach Insurance Brokers',
  description: '${page.desc.replace(/'/g, "\\'")}',
};

export default function Page() {
  return (
    <>
      <PageHero 
        title="${page.title} Insurance" 
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
              <h3 className="text-2xl font-bold text-brand-marine mb-6">Key Risk Areas Addressed:</h3>
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
              <h3 className="text-2xl font-bold text-brand-marine mb-4 relative z-10">Why Partner With Us?</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed relative z-10">
                At Lambach, our experts specialize in ${page.title} risks. We work with top-tier insurers to craft bespoke coverage that matches your exact operational profile.
              </p>
              
              <Link href="/contact-us" className="inline-flex bg-primary hover:bg-primary-variant text-white px-8 py-3.5 rounded-full font-semibold items-center gap-2 hover:shadow-lg transition-all active:scale-95 relative z-10">
                Contact Our Experts
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
              Coverage Solutions
            </div>
            <h2 className="text-3xl font-bold text-brand-marine mb-4">Comprehensive Protection</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
console.log('Corporate generated.');
