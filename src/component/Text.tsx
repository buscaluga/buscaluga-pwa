import styled from "styled-components";

export const H1 = styled.h1`
    color: ${(p) => p.theme.color.mainDarker};
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Poppins;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 50px; /* 104.167% */
    letter-spacing: 1px;
`

export const H2 = styled.h2`
    color: ${(p) => p.theme.color.mainDarker};
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px; /* 112.5% */
    letter-spacing: 1px;
`

export const H3 = styled.h3`
    color: ${(p) => p.theme.color.mainDarker};
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 133.333% */
    letter-spacing: 1px;
`

export const LargeText = styled.p`
    color: ${(p) => p.theme.color.mainDarker};
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px; /* 160% */
    letter-spacing: 0.75px;
`

export const MediumText = styled.p`
    color: ${(p) => p.theme.color.mainDarker};
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 175% */
    letter-spacing: 0.75px;
`

export const SmallText = styled.p`
    color: ${(p) => p.theme.color.mainDarker};
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 171.429% */
    letter-spacing: 0.75px;
`

export const ExtraSmallText = styled.p`
    color: ${(p) => p.theme.color.mainDarker};
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 169.231% */
    letter-spacing: 0.25px;
`