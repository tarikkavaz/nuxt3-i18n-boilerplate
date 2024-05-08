<template>
  <footer class="max-w-screen-xl mx-auto dark:text-slate-100 text-slate-900 border-slate-500 border-t-[1px] container p-4 min-h-18">
    <p><a :href="'mailto:' + email">{{ email }}</a> </p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea distinctio molestias, dicta veniam totam dolorem, minus commodi aperiam ab explicabo.</p>
  </footer>
</template>

<script setup lang="ts">
  const config = useRuntimeConfig();
  const email = config.public.email;
</script>