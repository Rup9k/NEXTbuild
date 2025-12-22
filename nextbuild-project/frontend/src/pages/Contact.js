import React from "react";
import "../components/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1 className="contact-title">Контакты</h1>
        
        <div className="contact-info">
          <div className="contact-item">
            <h3>Телефон</h3>
            <p>+7 (777) 777-77-77</p>
          </div>
          
          <div className="contact-item">
            <h3>Email</h3>
            <p>info@nextbuild.ru</p>
          </div>
          
          <div className="contact-item">
            <h3>Адрес</h3>
            <p>Бикини-Боттом, ул. Ананасова, 123</p>
          </div>
          
          <div className="contact-item">
            <h3>Часы работы</h3>
            <p>Пн-Пт: 9:00 - 21:00</p>
          </div>
        </div>
        
        <div className="contact-map">
          <h3>Мы на карте</h3>
          <div className="map-placeholder">
            {/* Здесь должна быть карта */}
            Карта будет здесь
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;