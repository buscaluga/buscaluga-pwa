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
          height: 100%;
          p {
            color: ${(p) => p.theme.color.mainDark};
          }
          background: #e5f4f8;
        `
      : css`
          padding: 0 5px;

          p {
            color: ${(p) => p.theme.color.mainDarker};
            font-weight: 600;
            line-height: 20px;
            letter-spacing: unset;
          }
          background: #fff;
        `}
`;

export default TagStyled;
