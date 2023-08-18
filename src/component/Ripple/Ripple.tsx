import { useState, MouseEventHandler, PropsWithChildren } from "react";
import RippleStyled from "./RippleStyled";
import useDebouncedRippleCleanUp from "./useDebouncedRippleCleanUp";
import { ThemeColor } from "../../config/theme";

interface Ripple {
  x: number;
  y: number;
  size: number;
}

interface RippleProps extends PropsWithChildren {
  duration?: number;
  color?: ThemeColor;
  opacity?: string;
}

const Ripple = ({
  duration = 1500,
  color = "mainDefault",
  opacity = "20%",
  children,
}: RippleProps) => {
  const [rippleArray, setRippleArray] = useState<Ripple[]>([]);

  useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
    setRippleArray([]);
  });

  const addRipple: MouseEventHandler<HTMLDivElement> = (event) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height;
    const halfSize = size / 2;

    const newRipple: Ripple = {
      x: event.pageX - rippleContainer.x - halfSize,
      y: event.pageY - rippleContainer.y - halfSize,
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
    >
      {rippleArray.length > 0 &&
        rippleArray.map((ripple, index) => {
          return (
            <span
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
