import api from "./axios";

export const getProducts = async () => {
  try {
    const response = await api.get("products/"); 
    return response.data;
  } catch (error) {
    console.error("Ошибка загрузки товаров:", error);
    
    // Если 401 ошибка (нет авторизации), возвращаем пустой массив
    if (error.response?.status === 401) {
      console.log("Требуется авторизация. Возвращаем пустой массив.");
      return [];
    }
    
    // Если другая ошибка, пробрасываем дальше
    throw error;
  }
};