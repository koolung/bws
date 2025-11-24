import Link from 'next/link';
import Footer from '@/components/Footer';

const pillars = [
  {
    title: 'Composable architecture',
    copy: 'Next.js, TypeScript, and modern CMS workflows engineered for fast iteration and future integrations.',
  },
  {
    title: 'Performance obsessed',
    copy: 'Core Web Vitals monitoring, edge caching, and build pipelines tuned for speed across every device.',
  },
  {
    title: 'Accessibility by default',
    copy: 'Semantic structure, keyboard journeys, and WCAG AA compliance baked into every sprint review.',
  },
];

const stack = ['Next.js', 'React 19', 'TypeScript', 'Tailwind/Tokens', 'Sanity / Contentful', 'Cloudflare Pages', 'Vercel Edge'];

export default function WebDevelopmentPage() {
  return (
    <>
      <section className="min-h-screen bg-[#12312a] pt-36 pb-24 px-4 text-foreground">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <p className="uppercase tracking-[0.4em] text-emerald-300 text-xs">Web Development</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Production-grade builds that feel effortless to maintain.
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            We pair senior engineering rigor with boutique attention so your team inherits a codebase that is fast, legible, and future-friendly.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 mt-6 text-sm font-semibold rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:shadow-emerald-500/40 hover:shadow-lg transition"
          >
            Start a build sprint
          </Link>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur space-y-6">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="border border-white/10 rounded-2xl p-5">
                <h3 className="text-xl font-semibold text-white">{pillar.title}</h3>
                <p className="text-white/70 text-sm mt-2">{pillar.copy}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur">
            <h2 className="text-2xl font-semibold text-white mb-4">Preferred stack</h2>
            <p className="text-white/70 text-sm mb-6">
              Opinionated choices keep the codebase lightweight while giving your internal team plenty of headroom to extend.
            </p>
            <div className="flex flex-wrap gap-3">
              {stack.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full border border-emerald-400/40 text-sm text-emerald-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-500/15 to-cyan-500/15 border border-emerald-400/30 rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-semibold text-white">Ship in four disciplined sprints</h3>
          <p className="text-white/70 mt-2">
            Planning → Design QA → Build → Launch support. Transparent standups, Loom walkthroughs, and shared dashboards every step of the way.
          </p>
          <Link href="/contact" className="inline-block mt-4 text-emerald-200 underline underline-offset-4">
            Review our sample playbook
          </Link>
        </div>
      </div>
      </section>
      <Footer />
    </>
  );
}
