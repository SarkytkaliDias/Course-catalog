import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-slate-200 bg-white">
          <nav className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/" className="text-lg font-bold text-slate-950">
              Course Catalog
            </Link>

            <div className="flex flex-wrap gap-2 text-sm font-medium">
              <Link href="/" className="rounded-md px-3 py-2 transition hover:bg-slate-100 hover:text-blue-700">
                Home
              </Link>
              <Link href="/courses" className="rounded-md px-3 py-2 transition hover:bg-slate-100 hover:text-blue-700">
                Courses
              </Link>
              <Link href="/about" className="rounded-md px-3 py-2 transition hover:bg-slate-100 hover:text-blue-700">
                About
              </Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
