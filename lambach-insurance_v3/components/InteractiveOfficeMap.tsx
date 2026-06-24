'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Navigation, Copy, Check, ExternalLink } from 'lucide-react';

interface Office {
  id: 'mumbai' | 'hyderabad';
  name: string;
  type: string;
  address: string;
  phone: string;
  email: string;
  coordinates: { x: string; y: string }; // Position percentages on the custom visual map
  embedUrl: string;
  directionsUrl: string;
}

const offices: Office[] = [
  {
    id: 'hyderabad',
    name: 'Head Office',
    type: 'Corporate Headquarters',
    address: '6th Floor, Topaz Building, Panjagutta, Hyderabad, Telangana – 500082',
    phone: '+91 40 6617 1199',
    email: 'info@lambach.in',
    coordinates: { x: '52%', y: '68%' }, // Central-south position on the map
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.904423019183!2d78.452391075677!3d17.4284562010899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90b411cc0a5d%3A0xc3bba4d293231ca3!2sTopaz%20Building%2C%20Amrutha%20Hills%2C%20Punjagutta%2C%20Hyderabad%2C%20Telangana%20500082!5e0!3m2!1sen!2sin!4v1714155160840!5m2!1sen!2sin',
    directionsUrl: 'https://maps.app.goo.gl/uX3D9pQzS9Pveb2k8'
  },
  {
    id: 'mumbai',
    name: 'Registered Office',
    type: 'Registered Corporate Office',
    address: 'A-701, Trade World, Kamla Mills Compound, Senapati Bapat Marg, Lower Parel (W), Mumbai, Maharashtra – 400013',
    phone: '+91 22 6617 1199', // Placeholder or standard contact
    email: 'info@lambach.in',
    coordinates: { x: '35%', y: '62%' }, // West-central coast position on the map
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.3392305886475!2d72.8252445!3d18.9958045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cef717904037%3A0xc6ef52c5950d6b6!2sKamla%20Mills%20Compound!5e0!3m2!1sen!2sin!4v1714155160840!5m2!1sen!2sin',
    directionsUrl: 'https://maps.app.goo.gl/96F9aJmS7K2Z5pC97'
  }
];

