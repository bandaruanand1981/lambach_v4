import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTAContact from "@/components/CTAContact";
import { Heart, Users, PiggyBank, UserPlus, Briefcase, Shield } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Life Insurance | Term, Group & Pension | Lambach Insurance Brokers",
  description:
    "Secure your family and business with our life insurance policies: Term, Group Term, Endowment, Pension, and Keyman Insurance in India.",
  keywords: [
    "Life Insurance",
    "Term Insurance India",
    "Group Term Insurance",
    "Endowment Plans",
    "Pension Plan",
    "Keyman Insurance",
    "Financial Planning",
  ],
};

export default function LifePage() {
  const sections = [
    {
      name: "Term",
      desc: "High sum assured for a specific term at an affordable premium. The purest form of life insurance ensuring financial security for your dependents.",
      icon: Heart,
      color: "bg-rose-50",
      border: "hover:border-rose-100",
      iconColor: "text-rose-500",
      href: "/life/term",
    },
    {
      name: "Group Term",
      desc: "Cost-effective life cover provided by an employer for their employees. Enhances employee loyalty and serves as a powerful retention tool.",
      icon: Users,
      color: "bg-blue-50",
      border: "hover:border-blue-100",
      iconColor: "text-blue-500",
      href: "/life/group-term",
    },
    {
      name: "Endowment",
      desc: "A combination of insurance and savings for your future financial goals. Get a lump sum payout at maturity along with life cover.",
      icon: PiggyBank,
      color: "bg-emerald-50",
      border: "hover:border-emerald-100",
      iconColor: "text-emerald-500",
      href: "/life/endowment",
    },
    {
      name: "Pension",
      desc: "Secure an independent financial life post-retirement with regular income streams. Build your retirement corpus systematically over time.",
      icon: UserPlus,
      color: "bg-purple-50",
      border: "hover:border-purple-100",
      iconColor: "text-purple-500",
      href: "/life/pension",
    },
    {
      name: "Keyman",
      desc: "Protect your business against the financial impact of losing a key employee. Ensures business continuity and compensates for potential profit loss.",
      icon: Briefcase,
      color: "bg-orange-50",
      border: "hover:border-orange-100",
      iconColor: "text-orange-500",
      href: "/life/keyman",
    },
  ];

  return (
    <>
      <PageHero
        title="Life Insurance"
        description="Empowering long-term stability with policies protecting your family's financial future and business continuity."
        imageSrc="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200"
        imageAlt="Family holding hands representing life insurance"
        showIndustryActions={true}
        label="Overview"
        highlightIcon={<Shield className="w-5 h-5 text-primary" />}
        highlight1Text="Tailored Coverage"
      />
      <section className="section-gap bg-white">
        <div className="layout-container">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-primary px-3 py-1 rounded-full mb-4 text-xs font-bold uppercase tracking-widest">
              Life Insurance
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-marine mb-4">
              Protect what matters most
            </h2>
            <p className="text-slate-600">
              Explore our comprehensive life insurance policies designed to
              secure your family and business.
            </p>
          </div>
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
                    className="bg-white border border-slate-200 text-primary px-4 py-2 rounded-full text-xs font-bold shadow-sm group-hover:bg-primary group-hover:text-white transition-colors mt-auto self-start inline-flex flex-shrink-0 items-center gap-1"
                  >
                    Learn More &rarr;
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
