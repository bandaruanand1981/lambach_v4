'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Link
        href="https://wa.me/914066171199"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 group"
        aria-label="Chat on WhatsApp with Lambach"
      >
        <span className="bg-white text-slate-800 text-xs font-bold px-3 py-1.5 rounded-xl shadow-md border border-slate-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Chat on WhatsApp
        </span>
        <motion.div
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 bg-[#25D366] hover:bg-[#20b858] text-white rounded-full flex items-center justify-center shadow-xl relative"
        >
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <MessageSquare className="w-6 h-6 fill-white text-white" />
        </motion.div>
      </Link>
    </div>
  );
}
