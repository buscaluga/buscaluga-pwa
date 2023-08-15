import styled from "styled-components";
import { ReactComponent as LogoSVG } from "../asset/image/BuscalugaLogo.svg";
import { SearchInput } from "../component/SearchInput";
import { Space } from "../component/Space";
import { MediumText } from "../component/Text";
import { useRef, useState } from "react";

export function HomePage() {
  const [openSearch, setOpenSearch] = useState(false);
  const searchContentRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <Layout $searchPositionY={searchContentRef.current?.getBoundingClientRect().y}>
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
              onOpen={() => {
                setOpenSearch(true);
              }}
              onClose={() => {
                setOpenSearch(false);
              }}
            />
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
    position: relative;
    transition: all 1s;
    top: 0px;

    &.open {
      top: ${(p) => "-" + (p.$searchPositionY - 21) + "px"};
    }
  }

  .presentation-content {
    transition: all 1s;
    opacity: 100;

    &.hide {
      opacity: 0;
    }
  }
`;
