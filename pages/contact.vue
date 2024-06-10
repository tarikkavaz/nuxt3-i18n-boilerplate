<template>
  <component :is="currentContent"></component>
  <Alert>
    <p>{{ $t("alert") }}</p>
  </Alert>
  <div class="relative mb-6 h-0 overflow-hidden pb-96">
    <iframe
      class="absolute left-0 top-0 h-full w-full md:h-96"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25380.483019183197!2d-122.06915080547336!3d37.32923997103946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5b13fdcecf7%3A0xdc5c21978a3d43f5!2sApple!5e0!3m2!1sen!2str!4v1718013014568!5m2!1sen!2str"
      frameborder="0"
      style="border: 0"
      allowfullscreen="false"
      aria-hidden="false"
      tabindex="0"
    ></iframe>
  </div>
</template>
<script setup lang="ts">
const pageName = "contact";
const { t } = useI18n();
const { headerData } = useHeaderData();
const { currentContent } = pageSetup(pageName);
headerData.value = {
  image: "/images/c.png",
  title: t(`${pageName}HeaderTitle`),
  paragraph: t(`${pageName}HeaderDescription`),
};
</script>
