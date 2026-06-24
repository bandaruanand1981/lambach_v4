'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const defaultFaqs = [
  {
    q: "How does Lambach compare insurance offers?",
    a: "Lambach uses proprietary risk assessment models to evaluate offers from multiple leading insurers. We compare pricing, coverage breadth, and settlement speed."
  },
  {
    q: "How long does the assessment take?",
    a: "Typically, a primary risk assessment is completed within 24-48 hours. More complex industrial engineering risks might take up to 5 business days."
  },
  {
    q: "Can I manage multiple policies through Lambach?",
    a: "Yes, we offer a centralized dashboard for our corporate clients to manage and track all their policies in one single portal."
  }
];

interface FAQProps {
  items?: { q: string, a: string }[];
  title?: string;
  description?: string;
}

export default function FAQ({ items = defaultFaqs, title = "Common Questions We Get", description = "Find quick answers about insurance brokerage, coverage limits, and how Lambach ensures you get the right protection." }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-gap bg-white border-t border-slate-100">
      <div className="layout-container">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="w-full lg:w-5/12">
            <h2 className="font-heading text-4xl font-bold text-brand-marine mb-6">{title}</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              {description}
            </p>
            
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <h4 className="font-bold text-brand-marine mb-3">Still have questions?</h4>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                Our dedicated risk assessment team is ready to help you navigate through your requirements.
              </p>
              <a href="/who-we-are#contact-us" className="inline-block text-center w-full bg-white text-brand-marine border border-slate-200 shadow-sm font-semibold py-3 rounded-xl hover:bg-slate-100 transition-colors">
                Contact Us Today
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-7/12 space-y-4">
            {items.map((faq, idx) => (
               <div 
                  key={idx} 
                  className={`border rounded-2xl bg-white overflow-hidden transition-colors ${openIndex === idx ? 'border-primary/30 shadow-sm' : 'border-slate-200 hover:border-slate-300'}`}
               >
                  <button 
                     className="w-full flex justify-between items-center p-6 text-left"
                     onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  >
                     <span className="font-semibold text-lg text-brand-marine">{faq.q}</span>
                     {openIndex === idx ? (
                        <Minus className="w-5 h-5 text-primary flex-shrink-0" />
                     ) : (
                        <Plus className="w-5 h-5 text-slate-400 flex-shrink-0" />
                     )}
                  </button>
                  {openIndex === idx && (
                     <div className="px-6 pb-6 text-slate-600 border-t border-slate-100 pt-4 leading-relaxed">
                        {faq.a}
                     </div>
                  )}
               </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
