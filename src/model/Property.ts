import {
  CitySuggestion,
  NeightborhoodSuggestion,
  StreetSuggestion,
} from "./SearchSuggestion";

export type AcquisitionType = "rent" | "purchase";

export interface Price {
  value: number;
  condominium?: number;
  tax?: number;
}

export interface Source {
  name: string;
  page: string;
}

export interface Address {
  state: string;
  city: string;
  neighborhood: string;
  street?: string;
  number?: string;
  complement?: string;
}

export interface Property {
  aquisitionType: AcquisitionType;
  rentFrequency?: "monthly" | "weekly" | "daily";
  residentialType?: string;
  images: string[];
  bathroomQty: number;
  bedroomQty: number;
  parkingQty: number;
  sizeArea: number;
  address: Address;
  price: Price;
  source: Source;
}

export interface PropertiesResponse {
  properties: Property[];
  quantity?: number;
  nextPageToken?: string;
}

export interface PropertiesBody {
  acquisitionType: AcquisitionType;
  location: {
    cities?: CitySuggestion[];
    neighborhoods?: NeightborhoodSuggestion[];
    streets?: StreetSuggestion[];
  };
  filter?: unknown;
  sortBy?: string;
  pageToken?: string;
}
