'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Users, Target, Handshake } from 'lucide-react';

export default function WhyChooseAgriGrid() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 300, damping: 24 } }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
    >
      <motion.div variants={item} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-start text-left hover:shadow-md transition-shadow">
        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
          <Users className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-brand-marine mb-3">Specialized Expertise</h3>
        <p className="text-slate-600 leading-relaxed text-sm">
          Our team comprises professionals with specialized knowledge in agriculture and livestock insurance. We understand the unique challenges faced by farmers and agribusinesses, allowing us to offer tailored solutions.
        </p>
      </motion.div>
      
      <motion.div variants={item} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-start text-left hover:shadow-md transition-shadow">
        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
          <Target className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-brand-marine mb-3">Risk Mitigation Strategies</h3>
        <p className="text-slate-600 leading-relaxed text-sm">
          We go beyond insurance policies to provide risk management strategies that help you proactively mitigate potential threats to your agricultural operations.
        </p>
      </motion.div>

      <motion.div variants={item} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-start text-left hover:shadow-md transition-shadow">
        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
          <Handshake className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-brand-marine mb-3">Claims Assistance</h3>
        <p className="text-slate-600 leading-relaxed text-sm">
          In the event of a claim, our dedicated claims support team is here to guide you through the process swiftly and efficiently. We aim to minimize disruptions to your farming activities and livelihood.
        </p>
      </motion.div>
    </motion.div>
  );
}
