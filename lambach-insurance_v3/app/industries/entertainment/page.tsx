import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTAContact from '@/components/CTAContact';
import FAQ from '@/components/FAQ';
import { ShieldAlert, Camera, FileText, Users, Settings, UserX, Building, Plane, Star, Activity, ArrowRight, Target, Search, Award, Cpu, Handshake, Sun, Leaf, Lock, Truck, Globe, Ship, Server, Briefcase, Laptop, Mic, Banknote, Home, Heart, CloudRain, Film, Shield } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Entertainment Insurance | Lambach Insurance Brokers',
  description: 'Specialized insurance coverage for film production, events, and the entertainment industry.',
};

const faqs = [
  {
    "q": "What does Non-Appearance Insurance cover?",
    "a": "It provides coverage for the financial loss (like refunded tickets or marketing costs) if a key individual, such as a lead actor or headline musician, is unable to appear due to death, illness, or unavoidable travel delays."
  },
  {
    "q": "Do I need insurance for a one-day event?",
    "a": "Yes, Special Event Liability insurance is highly recommended and often required by venues to cover potential bodily injury or property damage claims during short-term events."
  },
  {
    "q": "What is included in a typical Production Insurance package?",
    "a": "A standard package covers cast extra expense, negative/faulty stock, props, sets, wardrobe, third-party property damage, and production equipment."
  }
];

