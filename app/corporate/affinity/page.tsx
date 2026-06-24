import { Metadata } from 'next';
import CTAContact from '@/components/CTAContact';
import Image from 'next/image';
import { Users, ArrowRight, CheckCircle2, Shield, ShieldCheck, Heart, UserCheck, Briefcase, GraduationCap, Percent } from 'lucide-react';
import Link from 'next/link';
import { shimmerBlurDataURL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Affinity Insurance | Corporate Risk | Lambach Insurance Brokers',
  description: 'Bespoke affinity programs designed to deliver maximum risk protection, competitive pricing, and value added options to specialized member groups.',
};

export default function AffinityInsurancePage() {
  const affinityGroups = [
    { title: "Professional Associations", desc: "Customized solutions for licensed groups, shielding against professional indemnity and strategic exposures.", icon: UserCheck, bg: "bg-blue-50/70", col: "text-blue-500" },
    { title: "Trade Associations", desc: "Tailored protections addressing sector-specific operational, legal, and cash flow threats.", icon: Briefcase, bg: "bg-orange-50/70", col: "text-orange-500" },
    { title: "Employee Groups", desc: "Flexible welfare configurations providing health, accident, wellness, and optical benefits.", icon: Heart, bg: "bg-purple-50/70", col: "text-purple-500" },
    { title: "Non-Profit Organizations", desc: "Specialized defense constructs securing charities and NGOs from reputational and legal vulnerabilities.", icon: ShieldCheck, bg: "bg-emerald-50/70", col: "text-emerald-500" },
    { title: "Alumni Associations", desc: "Unique travel, travel-health, high-value asset, and event coverages tailored for university cohorts.", icon: GraduationCap, bg: "bg-indigo-50/70", col: "text-indigo-500" }
  ];

  const lambachApproach = [
    { title: "Comprehensive Needs Assessment", text: "We conduct an in-depth analysis of the group's structure, activities, risk exposures, and member requirements to identify the most suitable insurance solutions." },
    { title: "Customized Insurance Programs", text: "Working closely with leading insurers, we design tailored coverage options, policy features, and benefits that align with the unique needs of the affinity group." },
    { title: "Competitive Market Evaluation", text: "Our team performs extensive market analysis to ensure members receive comprehensive coverage at competitive and cost-effective premiums." },
    { title: "Member Education & Awareness", text: "We actively engage with group members through clear communication and educational initiatives, helping them understand policy benefits, coverage features, and claims procedures." },
    { title: "Ongoing Support & Claims Assistance", text: "Our commitment extends beyond policy placement. We provide continuous support, policy reviews, claims advocacy, and updates on emerging risks and industry developments." }
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
                  <Users className="w-4 h-4" />
                  <span className="text-sm font-semibold tracking-wide uppercase">Corporate Association</span>
                </div>
                
                <h1 className="font-heading text-5xl md:text-6xl text-brand-marine font-bold mb-6 leading-tight tracking-tight">
                  Affinity <br/>
                  <span className="text-primary">Insurance</span>
                </h1>
                
                <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
                  Tailoring unique, cost-effective risk protections for specialized associations, trade cohorts, non-profits, and customer communities.
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
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200" 
                    alt="Active community and business affinity networking session" 
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
            <h2 className="text-3xl font-bold text-brand-marine mb-6">Affinity Insurance</h2>
            <p className="subtitle text-primary font-bold mb-4 uppercase tracking-wider text-sm">Tailored Insurance Solutions for Specialized Groups</p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Affinity Insurance is a customized insurance solution designed to meet the unique needs of specific groups, associations, organizations, and communities. By offering specialized coverage tailored to shared interests, professions, or affiliations, affinity insurance programs provide comprehensive protection while delivering greater value and convenience to members.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              At Lambach Insurance Brokers, we specialize in creating bespoke affinity insurance solutions that address the distinct risks and requirements of diverse groups, ensuring optimal protection and peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Affinity Groups We Match */}
      <section className="py-24 bg-slate-50">
        <div className="layout-container">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full mb-4 text-xs font-bold uppercase tracking-widest">
              Affinity Circles
            </div>
            <h2 className="font-heading text-4xl font-bold text-brand-marine mb-4">
              Associations & Organized Groups We Support
            </h2>
            <p className="text-slate-600">
              Developing cohesive, low-premium packages for affinity circles that share common fields and trades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {affinityGroups.map((group, idx) => {
              const IconComp = group.icon;
              return (
                <div key={idx} className={`${group.bg} p-8 rounded-3xl flex flex-col justify-between group hover:shadow-xl transition-all border border-transparent`}>
                  <div className="flex gap-4 items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-brand-marine mb-2">{group.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{group.desc}</p>
                    </div>
                    <div className="w-12 h-12 bg-white/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:rotate-6 transition-transform">
                      <IconComp className={`w-6 h-6 ${group.col}`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: The Lambach Approach */}
      <section className="py-24 bg-white">
        <div className="layout-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-marine mb-10 text-center">The Lambach Approach to Affinity Programs</h2>
            
            <div className="relative border-l border-primary/20 pl-8 ml-4 space-y-12 mb-16">
              {lambachApproach.map((step, sIdx) => (
                <div key={sIdx} className="relative">
                  <div className="absolute left-[-41px] top-0.5 w-6 h-6 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center shadow-sm">
                    {sIdx + 1}
                  </div>
                  <h4 className="font-bold text-lg text-slate-800 mb-2">{step.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-bold text-brand-marine mb-6 text-center">Benefits of Affinity Insurance Through Lambach</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Tailored Coverage Margins", text: "Direct addressing of distinct exposures related exclusively to group members." },
                  { title: "Cost-Effective Premium Scales", text: "Bulk cohort leverage secure wholesale pricing not found on personal markets." },
                  { title: "Simplified Registration System", text: "Hassle-free premium setups and streamlined member onboarding." },
                  { title: "Affinity Advisory Representation", text: "Complete backing and legal counseling during group claim negotiations." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-sm text-brand-marine">{item.title}</h5>
                      <p className="text-slate-500 text-xs leading-normal mt-0.5">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Custom CTA Box */}
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
              <h3 className="text-2xl font-bold text-brand-marine mb-4 relative z-10">Tailored Protection, Shared Strength</h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed relative z-10">
                At Lambach Insurance Brokers, we understand that every group has unique insurance requirements. Through our specialized Affinity Insurance solutions, we help associations, organizations, and communities access customized protection that meets their specific needs.
              </p>
              <p className="text-lg font-medium text-brand-marine mb-8 relative z-10">
                By combining industry expertise, personalized service, and innovative insurance solutions, we empower affinity groups with comprehensive coverage, financial security, and long-term peace of mind.
              </p>
              
              <Link href="/who-we-are#contact-us" className="inline-flex bg-primary hover:bg-primary-variant text-white px-8 py-3.5 rounded-full font-semibold items-center gap-2 hover:shadow-lg transition-all active:scale-95 relative z-10">
                Configure Group Affinity Cover
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
