import Link from "next/link";

export default function CourseNotFound() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-4xl font-black">Course not found</h1>
      <p className="mt-4 text-slate-600">The requested course does not exist.</p>
      <Link href="/courses" className="mt-6 inline-block font-semibold text-blue-700">← Back to courses</Link>
    </section>
  );
}
