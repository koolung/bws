import Link from 'next/link';
import { prisma } from '@/lib/prisma';

export const revalidate = 60;

export default async function BlogIndexPage() {
  const posts = await prisma.blogPost.findMany({
    orderBy: { publishedAt: 'desc' },
  });

  return (
    <section className="py-24 px-4 bg-[#0f211d] min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-teal-300 uppercase tracking-[0.3em] text-xs">Insights</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white">BWS Field Notes</h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Essays, launch retros, and performance breakdowns from the Bedford Web Services team.
          </p>
        </div>

        {posts.length === 0 && (
          <p className="text-center text-white/70">No posts yet. Check back soon.</p>
        )}

        <div className="grid gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur">
              <p className="text-sm text-teal-200 uppercase tracking-[0.2em]">
                {new Intl.DateTimeFormat('en-CA', { dateStyle: 'long' }).format(post.publishedAt)}
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-white mt-2">{post.title}</h2>
              <p className="text-white/70 mt-4">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-teal-200 font-semibold mt-6"
              >
                Read article →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
