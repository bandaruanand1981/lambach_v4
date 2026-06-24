import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTAContact from '@/components/CTAContact';
import FAQ from '@/components/FAQ';
import { Sun, Home, Activity, Briefcase, ArrowRight, Building, Settings, ShieldAlert, Target, Search, Award, Cpu, Handshake, Leaf, Lock, Truck, Globe, Ship, Plane, Server, FileText, Laptop, Mic, Users, Banknote, Heart, CloudRain, Film, Camera, UserX, Star, Shield } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import WhyChooseAgriGrid from '@/components/WhyChooseAgriGrid';

export const metadata: Metadata = {
  title: 'Agribusiness Insurance | Lambach Insurance Brokers',
  description: 'Comprehensive risk management solutions for farming, livestock, and agricultural supply chains.',
};

const faqs = [
  {
    "q": "Is crop insurance mandatory?",
    "a": "While not universally mandatory, it is highly recommended and often required if you are applying for agricultural loans or government assistance programs."
  },
  {
    "q": "What does livestock insurance actually cover?",
    "a": "It typically covers the death of livestock due to natural causes, accidents, diseases, or natural disasters, providing a financial safety net for ranchers and farmers."
  },
  {
    "q": "Can farm equipment be insured separately?",
    "a": "Yes, specialized mobile agricultural equipment insurance can cover tractors, combines, and attachments for physical damage both on and off your premises."
  }
];

export default function Page() {
  return (
    <>
      <PageHero 
        title="Agribusiness Insurance" 
        description="Comprehensive risk management solutions for farming, livestock, and agricultural supply chains."
        imageSrc="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200"
        imageAlt="Agribusiness Insurance Protection for Farms and Livestock Operations"
        showIndustryActions={true}
        highlightIcon={<Leaf className="w-5 h-5 text-primary" />}
        highlight1Text="Tailored Agri Coverage"
      />

      <section className="py-24 bg-slate-50">
        <div className="layout-container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-marine mb-6">Agriculture and Livestock Insurance</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              At Lambach Insurance Brokers, we understand the vital role agriculture and livestock play in sustaining communities and economies. Our mission is to support farmers, ranchers, and agribusinesses by providing comprehensive and customized insurance solutions. With our deep-rooted commitment to the agricultural sector, we stand as your reliable partner in mitigating risks and ensuring the prosperity of your farming endeavors. Under crop insurance, farmers are protected against uncertainties of crop yields arising from natural factors beyond their control. It is based on the principle of indemnity. Farmers pay a premium (which may be subsidized), and losses due to covered perils are compensated as per policy conditions.
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
            <h2 className="font-heading text-3xl font-bold text-brand-marine mb-4">Key Features of Lambach Agri Business Insurance</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-blue-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100">
              <div className="flex items-start justify-between mb-6 gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">Crop Insurance</h3>
                </div>
                <div className="w-16 h-16 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Sun className="w-8 h-8 text-blue-500" />
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Protect crops from adverse weather, pests, diseases, and natural disasters. Provides financial security during uncertain seasons.
              </p>
            </div>
            <div className="bg-orange-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-orange-100">
              <div className="flex items-start justify-between mb-6 gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">Farm Property Insurance</h3>
                </div>
                <div className="w-16 h-16 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Home className="w-8 h-8 text-orange-500" />
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Coverage for farm infrastructure, equipment, and buildings against fire, theft, vandalism, and unexpected damage.
              </p>
            </div>
            <div className="bg-emerald-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-emerald-100">
              <div className="flex items-start justify-between mb-6 gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">Livestock Insurance</h3>
                </div>
                <div className="w-16 h-16 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Activity className="w-8 h-8 text-emerald-500" />
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Protection against disease, accidents, theft, and natural calamities affecting livestock.
              </p>
            </div>
            <div className="bg-rose-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-rose-100">
              <div className="flex items-start justify-between mb-6 gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">Agribusiness Insurance</h3>
                </div>
                <div className="w-16 h-16 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Briefcase className="w-8 h-8 text-rose-500" />
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Tailored solutions covering liability, product risks, and business interruption for agribusiness operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-marine text-white">
        <div className="layout-container max-w-4xl text-center">
            <h2 className="font-heading text-3xl font-bold mb-6">Cultivating Confidence in Every Seed</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-10">
              Empower your agricultural pursuits with the right insurance partner. Choose Lambach for comprehensive agriculture and livestock insurance solutions. <Link href="/who-we-are#contact-us" className="text-primary hover:underline font-medium">Contact us today</Link> to discuss your unique needs and let us help you cultivate a secure and prosperous future.
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
        title="Agri Business FAQs" 
        description="Learn more about our comprehensive risk coverage in the Agri Business sector." 
      />

      <section className="py-24 bg-slate-50">
        <div className="layout-container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-brand-marine mb-4">Why choose Lambach for agriculture and Livestock Insurance</h2>
          </div>
          <WhyChooseAgriGrid />
        </div>
      </section>

      <CTAContact />
    </>
  );
}
