<template>
  <component :is="currentContent"></component>
  <div class="mb-4 p-4">
    <Products />
  </div>
</template>
<script setup lang="ts">
const pageName = "products";
const { t } = useI18n();
const { headerData } = useHeaderData();
const { currentContent } = pageSetup(pageName);
headerData.value = {
  image: "/images/a.png",
  title: t(`${pageName}HeaderTitle`),
  paragraph: t(`${pageName}HeaderDescription`),
};
</script>
