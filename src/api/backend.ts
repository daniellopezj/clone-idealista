import {
  FiltersPlaces,
  ResponseListFloor,
  ResponsePlaces,
  SearchResult,
} from '@/types/Places.types';
import axios from 'axios';

let abortController: AbortController | null = null;
export const backend = () => {
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const headers = {
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
    'X-RapidAPI-Host': process.env.NEXT_PUBLIC_API_HOST,
  };

  async function apiSearch(query: string): Promise<SearchResult[]> {
    if (abortController) {
      abortController.abort();
    }
    abortController = new AbortController();
    try {
      const res = await axios.get(
        `${BASE_URL}/auto-complete?prefix=${query}&country=es`,
        {
          headers: headers,
          signal: abortController.signal
        },
      );
      if (res.status < 400) {
        const results: ResponsePlaces = res.data;
        return results.locations;
      }
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Request cancelled:', error.message);
      }
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
    if (res.data.elementList) {
      return res.data as ResponseListFloor;
    }
    throw new Error('Request failed');
  }

  return {
    apiListFloors,
    apiSearch,
  };
};
