# Course Catalog API — Lab 8

REST and GraphQL now run side-by-side over the same SQLAlchemy services and PostgreSQL database.

## Lab 8 highlights

- Shared application rules in `services.py`.
- REST Problem Details responses in `problem.py`.
- Strawberry GraphQL at `/graphql`.
- Queries, nested relations, `enroll` and `likeCourse` mutations.
- `X-SQL-Queries` instrumentation and DataLoaders to remove N+1.
- Query protection: depth <= 5, aliases <= 10, input validation, masked unexpected errors, configurable introspection.
- REST vs GraphQL measurements for the My Courses screen.

Expected checks:
- `try_errors.py -> 5 of 5 as expected`
- `try_graphql.py -> 8 of 8 as expected`
- `try_n_plus_1.py -> 3 / 3 SQL queries`
- `flood_likes.py -> 12 aliases found, 0 SQL queries`
