const fs = require('fs');
const path = require('path');

const mappings = {
  "/app/page.tsx": { url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf", alt: "Corporate team consulting at Lambach Insurance Brokers" },
  "/app/corporate/page.tsx": { url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab", alt: "Corporate skyscrapers representing corporate insurance" },
  "/app/corporate/engineering/page.tsx": { url: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5", alt: "Large scale engineering project construction site" },
  "/app/corporate/property/page.tsx": { url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab", alt: "Modern commercial property building" },
  "/app/corporate/marine/page.tsx": { url: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7", alt: "Cargo ship carrying containers across the ocean" },
  "/app/corporate/marine-hull/page.tsx": { url: "https://images.unsplash.com/photo-1542385151-efd9000785a0", alt: "Commercial ship hull and machinery in port" },
  "/app/corporate/liability/page.tsx": { url: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb", alt: "Corporate law background with gavel representing liability" }, 
  "/app/corporate/employee-benefits/page.tsx": { url: "https://images.unsplash.com/photo-1552664730-d307ca884978", alt: "Happy corporate team discussing employee benefits" },
  "/app/corporate/group-mediclaim/page.tsx": { url: "https://images.unsplash.com/photo-1504439468489-c8920d796a29", alt: "Healthcare professionals in a hospital" },
  "/app/corporate/group-personal-accident/page.tsx": { url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3", alt: "Corporate professional safety net concept" },
  "/app/corporate/credit/page.tsx": { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f", alt: "Finance professional analyzing credit cash flows" },
  "/app/corporate/affinity/page.tsx": { url: "https://images.unsplash.com/photo-1556761175-5973dc0f32b7", alt: "Retail store processing affinity insurance" }, 
  "/app/corporate/warranty/page.tsx": { url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158", alt: "Industrial machinery protected by extended warranty" },
  "/app/corporate/stop/page.tsx": { url: "https://images.unsplash.com/photo-1586528116311-ad8ed7c663be", alt: "Warehouse inventory for Stock Throughput Policy" },
  
  "/app/who-we-are/page.tsx": { url: "https://images.unsplash.com/photo-1552664730-d307ca884978", alt: "Lambach Insurance Brokers team meeting" }, 
  "/app/industries/page.tsx": { url: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122", alt: "Diverse industries factory and infrastructure" },
  "/app/industries/power-engineering/page.tsx": { url: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e", alt: "Power engineering facility at sunset" },
  "/app/industries/chemical/page.tsx": { url: "https://images.unsplash.com/photo-1532187863486-abf9db090729", alt: "Chemical manufacturing plant" }, 
  "/app/industries/it/page.tsx": { url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d", alt: "Modern server room representing IT companies" },
  "/app/industries/aviation/page.tsx": { url: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05", alt: "Commercial airplane aviation" },
  "/app/industries/agri-business/page.tsx": { url: "https://images.unsplash.com/photo-1628172962451-b8f9eaf51950", alt: "Large agricultural field for agribusiness" },
  "/app/industries/entertainment/page.tsx": { url: "https://images.unsplash.com/photo-1470229722913-7c090be5c520", alt: "Live entertainment stage production" },
  
  "/app/life/page.tsx": { url: "https://images.unsplash.com/photo-1573164713988-8665fc963095", alt: "Family holding hands representing life insurance" },
  "/app/life/term/page.tsx": { url: "https://images.unsplash.com/photo-1573164574472-797ce4211116", alt: "Father and child representing term protection" },
  "/app/life/group-term/page.tsx": { url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c", alt: "Employee group representing group term insurance" },
  "/app/life/endowment/page.tsx": { url: "https://images.unsplash.com/photo-1554224154-22dec7ec8818", alt: "Saving and investment for endowment" },
  "/app/life/pension/page.tsx": { url: "https://images.unsplash.com/photo-1473186578172-c141e6798cfe", alt: "Senior couple enjoying retirement pension" },
  "/app/life/keyman/page.tsx": { url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf", alt: "Key executive in a business" },
  
  "/app/retail/page.tsx": { url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09", alt: "Individual personal retail insurance cover" },
  "/app/retail/motor/page.tsx": { url: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2", alt: "Car driving on highway for motor insurance" },
  "/app/retail/health/page.tsx": { url: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528", alt: "Healthcare stethoscope for health insurance" },
  "/app/retail/individual-mediclaim/page.tsx": { url: "https://images.unsplash.com/photo-1584515933487-779824d29309", alt: "Individual mediclaim medical care" },
  "/app/retail/personal-accident/page.tsx": { url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3", alt: "Safety lines representing personal accident cover" },
  "/app/retail/home/page.tsx": { url: "https://images.unsplash.com/photo-1513694203232-719a280e022f", alt: "Beautiful suburban home for home insurance" },
  "/app/retail/travel/page.tsx": { url: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05", alt: "Airplane tail for travel insurance" },
  "/app/retail/critical-illness/page.tsx": { url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118", alt: "Doctor with critical illness patient" },
  
  "/app/risk-assessment/page.tsx": { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71", alt: "Risk assessment charts and data analysis" },
  "/app/about-us/page.tsx": { url: "https://images.unsplash.com/photo-1552664730-d307ca884978", alt: "About Lambach Insurance Brokers corporate office" },
  "/app/our-team/page.tsx": { url: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6", alt: "Our Leadership team meeting" },
  "/app/contact-us/page.tsx": { url: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e", alt: "Contact our customer support team" },
  "/app/join-our-team/page.tsx": { url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf", alt: "Join our careers at Lambach" }
};

Object.keys(mappings).forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    const { url, alt } = mappings[file];
    const fullUrl = url + "?auto=format&fit=crop&q=80&w=1200";
    
    // Replace imageSrc="http..." 
    content = content.replace(/imageSrc="https:\/\/images\.unsplash\.com\/[^"]+"/g, `imageSrc="${fullUrl}"\n        imageAlt="${alt}"`);
    
    fs.writeFileSync(filePath, content);
    console.log("Updated", file);
  }
});
