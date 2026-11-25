# Course Catalog API

A standalone FastAPI backend for the Advanced Web Technologies course catalog project.

## How to run

### Windows PowerShell

```powershell
python -m venv .venv
.venv\Scripts\Activate.ps1
pip install -r requirements.txt
fastapi dev main.py
```

Open:

- `http://127.0.0.1:8000/`
- `http://127.0.0.1:8000/docs`
- `http://127.0.0.1:8000/redoc`
- `http://127.0.0.1:8000/openapi.json`

## Routes

- `GET /` — server health check
- `GET /courses` — course list with filtering, sorting, and pagination
- `GET /courses/{course_id}` — one course or a 404 response

## Lab 4

This commit introduces the first FastAPI backend. Course data still lives in Python memory in `data.py`.
