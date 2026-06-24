import React from 'react';
import Image from 'next/image';
import { ShieldCheck, ArrowRight, Building, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { shimmerBlurDataURL } from '@/lib/utils';

export default function PageHero({
  title,
  description,
  imageSrc = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  imageAlt,
  showIndustryActions = false,
  label,
  showContactCta = false,
  highlightIcon,
  highlight1Text = "Tailored Coverage",
  highlight2Text = "Complete Protection",
}: {
  title: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  showIndustryActions?: boolean;
  label?: string;
  showContactCta?: boolean;
  highlightIcon?: React.ReactNode;
  highlight1Text?: string;
  highlight2Text?: string;
}) {
  const titleWords = title.trim().split(' ');
  const lastWord = titleWords.length > 1 ? titleWords.pop() : '';
  const firstPart = titleWords.join(' ');

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#eff6ff] via-white to-[#ecfdf5]">
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[70%] bg-[#dbeafe] rounded-full mix-blend-multiply filter blur-[120px] opacity-70"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[60%] bg-[#d1fae5] rounded-full mix-blend-multiply filter blur-[120px] opacity-70"></div>
      <section className="relative flex flex-col items-center justify-center pt-36 pb-20 z-10">
        <div className="layout-container relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 bg-white/50 border border-primary/20 text-primary px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm shadow-sm">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-sm font-semibold tracking-wide uppercase">{label || (showIndustryActions ? 'Industry Solution' : 'Overview')}</span>
              </div>
              
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-brand-marine leading-tight tracking-tight">
                {firstPart} {lastWord && <span className="text-primary">{lastWord}</span>}
                {!lastWord && title}
              </h1>
              
              {description && (
                <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
                  {description}
                </p>
              )}

              {(showIndustryActions || showContactCta) && (
                <>
                  <div className="flex flex-wrap gap-4 mb-12">
                    <Link href="/who-we-are#contact-us" className="bg-primary hover:bg-primary-variant text-white px-8 py-3.5 rounded-full font-semibold flex items-center gap-2 shadow-sm hover:shadow-lg transition-all active:scale-95">
                      Get a Quote
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                  
                  {showIndustryActions && (
                    <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                      <div className="flex items-center gap-2">
                        {highlightIcon || <Building className="w-5 h-5 text-primary" />}
                        <span className="text-sm font-medium text-slate-600">{highlight1Text}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        <span className="text-sm font-medium text-slate-600">{highlight2Text}</span>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
            
            <div className="w-full lg:w-1/2 relative lg:h-[500px] flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl ring-1 ring-slate-900/5">
                <Image 
                  src={imageSrc} 
                  alt={imageAlt || title} 
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover" 
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
    </div>
  );
}
