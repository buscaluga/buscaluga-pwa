import { useMemo, useRef, ReactElement } from "react";
import SearchContentStyled from "./SearchContentStyled";

interface SearchContentProps {
  isOpen?: Boolean;
  header: ReactElement;
  search: ReactElement;
  result: ReactElement;
}

const SearchContent = ({
  isOpen,
  search,
  result,
  header,
}: SearchContentProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const searchPositionY = useMemo(
    () => ref.current?.getBoundingClientRect().y || 0,
    [isOpen]
  );

  return (
    <SearchContentStyled
      className={isOpen ? "open" : ""}
      $searchPositionY={searchPositionY}
    >
      <header>{header}</header>
      <section ref={ref}>
        {search}
        <div className="result">{result}</div>
      </section>
    </SearchContentStyled>
  );
};

export default SearchContent;
