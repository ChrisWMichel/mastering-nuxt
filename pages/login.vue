<template>
  <div class="prose w-full max-w-2xl">
    <h1>Log into {{ title }}</h1>
    <button 
      class="bg-blue-500 text-white px-4 py-2 rounded"
      @click="login"
      >Login with Github</button>
  </div>
</template>

<script setup>
const { title } = useCourse();
const supabase = useSupabaseClient();

const login = async () => {
  const { user, session, error } = await supabase.auth.signInWithOAuth({
    provider: 'github'
  });
  console.log('user', user);
  if (error) {
    console.error('Error logging in:', error.message);
  }
};

</script>

<style>

</style>