interface RectProps {
  width: string;
  height: string;
  rx: string;
  x?: string;
  y?: string;
}

const Rect = ({ x = "0", y = "0", width, height, rx }: RectProps) => {
  return (
    <div
      style={{
        position: "absolute",
        top: y + "px",
        left: x + "px",
        width: width + "px",
        height: height + "px",
        borderRadius: rx + "px",
      }}
    ></div>
  );
};

export default Rect