import React, { useMemo } from "react";
import Background from "../HOC/Background";
import classes from "../css/FeatureProducts.module.css";
import products from "../Products.json";
import Product from "../HOC/Product";

const FeatureProducts = () => {
  const renderBody = useMemo(() => {
    return (
      <div className={classes.body}>
        {products.map((product, index) => {
          return (
            <Product
              description={product.description}
              image={product.images[0]}
              newPrice={product.newPrice}
              oldPrice={product.oldPrice}
              rating={product.rating}
              title={product.title}
              key={index}
            />
          );
        })}
      </div>
    );
  }, []);
  return <Background body={renderBody} />;
};

export default FeatureProducts;
