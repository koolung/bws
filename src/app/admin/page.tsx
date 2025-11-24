'use client';

import { useEffect, useMemo, useState } from 'react';

type BlogPost = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: string | null;
  publishedAt: string;
  updatedAt: string;
};

const ADMIN_KEY = process.env.NEXT_PUBLIC_ADMIN_KEY;

const defaultForm = {
  title: '',
  excerpt: '',
  content: '',
  coverImage: '',
};

export default function AdminDashboard() {
  const [isAuthed, setIsAuthed] = useState(!ADMIN_KEY);
  const [keyInput, setKeyInput] = useState('');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [form, setForm] = useState(defaultForm);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const pageTitle = useMemo(() => (editingId ? 'Edit post' : 'New post'), [editingId]);

  useEffect(() => {
    if (isAuthed) {
      refreshPosts();
    }
  }, [isAuthed]);

  const refreshPosts = async () => {
    const res = await fetch('/api/blog');
    const data = await res.json();
    setPosts(data);
  };

  const handleLogin = () => {
    if (!ADMIN_KEY || keyInput === ADMIN_KEY) {
      setIsAuthed(true);
      setKeyInput('');
    } else {
      setError('Incorrect admin key');
    }
  };

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setForm(defaultForm);
    setEditingId(null);
    setError(null);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const endpoint = editingId ? `/api/blog/${editingId}` : '/api/blog';
      const method = editingId ? 'PUT' : 'POST';

      const res = await fetch(endpoint, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error ?? 'Request failed');
      }

      await refreshPosts();
      resetForm();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (post: BlogPost) => {
    setEditingId(post.id);
    setForm({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      coverImage: post.coverImage ?? '',
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Delete this post?')) return;

    await fetch(`/api/blog/${id}`, { method: 'DELETE' });
    await refreshPosts();
  };

  if (!isAuthed) {
    return (
      <section className="min-h-screen bg-[#0b1915] flex items-center justify-center px-4">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 w-full max-w-md text-center">
          <h1 className="text-2xl font-semibold text-white mb-4">Admin Access</h1>
          <input
            type="password"
            value={keyInput}
            onChange={(e) => setKeyInput(e.target.value)}
            placeholder="Enter admin key"
            className="w-full px-4 py-3 rounded-xl bg-white/10 text-white focus:outline-none"
          />
          <button
            onClick={handleLogin}
            className="mt-4 w-full py-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold"
          >
            Unlock
          </button>
          {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#0b1915] py-16 px-4">
      <div className="max-w-5xl mx-auto space-y-10 text-white">
        <header>
          <p className="text-teal-300 uppercase tracking-[0.3em] text-xs">Admin</p>
          <h1 className="text-4xl font-bold">Blog control center</h1>
          <p className="text-white/70 max-w-2xl">
            Draft, edit, and ship new case studies directly from this dashboard. Changes persist instantly in the public blog.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-4">
            <h2 className="text-2xl font-semibold">{pageTitle}</h2>
            <input
              value={form.title}
              onChange={(e) => handleChange('title', e.target.value)}
              placeholder="Post title"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/5 focus:outline-none"
              required
            />
            <textarea
              value={form.excerpt}
              onChange={(e) => handleChange('excerpt', e.target.value)}
              placeholder="Short excerpt"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/5 focus:outline-none"
              rows={3}
              required
            />
            <textarea
              value={form.content}
              onChange={(e) => handleChange('content', e.target.value)}
              placeholder="Full content"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/5 focus:outline-none"
              rows={8}
              required
            />
            <input
              value={form.coverImage}
              onChange={(e) => handleChange('coverImage', e.target.value)}
              placeholder="Cover image URL (optional)"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/5 focus:outline-none"
            />

            <div className="flex gap-4">
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 font-semibold"
              >
                {loading ? 'Saving…' : editingId ? 'Update post' : 'Publish post'}
              </button>
              {editingId && (
                <button type="button" onClick={resetForm} className="px-6 py-3 rounded-xl bg-white/10">
                  Cancel
                </button>
              )}
            </div>
            {error && <p className="text-red-400 text-sm">{error}</p>}
          </form>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 space-y-4">
            <h2 className="text-xl font-semibold">Existing posts</h2>
            {posts.length === 0 && <p className="text-white/70 text-sm">Nothing published yet.</p>}
            <ul className="space-y-4">
              {posts.map((post) => (
                <li key={post.id} className="border border-white/10 rounded-2xl p-4">
                  <p className="text-sm text-white/60">
                    {new Date(post.updatedAt).toLocaleDateString()} · {post.slug}
                  </p>
                  <p className="font-semibold">{post.title}</p>
                  <div className="flex gap-3 mt-3 text-sm">
                    <button onClick={() => handleEdit(post)} className="text-teal-300">Edit</button>
                    <button onClick={() => handleDelete(post.id)} className="text-red-300">Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
