<template>
  <div id="content" class="p-4 mb-4 bg-purple-400 dark:bg-purple-950">
    <h1>{{ $t(pageName) }}</h1>
    <h2>{{ $t('welcome') }}</h2>
    <component :is="currentContent"></component>
  </div>
</template>
<script setup lang="ts">
  const pageName = 'index'; // Set Page Name
  const { currentContent } = pageSetup(pageName);
</script>
