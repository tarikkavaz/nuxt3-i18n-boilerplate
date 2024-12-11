<template>
  <component :is="currentContent"></component>
  <Alert class="bg-red-200 text-red-900 dark:bg-red-900 dark:text-red-200">
    <p>{{ $t("alert") }}</p>
  </Alert>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "vertical",
});
const pageName = "about_company";
const { t } = useI18n();
const { headerData } = useHeaderData();
const { currentContent } = pageSetup(pageName);
headerData.value = {
  image: "/images/d.png",
  title: t(`${pageName}HeaderTitle`),
  paragraph: t(`${pageName}HeaderDescription`),
};
</script>
