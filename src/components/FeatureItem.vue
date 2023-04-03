<template>
  <div class="card">{{ feature.display_name }}</div>
</template>

<script lang="ts" setup>
import { IFeatureItem } from '@/api/feature-list.js';

defineProps<{
  feature: IFeatureItem;
}>();
</script>

<style scoped lang="scss">
.card {
  border: 1px solid $gray;
  border-radius: 4px;
  font-weight: 500;
  padding: 10px 15px;
  width: 500px;
}
</style>
