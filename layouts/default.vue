<template>
  <div class="max-w-screen-xl p-4 mx-auto">
    <NuxtLoadingIndicator />
    <Header />
    <main>
      <NuxtPage />
    </main>
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
      twitterCard: 'summary_large_image',
    });
  });

  useHead({
    titleTemplate: (titleChunk) => `${titleChunk} - ${t('siteName')}`,
    htmlAttrs: {
      lang: locale.value
    },
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon.png'
      }
    ]
  })
</script>
<style>
  * {
    font-family: 'Raleway', sans-serif;
  }
  body {
    @apply bg-slate-100 dark:bg-slate-950 text-slate-800 dark:text-slate-200;
  }
  #header {
    .router-link-active {
      @apply border-b-2 border-green-500;
    }
  }
  #content {
    h1 {
      @apply text-3xl font-bold my-8;
    }
    h2 {
      @apply text-2xl font-bold my-6;
    } 
    h3 {
      @apply text-xl font-bold my-4;
    }
    h4 {
      @apply text-lg font-bold my-2;
    }
    h5 {
      @apply text-base font-bold my-1;
    }
    p {
      @apply my-4;
    }
    a {
      @apply bg-black/50 text-white px-1 py-1 rounded-md;
      &:hover {
        @apply bg-black;
      }
    }
  }
  #footer {
    .router-link-active {
      @apply border-b-2 border-blue-500;
    }
  }
</style>
