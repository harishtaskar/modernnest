import React from "react";


type Props = {
  subHeading1: string;
  subHeading2: string;
  mainHeading: string;
};

const Heading = ({ subHeading1, subHeading2, mainHeading }: Props) => {
  return (
    <div className={"headings"}>
      <span className={"subHeading1"}>{subHeading1}</span>
      <span className={"mainHeading"}>{mainHeading}</span>
      <span className={"subHeading2"}>{subHeading2}</span>
    </div>
  );
};

export default Heading;
