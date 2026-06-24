import { Metadata } from 'next';
import CTAContact from '@/components/CTAContact';
import Image from 'next/image';
import { Shield, ArrowRight, CheckCircle2, ShieldCheck, Landmark, DollarSign, Activity, FileText, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { shimmerBlurDataURL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Trade Credit Insurance | Corporate Risk | Lambach Insurance Brokers',
  description: 'Specialized trade card risk protections safeguarding accounts receivables against default, buyer insolvency, and geopolitical barriers.',
};

export default function TradeCreditInsurancePage() {
  const coreSolutions = [
    {
      title: "Non-Payment Protection",
      desc: "Acting as a solid financial safety net protecting your balance sheet against buyer default, delays, or immediate default events.",
      icon: DollarSign,
      bg: "bg-blue-50",
      iconColor: "text-blue-500"
    },
    {
      title: "Tailor-Made Configurations",
      desc: "Our trade credit specialists construct custom insurance programs aligned specifically with your unique industry segment and growth goals.",
      icon: ShieldCheck,
      bg: "bg-orange-50",
      iconColor: "text-orange-500"
    },
    {
      title: "Independent Credit Analysis",
      desc: "Conducting continuous evaluations of your customers' creditworthiness to help you extend credits safely and confidently.",
      icon: Activity,
      bg: "bg-purple-50",
      iconColor: "text-purple-500"
    },
    {
      title: "Bad Debt Recovery Support",
      desc: "Comprehensive claims support and professional assistance to speed up recoveries and preserve cash flows.",
      icon: Briefcase,
      bg: "bg-emerald-50",
      iconColor: "text-emerald-500"
    },
    {
      title: "Enhanced Bank Financing",
      desc: "Securing receivables acts as collateral, opening superior credit limits and working capital options from banking partners.",
      icon: Landmark,
      bg: "bg-amber-50",
      iconColor: "text-amber-500"
    }
  ];

  const coverageHighlights = [
    "Non-payment by buyers due to protracted default scenarios",
    "Insolvency, bankruptcy, or liquidation of customers",
    "Geopolitical or political risks affecting overseas trades",
    "Military conflict, revolutions, riots, or civil unrest issues",
    "Government-imposed payment moratoriums or exchange blocks",
    "Arbitrary cancellation/restriction of import licenses",
    "Governmental policies preventing contract performance",
    "Non-payment barriers by state-owned corporations or buyers"
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
                  <Landmark className="w-4 h-4" />
                  <span className="text-sm font-semibold tracking-wide uppercase">Corporate Solution</span>
                </div>
                
                <h1 className="font-heading text-5xl md:text-6xl text-brand-marine font-bold mb-6 leading-tight tracking-tight">
                  Credit <br/>
                  <span className="text-primary">Insurance</span>
                </h1>
                
                <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
                  Protecting accounts receivable against unexpected bad debt loss, buyer default, or administrative geopolitical barriers.
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
                    src="https://images.unsplash.com/photo-1628172962451-b8f9eaf51950?auto=format&fit=crop&q=80&w=1200" 
                    alt="Trade credit analysis and finance tracking dashboard" 
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
            <h2 className="text-3xl font-bold text-brand-marine mb-6">Trade Credit Insurance Overview</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Credit Insurance, also known as Trade Credit Insurance, is a specialized risk management solution that protects businesses against financial losses resulting from customer non-payment, insolvency, or political and commercial risks. It helps organizations maintain healthy cash flow, strengthen financial stability, and confidently expand their business operations in both domestic and international markets.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Core Strengths */}
      <section className="py-24 bg-slate-50">
        <div className="layout-container">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full mb-4 text-xs font-bold uppercase tracking-widest">
              Trade Keys
            </div>
            <h2 className="font-heading text-4xl font-bold text-brand-marine mb-4">
              Core Credit Insurance Solutions
            </h2>
            <p className="text-slate-600">
              How Lambach protects your accounts receivable from defaults and political constraints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {coreSolutions.map((sol, idx) => {
              const IconComp = sol.icon;
              return (
                <div key={idx} className={`${sol.bg} p-8 rounded-3xl flex flex-col justify-between group hover:shadow-xl transition-all border border-transparent`}>
                  <div className="flex items-start gap-4 mb-4 justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-slate-800 mb-2">{sol.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{sol.desc}</p>
                    </div>
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:rotate-6 transition-transform">
                      <IconComp className={`w-6 h-6 ${sol.iconColor}`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 mt-16 border-t border-slate-200/60 pt-16">
            <div>
              <h3 className="font-bold text-xl text-brand-marine mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                Risks Shielded Under Policy
              </h3>
              <ul className="space-y-3">
                {coverageHighlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-2 bg-white px-4 py-2.5 rounded-lg border border-slate-100 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span className="text-sm text-slate-700 font-medium">{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-xl text-brand-marine mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                Key Benefits of Trade Credit
              </h3>
              <div className="space-y-3">
                {[
                  { title: "Bad Debt Immunity", text: "Guarantees that your earnings remain solid despite commercial default occurrences." },
                  { title: "Cash Flow Management", text: "Minimizes financial stresses, providing stability for operational layouts." },
                  { title: "Trade Confidence Booster", text: "Empowers sales teams to negotiate credits with larger counterparts safely." },
                  { title: "Confidential Market Entry", text: "Secures entry into newer, less-familiar foreign trade routes confidently." }
                ].map((benefit, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col">
                    <h5 className="font-bold text-sm text-brand-marine mb-1 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-500" />
                      {benefit.title}
                    </h5>
                    <p className="text-slate-500 text-xs leading-relaxed">{benefit.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose & CTA */}
      <section className="py-24 bg-white">
        <div className="layout-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-marine mb-6 text-center">Why Partner with Lambach Credit Risk Specialists?</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {[
                { title: "Industry Risk Analysts", text: "Our staff holds seasoned trade credit expertise across a vast scope of industry configurations." },
                { title: "Proactive Default Avoidance", text: "Evaluating customer profiles carefully to pre-empty default disasters before cargo handovers." },
                { title: "Backed by Top Unders", text: "Direct negotiations with leading syndicates to secure optimal, flexible policy terms." },
                { title: "Continuous Receivable Focus", text: "Offering strategic collection assistance to lower claims volume and preserve trading rapport." }
              ].map((reason, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col">
                  <h4 className="font-bold text-base text-brand-marine mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    {reason.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{reason.text}</p>
                </div>
              ))}
            </div>

            {/* Custom CTA Box */}
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
              <h3 className="text-2xl font-bold text-brand-marine mb-4 relative z-10">Empower Your Business with Confidence</h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed relative z-10">
                At Lambach Insurance Brokers, we help businesses trade confidently by providing comprehensive Trade Credit & Political Risk Insurance solutions. Our expertise, proactive approach, and customized protection strategies ensure that your business remains resilient against credit risks while pursuing new growth opportunities.
              </p>
              <p className="text-lg font-medium text-brand-marine mb-8 relative z-10">
                Protect your receivables, strengthen your financial position, and expand your business with confidence through Lambach Credit Insurance solutions.
              </p>
              
              <Link href="/who-we-are#contact-us" className="inline-flex bg-primary hover:bg-primary-variant text-white px-8 py-3.5 rounded-full font-semibold items-center gap-2 hover:shadow-lg transition-all active:scale-95 relative z-10">
                Secure Your Credit Lines Now
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
