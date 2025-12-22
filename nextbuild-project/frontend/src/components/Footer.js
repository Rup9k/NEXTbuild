import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Логотип и копирайт */}
        <div className="footer-logo">
          <div>
            <Link to="/" className="footer-logo-text">
              NEXTbuild
            </Link>
            <div className="footer-copyright">
              © {currentYear} Все права защищены
            </div>
          </div>
        </div>

        {/* Навигация */}
        <nav className="footer-nav">
          <Link to="/" className="footer-link">
            Главная
          </Link>
          <Link to="/news" className="footer-link">
            Новости
          </Link>
          <Link to="/contact" className="footer-link">
            Контакты
          </Link>
        </nav>

        {/* Контакты */}
        <div className="footer-contacts">
          <p>Email: info@nextbuild.ru</p>
          <p>Телефон: +7 (777) 777-77-77</p>
          <p>Бикини-Боттом, ул. Ананасова, 123</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;