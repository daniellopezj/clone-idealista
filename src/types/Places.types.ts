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
  operation: 'rent' | 'sale';
  numPage: number;
  maxItems: number;
  sort: string;
  locale: string;
  country: string;
}

export interface ImagesCarousel {
  url: string;
}

export interface FloorMultimedia {
  images: ImagesCarousel[];
}

export interface Floor {
  propertyCode: string;
  numPhotos: number;
  floor: string;
  thumbnail: string;
  price: number;
  propertyType: string;
  operation: string;
  size: number;
  exterior: boolean;
  rooms: number;
  bathrooms: number;
  address: string;
  province: string;
  municipality: string;
  district: string;
  country: string;
  neighborhood: string;
  locationId: string;
  latitude: number;
  longitude: number;
  showAddress: boolean;
  url: string;
  multimedia: FloorMultimedia;
  description: string;
  hasVideo: boolean;
  status: string;
  newDevelopment: boolean;
  favourite: boolean;
  newProperty: boolean;
  contactInfo: any;
  hasLift: boolean;
  priceByArea: number;
  features: any;
  detailedType: any;
  suggestedTexts: any;
  hasPlan: boolean;
  has3DTour: boolean;
  has360: boolean;
  hasStaging: boolean;
  topNewDevelopment: boolean;
  topHighlight: boolean;
  urgentVisualHighlight: boolean;
  visualHighlight: boolean;
  preferenceHighlight: boolean;
}

export interface ResponseListFloor {
  elementList: Floor[];
  total: number;
  totalPages: number;
  actualPage: number;
  itemsPerPage: number;
  numPaginations: number;
  hiddenResults: boolean;
  summary: any;
  filter: any;
  alertName: string;
  lowerRangePosition: number;
  upperRangePosition: number;
  paginable: boolean;
}
