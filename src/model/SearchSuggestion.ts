export interface SuggestionsResponse {
  suggestions: CitySuggestions | NeightborhoodSuggestions | StreetSuggestions;
  nextPageToken: string;
}

export type CitySuggestions = string[];

export type NeightborhoodSuggestions = {
  name: string;
  city: string;
}[];

export type StreetSuggestions = {
  name: string;
  neightborhood: string;
}[];
