import styled from "styled-components";
import { ThemeColor } from "../../config/theme";

interface RippleStyledProps {
  $duration: number;
  $color: ThemeColor;
  $opacity: string;
}

const RippleStyled = styled.div<RippleStyledProps>`
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  overflow: hidden;
  cursor: pointer;

  & > .content {
    z-index: 999;
  }

  & > span {
    z-index: 0;
    transform: scale(0);
    border-radius: 100%;
    position: absolute;
    opacity: 0.75;
    background-color: ${(props) => props.theme.color[props.$color]};
    animation-name: ripple;
    animation-duration: ${(props) => props.$duration}ms;
    opacity: ${(props) => props.$opacity};
  }

  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(2);
    }
  }
`;

export default RippleStyled;
