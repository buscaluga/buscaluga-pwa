import { useTheme } from "styled-components";
import PaperStyled from "./PaperStyled";
import { PropsWithChildren } from "react";

type StyleType = "default" | "shadow";

interface PaperProps extends PropsWithChildren {
  styleType?: StyleType;
  background?: string;
  borderRadius?: 16 | 32;
  borderColor?: string;
}

const Paper = ({
  styleType = "default",
  borderRadius = 16,
  background,
  borderColor,
  children,
}: PaperProps) => {
  const theme = useTheme();
  background = background || theme.color.background;
  borderColor = borderColor || theme.color.lightGray;

  return (
    <PaperStyled className={styleType} style={{ borderRadius, borderColor }}>
      {children}
    </PaperStyled>
  );
};

export default Paper;
