import { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTAContact from "@/components/CTAContact";
import {
  ShieldCheck,
  CheckCircle2,
  FileText,
  Activity,
  ArrowRight,
  Search,
  Settings,
  Mic,
  Heart,
  RefreshCw,
  Shield,
  TrendingUp,
  Smile,
  Lock,
  Award,
  Globe,
  Users,
  Briefcase,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pension Plans | Retirement Security | Lambach Insurance Brokers",
  description:
    "Pension Plans ensure a steady income stream post-retirement. Experience Guaranteed Growth and Stability with Lambach Insurance Brochures strategies.",
};

export default function Page() {
  return (
    <>
      <PageHero
        title="Pension Plans"
        description="Reliable Financial Security for Your Golden Years"
        imageSrc="https://images.unsplash.com/photo-1566140967404-b8b3932483f5?auto=format&fit=crop&q=80&w=1200"
        imageAlt="Happy senior couple representing retirement planning"
        showContactCta
        showIndustryActions={true}
        label="Overview"
        highlightIcon={<Shield className="w-5 h-5 text-primary" />}
        highlight1Text="Tailored Coverage"
      />

      <section className="py-24 bg-slate-50">
        <div className="layout-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-primary px-3 py-1 rounded-full mb-4 text-xs font-bold uppercase tracking-widest">
                Overview
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-brand-marine mb-6">
                Securing Your Independence Post-Retirement
              </h1>
              <div className="prose max-w-none text-slate-600 space-y-6">
                <p className="text-lg leading-relaxed">
                  Pension Plans are specifically structured retirement solutions
                  designed to generate a dependable, steady income stream once
                  your active professional career concludes.
                </p>
                \n{" "}
                <p className="text-lg leading-relaxed">
                  These solutions are crucial for maintaining your envisioned
                  lifestyle without financial stress. Many plans provide
                  guaranteed returns for predictable savings accumulation.
                </p>
                \n{" "}
                <p className="text-lg leading-relaxed">
                  Our expert advisors ensure you select a tailored pension
                  strategy effectively bridging the gap between your current
                  savings and future retirement needs safely.
                </p>
              </div>
            </div>
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=1200" alt="Senior couple relaxing and enjoying financial independence"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="layout-container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-primary px-3 py-1 rounded-full mb-4 text-xs font-bold uppercase tracking-widest">
              Core Principles
            </div>
            <h2 className="font-heading text-4xl font-bold text-brand-marine mb-4">
              Important Product Features
            </h2>
            <p className="text-slate-600">
              Essential components that form the foundation of a robust policy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-6">
                <div className="flex-1 flex flex-col items-start">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">
                    Steady Retirement Income
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 sm:hidden">
                <CheckCircle2 className="w-8 h-8 text-blue-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Guarantees a regular, predictable income stream to comfortably
                  cover daily post-retirement expenses.
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
            <div className="bg-orange-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-6">
                <div className="flex-1 flex flex-col items-start">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">
                    Accumulation and Annuity Phases
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 sm:hidden">
                <ShieldCheck className="w-8 h-8 text-orange-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Features structured savings phases followed directly by
                  reliable consistent payout structures safely.
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
                    Tax Efficiency
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 sm:hidden">
                <FileText className="w-8 h-8 text-purple-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Many plans offer substantial, legally sanctioned tax
                  advantages encouraging optimal early retirement planning.
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
                    Vesting Flexibility
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 sm:hidden">
                <Activity className="w-8 h-8 text-emerald-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Provides considerable flexibility regarding payout structures,
                  vesting ages, and lump-sum withdrawal options.
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
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" alt="Financial planning documents for retirement security"
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
                Insurance Broker Services
              </h2>
              <div className="grid grid-cols-1 gap-10">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-marine mb-2">
                      Retirement Goal Assessment
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Thoroughly assessing your current lifestyle expectations
                      to firmly identify suitable retirement solutions.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-marine mb-2">
                      Tailored Plan Selection
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Objectively recommending Pension Plans matching your
                      specific risk appetite and income requirements.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-marine mb-2">
                      Transparent Coverage Communication
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Clearly explaining annuity options, accumulation benefits,
                      and vesting stipulations effectively.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xl">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-marine mb-2">
                      Comprehensive Support
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Facilitating seamless documentation and assisting with
                      eventual annuity commencement gracefully.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xl">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-marine mb-2">
                      Periodic Goal Reviews
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Routinely revisiting retirement objectives to accommodate
                      unexpected financial or personal changes safely.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="layout-container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-primary px-3 py-1 rounded-full mb-4 text-xs font-bold uppercase tracking-widest">
              Benefits
            </div>
            <h2 className="font-heading text-4xl font-bold text-brand-marine mb-4">
              Why Choose Us for Pension Plans
            </h2>
            <p className="text-slate-600">
              Discover the advantages of securing your insurance through our
              expert brokers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-rose-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-6">
                <div className="flex-1 flex flex-col items-start">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">
                    Guaranteed Growth and Stability
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 sm:hidden">
                <Shield className="w-8 h-8 text-rose-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Providing firmly reliable income guarantees designed perfectly
                  for a completely stress-free retirement.
                </p>
              </div>
            </div>
            <div className="bg-fuchsia-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-6">
                <div className="flex-1 flex flex-col items-start">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">
                    Extensive Provider Network
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 sm:hidden">
                <TrendingUp className="w-8 h-8 text-fuchsia-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Grants exclusive access to leading industry providers ensuring
                  maximum selection flexibility.
                </p>
              </div>
            </div>
            <div className="bg-blue-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-6">
                <div className="flex-1 flex flex-col items-start">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">
                    Dedicated Policy Administration
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 sm:hidden">
                <Smile className="w-8 h-8 text-blue-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Ongoing, diligent support managing everything from initial
                  enrollment to eventual payouts safely.
                </p>
              </div>
            </div>
            <div className="bg-orange-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-6">
                <div className="flex-1 flex flex-col items-start">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">
                    Absolute Retirement Confidence
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 sm:hidden">
                <Lock className="w-8 h-8 text-orange-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Spend your golden years comfortably knowing your comprehensive
                  financial needs are expertly secured.
                </p>
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
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" alt="Comfortable property and peaceful senior lifestyle"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 lg:order-2 text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Prepare for a Golden Future
              </h2>
              <div className="space-y-6 text-slate-300">
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  Don&apos;t leave your retirement to chance. Establish a robust
                  Pension Plan today to guarantee comfortable independence when
                  you finally stop working.
                </p>
                <div className="mt-8">
                  <Link
                    href="/who-we-are#contact-us"
                    className="inline-flex bg-primary hover:bg-primary-variant text-white px-8 py-4 rounded-xl font-semibold items-center gap-2 shadow-lg hover:shadow-xl transition-all active:scale-95"
                  >
                    Contact Our Advisors
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTAContact />
    </>
  );
}
