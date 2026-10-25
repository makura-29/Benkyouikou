
import { mockCourse as course } from "@/data/mockCourses";
import CourseCard from "@/components/CourseCard";
import LessonCard from "@/components/LessonCard";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF7F0]">
      {/* Navigation */}
      <Navbar />

      <div className="mx-auto max-w-5xl space-y-10 px-6 py-12">
        {/* Welcome */}
        <section id="dashboard">
          <p className="mb-3 text-xs font-semibold tracking-widest text-[#CD5C5C]">
            YOUR LEARNING SPACE
          </p>

          <h1 className="text-3xl font-semibold text-[#49372D] sm:text-4xl">
            おかえりなさい 🌸
          </h1>

          <p className="mt-3 text-[#796556]">
            Welcome back. A little progress every day.
          </p>
        </section>

        {/* My Courses */}
        <section id="courses" className="space-y-5">
          <h2 className="text-2xl font-semibold text-[#49372D]">
            My Courses
          </h2>

          <CourseCard course={course} />
        </section>

        {/* Today's Lesson */}
        <section id="today-lesson" className="space-y-5">
          <h2 className="text-2xl font-semibold text-[#49372D]">
            Today&apos;s Lesson
          </h2>

          <LessonCard course={course} />
        </section>
      </div>
    </main>
  );
}
