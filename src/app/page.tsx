'use client';

import Carousel from '@/components/Carousel';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="min-h-[80vh] flex flex-col items-center justify-center pt-40 pb-20 px-4">
        <div className="text-center max-w-5xl w-full">
          <h1 className="text-5xl md:text-7xl text-right font-bold mb-12 bg-[#E88873] via-emerald-400 to-cyan-400 bg-clip-text text-transparent animate-pulse" >
            <i className="fas fa-sparkles mr-3"></i>The only NS Web Designers this good 
          </h1>
          <div className="w-full max-w-3xl mx-auto">
            <Carousel />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gradient-to-b from-transparent via-teal-950/20 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
            Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 bg-teal-900/50 backdrop-blur-sm rounded-xl border border-teal-500/20 hover:border-teal-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-4xl mb-4 text-teal-300"><i className="fas fa-mobile-screen"></i></div>
              <h3 className="text-xl font-bold text-white mb-3">Responsive Design</h3>
              <p className="text-teal-100">
                Perfectly optimized for all devices. Experience seamless navigation on mobile, tablet, and desktop.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-teal-900/50 backdrop-blur-sm rounded-xl border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-4xl mb-4 text-emerald-300"><i className="fas fa-wand-magic-sparkles"></i></div>
              <h3 className="text-xl font-bold text-white mb-3">Liquid Effects</h3>
              <p className="text-teal-100">
                Interactive liquid visual effects that respond to your mouse movement and touch gestures in real-time.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-teal-900/50 backdrop-blur-sm rounded-xl border border-teal-500/20 hover:border-teal-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-4xl mb-4 text-teal-300"><i className="fas fa-scroll"></i></div>
              <h3 className="text-xl font-bold text-white mb-3">Smooth Scroll</h3>
              <p className="text-teal-100">
                Enjoy smooth scrolling animations that make navigation feel natural and polished across the entire page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
            About This Experience
          </h2>
          <div className="space-y-6 text-teal-100 text-lg leading-relaxed">
            <p>
              This website showcases a modern approach to web design using Next.js, React, and Tailwind CSS. The combination of smooth scrolling, responsive hamburger menu, and interactive liquid effects creates an engaging user experience.
            </p>
            <p>
              Try moving your mouse or touching the screen to see the liquid effects in action. The effects are fully responsive and work seamlessly on mobile devices, tablets, and desktop screens.
            </p>
            <p>
              The hamburger menu automatically appears on mobile devices and provides a clean, intuitive navigation experience. All animations and transitions are optimized for performance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-transparent via-teal-950/20 to-transparent">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-teal-100 text-lg mb-12">
            Have questions or want to collaborate? We'd love to hear from you!
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-teal-500 to-emerald-600 text-white text-lg rounded-lg font-semibold hover:shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105">
            Contact Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-950 border-t border-teal-800 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center text-teal-300">
          <p className="mb-4">© 2025 BWS. All rights reserved.</p>
          <p className="text-sm">Built with Next.js, React, and Tailwind CSS</p>
        </div>
      </footer>
    </>
  );
}
