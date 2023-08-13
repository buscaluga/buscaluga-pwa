import styled from "styled-components";
import { ReactComponent as LogoSVG } from "../asset/image/BuscalugaLogo.svg";
import { SearchInput } from "../component/SearchInput";
import { MediumText } from "../component/Text";

export function HomePage() {
  return (
    <div>
      <Layout>
        <div>
          <LogoSVG />
          <MediumText>
            Aqui você <b>busca</b>, <b>aluga</b> e <b>compra</b> imóveis de todos os lugares!
          </MediumText>
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

`;
