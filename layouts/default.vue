<template>
  <div
    class="flex min-h-svh flex-col justify-between bg-slate-100 font-Raleway text-slate-900 dark:bg-slate-900 dark:text-slate-200"
  >
    <div class="mx-auto min-w-full max-w-screen-xl p-4 pt-0">
      <Header />
      <main id="content" class="mx-auto max-w-screen-xl">
        <NuxtPage />
      </main>
    </div>
    <Footer />
  </div>
</template>
<script setup lang="ts">
const { t, locale } = useI18n();
const config = useRuntimeConfig();
const route = useRoute();
const siteurl = config.public.siteurl;
const currentFullUrl = computed(() => `${siteurl}${route.path}`);

// Watch the currentFullUrl to update SEO metadata when it changes
watchEffect(() => {
  useSeoMeta({
    ogUrl: currentFullUrl.value,
    ogImage: `${siteurl}/share.jpg`,
    twitterImage: `${siteurl}/share.jpg`,
    twitterCard: "summary_large_image",
  });
});

useHead({
  titleTemplate: (titleChunk) => `${titleChunk} - ${t("siteName")}`,
  htmlAttrs: {
    lang: locale.value,
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],
});
</script>
