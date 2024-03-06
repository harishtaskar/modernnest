import React, { useEffect, useMemo, useState } from "react";
import Background from "../HOC/Background";
import classes from "../css/FeatureProducts.module.css";
// import products from "../Products.json";
import Product from "../HOC/Product";
import useNetwork from "@/hooks/useNetwork";
import { PORT } from "@/utils/config";

const FeatureProducts = () => {
  const [products, setProducts] = useState<any[]>([]);
  const { getRequest } = useNetwork();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getRequest(`${PORT}/product`, {});
      setProducts(response.products);
    };
    fetchProducts();
  }, []);

  const renderBody = useMemo(() => {
    return (
      <div className={classes.body}>
        {products?.map((product, index) => {
          return (
            <Product
              description={product.description}
              image={product.images[0]}
              newPrice={product.price}
              oldPrice={product.price + 10}
              rating={5}
              title={product.name}
              key={index}
            />
          );
        })}
      </div>
    );
  }, [products]);
  return <Background body={renderBody} />;
};

export default FeatureProducts;
