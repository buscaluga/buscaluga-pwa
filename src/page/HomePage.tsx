import styled from "styled-components";
import { ReactComponent as LogoSVG } from "../asset/image/BuscalugaLogo.svg";
import { SearchInput } from "../component/SearchInput";

export function HomePage() {
  return (
    <div>
      <Layout>
        <div>
          <LogoSVG />
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
