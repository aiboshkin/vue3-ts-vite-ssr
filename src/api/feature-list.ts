import axios from 'axios';

const baseURL = 'https://nominatim.openstreetmap.org';

const instance = axios.create({ baseURL });

export interface IFeatureItem {
  boundingbox: string[];
  display_name: string;
  importance: number;
  lat: string;
  licence: string;
  lon: string;
  osm_id: number;
  osm_type: string;
  place_id: number;
  type: string;
}

export const getFeatureList = async (search: string) => {
  const response = await instance.get<IFeatureItem[]>('search', {
    params: {
      q: search,
      format: 'json'
    }
  });

  if (response.status === 200) {
    return response.data;
  }

  return [];
};