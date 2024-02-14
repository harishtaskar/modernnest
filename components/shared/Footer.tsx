import React, { useMemo } from "react";
import classes from "../css/Footer.module.css";
import Link from "next/link";
import Background from "../HOC/Background";

type Props = {};

const Footer = (props: Props) => {
  const renderBody = useMemo(() => {
    return (
      <div className={classes.main}>
        <div className={"flex-column-start"} style={{ gap: "25px" }}>
          <span className={classes.heading}>Get In Touch</span>
          <p className={classes.subheading}>
            the quick fox jumps over the lazy dog
          </p>
          <div className={classes.icons}>
            <i
              className={`${"ri-facebook-circle-fill ri-xl"} ${classes.icon}`}
            />
            <i className={`${"ri-instagram-line ri-xl"} ${classes.icon}`} />
            <i className={`${"ri-twitter-fill ri-xl"} ${classes.icon}`} />
          </div>
        </div>
        <div className={"flex-column-start"} style={{ gap: "20px" }}>
          <span className={classes.heading}>Company info</span>
          <div className="flex-column-start" style={{ gap: "10px" }}>
            <Link href={"#"} className={classes.subheadingBold}>
              About us
            </Link>
            <Link href={"#"} className={classes.subheadingBold}>
              Carrier
            </Link>
            <Link href={"#"} className={classes.subheadingBold}>
              We are hiring
            </Link>
            <Link href={"#"} className={classes.subheadingBold}>
              Blog
            </Link>
          </div>
        </div>
        <div className={"flex-column-start"} style={{ gap: "20px" }}>
          <span className={classes.heading}>Features</span>
          <div className="flex-column-start" style={{ gap: "10px" }}>
            <Link href={"#"} className={classes.subheadingBold}>
              About us
            </Link>
            <Link href={"#"} className={classes.subheadingBold}>
              Carrier
            </Link>
            <Link href={"#"} className={classes.subheadingBold}>
              We are hiring
            </Link>
            <Link href={"#"} className={classes.subheadingBold}>
              Blog
            </Link>
          </div>
        </div>
        <div className={"flex-column-start"} style={{ gap: "20px" }}>
          <span className={classes.heading}>Resources</span>
          <div className="flex-column-start" style={{ gap: "10px" }}>
            <Link href={"#"} className={classes.subheadingBold}>
              About us
            </Link>
            <Link href={"#"} className={classes.subheadingBold}>
              Carrier
            </Link>
            <Link href={"#"} className={classes.subheadingBold}>
              We are hiring
            </Link>
            <Link href={"#"} className={classes.subheadingBold}>
              Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }, []);
  return <Background body={renderBody} />;
};

export default Footer;
