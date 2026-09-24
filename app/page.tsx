import Link from "next/link";

export default function HomePage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-700">Advanced Web Technologies</p>
      <h1 className="max-w-3xl text-5xl font-black tracking-tight text-slate-950">Modern Course Catalog</h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Welcome! Explore the courses used throughout our semester project and open each course to see its details.</p>
      <Link href="/courses" className="mt-8 inline-block rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800">Browse courses</Link>
    </section>
  );
}
