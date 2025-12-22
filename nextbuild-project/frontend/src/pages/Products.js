import React, { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import "../components/Products.css"; // Импортируем стили

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    
    getProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Ошибка загрузки товаров:", error);
        setError("Не удалось загрузить товары. Проверьте подключение к серверу.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Форматирование цены
  const formatPrice = (price) => {
    if (!price) return "Цена не указана";
    
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="products-container">
      <h1 className="products-title">Товары</h1>
      
      {error && (
        <div style={{
          background: "#fee",
          border: "1px solid #fcc",
          color: "#c00",
          padding: "15px",
          borderRadius: "8px",
          marginBottom: "20px",
          textAlign: "center"
        }}>
          Ошибка {error}
        </div>
      )}

      {loading ? (
        <div className="loading">
          <div className="spinner"></div>
          Загрузка товаров...
        </div>
      ) : products.length === 0 ? (
        <div className="no-products">
          Товаров пока нет
        </div>
      ) : (
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <h3 className="product-title">{product.title || "Без названия"}</h3>
              
              {product.description && (
                <p className="product-description">
                  {product.description}
                </p>
              )}
              
              <div className="product-price">
                {formatPrice(product.price)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;