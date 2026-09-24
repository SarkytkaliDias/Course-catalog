# Course Catalog

Course Catalog project for **Advanced Web Technologies**.

## Lab 1
- Next.js 16 App Router + TypeScript + Tailwind CSS
- Static routes: `/`, `/about`, `/courses`
- Dynamic route: `/courses/[id]`
- `generateStaticParams`
- Server Components by default
- One Client Component: `LikeButton`
- `loading.tsx` and `not-found.tsx`
- Mock course data with a 300ms delay

## Lab 2
- Added shadcn/ui-style `Card` and `Button` components
- Rewrote `CourseCard` with `Card`, `CardHeader`, `CardTitle`, `CardContent`, and `Button`
- Added responsive course grid: 1 column on phones, 2 on small/tablet screens, 3 on desktop
- Added card hover state
- Styled responsive navigation with spacing, border, and hover states
- Kept `CourseCard` as a Server Component

## Run
```bash
npm install
npm run dev
```

Before submission:
```bash
npm run build
```
