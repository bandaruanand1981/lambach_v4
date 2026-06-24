import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTAContact from "@/components/CTAContact";
import {
  ShieldCheck,
  Briefcase,
  Activity,
  Scale,
  HeartPulse,
  Shield
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Critical Illness Insurance | Security & Coverage | Lambach Insurance Brokers",
  description:
    "Comprehensive Critical Illness Insurance solutions to protect from rising costs and unforeseen emergencies.",
};

export default function criticalillnessPage() {
  return (
    <>
      <PageHero
        title="Critical Illness Insurance"
        description="Critical Illness Insurance Protection Overview"
        imageSrc="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200"
        imageAlt="Critical Illness Insurance professional coverage"
        showContactCta
        label="Retail Solution"
        showIndustryActions={true}
        highlightIcon={<Shield className="w-5 h-5 text-primary" />}
        highlight1Text="Tailored Coverage"
      />

      <section className="py-24 bg-slate-50">
        <div className="layout-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-2">
              <h1 className="text-3xl md:text-4xl font-bold text-brand-marine mb-6">
                Critical Illness Insurance: Prioritizing Your Well-being
              </h1>
              <div className="prose max-w-none text-slate-600 space-y-6">
                <p className="text-lg leading-relaxed">
                  Critical Illness Insurance represents a specialized financial
                  safeguard designed exclusively for major medical diagnoses.
                  Treatable but severe lifestyle diseases like cancer or stroke
                  demand aggressive, expensive care and often cause significant
                  loss of income.
                </p>
                <p className="text-lg leading-relaxed">
                  This policy acts differently from standard mediclaim by
                  providing a tremendously vital massive lump-sum payout
                  unconditionally upon the first diagnosis. It unequivocally
                  secures your lifestyle and well-being during a prolonged
                  fight.
                </p>
              </div>
            </div>
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200"
                alt="Introduction to Critical Illness Insurance"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="layout-container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-primary px-3 py-1 rounded-full mb-4 text-xs font-bold uppercase tracking-widest">
              Coverage Details
            </div>
            <h2 className="font-heading text-4xl font-bold text-brand-marine mb-4">
              Key Features of Critical Illness Insurance
            </h2>
            <p className="text-slate-600">
              Essential components that form the foundation of a robust Critical
              Illness Insurance policy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-6">
                <div className="flex-1 flex flex-col items-start">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">
                    Lump Sum Payout On Diagnosis
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 sm:hidden">
                <ShieldCheck className="w-8 h-8 text-blue-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Rapidly provides an unbelievably substantial, wildly immediate
                  massive lump sum massive benefit cleanly upon the strictly
                  official medical diagnosis firmly detailing any officially
                  heavily covered disease.
                </p>
                <div className="mt-6">
                  <Link
                    href="/who-we-are#contact-us"
                    className="bg-white border border-slate-200 text-primary px-4 py-2 rounded-full text-xs font-bold shadow-sm group-hover:bg-primary group-hover:text-white transition-colors inline-block w-max"
                  >
                    Compare Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-emerald-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-6">
                <div className="flex-1 flex flex-col items-start">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">
                    Income Replacement
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 sm:hidden">
                <Briefcase className="w-8 h-8 text-emerald-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Genuinely offers remarkably comprehensive massive financial
                  security strongly precisely during intensely critical heavily
                  prolonged demanding recovery periods uniquely when earning
                  capacities completely vanish.
                </p>
                <div className="mt-6">
                  <Link
                    href="/who-we-are#contact-us"
                    className="bg-white border border-slate-200 text-primary px-4 py-2 rounded-full text-xs font-bold shadow-sm group-hover:bg-primary group-hover:text-white transition-colors inline-block w-max"
                  >
                    Compare Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-purple-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-6">
                <div className="flex-1 flex flex-col items-start">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">
                    Widespread Disease Coverage
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 sm:hidden">
                <Activity className="w-8 h-8 text-purple-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Deeply covers universally acknowledged sprawling massive
                  critical conditions strictly exactly like tremendous severe
                  heart attacks, life-threatening advanced strokes, aggressive
                  terrible cancer, and heavy deep kidney failures.
                </p>
                <div className="mt-6">
                  <Link
                    href="/who-we-are#contact-us"
                    className="bg-white border border-slate-200 text-primary px-4 py-2 rounded-full text-xs font-bold shadow-sm group-hover:bg-primary group-hover:text-white transition-colors inline-block w-max"
                  >
                    Compare Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-rose-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-6">
                <div className="flex-1 flex flex-col items-start">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">
                    Debt Unburdening
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 sm:hidden">
                <Scale className="w-8 h-8 text-rose-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Actively empowers wildly struggling policyholders completely
                  effectively utilizing the granted lump sum perfectly
                  immediately clearing off significant mounting accumulated
                  pressing heavy debts rapidly.
                </p>
                <div className="mt-6">
                  <Link
                    href="/who-we-are#contact-us"
                    className="bg-white border border-slate-200 text-primary px-4 py-2 rounded-full text-xs font-bold shadow-sm group-hover:bg-primary group-hover:text-white transition-colors inline-block w-max"
                  >
                    Compare Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-orange-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-2">
              <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-6">
                <div className="flex-1 flex flex-col items-start">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">
                    Peace of Mind for Family
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 sm:hidden">
                <HeartPulse className="w-8 h-8 text-orange-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Rigorously protects intensely profoundly emotionally heavily
                  burdened devoted family members actively greatly from facing
                  devastating massive major unprecedented spiraling financial
                  strain dynamically.
                </p>
                <div className="mt-6">
                  <Link
                    href="/who-we-are#contact-us"
                    className="bg-white border border-slate-200 text-primary px-4 py-2 rounded-full text-xs font-bold shadow-sm group-hover:bg-primary group-hover:text-white transition-colors inline-block w-max"
                  >
                    Compare Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="layout-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-xl ring-1 ring-slate-100 hidden lg:block">
              <Image
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000"
                alt="Why Choose Lambach Insurance"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-4">
                Why Lambach?
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-marine mb-10">
                Why Choose Lambach Insurance Brokers Pvt. Ltd.
              </h2>
              <div className="grid grid-cols-1 gap-10">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-marine mb-2">
                      Expert Guidance
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Our spectacular team of highly experienced, professionally
                      certified insurance advisors possesses remarkable,
                      in-depth knowledge surrounding the ever-changing industry
                      and its myriad available policy options.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-marine mb-2">
                      Tailored Solutions
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      We emphatically recognize that absolutely every single
                      individual&apos;s vital needs, daily lifestyle choices,
                      and underlying financial circumstances are drastically
                      different. Our wonderfully customized solutions are
                      meticulously designed to align directly with your
                      lifestyle.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-marine mb-2">
                      Claims Support
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Sudden emergencies can inherently be exceptionally
                      stressful and profoundly challenging structurally and
                      emotionally. Our heavily dedicated, profoundly empathetic
                      claims support team proactively assists our afflicted
                      clients firmly.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xl">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-marine mb-2">
                      Extensive Networks
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      We proudly collaborate directly with an incredibly broad,
                      nationwide network of prestigious entities strictly to
                      ensure our valued clients invariably have immediate access
                      to world-class care and support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-marine text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="layout-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/20">
              <Image
                src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&q=80&w=1200"
                alt="Protect Your Future"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 lg:order-2 text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Protect Your Future
              </h2>
              <div className="space-y-6 text-slate-300">
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  At Lambach Insurance Brokers, we firmly believe that
                  intelligently investing in comprehensive Insurance remains
                  arguably one of the most monumentally important, foundational
                  decisions you can safely make for yourself and your beloved
                  family.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Our highly expert team is absolutely dedicated to actively
                  helping you quickly find the definitively right Insurance
                  solution perfectly tailored strictly to your highly specific
                  demands and grand financial objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTAContact />
    </>
  );
}
