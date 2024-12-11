<template>
  <client-only>
    <NuxtLinkLocale to="/">
      <img
        :src="'/images/logo-' + $i18n.locale + '-' + oppositeColorMode + '.png'"
        :class="class"
        :alt="'Logo ' + $colorMode.value + 'Mode'"
      />
    </NuxtLinkLocale>
  </client-only>
</template>
<script setup lang="ts">
import type { Logo } from "@/types/types";
const colorMode = useColorMode();
const oppositeColorMode = computed(() =>
  colorMode.value === "dark" ? "light" : "dark",
);
const props = defineProps<Logo>();
</script>
