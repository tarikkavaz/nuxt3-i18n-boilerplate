<template>
  <div
    class="mx-auto mb-10 max-w-screen-xl bg-slate-100 dark:bg-slate-900 [&_.router-link-active]:border-malachite-500 [&_.router-link-exact-active]:border-malachite-500"
  >
    <header class="absolute inset-x-0 top-0 z-50">
      <div class="mx-auto max-w-screen-xl">
        <div class="flex justify-between pt-6">
          <Logo :class="'ml-3 h-16 pt-4 md:ml-0 md:h-24'" />
          <button
            type="button"
            class="rounded-md p-2.5 text-slate-900 dark:text-slate-100 lg:hidden"
            @click="mobileMenuOpen = true"
          >
            <client-only>
              <span class="sr-only">{{ $t("closemenu") }}</span>
            </client-only>
            <Bars3Icon class="mr-3 h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      <MenuMobile
        :mobileMenuOpen="mobileMenuOpen"
        :headerData="headerData"
        :navigation="navigation"
        @update:mobileMenuOpen="mobileMenuOpen = $event"
      />
    </header>
    <div class="relative">
      <div
        class="absolute right-0 z-50 hidden rounded-bl-md bg-slate-100 p-4 dark:bg-slate-900 md:block"
      >
        <LangOther
          class="text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100 md:pl-4"
        />
      </div>
      <div class="mx-auto max-w-7xl">
        <div class="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
          <svg
            class="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-slate-100 dark:fill-slate-900 lg:block"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="0,0 90,0 50,100 0,100" />
          </svg>
          <div class="relative py-20 lg:py-28 lg:pr-0">
            <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <client-only>
                <h1
                  class="text-balance font-Libre text-5xl font-bold tracking-tight text-malachite-600 dark:text-malachite-300"
                >
                  {{ headerData.title || " " }}
                </h1>
                <p
                  class="mt-6 text-balance text-lg leading-8 text-gray-600 dark:text-slate-100"
                >
                  {{ headerData.paragraph || " " }}
                </p>
              </client-only>
            </div>
          </div>
        </div>
      </div>
      <div
        class="relative bg-slate-100 dark:bg-slate-900 md:rounded-br-2xl lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
      >
        <client-only>
          <div
            class="absolute inset-0 bg-malachite-400 opacity-20 bg-blend-darken dark:bg-malachite-950 dark:opacity-60 md:rounded-br-2xl"
          ></div>
          <img
            class="aspect-[3/2] object-cover md:rounded-br-2xl lg:aspect-auto lg:h-full lg:w-full"
            :src="headerData.image || '/images/0.png'"
            alt=""
          />
        </client-only>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { Bars3Icon } from "@heroicons/vue/24/outline";
const { t } = useI18n();
const { headerData } = useHeaderData();
const mobileMenuOpen = ref(false);
</script>
