import { useState, MouseEventHandler } from "react";
import RippleStyled from "./RippleStyled";
import useDebouncedRippleCleanUp from "./useDebouncedRippleCleanUp";

interface Ripple {
  x: number;
  y: number;
  size: number;
}

interface RippleProps {
  duration: number;
  color: string;
}

const Ripple = ({ duration = 850, color = "#fff" }: RippleProps) => {
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
    </RippleStyled>
  );
};

export default Ripple