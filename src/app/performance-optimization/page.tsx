import Link from 'next/link';
import Footer from '@/components/Footer';

const audits = [
  'Core Web Vitals + Lighthouse benchmarking',
  'Rendering + hydration diagnostics',
  'API latency and caching review',
  'Asset budgets, fonts, and third-party script audits',
];

const engagements = [
  {
    metric: '1.2s',
    label: 'Median Largest Contentful Paint on recent builds',
  },
  {
    metric: '94+',
    label: 'Average Lighthouse performance score after tune-ups',
  },
  {
    metric: '30%',
    label: 'Average reduction in bundle weight within first sprint',
  },
];

export default function PerformanceOptimizationPage() {
  return (
    <>
      <section className="min-h-screen bg-[#12312a] pt-36 pb-24 px-4 text-foreground">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <p className="uppercase tracking-[0.4em] text-lime-300 text-xs">Performance Optimization</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Make speed your unfair advantage.
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            We blend observability, experimentation, and ruthless trimming so your experience feels instantaneous and trustworthy.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 mt-6 text-sm font-semibold rounded-full bg-gradient-to-r from-lime-500 to-emerald-500 text-white hover:shadow-lime-500/40 hover:shadow-lg transition"
          >
            Request an optimization audit
          </Link>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur">
            <h2 className="text-2xl font-semibold text-white mb-4">Audit playbook</h2>
            <ul className="space-y-3 text-white/80 text-sm">
              {audits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-lime-400"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur space-y-6">
            {engagements.map((item) => (
              <div key={item.label} className="border border-lime-400/30 rounded-2xl p-5 text-center">
                <p className="text-4xl font-bold text-white">{item.metric}</p>
                <p className="text-white/70 text-sm mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-lime-500/20 to-emerald-500/20 border border-lime-400/40 rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-semibold text-white">Implementation without disruption</h3>
          <p className="text-white/70 mt-2">
            We slot into your existing pipeline, open issues with detailed repro steps, and push incremental PRs so nothing catches your team off guard.
          </p>
          <Link href="/contact" className="inline-block mt-4 text-lime-200 underline underline-offset-4">
            View recent performance case studies
          </Link>
        </div>
      </div>
      </section>
      <Footer />
    </>
  );
}
