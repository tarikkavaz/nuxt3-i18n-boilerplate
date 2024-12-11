<template>
  <footer
    class="container mx-auto min-h-20 max-w-screen-xl border-t-[1px] border-slate-500 p-4 text-slate-900 dark:text-slate-100"
  >
    <div class="grid h-full gap-4 mx-auto md:grid-cols-12 md:gap-8 md:px-8">
      <div class="md:col-span-2">
        <Logo :class="'my-auto h-10 w-auto'" />
      </div>
      <div class="md:col-span-4">
        <p class="text-sm text-slate-900 dark:text-slate-200">
          {{ siteName || " " }} &copy; {{ new Date().getFullYear() }}
        </p>
      </div>
      <div class="md:col-span-6">
        <p class="text-sm text-slate-900 dark:text-slate-200">
          10500 N De Anza Blvd, Cupertino, CA 95014, United States<br /><a
            :href="'mailto:' + email"
            ><EnvelopeIcon
              class="inline-block mr-1 size-4"
              aria-hidden="true"
            />{{ email }}</a
          >
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const email = config.public.email;
import { EnvelopeIcon } from "@heroicons/vue/24/outline";
const { t, locale } = useI18n();
const siteName = t("siteName");
</script>
