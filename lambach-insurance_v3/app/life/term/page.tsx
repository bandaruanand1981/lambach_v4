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
  title: "Term Insurance | Affordable Life Cover | Lambach Insurance Brokers",
  description:
    "Term Insurance provides straightforward, cost-effective life insurance protection. Secure your family’s financial future with Lambach Insurance Brokers.",
};

export default function Page() {
  return (
    <>
      <PageHero
        title="Term Insurance"
        description="Straightforward and Affordable Life Insurance Protection"
        imageSrc="https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&q=80&w=1200"
        imageAlt="Happy family walking outdoors representing financial security"
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
                Safeguarding Futures Through Financial Protection
              </h1>
              <div className="prose max-w-none text-slate-600 space-y-6">
                <p className="text-lg leading-relaxed">
                  Term Insurance is one of the simplest and most cost-effective
                  forms of life insurance, designed to provide financial
                  protection for a specified period. It offers a high sum
                  assured at an affordable premium, ensuring that your loved
                  ones remain financially secure in the event of an unforeseen
                  loss. Whether you are a working professional, business owner,
                  parent, or primary income earner, Term Insurance serves as a
                  vital financial safety net.
                </p>
                \n{" "}
                <p className="text-lg leading-relaxed">
                  Term Insurance forms the foundation of a strong financial plan
                  by providing comprehensive life coverage and peace of mind. In
                  today&apos;s unpredictable world, securing the financial future of
                  your family has become more important than ever. A
                  well-structured Term Insurance policy ensures that your
                  dependents are protected against financial hardship arising
                  from the loss of the primary income earner.
                </p>
                \n{" "}
                <p className="text-lg leading-relaxed">
                  At Lambach Insurance Brokers, we work closely with clients to
                  identify their insurance needs and recommend suitable coverage
                  that helps safeguard their family&apos;s future.
                </p>
              </div>
            </div>
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200" alt="Family holding hands representing term insurance protection"
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
                    Legally Binding Contract
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 sm:hidden">
                <CheckCircle2 className="w-8 h-8 text-blue-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-600 leading-relaxed">
                  The policy clearly outlines the coverage period, premium
                  obligations, exemptions, and benefits ensuring transparency.
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
                    Financial Protection for Your Family
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 sm:hidden">
                <ShieldCheck className="w-8 h-8 text-orange-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Pays a pre-determined sum assured to the nominated beneficiary
                  to help manage essential expenses and maintain their
                  lifestyle.
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
                    Flexible Premium Payment Options
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 sm:hidden">
                <FileText className="w-8 h-8 text-purple-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Choose a payment structure (monthly, quarterly, annual) that
                  aligns with your financial planning and budget.
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
                    Death Benefit Protection
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 sm:hidden">
                <Activity className="w-8 h-8 text-emerald-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Financial support that can help cover household expenses, loan
                  repayments, children’s education, and healthcare costs.
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
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200" alt="Individual securing their family future with life insurance"
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
                Role of Insurance Brokers
              </h2>
              <div className="grid grid-cols-1 gap-10">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-marine mb-2">
                      Comprehensive Needs Assessment
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      We assess income, liabilities, and objectives to recommend
                      appropriate Term Insurance coverage.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-marine mb-2">
                      Policy Selection and Customization
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      We help clients compare available options and select
                      solutions that best meet protection requirements.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-marine mb-2">
                      Clear Communication of Policy Terms
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Detailed explanations of policy features, exclusions, and
                      optional riders for complete transparency.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xl">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-marine mb-2">
                      Claims Support and Advocacy
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      We assist beneficiaries with documentation and insurer
                      communication for a smooth settlement experience.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xl">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-marine mb-2">
                      Regular Policy Reviews and Updates
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Periodic policy reviews to ensure coverage remains
                      adequate as life circumstances evolve over time.
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
              Benefits of Term Insurance Through Us
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
                    Financial Security for Loved Ones
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 sm:hidden">
                <Shield className="w-8 h-8 text-rose-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Provides a safety net that helps families maintain stability
                  and meet future obligations in the absence of the primary
                  earner.
                </p>
              </div>
            </div>
            <div className="bg-fuchsia-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-6">
                <div className="flex-1 flex flex-col items-start">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">
                    Tailored Insurance Solutions
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 sm:hidden">
                <TrendingUp className="w-8 h-8 text-fuchsia-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Customized solutions that align with personal goals, family
                  requirements, and budget considerations.
                </p>
              </div>
            </div>
            <div className="bg-blue-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-6">
                <div className="flex-1 flex flex-col items-start">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">
                    Dedicated Claims Assistance
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 sm:hidden">
                <Smile className="w-8 h-8 text-blue-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Proactive support to ensure beneficiaries receive timely
                  assistance throughout the claim settlement process.
                </p>
              </div>
            </div>
            <div className="bg-orange-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-6">
                <div className="flex-1 flex flex-col items-start">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">
                    Peace of Mind and Confidence
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 sm:hidden">
                <Lock className="w-8 h-8 text-orange-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Focus on your present goals knowing your loved ones will have
                  financial support when they need it most.
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
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200" alt="Family looking towards a secure financial future"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 lg:order-2 text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Protecting Tomorrow, Today
              </h2>
              <div className="space-y-6 text-slate-300">
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  At Lambach Insurance Brokers, we believe that financial
                  security begins with proper planning and protection. Term
                  Insurance is one of the most effective ways to safeguard your
                  family&apos;s future. Whether you are purchasing life insurance for
                  the first time or reviewing your existing coverage, we are
                  here to help you make informed decisions with confidence.
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
