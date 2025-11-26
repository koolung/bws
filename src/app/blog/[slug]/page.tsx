import { notFound } from 'next/navigation';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await prisma.blogPost.findMany({ select: { slug: true } });
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = await prisma.blogPost.findUnique({ where: { slug } });

  if (!post) {
    notFound();
  }

  return (
    <article className="py-24 px-4 bg-[#0f211d] min-h-screen">
      <div className="max-w-3xl mx-auto space-y-6 text-white">
        <Link href="/blog" className="text-teal-200 text-sm font-semibold uppercase tracking-[0.2em]">
          ← Back to insights
        </Link>
        <p className="text-teal-300 uppercase tracking-[0.3em] text-xs">
          {new Intl.DateTimeFormat('en-CA', { dateStyle: 'long' }).format(post.publishedAt)}
        </p>
        <h1 className="text-4xl md:text-6xl font-bold">{post.title}</h1>
        {post.coverImage && (
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full rounded-3xl border border-white/10"
          />
        )}
        <p className="text-lg text-white/80 whitespace-pre-line leading-8">{post.content}</p>
      </div>
    </article>
  );
}
