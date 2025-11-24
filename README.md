## BWS Blog System

This project now ships with a lightweight publishing workflow:

- `/blog` – public article index
- `/blog/[slug]` – individual article pages
- `/admin` – password-gated dashboard for creating, editing, and deleting posts
- `/api/blog/*` – REST endpoints powering the admin UI

### Database setup

1. Create the MySQL schema (adjust database name/user as needed):

```sql
SOURCE db/mysql-init.sql;
```

2. Add a `.env` file with your connection string and optional admin key:

```bash
DATABASE_URL="mysql://USER:PASSWORD@HOST:3306/bws_blog"
NEXT_PUBLIC_ADMIN_KEY="set-a-strong-key"
```

3. Generate the Prisma client and run migrations:

```bash
npx prisma generate
npx prisma db push
```

### Admin workflow

1. Navigate to `/admin`.
2. Enter the admin key (or leave blank if `NEXT_PUBLIC_ADMIN_KEY` is unset).
3. Draft posts with title, excerpt, long-form content, and optional cover image.
4. Use the inline controls to edit or delete existing posts. Changes are reflected instantly on the public blog.

### Available scripts

```bash
npm run dev     # start Next.js locally
npm run build   # production build
npm run start   # run production server
npm run lint    # lint source files
```

### Tech stack

- Next.js 16 App Router
- Prisma ORM + MySQL
- RESTful API routes under `/api/blog`
- Client-driven admin dashboard that talks to the API

> ⚠️ The built-in admin key gate is intentionally lightweight and suited for internal deployments. For production, layer on a proper auth provider (Clerk, Auth0, etc.) or restrict `/admin` behind middleware.
