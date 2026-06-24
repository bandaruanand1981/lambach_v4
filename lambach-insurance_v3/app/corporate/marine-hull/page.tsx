import { Metadata } from 'next';
import CTAContact from '@/components/CTAContact';
import Image from 'next/image';
import { Anchor, ArrowRight, CheckCircle2, Shield, ShieldCheck, Ship, AlertOctagon, HelpCircle, HardHat, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { shimmerBlurDataURL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Marine Hull Insurance | Corporate Risk | Lambach Insurance Brokers',
  description: 'Specialized protective coverage for vessels, hull and machinery, shipbuilder assets, and maritime operations.',
};

export default function MarineHullInsurancePage() {
  const perilsCovered = [
    "Perils of the sea, rivers, lakes, and navigable waters",
    "Stranding, sinking, grounding, or capsizing",
    "Fire and explosion damage on deck or hull",
    "Violent theft by external parties or piracy",
    "Collision, general average sacrifices & salvage charges",
    "Crew negligence & engine/nuclear component breakdowns"
  ];

  const exclusions = [
    "Deliberate or malicious damage by wrongful acts",
    "Atomic or chemical nuclear weapons risks",
    "Radioactive and electromagnetic contaminants",
    "Insolvency or financial defaults of ship owners",
    "Unsanctioned war, riots, strikes, and commotion",
    "Political terrorist or radical motivated attacks"
  ];

  const specializedSolutions = [
    { title: "Hull & Machinery", desc: "For full physical vessel bodies.", icon: Anchor, bg: "bg-blue-50", textCol: "text-blue-500" },
    { title: "Ship Builders Risk", desc: "For vessel construction projects.", icon: HardHat, bg: "bg-orange-50", textCol: "text-orange-500" },
    { title: "Charterers Liability", desc: "For freight carriers.", icon: Ship, bg: "bg-purple-50", textCol: "text-purple-500" },
    { title: "P&I Coverages", desc: "Protection and indemnity pools.", icon: ShieldCheck, bg: "bg-emerald-50", textCol: "text-emerald-500" }
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
                  <Anchor className="w-4 h-4" />
                  <span className="text-sm font-semibold tracking-wide uppercase">Corporate Solution</span>
                </div>
                
                <h1 className="font-heading text-5xl md:text-6xl text-brand-marine font-bold mb-6 leading-tight tracking-tight">
                  Marine Hull <br/>
                  <span className="text-primary">Insurance</span>
                </h1>
                
                <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
                  Protecting vessels, machinery, and associated maritime interests against physical loss, structural damage, and operational mishaps at sea.
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
                    src="https://images.unsplash.com/photo-1542385151-efd9000785a0?auto=format&fit=crop&q=80&w=1200" 
                    alt="Marine Hull vessel structure" 
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
            <h2 className="text-3xl font-bold text-brand-marine mb-6">Marine Hull Protection Overview</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Marine Hull Insurance provides comprehensive protection for shipowners, charterers, shipbuilders, financiers, and other stakeholders with an insurable interest in vessels and maritime assets. This specialized insurance safeguards ships, machinery, and associated interests against physical loss, damage, and operational risks encountered during marine operations.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Specialized Solutions */}
      <section className="py-24 bg-slate-50">
        <div className="layout-container">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full mb-4 text-xs font-bold uppercase tracking-widest">
              Risk Management
            </div>
            <h2 className="font-heading text-4xl font-bold text-brand-marine mb-4">
              Comprehensive Vessel & Machinery Protection
            </h2>
            <p className="text-slate-600">
              Tailored hull structures safeguarding shipbuilders, vessel operators, and port authorities from operational losses.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {specializedSolutions.map((sol, idx) => {
              const IconComp = sol.icon;
              return (
                <div key={idx} className={`${sol.bg} p-6 rounded-3xl flex flex-col justify-between group hover:shadow-lg transition-all border border-transparent`}>
                  <div>
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                      <IconComp className={`w-6 h-6 ${sol.textCol}`} />
                    </div>
                    <h3 className="font-bold text-lg text-brand-marine mb-2">{sol.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{sol.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 mt-16">
            <div>
              <h3 className="font-bold text-xl text-brand-marine mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                Perils and Risks Covered
              </h3>
              <ul className="space-y-3">
                {perilsCovered.map((per, i) => (
                  <li key={i} className="flex items-start gap-2 bg-white px-4 py-2.5 rounded-lg border border-slate-100 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span className="text-sm text-slate-700 font-medium">{per}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-xl text-brand-marine mb-6 flex items-center gap-2 text-rose-600">
                <AlertOctagon className="w-6 h-6 text-rose-600" />
                Key Exclusions
              </h3>
              <ul className="space-y-3">
                {exclusions.map((exc, i) => (
                  <li key={i} className="flex items-start gap-2 bg-white px-4 py-2.5 rounded-lg border border-slate-100 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-rose-500 mt-2 flex-shrink-0"></span>
                    <span className="text-sm text-slate-700 font-medium">{exc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services and Clients We Serve */}
      <section className="py-24 bg-white">
        <div className="layout-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-marine mb-6">Who We Serve & Our Value Services</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div>
                <h4 className="font-bold text-lg text-brand-marine mb-4">Industries and Clients We Serve</h4>
                <div className="space-y-2">
                  {[
                    "Ship Owners and Ship Managers",
                    "Charterers and Vessel Operators",
                    "Offshore and Onshore Energy Companies",
                    "Oil & Gas Organizations",
                    "Port Owners and Port Management Companies",
                    "Marine Logistics and Shipping Businesses"
                  ].map((client, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-lg border border-slate-100 text-sm font-medium text-slate-700">
                      <Anchor className="w-4 h-4 text-primary flex-shrink-0" />
                      {client}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-lg text-brand-marine mb-4">Value-Added Brokerage Services</h4>
                <div className="space-y-2">
                  {[
                    "Portfolio Analysis & Coverage Optimization",
                    "Competitive Premium Negotiation & Underwriter Matching",
                    "Premium Due Date Monitoring & Direct Advisory",
                    "Claims Management, Adjusting & Settlement Support",
                    "Technical Training and Marine Insurance Awareness"
                  ].map((srv, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-lg border border-slate-100 text-sm font-medium text-slate-700">
                      <Briefcase className="w-4 h-4 text-primary flex-shrink-0" />
                      {srv}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Custom CTA Box */}
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
              <h3 className="text-2xl font-bold text-brand-marine mb-4 relative z-10">Safeguarding Seafaring Assets</h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed relative z-10">
                Marine Hull Insurance plays a vital role in protecting valuable maritime investments and ensuring business continuity. By covering repair, replacement, and operational risks, it helps shipowners and marine businesses maintain financial stability and confidence in an increasingly complex maritime environment.
              </p>
              <p className="text-lg font-medium text-brand-marine mb-8 relative z-10">
                At Lambach Insurance Brokers Pvt. Ltd., we combine industry expertise, global market access, and dedicated claims support to deliver tailored Marine Hull Insurance solutions that protect your vessels, operations, and long-term success.
              </p>
              
              <Link href="/who-we-are#contact-us" className="inline-flex bg-primary hover:bg-primary-variant text-white px-8 py-3.5 rounded-full font-semibold items-center gap-2 hover:shadow-lg transition-all active:scale-95 relative z-10">
                Get Covered with Lambach
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
