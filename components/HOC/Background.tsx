import React, { ReactNode } from "react";

type Props = {
  body: ReactNode;
};

const Background = ({ body }: Props) => {
  const backgroundStyle = {
    width: "100%",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return <section style={backgroundStyle}>{body}</section>;
};

export default Background;
