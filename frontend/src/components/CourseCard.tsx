
import type { Course } from "@/data/mockCourses";

type CourseCardProps = {
  course: Course;
};

export default function CourseCard({
  course,
}: CourseCardProps) {
  return (
    <article className="rounded-2xl border border-[#E8DFD4] bg-[#FFFDF8] p-6 shadow-sm sm:p-8">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <span className="rounded-full bg-[#DCE7D7] px-3 py-1 text-xs font-medium text-[#49372D]">
          In progress
        </span>

        <span className="text-xs text-[#796556]">
          Sample course · Mock data
        </span>
      </div>

      <h3 className="text-2xl font-semibold text-[#49372D]">
        {course.title}
      </h3>

      <p className="mt-2 text-[#796556]">
        {course.description}
      </p>

      <div className="mt-8">
        <div className="mb-2 flex justify-between text-sm">
          <span className="text-[#796556]">
            Course progress
          </span>

          <span className="font-semibold text-[#49372D]">
            {course.progress}%
          </span>
        </div>

        <div
          role="progressbar"
          aria-label="Course progress"
          aria-valuenow={course.progress}
          aria-valuemin={0}
          aria-valuemax={100}
          className="h-2 overflow-hidden rounded-full bg-[#F3E2DE]"
        >
          <div
            className="h-full rounded-full bg-[#CD5C5C]"
            style={{ width: `${course.progress}%` }}
          />
        </div>

        <p className="mt-3 text-sm text-[#796556]">
          {course.completedLessons} of {course.totalLessons} lessons completed
        </p>
      </div>

      <a
        href="#today-lesson"
        className="mt-8 inline-flex rounded-xl bg-[#CD5C5C] px-6 py-3 font-medium text-white transition-colors hover:bg-[#B94F4F]"
      >
        Continue learning →
      </a>
    </article>
  );
}
