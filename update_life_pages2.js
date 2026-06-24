const fs = require('fs');
const content = {
  term: {
    title: 'Term Insurance',
    metaTitle: 'Term Insurance | Affordable Life Cover | Lambach Insurance Brokers',
    metaDesc: 'Term Insurance provides straightforward, cost-effective life insurance protection. Secure your family’s financial future with Lambach Insurance Brokers.',
    heroDesc: 'Straightforward and Affordable Life Insurance Protection',
    imageSrc: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&q=80&w=1200',
    overviewHeading: 'Safeguarding Futures Through Financial Protection',
    overviewText: [
      'Term Insurance is one of the simplest and most cost-effective forms of life insurance, designed to provide financial protection for a specified period. It offers a high sum assured at an affordable premium, ensuring that your loved ones remain financially secure in the event of an unforeseen loss. Whether you are a working professional, business owner, parent, or primary income earner, Term Insurance serves as a vital financial safety net.',
      'Term Insurance forms the foundation of a strong financial plan by providing comprehensive life coverage and peace of mind. In today&apos;s unpredictable world, securing the financial future of your family has become more important than ever. A well-structured Term Insurance policy ensures that your dependents are protected against financial hardship arising from the loss of the primary income earner.',
      'At Lambach Insurance Brokers, we work closely with clients to identify their insurance needs and recommend suitable coverage that helps safeguard their family&apos;s future.'
    ],
    featuresHeading: 'Key Elements of Term Insurance',
    features: [
      { title: 'Legally Binding Contract', desc: 'The policy clearly outlines the coverage period, premium obligations, exemptions, and benefits ensuring transparency.' },
      { title: 'Financial Protection for Your Family', desc: 'Pays a pre-determined sum assured to the nominated beneficiary to help manage essential expenses and maintain their lifestyle.' },
      { title: 'Flexible Premium Payment Options', desc: 'Choose a payment structure (monthly, quarterly, annual) that aligns with your financial planning and budget.' },
      { title: 'Death Benefit Protection', desc: 'Financial support that can help cover household expenses, loan repayments, children’s education, and healthcare costs.' },
      { title: 'Nomination Facility', desc: 'Allows policyholders to nominate beneficiaries to efficiently transfer financial benefits according to their wishes.' }
    ],
    roleHeading: 'Role of Insurance Brokers',
    roles: [
      { title: 'Comprehensive Needs Assessment', desc: 'We assess income, liabilities, and objectives to recommend appropriate Term Insurance coverage.' },
      { title: 'Policy Selection and Customization', desc: 'We help clients compare available options and select solutions that best meet protection requirements.' },
      { title: 'Clear Communication of Policy Terms', desc: 'Detailed explanations of policy features, exclusions, and optional riders for complete transparency.' },
      { title: 'Claims Support and Advocacy', desc: 'We assist beneficiaries with documentation and insurer communication for a smooth settlement experience.' },
      { title: 'Regular Policy Reviews and Updates', desc: 'Periodic policy reviews to ensure coverage remains adequate as life circumstances evolve over time.' }
    ],
    benefitsHeading: 'Benefits of Term Insurance Through Us',
    benefits: [
      { title: 'Financial Security for Loved Ones', desc: 'Provides a safety net that helps families maintain stability and meet future obligations in the absence of the primary earner.' },
      { title: 'Tailored Insurance Solutions', desc: 'Customized solutions that align with personal goals, family requirements, and budget considerations.' },
      { title: 'Dedicated Claims Assistance', desc: 'Proactive support to ensure beneficiaries receive timely assistance throughout the claim settlement process.' },
      { title: 'Peace of Mind and Confidence', desc: 'Focus on your present goals knowing your loved ones will have financial support when they need it most.' }
    ],
    closingHeading: 'Protecting Tomorrow, Today',
    closingText: 'At Lambach Insurance Brokers, we believe that financial security begins with proper planning and protection. Term Insurance is one of the most effective ways to safeguard your family&apos;s future. Whether you are purchasing life insurance for the first time or reviewing your existing coverage, we are here to help you make informed decisions with confidence.'
  },
  group: {
    title: 'Group Term Insurance',
    metaTitle: 'Group Term Insurance | Corporate Employee Benefits | Lambach Insurance Brokers',
    metaDesc: 'Group Term Insurance is a valuable employee benefit providing financial protection to families. Enhance your corporate benefits with Lambach Insurance.',
    heroDesc: 'Comprehensive Protection for Collective Security',
    imageSrc: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200',
    overviewHeading: 'Valuable Protection for Your Workforce',
    overviewText: [
      'Group Term Insurance is a valuable employee benefit that provides financial protection to employees&apos; families in the event of an untimely death. It offers affordable life insurance coverage for groups, helping organizations enhance their employee benefits package while promoting workforce well-being, financial security, and long-term peace of mind.',
      'At Lambach Insurance Brokers, we understand the importance of protecting the financial future of employees and their families. Our Group Term Insurance solutions are designed to provide comprehensive life insurance coverage for organizations of all sizes, ensuring employees receive meaningful protection.',
      'By offering financial support to beneficiaries in the event of a covered employee&apos;s death, organizations can foster trust, loyalty, and confidence among their workforce.'
    ],
    featuresHeading: 'Key Features of Group Term Insurance',
    features: [
      { title: 'Collective Coverage', desc: 'Provides life insurance to a group, enabling businesses to offer valuable coverage at a lower cost.' },
      { title: 'Death Benefit', desc: 'A lump-sum death benefit is paid to the nominated beneficiary to manage living expenses and liabilities.' },
      { title: 'Affordable Premiums', desc: 'Since risk is distributed, premiums are generally more affordable than individual life insurance policies.' },
      { title: 'No Medical Underwriting', desc: 'Many plans do not require extensive medical examinations, allowing quick and easy access to coverage.' },
      { title: 'Employer Contributions', desc: 'Employers often contribute toward premium payments, making it an attractive compensation strategy benefit.' },
      { title: 'Portability Options', desc: 'Certain plans allow employees to continue coverage even after leaving the organization.' },
      { title: 'Flexible Coverage Amounts', desc: 'Customize coverage levels for different management levels or departments based on responsibilities.' }
    ],
    roleHeading: 'Insurance Broker Services',
    roles: [
      { title: 'Comprehensive Needs Assessment', desc: 'Detailed assessment of workforce demographics and financial objectives to recommend the right solution.' },
      { title: 'Policy Selection and Customization', desc: 'Evaluate and select the right policy based on coverage requirements, budget, and workforce size.' },
      { title: 'Clear Communication of Policy Terms', desc: 'Transparent explanations of policy terms, exclusions, and claim procedures for complete clarity.' },
      { title: 'Claims Support and Advocacy', desc: 'We act as advocates to facilitate prompt claim settlement without unnecessary delays for families.' },
      { title: 'Policy Reviews and Adjustments', desc: 'Regular policy reviews to ensure continued relevance as organizations grow and workforce needs evolve.' }
    ],
    benefitsHeading: 'Why Choose Us for Group Term Insurance',
    benefits: [
      { title: 'Collective Financial Security', desc: 'A strong financial safety net ensuring stability for employees and their families during challenging times.' },
      { title: 'Affordable Coverage', desc: 'Provide substantial life insurance coverage at highly competitive premium rates through group advantages.' },
      { title: 'Enhanced Employee Benefits', desc: 'Strengthens your benefits package, improves satisfaction, supports talent retention, and shows care.' },
      { title: 'Simplified Enrollment', desc: 'Minimal documentation and limited medical underwriting make enrollment quick and accessible.' }
    ],
    closingHeading: 'Strength in Numbers, Security for All',
    closingText: 'At Lambach Insurance Brokers, we believe every organization has a responsibility to safeguard its workforce&apos;s financial future. Partner with us today and discover how Group Term Insurance can enhance employee welfare, strengthen organizational resilience, and deliver lasting peace of mind for everyone involved.'
  },
  endowment: {
    title: 'Endowment Plans',
    metaTitle: 'Endowment Plans | Life Insurance & Wealth Creation | Lambach Insurance Brokers',
    metaDesc: 'Endowment Plans offer robust life insurance and systematic wealth creation. Secure long-term financial stability with Lambach Insurance Brokers.',
    heroDesc: 'Building Financial Security and Long-Term Wealth',
    imageSrc: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80&w=1200',
    overviewHeading: 'Life Insurance and Savings Combined',
    overviewText: [
      'Endowment Plans are a popular life insurance and savings solution designed to provide both financial protection and long-term wealth creation. These plans combine life insurance coverage with a disciplined savings mechanism, helping individuals achieve important financial goals while securing their family&apos;s future.',
      'At Lambach Insurance Brokers, our Endowment and Savings Plans are thoughtfully designed to help individuals create a strong financial foundation. These plans offer the perfect balance between savings, investment growth, and family security, providing guaranteed benefits along with life cover.',
      'Whether planning for education, home ownership, retirement, or wealth accumulation, Endowment Plans offer a structured and reliable path toward financial stability.'
    ],
    featuresHeading: 'Key Features of Endowment and Savings Plans',
    features: [
      { title: 'Dual Purpose Protection and Savings', desc: 'Offers life insurance coverage alongside a systematic savings program to plan for future obligations.' },
      { title: 'Guaranteed Returns', desc: 'Provides guaranteed returns on premiums paid, offering stability and predictable growth over the policy term.' },
      { title: 'Maturity Benefit', desc: 'A lump-sum payout at maturity consisting of the sum assured and accumulated bonuses for major milestones.' },
      { title: 'Life Insurance Coverage', desc: 'Ensures that beneficiaries receive a financial payout to secure their future in case of the insured&apos;s demise.' },
      { title: 'Flexible Premium Payment Options', desc: 'Align payments with your financial capacity through monthly, quarterly, semi-annual, or annual options.' },
      { title: 'Bonuses and Dividends', desc: 'Participation in insurer profits through bonuses that enhance the overall policy value over time.' },
      { title: 'Partial Withdrawals and Loan Facility', desc: 'Access liquidity during emergencies without compromising long-term financial objectives.' }
    ],
    roleHeading: 'Insurance Broker Services',
    roles: [
      { title: 'Comprehensive Financial Assessment', desc: 'Evaluate financial goals, family responsibilities, and future aspirations to recommend the right plan.' },
      { title: 'Policy Selection and Customization', desc: 'Evaluate various plans based on coverage, savings objectives, premium affordability, and investment horizon.' },
      { title: 'Clear Communication of Policy Terms', desc: 'Transparent explanations of policy benefits, exclusions, maturity values, and bonuses.' },
      { title: 'Claims Support and Advocacy', desc: 'End-to-end assistance for beneficiaries to ensure timely settlement and reduced complexities.' },
      { title: 'Regular Policy Reviews', desc: 'Periodic tracking to ensure your policy aligns with changing needs, and to recommend valid modifications.' }
    ],
    benefitsHeading: 'Why Choose Us for Endowment Plans',
    benefits: [
      { title: 'Wealth Accumulation', desc: 'Encourages disciplined planning with regular savings, guaranteed returns, and bonus opportunities.' },
      { title: 'Financial Security for Your Family', desc: 'Provides peace of mind knowing your loved ones are protected by robust life insurance coverage.' },
      { title: 'Flexibility and Liquidity', desc: 'Convenient access to funds during important life events through policy loans and withdrawal facilities.' },
      { title: 'Attractive Maturity Benefits', desc: 'Substantial payouts help achieve major objectives such as children&apos;s education, marriage, or retirement.' }
    ],
    closingHeading: 'Invest in Tomorrow, Protect Today',
    closingText: 'Successful financial planning combines protection, discipline, and long-term vision. Through expert guidance, customized solutions, and proactive policy management, we help you create a strong financial foundation that delivers lasting security. Partner with Lambach Insurance Brokers today to secure a prosperous future.'
  },
  pension: {
    title: 'Pension Plan',
    metaTitle: 'Pension Plan | Retirement Income Solutions | Lambach Insurance Brokers',
    metaDesc: 'A Pension Plan guarantees a secure financial future and steady income stream during retirement. Build your retirement wealth with Lambach Insurance.',
    heroDesc: 'Crafting a Secure Tomorrow with Disciplined Savings',
    imageSrc: 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&q=80&w=1200',
    overviewHeading: 'Essential Component of Retirement Planning',
    overviewText: [
      'A Pension Plan is an essential component of retirement planning, helping individuals build a secure financial future through disciplined savings and long-term investments. It provides a structured approach to accumulating retirement wealth while ensuring a steady income stream during retirement.',
      'At Lambach Insurance Brokers, we understand that retirement planning is one of the most important financial decisions an individual can make. By combining long-term wealth accumulation, retirement income generation, and financial protection, these plans help you achieve your retirement goals with confidence.',
      'Pension Plans are designed to help individuals maintain their lifestyle, achieve financial independence, and enjoy peace of mind during their post-retirement years.'
    ],
    featuresHeading: 'Key Features of Retirement and Pension Plans',
    features: [
      { title: 'Long-Term Wealth Creation', desc: 'Systematically build a retirement corpus over your working years to serve as a financial cushion.' },
      { title: 'Regular Pension Income', desc: 'A steady stream of income after retirement to cover daily expenses, healthcare costs, and travel plans.' },
      { title: 'Flexible Premium Payment Options', desc: 'Choose a premium payment schedule (monthly, quarterly, or annual) based on your financial capacity.' },
      { title: 'Guaranteed Returns', desc: 'Many plans provide guaranteed returns for predictable growth, reducing exposure to market fluctuations.' },
      { title: 'Lump Sum Retirement Benefit', desc: 'Receive a lump sum consisting of the accumulated corpus and bonuses at maturity or retirement age.' },
      { title: 'Life Insurance Protection', desc: 'Provides a death benefit to nominees in case of the policyholder&apos;s demise during the policy term.' },
      { title: 'Flexible Payout Options', desc: 'Choose how benefits are received—lump sum, monthly pension, or a combination of both.' }
    ],
    roleHeading: 'Insurance Broker Services',
    roles: [
      { title: 'Comprehensive Retirement Needs Assessment', desc: 'Assess retirement goals, income expectations, and family commitments to tailor the right solution.' },
      { title: 'Policy Selection and Customization', desc: 'Align your choices with your desired retirement age, expected pension, and investment horizon.' },
      { title: 'Clear Communication of Policy Terms', desc: 'Provide clear insights into retirement income options, maturity values, bonuses, and payout structures.' },
      { title: 'Claims Support and Advocacy', desc: 'Dedicated team support to ensure smooth claim settlement and guidance during challenging times.' },
      { title: 'Regular Policy Reviews and Adjustments', desc: 'Periodic reviews to ensure your plan remains aligned with changing financial circumstances and expectations.' }
    ],
    benefitsHeading: 'Why Choose Us for Retirement Plans',
    benefits: [
      { title: 'Financial Security During Retirement', desc: 'Create a reliable income stream that supports your post-retirement lifestyle and ensures peace of mind.' },
      { title: 'Flexible Retirement Income Options', desc: 'Tailor your payout structure, including regular pension income, lump sum withdrawals, or both.' },
      { title: 'Guaranteed Growth and Stability', desc: 'Safeguard your retirement savings from uncertainty with guaranteed returns and wealth accumulation.' },
      { title: 'Family Protection Through Life Coverage', desc: 'Ensure your family remains financially secure in your absence to safeguard their future goals.' }
    ],
    closingHeading: 'Securing Your Tomorrow, Today',
    closingText: 'At Lambach Insurance Brokers, we believe retirement should be a time of freedom, comfort, and financial confidence. Through customized retirement planning solutions, expert guidance, and long-term wealth-building strategies, we help you prepare for the future you deserve. Target financial independence today.'
  },
  keyman: {
    title: 'Keyman Insurance',
    metaTitle: 'Keyman Insurance | Business Protection | Lambach Insurance Brokers',
    metaDesc: 'Keyman Insurance protects your business against the financial consequences of losing a key executive or leader. Safeguard your company with Lambach.',
    heroDesc: 'Safeguarding Business Leadership and Operational Continuity',
    imageSrc: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
    overviewHeading: 'Protecting Your Most Valuable Human Assets',
    overviewText: [
      'Keyman Insurance, also known as Key Person Insurance, is a specialized business insurance solution designed to protect organizations against the financial consequences of losing a key employee, executive, founder, or business leader.',
      'These individuals play a crucial role in driving business growth, maintaining client relationships, generating revenue, and supporting strategic decision-making. The unexpected loss of a key professional can significantly impact business operations, profitability, and long-term growth.',
      'Keyman Insurance provides businesses with financial stability and continuity during challenging times by offering a safety net against unforeseen events such as death or critical illness. At Lambach Insurance Brokers, we help organizations structure customized insurance solutions tailored to their unique business needs.'
    ],
    featuresHeading: 'Key Features of Keyman Insurance',
    features: [
      { title: 'Financial Protection for Businesses', desc: 'Lump-sum benefit to manage revenue loss, operational disruptions, and unexpected expenses.' },
      { title: 'Identification of Key Personnel', desc: 'Work with our specialists to identify employees whose expertise is critical to organizational success.' },
      { title: 'Business Continuity Support', desc: 'Provides funds for recruitment, training, succession planning, and stabilization to maintain continuity.' },
      { title: 'Loan and Debt Protection', desc: 'Funds can be structured to settle business loans or outstanding debts, protecting the credit standing.' },
      { title: 'Customized Coverage Solutions', desc: 'Tailored based on company size, revenue dependency, industry sector, and leadership structure.' },
      { title: 'Protection Against Critical Illness', desc: 'Coverage for specified critical illnesses, ensuring support when a leader cannot perform their duties.' },
      { title: 'Stakeholder and Investor Confidence', desc: 'Demonstrates proactive risk management, enhancing confidence among investors, lenders, and partners.' }
    ],
    roleHeading: 'Insurance Broker Services',
    roles: [
      { title: 'Key Person Assessment', desc: 'Evaluate individuals whose contributions are critical to operations to form an effective strategy.' },
      { title: 'Policy Selection and Customization', desc: 'Select policies based on organizational structure, financial exposure, and continuity objectives.' },
      { title: 'Clear Communication of Policy Terms', desc: 'Transparent explanations of coverage benefits, exclusions, premium structures, and claim procedures.' },
      { title: 'Claims Support and Advocacy', desc: 'Advocate on your behalf for prompt settlements and minimal business disruption during challenging times.' },
      { title: 'Ongoing Policy Reviews', desc: 'Ensure coverage remains aligned with organizational growth, leadership changes, and emerging risks.' }
    ],
    benefitsHeading: 'Benefits of Keyman Insurance Through Us',
    benefits: [
      { title: 'Enhanced Financial Security', desc: 'Immediate financial support to mitigate revenue losses and offset the absence of a key employee.' },
      { title: 'Business Continuity and Stability', desc: 'Resources needed to continue operations, recruit replacements, and execute strategic plans smoothly.' },
      { title: 'Loan and Liability Protection', desc: 'Insurance proceeds settle business obligations, helping preserve cash flow and financial credibility.' },
      { title: 'Expert Risk Management Guidance', desc: 'Strategic advice that helps strengthen the overall risk management framework of your business.' }
    ],
    closingHeading: 'Guardians of Business Continuity',
    closingText: 'At Lambach Insurance Brokers, we recognize that people are often a company’s most valuable asset. Our Keyman Insurance solutions are designed to safeguard businesses against financial risks associated with the loss of critical personnel. Secure your organization against unforeseen challenges with tailored coverage today.'
  }
};

