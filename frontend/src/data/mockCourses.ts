
export type Course = {
  id: string;
  title: string;
  description: string;
  progress: number;
  completedLessons: number;
  totalLessons: number;
  currentLesson: string;
  duration: number;
};

export const mockCourse: Course = {
  id: "n5-n4-demo",
  title: "JLPT N5 → N4",
  description: "Build your Japanese foundations",
  progress: 20,
  completedLessons: 3,
  totalLessons: 15,
  currentLesson: "て-form basics",
  duration: 20,
};
