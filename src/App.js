import { useDispatch, useSelector } from "react-redux";
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
import AddProduct from "./pages/add-product-page/AddProduct";
import EditProductPage from "./pages/edit-product-page/EditProductPage";
import { useEffect } from "react";
import { listProducts } from "./redux/actions/productActions";
import { listOrders } from "./redux/actions/orderActions";
import OrderDetails from "./pages/edit-order-page/OrderDetails";


function App() {
  const dispatch = useDispatch();
  const userLogin = useSelector(state => state.userLogin).userInfo;

  useEffect(()=>{
    if(userLogin && userLogin.isAdmin){
      dispatch(listProducts());
      dispatch((listOrders()));
    }
  },[dispatch, userLogin]);

  return (
    <BrowserRouter>
          <AppHeader />
      <div className="flex">
        <AppSidebar />
        <div className="flex column">
          <hr />
        <Routes>
          <Route path="/" element={<Login />}/>

          <Route element ={<ProtectedRoute />}>
            <Route path="/homepage" element={<HomePage />}/>
            <Route path="/categories" element={<CategoriesPage/>} />
            <Route path="/orders" element={<Orders/>} />
            <Route path="/order/:id" element={<OrderDetails/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/users" element={<Users/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/addProduct" element={<AddProduct form='create'/>} />
            <Route path="/product/:id/edit" element={<AddProduct form='edit'/>} />
          </Route>
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
