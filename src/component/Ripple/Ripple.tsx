import { useState, MouseEventHandler, PropsWithChildren } from "react";
import RippleStyled from "./RippleStyled";
import useDebouncedRippleCleanUp from "./useDebouncedRippleCleanUp";
import { ThemeColor } from "../../config/theme";

interface RippleModel {
  x: number;
  y: number;
  size: number;
}

interface RippleProps extends PropsWithChildren {
  duration?: number;
  color?: ThemeColor;
  opacity?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  disabled?: boolean;
}

const Ripple = ({
  duration = 1500,
  color = "mainDefault",
  opacity = "20%",
  children,
  className,
  disabled,
  onClick,
}: RippleProps) => {
  const [rippleArray, setRippleArray] = useState<RippleModel[]>([]);

  useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
    setRippleArray([]);
  });

  const addRipple = (event: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) {
      return;
    }

    const rippleContainer = event.currentTarget.getBoundingClientRect();

    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height;
    const halfSize = size / 2;

    const pageX = event.pageX;
    const pageY = event.pageY;

    const newRipple: RippleModel = {
      x: pageX - rippleContainer.x - halfSize - window.scrollX,
      y: pageY - rippleContainer.y - halfSize - window.scrollY,
      size,
    };

    setRippleArray([...rippleArray, newRipple]);
  };

  return (
    <RippleStyled
      $duration={duration}
      $color={color}
      $opacity={opacity}
      onMouseDown={addRipple}
      className={className}
      onClick={!disabled ? onClick : () => {}}
    >
      {rippleArray.length > 0 &&
        rippleArray.map((ripple, index) => {
          return (
            <span
              className="ripple"
              key={"span" + index}
              style={{
                top: ripple.y,
                left: ripple.x,
                width: ripple.size,
                height: ripple.size,
              }}
            />
          );
        })}
      <div className="content">{children}</div>
    </RippleStyled>
  );
};

export default Ripple;
