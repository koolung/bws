export default function Features() {
  return (
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
  );
}