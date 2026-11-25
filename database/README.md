# Course Catalog Database — Lab 6

PostgreSQL schema for the Course Catalog project.

## Contents

- `schema.sql` — courses, students and enrollments tables with PK/FK/CHECK/UNIQUE constraints.
- `seed.sql` — 6 courses, 3 students and 6 enrollments.
- `queries.sql` — SQL equivalents of the API routes.
- `experiments/idx_data.sql` — larger dataset for EXPLAIN/INDEX experiments.

## Main ideas

The lab replaces temporary in-memory data with a normalized relational design. It demonstrates constraints, SQLSTATE errors, indexes, `EXPLAIN ANALYZE`, and transactions with `BEGIN`, `COMMIT` and `ROLLBACK`.

Expected clean seed counts: courses=6, students=3, enrollments=6.
