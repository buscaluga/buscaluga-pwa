export type Suggestions<
  S extends CitySuggestion | NeightborhoodSuggestion | StreetSuggestion
> = S[];

export interface SuggestionsResponse {
  suggestions: Suggestions<any>;
  nextPageToken?: string;
}

export type CitySuggestion = string;

export type NeightborhoodSuggestion = {
  name: string;
  city: string;
};

export type StreetSuggestion = {
  name: string;
  neightborhood: string;
};

export interface SuggestionParams {
  term: string;
  location: "city" | "neighborhood" | "street";
  pageToken?: string;
}
