import { useLayoutEffect } from "react";

const useDebouncedRippleCleanUp = (
    rippleCount: number,
    duration: number,
    cleanUpFunction: () => void
  ) => {
    useLayoutEffect(() => {
      let bounce: any = undefined;
      if (rippleCount > 0) {
        clearTimeout(bounce);
  
        bounce = setTimeout(() => {
          cleanUpFunction();
          clearTimeout(bounce);
        }, duration * 0.5);
      }
  
      return () => clearTimeout(bounce);
    }, [rippleCount, duration, cleanUpFunction]);
  };

  
export default useDebouncedRippleCleanUp