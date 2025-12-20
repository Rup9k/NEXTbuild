import React, { useState } from "react";
import { login } from "../api/auth";
import "../components/Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    
    // Простая валидация
    if (!username.trim() || !password.trim()) {
      setMessage("Пожалуйста, заполните все поля");
      setLoading(false);
      return;
    }
    
    try {
      const data = await login(username, password);
      
      // Сохранение токенов
      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);
      
 // Проверка на админа (зависит от ответа сервера)
  
  if (data.is_admin === true) {
    localStorage.setItem("isAdmin", "true");
    console.log("Пользователь - администратор");
  } else {
    localStorage.setItem("isAdmin", "false");
  }

      // Сохраняем имя пользователя для отображения
      localStorage.setItem("username", username);
      
      setMessage("✅ Успешный вход! Перенаправляем...");
      
      // Редирект на главную через 1.5 секунды
      setTimeout(() => {
        window.location.href = "/";
      }, 1500);
      
    } catch (error) {
      console.error("Ошибка входа:", error);
      
      // Более информативные сообщения об ошибках
      if (error.response) {
        if (error.response.status === 401) {
          setMessage("❌ Неверное имя пользователя или пароль");
        } else if (error.response.status === 400) {
          setMessage("❌ Проверьте введенные данные");
        } else {
          setMessage("❌ Ошибка сервера. Попробуйте позже");
        }
      } else if (error.request) {
        setMessage("❌ Нет ответа от сервера. Проверьте подключение");
      } else {
        setMessage("❌ Ошибка входа. Проверьте данные");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Заголовок  */}
        <div className="login-header">
          <h1>Вход в аккаунт</h1>
          <p>Введите свои данные для доступа к системе</p>
        </div>

        {/* Форма */}
        <form onSubmit={handleSubmit} className="login-form">
          {/* Поле имени пользователя */}
          <div className="form-group">
            <label htmlFor="username">Имя пользователя</label>
            <input
              id="username"
              type="text"
              placeholder="Введите имя пользователя"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={loading}
              autoComplete="username"
            />
          </div>

          {/* Поле пароля */}
          <div className="form-group">
            <label htmlFor="password">Пароль</label>
            <input
              id="password"
              type="password"
              placeholder="Введите пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              autoComplete="current-password"
            />
            <div className="forgot-password">
              <a href="/forgot-password">Забыли пароль?</a>
            </div>
          </div>

          {/* Кнопка входа */}
          <button 
            type="submit" 
            className="login-btn" 
            disabled={loading}
          >
            {loading ? (
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg style={{ marginRight: '8px', animation: 'spin 1s linear infinite' }} width="20" height="20" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.25"/>
                  <path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"/>
                </svg>
                Вход...
              </span>
            ) : "Войти в систему"}
          </button>

          {/* Сообщение об ошибке/успехе */}
          {message && (
            <div className={`message ${message.includes("✅") ? "success" : "error"}`}>
              {message}
            </div>
          )}
        </form>

        {/* Ссылка на регистрацию */}
        <div className="login-footer">
          <span>Еще нет аккаунта?</span>
          <a href="/register">Создать аккаунт</a>
        </div>
      </div>
    </div>
  );
};

export default Login;