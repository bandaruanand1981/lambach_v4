import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTAContact from '@/components/CTAContact';
import { CheckCircle2, ArrowRight, Users, HeartPulse, Settings, Shield } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Employee Benefits Insurance | Corporate Risk | Lambach Insurance Brokers',
  description: 'Comprehensive protection packages to attract and retain corporate talent.',
};

export default function Page() {
  return (
    <>
      <PageHero 
        title="Employee Benefits Insurance" 
        description="Comprehensive protection packages to attract and retain corporate talent."
        imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
        imageAlt="Happy corporate team discussing employee benefits"
        showContactCta={true}
        showIndustryActions={true}
        highlightIcon={<Shield className="w-5 h-5 text-primary" />}
        highlight1Text="Tailored Coverage"
        highlight2Text="Complete Protection"
      />
<section className="py-24 bg-slate-50">
        <div className="layout-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-marine mb-6">Investing in Your Workforce</h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              A robust employee benefits program enhances employee loyalty, productivity, and wellbeing, while providing a safety net for their families.
            </p>
            
            <div className="mb-14">
              <h3 className="text-2xl font-bold text-brand-marine mb-6">Key Risk Areas Addressed:</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                 
                   <li className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                     <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                     <span className="text-slate-700 font-medium">Group Health Insurance</span>
                   </li>
                 
                   <li className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                     <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                     <span className="text-slate-700 font-medium">Group Term Life</span>
                   </li>
                 
                   <li className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                     <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                     <span className="text-slate-700 font-medium">Accidental Coverage</span>
                   </li>
                 
                   <li className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                     <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                     <span className="text-slate-700 font-medium">Wellness Programs</span>
                   </li>
                 
              </ul>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
              <h3 className="text-2xl font-bold text-brand-marine mb-4 relative z-10">Why Partner With Us?</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed relative z-10">
                At Lambach, our experts specialize in Employee Benefits risks. We work with top-tier insurers to craft bespoke coverage that matches your exact operational profile.
              </p>
              
              <Link href="/contact-us" className="inline-flex bg-primary hover:bg-primary-variant text-white px-8 py-3.5 rounded-full font-semibold items-center gap-2 hover:shadow-lg transition-all active:scale-95 relative z-10">
                Contact Our Experts
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap bg-white">
        <div className="layout-container">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full mb-4 text-xs font-bold uppercase tracking-widest">
              Coverage Solutions
            </div>
            <h2 className="text-3xl font-bold text-brand-marine mb-4">Comprehensive Protection</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-purple-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-purple-100">
              <div className="flex items-start justify-between mb-8 gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">Talent Retention</h3>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                    High-quality benefits packages help you retain top industry talent.
                  </p>
                </div>
                <div className="w-20 h-20 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Users className="w-8 h-8 text-purple-500" />
                </div>
              </div>
            </div>
            
            <div className="bg-rose-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-rose-100">
              <div className="flex items-start justify-between mb-8 gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">Financial Security</h3>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                    Provides employees with a financial safety net during health crises.
                  </p>
                </div>
                <div className="w-20 h-20 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <HeartPulse className="w-8 h-8 text-rose-500" />
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100">
              <div className="flex items-start justify-between mb-8 gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">Customizable Plans</h3>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                    Flexible coverage terms dictated by company size and budget.
                  </p>
                </div>
                <div className="w-20 h-20 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Settings className="w-8 h-8 text-blue-500" />
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      
      <CTAContact />
    </>
  );
}
