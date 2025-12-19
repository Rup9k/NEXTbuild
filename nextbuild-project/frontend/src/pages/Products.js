import React, { useEffect, useState } from "react";
import { getProducts } from "../api/products";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Товары</h1>

      {products.length === 0 && <p>Товаров пока нет</p>}

      {products.map((product) => (
        <div key={product.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <strong>Цена: {product.price}</strong>
        </div>
      ))}
    </div>
  );
};

export default Products;
