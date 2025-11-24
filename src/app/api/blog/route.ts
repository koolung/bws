import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { slugify } from '@/lib/slugify';

export async function GET() {
  const posts = await prisma.blogPost.findMany({
    orderBy: { publishedAt: 'desc' },
  });

  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  try {
    const { title, excerpt, content, coverImage } = await request.json();

    if (!title || !excerpt || !content) {
      return NextResponse.json({ error: 'Title, excerpt, and content are required.' }, { status: 400 });
    }

    const slug = slugify(title);

    const newPost = await prisma.blogPost.create({
      data: {
        title,
        excerpt,
        content,
        coverImage: coverImage?.length ? coverImage : null,
        slug,
      },
    });

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error('Error creating post', error);
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}
