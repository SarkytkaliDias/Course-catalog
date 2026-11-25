# Course Catalog API — Lab 7

FastAPI now uses PostgreSQL through SQLAlchemy and Alembic.

- SQLAlchemy ORM models and per-request sessions.
- API routes query PostgreSQL instead of Python lists.
- Constraint-name based error handling.
- Alembic migrations 0001 and 0002.
- Migration 0002 adds required course level safely: nullable -> backfill -> NOT NULL.
- Verification scripts: check_db.py, check_models.py, try_errors.py.

Expected final state:
- alembic current -> 0002 (head)
- alembic check -> No new upgrade operations detected.
