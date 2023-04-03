<template>
  <router-view v-slot="{ Component }">
    <Suspense>
      <component :is="Component" />
    </Suspense>
  </router-view>
</template>

<script lang="ts">
export default defineComponent({
  name: 'App'
});
</script>

<style scoped>

</style>
