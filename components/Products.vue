<script setup lang="ts">
import { ChevronLeftIcon } from '@heroicons/vue/20/solid'
import { ChevronRightIcon } from '@heroicons/vue/20/solid'
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

const allProducts = ref<Product[]>([]);
const products = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return allProducts.value.slice(start, end);
});
const pending = ref(true);
const page = ref(1);
const pageSize = ref(10);
const totalPages = computed(() => Math.ceil(allProducts.value.length / pageSize.value));

async function fetchProducts() {
  pending.value = true;
  try {
    const response = await fetch(`https://dummyjson.com/products`);
    if (response.ok) {
      const data = await response.json();
      allProducts.value = data.products;
    } else {
      throw new Error('Failed to fetch products');
    }
  } catch (error) {
    console.error('Error fetching products:', error);
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
<template>
  <div v-if="pending" class="p-4 mb-2 bg-orange-300 last:mb-0">
    {{ $t('loading') }}
  </div>
  <div v-else>
    <div class="flex items-center justify-center gap-4 my-8">
      <button @click="previousPage" :disabled="page === 1" class="disabled:text-gray-400 disabled:cursor-not-allowed">
      <ChevronLeftIcon class="text-xl size-6" />
      </button>
      <span>Page {{ page }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="page === totalPages" class="disabled:text-gray-400 disabled:cursor-not-allowed">
      <ChevronRightIcon class="text-xl size-6" />
      </button>
    </div>
    <div class="grid grid-cols-2 gap-4 mb-4">
      <div v-for="product in products" :key="product.id" class="p-4 bg-orange-200 dark:bg-orange-950">
        <div class="">
          <h3 class="mb-4 text-xl">{{ product.title }}</h3>
          <img :src="product.thumbnail" alt="Product thumbnail" class="object-cover w-full h-auto mb-4 border border-orange-500 max-h-40">
          <p class="mb-4">{{ product.description }}</p>
          <div class="text-gray-500 dark:text-gray-200">
            <div class="">{{$t('price')}}: ${{ product.price }} ({{ product.discountPercentage }}% off)</div>
            <div class="">{{$t('rating')}}: {{ product.rating }}</div>
            <div class="">{{$t('stock')}}: {{ product.stock }}</div>
            <div class="">{{$t('brand')}}: {{ product.brand }}</div>
            <div class="">{{$t('category')}}: {{ product.category }}</div>
          </div>
          <h4 class="my-4 border-b-[1px] border-orange-300">{{$t('images')}}</h4>
          <div class="grid grid-cols-6">
            <img v-for="image in product.images" :src="image" :alt="`${product.title} image`" :key="image" class="object-cover h-auto max-w-20 max-h-20">
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center gap-4 my-8">
      <button @click="previousPage" :disabled="page === 1" class="disabled:text-gray-400 disabled:cursor-not-allowed">
      <ChevronLeftIcon class="text-xl size-6" />
      </button>
      <span>Page {{ page }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="page === totalPages" class="disabled:text-gray-400 disabled:cursor-not-allowed">
      <ChevronRightIcon class="text-xl size-6" />
      </button>
    </div>
  </div>
  
</template>