<template>
  <!-- <pre>{{ $colorMode.value }}</pre> -->
  <div>
    <button aria-label="Color Mode" class="flex items-center gap-1 border-gray-400 md:pl-4 md:border-l-2"
    @click="changeColor">
      <ColorScheme>
          <SunIcon v-if="colorMode.value === 'dark'" class="text-white size-4" />
          <MoonIcon v-else class="size-4" />
          <div class="text-sm font-semibold leading-6 text-gray-500 dark:text-slate-300">
            <span v-if="colorMode.value === 'dark'">{{ $t('light') }}</span>
            <span v-else>{{ $t('dark') }}</span>
          </div>
      </ColorScheme>
    </button>
  </div>
</template>
<script setup>
  const { t } = useI18n();
  import { SunIcon } from '@heroicons/vue/20/solid'
  import { MoonIcon } from '@heroicons/vue/20/solid'
  const colorMode = useColorMode()
  const changeColor = () => (colorMode.preference = (colorMode.value === 'light' ? 'dark' : 'light'))
</script>