<!-- components/Tooltip.vue -->
<template>
  <div class="inline">
    <span class="group relative">
      <div
        class="absolute bottom-[calc(100%+0.5rem)] left-[50%] hidden w-auto -translate-x-[50%] group-hover:block"
      >
        <div
          class="bottom-full whitespace-nowrap rounded bg-slate-900 px-4 py-1 text-xs text-slate-100 dark:bg-slate-100 dark:text-slate-900"
        >
          {{ tooltipContent }}
          <svg
            class="absolute left-0 top-full h-2 w-full text-slate-900 dark:text-slate-100"
            x="0px"
            y="0px"
            viewBox="0 0 255 255"
            xml:space="preserve"
          >
            <polygon class="fill-current" points="0,0 127.5,127.5 255,0" />
          </svg>
        </div>
      </div>
      <span>
        <slot></slot>
      </span>
    </span>
  </div>
</template>

<script setup lang="ts">
import type { ToolTip } from "@/types/types";
const props = defineProps<ToolTip>();
</script>
