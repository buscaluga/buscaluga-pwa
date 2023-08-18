import styled from "styled-components";
import { ReactComponent as LogoSVG } from "../asset/image/BuscalugaLogo.svg";
import { ReactComponent as LocationSVG } from "../asset/icon/Location.svg";
import { SearchInput } from "../component/SearchInput";
import { Space } from "../component/Space";
import { MediumText, SmallText } from "../component/Text";
import { useRef, useState } from "react";
import { ListItem } from "../component/ListItem";

export function HomePage() {
  const [openSearch, setOpenSearch] = useState(false);
  const searchContentRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <Layout
        $searchPositionY={searchContentRef.current?.getBoundingClientRect().y}
      >
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
              onOpen={() => {
                setOpenSearch(true);
              }}
              onClose={() => {
                setOpenSearch(false);
              }}
            />
            <div className="search-result">
              <ListItem
                icon={<LocationSVG />}
                title={
                  <p>
                    <b>Copa do Sul</b> - SC
                  </p>
                }
                tagValue="blo"
              />
              <ListItem
                icon={<LocationSVG />}
                title={<b>Copacabana</b>}
                subTitle={"Rio de Janeiro - RJ"}
                tagValue="blo"
              />
              <ListItem
                icon={<LocationSVG />}
                title={<b>Avenida Nossa Senhora de Copacabana</b>}
                subTitle={"Copacabana, Rio de Janeiro - RJ"}
                tagValue="blo"
              />
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
    position: relative;
    transition: all 1s;
    top: 0px;

    &.open {
      top: ${(p) => "-" + (p.$searchPositionY - 21) + "px"};
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
