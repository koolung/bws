export default function About() {
  const tiles = [
    {
      number: 1,
      title: "Set Up",
      description: "Domain Registration, Email Setup, and Budget Allocation",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=500&fit=crop",
    },
    {
      number: 2,
      title: "Development",
      description: "We custom code everything and provide multiple drafts",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop",
    },
    {
      number: 3,
      title: "Launch",
      description: "Seamless deployment and setup so you don't have to.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=500&fit=crop",
    },
    {
      number: 4,
      title: "Maintenance",
      description: "Ongoing support and updates to keep your site running smoothly.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop",
    },
  ];

  return (
    <section id="about" className="py-20 px-0">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
          What do we do?
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
        {tiles.map((tile) => (
          <div
            key={tile.number}
            className="aspect-square relative overflow-hidden group cursor-pointer"
            style={{
              backgroundImage: `url(${tile.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Color filter overlay */}
            <div
              className={`absolute inset-0 transition-all duration-300 ${
                tile.number === 1 || tile.number === 4
                  ? "bg-teal-900/80 group-hover:bg-teal-900/70"
                  : "bg-black/70 group-hover:bg-black/60"
              }`}
            ></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-4">
              {/* Number */}
              <div className="text-white text-3xl md:text-4xl font-bold">{tile.number}</div>

              {/* Title and Description */}
              <div>
                <h3 className="text-white font-bold text-lg mb-1">{tile.title}</h3>
                <p className="text-white/80 text-xs md:text-sm">{tile.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}