export default defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser();

  if (user.value || to.params.chapter === "1-chapter-1") {
    // if (to.path !== from.path) {
    //   return navigateTo(to.path);
    // }
    return true;
  } else {
    return navigateTo("/login");
  }
});
