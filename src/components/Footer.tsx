export default function Footer() {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const services = [
    { label: 'Strategy & Planning', href: '/strategy-planning' },
    { label: 'Design & Branding', href: '/design-branding' },
    { label: 'Web Development', href: '/web-development' },
    { label: 'Performance Optimization', href: '/performance-optimization' },
  ];

  return (
    <footer className="bg-teal-950 border-t border-teal-800 py-16 px-4">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3 text-teal-200">
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Bedford Web Services</h3>
          <p className="text-sm text-teal-300/80">
            We craft high-performing web experiences for Atlantic Canadian businesses and ambitious brands worldwide.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="block text-teal-400 uppercase tracking-wide text-xs">Phone</span>
              <a href="tel:+19024122260" className="hover:text-white transition">+1 (902) 412-2260</a>
            </li>
            <li>
              <span className="block text-teal-400 uppercase tracking-wide text-xs">Email</span>
              <a href="mailto:contact@bedfordwebservices.com" className="hover:text-white transition">contact@bedfordwebservices.com</a>
            </li>
            <li>
              <span className="block text-teal-400 uppercase tracking-wide text-xs">Address</span>
              <p>600 Bedford Hwy, Suite #238<br />Halifax, NS</p>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-white transition">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Services</h4>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li key={service.href}>
                  <a href={service.href} className="hover:text-white transition">
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 border-t border-teal-800 pt-6 text-center text-teal-300 text-sm">
        <p>© 2025 Bedford Web Services. All rights reserved.</p>
        <p className="mt-1 text-teal-400/80">Handcrafted by BWS in Halifax, Nova Scotia.</p>
      </div>
    </footer>
  );
}