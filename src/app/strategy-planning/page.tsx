import Link from 'next/link';
import Footer from '@/components/Footer';

const milestones = [
  {
    title: 'Discovery Intensive',
    description: 'Stakeholder interviews, analytics review, and competitive benchmarking to align on goals.',
  },
  {
    title: 'Experience Blueprint',
    description: 'Journey mapping, content hierarchy, and low-fidelity wireframes for every critical touchpoint.',
  },
  {
    title: 'Roadmap & Resourcing',
    description: 'Sequenced sprints, budget guidance, and KPI tracking framework to keep execution on rails.',
  },
];

const deliverables = [
  '360° digital audit & opportunity map',
  'User personas & primary journeys',
  'Information architecture & sitemap',
  '12-week implementation roadmap',
  'Analytics + performance measurement plan',
];

export default function StrategyPlanningPage() {
  return (
    <>
      <section className="min-h-screen bg-[#12312a] pt-36 pb-24 px-4 text-foreground">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <p className="uppercase tracking-[0.4em] text-emerald-300 text-xs">Strategy &amp; Planning</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Insight-driven roadmaps for confident launches.
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            We align vision, data, and execution so your web initiatives ship on time, on budget, and with measurable impact.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 mt-6 text-sm font-semibold rounded-full bg-gradient-to-r from-teal-500 to-emerald-600 text-white hover:shadow-teal-500/40 hover:shadow-lg transition"
          >
            Book a Strategy Intensive
          </Link>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur">
            <h2 className="text-2xl font-semibold text-white mb-2">Milestone-based partnership</h2>
            <p className="text-white/70 mb-6">
              We move in focused strategy sprints, delivering clarity and artifacts at every checkpoint so your team stays confident and aligned.
            </p>
            <div className="space-y-6">
              {milestones.map((milestone) => (
                <div key={milestone.title} className="border-l-4 border-emerald-400 pl-4">
                  <h3 className="text-xl font-semibold text-white">{milestone.title}</h3>
                  <p className="text-white/70 text-sm mt-1">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur">
            <h2 className="text-2xl font-semibold text-white mb-2">What you take with you</h2>
            <p className="text-white/70 mb-6">
              Every engagement closes with an actionable planning dossier engineered for executive buy-in and fast execution.
            </p>
            <ul className="space-y-3 text-white/80 text-sm">
              {deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400/40 rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-semibold text-white">Ready to set the cadence?</h3>
          <p className="text-white/70 mt-2">
            We typically kick off within 10 business days and deliver the full roadmap in 3 weeks.
          </p>
          <Link href="/contact" className="inline-block mt-4 text-emerald-200 underline underline-offset-4">
            Talk to the strategy desk
          </Link>
        </div>
      </div>
      </section>
      <Footer />
    </>
  );
}
