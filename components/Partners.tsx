'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import React from 'react';

const partners = [
  { src: "http://lambach.in/wp-content/uploads/2020/08/visaka-client-logo.png", alt: "Visaka Industries" },
  { src: "http://lambach.in/wp-content/uploads/2020/08/verity-client-logo.png", alt: "Verity Knowledge Solutions" },
  { src: "http://lambach.in/wp-content/uploads/2020/08/premierenergies-client-logo.png", alt: "Premier Energies" },
  { src: "http://lambach.in/wp-content/uploads/2020/08/vasmirambuilders-client-logo.png", alt: "Vamsiram Builders" },
  { src: "http://lambach.in/wp-content/uploads/2020/08/nsl-client-logo.png", alt: "NSL" },
  { src: "http://lambach.in/wp-content/uploads/2020/08/manjeera-client-logo.png", alt: "Manjeera" },
  { src: "http://lambach.in/wp-content/uploads/2020/08/laser-client-logo.png", alt: "Laser Shaving" },
  { src: "http://lambach.in/wp-content/uploads/2020/08/ksk-client-logo.png", alt: "KSK Energy Ventures" },
  { src: "http://lambach.in/wp-content/uploads/2020/08/ivrcl-client-logo.png", alt: "IVRCL" },
  { src: "http://lambach.in/wp-content/uploads/2020/08/eclat-client-logo.png", alt: "Eclat Health Solutions" },
  { src: "http://lambach.in/wp-content/uploads/2020/08/celkon-mobiles-client-logo.png", alt: "Celkon Mobiles" },
  { src: "http://lambach.in/wp-content/uploads/2020/08/gammon-client-logo.png", alt: "Gammon India" }
];

export default function Partners() {
  // Duplicate array for seamless infinite scroll
  const clonedPartners = [...partners, ...partners];

  return (
    <section className="py-24 relative z-10 bg-white border-t border-slate-100">
      <div className="layout-container text-center mb-12">
        <h3 className="font-heading text-3xl font-bold text-brand-marine mb-4">
          Trusted Partners
        </h3>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          Trusted by leading insurers, corporates, and industry partners across India.
        </p>
      </div>
      
      <div className="w-full overflow-hidden relative">
        <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <motion.div
           className="flex items-center gap-6 px-3"
           animate={{
             x: ["0%", "-50%"]
           }}
           transition={{
             repeat: Infinity,
             ease: "linear",
             duration: 40,
           }}
           style={{ width: "fit-content" }}
        >
          {clonedPartners.map((partner, index) => (
             <div 
               key={index} 
               className="group relative flex flex-col items-center justify-center p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shrink-0
                          w-[40vw] md:w-[20vw] lg:w-[14vw] xl:w-[12vw] h-28"
             >
                <div className="relative w-full h-full flex items-center justify-center grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                  <Image 
                    src={partner.src} 
                    alt={partner.alt} 
                    fill 
                    className="object-contain p-2" 
                    referrerPolicy="no-referrer"
                    sizes="(max-width: 768px) 40vw, 15vw"
                  />
                </div>
                <span className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-semibold text-brand-marine whitespace-nowrap bg-white px-3 py-1 rounded-full shadow border border-slate-100 z-20 pointer-events-none">
                  {partner.alt}
                </span>
             </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
