<template>
  <NuxtLayout>
    <div class="p-4 mb-4 bg-purple-400" id="content">
      <h1>You've Arrived Here on Error</h1>
      <button class="button" @click="goBack">{{ $t('index') }}</button>
    </div>
  </NuxtLayout>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.push('/')
    }
  }
}
</script>