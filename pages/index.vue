<template>
  <h2 class="font-Libre">{{ $t("welcome") }}</h2>
  <component :is="currentContent"></component>
</template>
<script setup lang="ts">
const pageName = "index";
const { t } = useI18n();
const { headerData } = useHeaderData();
const { currentContent } = pageSetup(pageName);
headerData.value = {
  image: "/images/0.png",
  title: t(`${pageName}HeaderTitle`),
  paragraph: t(`${pageName}HeaderDescription`),
};
</script>
