import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../api/auth";

const Header = () => {
  const navigate = useNavigate();
  const isAuth = !!localStorage.getItem("access");

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav style={{ marginBottom: "20px" }}>
      <Link to="/">Главная</Link>{" "}
      <Link to="/products">Товары</Link>{" "}
      <Link to="/news">Новости</Link>{" "}

      {!isAuth ? (
        <>
          <Link to="/login">Вход</Link>{" "}
          <Link to="/register">Регистрация</Link>
        </>
      ) : (
        <button onClick={handleLogout}>Выход</button>
      )}
      {isAuth && <Link to="/admin">Админка</Link>}

    </nav>
  );
};

export default Header;
