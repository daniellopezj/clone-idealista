export interface SearchResult {
  name: string;
  locationId: string;
  divisible: boolean;
  type: string;
  suggestedLocationId: string;
  subTypeText: string;
}

export interface ResponsePlaces {
  total: number;
  locations: SearchResult[];
}

export interface FiltersPlaces {
  locationId: string;
  locationName: string;
  operation: string;
  numPage: number;
  maxItems: number;
  sort: string;
  locale: string;
  country: string;
}
