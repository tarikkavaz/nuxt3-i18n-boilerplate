<template>
  <div class="">
    <NuxtLinkLocale to="/" class="px-4 py-2"> {{ $t('index') }} </NuxtLinkLocale>
    <NuxtLinkLocale to="about" class="px-4 py-2"> {{ $t('about') }} </NuxtLinkLocale>
    <NuxtLinkLocale to="products" class="px-4 py-2"> {{ $t('products') }} </NuxtLinkLocale>
    <NuxtLinkLocale to="contact" class="px-4 py-2"> {{ $t('contact') }} </NuxtLinkLocale>
  </div>
</template>
<style scoped>
a:hover {
  @apply bg-black/20;
}
</style>