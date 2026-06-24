import Image from 'next/image';
import { images } from '@/lib/images';
import { Lightbulb, Award, Settings, HeartHandshake } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section className="section-gap bg-white overflow-hidden">
      <div className="layout-container">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          <div className="w-full lg:w-5/12 relative">
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] bg-slate-100 ring-1 ring-slate-100 shadow-xl">
              <Image 
                src={images.employeeBenefit} 
                alt="Our Team" 
                fill 
                className="object-cover" 
                referrerPolicy="no-referrer" 
              />
            </div>
            
            <div className="absolute -bottom-8 -right-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl hidden md:block max-w-[260px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] ring-1 ring-slate-100 border border-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary text-white p-3 rounded-xl">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                   <span className="font-bold text-brand-marine block text-lg">250+</span>
                   <span className="text-xs font-medium text-slate-500">Corporate Clients</span>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">Trusted by India&apos;s leading enterprises for technical risk management.</p>
            </div>
          </div>

          <div className="w-full lg:w-7/12">
            <div className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-4">
              <Lightbulb className="w-5 h-5" />
              Why Lambach?
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-marine mb-10 leading-tight">
              Expertise that protects <br /> your future
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors duration-300 shadow-sm border border-slate-100">
                  <Award className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-brand-marine mb-2">Industry Expertise</h4>
                  <p className="text-slate-600 leading-relaxed max-w-md">Our brokers possess deep knowledge across multiple sectors, ensuring no risk goes unaddressed.</p>
                </div>
              </div>
              
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors duration-300 shadow-sm border border-slate-100">
                  <Settings className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-brand-marine mb-2">Tailored Solutions</h4>
                  <p className="text-slate-600 leading-relaxed max-w-md">We don&apos;t believe in one-size-fits-all. Every policy is custom-built for your specific operational needs.</p>
                </div>
              </div>
              
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors duration-300 shadow-sm border border-slate-100">
                  <HeartHandshake className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-brand-marine mb-2">Client-Centric Approach</h4>
                  <p className="text-slate-600 leading-relaxed max-w-md">Your peace of mind is our priority. We provide end-to-end support, from policy selection to claim settlement.</p>
                </div>
              </div>
            </div>

            <button className="mt-12 bg-brand-marine text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-slate-800 transition-colors active:scale-95">
              Talk to an Expert
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
