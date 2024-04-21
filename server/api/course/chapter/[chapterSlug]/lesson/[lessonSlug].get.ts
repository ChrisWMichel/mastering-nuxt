import { Lesson, LessonWithPath, Chapter, Course } from "~/types/course";
import course from "~/server/courseData";

course as Course;

export default defineEventHandler((event) => {
 
  const { chapterSlug, lessonSlug } = event.context.params as { chapterSlug: string, lessonSlug: string };

  const chapter: Maybe<Chapter> = (course as Course).chapters.find(
    (chapter) => chapter.slug === chapterSlug
  );

  if (!chapter) {
    throw createError({
      statusCode: 404,
      message: "Chapter not found",
    });
  }

  const lesson: Maybe<Lesson> = chapter.lessons.find((lesson) => lesson.slug === lessonSlug);

  if (!lesson) {
    throw createError({
      statusCode: 404,
      message: "Lesson not found",
    });
  }

  return {
    ...lesson, 
    path: `/course/chapter/${chapterSlug}/lesson/${lessonSlug}`};
});
