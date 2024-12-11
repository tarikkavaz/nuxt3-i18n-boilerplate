<template>
  <nav :class="navWrapperClass" aria-label="Global">
    <div :class="navContainerClass">
      <template v-for="menu in navigation" :key="menu.name">
        <div :class="dropdownTriggerWrapperClass" v-if="menu.subItems">
          <NuxtLinkLocale :to="menu.to" :class="dropdownTriggerClass">
            {{ $t(menu.name) }}
          </NuxtLinkLocale>
          <div :class="dropdownWrapperClass">
            <div :class="dropdownContainerClass">
              <NuxtLinkLocale
                v-for="subItem in menu.subItems"
                :key="subItem.name"
                :to="subItem.to"
                :class="dropdownLinkClass"
              >
                {{ $t(subItem.name) }}
              </NuxtLinkLocale>
            </div>
          </div>
        </div>
        <NuxtLinkLocale v-else :to="menu.to" :class="navItemClass">
          {{ $t(menu.name) }}
        </NuxtLinkLocale>
      </template>
    </div>
    <div :class="colorModeSwitchClass">
      <ColorModeSwitch />
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { navigation } from "@/utils/navigation.js";
import type { MenuDesktop } from "@/types/types";
const { t } = useI18n();
const props = defineProps<MenuDesktop>();
</script>
