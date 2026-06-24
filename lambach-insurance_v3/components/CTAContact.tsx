import Image from 'next/image';
import { images } from '@/lib/images';
import Link from 'next/link';

export default function CTAContact() {
  return (
    <section className="layout-container py-12" id="contact">
      <div className="bg-brand-marine rounded-[3rem] p-10 md:p-20 relative overflow-hidden text-center text-white shadow-2xl">
        {/* Background dark overlay image */}
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
             src={images.heroBanner} 
             alt="Banner Background" 
             fill 
             className="object-cover" 
             referrerPolicy="no-referrer"
             sizes="100vw"
          />
          <div className="absolute inset-0 bg-brand-marine/80 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Ready to secure your peace of mind?
          </h2>
          <p className="text-lg mb-10 text-slate-300 leading-relaxed">
            Join 5000+ happy clients and discover why Lambach Insurance is India&apos;s most trusted brokerage partner. Our locations cover major tech hubs including Hyderabad, Mumbai, Bengaluru, Chennai, Delhi, Pune, and Kolkata.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/who-we-are#contact-us" className="bg-primary text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-primary-variant transition-colors active:scale-95">
              Get Your Quote Now
            </Link>
            <button className="bg-transparent text-white border border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors">
              Download Brochure
            </button>
          </div>
          
          {/* Address info block */}
          <div className="mt-16 text-left grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 pt-12">
             <div>
                <h5 className="font-bold text-white mb-2 uppercase tracking-wide text-sm opacity-60">Corporate Office</h5>
                <p className="text-slate-300 text-sm">6th Floor, Topaz Building, Panjagutta,<br/>Hyderabad – 500 082.</p>
             </div>
             <div>
                <h5 className="font-bold text-white mb-2 uppercase tracking-wide text-sm opacity-60">Registered Office</h5>
                <p className="text-slate-300 text-sm">A-701, Trade World, Kamla Mills Compound,<br/>Lower Parel (W), Mumbai – 400013.</p>
             </div>
             <div className="md:col-span-2 flex flex-col md:flex-row gap-8 mt-2">
                <div>
                   <h5 className="font-bold text-white mb-1 uppercase tracking-wide text-sm opacity-60">Phone</h5>
                   <p className="text-slate-300 font-medium">+91 40 6617 1199</p>
                </div>
                <div>
                   <h5 className="font-bold text-white mb-1 uppercase tracking-wide text-sm opacity-60">Email</h5>
                   <p className="text-slate-300 font-medium pb-2">info@lambach.in</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
