<template>
  <div id="content" class="p-4 mb-4 bg-purple-400 dark:bg-purple-950">
    <h1>{{ $t(pageName) }}</h1>
    <h2>{{ $t('welcome') }}</h2>
    <component :is="currentContent"></component>
  </div>
  <Alert>
    <p>{{ $t('alert') }}</p>
  </Alert>
</template>
<script setup lang="ts">
  const pageName = 'contact'; // Set Page Name
  const { currentContent } = pageSetup(pageName);
</script>