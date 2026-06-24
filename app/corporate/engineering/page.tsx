import { Metadata } from 'next';
import CTAContact from '@/components/CTAContact';
import Image from 'next/image';
import { HardHat, ArrowRight, Building, CheckCircle2, Shield, ShieldCheck, Factory, Wrench, Briefcase, Settings } from 'lucide-react';
import Link from 'next/link';
import { shimmerBlurDataURL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Engineering Insurance | Corporate Risk | Lambach Insurance Brokers',
  description: 'Comprehensive risk protection for construction, infrastructure, manufacturing, power, energy, and industrial projects.',
};

export default function EngineeringInsurancePage() {
  const features = [
    {
      title: "Comprehensive Risk Mitigation",
      desc: "Our solutions identify, assess, and mitigate project-related risks before they impact your business, guarding against operational uncertainties.",
      icon: Shield,
      bg: "bg-blue-50",
      borderColor: "hover:border-blue-100",
      iconColor: "text-blue-500"
    },
    {
      title: "End-to-End Project Protection",
      desc: "From planning and design to completion, our protection covers property damage, equipment failures, natural disasters, and third-party liabilities.",
      icon: Building,
      bg: "bg-orange-50",
      borderColor: "hover:border-orange-100",
      iconColor: "text-orange-500"
    },
    {
      title: "Solutions for Diverse Industries",
      desc: "Custom programs designed for sectors including manufacturing, infrastructure, power generation, renewable energy, and industrial operations.",
      icon: Factory,
      bg: "bg-purple-50",
      borderColor: "hover:border-purple-100",
      iconColor: "text-purple-500"
    },
    {
      title: "Advanced Risk Assessment",
      desc: "Detailed project evaluations conducted by our dedicated team to identify potential exposures and implement proactive safety strategies.",
      icon: Settings,
      bg: "bg-emerald-50",
      borderColor: "hover:border-emerald-100",
      iconColor: "text-emerald-500"
    }
  ];

  const benefits = [
    "Contractors All Risks (CAR) Protection",
    "Erection All Risks (EAR) Solutions",
    "Contractors Plant & Machinery Safeguards",
    "Advance Loss of Profits (ALOP) & DSU",
    "Third-Party Liability Coverages",
    "Machinery Breakdown Compensation",
    "Operational & Operational Disruption Protection"
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
                  <HardHat className="w-4 h-4" />
                  <span className="text-sm font-semibold tracking-wide uppercase">Corporate Solution</span>
                </div>
                
                <h1 className="font-heading text-5xl md:text-6xl text-brand-marine font-bold mb-6 leading-tight tracking-tight">
                  Engineering <br/>
                  <span className="text-primary">Insurance</span>
                </h1>
                
                <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
                  Safeguarding your investments, assets, equipment, workforce, and business operations against unexpected losses, ensuring project continuity and financial stability.
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
                    src="https://images.unsplash.com/photo-1573164574472-797ce4211116?auto=format&fit=crop&q=80&w=1200" 
                    alt="Engineering Insurance" 
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
            <h2 className="text-3xl font-bold text-brand-marine mb-6">Our Engineering Insurance is Your Blueprint for Protection</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              At Lambach Insurance Brokers Pvt. Ltd., we understand that every engineering and infrastructure project comes with unique challenges, complexities, and potential risks. From project inception to successful completion, unforeseen events can impact timelines, budgets, and operational efficiency.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our Engineering Insurance solutions are designed to provide comprehensive risk protection for construction, infrastructure, manufacturing, power, energy, and industrial projects. We help safeguard your investments, assets, equipment, workforce, and business operations against unexpected losses, ensuring project continuity and financial stability.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Key Features */}
      <section className="py-24 bg-slate-50">
        <div className="layout-container">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full mb-4 text-xs font-bold uppercase tracking-widest">
              Key Features
            </div>
            <h2 className="font-heading text-4xl font-bold text-brand-marine mb-4">
              Comprehensive Engineering Solutions
            </h2>
            <p className="text-slate-600">
              Discover how Lambach mitigates risks throughout your project lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((f, index) => {
              const IconComp = f.icon;
              return (
                <div key={index} className={`${f.bg} p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent ${f.borderColor}`}>
                  <div className="flex items-start justify-between mb-4 gap-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-brand-marine mb-2">{f.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                    <div className="w-16 h-16 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:rotate-6 transition-transform">
                      <IconComp className={`w-8 h-8 ${f.iconColor}`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Benefits & Why Choose */}
      <section className="py-24 bg-white">
        <div className="layout-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-marine mb-6">Why Choose Lambach Insurance Brokers?</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {[
                { title: "Client-Centric Approach", text: "We understand your project's objectives, operational challenges, and risk exposures, customizing plans to align with your business goals." },
                { title: "Dedicated Claims Support", text: "Our claims specialists provide end-to-end, smooth, and transparent claim management to reduce your operational downtime." },
                { title: "Continuous Risk Monitoring", text: "We actively monitor shifting landscape risks and adapt your coverage strategies dynamically at every stage." },
                { title: "Industry Expertise", text: "With deep cross-industry experience in infrastructure and energy, we confidently navigate complex project risks." }
              ].map((choose, i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col">
                  <h4 className="font-bold text-lg text-brand-marine mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    {choose.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{choose.text}</p>
                </div>
              ))}
            </div>

            <div className="mb-14">
              <h3 className="text-2xl font-bold text-brand-marine mb-6">Eligible Coverages:</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                 {benefits.map((item, index) => (
                   <li key={index} className="flex items-start gap-3 bg-[#f8fafc] p-4 rounded-xl shadow-sm border border-slate-100">
                     <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                     <span className="text-slate-700 font-medium">{item}</span>
                   </li>
                 ))}
              </ul>
            </div>
            
            {/* Custom CTA Card */}
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
              <h3 className="text-2xl font-bold text-brand-marine mb-4 relative z-10">Building Dreams, Ensuring Success</h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed relative z-10">
                At Lambach Insurance Brokers Pvt. Ltd., we are committed to protecting the vision, investments, and success of your engineering projects. Our comprehensive Engineering Insurance solutions provide the confidence to innovate, build, and grow while minimizing exposure to unforeseen risks.
              </p>
              <p className="text-lg font-medium text-brand-marine mb-8 relative z-10">
                Partner with Lambach Insurance Brokers and experience the assurance of having a trusted advisor dedicated to protecting your projects.
              </p>
              
              <Link href="/who-we-are#contact-us" className="inline-flex bg-primary hover:bg-primary-variant text-white px-8 py-3.5 rounded-full font-semibold items-center gap-2 hover:shadow-lg transition-all active:scale-95 relative z-10">
                Get Started Today
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
