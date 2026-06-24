import { Metadata } from 'next';
import CTAContact from '@/components/CTAContact';
import Image from 'next/image';
import { Building, ArrowRight, CheckCircle2, Shield, ShieldCheck, Home, Briefcase, Landmark, HardHat } from 'lucide-react';
import Link from 'next/link';
import { shimmerBlurDataURL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Property Insurance | Corporate Risk | Lambach Insurance Brokers',
  description: 'Protecting valuable assets against unforeseen risks and financial losses with comprehensive property insurance.',
};

export default function PropertyInsurancePage() {
  const propertyTypes = [
    { title: "Residential Properties", desc: "Protecting homes, residential portfolios, and personal developments.", icon: Home, bg: "bg-blue-50", iconColor: "text-blue-500" },
    { title: "Commercial Buildings", desc: "Corporate headquarters, glass-facade complexes, and retail environments.", icon: Building, bg: "bg-orange-50", iconColor: "text-orange-500" },
    { title: "Industrial Facilities", desc: "Heavy machinery hubs, manufacturing centers, and specialized factories.", icon: HardHat, bg: "bg-purple-50", iconColor: "text-purple-500" },
    { title: "Warehouses & Storage", desc: "Inventory holdings, distribution points, and warehouse setups.", icon: Briefcase, bg: "bg-emerald-50", iconColor: "text-emerald-500" }
  ];

  const valueAverages = [
    "Plant, Equipment & Machinery Coverage",
    "Inventory & Stock Security",
    "Office Premises Protections",
    "Institutional & Educational Properties",
    "Accidental Damage & Natural Catastrophes Protection",
    "Burglary & Standard Fire Hazards safeguards"
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
                  <Building className="w-4 h-4" />
                  <span className="text-sm font-semibold tracking-wide uppercase">Corporate Solution</span>
                </div>
                
                <h1 className="font-heading text-5xl md:text-6xl text-brand-marine font-bold mb-6 leading-tight tracking-tight">
                  Property <br/>
                  <span className="text-primary">Insurance</span>
                </h1>
                
                <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
                  Protecting valuable physical assets and shielding your commercial investments from unforeseen risks, theft, fire, and catastrophic disruptions.
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
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" 
                    alt="Property Insurance skyscraper" 
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
            <h2 className="text-3xl font-bold text-brand-marine mb-6">Property Insurance</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Property Insurance is designed to provide comprehensive financial protection for residential, commercial, and industrial properties against accidental damage, natural catastrophes, fire, theft, and other unforeseen events. It helps businesses and property owners safeguard their investments, maintain operational continuity, and recover quickly from unexpected losses.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Safeguarding Assets & Coverages */}
      <section className="py-24 bg-slate-50">
        <div className="layout-container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full mb-4 text-xs font-bold uppercase tracking-widest">
              Asset Security
            </div>
            <h2 className="font-heading text-4xl font-bold text-brand-marine mb-4">
              Safeguarding Your Assets with Comprehensive Coverage
            </h2>
            <p className="text-slate-600">
              At Lambach Insurance Brokers Pvt. Ltd., we understand that your properties and assets represent significant investments. Here are the types of properties we secure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {propertyTypes.map((prop, idx) => {
              const IconItem = prop.icon;
              return (
                <div key={idx} className={`${prop.bg} p-6 rounded-3xl flex flex-col justify-between group hover:shadow-lg transition-all duration-300 border border-transparent`}>
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                      <IconItem className={`w-6 h-6 ${prop.iconColor}`} />
                    </div>
                    <h3 className="font-bold text-lg text-brand-marine mb-2">{prop.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{prop.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Why Choose */}
      <section className="py-24 bg-white">
        <div className="layout-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-marine mb-6">Why Choose Lambach Insurance Brokers for Property Insurance?</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {[
                { title: "Financial Security", text: "Our comprehensive coverage protects your assets against a broad spectrum of risks, helping you minimize financial losses." },
                { title: "Tailored Insurance Solutions", text: "We customize insurance programs based on the unique nature, value, and risk profile of your properties, ensuring optimal protection." },
                { title: "Expert Risk Advisory", text: "Our experienced insurance professionals provide expert guidance, from risk assessment and policy selection to ongoing advice." },
                { title: "Efficient Claims Assistance", text: "In the event of a loss, our dedicated claims team ensures a smooth, transparent, transparent, and swift claims recovery." },
                { title: "Comprehensive Risk Protection", text: "We help identify potential exposures and recommend suitable coverage solutions that strengthen your overall risk management strategy." }
              ].map((reason, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-lg text-brand-marine mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    {reason.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{reason.text}</p>
                </div>
              ))}
            </div>

            <div className="mb-14">
              <h3 className="text-2xl font-bold text-brand-marine mb-6">Assets and Safeguards Covered:</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                 {valueAverages.map((item, index) => (
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
              <h3 className="text-2xl font-bold text-brand-marine mb-4 relative z-10">Our Property Insurance Is More Than Coverage — It&apos;s Peace of Mind</h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed relative z-10">
                Protect what matters most with Lambach Insurance Brokers. Our Property Insurance solutions are designed to safeguard your valuable assets, secure your financial interests, and provide confidence in the face of uncertainty.
              </p>
              <p className="text-lg font-medium text-brand-marine mb-8 relative z-10">
                Choose Lambach Insurance Brokers for comprehensive property protection, expert guidance, and a trusted partnership dedicated to securing your future.
              </p>
              
              <Link href="/who-we-are#contact-us" className="inline-flex bg-primary hover:bg-primary-variant text-white px-8 py-3.5 rounded-full font-semibold items-center gap-2 hover:shadow-lg transition-all active:scale-95 relative z-10">
                Get Secured Now
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
