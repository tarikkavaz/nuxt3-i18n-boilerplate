<template>
  <div class="flex items-center justify-between gap-4">
    <!-- <pre>{{ $colorMode.value }}</pre> -->
    <div>
      <button aria-label="Color Mode" class="inline-block h-10 px-4 py-2 text-sm leading-none rounded text-slate-300 bg-slate-900 dark:bg-slate-300"
      @click="changeColor">
        <ColorScheme>
            <SunIcon v-if="colorMode.value === 'dark'" class="text-xl text-slate-900 size-6" />
            <MoonIcon v-else class="text-xl size-6" />
        </ColorScheme>
      </button>
    </div>
    <select
      v-model="colorMode.preference"
      class="hidden h-10 p-1 border rounded text-slate-300 bg-slate-900 dark:bg-slate-300 dark:text-slate-900 dark:border-gray-700"
    >
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  </div>
</template>
<script setup>
import { SunIcon } from '@heroicons/vue/20/solid'
import { MoonIcon } from '@heroicons/vue/20/solid'
const colorMode = useColorMode()
const changeColor = () => (colorMode.preference = (colorMode.value === 'light' ? 'dark' : 'light'))
</script>