export default function InteractiveOfficeMap() {
  const [selectedOffice, setSelectedOffice] = useState<'mumbai' | 'hyderabad'>('hyderabad');
  const [hoveredOffice, setHoveredOffice] = useState<'mumbai' | 'hyderabad' | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyAddress = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const activeOffice = offices.find(o => o.id === selectedOffice) || offices[0];

  return (
    <div className="w-full space-y-12" id="interactive-office-map-container">
      {/* Visual Header & Toggle Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left column: List of Offices with interactive cards */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-brand-marine tracking-tight mb-2">Our Physical Presence</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Click on an office location below or hover/click markers on the interactive map visualization to explore our physical premises.
            </p>
          </div>

          <div className="space-y-4">
            {offices.map((office) => {
              const isSelected = selectedOffice === office.id;
              const isHovered = hoveredOffice === office.id;
              
              return (
                <div
                  key={office.id}
                  onClick={() => setSelectedOffice(office.id)}
                  onMouseEnter={() => setHoveredOffice(office.id)}
                  onMouseLeave={() => setHoveredOffice(null)}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden ${
                    isSelected
                      ? 'border-primary bg-primary/5 shadow-md'
                      : 'border-slate-100 bg-white hover:border-slate-200 hover:shadow-sm'
                  }`}
                  id={`office-card-${office.id}`}
                >
                  {/* Glowing vertical pill */}
                  <div className={`absolute top-0 left-0 w-1 h-full transition-colors ${
                    isSelected ? 'bg-primary' : 'bg-transparent'
                  }`} />

                  <div className="flex items-start justify-between">
                    <div>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        isSelected 
                          ? 'bg-primary/20 text-primary' 
                          : 'bg-slate-100 text-slate-500'
                      }`}>
                        {office.type}
                      </span>
                      <h4 className="text-lg font-bold text-brand-marine mt-2 mb-1">{office.name}</h4>
                    </div>
                    <MapPin className={`w-5 h-5 ${isSelected ? 'text-primary' : 'text-slate-400'}`} />
                  </div>

                  <p className="text-slate-600 text-sm mt-3 leading-relaxed mb-4">{office.address}</p>

                  <div className="flex flex-wrap items-center gap-3 mt-4 text-xs">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopyAddress(office.id, office.address);
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-800 transition-colors"
                      title="Copy Address"
                    >
                      {copiedId === office.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700 font-medium">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>

                    <a
                      href={office.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary hover:text-brand-navy font-bold transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Directions</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Contact Quick info */}
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>+91 40 6617 1199</span>
            </div>
            <div className="w-px h-4 bg-slate-200" />
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <a href="mailto:info@lambach.in" className="hover:underline">info@lambach.in</a>
            </div>
          </div>
        </div>

        {/* Right column: Beautiful stylized custom vector map of India with interactive markers & popups */}
        <div className="lg:col-span-7 bg-slate-900 rounded-[2.5rem] border border-slate-800 p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl min-h-[450px]">
          
          {/* Subtle Grid and Glow Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Map Header */}
          <div className="relative z-10 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold text-primary tracking-widest uppercase bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
                Interactive Visualizer
              </span>
              <h4 className="text-white font-bold text-lg mt-2">Geographic Distribution</h4>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-800/60 border border-slate-700/50 rounded-lg px-2.5 py-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>2 Offices Active</span>
            </div>
          </div>

          {/* Graphical Map Representation Area */}
          <div className="relative flex-1 flex items-center justify-center min-h-[300px] w-full mt-6">
            
            {/* Highly Polished Abstract Vector SVG map outline of India */}
            <svg
              viewBox="0 0 400 480"
              className="w-full max-w-[360px] h-full opacity-35 filter drop-shadow-[0_4px_12px_rgba(2,132,199,0.15)]"
              fill="none"
              stroke="currentColor"
              id="vector-map-svg"
            >
              {/* Minimal geometric approximation path of India for professional modern corporate vibe */}
              <path
                d="M 130 50 L 150 20 L 180 30 L 200 15 L 210 25 L 195 40 L 210 55 L 220 50 L 225 70 L 250 85 L 270 90 L 265 110 L 285 125 L 310 130 L 320 150 L 330 160 L 310 170 L 280 165 L 260 175 L 270 190 L 285 195 L 310 190 L 320 205 L 305 215 L 280 215 L 275 230 L 260 220 L 250 235 L 240 250 L 235 270 L 245 285 L 225 310 L 215 340 L 205 380 L 195 420 L 185 450 L 180 460 L 175 450 L 165 420 L 160 395 L 145 360 L 135 320 L 130 280 L 115 260 L 100 245 L 85 240 L 65 240 L 50 225 L 60 215 L 75 220 L 95 210 L 110 185 L 105 160 L 110 145 L 125 145 L 130 120 L 110 100 L 120 85 L 130 50 Z"
                className="stroke-slate-700/80 stroke-2 fill-slate-800/20"
              />
              {/* Decorative grid reference circles */}
              <circle cx="130" cy="50" r="1.5" className="fill-primary/40" />
              <circle cx="180" cy="450" r="1.5" className="fill-primary/40" />
              <circle cx="310" cy="130" r="1.5" className="fill-primary/40" />
              <circle cx="65" cy="240" r="1.5" className="fill-primary/40" />
            </svg>

            {/* Interactive Office Markers */}
            {offices.map((office) => {
              const isSelected = selectedOffice === office.id;
              const isHovered = hoveredOffice === office.id;

              return (
                <div
                  key={office.id}
                  style={{ top: office.coordinates.y, left: office.coordinates.x }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
                  onClick={() => setSelectedOffice(office.id)}
                  onMouseEnter={() => setHoveredOffice(office.id)}
                  onMouseLeave={() => setHoveredOffice(null)}
                >
                  {/* Pulse Effect Rings */}
                  <div className="relative flex items-center justify-center w-8 h-8">
                    <span className={`absolute inline-flex rounded-full opacity-60 animate-ping ${
                      isSelected ? 'h-6 w-6 bg-primary' : 'h-4 w-4 bg-orange-400'
                    }`} />
                    <span className={`absolute inline-flex rounded-full opacity-40 animate-ping delay-300 ${
                      isSelected ? 'h-10 w-10 bg-primary/60' : 'h-6 w-6 bg-orange-400/50'
                    }`} />
                    
                    {/* Core glowing map pin marker */}
                    <motion.div
                      animate={{
                        scale: isSelected || isHovered ? 1.3 : 1,
                        y: isSelected || isHovered ? -3 : 0
                      }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                      className={`w-5 h-5 rounded-full flex items-center justify-center shadow-lg border border-white/20 relative z-30 transition-colors duration-300 ${
                        isSelected 
                          ? 'bg-primary text-white ring-4 ring-primary/35' 
                          : 'bg-orange-500 text-white hover:bg-orange-600'
                      }`}
                    >
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </motion.div>
                  </div>

                  {/* HOVER ADDRESS POPUP/TOOLTIP */}
                  <AnimatePresence>
                    {(isHovered || (isSelected && !hoveredOffice)) && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-slate-950/95 backdrop-blur-md border border-slate-700 p-4 rounded-xl shadow-xl w-60 z-50 pointer-events-none"
                      >
                        {/* Little triangle tail */}
                        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-950 border-r border-b border-slate-700 rotate-45" />

                        <div className="space-y-1">
                          <p className="text-[10px] text-primary font-bold uppercase tracking-widest">{office.type}</p>
                          <h5 className="text-white font-bold text-sm flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-primary" />
                            {office.name}
                          </h5>
                          <p className="text-slate-300 text-xs leading-relaxed mt-1">{office.address}</p>
                          <div className="pt-2 mt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
                            <span>Phone: {office.phone}</span>
                            <span className="text-primary font-semibold">Active</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Bottom legend instruction */}
          <div className="relative z-10 bg-slate-800/40 border border-slate-700/40 p-4 rounded-2xl flex items-center gap-3.5 mt-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
              <Navigation className="w-5 h-5 animate-pulse" />
            </div>
            <div className="text-xs">
              <p className="text-white font-bold">Select any location to reveal embedded GPS Map</p>
              <p className="text-slate-400 mt-0.5">Currently inspecting: <span className="text-primary font-semibold">{activeOffice.name} ({activeOffice.id === 'hyderabad' ? 'Telangana' : 'Maharashtra'})</span></p>
            </div>
          </div>
        </div>

      </div>

      {/* Embedded High-Fidelity Google Maps Frame */}
      <div className="w-full relative group">
        {/* Glow accent */}
        <div className="absolute -inset-1.5 bg-gradient-to-r from-primary to-orange-500 rounded-[2.2rem] opacity-5 blur group-hover:opacity-10 transition-opacity duration-300" />
        
        <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-100/50">
          <AnimatePresence mode="wait">
            <motion.iframe
              key={activeOffice.id}
              initial={{ opacity: 0, filter: 'blur(5px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, filter: 'blur(5px)' }}
              transition={{ duration: 0.4 }}
              src={activeOffice.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Lambach Office Map - ${activeOffice.name}`}
              className="w-full h-full"
              id={`office-map-iframe-${activeOffice.id}`}
            />
          </AnimatePresence>

          {/* Quick float action link to open in Google Maps natively */}
          <div className="absolute top-4 right-4 z-10">
            <a
              href={activeOffice.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/95 hover:bg-white backdrop-blur-md text-brand-marine font-bold text-xs py-2.5 px-4 rounded-xl shadow-lg border border-slate-200/50 transition-all hover:scale-105 active:scale-95"
            >
              <span>View on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
