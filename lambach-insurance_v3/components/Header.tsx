'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { images } from '@/lib/images';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type NavItem = {
  name: string;
  href: string;
  children?: NavItem[];
};

const NAVIGATION: NavItem[] = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Industries',
    href: '/industries',
    children: [
      { name: 'Construction', href: '/industries/construction' },
      { name: 'Power & Engineering', href: '/industries/power-engineering' },
      { name: 'Chemical & Pharmaceutical', href: '/industries/chemical' },
      { name: 'Information Technology', href: '/industries/it' },
      { name: 'Aviation', href: '/industries/aviation' },
      { name: 'Agri Business', href: '/industries/agri-business' },
      { name: 'Entertainment', href: '/industries/entertainment' }
    ]
  },
  {
    name: 'Corporate',
    href: '/corporate',
    children: [
      { name: 'Engineering Insurance', href: '/corporate/engineering' },
      { name: 'Property Insurance', href: '/corporate/property' },
      { name: 'Marine Insurance', href: '/corporate/marine' },
      { name: 'Marine Hull Insurance', href: '/corporate/marine-hull' },
      { name: 'Liability Insurance', href: '/corporate/liability' },
      { name: 'Group Mediclaim Insurance', href: '/corporate/group-mediclaim' },
      { name: 'Group Personal Accident Insurance', href: '/corporate/group-personal-accident' },
      { name: 'Credit Insurance', href: '/corporate/credit' },
      { name: 'Affinity Insurance', href: '/corporate/affinity' },
      { name: 'Warranty Insurance', href: '/corporate/warranty' },
      { name: 'Stock Turnover Policy (STOP)', href: '/corporate/stop' }
    ]
  },
  {
    name: 'Retail',
    href: '/retail',
    children: [
      { name: 'Motor Insurance', href: '/retail/motor' },
      { name: 'Health Insurance', href: '/retail/health' },
      { name: 'Individual Mediclaim Insurance', href: '/retail/individual-mediclaim' },
      { name: 'Personal Accident Insurance', href: '/retail/personal-accident' },
      { name: 'Home Insurance', href: '/retail/home' },
      { name: 'Travel Insurance', href: '/retail/travel' },
      { name: 'Critical Illness Insurance', href: '/retail/critical-illness' }
    ]
  },
  {
    name: 'Life',
    href: '/life',
    children: [
      { name: 'Term Insurance', href: '/life/term' },
      { name: 'Group Term Insurance', href: '/life/group-term' },
      { name: 'Endowment Plans', href: '/life/endowment' },
      { name: 'Pension Plan', href: '/life/pension' },
      { name: 'Keyman Insurance', href: '/life/keyman' }
    ]
  },
  {
    name: 'Risk Assessment',
    href: '/risk-assessment',
  },
  {
    name: 'Who We Are',
    href: '/who-we-are',
    children: [
      { name: 'Our Story', href: '/who-we-are#our-story' },
      { name: 'Our Team', href: '/who-we-are#our-team' },
      { name: 'Contact Us', href: '/who-we-are#contact-us' },
      { name: 'Join Our Team', href: '/who-we-are#join-our-team' }
    ]
  }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const pathname = usePathname();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on path change
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    timeoutId = setTimeout(() => {
      setActiveDropdown(null);
      setMobileMenuOpen(false);
    }, 0);
    return () => clearTimeout(timeoutId);
  }, [pathname]);

  const toggleMobileSection = (name: string) => {
    setMobileExpandedSection(prev => prev === name ? null : name);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-md border-b border-white/20 py-2.5' : 'bg-transparent py-6'}`}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="layout-container flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="mr-8">
            <div className="flex items-center gap-2">
               <div className="flex items-center">
                  <Image src={images.logo} alt="Logo" width={144} height={32} className="object-contain w-auto h-8" style={{ width: 'auto', height: 'auto' }} referrerPolicy="no-referrer" priority />
               </div>
            </div>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-1">
            {NAVIGATION.map((item) => {
              const isActive = item.href === '/' ? pathname === '/' : (pathname?.startsWith(item.href) ?? false);
              const hasChildren = item.children && item.children.length > 0;

              return (
                <div 
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => hasChildren && setActiveDropdown(item.name)}
                >
                  <Link 
                    href={item.href} 
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-semibold text-sm transition-colors ${
                      isActive ? 'text-primary bg-primary/5' : 'text-slate-600 hover:text-primary hover:bg-slate-50'
                    }`}
                  >
                    {item.name}
                    {hasChildren && (
                       <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180 text-primary' : 'text-slate-400'}`} />
                    )}
                  </Link>

                  {/* Desktop Mega Menu Dropdown */}
                  {hasChildren && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 pt-4 w-72">
                      <div 
                        className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden"
                         onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="p-2 flex flex-col">
                          {item.children?.map((child) => (
                             <div key={child.name} className="flex flex-col">
                                <Link 
                                  href={child.href}
                                  className="text-sm font-medium text-slate-700 hover:text-primary hover:bg-slate-50 px-4 py-2.5 rounded-lg transition-colors flex items-center justify-between group"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {child.name}
                                  {!child.children && (
                                     <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                  )}
                                </Link>
                                
                                {/* Render 3rd level items if any */}
                                {child.children && (
                                   <div className="pl-6 pr-2 py-1 flex flex-col border-l-2 border-slate-100 ml-4 my-1">
                                      {child.children.map((subChild) => (
                                         <Link 
                                            key={subChild.name}
                                            href={subChild.href}
                                            className="text-xs font-medium text-slate-500 hover:text-primary py-2 px-3 rounded-md hover:bg-slate-50 transition-colors flex items-center justify-between group"
                                            onClick={() => setActiveDropdown(null)}
                                         >
                                            {subChild.name}
                                         </Link>
                                      ))}
                                   </div>
                                )}
                             </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
        
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/who-we-are#contact-us" className="bg-primary hover:bg-primary-variant text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
            Submit Query
          </Link>
        </div>
        
        <button className="lg:hidden text-slate-800 p-2 -mr-2" onClick={() => setMobileMenuOpen(true)}>
           <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
         {mobileMenuOpen && (
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm lg:hidden"
               onClick={() => setMobileMenuOpen(false)}
            />
         )}
      </AnimatePresence>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
         {mobileMenuOpen && (
            <motion.div 
               initial={{ x: '100%', opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               exit={{ x: '100%', opacity: 0 }}
               transition={{ type: "spring", damping: 25, stiffness: 200 }}
               className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-2xl lg:hidden flex flex-col overflow-y-auto"
            >
               <div className="sticky top-0 bg-white/90 backdrop-blur-md flex items-center justify-between p-6 border-b border-slate-100 z-10">
                  <div className="flex items-center">
                    <Image src={images.logo} alt="Logo" width={128} height={32} className="object-contain w-auto h-8" style={{ width: 'auto', height: 'auto' }} referrerPolicy="no-referrer" priority />
                  </div>
                  <button onClick={() => setMobileMenuOpen(false)} className="text-slate-400 hover:text-slate-800 bg-slate-100/50 hover:bg-slate-100 p-2 rounded-full transition-colors">
                     <X className="w-5 h-5" />
                  </button>
               </div>
               
               <div className="p-4 flex-1">
                  <div className="flex flex-col gap-1">
                     {NAVIGATION.map((item) => {
                        const isActive = item.href === '/' ? pathname === '/' : (pathname?.startsWith(item.href) ?? false);
                        const hasChildren = item.children && item.children.length > 0;
                        const isExpanded = mobileExpandedSection === item.name;

                        return (
                           <div key={item.name} className="flex flex-col">
                              {hasChildren ? (
                                 <button 
                                    className={`flex items-center justify-between text-lg font-bold py-3 px-4 rounded-xl transition-colors ${isActive && !isExpanded ? 'bg-primary/5 text-primary' : 'text-slate-800 hover:bg-slate-50'}`}
                                    onClick={() => toggleMobileSection(item.name)}
                                 >
                                    {item.name}
                                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-primary' : 'text-slate-400'}`} />
                                 </button>
                              ) : (
                                 <Link 
                                    href={item.href}
                                    className={`text-lg font-bold py-3 px-4 rounded-xl transition-colors ${isActive ? 'bg-primary/5 text-primary' : 'text-slate-800 hover:bg-slate-50'}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                 >
                                    {item.name}
                                 </Link>
                              )}

                              {/* Mobile Submenu Expanded Area */}
                              {hasChildren && isExpanded && (
                                 <motion.div 
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden flex flex-col gap-1 pl-4 pr-2 py-2 border-l-2 border-slate-100 ml-6 my-1"
                                 >
                                    <Link 
                                       href={item.href}
                                       className="text-primary font-bold py-2.5 px-4 rounded-lg bg-primary/5 text-sm mb-2"
                                       onClick={() => setMobileMenuOpen(false)}
                                    >
                                       Overview
                                    </Link>
                                    
                                    {item.children?.map((child) => (
                                       <div key={child.name} className="flex flex-col">
                                          <Link 
                                             href={child.href}
                                             className="text-slate-600 font-medium py-2.5 px-4 rounded-lg hover:bg-slate-50 text-sm"
                                             onClick={() => setMobileMenuOpen(false)}
                                          >
                                             {child.name}
                                          </Link>
                                          
                                          {child.children && (
                                             <div className="pl-4 pr-2 flex flex-col border-l border-slate-200 ml-4 my-1 pt-1 pb-2">
                                                {child.children.map((subChild) => (
                                                   <Link 
                                                      key={subChild.name}
                                                      href={subChild.href}
                                                      className="text-slate-500 font-medium py-2 px-3 rounded-md hover:bg-slate-50 text-xs my-0.5"
                                                      onClick={() => setMobileMenuOpen(false)}
                                                   >
                                                      - {subChild.name}
                                                   </Link>
                                                ))}
                                             </div>
                                          )}
                                       </div>
                                    ))}
                                 </motion.div>
                              )}
                           </div>
                        );
                     })}
                  </div>
               </div>

               <div className="p-6 border-t border-slate-100 bg-slate-50 flex flex-col gap-3 mt-auto sticky bottom-0">
                   <Link href="/who-we-are#contact-us" onClick={() => setMobileMenuOpen(false)} className="bg-primary hover:bg-primary-variant text-center block w-full text-white px-6 py-3.5 rounded-full font-bold shadow-md transition-all">
                      Submit Query
                    </Link>
               </div>
            </motion.div>
         )}
      </AnimatePresence>
    </header>
  );
}
