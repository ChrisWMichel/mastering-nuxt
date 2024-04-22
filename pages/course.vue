<template>
  <div>
    <div class="mb-4 flex flex-row justify-between items-center w-full">
      <h1 class="text-4xl">
        <span class="font-medium">
          Course:
          <span class="font-bold" >{{ course.title }}</span>
        </span>
      </h1>
      <UserCard />
    </div>
   <div class="flex flex-row justify-center flex-grow">
      <div
        class="prose mr-4 p-8 bg-white rounded-md min-w-[20ch] max-w-[30ch] flex flex-col"
      >
        <h3>Chapters</h3>
        <div
          class="space-y-1 mb-4 flex flex-col"
          v-for="chapter in course.chapters"
          :key="chapter.slug"
        >
          <h4>{{ chapter.title }}</h4>
          <NuxtLink
            v-for="(lesson, index) in chapter.lessons"
            :key="lesson.slug"
            class="flex flex-row space-x-1 no-underline prose-sm font-normal py-1 px-4 -mx-4 text-gray-600"
            exact-active-class="!text-blue-500"
            :to="lesson.path"
          >
            <span class="text-gray-500"
              >{{ index + 1 }}.</span
            >
            <span>{{ lesson.title }}</span>
          </NuxtLink>
        </div>
      </div>

      <div dir="ltr">
        <div class="p-12 bg-white rounded-md w-full ">
          <NuxtErrorBoundary >
            <NuxtPage />
            <template #error="{ error }">
              <div class="p-8 bg-red-100 text-red-800 rounded-md">
                <h2 class="text-red-800">Oh no, something went wrong with the lesson!</h2>
                <code>{{ error }}</code>
              </div>
              <button
                class="mt-4 bg-red-500 text-white px-4 py-2 rounded-md"
                @click="resetError(error)">Reset</button>
            </template>
          </NuxtErrorBoundary>
      </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const  course  = await useCourse();
const firstLesson = await useFirstLesson();
 const resetError = async (error) => {
  await navigateTo(firstLesson.path)
    error.value = null;
  // throw createError({
  //   fatal: true,
  //   message: 'An error occurred',
  // })
  };
</script>

<style>

</style>