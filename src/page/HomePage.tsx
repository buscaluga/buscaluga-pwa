import styled from "styled-components";
import { ReactComponent as LogoSVG } from "../asset/image/BuscalugaLogo.svg";
import { Space } from "../component/Space";
import { MediumText } from "../component/Text";
import { SuggestionsContainer } from "../container/SuggestionsContainer";
import { SearchContentContainer } from "../container/SearchContentContainer";
import { Tabs } from "../component/Tabs";

export function HomePage() {
  return (
    <PageStyled>
      {/* <Tabs
        index={0}
        tabs={[
          {
            title: "Alugar",
          },
          {
            title: "Comprar",
          },
        ]}
      /> */}
      <div>
        <>
          <LogoSVG />
          <Space y={21} />
          <MediumText>
            Aqui você <b>busca</b>, <b>aluga</b> e <b>compra</b> imóveis de
            todos os lugares!
          </MediumText>
          <Space y={81} />
        </>
        {/* <SearchContentContainer
          header={
            <>
              <LogoSVG />
              <Space y={21} />
              <MediumText>
                Aqui você <b>busca</b>, <b>aluga</b> e <b>compra</b> imóveis de
                todos os lugares!
              </MediumText>
              <Space y={81} />
            </>
          }
          result={<SuggestionsContainer />}
        /> */}
      </div>
      {/* <Button type="primary">
        <ConfigureSVG /> Filtrar <Tag type="primary-button">2</Tag>
      </Button>
      <Button type="secondary">
        <ConfigureSVG /> Mais Relevante
      </Button>
      <Button type="subtitle">
        <ConfigureSVG /> Contactar
      </Button> */}
    </PageStyled>
  );
}

const PageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  margin: 0 21px;
`;
