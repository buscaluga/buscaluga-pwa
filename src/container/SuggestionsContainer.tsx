import { SuggestionsContent } from "../component/SuggestionsContent";
import { useAllSuggestions } from "../hook/useSuggesions";

export function SuggestionsContainer() {
  const term = "";

  const [{ allCities }, { allNeighboorhoods }, { allStreets }] =
    useAllSuggestions(term);

  return (
    <SuggestionsContent
      cities={allCities || []}
      neighborhoods={allNeighboorhoods || []}
      streets={allStreets || []}
    />
  );
}
