import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTAContact from '@/components/CTAContact';
import FAQ from '@/components/FAQ';
import { Building, ShieldAlert, Activity, Truck, Leaf, Lock, Target, Briefcase, Ship, Users, ArrowRight, Settings, Search, Award, Cpu, Handshake, Sun, Globe, Plane, Server, FileText, Laptop, Mic, Banknote, Home, Heart, CloudRain, Film, Camera, UserX, Star, Shield } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Chemical & Pharmaceutical Insurance | Lambach Insurance Brokers',
  description: 'Tailored solutions for chemical and pharmaceutical sectors covering product liability, business interruption and property.',
};

const faqs = [
  {
    "q": "What does Environmental Liability cover exactly?",
    "a": "It provides protection against pollution incidents, clean-up costs, third-party bodily injury, and property damage arising from environmental contamination at your facilities."
  },
  {
    "q": "Does Product Liability cover product recalls?",
    "a": "Standard product liability covers third-party bodily injury and property damage, but a specialized Product Recall policy can be added to cover the costs associated with withdrawing a product from the market."
  },
  {
    "q": "Are clinical trials covered under standard policies?",
    "a": "No, clinical trials usually require specific R&D or Clinical Trial Liability insurance to properly address the unique exposures of human testing and novel pharmaceutical development."
  }
];

