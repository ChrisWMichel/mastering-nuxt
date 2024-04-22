<template>
  <div>
    <NuxtLink 
    :href="firstLesson.path"
    class="undlerline font-medium">
      Go to the course
    </NuxtLink>
  </div>
</template>

<script setup>

const firstLesson = await useFirstLesson();


</script>

<style>

</style>