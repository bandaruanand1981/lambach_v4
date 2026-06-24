import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTAContact from '@/components/CTAContact';
import FAQ from '@/components/FAQ';
import { Building, Activity, Settings, ShieldAlert, HardHat, Sun, Leaf, Lock, Truck, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Power & Engineering Insurance | Lambach Insurance Brokers',
  description: 'Specialized risk management for power generation, transmission, and operational energy facilities.',
};

const faqs = [
  {
    q: "What types of power plants do you cover?",
    a: "We offer comprehensive coverage for both conventional (thermal, gas) and renewable energy plants (solar, wind, hydroelectric), as well as substations and transmission networks."
  },
  {
    q: "Does your equipment breakdown insurance cover older machinery?",
    a: "Yes, we evaluate the condition, maintenance logs, and operational history to provide competitive equipment breakdown solutions, even for legacy infrastructure."
  },
  {
    q: "How do you handle business interruption claims for energy companies?",
    a: "We work with forensic accountants and industry specialists to quickly assess revenue loss and extra expenses, ensuring fair and swift settlements to maintain your operational continuity."
  }
];

export default function Page() {
  return (
    <>
      <PageHero 
        title="Power & Engineering Insurance" 
        description="Specialized risk management for power generation, transmission, and operational energy facilities."
        imageSrc="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200"
        imageAlt="Power engineering facility at sunset"
        showIndustryActions={true}
        highlightIcon={<Activity className="w-5 h-5 text-primary" />}
        highlight1Text="Tailored Power Coverage"
      />

      <section className="py-24 bg-slate-50">
        <div className="layout-container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-marine mb-6">Vital for businesses involved in complex engineering projects.</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              At Lambach Insurance Broker’s, we understand the critical role that the power and energy sector plays in driving global progress and sustaining economic growth. With the ever-evolving landscape of energy production, transmission, and distribution, it’s imperative for businesses operating in this sector to have robust insurance coverage tailored to their unique needs. As engineering endeavors become more sophisticated and large-scale, ensuring the right risk management and <Link href="/corporate" className="text-primary hover:underline font-medium transition-colors">business continuity</Link> plans are in place is critical to safeguarding investments, meeting compliance and regulatory considerations, and maintaining operational capacity despite unexpected challenges.
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
            <h2 className="font-heading text-3xl font-bold text-brand-marine mb-4">Specialized Coverage for the Power and Energy Sector</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-blue-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100">
              <div className="flex items-start justify-between mb-6 gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">Property Insurance</h3>
                </div>
                <div className="w-16 h-16 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Building className="w-8 h-8 text-blue-500" />
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Comprehensive coverage for power plants, substations, transmission lines, and other physical assets against risks such as fire, explosion, natural disasters, and equipment breakdowns. Protection extends to machinery, turbines, generators, transformers, and other specialized equipment critical to energy production.
              </p>
            </div>
            
            <div className="bg-orange-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-orange-100">
              <div className="flex items-start justify-between mb-6 gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">Business Interruption Insurance</h3>
                </div>
                <div className="w-16 h-16 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Activity className="w-8 h-8 text-orange-500" />
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Vital coverage to mitigate financial losses resulting from interruptions in energy production or distribution due to covered events. Helps offset lost revenue and additional expenses incurred during the restoration period.
              </p>
            </div>
            
            <div className="bg-emerald-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-emerald-100">
              <div className="flex items-start justify-between mb-6 gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">Equipment Breakdown Insurance</h3>
                </div>
                <div className="w-16 h-16 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Settings className="w-8 h-8 text-emerald-500" />
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Protection against sudden and accidental breakdowns of machinery and equipment used in power generation and distribution facilities. Coverage includes repair or replacement costs and potential business interruption losses.
              </p>
            </div>
            
            <div className="bg-rose-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-rose-100">
              <div className="flex items-start justify-between mb-6 gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">Liability Insurance</h3>
                </div>
                <div className="w-16 h-16 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <ShieldAlert className="w-8 h-8 text-rose-500" />
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Coverage for bodily injury, property damage, and environmental liabilities associated with power generation, transmission, and distribution activities. Protects against <Link href="/who-we-are#contact-us" className="text-primary hover:underline font-medium transition-colors">claims</Link> from third parties.
              </p>
            </div>

            <div className="bg-purple-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-purple-100">
              <div className="flex items-start justify-between mb-6 gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">Construction and Installation Insurance</h3>
                </div>
                <div className="w-16 h-16 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <HardHat className="w-8 h-8 text-purple-500" />
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Tailored coverage for construction and installation projects related to power plants, renewable energy facilities, transmission lines, and substations.
              </p>
            </div>

            <div className="bg-yellow-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-yellow-100">
              <div className="flex items-start justify-between mb-6 gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">Renewable Energy Insurance</h3>
                </div>
                <div className="w-16 h-16 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Sun className="w-8 h-8 text-yellow-500" />
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Specialized coverage for wind, solar, hydroelectric, and other renewable energy projects, including weather-related and performance risks.
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-green-100">
              <div className="flex items-start justify-between mb-6 gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">Environmental Impairment Liability Insurance</h3>
                </div>
                <div className="w-16 h-16 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Leaf className="w-8 h-8 text-green-500" />
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Protection against pollution incidents and environmental damage. Covers cleanup costs, legal expenses, and third-party claims.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-200">
              <div className="flex items-start justify-between mb-6 gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">Cyber Insurance</h3>
                </div>
                <div className="w-16 h-16 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Lock className="w-8 h-8 text-slate-600" />
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Safeguards against cyber risks, data breaches, and operational disruptions in energy systems.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100">
              <div className="flex items-start justify-between mb-6 gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">Supply Chain Insurance</h3>
                </div>
                <div className="w-16 h-16 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Truck className="w-8 h-8 text-blue-500" />
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Coverage for delays or disruptions in critical components, raw materials, or fuel supply.
              </p>
            </div>

            <div className="bg-indigo-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-indigo-100 md:col-span-2 lg:col-span-3 lg:w-1/3 lg:mx-auto">
              <div className="flex items-start justify-between mb-6 gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">Political Risk Insurance</h3>
                </div>
                <div className="w-16 h-16 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Globe className="w-8 h-8 text-indigo-500" />
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Protection against risks like expropriation, currency issues, and political instability affecting international projects.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-marine text-white">
        <div className="layout-container max-w-4xl text-center">
            <h2 className="font-heading text-3xl font-bold mb-6">Empowering Progress, Engineering Excellence</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-10">
              At Lambach Insurance Broker’s, we’re committed to providing tailored insurance solutions that address the unique risks and challenges faced by businesses in the power and energy sector. <Link href="/who-we-are" className="text-primary hover:underline font-medium">Our team</Link> of experts works closely with you to assess your needs, identify potential exposures, and design a comprehensive insurance program that protects your assets and promotes long-term resilience and success. <Link href="/who-we-are#contact-us" className="text-primary hover:underline font-medium">Contact us today</Link> to learn more about our specialized insurance offerings.
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
        title="Power & Engineering Insurance FAQs" 
        description="Learn more about our comprehensive engineering risk coverage." 
      />
      <CTAContact />
    </>
  );
}
