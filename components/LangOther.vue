<template>
  <div>
    <NuxtLink
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      class="flex items-center gap-1"
    >
      <GlobeAltIcon class="size-4" />{{ locale.name }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { GlobeAltIcon } from "@heroicons/vue/20/solid";
const { locale, locales, setLocale } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const availableLocales = computed(() =>
  locales.value.filter((l) => l.code !== locale.value),
);
const language = computed({
  get: () => locale.value,
  set: (value) => setLocale(value),
});
</script>
