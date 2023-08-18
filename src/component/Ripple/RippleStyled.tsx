import styled from "styled-components";

const RippleStyled = styled.div<any>`
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  // display: inline-block;
  overflow: hidden;
  width: 100%;

  & > .content * {
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
