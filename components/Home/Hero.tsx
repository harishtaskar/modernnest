import React, { useMemo } from "react";
import classes from "../css/Hero.module.css";
import Background from "../HOC/Background";

type Props = {};

const Hero = (props: Props) => {
  const renderBody = useMemo(() => {
    return (
      <div className={classes.main}>
        {/* //image 1 */}
        <div className={classes.first}>
          <div className={classes.info}>
            <span className={classes.notification}>item 5</span>
            <span className={classes.heading}>Crockery</span>
            <span className={classes.subheading}>Read more</span>
          </div>
        </div>
        <div className={classes.second}>
          {/* //image 2 */}
          <div className={classes.img2}>
            <div className={classes.info}>
              <span className={classes.notification}>item 3</span>
              <span className={classes.heading}>Planterette</span>
              <span className={classes.subheading}>Read more</span>
            </div>
          </div>
          <div className={classes.third}>
            {/* //image 3 */}
            <div className={classes.img3}>
              <div className={classes.info}>
                <span className={classes.notification}>item 6</span>
                <span className={classes.heading}>Office Furniture</span>
                <span className={classes.subheading}>Read more</span>
              </div>
            </div>
            {/* //image 4 */}
            <div className={classes.img4}>
              <div className={classes.info}>
                <span className={classes.notification}>item 4</span>
                <span className={classes.heading}>Dining Furniture</span>
                <span className={classes.subheading}>Read more</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }, []);
  return <Background body={renderBody} />;
};

export default Hero;
