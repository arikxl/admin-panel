import { BrowserRouter, Routes, Route } from "react-router-dom";


import './App.css';
import AppHeader from "./components/app-header/AppHeader";
import AppSidebar from "./components/app-sidebar/AppSidebar";
import Orders from "./components/orders/Orders";
import Products from "./components/products/Products";
import Users from "./components/users/Users";
import CategoriesPage from "./pages/categories-page/CategoriesPage";

import HomePage from './pages/home-page/HomePage';

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
      <AppSidebar />

      <div className="flex column">
        <AppHeader />
        
        <hr />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/categories" element={<CategoriesPage/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/users" element={<Users/>} />
        </Routes>
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
