<template>
  <div :class="computedClass" class="[&_p]:my-4">
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { Alert } from "@/types/types";
const props = defineProps<Alert>();
const computedClass = computed(() => {
  let additionalClass =
    props.class ||
    "bg-yellow-400 dark:bg-yellow-900 text-yellow-900 dark:text-yellow-400";
  return ["p-4 mb-4", additionalClass];
});
</script>
