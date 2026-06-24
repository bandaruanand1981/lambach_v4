import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import Specialties from '@/components/Specialties';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTAContact from '@/components/CTAContact';

export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden bg-gradient-to-br from-[#eff6ff] via-white to-[#ecfdf5]">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[70%] bg-[#dbeafe] rounded-full mix-blend-multiply filter blur-[120px] opacity-70"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[60%] bg-[#d1fae5] rounded-full mix-blend-multiply filter blur-[120px] opacity-70"></div>
        <Hero />
      </div>
      <Specialties />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Partners />
      <CTAContact />
    </>
  );
}
