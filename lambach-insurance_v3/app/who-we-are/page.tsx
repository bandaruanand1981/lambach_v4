import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import InteractiveOfficeMap from '@/components/InteractiveOfficeMap';
import Image from 'next/image';
import { MapPin, Phone, Mail, Briefcase } from 'lucide-react';
import prakasaRaoImg from '@/src/assets/images/regenerated_image_1780685078631.png';

import img2 from '@/src/assets/images/regenerated_image_1781637312703.png';
import img3 from '@/src/assets/images/regenerated_image_1781637316092.png';
import img4 from '@/src/assets/images/regenerated_image_1781637319759.png';
import img5 from '@/src/assets/images/regenerated_image_1781637322747.png';
import img6 from '@/src/assets/images/regenerated_image_1781637325718.png';
import img7 from '@/src/assets/images/regenerated_image_1781637328789.png';

export const metadata: Metadata = {
  title: 'Who We Are | Lambach Insurance Brokers',
  description: 'Learn about Lambach Insurance Brokers, our expert leadership team, our story, and our mission to redefine risk management and insurance brokering in India.',
  keywords: ['About Lambach', 'Insurance Brokers India', 'Risk Management Team', 'Our Story', 'Join Our Team'],
};

export default function WhoWeArePage() {
  return (
    <>
      <PageHero 
        title="Who We Are" 
        description="A collective of industry experts, actuaries, and risk engineers dedicated to safeguarding the future of Indian enterprises."
        imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
        imageAlt="Lambach Insurance Brokers team meeting"
      />
      
      {/* Our Story */}
      <section className="py-24 bg-white" id="our-story">
        <div className="layout-container">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <h2 className="font-heading text-4xl md:text-5xl text-brand-marine font-bold mb-6 leading-tight tracking-tight">
                Our <span className="text-primary">Story</span>
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Founded in 2024, Lambach Insurance Brokers set out with a clear vision: to introduce a level of extreme technical rigor to the Indian insurance brokerage market. We noticed that enterprises were frequently under-insured or carrying redundant policies due to lack of customized advisory.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Since our inception, we have quickly scaled to partner with thousands of clients, transforming how organizations approach corporate risk, engineering projects, employee benefits, and marine logistics. We are committed to transparency, specialized knowledge, and unwavering client support.
              </p>
            </div>
            <div className="w-full md:w-1/2 relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" alt="Lambach Corporate Office Interior" fill className="object-cover" referrerPolicy="no-referrer" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-24 bg-slate-50" id="our-team">
        <div className="layout-container text-center">
          <h2 className="font-heading text-4xl md:text-5xl text-brand-marine font-bold mb-16 leading-tight tracking-tight">
            Our <span className="text-primary">Team</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { id: 1, name: "Prakasa Rao R S", title: "Founder & CEO", desc: "Leading the firm's strategic vision and operations with comprehensive expertise in insurance brokerage and risk management.", img: prakasaRaoImg },
              { id: 2, name: "Abhijith Mohanty", title: "Director", desc: "Guiding corporate governance and driving key strategic initiatives to enhance the firm's market footprint.", img: img2 },
              { id: 3, name: "Ravi Ramavath", title: "Commercial Head", desc: "Driving commercial growth and overseeing major corporate accounts to deliver tailored risk management strategies.", img: img3 },
              { id: 4, name: "Ch Bhaskar Rao", title: "Retail Head", desc: "Managing the retail insurance operations, ensuring personalized coverage and comprehensive protection for individuals.", img: img4 },
              { id: 5, name: "GP Naidu", title: "Life Insurance Head", desc: "Structuring and advising on life insurance portfolios to secure long-term financial stability for clients and their families.", img: img5 },
              { id: 6, name: "Nalla Kiran Kumar", title: "Business Head – AP", desc: "Spearheading regional business operations and expanding our risk advisory services across Andhra Pradesh.", img: img6 },
              { id: 7, name: "B Kanaka Raju", title: "Admin & HR Head", desc: "Overseeing human resources, administrative operations, and fostering a strong organizational culture.", img: img7 }
            ].map((leader) => (
              <div key={leader.id} className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="w-40 h-40 mx-auto rounded-full bg-slate-200 overflow-hidden mb-6 relative shadow-md group-hover:scale-105 transition-transform duration-300">
                   <Image src={leader.img} alt={leader.name} fill className="object-cover" referrerPolicy="no-referrer" sizes="160px" />
                 </div>
                 <h3 className="text-xl font-bold text-brand-marine mb-1">{leader.name}</h3>
                 <p className="text-primary font-medium mb-4">{leader.title}</p>
                 <div className="h-px w-12 bg-primary/20 mx-auto mb-4"></div>
                 <p className="text-sm text-slate-600 leading-relaxed">{leader.desc}</p>
               </div>
             ))}
           </div>
         </div>
       </section>
 
       {/* Contact Us & Locations */}
       <section className="py-24 bg-white relative overflow-hidden" id="contact-us">
         {/* Background blobs for visual interest */}
         <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3"></div>
 
         <div className="layout-container flex flex-col lg:flex-row gap-16 relative z-10">
           <div className="flex-1 flex flex-col justify-between">
             <div>
               <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full mb-4 text-xs font-bold uppercase tracking-widest">
                 Get in Touch
               </div>
               <h2 className="font-heading text-4xl md:text-5xl text-brand-marine font-bold mb-6 leading-tight tracking-tight">
                 Contact <span className="text-primary">Us</span>
               </h2>
               <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                 Our risk advisory team is prepared to analyze your existing policies, address questions, and structure optimized corporate insurance solutions tailored to your operational profiles.
               </p>
             </div>

             <div className="space-y-6">
               <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex items-center gap-5">
                 <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0 border border-emerald-100 shadow-sm">
                   <Phone className="w-5 h-5 text-emerald-600" />
                 </div>
                 <div>
                   <h4 className="font-bold text-slate-400 text-[10px] uppercase tracking-wider mb-1">Call Representative</h4>
                   <p className="font-bold text-brand-marine text-lg">+91 40 6617 1199</p>
                 </div>
               </div>

               <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex items-center gap-5">
                 <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center shrink-0 border border-purple-100 shadow-sm">
                   <Mail className="w-5 h-5 text-purple-600" />
                 </div>
                 <div>
                   <h4 className="font-bold text-slate-400 text-[10px] uppercase tracking-wider mb-1">Corporate Correspondence</h4>
                   <a href="mailto:info@lambach.in" className="font-bold text-primary text-lg hover:underline">info@lambach.in</a>
                 </div>
               </div>
             </div>
           </div>
           
           <ContactForm />
         </div>

         {/* Interactive Office Map Visualization */}
         <div className="layout-container relative z-10 mt-28">
           <div className="text-center max-w-2xl mx-auto mb-16">
             <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3.5 py-1.5 rounded-full">
               Interactive Directory
             </span>
             <h3 className="font-heading text-3xl md:text-4xl text-brand-marine font-bold mt-4 mb-4">
               Our Offices
             </h3>
             <p className="text-slate-500 text-sm">
               With a corporate presence in India&apos;s leading financial and industrial hubs, Lambach provides responsive, local support for our enterprise partners.
             </p>
           </div>
           
           <InteractiveOfficeMap />
         </div>
       </section>

       {/* Join Our Team */}
       <section className="py-24 bg-slate-50" id="join-our-team">
         <div className="layout-container flex flex-col items-center">
           <div className="max-w-4xl w-full">
             <div className="text-center mb-16">
               <h2 className="font-heading text-4xl md:text-5xl text-brand-marine font-bold mb-6 leading-tight tracking-tight">
                 Join Our <span className="text-primary">Team</span>
               </h2>
               <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                 At Lambach Insurance Brokers, we believe that our greatest asset is our people. We foster an environment of continuous learning, technical excellence, and client-centric innovation. Whether you are an experienced actuary, a driven sales professional, or an underwriting specialist, we offer unparalleled opportunities to advance your career.
               </p>
             </div>
             
             <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 relative overflow-hidden group shadow-lg">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl transition-transform group-hover:scale-150"></div>
                
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl shadow-sm flex items-center justify-center text-primary border border-slate-100">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-marine">Current Openings</h3>
                </div>
                
                <p className="text-slate-600 mb-10 text-lg relative z-10">We are always eager to connect with exceptional talent across risk engineering, corporate sales, and customer success.</p>
                
                <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                      <h4 className="font-bold text-brand-marine text-lg mb-2">Submit Your Resume</h4>
                      <p className="text-slate-600">Send your resume and a brief cover letter to our HR department, and we will keep your profile on file for future opportunities.</p>
                    </div>
                    <a href="mailto:careers@lambach.in" className="shrink-0 inline-flex items-center gap-2 bg-primary hover:bg-primary-variant text-white font-bold py-3 px-8 rounded-full transition-all shadow-md active:scale-95">
                       <Mail className="w-4 h-4" />
                       Email Resume
                    </a>
                  </div>
                </div>
             </div>
           </div>
         </div>
       </section>

    </>
  );
}
