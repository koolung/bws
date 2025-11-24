import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { slugify } from '@/lib/slugify';

interface RouteParams {
  params: { id: string };
}

export async function GET(_: Request, { params }: RouteParams) {
  const post = await prisma.blogPost.findUnique({ where: { id: Number(params.id) } });

  if (!post) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }

  return NextResponse.json(post);
}

export async function PUT(request: Request, { params }: RouteParams) {
  try {
    const { title, excerpt, content, coverImage } = await request.json();

    const existing = await prisma.blogPost.findUnique({ where: { id: Number(params.id) } });

    if (!existing) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    const updatedPost = await prisma.blogPost.update({
      where: { id: existing.id },
      data: {
        title: title ?? existing.title,
        excerpt: excerpt ?? existing.excerpt,
        content: content ?? existing.content,
        coverImage: coverImage?.length ? coverImage : coverImage === '' ? null : existing.coverImage,
        slug: title ? slugify(title) : existing.slug,
      },
    });

    return NextResponse.json(updatedPost);
  } catch (error) {
    console.error('Error updating post', error);
    return NextResponse.json({ error: 'Failed to update post' }, { status: 500 });
  }
}

export async function DELETE(_: Request, { params }: RouteParams) {
  try {
    await prisma.blogPost.delete({ where: { id: Number(params.id) } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }
}
