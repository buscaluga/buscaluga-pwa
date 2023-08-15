import IconButtonStyled from "./IconButtonStyled";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { ThemeColor } from "../../config/theme";

interface IconButtonProps extends PropsWithChildren {
  color: ThemeColor;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const IconButton = ({ children, color, onClick }: IconButtonProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      const childrenElement = contentRef.current.children[0];
      const width = Number.parseInt(
        childrenElement.getAttribute("width") || ""
      );
      setSize(width + 16);
    }
  }, []);

  return (
    <IconButtonStyled $color={color} $size={size}>
      <div tabIndex={0} className="content" ref={contentRef} onClick={onClick}>
        {children}
      </div>
      <div className="circle-wrapper">
        <div className="circle"></div>
      </div>
    </IconButtonStyled>
  );
};

export default IconButton;
