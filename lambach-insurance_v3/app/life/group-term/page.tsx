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
  title:
    "Group Term Insurance | Corporate Employee Benefits | Lambach Insurance Brokers",
  description:
    "Group Term Insurance is a valuable employee benefit providing financial protection to families. Enhance your corporate benefits with Lambach Insurance.",
};

export default function Page() {
  return (
    <>
      <PageHero
        title="Group Term Insurance"
        description="Comprehensive Protection for Collective Security"
        imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
        imageAlt="Diverse corporate team smiling representing workplace benefits"
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
                Valuable Protection for Your Workforce
              </h1>
              <div className="prose max-w-none text-slate-600 space-y-6">
                <p className="text-lg leading-relaxed">
                  Group Term Insurance is a valuable employee benefit that
                  provides financial protection to employees&apos; families in the
                  event of an untimely death. It offers affordable life
                  insurance coverage for groups, helping organizations enhance
                  their employee benefits package while promoting workforce
                  well-being, financial security, and long-term peace of mind.
                </p>
                \n{" "}
                <p className="text-lg leading-relaxed">
                  At Lambach Insurance Brokers, we understand the importance of
                  protecting the financial future of employees and their
                  families. Our Group Term Insurance solutions are designed to
                  provide comprehensive life insurance coverage for
                  organizations of all sizes, ensuring employees receive
                  meaningful protection.
                </p>
                \n{" "}
                <p className="text-lg leading-relaxed">
                  By offering financial support to beneficiaries in the event of
                  a covered employee&apos;s death, organizations can foster trust,
                  loyalty, and confidence among their workforce.
                </p>
              </div>
            </div>
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" alt="Employees collaborating in a modern office environment"
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
                    Collective Coverage
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 sm:hidden">
                <CheckCircle2 className="w-8 h-8 text-blue-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Provides life insurance to a group, enabling businesses to
                  offer valuable coverage at a lower cost.
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
                    Death Benefit
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 sm:hidden">
                <ShieldCheck className="w-8 h-8 text-orange-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-600 leading-relaxed">
                  A lump-sum death benefit is paid to the nominated beneficiary
                  to manage living expenses and liabilities.
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
                    Affordable Premiums
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 sm:hidden">
                <FileText className="w-8 h-8 text-purple-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Since risk is distributed, premiums are generally more
                  affordable than individual life insurance policies.
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
                    No Medical Underwriting
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 sm:hidden">
                <Activity className="w-8 h-8 text-emerald-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Many plans do not require extensive medical examinations,
                  allowing quick and easy access to coverage.
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
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" alt="Happy employee working at desk demonstrating employee satisfaction"
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
                      Comprehensive Needs Assessment
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Detailed assessment of workforce demographics and
                      financial objectives to recommend the right solution.
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
                      Evaluate and select the right policy based on coverage
                      requirements, budget, and workforce size.
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
                      Transparent explanations of policy terms, exclusions, and
                      claim procedures for complete clarity.
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
                      We act as advocates to facilitate prompt claim settlement
                      without unnecessary delays for families.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xl">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-marine mb-2">
                      Policy Reviews and Adjustments
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Regular policy reviews to ensure continued relevance as
                      organizations grow and workforce needs evolve.
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
              Why Choose Us for Group Term Insurance
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
                    Collective Financial Security
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 sm:hidden">
                <Shield className="w-8 h-8 text-rose-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-600 leading-relaxed">
                  A strong financial safety net ensuring stability for employees
                  and their families during challenging times.
                </p>
              </div>
            </div>
            <div className="bg-fuchsia-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-6">
                <div className="flex-1 flex flex-col items-start">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">
                    Affordable Coverage
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 sm:hidden">
                <TrendingUp className="w-8 h-8 text-fuchsia-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Provide substantial life insurance coverage at highly
                  competitive premium rates through group advantages.
                </p>
              </div>
            </div>
            <div className="bg-blue-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-6">
                <div className="flex-1 flex flex-col items-start">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">
                    Enhanced Employee Benefits
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 sm:hidden">
                <Smile className="w-8 h-8 text-blue-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Strengthens your benefits package, improves satisfaction,
                  supports talent retention, and shows care.
                </p>
              </div>
            </div>
            <div className="bg-orange-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-6">
                <div className="flex-1 flex flex-col items-start">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">
                    Simplified Enrollment
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 sm:hidden">
                <Lock className="w-8 h-8 text-orange-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Minimal documentation and limited medical underwriting make
                  enrollment quick and accessible.
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
                src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&q=80&w=1200" alt="Office team meeting discussing corporate group term insurance"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 lg:order-2 text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Strength in Numbers, Security for All
              </h2>
              <div className="space-y-6 text-slate-300">
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  At Lambach Insurance Brokers, we believe every organization
                  has a responsibility to safeguard its workforce&apos;s financial
                  future. Partner with us today and discover how Group Term
                  Insurance can enhance employee welfare, strengthen
                  organizational resilience, and deliver lasting peace of mind
                  for everyone involved.
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
