<template>
    <div>
       <NuxtLayout>
        <div class="prose">
            <h1>Dang</h1>
            <p>It looks like something broke.</p>
            <p>Sorry about that.</p>
            <p>Here's what happened:</p>
            <p>
                <strong>{{ error.message }}</strong>
            </p>
        </div>
        <div class="bg-gray-300 text-red-800 p-4 rounded-md">           
            <NuxtLink to="/" class="btn">Go back to homepage</NuxtLink>
        </div>
       </NuxtLayout>
    </div>
</template>

<script setup>
const error = useError();


</script>