
import type { Course } from "@/data/mockCourses";

type LessonCardProps = {
  course: Course;
};

export default function LessonCard({
  course,
}: LessonCardProps) {
  return (
    <article className="rounded-2xl border border-[#E8DFD4] bg-[#FFFDF8] p-6 sm:p-8">
      <p className="mb-2 text-xs font-semibold tracking-widest text-[#CD5C5C]">
        UP NEXT · SAMPLE LESSON
      </p>

      <h3 className="text-xl font-semibold text-[#49372D]">
        {course.currentLesson}
      </h3>

      <p className="mt-2 text-sm text-[#796556]">
        Grammar · {course.duration} minutes
      </p>

      <p className="mt-5 text-sm leading-7 text-[#796556]">
        Learn how Japanese verbs connect to requests,
        instructions, and everyday expressions.
      </p>

      <p className="mt-5 text-xs text-[#796556]">
        Lesson content and quizzes are not implemented yet.
      </p>
    </article>
  );
}
