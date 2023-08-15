import styled from "styled-components";
import { ThemeColor } from "../../config/theme";

interface SearchInputStyledProps {
  $color: ThemeColor;
  $size: number;
}

const IconButtonStyled = styled.div<SearchInputStyledProps>`
  width: ${(p) => p.$size + "px"};
  height: ${(p) => p.$size + "px"};

  svg * {
    stroke: ${(p) => p.theme.color[p.$color]};
    color: ${(p) => p.theme.color[p.$color]};
  }

  .content {
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: relative;
    z-index: 1;

    &:hover + .circle-wrapper > .circle {
      width: ${(p) => p.$size + "px"};
      height: ${(p) => p.$size + "px"};

      background: ${(p) => p.theme.color[p.$color] + "19"};
    }

    &:focus + .circle-wrapper > .circle {
      width: ${(p) => p.$size + "px"};
      height: ${(p) => p.$size + "px"};

      background: ${(p) => p.theme.color[p.$color] + "33"};
    }
  }

  .circle-wrapper {
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    height: 100%;

    position: relative;
    top: ${(p) => "-" + p.$size + "px"};

    z-index: 0;
  }

  .circle {
    padding: 0;
    background: ${(p) => p.theme.color[p.$color] + "19"};
    border-radius: 50%;

    width: 0;
    height: 0;

    transition: all 0.2s;
  }
`;

export default IconButtonStyled;
