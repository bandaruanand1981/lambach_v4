import { Metadata } from 'next';
import CTAContact from '@/components/CTAContact';
import Image from 'next/image';
import { Ship, ArrowRight, CheckCircle2, Shield, ShieldCheck, Anchor, PackageOpen, Truck, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { shimmerBlurDataURL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Marine Insurance | Corporate Risk | Lambach Insurance Brokers',
  description: 'Specialized risk protection for cargo, vessels, and maritime logistics across both domestic and international trade routes.',
};

export default function MarineInsurancePage() {
  const features = [
    {
      title: "Cargo Insurance",
      desc: "Protects goods and merchandise in transit against risks such as theft, accidental damage, loss, or fire during transportation by sea, air, rail, or road.",
      icon: PackageOpen,
      bg: "bg-blue-50",
      borderColor: "hover:border-blue-100",
      iconColor: "text-blue-500"
    },
    {
      title: "Hull & Machinery Insurance",
      desc: "Comprehensive coverage for physical loss or damage to vessels, ships, and onboard machinery caused by maritime collisions, fire, or groundings.",
      icon: Anchor,
      bg: "bg-orange-50",
      borderColor: "hover:border-orange-100",
      iconColor: "text-orange-500"
    },
    {
      title: "Protection & Indemnity (P&I)",
      desc: "Offers liability protection for vessel owners and operators against third-party claims involving bodily injury, environmental spills, or property damage.",
      icon: ShieldCheck,
      bg: "bg-purple-50",
      borderColor: "hover:border-purple-100",
      iconColor: "text-purple-500"
    },
    {
      title: "Marine Liability Insurance",
      desc: "Covers legal liabilities arising from marine operations for terminal operators, ship repairers, stevedores, and other maritime service providers.",
      icon: Ship,
      bg: "bg-emerald-50",
      borderColor: "hover:border-emerald-100",
      iconColor: "text-emerald-500"
    },
    {
      title: "Freight Forwarders Liability",
      desc: "Protects logistics entities against liability resulting from errors, omissions, or accidental handling issues during freight management.",
      icon: Truck,
      bg: "bg-amber-50",
      borderColor: "hover:border-amber-100",
      iconColor: "text-amber-500"
    }
  ];

  const coverages = [
    "Inland Marine Insurance",
    "Ocean Marine Insurance",
    "Charterers' Liability Insurance",
    "Marine Builders Risk Insurance",
    "Yacht Insurance",
    "Cargo Transit Insurance",
    "Freight Forwarders Liability Insurance",
    "Marine Liability Insurance"
  ];

  return (
    <>
      {/* Custom Hero matching construction page structure */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#eff6ff] via-white to-[#ecfdf5]">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[70%] bg-[#dbeafe] rounded-full mix-blend-multiply filter blur-[120px] opacity-70"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[60%] bg-[#d1fae5] rounded-full mix-blend-multiply filter blur-[120px] opacity-70"></div>
        
        <section className="relative flex flex-col items-center justify-center pt-36 pb-20 z-10">
          <div className="layout-container relative z-10 w-full">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="w-full lg:w-1/2">
                <div className="inline-flex items-center gap-2 bg-white/50 border border-primary/20 text-primary px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm shadow-sm">
                  <Ship className="w-4 h-4" />
                  <span className="text-sm font-semibold tracking-wide uppercase">Corporate Solution</span>
                </div>
                
                <h1 className="font-heading text-5xl md:text-6xl text-brand-marine font-bold mb-6 leading-tight tracking-tight">
                  Marine <br/>
                  <span className="text-primary">Insurance</span>
                </h1>
                
                <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
                  Protecting cargo, vessels, and global supply chain operations over sea, air, rail, or road transit paths.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-12">
                  <Link href="/who-we-are#contact-us" className="bg-primary hover:bg-primary-variant text-white px-8 py-3.5 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg transition-all active:scale-95">
                    Get a Quote
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
                
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-slate-600">Tailored Coverage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-slate-600">Complete Protection</span>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 relative lg:h-[600px] flex items-center justify-center">
                <div className="relative w-full max-w-md aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl ring-1 ring-slate-900/5">
                  <Image 
                    src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&q=80&w=1200" 
                    alt="Marine cargo transportation ship" 
                    width={800}
                    height={1000}
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer" 
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    placeholder="blur"
                    blurDataURL={shimmerBlurDataURL}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Section 1: Intro */}
      <section className="py-24 bg-white">
        <div className="layout-container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-marine mb-6">Marine Insurance Overview</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Marine Insurance is a specialized insurance solution designed to safeguard goods, vessels, and marine-related businesses from financial losses arising during transportation and maritime operations. Whether goods are transported by sea, air, inland waterways, or land, marine insurance provides critical protection against accidental damage, theft, loss, and liability exposures, ensuring business continuity and financial security.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Financial Security Title & Coverages */}
      <section className="py-24 bg-slate-50">
        <div className="layout-container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full mb-4 text-xs font-bold uppercase tracking-widest">
              Voyage Security
            </div>
            <h2 className="font-heading text-4xl font-bold text-brand-marine mb-4">
              Financial Security for Shipowners, Cargo Owners, & Logistics Businesses
            </h2>
            <p className="text-slate-600 mt-4 text-lg">
              At Lambach Insurance Brokers Pvt. Ltd., we understand that the maritime industry operates in a dynamic environment where risks can arise at every stage of transportation and vessel operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((f, idx) => {
              const IconComp = f.icon;
              return (
                <div key={idx} className={`${f.bg} p-8 rounded-[2rem] flex flex-col justify-between group hover:shadow-xl transition-all duration-300 border border-transparent ${f.borderColor}`}>
                  <div className="flex justify-between items-start mb-6 gap-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-brand-marine mb-2">{f.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
                    </div>
                    <div className="w-14 h-14 bg-white/70 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:rotate-6 transition-transform">
                      <IconComp className={`w-7 h-7 ${f.iconColor}`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: Why Choose List & Specific Highlights */}
      <section className="py-24 bg-white">
        <div className="layout-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-marine mb-6">Why Choose Lambach Insurance Brokers?</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {[
                { title: "Industry Expertise", text: "Our marine insurance specialists possess extensive knowledge of shipping, logistics, international trade, and maritime regulations." },
                { title: "Global Reach", text: "With a strong understanding of international commerce and global transportation networks, we cover crossing borders." },
                { title: "Dedicated Claims Support", text: "Our experienced claims team provides end-to-end Assistance, ensuring timely claim handling and fair settlements." },
                { title: "Proactive Risk Management", text: "Strategically manage shipping hazards and reinforce organizational resiliency to diminish loss likelihood." },
                { title: "Customized Coverage Solutions", text: "We tailor programs to match your cargo value, specific trade carrier loops, and routes." }
              ].map((reason, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col">
                  <h4 className="font-bold text-lg text-brand-marine mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    {reason.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{reason.text}</p>
                </div>
              ))}
            </div>

            <div className="mb-14">
              <h3 className="text-2xl font-bold text-brand-marine mb-6">Marine Insurance Coverages at a Glance:</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                 {coverages.map((item, index) => (
                   <li key={index} className="flex items-start gap-3 bg-[#f8fafc] p-4 rounded-xl shadow-sm border border-slate-100">
                     <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                     <span className="text-slate-700 font-medium">{item}</span>
                   </li>
                 ))}
              </ul>
            </div>
            
            {/* Custom CTA Box */}
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
              <h3 className="text-2xl font-bold text-brand-marine mb-4 relative z-10">Navigating Risk, Protecting Every Voyage</h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed relative z-10">
                At Lambach Insurance Brokers Pvt. Ltd., we are committed to helping businesses navigate the complexities of maritime risk with confidence. Our comprehensive Marine Insurance solutions provide the protection, expertise, and support needed to safeguard your cargo, vessels, and operations across every journey.
              </p>
              <p className="text-lg font-medium text-brand-marine mb-8 relative z-10">
                Choose Lambach Insurance Brokers for trusted marine risk protection, global expertise, and peace of mind on every voyage.
              </p>
              
              <Link href="/who-we-are#contact-us" className="inline-flex bg-primary hover:bg-primary-variant text-white px-8 py-3.5 rounded-full font-semibold items-center gap-2 hover:shadow-lg transition-all active:scale-95 relative z-10">
                Contact Our Marine Experts
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <CTAContact />
    </>
  );
}
