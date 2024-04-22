export default async (chapterSlug, lessonSlug) => {
  const { data, error } = await useFetch(
    `/api/course/chapter/${chapterSlug}/lesson/${lessonSlug}`
  );

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: `Could not fetch lesson ${lessonSlug} in chapter ${chapterSlug}`,
    });
  }

  return data;
};
