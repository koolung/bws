import Link from 'next/link';
import Footer from '@/components/Footer';

const principles = [
  'Brand-first systems that remain flexible across campaigns and channels.',
  'Component libraries that mirror your dev stack and scale cleanly.',
  'Motion and interaction patterns tuned for conversion and delight.',
];

const showcase = [
  {
    title: 'Signature Visual Language',
    detail: 'Color palettes, typography, iconography, and art direction rules that feel unmistakably yours.',
  },
  {
    title: 'Experience Prototypes',
    detail: 'High-fidelity prototypes that preview hero states, complex interactions, and responsive behavior.',
  },
  {
    title: 'Brand Systems Kit',
    detail: 'Documented tokens, usage guidelines, and ready-to-build component references.',
  },
];

export default function DesignBrandingPage() {
  return (
    <>
      <section className="min-h-screen bg-[#12312a] pt-36 pb-24 px-4 text-foreground">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <p className="uppercase tracking-[0.4em] text-cyan-300 text-xs">Design &amp; Branding</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Digital identities that stay sharp from hero to handoff.
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            We marry brand storytelling with actionable design systems so every page feels premium and every build feels predictable.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 mt-6 text-sm font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:shadow-cyan-500/40 hover:shadow-lg transition"
          >
            Schedule a design review
          </Link>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur">
            <h2 className="text-2xl font-semibold text-white mb-4">Our guiding principles</h2>
            <ul className="space-y-4 text-white/80 text-sm">
              {principles.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="h-6 w-6 rounded-full bg-white/10 text-cyan-300 flex items-center justify-center text-xs">BWS</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur">
            <h2 className="text-2xl font-semibold text-white mb-4">Deliverables you can ship</h2>
            <div className="space-y-6">
              {showcase.map((item) => (
                <div key={item.title} className="border border-cyan-400/30 rounded-2xl p-5">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-white/70 text-sm mt-2">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-500/20 to-rose-500/20 border border-cyan-400/30 rounded-3xl p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold text-white">Need brand + build under one roof?</h3>
            <p className="text-white/70 mt-2 max-w-xl">
              Our design directors sit next to the dev leads, so everything we hand off to engineering ships faster.
            </p>
          </div>
          <Link href="/contact" className="text-cyan-200 text-sm font-semibold uppercase tracking-wider">
            Connect with the design desk →
          </Link>
        </div>
      </div>
      </section>
      <Footer />
    </>
  );
}
