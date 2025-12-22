import React from "react";
import { Link } from "react-router-dom";
import "../components/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Заголовок */}
      <div className="home-header">
        <h1 className="home-title">NEXTbuild — Ваш надежный помошник</h1>
        <p className="home-subtitle">
          Мы специализируемся на продаже современных и качественных
          интрументов и расходников, а также консультации в подборе
          товара по вашему запросу.
        </p>
      </div>

      {/* Статистика */}
      <div className="stats">
        <div className="stat-item">
          <div className="stat-number">5+</div>
          <div className="stat-label">Лет опыта</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">100+</div>
          <div className="stat-label">Клиентов</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">50+</div>
          <div className="stat-label">Специалистов на связи</div>
        </div>
      </div>

      {/* Наши преимущества */}
      <div className="features">
        <div className="feature-card">
          <h3 className="feature-title">Лучшие специалисты</h3>
          <p className="feature-description">
            Наши специалисты всегда помогут вам если у вас возникли
            трудности с выбором инструмента или расходника.
          </p>
        </div>
        
        <div className="feature-card">
          <h3 className="feature-title">Качественные товар</h3>
          <p className="feature-description">
            Мы закупаем товары только у компаний с высоким рейтингом,
            при выборе товара вы никогда не останетесь недовольным.
          </p>
        </div>
        
        <div className="feature-card">
          <h3 className="feature-title">Круглосуточная поддержка</h3>
          <p className="feature-description">
            У нас вы никогда не останитесь без ответа, мы всегда
            на связи и обеспечим консультацию по вашему вопросу.
          </p>
        </div>
      </div>

      <div className="cta-buttons">
        <Link to="/products" className="cta-button primary">
          Посмотреть товары
        </Link>
        
        <Link to="/news" className="cta-button secondary">
          Читать новости
        </Link>
      </div>
    </div>
  );
};

export default Home;