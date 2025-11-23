export default function About() {
    return (
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

    );
}