import PageHero from '@/components/PageHero';
import CTAContact from '@/components/CTAContact';
import Image from 'next/image';
import { HardHat, ArrowRight, Building, CheckCircle2, Briefcase, Factory, Wrench, FileWarning, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { shimmerBlurDataURL } from '@/lib/utils';

export default function ConstructionPage() {
  return (
    <>
      {/* Custom Hero similar to home page */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#eff6ff] via-white to-[#ecfdf5]">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[70%] bg-[#dbeafe] rounded-full mix-blend-multiply filter blur-[120px] opacity-70"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[60%] bg-[#d1fae5] rounded-full mix-blend-multiply filter blur-[120px] opacity-70"></div>
        <section className="relative flex flex-col items-center justify-center pt-36 pb-20 z-10">
          <div className="layout-container relative z-10 w-full">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="w-full lg:w-1/2">
                <div className="inline-flex items-center gap-2 bg-white/50 border border-primary/20 text-primary px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm shadow-sm">
                  <HardHat className="w-4 h-4" />
                  <span className="text-sm font-semibold tracking-wide uppercase">Industry Solution</span>
                </div>
              
              <h1 className="font-heading text-5xl md:text-6xl text-brand-marine font-bold mb-6 leading-tight tracking-tight">
                Construction <br/>
                <span className="text-primary">Insurance</span>
              </h1>
              
              <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
                Also known as contractor&apos;s insurance or builder&apos;s risk insurance, is a type of coverage specifically tailored for the construction industry. It safeguards the financial interests of builders and contractors.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-12">
                <Link href="/who-we-are#contact-us" className="bg-primary hover:bg-primary-variant text-white px-8 py-3.5 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg transition-all active:scale-95">
                  Get a Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                <div className="flex items-center gap-2">
                  <Building className="w-5 h-5 text-primary" />
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
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200" 
                    alt="Construction Site" 
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

      <section className="py-24 bg-white">
        <div className="layout-container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-marine mb-6">Building Tomorrow, Securing Today</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              At Lambach Insurance Brokers, we understand the vital role that infrastructure plays in the foundation of our modern world. As an integral part of the global economy, infrastructure projects ranging from transportation and energy to telecommunications and water supply are the backbone of progress and development.
            </p>
            <br />
            <p className="text-lg text-slate-600 leading-relaxed">
              Our insurance services cater specifically to the unique needs of the infrastructure industry, offering comprehensive coverage and risk management solutions tailored to safeguard your investments and mitigate potential challenges. With decades of experience and a team of dedicated experts, we are committed to providing unparalleled support to ensure the success and resilience of infrastructure projects.
            </p>
          </div>
        </div>
      </section>

      {/* Specialties format for Key Features */}
      <section className="section-gap bg-slate-50">
        <div className="layout-container">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full mb-4 text-xs font-bold uppercase tracking-widest">
              Key Features
            </div>
            <h2 className="font-heading text-4xl font-bold text-brand-marine mb-4">
              Infrastructure Insurance Solutions
            </h2>
            <p className="text-slate-600">
              Here are some common engineering insurance products we offer for the construction industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-blue-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100">
              <div className="flex items-start justify-between mb-8 gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">Project Insurance</h3>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                    Tailored coverage for large-scale engineering projects, providing a combination of CAR, EAR, and other necessary coverage&apos;s.
                  </p>
                </div>
                <div className="w-20 h-20 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:rotate-6 transition-transform">
                  <Briefcase className="w-8 h-8 text-blue-500" />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-orange-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-orange-100">
              <div className="flex items-start justify-between mb-8 gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">Contractor&apos;s All Risks (CAR)</h3>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                    Provides coverage for physical damage or loss to construction projects, including buildings, materials, and machinery.
                  </p>
                </div>
                <div className="w-20 h-20 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:-rotate-6 transition-transform">
                  <Building className="w-8 h-8 text-orange-500" />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-purple-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-purple-100">
              <div className="flex items-start justify-between mb-8 gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">Erection All Risks (EAR)</h3>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                    Similar to CAR but specifically tailored for projects involving the installation and erection of machinery and equipment.
                  </p>
                </div>
                <div className="w-20 h-20 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <Factory className="w-8 h-8 text-purple-500" />
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-fuchsia-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-fuchsia-100">
              <div className="flex items-start justify-between mb-8 gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">Contractor&apos;s Plant & Machinery</h3>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                    Specifically designed for construction machinery and equipment used on project sites. Coverage for theft and breakdown.
                  </p>
                </div>
                <div className="w-20 h-20 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:rotate-6 transition-transform">
                  <Wrench className="w-8 h-8 text-fuchsia-500" />
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-emerald-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-emerald-100">
              <div className="flex items-start justify-between mb-8 gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">Advance Loss of Profits (ALOP)</h3>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                    Also known as Delay in Start-Up (DSU) insurance. Compensates for financial losses incurred due to delays.
                  </p>
                </div>
                <div className="w-20 h-20 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:-translate-y-1 transition-transform">
                  <FileWarning className="w-8 h-8 text-emerald-500" />
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-rose-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-rose-100">
              <div className="flex items-start justify-between mb-8 gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">Third-Party Liability</h3>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                    Protects engineers and consulting firms against claims of negligence and legal liabilities arising from third-party injury.
                  </p>
                </div>
                <div className="w-20 h-20 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-8 h-8 text-rose-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="layout-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-marine mb-6">Common Engineering Insurance Products</h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Engineering insurance provides comprehensive protection for construction projects, machinery, equipment, and engineering professionals against financial losses arising from accidents, damage, delays, and liability claims.
            </p>
            
            <div className="mb-14">
              <h3 className="text-2xl font-bold text-brand-marine mb-6">Coverage Includes:</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                 {[
                   "Project Insurance",
                   "Contractor's All Risks (CAR) Insurance",
                   "Erection All Risks (EAR) Insurance",
                   "Contractor's Plant & Machinery (CPM) Insurance",
                   "Advance Loss of Profits (ALOP/DSU) Insurance",
                   "Professional Indemnity Insurance",
                   "Third-Party Liability Insurance"
                 ].map((item, index) => (
                   <li key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                     <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                     <span className="text-slate-700 font-medium">{item}</span>
                   </li>
                 ))}
              </ul>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
              <h3 className="text-2xl font-bold text-brand-marine mb-4 relative z-10">Why Choose Lambach Insurance Brokers?</h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed relative z-10">
                At Lambach Insurance Brokers, we deliver tailored engineering insurance solutions designed to protect infrastructure investments, construction projects, and engineering operations. Our experienced team helps identify risks, arrange appropriate coverage, and provide ongoing support to ensure business continuity and project success.
              </p>
              <p className="text-lg font-medium text-brand-marine mb-8 relative z-10">
                Secure your projects with confidence. Contact us today to find the right engineering insurance solution for your business.
              </p>
              
              <Link href="/contact-us" className="inline-flex bg-primary hover:bg-primary-variant text-white px-8 py-3.5 rounded-full font-semibold items-center gap-2 hover:shadow-lg transition-all active:scale-95 relative z-10">
                Contact Us Today
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
