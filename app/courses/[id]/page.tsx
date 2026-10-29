import { EnrollForm } from "@/components/EnrollForm";
import { LikeButton } from "@/components/LikeButton";
import { getCourse } from "@/lib/courses";
import { notFound } from "next/navigation";

export default async function CoursePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const course = await getCourse(id);
  if (!course) notFound();

  return (
    <article className="mx-auto max-w-4xl px-6 py-16">
      <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
        {course.credits} credits
      </span>
      <h1 className="mt-6 text-5xl font-black tracking-tight">{course.title}</h1>
      <p className="mt-6 text-xl leading-8 text-slate-600">{course.description}</p>

      <div className="mt-10">
        <LikeButton courseId={course.id} initialLikes={course.likes} />
      </div>

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold">Enroll in this course</h2>
        <EnrollForm courseId={course.id} />
      </section>
    </article>
  );
}