export default function Page() {
  return (
    <>
      <PageHero 
        title="Entertainment Insurance" 
        description="Specialized insurance coverage for film production, events, and the entertainment industry."
        imageSrc="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=1200"
        imageAlt="Entertainment Insurance Solutions for Events Productions and Media Companies"
        showIndustryActions={true}
        highlightIcon={<Film className="w-5 h-5 text-primary" />}
        highlight1Text="Tailored Entertainment Coverage"
      />

      <section className="py-24 bg-slate-50">
        <div className="layout-container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-marine mb-6">Uncertainties inherent in the dynamic and fast-paced world of entertainment</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              In the dynamic and multifaceted world of entertainment, businesses and professionals face a wide range of risks and challenges. From production companies and event organizers to performers and venues, the entertainment sector requires specialized insurance solutions to safeguard against potential liabilities and disruptions. We understand the unique needs of the entertainment industry and offer comprehensive insurance coverage tailored to your specific requirements. We help you navigate complex regulatory dimensions, providing insurance protection advantages that ensure show-stopping events are backed by seamless <Link href="/corporate" className="text-primary hover:underline font-medium transition-colors">business continuity</Link>.
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
            <h2 className="font-heading text-3xl font-bold text-brand-marine mb-4">Tailored Coverage for the Entertainment Sector</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-blue-50 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100 overflow-hidden">
              <div className="relative w-full h-48 overflow-hidden bg-slate-200">
                <Image 
                  src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=800"
                  alt="Event Liability Insurance"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldAlert className="w-6 h-6 text-blue-500" />
                  <h3 className="font-bold text-xl text-brand-marine">Event Liability Insurance</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Protection against bodily injury, property damage, and liabilities arising from events such as concerts, festivals, and live performances.
                </p>
              </div>
            </div>

            <div className="bg-orange-50 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-orange-100 overflow-hidden">
              <div className="relative w-full h-48 overflow-hidden bg-slate-200">
                 <Image 
                  src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&q=80&w=800"
                  alt="Production Insurance"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <Camera className="w-6 h-6 text-orange-500" />
                  <h3 className="font-bold text-xl text-brand-marine">Production Insurance</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Coverage for film, television, and commercial productions against property damage, equipment breakdowns, and delays.
                </p>
              </div>
            </div>

            <div className="bg-emerald-50 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-emerald-100 overflow-hidden">
              <div className="relative w-full h-48 overflow-hidden bg-slate-200">
                 <Image 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
                  alt="Errors and Omissions (E&O)"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-emerald-500" />
                  <h3 className="font-bold text-xl text-brand-marine">Errors and Omissions (E&O)</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Protection against <Link href="/who-we-are#contact-us" className="text-primary hover:underline font-medium transition-colors">claims</Link> related to negligence, copyright infringement, or intellectual property disputes.
                </p>
              </div>
            </div>

            <div className="bg-rose-50 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-rose-100 overflow-hidden">
              <div className="relative w-full h-48 overflow-hidden bg-slate-200">
                 <Image 
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800"
                  alt="General Liability Insurance"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-rose-500" />
                  <h3 className="font-bold text-xl text-brand-marine">General Liability Insurance</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Coverage for bodily injury, property damage, and personal injury claims related to entertainment operations.
                </p>
              </div>
            </div>

            <div className="bg-purple-50 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-purple-100 overflow-hidden">
              <div className="relative w-full h-48 overflow-hidden bg-slate-200">
                 <Image 
                  src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&q=80&w=800"
                  alt="Equipment Insurance"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <Settings className="w-6 h-6 text-purple-500" />
                  <h3 className="font-bold text-xl text-brand-marine">Equipment Insurance</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Coverage for loss, theft, or damage to production equipment such as cameras, lighting, and sound systems.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-yellow-100 overflow-hidden">
              <div className="relative w-full h-48 overflow-hidden bg-slate-200">
                 <Image 
                  src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800"
                  alt="Non-Appearance Insurance"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <UserX className="w-6 h-6 text-yellow-500" />
                  <h3 className="font-bold text-xl text-brand-marine">Non-Appearance Insurance</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Protection against financial losses due to cancellation or non-appearance of performers.
                </p>
              </div>
            </div>

            <div className="bg-green-50 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-green-100 overflow-hidden">
              <div className="relative w-full h-48 overflow-hidden bg-slate-200">
                 <Image 
                  src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800"
                  alt="Venue Liability Insurance"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <Building className="w-6 h-6 text-green-500" />
                  <h3 className="font-bold text-xl text-brand-marine">Venue Liability Insurance</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Coverage for venue owners against premises-related liabilities.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100 overflow-hidden">
              <div className="relative w-full h-48 overflow-hidden bg-slate-200">
                 <Image 
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800"
                  alt="Travel Insurance"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <Plane className="w-6 h-6 text-slate-500" />
                  <h3 className="font-bold text-xl text-brand-marine">Travel Insurance</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Coverage for travel risks affecting performers and production teams.
                </p>
              </div>
            </div>

            <div className="bg-indigo-50 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-indigo-100 overflow-hidden">
              <div className="relative w-full h-48 overflow-hidden bg-slate-200">
                 <Image 
                  src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=800"
                  alt="Special Event Insurance"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="w-6 h-6 text-indigo-500" />
                  <h3 className="font-bold text-xl text-brand-marine">Special Event Insurance</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Tailored coverage for short-term events like weddings, parties, and corporate functions.
                </p>
              </div>
            </div>

            <div className="bg-cyan-50 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-cyan-100 overflow-hidden">
              <div className="relative w-full h-48 overflow-hidden bg-slate-200">
                 <Image 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
                  alt="Workers' Compensation"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <Activity className="w-6 h-6 text-cyan-500" />
                  <h3 className="font-bold text-xl text-brand-marine">Workers&apos; Compensation</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Coverage for employee injuries and work-related incidents.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-marine text-white">
        <div className="layout-container max-w-4xl text-center">
            <h2 className="font-heading text-3xl font-bold mb-6">Securing the Spotlight</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-10">
              At Lambach Insurance Brokers, we understand the complexities and risks inherent in the entertainment sector. <Link href="/who-we-are" className="text-primary hover:underline font-medium">Our team</Link> is dedicated to delivering tailored insurance solutions that mitigate risks and safeguard your operations. <Link href="/who-we-are#contact-us" className="text-primary hover:underline font-medium">Contact us today</Link> to learn more about our specialized insurance offerings for the entertainment industry.
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
        title="Entertainment FAQs" 
        description="Learn more about our comprehensive risk coverage in the Entertainment sector." 
      />
      <CTAContact />
    </>
  );
}
