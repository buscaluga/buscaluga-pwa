import styled from "styled-components";

interface PaperStyledProps {}

const PaperStyled = styled.div<PaperStyledProps>`
  .default {
    border: 2px solid;
  }

  .shadow {
    filter: drop-shadow(0px 32px 64px rgba(17, 17, 17, 0.08));
  }
`;

export default PaperStyled;
