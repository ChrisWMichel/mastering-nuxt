<template>
   <div>
    <p class="mt-0 uppercase font-bold text-slate-400 mb-1">
      Lesson {{ chapter.number }} - {{ lesson.number }}
    </p>
    <h2 class="my-0 text-lg font-bold">{{ lesson.title }}</h2>
    <div class="flex space-x-4 mt-2 mb-8">
      <NuxtLink
        v-if="lesson.sourceUrl"
        class="font-normal text-md text-gray-500"
        :to="lesson.sourceUrl"
      >
        Download Source Code
      </NuxtLink>
      <NuxtLink
        v-if="lesson.downloadUrl"
        class="font-normal text-md text-gray-500"
        :to="lesson.downloadUrl"
      >
        Download Video
      </NuxtLink>
    </div>
    <VideoPlayer
      v-if="lesson.videoId"
      :videoId="lesson.videoId"
    />
    <p class="mb-5">{{ lesson.text }}</p>
   
      <lessonCompleteBtn
      :model-value="isLessonComplete"
      @update:model-value="toggleComplete"
    />
    
  </div>
</template>


<script setup>  
const  course  = await useCourse();
const route = useRoute();
const { chapterSlug, lessonSlug } = route.params;
const lesson = await useLesson(chapterSlug, lessonSlug);
              
definePageMeta({
  middleware:[
    'auth'
  ]
});

      
  const chapter = computed(() => course.value.chapters.find(chapter => chapter.slug === route.params.chapterSlug));

  if(!chapter.value || !lesson.value){
      abortNavigation(
        createError({
        statusCode: 404,
        message: 'Chapter or lesson not found'
      })
    );
  }
const title = computed(() => `${lesson.value.title} - ${course.value.title}`);

useHead({
  title,
});

const progress = useLocalStorage('progress', []);

const isLessonComplete = computed(() =>{
  if(!progress.value[chapter.value.number -1]){
    return false;
  }

  if (
    !progress.value[chapter.value.number - 1][
      lesson.value.number - 1
    ]
  ) {
    return false;
  }
  return progress.value[chapter.value.number - 1][
    lesson.value.number - 1
  ];
});

const toggleComplete = () => {
  if (!progress.value[chapter.value.number - 1]) {
    progress.value[chapter.value.number - 1] = [];
  }
  progress.value[chapter.value.number - 1][
    lesson.value.number - 1
  ] = !isLessonComplete.value;
};
</script>

<style>

</style>