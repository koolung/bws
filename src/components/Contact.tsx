export default function Contact() {
    return (
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
    );
}