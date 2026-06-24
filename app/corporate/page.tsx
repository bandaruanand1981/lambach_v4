import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTAContact from '@/components/CTAContact';
import { HardHat, Home, Anchor, ShieldCheck, HeartPulse, Building, Award, FileCheck, Box, Shield } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Corporate Insurance | Lambach Insurance Brokers',
  description: 'Comprehensive corporate insurance solutions including Engineering, Property, Marine, Liability, and Employee Benefits. Protect your business with Lambach.',
  keywords: ['Corporate Insurance', 'Business Insurance India', 'Employee Benefits', 'Liability Insurance', 'Marine Insurance'],
};

export default function CorporatePage() {
  const sections = [
    { 
      name: 'Engineering', 
      desc: 'Secure mega infrastructure and industrial projects against physical damage and third-party liabilities (CAR, EAR, CPM).', 
      icon: HardHat, 
      color: 'bg-blue-50', 
      border: 'hover:border-blue-100', 
      iconColor: 'text-blue-500', 
      href: '/corporate/engineering' 
    },
    { 
      name: 'Property', 
      desc: 'Comprehensive cover for physical assets against fire, allied perils, and business interruption for commercial setups.', 
      icon: Home, 
      color: 'bg-orange-50', 
      border: 'hover:border-orange-100', 
      iconColor: 'text-orange-500', 
      href: '/corporate/property' 
    },
    { 
      name: 'Marine', 
      desc: 'Including Marine Hull Insurance and transit cover for safe movement of cargo globally through air, water, and road.', 
      icon: Anchor, 
      color: 'bg-purple-50', 
      border: 'hover:border-purple-100', 
      iconColor: 'text-purple-500', 
      href: '/corporate/marine' 
    },
    { 
      name: 'Liability', 
      desc: 'Protect business leaders with Directors & Officers, Commercial General Liability, and Professional Indemnity.', 
      icon: ShieldCheck, 
      color: 'bg-fuchsia-50', 
      border: 'hover:border-fuchsia-100', 
      iconColor: 'text-fuchsia-500', 
      href: '/corporate/liability' 
    },
    { 
      name: 'Employee Benefits', 
      desc: 'Group Mediclaim & Group Personal Accident to ensure a secure, healthy, and loyal workforce.', 
      icon: HeartPulse, 
      color: 'bg-emerald-50', 
      border: 'hover:border-emerald-100', 
      iconColor: 'text-emerald-500', 
      href: '/corporate/employee-benefits' 
    },
    { 
      name: 'Credit', 
      desc: 'Trade Credit Insurance to protect your accounts receivable against unforeseen bad debts and insolvency.', 
      icon: Building, 
      color: 'bg-rose-50', 
      border: 'hover:border-rose-100', 
      iconColor: 'text-rose-500', 
      href: '/corporate/credit' 
    },
    { 
      name: 'Affinity', 
      desc: 'Tailor-made insurance products beneficial for members or customers of an organization or association.', 
      icon: Award, 
      color: 'bg-indigo-50', 
      border: 'hover:border-indigo-100', 
      iconColor: 'text-indigo-500', 
      href: '/corporate/affinity' 
    },
    { 
      name: 'Warranty', 
      desc: 'Extended coverage beyond manufacturer warranties, providing peace of mind for corporate IT and operational assets.', 
      icon: FileCheck, 
      color: 'bg-pink-50', 
      border: 'hover:border-pink-100', 
      iconColor: 'text-pink-500', 
      href: '/corporate/warranty' 
    },
    { 
      name: 'Stock Turnover (STOP)', 
      desc: 'Seamless protection covering all transit and storage risks from raw material procurement to final product sale.', 
      icon: Box, 
      color: 'bg-cyan-50', 
      border: 'hover:border-cyan-100', 
      iconColor: 'text-cyan-500', 
      href: '/corporate/stop' 
    },
  ];

  return (
    <>
      <PageHero 
        title="Corporate Insurance" 
        description="Bespoke financial risk protection for modern enterprises spanning across all aspects of operations."
        imageSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
        imageAlt="Corporate skyscrapers representing corporate insurance"
        showContactCta={true}
        showIndustryActions={true}
        highlightIcon={<Shield className="w-5 h-5 text-primary" />}
        highlight1Text="Tailored Coverage"
        highlight2Text="Complete Protection"
      />
<section className="py-24 bg-white">
        <div className="layout-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((sec, i) => {
              const Icon = sec.icon;
              return (
                <div key={i} className={`${sec.color} p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent ${sec.border}`}>
                  <div className="flex items-start justify-between mb-8 gap-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-brand-marine mb-2">{sec.name}</h3>
                      <p className="text-sm text-slate-600 mb-6 leading-relaxed">{sec.desc}</p>
                    </div>
                    <div className="w-20 h-20 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:-translate-y-1 transition-transform">
                      <Icon className={`w-8 h-8 ${sec.iconColor}`} />
                    </div>
                  </div>
                  <Link href={sec.href} className="text-primary font-semibold text-sm hover:underline mt-auto inline-flex items-center gap-1">
                    Explore Cover &rarr;
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <CTAContact />
    </>
  );
}
