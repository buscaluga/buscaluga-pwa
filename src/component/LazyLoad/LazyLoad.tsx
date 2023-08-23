import LazyLoadStyled from "./LazyLoadStyled";
import { CSSProperties, PropsWithChildren } from "react";

interface LazyLoadProps extends PropsWithChildren {
  style?: CSSProperties;
}

const LazyLoad = ({ children, style }: LazyLoadProps) => {
  return <LazyLoadStyled style={style}>{children}</LazyLoadStyled>;
};

export default LazyLoad;
