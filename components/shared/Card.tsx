import React, { ReactNode } from "react";
import classes from "../css/Shared.module.css";

type Props = {
  children: ReactNode;
  radius?: number;
  padding: number;
};

const Card = ({ children, radius, padding }: Props) => {
  return (
    <div
      className={classes.card}
      style={{
        borderRadius: `${radius}px`,
        padding,
        width: `calc(100% - ${padding * 2 + 2})`,
      }}
    >
      {children}
    </div>
  );
};

export default Card;
