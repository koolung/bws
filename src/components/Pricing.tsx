export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 bg-white/70 backdrop-blur-md rounded-[25px]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-black to-green-800 bg-clip-text text-transparent">
            Worried About Pricing?
          </h2>
          <p className="text-gray-700 text-lg mb-12">
            <i className="text-black font-bold">PLEASE</i> don't hesitate over the pricing.<br></br> We will work with your numbers.
          </p>
          <button className="px-10 py-4 bg-transparent text-teal-900 border-3 border-teal-900 text-lg rounded-md font-semibold hover:shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105">
            Get Started
          </button>
          <hr className="my-6"></hr>
          <span className="text-gray-500">Pssssst! We <b className="text-black">cost</b> less than below! <br></br>And we do <b className="text-black">ALL</b> the work for you.</span>
          <img src="images/competitors.svg" alt="Competitor Logos" className="mx-auto mt-6 rounded-lg " />
        </div>
    </section>
  );
}