import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTAContact from '@/components/CTAContact';
import FAQ from '@/components/FAQ';
import { Shield, Activity, Lock, Server, FileText, Briefcase, Laptop, Mic, Users, ShieldAlert, Banknote, Building, ArrowRight, Settings, Target, Search, Award, Cpu, Handshake, Sun, Leaf, Truck, Globe, Ship, Plane, Home, Heart, CloudRain, Film, Camera, UserX, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Information Technology Insurance | Lambach Insurance Brokers',
  description: 'Comprehensive risk management for technology firms, software developers, and IT service providers.',
};

const faqs = [
  {
    "q": "What is the difference between Cyber Liability and Tech E&O?",
    "a": "Tech E&O protects you if your product or service fails to perform as promised (e.g., a software bug causing a client financial loss), whereas Cyber Liability covers data breaches, hacks, and network security failures."
  },
  {
    "q": "Is Intellectual Property covered by standard liability?",
    "a": "Typically, general liability specifically excludes IP infringement. Specialized Intellectual Property or Media Liability insurance is needed for copyright or patent infringement claims."
  },
  {
    "q": "Does Cyber Insurance cover ransomware payments?",
    "a": "Many robust Cyber Liability policies include provisions to cover cyber extortion, including negotiation costs and ransomware payments, subject to the policy terms."
  }
];

export default function Page() {
  return (
    <>
      <PageHero 
        title="Information Technology Insurance" 
        description="Comprehensive risk management for technology firms, software developers, and IT service providers."
        imageSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200"
        imageAlt="Cyber Liability and Information Technology Insurance Solutions"
        showIndustryActions={true}
        highlightIcon={<Laptop className="w-5 h-5 text-primary" />}
        highlight1Text="Tailored IT Coverage"
      />

      <section className="py-24 bg-slate-50">
        <div className="layout-container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-marine mb-6">Protect against liabilities, and ensure the continuity of operations</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              In today’s digital age, the information technology (IT) sector plays a pivotal role in driving innovation, connectivity, and business transformation. However, with the rapid evolution of technology comes a wide range of risks and challenges that IT businesses must navigate. At Lambach Insurance Broker’s, we understand the unique needs of the IT sector and offer tailored insurance solutions to safeguard businesses against potential liabilities and disruptions. Strong risk management benefits the IT firm by preserving <Link href="/corporate" className="text-primary hover:underline font-medium transition-colors">business continuity</Link> despite cyber incidents, while providing compliance against changing data privacy regulations globally.
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
            <h2 className="font-heading text-3xl font-bold text-brand-marine mb-4">Comprehensive Coverage for the Information Technology Sector</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-blue-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100">
              <div className="flex items-start justify-between mb-6 gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">Cyber Liability Insurance</h3>
                </div>
                <div className="w-16 h-16 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Shield className="w-8 h-8 text-blue-500" />
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Protection against cyber risks, data breaches, and cyberattacks. Includes response costs, legal expenses, and regulatory coverage.
              </p>
            </div>
            <div className="bg-orange-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-orange-100">
              <div className="flex items-start justify-between mb-6 gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">Technology Errors and Omissions (E&O)</h3>
                </div>
                <div className="w-16 h-16 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Activity className="w-8 h-8 text-orange-500" />
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Covers claims of negligence, software issues, or service failures in IT operations.
              </p>
            </div>
            <div className="bg-emerald-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-emerald-100">
              <div className="flex items-start justify-between mb-6 gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">Data Privacy Insurance</h3>
                </div>
                <div className="w-16 h-16 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Lock className="w-8 h-8 text-emerald-500" />
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Covers violations of data protection laws and privacy breaches.
              </p>
            </div>
            <div className="bg-rose-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-rose-100">
              <div className="flex items-start justify-between mb-6 gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">Network Security Insurance</h3>
                </div>
                <div className="w-16 h-16 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Server className="w-8 h-8 text-rose-500" />
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Protection against hacking, malware, and denial-of-service attacks.
              </p>
            </div>
            <div className="bg-purple-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-purple-100">
              <div className="flex items-start justify-between mb-6 gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">Intellectual Property Insurance</h3>
                </div>
                <div className="w-16 h-16 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <FileText className="w-8 h-8 text-purple-500" />
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Covers IP infringement claims including patents, trademarks, and copyrights.
              </p>
            </div>
            <div className="bg-yellow-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-yellow-100">
              <div className="flex items-start justify-between mb-6 gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">Business Interruption Insurance</h3>
                </div>
                <div className="w-16 h-16 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Briefcase className="w-8 h-8 text-yellow-500" />
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Covers financial losses from IT system downtime or cyber incidents.
              </p>
            </div>
            <div className="bg-green-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-green-100">
              <div className="flex items-start justify-between mb-6 gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">Technology Equipment Insurance</h3>
                </div>
                <div className="w-16 h-16 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Laptop className="w-8 h-8 text-green-500" />
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Covers physical damage or loss of IT hardware, servers, and infrastructure.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100">
              <div className="flex items-start justify-between mb-6 gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">Media Liability Insurance</h3>
                </div>
                <div className="w-16 h-16 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Mic className="w-8 h-8 text-slate-500" />
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Covers claims related to digital content, defamation, or copyright issues.
              </p>
            </div>
            <div className="bg-indigo-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-indigo-100">
              <div className="flex items-start justify-between mb-6 gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">Professional Liability Insurance</h3>
                </div>
                <div className="w-16 h-16 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Users className="w-8 h-8 text-indigo-500" />
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Protects IT professionals against service-related claims and errors.
              </p>
            </div>
            <div className="bg-cyan-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-cyan-100">
              <div className="flex items-start justify-between mb-6 gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">Fidelity Bonds</h3>
                </div>
                <div className="w-16 h-16 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <ShieldAlert className="w-8 h-8 text-cyan-500" />
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Covers losses due to employee fraud or dishonesty.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100">
              <div className="flex items-start justify-between mb-6 gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">Financial Institutions Bond (FI Bond)</h3>
                </div>
                <div className="w-16 h-16 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Banknote className="w-8 h-8 text-blue-500" />
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Covers fraud, forgery, and cybercrime risks in financial systems.
              </p>
            </div>
            <div className="bg-orange-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-orange-100">
              <div className="flex items-start justify-between mb-6 gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">Bankers Blanket Bond (BBB)</h3>
                </div>
                <div className="w-16 h-16 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Building className="w-8 h-8 text-orange-500" />
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Protects against financial losses due to theft, fraud, or embezzlement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-marine text-white">
        <div className="layout-container max-w-4xl text-center">
            <h2 className="font-heading text-3xl font-bold mb-6">Guardians of the Digital Realm</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-10">
              At Lambach Insurance Broker’s, we understand the complex risks faced by businesses in the information technology sector. <Link href="/who-we-are" className="text-primary hover:underline font-medium">Our team</Link> is dedicated to delivering tailored insurance solutions that mitigate risks and safeguard your digital assets. <Link href="/who-we-are#contact-us" className="text-primary hover:underline font-medium">Contact us today</Link> to learn more about our specialized insurance offerings for the IT industry.
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
        title="Information Technology FAQs" 
        description="Learn more about our comprehensive risk coverage in the Information Technology sector." 
      />
      <CTAContact />
    </>
  );
}
