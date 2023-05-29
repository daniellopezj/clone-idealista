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

  async function test(
  ): Promise<any> {
    const res = await axios.get(`https://www.idealista.com/labs/api/2/search?`, {
      headers: headers,
      params: {
        "action": "json",
        "apikey": "0lVOkSbmEM5iIo7pAPFprxFUUuJUCZXU",
        "country": "es",
        "maxItems": 50,
        "numPage": 1,
        "noSmokers": true,
        "sex": "X",
        "operation": "A",
        "pictures": true,
        "propertyType": "bedrooms",
        "k": "4ebe5ef1c9ba6f28c15cc26d755016b9",
        "t": "apigee"
        
      },
    });
    console.log(res)
    if (res.status < 400) {
      return res.data as ResponseListFloor;
    }
    throw new Error('Request failed');
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
    test
  };
};
