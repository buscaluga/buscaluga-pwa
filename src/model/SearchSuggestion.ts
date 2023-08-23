import { PageParams, PageResponse } from "./Page";

export type Suggestions<
  S extends CitySuggestion | NeightborhoodSuggestion | StreetSuggestion
> = S[];

export interface SuggestionsResponse extends PageResponse {
  suggestions: Suggestions<any>;
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

export interface SuggestionParams extends PageParams {
  term: string;
  location: "city" | "neighborhood" | "street";
}
