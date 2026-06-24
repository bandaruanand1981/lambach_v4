import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTAContact from '@/components/CTAContact';
import FAQ from '@/components/FAQ';
import { Plane, ShieldAlert, Building, Settings, Search, Target, Award, Cpu, Handshake, ArrowRight, Activity, Sun, Leaf, Lock, Truck, Globe, Ship, Server, FileText, Briefcase, Laptop, Mic, Users, Banknote, Home, Heart, CloudRain, Film, Camera, UserX, Star, Shield } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Aviation Insurance | Lambach Insurance Brokers',
  description: 'Specialized policies covering aircraft hulls, aviation liability, and airport operations.',
};

const faqs = [
  {
    "q": "Does Hull All Risk cover the aircraft while on the ground?",
    "a": "Yes, standard Hull All Risk policies cover the aircraft both in-flight and on the ground, protecting against perils like fire, theft, windstorms, and taxiing accidents."
  },
  {
    "q": "Are drone (UAV) operators covered under aviation policies?",
    "a": "Drones require specialized UAV insurance which behaves similarly to traditional aviation insurance, covering physical damage to the drone and third-party liability."
  },
  {
    "q": "How is aviation premium determined?",
    "a": "Premiums are based on the aircraft make/model, pilot experience, usage (commercial vs. private), passenger capacity, and selected liability limits."
  }
];

export default function Page() {
  return (
    <>
      <PageHero 
        title="Aviation Insurance" 
        description="Specialized policies covering aircraft hulls, aviation liability, and airport operations."
        imageSrc="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1200"
        imageAlt="Aviation Insurance Solutions for Aircraft Owners and Aviation Businesses"
        showIndustryActions={true}
        highlightIcon={<Plane className="w-5 h-5 text-primary" />}
        highlight1Text="Tailored Aviation Coverage"
      />

      <section className="py-24 bg-slate-50">
        <div className="layout-container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-marine mb-6">Ensuring financial stability in the event of accidents or incidents</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              In the dynamic and intricate world of the aviation industry, unique risks require specialized solutions. At Lambach Insurance Brokers, our dedicated team of highly qualified experts provides a comprehensive approach to risk analysis and management tailored specifically for the aerospace sector. Our strength lies in years of experience, technical competence, and strong relationships with aviation markets, enabling us to deliver complete and effective solutions in the event of loss.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="layout-container">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full mb-4 text-xs font-bold uppercase tracking-widest">
              Coverage Solutions
            </div>
            <h2 className="font-heading text-3xl font-bold text-brand-marine mb-4">Aviation Insurance Coverage & Features</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-blue-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100">
              <div className="flex items-start justify-between mb-6 gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">Hull All Risk</h3>
                </div>
                <div className="w-16 h-16 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Plane className="w-8 h-8 text-blue-500" />
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Comprehensive coverage for physical damage to aircraft, including total or partial loss due to accidents or other perils.
              </p>
            </div>
            <div className="bg-orange-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-orange-100">
              <div className="flex items-start justify-between mb-6 gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">Aviation Liability</h3>
                </div>
                <div className="w-16 h-16 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <ShieldAlert className="w-8 h-8 text-orange-500" />
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Protection against third-party liabilities including bodily injury, property damage, and passenger liability.
              </p>
            </div>
            <div className="bg-emerald-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-emerald-100">
              <div className="flex items-start justify-between mb-6 gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">Airport Owners and Operators Liability</h3>
                </div>
                <div className="w-16 h-16 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Building className="w-8 h-8 text-emerald-500" />
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Coverage for liabilities arising from airport operations, including incidents occurring on airport premises.
              </p>
            </div>
            <div className="bg-rose-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-rose-100">
              <div className="flex items-start justify-between mb-6 gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">Aviation Product Liability</h3>
                </div>
                <div className="w-16 h-16 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Settings className="w-8 h-8 text-rose-500" />
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Protection against <Link href="/who-we-are#contact-us" className="text-primary hover:underline font-medium transition-colors">claims</Link> arising from defects in aircraft or aerospace-related products.
              </p>
            </div>
            <div className="bg-purple-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-purple-100">
              <div className="flex items-start justify-between mb-6 gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">Comprehensive Risk Analysis</h3>
                </div>
                <div className="w-16 h-16 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Search className="w-8 h-8 text-purple-500" />
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                In-depth evaluation of operational, regulatory, and environmental risks within the aviation sector.
              </p>
            </div>
            <div className="bg-yellow-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-yellow-100">
              <div className="flex items-start justify-between mb-6 gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">Tailored Risk Management Solutions</h3>
                </div>
                <div className="w-16 h-16 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Target className="w-8 h-8 text-yellow-500" />
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Customized strategies aligned with your specific aviation operations and business objectives.
              </p>
            </div>
            <div className="bg-green-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-green-100">
              <div className="flex items-start justify-between mb-6 gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">Industry Expertise</h3>
                </div>
                <div className="w-16 h-16 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Award className="w-8 h-8 text-green-500" />
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Experienced professionals with deep knowledge of aviation and aerospace sectors.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100">
              <div className="flex items-start justify-between mb-6 gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">Technical Competence</h3>
                </div>
                <div className="w-16 h-16 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Cpu className="w-8 h-8 text-slate-500" />
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Strong understanding of aviation regulations and technological advancements.
              </p>
            </div>
            <div className="bg-indigo-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-indigo-100">
              <div className="flex items-start justify-between mb-6 gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">Key Relationships with Markets</h3>
                </div>
                <div className="w-16 h-16 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Handshake className="w-8 h-8 text-indigo-500" />
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Ability to secure optimal coverage and negotiate competitive terms through established partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-marine text-white">
        <div className="layout-container max-w-4xl text-center">
            <h2 className="font-heading text-3xl font-bold mb-6">Guardians of the Skies</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-10">
              At Lambach Insurance Brokers, we are committed to elevating your aviation risk management with specialized expertise. <Link href="/who-we-are#contact-us" className="text-primary hover:underline font-medium">Contact us today</Link> to explore tailored solutions that enhance the resilience and success of your aviation ventures. Why Choose Us? Specialized Team, Proactive Risk Mitigation, Global Perspective, and Claims Advocacy ensuring fast and fair claim resolution.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/who-we-are#contact-us" className="inline-flex bg-primary hover:bg-primary-variant text-white px-8 py-3.5 rounded-full font-semibold items-center gap-2 transition-all active:scale-95 shadow-lg shadow-primary/20">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/corporate" className="inline-flex bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 rounded-full font-semibold items-center gap-2 transition-all active:scale-95 border border-white/20">
                Explore Services
              </Link>
            </div>
        </div>
      </section>

      <FAQ 
        items={faqs} 
        title="Aviation Insurance FAQs" 
        description="Learn more about our comprehensive risk coverage in the Aviation Insurance sector." 
      />
      <CTAContact />
    </>
  );
}
