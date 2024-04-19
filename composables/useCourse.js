 import courseData from './courseData';

  const useCourse = ()  => {
  return {
      ...courseData,
      chapters: courseData.chapters.map((chapter) => ({
        ...chapter,
        lessons: chapter.lessons.map((lesson) => ({
          ...lesson,
          path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`
      })),
    })),
  };
};

export default useCourse;

