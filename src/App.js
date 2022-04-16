import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Login from "./components/login/Login";
import Users from "./components/users/Users";
import Orders from "./components/orders/Orders";
import HomePage from './pages/home-page/HomePage';
import Products from "./components/products/Products";
import AppHeader from "./components/app-header/AppHeader";
import AppSidebar from "./components/app-sidebar/AppSidebar";
import ProtectedRoute from "./ProtectedRoute";
import CategoriesPage from "./pages/categories-page/CategoriesPage";


function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <AppSidebar />
        <div className="flex column">
          <AppHeader />
          <hr />
        <Routes>
          <Route path="/" element={<Login />}/>

          <Route element ={<ProtectedRoute />}>
            <Route path="/homepage" element={<HomePage />}/>
            <Route path="/categories" element={<CategoriesPage/>} />
            <Route path="/orders" element={<Orders/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/users" element={<Users/>} />
            <Route path="/login" element={<Login/>} />
          </Route>
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
