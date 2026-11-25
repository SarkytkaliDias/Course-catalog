# Lab 9 frontend — Login and account

- `lib/session.ts` stores JWT in an HttpOnly, Secure, SameSite=Lax cookie.
- `app/login` uses a Server Action to call `POST /auth/login`.
- `lib/dal.ts` verifies the cookie through API `GET /me`.
- `proxy.ts` performs a quick cookie-presence redirect for `/account`.
- `app/account` shows the authenticated user and logs out by deleting the cookie.

Create local `.env.local` with `API_URL=http://localhost:8000`; do not commit it.
