import styled from "styled-components";
import { ReactComponent as LogoSVG } from "../asset/image/BuscalugaLogo.svg";
import { SearchInput } from "../component/SearchInput";
import { Space } from "../component/Space";
import { MediumText } from "../component/Text";

export function HomePage() {
  return (
    <div>
      <Layout>
        <div>
          <LogoSVG />
          <Space y={21} />
          <MediumText>
            Aqui você <b>busca</b>, <b>aluga</b> e <b>compra</b> imóveis de todos os lugares!
          </MediumText>
          <Space y={81} />
          <SearchInput />
          
        </div>
      </Layout>
    </div>
  );
}

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;

  margin: 0 21px;
`;
