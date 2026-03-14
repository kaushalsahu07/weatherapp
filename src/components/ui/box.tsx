type BgColor = "white" | "white15";

type BoxProps = {
  children: React.ReactNode;
  bgcolor?: BgColor;
  className?: string;
};

const bgColors: Record<BgColor, string> = {
  white: "bg-white",
  white15: "bg-white/15",
};

function Box({ children, bgcolor = "white15", className }: BoxProps) {
  return (
    <>
      <div
        className={`${bgColors[bgcolor]} ${className} backdrop-blur-md border border-white/25 rounded-xl`}
      >
        {children}
      </div>
    </>
  );
}

export default Box;
