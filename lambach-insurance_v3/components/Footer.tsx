import Image from 'next/image';
import Link from 'next/link';
import { images } from '@/lib/images';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import VisitorCounter from './VisitorCounter';

export default function Footer() {
  return (
    <footer className="bg-brand-marine text-white border-t border-white/10">
      <div className="layout-container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="flex flex-col gap-6 lg:pr-8">
            <div className="relative h-10 w-fit filter invert brightness-0">
               <Image src={images.logo} alt="Lambach Logo" width={128} height={40} className="object-contain" style={{ width: 'auto', height: 'auto' }} referrerPolicy="no-referrer" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Providing robust security and financial protection for businesses and individuals since 2024. Optimizing risk management across India.
            </p>
            <div className="flex gap-4 mt-2">
               <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                 <Linkedin className="w-4 h-4" />
               </Link>
               <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                 <Twitter className="w-4 h-4" />
               </Link>
               <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                 <Facebook className="w-4 h-4" />
               </Link>
               <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                 <Instagram className="w-4 h-4" />
               </Link>
               <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                 <Youtube className="w-4 h-4" />
               </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-medium">
              <li><Link href="#" className="hover:text-primary transition-colors">Corporate Insurance</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Retail Insurance</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Life Insurance</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Risk Assessment</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">IRDA Information</h4>
            <div className="space-y-4 text-slate-400 text-sm font-medium">
              <p>CIN U66010MH2dO0PTC237879</p>
              <p>IRDAI Comp. Broker Registration Cert. No.123 | Valid up to 02/03/2027</p>
              <p>Category Direct (General &amp; Life) Insurance Broking</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact us</h4>
            <div className="space-y-4 text-slate-400 text-sm font-medium">
              <p>Head Office<br/>
              6th Floor, Topaz Building, Panjagutta, Hyderabad – 500 082</p>
              <p>Ph: + 91 40 6617 1199</p>
              <p>Email us: <a href="mailto:info@lambach.in" className="hover:text-primary transition-colors">info@lambach.in</a></p>
            </div>
            <VisitorCounter />
          </div>

        </div>
      </div>
      
      <div className="border-t border-white/5">
         <div className="layout-container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-xs">
               © {new Date().getFullYear()} Lambach Insurance Brokerage. All rights reserved. Registered with IRDAI.
            </p>
            <div className="flex gap-6 text-xs font-semibold text-slate-500">
               <Link href="#" className="hover:text-white transition-colors">EN</Link>
               <Link href="#" className="hover:text-white transition-colors">HI</Link>
            </div>
         </div>
      </div>
    </footer>
  );
}
