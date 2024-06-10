<template>
  <div
    class="flex min-h-svh flex-col justify-between bg-slate-100 font-Raleway text-slate-900 dark:bg-slate-900 dark:text-slate-200"
  >
    <div class="mx-auto min-w-full max-w-screen-xl p-4 pt-0">
      <Header />
      <main class="container mx-auto w-full">
        <div
          class="w-full rounded bg-slate-400 p-6 text-center dark:bg-slate-800"
        >
          <h1 class="mt-5 text-3xl">{{ $t("error") }}</h1>
          <h2 class="mt-5 text-3xl font-bold">{{ error?.statusCode }}</h2>
        </div>
      </main>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n();
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});
</script>
