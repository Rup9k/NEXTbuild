import React, { useState } from "react";
import { register } from "../api/auth";
import "../components/Register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    
    // Простая валидация
    if (!username.trim() || !email.trim() || !password.trim()) {
      setMessage("Пожалуйста, заполните все поля");
      setLoading(false);
      return;
    }
    
    try {
      await register(username, email, password);
      setMessage("✅ Регистрация успешна! Теперь вы можете войти.");
      
      // Очистка формы
      setUsername("");
      setEmail("");
      setPassword("");
      
      // Перенаправление на логин через 2 секунды
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
      
    } catch (error) {
      console.error("Ошибка регистрации:", error);
      
       // Более информативные сообщения об ошибках
      if (error.response?.status === 400) {
        if (error.response.data?.username) {
          setMessage("❌ Имя пользователя уже занято");
        } else if (error.response.data?.email) {
          setMessage("❌ Email уже используется");
        } else {
          setMessage("❌ Проверьте введенные данные");
        }
      } else {
        setMessage("❌ Ошибка регистрации");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="register-header">
          <h1>Регистрация</h1>
          <p>Создайте новый аккаунт</p>
        </div>

        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label htmlFor="username">Имя пользователя *</label>
            <input
              id="username"
              type="text"
              placeholder="Введите имя пользователя"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              id="email"
              type="email"
              placeholder="Введите ваш email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Пароль *</label>
            <input
              id="password"
              type="password"
              placeholder="Введите пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
          </div>

          <button type="submit" className="register-btn" disabled={loading}>
            {loading ? (
              <span>
                <span className="spinner"></span>
                Регистрация...
              </span>
            ) : "Зарегистрироваться"}
          </button>

          {message && (
            <div className={`message ${message.includes("✅") ? "success" : "error"}`}>
              {message}
            </div>
          )}
        </form>

        <div className="register-footer">
          <span>Уже есть аккаунт?</span>
          <a href="/login">Войти в систему</a>
        </div>
      </div>
    </div>
  );
};

export default Register;