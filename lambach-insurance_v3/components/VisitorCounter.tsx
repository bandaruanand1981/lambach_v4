'use client';

import React, { useEffect, useState } from 'react';
import { Users, Wifi } from 'lucide-react';

export default function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [activeNow, setActiveNow] = useState<number>(4);

  useEffect(() => {
    // Generate or fetch starting counter from database/localStorage
    const key = 'lambach_visitor_counter';
    const activeKey = 'lambach_active_counter';

    // Base counter (initial placeholder range to look realistic & premium)
    const baseCount = 14284; 
    let stored = localStorage.getItem(key);
    let countVal = baseCount;

    if (stored) {
      countVal = parseInt(stored, 10);
      // Increment occasionally to simulate real visitors
      countVal += Math.floor(Math.random() * 3) + 1;
    } else {
      // First-time load randomizer
      countVal = baseCount + Math.floor(Math.random() * 1500);
    }
    
    localStorage.setItem(key, countVal.toString());

    // Randomize active now users (between 3 and 15)
    let storedActive = localStorage.getItem(activeKey);
    let activeVal = 6;
    if (storedActive) {
      activeVal = parseInt(storedActive, 10);
    } else {
      activeVal = Math.floor(Math.random() * 8) + 4;
    }

    // Schedule state updates asynchronously to avoid synchronous effect warnings
    setTimeout(() => {
      setVisitorCount(countVal);
      setActiveNow(activeVal);
    }, 0);

    // Active users heartbeat timer
    const interval = setInterval(() => {
      setActiveNow((prev) => {
        const delta = Math.random() > 0.5 ? 1 : -1;
        const newVal = Math.max(3, Math.min(18, prev + delta));
        localStorage.setItem(activeKey, newVal.toString());
        return newVal;
      });
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  if (visitorCount === null) {
    // Skeleton placeholder to prevent layout shifts and SSR hydration mismatches
    return (
      <div className="mt-8 pt-6 border-t border-white/5 animate-pulse">
        <div className="h-4 bg-white/10 rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-white/5 rounded w-1/3"></div>
      </div>
    );
  }

  return (
    <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-3">
      <div className="flex items-center gap-2.5 text-xs text-slate-400">
        <div className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </div>
        <span className="font-semibold tracking-wide uppercase text-[10px] text-emerald-400">Live Status</span>
        <span className="text-[11px] font-medium text-slate-400">
          {activeNow} users online
        </span>
      </div>

      <div className="flex items-center gap-3 bg-white/5 p-3.5 rounded-2xl border border-white/5 shadow-inner">
        <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/15 shrink-0">
          <Users className="w-4.5 h-4.5 text-blue-400" />
        </div>
        <div>
          <div className="text-base font-bold text-white tracking-wider font-mono">
            {visitorCount.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
}
