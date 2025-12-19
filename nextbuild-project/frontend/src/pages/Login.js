import React, { useState } from "react";
import { login } from "../api/auth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(username, password);
      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);
      setMessage("Вход выполнен!");
    } catch (error) {
      setMessage("Ошибка входа");
    }
  };

  return (
    <div>
      <h1>Вход</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Имя пользователя"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br />

        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />

        <button type="submit">Войти</button>
      </form>

      <p>{message}</p>
    </div>
  );
};

export default Login;
