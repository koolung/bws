'use client';

export default function Clients() {
  const logos = [
    "images/client_logos/fch.svg",
    "images/client_logos/hh.svg",
    "images/client_logos/imaginit.svg",
    "images/client_logos/blh.svg",
    "images/client_logos/ocean.svg",
    "images/client_logos/fch.svg",
    "images/client_logos/hh.svg",
    "images/client_logos/imaginit.svg",
    "images/client_logos/blh.svg",
    "images/client_logos/ocean.svg",
    "images/client_logos/fch.svg",
    "images/client_logos/hh.svg",
    "images/client_logos/imaginit.svg",
    "images/client_logos/blh.svg",
    "images/client_logos/ocean.svg",
    // "images/client_logos/siravista.svg",

  ];

  return (
    <section className="py-8 px-4 flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-white to-teal-300 bg-clip-text text-transparent">
        Our Local Clients
      </h1>
      <div className="slider">
        <div className="slider-items">
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt="Partner logo" />
          ))}
          {logos.map((logo, index) => (
            <img key={`repeat-${index}`} src={logo} alt="Partner logo" />
          ))}
        </div>
      </div>
    </section>
  );
}
