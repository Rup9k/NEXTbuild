import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from './components/Footer';


import Home from "./pages/Home";
import Products from "./pages/Products";
import News from "./pages/News";
import Contact from './pages/Contact';
import Login from "./pages/Login";
import Register from "./pages/Register";

import Admin from "./pages/Admin";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
       <Footer />
    </BrowserRouter>
  );
}

export default App;
