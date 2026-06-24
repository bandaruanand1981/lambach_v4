const fs = require('fs');

const pageTemplate = (data) => `import { Metadata } from "next";
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
  Briefcase
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "${data.metaTitle}",
  description: "${data.metaDesc}",
};

export default function Page() {
  return (
    <>
      <PageHero
        title="${data.heroTitle}"
        description="${data.heroDesc}"
        imageSrc="${data.heroImgSrc}"
        imageAlt="${data.heroImgAlt}"
      />

      <section className="py-24 bg-slate-50">
        <div className="layout-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-primary px-3 py-1 rounded-full mb-4 text-xs font-bold uppercase tracking-widest">
                ${data.introOvertitle}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-brand-marine mb-6">
                ${data.introTitle}
              </h1>
              <div className="prose max-w-none text-slate-600 space-y-6">
                ${data.introParas.map(p => `<p className="text-lg leading-relaxed">${p}</p>`).join('\\n                ')}
              </div>
            </div>
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-1">
              <Image
                src="${data.heroImgSrc}"
                alt="${data.heroImgAlt} protection"
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
            ${data.introFeatures.map(f => `
            <div className="bg-${f.color}-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-6">
                <div className="flex-1 flex flex-col items-start">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">
                    ${f.title}
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 sm:hidden">
                <${f.icon} className="w-8 h-8 text-${f.color}-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-600 leading-relaxed">
                  ${f.desc}
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
            </div>`).join('')}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="layout-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-xl ring-1 ring-slate-100 hidden lg:block">
              <Image
                src="${data.heroImgSrc}"
                alt="Why choose Lambach"
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
                ${data.roleTitle}
              </h2>
              <div className="grid grid-cols-1 gap-10">
                ${data.roleFeatures.map((f, i) => `
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xl">${i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-marine mb-2">
                      ${f.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      ${f.desc}
                    </p>
                  </div>
                </div>`).join('')}
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
              ${data.benefitsTitle}
            </h2>
            <p className="text-slate-600">
              Discover the advantages of securing your insurance through our expert brokers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            ${data.benefitsFeatures.map(f => `
            <div className="bg-${f.color}-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-6">
                <div className="flex-1 flex flex-col items-start">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">
                    ${f.title}
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 sm:hidden">
                <${f.icon} className="w-8 h-8 text-${f.color}-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-600 leading-relaxed">
                  ${f.desc}
                </p>
              </div>
            </div>`).join('')}
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
                ${data.ctaTitle}
              </h2>
              <div className="space-y-6 text-slate-300">
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  ${data.ctaDesc}
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
`;

const termData = {
  metaTitle: "Term Insurance | Affordable Life Cover | Lambach Insurance Brokers",
  metaDesc: "Term Insurance provides straightforward, cost-effective life insurance protection. Secure your family’s financial future with Lambach Insurance Brokers.",
  heroTitle: "Term Insurance",
  heroDesc: "Straightforward and Affordable Life Insurance Protection",
  heroImgSrc: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&q=80&w=1200",
  heroImgAlt: "Term Insurance representation",
  introOvertitle: "Overview",
  introTitle: "Safeguarding Futures Through Financial Protection",
  introParas: [
    "Term Insurance is one of the simplest and most cost-effective forms of life insurance, designed to provide financial protection for a specified period. It offers a high sum assured at an affordable premium, ensuring that your loved ones remain financially secure in the event of an unforeseen loss. Whether you are a working professional, business owner, parent, or primary income earner, Term Insurance serves as a vital financial safety net.",
    "Term Insurance forms the foundation of a strong financial plan by providing comprehensive life coverage and peace of mind. In today's unpredictable world, securing the financial future of your family has become more important than ever. A well-structured Term Insurance policy ensures that your dependents are protected against financial hardship arising from the loss of the primary income earner.",
    "At Lambach Insurance Brokers, we work closely with clients to identify their insurance needs and recommend suitable coverage that helps safeguard their family's future."
  ],
  introFeatures: [
    { color: "blue", icon: "CheckCircle2", title: "Legally Binding Contract", desc: "The policy clearly outlines the coverage period, premium obligations, exemptions, and benefits ensuring transparency." },
    { color: "orange", icon: "ShieldCheck", title: "Financial Protection for Your Family", desc: "Pays a pre-determined sum assured to the nominated beneficiary to help manage essential expenses and maintain their lifestyle." },
    { color: "purple", icon: "FileText", title: "Flexible Premium Payment Options", desc: "Choose a payment structure (monthly, quarterly, annual) that aligns with your financial planning and budget." },
    { color: "emerald", icon: "Activity", title: "Death Benefit Protection", desc: "Financial support that can help cover household expenses, loan repayments, children’s education, and healthcare costs." }
  ],
  roleTitle: "Role of Insurance Brokers",
  roleFeatures: [
    { color: "purple", icon: "Search", title: "Comprehensive Needs Assessment", desc: "We assess income, liabilities, and objectives to recommend appropriate Term Insurance coverage." },
    { color: "emerald", icon: "Settings", title: "Policy Selection and Customization", desc: "We help clients compare available options and select solutions that best meet protection requirements." },
    { color: "rose", icon: "Mic", title: "Clear Communication of Policy Terms", desc: "Detailed explanations of policy features, exclusions, and optional riders for complete transparency." },
    { color: "fuchsia", icon: "Heart", title: "Claims Support and Advocacy", desc: "We assist beneficiaries with documentation and insurer communication for a smooth settlement experience." },
    { color: "blue", icon: "RefreshCw", title: "Regular Policy Reviews and Updates", desc: "Periodic policy reviews to ensure coverage remains adequate as life circumstances evolve over time." }
  ],
  benefitsTitle: "Benefits of Term Insurance Through Us",
  benefitsFeatures: [
    { color: "rose", icon: "Shield", title: "Financial Security for Loved Ones", desc: "Provides a safety net that helps families maintain stability and meet future obligations in the absence of the primary earner." },
    { color: "fuchsia", icon: "TrendingUp", title: "Tailored Insurance Solutions", desc: "Customized solutions that align with personal goals, family requirements, and budget considerations." },
    { color: "blue", icon: "Smile", title: "Dedicated Claims Assistance", desc: "Proactive support to ensure beneficiaries receive timely assistance throughout the claim settlement process." },
    { color: "orange", icon: "Lock", title: "Peace of Mind and Confidence", desc: "Focus on your present goals knowing your loved ones will have financial support when they need it most." }
  ],
  ctaTitle: "Protecting Tomorrow, Today",
  ctaDesc: "At Lambach Insurance Brokers, we believe that financial security begins with proper planning and protection. Term Insurance is one of the most effective ways to safeguard your family's future. Whether you are purchasing life insurance for the first time or reviewing your existing coverage, we are here to help you make informed decisions with confidence."
};

fs.writeFileSync('app/life/term/page.tsx', pageTemplate(termData), 'utf8');

const groupTermData = {
  metaTitle: "Group Term Insurance | Corporate Employee Benefits | Lambach Insurance Brokers",
  metaDesc: "Group Term Insurance is a valuable employee benefit providing financial protection to families. Enhance your corporate benefits with Lambach Insurance.",
  heroTitle: "Group Term Insurance",
  heroDesc: "Comprehensive Protection for Collective Security",
  heroImgSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
  heroImgAlt: "Group Term Insurance representation",
  introOvertitle: "Overview",
  introTitle: "Valuable Protection for Your Workforce",
  introParas: [
    "Group Term Insurance is a valuable employee benefit that provides financial protection to employees' families in the event of an untimely death. It offers affordable life insurance coverage for groups, helping organizations enhance their employee benefits package while promoting workforce well-being, financial security, and long-term peace of mind.",
    "At Lambach Insurance Brokers, we understand the importance of protecting the financial future of employees and their families. Our Group Term Insurance solutions are designed to provide comprehensive life insurance coverage for organizations of all sizes, ensuring employees receive meaningful protection.",
    "By offering financial support to beneficiaries in the event of a covered employee's death, organizations can foster trust, loyalty, and confidence among their workforce."
  ],
  introFeatures: [
    { color: "blue", icon: "CheckCircle2", title: "Collective Coverage", desc: "Provides life insurance to a group, enabling businesses to offer valuable coverage at a lower cost." },
    { color: "orange", icon: "ShieldCheck", title: "Death Benefit", desc: "A lump-sum death benefit is paid to the nominated beneficiary to manage living expenses and liabilities." },
    { color: "purple", icon: "FileText", title: "Affordable Premiums", desc: "Since risk is distributed, premiums are generally more affordable than individual life insurance policies." },
    { color: "emerald", icon: "Activity", title: "No Medical Underwriting", desc: "Many plans do not require extensive medical examinations, allowing quick and easy access to coverage." }
  ],
  roleTitle: "Insurance Broker Services",
  roleFeatures: [
    { color: "purple", icon: "Search", title: "Comprehensive Needs Assessment", desc: "Detailed assessment of workforce demographics and financial objectives to recommend the right solution." },
    { color: "emerald", icon: "Settings", title: "Policy Selection and Customization", desc: "Evaluate and select the right policy based on coverage requirements, budget, and workforce size." },
    { color: "rose", icon: "Mic", title: "Clear Communication of Policy Terms", desc: "Transparent explanations of policy terms, exclusions, and claim procedures for complete clarity." },
    { color: "fuchsia", icon: "Heart", title: "Claims Support and Advocacy", desc: "We act as advocates to facilitate prompt claim settlement without unnecessary delays for families." },
    { color: "blue", icon: "RefreshCw", title: "Policy Reviews and Adjustments", desc: "Regular policy reviews to ensure continued relevance as organizations grow and workforce needs evolve." }
  ],
  benefitsTitle: "Why Choose Us for Group Term Insurance",
  benefitsFeatures: [
    { color: "rose", icon: "Shield", title: "Collective Financial Security", desc: "A strong financial safety net ensuring stability for employees and their families during challenging times." },
    { color: "fuchsia", icon: "TrendingUp", title: "Affordable Coverage", desc: "Provide substantial life insurance coverage at highly competitive premium rates through group advantages." },
    { color: "blue", icon: "Smile", title: "Enhanced Employee Benefits", desc: "Strengthens your benefits package, improves satisfaction, supports talent retention, and shows care." },
    { color: "orange", icon: "Lock", title: "Simplified Enrollment", desc: "Minimal documentation and limited medical underwriting make enrollment quick and accessible." }
  ],
  ctaTitle: "Strength in Numbers, Security for All",
  ctaDesc: "At Lambach Insurance Brokers, we believe every organization has a responsibility to safeguard its workforce's financial future. Partner with us today and discover how Group Term Insurance can enhance employee welfare, strengthen organizational resilience, and deliver lasting peace of mind for everyone involved."
};

fs.writeFileSync('app/life/group-term/page.tsx', pageTemplate(groupTermData), 'utf8');

const endowmentData = {
  metaTitle: "Endowment Plans | Life Insurance & Savings | Lambach Insurance Brokers",
  metaDesc: "Endowment Plans offer robust life insurance and systematic wealth creation. Secure long-term financial stability with Lambach Insurance Brokers.",
  heroTitle: "Endowment Plans",
  heroDesc: "Systematic Savings and Robust Financial Protection",
  heroImgSrc: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=1200",
  heroImgAlt: "Endowment Plans representation",
  introOvertitle: "Overview",
  introTitle: "Life Insurance and Savings Combined",
  introParas: [
    "Endowment Plans uniquely combine life insurance protection with a systematic savings component, ensuring that you achieve your long-term financial goals safely. These plans act as a reliable path toward financial stability.",
    "By offering a lump sum payout either upon survival at the end of the term or in the event of unfortunate demises, an endowment policy guarantees financial stability and predictable growth over the policy term.",
    "At Lambach Insurance Brokers, we assist clients in carefully evaluating their savings potential and aligning it with suitable Endowment Plans for maximum benefits."
  ],
  introFeatures: [
    { color: "blue", icon: "CheckCircle2", title: "Dual Benefit Structure", desc: "Uniquely combines secure life insurance protection with a reliable, guaranteed savings component." },
    { color: "orange", icon: "ShieldCheck", title: "Guaranteed Maturity Benefit", desc: "Ensures a substantial sum assured alongside accrued bonuses upon completing the full policy term." },
    { color: "purple", icon: "FileText", title: "Systematic Wealth Creation", desc: "Encourages highly disciplined saving habits leading to substantial long-term financial accumulation safely." },
    { color: "emerald", icon: "Activity", title: "Death Benefit Protection", desc: "Guarantees comprehensive financial security for surviving dependents in case of the policyholder's demise." }
  ],
  roleTitle: "Insurance Broker Services",
  roleFeatures: [
    { color: "purple", icon: "Search", title: "Comprehensive Financial Assessment", desc: "Detailed evaluation of your financial goals to recommend appropriate Endowment capabilities safely." },
    { color: "emerald", icon: "Settings", title: "Policy Selection and Customization", desc: "Careful comparison of market offerings to select plans meeting specific wealth creation targets." },
    { color: "rose", icon: "Mic", title: "Clear Communication of Coverage", desc: "Transparent explanation of plan structures, maturity benefits, and bonus accumulation methodologies." },
    { color: "fuchsia", icon: "Heart", title: "Claims and Maturity Assistance", desc: "Dedicated support for processing maturity claims quickly or assisting bereaved families successfully." },
    { color: "blue", icon: "RefreshCw", title: "Regular Portfolio Reviews", desc: "Periodic assessments to confirm your investment strategy aligns with changing lifestyle requirements." }
  ],
  benefitsTitle: "Why Choose Us for Endowment Plans",
  benefitsFeatures: [
    { color: "rose", icon: "Shield", title: "Long-Term Financial Security", desc: "A thoroughly reliable path toward financial stability combined directly with life protection." },
    { color: "fuchsia", icon: "TrendingUp", title: "Predictable Wealth Growth", desc: "Provides absolute financial stability and predictable growth over the policy term safely." },
    { color: "blue", icon: "Smile", title: "Dedicated Support Team", desc: "Unwavering assistance throughout the policy lifecycle to guarantee maximum customer satisfaction." },
    { color: "orange", icon: "Lock", title: "Absolute Peace of Mind", desc: "Focus completely on your present goals knowing your eventual financial stability remains thoroughly assured." }
  ],
  ctaTitle: "Secure Future Horizons",
  ctaDesc: "An Endowment Plan is an exemplary foundational asset for those prioritizing both wealth creation and family safety. Start planning your prosperous future today."
};

fs.writeFileSync('app/life/endowment/page.tsx', pageTemplate(endowmentData), 'utf8');

const pensionData = {
  metaTitle: "Pension Plans | Retirement Security | Lambach Insurance Brokers",
  metaDesc: "Pension Plans ensure a steady income stream post-retirement. Experience Guaranteed Growth and Stability with Lambach Insurance Brochures strategies.",
  heroTitle: "Pension Plans",
  heroDesc: "Reliable Financial Security for Your Golden Years",
  heroImgSrc: "https://images.unsplash.com/photo-1544377193-33dce4ea9a87?auto=format&fit=crop&q=80&w=1200",
  heroImgAlt: "Pension Plans representation",
  introOvertitle: "Overview",
  introTitle: "Securing Your Independence Post-Retirement",
  introParas: [
    "Pension Plans are specifically structured retirement solutions designed to generate a dependable, steady income stream once your active professional career concludes.",
    "These solutions are crucial for maintaining your envisioned lifestyle without financial stress. Many plans provide guaranteed returns for predictable savings accumulation.",
    "Our expert advisors ensure you select a tailored pension strategy effectively bridging the gap between your current savings and future retirement needs safely."
  ],
  introFeatures: [
    { color: "blue", icon: "CheckCircle2", title: "Steady Retirement Income", desc: "Guarantees a regular, predictable income stream to comfortably cover daily post-retirement expenses." },
    { color: "orange", icon: "ShieldCheck", title: "Accumulation and Annuity Phases", desc: "Features structured savings phases followed directly by reliable consistent payout structures safely." },
    { color: "purple", icon: "FileText", title: "Tax Efficiency", desc: "Many plans offer substantial, legally sanctioned tax advantages encouraging optimal early retirement planning." },
    { color: "emerald", icon: "Activity", title: "Vesting Flexibility", desc: "Provides considerable flexibility regarding payout structures, vesting ages, and lump-sum withdrawal options." }
  ],
  roleTitle: "Insurance Broker Services",
  roleFeatures: [
    { color: "purple", icon: "Search", title: "Retirement Goal Assessment", desc: "Thoroughly assessing your current lifestyle expectations to firmly identify suitable retirement solutions." },
    { color: "emerald", icon: "Settings", title: "Tailored Plan Selection", desc: "Objectively recommending Pension Plans matching your specific risk appetite and income requirements." },
    { color: "rose", icon: "Mic", title: "Transparent Coverage Communication", desc: "Clearly explaining annuity options, accumulation benefits, and vesting stipulations effectively." },
    { color: "fuchsia", icon: "Heart", title: "Comprehensive Support", desc: "Facilitating seamless documentation and assisting with eventual annuity commencement gracefully." },
    { color: "blue", icon: "RefreshCw", title: "Periodic Goal Reviews", desc: "Routinely revisiting retirement objectives to accommodate unexpected financial or personal changes safely." }
  ],
  benefitsTitle: "Why Choose Us for Pension Plans",
  benefitsFeatures: [
    { color: "rose", icon: "Shield", title: "Guaranteed Growth and Stability", desc: "Providing firmly reliable income guarantees designed perfectly for a completely stress-free retirement." },
    { color: "fuchsia", icon: "TrendingUp", title: "Extensive Provider Network", desc: "Grants exclusive access to leading industry providers ensuring maximum selection flexibility." },
    { color: "blue", icon: "Smile", title: "Dedicated Policy Administration", desc: "Ongoing, diligent support managing everything from initial enrollment to eventual payouts safely." },
    { color: "orange", icon: "Lock", title: "Absolute Retirement Confidence", desc: "Spend your golden years comfortably knowing your comprehensive financial needs are expertly secured." }
  ],
  ctaTitle: "Prepare for a Golden Future",
  ctaDesc: "Don't leave your retirement to chance. Establish a robust Pension Plan today to guarantee comfortable independence when you finally stop working."
};

fs.writeFileSync('app/life/pension/page.tsx', pageTemplate(pensionData), 'utf8');

const keymanData = {
  metaTitle: "Keyman Insurance | Corporate Stability | Lambach Insurance Brokers",
  metaDesc: "Keyman Insurance protects businesses from financial losses due to the loss of a vital employee. Ensure Business Continuity and Stability with Lambach.",
  heroTitle: "Keyman Insurance",
  heroDesc: "Securing Your Business's Most Valuable Assets",
  heroImgSrc: "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&q=80&w=1200",
  heroImgAlt: "Keyman Insurance representation",
  introOvertitle: "Overview",
  introTitle: "Protecting Corporate Continuity",
  introParas: [
    "Keyman Insurance perfectly safeguards a company against massive unforeseen financial losses resulting directly from the premature demise or critical disability of its most crucial personnel.",
    "A key executive represents immense specialized knowledge; losing them critically disrupts daily operations, profitability, and long-term growth. Keyman Insurance provides businesses with financial stability during such critical transitional phases.",
    "We specialize in designing structured policies serving as robust corporate safety nets, facilitating succession planning, and stabilization to maintain continuity."
  ],
  introFeatures: [
    { color: "blue", icon: "CheckCircle2", title: "Corporate Safety Net", desc: "Directly protects businesses from tremendous financial impacts following the tragic loss of vital executives." },
    { color: "orange", icon: "ShieldCheck", title: "Financial Stabilization", desc: "Provides necessary lump-sum capital required heavily for recruitment, training, and mitigating lost revenue." },
    { color: "purple", icon: "FileText", title: "Credit Confidence", desc: "Positively reassures institutional lenders and crucial investors about the company's long-term financial security." },
    { color: "emerald", icon: "Activity", title: "Succession Facilitation", desc: "Affords the essential time and robust monetary resources safely needed for smooth transitional periods." }
  ],
  roleTitle: "Insurance Broker Services",
  roleFeatures: [
    { color: "purple", icon: "Search", title: "Key Individual Assessment", desc: "Identifying vital corporate figures whose unexpected absence could definitively threaten overall profitability." },
    { color: "emerald", icon: "Settings", title: "Strategic Policy Formulation", desc: "Developing highly customized Keyman structures directly matching the organization's unique vulnerability profile." },
    { color: "rose", icon: "Mic", title: "Clear Stakeholder Communication", desc: "Detailing precisely how policy proceeds function mitigating specific transitional financial challenges." },
    { color: "fuchsia", icon: "Heart", title: "Expedited Claims Handling", desc: "Ensuring extraordinarily swift settlement processing exclusively to rapidly inject stabilizing liquidity." },
    { color: "blue", icon: "RefreshCw", title: "Regular Valuation Updates", desc: "Constantly adjusting coverage parameters ensuring protection levels accurately reflect expanding corporate value." }
  ],
  benefitsTitle: "Why Choose Us for Keyman Insurance",
  benefitsFeatures: [
    { color: "rose", icon: "Shield", title: "Business Continuity and Stability", desc: "Keyman Insurance provides businesses with financial stability, maintaining complete foundational integrity." },
    { color: "fuchsia", icon: "TrendingUp", title: "Exceptional Corporate Protection", desc: "Safeguards daily operations, organizational profitability, and essential systemic long-term growth safely." },
    { color: "blue", icon: "Smile", title: "Expert Advisory Services", desc: "Providing invaluable, deeply experienced guidance securely navigating complex corporate insurance frameworks." },
    { color: "orange", icon: "Lock", title: "Corporate Confidence", desc: "Enables ambitious business expansion bravely, completely supported by resilient, structured contingency planning." }
  ],
  ctaTitle: "Safeguard Corporate Valuables",
  ctaDesc: "Your visionary leaders drive unprecedented success; their sudden absence shouldn't derail it. Empower your corporate longevity actively with customized Keyman coverage."
};

fs.writeFileSync('app/life/keyman/page.tsx', pageTemplate(keymanData), 'utf8');
