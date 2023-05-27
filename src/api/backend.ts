import {
  FiltersPlaces,
  ResponseListFloor,
  ResponsePlaces,
  SearchResult,
} from '@/types/Places.types';
import axios from 'axios';

export const backend = () => {
  const headers = {
    'X-RapidAPI-Key': 'b92e6ba8e6mshc10c2bd9fb133a8p1ad5e8jsnded8e7917a1a',
    'X-RapidAPI-Host': 'idealista2.p.rapidapi.com',
  };

  const BASE_URL = 'https://idealista2.p.rapidapi.com';
  async function apiSearch(query: string): Promise<SearchResult[]> {
    const res = await axios.get(
      `${BASE_URL}/auto-complete?prefix=${query}&country=es`,
      {
        headers: headers,
      },
    );
    if (res.status < 400) {
      const results: ResponsePlaces = res.data;
      return results.locations;
    }
    return [];
  }

  async function apiListFloors(
    params: FiltersPlaces,
  ): Promise<ResponseListFloor> {
    const res = await axios.get(`${BASE_URL}/properties/list`, {
      headers: headers,
      params: params,
    });

    if (res.status < 400) {
      return res.data as ResponseListFloor;
    }
    throw new Error('Request failed');
  }

  return {
    apiListFloors,
    apiSearch,
  };
};
