import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTAContact from "@/components/CTAContact";
import {
  HeartPulse,
  Stethoscope,
  Activity,
  ShieldPlus,
  ShieldAlert,
  BadgePlus,
  FileText,
  Heart,
  Shield
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Health Insurance | Medical Cover | Lambach Insurance Brokers",
  description:
    "Comprehensive health insurance solutions to protect your family from rising medical costs, covering hospitalization, outpatient, and preventive care.",
};

export default function HealthInsurancePage() {
  return (
    <>
      <PageHero
        title="Health Insurance"
        description="Comprehensive healthcare protection ensuring your family receives the best medical care without the burden of overwhelming expenses."
        imageSrc="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200"
        imageAlt="Healthcare professionals providing family protection"
        showContactCta
        label="Retail Solution"
        showIndustryActions={true}
        highlightIcon={<Shield className="w-5 h-5 text-primary" />}
        highlight1Text="Tailored Coverage"
      />

      {/* Intro Section */}
      <section className="py-24 bg-slate-50">
        <div className="layout-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-2">
              <h1 className="text-3xl md:text-4xl font-bold text-brand-marine mb-6">
                Health Insurance: Prioritizing Your Well-being
              </h1>
              <div className="prose max-w-none text-slate-600 space-y-6">
                <p className="text-lg leading-relaxed">
                  <strong>Health Insurance</strong> is an incredibly
                  comprehensive financial protection solution beautifully
                  designed to significantly help diligent individuals and
                  responsible families properly manage the continuously rising,
                  often astronomical costs of modern medical care. It robustly
                  provides extensive coverage explicitly for unexpected
                  hospitalization expenses, vital medical treatments, complex
                  surgeries, crucial diagnostic tests, and various other
                  healthcare-related costs, safely ensuring sustained access to
                  top-tier quality medical services entirely without causing
                  significant, lasting financial strain.
                </p>
                <p className="text-lg leading-relaxed">
                  In today&apos;s rapidly evolving, intensely complex healthcare
                  landscape, deeply unexpected medical emergencies and sudden
                  severe health conditions can easily create immensely
                  substantial financial burdens practically overnight. A highly
                  well-structured Health Insurance policy fundamentally helps
                  properly safeguard your hard-earned finances while dependably
                  ensuring remarkably timely, uncompromising access to
                  high-quality healthcare services precisely when you uniquely
                  need them most.
                </p>
              </div>
            </div>
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&q=80&w=1200"
                alt="Introduction to health insurance"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white">
        <div className="layout-container">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-marine mb-6">
                Comprehensive Coverage for a Healthier, Worry-Free Life
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                At Lambach Insurance Brokers, we truly understand that your
                lasting health is undoubtedly your most profoundly valuable
                asset. Health Insurance acts as an entirely essential
                foundational financial tool securely designed to robustly
                protect you and your deeply cherished loved ones against the
                perpetually increasing, daunting costs of advanced medical care.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Our dynamic Health Insurance solutions seamlessly provide an
                incredibly comprehensive, unyielding safety net, decisively
                enabling careful individuals and loving families to readily
                access superior quality healthcare entirely without bearing the
                tremendous burden of excessive, crippling medical expenses.
                Whether it intricately involves routine daily healthcare, sudden
                complex hospitalization, critical emergency treatment, or highly
                specialized medical care interventions, our premier insurance
                solutions are brilliantly designed to effectively provide
                unmatched financial security and deep-seated peace of mind
                continuously throughout absolutely every evolving stage of life.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                With exclusive, highly privileged access to completely leading,
                top-tier insurers and sweeping healthcare networks, we
                diligently help our valued clients carefully select the most
                highly suitable Health Insurance plans meticulously based on
                their distinct healthcare needs, strict budget requirements, and
                ambitious long-term financial security goals.
              </p>
            </div>
            <div className="w-full md:w-1/2 bg-slate-100 rounded-3xl p-8 border border-slate-200">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                  <HeartPulse className="w-10 h-10 text-rose-500 mx-auto mb-3" />
                  <h4 className="font-bold text-brand-marine">
                    Emergency Care
                  </h4>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                  <Stethoscope className="w-10 h-10 text-blue-500 mx-auto mb-3" />
                  <h4 className="font-bold text-brand-marine">
                    Expert Consults
                  </h4>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                  <Activity className="w-10 h-10 text-emerald-500 mx-auto mb-3" />
                  <h4 className="font-bold text-brand-marine">Ongoing Care</h4>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                  <ShieldPlus className="w-10 h-10 text-indigo-500 mx-auto mb-3" />
                  <h4 className="font-bold text-brand-marine">Family Shield</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Cards Section */}
      <section className="py-24 bg-slate-50">
        <div className="layout-container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-primary px-3 py-1 rounded-full mb-4 text-xs font-bold uppercase tracking-widest">
              Coverage Details
            </div>
            <h2 className="font-heading text-4xl font-bold text-brand-marine mb-4">
              Key Features of Health Insurance
            </h2>
            <p className="text-slate-600">
              Essential components that form the foundation of a robust health
              insurance policy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-6">
                <div className="flex-1 flex flex-col items-start">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">
                    Financial Security
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 sm:hidden">
                <ShieldAlert className="w-8 h-8 text-blue-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Health Insurance solidly provides entirely essential, robust
                  financial protection against skyrocketing medical expenses
                  suddenly arising from unexpected illness, severe injury,
                  unfortunate accidents, or emergency surgical procedures. By
                  thoroughly covering eligible, often monumental healthcare
                  costs, it decisively helps cautious individuals and dependent
                  families completely avoid experiencing significant, crippling
                  out-of-pocket expenses, enabling them to perfectly maintain
                  their crucial financial stability continuously during highly
                  stressful medical emergencies.
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
                    Hospitalization Cover
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 sm:hidden">
                <BadgePlus className="w-8 h-8 text-emerald-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our premier Health Insurance plans beautifully provide deeply
                  comprehensive operational coverage explicitly for prolonged
                  hospitalization expenses. This reliably includes daily room
                  rent, skilled nursing charges, expert surgeon fees, high-level
                  specialist consultations, critical diagnostic tests, intensive
                  operation theatre expenses, and vital post-hospitalization
                  care. This guarantees that all valued policyholders reliably
                  receive absolutely top-tier quality treatment entirely without
                  constantly worrying about incessantly escalating, massive
                  medical bills.
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
                    Outpatient Services
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 sm:hidden">
                <Stethoscope className="w-8 h-8 text-purple-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Certain highly advanced Health Insurance plans also gracefully
                  offer spectacular extended coverage explicitly for crucial
                  outpatient medical services. This frequently includes routine
                  doctor consultations, minor diagnostic tests, specialized
                  specialist visits, critical prescription medications, and
                  essential preventive healthcare services. This remarkably
                  additional, highly practical benefit substantially improves
                  general daily healthcare accessibility and robustly supports
                  ongoing, consistent proactive medical management protocols.
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

            <div className="bg-rose-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-1">
              <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-6">
                <div className="flex-1 flex flex-col items-start">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">
                    Coverage for Pre-Existing Conditions
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 sm:hidden">
                <FileText className="w-8 h-8 text-rose-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Carefully relying uniquely on strictly defined policy terms
                  and legally mandated waiting period requirements, previously
                  diagnosed pre-existing medical conditions may eventually be
                  fully covered beautifully under robust Health Insurance plans.
                  Our highly experienced, profoundly empathetic advisors
                  diligently help seeking clients deeply understand complex
                  policy provisions, strict waiting periods, noted exclusions,
                  and vastly available coverage options, thereby ensuring total,
                  uncompromising transparency well before finalizing any plan
                  parameter.
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
                    Preventive Care Benefits
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 sm:hidden">
                <Heart className="w-8 h-8 text-orange-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Many elite, forward-thinking Health Insurance plans actively
                  promote robust preventive healthcare modalities by highly
                  encouraging routine regular health screenings, engaging
                  wellness programs, timely essential vaccinations, and strictly
                  annual comprehensive medical check-ups. This deeply proactive,
                  preventative approach significantly supports miraculously
                  early diagnosis protocols, remarkably timely medical
                  intervention, and vastly improved, optimal long-term health
                  outcomes while systematically reducing massive future
                  healthcare remediation costs.
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

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="layout-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-xl ring-1 ring-slate-100 hidden lg:block">
              <Image
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000"
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
                Why Choose Lambach Insurance Brokers Pvt. Ltd. for Health
                Insurance
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
                      in-depth knowledge surrounding the ever-changing Health
                      Insurance industry and its myriad available policy
                      options. We gladly provide deeply personalized guidance
                      and highly professional advice tailored perfectly to help
                      diverse clients successfully compare complex plans,
                      distinctly understand convoluted coverage features, and
                      flawlessly make profoundly informed, completely optimal
                      healthcare protection decisions.
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
                      individual&apos;s vital healthcare needs, daily lifestyle
                      choices, and underlying financial circumstances are
                      drastically different. Our wonderfully customized Health
                      Insurance solutions are meticulously designed to perfectly
                      align directly with your singularly unique lifestyle
                      requirements, strictly ensuring you reliably receive
                      entirely comprehensive, bulletproof coverage that
                      flawlessly delivers absolute maximum lifetime value and
                      unyielding protection.
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
                      Sudden medical emergencies can inherently be exceptionally
                      stressful and profoundly challenging structurally and
                      emotionally. Our heavily dedicated, profoundly empathetic
                      claims support team proactively assists our afflicted
                      clients firmly throughout the entire turbulent claims
                      process, readily providing expert, comforting guidance on
                      overwhelming documentation limits, urgent claim
                      submissions, vital insurer coordination, and final
                      settlement procedures. We are absolutely committed to
                      permanently delivering a phenomenally smooth, totally
                      hassle-free claims resolution experience.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xl">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-marine mb-2">
                      Extensive Healthcare Provider Network
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      We proudly and extensively collaborate directly with an
                      incredibly broad, nationwide network of prestigious
                      hospitals, advanced clinics, renowned specialists, and
                      top-tier healthcare providers strictly to ensure our
                      valued clients invariably have immediate access to
                      world-class medical care. Our vast, robustly extensive
                      healthcare network markedly enhances overarching
                      convenience, greatly supports highly efficient cashless
                      treatment options where applicable, and seamlessly
                      provides magnificently greater flexibility when urgently
                      seeking critical medical services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-20 bg-brand-marine text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="layout-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/20">
              <Image
                src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&q=80&w=1200"
                alt="Comprehensive health protection"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 lg:order-2 text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Protect Your Health, Protect Your Future
              </h2>
              <div className="space-y-6 text-slate-300">
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  At Lambach Insurance Brokers, we firmly and passionately
                  believe that intelligently investing in comprehensive Health
                  Insurance remains arguably one of the most monumentally
                  important, foundational decisions you can possibly ever make
                  safely for yourself and your beloved family. Deeply
                  comprehensive health coverage notably not only rigorously
                  protects against devastatingly unexpected, astronomical
                  medical expenses but importantly also provides lasting
                  confidence, enduring security, and profound mental peace of
                  mind continuously during life&apos;s many unpredictable
                  uncertainties.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Our deeply committed, highly expert team is absolutely
                  dedicated to actively helping you quickly find the
                  definitively right Health Insurance solution perfectly
                  tailored strictly to your highly specific healthcare demands
                  and grand financial objectives. Contact Lambach Insurance
                  Brokers gracefully today to proactively explore our vast,
                  highly comprehensive Health Insurance offerings and rapidly
                  secure a fantastically healthier, completely worry-free,
                  incredibly bright future for you and your deeply cherished
                  loved ones.
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
