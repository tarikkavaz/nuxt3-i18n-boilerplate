<template>
  <div class="flex items-center justify-between gap-4">
    <!-- <pre>{{ $colorMode.value }}</pre> -->
    <div>
      <button aria-label="Color Mode" class="inline-block h-10 px-4 py-2 text-sm leading-none text-green-300 rounded bg-green-950 dark:bg-green-300"
      @click="changeColor">
        <ColorScheme>
            <MoonIcon v-if="colorMode.value === 'dark'" class="text-xl text-black size-6" />
            <SunIcon v-else class="text-xl size-6" />
        </ColorScheme>
      </button>
    </div>
    <!-- <select
      v-model="colorMode.preference"
      class="h-10 p-1 text-green-300 border rounded bg-green-950 dark:bg-green-300 dark:text-green-950 dark:border-gray-700"
    >
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select> -->
  </div>
</template>
<script setup>
import { SunIcon } from '@heroicons/vue/20/solid'
import { MoonIcon } from '@heroicons/vue/20/solid'
const colorMode = useColorMode()
const changeColor = () => (colorMode.preference = (colorMode.value === 'light' ? 'dark' : 'light'))

</script>
<style scoped>
a:hover {
  @apply bg-black/20;
}
</style>