'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Carousel from '@/components/Carousel';
import Clients from '@/components/Clients';
import Pricing from '@/components/Pricing';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Logo Loading Animation */}
      {!showContent && (
        <div className="fixed inset-0 z-999bg-[#21705e] flex items-center justify-center pointer-events-auto loading-overlay">
          <Image
            src="/images/logo/logo.gif"
            alt="Loading"
            width={200}
            height={200}
            priority
            unoptimized
          />
        </div>
      )}

      {/* Curtain lift overlay */}
      <div
        className={`fixed inset-0 bg-[#21705e] transition-transform duration-1000 ease-out curtain-overlay ${
          showContent ? 'translate-y-full' : 'translate-y-0'
        }`}
        style={{ pointerEvents: showContent ? 'none' : 'auto' }}
      ></div>

      {/* Hero Section */}
      <section id="home" className="min-h-[80vh] flex flex-col items-center justify-center pt-40 pb-20 px-4 relative">
        {/* White background behind carousel */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute left-0 right-0 top-3/5 bottom-0 bg-white/75 backdrop-blur-sm "></div>
        </div>
        
        <div className="text-center max-w-5xl w-full relative z-20">
          <div className="text-4xl md:text-7xl text-right font-bold mb-12 block">
            <div className="text-5xl bg-[white] via-emerald-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              <i className="fas fa-sparkles mr-3"></i>The only NS
            </div>
            <div className="text-[2.4rem] bg-[white] via-emerald-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              Web Designers
            </div>
            <div className="text-5xl bg-[white] via-emerald-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              this G<span className="inline-block w-[100px] h-[45px] rounded-full bg-cover bg-center align-text-center mx-1" style={{ backgroundImage: 'url(/images/ns.gif)', backgroundSize: 'cover', position: 'relative', top: 5 }}></span>D
            </div>
          </div>
          <div className="w-full max-w-3xl mx-auto">
            <Carousel />
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <Clients />

      {/* Pricing Section */}
      <Pricing />

      {/* About Section */}
      <About />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
      
    </>
  );
}
