# Course Catalog API — Lab 9

Final backend state for Labs 4–9.

## Lab 9

- Migration `0003` creates `users` with unique email/student link, role CHECK and `ON DELETE SET NULL`.
- Passwords are stored as Argon2id hashes.
- JWT access tokens contain `sub`, `iss`, `iat`, and `exp`; the role is read from PostgreSQL on each authenticated request.
- REST access uses 401/403, admin checks and owner checks.
- GraphQL adds current user to context and protects `me`, `students`, and `Student.email`.
- Next.js stores the token in an HttpOnly/Secure/SameSite=Lax cookie and verifies it through `GET /me`.
- Route and GraphQL scanners document endpoints that remain open.

Expected checks:
- `check_users.py -> 4 of 4 as expected`
- `try_auth.py -> 6 of 6 as expected`
- `try_tokens.py -> 9 of 9 as expected`
- `try_access.py -> 14 of 14 as expected`
- `try_graphql_access.py -> 9 of 9 as expected`

Never commit the real `.env` or `SECRET_KEY`.
