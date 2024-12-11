<template>
  <div v-if="pending" class="mb-2 bg-gray-300 p-4 last:mb-0">
    {{ $t("loading") }}
  </div>
  <div v-else>
    <div class="my-8 flex items-center justify-center gap-4">
      <button
        @click="previousPage"
        :disabled="page === 1"
        class="disabled:cursor-not-allowed disabled:text-gray-400"
      >
        <ChevronLeftIcon class="size-6 text-xl" />
      </button>
      <span>{{ $t("page") }} {{ page }} / {{ totalPages }}</span>
      <button
        @click="nextPage"
        :disabled="page === totalPages"
        class="disabled:cursor-not-allowed disabled:text-gray-400"
      >
        <ChevronRightIcon class="size-6 text-xl" />
      </button>
    </div>
    <div class="mb-4 grid gap-4 md:grid-cols-2">
      <div
        v-for="product in products"
        :key="product.id"
        class="bg-gray-200 p-4 dark:bg-gray-800"
      >
        <div class="">
          <div class="md:min-h-12">
            <h3>{{ product.title }}</h3>
          </div>
          <img
            :src="product.thumbnail"
            alt="Product thumbnail"
            class="mb-4 h-auto max-h-40 w-full border border-gray-500 object-cover"
          />
          <div class="md:min-h-16">
            <p class="mb-4 font-bold">{{ product.description }}</p>
          </div>
          <div class="text-gray-500 dark:text-gray-200 md:min-h-32">
            <div class="">
              {{ $t("price") }}: ${{ product.price }} ({{
                product.discountPercentage
              }}% off)
            </div>
            <div class="">{{ $t("rating") }}: {{ product.rating }}</div>
            <div class="">{{ $t("stock") }}: {{ product.stock }}</div>
            <div class="">{{ $t("brand") }}: {{ product.brand }}</div>
            <div class="">{{ $t("category") }}: {{ product.category }}</div>
          </div>
          <h4 class="border-b-[1px] border-gray-300">{{ $t("images") }}</h4>
          <div class="grid grid-cols-6">
            <img
              v-for="image in product.images"
              :src="image"
              :alt="`${product.title} image`"
              :key="image"
              class="h-auto max-h-20 max-w-20 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="my-8 flex items-center justify-center gap-4">
      <button
        @click="previousPage"
        :disabled="page === 1"
        class="disabled:cursor-not-allowed disabled:text-gray-400"
      >
        <ChevronLeftIcon class="size-6 text-xl" />
      </button>
      <span>{{ $t("price") }} {{ page }} / {{ totalPages }}</span>
      <button
        @click="nextPage"
        :disabled="page === totalPages"
        class="disabled:cursor-not-allowed disabled:text-gray-400"
      >
        <ChevronRightIcon class="size-6 text-xl" />
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ChevronLeftIcon } from "@heroicons/vue/20/solid";
import { ChevronRightIcon } from "@heroicons/vue/20/solid";
import type { Product } from "@/types/types";

const allProducts = ref<Product[]>([]);
const products = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return allProducts.value.slice(start, end);
});
const pending = ref(true);
const page = ref(1);
const pageSize = ref(10);
const totalPages = computed(() =>
  Math.ceil(allProducts.value.length / pageSize.value),
);

async function fetchProducts() {
  pending.value = true;
  try {
    const response = await fetch(`https://dummyjson.com/products`);
    if (response.ok) {
      const data = await response.json();
      allProducts.value = data.products;
    } else {
      throw new Error("Failed to fetch products");
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  } finally {
    pending.value = false;
  }
}

function nextPage() {
  if (page.value < totalPages.value) {
    page.value++;
  }
}

function previousPage() {
  if (page.value > 1) {
    page.value--;
  }
}

onMounted(fetchProducts);
</script>
