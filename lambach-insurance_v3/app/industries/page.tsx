import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTAContact from '@/components/CTAContact';
import { Building, Zap, FlaskConical, Laptop, Plane, Wheat, Film } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Industries We Serve | Lambach Insurance Brokers',
  description: 'Specialized insurance solutions for Construction, Power, IT, Chemical, Aviation, Agri Business, and Entertainment industries in India.',
  keywords: ['Industry Insurance', 'Construction Insurance', 'Power & Engineering Insurance', 'IT Cyber Insurance', 'Agri Business Insurance', 'Aviation Insurance', 'IRDAI Insurance Solutions'],
};

export default function IndustriesPage() {
  const industries = [
    { 
      name: 'Construction', 
      desc: 'Comprehensive risk coverage for large scale infrastructure and commercial build projects.', 
      icon: Building, 
      color: 'bg-blue-50', 
      border: 'hover:border-blue-100', 
      iconColor: 'text-blue-500', 
      href: '/industries/construction' 
    },
    { 
      name: 'Power & Engineering', 
      desc: 'Specialized policies for generation, transmission, and operational energy facilities.', 
      icon: Zap, 
      color: 'bg-orange-50', 
      border: 'hover:border-orange-100', 
      iconColor: 'text-orange-500', 
      href: '/industries/power-engineering' 
    },
    { 
      name: 'Chemical & Pharmaceutical', 
      desc: 'Tailored solutions for hazardous environments, product liability, and contamination.', 
      icon: FlaskConical, 
      color: 'bg-purple-50', 
      border: 'hover:border-purple-100', 
      iconColor: 'text-purple-500', 
      href: '/industries/chemical' 
    },
    { 
      name: 'Information Technology', 
      desc: 'Cyber liability, errors & omissions, and operational risk for tech companies.', 
      icon: Laptop, 
      color: 'bg-fuchsia-50', 
      border: 'hover:border-fuchsia-100', 
      iconColor: 'text-fuchsia-500', 
      href: '/industries/it' 
    },
    { 
      name: 'Aviation', 
      desc: 'Hull, liability, and hangar-keepers coverage for modern aviation fleets.', 
      icon: Plane, 
      color: 'bg-emerald-50', 
      border: 'hover:border-emerald-100', 
      iconColor: 'text-emerald-500', 
      href: '/industries/aviation' 
    },
    { 
      name: 'Agri Business', 
      desc: 'Crop, equipment, and supply chain protection for the agricultural sector.', 
      icon: Wheat, 
      color: 'bg-rose-50', 
      border: 'hover:border-rose-100', 
      iconColor: 'text-rose-500', 
      href: '/industries/agri-business' 
    },
    { 
      name: 'Entertainment', 
      desc: 'Event cancellation, production equipment, and liability for media.', 
      icon: Film, 
      color: 'bg-indigo-50', 
      border: 'hover:border-indigo-100', 
      iconColor: 'text-indigo-500', 
      href: '/industries/entertainment' 
    },
  ];

  return (
    <>
      <PageHero 
        title="Industries We Serve" 
        description="Specialized domain expertise translating to unmatched risk mitigation across global sectors."
        imageSrc="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200"
        imageAlt="Diverse industries factory and infrastructure"
        showIndustryActions={true}
        highlightIcon={<Building className="w-5 h-5 text-primary" />}
        highlight1Text="Tailored Industry Coverage"
      />
      <section className="py-24 bg-white">
        <div className="layout-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <div key={i} className={`${ind.color} p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent ${ind.border}`}>
                  <div className="flex items-start justify-between mb-8 gap-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-brand-marine mb-2">{ind.name}</h3>
                      <p className="text-sm text-slate-600 mb-6 leading-relaxed">{ind.desc}</p>
                    </div>
                    <div className="w-20 h-20 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                      <Icon className={`w-8 h-8 ${ind.iconColor}`} />
                    </div>
                  </div>
                  <Link href={ind.href} className="text-primary font-semibold text-sm hover:underline mt-auto inline-flex items-center gap-1">
                    Learn More &rarr;
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
