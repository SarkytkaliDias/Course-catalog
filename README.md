# Course Catalog — Labs 1, 2 and 5

Project for the **Advanced Web Technologies** course.

## Student Information

- **Full Name:** Sarkytkali Dias
- **Group:** IT3-2301

## Current state

The frontend now connects to the FastAPI Course Catalog backend. Lab 1 created the Next.js catalog, Lab 2 added Tailwind/shadcn UI styling, and Lab 5 replaces the mock data with real API requests and adds browser-side interactions.

## Run both projects

Start the backend first:

```powershell
cd course-catalog-api
.venv\Scripts\Activate.ps1
pip install -r requirements.txt
fastapi dev main.py
```

Then start the frontend in a second terminal:

```powershell
cd course-catalog
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment variables

Create `.env.local` in the project root:

```env
API_URL=http://localhost:8000
NEXT_PUBLIC_API_URL=http://localhost:8000
```

`API_URL` is server-only. `NEXT_PUBLIC_API_URL` is intentionally available to Client Components, so it must not contain secrets. The real `.env.local` file is ignored by git.

## Lab 5 — What changed

- `getCourses()` and `getCourse()` now fetch real data from FastAPI using `cache: "no-store"`.
- `getCourse()` treats backend 404 as `undefined`, so the page can call `notFound()`.
- `generateStaticParams` was removed because course data now comes from a live backend.
- Added `error.tsx` with `retry()` for backend failures.
- Added `/filter` with SWR; the browser directly calls FastAPI and therefore requires CORS.
- Like requests update the server and survive a frontend page reload.
- Enrollment sends JSON to FastAPI and displays successful and validation responses.

## Decisions

`generateStaticParams` was removed because the backend is now the source of truth and may change independently of a frontend build. Keeping static params would cause build-time backend requests and stale course pages.

The like POST has no request body or special headers, so it is a CORS simple request and needs no preflight. Enrollment sends `Content-Type: application/json`, so the browser first sends an `OPTIONS` preflight request.

## Breakage journal

### 1. Removed CORSMiddleware
- Console: `No 'Access-Control-Allow-Origin' header is present...`
- Network: browser-side requests are blocked while server-rendered `/courses` can still work.
- Cause: browser received no CORS permission header.

### 2. Trailing slash in allowed origin
- Changed `http://localhost:3000` to `http://localhost:3000/`.
- Network: the browser origin no longer exactly matches the allowed origin.
- Cause: an origin is scheme + host + port, with no trailing slash.

### 3. POST method not allowed
- Removed/changed the CORS allowed methods.
- Network: the enrollment preflight fails.
- Cause: POST was not permitted by the preflight response.

### 4. Opened frontend through 127.0.0.1
- Request Origin became `http://127.0.0.1:3000`.
- Backend allowed only `http://localhost:3000`.
- Cause: `localhost` and `127.0.0.1` are different origins.

### 5. Python error that looked like CORS
- Temporarily used `p["ofset"]` instead of `p["offset"]`.
- Browser showed a missing CORS header, but the backend terminal showed status 500 and a Python `KeyError`.
- Cause: backend exception, not the CORS configuration.

## Build

```bash
npm run build
```
