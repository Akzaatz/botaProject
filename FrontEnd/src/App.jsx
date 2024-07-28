import React from "react";
import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import Index from "./pages/index/Index";
import Blog from "./pages/blog/Blog";
import Boutique from "./pages/boutique/Boutique";
import Signin from "./pages/signin/Signin";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/boutique" element={<Boutique />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
