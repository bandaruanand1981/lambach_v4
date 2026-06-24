import Image from 'next/image';
import { images } from '@/lib/images';
import { Star, StarHalf } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="section-gap bg-blue-50/50">
      <div className="layout-container">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-marine mb-4">
            Trusted Comparisons &amp; Real <br/><span className="text-primary italic font-medium">Customer Experiences</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* Testimonial 1 */}
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 relative top-0 md:top-4">
            <div className="flex gap-1 mb-6">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
            </div>
            <p className="italic text-slate-600 mb-8 leading-relaxed">
              &quot;Lambach transformed how we look at corporate risk. Their team handled our property insurance transition with zero downtime and saved us 15% on premiums.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden relative bg-slate-100">
                <Image src={images.reviewer1} alt="Ananya Sharma" fill className="object-cover" referrerPolicy="no-referrer" sizes="64px" />
              </div>
              <div>
                <h5 className="font-bold text-brand-marine text-sm">Ananya Sharma</h5>
                <p className="text-xs text-slate-500">Operations Director, TechCorp</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 (Primary Highlight) */}
          <div className="bg-brand-marine text-white p-8 rounded-[2rem] shadow-xl md:scale-110 z-10 relative">
            <div className="flex gap-1 mb-6">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
            </div>
            <p className="italic mb-8 leading-relaxed text-slate-200">
              &quot;The claims process was remarkably smooth. When we had a logistics incident, the Lambach team was there 24/7. Truly the best partner for marine insurance.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden relative ring-2 ring-white/20 bg-slate-800">
                <Image src={images.reviewer2} alt="Vikram Mehta" fill className="object-cover" referrerPolicy="no-referrer" sizes="64px" />
              </div>
              <div>
                <h5 className="font-bold text-sm">Vikram Mehta</h5>
                <p className="text-xs text-slate-400">CEO, Global Logistics Ltd</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 relative top-0 md:top-4">
            <div className="flex gap-1 mb-6">
              {[1,2,3,4].map(i => <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
              <StarHalf className="w-5 h-5 fill-amber-400 text-amber-400" />
            </div>
            <p className="italic text-slate-600 mb-8 leading-relaxed">
              &quot;Employee benefits are tricky to navigate, but Lambach simplified everything. Our staff is happier with the new health packages. Highly recommended.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden relative bg-slate-100">
                <Image src={images.reviewer3} alt="Priya Deshmukh" fill className="object-cover" referrerPolicy="no-referrer" sizes="64px" />
              </div>
              <div>
                <h5 className="font-bold text-brand-marine text-sm">Priya Deshmukh</h5>
                <p className="text-xs text-slate-500">HR Lead, Innovate Inc.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