const iconMap = {
  features: ['CheckCircle2', 'ShieldCheck', 'FileText', 'Activity', 'Award', 'Globe', 'Users', 'Briefcase'],
  roles: ['Search', 'Settings', 'Mic', 'Heart', 'RefreshCw'],
  benefits: ['Shield', 'TrendingUp', 'Smile', 'Lock']
};

function generatePage(data) {
  const allIcons = new Set(['ArrowRight', 'ShieldCheck', ...iconMap.features, ...iconMap.roles, ...iconMap.benefits]);
  const imports = Array.from(allIcons).join(', ');

  return `import { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import CTAContact from '@/components/CTAContact';
import { ${imports} } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "${data.metaTitle}",
  description: "${data.metaDesc}",
};

export default function Page() {
  return (
    <>
      <PageHero 
        title="${data.title}" 
        description="${data.heroDesc}"
        imageSrc="${data.imageSrc}"
        imageAlt="${data.title} representation"
      />

      {/* Intro & Features Section */}
      <section className="section-gap bg-white">
        <div className="layout-container">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            <div className="w-full lg:w-5/12 relative">
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] bg-slate-100 ring-1 ring-slate-100 shadow-xl">
                <Image 
                  src="${data.imageSrc}" 
                  alt="${data.title} protection" 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-700" 
                  referrerPolicy="no-referrer" 
                />
              </div>
              
              <div className="absolute -bottom-8 -right-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl hidden md:block max-w-[260px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] ring-1 ring-slate-100 border border-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary text-white p-3 rounded-xl shadow-sm">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                     <span className="font-bold text-brand-marine block text-lg">Comprehensive</span>
                     <span className="text-xs font-medium text-slate-500">Protection</span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">Trusted coverage designed to secure your financial future.</p>
              </div>
            </div>

            <div className="w-full lg:w-7/12">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-primary px-3 py-1 rounded-full mb-4 text-xs font-bold uppercase tracking-widest">
                Overview
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-marine mb-8 leading-tight">
                ${data.overviewHeading}
              </h2>
              <div className="space-y-4 mb-12 text-lg text-slate-600 leading-relaxed">
                ${data.overviewText.map((t) => `<p>${t}</p>`).join('\n                ')}
              </div>
              
              <div className="space-y-6">
                ${data.features.map((f, i) => `
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors duration-300 shadow-sm border border-slate-100">
                    <${iconMap.features[i % iconMap.features.length]} className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-brand-marine mb-2">${f.title}</h4>
                    <p className="text-slate-600 leading-relaxed max-w-md">${f.desc}</p>
                  </div>
                </div>`).slice(0, 3).join('\n                ')}
              </div>

               <div className="mt-12 pt-10 border-t border-slate-100">
                <Link href="/who-we-are#contact-us" className="inline-flex bg-brand-marine text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-slate-800 transition-colors active:scale-95 items-center gap-2">
                  Talk to an Expert <ArrowRight className="w-5 h-5"/>
                </Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role of Brokers Section */}
      <section className="section-gap bg-slate-50">
        <div className="layout-container">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-primary px-3 py-1 rounded-full mb-4 text-xs font-bold uppercase tracking-widest">
              Our Expertise
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-marine mb-4">
              ${data.roleHeading}
            </h2>
            <p className="text-slate-600">
              Professional guidance and dedicated support to help you navigate through your insurance solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${data.roles.map((r, i) => `
            <div className="bg-white p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 ring-1 ring-slate-100 hover:ring-blue-100 hover:ring-2 border border-transparent">
              <div className="flex items-start justify-between mb-8 gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-brand-marine mb-3">${r.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    ${r.desc}
                  </p>
                </div>
                <div className="w-16 h-16 flex-shrink-0 bg-blue-50 rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:scale-105 transition-all">
                  <${iconMap.roles[i % iconMap.roles.length]} className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
              </div>
            </div>`).join('')}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-gap bg-white">
        <div className="layout-container">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-primary px-3 py-1 rounded-full mb-4 text-xs font-bold uppercase tracking-widest">
              Why Choose Us
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-marine mb-4">
              ${data.benefitsHeading}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
             ${data.benefits.map((b, i) => `
              <div className="flex flex-col items-center text-center p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:shadow-lg transition-all group hover:bg-white hover:ring-1 hover:ring-slate-200">
                <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform shadow-sm">
                  <${iconMap.benefits[i % iconMap.benefits.length]} className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-brand-marine mb-4">${b.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">${b.desc}</p>
              </div>
             `).join('')}
          </div>
          
          <div className="mt-24 bg-gradient-to-br from-brand-marine to-slate-800 p-12 lg:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl"></div>
            
            <div className="relative z-10 md:w-2/3">
              <div className="inline-flex items-center gap-2 bg-white/10 text-white px-3 py-1 rounded-full mb-6 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                Secure Your Future
              </div>
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">${data.closingHeading}</h3>
              <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-xl">
                ${data.closingText}
              </p>
              
              <Link href="/who-we-are#contact-us" className="inline-flex bg-primary hover:bg-primary-variant text-white px-8 py-4 rounded-xl font-semibold items-center gap-2 shadow-lg hover:shadow-xl transition-all active:scale-95">
                Contact Our Advisors
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <CTAContact />
    </>
  );
}
`;
}

// Generate files
['term', 'group', 'endowment', 'pension', 'keyman'].forEach(key => {
  const folderPath = 'app/life/' + (key === 'group' ? 'group-term' : key);
  fs.mkdirSync(folderPath, { recursive: true });
  fs.writeFileSync(folderPath + '/page.tsx', generatePage(content[key]));
});
console.log('Successfully generated all enhanced pages.');
