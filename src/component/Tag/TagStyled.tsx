import styled, { css } from "styled-components";

interface TagStyledProps {
  $type: string;
}

const TagStyled = styled.div<TagStyledProps>`
  display: inline-block;
  border-radius: 8px;
  padding: 2px 8px;

  ${(p) =>
    p.$type === "main"
      ? css`
          p {
            color: ${(p) => p.theme.color.mainDark};
          }
          background: #E5F4F8;
        `
      : css`
          padding: 0 8px;
          
          p {
            color: ${(p) => p.theme.color.mainDarker};
          }
          background: #fff;
        `}
`;

export default TagStyled;
