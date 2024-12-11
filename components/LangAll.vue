<template>
  <select
    v-model="language"
    class="h-10 rounded border bg-malachite-950 p-1 text-malachite-300 dark:border-gray-700 dark:bg-malachite-300 dark:text-malachite-950"
  >
    <option v-for="lang in locales" :key="lang.code" :value="lang.code">
      {{ lang.name }}
    </option>
  </select>
</template>

<script setup lang="ts">
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
