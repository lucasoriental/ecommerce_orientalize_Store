"use client";

import { useState, useEffect } from "react";
import { getAllProducts } from "@/app/api/products";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((data) => {
        setProducts(data);
        console.log(data);
        console.log(
          data
            .filter((product) => product.price < 50)
            .sort((a, b) => a.price - b.price)
            .slice(0, 5)
        );
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  console.log("Products:", products);

  return (
    <div>
      <h1>Produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
