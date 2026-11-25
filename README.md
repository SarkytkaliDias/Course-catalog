# Course Catalog — Advanced Web Technologies Labs

Student: **Sarkytkali Dias** · Group **IT3-2301**

This repository keeps the Course Catalog laboratory work in one visible commit history.

## Repository layout

- Root (`app/`, `components/`, `lib/`) — Next.js frontend.
- `backend/` — FastAPI backend, evolved from in-memory Lab 4 to PostgreSQL/GraphQL/JWT in Labs 7–9.
- `database/` — Lab 6 PostgreSQL schema, seed, queries, index and transaction experiments.

## Lab history

| Lab | Main result |
|---|---|
| Lab 1 | Initial Next.js Course Catalog |
| Lab 2 | Tailwind CSS + shadcn/ui styling |
| Lab 3 | No separate Lab 3 source was available in the chat used to assemble this repository |
| Lab 4 | First FastAPI backend |
| Lab 5 | Frontend/backend integration, CORS, likes and enrollments |
| Lab 6 | PostgreSQL relational schema and SQL experiments |
| Lab 7 | SQLAlchemy models + Alembic migrations 0001/0002 |
| Lab 8 | GraphQL alongside REST, DataLoaders, N+1 measurement and protection |
| Lab 9 | Users, Argon2id, JWT, roles, REST/GraphQL access control, login/account |

## Current backend state

The latest `backend/` corresponds to Lab 9. Create a real local `backend/.env` from `backend/.env.example`; never commit it.

The current Alembic chain is:

```text
0001 -> 0002 -> 0003 (head)
```

## Current frontend state

The latest frontend contains the Lab 8 REST/GraphQL My Courses pages and the Lab 9 login/account flow.

Local frontend environment variables belong in `.env.local` and are intentionally not committed.

## Important

The repository does not contain real secrets, local virtual environments, `node_modules`, or generated build folders.
