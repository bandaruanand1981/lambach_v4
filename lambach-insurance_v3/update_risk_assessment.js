const fs = require('fs');

const pageContent = `import { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import CTAContact from '@/components/CTAContact';
import { 
  ShieldCheck, 
  Activity, 
  Globe, 
  Lightbulb, 
  Layers, 
  TrendingUp, 
  Award, 
  Users, 
  RefreshCw,
  ArrowRight,
  Target
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Risk Management & Assessment | Lambach Insurance Brokers',
  description: 'Identify, model, and mitigate operational risks with our expert risk assessment and risk engineering services. Your strategic risk partner for business continuity.',
  keywords: ['Risk Assessment India', 'Risk Management', 'Insurance Audit', 'Corporate Risk Solutions', 'Business Continuity', 'Risk Engineering Services'],
};

export default function RiskAssessmentPage() {
  return (
    <>
      <PageHero 
        title="Risk Management & Assessment" 
        description="Meticulous evaluation and holistic risk engineering to shield your business against uncertainties."
        imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
        imageAlt="Risk assessment charts and data analysis"
      />

      {/* Intro Section - Split Layout */}
      <section className="section-gap bg-white overflow-hidden">
        <div className="layout-container">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            <div className="w-full lg:w-5/12 relative">
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] bg-slate-100 ring-1 ring-slate-100 shadow-xl">
                <Image 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200" 
                  alt="Risk Assessment and Management" 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-700" 
                  referrerPolicy="no-referrer" 
                />
              </div>
              
              <div className="absolute -bottom-8 -right-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl hidden md:block max-w-[280px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] ring-1 ring-slate-100 border border-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary text-white p-3 rounded-xl shadow-sm">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                     <span className="font-bold text-brand-marine block text-lg">Your Shield</span>
                     <span className="text-xs font-medium text-slate-500">Against Uncertainties</span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">Evaluating potential risks associated with insuring businesses and assets to minimize uncertainties.</p>
              </div>
            </div>

            <div className="w-full lg:w-7/12">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-primary px-3 py-1 rounded-full mb-4 text-xs font-bold uppercase tracking-widest">
                <Activity className="w-4 h-4" /> Comprehensive Protection
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-marine mb-8 leading-tight">
                Meticulous Risk Assessment
              </h2>
              
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed mb-10">
                <p>
                  <strong className="text-brand-marine">Risk Assessment</strong> is a critical process that evaluates potential risks associated with insuring individuals, properties, businesses, and other valuable assets. Insurance providers use risk assessment methodologies to identify the likelihood of insured events occurring, measure exposure levels, and determine appropriate coverage terms and premium rates. Effective risk assessment helps organizations minimize uncertainties, strengthen resilience, and make informed risk management decisions.
                </p>
                <p>
                  At <strong className="text-brand-marine">Lambach Risk Management Services</strong>, we take pride in delivering specialized Risk Engineering Services (RES) that help organizations identify, analyze, and manage risks with confidence. Our dedicated team works closely with clients across industries and geographies, building strong partnerships that support long-term business sustainability and growth.
                </p>
                <p>
                  With extensive global experience, our Risk Engineering Services team has collaborated with numerous organizations worldwide, helping them significantly improve their risk profiles, operational safety standards, and overall resilience. Through detailed risk evaluations and practical recommendations, we empower businesses to reduce vulnerabilities and enhance operational efficiency.
                </p>
                <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-primary">
                  <p className="font-medium text-brand-marine m-0">What truly differentiates Lambach is our <strong>Total Risk Perspective</strong>—a comprehensive and holistic approach that extends beyond traditional insurance solutions. We provide a complete 360-degree view of organizational risks, helping businesses safeguard their balance sheets, protect critical assets, and strengthen their ability to navigate an increasingly complex risk environment.</p>
                </div>
              </div>

               <div className="mt-8">
                <Link href="/who-we-are#contact-us" className="inline-flex bg-brand-marine text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-slate-800 transition-colors active:scale-95 items-center gap-2">
                  Partner With Us <ArrowRight className="w-5 h-5"/>
                </Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="section-gap bg-slate-50 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/50 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl"></div>
        
        <div className="layout-container relative z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full mb-4 text-xs font-bold uppercase tracking-widest">
              Core Capabilities
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-marine mb-4">
              Key Features of Lambach
            </h2>
            <p className="text-slate-600">
              Our Risk Management Services provide full-spectrum protection, ensuring operational continuity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-white p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-0 group-hover:scale-150 transition-transform duration-500"></div>
               <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:-translate-y-1 transition-transform relative z-10">
                  <Layers className="w-8 h-8" />
               </div>
               <h3 className="font-bold text-2xl text-brand-marine mb-4 relative z-10">Total Risk Perspective</h3>
               <p className="text-slate-600 leading-relaxed relative z-10 text-lg">
                 Our approach goes beyond managing isolated risks. We focus on protecting your entire organization by evaluating interconnected risk exposures that could impact financial performance, operational continuity, and long-term growth. Through our Total Risk Perspective, we provide comprehensive solutions designed to address multiple risk categories and safeguard your business from unforeseen challenges.
               </p>
            </div>
            
            <div className="bg-white p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-emerald-100 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-full -z-0 group-hover:scale-150 transition-transform duration-500"></div>
               <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:-translate-y-1 transition-transform relative z-10">
                  <Globe className="w-8 h-8" />
               </div>
               <h3 className="font-bold text-2xl text-brand-marine mb-4 relative z-10">Global Engagement</h3>
               <p className="text-slate-600 leading-relaxed relative z-10 text-lg">
                 With extensive international exposure and industry expertise, our Risk Engineering Services team has worked with organizations across diverse sectors and regions. This global experience enables us to understand industry-specific challenges, emerging risk trends, and best practices, allowing us to deliver tailored solutions that meet the unique needs of every client.
               </p>
            </div>
            
            <div className="bg-white p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-purple-100 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-purple-50 rounded-bl-full -z-0 group-hover:scale-150 transition-transform duration-500"></div>
               <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:-translate-y-1 transition-transform relative z-10">
                  <Target className="w-8 h-8" />
               </div>
               <h3 className="font-bold text-2xl text-brand-marine mb-4 relative z-10">Need-Based Risk Solutions</h3>
               <p className="text-slate-600 leading-relaxed relative z-10 text-lg">
                 At Lambach, we believe that every organization faces a unique risk landscape. Our team takes a consultative approach to understand your business operations, objectives, and vulnerabilities. By identifying, analyzing, and managing risk interdependencies, we develop customized risk management strategies that align with your organization's specific requirements.
               </p>
            </div>
            
            <div className="bg-white p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-orange-100 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-bl-full -z-0 group-hover:scale-150 transition-transform duration-500"></div>
               <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:-translate-y-1 transition-transform relative z-10">
                  <TrendingUp className="w-8 h-8" />
               </div>
               <h3 className="font-bold text-2xl text-brand-marine mb-4 relative z-10">Holistic Risk Engineering</h3>
               <p className="text-slate-600 leading-relaxed relative z-10 text-lg">
                 Our Risk Engineering Services practice focuses on proactive risk management rather than reactive solutions. We identify potential threats before they escalate, evaluate their impact, and implement practical mitigation measures. This forward-thinking approach helps organizations reduce losses, improve safety standards, enhance operational performance, and build long-term resilience.
               </p>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-gap bg-white">
        <div className="layout-container">
           <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
             
             <div className="w-full lg:w-6/12 order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-4">
                  <Lightbulb className="w-5 h-5" />
                  Why Choose Us
                </div>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-marine mb-10 leading-tight">
                  Protecting what matters most
                </h2>
                
                <div className="space-y-8">
                  <div className="flex gap-6 group">
                    <div className="flex-shrink-0 w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors duration-300 shadow-sm border border-slate-100">
                      <Award className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-brand-marine mb-2">Global Reach with Local Expertise</h4>
                      <p className="text-slate-600 leading-relaxed">We combine international experience with local market knowledge to deliver risk management solutions that are practical, culturally relevant, and aligned with regional regulatory requirements. This balanced approach ensures effective implementation and measurable results.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-6 group">
                    <div className="flex-shrink-0 w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center group-hover:bg-emerald-600 transition-colors duration-300 shadow-sm border border-slate-100">
                      <Users className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-brand-marine mb-2">Collaborative Partnership Approach</h4>
                      <p className="text-slate-600 leading-relaxed">Our success is built on strong client relationships. We work closely with your team to understand your business objectives, operational challenges, and strategic priorities. This collaborative methodology enables us to design customized risk management solutions that deliver meaningful value.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-6 group">
                    <div className="flex-shrink-0 w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300 shadow-sm border border-slate-100">
                      <RefreshCw className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-brand-marine mb-2">Commitment to Continuous Improvement</h4>
                      <p className="text-slate-600 leading-relaxed">Risk landscapes constantly evolve, and so do our solutions. We continuously monitor emerging risks, industry developments, and changing business environments to ensure our recommendations remain relevant, effective, and aligned with your organization's growth journey.</p>
                    </div>
                  </div>
                </div>
             </div>

             <div className="w-full lg:w-6/12 order-1 lg:order-2 relative">
                <div className="relative rounded-[2.5rem] overflow-hidden aspect-square bg-slate-100 ring-1 ring-slate-100 shadow-xl">
                  <Image 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" 
                    alt="Team Collaboration on Risk Management" 
                    fill 
                    className="object-cover" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
                
                <div className="absolute top-1/2 left-0 -translate-x-8 -translate-y-1/2 bg-white/90 backdrop-blur-md p-8 rounded-3xl hidden md:block shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] ring-1 ring-slate-100">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-100 flex items-center justify-center rounded-xl text-green-600">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Secure</div>
                        <div className="text-sm text-gray-500">Asset Protection</div>
                      </div>
                    </div>
                    <div className="w-full h-px bg-slate-100 my-2"></div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 flex items-center justify-center rounded-xl text-blue-600">
                        <TrendingUp className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Resilient</div>
                        <div className="text-sm text-gray-500">Long-term Growth</div>
                      </div>
                    </div>
                  </div>
                </div>
             </div>
             
           </div>
        </div>
      </section>

      {/* CTA Pre-footer */}
      <section className="py-20 lg:py-24 bg-white relative">
        <div className="layout-container">
          <div className="bg-gradient-to-br from-brand-marine to-slate-800 p-12 lg:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl"></div>
            
            <div className="relative z-10 text-center md:text-left md:flex items-center justify-between gap-12">
              <div className="mb-8 md:mb-0 max-w-2xl">
                <div className="inline-flex items-center gap-2 bg-white/10 text-white px-3 py-1 rounded-full mb-6 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                  Trust Us
                </div>
                <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  Partner with Lambach Risk Management Services
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Build a stronger, safer, and more resilient future. Contact our team today to discover how our customized risk assessment and risk engineering solutions can support your organization's long-term success.
                </p>
              </div>
              
              <div className="flex-shrink-0">
                <Link href="/who-we-are#contact-us" className="inline-flex bg-primary hover:bg-primary-variant text-white px-8 py-5 rounded-xl font-bold text-lg items-center gap-3 shadow-lg hover:shadow-xl transition-all active:scale-95 whitespace-nowrap">
                  Contact Our Team
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTAContact />
    </>
  );
}
`;

fs.writeFileSync('app/risk-assessment/page.tsx', pageContent);
console.log('Successfully generated Risk Assessment page.');
