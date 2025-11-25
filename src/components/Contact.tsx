export default function Contact() {
    return (
        <section id="contact" className="py-20 px-4 bg-gradient-to-b from-transparent via-teal-950/20 to-transparent">
        <div className="max-w-2xl mx-auto text-center">

          <div className="wave-container">
              <h1 className="wave-text">
                <span>O</span><span>N</span><span>E</span><span> </span>
                <span>S</span><span>T</span><span>E</span><span>P</span><span> </span>
                <span>A</span><span>W</span><span>A</span><span>Y</span>
              </h1>
          </div>

          <p className="text-teal-100 text-lg mb-12">
            We promise you'll be glad later.
          </p>
            <a href="/questionnaire">
            <button className="px-10 py-4 bg-gradient-to-r from-teal-500 to-emerald-600 text-white text-lg rounded-lg font-semibold hover:shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
            </a>
        </div>
      </section>
    );
}