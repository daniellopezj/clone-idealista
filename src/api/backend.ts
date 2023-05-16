import { ResponsePlaces, SearchResult } from '@/types/Places.types'

export const backend = () => {
  const headers = {
    'X-RapidAPI-Key':
      'b92e6ba8e6mshc10c2bd9fb133a8p1ad5e8jsnded8e7917a1a',
    'X-RapidAPI-Host': 'idealista2.p.rapidapi.com',
  }

  const BASE_URL = 'https://idealista2.p.rapidapi.com'
  async function apiSearch(query: string): Promise<SearchResult[]> {
    const res = await fetch(
      `${BASE_URL}/auto-complete?prefix=${query}&country=es`,
      {
        headers: headers,
      },
    );
    if (res.status < 400) {
      const results: ResponsePlaces = await res.json();
      return results.locations
    }
    return []
  }

  async function apiListFloors() {
    const response = await fetch("/floors");
    const data = await response.json();
    return data;
  }

  return {
    apiListFloors,
    apiSearch
  }
}