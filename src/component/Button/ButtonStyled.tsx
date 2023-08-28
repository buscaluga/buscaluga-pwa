import styled from "styled-components";
import { Ripple } from "../Ripple";

interface ButtonStyledProps {}

const ButtonStyled = styled(Ripple)<ButtonStyledProps>`
  padding: 8px;
  display: inline-flex;

  border-radius: 13px;

  font-feature-settings: "clig" off, "liga" off;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 171.429% */
  letter-spacing: 0.75px;

  & > .content {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  &.primary {
    background: ${(p) => p.theme.color.mainDarker};
    color: ${(p) => p.theme.color.background};
    fill: ${(p) => p.theme.color.background};

    &:hover {
      background: ${(p) => p.theme.color.black};
    }

    svg * {
      stroke: ${(p) => p.theme.color.background};
    }

    .ripple {
      opacity: 0.5;
      background-color: ${(p) => p.theme.color.mainLight};
    }
  }

  &.secondary,
  &.subtitle {
    background: ${(p) => p.theme.color.background};
    color: ${(p) => p.theme.color.mainDarker};

    svg * {
      stroke: ${(p) => p.theme.color.mainDarker};
    }

    &:hover {
      background: ${(p) => p.theme.color.mainLighter};
    }
  }

  &.secondary {
    border: 2px solid ${(p) => p.theme.color.mainDarker};
  }

  &.subtitle {
    border: 2px solid ${(p) => p.theme.color.lightGray};
  }

  &.text {
    background: transparent;
    color: ${(p) => p.theme.color.mainDefault};

    svg * {
      stroke: ${(p) => p.theme.color.mainDefault};
    }

    &:hover {
      color: ${(p) => p.theme.color.mainDark};

      svg * {
        stroke: ${(p) => p.theme.color.mainDark};
      }
    }
  }
`;

export default ButtonStyled;
