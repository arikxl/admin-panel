import React from 'react'
import AppHeader from '../../components/app-header/AppHeader'
import AppSidebar from '../../components/app-sidebar/AppSidebar'
import Login from '../../components/login/Login'

import { BrowserRouter, Routes, Route } from "react-router-dom";


// import AppHeader from "./components/app-header/AppHeader";
// import AppSidebar from "./components/app-sidebar/AppSidebar";
// import Login from "./components/login/Login";
import Orders from "../../components/orders/Orders";
import Products from "../../components/products/Products";
import Users from "../../components/users/Users";
import CategoriesPage from "../categories-page/CategoriesPage";

// import HomePage from './pages/home-page/HomePage';

const HomePage = () => {
  return (
      <div>
        <div className="flex">
          {/* <AppSidebar /> */}

          <div className="flex column">

            {/* <AppHeader /> */}
            <hr />
            home page
          </div>
        </div>
      </div>

  )
}

export default HomePage;



// const HomePage = () => {
//   return (
//       <div>
//         <div className="flex">
//           <AppSidebar />

//           <div className="flex column">

//             <AppHeader />
//             <hr />
//             home page
//           </div>
//         </div>
//       </div>

//   )
// }