import React from "react";
import Link from "next/link";
import classes from "../css/Header.module.css";

type Props = {};

const HeaderLinks = (props: Props) => {
  return (
    <ul className={classes.links}>
      <li>
        <Link href={"/"} className={classes.link}>
          Home
        </Link>
      </li>
      <li>
        <Link href={"/about"} className={classes.link}>
          About
        </Link>
      </li>
      <li>
        <Link href={"/Blogs"} className={classes.link}>
          Blog
        </Link>
      </li>
      <li>
        <Link href={"/Contact"} className={classes.link}>
          Contact
        </Link>
      </li>
      <li>
        <Link href={"/#"} className={classes.link}>
          Pages
        </Link>
      </li>
    </ul>
  );
};

export default HeaderLinks;
