import React from "react";
import style from "../css/Shared.module.css";

type Props = {
  width?: number;
  height?: number;
  maxwidth?: number;
  maxheight?: number;
  radius? : number
};

const SkeletonLoader = ({ radius, width, height, maxheight, maxwidth }: Props) => {
  return (
    <div
      className={style.skeletonloader}
      style={{
        width: `${width}px`,
        maxWidth: `${maxwidth}px`,
        height: `${height}px`,
        maxHeight: `${maxheight}px`,
        borderRadius: `${radius}px`
      }}
    >
    </div>
  );
};

export default SkeletonLoader;
