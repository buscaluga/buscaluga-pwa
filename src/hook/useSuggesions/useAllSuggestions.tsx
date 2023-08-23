import {
  CitySuggestion,
  NeightborhoodSuggestion,
  StreetSuggestion,
} from "../../model/SearchSuggestion";
import { useMemo } from "react";
import useSuggestions from "./useSuggestions";

export const suggestionsQueryKey = "suggestions-query-key";

const useAllSuggestions = (term: string) => {
  const citiesQuery = useSuggestions({ location: "city", term });
  const neighborhoodsQuery = useSuggestions({
    location: "neighborhood",
    term,
  });
  const streetsQuery = useSuggestions({ location: "street", term });

  const allCities = useMemo(
    () =>
      citiesQuery.data?.pages.flatMap((p) => p.suggestions) as CitySuggestion[],
    [citiesQuery]
  );

  const allNeighborhoods = useMemo(
    () =>
      neighborhoodsQuery.data?.pages.flatMap(
        (p) => p.suggestions
      ) as NeightborhoodSuggestion[],
    [neighborhoodsQuery]
  );

  const allStreets = useMemo(
    () =>
      streetsQuery.data?.pages.flatMap(
        (p) => p.suggestions
      ) as StreetSuggestion[],
    [streetsQuery]
  );

  return {
    allCities,
    citiesQuery,
    allNeighborhoods,
    neighborhoodsQuery,
    allStreets,
    streetsQuery,
  };
};

export default useAllSuggestions;
