<template>
  <component :is="currentContent"></component>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "vertical",
});
const pageName = "test";
const { t } = useI18n();
const { headerData } = useHeaderData();
const { currentContent } = pageSetup(pageName);
headerData.value = {
  image: "/images/d.png",
  title: t(`${pageName}HeaderTitle`),
  paragraph: t(`${pageName}HeaderDescription`),
};
</script>
