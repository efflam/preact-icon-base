import { h } from "preact";

const IconBase = (
  { children, color, size, style, ...props },
  { preactIconBase = {} }
) => {
  const computedSize = size || preactIconBase.size || "1em";
  return (
    <svg
      children={children}
      fill="currentColor"
      preserveAspectRatio="xMidYMid meet"
      height={computedSize}
      width={computedSize}
      {...preactIconBase}
      {...props}
      style={{
        verticalAlign: "middle",
        color: color || preactIconBase.color,
        ...(preactIconBase.style || {}),
        ...style
      }}
    />
  );
};

export default IconBase;
