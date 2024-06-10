<template>
  <footer
    class="container mx-auto min-h-20 max-w-screen-xl border-t-[1px] border-slate-500 p-4 text-slate-900 dark:text-slate-100"
  >
    <div class="mx-auto grid h-full gap-4 md:grid-cols-10 md:gap-8 md:px-8">
      <div class="md:col-span-2">
        <Logo :class="'my-auto h-10 w-auto'" />
      </div>
      <div class="md:col-span-8">
        <p class="text-sm text-slate-900 dark:text-slate-200">
          10500 N De Anza Blvd, Cupertino, CA 95014, United States<br /><a
            :href="'mailto:' + email"
            ><EnvelopeIcon
              class="mr-1 inline-block size-4"
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
</script>
