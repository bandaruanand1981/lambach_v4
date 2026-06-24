import { Metadata } from 'next';
import CTAContact from '@/components/CTAContact';
import Image from 'next/image';
import { Shield, ArrowRight, CheckCircle2, ShieldCheck, Truck, Package, Factory, Compass, HardHat } from 'lucide-react';
import Link from 'next/link';
import { shimmerBlurDataURL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Stock Turnover Policy (STOP) | Corporate Logistics | Lambach Insurance Brokers',
  description: 'Integrating transit, production, and static warehouse storage risks under a unified, gapless logistic security matrix.',
};

export default function StockTurnoverPolicyPage() {
  const stockPhases = [
    { title: "Raw Materials", desc: "Securing input components, crude assets, and primary ingredients from source mines or farms.", icon: Factory, bg: "bg-blue-50/70", col: "text-blue-500" },
    { title: "Semi-Finished Goods", desc: "Shielding inventory as it travels between intermediate processing sites or machinery lines.", icon: HardHat, bg: "bg-orange-50/70", col: "text-orange-500" },
    { title: "Finished Goods", desc: "Protecting completed, packaged items waiting in fulfillment docks or dealer yards.", icon: Package, bg: "bg-purple-50/70", col: "text-purple-500" },
    { title: "Static Storage", desc: "Covering stock resting inside warehouses, cold reserves, or third-party facilities.", icon: ShieldCheck, bg: "bg-emerald-50/70", col: "text-emerald-500" },
    { title: "Goods in Transit", desc: "Securing cargo across international borders via ocean container ships, air, or rail freights.", icon: Truck, bg: "bg-sky-50/70", col: "text-sky-500" }
  ];

  const stopBenefits = [
    { title: "Gapless Protection", text: "By merging transit and storage into a single policy, STOP eliminates potential coverage disputes between marine and property insurers over where damage occurred." },
    { title: "Significant Cost Efficiency", text: "Grouping global transit and storage exposures together leverages high-scale marine premiums, offering massive savings over separate covers." },
    { title: "Customization & Flexibility", text: "We tailor valuation parameters, deductibles, and transit limits to match your specific supply chain patterns and inventory turnovers." },
    { title: "Globally Synchronized Claims", text: "Access worldwide damage assessment networks, accelerating approvals and salvage procedures during major logistical disasters." },
    { title: "Administrative Ease", text: "Reduces administrative burdens by replacing multiple policy renewals, declarations, and audits with a single annual master contract." }
  ];

  const whyPartnerLambach = [
    { title: "Supply Chain Risk Specialists", desc: "Our team possesses deep technical expertise in analyzing complex international shipping routes and factory storage risks." },
    { title: "Holistic Risk Evaluations", desc: "We identify physical security flaws, transit bottlenecks, and storage safety concerns to improve risk profiles and reduce premium costs." },
    { title: "Access to Premier Syndicates", desc: "We utilize our direct relationships with top-tier marine insurers to negotiate broad coverage terms and competitive deductibles." },
    { title: "Dedicated Claims Advocacy", desc: "In the event of a cargo loss or warehouse disaster, we stand by you as proactive advocates to ensure fast, fair settlement processes." }
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
                  <Compass className="w-4 h-4" />
                  <span className="text-sm font-semibold tracking-wide uppercase">Logistics Protection</span>
                </div>
                
                <h1 className="font-heading text-5xl md:text-6xl text-brand-marine font-bold mb-6 leading-tight tracking-tight">
                  Stock Turnover <br/>
                  <span className="text-primary">Policy (STOP)</span>
                </h1>
                
                <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
                  Integrating global transit and static warehouse inventory risks under one unified, gapless, cost-effective logistic protection master schema.
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
                    src="https://images.unsplash.com/photo-1586528116311-ad8ed7c663be?auto=format&fit=crop&q=80&w=1200" 
                    alt="Warehouse inventory logistics operations stock throughput cover" 
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
            <h2 className="text-3xl font-bold text-brand-marine mb-6">Stock Turnover Policy (STOP)</h2>
            <p className="subtitle text-primary font-bold mb-4 uppercase tracking-wider text-sm">Gapless Supply Chain Insurance</p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              A Stock Turnover Policy (STOP), also known as a Stock Throughput Policy, is an all-inclusive insurance option designed for manufacturing, wholesale, and retail businesses. It provides seamless, continuous coverage for raw materials, semi-finished products, and finished goods at all stages of the supply chain—from sourcing and processing to static storage and final delivery.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              By combining international transit, domestic transport, and warehouse storage risks into a single, cohesive policy, STOP eliminates potential coverage gaps while delivering significant cost advantages and administrative efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Phase Breakdown */}
      <section className="py-24 bg-slate-50">
        <div className="layout-container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full mb-4 text-xs font-bold uppercase tracking-widest">
              Stock Flow Map
            </div>
            <h2 className="font-heading text-4xl font-bold text-brand-marine mb-4">
              Comprehensive Inventory and Supply Chain Protection
            </h2>
            <p className="text-slate-600 mt-4 leading-relaxed">
              At Lambach Insurance Brokers, we understand the complexities and risks involved in managing global supply chains and high-value inventory. A traditional approach involving separate marine cargo and property storage policies can often leave cargo exposed to critical gaps or double insurance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {stockPhases.map((phase, idx) => {
              const IconComp = phase.icon;
              return (
                <div key={idx} className={`${phase.bg} p-8 rounded-3xl flex flex-col justify-between group hover:shadow-xl transition-all border border-transparent`}>
                  <div className="flex gap-4 items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-brand-marine mb-2">{phase.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{phase.desc}</p>
                    </div>
                    <div className="w-12 h-12 bg-white/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                      <IconComp className={`w-6 h-6 ${phase.col}`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Benefits and Brokers Approach */}
      <section className="py-24 bg-white">
        <div className="layout-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-marine mb-10 text-center font-heading">Benefits of STOP Through Lambach</h2>
            
            <div className="space-y-6 mb-16">
              {stopBenefits.map((benefit, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex gap-4">
                  <div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-brand-marine mb-1">{benefit.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{benefit.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-16 border-t border-slate-100 pt-16">
              <h3 className="text-2xl font-bold text-brand-marine mb-8 text-center">Why Sponsor STOP with Lambach Risks?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {whyPartnerLambach.map((lp, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm shadow-slate-100/50 flex flex-col justify-between hover:border-primary/20 transition-colors">
                    <div>
                      <h5 className="font-bold text-base text-brand-marine mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                        {lp.title}
                      </h5>
                      <p className="text-slate-600 text-xs leading-relaxed">{lp.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom CTA Box */}
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
              <h3 className="text-2xl font-bold text-brand-marine mb-4 relative z-10">Secure Your Assets, Optimize Your Flows</h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed relative z-10">
                At Lambach Insurance Brokers, we help businesses secure their supply chains and optimize inventory risk management through tailored Stock Turnover Policies. Our expert team designs solutions that support continuous growth, improve operational resilience, and protect vital assets at every stage of the business journey.
              </p>
              <p className="text-lg font-medium text-brand-marine mb-8 relative z-10">
                Ensure end-to-end supply chain security, lower administrative overheads, and trade with confidence. Partner with Lambach today to customize your master Stock Turnover Policy.
              </p>
              
              <Link href="/who-we-are#contact-us" className="inline-flex bg-primary hover:bg-primary-variant text-white px-8 py-3.5 rounded-full font-semibold items-center gap-2 hover:shadow-lg transition-all active:scale-95 relative z-10">
                Request A Quote
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
