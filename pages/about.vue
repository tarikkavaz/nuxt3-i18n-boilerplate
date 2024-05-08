<template>
  <component :is="currentContent"></component>
  <Alert class="text-red-900 bg-red-200 rounded-lg dark:text-red-200 dark:bg-red-900">
    <p>{{ $t('alert') }}</p>
  </Alert>
</template>
<script setup lang="ts">
const pageName = 'about';
const { t } = useI18n();
const { headerData } = useHeaderData();
const { currentContent } = pageSetup(pageName);
headerData.value = {
  image: '/images/d.png',
  title: t(`${pageName}HeaderTitle`),
  paragraph: t(`${pageName}HeaderDescription`)
};
</script>