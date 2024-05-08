<template>
  <component :is="currentContent"></component>
  <Alert>
    <p>{{ $t('alert') }}</p>
  </Alert>
  <div class="relative h-0 mb-6 overflow-hidden pb-96">
      <iframe
        class="absolute top-0 left-0 w-full h-full md:h-96"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6018.543530490212!2d29.033730121677408!3d41.041185677012066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7d8d2631daf%3A0xe40f8fb4f2e631cd!2sBosphorus%20Bridge!5e0!3m2!1sen!2str!4v1715166574055!5m2!1sen!2str"
        frameborder="0"
        style="border:0;"
        allowfullscreen="false"
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
</template>
<script setup lang="ts">
const pageName = 'contact';
const { t } = useI18n();
const { headerData } = useHeaderData();
const { currentContent } = pageSetup(pageName);
headerData.value = {
  image: '/images/c.png',
  title: t(`${pageName}HeaderTitle`),
  paragraph: t(`${pageName}HeaderDescription`)
};
</script>
