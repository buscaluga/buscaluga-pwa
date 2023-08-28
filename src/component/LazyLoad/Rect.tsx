import { CSSProperties } from "react";

interface RectProps {
  width: string;
  height: string;
  rx: string;
  x?: string;
  y?: string;
  isAbsolute?: boolean;
}

const Rect = ({
  x = "0",
  y = "0",
  width,
  height,
  rx,
  isAbsolute = true,
}: RectProps) => {
  const positionStyle: CSSProperties = isAbsolute
    ? { position: "absolute", top: y + "px", left: x + "px" }
    : {};

  return (
    <span
      className="rect"
      style={{
        ...positionStyle,
        width: width + "px",
        height: height + "px",
        borderRadius: rx + "px",
        display: "block"
      }}
    ></span>
  );
};

export default Rect;
