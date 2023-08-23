import styled from "styled-components";
import { ReactComponent as LogoSVG } from "../asset/image/BuscalugaLogo.svg";
import { SearchInput } from "../component/SearchInput";
import { Space } from "../component/Space";
import { MediumText, SmallText } from "../component/Text";
import { useMemo, useRef, useState } from "react";
import { ListItem } from "../component/ListItem";
import { SuggestionsContainer } from "../container/SuggestionsContainer";
import { useSearchContext } from "../context/SearchContext";

export function HomePage() {
  const [openSearch, setOpenSearch] = useState(false);
  const searchContentRef = useRef<HTMLDivElement>(null);

  const searchPositionY = useMemo(
    () => searchContentRef.current?.getBoundingClientRect().y,
    [openSearch]
  );
  console.log("searchContentRef", searchPositionY);
  const { search, setSearch } = useSearchContext();

  return (
    <div>
      <Layout $searchPositionY={searchPositionY}>
        <div>
          <div className={"presentation-content " + (openSearch ? "hide" : "")}>
            <LogoSVG />
            <Space y={21} />
            <MediumText>
              Aqui você <b>busca</b>, <b>aluga</b> e <b>compra</b> imóveis de
              todos os lugares!
            </MediumText>
            <Space y={81} />
          </div>

          <div
            ref={searchContentRef}
            className={"search-content " + (openSearch ? "open" : "")}
          >
            <SearchInput
              tagValue="+3"
              value={search.term}
              onChange={(e) => {
                setSearch((prev) => ({ ...prev, term: e.target.value }));
              }}
              onOpen={() => {
                setOpenSearch(true);
              }}
              onClose={() => {
                setOpenSearch(false);
              }}
            />

            <div
              style={{
                width: "100%",
                display: openSearch ? "block" : "none",
                position: "absolute",
              }}
            >
              {<SuggestionsContainer />}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

const Layout = styled.div<any>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;

  margin: 0 21px;

  .search-content {
    transition: all 1s;

    &.open {
      transform: translateY(${(p) => "-" + (p.$searchPositionY - 21) + "px"});
    }
  }

  .search-result {
    margin-top: 5px;
  }

  .presentation-content {
    transition: all 1s;
    opacity: 100;

    &.hide {
      opacity: 0;
    }
  }
`;
