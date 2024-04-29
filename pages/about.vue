<template>
  <div id="content" class="p-4 mb-4 bg-purple-400 dark:bg-purple-950">
    <h1>{{ $t(pageName) }}</h1>
    <h2>{{ $t('welcome') }}</h2>
    <component :is="currentContent"></component>
  </div>
  <Alert class="text-red-900 bg-red-200 dark:text-red-200 dark:bg-red-900">
    <p>{{ $t('alert') }}</p>
  </Alert>
</template>
<script setup lang="ts">
  const pageName = 'about'; // Set Page Name
  const { currentContent } = pageSetup(pageName);
</script>