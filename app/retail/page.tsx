import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTAContact from "@/components/CTAContact";
import {
  CarFront,
  Stethoscope,
  HeartPulse,
  ActivitySquare,
  Home,
  Plane,
  ShieldAlert,
  Icon,
  Shield
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Retail & Personal Insurance | Lambach Insurance Brokers",
  description:
    "Protect your family and assets with Lambach's retail insurance solutions: Motor, Health, Home, Travel, and Critical Illness cover in India.",
  keywords: [
    "Retail Insurance",
    "Motor Insurance India",
    "Health Insurance",
    "Home Insurance",
    "Travel Insurance",
    "Personal Insurance",
  ],
};

export default function RetailPage() {
  const sections = [
    {
      name: "Motor",
      desc: "Comprehensive cover for private cars, two-wheelers, and commercial vehicles. Protects against third-party liability and Own Damage.",
      icon: CarFront,
      color: "bg-blue-50",
      border: "hover:border-blue-100",
      iconColor: "text-blue-500",
      href: "/retail/motor",
    },
    {
      name: "Health",
      desc: "Family floater plans ensuring the best medical care without financial stress. Access to top-tier hospital networks.",
      icon: Stethoscope,
      color: "bg-emerald-50",
      border: "hover:border-emerald-100",
      iconColor: "text-emerald-500",
      href: "/retail/health",
    },
    {
      name: "Individual Mediclaim",
      desc: "Secure your personal health against soaring medical costs with customized, comprehensive hospitalization cover.",
      icon: HeartPulse,
      color: "bg-rose-50",
      border: "hover:border-rose-100",
      iconColor: "text-rose-500",
      href: "/retail/individual-mediclaim",
    },
    {
      name: "Personal Accident",
      desc: "Financial support and income replacement in the event of accidental death, permanent total disability, or temporary disability.",
      icon: ActivitySquare,
      color: "bg-fuchsia-50",
      border: "hover:border-fuchsia-100",
      iconColor: "text-fuchsia-500",
      href: "/retail/personal-accident",
    },
    {
      name: "Home",
      desc: "Protect your dwelling and valuable contents against natural perils, fire, burglary, and theft for complete peace of mind.",
      icon: Home,
      color: "bg-orange-50",
      border: "hover:border-orange-100",
      iconColor: "text-orange-500",
      href: "/retail/home",
    },
    {
      name: "Travel",
      desc: "Medical and non-medical cover including trip cancellation, flight delays, medical emergencies abroad, and lost baggage.",
      icon: Plane,
      color: "bg-indigo-50",
      border: "hover:border-indigo-100",
      iconColor: "text-indigo-500",
      href: "/retail/travel",
    },
    {
      name: "Critical Illness",
      desc: "Lump-sum financial payout upon diagnosis of severe lifestyle diseases, ensuring you focus entirely on your recovery.",
      icon: ShieldAlert,
      color: "bg-purple-50",
      border: "hover:border-purple-100",
      iconColor: "text-purple-500",
      href: "/retail/critical-illness",
    },
  ];

  return (
    <>
      <PageHero
        title="Retail Insurance"
        description="Comprehensive personal insurance portfolio designed to protect what matters most to individuals and families."
        imageSrc="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200"
        imageAlt="Individual personal retail insurance cover"
        showIndustryActions={true}
        highlightIcon={<Shield className="w-5 h-5 text-primary" />}
        highlight1Text="Tailored Coverage"
      />
      <section className="py-24 bg-white">
        <div className="layout-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((sec, i) => {
              const Icon = sec.icon;
              return (
                <div
                  key={i}
                  className={`${sec.color} p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent ${sec.border}`}
                >
                  <div className="flex items-start justify-between mb-8 gap-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-brand-marine mb-2">
                        {sec.name}
                      </h3>
                      <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                        {sec.desc}
                      </p>
                    </div>
                    <div className="w-20 h-20 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:-translate-y-1 transition-transform">
                      <Icon className={`w-8 h-8 ${sec.iconColor}`} />
                    </div>
                  </div>
                  <Link
                    href={sec.href}
                    className="text-primary font-semibold text-sm hover:underline mt-auto inline-flex items-center gap-1"
                  >
                    Compare Plans &rarr;
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <CTAContact />
    </>
  );
}
