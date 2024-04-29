<template>
  <div class="p-4 mt-4 bg-blue-300 dark:bg-blue-950" id="footer">
    <p class="mb-4"><a :href="'mailto:' + email">{{ email }}</a></p>
    <div class="flex justify-between">
      <Menu />
      <OtherLang />
    </div>
  </div>
</template>

<script setup lang="ts">
  const config = useRuntimeConfig();
  const email = config.public.email;
</script>