const fs = require('fs');
const path = require('path');

const pages = [
  {
    path: '/app/industries/power-engineering/page.tsx',
    title: 'Power & Engineering',
    desc: 'Specialized risk management for power generation, transmission, and operational energy facilities.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1080',
    introTitle: 'Securing the Energy Sector',
    introDesc: 'The power and engineering sector faces unique, large-scale risks ranging from machinery breakdown to business interruption. We provide end-to-end coverage for conventional and renewable energy projects.',
    bullets: ['Machinery Breakdown & Boiler Explosion', 'Business Interruption & Loss of Profit', 'Third-Party Liability', 'Construction & Erection Phase Risks'],
    features: [
      { name: 'Operational All Risks', desc: 'Comprehensive coverage for power plants and transmission networks.', icon: 'Zap', color: 'blue' },
      { name: 'Machinery Breakdown', desc: 'Protection against sudden and unforeseen damage to critical machinery.', icon: 'Settings', color: 'orange' },
      { name: 'Delay in Start-Up (DSU)', desc: 'Covers revenue loss if a project is delayed due to insured physical damage.', icon: 'Clock', color: 'emerald' },
    ]
  },
  {
    path: '/app/industries/chemical/page.tsx',
    title: 'Chemical & Pharmaceutical',
    desc: 'Tailored solutions for hazardous environments, product liability, and contamination.',
    image: 'https://images.unsplash.com/photo-1532187643603-c11d17d05771?auto=format&fit=crop&q=80&w=1080',
    introTitle: 'Protecting Chemical Operations',
    introDesc: 'Chemical and pharmaceutical companies operate in highly regulated environments with significant exposure to environmental and product liabilities.',
    bullets: ['Product Recall & Liability', 'Environmental Impairment', 'Property & Business Interruption', 'Transit & Storage Risks'],
    features: [
      { name: 'Product Liability', desc: 'Coverage for claims arising out of defective products causing harm.', icon: 'ShieldAlert', color: 'purple' },
      { name: 'Environmental Liability', desc: 'Protection against pollution and environmental contamination costs.', icon: 'Leaf', color: 'emerald' },
      { name: 'Clinical Trials Insurance', desc: 'Specific coverage designed for risks associated with human clinical trials.', icon: 'FlaskConical', color: 'rose' },
    ]
  },
  {
    path: '/app/industries/it/page.tsx',
    title: 'Information Technology',
    desc: 'Cyber liability, errors & omissions, and operational risk for tech companies.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1080',
    introTitle: 'Innovating with Confidence',
    introDesc: 'IT and software firms face rapidly evolving cyber threats, intellectual property risks, and professional liabilities.',
    bullets: ['Cyber & Data Breach', 'Professional Indemnity (E&O)', 'Intellectual Property Rights', 'Business Interruption'],
    features: [
      { name: 'Cyber Liability', desc: 'Protection against data breaches, hacking, and cyber extortion.', icon: 'Lock', color: 'blue' },
      { name: 'Technology E&O', desc: 'Covers errors, omissions, or negligence in technology services or products.', icon: 'Laptop', color: 'fuchsia' },
      { name: 'Directors & Officers', desc: 'Protecting tech leaders from management liability claims.', icon: 'UserCheck', color: 'indigo' },
    ]
  },
  {
    path: '/app/industries/aviation/page.tsx',
    title: 'Aviation',
    desc: 'Hull, liability, and hangar-keepers coverage for modern aviation fleets.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1080',
    introTitle: 'Navigating Aviation Risks',
    introDesc: 'Aviation risk management requires extreme technical precision. We provide robust coverage for airlines, private charter operations, and ground handling.',
    bullets: ['Aviation Hull & Liability', 'Aviation Cargo', 'Loss of License', 'Aviation Cyber Risks'],
    features: [
      { name: 'Aircraft Hull All Risks', desc: 'Physical damage coverage for aircraft whether in flight, taxiing, or on the ground.', icon: 'Plane', color: 'sky' },
      { name: 'Passenger Liability', desc: 'Covers legal liability for injury to passengers or damage to baggage.', icon: 'Users', color: 'blue' },
      { name: 'Hangar Keepers Liability', desc: 'Protection for aircraft whilst in the care, custody, or control of the insured.', icon: 'Warehouse', color: 'slate' },
    ]
  },
  {
    path: '/app/industries/agri-business/page.tsx',
    title: 'Agri Business',
    desc: 'Crop, equipment, and supply chain protection for the agricultural sector.',
    image: 'https://images.unsplash.com/photo-1592982537447-6f2b6a076798?auto=format&fit=crop&q=80&w=1080',
    introTitle: 'Sustainable Farming Operations',
    introDesc: 'Agri-businesses face extreme weather events, supply chain disruptions, and global market fluctuations. Our policies secure the entire agricultural lifecycle.',
    bullets: ['Crop & Livestock Insurance', 'Farm Equipment', 'Warehousing & Cold Storage', 'Transit & Inland Marine'],
    features: [
      { name: 'Crop Insurance', desc: 'Protection against yield losses due to natural perils like drought or flood.', icon: 'CloudRain', color: 'blue' },
      { name: 'Farm Equipment', desc: 'Coverage for tractors, harvesters, and specialized farming tech.', icon: 'Tractor', color: 'orange' },
      { name: 'Storage & Transit', desc: 'Securing produce from the farm to the processing facility.', icon: 'Truck', color: 'emerald' },
    ]
  },
  {
    path: '/app/industries/entertainment/page.tsx',
    title: 'Entertainment',
    desc: 'Event cancellation, production equipment, and liability for media.',
    image: 'https://images.unsplash.com/photo-1470229722913-7c090be5c520?auto=format&fit=crop&q=80&w=1080',
    introTitle: 'Securing Live Events & Media',
    introDesc: 'The entertainment and media industry operates on tight deadlines and high stakes. We ensure that your productions run smoothly despite unforeseen events.',
    bullets: ['Event Cancellation', 'Film & Production Insurance', 'Equipment All Risks', 'Public Liability'],
    features: [
      { name: 'Event Cancellation', desc: 'Recoup non-refundable costs if an event is cancelled due to weather or non-appearance.', icon: 'CalendarX', color: 'rose' },
      { name: 'Equipment Cover', desc: 'Protection for expensive cameras, lighting, and sound equipment on set.', icon: 'Camera', color: 'purple' },
      { name: 'Media Liability', desc: 'Covers claims of copyright infringement, defamation, or libel.', icon: 'Scale', color: 'indigo' },
    ]
  }
];

const template = (page) => `import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTAContact from '@/components/CTAContact';
import { ArrowRight, CheckCircle2, ${Array.from(new Set(page.features.map(f => f.icon))).join(', ')} } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '${page.title} Insurance | Lambach Insurance Brokers',
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
console.log('Industries generated.');
