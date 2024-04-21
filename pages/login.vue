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
const { query } = useRoute();
const user = useSupabaseUser();

watchEffect(async () => {
  if(user.value){
    await navigateTo(query.redirectTo, {
      replace: true
    })
  }
})

const login = async () => {
  const redirectTo = `${window.location.origin}${query.redirectTo}`
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: { redirectTo }
  });

  if (error) {
    console.error('Error logging in:', error.message);
  }
};

</script>

<style>

</style>