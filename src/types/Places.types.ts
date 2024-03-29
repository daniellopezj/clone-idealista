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
  propertyType: string;
  minPrice: string;
  maxPrice: string;
  minSize: string;
  maxSize: string;
  garage: boolean;
  airConditioning: boolean;
  elevator: boolean;
  terrace: boolean;
  swimmingPool: boolean;
  garden: boolean;
  petsPolicy: 'allowed' | '';
}

export interface ImagesCarousel {
  url: string;
}

export interface FloorMultimedia {
  images?: ImagesCarousel[];
}

export interface FloorContact {
  phone1: {
    phoneNumber: string;
    formattedPhone: string;
    prefix: string;
    phoneNumberForMobileDialing: string;
    nationalNumber: boolean;
  };
  agencyLogo?: string;
  contactName: string;
  userType: string;
  contactMethod: string;
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
  contactInfo: FloorContact;
  hasLift: boolean;
  priceByArea: number;
  features: any;
  detailedType: any;
  suggestedTexts: { title: string };
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

export interface Location {
  title: string;
  latitude: number;
  longitude: number;
  hasHiddenAddress: boolean;
  administrativeAreaLevel4: string;
  administrativeAreaLevel3: string;
  administrativeAreaLevel2: string;
  administrativeAreaLevel1: string;
  locationId: string;
  locationName: string;
}
interface MoreCharacteristics {
  roomNumber: number;
  isStudio: boolean;
  bathNumber: number;
  isAuction: boolean;
  housingFurnitures: string;
  isPenthouse: boolean;
  energyCertificationType: string;
  swimmingPool: boolean;
  flatLocation: string;
  modificationDate: number;
  housingPetsAllowed: boolean;
  isInTopFloor: boolean;
  constructedArea: number;
  usableArea: number;
  lift: boolean;
  garden: boolean;
  boxroom: boolean;
  isDuplex: boolean;
  status: string;
}

interface FloorFeature {
  phrase: string;
}
export interface FloorDetailsFeatures {
  key: string;
  title: string;
  detailFeatures: FloorFeature[];
}

export interface TranslatedTexts {
  floorNumberDescription: string | null;
  layoutDescription: string | null;
  characteristicsDescriptions: FloorDetailsFeatures[];
}

interface DetailsModifications {
  value: number;
  text: string;
}

export interface DetailsFloor extends Floor {
  ubication: Location;
  moreCharacteristics: MoreCharacteristics;
  homeType: string;
  translatedTexts: TranslatedTexts;
  propertyComment: string;
  modificationDate: DetailsModifications;
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
  filter: {
    locationName: string;
  };
  alertName: string;
  lowerRangePosition: number;
  upperRangePosition: number;
  paginable: boolean;
}
