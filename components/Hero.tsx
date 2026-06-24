import Image from 'next/image';
import { images } from '@/lib/images';
import { ShieldCheck, ArrowRight, Info, Users, Zap, CheckCircle2, Star } from 'lucide-react';
import Link from 'next/link';
import { shimmerBlurDataURL } from '@/lib/utils';

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center pt-36 pb-8 z-10">
      <div className="layout-container relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 bg-white/50 border border-primary/20 text-primary px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm shadow-sm">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wide uppercase">India&apos;s #1 Insurance Brokerage</span>
            </div>
            
            <h1 className="font-heading text-5xl md:text-6xl text-brand-marine font-bold mb-6 leading-tight tracking-tight">
              Guardians of your <br/>
              <span className="text-primary">peace of mind</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
              Secure today, smile tomorrow! Lambach provides comprehensive insurance brokerage services tailored to your unique risks across India.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/who-we-are#contact-us" className="bg-primary text-white px-8 py-3.5 rounded-full font-semibold flex items-center gap-2 hover:bg-primary-variant hover:shadow-lg transition-all active:scale-95">
                Get a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="bg-white text-slate-700 border border-slate-200 shadow-sm px-8 py-3.5 rounded-full font-semibold flex items-center gap-2 hover:bg-slate-50 transition-all">
                Our Services
                <Info className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-slate-600">900k Customers</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-slate-600">Fast Comparison</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-slate-600">99% Satisfaction</span>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative lg:h-[600px] flex items-center justify-center">
            {/* The collage styling matching the design spec */}
            <div className="relative w-full max-w-md aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl ring-1 ring-slate-900/5">
               <Image 
                  src={images.heroBanner} 
                  alt="Industrial complex at dusk" 
                  fill 
                  className="object-cover"
                  referrerPolicy="no-referrer"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  placeholder="blur"
                  blurDataURL={shimmerBlurDataURL}
               />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
