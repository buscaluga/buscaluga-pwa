import { PropsWithChildren, createContext, useContext, useState } from "react";

interface SearchValue {
  term: string;
}

interface SearchContextType {
  search: SearchValue;
  setSearch: React.Dispatch<React.SetStateAction<SearchValue>>;
}

const searchInitialValue: SearchValue = {
  term: "",
};

const SearchContext = createContext<SearchContextType>({
  search: searchInitialValue,
  setSearch: () => { },
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
