<template>
  <div class="container">
    <input
      v-model="featureListStore.search"
      type="text"
      class="input"
      placeholder="Поиск"
    />
    <Spinner v-if="featureListStore.loading" />
    <div v-else class="list">
      <FeatureItem
        v-for="feature in featureListStore.featureList"
        :key="feature.place_id"
        :feature="feature"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useFeatureListStore } from '@/store/feature-list';

const featureListStore = useFeatureListStore();
</script>

<style scoped lang="scss">
.container {
  padding: 50px;
  display: grid;
  justify-content: center;
}
.input {
  border: 2px solid $primary;
  border-radius: 4px;
  padding: 10px 15px;
  outline: 0;
  font-size: 1.3rem;
  color: $dark;
  width: 500px;
}
.list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
}
</style>
