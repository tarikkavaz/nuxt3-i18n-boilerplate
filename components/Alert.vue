<template>
  <div :class="computedClass">
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  class: String
});

const computedClass = computed(() => {
  let additionalClass = props.class || 'bg-yellow-400 dark:bg-yellow-900 text-yellow-900 dark:text-yellow-400';
  return ['p-4 mb-4', additionalClass];
});
</script>