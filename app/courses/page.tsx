import { CourseCard } from "@/components/CourseCard";
import { getCourses } from "@/lib/courses";

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10">
        <h1 className="text-4xl font-black">Courses</h1>
        <p className="mt-3 text-slate-600">Choose a course to view its details.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </section>
  );
}
