import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { logout } from "../api/auth";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isAuth = !!localStorage.getItem("access");
  

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">NEXTbuild</Link>

        <nav className="nav">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
          >
            Главная
          </Link>
          
          <Link 
            to="/products" 
            className={`nav-link ${location.pathname === "/products" ? "active" : ""}`}
          >
            Товары
          </Link>
          
          <Link 
            to="/news" 
            className={`nav-link ${location.pathname === "/news" ? "active" : ""}`}
          >
            Новости
          </Link>

          <Link 
            to="/contact" 
            className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}
>
            Контакты
          </Link>
        </nav>

        <div className="auth-buttons">
          {!isAuth ? (
            <>
              <Link to="/login" className="login-btn">Вход</Link>
              <Link to="/register" className="register-btn">Регистрация</Link>
            </>
          ) : (
            <>
                <Link to="/admin" className="admin-btn">Админка</Link>
              <button onClick={handleLogout} className="logout-btn">
                Выход
              </button>
            </>
          )}
        </div>
        
      </div>
    </header>
  );
};

export default Header;