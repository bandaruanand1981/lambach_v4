import { Metadata } from 'next';
import CTAContact from '@/components/CTAContact';
import Image from 'next/image';
import { 
  Shield, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Heart, 
  UserPlus, 
  Globe, 
  Award, 
  Briefcase, 
  BookOpen 
} from 'lucide-react';
import Link from 'next/link';
import { shimmerBlurDataURL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Group Personal Accident Insurance | Employee Welfare | Lambach Insurance Brokers',
  description: 'Global 24/7 protection against accidental death, permanent total disability, and temporary income loss for your employees.',
};

export default function GroupPersonalAccidentInsurancePage() {
  const coreSolutions = [
    {
      title: "Accidental Death",
      desc: "Critical financial support paid directly to nominated family members in the tragic case of an unexpected fatal accident.",
      icon: ShieldCheck,
      bg: "bg-blue-50",
      border: "hover:border-blue-100",
      iconColor: "text-blue-500",
      hoverEffect: "group-hover:rotate-6"
    },
    {
      title: "Permanent Total Disability",
      desc: "Generous long-term lump-sum payouts if an accident permanently prevents employees from engaging in future occupation.",
      icon: Award,
      bg: "bg-orange-50",
      border: "hover:border-orange-100",
      iconColor: "text-orange-500",
      hoverEffect: "group-hover:-rotate-6"
    },
    {
      title: "Permanent Partial Disability",
      desc: "Carefully structured benefit scales corresponding directly to the physical loss of sight, hearing, or designated limbs.",
      icon: Shield,
      bg: "bg-purple-50",
      border: "hover:border-purple-100",
      iconColor: "text-purple-500",
      hoverEffect: "group-hover:scale-110"
    },
    {
      title: "Temporary Total Disability",
      desc: "Weekly salary replacement to shield employees and cover household living costs during their intense medical recovery phase.",
      icon: Briefcase,
      bg: "bg-fuchsia-50",
      border: "hover:border-fuchsia-100",
      iconColor: "text-fuchsia-500",
      hoverEffect: "group-hover:rotate-12"
    },
    {
      title: "Medical Charges Cover",
      desc: "Essential medical cost reimbursement extending across outpatient (OPD) and inpatient diagnostics and care.",
      icon: Heart,
      bg: "bg-emerald-50",
      border: "hover:border-emerald-100",
      iconColor: "text-emerald-500",
      hoverEffect: "group-hover:-translate-y-1"
    },
    {
      title: "Education Benefit Grant",
      desc: "Specialized financial grants supporting underlying tuition requirements and academic security for dependent children.",
      icon: BookOpen,
      bg: "bg-rose-50",
      border: "hover:border-rose-100",
      iconColor: "text-rose-500",
      hoverEffect: "group-hover:scale-105"
    }
  ];

  const accidentalEvents = [
    "Rail, road, and air travel accidents",
    "Collisions, slips, trips, or sudden falls",
    "Gas cylinder explosions and fire burns",
    "Snake bites, frostbites, and hazardous elements",
    "Drowning, poisoning, and acute physical impacts"
  ];

  const flexibleOptions = [
    "Basic Accidental Death default protection layer",
    "PPD, PTD and TTD income support integrations",
    "Inpatient/outpatient medical expense coverage brackets",
    "Accident-related loan protect mechanisms",
    "Dependent children educational scholarship funds",
    "Customized executive welfare packages"
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
                  <UserPlus className="w-4 h-4" />
                  <span className="text-sm font-semibold tracking-wide uppercase">Welfare Solution</span>
                </div>
                
                <h1 className="font-heading text-5xl md:text-6xl text-brand-marine font-bold mb-6 leading-tight tracking-tight">
                  Group Personal <br/>
                  <span className="text-primary">Accident</span>
                </h1>
                
                <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
                  Safeguarding your workforce 24/7 with worldwide protection against tragic accidental events, disability, and subsequent income losses.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-12">
                  <Link href="/who-we-are#contact-us" className="bg-primary hover:bg-primary-variant text-white px-8 py-3.5 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg transition-all active:scale-95">
                    Get a Quote
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
                
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-slate-600">Worldwide Coverage</span>
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
                    src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1200" 
                    alt="Active recovery and therapeutic support for accident victims" 
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
            <h2 className="text-3xl font-bold text-brand-marine mb-6">Group Personal Accident Insurance Overview</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Group Personal Accident Insurance is an essential employee benefit designed to provide financial protection against accidental death, disability, and injury. As part of a comprehensive HR and employee welfare strategy, many organizations choose this coverage to safeguard their workforce and support employees and their families during unforeseen circumstances.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              By offering Group Personal Accident Insurance, businesses demonstrate their commitment to employee well-being while ensuring financial security in the event of accident-related risks.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Specialty Cards Grid matching Construction Page */}
      <section className="py-24 bg-slate-50">
        <div className="layout-container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full mb-4 text-xs font-bold uppercase tracking-widest">
              Staff Protection
            </div>
            <h2 className="font-heading text-4xl font-bold text-brand-marine mb-4">
              Comprehensive Protection Against Accidental Risks
            </h2>
            <p className="text-slate-600 mt-4 text-lg">
              Accidents can occur unexpectedly, producing serious financial and emotional strain. Our bento benefits cushion impacts with comprehensive, structured payoffs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {coreSolutions.map((sol, idx) => {
              const IconComp = sol.icon;
              return (
                <div key={idx} className={`${sol.bg} p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent ${sol.border}`}>
                  <div className="flex items-start justify-between mb-8 gap-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-brand-marine mb-2">{sol.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {sol.desc}
                      </p>
                    </div>
                    <div className={`w-20 h-20 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm transition-transform duration-300 ${sol.hoverEffect}`}>
                      <IconComp className={`w-8 h-8 ${sol.iconColor}`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Dual Lists and Call To Action */}
      <section className="py-24 bg-white">
        <div className="layout-container">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <h2 className="text-3xl font-bold text-brand-marine mb-4">Risk Evaluation and Customizable Frameworks</h2>
            <p className="text-slate-600 text-sm max-w-2xl mx-auto leading-relaxed">
              We design structures addressing precise employer needs. View our operational coverage spectrums and custom modules.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="font-bold text-xl text-brand-marine mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                Covered Accidental Events
              </h3>
              <ul className="space-y-3">
                {accidentalEvents.map((ev, i) => (
                  <li key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:translate-x-1 transition-transform">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span className="text-sm text-slate-700 font-medium">{ev}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-slate-500 mt-4 italic">
                * Note: The above accidental events are indicative and not exhaustive. Complete criteria are defined within formal policy terms.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl text-brand-marine mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                Flexible Payout & Coverage Options
              </h3>
              <ul className="space-y-3">
                {flexibleOptions.map((opt, i) => (
                  <li key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:translate-x-1 transition-transform">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                    <span className="text-sm text-slate-700 font-medium">{opt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Custom CTA Box */}
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 relative overflow-hidden text-center md:text-left">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
              <h3 className="text-2xl font-bold text-brand-marine mb-4 relative z-10">Strength in Numbers, Security in Coverage</h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed relative z-10">
                Group Personal Accident Insurance provides employees and their families with vital financial support during challenging times. By protecting against the financial consequences of accidental injuries and disabilities, organizations can foster employee confidence, enhance workplace security, and strengthen overall workforce well-being.
              </p>
              <p className="text-lg font-medium text-brand-marine mb-8 relative z-10">
                At Lambach Insurance Brokers, we deliver customized Group Personal Accident Insurance solutions that provide peace of mind, financial stability, and comprehensive protection for your employees—wherever they are in the world.
              </p>
              
              <Link href="/who-we-are#contact-us" className="inline-flex bg-primary hover:bg-primary-variant text-white px-8 py-3.5 rounded-full font-semibold items-center gap-2 hover:shadow-lg transition-all active:scale-95 relative z-10">
                Secure Your Workforce Now
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
