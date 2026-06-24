import { Metadata } from 'next';
import CTAContact from '@/components/CTAContact';
import Image from 'next/image';
import { 
  Shield, 
  ArrowRight, 
  CheckCircle2, 
  Heart, 
  ShieldCheck, 
  Activity, 
  Users, 
  PlusCircle, 
  UserCheck, 
  Home, 
  Stethoscope 
} from 'lucide-react';
import Link from 'next/link';
import { shimmerBlurDataURL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Group Mediclaim Insurance | Corporate Welfare | Lambach Insurance Brokers',
  description: 'Comprehensive health protection and medical insurance plans tailored specifically for your workforce and employees.',
};

export default function GroupMediclaimInsurancePage() {
  const coreSolutions = [
    {
      title: "Hospitalization Care",
      desc: "Complete coverage for essential room rent, boarding, and nursing charges incurred during standard inpatient hospital stays.",
      icon: Home,
      bg: "bg-blue-50",
      border: "hover:border-blue-100",
      iconColor: "text-blue-500"
    },
    {
      title: "Professional Fees",
      desc: "Covers diagnostic evaluations, surgical consults, and active treatment costs for physicians, surgeons, and specialists.",
      icon: UserCheck,
      bg: "bg-orange-50",
      border: "hover:border-orange-100",
      iconColor: "text-orange-500"
    },
    {
      title: "Advanced Procedures",
      desc: "Comprehensive funding for high-value treatments including dialysis, chemotherapy, radiotherapy, and essential organ transplants.",
      icon: Activity,
      bg: "bg-purple-50",
      border: "hover:border-purple-100",
      iconColor: "text-purple-500"
    },
    {
      title: "Domiciliary Treatment",
      desc: "Medical coverage for operations or treatments requiring intensive medical supervision at the employee's residence.",
      icon: ShieldCheck,
      bg: "bg-fuchsia-50",
      border: "hover:border-fuchsia-100",
      iconColor: "text-fuchsia-500"
    },
    {
      title: "Pre & Post Care",
      desc: "Protects against medical expenses incurred 30 days prior to admission and up to 60 days following successful hospital discharge.",
      icon: Stethoscope,
      bg: "bg-emerald-50",
      border: "hover:border-emerald-100",
      iconColor: "text-emerald-500"
    },
    {
      title: "Cashless Network Benefit",
      desc: "Instant access to a massive national grid of cashless network facilities, eliminating personal upfront financial strain.",
      icon: Users,
      bg: "bg-rose-50",
      border: "hover:border-rose-100",
      iconColor: "text-rose-500"
    }
  ];

  const coverageHighlights = [
    "Room rent, boarding, and nursing expenses",
    "Medical practitioner, surgeon, consultant, and anesthetist fees",
    "Anesthesia, blood, oxygen, OT, medicines, and diagnostic tests",
    "Dialysis, chemotherapy, radiotherapy, pacemakers, and organ transplants",
    "Domiciliary hospitalization and vitamins prescribed as treatment",
    "Daily hospitalization allowance for miscellaneous expenses",
    "Ambulance charges and 24-hour day-care procedures",
    "Pre- and post-hospitalization benefit claims",
    "Periodic health check-ups and cashless treatment at network hospitals"
  ];

  const addOnCovers = [
    { title: "Waiver of Pre-Existing Diseases", desc: "No waiting period requirement; coverage starts for pre-existing conditions from Day One." },
    { title: "Maternity & Newborn Cover from Day 1", desc: "Immediate coverage for child deliveries and prenatal care with zero initial delays." },
    { title: "Corporate Buffer Allocation", desc: "Access extra corporate health pool reserves for exceptionally high-value medical claims." },
    { title: "Dependent Parents Integration", desc: "Extend coverage parameters seamlessly to include employees' spouses, children, and parents." }
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
                  <Heart className="w-4 h-4" />
                  <span className="text-sm font-semibold tracking-wide uppercase">Welfare Solution</span>
                </div>
                
                <h1 className="font-heading text-5xl md:text-6xl text-brand-marine font-bold mb-6 leading-tight tracking-tight">
                  Group Mediclaim <br/>
                  <span className="text-primary">Insurance</span>
                </h1>
                
                <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
                  Safeguarding your workforce against escalating medical costs, securing timely hospital care, and supporting physical well-being.
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
                    src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200" 
                    alt="Corporate group health checkup mediclaim" 
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
            <h2 className="text-3xl font-bold text-brand-marine mb-6">Group Mediclaim Insurance Overview</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Group Mediclaim Insurance is a comprehensive health insurance solution designed to protect employees and members of an organization against unexpected medical expenses. With rising healthcare costs and increasing lifestyle-related illnesses, a group health insurance policy provides financial security and access to quality medical care without placing a burden on personal savings.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Medical emergencies such as heart surgeries, cancer treatments, accidents, and prolonged hospitalization can result in significant financial stress. Group Mediclaim Insurance helps organizations safeguard their workforce by ensuring timely medical assistance and comprehensive healthcare coverage.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Specialty Cards Grid matching Construction Page */}
      <section className="py-24 bg-slate-50">
        <div className="layout-container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full mb-4 text-xs font-bold uppercase tracking-widest">
              Staff Wellness
            </div>
            <h2 className="font-heading text-4xl font-bold text-brand-marine mb-4">
              Comprehensive Health Protection for Your Workforce
            </h2>
            <p className="text-slate-600 mt-4 text-lg">
              At Lambach Insurance Brokers, we understand that employee health and well-being are critical to organizational success. Our structured group health products secure lives and shield accounts under one master plan.
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
                    <div className="w-20 h-20 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:rotate-6 transition-transform">
                      <IconComp className={`w-8 h-8 ${sol.iconColor}`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Add-On Benefits & Coverage Highlights */}
      <section className="py-24 bg-white">
        <div className="layout-container">
          <div className="max-w-4xl mx-auto">
            
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-brand-marine mb-6 text-center">Core Coverage Highlights</h2>
              <p className="text-slate-600 text-center mb-10 max-w-2xl mx-auto">
                Group health policies are built around essential coverage markers that protect your employees.
              </p>
              
              <ul className="grid md:grid-cols-2 gap-4">
                {coverageHighlights.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-slate-700 font-medium text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-center text-slate-500 mt-6 italic">
                * This policy generally becomes applicable upon hospitalization of 24 hours or more, subject to policy terms and conditions.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-16 mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-brand-marine mb-4">Optional Add-On Benefits for Enhanced Coverage</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Organizations can further strengthen their employee healthcare benefits by opting for additional coverage features through an extra premium.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {addOnCovers.map((add, idx) => (
                  <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between hover:border-primary/20 transition-colors">
                    <div>
                      <h4 className="font-bold text-lg text-brand-marine mb-2 flex items-center gap-2">
                        <PlusCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        {add.title}
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{add.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom CTA Box */}
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 relative overflow-hidden text-center md:text-left">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
              <h3 className="text-2xl font-bold text-brand-marine mb-4 relative z-10">Strength in Unity, Health in Coverage</h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed relative z-10">
                At Lambach Insurance Brokers, we are committed to delivering innovative and cost-effective Group Mediclaim Insurance solutions that balance comprehensive coverage with affordability.
              </p>
              <p className="text-lg font-medium text-brand-marine mb-8 relative z-10">
                Our expert team works closely with organizations to design customized health insurance programs that meet workforce requirements while ensuring superior protection, seamless claims support, and access to quality healthcare services.
              </p>
              
              <Link href="/who-we-are#contact-us" className="inline-flex bg-primary hover:bg-primary-variant text-white px-8 py-3.5 rounded-full font-semibold items-center gap-2 hover:shadow-lg transition-all active:scale-95 relative z-10">
                Empower Your Employees
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
