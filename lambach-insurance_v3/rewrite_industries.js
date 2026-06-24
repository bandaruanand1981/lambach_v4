const fs = require('fs');

const data = {
  chemical: {
    path: 'app/industries/chemical/page.tsx',
    metadataTitle: 'Chemical & Pharmaceutical Insurance | Lambach Insurance Brokers',
    metadataDesc: 'Tailored solutions for chemical and pharmaceutical sectors covering product liability, business interruption and property.',
    pageHeroTitle: "Chemical & Pharmaceutical Insurance",
    pageHeroDesc: "Tailored solutions for hazardous environments, product liability, and contamination.",
    heroImg: "https://images.unsplash.com/photo-1532187863486-abf9db090729?auto=format&fit=crop&q=80&w=1200",
    heroAlt: "Chemical and Pharmaceutical Industry Insurance Risk Management Solutions",
    introTitle: "Chemical & Pharmaceutical",
    introText: "The Chemical & Pharmaceutical sector is a dynamic industry that plays a pivotal role in the development of chemicals, pharmaceuticals, and related products.",
    sectionTitle: "Characterized by its complexity and innovation-driven nature",
    sectionText: "At Lambach Insurance Broker’s, we recognize the critical importance of the chemical and pharmaceutical sectors in advancing healthcare, innovation, and industrial progress. With the dynamic nature of these industries and the inherent risks involved in manufacturing, handling, and distributing chemicals and pharmaceuticals, it’s crucial for businesses to have comprehensive insurance coverage tailored to their unique needs. The insurance protection advantages here include preserving business continuity in the face of chemical spills, product recalls, or supply chain breakdowns, while addressing the stringent compliance and regulatory considerations standard in these sectors.",
    cardsTitle: "Tailored Coverage for the Chemical and Pharmaceutical Sector",
    cards: [
      { title: "Property Insurance", desc: "Coverage for manufacturing facilities, laboratories, warehouses, and assets against fire, explosion, natural disasters, and equipment breakdown.", icon: "Building" },
      { title: "Product Liability Insurance", desc: "Protection against claims from defective products, contamination, or adverse reactions. Includes legal defense and settlements.", icon: "ShieldAlert" },
      { title: "Business Interruption Insurance", desc: "Covers financial losses due to disruptions in manufacturing operations.", icon: "Activity" },
      { title: "Supply Chain Insurance", desc: "Protection against delays or interruptions in raw materials or logistics.", icon: "Truck" },
      { title: "Environmental Liability Insurance", desc: "Covers pollution incidents, environmental damage, cleanup costs, and legal liabilities.", icon: "Leaf" },
      { title: "Cyber Insurance", desc: "Protection against cyber threats, data breaches, and operational disruptions.", icon: "Lock" },
      { title: "R&D Insurance", desc: "Coverage for research, clinical trials, and experimental processes.", icon: "Target" },
      { title: "Professional Liability Insurance", desc: "Covers negligence, errors, or omissions in professional services.", icon: "Briefcase" },
      { title: "Cargo Insurance", desc: "Protection for goods in transit against theft, loss, or damage.", icon: "Ship" },
      { title: "Workers' Compensation Insurance", desc: "Covers employee medical expenses and lost wages due to workplace injuries.", icon: "Users" }
    ],
    closingTitle: "Advancing breakthroughs, ensuring well-being",
    closingText: "At Lambach Insurance Broker’s, we understand the complex risks faced by businesses in the chemical and pharmaceutical sectors. Our team is dedicated to delivering tailored insurance solutions that mitigate risks and safeguard your operations. Contact us today to learn more about our specialized offerings.",
    faqs: [
      { q: "What does Environmental Liability cover exactly?", a: "It provides protection against pollution incidents, clean-up costs, third-party bodily injury, and property damage arising from environmental contamination at your facilities." },
      { q: "Does Product Liability cover product recalls?", a: "Standard product liability covers third-party bodily injury and property damage, but a specialized Product Recall policy can be added to cover the costs associated with withdrawing a product from the market." },
      { q: "Are clinical trials covered under standard policies?", a: "No, clinical trials usually require specific R&D or Clinical Trial Liability insurance to properly address the unique exposures of human testing and novel pharmaceutical development." }
    ]
  },
  it: {
    path: 'app/industries/it/page.tsx',
    metadataTitle: 'Information Technology Insurance | Lambach Insurance Brokers',
    metadataDesc: 'Comprehensive risk management for technology firms, software developers, and IT service providers.',
    pageHeroTitle: "Information Technology Insurance",
    pageHeroDesc: "Comprehensive risk management for technology firms, software developers, and IT service providers.",
    heroImg: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
    heroAlt: "Cyber Liability and Information Technology Insurance Solutions",
    introTitle: "Information Technology",
    introText: "Information Technology is a broad field encompassing the use, development, and management of computer systems, software, networks, and information.",
    sectionTitle: "Protect against liabilities, and ensure the continuity of operations",
    sectionText: "In today’s digital age, the information technology (IT) sector plays a pivotal role in driving innovation, connectivity, and business transformation. However, with the rapid evolution of technology comes a wide range of risks and challenges that IT businesses must navigate. At Lambach Insurance Broker’s, we understand the unique needs of the IT sector and offer tailored insurance solutions to safeguard businesses against potential liabilities and disruptions. Strong risk management benefits the IT firm by preserving business continuity despite cyber incidents, while providing compliance against changing data privacy regulations globally.",
    cardsTitle: "Comprehensive Coverage for the Information Technology Sector",
    cards: [
      { title: "Cyber Liability Insurance", desc: "Protection against cyber risks, data breaches, and cyberattacks. Includes response costs, legal expenses, and regulatory coverage.", icon: "Shield" },
      { title: "Technology Errors and Omissions (E&O)", desc: "Covers claims of negligence, software issues, or service failures in IT operations.", icon: "Activity" },
      { title: "Data Privacy Insurance", desc: "Covers violations of data protection laws and privacy breaches.", icon: "Lock" },
      { title: "Network Security Insurance", desc: "Protection against hacking, malware, and denial-of-service attacks.", icon: "Server" },
      { title: "Intellectual Property Insurance", desc: "Covers IP infringement claims including patents, trademarks, and copyrights.", icon: "FileText" },
      { title: "Business Interruption Insurance", desc: "Covers financial losses from IT system downtime or cyber incidents.", icon: "Briefcase" },
      { title: "Technology Equipment Insurance", desc: "Covers physical damage or loss of IT hardware, servers, and infrastructure.", icon: "Laptop" },
      { title: "Media Liability Insurance", desc: "Covers claims related to digital content, defamation, or copyright issues.", icon: "Mic" },
      { title: "Professional Liability Insurance", desc: "Protects IT professionals against service-related claims and errors.", icon: "Users" },
      { title: "Fidelity Bonds", desc: "Covers losses due to employee fraud or dishonesty.", icon: "ShieldAlert" },
      { title: "Financial Institutions Bond (FI Bond)", desc: "Covers fraud, forgery, and cybercrime risks in financial systems.", icon: "Banknote" },
      { title: "Bankers Blanket Bond (BBB)", desc: "Protects against financial losses due to theft, fraud, or embezzlement.", icon: "Building" }
    ],
    closingTitle: "Guardians of the Digital Realm",
    closingText: "At Lambach Insurance Broker’s, we understand the complex risks faced by businesses in the information technology sector. Our team is dedicated to delivering tailored insurance solutions that mitigate risks and safeguard your digital assets. Contact us today to learn more about our specialized insurance offerings for the IT industry.",
    faqs: [
      { q: "What is the difference between Cyber Liability and Tech E&O?", a: "Tech E&O protects you if your product or service fails to perform as promised (e.g., a software bug causing a client financial loss), whereas Cyber Liability covers data breaches, hacks, and network security failures." },
      { q: "Is Intellectual Property covered by standard liability?", a: "Typically, general liability specifically excludes IP infringement. Specialized Intellectual Property or Media Liability insurance is needed for copyright or patent infringement claims." },
      { q: "Does Cyber Insurance cover ransomware payments?", a: "Many robust Cyber Liability policies include provisions to cover cyber extortion, including negotiation costs and ransomware payments, subject to the policy terms." }
    ]
  },
  aviation: {
    path: 'app/industries/aviation/page.tsx',
    metadataTitle: 'Aviation Insurance | Lambach Insurance Brokers',
    metadataDesc: 'Specialized policies covering aircraft hulls, aviation liability, and airport operations.',
    pageHeroTitle: "Aviation Insurance",
    pageHeroDesc: "Specialized policies covering aircraft hulls, aviation liability, and airport operations.",
    heroImg: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1200",
    heroAlt: "Aviation Insurance Solutions for Aircraft Owners and Aviation Businesses",
    introTitle: "Aviation Insurance",
    introText: "Aviation Insurance is a specialized form of coverage designed to protect aircraft owners, operators, and other aviation stakeholders from the financial risks associated with aviation-related activities.",
    sectionTitle: "Ensuring financial stability in the event of accidents or incidents",
    sectionText: "In the dynamic and intricate world of the aviation industry, unique risks require specialized solutions. At Lambach Insurance Brokers, our dedicated team of highly qualified experts provides a comprehensive approach to risk analysis and management tailored specifically for the aerospace sector. Our strength lies in years of experience, technical competence, and strong relationships with aviation markets, enabling us to deliver complete and effective solutions in the event of loss.",
    cardsTitle: "Aviation Insurance Coverage & Features",
    cards: [
      { title: "Hull All Risk", desc: "Comprehensive coverage for physical damage to aircraft, including total or partial loss due to accidents or other perils.", icon: "Plane" },
      { title: "Aviation Liability", desc: "Protection against third-party liabilities including bodily injury, property damage, and passenger liability.", icon: "ShieldAlert" },
      { title: "Airport Owners and Operators Liability", desc: "Coverage for liabilities arising from airport operations, including incidents occurring on airport premises.", icon: "Building" },
      { title: "Aviation Product Liability", desc: "Protection against claims arising from defects in aircraft or aerospace-related products.", icon: "Settings" },
      { title: "Comprehensive Risk Analysis", desc: "In-depth evaluation of operational, regulatory, and environmental risks within the aviation sector.", icon: "Search" },
      { title: "Tailored Risk Management Solutions", desc: "Customized strategies aligned with your specific aviation operations and business objectives.", icon: "Target" },
      { title: "Industry Expertise", desc: "Experienced professionals with deep knowledge of aviation and aerospace sectors.", icon: "Award" },
      { title: "Technical Competence", desc: "Strong understanding of aviation regulations and technological advancements.", icon: "Cpu" },
      { title: "Key Relationships with Markets", desc: "Ability to secure optimal coverage and negotiate competitive terms through established partnerships.", icon: "Handshake" }
    ],
    closingTitle: "Guardians of the Skies",
    closingText: "At Lambach Insurance Brokers, we are committed to elevating your aviation risk management with specialized expertise. Contact us today to explore tailored solutions that enhance the resilience and success of your aviation ventures. Why Choose Us? Specialized Team, Proactive Risk Mitigation, Global Perspective, and Claims Advocacy ensuring fast and fair claim resolution.",
    faqs: [
      { q: "Does Hull All Risk cover the aircraft while on the ground?", a: "Yes, standard Hull All Risk policies cover the aircraft both in-flight and on the ground, protecting against perils like fire, theft, windstorms, and taxiing accidents." },
      { q: "Are drone (UAV) operators covered under aviation policies?", a: "Drones require specialized UAV insurance which behaves similarly to traditional aviation insurance, covering physical damage to the drone and third-party liability." },
      { q: "How is aviation premium determined?", a: "Premiums are based on the aircraft make/model, pilot experience, usage (commercial vs. private), passenger capacity, and selected liability limits." }
    ]
  },
  agri: {
    path: 'app/industries/agri-business/page.tsx',
    metadataTitle: 'Agribusiness Insurance | Lambach Insurance Brokers',
    metadataDesc: 'Comprehensive risk management solutions for farming, livestock, and agricultural supply chains.',
    pageHeroTitle: "Agribusiness Insurance",
    pageHeroDesc: "Comprehensive risk management solutions for farming, livestock, and agricultural supply chains.",
    heroImg: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200",
    heroAlt: "Agribusiness Insurance Protection for Farms and Livestock Operations",
    introTitle: "Agri Business",
    introText: "Agribusiness insurance is crucial for the sustainability of farming operations, providing financial protection against the unpredictable nature of agriculture. It enables farmers to manage risks effectively, recover from setbacks, and continue contributing to the food supply chain.",
    sectionTitle: "Agriculture and Livestock Insurance",
    sectionText: "At Lambach Insurance Brokers, we understand the vital role agriculture and livestock play in sustaining communities and economies. Our mission is to support farmers, ranchers, and agribusinesses by providing comprehensive and customized insurance solutions. With our deep-rooted commitment to the agricultural sector, we stand as your reliable partner in mitigating risks and ensuring the prosperity of your farming endeavors. Under crop insurance, farmers are protected against uncertainties of crop yields arising from natural factors beyond their control. It is based on the principle of indemnity. Farmers pay a premium (which may be subsidized), and losses due to covered perils are compensated as per policy conditions.",
    cardsTitle: "Key Features of Lambach Agri Business Insurance",
    cards: [
      { title: "Crop Insurance", desc: "Protect crops from adverse weather, pests, diseases, and natural disasters. Provides financial security during uncertain seasons.", icon: "Sun" },
      { title: "Farm Property Insurance", desc: "Coverage for farm infrastructure, equipment, and buildings against fire, theft, vandalism, and unexpected damage.", icon: "Home" },
      { title: "Livestock Insurance", desc: "Protection against disease, accidents, theft, and natural calamities affecting livestock.", icon: "Activity" },
      { title: "Agribusiness Insurance", desc: "Tailored solutions covering liability, product risks, and business interruption for agribusiness operations.", icon: "Briefcase" }
    ],
    closingTitle: "Cultivating Confidence in Every Seed",
    closingText: "Empower your agricultural pursuits with the right insurance partner. Choose Lambach for comprehensive agriculture and livestock insurance solutions. Contact us today to discuss your unique needs and let us help you cultivate a secure and prosperous future.",
    faqs: [
      { q: "Is crop insurance mandatory?", a: "While not universally mandatory, it is highly recommended and often required if you are applying for agricultural loans or government assistance programs." },
      { q: "What does livestock insurance actually cover?", a: "It typically covers the death of livestock due to natural causes, accidents, diseases, or natural disasters, providing a financial safety net for ranchers and farmers." },
      { q: "Can farm equipment be insured separately?", a: "Yes, specialized mobile agricultural equipment insurance can cover tractors, combines, and attachments for physical damage both on and off your premises." }
    ]
  },
  entertainment: {
    path: 'app/industries/entertainment/page.tsx',
    metadataTitle: 'Entertainment Insurance | Lambach Insurance Brokers',
    metadataDesc: 'Specialized insurance coverage for film production, events, and the entertainment industry.',
    pageHeroTitle: "Entertainment Insurance",
    pageHeroDesc: "Specialized insurance coverage for film production, events, and the entertainment industry.",
    heroImg: "https://images.unsplash.com/photo-1540039155733-d730a53ffb46?auto=format&fit=crop&q=80&w=1200",
    heroAlt: "Entertainment Insurance Solutions for Events Productions and Media Companies",
    introTitle: "Entertainment",
    introText: "Entertainment insurance is a specialized type of coverage designed to protect individuals and businesses in the entertainment industry from various risks associated with their unique operations.",
    sectionTitle: "Uncertainties inherent in the dynamic and fast-paced world of entertainment",
    sectionText: "In the dynamic and multifaceted world of entertainment, businesses and professionals face a wide range of risks and challenges. From production companies and event organizers to performers and venues, the entertainment sector requires specialized insurance solutions to safeguard against potential liabilities and disruptions. We understand the unique needs of the entertainment industry and offer comprehensive insurance coverage tailored to your specific requirements. We help you navigate complex regulatory dimensions, providing insurance protection advantages that ensure show-stopping events are backed by seamless business continuity.",
    cardsTitle: "Tailored Coverage for the Entertainment Sector",
    cards: [
      { title: "Event Liability Insurance", desc: "Protection against bodily injury, property damage, and liabilities arising from events such as concerts, festivals, and live performances.", icon: "ShieldAlert" },
      { title: "Production Insurance", desc: "Coverage for film, television, and commercial productions against property damage, equipment breakdowns, and delays.", icon: "Camera" },
      { title: "Errors and Omissions (E&O)", desc: "Protection against claims related to negligence, copyright infringement, or intellectual property disputes.", icon: "FileText" },
      { title: "General Liability Insurance", desc: "Coverage for bodily injury, property damage, and personal injury claims related to entertainment operations.", icon: "Users" },
      { title: "Equipment Insurance", desc: "Coverage for loss, theft, or damage to production equipment such as cameras, lighting, and sound systems.", icon: "Settings" },
      { title: "Non-Appearance Insurance", desc: "Protection against financial losses due to cancellation or non-appearance of performers.", icon: "UserX" },
      { title: "Venue Liability Insurance", desc: "Coverage for venue owners against premises-related liabilities.", icon: "Building" },
      { title: "Travel Insurance", desc: "Coverage for travel risks affecting performers and production teams.", icon: "Plane" },
      { title: "Special Event Insurance", desc: "Tailored coverage for short-term events like weddings, parties, and corporate functions.", icon: "Star" },
      { title: "Workers' Compensation", desc: "Coverage for employee injuries and work-related incidents.", icon: "Activity" }
    ],
    closingTitle: "Securing the Spotlight",
    closingText: "At Lambach Insurance Brokers, we understand the complexities and risks inherent in the entertainment sector. Our team is dedicated to delivering tailored insurance solutions that mitigate risks and safeguard your operations. Contact us today to learn more about our specialized insurance offerings for the entertainment industry.",
    faqs: [
      { q: "What does Non-Appearance Insurance cover?", a: "It provides coverage for the financial loss (like refunded tickets or marketing costs) if a key individual, such as a lead actor or headline musician, is unable to appear due to death, illness, or unavoidable travel delays." },
      { q: "Do I need insurance for a one-day event?", a: "Yes, Special Event Liability insurance is highly recommended and often required by venues to cover potential bodily injury or property damage claims during short-term events." },
      { q: "What is included in a typical Production Insurance package?", a: "A standard package covers cast extra expense, negative/faulty stock, props, sets, wardrobe, third-party property damage, and production equipment." }
    ]
  }
};

