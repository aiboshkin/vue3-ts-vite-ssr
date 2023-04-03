import { getFeatureList, IFeatureItem } from '@/api/feature-list';
import { defineStore } from 'pinia';
import debounce from 'lodash.debounce';

export const useFeatureListStore = defineStore('featureList', () => {
  const featureList = ref<IFeatureItem[]>([]);
  const search = ref<string>('');
  const loading = ref<boolean>(false);

  const getList = debounce(
    async (value: string): Promise<void> => {
      try {
        loading.value = true;
        const data = await getFeatureList(value);
        featureList.value = data;
      } catch (error) {
        console.error(error);
      } finally {
        loading.value = false;
      }
    },
    500
  );

  watch(
    () => search.value,
    getList
  );

  return { search, featureList, loading };
});
