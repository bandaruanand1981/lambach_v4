import { Metadata } from 'next';
import CTAContact from '@/components/CTAContact';
import Image from 'next/image';
import { Shield, ArrowRight, CheckCircle2, ShieldCheck, Wrench, Laptop, Tv, Car, Settings, Home } from 'lucide-react';
import Link from 'next/link';
import { shimmerBlurDataURL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Warranty Insurance | Corporate Risk | Lambach Insurance Brokers',
  description: 'Comprehensive risk coverage extending beyond standard manufacturer limits, shielding assets from electrical and mechanical failures.',
};

export default function WarrantyInsurancePage() {
  const warrantyAssets = [
    { title: "Consumer Electronics", desc: "Coverage for smartphones, laptops, cameras, and key personal computing setups.", icon: Laptop, bg: "bg-blue-50" },
    { title: "Home Appliances", desc: "Reliable protection for refrigerators, washing machines, and household ovens.", icon: Tv, bg: "bg-orange-50" },
    { title: "Automobile Warranties", desc: "Extended engine, transmission, and drivetrain checks surpassing manufacture periods.", icon: Car, bg: "bg-purple-50" },
    { title: "Commercial Equipment", desc: "Heavy industrial systems, tooling machinery, and manufacturing layouts.", icon: Settings, bg: "bg-emerald-50" },
    { title: "Home Systems & Components", desc: "Central heating, piping, ventilation, and complex wiring security.", icon: Home, bg: "bg-sky-50" }
  ];

  const brokerageBenefits = [
    { title: "Extended Protection", desc: "Lengthens safety frames past factory guarantees to block surprise repair bills." },
    { title: "Financial Peace of Mind", desc: "Converts variable maintenance overheads into simple, predictable premium steps." },
    { title: "Tailored Structures", desc: "Customized policy lengths and claims limits adapted specifically for your distribution channels." },
    { title: "Efficient Claims Processing", desc: "Rapid work-order checks and repair dispatches to minimize equipment idle-times." }
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
                  <Wrench className="w-4 h-4" />
                  <span className="text-sm font-semibold tracking-wide uppercase">Corporate Solution</span>
                </div>
                
                <h1 className="font-heading text-5xl md:text-6xl text-brand-marine font-bold mb-6 leading-tight tracking-tight">
                  Warranty <br/>
                  <span className="text-primary">Insurance</span>
                </h1>
                
                <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
                  Extending asset protection beyond initial manufacturer parameters, protecting consumers and enterprises from high maintenance expenses.
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
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200" 
                    alt="Warranty and machinery maintenance checking" 
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
            <h2 className="text-3xl font-bold text-brand-marine mb-6">Warranty Insurance</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              In the insurance industry, warranty products serve as invaluable tools to protect individuals and businesses from unexpected financial burdens associated with the repair or replacement of goods. As dedicated insurance brokers, we specialize in offering warranty products that provide peace of mind to both consumers and businesses alike.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Product Categories Covered */}
      <section className="py-24 bg-slate-50">
        <div className="layout-container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full mb-4 text-xs font-bold uppercase tracking-widest">
              Asset Protection
            </div>
            <h2 className="font-heading text-4xl font-bold text-brand-marine mb-4">
              Scope of Warranty Insurance Products
            </h2>
            <p className="text-slate-600">
              Warranty products safeguard assets against unexpected mechanical and electrical failures during specified coverage frames.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            {warrantyAssets.map((asset, idx) => {
              const IconComp = asset.icon;
              return (
                <div key={idx} className={`${asset.bg} p-8 rounded-3xl flex flex-col justify-between group hover:shadow-lg transition-all border border-transparent hover:border-slate-100`}>
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-white flex items-center justify-center rounded-2xl flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-brand-marine mb-2">{asset.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{asset.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Our Approach & Benefits */}
      <section className="py-24 bg-white">
        <div className="layout-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-marine mb-6 text-center font-heading">Our Approach & Client-Centric Strategy</h2>
            <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              As insurance brokers committed to delivering tailored solutions, we follow an intentional client-centric approach to warranty product structures.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {[
                { title: "Comprehensive Coverage Options", text: "We work closely with leading insurers to offer warranty designs carrying labor covers, repair parts, and emergency dispatches." },
                { title: "Customization Flexibility", text: "Whether supporting small consumer goods or massive enterprise grids, we mold coverage values to match distinct dealer profiles." },
                { title: "Claims Assistance & Advocacy", text: "Our staff guides users step-by-step during warranty requests, pushing for fast repairs with certified technicians." },
                { title: "Educational & Policy Support", text: "Conducting dynamic, periodic policy evaluation updates to maintain program relevance across changing asset lives." }
              ].map((step, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-base text-brand-marine mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    {step.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-bold text-brand-marine mb-6 text-center">Benefits of Warranty Cover Through Lambach:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                 {brokerageBenefits.map((item, index) => (
                   <li key={index} className="flex items-start gap-3 bg-[#f8fafc] p-4 rounded-xl shadow-sm border border-slate-100 list-none">
                     <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                     <div>
                       <span className="text-brand-marine text-base font-bold block">{item.title}</span>
                       <span className="text-slate-600 text-xs mt-1 block leading-normal">{item.desc}</span>
                     </div>
                   </li>
                 ))}
              </div>
            </div>
            
            {/* Custom CTA Box */}
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
              <h3 className="text-2xl font-bold text-brand-marine mb-4 relative z-10">Beyond Products, Promising Peace</h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed relative z-10">
                At Lambach Insurance Brokers, we recognize the significance of warranty insurance in providing financial protection against unexpected breakdowns. Through our client-focused approach, we aim to offer tailored solutions that bring peace of mind and security to individuals and businesses alike.
              </p>
              
              <Link href="/who-we-are#contact-us" className="inline-flex bg-primary hover:bg-primary-variant text-white px-8 py-3.5 rounded-full font-semibold items-center gap-2 hover:shadow-lg transition-all active:scale-95 relative z-10">
                Contact A Specialist
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
