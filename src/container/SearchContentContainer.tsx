import { ReactElement } from "react";
import { SearchContent } from "../component/SearchContent";
import { useSearchContext } from "../context/SearchContext";
import { SearchInput } from "../component/SearchInput";

interface SearchContentContainerProps {
  header: ReactElement;
  result: ReactElement;
}

export function SearchContentContainer({
  header,
  result,
}: SearchContentContainerProps) {
  const { search, setSearch } = useSearchContext();

  return (
    <SearchContent
      isOpen={search.isOpen}
      header={header}
      search={
        <SearchInput
          tagValue={search.tagValue}
          value={search.term}
          onChange={(e) => {
            setSearch((prev) => ({ ...prev, term: e.target.value }));
          }}
          onOpen={() => {
            setSearch((prev) => ({ ...prev, isOpen: true }));
          }}
          onClose={() => {
            setSearch((prev) => ({ ...prev, isOpen: false }));
          }}
        />
      }
      result={result}
    />
  );
}
