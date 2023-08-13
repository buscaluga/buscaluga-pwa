import { styled } from "styled-components";

export const PropertiesGridStyled = styled.div`
  display: grid;
  grid-gap: 50px;
  margin: 0 1px;
  padding: 1px 0;

  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;
