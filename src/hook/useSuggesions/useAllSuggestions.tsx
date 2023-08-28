import {
  CitySuggestion,
  NeightborhoodSuggestion,
  StreetSuggestion,
} from "../../model/SearchSuggestion";
import { useMemo } from "react";
import useSuggestions from "./useSuggestions";
import { useSearchContext } from "../../context/SearchContext";

export const suggestionsQueryKey = "suggestions-query-key";

const useAllSuggestions = () => {
  const { search } = useSearchContext();
  const { term } = search;

  const citiesQuery = useSuggestions({ location: "city", term });
  const neighborhoodsQuery = useSuggestions({
    location: "neighborhood",
    term,
  });
  const streetsQuery = useSuggestions({ location: "street", term });

  const allCities: CitySuggestion[] = useMemo(
    () =>
      citiesQuery.data?.pages
        .flatMap((p) => p?.suggestions)
        .filter((p) => p !== undefined) || [],
    [citiesQuery]
  );

  const allNeighborhoods: NeightborhoodSuggestion[] = useMemo(
    () =>
      neighborhoodsQuery.data?.pages
        .flatMap((p) => p?.suggestions)
        .filter((p) => p !== undefined) || [],
    [neighborhoodsQuery]
  );

  const allStreets: StreetSuggestion[] = useMemo(
    () =>
      streetsQuery.data?.pages
        .flatMap((p) => p?.suggestions)
        .filter((p) => p !== undefined) || [],
    [streetsQuery]
  );

  const hasCities = allCities.length !== 0;
  const hasNeighborhoods = allNeighborhoods.length !== 0;
  const hasStreets = allStreets.length !== 0;

  const everyIsLoading =
    citiesQuery.isLoading &&
    neighborhoodsQuery.isLoading &&
    streetsQuery.isLoading;

  return {
    allCities,
    citiesQuery,
    allNeighborhoods,
    neighborhoodsQuery,
    allStreets,
    streetsQuery,
    hasCities,
    hasNeighborhoods,
    hasStreets,
    everyIsLoading,
  };
};

export default useAllSuggestions;
