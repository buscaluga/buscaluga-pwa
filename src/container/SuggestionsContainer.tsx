import { LazyLoad } from "../component/LazyLoad";
import { SuggestionsContent } from "../component/SuggestionsContent";
import { useSearchContext } from "../context/SearchContext";
import { useAllSuggestions } from "../hook/useSuggesions";
import SuggestionsResult from "../asset/lazy-load/SuggestionsResult";

export function SuggestionsContainer() {
  const { search } = useSearchContext();
  const { term } = search;

  const {
    allCities,
    allNeighborhoods,
    allStreets,
    citiesQuery: { isLoading: isLoadingCities },
    neighborhoodsQuery: { isLoading: isLoadingNeighborhoods },
    streetsQuery: { isLoading: isLoadingStreets },
  } = useAllSuggestions(term);

  const everyIsLoading =
    isLoadingCities && isLoadingNeighborhoods && isLoadingStreets;

  if (everyIsLoading) {
    return (
      <LazyLoad
        style={{
          marginTop: "13px",
          position: "absolute",
        }}
      >
        <SuggestionsResult />
      </LazyLoad>
    );
  }

  return (
    <SuggestionsContent
      cities={allCities || []}
      neighborhoods={allNeighborhoods || []}
      streets={allStreets || []}
    />
  );
}
