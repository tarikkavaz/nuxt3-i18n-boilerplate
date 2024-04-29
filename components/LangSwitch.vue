<template>
  <select 
  v-model="language"
  class="h-10 p-1 text-green-300 border rounded bg-green-950 dark:bg-green-300 dark:text-green-950 dark:border-gray-700"
      >
    <option v-for="lang in locales" :key="lang" :value="lang.code">{{ lang.name }}</option>
  </select>
</template>

<script setup>
  const { locale, locales, setLocale } = useI18n()
  const switchLocalePath = useSwitchLocalePath()
  const availableLocales = computed(() => locales.value.filter(l => l.code !== locale.value))
  const language = computed({
    get: () => locale.value,
    set: (value) => setLocale(value)
  })
</script>
