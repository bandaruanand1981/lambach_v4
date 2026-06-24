import { Metadata } from 'next';
import CTAContact from '@/components/CTAContact';
import Image from 'next/image';
import { Shield, ArrowRight, CheckCircle2, ShieldCheck, FileText, Scale, UserCheck, Briefcase, Users, Server } from 'lucide-react';
import Link from 'next/link';
import { shimmerBlurDataURL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Liability Insurance | Corporate Risk | Lambach Insurance Brokers',
  description: 'Essential financial protection for businesses and professionals against legal claims, lawsuits, and compensation demands.',
};

export default function LiabilityInsurancePage() {
  const coreFeatures = [
    {
      title: "Comprehensive Coverage",
      desc: "Extensive protection against professional, managerial, operational, and corporate liabilities customized to fit your specific sector.",
      icon: ShieldCheck,
      bg: "bg-blue-50",
      iconColor: "text-blue-500"
    },
    {
      title: "Risk Analysis (Macro & Micro)",
      desc: "Detailed risk assessments to evaluate strategic and operational exposures, tailoring risk transfer solutions for your unique layout.",
      icon: Scale,
      bg: "bg-orange-50",
      iconColor: "text-orange-500"
    },
    {
      title: "Industry Expertise",
      desc: "Deep sector experience allows our team to address complex liabilities and coordinate appropriate risk mitigation strategies.",
      icon: Users,
      bg: "bg-purple-50",
      iconColor: "text-purple-500"
    },
    {
      title: "Competitive Market Match",
      desc: "Leveraging direct access to global and local insurers to secure cost-effective coverage at competitive premiums.",
      icon: Briefcase,
      bg: "bg-emerald-50",
      iconColor: "text-emerald-500"
    }
  ];

  const productsList = [
    "Directors & Officers (D&O) Liability",
    "Professional Indemnity & E&O",
    "Public and Product Liability Insurance",
    "Commercial General Liability (CGL)",
    "Cyber Security Liability",
    "Public Offering of Securities Insurance (POSI)",
    "Workmen Compensation & Employer Liabilities",
    "Clinical Trial Liability Care",
    "Product Recall & Contamination Insurance",
    "Media Liability & IP Protections",
    "Representations & Warranties Safeguards",
    "Kidnap & Ransom Protection Programs"
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
                  <Scale className="w-4 h-4" />
                  <span className="text-sm font-semibold tracking-wide uppercase">Corporate Solution</span>
                </div>
                
                <h1 className="font-heading text-5xl md:text-6xl text-brand-marine font-bold mb-6 leading-tight tracking-tight">
                  Liability <br/>
                  <span className="text-primary">Insurance</span>
                </h1>
                
                <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
                  Safeguarding corporate leaders, technical professionals, and organizations against legal challenges, lawsuits, and compensation claims.
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
                    src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&q=80&w=1200" 
                    alt="Corporate law consultation representing legal liability" 
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
            <h2 className="text-3xl font-bold text-brand-marine mb-6">Liability Protection Overview</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Liability Insurance provides essential financial protection for businesses and professionals against legal claims, lawsuits, and compensation demands arising from negligence, errors, omissions, injuries, property damage, or other liabilities. It helps organizations manage unforeseen risks while safeguarding their financial stability, reputation, and long-term success.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              At Lambach Insurance Brokers Pvt. Ltd., we understand that liability exposures are an unavoidable part of every business operation. As organizations grow and evolve, they face increasing legal, regulatory, professional, and operational risks that can lead to substantial financial losses.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Core Key Features */}
      <section className="py-24 bg-slate-50">
        <div className="layout-container">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full mb-4 text-xs font-bold uppercase tracking-widest">
              Core Features
            </div>
            <h2 className="font-heading text-4xl font-bold text-brand-marine mb-4">
              Protecting Your Present & Securing Your Future
            </h2>
            <p className="text-slate-600">
              Our Liability Insurance solutions are designed to provide comprehensive defense and settlement backing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {coreFeatures.map((f, idx) => {
              const IconComp = f.icon;
              return (
                <div key={idx} className={`${f.bg} p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all border border-transparent`}>
                  <div className="flex items-start justify-between mb-4 gap-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-brand-marine mb-2">{f.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
                    </div>
                    <div className="w-16 h-16 bg-white/60 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:rotate-6 transition-transform">
                      <IconComp className={`w-8 h-8 ${f.iconColor}`} />
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
            <h2 className="text-3xl font-bold text-brand-marine mb-6">Why Partner with Lambach?</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {[
                { title: "Tailored Insurance Solutions", text: "We work closely with clients to understand their operations, exposures, and risk appetite, customizing plans accordingly." },
                { title: "Risk Management Expertise", text: "Our proactive approach helps businesses identify and mitigate liability risks before they develop into significant financial or legal issues." },
                { title: "Industry-Specific Knowledge", text: "With extensive experience across multiple sectors, we provide specialized insights that tackle complex liability challenges." },
                { title: "Dedicated Claims Support", text: "In the event of a claim, our experienced claims team provides end-to-end Assistance, ensuring efficient handling and fair resolution." },
                { title: "Access to Leading Markets", text: "Our global and domestic insurer relationships enable us to secure broad coverage margins and robust defenses." }
              ].map((reason, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col">
                  <h4 className="font-bold text-lg text-[#1e293b] mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    {reason.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{reason.text}</p>
                </div>
              ))}
            </div>

            <div className="mb-14">
              <h3 className="text-2xl font-bold text-brand-marine mb-6">Liability Solutions We Arrange:</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                 {productsList.map((item, index) => (
                   <li key={index} className="flex items-start gap-4 bg-[#f8fafc] p-4 rounded-xl shadow-sm border border-slate-100">
                     <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                     <span className="text-slate-700 font-medium">{item}</span>
                   </li>
                 ))}
              </ul>
            </div>
            
            {/* Specialty Subtitle */}
            <div className="mb-14 p-8 bg-blue-50/50 rounded-3xl border border-blue-100">
              <h3 className="text-xl font-bold text-brand-marine mb-3">Specialty Industry Solutions</h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                In addition to standard liability products, we arrange specialized coverage solutions for the Event Industry, Film Production, Art & Fine Arts collections, and custom entertainment programs. 
              </p>
            </div>
            
            {/* Custom CTA Box */}
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
              <h3 className="text-2xl font-bold text-brand-marine mb-4 relative z-10">Shielding Your Tomorrow, Today</h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed relative z-10">
                At Lambach Insurance Brokers Pvt. Ltd., we are committed to helping businesses navigate an increasingly complex liability landscape with confidence. Our comprehensive Liability Insurance solutions are designed to protect your organization from financial loss, legal challenges, and reputational risks while supporting sustainable growth.
              </p>
              <p className="text-lg font-medium text-brand-marine mb-8 relative z-10">
                Choose Lambach Insurance Brokers as your trusted risk management partner and secure the protection your business needs today for a stronger and more resilient tomorrow.
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
