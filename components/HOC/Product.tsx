import React from "react";
import classes from "../css/FeatureProducts.module.css";
import Image from "next/image";

type Props = {
  title: string;
  image: string;
  description: string;
  rating: number;
  oldPrice: number;
  newPrice: number;
};

const Product = ({
  title,
  image,
  description,
  rating,
  oldPrice,
  newPrice,
}: Props) => {
  const limitedTitle =
    title.length > 25 ? title.substring(0, 25) + "..." : title;
  const limitedDesc =
    description.length > 90
      ? description.substring(0, 90) + "..."
      : description;
  return (
    <div className={classes.product}>
      <Image
        src={image}
        alt="product"
        className={classes.image}
        width={400}
        height={400}
      />
      <div className={classes.info}>
        <span className={classes.title}>{limitedTitle}</span>
        <p className={classes.description}>{limitedDesc}</p>
        <p className={classes.prices}>
          <span className={classes.oldPrice}>${oldPrice}</span>
          <span className={classes.newPrice}>${newPrice}</span>
        </p>
        <div className="flex-row-start" style={{ gap: "8px" }}>
          <div className={classes.rating}>
            <i className="ri-star-fill" style={{ color: "#FFCE31" }}></i>
            <p>{rating}</p>
          </div>
          <div className={classes.outlineBtn} style={{ borderRadius: "50px" }}>
            <i className="ri-heart-3-line ri-xl"></i>
          </div>
          <div className={classes.outlineBtn}>
            <i className="ri-shopping-cart-2-line"></i>
            Add
          </div>
          <div
            className={classes.outlineBtn}
            style={{ gap: "0px", paddingLeft: "10px" }}
          >
            View
            <i className="ri-arrow-right-s-line"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
