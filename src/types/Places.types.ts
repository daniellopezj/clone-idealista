
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