const colors = ['blue', 'orange', 'emerald', 'rose', 'purple', 'yellow', 'green', 'slate', 'indigo', 'cyan'];

for (const key of Object.keys(data)) {
  const item = data[key];
  const stringifiedCards = item.cards.map((c, i) => {
    const color = colors[i % colors.length];
    return `
            <div className="bg-${color}-50 p-8 rounded-[2rem] flex flex-col group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-${color}-100">
              <div className="flex items-start justify-between mb-6 gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-brand-marine mb-2">${c.title}</h3>
                </div>
                <div className="w-16 h-16 flex-shrink-0 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <${c.icon} className="w-8 h-8 text-${color}-500" />
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                ${c.desc}
              </p>
            </div>`;
  }).join('');

  const template = `import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTAContact from '@/components/CTAContact';
import FAQ from '@/components/FAQ';
import { ArrowRight, Activity, Building, Settings, ShieldAlert, Target, Search, Award, Cpu, Handshake, Sun, Leaf, Lock, Truck, Globe, Ship, Plane, Server, FileText, Briefcase, Laptop, Mic, Users, Banknote, Home, Heart, CloudRain, Film, Camera, UserX, Star, Shield } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '${item.metadataTitle}',
  description: '${item.metadataDesc}',
};

const faqs = ${JSON.stringify(item.faqs, null, 2)};

export default function Page() {
  return (
    <>
      <PageHero 
        title="${item.pageHeroTitle}" 
        description="${item.pageHeroDesc}"
        imageSrc="${item.heroImg}"
        imageAlt="${item.heroAlt}"
      />

      <section className="py-24 bg-white">
        <div className="layout-container">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full mb-6 text-xs font-bold uppercase tracking-widest">
                 Industry Focus
              </div>
              <h2 className="font-heading text-4xl md:text-5xl text-brand-marine font-bold mb-6">
                ${item.introTitle}
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                 ${item.introText}
              </p>
              <Link href="/who-we-are#contact-us" className="inline-flex bg-primary hover:bg-primary-variant text-white px-8 py-3.5 rounded-full font-semibold items-center gap-2 hover:shadow-lg transition-all active:scale-95">
                 Speak with an Insurance Expert
                 <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-100">
                <Image 
                   src="${item.heroImg}" 
                   alt="${item.heroAlt}" 
                   fill 
                   className="object-cover"
                   loading="lazy"
                   sizes="(max-width: 768px) 100vw, 50vw" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="layout-container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-marine mb-6">${item.sectionTitle}</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              ${item.sectionText}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="layout-container">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full mb-4 text-xs font-bold uppercase tracking-widest">
              Coverage Solutions
            </div>
            <h2 className="font-heading text-3xl font-bold text-brand-marine mb-4">${item.cardsTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${stringifiedCards}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-marine text-white">
        <div className="layout-container max-w-4xl text-center">
            <h2 className="font-heading text-3xl font-bold mb-6">${item.closingTitle}</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-10">
              ${item.closingText}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/who-we-are#contact-us" className="inline-flex bg-primary hover:bg-primary-variant text-white px-8 py-3.5 rounded-full font-semibold items-center gap-2 transition-all active:scale-95 shadow-lg shadow-primary/20">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/corporate" className="inline-flex bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 rounded-full font-semibold items-center gap-2 transition-all active:scale-95 border border-white/20">
                Explore Services
              </Link>
            </div>
        </div>
      </section>

      <FAQ 
        items={faqs} 
        title="${item.introTitle} FAQs" 
        description="Learn more about our comprehensive risk coverage in the ${item.introTitle} sector." 
      />
      <CTAContact />
    </>
  );
}
`;

  fs.writeFileSync(item.path, template, 'utf8');
  console.log('Updated ' + item.path);
}