export default function Page() {
  return (
    <>
      <PageHero 
        title="Chemical & Pharmaceutical Insurance" 
        description="Tailored solutions for hazardous environments, product liability, and contamination."
        imageSrc="https://images.unsplash.com/photo-1532187863486-abf9db090729?auto=format&fit=crop&q=80&w=1200"
        imageAlt="Chemical and Pharmaceutical Industry Insurance Risk Management Solutions"
        showIndustryActions={true}
        highlightIcon={<Building className="w-5 h-5 text-primary" />}
        highlight1Text="Tailored Chemical Coverage"
      />

      <section className="py-24 bg-slate-50">
        <div className="layout-container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-marine mb-6">Characterized by its complexity and innovation-driven nature</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              At Lambach Insurance Broker’s, we recognize the critical importance of the chemical and pharmaceutical sectors in advancing healthcare, innovation, and industrial progress. With the dynamic nature of these industries and the inherent risks involved in manufacturing, handling, and distributing chemicals and pharmaceuticals, it’s crucial for businesses to have comprehensive insurance coverage tailored to their unique needs. The insurance protection advantages here include preserving <Link href="/corporate" className="text-primary hover:underline font-medium transition-colors">business continuity</Link> in the face of chemical spills, product recalls, or supply chain breakdowns, while addressing the stringent compliance and regulatory considerations standard in these sectors.
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
            <h2 className="font-heading text-3xl font-bold text-brand-marine mb-4">Tailored Coverage for the Chemical and Pharmaceutical Sector</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-blue-50 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100 overflow-hidden">
              <div className="relative w-full h-48 overflow-hidden bg-slate-200">
                <Image 
                  src="https://images.unsplash.com/photo-1542154139-2a9f1ed70529?auto=format&fit=crop&q=80&w=800"
                  alt="Property Insurance"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <Building className="w-6 h-6 text-blue-500" />
                  <h3 className="font-bold text-xl text-brand-marine">Property Insurance</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Coverage for manufacturing facilities, laboratories, warehouses, and assets against fire, explosion, natural disasters, and equipment breakdown.
                </p>
              </div>
            </div>
            <div className="bg-orange-50 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-orange-100 overflow-hidden">
              <div className="relative w-full h-48 overflow-hidden bg-slate-200">
                <Image 
                  src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800"
                  alt="Product Liability Insurance"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldAlert className="w-6 h-6 text-orange-500" />
                  <h3 className="font-bold text-xl text-brand-marine">Product Liability Insurance</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Protection against <Link href="/who-we-are#contact-us" className="text-primary hover:underline font-medium transition-colors">claims</Link> from defective products, contamination, or adverse reactions. Includes legal defense and settlements.
                </p>
              </div>
            </div>
            <div className="bg-emerald-50 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-emerald-100 overflow-hidden">
              <div className="relative w-full h-48 overflow-hidden bg-slate-200">
                <Image 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
                  alt="Business Interruption Insurance"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <Activity className="w-6 h-6 text-emerald-500" />
                  <h3 className="font-bold text-xl text-brand-marine">Business Interruption Insurance</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Covers financial losses due to disruptions in manufacturing operations.
                </p>
              </div>
            </div>
            <div className="bg-rose-50 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-rose-100 overflow-hidden">
              <div className="relative w-full h-48 overflow-hidden bg-slate-200">
                <Image 
                  src="https://images.unsplash.com/photo-1586528116311-ad8ed7c50810?auto=format&fit=crop&q=80&w=800"
                  alt="Supply Chain Insurance"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <Truck className="w-6 h-6 text-rose-500" />
                  <h3 className="font-bold text-xl text-brand-marine">Supply Chain Insurance</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Protection against delays or interruptions in raw materials or logistics.
                </p>
              </div>
            </div>
            <div className="bg-purple-50 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-purple-100 overflow-hidden">
              <div className="relative w-full h-48 overflow-hidden bg-slate-200">
                <Image 
                  src="https://images.unsplash.com/photo-1611273426858-450d8ce4c227?auto=format&fit=crop&q=80&w=800"
                  alt="Environmental Liability Insurance"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <Leaf className="w-6 h-6 text-purple-500" />
                  <h3 className="font-bold text-xl text-brand-marine">Environmental Liability Insurance</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Covers pollution incidents, environmental damage, cleanup costs, and legal liabilities.
                </p>
              </div>
            </div>
            <div className="bg-yellow-50 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-yellow-100 overflow-hidden">
              <div className="relative w-full h-48 overflow-hidden bg-slate-200">
                <Image 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
                  alt="Cyber Insurance"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="w-6 h-6 text-yellow-500" />
                  <h3 className="font-bold text-xl text-brand-marine">Cyber Insurance</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Protection against cyber threats, data breaches, and operational disruptions.
                </p>
              </div>
            </div>
            <div className="bg-green-50 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-green-100 overflow-hidden">
              <div className="relative w-full h-48 overflow-hidden bg-slate-200">
                <Image 
                  src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800"
                  alt="R&D Insurance"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-green-500" />
                  <h3 className="font-bold text-xl text-brand-marine">R&D Insurance</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Coverage for research, clinical trials, and experimental processes.
                </p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100 overflow-hidden">
              <div className="relative w-full h-48 overflow-hidden bg-slate-200">
                <Image 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
                  alt="Professional Liability Insurance"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="w-6 h-6 text-slate-500" />
                  <h3 className="font-bold text-xl text-brand-marine">Professional Liability Insurance</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Covers negligence, errors, or omissions in professional services.
                </p>
              </div>
            </div>
            <div className="bg-indigo-50 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-indigo-100 overflow-hidden">
              <div className="relative w-full h-48 overflow-hidden bg-slate-200">
                <Image 
                  src="https://images.unsplash.com/photo-1586528116493-a02826315df5?auto=format&fit=crop&q=80&w=800"
                  alt="Cargo Insurance"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <Ship className="w-6 h-6 text-indigo-500" />
                  <h3 className="font-bold text-xl text-brand-marine">Cargo Insurance</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Protection for goods in transit against theft, loss, or damage.
                </p>
              </div>
            </div>
            <div className="bg-cyan-50 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-cyan-100 overflow-hidden">
              <div className="relative w-full h-48 overflow-hidden bg-slate-200">
                <Image 
                  src="https://images.unsplash.com/photo-1504931301985-5b80b7e28945?auto=format&fit=crop&q=80&w=800"
                  alt="Workers' Compensation Insurance"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-cyan-500" />
                  <h3 className="font-bold text-xl text-brand-marine">Workers&apos; Compensation Insurance</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Covers employee medical expenses and lost wages due to workplace injuries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-marine text-white">
        <div className="layout-container max-w-4xl text-center">
            <h2 className="font-heading text-3xl font-bold mb-6">Advancing breakthroughs, ensuring well-being</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-10">
              At Lambach Insurance Broker’s, we understand the complex risks faced by businesses in the chemical and pharmaceutical sectors. <Link href="/who-we-are" className="text-primary hover:underline font-medium">Our team</Link> is dedicated to delivering tailored insurance solutions that mitigate risks and safeguard your operations. <Link href="/who-we-are#contact-us" className="text-primary hover:underline font-medium">Contact us today</Link> to learn more about our specialized offerings.
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
        title="Chemical & Pharmaceutical FAQs" 
        description="Learn more about our comprehensive risk coverage in the Chemical & Pharmaceutical sector." 
      />
      <CTAContact />
    </>
  );
}
