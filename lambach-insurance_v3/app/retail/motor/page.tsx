import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTAContact from "@/components/CTAContact";
import {
  Briefcase,
  FileText,
  AlertCircle,
  Info,
  ShieldAlert,
  Car,
  Activity,
  Settings,
  CheckCircle2,
  Shield
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Motor Insurance | Vehicle Protection Strategies | Lambach Insurance Brokers",
  description:
    "Secure comprehensive Motor Insurance for private and commercial vehicles. From zero depreciation to robust third-party liability coverage.",
};

export default function MotorInsurancePage() {
  return (
    <>
      <PageHero
        title="Motor Insurance"
        description="Comprehensive protection for your private cars and commercial vehicles. Shield yourself from the financial impact of road risks."
        imageSrc="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1200"
        imageAlt="Car driving on highway for motor insurance coverage"
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
                Motor Insurance: Essential Protection for Your Journey
              </h1>
              <div className="prose max-w-none text-slate-600 space-y-6">
                <p className="text-lg leading-relaxed">
                  At Lambach Insurance Brokers, we understand the critical
                  importance of <strong>Motor Insurance</strong> in protecting
                  vehicle owners, drivers, and businesses from unexpected
                  financial risks. As a mandatory requirement for all vehicles
                  operating on public roads, comprehensive vehicle coverage goes
                  far beyond basic legal compliance. It serves as a vital
                  financial safeguard against vehicular accidents, vehicle
                  theft, natural disasters, and significant third-party
                  liabilities.
                </p>
                <p className="text-lg leading-relaxed">
                  Our tailored <strong>Motor Insurance solutions</strong> are
                  explicitly designed to provide extensive protection against
                  severe physical damage, total loss, and unforeseen incidents
                  triggered by both natural calamities and man-made events.
                  Whether you own a personal private vehicle, manage a sprawling
                  commercial fleet, or operate specialized transport
                  infrastructure, our highly tailored insurance services ensure
                  robust financial security, seamless business continuity, and
                  absolute peace of mind on every journey you undertake.
                </p>
              </div>
            </div>
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1542385151-efd9000785a0?auto=format&fit=crop&q=80&w=1200"
                alt="Introduction to motor insurance"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Wordings and Insurance Broker Services */}
      <section className="py-24 bg-white">
        <div className="layout-container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-primary px-3 py-1 rounded-full mb-4 text-xs font-bold uppercase tracking-widest">
              Expert Brokerage
            </div>
            <h2 className="font-heading text-4xl font-bold text-brand-marine mb-4">
              Product Wordings and Insurance Broker Services
            </h2>
            <p className="text-slate-600">
              Expert guidance to help you navigate motor insurance complexities
              effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group border border-slate-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-[100px] -z-10 group-hover:bg-blue-500/10 transition-colors"></div>
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Briefcase className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-brand-marine mb-4 group-hover:text-blue-600 transition-colors">
                Customized Policy Selection
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Every vehicle owner possesses uniquely distinct insurance
                requirements based on usage and location. Our experienced
                insurance professionals work intimately with clients to
                thoroughly understand their exact vehicle consumption habits,
                daily driving patterns, overarching risk exposure, and precise
                coverage expectations. Based on this thorough assessment, we
                intelligently recommend customized motor insurance solutions
                that continuously provide the most appropriate protection while
                simultaneously maximizing overall value and cost efficiency.
              </p>
            </div>

            <div className="group border border-slate-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-bl-[100px] -z-10 group-hover:bg-indigo-500/10 transition-colors"></div>
              <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <FileText className="w-7 h-7 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-brand-marine mb-4 group-hover:text-indigo-600 transition-colors">
                Clear Communication of Terms
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Thoroughly understanding underlying policy terms and intricate
                conditions is absolutely essential for making highly informed
                strategic decisions. We proudly provide meticulous, detailed
                explanations of all policy wordings, nuanced coverage
                inclusions, specific exclusions, variable deductibles, and
                detailed claim procedures. Our staunchly transparent approach
                ensures that all clients have complete, unblemished clarity
                regarding their motor insurance coverage variables and core
                benefits.
              </p>
            </div>

            <div className="group border border-slate-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-bl-[100px] -z-10 group-hover:bg-rose-500/10 transition-colors"></div>
              <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <AlertCircle className="w-7 h-7 text-rose-600" />
              </div>
              <h3 className="text-xl font-bold text-brand-marine mb-4 group-hover:text-rose-600 transition-colors">
                Claims Support and Advocacy
              </h3>
              <p className="text-slate-600 leading-relaxed">
                In the highly unfortunate event of a road accident, unexpected
                vehicle theft, or sudden malicious vehicle damage, our
                passionately dedicated claims support team immediately acts as
                your implicitly trusted advocate. We expertly guide clients
                actively through every singular stage of the complex claims
                process, carefully assisting with essential documentation,
                direct insurer communication, and final settlement procedures to
                ensure a phenomenally smooth, profoundly efficient, and entirely
                fair resolution.
              </p>
            </div>

            <div className="group border border-slate-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-[100px] -z-10 group-hover:bg-emerald-500/10 transition-colors"></div>
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Info className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-brand-marine mb-4 group-hover:text-emerald-600 transition-colors">
                Educational Support
              </h3>
              <p className="text-slate-600 leading-relaxed">
                We strongly believe that deeply informed customers naturally
                make demonstrably better insurance decisions. Our knowledgeable
                team actively educates valuable clients about granular policy
                features, comprehensive coverage benefits, optimal claim
                procedures, and advanced risk management practices. By
                continually helping clients explicitly understand their robust
                coverage, we powerfully empower them to actively make remarkably
                confident decisions and significantly maximize the vast value of
                their motor insurance policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-24 bg-slate-50">
        <div className="layout-container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-primary px-3 py-1 rounded-full mb-4 text-xs font-bold uppercase tracking-widest">
              Coverage Details
            </div>
            <h2 className="font-heading text-4xl font-bold text-brand-marine mb-4">
              Key Features of Motor Insurance
            </h2>
            <p className="text-slate-600">
              Comprehensive coverage elements to safeguard you, your vehicle,
              and others on the road.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-rose-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-6">
                <div className="flex-1 flex flex-col items-start">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">
                    Third-Party Liability Coverage
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 sm:hidden">
                <ShieldAlert className="w-8 h-8 text-rose-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Third-Party Liability Coverage stands as a strict, mandatory
                  component of any standard Motor Insurance policy that
                  powerfully protects vigilant vehicle owners against severe
                  legal liabilities directly arising from profound bodily
                  injury, tragic death, or costly property damage accidentally
                  caused to third parties. This vastly essential coverage
                  meticulously ensures stringent financial responsibility while
                  simultaneously safeguarding vulnerable policyholders from
                  experiencing potentially devastating legal struggles and
                  crippling financial consequences following a collision.
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

            <div className="bg-blue-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-6">
                <div className="flex-1 flex flex-col items-start">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">
                    Own Damage Protection
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 sm:hidden">
                <Car className="w-8 h-8 text-blue-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Own Damage Coverage delivers premier financial protection for
                  the treasured insured vehicle against suddenly occurring
                  accidental damage resulting directly from rapid collisions,
                  horrific road accidents, malicious theft, consuming fire,
                  destructive vandalism, extreme natural disasters, and various
                  other officially covered events. This deep, sweeping coverage
                  dynamically helps significantly reduce astronomical repair and
                  massive replacement costs, continuously ensuring impressively
                  quick vehicle restoration while carrying minimal residual
                  financial burden.
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
                    Personal Accident Cover
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 sm:hidden">
                <Activity className="w-8 h-8 text-emerald-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Advanced Motor Insurance policies nearly always natively
                  include a robust Personal Accident Cover element, explicitly
                  providing substantial financial compensation in the terribly
                  unfortunate event of severe accidental bodily injury, tragic
                  permanent disability, or catastrophic death impacting the
                  primary policyholder or innocent passengers while safely
                  traveling within the strictly insured vehicle. This greatly
                  valuable supplementary benefit offers critical, lasting
                  additional financial security and peace of mind for vulnerable
                  individuals and their continuously grieving families.
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
                    Legal Assistance
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 sm:hidden">
                <FileText className="w-8 h-8 text-purple-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Sudden, violent motor accidents may sometimes swiftly result
                  in deeply complex legal disputes and significantly mounting
                  associated expenses. Certain specialized, top-tier Motor
                  Insurance policies proactively include responsive legal
                  assistance benefits that systematically help afflicted
                  policyholders successfully manage daunting legal proceedings,
                  meticulously handle burdensome documentation requirements, and
                  effortlessly defray related compounding costs strictly arising
                  from officially covered, legally entangled incidents.
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
                    Add-On Covers
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 sm:hidden">
                <Settings className="w-8 h-8 text-orange-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  To dramatically enhance holistic protection, empowered
                  policyholders can dynamically customize their baseline
                  coverage through a uniquely vast range of spectacular add-on
                  options minutely tailored to very specific operational needs.
                  Popular premium add-ons reliably include:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500" /> Engine
                    Protection Cover
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500" />{" "}
                    Roadside Assistance
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500" /> Zero
                    Depreciation Cover
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500" /> Return
                    to Invoice Cover
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500" />{" "}
                    Accessories Protection Cover
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500" /> Key
                    Replacement Cover
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500" />{" "}
                    Consumables Cover
                  </li>
                </ul>
                <p className="text-sm text-slate-600 leading-relaxed mt-4">
                  These exceptionally additional core benefits continually
                  provide significantly greater daily flexibility and supremely
                  comprehensive protection strategies for modern vehicle owners
                  prioritizing zero-risk commuting.
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
                src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1000"
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
                Why Choose Lambach Insurance Brokers for Motor Insurance
              </h2>
              <div className="grid grid-cols-1 gap-10">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-marine mb-2">
                      Legal Compliance
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Comprehensive Motor Insurance reliably helps sensible
                      vehicle owners seamlessly comply with strictly enforced
                      statutory requirements while diligently ensuring they
                      consistently meet their massive financial responsibilities
                      directly toward vulnerable third parties. Maintaining
                      highly adequate operational coverage is absolutely
                      essential for strictly lawful, flawlessly responsible
                      daily vehicle ownership.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-marine mb-2">
                      Financial Protection
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Deeply unexpected adverse events such as sudden violent
                      accidents, stealthy vehicle theft, consuming fire, and
                      severe ambient vehicle damage can rapidly lead to
                      exceptionally substantial, devastating financial losses.
                      Elite Motor Insurance actively provides tremendously
                      critical financial protection by extensively covering
                      monumental repair costs, exorbitant replacement expenses,
                      and sprawling third-party liabilities, vastly helping
                      careful policyholders entirely avoid any significant
                      out-of-pocket, disastrous expenditures.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-marine mb-2">
                      Tailored Solutions
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      At Lambach Insurance Brokers, we intricately understand
                      that absolutely every distinct client possesses
                      exclusively unique logistical needs. Our highly engaged,
                      profoundly consultative approach readily allows our
                      top-tier agents to consistently recommend highly
                      customized, uniquely strategic insurance solutions that
                      precisely align themselves with highly specific vehicle
                      sub-types, strict corporate/personal budgets, and dynamic
                      risk profiles, dependably ensuring optimally maximized
                      protection alongside unmatched overall value.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xl">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-marine mb-2">
                      Claims Assistance
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Our heavily dedicated, industry-leading claims
                      professionals reliably provide spectacular end-to-end
                      operational support continuously throughout the entire
                      lifespan of the complex claims process. Stretching
                      directly from initial claim notification entirely through
                      to the ultimate, highly anticipated final settlement, we
                      tirelessly work supremely diligently to radically simplify
                      your experience and rigidly ensure remarkably timely,
                      highly equitable claim resolution, drastically minimizing
                      any prevailing inconvenience and deep-seated stress for
                      our valued clients.
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
                src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1200"
                alt="Comprehensive motor protection"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 lg:order-2 text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Your Shield on the Road – Comprehensive Protection for Peace of
                Mind
              </h2>
              <div className="space-y-6 text-slate-300">
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  At Lambach Insurance Brokers, we profoundly recognize the
                  truly vital, irreplaceable role comprehensive Motor Insurance
                  actively plays in permanently ensuring widespread road safety,
                  deep-rooted financial security, and vastly sustained long-term
                  peace of mind. Through our robustly comprehensive brokerage
                  services and intensely client-focused strategic approach, we
                  dynamically help modern vehicle owners securely guarantee
                  highly reliable protection decisively shielding them against
                  deeply unforeseen traffic risks and daunting financial
                  uncertainties.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Whether you are currently seeking steadfast coverage
                  explicitly for your treasured personal vehicle, aiming to
                  fully protect a sprawling commercial dispatch fleet, or
                  heavily insuring an incredibly specialized heavy transport
                  operation, our highly experienced team stands permanently
                  ready to proactively provide truly expert guidance alongside
                  beautifully tailored, robust insurance solutions carefully
                  designed to precisely meet your flawlessly unique, dynamic
                  needs.
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
