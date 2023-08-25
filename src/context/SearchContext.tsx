import { PropsWithChildren, createContext, useContext, useState } from "react";
import {
  CitySuggestion,
  NeightborhoodSuggestion,
  StreetSuggestion,
} from "../model/SearchSuggestion";

interface SearchValue {
  term: string;
  isOpen: boolean;
  location: {
    cities: CitySuggestion[];
    neighborhoods: NeightborhoodSuggestion[];
    streets: StreetSuggestion[];
  };
  tagValue?: string;
}

interface SearchContextType {
  search: SearchValue;
  setSearch: React.Dispatch<React.SetStateAction<SearchValue>>;
}

const searchInitialValue: SearchValue = {
  term: "",
  isOpen: false,
  location: { cities: [], neighborhoods: [], streets: [] },
};

const SearchContext = createContext<SearchContextType>({
  search: searchInitialValue,
  setSearch: () => {},
});

export const SearchProvider = ({ children }: PropsWithChildren) => {
  const [search, setSearch] = useState<SearchValue>(searchInitialValue);

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  return useContext(SearchContext);
};
