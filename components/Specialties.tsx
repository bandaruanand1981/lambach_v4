import Image from 'next/image';
import { images } from '@/lib/images';
import { Store, Users } from 'lucide-react';

export default function Specialties() {
  return (
    <section className="section-gap bg-white" id="industries">
      <div className="layout-container">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-primary px-3 py-1 rounded-full mb-4 text-xs font-bold uppercase tracking-widest">
            Our Specialties
          </div>
          <h2 className="font-heading text-4xl font-bold text-brand-marine mb-4">
            The Cover You Need, All In <span className="text-primary">One Place</span>
          </h2>
          <p className="text-slate-600">
            Specialized insurance solutions designed to mitigate risks across diverse industrial and personal sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-blue-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300">
            <div className="flex items-start justify-between mb-8 gap-4">
              <div className="flex-1">
                <h3 className="font-bold text-xl text-brand-marine mb-2">Employee Benefit</h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">Comprehensive health and wellness packages for your workforce.</p>
                <button className="bg-white border border-slate-200 text-primary px-4 py-2 rounded-full text-xs font-bold shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">Compare Now</button>
              </div>
              <div className="relative w-28 h-28 flex-shrink-0 rounded-2xl overflow-hidden shadow-sm group-hover:-translate-y-1 transition-transform">
                <Image src={images.employeeBenefit} alt="Employee Benefit" fill className="object-cover" referrerPolicy="no-referrer" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-orange-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300">
            <div className="flex items-start justify-between mb-8 gap-4">
              <div className="flex-1">
                <h3 className="font-bold text-xl text-brand-marine mb-2">Property Insurance</h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">Guard your physical assets against fire and natural disasters.</p>
                <button className="bg-white border border-slate-200 text-primary px-4 py-2 rounded-full text-xs font-bold shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">Compare Now</button>
              </div>
              <div className="relative w-28 h-28 flex-shrink-0 rounded-2xl overflow-hidden shadow-sm group-hover:-translate-y-1 transition-transform">
                <Image src={images.property} alt="Property" fill className="object-cover" referrerPolicy="no-referrer" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-purple-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300">
            <div className="flex items-start justify-between mb-8 gap-4">
              <div className="flex-1">
                <h3 className="font-bold text-xl text-brand-marine mb-2">Retail Insurance</h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">Custom plans for small businesses and retail outlets.</p>
                <button className="bg-white border border-slate-200 text-primary px-4 py-2 rounded-full text-xs font-bold shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">Compare Now</button>
              </div>
              <div className="w-28 h-28 flex-shrink-0 bg-white/50 rounded-2xl flex items-center justify-center shadow-sm group-hover:rotate-6 transition-transform">
                <Store className="w-10 h-10 text-primary" />
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-fuchsia-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300">
            <div className="flex items-start justify-between mb-8 gap-4">
              <div className="flex-1">
                <h3 className="font-bold text-xl text-brand-marine mb-2">Engineering</h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">Technical risk management for mega infra projects.</p>
                <button className="bg-white border border-slate-200 text-primary px-4 py-2 rounded-full text-xs font-bold shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">Compare Now</button>
              </div>
              <div className="relative w-28 h-28 flex-shrink-0 rounded-2xl overflow-hidden shadow-sm group-hover:-translate-y-1 transition-transform">
                <Image src={images.engineering} alt="Engineering" fill className="object-cover" referrerPolicy="no-referrer" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-emerald-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300" id="corporate">
            <div className="flex items-start justify-between mb-8 gap-4">
              <div className="flex-1">
                <h3 className="font-bold text-xl text-brand-marine mb-2">Marine Insurance</h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">Secure your transit and logistics globally.</p>
                <button className="bg-white border border-slate-200 text-primary px-4 py-2 rounded-full text-xs font-bold shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">Compare Now</button>
              </div>
              <div className="relative w-28 h-28 flex-shrink-0 rounded-2xl overflow-hidden shadow-sm group-hover:-translate-y-1 transition-transform">
                <Image src={images.marine} alt="Marine" fill className="object-cover" referrerPolicy="no-referrer" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-rose-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300" id="life">
            <div className="flex items-start justify-between mb-8 gap-4">
              <div className="flex-1">
                <h3 className="font-bold text-xl text-brand-marine mb-2">Life Insurance</h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">Protect your family&apos;s financial future today.</p>
                <button className="bg-white border border-slate-200 text-primary px-4 py-2 rounded-full text-xs font-bold shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">Compare Now</button>
              </div>
              <div className="w-28 h-28 flex-shrink-0 bg-white/50 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                <Users className="w-10 h-10 text-indigo-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
