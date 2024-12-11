<template>
  <Dialog as="div" class="lg:hidden" @close="emitClose" :open="mobileMenuOpen">
    <div class="fixed inset-0 z-50" />
    <DialogPanel
      class="fixed inset-y-0 right-0 z-[999] w-full overflow-y-auto bg-slate-100 px-3 py-6 dark:bg-slate-900 sm:max-w-sm sm:ring-1 sm:ring-slate-900/10"
    >
      <div class="flex items-center justify-between">
        <a href="/" class="-m-1.5 p-1.5">
          <client-only>
            <span class="sr-only">{{ headerData.title || " " }}</span>
          </client-only>
          <Logo :class="'h-16 pt-4 md:h-24'" />
        </a>
        <button
          type="button"
          class="-m-2.5 rounded-md p-2.5 text-slate-900 dark:text-slate-100"
          @click="emitClose"
        >
          <span class="sr-only">{{ $t("closemenu") }}</span>
          <XMarkIcon class="mr-3 h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="mt-10 flow-root">
        <div class="-my-6 divide-y divide-gray-500/10">
          <div
            class="space-y-2 py-6 [&_.router-link-active]:bg-malachite-300 dark:[&_.router-link-active]:text-slate-900 [&_.router-link-exact-active]:bg-malachite-300 dark:[&_.router-link-exact-active]:text-slate-900"
          >
            <template v-for="menu in navigation" :key="menu.name">
              <NuxtLinkLocale
                :to="menu.to"
                class="block px-3 py-2 text-base font-semibold leading-7 text-slate-900 dark:text-slate-100"
                @click="emitClose"
              >
                {{ $t(menu.name) }}
              </NuxtLinkLocale>
              <template v-if="menu.subItems">
                <NuxtLinkLocale
                  v-for="subItem in menu.subItems"
                  :key="subItem.name"
                  :to="subItem.to"
                  class="mx-3 flex items-center px-3 py-2 text-base font-semibold leading-7 text-slate-900 before:w-5 before:content-['-'] dark:text-slate-100"
                  @click="emitClose"
                >
                  {{ $t(subItem.name) }}
                </NuxtLinkLocale>
              </template>
            </template>
            <div
              class="relative flex justify-between border-t-2 border-slate-700 pt-5 align-middle"
            >
              <LangOther
                class="-mx-3 block px-3 py-6 text-sm font-semibold leading-6 text-slate-900 hover:bg-gray-50 dark:text-slate-100"
              />
              <ColorModeSwitch />
            </div>
          </div>
        </div>
      </div>
    </DialogPanel>
  </Dialog>
</template>

<script setup lang="ts">
import { Dialog, DialogPanel } from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import type { MenuMobile } from "@/types/types";
const { t } = useI18n();
const { headerData } = useHeaderData();
const props = defineProps<MenuMobile>();
const emit = defineEmits(["update:mobileMenuOpen"]);

function emitClose() {
  emit("update:mobileMenuOpen", false);
}
</script>
