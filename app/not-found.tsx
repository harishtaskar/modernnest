import React from "react";
import classes from "../components/css/Shared.module.css";
import header from "../components/css/Header.module.css";
import Link from "next/link";

type Props = {};

const notFound = (props: Props) => {
  return (
    <div className={classes.notfound}>
      <div className={classes.notfounddiv}>
        <Link
          href={"/"}
          className={header.brand}
          style={{ fontSize: "35px", textDecoration: "none" }}
        >
          Modern Nest
        </Link>
        <div>
          <span className={header.brand}>404. </span>
          <span className={classes.mainheading} style={{ fontSize: "18px" }}>
            Page Not Found
          </span>
        </div>
        <span style={{ fontSize: "14px" }}>
          The requested URL /doesnotexist was not found on this server. That’s
          all we know.
        </span>
      </div>
    </div>
  );
};

export default notFound;
