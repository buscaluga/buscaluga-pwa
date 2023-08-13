export type PropertyType = "rent-monthly" | "rent-weekly" | "rent-daily" | "purchase";

export interface Price {
  value: number;
  condominium?: number;
  tax?: number;
}

export interface Source {
  name: string;
  images: string[];
  page: string;
}

export interface Address {
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  number?: string;
  complement?: string;
}

export interface Property {
  type: PropertyType;
  bathroom: number;
  bedroom: number;
  address: Address;
  price: Price;
  source: Source;
}

export default Property;