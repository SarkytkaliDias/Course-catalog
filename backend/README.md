# Course Catalog API — Lab 5

FastAPI backend for the Course Catalog used by the Next.js frontend.

## What changed in Lab 5

- Added CORS for `http://localhost:3000`.
- Added camelCase JSON aliases.
- Added `POST /courses/{course_id}/like`.
- Added enrollment creation and listing.
- Likes and enrollments are still stored in memory and reset on backend restart.
